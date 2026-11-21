// LaTeX-tankönyv generátor: a példatárak adataiból (html/data) a tankönyvsablon stílusában.
// Használat: node build_tex.js [main|allin|otos|mind]   kimenet: ../Tankonyv/
'use strict';
const fs = require('fs'), path = require('path');
const { explain } = require('./data/_gloss_core.js');
const { glossFor } = require('./data/_gloss.js');
const { JEL } = require('./data/_jel.js');
const { scan, texOf } = require('./data/_symscan.js');
const RAJZ = require('./data/_rajz.js');

const OUT = path.join(__dirname, '..', 'Tankonyv');
const BOOKS = {
  main: { file: 'infokomm_tankonyv', chapters: ['ch02', 'ch06'], title: 'Infokomm példatár', head: 'Infokomm példatár',
    sub: 'Gyakorlati tankönyv', desc: 'Mintavételezés és kvantálás, kódolástechnika', src: 'Az előadás, a gyakorlatok, a tanszéki füzet és a régi vizsgák alapján, minden eredmény újraszámolva.' },
  allin: { file: 'allin_tankonyv', chapters: ['ai01', 'ai02', 'ai03', 'ai04', 'ai05', 'ai06', 'ai07', 'ai08', 'ai09', 'ai10', 'ai11'], title: 'ALL-IN példatár', head: 'ALL-IN példatár',
    sub: 'Gyakorlati tankönyv', desc: 'Jelek, mintavételezés, rádiós terjedés, kódolás, analóg és digitális moduláció, PAM, hang és kép, műsorszórás, GSM, forgalom', src: 'Az ALL-IN hallgatói gyűjtemény (Moodle-vizsgák 2020, vizsgamegoldások 2014 és 2016 között, témakörös feladatgyűjtemény) alapján, minden eredmény újraszámolva.' },
  otos: { file: 'otosom_tankonyv', chapters: ['o01', 'o02', 'o03', 'o04', 'o05', 'o06', 'o07', 'o08', 'o09', 'o10'], title: '5-ösöm példatár', head: '5-ösöm példatár',
    sub: 'Gyakorlati tankönyv', desc: 'Az „5-ösöm lesz Infokommból” gyűjtemény minden feladata témakörönként', src: 'Az „5-ösöm lesz Infokommból” hallgatói gyűjtemény és a beszkennelt oktatói megoldások alapján, minden eredmény újraszámolva.' }
};
const MKNAME = ['törvény', 'definíció', 'tétel', 'szimmetria', 'geometria', 'behelyettesítés', 'átalakítás', 'integrálás', 'deriválás', 'közelítés', 'ellenőrzés', 'számérték'];
const PROBLEMS = [];

// ---------- karakterek ----------
const GREEK = { 'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta', 'ε': 'varepsilon', 'η': 'eta', 'θ': 'theta', 'λ': 'lambda', 'μ': 'mu', 'ν': 'nu', 'π': 'pi', 'ρ': 'rho', 'σ': 'sigma', 'τ': 'tau', 'φ': 'varphi', 'ω': 'omega', 'Γ': 'Gamma', 'Δ': 'Delta', 'Θ': 'Theta', 'Λ': 'Lambda', 'Π': 'Pi', 'Σ': 'Sigma', 'Φ': 'Phi', 'Ω': 'Omega' };
const TXT = { '·': '$\\cdot$', '…': '\\ldots{}', '°': '\\textdegree{}', 'µ': '\\textmu{}', '→': '$\\to$', '←': '$\\leftarrow$', '↔': '$\\leftrightarrow$', '−': '$-$', '≈': '$\\approx$', '²': '\\textsuperscript{2}', '³': '\\textsuperscript{3}',
  '×': '$\\times$', '✓': '$\\checkmark$', '⊕': '$\\oplus$', '①': '(1)', '②': '(2)', '③': '(3)', '≅': '$\\cong$', '⇒': '$\\Rightarrow$', 'ᵏ': '\\textsuperscript{k}', 'ⁿ': '\\textsuperscript{n}', '≤': '$\\le$', '≥': '$\\ge$', '≠': '$\\ne$',
  '⁻': '\\textsuperscript{$-$}', '⌊': '$\\lfloor$', '⌋': '$\\rfloor$', '⁶': '\\textsuperscript{6}', '⁸': '\\textsuperscript{8}', '₀': '$_0$', '₁': '$_1$', '₂': '$_2$', '√': '$\\surd$', 'ᵥ': '$_v$', 'ₛ': '$_s$', '∝': '$\\propto$', 'ℱ': '$\\mathcal F$', '±': '$\\pm$', '∞': '$\\infty$', '∈': '$\\in$', '∑': '$\\sum$', ' ': '~', ' ': '\\,' };
for (const [g, c] of Object.entries(GREEK)) TXT[g] = '$\\' + c + '$';
const MATHU = { '°': '^{\\circ}', '−': '-', '·': '\\cdot ', '…': '\\ldots ', '≈': '\\approx ', '×': '\\times ', '≤': '\\le ', '≥': '\\ge ', '→': '\\to ', '⇒': '\\Rightarrow ', 'µ': '\\mu ', '±': '\\pm ', '√': '\\surd ', '∞': '\\infty ', '’': "'", ' ': '\\ ', '⊕': '\\oplus ', '∝': '\\propto ', 'ₛ': '_s' };
for (const [g, c] of Object.entries(GREEK)) MATHU[g] = '\\' + c + ' ';

