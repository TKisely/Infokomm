// Infokomm példatár build: KaTeX előrenderelés, egyetlen önálló HTML oldal.
// Használat: node build.js  ->  dist/infokomm_peldatar.html
'use strict';
const fs = require('fs');
const path = require('path');
const katex = require('katex');

const BOOKS = {
  main: { chapters: ['ch02', 'ch06'], out: 'infokomm_peldatar', idx: 'index', title: 'Infokomm példatár',
    kicker: 'Infokommunikáció (BMEVITMAB03) · gyakorlati felkészítő jegyzet',
    intro: 'Előadás, gyakorlat, tanszéki füzet és régi vizsgák egy helyen. Minden példa elején egyszerű magyarázat arról, <b>miért</b> az a modell és az a képlet, utána a megoldás számozott lépésekben, minden matematikai sor mellett a jelölővel és az indoklással. Minden végeredményt független szkript számolt újra. A forrásbeli hibák „Javítás” dobozban szerepelnek.',
    search: 'Keresés a példákban (pl. aliasing, Kraft, 225 m)' },
  allin: { chapters: ['ai01', 'ai02', 'ai03', 'ai04', 'ai05', 'ai06', 'ai07', 'ai08', 'ai09', 'ai10', 'ai11'], out: 'allin_peldatar', idx: 'allin', title: 'ALL-IN példatár',
    kicker: 'Infokommunikáció (BMEVITMAB03) · az ALL-IN gyűjtemény 1…145. oldala, ellenőrizve',
    intro: 'Az ALL-IN hallgatói gyűjtemény (Moodle-vizsgák 2020, vizsgamegoldások 2014 és 2016 között, témakörös feladatgyűjtemény) minden feladata témakörönként, egyszer. Minden példánál a gyűjtemény megoldása helyett ellenőrzött megoldás áll lépésekben, minden végeredményt független szkript számolt újra. Ahol a gyűjtemény hibázott, „Javítás” doboz mutatja, mi volt a hiba. A forrásoldal azonosítója (<code>ai…</code>) az átiratra mutat.',
    search: 'Keresés (pl. Erlang, Huffman, 8-QAM, ai2016)' },
  otos: { chapters: ['o01', 'o02', 'o03', 'o04', 'o05', 'o06', 'o07', 'o08', 'o09', 'o10'], out: 'otosom_peldatar', idx: 'otosom', title: '5-ösöm példatár',
    kicker: 'Infokommunikáció (BMEVITMAB03) · az „5-ösöm lesz Infokommból” gyűjtemény, ellenőrizve',
    intro: 'Az „5-ösöm lesz Infokommból” hallgatói gyűjtemény (30 oldal, sok beszkennelt oktatói megoldással) minden feladata témakörönként. Minden példánál ellenőrzött megoldás áll lépésekben, minden végeredményt független szkript számolt újra. Ahol a gyűjtemény hibázott, „Javítás” doboz mutatja. A forrásoldal azonosítója (<code>5o_…</code>) az átiratra mutat.',
    search: 'Keresés (pl. DVB-T, Huffman, GSM, 5o_14)' }
};
const BOOK = BOOKS[process.argv[2] || 'main'];
if (!BOOK) throw new Error('Ismeretlen könyv: ' + process.argv[2]);
const CHAPTERS = BOOK.chapters.filter(n => fs.existsSync(path.join(__dirname, 'data', n + '.js')) || (console.warn('Hiányzó fejezet: ' + n), false)).map(n => require('./data/' + n + '.js'));
const REPO = 'https://github.com/TKisely/Infokomm/blob/main/';

// ---------- KaTeX ----------
function k(tex, display) {
  try { return katex.renderToString(tex, { displayMode: display, throwOnError: true, output: 'html', strict: 'ignore', trust: false }); }
  catch (e) { throw new Error('KaTeX hiba ebben: ' + tex + '\n' + e.message.split('\n')[0]); }
}
// felső szintű tördelési pontok a mobil (keskeny) változathoz
function splitTop(tex) {
  const marks = ['\\quad\\Longrightarrow\\quad', '\\qquad'];
  const parts = []; let depth = 0, last = 0, kinds = [];
  for (let i = 0; i < tex.length; i++) {
    const c = tex[i];
    if (c === '{') depth++; else if (c === '}') depth--;
    else if (depth === 0 && c === '\\') {
      for (const m of marks) {
        if (tex.startsWith(m, i)) { parts.push(tex.slice(last, i)); kinds.push(m); last = i + m.length; i = last - 1; break; }
      }
    }
  }
  if (!parts.length) return null;
  parts.push(tex.slice(last));
  let out = '\\begin{aligned}&' + parts[0];
  for (let j = 1; j < parts.length; j++) out += '\\\\&' + (kinds[j - 1].includes('Longrightarrow') ? '\\Longrightarrow\\ ' : '') + parts[j];
  return out + '\\end{aligned}';
}
function disp(tex) {
  const n = splitTop(tex);
  if (!n) return '<div class="dm">' + k(tex, true) + '</div>';
  return '<div class="dm"><div class="w">' + k(tex, true) + '</div><div class="n">' + k(n, true) + '</div></div>';
}
// szöveg: $$…$$ display, $…$ inline
function T(s) {
  if (s == null) return '';
  s = String(s).replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => disp(t.trim()));
  return s.replace(/\$([^$]+?)\$/g, (_, t) => k(t, false));
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- jelölők ----------
const MK = { 'törvény': 'tv', 'definíció': 'df', 'tétel': 'te', 'szimmetria': 'sz', 'geometria': 'ge', 'behelyettesítés': 'bh',
  'átalakítás': 'al', 'integrálás': 'in', 'deriválás': 'de', 'közelítés': 'kz', 'ellenőrzés': 'el', 'számérték': 'sm' };
