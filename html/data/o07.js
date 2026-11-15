'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f7', num: '7', short: 'Hang, látás', title: 'Hang, hallás, kép, látás',
  lead: R`Phon és dB, hallásküszöb, és a színes TV jelei: $Y$, $C_b$, $C_r$. Két feladat a színkülönbségi jelekből számol vissza RGB-t.`,
  alap: [
    { id: 'b7-hang', badge: 'A1', title: 'Hang és szín',
      html: R`<p>$L=20\lg(p/p_0)$, $p_0=20$ µPa. 1 kHz-en phon = dB, az éppen hallható hang 0 phon. $Y=0{,}3R+0{,}59G+0{,}11B$, $C_b=B-Y$, $C_r=R-Y$ (itt egységnyi tényezővel). Visszafelé: $B=C_b+Y$, $R=C_r+Y$, $G=(Y-0{,}3R-0{,}11B)/0{,}59$.</p>` }
  ],
  ex: [
    { id: 'o7_01', num: '7.1', title: 'Milyen szín dominál? Y, Cb, Cr-ből', tags: ['vizsga', 'sajat'],
      src: R`5-ösöm 21. oldal · 5o_21_1 (a gyűjteményben nincs megoldás)`,
      task: R`<p>Milyen szín dominál a képpontban, ha $(Y,C_b,C_r)$ a) $(0{,}220;\ -0{,}120;\ 0{,}280)$, b) $(0{,}182;\ 0{,}118;\ 0{,}118)$?</p>`,
      lv: [S('a)', '', [['átalakítás', R`B=0{,}10,\ R=0{,}50,\ G=\frac{0{,}22-0{,}15-0{,}011}{0{,}59}=0{,}10`, 'vörös']]),
        S('b)', '', [['átalakítás', R`B=0{,}30,\ R=0{,}30,\ G=\frac{0{,}182-0{,}09-0{,}033}{0{,}59}=0{,}10`, 'bíbor']])],
      ered: [R`\text{a) vörös}\ (0{,}5;\ 0{,}1;\ 0{,}1)\qquad\text{b) bíbor}\ (0{,}3;\ 0{,}1;\ 0{,}3)`], links: [src5(['5o_21_1'])] },
    { id: 'o7_02', num: '7.2', title: 'Felcserélt Cb és Cr kábel', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 22. oldal · 5o_22_3 (gépelt megoldás)`,
      task: R`<p>A TV és a DVD-lejátszó között felcseréljük a $C_b$ és $C_r$ kábelt. a) Milyen lesz a fehér ruha? b) Mely színek érzéketlenek a cserére? c) Hogyan változik a világosság, ha $C_b=0{,}7$, $C_r=-0{,}3$? d) Milyen színt látunk, ha $C_b=0{,}7$, $C_r=-0{,}3$, $Y=0{,}3$? e) Mi lesz a paprikavörösből?</p>`,
      lv: [S('d) és e)', '', [['átalakítás', R`B=0{,}7+0{,}3=1,\ R=-0{,}3+0{,}3=0,\ G=\frac{0{,}3-0{,}11}{0{,}59}=0{,}32`, 'kék'], ['átalakítás', R`(1,0,0):\ Y=0{,}3,\ C_r=0{,}7,\ C_b=-0{,}3`, 'cserével a d) színe']])],
      ered: [R`\text{a) fehér marad}\quad\text{b) }C_b=C_r\quad\text{c) nem változik}\quad\text{d) kék}\quad\text{e) kék lesz}`],
      fix: R`A gépelt megoldásban „R = Cr + Y = 0,3 + 0,3 = 0,6” és „ilyen lilás” áll. Helyesen $R=0$, a szín $(0;\ 0{,}32;\ 1)$, azaz kék. A $G=0{,}32$ is $R=0$-val jön ki.`, links: [src5(['5o_22_3'])] },
    { id: 'o7_03', num: '7.3', title: 'Függvénygenerátor és hangszóró: phon', tags: ['vizsga'],
      src: R`5-ösöm 21. oldal · 5o_21_3`,
      task: R`<p>Az éppen hallható 10 kHz-es hang 10 dB, azonos amplitúdóval 1 kHz-en 30 dB, 100 Hz-en 0 dB. Hány phon a 10 kHz-es, az 1 kHz-es, a 100 Hz-es hang? Miért mások a szintek?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`0\ \text{phon},\ 30\ \text{phon}`, 'definíció szerint'], ['ellenőrzés', R`100\ \text{Hz, }0\ \text{dB}<\text{küszöb}`, 'nem hallható']])],
      ered: [R`0\qquad30\qquad\text{nem hallható}`], chk: [R`A hangszóró átvitele frekvenciafüggő, ezért azonos amplitúdóra más hangnyomást ad.`], links: [src5(['5o_21_3'])] },
    { id: 'o7_04', num: '7.4', title: 'Rövid fogalmak: láthatóság, 40 phon, 120 dB, váltott sor', tags: ['beugro', 'javitas'],
      src: R`5-ösöm 22…23. oldal · 5o_22_1, 5o_22_2, 5o_23_1, 5o_23_2`,
      task: R`<p>a) A láthatósági függvény és maximuma. b) A hallásküszöb 100-szoros hangnyomása hány phon? c) 120 dB-hez mekkora nyomás kell? d) A váltott soros képalkotás előnye?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`20\lg100=40\ \text{dB}=40\ \text{phon}`, 'b)'], ['definíció', R`p=10^6\cdot20\,\mu\text{Pa}=20\ \text{Pa}`, 'c)']])],
      ered: [R`\text{a) max }1\ (555\ \text{nm})\quad\text{b) }40\ \text{phon}\quad\text{c) }20\ \text{Pa}\quad\text{d) kétszeres villogási frekvencia azonos sávval}`],
      fix: R`d) A gyűjtemény szerint „a fél képet fele idő alatt lehet felrakni”, ez nem a lényeg: 50 félkép/s villog 25 kép/s sávszélességével.`, links: [src5(['5o_22_1', '5o_22_2', '5o_23_1', '5o_23_2'])] }
  ]
};
