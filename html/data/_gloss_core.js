// Jelmagyarázat-motor: az Adott/Keresett tételekben minden jel mellé odaírja a jelentését,
// ha a tétel maga nem mondja meg. A jelentések témakörönként (_gloss.js).
'use strict';
const L = 'a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ';
function symKeys(m) {
  const s = m.trim().replace(/^\\Rightarrow\s*/, '');
  const parts = s.split(/=|\\le|\\ge|<|>|\\approx/);
  const lhs = parts.length > 1 ? parts.slice(0, -1) : parts;
  return lhs.map(p => p.replace(/\s+/g, '').replace(/\\,/g, '')).filter(Boolean);
}
const variants = k => [...new Set([k, k.replace(/_\{?\d+\}?$/, ''), k.replace(/\^\{\(\d\)\}$/, ''), k.replace(/\(t\)$/, '')])];
const isSym = k => k.length > 0 && k.length <= 40 && !/\\begin|\\frac|\\sum|\\int/.test(k) && /^[\\A-Za-z]/.test(k) && !/^\d/.test(k);
const UNIT = '(?:[kMGµmnp]?(?:Hz|V|W|s|m|Pa|bit|Bd|Erl|dB|dBW|dBV|rad|Ω|byte|pps|perc|óra|nap|km²|m²)|°|%)(?:\\/[' + L + ']+²?)?|[' + L + ']+\\/[' + L + ']+';
const TAIL = new RegExp('^((?:\\s*(?:' + UNIT + ')(?![' + L + ']))?(?:-[' + L + ']+)?)');
function explain(item, G) {
  const missing = [];
  const re = /\$([^$]+)\$/g; let out = '', last = 0, m;
  while ((m = re.exec(item))) {
    let end = re.lastIndex;
    const tl = (item.slice(end).match(TAIL) || ['', ''])[1].length;
    const before = item.slice(0, m.index), after = item.slice(end + tl);
    const local = after.split(/[,;]/)[0].toLowerCase();
    let ins = '';
    if (!before.includes(':') && !/^\s*[:(]/.test(after)) {
      const ds = [];
      for (const key of symKeys(m[1])) {
        if (!isSym(key)) continue;
        const d = variants(key).map(k => G[k]).find(x => x !== undefined);
        if (d === undefined) missing.push(key);
        else if (d) { const w = (d.toLowerCase().match(/[a-záéíóöőúüű]{4,}/g) || [''])[0].slice(0, 6); if (!w || !local.includes(w)) if (!ds.includes(d)) ds.push(d); }
      }
      if (ds.length) ins = ' (' + ds.join(', ') + ')';
    }
    out += item.slice(last, end + tl) + ins; last = end + tl; re.lastIndex = end + tl;
  }
  return [out + item.slice(last), missing];
}
module.exports = { explain };
