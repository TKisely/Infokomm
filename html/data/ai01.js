'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f1', num: '1', short: 'Jelek', title: 'Jelek, teljesítmény, csúcstényező',
  lead: R`Rövid, de a vizsgán gyakori kérdések: mekkora egy összetett jel csúcsértéke, teljesítménye és csúcstényezője. A kulcs: azonos frekvenciájú összetevők egyetlen szinusszá adódnak össze, különböző frekvenciájúak nem.`,
  alap: [
    { id: 'a1-teljesitmeny', badge: 'A1', title: 'Teljesítmény és csúcstényező',
      html: R`<p>Egy periodikus jel átlagteljesítménye (1 Ω-on) $P=\overline{x^2}$, az effektív érték $\sqrt P$. A csúcstényező a csúcsérték és az effektív érték hányadosa:</p>$$C=\frac{\hat x}{\sqrt{P}}$$<p>Szinusz: $C=\sqrt2$, négyszög: $1$, háromszög: $\sqrt3$. Különböző frekvenciájú szinuszok teljesítményei <b>összeadódnak</b>: $P=\sum U_i^2/2$.</p>`,
      key: R`A teljesítmény mindig összeadható komponensenként (ortogonalitás), az amplitúdó csak azonos frekvenciánál.` },
    { id: 'a1-fazor', badge: 'A2', title: 'Azonos frekvenciájú összetevők összeadása',
      html: R`<p>$a\sin\omega t+b\cos\omega t=\sqrt{a^2+b^2}\,\sin(\omega t+\varphi)$, $\varphi=\mathrm{arctg}(b/a)$. Gondolj két egymásra merőleges nyílra: az eredő hossza Pitagorasz-tétellel jön ki. A csúcsérték ezért nem $a+b$, hanem $\sqrt{a^2+b^2}$.</p><p>Ha a frekvenciák aránya irracionális (pl. $\sqrt2$), a két szinusz előbb-utóbb tetszőlegesen közel kerül egyszerre a csúcsához, ezért a csúcsérték az amplitúdók <b>összege</b>.</p>`,
      key: R`Azonos frekvencia: $\hat x=\sqrt{a^2+b^2}$. Különböző (összemérhetetlen) frekvencia: $\hat x=a+b$.` }
  ],
  ex: [
    { id: 'ai1_01', num: '1.1', title: R`$3\sin+4\cos$: csúcsérték, teljesítmény, csúcstényező`, tags: ['beugro', 'javitas'],
      src: R`ALL-IN 90. oldal · aiD_1_1 (és 5-ösöm 2. oldal)`,
      task: R`<p>Határozza meg az $x(t)=3\sin(2\pi Ft)+4\cos(2\pi Ft)$ jel csúcstényezőjét, maximális értékét és teljesítményét!</p>`,
      miert: [[R`Miért nem $3+4=7$ a csúcs?`, R`Mert a szinusz és a koszinusz negyed periódussal el van tolva, soha nem érik el egyszerre a csúcsukat. Az eredő egyetlen szinusz (A2).`]],
      lv: [S('Egyetlen szinusszá alakítás', '', [['tétel', R`3\sin\omega t+4\cos\omega t=\sqrt{3^2+4^2}\,\sin(\omega t+\varphi)=5\sin(\omega t+\varphi)`, R`$\varphi=\mathrm{arctg}(4/3)$`]]),
        S('Teljesítmény és csúcstényező', '', [['definíció', R`P=\frac{3^2}{2}+\frac{4^2}{2}=12{,}5`, 'vagy 5²/2'], ['számérték', R`C=\frac{5}{\sqrt{12{,}5}}=\sqrt2`, '']])],
      ered: [R`\hat x=5\qquad P=12{,}5\ (\text{W, }1\,\Omega)\qquad C=\sqrt2`],
      gy: R`<p>A csúcstényezőt ($\sqrt2$) és a teljesítményt jól adja, a maximumot viszont ott keresi, ahol $\sin=\cos$, és $7/\sqrt2\approx4{,}95$-öt kap.</p>`,
      fix: R`A maximum nem a $\sin=\cos$ pontban van. Helyesen $\hat x=\sqrt{3^2+4^2}=5$.`,
      chk: [R`$5^2/2=12{,}5$, ugyanaz, mint a két tag teljesítményének összege.`],
      hib: [R`A két amplitúdó összeadása ($7$), vagy egy önkényesen választott időpontban vett érték.`],
      links: [srcAI(['aiD_1_1'])] },
    { id: 'ai1_02', num: '1.2', title: R`Két koszinusz, $f_1/f_2=\sqrt2$`, tags: ['beugro'],
      src: R`ALL-IN 90. oldal · aiD_1_2`,
      task: R`<p>Mekkora az $x(t)=2\cos(2\pi f_1t)+2\cos(2\pi f_2t)$ jel csúcstényezője, legnagyobb értéke és teljesítménye, ha $f_1/f_2=\sqrt2$?</p>`,
      miert: [[R`Miért $4$ a csúcs?`, R`Az irracionális frekvenciaarány miatt a két fázis „mindenféle” párosítást bejár, köztük tetszőlegesen közel kerülnek a $(0,0)$ fázispárhoz, ahol mindkettő $1$.`]],
      lv: [S('Csúcs és teljesítmény', '', [['közelítés', R`\hat x=2+2=4`, 'tetszőlegesen megközelíthető'], ['definíció', R`P=\frac{2^2}{2}+\frac{2^2}{2}=4`, 'különböző frekvenciák'], ['számérték', R`C=\frac{4}{\sqrt4}=2`, '']])],
      ered: [R`\hat x=4\qquad P=4\qquad C=2`],
      chk: [R`A gyűjtemény is $2$, $4$, $4$ értéket ad.`], links: [srcAI(['aiD_1_2'])] },
    { id: 'ai1_03', num: '1.3', title: R`$4\sin-3\cos$: négy állítás`, tags: ['beugro', 'javitas'],
      src: R`ALL-IN 91. oldal · aiD_1_3 (feleletválasztós 4.6.)`,
      task: R`<p>Az $s(t)=4\sin(2\pi f_0t)-3\cos(2\pi f_0t)$ jel: A) csúcsértéke 4. B) csúcstényezője $1/\sqrt2$. C) $t=42/f_0$-ban az értéke $-4$. D) átlagteljesítménye 3,5. Melyik igaz?</p>`,
      lv: [S('Mind a négy állítás ellenőrzése', '', [['tétel', R`\hat s=\sqrt{4^2+3^2}=5`, 'A hamis'], ['számérték', R`C=\frac{5}{5/\sqrt2}=\sqrt2`, 'B hamis'], ['behelyettesítés', R`s(42/f_0)=4\sin(84\pi)-3\cos(84\pi)=0-3=-3`, 'C hamis'], ['definíció', R`P=\frac{16}{2}+\frac{9}{2}=12{,}5`, 'D hamis']])],
      ered: [R`\text{egyik állítás sem igaz}`],
      fix: R`A gyűjtemény lapján A, B, C be van karikázva. Ha ez a „hamis” jelölése, a megoldás helyes, igaznak jelölve mindhárom rossz.`,
      links: [srcAI(['aiD_1_3'])] },
    { id: 'ai1_04', num: '1.4', title: R`$2\sin+2\cos$ csúcstényezője`, tags: ['beugro'],
      src: R`ALL-IN 91. oldal · aiD_1_5`,
      task: R`<p>Határozza meg az $x(t)=2\sin(2\pi ft)+2\cos(2\pi ft)$ jel csúcstényezőjét!</p>`,
      lv: [S('Egyetlen szinusz', 'Két azonos frekvenciájú szinuszos jel összege szinuszos.', [['tétel', R`x(t)=\sqrt{2^2+2^2}\cos\!\left(2\pi ft-\mathrm{arctg}\tfrac22\right)=2\sqrt2\cos(2\pi ft-\pi/4)`, ''], ['számérték', R`C=\sqrt2`, 'minden szinuszra']])],
      ered: [R`C=\sqrt2\qquad \hat x=2\sqrt2`], links: [srcAI(['aiD_1_5'])] }
  ]
};
