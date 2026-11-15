'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f5', num: '5', short: 'Rádió', title: 'Rádiós összeköttetések',
  lead: R`Teljesítménymérleg dB-ben, kétutas terjedés zónahatára és kioltása, antennanyereség és hatásos felület, GPS-összeköttetés.`,
  alap: [
    { id: 'b5-radio', badge: 'A1', title: 'Képletek egy helyen',
      html: R`$$a_\mathrm{sz}=20\lg\frac{4\pi r}{\lambda}-G_T-G_R\qquad a_\mathrm{sz}^\text{kétutas}=20\lg\frac{r^2}{h_Th_R}-G_T-G_R\qquad A_h=\frac{G\lambda^2}{4\pi}$$<p>Kétutas térerősség: $|E_R|=2|E_0||\sin(\pi\cdot2h_Th_R/(r\lambda))|$. Zónahatár (legtávolabbi maximum): argumentum $\pi/2$, $r=4h_Th_R/\lambda$. Legtávolabbi kioltás: argumentum $\pi$, $r=2h_Th_R/\lambda$.</p>` }
  ],
  ex: [
    { id: 'o5_01', num: '5.1', title: '100 MHz, 85 dB csillapítás: vett teljesítmény', tags: ['vizsga'],
      src: R`5-ösöm 14. oldal · 5o_14_1`,
      task: R`<p>Szabadtéri összeköttetés 100 MHz-en, 25 kHz-es mérőjel, 75 kHz-es löket. Az adóantennába 20 dBW jut, a teljes szakaszcsillapítás 85 dB. a) A vett teljesítmény? b) A sávszélesség analóg FM-nél?</p>`,
      lv: [S('Megoldás', '', [['behelyettesítés', R`P_R=20-85=-65\ \text{dBW}=3{,}2\cdot10^{-7}\ \text{W}`, ''], ['tétel', R`B_v\approx2(75+25)=200\ \text{kHz}`, 'Carson']])],
      ered: [R`P_R\approx0{,}32\ \mu\text{W}\qquad B_v\approx200\ \text{kHz}`],
      chk: [R`A kézírás „(1/3)·10⁶”-t ír, a kitevő előjele hibás (10⁻⁶). A b) nincs kidolgozva.`], links: [src5(['5o_14_1'])] },
    { id: 'o5_02', num: '5.2', title: 'Rádióamatőr űrállomás 350 km-en', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 14. oldal · 5o_14_2`,
      task: R`<p>10 GHz, az űrállomás 350 km magasan 2 kW-tal sugároz, a földi parabola átmérője 1 m, a vevő érzékenysége 40 pW. a) Legalább mekkora az űrállomás antennájának hatásos felülete? b) Beszélgethetnek-e egyszerre?</p>`,
      lv: [S('Mérleg', '', [['behelyettesítés', R`a_\text{megengedett}=10\lg\frac{2000}{4\cdot10^{-11}}=137\ \text{dB}`, ''], ['behelyettesítés', R`G_R=\frac{4\pi\cdot\pi\cdot0{,}5^2}{0{,}03^2}=1{,}1\cdot10^4=40{,}4\ \text{dB}`, ''], ['behelyettesítés', R`20\lg\frac{4\pi\cdot3{,}5\cdot10^5}{0{,}03}=163{,}3\ \text{dB}`, '']]),
        S('Adóantenna', '', [['számérték', R`G_T=163{,}3-40{,}4-137=-14\ \text{dB}`, R`$A_h\approx2{,}8\cdot10^{-6}$ m²`]])],
      ered: [R`G_T\ge-14\ \text{dB: gyakorlatilag bármilyen antenna elég}`],
      fix: R`A kézírás 40 pW-ot $4\cdot10^{-12}$ W-nak vesz, így 147 dB-t kap. Helyesen $4\cdot10^{-11}$ W, 137 dB. A feladat adatait `+'`[ELLENŐRIZENDŐ]`'+R` (a „legalább” kérdés így triviális). b) A késleltetés kb. 1,2 ms. Azonos frekvencián (szimplex) várni kell, külön frekvenciákon beszélgethetnek.`, links: [src5(['5o_14_2'])] },
    { id: 'o5_03', num: '5.3', title: '900 MHz: zónahatár 1 km-en, csillapítás 15 km-en', tags: ['vizsga'],
      src: R`5-ösöm 14. oldal · 5o_14_3`,
      task: R`<p>$G_T=13$ dB, $G_R=3$ dB, $h_R=1{,}66$ m (lg 830 ≈ 3, lg 225 ≈ 2,35). a) Mekkora $h_T$, ha az interferenciazóna határa 1 km-en van? b) A szakaszcsillapítás 15 km-en?</p>`,
      lv: [S('a)', '', [['geometria', R`r=\frac{4h_Th_R}{\lambda}\ \Rightarrow\ h_T=\frac{1000\cdot1/3}{4\cdot1{,}66}=50\ \text{m}`, '']]),
        S('b)', '15 km ≫ 1 km, távoli zóna.', [['behelyettesítés', R`20\lg\frac{(15\cdot10^3)^2}{50\cdot5/3}-16=47+120-38{,}4-16=112{,}6\ \text{dB}`, R`$20\lg83{,}3=20(\lg830-1)$`]])],
      ered: [R`h_T=50\ \text{m}\qquad a_\mathrm{sz}\approx112{,}6\ \text{dB}`], chk: [R`A kézírás $20\lg83{,}3$ helyett 40-et ír, és 111 dB-t kap.`], links: [src5(['5o_14_3'])] },
    { id: 'o5_04', num: '5.4', title: 'A zóna határán felezett és duplázott antennamagasság', tags: ['vizsga'],
      src: R`5-ösöm 15. oldal · 5o_15_1`,
      task: R`<p>900 MHz, a vevőantenna (5 m) az interferenciazóna határán van. Hány dB-t változik a teljesítmény, ha a magasságot a) felére csökkentjük, b) kétszeresére növeljük?</p>`,
      lv: [S('Megoldás', 'A határon a szinusz argumentuma $\pi/2$, ez arányos $h_R$-rel.', [['behelyettesítés', R`\frac\pi4:\ |E|=2|E_0|\tfrac{\sqrt2}2\ \Rightarrow\ P/2`, 'a) −3 dB'], ['behelyettesítés', R`\pi:\ |E|=2|E_0|\sin\pi=0`, R`b) $-\infty$ dB`]])],
      ered: [R`-3\ \text{dB}\qquad-\infty\ \text{dB (kioltás)}`], links: [src5(['5o_15_1'])] },
    { id: 'o5_05', num: '5.5', title: 'Rövid botantenna 600 kHz-en', tags: ['beugro'],
      src: R`5-ösöm 15. oldal · 5o_15_2`,
      task: R`<p>A rövid függőleges botantenna nyeresége sík föld felett 4,76 dB (3). Mekkora a hatásos felülete 600 kHz-en ($4\pi\approx12{,}5$)? Mit jelent, hogy $G=3$?</p>`,
      lv: [S('Megoldás', '', [['behelyettesítés', R`\lambda=500\ \text{m}\qquad A_h=\frac{3\cdot2{,}5\cdot10^5}{12{,}5}=60\,000\ \text{m}^2`, '']])],
      ered: [R`A_h=60\,000\ \text{m}^2`], chk: [R`$G=S_{\max}/S_0$: a főirányban háromszor akkora a teljesítménysűrűség, mint egy azonos teljesítményű izotróp antennánál.`], links: [src5(['5o_15_2'])] },
    { id: 'o5_06', num: '5.6', title: 'GPS: csillapítás, tartalék, antennaátmérő', tags: ['vizsga'],
      src: R`5-ösöm 15…16. oldal · 5o_15_3, 5o_16_1 (gépelt megoldás)`,
      task: R`<p>20 000 km, 1500 MHz, 25 W, $G_T=13$ dB, $G_R=3$ dB, a vevő érzékenysége −160 dBW. a) Járulékos csillapítás-tartalék? b) A műhold parabolájának átmérője? c), d) Miért nem nagyobb nyereségű a műhold és a vevő antennája?</p>`,
      lv: [S('Mérleg', '', [['behelyettesítés', R`a_\mathrm{sz}=20\lg\frac{4\pi\cdot2\cdot10^7}{0{,}2}-16=166\ \text{dB}`, ''], ['számérték', R`14-166=-152\ \text{dBW}\ \Rightarrow\ 8\ \text{dB tartalék}`, '']]),
        S('Antenna', '', [['behelyettesítés', R`A_h=\frac{10^{1{,}3}\cdot0{,}2^2}{4\pi}=0{,}0635\ \text{m}^2\qquad d=2\sqrt{A_h/\pi}=284\ \text{mm}`, '']])],
      ered: [R`166\ \text{dB}\qquad8\ \text{dB}\qquad d\approx284\ \text{mm}`],
      chk: [R`c) Nagyobb nyereségnél kisebb területet fedne le, több műhold kellene. d) A vevő nem tudja, merre a műhold, és több műholdat is vennie kell.`], links: [src5(['5o_15_3', '5o_16_1'])] }
  ]
};
