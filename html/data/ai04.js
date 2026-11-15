'use strict';
const { R, S, srcAI } = require('./_h.js');
const HT = (rows) => R`H^T=\begin{bmatrix}` + rows.map(r => r.split('').join('&')).join(R`\\`) + R`\end{bmatrix}`;
module.exports = {
  id: 'f4', num: '4', short: 'Kódolás', title: 'Forráskódolás és hibavédő kódolás',
  lead: R`Két feladatcsalád: a forráskódolás (Kraft, entrópia, Huffman) és a lineáris blokk-kódok (generátormátrix, paritásellenőrző mátrix, szindróma, kódtávolság). A blokk-kódos feladatok mindig ugyanazt a receptet követik.`,
  alap: [
    { id: 'a4-forras', badge: 'A1', title: 'Forráskódolás: Kraft, entrópia, Huffman',
      html: R`<p>$p_i$: az $i$-edik szimbólum valószínűsége, $l_i$: a kódszavának hossza bitben. Átlagos kódszóhossz $\bar L=\sum p_il_i$.</p><p><b>Kraft és McMillan:</b> egyértelműen megfejthető (és prefix) kód $l_i$ hosszakkal akkor és csak akkor létezik, ha $\sum2^{-l_i}\le1$. <b>Entrópia:</b> $H=\sum p_i\log_2(1/p_i)$, ez az átlagos kódszóhossz alsó korlátja: $\bar L\ge H$. A <b>Huffman-kód</b> a két legkisebb valószínűséget vonja össze, újra és újra, amíg egy marad, az ágakra 0-t és 1-et írva. Ha a valószínűségek 2 hatványai, $\bar L=H$ pontosan.</p><p>Ha egy szimbólumonként kódolva $\bar L\ge1$ bit, de $H<1$, <b>blokk-kódolással</b> (szimbólumpárok, hármasok) közelíthetjük $H$-t.</p>`,
      key: R`A Kraft-összeg $\le1$ szükséges és elégséges a hosszakra, de egy konkrét kód ettől még lehet nem prefix.` },
    { id: 'a4-blokk', badge: 'A2', title: 'Lineáris blokk-kód: jelölések és recept',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$k,\ n$</td><td>az üzenet és a kódszó hossza bitben, C($n$,$k$)</td></tr>
<tr><td>$u,\ c,\ v,\ e$</td><td>üzenet, kódszó $c=uG$, vett szó $v=c\oplus e$, hibavektor $e$</td></tr>
<tr><td>$G$</td><td>generátormátrix, sorai az egységvektor-üzenetek kódszavai</td></tr>
<tr><td>$H^T$</td><td>a paritásellenőrző mátrix transzponáltja, $cH^T=0$ minden kódszóra</td></tr>
<tr><td>$s$</td><td>szindróma, $s=vH^T=eH^T$</td></tr>
<tr><td>$w$, $d_{\min}$</td><td>súly (egyesek száma), kódtávolság (két kódszó legkisebb eltérése)</td></tr>
</tbody></table></div><p>Szisztematikus kód: $G=[I_k\,|\,B]$, $H^T=\begin{bmatrix}B\\I_{n-k}\end{bmatrix}$, $H=[B^T\,|\,I]$. A szindróma azoknak a $H^T$-soroknak az XOR-ja, ahol $v$-ben 1 áll. Ha $s$ megegyezik $H^T$ $i$-edik sorával, egy hibát feltételezve az $i$-edik bit hibás.</p><p>Lineáris kódnál $d_{\min}$ = a legkisebb nem nulla kódszósúly. Biztosan jelez $d_{\min}-1$, javít $\lfloor(d_{\min}-1)/2\rfloor$ hibát.</p>`,
      key: R`Korlátok: Singleton $d_{\min}\le n-k+1$, Hamming (egy hiba javítására) $1+n\le2^{n-k}$.` }
  ],
  ex: [
    { id: 'ai4_01', num: '4.1', title: '2 bites üzenetek, öt bites kódszavak: G, H, szindróma', tags: ['vizsga'],
      src: R`ALL-IN 3., 68…69. oldal · ai2020_05_26_Q3, ai2014_01_07_1 (és 5-ösöm 19. oldal)`,
      task: R`<p>A kód: 00 → 00000, 01 → 01110, 10 → 10101, 11 → 11011. a) Szisztematikus generátormátrix, és melyik kódszót küldték a legnagyobb valószínűséggel, ha $v=(01010)$? b) Paritásellenőrző mátrix és $v$ szindrómája. c) Hány hibát jelez és javít biztosan?</p>`,
      ad: [R`négy kódszó, $k=2$, $n=5$`, R`$v=01010$`],
      ker: [R`a) $G$ és $\hat c$`, R`b) $H^T$ és $s$`, R`c) jelzés és javítás`],
      lv: [S('a) Generátormátrix', R`A $G$ sorai a 10 és a 01 üzenet kódszavai, így az eleje egységmátrix.`, [
          ['definíció', R`G=\begin{bmatrix}1&0&1&0&1\\0&1&1&1&0\end{bmatrix},\qquad B=\begin{bmatrix}1&0&1\\1&1&0\end{bmatrix}`, '']]),
        S('a) A legközelebbi kódszó', R`Megszámoljuk, hány bitben tér el $v$ az egyes kódszavaktól (XOR, majd az egyesek száma).`, [
          ['számérték', R`d(v,00000)=2\quad d(v,01110)=1\quad d(v,10101)=5\quad d(v,11011)=2`, R`pl. $01010\oplus11011=10001$, súlya 2`],
          ['számérték', R`\hat c=01110,\ \hat u=01`, '']]),
        S('b) Szindróma', R`$H^T$ felül $B$, alul egységmátrix. $v$-ben a 2. és a 4. bit 1-es.`, [
          ['definíció', HT(['101', '110', '100', '010', '001']), ''],
          ['behelyettesítés', R`s=110\oplus010=100`, R`$H^T$ 3. sora: a 3. bit hibás, $01010\oplus00100=01110$`]]),
        S('c) Kódtávolság', R`A nem nulla kódszavak súlya.`, [
          ['számérték', R`w(01110)=3,\ w(10101)=3,\ w(11011)=4\ \Rightarrow\ d_{\min}=3`, 'jelez 2, javít 1']])],
      ered: [R`\text{a) }\hat c=01110,\ \hat u=01\qquad\text{b) }s=100\qquad\text{c) 2 hibát jelez, 1-et javít}`],
      fix: R`A példatár korábbi változata a 11011 távolságát 3-nak írta, helyesen 2 (hibajegyzék H28). A döntést nem befolyásolja.`,
      links: [srcAI(['ai2020_05_26_Q3', 'ai2014_01_07_1'])] },

    { id: 'ai4_02', num: '4.2', title: 'C(5,2) kód, amely csak jelezni tud', tags: ['vizsga'],
      src: R`ALL-IN 34…36., 78…79. oldal · ai2015_12_16_3, ai2014_01_14_1`,
      task: R`<p>Egy C(5,2) szisztematikus lineáris kód kódszavai között szerepel az 10101 és a 01101. a) G és H. b) $d_{\min}$, jelezhető és javítható hibák. c) A vett szó $v=11001$: szindróma, javítás, üzenet?</p>`,
      ad: [R`$n=5$, $k=2$, szisztematikus`, R`két kódszó: 10101, 01101 (ezek eleje 10 és 01)`, R`$v=11001$`],
      ker: [R`a) $G$, $H^T$`, R`b) $d_{\min}$`, R`c) $s$, $\hat c$, $\hat u$`],
      lv: [S('a) Mátrixok', R`Szisztematikus kódnál a 10 és 01 üzenet kódszavai adják $G$ sorait.`, [
          ['definíció', R`G=\begin{bmatrix}1&0&1&0&1\\0&1&1&0&1\end{bmatrix}\qquad ` + HT(['101', '101', '100', '010', '001']), '']]),
        S('b) Kódtávolság', R`A negyedik kódszó a két sor XOR-ja.`, [
          ['számérték', R`\{00000,\ 10101,\ 01101,\ 11000\}\qquad w:\ 3,\ 3,\ 2`, ''],
          ['tétel', R`d_{\min}=2:\ \text{jelez }1,\ \text{javít }0`, '']]),
        S('c) Szindróma', R`$v$-ben az 1., 2. és 5. bit 1-es.`, [
          ['behelyettesítés', R`s=101\oplus101\oplus001=001`, R`$H^T$ 5. sora`],
          ['átalakítás', R`\hat c=11001\oplus00001=11000\ \Rightarrow\ \hat u=11`, 'csak valószínűsíthető']])],
      ered: [R`\text{b) }d_{\min}=2\ (\text{1 hibát jelez, javítani nem tud})\qquad\text{c) }s=001,\ \hat u=11\ \text{(nem garantált)}`],
      chk: [R`$d_{\min}=2$ miatt egy hibát csak jelezni lehet. A 001-es szindróma itt egyetlen egybites hibához tartozik, ezért a „valószínűleg 11” válasz indokolt. Az 1. és a 2. bit hibája viszont ugyanazt a szindrómát (101) adná: ezeket nem lehet megkülönböztetni.`],
      links: [srcAI(['ai2015_12_16_3', 'ai2014_01_14_1'])] },

    { id: 'ai4_03', num: '4.3', title: 'Hamming(7,4) kód (2016.01.12.)', tags: ['vizsga'],
      src: R`ALL-IN 42…44., 84…85. oldal · ai2016_01_12_1, ai2016_01_12c_1`,
      task: R`<p>$G=[1000110;\ 0100101;\ 0010011;\ 0001111]$. a) $H^T$? b) Szindróma $v=0000111$-re. c) Hány hibát jelez és javít, és miért? d) Hány bites üzenetek tartoznak hozzá?</p>`,
      ad: [R`$G=[I_4\,|\,B]$, $B$ sorai: 110, 101, 011, 111`, R`$v=0000111$`],
      ker: [R`a) $H^T$`, R`b) $s$`, R`c) jelzés és javítás`, R`d) $k$`],
      lv: [S('a) $H^T$', R`Felül $B$, alul a $3\times3$-as egységmátrix.`, [
          ['definíció', HT(['110', '101', '011', '111', '100', '010', '001']), 'a 7 különböző nem nulla 3 bites szó']]),
        S('b) Szindróma', R`$v$-ben az 5., 6., 7. bit 1-es.`, [
          ['behelyettesítés', R`s=100\oplus010\oplus001=111`, R`$H^T$ 4. sora`],
          ['átalakítás', R`\hat c=0000111\oplus0001000=0001111\ \Rightarrow\ \hat u=0001`, 'egy hibát feltételezve']]),
        S('c) Jelzés és javítás', R`$H^T$ sorai mind különbözők és nem nullák, ezért minden egybites hiba más szindrómát ad: 1 hiba javítható. Két oszlop összege soha nem 0, de három sor összege lehet 0 (pl. 110 ⊕ 101 ⊕ 011), ezért $d_{\min}=3$.`, [
          ['tétel', R`1+n\le2^{n-k}:\ 1+7=8=2^3`, 'egyenlőség: perfekt kód'],
          ['számérték', R`d_{\min}=3:\ \text{jelez }2,\ \text{javít }1`, '']]),
        S('d) Üzenethossz', R`$G$ sorainak száma.`, [['számérték', R`k=4\ \text{bit}`, ''] ])],
      ered: [R`\text{b) }s=111\ (\hat c=0001111)\qquad\text{c) }d_{\min}=3:\ \text{jelez 2, javít 1}\qquad\text{d) }k=4`], links: [srcAI(['ai2016_01_12_1', 'ai2016_01_12c_1'])] },

    { id: 'ai4_04', num: '4.4', title: 'Másik (7,4) kód, $v=1100001$', tags: ['vizsga'],
      src: R`ALL-IN 65…66. oldal · ai2014_12_22_4`,
      task: R`<p>$G=[1000011;\ 0100110;\ 0010101;\ 0001111]$. a) $H^T$. b) Szindróma $v=1100001$-re. c) Hibajelző és -javító képesség.</p>`,
      ad: [R`$G=[I_4\,|\,B]$, $B$ sorai: 011, 110, 101, 111`, R`$v=1100001$`],
      ker: [R`a) $H^T$`, R`b) $s$ és a javítás`, R`c) jelzés és javítás`],
      lv: [S('a) $H^T$', '', [['definíció', HT(['011', '110', '101', '111', '100', '010', '001']), '']]),
        S('b) Szindróma', R`$v$-ben az 1., 2. és 7. bit 1-es.`, [
          ['behelyettesítés', R`s=011\oplus110\oplus001=100`, R`$H^T$ 5. sora`],
          ['átalakítás', R`\hat c=1100001\oplus0000100=1100101\ \Rightarrow\ \hat u=1100`, R`ellenőrzés: $G$ 1. és 2. sorának XOR-ja`]]),
        S('c) Kódtávolság', R`Ez is Hamming(7,4) kód (a $H^T$ sorai a 7 különböző nem nulla szó), ezért $d_{\min}=3$.`, [['tétel', R`d_{\min}=3`, 'jelez 2, javít 1']])],
      ered: [R`\text{b) }s=100,\ \hat u=1100\qquad\text{c) }d_{\min}=3:\ \text{jelez 2, javít 1}`], links: [srcAI(['ai2014_12_22_4'])] },

    { id: 'ai4_05', num: '4.5', title: 'Tervezzünk kódot: 2 bites üzenet, 2 hiba jelzése', tags: ['vizsga', 'nehez'],
      src: R`ALL-IN 19…20. oldal · ai2016_01_05_4`,
      task: R`<p>Egy szisztematikus lineáris kódnak 2 bites üzenetei vannak, és 2 hibát tud detektálni. a) Mi lehet a generátormátrix? b) A legkisebb kódszóhossz? c) A kód súlya?</p>`,
      ad: [R`$k=2$`, R`2 hiba biztos jelzése`],
      ker: [R`a) $G$`, R`b) $n_{\min}$`, R`c) a kód súlya (a legkisebb nem nulla kódszósúly)`],
      lv: [S('A szükséges kódtávolság', R`$d_{\min}-1$ hibát jelez a kód.`, [
          ['definíció', R`d_{\min}-1=2\ \Rightarrow\ d_{\min}=3`, 'ez egy hiba javítását is jelenti']]),
        S('b) A legkisebb $n$', R`Két korlátot nézünk. A Singleton-korlát szerint $d_{\min}\le n-k+1$. Mivel a kód 1 hibát javít, a Hamming-korlátnak is teljesülnie kell: a $2^{n-k}$ szindróma ki kell, hogy adja a hibátlan esetet és mind az $n$ egybites hibát.`, [
          ['tétel', R`n\ge d_{\min}+k-1=3+2-1=4`, 'Singleton'],
          ['tétel', R`1+n\le2^{n-2}:\ n=4:\ 5\not\le4\qquad n=5:\ 6\le8`, 'Hamming: $n=5$']]),
        S('a) Egy jó $G$', R`$G=[I_2\,|\,B]$, a $B$ két sora legyen olyan, hogy minden nem nulla kódszó súlya legalább 3: mindkét sorban legalább két egyes, és a két sor legalább egy helyen különbözzön.`, [
          ['definíció', R`G=\begin{bmatrix}1&0&1&1&1\\0&1&0&1&1\end{bmatrix}`, ''],
          ['ellenőrzés', R`10111\ (w=4),\quad01011\ (w=3),\quad11100\ (w=3)`, R`$d_{\min}=3$`]]),
        S('c) A kód súlya', R`A legkisebb nem nulla kódszósúly, lineáris kódnál egyenlő $d_{\min}$-nel.`, [['számérték', R`w_{\min}=3`, ''] ])],
      ered: [R`\text{a) pl. }G=[10111;\ 01011]\qquad\text{b) }n=5\qquad\text{c) }w_{\min}=d_{\min}=3`], links: [srcAI(['ai2016_01_05_4'])] },

    { id: 'ai4_06', num: '4.6', title: 'Nem szisztematikus (7,3) kód három kódszóból', tags: ['vizsga'],
      src: R`ALL-IN 104…105. oldal · aiD_4_2`,
      task: R`<p>Lineáris kód: 001 → 0101011, 110 → 1011011, 101 → 1000110. a) A 000 kódszava? b) Hány kódszó és legfeljebb hány szindróma? c) Hibajelző és -javító képesség?</p>`,
      ad: [R`$k=3$, $n=7$, három üzenet kódszava`, R`lineáris: két üzenet XOR-jának kódszava a két kódszó XOR-ja`],
      ker: [R`a) a 000 kódszava`, R`b) kódszavak és szindrómák száma`, R`c) $d_{\min}$`],
      lv: [S('a) A 000 kódszava', R`Lineáris kódban $0\cdot G=0$.`, [['definíció', R`000\to0000000`, '']]),
        S('A többi kódszó a linearitásból', '', [
          ['átalakítás', R`100=001\oplus101\to0101011\oplus1000110=1101101`, ''],
          ['átalakítás', R`010=110\oplus100\to1011011\oplus1101101=0110110`, ''],
          ['átalakítás', R`011\to0011101\qquad111\to1110000`, R`$010\oplus001$, illetve $110\oplus001$`]]),
        S('b) Darabszámok', '', [
          ['számérték', R`2^k=2^3=8\ \text{kódszó}\qquad2^{n-k}=2^4=16\ \text{szindróma}`, '']]),
        S('c) Kódtávolság', R`A hét nem nulla kódszó súlya:`, [
          ['számérték', R`4,\ 5,\ 3,\ 5,\ 4,\ 4,\ 3\ \Rightarrow\ d_{\min}=3`, 'jelez 2, javít 1']])],
      ered: [R`\text{a) }0000000\qquad\text{b) 8 kódszó, 16 szindróma}\qquad\text{c) }d_{\min}=3:\ \text{jelez 2, javít 1}`], links: [srcAI(['aiD_4_2'])] },

    { id: 'ai4_07', num: '4.7', title: R`$G=[10011;\,01110]$, $v=10101$`, tags: ['vizsga', 'sajat'],
      src: R`ALL-IN 105. oldal · aiD_4_3 (a gyűjteményben nincs megoldás)`,
      task: R`<p>Bináris, lineáris, szisztematikus kód, $G=[10011;\ 01110]$. a) Kódszavak, legvalószínűbb üzenet $v=10101$-re. b) Paritásellenőrző mátrix és szindróma.</p>`,
      ad: [R`$G=[I_2\,|\,B]$, $B$ sorai: 011, 110`, R`$v=10101$`],
      ker: [R`a) kódszavak és $\hat u$`, R`b) $H^T$ és $s$`],
      lv: [S('a) Kódszavak és távolságok', '', [
          ['számérték', R`00000,\ 10011,\ 01110,\ 10011\oplus01110=11101`, ''],
          ['számérték', R`d(v,\cdot)=3,\ 2,\ 4,\ 1\ \Rightarrow\ \hat c=11101,\ \hat u=11`, '']]),
        S('b) Szindróma', R`$v$-ben az 1., 3. és 5. bit 1-es.`, [
          ['definíció', HT(['011', '110', '100', '010', '001']), ''],
          ['behelyettesítés', R`s=011\oplus100\oplus001=110`, R`$H^T$ 2. sora: a 2. bit hibás, egyezik az a) résszel`]])],
      ered: [R`\text{a) }\hat c=11101,\ \hat u=11\qquad\text{b) }s=110`],
      chk: [R`A feladat adatai elmosódott képről olvasva `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['aiD_4_3'])] },

    { id: 'ai4_08', num: '4.8', title: R`$G=[10101;\,01011]$, $v=11101$`, tags: ['vizsga'],
      src: R`ALL-IN 106. oldal · aiD_4_7 (és 5-ösöm 19. oldal)`,
      task: R`<p>a) Kódszavak, legvalószínűbb üzenet $v=11101$-re. b) H és a szindróma. c) Hány hibát jelez és javít biztosan?</p>`,
      ad: [R`$G=[I_2\,|\,B]$, $B$ sorai: 101, 011`, R`$v=11101$`],
      ker: [R`a) kódszavak és $\hat u$`, R`b) $H$ és $s$`, R`c) jelzés és javítás`],
      lv: [S('a) Kódszavak', '', [
          ['számérték', R`00000,\ 10101,\ 01011,\ 11110`, ''],
          ['számérték', R`d(v,\cdot)=4,\ 1,\ 3,\ 2\ \Rightarrow\ \hat u=10`, '']]),
        S('b) $H$ és szindróma', R`$H=[B^T\,|\,I]$, $H^T$ sorai 101, 011, 100, 010, 001. $v$-ben az 1., 2., 3. és 5. bit 1-es.`, [
          ['definíció', R`H=\begin{bmatrix}1&0&1&0&0\\0&1&0&1&0\\1&1&0&0&1\end{bmatrix}`, ''],
          ['behelyettesítés', R`s=101\oplus011\oplus100\oplus001=011`, R`$H^T$ 2. sora: $\hat c=10101$`]]),
        S('c) Kódtávolság', '', [['számérték', R`w:\ 3,\ 3,\ 4\ \Rightarrow\ d_{\min}=3`, 'jelez 2, javít 1']])],
      ered: [R`\text{a) }\hat u=10\qquad\text{b) }s=011\qquad\text{c) 2 hibát jelez, 1-et javít}`], links: [srcAI(['aiD_4_7'])] },

    { id: 'ai4_09', num: '4.9', title: 'Öt kódszó: négy állítás', tags: ['beugro'],
      src: R`ALL-IN 105. oldal · aiD_4_5 (3.6.)`,
      task: R`<p>Kódszavak: 10101, 01010, 00011, 11100, 11111. A) $d_{\min}=2$. B) Egy bithiba mindig javítható. C) Egy bithiba mindig észlelhető. D) Nem szisztematikus kód.</p>`,
      ad: [R`öt kódszó, $n=5$`],
      ker: [R`melyik állítás igaz`],
      lv: [S('A) Kódtávolság', R`A kód nem lineáris (nincs benne 00000), ezért a páronkénti távolságokat kell nézni.`, [
          ['számérték', R`d(10101,11111)=2\qquad d(01010,00011)=2\qquad d(11100,11111)=2`, R`nincs 1-es távolság: $d_{\min}=2$, A igaz`]]),
        S('B), C)', R`$d_{\min}=2$: $d_{\min}-1=1$ hibát jelez, $\lfloor1/2\rfloor=0$-t javít.`, [['tétel', R`\text{B hamis, C igaz}`, '']]),
        S('D) Szisztematikus-e?', R`Szisztematikus kódnál $2^k$ kódszó van, és az üzenet bitjei változatlanul megjelennek. 5 nem kettő hatványa.`, [['ellenőrzés', R`5\ne2^k`, 'D igaz']])],
      ered: [R`\text{A, C, D igaz, B hamis}`], links: [srcAI(['aiD_4_5'])] },

    { id: 'ai4_10', num: '4.10', title: 'Kraft: 2,2,3,3,3,4,4,4,4 és 2,2,3,3,3,5,5,5,5', tags: ['vizsga'],
      src: R`ALL-IN 11., 77…78. oldal · ai2020_06_02_Q1, ai2014_01_07_10 (és 5-ösöm 20. oldal)`,
      task: R`<p>a) Lehet-e egyértelműen megfejthető kódot készíteni a 2,2,3,3,3,4,4,4,4 hosszakkal? b) Készítsen prefixmentes kódot a 2,2,3,3,3,5,5,5,5 hosszakkal!</p>`,
      ad: [R`$l_i$: a kódszóhosszak`],
      ker: [R`a) létezik-e`, R`b) egy prefix kód`],
      lv: [S('a) Kraft-összeg', R`McMillan: egyértelműen megfejthető kódhoz $\sum2^{-l_i}\le1$ kell (A1).`, [
          ['behelyettesítés', R`2\cdot\tfrac14+3\cdot\tfrac18+4\cdot\tfrac1{16}=0{,}5+0{,}375+0{,}25=1{,}125>1`, 'nem lehet']]),
        S('b) Kraft-összeg', '', [
          ['behelyettesítés', R`2\cdot\tfrac14+3\cdot\tfrac18+4\cdot\tfrac1{32}=0{,}5+0{,}375+0{,}125=1`, 'lehet, és a kódfa teljes']]),
        S('b) Egy prefix kód', R`Kódfából: a 2 bites szavak 00 és 11, a 3 bitesek 010, 011, 100, a maradék 101 ágat 2 bittel tovább bontjuk négy 5 bites szóra.`, [
          ['számérték', R`00,\ 11,\ 010,\ 011,\ 100,\ 10100,\ 10101,\ 10110,\ 10111`, 'egyik sem eleje egy másiknak']])],
      ered: [R`\text{a) nem (Kraft-összeg }1{,}125)\qquad\text{b) }00,\ 11,\ 010,\ 011,\ 100,\ 10100,\ 10101,\ 10110,\ 10111`], links: [srcAI(['ai2020_06_02_Q1', 'ai2014_01_07_10'])] },

    { id: 'ai4_11', num: '4.11', title: 'a → 1, b → 10, c → 100', tags: ['beugro'],
      src: R`ALL-IN 106. oldal · aiD_4_6 (4.5.)`,
      task: R`<p>Kód: a → 1, b → 10, c → 100. A) Az 1011001001 a „bacca” kódja. B) Ez prefix kód. C) Létezik prefix kód ugyanezekkel a hosszakkal. D) A kód egyértelműen dekódolható.</p>`,
      ad: [R`három kódszó: 1, 10, 100`],
      ker: [R`melyik állítás igaz`],
      lv: [S('A) „bacca”', R`Összefűzzük a kódszavakat: b=10, a=1, c=100, c=100, a=1.`, [['számérték', R`10\,|\,1\,|\,100\,|\,100\,|\,1=1011001001`, 'A igaz']]),
        S('B) Prefix-e?', R`Prefix kódban egyik szó sem eleje egy másiknak.`, [['ellenőrzés', R`1\ \text{eleje a}\ 10\text{-nek}`, 'B hamis']]),
        S('C) Létezik-e prefix kód?', R`Kraft-összeg a hosszakra (1, 2, 3).`, [['tétel', R`2^{-1}+2^{-2}+2^{-3}=0{,}875\le1`, 'C igaz, pl. 0, 10, 110']]),
        S('D) Egyértelmű dekódolás', R`Minden kódszó 1-gyel kezdődik, és utána csak 0-k jönnek: minden 1-es egy új szó elejét jelzi (vesszőkód). Ezért mindig egyértelműen szétvágható.`, [['ellenőrzés', R`\text{D igaz}`, ''] ])],
      ered: [R`\text{A, C, D igaz, B hamis}`], links: [srcAI(['aiD_4_6'])] },

    { id: 'ai4_12', num: '4.12', title: 'Hétszintű kvantáló, Huffman, bitsebesség', tags: ['vizsga'],
      src: R`ALL-IN 104. oldal · aiD_4_1`,
      task: R`<p>2 kHz-es alapsávi jel, Nyquist szerinti minimális $f_s$. A kvantáló hét szintje {−3…+3}, valószínűségük 1/16, 1/16, 1/8, 1/2, 1/8, 1/16, 1/16. a) A legkisebb átlagos kódszóhossz és bitsebesség? b) Huffman-kód. c) Elért sebesség?</p>`,
      ad: [R`$B=2$ kHz $\Rightarrow f_s=2B=4$ kHz (4000 minta/s)`, R`$p(0)=1/2$, $p(\pm1)=1/8$, $p(\pm2)=p(\pm3)=1/16$`],
      ker: [R`a) $H$ és a bitsebesség`, R`b) Huffman-kód`, R`c) $\bar L$ és a sebesség`],
      lv: [S('a) Entrópia', R`$H=\sum p_i\log_2(1/p_i)$, tagonként:`, [
          ['definíció', R`\tfrac12\cdot1+2\cdot\tfrac18\cdot3+4\cdot\tfrac1{16}\cdot4=0{,}5+0{,}75+1=2{,}25\ \text{bit}`, R`$\log_22=1$, $\log_28=3$, $\log_216=4$`],
          ['számérték', R`4000\cdot2{,}25=9000\ \text{bit/s}`, 'a legkisebb bitsebesség']]),
        S('b) Huffman-kód', R`A valószínűségek 2 hatványai, ezért a Huffman-kód hosszai $l_i=\log_2(1/p_i)$: 1, 3, 3, 4, 4, 4, 4.`, [
          ['definíció', R`0\to0\qquad\pm1\to100,\ 101\qquad\pm2,\ \pm3\to1100,\ 1101,\ 1110,\ 1111`, '']]),
        S('c) Elért sebesség', '', [
          ['ellenőrzés', R`\bar L=\tfrac12\cdot1+2\cdot\tfrac18\cdot3+4\cdot\tfrac1{16}\cdot4=2{,}25=H`, 'eléri az alsó korlátot'],
          ['számérték', R`4000\cdot2{,}25=9000\ \text{bit/s}`, R`3 bites fix kóddal 12 000 bit/s lenne`]])],
      ered: [R`\text{a) }H=2{,}25\ \text{bit},\ 9000\ \text{bit/s}\qquad\text{c) }\bar L=H,\ 9000\ \text{bit/s}`], links: [srcAI(['aiD_4_1'])] },

    { id: 'ai4_13', num: '4.13', title: '90 és 10%-os forrás: lehet 1 bit alatt?', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 25. oldal · ai2016_06_07_2`,
      task: R`<p>Bináris forrás: „a” 90%, „b” 10%. Ha lehetséges, tervezzen prefixmentes kódot, amelynek szimbólumonkénti átlagos hossza szigorúan kisebb 1-nél. Ha nem, indokolja!</p>`,
      ad: [R`$p_a=0{,}9$, $p_b=0{,}1$`],
      ker: [R`prefix kód $\bar L<1$ bit/szimbólummal, vagy indoklás`],
      miert: [[R`Miért segít a párosítás?`, R`Egyenként legalább 1 bit kell minden szimbólumra. Párokban a gyakori „aa” egyetlen bitet kaphat, ez két szimbólum, így fél bit szimbólumonként.`]],
      lv: [S('Az alsó korlát', R`Ha az entrópia 1 alatt van, elvben lehetséges.`, [
          ['definíció', R`H=0{,}9\log_2\tfrac1{0{,}9}+0{,}1\log_2\tfrac1{0{,}1}=0{,}137+0{,}332=0{,}469\ \text{bit}`, '']]),
        S('Párok valószínűsége', R`A szimbólumok függetlenek, a pár valószínűsége a szorzat.`, [
          ['számérték', R`aa:\ 0{,}81\quad ab:\ 0{,}09\quad ba:\ 0{,}09\quad bb:\ 0{,}01`, '']]),
        S('Huffman a párokra', R`Összevonás: $bb+ba=0{,}10$, majd $ab+0{,}10=0{,}19$, végül $0{,}19+aa$. Hosszak: aa 1, ab 2, ba 3, bb 3.`, [
          ['definíció', R`aa\to0\quad ab\to10\quad ba\to110\quad bb\to111`, ''],
          ['számérték', R`\bar L_2=0{,}81\cdot1+0{,}09\cdot2+0{,}09\cdot3+0{,}01\cdot3=1{,}29\ \text{bit/pár}`, ''],
          ['számérték', R`\bar L=\frac{1{,}29}{2}=0{,}645\ \text{bit/szimbólum}<1`, '']])],
      ered: [R`\text{lehetséges: párokat kódolva }\bar L=0{,}645\ \text{bit/szimbólum}\ (H=0{,}469)`],
      fix: R`A hallgató nem adott választ. Egyenként kódolva valóban nem megy, blokk-kódolással igen.`, links: [srcAI(['ai2016_06_07_2'])] }
  ]
};
