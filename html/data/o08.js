'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f8', num: '8', short: 'Műsorszórás', title: 'Műsorszórás és digitális TV',
  lead: R`Szuperheterodin vevő és tükörfrekvencia, valamint a DVB-T multiplex nettó bitsebessége.`,
  alap: [
    { id: 'b8-szuper', badge: 'A1', title: 'Szuperheterodin és DVB-T',
      html: R`<p>Felső keverés: $f_\text{osc}=f_v+f_\mathrm{KF}$, tükör $f_v+2f_\mathrm{KF}$. Alsó: $f_\text{osc}=f_v-f_\mathrm{KF}$, tükör $|f_v-2f_\mathrm{KF}|$. DVB-T: $B=(0{,}5+6817+0{,}5)/T_0$, $R_s=6048/((1+GI)T_0)$, nettó $=R_s\log_2M\cdot\text{FEC}\cdot188/204$.</p>` }
  ],
  ex: [
    { id: 'o8_01', num: '8.1', title: 'Felső keverés: 97,6 és 107 MHz', tags: ['vizsga'],
      src: R`5-ösöm 24. oldal · 5o_24_2, 5o_24_3`,
      task: R`<p>KF 10,7 MHz, felső keverés. Oszcillátor és tükör a 97,6 és a 107 MHz-es adóhoz?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`108{,}3\ \text{és}\ 119\ \text{MHz}\qquad117{,}7\ \text{és}\ 128{,}4\ \text{MHz}`, '']])],
      ered: [R`108{,}3/119\qquad117{,}7/128{,}4\ \text{MHz}`], links: [src5(['5o_24_2', '5o_24_3'])] },
    { id: 'o8_02', num: '8.2', title: '24…36 MHz, KF 18 MHz', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 24. oldal · 5o_24_4`,
      task: R`<p>a) Az oszcillátor tartománya felső és alsó keverésnél, melyik jobb? b) Alsó keverésnél a 25,5 MHz-hez? c) Tükörfrekvencia, mi vele a gond?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`42\ldots54\ \text{MHz}\qquad6\ldots18\ \text{MHz}`, 'a felső jobb (kisebb relatív tartomány)'], ['definíció', R`f_\text{osc}=7{,}5\ \text{MHz}\qquad f_t=|25{,}5-36|=10{,}5\ \text{MHz}`, '']])],
      ered: [R`f_t=10{,}5\ \text{MHz}`],
      fix: R`A gyűjtemény tükörként $F+f_0=33$ MHz-et ad, ez az összegfrekvencia. A 10,5 MHz közel van a sáv alá, a bemeneti szűrő nehezen csillapítja.`, links: [src5(['5o_24_4'])] },
    { id: 'o8_03', num: '8.3', title: 'DVB-T.HU multiplex nettó bitsebessége', tags: ['vizsga'],
      src: R`5-ösöm 25…26. oldal · 5o_25_2`,
      task: R`<p>6817 vivő, ebből 6048 hasznos, $T_0=896$ µs, $GI=1/4$, 64-QAM, RS(204,188), FEC 3/4. Mekkora a nettó bitsebesség, és hány 1,5 Mbit/s-os csatorna fér el?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`B=\frac{6818}{896\,\mu\text{s}}=7{,}61\ \text{MHz}`, ''], ['behelyettesítés', R`R_s=\frac{6048}{1{,}25\cdot896\,\mu\text{s}}=5{,}4\ \text{MBd}`, ''], ['számérték', R`5{,}4\cdot6\cdot\tfrac34\cdot\tfrac{188}{204}=22{,}4\ \text{Mbit/s}\qquad\frac{22{,}4}{1{,}5}=14{,}9`, '']])],
      ered: [R`22{,}4\ \text{Mbit/s},\ 14\ \text{vagy}\ 15\ \text{csatorna}`], links: [src5(['5o_25_2'])] },
    { id: 'o8_04', num: '8.4', title: 'Miért QAM és AM-VSB?', tags: ['beugro'],
      src: R`5-ösöm 24. oldal · 5o_24_1`,
      task: R`<p>Miért használunk a műsorszórásban QAM-et és AM-VSB-t?</p>`,
      lv: [S('Válasz', 'QAM: két független jelet (a két színkülönbségi jelet) visz egy sávban. AM-VSB: a széles, DC-összetevős képjelhez az SSB nem jó, a DSB pazarló, a csonka oldalsáv majdnem felezi a sávot és burkolóval demodulálható.', [])],
      ered: [R`\text{lásd a választ}`], chk: [R`A gyűjtemény válasza („a QAM két szín esetén hasznos, frekvencianyereséggel jár (?)”) bizonytalan, a VSB-részlet nagyjából jó.`], links: [src5(['5o_24_1'])] }
  ]
};
