'use strict';
const { R, S, src5 } = require('./_h.js');
const HT = rows => R`H^T=\begin{bmatrix}` + rows.map(r => r.split('').join('&')).join(R`\\`) + R`\end{bmatrix}`;
module.exports = {
  id: 'f6', num: '6', short: 'Kódolás', title: 'Forráskódolás és hibavédő kódolás',
  lead: R`Paritásbitekből generátormátrix, szindróma és javítás. Huffman-kód és entrópia, Kraft-egyenlőtlenség, és egy szokatlan feladat az állapotok kódolásáról.`,
  alap: [
    { id: 'b6-kod', badge: 'A1', title: 'Recept',
      html: R`<p>$G=[I\,|\,B]$, $H^T=\begin{bmatrix}B\\I\end{bmatrix}$, $H=[B^T\,|\,I]$, $s=vH^T$ (a $v$ egyeseinél álló $H^T$-sorok XOR-ja). $d_{\min}$ = legkisebb nem nulla kódszósúly. Kraft: $\sum2^{-l_i}\le1$. Entrópia $H=\sum p_i\,\mathrm{ld}(1/p_i)\le\bar L$.</p>` }
  ],
  ex: [
    { id: 'o6_01', num: '6.1', title: 'Két kód paritásképletekből: C₁ és C₂', tags: ['vizsga'],
      src: R`5-ösöm 17…18. oldal · 5o_17_1`,
      task: R`<p>$C_1$: $u_1u_2u_3u_4\to u_1u_2u_3u_4p_1p_2p_3$, $p_1=u_1\oplus u_2\oplus u_4$, $p_2=u_1\oplus u_3\oplus u_4$, $p_3=u_2\oplus u_3\oplus u_4$. $C_2$: ugyanez és $p_4=p_1\oplus p_2\oplus p_3$. a) $C_1$ kódszavai. b) $C_1$ paritásellenőrző mátrixa, hány bites a szindróma? c) Mi lehetett az üzenet 0110000 vételekor, biztos? d) $C_2$ generátormátrixa?</p>`,
      lv: [S('$C_1$', '', [['definíció', HT(['110', '101', '011', '111', '100', '010', '001']), '3 bites szindróma'], ['számérték', R`s=101\oplus011=110`, R`$H^T$ 1. sora → $\hat c=1110000$`]]),
        S('$C_2$', '', [['átalakítás', R`p_4=p_1\oplus p_2\oplus p_3=u_4`, 'csak megismétli $u_4$-et'], ['definíció', R`G_2=[I\,|\,1100;\ 1010;\ 0110;\ 1111]`, R`$d_{\min}$ marad 3`]])],
      ered: [R`\hat u=1110\ \text{(ha legfeljebb 1 hiba)}\qquad d_{\min}(C_1)=d_{\min}(C_2)=3`],
      chk: [R`„Biztos?” Nem: csak egy bithiba esetén. $C_1$ a (7,4) Hamming-kód.`, R`A 10001100 súlya 3, ezért $C_2$ sem jobb.`], links: [src5(['5o_17_1'])] },
    { id: 'o6_02', num: '6.2', title: 'A, B, C forrás Huffman-kódja', tags: ['vizsga'],
      src: R`5-ösöm 18. oldal · 5o_18_1`,
      task: R`<p>20 000 szimbólum/s, valószínűségek 50%, 25%, 25%. Huffman-kód, várható bitsebesség, és mennyire közelíti a veszteségmentes kódolás alsó határát?</p>`,
      lv: [S('Megoldás', 'A → 0, B → 10, C → 11.', [['definíció', R`\bar L=0{,}5+0{,}25\cdot2+0{,}25\cdot2=1{,}5\ \text{bit}`, ''], ['számérték', R`1{,}5\cdot20\,000=30\,000\ \text{bit/s}\qquad H=1{,}5=\bar L`, 'eléri']])],
      ered: [R`30\,000\ \text{bit/s},\ \bar L=H`], links: [src5(['5o_18_1'])] },
    { id: 'o6_03', num: '6.3', title: 'Kétbites üzenetek: G, H alakban, szindróma', tags: ['vizsga'],
      src: R`5-ösöm 19. oldal · 5o_19_1`,
      task: R`<p>00 → 00000, 01 → 01110, 10 → 10101, 11 → 11011. a) Szisztematikus G, legvalószínűbb kódszó $v=01010$-ra. b) H és a szindróma.</p>`,
      lv: [S('Megoldás', '', [['definíció', R`G=\begin{bmatrix}1&0&1&0&1\\0&1&1&1&0\end{bmatrix}\qquad H=\begin{bmatrix}1&1&1&0&0\\0&1&0&1&0\\1&0&0&0&1\end{bmatrix}`, ''], ['számérték', R`S=Hv^T=[1\ 0\ 0]`, '01110 csak 1 bitben tér el']])],
      ered: [R`\hat c=01110\qquad S=100`], links: [src5(['5o_19_1'])] },
    { id: 'o6_04', num: '6.4', title: R`$G=[10101;\,01011]$`, tags: ['vizsga'],
      src: R`5-ösöm 19. oldal · 5o_19_2`,
      task: R`<p>a) Kódszavak, legvalószínűbb üzenet $v=11101$-re. b) H és a szindróma. c) Biztosan jelezhető és javítható hibák?</p>`,
      lv: [S('Megoldás', '', [['számérték', R`\{10101,\ 01011,\ 11110,\ 00000\}`, ''], ['számérték', R`s=101\oplus011\oplus100\oplus001=011`, R`$H^T$ 2. sora`]])],
      ered: [R`\hat u=10\qquad s=011\qquad d_{\min}=3:\ 2\ \text{jelez},\ 1\ \text{javít}`], links: [src5(['5o_19_2'])] },
    { id: 'o6_05', num: '6.5', title: 'Szemcsék a tartályban: a legrövidebb kód', tags: ['vizsga', 'javitas', 'nehez'],
      src: R`5-ösöm 20. oldal · 5o_20_1`,
      task: R`<p>Hártyával két félre osztott tartályban kék és piros szemcsék mozognak véletlenszerűen. Óránként azt kell rögzíteni, melyik félben milyen színű szemcsék vannak (a számuk nem lényeges). a) Alsó korlát a legrövidebb átlagos kódszóhosszra? b) Szerkessze meg a kódot!</p>`,
      miert: [[R`Miért 9 állapot és nem 16?`, R`Mindkét színből van szemcse, így egy szín a bal, a jobb vagy mindkét félben lehet: $3\cdot3=9$. A „sehol” eset kizárt.`]],
      lv: [S('Egyenlő valószínűséggel', '', [['definíció', R`H=\log_29=3{,}17\ \text{bit}`, 'alsó korlát'], ['számérték', R`\text{Huffman: }7\times3\ \text{bit},\ 2\times4\ \text{bit}\ \Rightarrow\ \bar L=\frac{29}9=3{,}22`, 'blokk-kódolással 3,17-ig']])],
      ered: [R`\bar L\ge3{,}17\ \text{bit},\ \text{Huffman: }3{,}22\ \text{bit}`],
      fix: R`A gyűjtemény szerint az alsó korlát 4 bit, és a nyers 4 bites állapotleírást adja kódnak. A valószínűségek nincsenek megadva `+'`[ELLENŐRIZENDŐ]`'+'. Sok szemcsénél a „mindkét szín mindkét félben” szinte biztos, és az entrópia sokkal kisebb.', links: [src5(['5o_20_1'])] },
    { id: 'o6_06', num: '6.6', title: 'Kraft: 2,2,3,3,3,4,4,4,4 és 2,2,3,3,3,5,5,5,5', tags: ['vizsga'],
      src: R`5-ösöm 20. oldal · 5o_20_2`,
      task: R`<p>a) Lehet-e egyértelműen megfejthető kódot készíteni a 2,2,3,3,3,4,4,4,4 hosszakkal? b) Prefixmentes kód a 2,2,3,3,3,5,5,5,5 hosszakkal.</p>`,
      lv: [S('Megoldás', '', [['tétel', R`\tfrac{18}{16}>1`, 'a) nem'], ['tétel', R`\tfrac12+\tfrac38+\tfrac4{32}=1`, 'b) 00, 11, 010, 011, 100, 10100, 10101, 10110, 10111']])],
      ered: [R`\text{a) nem}\qquad\text{b) lehet}`], links: [src5(['5o_20_2'])] }
  ]
};
