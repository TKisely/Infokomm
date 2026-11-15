// Jelmagyarázat témakörönként. Kulcs: a jel TeX-alakja szóközök nélkül.
// '' = nem jel (szám, művelet), nem kell magyarázni.
'use strict';
const IGN = ['\\times0{,}01', '\\{1;3;7;9\\}', 'f_1/f_2', 'G_T+G_R', 'h_R/2', 'r\\ggh_T,h_R', '10\\lg25', '\\pm10\\%', '\\cos^2', 'A/2', '\\sqrt2', '\\pm1,\\pm3,\\pm5,\\pm7', '\\sqrt{36}', '\\log_264', 'p_1,\\dots,p_N', 'n-k', 'U+U_m', 'U_v+U_m', 'P_\\text{oldal}/P', '\\hatx/x_\\text{eff}', 'E_{\\max}/E_{\\min}', 'P(X', '\\mathrm{ld}', 't'];
const common = { '\\text{SNR}': 'jel-zaj viszony', '\\Delta\\text{SNR}': 'a jel-zaj viszony változása' };
const T = {
  jelek: { 'x(t)': 'a vizsgált jel', F: 'a jel frekvenciája', C: 'csúcstényező: csúcsérték osztva az effektív értékkel', '\\hatx': 'csúcsérték, a jel legnagyobb abszolút értéke', P: 'átlagteljesítmény 1 Ω-on' },
  minta: { f_s: 'mintavételi frekvencia', T: 'mintavételi idő', T_1: 'első mintavételi idő', T_2: 'második mintavételi idő', 'H_\\text{be}(f)': 'a bemenő szűrő átvitele', 'H(f)': 'a szűrő átviteli függvénye', f: 'a bemenő jel frekvenciája', U: 'a bemenő jel amplitúdója',
    'U_{6{,}2}': 'a kimenő 6,2 kHz-es összetevő amplitúdója', 'B_\\text{össz}': 'a jel teljes sávszélessége a pozitív frekvenciákon', P: 'a jel teljesítménye', R: 'az ellenállás', s_0: 'a teljesítménysűrűség',
    f_L: 'a jel legkisebb frekvenciája', f_H: 'a jel legnagyobb frekvenciája', B: 'a jel sávszélessége', C: 'csúcstényező', n: 'a kvantáló bitszáma', f_AA: '', 'f_{AA}': 'a bemenő (antialiasing) szűrő határfrekvenciája', f_R: 'a visszaállító szűrő határfrekvenciája',
    'f_{s,\\min}': 'a legkisebb mintavételi frekvencia', H: 'a szűrő átvitele', 'B_\\text{be}': 'a bemenő szűrő sávja', 'B_\\text{ki}': 'a kimenő szűrő sávja' },
  kod: { N: 'a forrás szimbólumainak száma', N_1: 'az első forrás szimbólumainak száma', N_2: 'a második forrás szimbólumainak száma', L: 'átlagos kódszóhossz egy szimbólumra', L_1: 'kódszóhossz az első forrásnál', L_2: 'kódszóhossz a második forrásnál',
    'L^{(2)}': 'egy szimbólumpár kódszavának hossza', l: 'kódszóhossz', l_i: 'az i-edik kódszó hossza', '\\mathcalF': 'a forrás (forrás ABC)', 'H(\\mathcalF^2)': 'a szimbólumpárok entrópiája', 
    n: 'a kódszó hossza bitben', k: 'az üzenet hossza bitben', p: 'egy bit hibavalószínűsége', 'P(0)': 'annak valószínűsége, hogy egy bit sem hibás', 'P(1)': 'annak valószínűsége, hogy pontosan 1 bit hibás', 'P(2)': 'annak valószínűsége, hogy pontosan 2 bit hibás',
    '\\mathcalC': 'a kód, a kódszavak halmaza', 'd_{\\min}': 'kódtávolság, két kódszó legkisebb eltérése', '\\mathbfG': 'generátormátrix', G: 'generátormátrix', G_2: 'a második kód generátormátrixa', '\\mathbfB': 'a generátormátrix paritásrésze', B: 'a generátormátrix paritásrésze',
    '\\mathbfv': 'a vett szó', v: 'a vett szó', '\\mathbfH^{\\mathsfT}': 'a paritásellenőrző mátrix transzponáltja', 'H^T': 'a paritásellenőrző mátrix transzponáltja', '\\hat{\\mathbfe}': 'a becsült hibavektor', '\\hat{\\mathbfc}': 'a javított (becsült) kódszó',
    '\\hat{\\mathbfu}': 'a becsült üzenet', '\\hatc': 'a javított (becsült) kódszó', '\\hatu': 'a becsült üzenet', s: 'szindróma', n_min: '', 'n_{\\min}': 'a legkisebb kódszóhossz', f_s: 'mintavételi frekvencia (minta/s)',
    'p(0)': 'a 0 szint valószínűsége', 'p(\\pm1)': 'a ±1 szint valószínűsége', 'p(\\pm2)': 'a ±2 szint valószínűsége', 'p(\\pm3)': 'a ±3 szint valószínűsége', '\\barL': 'átlagos kódszóhossz', p_a: 'az a szimbólum valószínűsége', p_b: 'a b szimbólum valószínűsége', p_A: 'az A szimbólum valószínűsége', p_B: 'a B szimbólum valószínűsége', p_C: 'a C szimbólum valószínűsége',
    C_1: 'az első kód', l_a: 'az a kódszavának hossza', l_b: 'a b kódszavának hossza', l_c: 'a c kódszavának hossza', r: 'szimbólumsebesség (szimbólum/s)' },
  radio: { h_T: 'az adóantenna magassága', h_R: 'a vevőantenna magassága', r: 'az adó és a vevő távolsága', f: 'vivőfrekvencia', '\\lambda': 'hullámhossz', G_T: 'az adóantenna nyeresége', G_R: 'a vevőantenna nyeresége', '\\Gamma': 'a talaj reflexiós tényezője',
    'a_\\mathrm{sz}': 'szakaszcsillapítás', 'f_\\mathrm{KF}': 'középfrekvencia', 'f_\\text{osc}': 'az oszcillátor frekvenciája', f_t: 'tükörfrekvencia', 'r_{\\max}': 'a legnagyobb távolság', P_T: 'adóteljesítmény', P_R: 'vett teljesítmény', 'P_{R,\\min}': 'a vevő érzékenysége (a legkisebb vehető teljesítmény)',
    G: 'antennanyereség', R: 'a parabola sugara', A_h: 'hatásos felület', 'A_{h,T}': 'az adóantenna hatásos felülete', f_m: 'a moduláló (mérő)jel frekvenciája', f_D: 'frekvencialöket', B_v: 'a modulált jel sávszélessége', d: 'átmérő', r_0: 'a zónahatár távolsága' },
  mod: { f_v: 'vivőfrekvencia', f_m: 'a moduláló jel frekvenciája', m: 'modulációs mélység', '\\hats': 'a modulált jel csúcsértéke', P: 'átlagteljesítmény', 's(t)': 'a modulált jel', f_c: 'vivőfrekvencia', 'x(t)': 'a moduláló jel', U_0: 'egyenszint (a burkoló középértéke)', A: 'a modulátor szorzója',
    F: 'vivőfrekvencia', R: 'terhelő ellenállás', U: 'a modulált jel amplitúdója', T_m: 'a moduláló jel periódusideje', T_0: 'a moduláló jel félperiódusa', f_D: 'frekvencialöket', '\\Phi_D': 'fázislöket', B_v: 'a modulált jel sávszélessége', B: 'B paraméter a képletben',
    C: 'csúcstényező', f_s: 'mintavételi frekvencia', '\\mu(t)': 'modulációs tartalom (a fázis eltérése a vivőétől)', '\\hatx': 'a jel csúcsértéke', 's_m(t)': 'a moduláló jel', 's_\\mathrm{FM}(t)': 'az FM-jel', U_m: 'a burkoló kilengése', RC: 'a burkolódemodulátor időállandója' },
  pam: { h_0: 'az elemi jel a saját mintavételi pillanatában', h_1: 'az elemi jel egy jelzési idővel később', 'H(f)': 'az elemi jel spektruma', T: 'jelzési idő', H_V: 'a vevőszűrő átvitele', 'H_V(f)': 'a vevőszűrő átvitele', 'h(t)': 'elemi jel', f_1: 'a lapos rész vége', f_2: 'ahol a spektrum eléri a nullát', A: 'a spektrum értéke 0 Hz-en',
    a_k: 'a k-adik szimbólum amplitúdója', d_k: 'a k-adik szimbólum', t_0: 'a mintavétel helye a jelzési időn belül', 'x(t)': 'a PAM-jel', v: 'bitsebesség', '\\alpha': 'lekerekítési tényező' },
  digmod: { f_D: 'frekvencialöket', F: 'vivőfrekvencia', T: 'jelzési (bit-) idő', f_0: 'a 0-s bit frekvenciája', f_1: 'az 1-es bit frekvenciája', B_v: 'a modulált jel sávszélessége', f_v: 'vivőfrekvencia', U: 'a jel amplitúdója', P: 'átlagteljesítmény', C: 'csúcstényező',
    P_a: 'az a) elrendezés átlagteljesítménye', P_b: 'a b) elrendezés átlagteljesítménye', P_c: 'a c) elrendezés átlagteljesítménye', d_k: 'a vízszintes koordináta', c_k: 'a függőleges koordináta', '\\varphi_{\\max}': 'a megengedett fázishiba', M: 'a konstelláció pontjainak száma',
    B: 'a rendelkezésre álló sávszélesség', '\\alpha': 'lekerekítési tényező', v: 'bitsebesség', R_s: 'szimbólumsebesség', k: 'erősítési tényező', '\\varphi': 'fázishiba', 'B_{\\min}': 'a legkisebb sávszélesség' },
  hang: { P: 'elektromos teljesítmény', L_N: 'hangosságszint (phon)', p: 'hangnyomás', L: 'hangnyomásszint', p_0: 'a hallásküszöb hangnyomása', p_1: 'a keresett hangnyomás', I: 'hangintenzitás', f: 'frekvencia', L_1: 'a szint az első helyen', L_2: 'a szint a második helyen', r_1: 'az első távolság', r_2: 'a második távolság',
    Y: 'világossági jel', C_b: 'kék színkülönbségi jel', C_r: 'vörös színkülönbségi jel', R: 'vörös színjel', G: 'zöld színjel', B: 'kék színjel', 'V(\\lambda)': 'láthatósági függvény' },
  musor: { 'f_\\mathrm{KF}': 'középfrekvencia', f_v: 'a venni kívánt adó frekvenciája', 'f_\\text{osc}': 'az oszcillátor frekvenciája', f_t: 'tükörfrekvencia', S: 'a különbségi (L−R) jel', M: 'az összegjel (L+R)', "L'": 'a vevő bal kimenete', "R'": 'a vevő jobb kimenete',
    B: 'a csatorna sávszélessége', '\\alpha': 'lekerekítési tényező', v: 'bitsebesség', N: 'az OFDM-vivők száma', 'N_\\text{hasznos}': 'az adatot vivő vivők száma', T_0: 'hasznos szimbólumidő', GI: 'a védőintervallum aránya', 'v_\\text{nettó}': 'nettó bitsebesség', M_: '' },
  gsm: { N: 'a klaszter cellaszáma (FRF)' },
  forg: { '\\lambda': 'hívásintenzitás', h: 'átlagos tartási idő', P_b: 'blokkolási valószínűség', A: 'felajánlott forgalom', N: 'kiszolgálók száma', a: 'egy kiszolgáló kihasználtsága', l_p: 'egy beszédszegmens hossza', n: 'szegmensek száma csomagonként', 'l_\\text{fej}': 'a fejrészek hossza',
    'v_\\text{cs}': 'csomagsebesség', B: 'egy hívás sávigénye', 'v_\\text{forrás}': 'a kodek bitsebessége' }
};
const FILE = { ch02: 'minta', ch06: 'kod', ai01: 'jelek', ai02: 'minta', ai03: 'radio', ai04: 'kod', ai05: 'mod', ai06: 'pam', ai07: 'digmod', ai08: 'hang', ai09: 'musor', ai10: 'gsm', ai11: 'forg',
  o01: 'mod', o02: 'digmod', o03: 'pam', o04: 'minta', o05: 'radio', o06: 'kod', o07: 'hang', o08: 'musor', o09: 'gsm', o10: 'forg' };
function glossFor(file) {
  const g = Object.assign({}, common, T[FILE[file]] || {});
  IGN.forEach(k => { g[k] = ''; });
  return g;
}
module.exports = { glossFor };
