// Közös segédek a gyűjtemény-példatárakhoz (ALL-IN, 5-ösöm).
'use strict';
const R = String.raw;
const AI = 'Forrasok/ALL-IN/allin_atirat.md';
const O5 = 'Forrasok/5-osom/5osom_atirat.md';
const MAIN = 'https://claude.ai/artifact/WnHjsiUtTy3B5H7YoVAyS4';
// lépés: cím, szöveg, sorok [jelölő, TeX, megjegyzés]
const S = (t, s, m) => ({ t, s, m });
const srcAI = ids => ['Forrás (átirat)', ids.map(i => [i, AI])];
const src5 = ids => ['Forrás (átirat)', ids.map(i => [i, O5])];
const ref = list => ['Lásd még', list.map(x => [x[0], x[1] || '03_Hibajegyzek.md'])];
module.exports = { R, AI, O5, MAIN, S, srcAI, src5, ref };
