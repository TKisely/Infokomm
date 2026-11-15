'use strict';
const { R, S, src5 } = require('./_h.js');
const HT = rows => R`H^T=\begin{bmatrix}` + rows.map(r => r.split('').join('&')).join(R`\\`) + R`\end{bmatrix}`;
module.exports = {
  id: 'f6', num: '6', short: 'Kódolás', title: 'Forráskódolás és hibavédő kódolás',
  lead: R`Paritásbitekből generátormátrix, szindróma és javítás. Huffman-kód és entrópia, Kraft-egyenlőtlenség, és egy szokatlan feladat az állapotok kódolásáról.`,
  alap: [
    { id: 'b6-jel', badge: 'A1', title: 'Jelölések: blokk-kód',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$u$</td><td>üzenet ($k$ bit)</td></tr>
<tr><td>$c$</td><td>kódszó ($n$ bit), $c=uG$</td></tr>
<tr><td>$v$</td><td>vett szó, $v=c\oplus e$, ahol $e$ a hibavektor (1-es ott, ahol a bit elromlott)</td></tr>
<tr><td>$G$</td><td>generátormátrix ($k\times n$), sorai az egységvektor-üzenetek kódszavai</td></tr>
<tr><td>$H$, $H^T$</td><td>paritásellenőrző mátrix és transzponáltja, $cH^T=0$ minden kódszóra</td></tr>
<tr><td>$s$</td><td>szindróma, $s=vH^T=eH^T$</td></tr>
<tr><td>$d_{\min}$</td><td>kódtávolság: két kódszó közti legkisebb eltérés, lineáris kódnál a legkisebb nem nulla kódszósúly</td></tr>
</tbody></table></div><p><b>Recept.</b> Szisztematikus kódnál $G=[I\,|\,B]$ (elöl az üzenet, utána a paritásbitek), $H^T=\begin{bmatrix}B\\I\end{bmatrix}$, $H=[B^T\,|\,I]$. A szindróma a $v$ egyeseinek helyén álló $H^T$-sorok XOR-ja. Ha $s$ egyenlő $H^T$ valamelyik sorával, egyetlen hibát feltételezve az a bit romlott el. Biztosan jelezhető $d_{\min}-1$, javítható $\lfloor(d_{\min}-1)/2\rfloor$ hiba.</p>` },
    { id: 'b6-forras', badge: 'A2', title: 'Forráskódolás',
      html: R`<p>$p_i$ az $i$-edik szimbólum valószínűsége, $l_i$ a kódszavának hossza. Átlagos kódszóhossz $\bar L=\sum p_il_i$, entrópia $H=\sum p_i\log_2(1/p_i)$, és minden egyértelműen dekódolható kódra $\bar L\ge H$. <b>Kraft és McMillan</b>: egyértelműen dekódolható (és akkor prefix) kód pontosan akkor létezik a megadott hosszakkal, ha $\sum2^{-l_i}\le1$. <b>Huffman</b>: mindig a két legkisebb valószínűséget vonjuk össze, amíg egy marad. Ha minden $p_i$ kettő hatványa, $\bar L=H$.</p>` }
  ],
  ex: [
    { id: 'o6_01', num: '6.1', title: 'Két kód paritásképletekből: C₁ és C₂', tags: ['vizsga'],
      src: R`5-ösöm 17…18. oldal · 5o_17_1`,
      task: R`<p>$C_1$: $u_1u_2u_3u_4\to u_1u_2u_3u_4p_1p_2p_3$, $p_1=u_1\oplus u_2\oplus u_4$, $p_2=u_1\oplus u_3\oplus u_4$, $p_3=u_2\oplus u_3\oplus u_4$. $C_2$: ugyanez és $p_4=p_1\oplus p_2\oplus p_3$. a) $C_1$ kódszavai. b) $C_1$ paritásellenőrző mátrixa, hány bites a szindróma? c) Mi lehetett az üzenet 0110000 vételekor, biztos? d) $C_2$ generátormátrixa?</p>`,
      ad: [R`4 bites üzenet, 3 paritásbit a megadott XOR-képletekkel ($C_1$: $n=7$, $k=4$)`, R`$v=0110000$: a vett szó`],
      ker: [R`a) a 16 kódszó`, R`b) $H$ (paritásellenőrző mátrix), $H^T$ és a szindróma hossza`, R`c) $\hat u$, és hogy biztos-e`, R`d) $G_2$`],
      lv: [S('A generátormátrix', R`A $G$ sorai az 1000, 0100, 0010, 0001 üzenetek kódszavai. Például $u=1000$: $p_1=1$, $p_2=1$, $p_3=0$.`, [
          ['behelyettesítés', R`1000\to1000\,110\quad0100\to0100\,101\quad0010\to0010\,011\quad0001\to0001\,111`, 'a paritásképletekből'],
          ['definíció', R`G=[I\,|\,B],\qquad B=\begin{bmatrix}1&1&0\\1&0&1\\0&1&1\\1&1&1\end{bmatrix}`, '']]),
        S('a) A kódszavak', R`Minden kódszó a $G$ azon sorainak XOR-ja, ahol az üzenetben 1-es áll.`, [
          ['számérték', R`0000000,\ 0001111,\ 0010011,\ 0011100,\ 0100101,\ 0101010,\ 0110110,\ 0111001`, ''],
          ['számérték', R`1000110,\ 1001001,\ 1010101,\ 1011010,\ 1100011,\ 1101100,\ 1110000,\ 1111111`, R`a legkisebb nem nulla súly 3, $d_{\min}=3$`]]),
        S('b) Paritásellenőrző mátrix', R`$H^T$ felül $B$, alul a $3\times3$-as egységmátrix. A szindróma annyi bites, ahány paritásbit van.`, [
          ['definíció', HT(['110', '101', '011', '111', '100', '010', '001']), R`3 bites szindróma`],
          ['definíció', R`H=[B^T\,|\,I]=\begin{bmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{bmatrix}`, R`$B$ transzponáltja mellé a $3\times3$-as egységmátrix`]]),
        S('c) Dekódolás', R`$v=0110000$ a 2. és a 3. helyen 1-es, ezért $H^T$ 2. és 3. sorát adjuk össze.`, [
          ['behelyettesítés', R`s=101\oplus011=110`, ''],
          ['ellenőrzés', R`110=H^T\ \text{1. sora}\ \Rightarrow\ e=1000000`, 'egy hibát feltételezve az 1. bit romlott el'],
          ['számérték', R`\hat c=0110000\oplus1000000=1110000\ \Rightarrow\ \hat u=1110`, ''],
          ['ellenőrzés', R`d_{\min}=3`, 'biztos csak akkor, ha legfeljebb 1 hiba történt']]),
        S('d) A második kód ($C_2$) generátormátrixa', R`Kifejtjük a negyedik paritásbitet: minden $u_i$ annyiszor szerepel, ahány képletben benne van.`, [
          ['átalakítás', R`p_4=p_1\oplus p_2\oplus p_3=u_1\oplus u_1\oplus u_2\oplus u_2\oplus u_3\oplus u_3\oplus u_4\oplus u_4\oplus u_4=u_4`, R`$x\oplus x=0$`],
          ['definíció', R`G_2=\begin{bmatrix}1&0&0&0&1&1&0&0\\0&1&0&0&1&0&1&0\\0&0&1&0&0&1&1&0\\0&0&0&1&1&1&1&1\end{bmatrix}`, R`az 1. sor súlya 3, ezért $d_{\min}$ marad 3`]])],
      ered: [R`\text{b) 3 bites szindróma}\qquad\text{c) }\hat u=1110,\ \text{nem biztos (csak egy hibánál)}\qquad\text{d) }p_4=u_4,\ d_{\min}(C_2)=3`],
      chk: [R`$C_1$ a (7,4)-es Hamming-kód: $H^T$ hét sora a hét különböző nem nulla 3 bites szó, ezért minden egyes hiba más szindrómát ad.`], links: [src5(['5o_17_1'])] },

    { id: 'o6_02', num: '6.2', title: 'A, B, C forrás Huffman-kódja', tags: ['vizsga'],
      src: R`5-ösöm 18. oldal · 5o_18_1`,
      task: R`<p>20 000 szimbólum/s, valószínűségek 50%, 25%, 25%. Huffman-kód, várható bitsebesség, és mennyire közelíti a veszteségmentes kódolás alsó határát?</p>`,
      ad: [R`$p_A=0{,}5$, $p_B=0{,}25$, $p_C=0{,}25$`, R`$r=20\,000$ szimbólum/s`],
      ker: [R`a Huffman-kód, $\bar L$ (átlagos kódszóhossz), a bitsebesség, és $\bar L$ összevetése $H$-val (entrópia)`],
      lv: [S('Huffman-kód', R`A két legkisebbet (B és C, 0,25 és 0,25) összevonjuk: 0,5. Marad A (0,5) és BC (0,5). Az ágakra 0-t és 1-et írunk.`, [
          ['definíció', R`A\to0\qquad B\to10\qquad C\to11`, '']]),
        S('Átlagos hossz és bitsebesség', '', [
          ['definíció', R`\bar L=0{,}5\cdot1+0{,}25\cdot2+0{,}25\cdot2=1{,}5\ \text{bit/szimbólum}`, ''],
          ['számérték', R`1{,}5\cdot20\,000=30\,000\ \text{bit/s}`, '']]),
        S('Az alsó határ', R`A veszteségmentes kódolás alsó határa az entrópia.`, [
          ['definíció', R`H=0{,}5\log_22+2\cdot0{,}25\log_24=0{,}5+1=1{,}5\ \text{bit}`, ''],
          ['ellenőrzés', R`\bar L=H`, 'pontosan eléri, mert minden valószínűség kettő hatványa']])],
      ered: [R`A\to0,\ B\to10,\ C\to11\qquad30\,000\ \text{bit/s}\qquad\bar L=H=1{,}5\ \text{bit: eléri az alsó határt}`], links: [src5(['5o_18_1'])] },

    { id: 'o6_03', num: '6.3', title: 'Kétbites üzenetek: G, H alakban, szindróma', tags: ['vizsga'],
      src: R`5-ösöm 19. oldal · 5o_19_1`,
      task: R`<p>00 → 00000, 01 → 01110, 10 → 10101, 11 → 11011. a) Szisztematikus G, legvalószínűbb kódszó $v=01010$-ra. b) H és a szindróma.</p>`,
      ad: [R`négy kódszó, $k=2$, $n=5$`, R`$v=01010$`],
      ker: [R`a) $G$ és $\hat c$`, R`b) $H$ (paritásellenőrző mátrix) és $s$`],
      lv: [S('a) Generátormátrix', R`A $G$ sorai a 10 és a 01 üzenet kódszavai, így az eleje egységmátrix.`, [
          ['definíció', R`G=\begin{bmatrix}1&0&1&0&1\\0&1&1&1&0\end{bmatrix}=[I\,|\,B],\quad B=\begin{bmatrix}1&0&1\\1&1&0\end{bmatrix}`, '']]),
        S('a) A legközelebbi kódszó', R`Megszámoljuk, hány bitben tér el $v$ az egyes kódszavaktól.`, [
          ['számérték', R`d(v,00000)=2\quad d(v,01110)=1\quad d(v,10101)=5\quad d(v,11011)=2`, ''],
          ['számérték', R`\hat c=01110\ \Rightarrow\ \hat u=01`, 'egyetlen bitben tér el']]),
        S('b) H és a szindróma', R`$H=[B^T\,|\,I]$. A szindróma $H^T$ azon sorainak XOR-ja, ahol $v$-ben 1-es áll (2. és 4. hely).`, [
          ['definíció', R`H=\begin{bmatrix}1&1&1&0&0\\0&1&0&1&0\\1&0&0&0&1\end{bmatrix}`, ''],
          ['behelyettesítés', R`s=110\oplus010=100`, R`$H^T$ 2. sora 110, 4. sora 010`],
          ['ellenőrzés', R`100=H^T\ \text{3. sora}\ \Rightarrow\ \hat c=01010\oplus00100=01110`, 'egyezik az a) résszel']])],
      ered: [R`\text{a) }\hat c=01110\ (\hat u=01)\qquad\text{b) }s=100,\ \text{a 3. bit hibás}`], links: [src5(['5o_19_1'])] },

    { id: 'o6_04', num: '6.4', title: R`$G=[10101;\,01011]$`, tags: ['vizsga'],
      src: R`5-ösöm 19. oldal · 5o_19_2`,
      task: R`<p>$G=\begin{bmatrix}1&0&1&0&1\\0&1&0&1&1\end{bmatrix}$. a) Kódszavak, legvalószínűbb üzenet $v=11101$-re. b) H és a szindróma. c) Biztosan jelezhető és javítható hibák?</p>`,
      ad: [R`$G=[I\,|\,B]$, $B=\begin{bmatrix}1&0&1\\0&1&1\end{bmatrix}$`, R`$v=11101$`],
      ker: [R`a) a kódszavak és $\hat u$`, R`b) $H$ (paritásellenőrző mátrix) és $s$`, R`c) jelezhető és javítható hibák száma`],
      lv: [S('a) Kódszavak', R`A négy üzenet: $00\to0$, $10\to$ 1. sor, $01\to$ 2. sor, $11\to$ a két sor XOR-ja.`, [
          ['számérték', R`00000,\quad10101,\quad01011,\quad10101\oplus01011=11110`, '']]),
        S('a) A legközelebbi kódszó', '', [
          ['számérték', R`d(v,00000)=4\quad d(v,10101)=1\quad d(v,01011)=3\quad d(v,11110)=2`, ''],
          ['számérték', R`\hat c=10101\ \Rightarrow\ \hat u=10`, '']]),
        S('b) H és a szindróma', R`$H=[B^T\,|\,I]$, $H^T$ sorai: 101, 011, 100, 010, 001. A $v$ egyesei az 1., 2., 3. és 5. helyen vannak.`, [
          ['definíció', R`H=\begin{bmatrix}1&0&1&0&0\\0&1&0&1&0\\1&1&0&0&1\end{bmatrix}`, ''],
          ['behelyettesítés', R`s=101\oplus011\oplus100\oplus001=011`, ''],
          ['ellenőrzés', R`011=H^T\ \text{2. sora}\ \Rightarrow\ \hat c=11101\oplus01000=10101`, 'egyezik az a) résszel']]),
        S('c) Hibajelzés és -javítás', R`A nem nulla kódszavak súlya 3, 3, 4, ezért $d_{\min}=3$.`, [
          ['tétel', R`d_{\min}-1=2\ \text{jelezhető}\qquad\left\lfloor\tfrac{d_{\min}-1}{2}\right\rfloor=1\ \text{javítható}`, '']])],
      ered: [R`\text{a) }\hat u=10\qquad\text{b) }s=011\qquad\text{c) 2 hibát jelez, 1-et javít biztosan}`], links: [src5(['5o_19_2'])] },

    { id: 'o6_05', num: '6.5', title: 'Szemcsék a tartályban: a legrövidebb kód', tags: ['vizsga', 'javitas', 'nehez'],
      src: R`5-ösöm 20. oldal · 5o_20_1`,
      task: R`<p>Hártyával két félre osztott tartályban kék és piros szemcsék mozognak véletlenszerűen. Óránként azt kell rögzíteni, melyik félben milyen színű szemcsék vannak (a számuk nem lényeges). a) Alsó korlát a legrövidebb átlagos kódszóhosszra? b) Szerkessze meg a kódot!</p>`,
      ad: [R`két szín, két fél, a szemcsék száma nem számít`, R`a valószínűségek nincsenek megadva: egyenlőnek vesszük őket`],
      ker: [R`a) $H$: az alsó korlát`, R`b) egy kód és $\bar L$`],
      miert: [[R`Miért 9 állapot és nem 16?`, R`Mindkét színből van szemcse, így egy szín a bal, a jobb vagy mindkét félben lehet: színenként 3 lehetőség, összesen $3\cdot3=9$. A „sehol sincs” eset kizárt, ezért nem $2^4=16$.`]],
      lv: [S('a) Alsó korlát', R`Kilenc egyenlő valószínűségű állapot entrópiája:`, [
          ['definíció', R`H=\log_29=3{,}17\ \text{bit}`, '']]),
        S('b) Huffman-kód', R`3 biten $2^3=8$ szó fér el, nekünk 9 kell. Ezért a 8 háromjegyű szó közül egyet kettébontunk két négyjegyűre: 7 szó 3 bites, 2 szó 4 bites. (Egyenlő valószínűségnél a Huffman-eljárás is ezt adja. Kraft: $7/8+2/16=1$.)`, [
          ['definíció', R`\bar L=\frac{7\cdot3+2\cdot4}{9}=\frac{29}{9}=3{,}22\ \text{bit}`, ''],
          ['ellenőrzés', R`3{,}17\le3{,}22<4`, R`több óra adatait együtt kódolva (blokk-kódolással) 3,17-hez tetszőlegesen közel juthatunk`]])],
      ered: [R`\text{a) }\bar L\ge\log_29=3{,}17\ \text{bit}\qquad\text{b) Huffman: 7 db 3 bites és 2 db 4 bites szó},\ \bar L=3{,}22\ \text{bit}`],
      gy: R`<p>A gyűjtemény szerint az alsó korlát 4 bit, és a nyers 4 bites állapotleírást adja kódnak.</p>`,
      fix: R`9 lehetséges állapot van, nem 16, ezért 4 bit nem az alsó korlát. Ha a valószínűségek nem egyenlők `+'`[ELLENŐRIZENDŐ]`'+R`, az entrópia kisebb: sok szemcsénél a „mindkét szín mindkét félben” állapot szinte biztos.`, links: [src5(['5o_20_1'])] },

    { id: 'o6_06', num: '6.6', title: 'Kraft: 2,2,3,3,3,4,4,4,4 és 2,2,3,3,3,5,5,5,5', tags: ['vizsga'],
      src: R`5-ösöm 20. oldal · 5o_20_2`,
      task: R`<p>a) Lehet-e egyértelműen megfejthető kódot készíteni a 2,2,3,3,3,4,4,4,4 hosszakkal? b) Prefixmentes kód a 2,2,3,3,3,5,5,5,5 hosszakkal.</p>`,
      ad: [R`$l_i$: a kódszavak hosszai`],
      ker: [R`a) létezik-e egyértelműen megfejthető kód`, R`b) egy prefixmentes kód`],
      lv: [S('a) Kraft-összeg', R`A McMillan-tétel szerint egyértelműen megfejthető kód csak akkor létezik, ha $\sum2^{-l_i}\le1$.`, [
          ['behelyettesítés', R`2\cdot\tfrac14+3\cdot\tfrac18+4\cdot\tfrac1{16}=0{,}5+0{,}375+0{,}25=1{,}125>1`, 'nem létezik']]),
        S('b) Kraft-összeg', '', [
          ['behelyettesítés', R`2\cdot\tfrac14+3\cdot\tfrac18+4\cdot\tfrac1{32}=0{,}5+0{,}375+0{,}125=1`, 'létezik, és a kódfa teljes']]),
        S('b) A kód megszerkesztése', R`Kanonikus módszer: a hosszak növekvő sorrendjében mindig az előző kódszó + 1-et vesszük, és ha nő a hossz, jobbról 0-kkal egészítjük ki.`, [
          ['számérték', R`00,\ 01\ \to\ 100,\ 101,\ 110\ \to\ 11100,\ 11101,\ 11110,\ 11111`, R`$01+1=10\to100$, $110+1=111\to11100$`]])],
      ered: [R`\text{a) nem (Kraft-összeg }1{,}125>1)\qquad\text{b) }00,\ 01,\ 100,\ 101,\ 110,\ 11100,\ 11101,\ 11110,\ 11111`], links: [src5(['5o_20_2'])] }
  ]
};
