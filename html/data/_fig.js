// Rajzoló segéd: jelalakok, spektrumok, konstellációk, egyszerű blokkvázlatok SVG-ben.
// A színek a téma tokenjeiből jönnek (osztályok: jl, ac, bl, ob, gr, tm, t, dash, bj, ba, bb).
'use strict';
const hu = (v, d = 2) => {
  if (typeof v === 'string') return v;
  let s = (Math.round(v * 10 ** d) / 10 ** d).toString();
  return s.replace('-', '−').replace('.', ',');
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const sample = (f, x0, x1, n = 600) => Array.from({ length: n + 1 }, (_, i) => { const x = x0 + (x1 - x0) * i / n; return [x, f(x)]; });

// Általános koordináta-rendszer.
// o: { w, h, x:[x0,x1], y:[y0,y1], xt:[[v,lab]], yt:[[v,lab]], xl, yl, series:[{pts|f,n,cls}], stems:[[x,y,cls,lab]],
//      polys:[{pts,cls}], hl:[[y,cls,lab]], vl:[[x,cls,lab]], dots:[[x,y,cls,lab,anchor]], texts:[[x,y,txt,anchor,cls]],
//      circles:[[cx,cy,r,cls]], segs:[[x1,y1,x2,y2,cls]], aria, equal }
function plot(o) {
  const W = o.w || 680, H = o.h || 220, L = o.ml || 52, Rm = o.mr || 18, T = o.mt || 16, B = o.mb || 34;
  let [x0, x1] = o.x, [y0, y1] = o.y;
  let pw = W - L - Rm, ph = H - T - B;
  if (o.equal) { const s = Math.min(pw / (x1 - x0), ph / (y1 - y0)); pw = s * (x1 - x0); ph = s * (y1 - y0); }
  const X = x => L + (x - x0) / (x1 - x0) * pw, Y = y => T + (y1 - y) / (y1 - y0) * ph;
  const r1 = v => Math.round(v * 10) / 10;
  let s = `<svg viewBox="0 0 ${W} ${o.equal ? r1(T + ph + B) : H}" role="img" aria-label="${esc(o.aria || 'ábra')}">`;
  // rács és tengelyek
  (o.xt || []).forEach(t => { s += `<line class="gr" x1="${r1(X(t[0]))}" y1="${r1(Y(y0))}" x2="${r1(X(t[0]))}" y2="${r1(Y(y1))}" stroke-opacity=".5"/>`; });
  (o.yt || []).forEach(t => { s += `<line class="gr" x1="${r1(X(x0))}" y1="${r1(Y(t[0]))}" x2="${r1(X(x1))}" y2="${r1(Y(t[0]))}" stroke-opacity=".5"/>`; });
  const yAx = (y0 <= 0 && y1 >= 0) ? 0 : y0;
  const xAx = (x0 <= 0 && x1 >= 0) ? 0 : x0;
  s += `<line class="ob" x1="${r1(X(x0))}" y1="${r1(Y(yAx))}" x2="${r1(X(x1) + 8)}" y2="${r1(Y(yAx))}"/><path class="obf" d="M${r1(X(x1) + 14)} ${r1(Y(yAx))} l-8 -4 v8 z"/>`;
  s += `<line class="ob" x1="${r1(X(xAx))}" y1="${r1(Y(y0))}" x2="${r1(X(xAx))}" y2="${r1(Y(y1) - 6)}"/><path class="obf" d="M${r1(X(xAx))} ${r1(Y(y1) - 12)} l-4 8 h8 z"/>`;
  (o.xt || []).forEach(t => { s += `<text class="tm" x="${r1(X(t[0]))}" y="${r1(Y(y0) + 16)}" text-anchor="middle">${esc(t[1] === undefined ? hu(t[0]) : t[1])}</text>`; });
  (o.yt || []).forEach(t => { s += `<text class="tm" x="${r1(X(xAx) - 6)}" y="${r1(Y(t[0]) + 4)}" text-anchor="end">${esc(t[1] === undefined ? hu(t[0]) : t[1])}</text>`; });
  if (o.xl) s += `<text class="tm" x="${r1(X(x1))}" y="${r1(Y(y0) + 30)}" text-anchor="end">${esc(o.xl)}</text>`;
  if (o.yl) s += `<text class="tm" x="${r1(X(xAx) + 8)}" y="${r1(Y(y1) - 2)}">${esc(o.yl)}</text>`;
  // sávok, vonalak
  (o.polys || []).forEach(p => { s += `<polygon class="${p.cls || 'bj'}" points="${p.pts.map(q => r1(X(q[0])) + ',' + r1(Y(q[1]))).join(' ')}"/>`; });
  (o.hl || []).forEach(l => { s += `<line class="${l[1] || 'gr dash'}" x1="${r1(X(x0))}" y1="${r1(Y(l[0]))}" x2="${r1(X(x1))}" y2="${r1(Y(l[0]))}"/>` + (l[2] ? `<text class="tm" x="${r1(X(x1) - 2)}" y="${r1(Y(l[0]) - 4)}" text-anchor="end">${esc(l[2])}</text>` : ''); });
  (o.vl || []).forEach(l => { s += `<line class="${l[1] || 'gr dash'}" x1="${r1(X(l[0]))}" y1="${r1(Y(y0))}" x2="${r1(X(l[0]))}" y2="${r1(Y(y1))}"/>` + (l[2] ? `<text class="tm" x="${r1(X(l[0]) + 3)}" y="${r1(Y(y1) + 10)}">${esc(l[2])}</text>` : ''); });
  (o.segs || []).forEach(g => { s += `<line class="${g[4] || 'ob'}" x1="${r1(X(g[0]))}" y1="${r1(Y(g[1]))}" x2="${r1(X(g[2]))}" y2="${r1(Y(g[3]))}"/>`; });
  (o.circles || []).forEach(c => { s += `<ellipse class="${c[3] || 'gr'}" cx="${r1(X(c[0]))}" cy="${r1(Y(c[1]))}" rx="${r1(c[2] / (x1 - x0) * pw)}" ry="${r1(c[2] / (y1 - y0) * ph)}" fill="none"/>`; });
  // görbék
  (o.series || []).forEach(sr => {
    const pts = sr.pts || sample(sr.f, sr.x0 ?? x0, sr.x1 ?? x1, sr.n || 800);
    s += `<polyline class="${sr.cls || 'jl'}" points="${pts.map(q => r1(X(q[0])) + ',' + r1(Y(Math.max(y0, Math.min(y1, q[1]))))).join(' ')}"/>`;
  });
  (o.stems || []).forEach(st => {
    const c = st[2] || 'jl';
    s += `<line class="${c}" x1="${r1(X(st[0]))}" y1="${r1(Y(0))}" x2="${r1(X(st[0]))}" y2="${r1(Y(st[1]))}" stroke-width="2.2"/><circle class="${c}f" cx="${r1(X(st[0]))}" cy="${r1(Y(st[1]))}" r="3.5"/>`;
    if (st[3]) s += `<text class="t" x="${r1(X(st[0]))}" y="${r1(Y(st[1]) - 8)}" text-anchor="middle">${esc(st[3])}</text>`;
  });
  (o.dots || []).forEach(d => {
    const c = d[2] || 'jl';
    s += `<circle class="${c}f" cx="${r1(X(d[0]))}" cy="${r1(Y(d[1]))}" r="${d[5] || 4}"/>`;
    if (d[3]) s += `<text class="tm" x="${r1(X(d[0]) + (d[4] === 'end' ? -7 : 7))}" y="${r1(Y(d[1]) - 6)}" text-anchor="${d[4] || 'start'}">${esc(d[3])}</text>`;
  });
  (o.texts || []).forEach(t => { s += `<text class="${t[4] || 't'}" x="${r1(X(t[0]))}" y="${r1(Y(t[1]))}" text-anchor="${t[3] || 'start'}">${esc(t[2])}</text>`; });
  return s + '</svg>';
}

// Blokkvázlat: dobozok egy sorban, nyilakkal.
function blocks(labels, aria) {
  const bw = 150, gap = 34, h = 62, W = labels.length * bw + (labels.length - 1) * gap + 20;
  let s = `<svg viewBox="0 0 ${W} 90" role="img" aria-label="${esc(aria || 'blokkvázlat')}">`;
  labels.forEach((l, i) => {
    const x = 10 + i * (bw + gap);
    s += `<rect class="ob" x="${x}" y="14" width="${bw}" height="${h}" rx="8"/>`;
    l.split('\n').forEach((ln, j, a) => { s += `<text class="t bt" x="${x + bw / 2}" y="${14 + h / 2 + 6 + (j - (a.length - 1) / 2) * 19}" text-anchor="middle">${esc(ln)}</text>`; });
    if (i < labels.length - 1) s += `<line class="ob" x1="${x + bw}" y1="${14 + h / 2}" x2="${x + bw + gap - 8}" y2="${14 + h / 2}"/><path class="obf" d="M${x + bw + gap - 1} ${14 + h / 2} l-8 -4 v8 z"/>`;
  });
  return s + '</svg>';
}

// Hatszögrács a klaszterhez: cells: [[q,r,label,cls]] axiális koordinátákkal.
function hexes(cells, aria) {
  const R = 30, pts = (cx, cy) => Array.from({ length: 6 }, (_, k) => { const a = Math.PI / 180 * (60 * k - 30); return (cx + R * Math.cos(a)).toFixed(1) + ',' + (cy + R * Math.sin(a)).toFixed(1); }).join(' ');
  const pos = (q, r) => [R * Math.sqrt(3) * (q + r / 2), R * 1.5 * r];
  const P = cells.map(c => pos(c[0], c[1]));
  const minX = Math.min(...P.map(p => p[0])) - R - 4, maxX = Math.max(...P.map(p => p[0])) + R + 4;
  const minY = Math.min(...P.map(p => p[1])) - R - 4, maxY = Math.max(...P.map(p => p[1])) + R + 4;
  let s = `<svg viewBox="${minX.toFixed(0)} ${minY.toFixed(0)} ${(maxX - minX).toFixed(0)} ${(maxY - minY).toFixed(0)}" role="img" aria-label="${esc(aria || 'cellák')}">`;
  cells.forEach((c, i) => { const [x, y] = P[i]; s += `<polygon class="${c[3] || 'gr'}" points="${pts(x, y)}"/><text class="t" x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" text-anchor="middle">${esc(c[2])}</text>`; });
  return s + '</svg>';
}
module.exports = { plot, blocks, hexes, sample, hu };
