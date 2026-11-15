// Rajzok a példákhoz: azonosító → [{ t: cím, svg, cap: [mire figyelj rajzoláskor] }].
// Minden görbe a feladat képletéből számolódik, tehát pontos (nem kézi vázlat).
'use strict';
const { plot, blocks, hexes, hu } = require('./_fig.js');
const R = String.raw;
const PI2 = 2 * Math.PI;
const ticks = (a, b, d, f = v => hu(v)) => { const r = []; for (let v = a; v <= b + 1e-9; v += d) r.push([Math.round(v * 1e6) / 1e6, f(v)]); return r; };

// ---------- AM ----------
// t µs-ban, f kHz-ben: a fázis 2π·f·t/1000
function amTime({ fv, fm, U, Um, T, sin = false, aria }) {
  const env = t => U + Um * (sin ? Math.sin(PI2 * fm * t / 1000) : Math.cos(PI2 * fm * t / 1000));
  const top = U + Um, ymax = Math.ceil(top * 1.15 * 2) / 2;
  const Tm = 1000 / fm;
  return plot({
    w: 680, h: 240, x: [0, T], y: [-ymax, ymax], xl: 't [µs]', yl: 's(t) [V]', aria,
    xt: ticks(0, T, Tm / 2 >= T / 8 ? Tm / 2 : Tm, v => hu(v, 1)),
    yt: [[top, hu(top)], [U - Um, hu(U - Um)], [-(U - Um), hu(-(U - Um))], [-top, hu(-top)]],
    series: [{ f: t => env(t) * Math.cos(PI2 * fv * t / 1000), n: Math.max(1200, Math.round(fv * T / 1000 * 60)), cls: 'jl' },
      { f: env, cls: 'ac dash' }, { f: t => -env(t), cls: 'ac dash' }]
  });
}
function amSpec({ fv, fm, U, Um, aria, labs }) {
  const a = Um / 2;
  return plot({
    w: 680, h: 190, x: [fv - 2.2 * fm, fv + 2.2 * fm], y: [0, U * 1.3], xl: 'f [kHz]', yl: 'amplitúdó [V]', aria,
    xt: [[fv - fm, hu(fv - fm)], [fv, hu(fv)], [fv + fm, hu(fv + fm)]],
    stems: [[fv - fm, a, 'ac', labs ? labs[0] : hu(a) + ' V'], [fv, U, 'jl', labs ? labs[1] : hu(U) + ' V'], [fv + fm, a, 'ac', labs ? labs[2] : hu(a) + ' V']]
  });
}
const amCap = ({ fv, fm, U, Um, T }) => [
  R`A tengelyek: vízszintesen $t$ µs-ban, függőlegesen $s(t)$ V-ban. Előbb a burkolót (szaggatott) rajzold meg, utána a vivőt közéjük.`,
  R`A burkoló $${hu(U - Um)}$ V és $${hu(U + Um)}$ V között ingadozik ($U\pm U_m$), a tükörképe a negatív oldalon van. A jel csúcsai a burkolót érintik.`,
  R`Periódusok: $T_m=1/${hu(fm)}\ \text{kHz}=${hu(1000 / fm, 1)}$ µs, $T_v=1/${hu(fv)}\ \text{kHz}=${hu(1000 / fv, 1)}$ µs. ${hu(T, 1)} µs alatt ${hu(T * fm / 1000, 1)} moduláló és ${hu(T * fv / 1000, 1)} vivőperiódus fér el.`
];

// ---------- spektrum-sávok ----------
// ramp: a sáv „teteje” ferde, hogy látsszon a tükrözés (az alak tetszőleges)
const band = (f0, f1, up, cls, h = 1) => ({ cls, pts: [[f0, 0], [f0, up ? 0.45 * h : h], [f1, up ? h : 0.45 * h], [f1, 0]] });

// ---------- digitális jelek (idő T egységben) ----------
function digi({ bits, f, title, total, aria, h = 150, ymax = 1.3 }) {
  const n = bits.length;
  return plot({ w: 680, h, x: [0, total || n], y: [-ymax, ymax], aria, xl: 't / T', yt: [[1, '1'], [-1, '−1']],
    xt: ticks(0, total || n, 1, v => hu(v, 1)),
    vl: bits.map((b, i) => [i, 'gr dash']).slice(1),
    texts: bits.map((b, i) => [i + 0.5, ymax * 0.92, String(b), 'middle', 'tm']),
    series: [{ f, n: 1600, cls: 'jl' }] });
}
// folytonos fázisú FSK: a fázis az eddigi frekvenciák integrálja
function fskPhase(bits, fr) { // fr(b): periódus/T
  return t => { let ph = 0; const k = Math.min(bits.length - 1, Math.floor(t)); for (let i = 0; i < k; i++) ph += fr(bits[i]); ph += fr(bits[k]) * (t - k); return Math.cos(PI2 * ph); };
}

