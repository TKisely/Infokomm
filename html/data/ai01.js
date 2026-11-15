'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f1', num: '1', short: 'Jelek', title: 'Jelek, teljesítmény, csúcstényező',
  lead: R`Rövid, de a vizsgán gyakori kérdések: mekkora egy összetett jel csúcsértéke, teljesítménye és csúcstényezője. A kulcs: azonos frekvenciájú összetevők egyetlen szinusszá adódnak össze, különböző frekvenciájúak nem.`,
  alap: [
    { id: 'a1-teljesitmeny', badge: 'A1', title: 'Jelölések: teljesítmény és csúcstényező',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$\hat x$</td><td>csúcsérték: a jel legnagyobb abszolút értéke</td></tr>
<tr><td>$P$</td><td>átlagteljesítmény 1 Ω-on: a jel négyzetének időátlaga, $P=\overline{x^2}$</td></tr>
<tr><td>$x_\text{eff}$</td><td>effektív érték, $x_\text{eff}=\sqrt P$</td></tr>
<tr><td>$C$</td><td>csúcstényező, $C=\hat x/x_\text{eff}$</td></tr>
</tbody></table></div><p>Egy $A$ amplitúdójú szinusz teljesítménye $A^2/2$, mert $\sin^2$ átlaga egy perióduson $1/2$. Ezért szinuszra $C=A/(A/\sqrt2)=\sqrt2$. Négyszögjelre $C=1$, háromszögjelre $\sqrt3$.</p><p>Különböző frekvenciájú szinuszok szorzatának átlaga 0, ezért a teljesítményük <b>összeadódik</b>: $P=\sum A_i^2/2$. Ugyanez igaz egy azonos frekvenciájú $\sin$ és $\cos$ párra is.</p>`,
      key: R`A teljesítmény mindig összeadható komponensenként, az amplitúdó csak akkor, ha a csúcsok egy időben jönnek.` },
    { id: 'a1-fazor', badge: 'A2', title: 'Azonos frekvenciájú összetevők összeadása',
      html: R`<p>Az addíciós tétellel $A\sin(\omega t+\varphi)=A\cos\varphi\sin\omega t+A\sin\varphi\cos\omega t$. Összevetve az $a\sin\omega t+b\cos\omega t$ alakkal: $A\cos\varphi=a$, $A\sin\varphi=b$, ezért</p>$$a\sin\omega t+b\cos\omega t=\sqrt{a^2+b^2}\,\sin(\omega t+\varphi),\qquad\mathrm{tg}\,\varphi=\frac ba$$<p>Gondolj két egymásra merőleges nyílra: az eredő hossza Pitagorasz-tétellel jön ki. A csúcsérték ezért nem $a+b$, hanem $\sqrt{a^2+b^2}$.</p><p>Ha a frekvenciák aránya irracionális (pl. $\sqrt2$), a két szinusz előbb-utóbb tetszőlegesen közel kerül egyszerre a csúcsához, ezért a csúcsérték az amplitúdók <b>összege</b>.</p>`,
      key: R`Azonos frekvencia: $\hat x=\sqrt{a^2+b^2}$. Különböző (összemérhetetlen) frekvencia: $\hat x=a+b$.` }
  ],
  ex: [
    { id: 'ai1_01', num: '1.1', title: R`$3\sin+4\cos$: csúcsérték, teljesítmény, csúcstényező`, tags: ['beugro', 'javitas'],
      src: R`ALL-IN 90. oldal · aiD_1_1 (és 5-ösöm 2. oldal)`,
      task: R`<p>Határozza meg az $x(t)=3\sin(2\pi Ft)+4\cos(2\pi Ft)$ jel csúcstényezőjét, maximális értékét és teljesítményét!</p>`,
      ad: [R`$x(t)$: két azonos, $F$ frekvenciájú tag, a szinuszos amplitúdója 3, a koszinuszosé 4`, R`$F$ értéke nem kell, az eredmény nem függ tőle`],
      ker: [R`$C$: csúcstényező`, R`$\hat x$: legnagyobb érték`, R`$P$: átlagteljesítmény (1 Ω-on)`],
      miert: [[R`Miért nem $3+4=7$ a csúcs?`, R`Mert a szinusz és a koszinusz negyed periódussal el van tolva, soha nem érik el egyszerre a csúcsukat. Az eredő egyetlen szinusz (A2).`]],
      lv: [S('Egyetlen szinusszá alakítás', R`A2 szerint $a=3$, $b=4$ ($\omega=2\pi F$).`, [
          ['tétel', R`A=\sqrt{a^2+b^2}=\sqrt{3^2+4^2}=\sqrt{25}=5`, ''],
          ['számérték', R`\mathrm{tg}\,\varphi=\tfrac43\ \Rightarrow\ \varphi=53{,}1°`, R`$x(t)=5\sin(\omega t+53{,}1°)$`]]),
        S('A maximális érték', R`A szinusz legnagyobb értéke 1, ezért a jelé az amplitúdó.`, [['számérték', R`\hat x=5`, '']]),
        S('A teljesítmény', R`A $\sin$ és a $\cos$ szorzatának átlaga 0, ezért a két tag teljesítménye összeadódik (A1). Ugyanez jön ki az összevont szinuszból is.`, [
          ['definíció', R`P=\frac{3^2}{2}+\frac{4^2}{2}=4{,}5+8=12{,}5\ \text{W}`, R`1 $\Omega$-on`],
          ['ellenőrzés', R`\frac{5^2}{2}=12{,}5`, 'egyezik']]),
        S('A csúcstényező', '', [
          ['definíció', R`x_\text{eff}=\sqrt{12{,}5}=3{,}54\qquad C=\frac{\hat x}{x_\text{eff}}=\frac{5}{3{,}54}=\sqrt2`, 'mint minden szinuszé']])],
      ered: [R`C=\sqrt2\qquad\hat x=5\qquad P=12{,}5\ \text{W (1 }\Omega\text{-on)}`],
      gy: R`<p>A csúcstényezőt ($\sqrt2$) és a teljesítményt jól adja, a maximumot viszont ott keresi, ahol $\sin=\cos$, és $7/\sqrt2\approx4{,}95$-öt kap.</p>`,
      fix: R`A maximum nem a $\sin=\cos$ (45°-os) pontban van, hanem $\varphi=53{,}1°$-nál. Helyesen $\hat x=5$.`,
      hib: [R`A két amplitúdó összeadása ($7$), vagy egy önkényesen választott időpontban vett érték.`],
      links: [srcAI(['aiD_1_1'])] },

    { id: 'ai1_02', num: '1.2', title: R`Két koszinusz, $f_1/f_2=\sqrt2$`, tags: ['beugro'],
      src: R`ALL-IN 90. oldal · aiD_1_2`,
      task: R`<p>Mekkora az $x(t)=2\cos(2\pi f_1t)+2\cos(2\pi f_2t)$ jel csúcstényezője, legnagyobb értéke és teljesítménye, ha $f_1/f_2=\sqrt2$?</p>`,
      ad: [R`két koszinusz, mindkettő 2 amplitúdójú`, R`$f_1/f_2=\sqrt2$: a frekvenciák aránya irracionális`],
      ker: [R`$C$, $\hat x$, $P$`],
      miert: [[R`Miért $4$ a csúcs?`, R`Az irracionális frekvenciaarány miatt a két fázis „mindenféle” párosítást bejár, köztük tetszőlegesen közel kerülnek a $(0,0)$ fázispárhoz, ahol mindkét koszinusz 1 (A2).`]],
      lv: [S('A legnagyobb érték', R`Egyik tag sem lehet 2-nél nagyobb, és a két csúcs tetszőlegesen közel kerül egymáshoz.`, [
          ['közelítés', R`\hat x=2+2=4`, 'tetszőlegesen megközelíthető']]),
        S('A teljesítmény', R`Különböző frekvenciák, a teljesítmények összeadódnak (A1).`, [
          ['definíció', R`P=\frac{2^2}{2}+\frac{2^2}{2}=2+2=4`, '']]),
        S('A csúcstényező', '', [
          ['definíció', R`C=\frac{\hat x}{\sqrt P}=\frac{4}{\sqrt4}=2`, '']])],
      ered: [R`\hat x=4\qquad P=4\ (\text{W, }1\,\Omega)\qquad C=2`],
      chk: [R`A gyűjtemény is 2, 4, 4 értéket ad. Ha a frekvenciák egyformák lennének, $x=4\cos$, $C=\sqrt2$ jönne ki: a különbség az összemérhetetlenségből adódik.`], links: [srcAI(['aiD_1_2'])] },

    { id: 'ai1_03', num: '1.3', title: R`$4\sin-3\cos$: négy állítás`, tags: ['beugro', 'javitas'],
      src: R`ALL-IN 91. oldal · aiD_1_3 (feleletválasztós 4.6.)`,
      task: R`<p>Az $s(t)=4\sin(2\pi f_0t)-3\cos(2\pi f_0t)$ jel: A) csúcsértéke 4. B) csúcstényezője $1/\sqrt2$. C) $t=42/f_0$-ban az értéke $-4$. D) átlagteljesítménye 3,5. Melyik igaz?</p>`,
      ad: [R`azonos frekvenciájú szinusz (4) és koszinusz ($-3$)`],
      ker: [R`melyik állítás igaz`],
      lv: [S('A) csúcsérték', R`A2 szerint $a=4$, $b=-3$.`, [['tétel', R`\hat s=\sqrt{4^2+(-3)^2}=5`, 'A hamis']]),
        S('B) csúcstényező', R`Az összeg egyetlen szinusz, ezért $C=\sqrt2$. Az $1/\sqrt2$ már csak azért is rossz, mert $C\ge1$ mindig.`, [['számérték', R`C=\frac{5}{5/\sqrt2}=\sqrt2`, 'B hamis']]),
        S('C) érték $t=42/f_0$-ban', R`Behelyettesítve az argumentum $2\pi\cdot42$, ez egész számú periódus.`, [['behelyettesítés', R`s=4\sin(84\pi)-3\cos(84\pi)=4\cdot0-3\cdot1=-3`, 'C hamis']]),
        S('D) átlagteljesítmény', '', [['definíció', R`P=\frac{4^2}{2}+\frac{3^2}{2}=8+4{,}5=12{,}5`, 'D hamis']])],
      ered: [R`\text{egyik állítás sem igaz}`],
      fix: R`A gyűjtemény lapján A, B, C be van karikázva. Ha ez a „hamis” jelölése, a megoldás helyes, igaznak jelölve mindhárom rossz.`,
      links: [srcAI(['aiD_1_3'])] },

    { id: 'ai1_04', num: '1.4', title: R`$2\sin+2\cos$ csúcstényezője`, tags: ['beugro'],
      src: R`ALL-IN 91. oldal · aiD_1_5`,
      task: R`<p>Határozza meg az $x(t)=2\sin(2\pi ft)+2\cos(2\pi ft)$ jel csúcstényezőjét!</p>`,
      ad: [R`azonos frekvenciájú szinusz és koszinusz, mindkettő 2 amplitúdójú`],
      ker: [R`$C$`],
      lv: [S('Egyetlen szinusz', R`A2 szerint $a=b=2$.`, [
          ['tétel', R`A=\sqrt{2^2+2^2}=2\sqrt2\qquad\mathrm{tg}\,\varphi=1\ \Rightarrow\ \varphi=45°`, R`$x=2\sqrt2\sin(2\pi ft+45°)$`]]),
        S('Csúcstényező', R`Szinuszos jel, $\hat x=2\sqrt2$, $P=(2\sqrt2)^2/2=4$.`, [
          ['definíció', R`C=\frac{2\sqrt2}{\sqrt4}=\sqrt2`, '']])],
      ered: [R`C=\sqrt2\qquad(\hat x=2\sqrt2,\ P=4)`], links: [srcAI(['aiD_1_5'])] }
  ]
};
