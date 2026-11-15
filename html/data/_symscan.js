// Jelek kigyűjtése egy példa teljes szövegéből (feladat, lépések, eredmény).
'use strict';
const SKIP = new Set(['frac','tfrac','dfrac','cdot','sqrt','lg','log','ln','cos','sin','tg','arctg','exp','left','right','quad','qquad','Rightarrow','Longrightarrow','Longleftarrow','Leftarrow','le','ge','ll','gg','approx','pm','mp','ldots','dots','cdots','infty','sum','int','max','min','lfloor','rfloor','lceil','rceil','text','mathrm','mathbf','mathsf','mathcal','begin','end','bmatrix','oplus','times','to','in','ne','iff','circ','prime','not','neq','mid','overline','underline','big','Big','bigl','bigr','displaystyle','mathit','boldsymbol','dfrac','pi','propto','ast','star','cap','cup','subset','emptyset','forall','exists','partial','nabla','equiv','sim','simeq','cong','perp','parallel','angle','deg','limits','operatorname','atan','mathrm','vec','tilde','dot','ddot','check','breve','acute','grave','widehat','widetilde','lbrace','rbrace','langle','rangle','vert','Vert','lvert','rvert','hline','phantom','hspace','vspace','kern','mkern','mskip','!',',',';',':','quad','enspace','thinspace','neg','land','lor','lnot','surd','varnothing','arcsin','arccos','sinh','cosh','tanh','det','dim','gcd','hom','ker','lim','sup','inf','Pr','arg','bmod','pmod','choose','binom','stackrel','overset','underset','atop','over','smallmatrix','pmatrix','vmatrix','cases','array','aligned','align','gathered','split','hfill','color','textcolor','boxed','tag','label','notag','nonumber','cancel','hat','bar','longrightarrow','longleftarrow','mapsto','uparrow','downarrow','leftrightarrow']);
const WORDS = new Set(['RC', 'GI']);
function strip(tex) {
  return tex.replace(/\\(?:text|mathrm|operatorname)\{[^{}]*\}/g, ' ').replace(/\\begin\{[^}]*\}|\\end\{[^}]*\}/g, ' ');
}
// vissza: a jelek kulcsai (a _gloss.js formátumában)
function scan(tex) {
  const out = new Set();
  const t = tex.replace(/\\(?:mathrm|text)\{([a-zA-Z]{1,6})\}(?=\s*[_^]|)/g, (m, x) => m); // változatlan
  const re = /(\\(?:hat|bar)\s*(?:\{[^{}]*\}|\\?[A-Za-z]))|(\\[A-Za-z]+)|([A-Za-z])/g;
  const s = tex.replace(/\\mu\s*\\text\{[a-zA-Z]+\}/g, ' ').replace(/\\(Omega|Delta)\b/g, ' ');
  let m;
  while ((m = re.exec(s))) {
    let tok = m[0];
    // \text{...} és \mathrm{...} tartalmát átugorjuk, ha nem alsó index része
    if (/^\\(text|mathrm|operatorname|begin|end)$/.test(tok)) { const r = s.slice(re.lastIndex).match(/^\s*\{[^{}]*\}/); if (r) re.lastIndex += r[0].length; continue; }
    if (tok[0] === '\\' && !/^\\(hat|bar)/.test(tok) && SKIP.has(tok.slice(1))) continue;
    // ha a token betűszó része (több betű egymás után, nem parancs), kihagyjuk: pl. „SNR”, „dB”
    if (m[3]) {
      const w = s.slice(m.index).match(/^[A-Za-z]+/)[0];
      if (s[re.lastIndex] === ')' && !/[(,]/.test(s[m.index - 1] || '')) continue; // a), A): alkérdés vagy válaszlehetőség jele
      if (WORDS.has(w) && !/[A-Za-z]/.test(s[m.index - 1] || '')) { tok = w; re.lastIndex = m.index + w.length; }
      else if (tok === 'd' && /^[txsf](?![A-Za-z_])/.test(s.slice(re.lastIndex)) && /\\frac|\\int|^d/.test(s.slice(0, m.index + 1))) continue; // differenciál
      else if (tok === 'e' && /^\s*\^/.test(s.slice(re.lastIndex)) && !/\\mathbf/.test(s.slice(Math.max(0, m.index - 8), m.index))) continue; // Euler-szám
    }
    let rest = s.slice(re.lastIndex);
    const sub = rest.match(/^_(\{(?:[^{}]|\{[^{}]*\})*\}|\\(?:text|mathrm)\s*\{[^{}]*\}|\\[A-Za-z]+|[A-Za-z0-9])/);
    if (sub) { tok += sub[0]; re.lastIndex += sub[0].length; rest = s.slice(re.lastIndex); }
    const sup = rest.match(/^\^(\{\(\d\)\}|\{\\mathsf\s*T\}|T)/);
    if (sup) { tok += sup[0]; re.lastIndex += sup[0].length; }
    out.add(tok.replace(/\s+/g, ''));
  }
  return [...out];
}
function texOf(str) { const r = []; String(str || '').replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (_, a, b) => { r.push(a || b); return ''; }); return r; }
module.exports = { scan, texOf };