const TAGS = { vizsga: ['ex', 'vizsga'], beugro: ['', 'beugró'], nehez: ['hd', 'nehezebb'], javitas: ['fx', 'javítás'], sajat: ['', 'saját megoldás'] };

function link(l) { const href = /^https?:|^#/.test(l[1]) ? l[1] : REPO + l[1]; return '<a href="' + esc(href) + '">' + T(l[0]) + '</a>'; }

function alap(a) {
  return '<section class="sec alap" id="' + a.id + '"><header class="sh"><span class="badge">' + a.badge + '</span><h3>' + T(a.title) +
    '</h3><a class="pin" href="#' + a.id + '" aria-label="Hivatkozás erre">#</a></header>' + T(a.html) +
    (a.key ? '<div class="key">' + T(a.key) + '</div>' : '') + '</section>';
}

function example(e, ch) {
  const tags = (e.tags || []);
  const cats = [ch.id].concat(tags).join(' ');
  let h = '<section class="sec ex' + (tags.includes('nehez') ? ' hard' : '') + '" id="' + e.id + '" data-cat="' + cats + '">';
  h += '<header class="xh"><div class="xn">' + e.num + '</div><div class="xt"><h3>' + T(e.title) + '</h3><div class="xm">' + T(e.src) + '</div>';
  if (tags.length) h += '<div class="tags">' + tags.map(t => '<span class="tag ' + TAGS[t][0] + '">' + TAGS[t][1] + '</span>').join('') + '</div>';
  h += '</div><a class="pin" href="#' + e.id + '" aria-label="Hivatkozás erre">#</a></header>';
  h += '<div class="task"><div class="lbl">Feladat</div>' + T(e.task) + '</div>';
  if (e.fig) h += '<div class="task"><div class="fig">' + e.fig + '</div></div>';
  if (e.ad) h += '<div class="ak"><div><div class="lbl">Adott</div><ul>' + e.ad.map(x => '<li>' + T(x) + '</li>').join('') + '</ul></div>' +
    '<div><div class="lbl">Keresett</div><ul>' + e.ker.map(x => '<li>' + T(x) + '</li>').join('') + '</ul></div></div>';
  if (e.miert) h += '<div class="why"><div class="lbl">Miért így? Egyszerűen</div><dl>' + e.miert.map(q => '<dt>' + T(q[0]) + '</dt><dd>' + T(q[1]) + '</dd>').join('') + '</dl></div>';
  if (e.elm) h += '<div class="th"><div class="lbl">Felhasznált elmélet</div>' + e.elm.map(t => '<div class="thi"><b>' + T(t[0]) + '</b> ' + T(t[1]) + (t[2] ? disp(t[2]) : '') + '</div>').join('') + '</div>';
  h += '<div class="sol"><div class="lbl">Megoldás lépésenként</div>' + e.lv.map((st, i) =>
    '<div class="step"><div class="sn">' + (i + 1) + '</div><div class="sb"><h4>' + T(st.t) + '</h4><p>' + T(st.s) + '</p>' +
    (st.m && st.m.length ? '<div class="rows">' + st.m.map(r => {
      const c = MK[r[0]]; if (!c) throw new Error('Ismeretlen jelölő: ' + r[0] + ' (' + e.id + ')');
      return '<div class="row"><span class="mk ' + c + '">' + r[0] + '</span><div class="rm">' + disp(r[1]) + '</div><div class="rn">' + T(r[2] || '') + '</div></div>';
    }).join('') + '</div>' : '') + '</div></div>').join('') + '</div>';
  if (e.gy) h += '<div class="why"><div class="lbl">A gyűjtemény megoldása</div>' + T(e.gy) + '</div>';
  if (e.fix) h += '<div class="fix"><b>Javítás.</b> ' + T(e.fix) + '</div>';
  h += '<div class="res"><div class="lbl">Eredmény</div>' + e.ered.map(disp).join('') + '</div>';
  if (e.chk || e.hib) h += '<div class="two">' + (e.chk ? '<div class="chk"><div class="lbl">Ellenőrzés</div><ul>' + e.chk.map(x => '<li>' + T(x) + '</li>').join('') + '</ul></div>' : '') +
    (e.hib ? '<div class="err"><div class="lbl">Tipikus hibák</div><ul>' + e.hib.map(x => '<li>' + T(x) + '</li>').join('') + '</ul></div>' : '') + '</div>';
  if (e.calc) h += '<div class="calc"><div class="lbl">Saját számpélda (kiegészítés, a forrásban nem szerepel)</div><pre>' + esc(e.calc) + '</pre></div>';
  if (e.du && e.du.length) h += '<div class="du"><div class="lbl">Kapcsolat és analógia</div><div class="tw"><table class="tb"><tbody>' +
    e.du.map(r => '<tr>' + r.map(c => '<td>' + T(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></div>';
  (e.links || []).forEach(g => { h += '<div class="links"><span class="lbl2">' + g[0] + '</span>' + g[1].map(link).join('') + '</div>'; });
  return h + '</section>';
}

// ---------- oldal ----------
function page() {
  let toc = '<div class="toch">Tartalom</div>', body = '';
  for (const ch of CHAPTERS) {
    toc += '<a href="#' + ch.id + '" class="part">' + ch.num + '. ' + esc(ch.title) + '</a>';
    toc += '<div class="tsub">Alapok, egyszerűen</div>' + ch.alap.map(a => '<a href="#' + a.id + '" class="alap">' + a.badge + ' ' + esc(a.title.replace(/\$[^$]*\$/g, '')) + '</a>').join('');
    if (ch.elmelet) toc += '<div class="tsub">Elméleti összefoglaló</div>' + ch.elmelet.map(a => '<a href="#' + a.id + '" class="alap">' + a.badge + ' ' + esc(a.title.replace(/\$[^$]*\$/g, '')) + '</a>').join('');
    toc += '<div class="tsub">Példák</div>' + ch.ex.map(e => '<a href="#' + e.id + '" class="ex' + ((e.tags || []).includes('nehez') ? ' hard' : '') + '">' + e.num + ' ' + esc(e.title.replace(/\$[^$]*\$/g, '')) + '</a>').join('');
    body += '<h2 class="part" id="' + ch.id + '"><span>' + ch.num + '.</span>' + esc(ch.title) + '</h2><p class="lead">' + T(ch.lead) + '</p>';
    body += '<h3 class="sub">Alapok, egyszerűen</h3>' + ch.alap.map(alap).join('');
    if (ch.elmelet) body += '<h3 class="sub">Elméleti összefoglaló</h3>' + ch.elmelet.map(alap).join('');
    body += '<h3 class="sub">Példák</h3>' + ch.ex.map(e => example(e, ch)).join('');
    if (ch.jav) { body += '<h3 class="sub">Javítások</h3><section class="sec alap" id="' + ch.jav.id + '">' + T(ch.jav.html) + '</section>'; toc += '<a href="#' + ch.jav.id + '" class="alap">Javítások</a>'; }
  }
  const chips = [['mind', 'Mind'], ['vizsga', 'Vizsga'], ['beugro', 'Beugró'], ['nehez', 'Nehezebb'], ['javitas', 'Javítás']]
    .concat(CHAPTERS.map(c => [c.id, c.num + '. ' + c.short]))
    .map((c, i) => '<button class="chip" type="button" data-f="' + c[0] + '" aria-pressed="' + (i ? 'false' : 'true') + '">' + c[1] + '</button>').join('');
  const legend = Object.keys(MK).map(n => '<span class="mk ' + MK[n] + '">' + n + '</span>').join('');

  // KaTeX css, woff2 betűk data URI-ként
  const kdir = path.join(__dirname, 'node_modules/katex/dist');
  let kcss = fs.readFileSync(path.join(kdir, 'katex.min.css'), 'utf8');
  kcss = kcss.replace(/src:url\(fonts\/([^)]+?\.woff2)\) format\("woff2"\)(,url\([^)]*\) format\("[^"]*"\))*/g, (_, f) =>
    'src:url(data:font/woff2;base64,' + fs.readFileSync(path.join(kdir, 'fonts', f)).toString('base64') + ') format("woff2")');
  if (/url\(fonts\//.test(kcss)) throw new Error('KaTeX font nincs beágyazva');

  const css = fs.readFileSync(path.join(__dirname, 'src/style.css'), 'utf8');
  const js = fs.readFileSync(path.join(__dirname, 'src/page.js'), 'utf8');
  const nEx = CHAPTERS.reduce((a, c) => a + c.ex.length, 0);

  return '<title>' + BOOK.title + '</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Source+Sans+3:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap">\n' +
    '<style>' + kcss + '</style>\n<style>' + css + '</style>\n' +
    '<header class="hero"><div class="hin"><div class="kicker">' + BOOK.kicker + '</div>' +
    '<h1>' + BOOK.title + '</h1><p>' + BOOK.intro + '</p>' +
    '<div class="legend"><span class="lt">A lépések jelölése:</span>' + legend + '</div>' +
    '<div class="xlinks"><a href="' + REPO + '00_STATUSZ.md">Tartalomjegyzék és státusz</a><a href="' + REPO + '06_Kereszthivatkozasok.md">Kereszthivatkozások</a><a href="' + REPO + '03_Hibajegyzek.md">Hibajegyzék</a></div></div></header>\n' +
    '<div class="layout"><nav class="toc" aria-label="Tartalom">' + toc + '</nav><main>' +
    '<div class="tools"><label class="hidden" for="q">Keresés</label><input id="q" type="search" placeholder="' + BOOK.search + '" autocomplete="off"><div class="chips">' + chips + '</div></div>' +
    body + '<footer>' + BOOK.title + ' · ' + nEx + ' kidolgozott példa · forrás és build: <a href="https://github.com/TKisely/Infokomm">github.com/TKisely/Infokomm</a></footer></main></div>\n' +
    '<script>' + js + '</script>\n';
}

// ---------- ellenőrzések ----------
function checks(html) {
  const errs = [];
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dup.length) errs.push('Ismétlődő azonosító: ' + [...new Set(dup)].join(', '));
  ids.forEach(id => { if (/[^a-z0-9_-]/.test(id)) errs.push('Nem ékezetmentes azonosító: ' + id); });
  // látható szöveg: KaTeX, SVG, style, script nélkül
  let vis = html.replace(/<style>[\s\S]*?<\/style>/g, '').replace(/<script>[\s\S]*?<\/script>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, ' ');
  vis = stripKatex(vis).replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&amp;|&lt;|&gt;|&quot;/g, ' ');
  ['—', '–', ';'].forEach(c => { let i = -1; while ((i = vis.indexOf(c, i + 1)) >= 0) errs.push('Tiltott írásjel „' + c + '”: …' + vis.slice(Math.max(0, i - 50), i + 15).replace(/\s+/g, ' ') + '…'); });
  // elveszett visszaperjel nyoma (sima '…' stringben a \s, \b, \f eltűnik)
  ['sqrt', 'frac', 'cdot', 'lfloor', 'qquad', 'mathrm', 'Rightarrow', 'Phi_', 'mu(t', 'eta'].forEach(w => { const m = vis.match(new RegExp('[^a-záéíóöőúüű]' + w.replace(/[()]/g, '\\$&') + '[^a-záéíóöőúüű]')); if (m) errs.push('Gyanús TeX-maradék „' + w + '”: …' + vis.slice(Math.max(0, m.index - 50), m.index + 30).replace(/\s+/g, ' ') + '…'); });
  ['$', '\\'].forEach(c => { let i = vis.indexOf(c); if (i >= 0) errs.push('Rendereletlen „' + c + '”: …' + vis.slice(Math.max(0, i - 60), i + 30).replace(/\s+/g, ' ') + '…'); });
  return errs;
}
function stripKatex(s) {
  // kiveszi a teljes <span class="katex"> … </span> fákat, kiegyensúlyozott span-számlálással
  let out = '', i = 0;
  while (true) {
    const j = s.indexOf('<span class="katex', i);
    if (j < 0) { out += s.slice(i); break; }
    out += s.slice(i, j) + ' ';
    let depth = 0, p = j;
    const re = /<span\b|<\/span>/g; re.lastIndex = j;
    let m;
    while ((m = re.exec(s))) { depth += m[0] === '</span>' ? -1 : 1; if (depth === 0) { p = re.lastIndex; break; } }
    i = p;
  }
  return out;
}

const html = page();
const errs = checks(html);
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist/' + BOOK.out + '.html'), html);
// önálló, teljes HTML dokumentum (helyi megnyitáshoz és böngészős ellenőrzéshez)
fs.writeFileSync(path.join(__dirname, 'dist/' + BOOK.idx + '.html'), '<!doctype html><html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></head><body>\n' + html + '</body></html>\n');
console.log('dist/' + BOOK.out + '.html', (html.length / 1024 / 1024).toFixed(2) + ' MB,', CHAPTERS.reduce((a, c) => a + c.ex.length, 0), 'példa');
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
console.log('Ellenőrzések rendben: azonosítók egyediek, nincs tiltott írásjel, nincs rendereletlen TeX.');
