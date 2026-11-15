'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f3', num: '3', short: 'PAM, ISI', title: 'Digitális alapsávi átvitel (PAM, ISI)',
  lead: R`Elemi jelből szemábra, ISI és a többszintű rendszer próbája, valamint az emelt koszinuszos spektrum leolvasása.`,
  alap: [
    { id: 'b3-jel', badge: 'A1', title: 'Jelölések és a minta képlete',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$d_k$</td><td>a $k$-adik szimbólum értéke (binárisnál $\pm1$, négyszintűnél $\pm1,\pm3$)</td></tr>
<tr><td>$h(t)$</td><td>elemi jel: egyetlen $d=1$ szimbólum hatására a vevőben megjelenő jel</td></tr>
<tr><td>$h_0$</td><td>az elemi jel értéke a saját mintavételi pillanatában</td></tr>
<tr><td>$h_1$</td><td>az elemi jel értéke egy jelzési idővel később (ez lóg át a következő szimbólumba)</td></tr>
<tr><td>$T$</td><td>jelzési idő</td></tr>
<tr><td>$H(f)$</td><td>az elemi jel spektruma</td></tr>
</tbody></table></div><p>A PAM-jel az eltolt elemi jelek összege, $x(t)=\sum_kd_kh(t-kT)$. Ha a $k$-adik mintát a saját elemi jele $h_0$-nál, az előző szimbólumé $h_1$-nél metszi, akkor</p>$$x_k=h_0d_k+h_1d_{k-1}$$<p>A második tag a <b>szimbólumközti áthallás (ISI)</b>. A döntés akkor hibátlan, ha a legrosszabb esetben is a jó oldalon marad a küszöbnek. $M$ szintnél a küszöbök a névleges szintek ($h_0d$) között félúton vannak.</p>` },
    { id: 'b3-nyq', badge: 'A2', title: 'Nyquist-feltétel, emelt koszinusz',
      html: R`<p>Az ISI akkor tűnik el, ha a spektrum $1/T$-nként eltolt másolatainak összege állandó. Az emelt koszinuszos spektrum ilyen: $f_1=(1-\alpha)/(2T)$-ig lapos, $f_2=(1+\alpha)/(2T)$-re nullára csökken, és a lecsengés a $1/(2T)$ pontra (ahol az érték a fele) pontszimmetrikus. Ebből $1/(2T)=(f_1+f_2)/2$ és $\alpha=(f_2-f_1)/(f_2+f_1)$.</p>` }
  ],
  ex: [
    { id: 'o3_01', num: '3.1', title: 'Elemi jel 1,15 és 0,25', tags: ['vizsga'],
      src: R`5-ösöm 10. oldal · 5o_10_1`,
      task: R`<p>Bináris PAM, $h=1{,}15$ a $[0,T]$-n, $0{,}25$ a $[T,2T]$-n. a) PAM jel a …0-1-1-0-0-1… sorra. b) Van-e ISI, ha $t_0=3T/4$? c) Négyszintű szemábra ($-3,-1,+1,+3$), alkalmas-e?</p>`,
      ad: [R`$h(t)=1{,}15$, ha $0<t<T$ és $0{,}25$, ha $T<t<2T$: az elemi jel két szakasza`, R`$d_k=\pm1$: 1-es bit $+1$, 0-s bit $-1$`, R`$t_0=3T/4$: a mintavétel helye a jelzési időn belül`],
      ker: [R`a) $x(t)$ szintjei a bitsorra`, R`b) van-e ISI, és okoz-e hibát`, R`c) nyitott-e a négyszintű szem`],
      lv: [S('A minták képlete', R`A $k$-adik időrésben ($kT$ és $(k+1)T$ között) a saját elemi jel első szakasza (1,15) és az előző szimbólum elemi jelének második szakasza (0,25) adódik össze. A $3T/4$-es mintavétel ebbe az időrésbe esik, így ez a minta is.`, [
          ['definíció', R`x_k=1{,}15\,d_k+0{,}25\,d_{k-1}`, R`$h_0=1{,}15$, $h_1=0{,}25$`]]),
        S('a) A PAM-jel a bitsorra', R`A bitsor $d=-1,+1,+1,-1,-1,+1$. Minden időrésre behelyettesítünk (az elsőhöz az előző bit nem ismert).`, [
          ['behelyettesítés', R`+1\text{ után }-1:\ 1{,}15-0{,}25=0{,}9\qquad+1\text{ után }+1:\ 1{,}15+0{,}25=1{,}4`, ''],
          ['behelyettesítés', R`-1\text{ után }+1:\ -1{,}15+0{,}25=-0{,}9\qquad-1\text{ után }-1:\ -1{,}4`, ''],
          ['számérték', R`x:\ -1{,}15\pm0{,}25,\ 0{,}9,\ 1{,}4,\ -0{,}9,\ -1{,}4,\ 0{,}9`, 'a hat időrés szintjei']]),
        S('b) ISI', R`A minta értéke függ az előző bittől (0,9 vagy 1,4), tehát <b>van ISI</b>. Hibát viszont nem okoz: a döntési küszöb 0, és a legkisebb abszolút érték is $0{,}9>0$. A szem nyitott, a nyílása $2\cdot0{,}9=1{,}8$.`, []),
        S('c) Négyszintű rendszer', R`Most $d_k\in\{-3,-1,1,3\}$, a névleges szintek $\pm1{,}15$ és $\pm3{,}45$, a küszöbök félúton: $0$ és $\pm2{,}3$. Az áthallás legfeljebb $0{,}25\cdot3=0{,}75$, mert $|d_{k-1}|\le3$.`, [
          ['behelyettesítés', R`d_k=1:\ 1{,}15-0{,}75=0{,}4>0\quad\text{és}\quad1{,}15+0{,}75=1{,}9<2{,}3`, 'a 0 és a 2,3 küszöb között marad'],
          ['behelyettesítés', R`d_k=3:\ 3{,}45-0{,}75=2{,}7>2{,}3`, 'a 2,3 felett marad'],
          ['ellenőrzés', R`0{,}4>0`, 'a legrosszabb eset is a jó oldalon: alkalmas']])],
      ered: [R`\text{a) szintek }\pm0{,}9\text{ és }\pm1{,}4\qquad\text{b) van ISI, de hibát nem okoz}\qquad\text{c) igen, alkalmas (legkisebb tartalék 0,4)}`],
      chk: [R`A kézírás „1,15 − 4·0,25 > 0”-t ír: a szorzó 3, mert a szomszéd szimbólum legfeljebb $\pm3$. A következtetés így is jó.`], links: [src5(['5o_10_1'])] },

    { id: 'o3_02', num: '3.2', title: R`$\cos^2$ spektrumú elemi jel (hivatalos válasszal)`, tags: ['vizsga'],
      src: R`5-ösöm 11. oldal · 5o_11_1`,
      task: R`<p>$H(f)=h_0T\cos^2(\tfrac\pi2fT)$, ha $|f|<1/T$. a) Rajz. b) Elkerülhető-e az ISI? c) A szélessávú zajra optimális vevőszűrő? d) Okoz-e ISI-t egy 1200 Hz-es aluláteresztő, ha $T=833$ µs?</p>`,
      ad: [R`$H(f)=h_0T\cos^2(\tfrac\pi2fT)$, ha $|f|<1/T$, máshol 0: az elemi jel spektruma`, R`$T=833$ µs: jelzési idő (d)`],
      ker: [R`a) a spektrum alakja`, R`b) teljesül-e a Nyquist-feltétel`, R`c) $H_V(f)$: az optimális vevőszűrő`, R`d) okoz-e ISI-t az 1200 Hz-es szűrő`],
      lv: [S('a) A spektrum alakja', R`A $\cos^2x=\tfrac12(1+\cos2x)$ azonossággal emelt koszinusz alakra hozzuk.`, [
          ['átalakítás', R`H(f)=\frac{h_0T}{2}\left(1+\cos\pi fT\right)`, ''],
          ['számérték', R`H(0)=h_0T\qquad H\!\left(\tfrac1{2T}\right)=\tfrac{h_0T}2\qquad H\!\left(\tfrac1T\right)=0`, R`0-tól $1/T$-ig cseng le: 100%-os emelt koszinusz, $\alpha=1$`]]),
        S('b) Nyquist-feltétel', R`Az ISI elkerülhető, ha a $1/T$-nként eltolt másolatok összege állandó. A $0\le f\le1/T$ tartományban két másolat fed át: $H(f)$ és $H(f-1/T)$.`, [
          ['átalakítás', R`\cos^2\!\left(\tfrac\pi2(f-\tfrac1T)T\right)=\cos^2\!\left(\tfrac\pi2fT-\tfrac\pi2\right)=\sin^2\!\left(\tfrac\pi2fT\right)`, ''],
          ['tétel', R`H(f)+H\!\left(f-\tfrac1T\right)=h_0T\left[\cos^2+\sin^2\right]=h_0T`, 'állandó: ISI-mentes']]),
        S('c) Optimális vevőszűrő', R`Fehér zajnál az optimális (illesztett) elrendezésben az adó- és a vevőszűrő egyformán osztozik a teljes $H(f)$-en, így a vevőszűrő $\sqrt{H}$-val arányos.`, [
          ['definíció', R`H_V(f)\propto\sqrt{H(f)}=\cos\left(\tfrac\pi2fT\right),\quad|f|<\tfrac1T`, 'koszinusz félhullám']]),
        S('d) Az 1200 Hz-es szűrő', R`A jel sávja $\alpha=1$ mellett $(1+\alpha)/(2T)=1/T$.`, [
          ['számérték', R`\frac1T=\frac{1}{833\ \mu\text{s}}=1200\ \text{Hz}`, ''],
          ['ellenőrzés', R`B_\text{jel}=1200\ \text{Hz}\le1200\ \text{Hz}`, 'a szűrő a jel egyetlen összetevőjét sem vágja le']])],
      ered: [R`\text{a) 100\%-os emelt koszinusz}\quad\text{b) igen, ISI-mentes}\quad\text{c) }H_V\propto\cos(\pi fT/2)\quad\text{d) nem okoz számottevő ISI-t}`],
      chk: [R`Hivatalos válasz b)-re: „Igen, mert eltolgatva és összegezve az eredmény frekvenciafüggetlen konstans.” c)-hez: a vevőszűrő arányossági tényezője érdektelen, mert a jelre és a zajra egyaránt hat.`], links: [src5(['5o_11_1'])] },

    { id: 'o3_03', num: '3.3', title: 'Emelt koszinusz 0,8 és 1,2 MHz között', tags: ['vizsga'],
      src: R`5-ösöm 11. oldal · 5o_11_2, 5o_11_3`,
      task: R`<p>Az elemi jel spektruma 0,8 MHz-ig 1, 1,2 MHz-re nullára csökken, 1 MHz-en 0,5. a) Milyen jelzési idő ad ISI-mentes rendszert? b) A spektrum neve? c) Négyszintű rendszernél mekkora a bitsebesség? d) Hány százalékos a lekerekítés?</p>`,
      ad: [R`$f_1=0{,}8$ MHz: eddig lapos a spektrum`, R`$f_2=1{,}2$ MHz: itt éri el a nullát`, R`$1$ MHz-en 0,5: a lecsengés felénél`],
      ker: [R`a) $T$: jelzési idő`, R`b) a spektrum neve`, R`c) $v$: bitsebesség négy szintnél`, R`d) $\alpha$: lekerekítés`],
      lv: [S('a) Jelzési idő', R`A lecsengés az 1 MHz-es pontra (ahol az érték 0,5) szimmetrikus. A Nyquist-feltétel szerint ez a pont $1/(2T)$ (A2): a $1/T$-vel eltolt másolat itt pont kiegészíti a fogyó részt.`, [
          ['tétel', R`\frac1{2T}=1\ \text{MHz}\ \Rightarrow\ T=\frac{1}{2\cdot10^6}=0{,}5\ \mu\text{s}`, R`$1/T=2$ MBd`]]),
        S('b) A spektrum neve', R`Lapos rész, majd a félértékpontra szimmetrikus lecsengés: emelt koszinuszos (raised cosine) spektrum.`, []),
        S('c) Bitsebesség', R`Négy szintnél egy szimbólum $\log_24=2$ bitet visz.`, [
          ['számérték', R`v=\frac1T\log_24=2\ \text{MBd}\cdot2=4\ \text{Mbit/s}`, '']]),
        S('d) Lekerekítés', R`A lecsengés a $1/(2T)$ pont körül $\pm\alpha/(2T)$ szélességű.`, [
          ['definíció', R`\frac{\alpha}{2T}=1{,}2-1=0{,}2\ \text{MHz}\ \Rightarrow\ \alpha=\frac{0{,}2}{1}=0{,}2`, ''],
          ['ellenőrzés', R`\alpha=\frac{f_2-f_1}{f_2+f_1}=\frac{0{,}4}{2}=0{,}2`, 'a két határból is']])],
      ered: [R`\text{a) }T=0{,}5\ \mu\text{s}\qquad\text{b) emelt koszinusz}\qquad\text{c) }4\ \text{Mbit/s}\qquad\text{d) }\alpha=20\%`], links: [src5(['5o_11_2', '5o_11_3'])] }
  ]
};
