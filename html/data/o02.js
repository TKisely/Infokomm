'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f2', num: '2', short: 'QAM, PSK', title: 'QAM és PSK',
  lead: R`DVB-C bitsebesség, PSK és QAM hibatűrés, és a tribites QAM-feladat a megfigyelt pontokkal.`,
  alap: [
    { id: 'b2-qam', badge: 'A1', title: 'Konstelláció és hibatűrés',
      html: R`<p>$M$-QAM vagy $M$-PSK: $\log_2M$ bit szimbólumonként. Vivőfrekvenciás sáv emelt koszinusszal: $B=(1+\alpha)/T$. Négyzetrácsos QAM ($\pm1,\pm3,\ldots$): csillapítástűrés a külső szint és a belső határ aránya, erősítéstűrés a legkülső belső szint és a következő határ aránya, fázistűrés a sarokpontnál: $L\sqrt2\cos(45°+\varphi)=L_\text{határ}$. $M$-PSK fázistűrése $180°/M$, amplitúdótűrése elméletben végtelen.</p>`,
      key: R`Fázistűrés: 16-QAM 16,9°, 36-QAM 10,6°, 64-QAM 7,7°.` }
  ],
  ex: [
    { id: 'o2_01', num: '2.1', title: 'DVB-C 256-QAM-mel', tags: ['vizsga'],
      src: R`5-ösöm 6. oldal · 5o_06_1`,
      task: R`<p>DVB-C-ben 64-QAM helyett 256-QAM, 8 MHz-es raszter, 33,33%-os emelt koszinusz. a) Szimbólum- és bitsebesség, hány 1,5 Mbit/s-os csatorna fér el? b) A 6 Mbit/s-os kódoló előnye, hátránya? c) Az 1024-QAM előnye, hátránya?</p>`,
      lv: [S('Megoldás', '', [['tétel', R`8\ \text{MHz}=2\cdot\frac1{2T}(1+\alpha)\ \Rightarrow\ \frac1T=8\cdot\frac34=6\ \text{MBd}`, ''], ['számérték', R`6\cdot\log_2256=48\ \text{Mbit/s}\qquad\frac{48}{1{,}5}=32`, '']])],
      ered: [R`6\ \text{MBd},\ 48\ \text{Mbit/s},\ 32\ \text{csatorna}`],
      chk: [R`b) Jobb kép (akár HD), de kevesebb csatorna. c) 6 helyett 10 bit szimbólumonként, de nagyobb teljesítményigény, kisebb zajtűrés.`], links: [src5(['5o_06_1'])] },
    { id: 'o2_02', num: '2.2', title: '36-QAM négyzetrácson', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 7. oldal · 5o_07_1`,
      task: R`<p>36-féle szimbólum, négyzetrács. a) Konstelláció. b) A négyzetrács előnye? c) Hány százalék erősítés- és csillapításhibát visel el zajmentesen? d) Mi lenne, ha a sarokpontokat a tengelyek mellé tennénk?</p>`,
      lv: [S('Amplitúdótűrés', 'Szintek ±1, ±3, ±5, határok 0, ±2, ±4.', [['számérték', R`5\to4:\ \tfrac45=-20\%\qquad3\to4:\ \tfrac43=+33\%`, '']]),
        S('Fázistűrés', '', [['geometria', R`5\sqrt2\cos(45°+\varphi)=4\ \Rightarrow\ \varphi=10{,}6°`, 'sarokpont'], ['geometria', R`(5,1):\ \mathrm{arctg}\tfrac15=11{,}3°`, 'ez nagyobb']]),
        S('d) Áthelyezés (7, 1)-re', '', [['ellenőrzés', R`\sqrt{50}=\sqrt{50}`, 'a csúcsamplitúdó nem változik'], ['geometria', R`\mathrm{arctg}\tfrac17=8{,}1°`, 'a fázistűrés romlik']])],
      ered: [R`-20\%\ldots+33\%\qquad\varphi_{\max}=10{,}6°\qquad\text{d) itt nincs értelme}`],
      fix: R`A gyűjtemény fázistűrése asin(1/5) = 11,5° (az (5,1) pontra, a sarokpontot kihagyta). A d) részben a fázistűrés nem marad változatlan, hanem 8,1°-ra romlik. A b) lényege: a két csatornában egymástól függetlenül lehet dönteni.`, links: [src5(['5o_07_1'])] },
    { id: 'o2_03', num: '2.3', title: '16-PSK hibatűrése, 500 kbit/s sávigénye', tags: ['vizsga'],
      src: R`5-ösöm 8. oldal · 5o_08_1`,
      task: R`<p>a) A 16-PSK elméleti amplitúdó- és fázishibatűrése? Mi határolja a gyakorlatban az amplitúdótűrést? b) 500 kbit/s ISI-mentes átvitele legalább mekkora sávot kíván 16-PSK-val?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`\varphi=\frac{360°}{2\cdot16}=11{,}25°`, 'amplitúdó: végtelen'], ['számérték', R`R_s=\frac{500}{4}=125\ \text{kBd}\ \Rightarrow\ B=125\ \text{kHz}`, R`$\alpha=0$, vivőfrekvenciás`]])],
      ered: [R`\infty\ \text{és}\ 11{,}25°\qquad B_{\min}=125\ \text{kHz}`], chk: [R`A gyakorlatban a zaj korlátoz: kis amplitúdónál a zaj könnyen átforgatja a pontot a szomszéd szektorba. A gyűjtemény „·2?” kérdése: vivőfrekvenciás átvitelnél nem kell kétszerezni.`], links: [src5(['5o_08_1'])] },
    { id: 'o2_04', num: '2.4', title: '64-QAM kevesebb teljesítménnyel', tags: ['beugro'],
      src: R`5-ösöm 8. oldal · 5o_08_2`,
      task: R`<p>64-QAM-nél azonos hibaarány mellett csökkenteni kell a teljesítményt. Tippek?</p>`,
      lv: [S('Ötlet', 'A sarokpontok viszik a legtöbb teljesítményt ($d^2$), ezeket kell beljebb, az oldalakhoz húzni, azonos minimális távolsággal. Ideálisan egyenletesen töltött kör.', [])],
      ered: [R`\text{kör vagy kereszt alakú konstelláció}`], chk: [R`A gyűjteményben „64×64-es mátrix” áll, helyesen 8×8-as rács.`], links: [src5(['5o_08_2'])] },
    { id: 'o2_05', num: '2.5', title: 'Tribites QAM a megfigyelt pontokkal', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 9. oldal · 5o_09_1 (gépelt megoldás)`,
      task: R`<p>Tribitek $(d_k,c_k)$: 000 (+1,+1), 001 (0,+3), 010 (−1,+1), 011 (−3,0), 100 (−1,−1), 101 (0,−3), 110 (+1,−1), 111 (+3,0). Megfigyelve: $(-0{,}20;\ 2{,}99)$, $(-0{,}94;\ -1{,}07)$, $(-1{,}08;\ 0{,}93)$, $(-2{,}98;\ -0{,}21)$. b) Tribitsorozat? c) Erősítéshiba? d) Fázishiba? e) Zaj?</p>`,
      lv: [S('Megoldás', '', [['számérték', R`001,\ 100,\ 010,\ 011`, 'legközelebbi pontok'], ['geometria', R`2{,}987\approx3,\ 1{,}424\approx\sqrt2`, 'erősítéshiba ≈ 0'], ['geometria', R`\mathrm{atan2}(0{,}93;\,-1{,}08)=139{,}3°\ \text{vs.}\ 135°`, R`$\Delta\varphi\approx4°$ minden pontra`]])],
      ered: [R`001\,100\,010\,011\qquad A\approx1\qquad\Delta\varphi\approx4°\qquad\text{a zaj kicsi}`],
      fix: R`A gépelt megoldás szerint „a fázishiba nagy: $\tan^{-1}(-1{,}08/0{,}93)=130{,}73°\ne145°$”. Ez a tengelyek felcseréléséből és rossz síknegyedből adódik, a fázishiba kb. 4°.`, links: [src5(['5o_09_1'])] }
  ]
};
