'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f7', num: '7', short: 'Hang, látás', title: 'Hang, hallás, kép, látás',
  lead: R`Phon és dB, hallásküszöb, és a színes TV jelei: $Y$, $C_b$, $C_r$. Két feladat a színkülönbségi jelekből számol vissza RGB-t.`,
  alap: [
    { id: 'b7-hang', badge: 'A1', title: 'Hangnyomásszint és hangosság',
      html: R`<p><b>Hangnyomásszint</b> (dB): $L=20\lg(p/p_0)$, ahol $p$ a hangnyomás effektív értéke, $p_0=20$ µPa a hallásküszöb 1 kHz-en. Teljesítményre (intenzitásra) $10\lg$, mert a teljesítmény a nyomás négyzetével arányos.</p><p><b>Hangosságszint</b> (phon): annyi phon, ahány dB-es az <b>ugyanolyan hangosnak hallott 1 kHz-es</b> hang. Ezért 1 kHz-en phon = dB, más frekvencián az azonos hangosságú görbékről (Fletcher és Munson) kell leolvasni. Az éppen hallható hang 0 phon. Mély hangoknál a küszöb jóval 0 dB felett van (100 Hz-en kb. 25 dB).</p>` },
    { id: 'b7-szin', badge: 'A2', title: 'Világossági és színkülönbségi jelek',
      html: R`<p>$R$, $G$, $B$: a vörös, zöld és kék színjel (0 és 1 között). A világossági jel és a két színkülönbségi jel:</p>$$Y=0{,}3R+0{,}59G+0{,}11B\qquad C_b=B-Y\qquad C_r=R-Y$$<p>(Itt egységnyi szorzóval, a szabványban skálázva.) Visszafelé: $B=C_b+Y$, $R=C_r+Y$, majd $Y$ képletéből $G=(Y-0{,}3R-0{,}11B)/0{,}59$. Szürke (és fehér) színnél $R=G=B$, ezért $Y=R$ és $C_b=C_r=0$.</p>` }
  ],
  ex: [
    { id: 'o7_01', num: '7.1', title: 'Milyen szín dominál? Y, Cb, Cr-ből', tags: ['vizsga', 'sajat'],
      src: R`5-ösöm 21. oldal · 5o_21_1 (a gyűjteményben nincs megoldás)`,
      task: R`<p>Milyen szín dominál a képpontban, ha $(Y,C_b,C_r)$ a) $(0{,}220;\ -0{,}120;\ 0{,}280)$, b) $(0{,}182;\ 0{,}118;\ 0{,}118)$?</p>`,
      ad: [R`$Y$: világossági jel, $C_b=B-Y$, $C_r=R-Y$: színkülönbségi jelek (a két hármas a feladatból)`],
      ker: [R`$R$, $G$, $B$ színjelek, és melyik a legnagyobb`],
      lv: [S('a) R és B', R`A két színkülönbségi jelből közvetlenül (A2).`, [
          ['behelyettesítés', R`B=C_b+Y=-0{,}120+0{,}220=0{,}10\qquad R=C_r+Y=0{,}280+0{,}220=0{,}50`, '']]),
        S('a) G', R`$Y$ képletéből kifejezzük $G$-t.`, [
          ['behelyettesítés', R`G=\frac{Y-0{,}3R-0{,}11B}{0{,}59}=\frac{0{,}22-0{,}15-0{,}011}{0{,}59}=\frac{0{,}059}{0{,}59}=0{,}10`, ''],
          ['számérték', R`(R,G,B)=(0{,}5;\ 0{,}1;\ 0{,}1)`, 'a vörös dominál']]),
        S('b)', 'Ugyanígy.', [
          ['behelyettesítés', R`B=0{,}118+0{,}182=0{,}30\qquad R=0{,}118+0{,}182=0{,}30`, ''],
          ['behelyettesítés', R`G=\frac{0{,}182-0{,}09-0{,}033}{0{,}59}=\frac{0{,}059}{0{,}59}=0{,}10`, ''],
          ['számérték', R`(R,G,B)=(0{,}3;\ 0{,}1;\ 0{,}3)`, 'vörös és kék egyformán: bíbor']])],
      ered: [R`\text{a) vörös}\ (0{,}5;\ 0{,}1;\ 0{,}1)\qquad\text{b) bíbor (lila)}\ (0{,}3;\ 0{,}1;\ 0{,}3)`],
      chk: [R`Visszaszámolva a) $Y=0{,}15+0{,}059+0{,}011=0{,}22$. Egyezik.`], links: [src5(['5o_21_1'])] },

    { id: 'o7_02', num: '7.2', title: 'Felcserélt Cb és Cr kábel', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 22. oldal · 5o_22_3 (gépelt megoldás)`,
      task: R`<p>A TV és a DVD-lejátszó között felcseréljük a $C_b$ és $C_r$ kábelt. a) Milyen lesz a fehér ruha? b) Mely színek érzéketlenek a cserére? c) Hogyan változik a világosság, ha $C_b=0{,}7$, $C_r=-0{,}3$? d) Milyen színt látunk, ha $C_b=0{,}7$, $C_r=-0{,}3$, $Y=0{,}3$? e) Mi lesz a paprikavörösből?</p>`,
      ad: [R`a TV $C_b$ helyett $C_r$-t kap és fordítva, az $Y$ jó marad`],
      ker: [R`a), b), c), d), e) a látott színek és a világosság`],
      lv: [S('a) Fehér ruha', R`Fehérnél $R=G=B=1$, ezért $Y=1$ és $C_b=C_r=0$ (A2). A két nulla felcserélése nem változtat semmin.`, [
          ['ellenőrzés', R`C_b=C_r=0\ \Rightarrow\ \text{fehér marad}`, '']]),
        S('b) Érzéketlen színek', R`A csere csak akkor nem változtat, ha a két jel egyenlő.`, [
          ['átalakítás', R`C_b=C_r\iff B-Y=R-Y\iff R=B`, 'minden szín, amelyben a vörös és a kék egyforma (pl. a szürkék, a zöld, a bíbor)']]),
        S('c) Világosság', R`Az $Y$ kábel nincs felcserélve, a TV ugyanazt a világossági jelet kapja.`, []),
        S('d) A látott szín', R`A TV $Y=0{,}3$, $C_b=0{,}7$, $C_r=-0{,}3$ jelekből számol.`, [
          ['behelyettesítés', R`B=0{,}7+0{,}3=1\qquad R=-0{,}3+0{,}3=0`, ''],
          ['behelyettesítés', R`G=\frac{0{,}3-0-0{,}11\cdot1}{0{,}59}=\frac{0{,}19}{0{,}59}=0{,}32`, ''],
          ['számérték', R`(R,G,B)=(0;\ 0{,}32;\ 1)`, 'kék']]),
        S('e) Paprikavörös', R`A tiszta vörös $(1,0,0)$ jelei, majd a csere.`, [
          ['behelyettesítés', R`Y=0{,}3\qquad C_b=0-0{,}3=-0{,}3\qquad C_r=1-0{,}3=0{,}7`, ''],
          ['átalakítás', R`\text{csere után: }C_b=0{,}7,\ C_r=-0{,}3`, 'pont a d) rész jelei: kék lesz']])],
      ered: [R`\text{a) fehér marad}\quad\text{b) ahol }R=B\quad\text{c) nem változik}\quad\text{d) kék }(0;\ 0{,}32;\ 1)\quad\text{e) kék lesz}`],
      gy: R`<p>A gépelt megoldásban „R = Cr + Y = 0,3 + 0,3 = 0,6” és „ilyen lilás” áll.</p>`,
      fix: R`$C_r=-0{,}3$, ezért $R=-0{,}3+0{,}3=0$, a szín $(0;\ 0{,}32;\ 1)$, azaz kék. A $G=0{,}32$ is csak $R=0$-val jön ki.`, links: [src5(['5o_22_3'])] },

    { id: 'o7_03', num: '7.3', title: 'Függvénygenerátor és hangszóró: phon', tags: ['vizsga'],
      src: R`5-ösöm 21. oldal · 5o_21_3`,
      task: R`<p>Az éppen hallható 10 kHz-es hang 10 dB, azonos amplitúdóval 1 kHz-en 30 dB, 100 Hz-en 0 dB. Hány phon a 10 kHz-es, az 1 kHz-es, a 100 Hz-es hang? Miért mások a szintek?</p>`,
      ad: [R`10 kHz: 10 dB, éppen hallható`, R`1 kHz: 30 dB`, R`100 Hz: 0 dB`, R`a generátor amplitúdója mindhárom esetben ugyanaz`],
      ker: [R`a három hang hangosságszintje (phon), és a különböző dB-értékek oka`],
      lv: [S('10 kHz', R`Az éppen hallható hang a definíció szerint 0 phon (a hallásküszöb a 0 phonos görbe).`, [['definíció', R`0\ \text{phon}`, '']]),
        S('1 kHz', R`1 kHz-en a phon és a dB megegyezik (A1).`, [['definíció', R`30\ \text{dB}\ \Rightarrow\ 30\ \text{phon}`, '']]),
        S('100 Hz', R`100 Hz-en a hallásküszöb kb. 25 dB. A 0 dB ez alatt van.`, [['ellenőrzés', R`0\ \text{dB}<25\ \text{dB}`, 'nem hallható, 0 phon alatt']]),
        S('Miért mások a szintek?', R`A generátor feszültsége ugyanaz, de a hangszóró (és az erősítő) átvitele frekvenciafüggő: ugyanaz a feszültség különböző hangnyomást ad. Mélyen a kis hangszóró rosszul sugároz, ezért 100 Hz-en kicsi a szint.`, [])],
      ered: [R`10\ \text{kHz: }0\ \text{phon}\qquad1\ \text{kHz: }30\ \text{phon}\qquad100\ \text{Hz: nem hallható}`], links: [src5(['5o_21_3'])] },

    { id: 'o7_04', num: '7.4', title: 'Rövid fogalmak: láthatóság, 40 phon, 120 dB, váltott sor', tags: ['beugro', 'javitas'],
      src: R`5-ösöm 22…23. oldal · 5o_22_1, 5o_22_2, 5o_23_1, 5o_23_2`,
      task: R`<p>a) A láthatósági függvény és maximuma. b) A hallásküszöb 100-szoros hangnyomása hány phon? c) 120 dB-hez mekkora nyomás kell? d) A váltott soros képalkotás előnye?</p>`,
      ad: [R`$p_0=20$ µPa: a hallásküszöb hangnyomása`],
      ker: [R`a) $V(\lambda)$ alakja és maximuma`, R`b) hangosságszint`, R`c) $p$ 120 dB-hez`, R`d) az előny`],
      lv: [S('a) Láthatósági függvény', R`$V(\lambda)$ a szem relatív érzékenysége a hullámhossz függvényében: harang alakú, kb. 380 és 780 nm között, normált maximuma 1, nappali látásnál 555 nm-en (sárgászöld).`, []),
        S('b) 100-szoros hangnyomás', R`Nyomásarányból $20\lg$. A küszöb 1 kHz-re vonatkozik, ott phon = dB.`, [
          ['behelyettesítés', R`L=20\lg\frac{100p_0}{p_0}=20\lg100=40\ \text{dB}=40\ \text{phon}`, '']]),
        S('c) 120 dB', R`$120=20\lg(p/p_0)$-ból kifejezzük $p$-t.`, [
          ['átalakítás', R`\frac{p}{p_0}=10^{120/20}=10^6\ \Rightarrow\ p=10^6\cdot20\ \mu\text{Pa}=20\ \text{Pa}`, '']]),
        S('d) Váltott soros képalkotás', R`Egy kép két félképből áll (páratlan, majd páros sorok). Másodpercenként 50 félkép jelenik meg, így a villogás 50 Hz-es, a fúziós frekvencia felett van. A továbbított információ viszont csak 25 teljes kép/s, tehát a sávszélesség a 25 kép/s-é.`, [])],
      ered: [R`\text{a) maximum }1\text{, 555 nm-en}\quad\text{b) }40\ \text{phon}\quad\text{c) }20\ \text{Pa}\quad\text{d) kétszeres villogási frekvencia azonos sávszélességgel}`],
      fix: R`d) A gyűjtemény szerint „a fél képet fele idő alatt lehet felrakni”, ez nem a lényeg: 50 félkép/s villog 25 kép/s sávszélességével.`, links: [src5(['5o_22_1', '5o_22_2', '5o_23_1', '5o_23_2'])] }
  ]
};
