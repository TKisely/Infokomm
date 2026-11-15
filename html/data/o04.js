'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f4', num: '4', short: 'Mintavétel', title: 'Mintavételezés és kvantálás',
  lead: R`Mi jelenik meg a kimeneten, és milyen mintavételi frekvenciák választhatók. Négyszögjelnél a páratlan felharmonikusok mind „képeket” adnak.`,
  alap: [
    { id: 'b4-alias', badge: 'A1', title: 'Álképek és két szűrő',
      html: R`<p>Egy $f$ bemenet a mintavétel után $nf_s\pm f$ frekvenciákon jelenik meg. Kimeneti amplitúdó: $U_\text{be}H_\text{elő}(f)H_\text{utó}(f_\text{ki})$. Az előszűrő hiánya átlapolódást okoz (a sávba eső hamis összetevőt), ezt utólag nem lehet eltávolítani. Sáváteresztő jelre: $2f_H/k\le f_s\le2f_L/(k-1)$. Kvantálás: $\text{SNR}=10\lg(3/C^2)+10\lg(f_s/2B)+6{,}02n$ dB.</p>` }
  ],
  ex: [
    { id: 'o4_01', num: '4.1', title: 'Négyszögjelből csak 1, 3, 7, 9 kHz', tags: ['vizsga'],
      src: R`5-ösöm 12. oldal · 5o_12_1`,
      task: R`<p>A be- és kimenő szűrő ideális aluláteresztő, de más a sávjuk. A bemenet 1 kHz-es négyszögjel (páratlan felharmonikusok), a kimeneten csak 1, 3, 7, 9 kHz jelenik meg. a) A szűrők sávja? b) A mintavételi frekvencia?</p>`,
      lv: [S('Szűrők', '', [['ellenőrzés', R`3\ \text{kHz van},\ 5\ \text{kHz nincs}\ \Rightarrow\ 3<B_\text{be}<5\ \text{kHz}`, ''], ['ellenőrzés', R`9\ \text{kHz van}\ \Rightarrow\ B_\text{ki}>9\ \text{kHz}`, '']]),
        S('Mintavételi frekvencia', 'Csak az 1 és 3 kHz jut át, a képek $f_s\pm1$, $f_s\pm3$.', [['behelyettesítés', R`f_s=10:\ 10-1=9,\ 10-3=7`, R`ha $B_\text{ki}<11$ kHz`]])],
      ered: [R`3<B_\text{be}<5\ \text{kHz},\ 9<B_\text{ki}<11\ \text{kHz},\ f_s=10\ \text{kHz}`], chk: [R`Más $f_s$ (pl. 8) 5 kHz-es képet is adna. Infokomm példatár 2.7: egyetlen megoldás a 10 kHz.`], links: [src5(['5o_12_1'])] },
    { id: 'o4_02', num: '4.2', title: '8 kHz, 40 dB-es szűrők, négyszögjel a bemeneten', tags: ['vizsga', 'nehez'],
      src: R`5-ösöm 12. oldal · 5o_12_2`,
      task: R`<p>8 kHz-es rendszer, 4 kHz-es aluláteresztő elő- és utószűrő 40 dB-es zárócsillapítással, a 2 V-os 1,5 kHz-es jelet amplitúdóhelyesen viszi át. a) Mi jelenik meg 3,5 kHz-es szinuszra? b) Milyen 2 mV-nál nagyobb komponensek jönnek 1,5 kHz-es (2 V-os) négyszögjelre? c) És előszűrő nélkül?</p>`,
      lv: [S('a)', '', [['definíció', R`\pm(3{,}5+n\cdot8)\ \text{kHz}:\ 3{,}5\ \text{kHz } 2\ \text{V},\ \text{a többi }20\ \text{mV}`, '']]),
        S('b) Előszűrővel', 'A $k$-adik harmonikus $4\cdot2/(\pi k)$ V. A 4,5, 7,5, 10,5 … kHz-es harmonikusok az előszűrőn 40 dB-t csillapodnak, majd a sávba lapolódnak.', [['számérték', R`1{,}5\ \text{kHz: }2{,}55\ \text{V}\qquad0{,}5,\ 2{,}5,\ 3{,}5\ \text{kHz: kb. }10\ldots20\ \text{mV}`, ''], ['számérték', R`n\cdot8\pm1{,}5\ \text{kHz: kb. }25\ \text{mV}`, 'a sávon kívül']]),
        S('c) Előszűrő nélkül', '', [['számérték', R`4{,}5\ \text{kHz}\to3{,}5\ \text{kHz},\ 0{,}85\ \text{V}`, 'voltos átlapolódás']])],
      ered: [R`\text{b) }0{,}5;\ 1{,}5;\ 2{,}5;\ 3{,}5\ \text{kHz a sávban}\qquad\text{c) ugyanezek, de voltos nagyságú torzítással}`],
      fix: R`A gyűjtemény b)-re csak „$\pm(1{,}5+k f_0)$, $k$ páratlan” vázlatot ad, c)-re szerinte „szűrő nélkül is megkapjuk az összes jelet”. A frekvenciák halmaza valóban nem változik, de előszűrő nélkül az átlapolódott összetevők nagyságrendekkel nagyobbak.`, links: [src5(['5o_12_2'])] },
    { id: 'o4_03', num: '4.3', title: '1,45 kHz előszűrő nélkül (hivatalos válaszok)', tags: ['vizsga'],
      src: R`5-ösöm 13. oldal · 5o_13_1`,
      task: R`<p>8 kHz-es rendszer, jó 4 kHz-es visszaállító szűrő, de nincs előszűrő. a) Kimenet 2 V-os 1,45 kHz-re? b) Lesz-e 9,45 kHz-es összetevő? c) Mi jelenik meg 4,45 kHz-es bemenetre? d) És 1,45 kHz-es négyszögjelre?</p>`,
      lv: [S('Hivatalos válaszok', '', [['definíció', R`8+1{,}45=9{,}45\ \text{kHz}`, 'b) van, a jó szűrő eltávolítja'], ['definíció', R`8-4{,}45=3{,}55\ \text{kHz}`, 'c) a jó szűrő sem távolítja el'], ['definíció', R`n\cdot8-(2k+1)\cdot1{,}45\in[-4,4]:\ 1{,}45,\ 3{,}65,\ 0{,}75,\ \ldots`, 'd)']])],
      ered: [R`\text{a) }1{,}45\ \text{kHz},\ 2\ \text{V}\qquad\text{c) }3{,}55\ \text{kHz}\qquad\text{d) sok sávbeli összetevő}`], links: [src5(['5o_13_1'])] },
    { id: 'o4_04', num: '4.4', title: '60…108 kHz-es jel', tags: ['vizsga'],
      src: R`5-ösöm 13. oldal · 5o_13_2, 5o_13_3 (hivatalos)`,
      task: R`<p>a) A büntetlenül választható mintavételi frekvenciák? b) Hány bit kell 70 dB-hez (szinuszos jel)?</p>`,
      lv: [S('Megoldás', '', [['tétel', R`k=1:\ f_s\ge216\qquad k=2:\ 108\le f_s\le120\ \text{kHz}`, ''], ['behelyettesítés', R`1{,}76+6{,}02n\ge70\ \Rightarrow\ n=12`, '']])],
      ered: [R`f_s\ge216\ \text{kHz vagy }108\ldots120\ \text{kHz}\qquad n=12`],
      chk: [R`$f_s=216$ kHz-nél sávszűrős visszaállítással a túlmintavételezés 3,5 dB-t ad, ott 11 bit is elég `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_13_2', '5o_13_3'])] }
  ]
};