module.exports = {
  // ===== 5-ösöm =====
  o1_02: [{ t: 'Számláló típusú FM-demodulátor', svg: blocks(['FM-jel\nbemenet', 'nullátmenet-\ndetektor', 'impulzus-\ngenerátor', 'aluláteresztő\nszűrő', 'kimenet\n∝ f(t)−f_v'], 'FM-demodulátor blokkvázlata'),
    cap: [R`Négy doboz, balról jobbra. A nullátmenet-detektor minden nullátmenetnél jelez, az impulzusgenerátor minden jelzésre egy azonos alakú impulzust ad, az aluláteresztő átlagol.`,
      R`A kimenet annál nagyobb, minél sűrűbbek a nullátmenetek, vagyis a pillanatnyi frekvenciával arányos.`] }],
  o1_04: [{ t: 'Időfüggvény, 200 µs', svg: amTime({ fv: 60, fm: 10, U: 1.5, Um: 0.3, T: 200, aria: 'AM-jel 60 kHz-es vivővel' }), cap: amCap({ fv: 60, fm: 10, U: 1.5, Um: 0.3, T: 200 }) },
    { t: 'Spektrum', svg: amSpec({ fv: 60, fm: 10, U: 1.5, Um: 0.3, aria: 'Az AM-jel spektruma' }), cap: [R`Három vonal: a vivő 60 kHz-en 1,5 V, az oldalsávok 50 és 70 kHz-en $U_m/2=0{,}15$ V.`] }],
  o1_05: [{ t: 'Időfüggvény, 50 µs', svg: amTime({ fv: 80, fm: 20, U: 2, Um: 0.5, T: 50, sin: true, aria: 'AM-jel 80 kHz-es vivővel' }), cap: amCap({ fv: 80, fm: 20, U: 2, Um: 0.5, T: 50 }).concat([R`A moduláló itt szinusz, ezért a burkoló $t=0$-ban a középértéken (2 V) indul, és felfelé megy.`]) }],
  o1_06: [
    { t: 'A moduláló jel (a képernyő felső csatornája)', svg: plot({ w: 680, h: 130, x: [0, 400], y: [-1.4, 1.4], xl: 't [µs]', xt: ticks(0, 400, 100), yt: [[1, 'max'], [-1, 'min']], series: [{ f: t => Math.cos(PI2 * 2.5 * t / 1000) }], aria: 'moduláló szinusz' }) },
    { t: 'Az FM-jel (alsó csatorna), f_D = 25 kHz', svg: plot({ w: 680, h: 170, x: [0, 400], y: [-9, 9], xl: 't [µs]', yl: 's(t) [V]', xt: ticks(0, 400, 100), yt: [[7.4, '7,4'], [-7.4, '−7,4']], series: [{ f: t => 7.4 * Math.cos(PI2 * 50 * t / 1000 + 10 * Math.sin(PI2 * 2.5 * t / 1000)), n: 4000 }], aria: 'FM-jel' }),
      cap: [R`Az amplitúdó végig 7,4 V: a burkoló állandó, ez különbözteti meg az AM-től.`,
        R`A jel ott a legsűrűbb, ahol a moduláló jel a csúcsán van ($t=0$ és 400 µs körül, kb. 75 kHz), és ott a legritkább, ahol a moduláló a minimumán ($t=200$ µs, kb. 25 kHz). Ez az FM ismertetőjele.`,
        R`Egy moduláló periódus (400 µs) alatt összesen 20 vivőperiódus van, mint modulálatlanul.`] }],
  o1_07: [
    { t: 'A képernyőn látható AM-jel, 400 µs', svg: amTime({ fv: 50, fm: 2.5, U: 4, Um: 2, T: 400, aria: 'AM-jel az oszcilloszkópon' }), cap: amCap({ fv: 50, fm: 2.5, U: 4, Um: 2, T: 400 }) },
    { t: 'Spektrum', svg: amSpec({ fv: 50, fm: 2.5, U: 4, Um: 2, aria: 'spektrum' }), cap: [R`47,5 kHz: 1 V, 50 kHz: 4 V, 52,5 kHz: 1 V.`] }],
  o3_01: [
    { t: 'A PAM-jel a …0-1-1-0-0-1… bitsorra', svg: plot({ w: 680, h: 200, x: [0, 6], y: [-1.7, 1.7], xl: 't / T', xt: ticks(0, 6, 1, v => hu(v, 0)), yt: [[1.4, '1,4'], [0.9, '0,9'], [-0.9, '−0,9'], [-1.4, '−1,4']],
      vl: [1, 2, 3, 4, 5].map(k => [k, 'gr dash']), texts: ['0', '1', '1', '0', '0', '1'].map((b, i) => [i + 0.5, 1.58, b, 'middle', 'tm']),
      series: [{ pts: (() => { const d = [-1, 1, 1, -1, -1, 1], pts = []; d.forEach((v, k) => { const y = 1.15 * v + 0.25 * (k ? d[k - 1] : -1); pts.push([k, y], [k + 1, y]); }); return pts; })() }], aria: 'PAM-jel' }),
      cap: [R`Időrésenként egy vízszintes szakasz: $1{,}15\,d_k+0{,}25\,d_{k-1}$. Ha az előző bit ugyanaz, 1,4, ha más, 0,9 a szint (előjellel).`, R`Az első időrésnél az előző bitet itt 0-nak (−1) vettük, ezért −1,4.`] },
    { t: 'Négyszintű szemábra a mintavételi pillanatban', svg: plot({ w: 680, h: 230, x: [0, 1], y: [-4.6, 4.6], xl: 't / T', xt: [[0, '0'], [0.75, '3T/4'], [1, 'T']],
      yt: [[4.2, '4,2'], [2.7, '2,7'], [1.9, '1,9'], [0.4, '0,4'], [-0.4, '−0,4'], [-1.9, '−1,9'], [-2.7, '−2,7'], [-4.2, '−4,2']],
      hl: [[2.3, 'ac dash', 'küszöb 2,3'], [0, 'ac dash', 'küszöb 0'], [-2.3, 'ac dash', 'küszöb −2,3']],
      segs: [-3, -1, 1, 3].flatMap(d => [-3, -1, 1, 3].map(p => [0.05, 1.15 * d + 0.25 * p, 0.95, 1.15 * d + 0.25 * p, 'jl'])), vl: [[0.75, 'gr dash', 'mintavétel']], aria: 'négyszintű szemábra' }),
      cap: [R`Szimbólumonként négy vonal ($1{,}15d\pm0{,}25$ és $\pm0{,}75$): pl. $d=1$-nél 0,4, 0,9, 1,4, 1,9.`, R`A szem nyitott: a 0,4 és a 2,7 is a saját küszöbe jó oldalán van. A legkisebb tartalék 0,4.`] }],
  o3_02: [{ t: 'A spektrum és eltolt másolata', svg: plot({ w: 680, h: 210, x: [-1.1, 2.1], y: [0, 1.25], xl: 'f·T', yl: 'H/(h₀T)', xt: [[-1, '−1'], [-0.5, '−0,5'], [0, '0'], [0.5, '0,5'], [1, '1'], [2, '2']], yt: [[1, '1'], [0.5, '0,5']],
    series: [{ f: x => Math.abs(x) < 1 ? Math.cos(Math.PI / 2 * x) ** 2 : 0, cls: 'jl' }, { f: x => Math.abs(x - 1) < 1 ? Math.cos(Math.PI / 2 * (x - 1)) ** 2 : 0, cls: 'bl dash' }, { pts: [[0, 1], [1, 1]], cls: 'ac' }],
    texts: [[-0.6, 1.1, 'H(f)', 'middle', 'tm'], [1.6, 0.6, 'H(f−1/T)', 'middle', 'tm'], [0.5, 1.08, 'összeg = 1', 'middle', 'tm']], aria: 'emelt koszinusz' }),
    cap: [R`$-1/T$ és $1/T$ között egy „púp”, a csúcsa $f=0$-ban $h_0T$, a fele $f=\pm1/(2T)$-nél.`, R`A $1/T$-vel eltolt példány (szaggatott) éppen kiegészíti: az összeg a teljes sávban állandó. Ez a Nyquist-feltétel rajza.`] }],
  o3_03: [{ t: 'Az elemi jel spektruma és a 2 MHz-cel eltolt másolata', svg: plot({ w: 680, h: 200, x: [0, 3.3], y: [0, 1.25], xl: 'f [MHz]', xt: [[0.8, '0,8'], [1, '1'], [1.2, '1,2'], [2, '2'], [2.8, '2,8'], [3.2, '3,2']], yt: [[1, '1'], [0.5, '0,5']],
    series: [{ f: x => x <= 0.8 ? 1 : x >= 1.2 ? 0 : 0.5 * (1 + Math.cos(Math.PI * (x - 0.8) / 0.4)), cls: 'jl' }, { f: x => { const y = Math.abs(x - 2); return y <= 0.8 ? 1 : y >= 1.2 ? 0 : 0.5 * (1 + Math.cos(Math.PI * (y - 0.8) / 0.4)); }, cls: 'bl dash' }],
    vl: [[1, 'ac dash', '1/(2T)']], aria: 'emelt koszinusz 0,8 és 1,2 MHz között' }),
    cap: [R`0,8 MHz-ig 1, onnan koszinuszosan 0-ra 1,2 MHz-ig, 1 MHz-en 0,5. A lecsengés az 1 MHz-es pontra szimmetrikus.`, R`A $1/T=2$ MHz-cel eltolt másolat lecsengése a 0,8 és 1,2 MHz közötti részt pontosan kiegészíti.`] }],
  o4_01: [{ t: 'A kimenet összetevői, f_s = 10 kHz', svg: plot({ w: 680, h: 200, x: [0, 14], y: [0, 1.35], xl: 'f [kHz]', xt: [1, 3, 5, 7, 9, 10, 11, 13].map(v => [v, String(v)]),
    polys: [{ cls: 'bb', pts: [[0, 0], [0, 1.2], [4, 1.2], [4, 0]] }],
    vl: [[10, 'ac dash', 'fₛ'], [4, 'bl dash'], [10, 'bl dash']],
    stems: [[1, 1, 'jl', '1'], [3, 1 / 3, 'jl', '1/3'], [7, 1 / 3, 'ac', 'kép'], [9, 1, 'ac', 'kép'], [11, 1, 'bl'], [13, 1 / 3, 'bl']],
    texts: [[2, 1.27, 'előszűrő sávja (3 és 5 kHz közt vág)', 'middle', 'tm'], [12, 1.12, 'levágva', 'middle', 'tm']], aria: 'négyszögjel álképei' }),
    cap: [R`A négyszögjel összetevői 1, 3, 5, … kHz-en, amplitúdójuk $1/k$ arányú. Az előszűrő csak az 1 és a 3 kHz-et engedi át.`, R`$f_s=10$ kHz körül tükröződnek: $10-3=7$ és $10-1=9$ kHz (kép), a $10+1=11$ és $10+3=13$ kHz-et a kimenő szűrő levágja.`] }],
  o2_02: [{ t: '36-QAM konstelláció a döntési határokkal', svg: (() => { const pts = []; [-5, -3, -1, 1, 3, 5].forEach(x => [-5, -3, -1, 1, 3, 5].forEach(y => pts.push([x, y, 'jl']))); const a = (45 + 10.55) * Math.PI / 180, r = 5 * Math.SQRT2;
    return plot({ w: 520, h: 520, equal: true, x: [-6.5, 6.5], y: [-6.5, 6.5], xt: [[-4, '−4'], [-2, '−2'], [2, '2'], [4, '4']], yt: [[-4, '−4'], [-2, '−2'], [2, '2'], [4, '4']],
      dots: pts.concat([[r * Math.cos(a), r * Math.sin(a), 'ac']]), texts: [[r * Math.cos(a) - 0.4, r * Math.sin(a) + 0.35, 'a sarokpont 10,6°-kal elfordulva', 'end', 'tm']], circles: [[0, 0, r, 'ac dash']], segs: [[0, 0, 5, 5, 'gr'], [4, -6.4, 4, 6.4, 'ac dash']], aria: '36-QAM' }); })(),
    cap: [R`$6\times6$ pont a $\pm1$, $\pm3$, $\pm5$ koordinátákon, a döntési határok (rács) a 0, $\pm2$, $\pm4$ értékeknél.`, R`A sarokpont $(5,5)$ a legmesszebb van, $5\sqrt2$ sugarú körön mozog elforduláskor. 10,6°-nál éri el a 4-es határt (piros szaggatott).`] }],
  o2_05: [{ t: 'A nyolc tribit és a vett pontok', svg: plot({ w: 520, h: 520, equal: true, x: [-4, 4], y: [-4, 4], xt: ticks(-3, 3, 1, v => hu(v, 0)), yt: ticks(-3, 3, 1, v => hu(v, 0)), xl: 'd', yl: 'c',
    dots: [[1, 1, 'jl', '000'], [0, 3, 'jl', '001'], [-1, 1, 'jl', '010', 'end'], [-3, 0, 'jl', '011'], [-1, -1, 'jl', '100', 'end'], [0, -3, 'jl', '101'], [1, -1, 'jl', '110'], [3, 0, 'jl', '111', 'end'],
      [-0.2, 2.99, 'ac'], [-0.94, -1.07, 'ac'], [-1.08, 0.93, 'ac'], [-2.98, -0.21, 'ac']], aria: 'tribit konstelláció' }),
    cap: [R`Kék pontok: az ideális tribitek. Piros pontok: a vett értékek, mind kb. 4°-kal az óramutatóval ellentétesen elfordulva, ugyanazon a sugáron.`] }],

  // ===== ALL-IN =====
  ai2_02: [{ t: 'A mintasorozat spektruma f_s = 75 kHz-nél', svg: plot({ w: 680, h: 180, x: [0, 160], y: [0, 1.35], xl: 'f [kHz]', xt: [0, 30, 45, 75, 105, 120, 150].map(v => [v, String(v)]),
    polys: [band(0, 30, false, 'ba'), band(45, 75, true, 'bj'), band(75, 105, false, 'ba'), band(120, 150, true, 'ba')], vl: [[75, 'ac dash', 'fₛ'], [150, 'ac dash', '2fₛ']], aria: 'spektrum 75 kHz-es mintavétellel' }),
    cap: [R`Kék: az eredeti 45…75 kHz-es sáv. Piros: a képek $n\cdot75\pm(45\ldots75)$ kHz-en: 0…30, 75…105, 120…150 kHz.`, R`A $75-f$ és $150-f$ képek tükrözöttek (a ferde tető csak ezt jelzi, a valódi alak tetszőleges). A 75…105 kHz-es kép épp érinti az eredetit.`] }],
  ai2_03: [{ t: 'A mintasorozat spektruma f_s = 114 kHz-nél', svg: plot({ w: 680, h: 180, x: [0, 345], y: [0, 1.35], xl: 'f [kHz]', xt: [6, 60, 108, 168, 228, 282, 336].map(v => [v, String(v)]),
    polys: [band(6, 54, false, 'ba'), band(60, 108, true, 'bj'), band(120, 168, false, 'ba'), band(174, 222, true, 'ba'), band(234, 282, false, 'ba'), band(288, 336, true, 'ba')], vl: [[114, 'ac dash', 'fₛ'], [228, 'ac dash', '2fₛ']], aria: 'spektrum 114 kHz-es mintavétellel' }),
    cap: [R`Kék: az eredeti 60…108 kHz. Piros: a képek, felváltva tükrözve, 6 kHz-es résekkel. Sehol nincs átfedés.`] }],
  ai5_01: [{ t: 'Spektrum', svg: amSpec({ fv: 100, fm: 20, U: 4, Um: 2, aria: 'spektrum' }), cap: [R`Vivő 100 kHz-en 4 V, oldalsávok 80 és 120 kHz-en 1 V.`] }],
  ai5_02: [{ t: 'Időfüggvény, egy moduláló periódus', svg: amTime({ fv: 240, fm: 30, U: 3, Um: 3, T: 1000 / 30, aria: '100%-os AM' }), cap: amCap({ fv: 240, fm: 30, U: 3, Um: 3, T: 1000 / 30 }).concat([R`$m=1$: a burkoló épp eléri a nullát (a burkoló minimuma 0 V).`]) },
    { t: 'Spektrum', svg: amSpec({ fv: 240, fm: 30, U: 3, Um: 3, aria: 'spektrum' }), cap: [R`240 kHz: 3 V, 210 és 270 kHz: 1,5 V.`] }],
  ai5_03: [{ t: 'Időfüggvény, 50 µs', svg: amTime({ fv: 100, fm: 20, U: 2, Um: 1, T: 50, aria: 'AM-jel' }), cap: amCap({ fv: 100, fm: 20, U: 2, Um: 1, T: 50 }) },
    { t: 'Spektrum', svg: amSpec({ fv: 100, fm: 20, U: 2, Um: 1, aria: 'spektrum' }), cap: [R`100 kHz: 2 V, 80 és 120 kHz: 0,5 V.`] }],
  ai5_04: [{ t: 'Időfüggvény, 50 µs', svg: amTime({ fv: 80, fm: 20, U: 2, Um: 0.5, T: 50, aria: 'AM-jel' }), cap: amCap({ fv: 80, fm: 20, U: 2, Um: 0.5, T: 50 }) }],
  ai5_05: [{ t: 'A spektrum csúcsértékekben', svg: amSpec({ fv: 100, fm: 20, U: 2, Um: 1, labs: ['0,5 V (−9 dBV)', '2 V (3 dBV)', '0,5 V (−9 dBV)'], aria: 'spektrum' }), cap: [R`A dBV effektív értéket ad, a rajzon a csúcsértékek ($\sqrt2$-szeres) vannak.`] }],
  ai5_06: [{ t: 'A képernyőn látható AM-jel, 400 µs', svg: amTime({ fv: 50, fm: 2.5, U: 4, Um: 2, T: 400, aria: 'AM-jel' }), cap: amCap({ fv: 50, fm: 2.5, U: 4, Um: 2, T: 400 }) }],
  ai5_10: [{ t: 'Az FM-jel a moduláló jellel', svg: plot({ w: 680, h: 200, x: [0, 400], y: [-9, 9], xl: 't [µs]', xt: ticks(0, 400, 100), yt: [[7.4, '7,4'], [-7.4, '−7,4']],
    series: [{ f: t => 7.4 * Math.cos(PI2 * 50 * t / 1000 + 10 * Math.sin(PI2 * 2.5 * t / 1000)), n: 4000 }, { f: t => 8.4 * Math.cos(PI2 * 2.5 * t / 1000), cls: 'ac dash' }], aria: 'FM-jel' }),
    cap: [R`Szaggatott: a moduláló jel (léptékezve). FM-nél a jel ott a legsűrűbb, ahol a moduláló a csúcsán van. PM-nél a legsűrűbb rész a moduláló emelkedő nullátmenetéhez esne.`] }],
  ai5_16: [
    { t: 'A moduláló jel spektruma', svg: plot({ w: 680, h: 160, x: [-0.6, 0.6], y: [0, 1.3], xl: 'f [kHz]', xt: [[-0.5, '−0,5'], [-0.1, '−0,1'], [0.1, '0,1'], [0.5, '0,5']], series: [{ pts: [[-0.6, 0], [-0.5, 0], [-0.1, 1], [0, 0], [0.1, 1], [0.5, 0], [0.6, 0]] }], aria: 'moduláló spektrum' }) },
    { t: 'Az AM/SSB-SC/LSB jel spektruma', svg: plot({ w: 680, h: 160, x: [4.3, 5.7], y: [0, 1.3], xl: 'f [kHz]', xt: [[4.5, '4,5'], [4.9, '4,9'], [5, '5'], [5.5, '5,5']], series: [{ pts: [[4.3, 0], [4.5, 0], [4.9, 1], [5, 0], [5.7, 0]] }, { pts: [[5, 0], [5.1, 1], [5.5, 0]], cls: 'gr dash' }], vl: [[5, 'ac dash', 'vivő (elnyomva)']], aria: 'LSB spektrum' }),
      cap: [R`Csak az alsó oldalsáv marad: a 0,1…0,5 kHz-es rész tükrözve 4,5…4,9 kHz-re kerül, a csúcs 4,9 kHz-en. A felső oldalsáv (szürke szaggatott) és a vivő nincs a jelben.`] }],
  ai6_06: [{ t: 'A vett jel (a burkoló szintjei feliratozva)', svg: (() => { const u = [0, 1.42, 0.71, 1.42, 2.13, 0.71, 0, 1.42, 0.71], A = t => u[Math.min(u.length - 1, Math.floor(t))];
    return plot({ w: 680, h: 200, x: [0, 9], y: [-2.5, 2.5], xl: 't / T', xt: ticks(0, 9, 1, v => hu(v, 0)), yt: [[2.13, '2,13'], [1.42, '1,42'], [0.71, '0,71']], series: [{ f: t => A(t) * Math.cos(PI2 * t), n: 2000 }, { f: A, cls: 'ac dash' }], aria: 'vett OOK-jel' }); })(),
    cap: [R`Időrésenként egy vivőperiódus, az amplitúdó $0{,}71a_{k-1}+0{,}35a_{k-2}$: 1,42, 0,71, 1,42, 2,13, 0,71, 0, 1,42, 0,71 (az első időrés még üres).`] }],
  ai7_01: [{ t: 'BPSK a 10110 bitsorra', svg: digi({ bits: [1, 0, 1, 1, 0], total: 5, f: t => ([1, 0, 1, 1, 0][Math.min(4, Math.floor(t))] ? 1 : -1) * Math.cos(PI2 * 1.5 * t), aria: 'BPSK-jel' }),
    cap: [R`Bitenként 1,5 vivőperiódus. 1-nél $+\cos$, 0-nál $-\cos$: a szaggatott bithatáron a jel előjelet vált, ha a bit változik.`, R`Mivel a bitidő nem egész számú periódus, a fázisugrás a vivő más-más pontjára esik.`] }],
  ai7_03: [
    { t: 'FSK a 0110 bitsorra (0 → 200 kHz, 1 → 100 kHz, T = 20 µs)', svg: digi({ bits: [0, 1, 1, 0], total: 4, f: fskPhase([0, 1, 1, 0], b => (b ? 2 : 4)), aria: 'FSK-jel' }), cap: [R`Bitenként 4, illetve 2 teljes periódus, ezért a bithatáron a jel folytonos.`] },
    { t: 'MSK ugyanerre (162,5 és 137,5 kHz)', svg: digi({ bits: [0, 1, 1, 0], total: 4, f: fskPhase([0, 1, 1, 0], b => (b ? 2.75 : 3.25)), aria: 'MSK-jel' }), cap: [R`Bitenként 3,25, illetve 2,75 periódus. A fázis folytonos marad, nincs ugrás a bithatáron.`] }],
  ai7_04: [
    { t: 'OOK', svg: digi({ bits: [1, 0, 1, 1, 0], total: 5, h: 120, f: t => ([1, 0, 1, 1, 0][Math.min(4, Math.floor(t))]) * Math.cos(PI2 * t), aria: 'OOK' }) },
    { t: 'BPSK', svg: digi({ bits: [1, 0, 1, 1, 0], total: 5, h: 120, f: t => ([1, 0, 1, 1, 0][Math.min(4, Math.floor(t))] ? 1 : -1) * Math.cos(PI2 * t), aria: 'BPSK' }) },
    { t: 'FSK (0 → 1/T, 1 → 1,5/T)', svg: digi({ bits: [1, 0, 1, 1, 0], total: 5, h: 120, f: fskPhase([1, 0, 1, 1, 0], b => (b ? 1.5 : 1)), aria: 'FSK' }),
      cap: [R`OOK: 1-nél egy vivőperiódus, 0-nál semmi. BPSK: 0-nál ellentétes fázis. FSK: 0-nál 1, 1-nél 1,5 periódus bitenként, folytonos fázissal.`] }],
  ai7_05: [{ t: '16-PSK', svg: plot({ w: 460, h: 460, equal: true, x: [-1.9, 1.9], y: [-1.9, 1.9], xt: [], yt: [],
    circles: [[0, 0, Math.SQRT2, 'gr dash']], dots: Array.from({ length: 16 }, (_, k) => [Math.SQRT2 * Math.cos(k * Math.PI / 8), Math.SQRT2 * Math.sin(k * Math.PI / 8), 'jl']),
    segs: [[0, 0, 1.85 * Math.cos(Math.PI / 16), 1.85 * Math.sin(Math.PI / 16), 'ac dash'], [0, 0, 1.85 * Math.cos(-Math.PI / 16), 1.85 * Math.sin(-Math.PI / 16), 'ac dash']],
    texts: [[1.5, 0.05, '±11,25°', 'start', 'tm']], aria: '16-PSK' }),
    cap: [R`16 pont egy $\sqrt2$ sugarú körön, 22,5°-onként. A döntési határok (piros) a pontok között félúton: egy pont $\pm11{,}25°$-ot fordulhat.`] }],
  ai7_06: [
    { t: 'a) P = 6A²', svg: plot({ w: 300, h: 300, equal: true, x: [-3, 3], y: [-3, 3], xt: [[-2, '−2A'], [2, '2A']], yt: [], dots: [[0, 2], [0, -2], [2, 0], [-2, 0], [2, 2], [2, -2], [-2, 2], [-2, -2]].map(p => [p[0], p[1], 'jl']), aria: '8-QAM a' }) },
    { t: 'b) P = 5,25A²', svg: plot({ w: 300, h: 300, equal: true, x: [-3, 3], y: [-3, 3], xt: [[-2, '−2A'], [2, '2A']], yt: [], dots: [[1, 0], [-1, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]].map(p => [p[0], p[1], 'ac']), aria: '8-QAM b' }) },
    { t: 'c) P = 6A²', svg: plot({ w: 300, h: 300, equal: true, x: [-4, 4], y: [-4, 4], xt: [[-3, '−3A'], [3, '3A']], yt: [], dots: [[1, 1], [1, -1], [-1, 1], [-1, -1], [3, 1], [3, -1], [-3, 1], [-3, -1]].map(p => [p[0], p[1], 'jl']), aria: '8-QAM c' }),
      cap: [R`Mindhárom elrendezésben a legközelebbi pontok távolsága $2A$. A b) a legtakarékosabb, mert két pontja csak $A$ távolságra van az origótól.`] }],
  ai7_07: 'o2_05', ai7_09: 'o2_02', ai6_03: 'o3_02', ai5_06b: null,
  ai8_10: [{ t: 'A láthatósági függvény (közelítő görbe)', svg: plot({ w: 680, h: 200, x: [380, 780], y: [0, 1.15], xl: 'λ [nm]', yl: 'V(λ)', xt: [400, 450, 500, 555, 600, 650, 700, 750].map(v => [v, String(v)]), yt: [[1, '1'], [0.5, '0,5']],
    series: [{ f: l => 1.019 * Math.exp(-285.4 * (l / 1000 - 0.559) ** 2) }], vl: [[555, 'ac dash', 'max: 555 nm']], aria: 'láthatósági függvény' }),
    cap: [R`Harang alakú görbe kb. 400 és 700 nm között, a maximuma 1 (normált) 555 nm-nél (sárgászöld). A rajz a szokásos Gauss-közelítés, alakra jó, pontos értékekre a CIE-táblázat a mérvadó.`] }],
  ai9_05: [
    { t: 'A sztereó multiplex jel spektruma', svg: plot({ w: 680, h: 190, x: [0, 62], y: [0, 1.3], xl: 'f [kHz]', xt: [15, 19, 23, 38, 53, 57].map(v => [v, String(v)]),
      polys: [{ cls: 'bj', pts: [[0.05, 0], [0.05, 1], [15, 1], [15, 0]] }, { cls: 'ba', pts: [[23, 0], [23, 0.5], [37.95, 0.5], [37.95, 0]] }, { cls: 'ba', pts: [[38.05, 0], [38.05, 0.5], [53, 0.5], [53, 0]] }, { cls: 'bb', pts: [[55.5, 0], [55.5, 0.12], [58.5, 0.12], [58.5, 0]] }],
      stems: [[19, 0.25, 'bl', 'pilot']], vl: [[38, 'ac dash', '38 (elnyomva)']], texts: [[7.5, 1.08, 'M = L+R', 'middle'], [30.5, 0.6, 'S alsó', 'middle', 'tm'], [45.5, 0.6, 'S felső', 'middle', 'tm'], [57, 0.2, 'RDS', 'middle', 'tm']], aria: 'sztereó multiplex' }),
      cap: [R`$M$: 0,05…15 kHz. Pilot: 19 kHz, kis vonal. $S$: 23…53 kHz két oldalsávval, a 38 kHz-es segédvivő nincs benne. RDS: 57 kHz.`] },
    { t: 'b) 440 Hz-es fütty a bal mikrofonba', svg: plot({ w: 680, h: 160, x: [0, 42], y: [0, 1.3], xl: 'f [kHz]', xt: [[0.44, '0,44'], [19, '19'], [37.56, '37,56'], [38.44, '38,44']], stems: [[0.44, 1, 'jl'], [19, 0.25, 'bl'], [37.56, 0.5, 'ac'], [38.44, 0.5, 'ac']], aria: 'fütty összetevői' }),
      cap: [R`Négy vonal: 0,44 kHz ($M$), 19 kHz (pilot), 37,56 és 38,44 kHz ($S$ két oldalsávja).`] }],
  ai9_07: [{ t: 'Az FM sztereó alapsávi spektruma', svg: null, ref: 'ai9_05' }],
  ai10_01: [{ t: 'N = 7-es klaszter két szomszédjával', svg: (() => { const off = [[0, 0], [1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]]; const cells = []; [[[0, 0], 'bj'], [[2, 1], 'bb'], [[-1, 3], 'ba']].forEach(([c, cls]) => off.forEach((o, i) => cells.push([c[0] + o[0], c[1] + o[1], String(i + 1), cls]))); return hexes(cells, 'hét cellás klaszterek'); })(),
    cap: [R`Egy klaszter: egy középső hatszög és a hat szomszédja, 1-től 7-ig számozva. A szomszéd klasztereket úgy told el (két cella egy irányba, egy cella 60°-kal elfordulva), hogy az azonos számú cellák egymástól a lehető legmesszebb legyenek.`] }]
};
// hivatkozások feloldása (azonos rajz több példánál)
for (const k of Object.keys(module.exports)) {
  const v = module.exports[k];
  if (v === null) delete module.exports[k];
  else if (typeof v === 'string') module.exports[k] = module.exports[v];
  else if (Array.isArray(v) && v.length === 1 && v[0].ref) module.exports[k] = [Object.assign({}, module.exports[v[0].ref][0], { t: v[0].t })];
}