function escText(s) {
  return String(s).replace(/[\\{}&%#_^~$]/g, c => ({ '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}', '&': '\\&', '%': '\\%', '#': '\\#', '_': '\\_', '^': '\\^{}', '~': '\\textasciitilde{}', '$': '\\$' })[c])
    .replace(/[^\x00-\x7eáéíóöőúüűÁÉÍÓÖŐÚÜŰ„”“‘’–—ûêĉäëçà]/g, c => TXT[c] !== undefined ? TXT[c] : (PROBLEMS.push('ismeretlen karakter: ' + c + ' (U+' + c.charCodeAt(0).toString(16) + ')'), c));
}
// KaTeX-szöveg LaTeX-re: \text{} tartalma szövegként, a többi unicode matematikai paranccsá
function mathFix(t) {
  t = String(t).replace(/\\(text|textbf|mathrm|operatorname)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, (m, cmd, body) => {
    if (cmd === 'mathrm' || cmd === 'operatorname') return '\\' + cmd + '{' + body.replace(/[^\x00-\x7e]/g, c => MATHU[c] || c) + '}';
    return '\\' + cmd + '{' + body.replace(/\$([^$]*)\$/g, '\u0003$1\u0004').replace(/\\([%&#_{}$ ])/g, '\u0005$1').replace(/[^\x00-\x7eáéíóöőúüűÁÉÍÓÖŐÚÜŰ„”]/g, c => TXT[c] || c).replace(/\u0003/g, '$').replace(/\u0004/g, '$').replace(/\u0005/g, '\\') + '}';
  });
  t = t.replace(/[^\x00-\x7e]/g, (c, i) => MATHU[c] !== undefined ? MATHU[c] : c);
  // KaTeX-ben működő, LaTeX-ben hiányzó rövidítések
  t = t.replace(/\\R\b/g, '\\mathbb{R}').replace(/\\N\b/g, '\\mathbb{N}');
  return t;
}
// szöveg (HTML és $…$) LaTeX-re
function H(s, opt) {
  if (s == null) return '';
  s = String(s);
  const math = [];
  s = s.replace(/<svg[\s\S]*?<\/svg>/g, m => { math.push('\\begin{center}' + svg2tikz(m) + '\\end{center}'); return '\u0001' + (math.length - 1) + '\u0002'; });
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => { math.push(dispMath(t.trim(), opt)); return '\u0001' + (math.length - 1) + '\u0002'; });
  s = s.replace(/\$([^$]+?)\$/g, (_, t) => { math.push('$' + mathFix(opt && opt.color ? opt.color(t) : t) + '$'); return '\u0001' + (math.length - 1) + '\u0002'; });
  s = s.replace(/<table[\s\S]*?<\/table>/g, m => { math.push(table2tex(m, opt)); return '\u0001' + (math.length - 1) + '\u0002'; });
  // címkék
  const tagRe = /<\/?(p|b|strong|i|em|br|ul|ol|li|span|div|a|header|h3|h4|small|sup|sub|code)\b[^>]*>/g;
  const parts = []; let last = 0, m;
  while ((m = tagRe.exec(s))) { parts.push(['t', s.slice(last, m.index)]); parts.push(['g', m[0]]); last = tagRe.lastIndex; }
  parts.push(['t', s.slice(last)]);
  let o = '';
  for (const [k, v] of parts) {
    if (k === 't') { o += codeSpans(v.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"')).replace(/</g, '$<$').replace(/>/g, '$>$'); continue; }
    const tag = v.match(/^<(\/?)(\w+)/), close = tag[1] === '/', n = tag[2];
    if (n === 'p' || n === 'div' || n === 'header') o += close ? '\n\n' : '\n\n';
    else if (n === 'b' || n === 'strong') o += close ? '}' : '\\textbf{';
    else if (n === 'i' || n === 'em') o += close ? '}' : '\\emph{';
    else if (n === 'code') o += close ? '}' : '\\texttt{';
    else if (n === 'sup') o += close ? '}' : '\\textsuperscript{';
    else if (n === 'sub') o += close ? '}' : '\\textsubscript{';
    else if (n === 'small') o += close ? '}' : '{\\small ';
    else if (n === 'br') o += '\\newline ';
    else if (n === 'ul') o += close ? '\\end{itemize}\n' : '\n\\begin{itemize}\n';
    else if (n === 'ol') o += close ? '\\end{enumerate}\n' : '\n\\begin{enumerate}\n';
    else if (n === 'li') o += close ? '\n' : '\\item ';
    else if (n === 'h3' || n === 'h4') o += close ? '}\\par\n' : '\n\n\\textbf{';
  }
  o = o.replace(/\u0001(\d+)\u0002/g, (_, i) => math[+i]);
  return o.replace(/\n{3,}/g, '\n\n').trim();
}
function dispMath(t, opt) {
  const tex = mathFix(opt && opt.color ? opt.color(t) : t);
  return '\n\\begin{center}\\adjustbox{max width=\\linewidth}{$\\displaystyle ' + tex + '$}\\end{center}\n';
}
function table2tex(tb, opt) {
  const rows = [];
  tb.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/g, (_, r, i) => { const cells = []; r.replace(/<(t[hd])[^>]*>([\s\S]*?)<\/t[hd]>/g, (__, kind, c) => { cells.push([kind, H(c, opt)]); return ''; }); rows.push(cells); return ''; });
  if (!rows.length) return '';
  const n = Math.max(...rows.map(r => r.length));
  let o = '\n\\par\\noindent{\\small\\renewcommand{\\arraystretch}{1.25}\\begin{tabularx}{\\linewidth}{@{}' + '>{\\raggedright\\arraybackslash}X'.repeat(n) + '@{}}\\toprule\n';
  rows.forEach((r, i) => {
    const head = r.every(c => c[0] === 'th');
    o += r.map(c => head ? '\\textbf{' + c[1] + '}' : c[1]).concat(Array(n - r.length).fill('')).join(' & ') + '\\\\' + (head && i === 0 ? '\\midrule' : '') + '\n';
  });
  return o + '\\bottomrule\\end{tabularx}}\\par\n';
}

// ---------- SVG -> TikZ ----------
function attrs(s) { const a = {}; s.replace(/([\w-]+)="([^"]*)"/g, (_, k, v) => { a[k] = v; return ''; }); return a; }
function svgText(s) { return escText(String(s).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')).replace(/</g, '$<$').replace(/>/g, '$>$'); }
function style(cls, kind) {
  const c = (cls || '').split(/\s+/);
  const col = c.some(x => /^ac/.test(x)) ? 'cB' : c.some(x => /^bl/.test(x)) ? 'cA' : c.includes('gr') ? 'black!45' : 'black';
  if (c.includes('bj')) return 'fill=black!10,draw=none';
  if (c.includes('ba')) return 'fill=cB!15,draw=none';
  if (c.includes('bb')) return 'fill=cA!15,draw=none';
  const filled = c.some(x => /f$/.test(x) && x.length > 2);
  if (filled) return 'fill=' + col + ',draw=none';
  let st = 'draw=' + col + (c.includes('gr') ? ',line width=0.35pt' : c.includes('ob') ? ',line width=0.7pt' : ',line width=0.8pt');
  if (c.includes('dash')) st += ',dash pattern=on 3pt off 2pt';
  if (kind === 'closed' && !filled) st += ',fill=none';
  return st;
}
function pathD(d) {
  const tok = d.match(/[MLHVZmlhvz]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
  let i = 0, x = 0, y = 0, sx = 0, sy = 0, cmd = 'M', out = '';
  const num = () => parseFloat(tok[i++]);
  while (i < tok.length) {
    if (/[A-Za-z]/.test(tok[i])) cmd = tok[i++];
    const c = cmd;
    if (c === 'Z' || c === 'z') { out += ' -- cycle'; x = sx; y = sy; continue; }
    if (c === 'M' || c === 'm') { const a = num(), b = num(); x = c === 'm' ? x + a : a; y = c === 'm' ? y + b : b; sx = x; sy = y; out += ' (' + f2(x) + ',' + f2(y) + ')'; cmd = c === 'm' ? 'l' : 'L'; continue; }
    if (c === 'L' || c === 'l') { const a = num(), b = num(); x = c === 'l' ? x + a : a; y = c === 'l' ? y + b : b; }
    else if (c === 'H' || c === 'h') { const a = num(); x = c === 'h' ? x + a : a; }
    else if (c === 'V' || c === 'v') { const a = num(); y = c === 'v' ? y + a : a; }
    else { PROBLEMS.push('ismeretlen path-parancs: ' + c); i++; continue; }
    out += ' -- (' + f2(x) + ',' + f2(y) + ')';
  }
  return out.replace(/\) \(/g, ') (');
}
const f2 = v => (Math.round(v * 10) / 10).toString();
function svg2tikz(svg) {
  const vb = (attrs(svg.match(/<svg[^>]*>/)[0]).viewBox || '0 0 680 220').split(/\s+/).map(Number);
  const [vx, vy, W, Hh] = vb;
  const u = Math.min(13.5 / W, 8 / Hh);
  let o = '\\begin{tikzpicture}[x=' + u.toFixed(5) + 'cm,y=-' + u.toFixed(5) + 'cm,line cap=round,line join=round]\n';
  o += '\\useasboundingbox (' + vx + ',' + vy + ') rectangle (' + (vx + W) + ',' + (vy + Hh) + ');\n';
  const re = /<(line|polyline|polygon|path|rect|circle|ellipse|text)\b([^>]*?)(?:\/>|>([\s\S]*?)<\/\1>)/g; let m;
  while ((m = re.exec(svg))) {
    const [, el, at, body] = m, a = attrs(at), cls = a.class || '';
    const sw = a['stroke-width'] ? ',line width=' + (parseFloat(a['stroke-width']) * 0.45).toFixed(2) + 'pt' : '';
    if (el === 'line') o += '\\path[' + style(cls) + sw + '] (' + f2(+a.x1) + ',' + f2(+a.y1) + ') -- (' + f2(+a.x2) + ',' + f2(+a.y2) + ');\n';
    else if (el === 'polyline' || el === 'polygon') {
      const p = a.points.trim().split(/\s+/).map(q => '(' + q.split(',').map(v => f2(+v)).join(',') + ')');
      o += '\\path[' + style(cls, el === 'polygon' ? 'closed' : '') + sw + '] ' + p.join(' -- ') + (el === 'polygon' ? ' -- cycle' : '') + ';\n';
    }
    else if (el === 'path') o += '\\path[' + style(cls) + sw + ']' + pathD(a.d) + ';\n';
    else if (el === 'rect') o += '\\path[' + style(cls) + (a.rx ? ',rounded corners=' + (parseFloat(a.rx) * u).toFixed(2) + 'cm' : '') + '] (' + a.x + ',' + a.y + ') rectangle (' + (+a.x + +a.width) + ',' + (+a.y + +a.height) + ');\n';
    else if (el === 'circle') o += '\\path[' + style(cls) + '] (' + f2(+a.cx) + ',' + f2(+a.cy) + ') circle[radius=' + (parseFloat(a.r) * u * (/f$/.test(cls) ? 1 : 1)).toFixed(3) + 'cm];\n';
    else if (el === 'ellipse') o += '\\path[' + style(cls) + '] (' + f2(+a.cx) + ',' + f2(+a.cy) + ') ellipse[x radius=' + (+a.rx * u).toFixed(3) + 'cm,y radius=' + (+a.ry * u).toFixed(3) + 'cm];\n';
    else if (el === 'text') {
      const anc = a['text-anchor'] === 'middle' ? 'base' : a['text-anchor'] === 'end' ? 'base east' : 'base west';
      const size = /\bbt\b/.test(cls) ? '\\small' : /\btm\b/.test(cls) ? '\\scriptsize' : '\\footnotesize';
      const col = /\bac/.test(cls) ? ',text=cB' : /\bbl/.test(cls) ? ',text=cA' : '';
      o += '\\node[anchor=' + anc + ',inner sep=0pt,font=' + size + col + '] at (' + f2(+a.x) + ',' + f2(+a.y) + ') {' + svgText(body) + '};\n';
    }
  }
  return o + '\\end{tikzpicture}';
}

// ---------- színezés: az adott mennyiségek jele és értéke ugyanabban a színben ----------
const COLS = ['ca', 'cb', 'cc', 'cd', 'ce'];
const UNITTAIL = /^\s*((?:[kMGµmnp]?(?:Hz|V|W|s|m|Pa|bit|Bd|Erl|dB|dBW|dBV|dBm|rad|Ω|byte|perc|óra|km²|m²|km|cm|nm|°|%|mV|µs|ms|ns|kbit\/s|Mbit\/s|bit\/s|Bd))(?:\/[a-zA-Záéíóöőúüű]+)?)/;
function givenValues(e) {
  const out = [];
  for (const item of e.ad || []) {
    const re = /\$([^$]+)\$/g; let m;
    while ((m = re.exec(item))) {
      const parts = m[1].split(/=/).map(x => x.trim());
      if (parts.length < 2) continue;
      const sym = parts[0].replace(/\s+/g, ''), val = parts[parts.length - 1].replace(/\\[,;!]|\\ /g, ' ').trim();
      if (!/^[A-Za-z](?:_\{?[A-Za-z0-9]+\}?)?$/.test(sym)) continue;
      const vm = val.match(/^-?\d+(?:\{,\}\d+)?(?:\s*\\cdot\s*10\^\{?-?\d+\}?)?/);
      if (!vm) continue;
      const pre = /\\mu/.test(val.slice(vm[0].length)) ? 'µ' : '';
      let unit = pre + ((val.slice(vm[0].length).match(/\\(?:text|mathrm)\{([^}]*)\}/) || [])[1] || (item.slice(re.lastIndex).match(UNITTAIL) || [])[1] || '');
      out.push({ sym, val: vm[0], unit });
    }
  }
  return out;
}
function colorPlan(e) {
  const g = givenValues(e), seen = {};
  g.forEach(x => { seen[x.val] = (seen[x.val] || 0) + 1; });
  const used = [], bySym = {};
  for (const x of g) { if (bySym[x.sym] || used.length >= COLS.length) continue; x.col = COLS[used.length]; used.push(x); bySym[x.sym] = x; }
  const symRe = x => new RegExp('(^|[^A-Za-z\\\\_{])(' + x.sym.replace(/[\\{}^]/g, c => '\\' + c) + ')(?![A-Za-z0-9_{])', 'g');
  const valOk = x => seen[x.val] === 1 && x.val.replace(/[{},]/g, '').length >= 2 && !/^10$|^100$/.test(x.val);
  const valRe = x => new RegExp('(^|[^0-9}.,{])(' + x.val.replace(/[\\{}^.]/g, c => '\\' + c) + ')(?![0-9]|\\{,\\})', 'g');
  const color = t => {
    let s = t;
    for (const x of used) {
      s = s.replace(symRe(x), (m0, a, b) => a + '{\\' + x.col + '{' + b + '}}');
      if (valOk(x)) s = s.replace(valRe(x), (m0, a, b) => a + '{\\' + x.col + '{' + b + '}}');
    }
    return s;
  };
  const subs = t => used.filter(x => valOk(x) && valRe(x).test(t));
  return { used, bySym, color, subs };
}

// ---------- jelek a jeltáblához ----------
const symV = k => [...new Set([k, k.replace(/_\{?\d+\}?$/, ''), k.replace(/\^\{\(\d\)\}$/, ''), k.replace(/\(t\)$/, '')])];
const symTex = k => k.replace(/\\(hat|bar|mathcal|mathbf|mathsf)(?=[A-Za-z])/g, '\\$1 ');
function symbolRows(e, ch, plan) {
  const J = JEL[e.id] || {}, G = Object.assign(glossFor(ch._file), J);
  const look = sym => { const vs = [sym].concat(symV(sym)); const kj = vs.find(x => J[x] !== undefined); return kj !== undefined ? J[kj] : vs.map(x => G[x]).find(x => x !== undefined); };
  const rows = [], done = new Set();
  for (const item of e.ad || []) for (const t of texOf(item)) for (const sym of scan(t)) {
    if (done.has(sym)) continue; done.add(sym);
    const d = look(sym); if (!d) continue;
    const gv = plan.used.find(x => x.sym === sym) || givenValues({ ad: [item] }).find(x => x.sym === sym);
    rows.push([sym, d, gv ? gv.val + (gv.unit ? ' ' + gv.unit : '') : '']);
  }
  const have = new Set([...(e.ad || []), ...(e.ker || [])].flatMap(texOf).flatMap(scan));
  for (const t of (e.ker || []).flatMap(texOf)) for (const sym of scan(t)) { if (done.has(sym)) continue; done.add(sym); const d = look(sym); if (d) rows.push([sym, d, 'keresett']); }
  const body = [...texOf(e.task), ...e.lv.flatMap(s => [...texOf(s.t), ...texOf(s.s), ...(s.m || []).flatMap(r => [r[1], ...texOf(r[2])])]), ...e.ered.flatMap(x => /\$/.test(x) ? texOf(x) : [x])];
  for (const sym of new Set(body.flatMap(scan))) { if (have.has(sym) || done.has(sym)) continue; done.add(sym); const d = look(sym); if (d === undefined) PROBLEMS.push(e.id + ': magyarázat nélküli jel ' + sym); else if (d) rows.push([sym, d, '']); }
  return rows;
}
function valTex(v) {
  if (!v) return '';
  if (v === 'keresett') return '\\emph{keresett}';
  const m = v.match(/^(\S+)\s*(.*)$/);
  return '$' + mathFix(m[1]) + '$' + (m[2] ? '\\,' + escText(m[2]) : '');
}

// ---------- egy példa ----------
const pdfStr = s => String(s).replace(/\$([^$]*)\$/g, (_, t) => t.replace(/\\(sqrt)/g, '√').replace(/\\(mathbf|mathrm|text|tfrac|frac|left|right|,|;|\s)/g, '').replace(/\\/g, '').replace(/[{}_^]/g, '')).replace(/[\\{}&%#_^~$]/g, '');
const sectionTitle = s => '\\texorpdfstring{' + H(s) + '}{' + pdfStr(s).replace(/\s+/g, ' ') + '}';
function example(e, ch) {
  const plan = colorPlan(e);
  const G = Object.assign(glossFor(ch._file), JEL[e.id] || {});
  const ex1 = x => explain(x, G)[0];
  let o = '\n% ------------------------------------------------------------------\n';
  o += '\\section{' + sectionTitle(e.num + '. feladat: ' + e.title) + '}\\label{' + e.id + '}\n\\setcounter{lepes}{0}\n';
  const tags = (e.tags || []).map(t => ({ vizsga: 'vizsga', beugro: 'beugró', nehez: 'nehezebb', javitas: 'javítás', sajat: 'saját megoldás' })[t]).filter(Boolean);
  o += '\\begin{feladat}{' + e.num + '. feladat}\n' + H(e.task) + (e.fig ? '\n\\begin{center}' + svg2tikz(e.fig) + '\\end{center}\n' : '') + '\n\n{\\footnotesize\\sffamily Forrás: ' + H(e.src) + (tags.length ? '. Címkék: ' + escText(tags.join(', ')) : '') + '}\n\\end{feladat}\n';
  o += '\\begin{keresunk}\n\\begin{itemize}\n' + e.ker.map(x => '\\item ' + H(ex1(x))).join('\n') + '\n\\end{itemize}\n\\end{keresunk}\n';
  const rows = symbolRows(e, ch, plan);
  const adNoSym = (e.ad || []).filter(x => !texOf(x).some(t => /=/.test(t)));
  o += '\\begin{jeloles}\n';
  if (rows.length) o += '\\begin{jeltabla}\n' + rows.map(([s, d, v]) => { const c = plan.bySym[s] && plan.bySym[s].col; const st = '$' + mathFix(symTex(s)) + '$'; return (c ? '$\\' + c + '{' + mathFix(symTex(s)) + '}$' : st) + ' & ' + H(d) + ' & ' + valTex(v) + '\\\\'; }).join('\n') + '\n\\end{jeltabla}\n';
  if (adNoSym.length) o += '\\par\\smallskip\\textbf{Adott még:}\n\\begin{itemize}\n' + adNoSym.map(x => '\\item ' + H(ex1(x))).join('\n') + '\n\\end{itemize}\n';
  o += '\\end{jeloles}\n';
  if (e.miert) o += '\\begin{elmelet}[Miért így? Egyszerűen]\n' + e.miert.map(q => '\\textbf{' + H(q[0]) + '}\\par ' + H(q[1])).join('\n\n') + '\n\\end{elmelet}\n';
  if (e.elm) o += '\\begin{elmelet}[Felhasznált elmélet]\n' + e.elm.map(t => '\\textbf{' + H(t[0]) + '} ' + H(t[1]) + (t[2] ? dispMath(t[2]) : '')).join('\n\n') + '\n\\end{elmelet}\n';
  const copt = { color: plan.color };
  e.lv.forEach(st => {
    o += '\n\\lepes{' + H(st.t) + '}\n' + H(st.s, copt) + '\n';
    (st.m || []).forEach(r => {
      if (!MKNAME.includes(r[0])) PROBLEMS.push(e.id + ': ismeretlen jelölő ' + r[0]);
      const subs = r[0] === 'behelyettesítés' ? plan.subs(r[1]) : [];
      if (subs.length) o += '\\behely{' + subs.map(x => '\\bh{\\' + x.col + '{' + mathFix(x.sym) + '}}{\\' + x.col + '{' + mathFix(x.val) + (x.unit ? '\\un{' + escText(x.unit).replace(/\\textmu\{\}/g, '\\mu ') + '}' : '') + '}}').join(' ') + '}\n';
      o += dispMath(r[1], copt).replace(/\n$/, '') + (r[2] ? '\n\\jegyzet{' + r[0] + '}{' + H(r[2]) + '}' : '\n\\jegyzet{' + r[0] + '}{}') + '\n';
    });
  });
  const rz = e.rajz || RAJZT[e.id];
  if (rz) o += '\n\\begin{rajz}\n' + rz.map(r => (r.t ? '\\textbf{' + H(r.t) + '}\\par\n' : '') + '\\begin{center}' + svg2tikz(r.svg) + '\\end{center}\n' + (r.cap && r.cap.length ? '\\begin{itemize}\n' + r.cap.map(c => '\\item ' + H(c)).join('\n') + '\n\\end{itemize}\n' : '')).join('\n') + '\\end{rajz}\n';
  if (e.gy) o += '\\begin{tipp}[A gyűjtemény megoldása]\n' + H(e.gy) + '\n\\end{tipp}\n';
  if (e.fix) o += '\\begin{figyelem}[Javítás]\n' + H(e.fix) + '\n\\end{figyelem}\n';
  o += '\\begin{eredmeny}\n' + e.ered.map(x => dispMath(/\$/.test(x) ? x.replace(/\$/g, '') : x)).join('') + '\\end{eredmeny}\n';
  if (e.chk) o += '\\begin{tipp}[Ellenőrzés]\n\\begin{itemize}\n' + e.chk.map(x => '\\item ' + H(x)).join('\n') + '\n\\end{itemize}\n\\end{tipp}\n';
  if (e.hib) o += '\\begin{figyelem}[Tipikus hibák]\n\\begin{itemize}\n' + e.hib.map(x => '\\item ' + H(x)).join('\n') + '\n\\end{itemize}\n\\end{figyelem}\n';
  if (e.calc) o += '\\begin{tipp}[Saját számpélda (kiegészítés, a forrásban nem szerepel)]\n\\small\n\\begin{verbatim}\n' + e.calc.replace(/[^\x00-\x7eáéíóöőúüűÁÉÍÓÖŐÚÜŰ]/g, c => ({ '·': '*', '−': '-', '…': '...', '≈': '~', '√': 'sqrt', 'µ': 'u', '²': '^2', '→': '->', '×': 'x', 'α': 'alfa', 'β': 'beta', 'λ': 'lambda', 'π': 'pi', 'Ω': 'Ohm', '°': ' fok', '≤': '<=', '≥': '>=' })[c] || '?').split('\n').map(wrap80).join('\n') + '\n\\end{verbatim}\n\\end{tipp}\n';
  if (e.du && e.du.length) o += '\\begin{tipp}[Kapcsolat és analógia]\n' + table2tex('<table>' + e.du.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>') + '\\end{tipp}\n';
  return o;
}
// hosszú sorok tördelése a verbatim blokkban
function wrap80(l) { const out = []; let cur = ''; for (const w of l.split(' ')) { if ((cur + ' ' + w).trim().length > 80 && cur) { out.push(cur); cur = '  ' + w; } else cur = cur ? cur + ' ' + w : w; } out.push(cur); return out.join('\n'); }
function codeSpans(t) { return t.split('`').map((x, i) => i % 2 ? '\\texttt{' + escText(x) + '}' : escText(x)).join(''); }
// a rajzok TikZ-hez: ugyanazok az SVG-k (a _rajz.js már SVG-t ad)
const RAJZT = RAJZ;

// ---------- fejezet ----------
function chapter(ch) {
  let o = '% Generálva: html/build_tex.js (' + ch._file + '.js). Kézzel ne szerkeszd, a forrás a html/data mappa.\n';
  o += '\\setcounter{chapter}{' + (ch.num - 1) + '}\n\\chapter{' + sectionTitle(ch.title) + '}\\label{' + ch.id + '}\n' + H(ch.lead) + '\n';
  o += '\n\\section{Alapok, egyszerűen}\n' + ch.alap.map(a => '\\subsection{' + sectionTitle(a.badge + '. ' + a.title) + '}\\label{' + a.id + '}\n' + H(a.html) + '\n').join('\n');
  if (ch.elmelet) o += '\n\\section{Elméleti összefoglaló}\n' + ch.elmelet.map(a => '\\subsection{' + sectionTitle(a.badge + '. ' + a.title) + '}\\label{' + a.id + '}\n' + H(a.html) + '\n').join('\n');
  o += ch.ex.map(e => example(e, ch)).join('\n');
  if (ch.jav) o += '\n\\section{Javítások}\\label{' + ch.jav.id + '}\n' + H(ch.jav.html) + '\n';
  return o;
}

// ---------- könyv ----------
function book(key) {
  const B = BOOKS[key];
  const chs = B.chapters.map(n => Object.assign(require('./data/' + n + '.js'), { _file: n }));
  fs.mkdirSync(path.join(OUT, 'fejezetek'), { recursive: true });
  for (const ch of chs) fs.writeFileSync(path.join(OUT, 'fejezetek', ch._file + '.tex'), chapter(ch));
  // jelölések jegyzéke a könyv témaköreiből
  const topics = [...new Set(chs.map(c => c._file))];
  const seen = new Map();
  for (const ch of chs) { const G = glossFor(ch._file); for (const [k, v] of Object.entries(G)) if (v && /^[\\A-Za-z]/.test(k) && !seen.has(k + '|' + v)) seen.set(k + '|' + v, [k, v, ch.short || ch.title]); }
  const sk = k => k.replace(/\\(mathbf|mathcal|mathsf|hat|bar|Delta|text|mathrm)/g, '').replace(/[\\{}]/g, '');
  const jj = [...seen.values()].sort((a, b) => sk(a[0]).localeCompare(sk(b[0]), 'hu') || a[0].length - b[0].length);
  let main = '% Generálva: html/build_tex.js. Fordítás: pdflatex vagy xelatex (kétszer), vagy tectonic.\n\\input{preambulum}\n';
  main += '\\fancyhead[RE]{\\small\\sffamily ' + escText(B.head) + '}\n\\begin{document}\n\\frontmatter\n';
  main += '\\begin{titlepage}\n\\centering\n\\vspace*{30mm}\n{\\sffamily\\large BME VIK, BMEVITMAB03\\par}\n\\vspace{8mm}\n{\\sffamily\\bfseries\\Huge ' + escText(B.title) + '\\par}\n\\vspace{6mm}\n{\\sffamily\\Large ' + escText(B.sub) + '\\par}\n\\vspace{6mm}\n{\\large ' + escText(B.desc) + '\\par}\n\\vspace{14mm}\n' + COVER + '\n\\vfill\n{\\small ' + escText(B.src) + '\\par}\n\\vspace{8mm}\n{\\small 2026. november\\par}\n\\end{titlepage}\n';
  main += '\\input{hasznalat}\n\\tableofcontents\n\\mainmatter\n';
  main += '\\chapter*{Jelölések jegyzéke}\\addcontentsline{toc}{chapter}{Jelölések jegyzéke}\\markboth{Jelölések jegyzéke}{}\nA tárgyban kevés betűre sok mennyiség jut, ezért ugyanaz a jel a különböző témakörökben mást jelenthet. Az alábbi jegyzék a témakörök alapjelentéseit sorolja fel. Ha egy feladatban más a jelentés, azt a feladat „Jelölések ebben a feladatban” táblázata mondja meg, és az a mérvadó.\n\n';
  main += '{\\small\\renewcommand{\\arraystretch}{1.2}\\begin{longtable}{@{}>{\\raggedright\\arraybackslash}p{2.4cm}>{\\raggedright\\arraybackslash}p{8.2cm}>{\\raggedright\\arraybackslash}p{3.8cm}@{}}\\toprule\n\\textbf{Jel} & \\textbf{Jelentés} & \\textbf{Témakör}\\\\\\midrule\\endhead\n';
  main += jj.map(([k, v, t]) => '$' + mathFix(symTex(k)) + '$ & ' + H(v) + ' & ' + escText(t) + '\\\\').join('\n') + '\n\\bottomrule\\end{longtable}}\n';
  main += chs.map(c => '\\input{fejezetek/' + c._file + '}').join('\n') + '\n\\end{document}\n';
  fs.writeFileSync(path.join(OUT, B.file + '.tex'), main);
  return B.file;
}
// címlapábra: AM-jel, a mintához hasonlóan
const COVER = '\\begin{tikzpicture}[toll,x=1cm,y=1cm]\n\\draw[tengely] (0,-1.4) -- (0,1.5);\\draw[tengely] (0,0) -- (8.6,0) node[right] {$t$};\n\\draw[szagg,domain=0:8.2,samples=120] plot (\\x,{1+0.35*cos(\\x*1.5 r)});\\draw[szagg,domain=0:8.2,samples=120] plot (\\x,{-1-0.35*cos(\\x*1.5 r)});\n\\draw[line width=0.5pt,domain=0:8.2,samples=900] plot (\\x,{(1+0.35*cos(\\x*1.5 r))*cos(\\x*20 r)});\n\\end{tikzpicture}';

const PRE = String.raw`% ==================================================================
%  Infokommunikáció tankönyvek közös preambuluma (a tankönyvsablon alapján)
%  Fordítás: pdflatex, xelatex vagy lualatex (kétszer), illetve tectonic
% ==================================================================
\documentclass[a4paper,11pt,twoside,openany]{book}
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{lmodern}
  \usepackage{textcomp}
\else
  \usepackage{fontspec}
\fi
\usepackage[magyar]{babel}
\usepackage{microtype}
\usepackage[a4paper,inner=24mm,outer=20mm,top=24mm,bottom=26mm]{geometry}
\usepackage{amsmath,amssymb,mathtools}
\usepackage{icomma}
\usepackage{xcolor}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,decorations.pathreplacing,positioning,patterns}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usepackage{tabularx,booktabs,array,longtable}
\usepackage{enumitem}
\usepackage[most]{tcolorbox}
\usepackage{fancyhdr}
\usepackage{titlesec}
\usepackage{cancel}
\usepackage{adjustbox}
\usepackage[hidelinks]{hyperref}

% ---------- színek: csak a behelyettesítés jelzésére ----------
\definecolor{cA}{RGB}{29,95,196}    % kék
\definecolor{cB}{RGB}{192,84,0}     % narancs
\definecolor{cC}{RGB}{122,61,179}   % lila
\definecolor{cD}{RGB}{11,125,112}   % kékeszöld
\definecolor{cE}{RGB}{180,36,90}    % bíbor
\definecolor{cR}{RGB}{28,122,49}    % zöld: eredmény
\definecolor{keret}{gray}{0.35}
\definecolor{hatter}{gray}{0.95}
\newcommand{\ca}[1]{{\color{cA}#1}}
\newcommand{\cb}[1]{{\color{cB}#1}}
\newcommand{\cc}[1]{{\color{cC}#1}}
\newcommand{\cd}[1]{{\color{cD}#1}}
\newcommand{\ce}[1]{{\color{cE}#1}}
\newcommand{\res}[1]{{\color{cR}\boxed{#1}}}
\newcommand{\bh}[2]{\mbox{\(#1\;\longmapsto\;#2\)}\hspace{1.4em plus 0.5em}\allowbreak}
\newcommand{\behely}[1]{\par\smallskip{\raggedright\noindent\hangindent=2em\hangafter=1{\small\sffamily\textbf{Behelyettesítés:}}\hspace{0.8em}#1\par}\smallskip}
% a megoldási sor jellege (tétel, behelyettesítés, ...) és megjegyzése
\newcommand{\jegyzet}[2]{\par\vspace{-2pt}{\centering\footnotesize{\sffamily\scshape #1}\if\relax\detokenize{#2}\relax\else\quad #2\fi\par}\smallskip}

% ---------- matematikai rövidítések ----------
\newcommand{\ld}{\operatorname{ld}}
\newcommand{\arctg}{\operatorname{arctg}}
\newcommand{\tg}{\operatorname{tg}}
\newcommand{\sinc}{\operatorname{sinc}}
\newcommand{\F}{\mathcal{F}}
\newcommand{\eff}{_{\mathrm{eff}}}
\newcommand{\un}[1]{\,\mathrm{#1}}
\newcommand{\vect}[1]{\mathbf{#1}}
\renewcommand{\Re}{\operatorname{Re}}
\renewcommand{\Im}{\operatorname{Im}}

% ---------- dobozok ----------
\tcbset{base/.style={enhanced,breakable,sharp corners,boxrule=0.5pt,colframe=keret,colback=white,
  fonttitle=\sffamily\bfseries\small,coltitle=black,colbacktitle=hatter,left=3mm,right=3mm,top=1.5mm,bottom=1.5mm,
  before skip=8pt,after skip=8pt}}
\newtcolorbox{feladat}[1]{base,title={#1},colframe=black,boxrule=0.8pt}
\newtcolorbox{keresunk}{base,title={Mit keresünk?}}
\newtcolorbox{jeloles}{base,title={Jelölések ebben a feladatban}}
\newtcolorbox{elmelet}[1][Elméleti háttér]{base,title={#1}}
\newtcolorbox{eredmeny}{base,title={Eredmény},colframe=cR,colbacktitle=cR!10}
\newtcolorbox{figyelem}[1][Figyelem]{base,title={#1},colframe=cB,colbacktitle=cB!10}
\newtcolorbox{tipp}[1][Tipp]{base,title={#1},colframe=cA,colbacktitle=cA!8}
\newtcolorbox{rajz}[1][Rajz: ezt kell felrajzolni]{base,title={#1},colframe=cD,colbacktitle=cD!8}

% jelöléstáblázat egy feladathoz
\newenvironment{jeltabla}{\par\noindent\small\renewcommand{\arraystretch}{1.25}\tabularx{\dimexpr\linewidth-3pt\relax}{@{}>{\raggedright\arraybackslash}p{2.6cm}X>{\raggedright\arraybackslash}p{2.6cm}@{}}\toprule
\textbf{Jel} & \textbf{Jelentése ebben a feladatban} & \textbf{Érték, egység}\\\midrule}{\bottomrule\endtabularx\par}

% lépés
\newcounter{lepes}[section]
\newcommand{\lepes}[1]{\par\medskip\stepcounter{lepes}\noindent{\sffamily\bfseries\small\arabic{lepes}. lépés: #1}\par\nopagebreak\smallskip}

% ---------- TikZ: tollal rajzolható stílus ----------
\tikzset{
  toll/.style={line width=0.7pt,line cap=round,line join=round},
  vekony/.style={line width=0.4pt},
  szagg/.style={line width=0.5pt,dash pattern=on 3pt off 2pt},
  tengely/.style={line width=0.6pt,-{Stealth[length=2.2mm]}},
  nyil/.style={line width=0.6pt,-{Stealth[length=2mm]}},
  blokk/.style={draw,line width=0.7pt,minimum width=12mm,minimum height=8mm,font=\small},
}
\pgfplotsset{tollplot/.style={axis lines=middle,axis line style={line width=0.6pt,-{Stealth[length=2mm]}},
  every axis plot/.append style={line width=0.8pt,black},tick style={black},ticklabel style={font=\footnotesize},
  label style={font=\small},xlabel style={anchor=west},ylabel style={anchor=south},
  /pgf/number format/use comma,clip=false}}

% ---------- fejléc ----------
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE,RO]{\small\thepage}
\fancyhead[LO]{\small\sffamily\nouppercase{\leftmark}}
\renewcommand{\headrulewidth}{0.3pt}
\titleformat{\chapter}[display]{\normalfont\sffamily\bfseries}{\large\thechapter.\ \chaptertitlename}{4pt}{\LARGE}
\renewcommand{\chaptermark}[1]{\markboth{\thechapter.\ #1}{}}
\titlespacing*{\chapter}{0pt}{0pt}{18pt}
\titleformat{\section}{\normalfont\sffamily\bfseries\large}{\thesection}{0.8em}{}
\titleformat{\subsection}{\normalfont\sffamily\bfseries}{\thesubsection}{0.8em}{}
% a szakaszok a saját számukat (2.4, A1) a címükben hordozzák
\setcounter{secnumdepth}{0}
\setcounter{tocdepth}{1}
\setlist{itemsep=2pt,topsep=4pt}
\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}
\allowdisplaybreaks
\emergencystretch=2em
\raggedbottom
`;
const HASZN = String.raw`\chapter*{Hogyan használd ezt a könyvet}
Minden feladat ugyanúgy épül fel, hogy vizsgán is ugyanebben a rendben tudj gondolkodni.
\begin{enumerate}
\item \textbf{Feladat.} A feladat szövege, alatta a forrása (vizsga, gyűjtemény, oldal).
\item \textbf{Mit keresünk?} Minden részkérdésnél leírom, melyik mennyiséget keressük, és mit jelent.
\item \textbf{Jelölések ebben a feladatban.} Minden jel jelentése abban a környezetben, ahol épp használjuk, és ha a feladat megadja, az értéke is. Ugyanaz a betű a tárgyban több dolgot is jelenthet (a $k$ lehet Nyquist-zóna sorszáma, felharmonikus sorszáma vagy erősítési tényező), ezért ezt minden feladatnál újra rögzítem.
\item \textbf{Megoldás lépésenként.} Minden matematikai sor alatt kis kapitálissal áll a sor jellege (\textsc{tétel}, \textsc{behelyettesítés}, \textsc{számérték}, \ldots) és egy rövid megjegyzés arról, honnan jön.
\item \textbf{Eredmény}, és szükség esetén \textbf{Figyelem} doboz a tipikus hibákkal, illetve a forrásban talált tévedésekkel (\textbf{Javítás}).
\end{enumerate}

\section*{A színek jelentése}
A könyv fekete-fehér, egyedül a behelyettesítést jelzem színekkel. A feladat által megadott mennyiségek közül legfeljebb ötnek saját színe van: a jelöléstáblában, a képletben a jele, a behelyettesítésnél az értéke ugyanabban a színben jelenik meg. Így ránézésre látszik, mi hova kerül.
\begin{center}
\ca{kék}\quad \cb{narancs}\quad \cc{lila}\quad \cd{kékeszöld}\quad \ce{bíbor}
\end{center}
\behely{\bh{\ca{f_H}}{\ca{75\un{kHz}}}}
\[
f_s\ge2\,\ca{f_H}=2\cdot\ca{75}=150\un{kHz}
\]

\section*{Az ábrákról}
Ahol a feladat rajzot kér, a \textbf{Rajz: ezt kell felrajzolni} doboz pontos ábrát ad, alatta pontokba szedve, hogy kézzel mit kell feltüntetni (tengelyek, jellegzetes értékek, burkoló). Minden ábra papíron egyetlen tollal is megrajzolható.

\section*{Ellenőrzés}
Minden számértéket független szkript számolt újra (\texttt{html/check}). A források hibáit a Javítás doboz és a hibajegyzék (\texttt{03\_Hibajegyzek.md}) rögzíti.
`;

const which = process.argv[2] || 'mind';
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'preambulum.tex'), PRE);
fs.writeFileSync(path.join(OUT, 'hasznalat.tex'), HASZN);
const done = (which === 'mind' ? Object.keys(BOOKS) : [which]).map(book);
console.log('Kész: ' + done.map(f => 'Tankonyv/' + f + '.tex').join(', '));
if (PROBLEMS.length) { console.log('Problémák (' + PROBLEMS.length + '):\n' + [...new Set(PROBLEMS)].slice(0, 60).join('\n')); process.exitCode = 1; }
