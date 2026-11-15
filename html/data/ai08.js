'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f8', num: '8', short: 'Hang, látás', title: 'Hang, hallás, kép, látás',
  lead: R`Decibel és phon különbsége, a hallásküszöb frekvenciafüggése, valamint a színes kép világossági jele. Rövid, de pontos fogalmakat kérnek.`,
  alap: [
    { id: 'a8-hang', badge: 'A1', title: 'Jelölések, hangnyomásszint és hangosság',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$p$, $p_0$</td><td>hangnyomás (effektív érték), és a 1 kHz-es hallásküszöb: $p_0=20$ µPa</td></tr>
<tr><td>$I$, $I_0$</td><td>hangintenzitás (W/m²), a küszöbhöz tartozó $I_0=10^{-12}$ W/m²</td></tr>
<tr><td>$L$</td><td>hangnyomásszint (dB)</td></tr>
<tr><td>$L_N$</td><td>hangosságszint (phon)</td></tr>
</tbody></table></div>$$L=20\lg\frac{p}{p_0}=10\lg\frac{I}{I_0}$$<p>A két alak azért egyezik, mert az intenzitás a nyomás négyzetével arányos. A <b>phon</b> a hangosságérzet egysége: egy hang annyi phon, ahány dB-es az azonos hangosnak érzett 1 kHz-es szinusz. 1 kHz-en a phon és a dB megegyezik, az éppen hallható hang minden frekvencián 0 phon. Mély frekvencián a fül érzéketlenebb (100 Hz-en a küszöb kb. 25 dB, 400 Hz-en kb. 10 dB).</p><p>Pontforrás szabad térben: az intenzitás $1/r^2$-tel csökken, tízszeres távolságon 20 dB-lel kisebb a szint.</p>` },
    { id: 'a8-kep', badge: 'A2', title: 'Világossági jel és színkülönbségi jelek',
      html: R`<p>$R$, $G$, $B$: a vörös, zöld, kék színjel (0 és 1 között). A világossági jel a szem érzékenységével súlyozott összeg:</p>$$Y=0{,}3R+0{,}59G+0{,}11B\qquad C_b\propto B-Y,\ C_r\propto R-Y$$<p>Azonos intenzitásnál a fekete-fehér képen a zöld a legvilágosabb, a kék a legsötétebb. A láthatósági függvény $V(\lambda)$ a szem relatív érzékenysége, maximuma 1 (normált), nappali látásnál 555 nm-nél.</p>` }
  ],
  ex: [
    { id: 'ai8_01', num: '8.1', title: 'Hangsugárzó: 1 W-tal 93 dB (Moodle 2020)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 5. oldal · ai2020_05_26_Q5`,
      task: R`<p>1 W, 1 kHz, 1 m-re 93 dB. a) Mekkora teljesítmény kell a fájdalomküszöbhöz? b) A mikrofon helyén hány phon az a) esetben? c) Miért mérhető 100 Hz-en azonos teljesítménnyel 109 dB?</p>`,
      ad: [R`1 W elektromos teljesítménnyel 1 kHz-en 1 m-re 93 dB`, R`fájdalomküszöb: 120 dB (egyes források 123 dB)`],
      ker: [R`a) $P$`, R`b) $L_N$`, R`c) indoklás`],
      lv: [S('a) Teljesítmény', R`A szint a teljesítménnyel $10\lg$ szerint nő (azonos frekvencián és helyen). 93 dB-ről 120 dB-re 27 dB kell.`, [
          ['behelyettesítés', R`10\lg\frac{P}{1\ \text{W}}=120-93=27\ \Rightarrow\ P=10^{2{,}7}\ \text{W}\approx500\ \text{W}`, R`123 dB-es küszöbbel $10^3=1000$ W`]]),
        S('b) Phon', R`1 kHz-en a phon egyenlő a dB-lel (A1).`, [['definíció', R`L_N=120\ \text{phon}`, 'az a) esetben']]),
        S('c) 100 Hz', R`A dB fizikai mennyiség, nem érzet. Azonos elektromos teljesítményre a hangszóró (és a mikrofon) más-más hangnyomást ad különböző frekvenciákon: az átvitelük frekvenciafüggő. Itt 100 Hz-en 16 dB-lel hatékonyabban sugároz. Hangosságban viszont a 109 dB 100 Hz-en kevesebb phon, mert ott érzéketlenebb a fül.`, [])],
      ered: [R`\text{a) }\approx500\ \text{W}\qquad\text{b) }120\ \text{phon}\qquad\text{c) a hangszóró és a mikrofon frekvenciafüggése}`],
      fix: R`A b) válasza 93 phon volt: ez a kiinduló helyzetre igaz, az a) esetre a fájdalomküszöb phonértéke a helyes. A javító teljes pontot adott, a 123 dB-es feltevést is elfogadta, mert le volt írva.`, links: [srcAI(['ai2020_05_26_Q5'])] },

    { id: 'ai8_02', num: '8.2', title: 'Függvénygenerátor és hangszóró: hány phon?', tags: ['vizsga'],
      src: R`ALL-IN 82…83., 135. oldal · ai2014_01_14_4, aiD_8_9 (és 5-ösöm 21. oldal)`,
      task: R`<p>Az éppen hallható 10 kHz-es hang 10 (illetve 15) dB, ugyanazzal az amplitúdóval 1 kHz-en 30 dB, 100 Hz-en 0 dB. a) A 10 kHz-es hang hangossága? b) Az 1 kHz-esé? c) A 100 Hz-esé? d) Miért mások a szintek azonos amplitúdónál?</p>`,
      ad: [R`10 kHz: 10 (15) dB, éppen hallható`, R`1 kHz: 30 dB`, R`100 Hz: 0 dB`],
      ker: [R`a), b), c) hangosságszint phonban`, R`d) indoklás`],
      lv: [S('a) 10 kHz', R`Az éppen hallható hang definíció szerint 0 phon.`, [['definíció', R`0\ \text{phon}`, '']]),
        S('b) 1 kHz', R`1 kHz-en phon = dB.`, [['definíció', R`30\ \text{dB}\ \Rightarrow\ 30\ \text{phon}`, '']]),
        S('c) 100 Hz', R`100 Hz-en a hallásküszöb kb. 25 dB.`, [['ellenőrzés', R`0\ \text{dB}<25\ \text{dB}`, 'nem hallható']]),
        S('d) Miért mások?', R`Ugyanaz a generátorfeszültség a hangszóró frekvenciafüggő átvitele miatt más-más hangnyomást ad.`, [])],
      ered: [R`\text{a) }0\ \text{phon}\qquad\text{b) }30\ \text{phon}\qquad\text{c) nem hallható}\qquad\text{d) a hangszóró frekvenciafüggése}`],
      chk: [R`c) A gyűjtemény szerint „0 dB a légköri nyomás”: helyesen a 20 µPa-os referencia-hangnyomás.`], links: [srcAI(['ai2014_01_14_4', 'aiD_8_9'])] },

    { id: 'ai8_03', num: '8.3', title: 'A hallásküszöb 1000-szeres és 100-szoros hangnyomása', tags: ['beugro'],
      src: R`ALL-IN 136. oldal · aiD_8_14, aiD_8_15 (hivatalos)`,
      task: R`<p>Hány phon az 1 kHz-es szinusz, amelynek hangnyomása a hallásküszöbhöz tartozó a) 1000-szerese, b) 100-szorosa? Hány dB, mennyire érezzük hangosnak?</p>`,
      ad: [R`$p=1000p_0$, illetve $100p_0$, 1 kHz`],
      ker: [R`$L$ dB-ben és phonban`],
      lv: [S('Számolás', R`Nyomásarányból $20\lg$ (A1), 1 kHz-en phon = dB.`, [
          ['definíció', R`a)\ 20\lg1000=60\ \text{dB}=60\ \text{phon}\qquad b)\ 20\lg100=40\ \text{dB}=40\ \text{phon}`, '']])],
      ered: [R`\text{a) }60\ \text{phon (iroda, vendéglő)}\qquad\text{b) }40\ \text{phon (csendes lakás, éjjel)}`], links: [srcAI(['aiD_8_14', 'aiD_8_15'])] },

    { id: 'ai8_04', num: '8.4', title: '120 dB-hez mekkora hangnyomás kell?', tags: ['beugro'],
      src: R`ALL-IN 134. oldal · aiD_8_5`,
      task: R`<p>A hallásküszöb 20 µPa, 120 dB-es tartományban hallunk. Mekkora nyomású „zavar” kell a tartomány tetejéhez?</p>`,
      ad: [R`$p_0=20$ µPa, $L=120$ dB`],
      ker: [R`$p_1$`],
      lv: [S('Számolás', R`$L=20\lg(p_1/p_0)$-ból kifejezzük $p_1$-et. $20\lg$, mert nyomásról (amplitúdó jellegű mennyiségről) van szó.`, [
          ['átalakítás', R`\frac{p_1}{p_0}=10^{120/20}=10^6\ \Rightarrow\ p_1=10^6\cdot20\ \mu\text{Pa}=20\ \text{Pa}`, R`a légköri nyomás ($10^5$ Pa) ötezred része`]])],
      ered: [R`p_1=20\ \text{Pa}`], links: [srcAI(['aiD_8_5'])] },

    { id: 'ai8_05', num: '8.5', title: '100 Hz, 1 nW/m²', tags: ['beugro'],
      src: R`ALL-IN 134. oldal · aiD_8_8 (4.2.)`,
      task: R`<p>Milyen hangos a 100 Hz-es, 1 nW/m² intenzitású szinusz? A) 1000 phon B) 30 phon. Hány dB a szintje? C) 20 dB D) 30 dB</p>`,
      ad: [R`$I=1\ \text{nW/m}^2=10^{-9}$ W/m², $f=100$ Hz`],
      ker: [R`$L$ és $L_N$`],
      lv: [S('A szint', R`Intenzitásból $10\lg$ (A1).`, [['definíció', R`L=10\lg\frac{10^{-9}}{10^{-12}}=10\lg1000=30\ \text{dB}`, 'D igaz, C hamis']]),
        S('A hangosság', R`100 Hz-en a küszöb kb. 25 dB, így a 30 dB alig van felette: néhány phon. 30 phon csak 1 kHz-en lenne. Az 1000 phon értelmetlen.`, [['ellenőrzés', R`L_N\ll30\ \text{phon}`, 'A és B hamis']])],
      ered: [R`\text{csak D igaz: }30\ \text{dB, néhány phon}`], links: [srcAI(['aiD_8_8'])] },

    { id: 'ai8_06', num: '8.6', title: '400 Hz vagy 1 kHz: melyik hangosabb?', tags: ['beugro'],
      src: R`ALL-IN 133. oldal · aiD_8_2`,
      task: R`<p>a) 400 Hz 20 phon vagy 1 kHz 20 phon? b) 400 Hz 20 dB vagy 1 kHz 20 dB?</p>`,
      ad: [R`két hang, a) phonban, b) dB-ben megadva`],
      ker: [R`melyik hangosabb`],
      lv: [S('a) Phonban', R`A phon definíció szerint az érzett hangosság: azonos phon azonos hangosság.`, [['definíció', R`20\ \text{phon}=20\ \text{phon}`, 'egyformák']]),
        S('b) dB-ben', R`1 kHz-en a 20 dB 20 phon. 400 Hz-en a küszöb kb. 10 dB, ezért a 20 dB ott kevesebb, kb. 12 és 15 phon közötti hangosság.`, [['közelítés', R`L_N(400\ \text{Hz},\ 20\ \text{dB})<20\ \text{phon}`, 'az 1 kHz-es hangosabb']])],
      ered: [R`\text{a) egyformák}\qquad\text{b) az 1 kHz-es}`],
      chk: [R`A gyűjtemény b) indoklása („a 400 Hz-es 20 dB a küszöb alatt van”) nem igaz, a következtetés jó. A küszöbértéket az izofon-ábráról kell venni `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['aiD_8_2'])] },

    { id: 'ai8_07', num: '8.7', title: 'Elromlott mikrofon: 2 m-en 30 dB, a terem végén?', tags: ['vizsga'],
      src: R`ALL-IN 88. oldal · ai2016_01_12c_6`,
      task: R`<p>2 m-re az előadótól 30 dB. a) Körülbelül mennyi a terem végén (20 m)? b) Mi befolyásolja, hogy hátul hallják-e?</p>`,
      ad: [R`$L_1=30$ dB $r_1=2$ m-en`, R`$r_2=20$ m`],
      ker: [R`a) $L_2$`, R`b) indoklás`],
      lv: [S('a) Távolságtörvény', R`Pontforrás szabad térben: $I\propto1/r^2$, ezért a szint $20\lg$ szerint csökken a távolsággal.`, [
          ['tétel', R`\Delta L=10\lg\frac{r_2^2}{r_1^2}=20\lg\frac{20}{2}=20\ \text{dB}`, ''],
          ['számérték', R`L_2=30-20=10\ \text{dB}`, '']]),
        S('b) Mi befolyásolja?', R`Zárt teremben a visszaverődések (zengő tér) miatt a csökkenés kisebb. Döntő a háttérzaj (elfedés), a terem akusztikája, és hogy 10 dB-en a beszéd mély és magas összetevői a hallásküszöb alatt vannak.`, [])],
      ered: [R`\text{a) }\approx10\ \text{dB}\qquad\text{b) háttérzaj, teremakusztika, a hallásküszöb frekvenciafüggése}`], links: [srcAI(['ai2016_01_12c_6'])] },

    { id: 'ai8_08', num: '8.8', title: 'Színsávok fekete-fehér TV-n és RGB-hármasok világossága', tags: ['beugro'],
      src: R`ALL-IN 134. oldal · aiD_8_4, aiD_8_7 (3.5.)`,
      task: R`<p>a) Három egyforma intenzitású sáv: kék, zöld, vörös. Melyik a legsötétebb a fekete-fehér képen, és hogyan olvaszthatnánk össze két csíkot a zöld fényességével? b) Melyik kelti a legnagyobb világosságérzetet: $(0{,}1;\ 0;\ 0{,}1)$, $(0{,}3;\ 0{,}1;\ 0{,}3)$, $(0;\ 0{,}1;\ 0{,}1)$, $(0{,}4;\ 0{,}1;\ 0{,}2)$?</p>`,
      ad: [R`$Y=0{,}3R+0{,}59G+0{,}11B$: a világossági jel ($R$, $G$, $B$ a vörös, zöld és kék színjel)`, R`b) négy $(R;\ G;\ B)$ hármas`],
      ker: [R`a) a legsötétebb sáv, és a zöld csökkentése`, R`b) a legnagyobb $Y$`],
      lv: [S('a) Fekete-fehér kép', R`A fekete-fehér TV csak $Y$-t mutatja. Egyforma intenzitásnál a súlyok döntenek.`, [
          ['definíció', R`Y_G=0{,}59>Y_R=0{,}3>Y_B=0{,}11`, 'a kék a legsötétebb'],
          ['átalakítás', R`0{,}59\,G'=0{,}3\ \Rightarrow\ G'=0{,}51`, 'a zöldet kb. a felére csökkentve a vörössel egyforma szürke lesz']]),
        S('b) Világosság', R`Mindegyikre kiszámoljuk $Y$-t.`, [
          ['behelyettesítés', R`0{,}03+0+0{,}011=0{,}041\qquad0{,}09+0{,}059+0{,}033=0{,}182`, ''],
          ['behelyettesítés', R`0+0{,}059+0{,}011=0{,}070\qquad0{,}12+0{,}059+0{,}022=0{,}201`, 'a negyedik a legnagyobb']])],
      ered: [R`\text{a) a kék a legsötétebb, a zöld}\times0{,}51\qquad\text{b) }(0{,}4;\ 0{,}1;\ 0{,}2),\ Y=0{,}201`], links: [srcAI(['aiD_8_4', 'aiD_8_7'])] },

    { id: 'ai8_09', num: '8.9', title: 'Primitív színes rendszer 2 és 1 bites RGB-vel (hivatalos)', tags: ['vizsga'],
      src: R`ALL-IN 140…141. oldal · aiD_9_7`,
      task: R`<p>R, G, B egyenként 2 bites (0, 33, 67, 100%). a) Hány színérzet? b) Hány fényességérték? c) Hány szürke? d) 1 bites színjelekkel sorolja fel a színeket fényesség szerint!</p>`,
      ad: [R`színjelenként 2 bit: 4 szint (0, 1/3, 2/3, 1)`],
      ker: [R`a) színek száma`, R`b) különböző $Y$ értékek`, R`c) szürkék`, R`d) 1 bites színek $Y$ szerint`],
      lv: [S('a) Színek', R`Három független jel, mindegyik 4 értékű.`, [['számérték', R`4^3=2^{3\cdot2}=64`, '']]),
        S('b) Fényességértékek', R`A négy szint $R=a/3$, $G=b/3$, $B=c/3$, ahol $a,b,c\in\{0,1,2,3\}$. Ezért $Y=0{,}3R+0{,}59G+0{,}11B=(30a+59b+11c)/3$ százalék. A 64 kombináció mind különböző $Y$-t ad (a 30, 59 és 11 súlyok miatt nincs két egyforma összeg).`, [['ellenőrzés', R`64\ \text{különböző }Y`, '']]),
        S('c) Szürkék', R`Szürke: $R=G=B$.`, [['számérték', R`0,\ 33,\ 67,\ 100\%:\ 4\ \text{szürke}`, '']]),
        S('d) 1 bites színek', R`Minden jel 0 vagy 1, $Y$ az összeadott súlyok.`, [
          ['számérték', R`0,\ 11,\ 30,\ 41,\ 59,\ 70,\ 89,\ 100\%`, 'fekete, kék, vörös, bíbor, zöld, kékeszöld, sárga, fehér']])],
      ered: [R`\text{a) }64\quad\text{b) }64\quad\text{c) }4\quad\text{d) fekete}<\text{kék}<\text{vörös}<\text{bíbor}<\text{zöld}<\text{kékeszöld}<\text{sárga}<\text{fehér}`], links: [srcAI(['aiD_9_7'])] },

    { id: 'ai8_10', num: '8.10', title: 'Fogalmak: metamer szín, fúziós frekvencia, váltott sor, láthatóság', tags: ['beugro', 'javitas'],
      src: R`ALL-IN 133., 135…136. oldal · aiD_8_1, aiD_8_6, aiD_8_13, aiD_8_16 (és 5-ösöm 22…23. oldal)`,
      task: R`<p>a) Mi a metamer szín? b) Mi a látás fúziós frekvenciája? c) Mi a váltott soros képalkotás előnye? d) Rajzolja fel a láthatósági függvényt, mekkora a maximuma?</p>`,
      ad: [R`fogalmi kérdések`],
      ker: [R`a), b), c), d) definíciók és indoklás`],
      lv: [S('a) Metamer szín', R`Két különböző spektrális összetételű fény, amely azonos színérzetet kelt. A szem csak három csatornán (három csapfajtával) mér, ezért sokféle spektrum ad ugyanolyan hármast. Ezen alapul a háromszínes (RGB) képmegjelenítés.`, []),
        S('b) Fúziós frekvencia', R`Az a villogási frekvencia (kb. 45 és 60 Hz között, fényerőfüggő), amely fölött a villogó fényt folyamatosnak látjuk. A mozgás folyamatosságához ennél kevesebb, 10…20 kép/s is elég.`, []),
        S('c) Váltott soros képalkotás', R`Egy kép két félképből áll (páratlan, majd páros sorok). 50 félkép/s villog, ez a fúziós frekvencia felett van, a sávszélesség viszont csak 25 teljes kép/s-é.`, []),
        S('d) Láthatósági függvény', R`$V(\lambda)$ harang alakú, kb. 400 és 700 nm között számottevő, maximuma 1 (normált), nappali látásnál 555 nm-en (sárgászöld).`, [])],
      ered: [R`\text{a) azonos színérzet más spektrummal}\quad\text{b) kb. 50 Hz}\quad\text{c) kétszeres villogás azonos sávval}\quad\text{d) max. 1, 555 nm}`],
      fix: R`A gyűjtemény c) válasza („a fél képet fele annyi idő alatt lehet felrakni”) nem mondja ki a lényeget: a sávszélesség változatlan, a villogás a fúziós frekvencia fölé kerül.`, links: [srcAI(['aiD_8_1', 'aiD_8_6', 'aiD_8_13', 'aiD_8_16'])] }
  ]
};
