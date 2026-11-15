'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f1', num: '1', short: 'AM, FM', title: 'Analóg moduláció (AM, FM, szögmoduláció)',
  lead: R`A gyűjtemény első fejezete: csúcstényező, FM-jel képletből és oszcilloszkópról, AM-jel rajza és spektruma. Minden példa elején ott van, mit jelentenek a jelek, és minden szám mellett, honnan jön.`,
  alap: [
    { id: 'b1-jel', badge: 'A1', title: 'Jelölések ebben a fejezetben',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th><th>Egység</th></tr></thead><tbody>
<tr><td>$f_v$</td><td>vivőfrekvencia: a modulálatlan vivő frekvenciája</td><td>Hz</td></tr>
<tr><td>$f_m$</td><td>a moduláló (az átvinni kívánt) jel frekvenciája</td><td>Hz</td></tr>
<tr><td>$U_v$</td><td>a vivő amplitúdója (AM-nél a burkoló középértéke)</td><td>V</td></tr>
<tr><td>$U_m$</td><td>a burkoló kilengése a középérték körül (AM)</td><td>V</td></tr>
<tr><td>$m$</td><td>modulációs mélység, $m=U_m/U_v$</td><td>1 vagy %</td></tr>
<tr><td>$\mu(t)$</td><td>modulációs tartalom szögmodulációnál: ennyivel tér el a jel fázisa a vivőétől</td><td>rad</td></tr>
<tr><td>$\Phi_D$</td><td>fázislöket: $\mu(t)$ legnagyobb abszolút értéke</td><td>rad</td></tr>
<tr><td>$f_D$</td><td>frekvencialöket: a pillanatnyi frekvencia legnagyobb eltérése $f_v$-től</td><td>Hz</td></tr>
<tr><td>$B_v$</td><td>a modulált jel sávszélessége</td><td>Hz</td></tr>
<tr><td>$C$</td><td>csúcstényező: csúcsérték osztva az effektív értékkel</td><td>1</td></tr>
<tr><td>$P$</td><td>átlagteljesítmény, ha nincs más megadva, 1 Ω-on: $P=U_\text{eff}^2$</td><td>W</td></tr>
</tbody></table></div>`,
      key: R`Ha a feladat az időt ms-ban adja, a $t$ együtthatója rad/ms. Osztva $2\pi$-vel a frekvenciát kHz-ben kapjuk, mert $1/\text{ms}=1\ \text{kHz}$.` },
    { id: 'b1-am', badge: 'A2', title: 'AM-DSB: képlet, spektrum, teljesítmény',
      html: R`$$s(t)=\left[U_v+U_m\cos(2\pi f_mt)\right]\cos(2\pi f_vt)$$<p>A szögletes zárójel a <b>burkoló</b>: $U_v-U_m$ és $U_v+U_m$ között ingadozik. A jel csúcsértéke ezért $U_v+U_m=U_v(1+m)$.</p><p>A spektrum a $\cos a\cos b=\tfrac12\left[\cos(a-b)+\cos(a+b)\right]$ azonosságból jön:</p>$$s(t)=U_v\cos2\pi f_vt+\frac{U_m}{2}\cos2\pi(f_v-f_m)t+\frac{U_m}{2}\cos2\pi(f_v+f_m)t$$<p>Három vonal: a vivő $U_v$ amplitúdóval, és a két oldalsáv egyenként $U_m/2$-vel. Egy $A$ amplitúdójú szinusz teljesítménye 1 Ω-on $A^2/2$ (mert $\sin^2$ átlaga $1/2$), a különböző frekvenciájú vonalak teljesítménye összeadódik.</p><p>Burkolódemodulátor (dióda, utána párhuzamos RC) akkor használható, ha $m\le1$, azaz a burkoló nem megy nulla alá. Az RC-taggal szemben két feltétel van: a kondenzátor tartsa a feszültséget két vivőcsúcs között ($RC\gg1/f_v$), de kövesse a burkoló változását ($RC\ll1/f_m$).</p>` },
    { id: 'b1-fm', badge: 'A3', title: 'Szögmoduláció: PM és FM',
      html: R`$$s(t)=U\cos\left(2\pi f_vt+\mu(t)\right)$$<p>Az amplitúdó állandó, a fázis változik. <b>PM</b>-nél maga $\mu(t)$ arányos a moduláló jellel, <b>FM</b>-nél a deriváltja, $\mu'(t)$. A pillanatnyi frekvencia $f(t)=f_v+\tfrac1{2\pi}\mu'(t)$, ezért</p>$$\Phi_D=\max|\mu(t)|\qquad f_D=\frac1{2\pi}\max|\mu'(t)|$$<p>Szinuszos modulációnál $\mu(t)=\Phi_D\sin(2\pi f_mt)$, a deriváltja $2\pi f_m\Phi_D\cos(2\pi f_mt)$, így $f_D=\Phi_Df_m$. A sávszélességet a <b>Carson-szabály</b> becsüli (ebben van a teljesítmény kb. 98%-a):</p>$$B_v\approx2(f_D+f_m)$$<p>A szögmodulált jel teljesítménye $U^2/2$, a modulációtól független, a csúcstényezője $\sqrt2$, mint bármely állandó amplitúdójú szinuszé.</p>`,
      key: R`Hogyan döntsük el, FM vagy PM? Ha a moduláló jel $\cos$, és a fázisban $\sin$ áll ugyanazzal az argumentummal, akkor a fázis <b>deriváltja</b> arányos a moduláló jellel: FM. Ha a fázisban is $\cos$ áll: PM.` }
  ],
  ex: [
    { id: 'o1_01', num: '1.1', title: R`$3\sin+4\cos$ csúcstényezője, maximuma, teljesítménye`, tags: ['beugro', 'javitas'],
      src: R`5-ösöm 2. oldal · 5o_02_1`,
      task: R`<p>Határozza meg az $x(t)=3\sin(2\pi Ft)+4\cos(2\pi Ft)$ jel csúcstényezőjét, maximális értékét és teljesítményét!</p>`,
      ad: [R`$x(t)$: két azonos, $F$ frekvenciájú tag összege, a szinuszos tag amplitúdója 3, a koszinuszosé 4 (a feladatból)`, R`$F$ értéke nem kell: az eredmény nem függ tőle`],
      ker: [R`$C$: csúcstényező, $\hat x/x_\text{eff}$`, R`$\hat x$: a jel legnagyobb értéke`, R`$P$: átlagteljesítmény (1 Ω-on, $P=x_\text{eff}^2$)`],
      miert: [[R`Miért lehet egyetlen szinusszá összevonni?`, R`Két azonos frekvenciájú szinuszos jel összege mindig ugyanolyan frekvenciájú szinusz, csak más amplitúdóval és fázissal. Ebből a csúcsérték közvetlenül leolvasható.`]],
      lv: [S('Összevonás egyetlen szinusszá', R`Keressük $A\sin(\omega t+\varphi)$ alakban, $\omega=2\pi F$. Az addíciós tétellel kifejtjük, és a $\sin\omega t$, illetve $\cos\omega t$ együtthatóit egyeztetjük a feladatbeli 3-mal és 4-gyel.`, [
          ['tétel', R`A\sin(\omega t+\varphi)=A\cos\varphi\,\sin\omega t+A\sin\varphi\,\cos\omega t`, 'addíciós tétel'],
          ['átalakítás', R`A\cos\varphi=3\qquad A\sin\varphi=4`, R`a feladat együtthatóival egyeztetve`],
          ['átalakítás', R`A^2(\cos^2\varphi+\sin^2\varphi)=3^2+4^2\ \Rightarrow\ A=\sqrt{25}=5`, R`a két egyenletet négyzetre emelve és összeadva`],
          ['számérték', R`\mathrm{tg}\,\varphi=\tfrac43\ \Rightarrow\ \varphi=53{,}1°`, 'a fázis az eredményhez nem kell']]),
        S('b) A maximális érték', R`$5\sin(\omega t+\varphi)$ legnagyobb értéke ott van, ahol a szinusz 1.`, [['számérték', R`\hat x=5\cdot1=5`, '']]),
        S('c) A teljesítmény', R`Egy $A$ amplitúdójú szinusz négyzetének átlaga $A^2/2$, mert $\sin^2$ átlaga egy perióduson $1/2$.`, [
          ['definíció', R`P=\overline{x^2}=\frac{A^2}{2}=\frac{5^2}{2}=12{,}5\ \text{W}`, R`1 $\Omega$-on, $A=5$ az első lépésből`],
          ['ellenőrzés', R`\frac{3^2}{2}+\frac{4^2}{2}=4{,}5+8=12{,}5`, R`a $\sin$ és a $\cos$ szorzatának átlaga 0, ezért a két tag teljesítménye összeadódik`]]),
        S('a) A csúcstényező', R`Az effektív érték a teljesítmény gyöke, a csúcstényező a csúcsérték és az effektív érték hányadosa.`, [
          ['definíció', R`x_\text{eff}=\sqrt{P}=\sqrt{12{,}5}=3{,}54`, R`$P$ a c) részből`],
          ['számérték', R`C=\frac{\hat x}{x_\text{eff}}=\frac{5}{3{,}54}=1{,}414=\sqrt2`, R`$\hat x$ a b) részből`]])],
      ered: [R`\text{a) }C=\sqrt2\qquad\text{b) }\hat x=5\qquad\text{c) }P=12{,}5\ \text{W (1 }\Omega\text{-on)}`],
      chk: [R`Bármely szinuszos jel csúcstényezője $\sqrt2$, az amplitúdótól függetlenül. Mivel az összeg is szinusz, $C=\sqrt2$ számolás nélkül is várható volt.`],
      hib: [R`A maximumot ott keresni, ahol $\sin=\cos$ (45°-nál): ott $3/\sqrt2+4/\sqrt2=4{,}95$, ez kisebb 5-nél. A maximum $\varphi=53{,}1°$-nál van.`], links: [src5(['5o_02_1'])] },

    { id: 'o1_02', num: '1.2', title: 'FM-jel képletből: 500 kHz, 5 rad', tags: ['vizsga'],
      src: R`5-ösöm 2. oldal · 5o_02_2`,
      task: R`<p>$s_m(t)=3\cos(3\pi t+2)$ bemenetre $s_\mathrm{FM}(t)=5\cos(1000\pi t+9+5\sin(3\pi t+2))$, $t$ ms-ban. a) Vivőfrekvencia és fázislöket? b) Demodulátor blokkvázlata?</p>`,
      ad: [R`$s_m(t)=3\cos(3\pi t+2)$ V: a moduláló jel`, R`$s_\mathrm{FM}(t)=5\cos(1000\pi t+9+5\sin(3\pi t+2))$ V: a modulált jel`, R`$t$ ms-ban: a $t$ együtthatói rad/ms-ban értendők`],
      ker: [R`a) $f_v$: vivőfrekvencia, és $\Phi_D$: fázislöket (a fázis legnagyobb eltérése a vivőétől, rad)`, R`b) a demodulátor felépítése`],
      lv: [S('A képlet összevetése az általános alakkal', R`Az általános alak $U\cos(2\pi f_vt+\varphi_0+\mu(t))$. A koszinusz argumentumában három rész van: a $t$-vel arányos tag a vivőé, az állandó (9 rad) csak egy kezdőfázis, a $t$-től függő maradék a modulációs tartalom.`, [
          ['definíció', R`U=5\ \text{V}\qquad\varphi_0=9\ \text{rad}\qquad\mu(t)=5\sin(3\pi t+2)`, R`leolvasva $s_\mathrm{FM}$-ből`]]),
        S('a) A vivőfrekvencia', R`A vivő tagja $2\pi f_vt$. Ezt egyeztetjük $1000\pi t$-vel. Mivel $t$ ms-ban van, a kapott frekvencia kHz-ben értendő.`, [
          ['átalakítás', R`2\pi f_vt=1000\pi t\ \Rightarrow\ f_v=\frac{1000\pi}{2\pi}=500\ \tfrac1{\text{ms}}=500\ \text{kHz}`, R`$1/\text{ms}=1$ kHz`]]),
        S('a) A fázislöket', R`A fázislöket $\mu(t)$ legnagyobb abszolút értéke. A szinusz legnagyobb értéke 1.`, [
          ['definíció', R`\Phi_D=\max|5\sin(3\pi t+2)|=5\ \text{rad}`, '']]),
        S('Kiegészítés: FM-e, és mekkora a frekvencialöket?', R`A moduláló jel frekvenciája a $3\pi t$ tagból jön. A fázis deriváltja koszinusz, ugyanazzal az argumentummal, mint $s_m(t)$, tehát a derivált arányos a moduláló jellel: ez FM.`, [
          ['átalakítás', R`2\pi f_m=3\pi\ \Rightarrow\ f_m=1{,}5\ \text{kHz}`, R`a $3\pi t$ tagból, szintén kHz`],
          ['deriválás', R`\mu'(t)=5\cdot3\pi\cos(3\pi t+2)=5\pi\,s_m(t)`, R`arányos $s_m(t)$-vel: FM`],
          ['számérték', R`f_D=\frac{\max|\mu'|}{2\pi}=\frac{15\pi}{2\pi}=7{,}5\ \text{kHz}=\Phi_Df_m`, ''],
          ['tétel', R`B_v\approx2(f_D+f_m)=2(7{,}5+1{,}5)=18\ \text{kHz}`, 'Carson-szabály']]),
        S('b) A demodulátor', R`Számláló típusú FM-demodulátor: <b>nullátmenet-detektor</b> (minden nullátmenetnél jelez) → <b>impulzusgenerátor</b> (minden jelzésre egy azonos alakú impulzust ad) → <b>aluláteresztő szűrő</b> (átlagol). Minél nagyobb a pillanatnyi frekvencia, annál sűrűbbek a nullátmenetek, annál nagyobb az átlag: a kimenet arányos $f(t)-f_v$-vel, azaz a moduláló jellel.`, [])],
      ered: [R`\text{a) }f_v=500\ \text{kHz},\ \Phi_D=5\ \text{rad}\quad(f_D=7{,}5\ \text{kHz},\ B_v\approx18\ \text{kHz})\qquad\text{b) számláló típusú demodulátor}`],
      hib: [R`A 9 rad-os állandót löketnek venni: az csak kezdőfázis, nem változik az idővel.`, R`Elfelejteni, hogy $t$ ms-ban van: $1000\pi/(2\pi)=500$ ekkor kHz, nem Hz.`], links: [src5(['5o_02_2'])] },

    { id: 'o1_03', num: '1.3', title: 'Milyen moduláció? 250 kHz, 18 kHz-es sáv', tags: ['vizsga'],
      src: R`5-ösöm 3. oldal · 5o_03_1 (gépelt megoldás)`,
      task: R`<p>$s_m(t)=3\cos(3\pi t+2)$ V bemenetre $s(t)=4\cos(500\pi t+21+5\sin(3\pi t+2))$ V ($t$ ms-ban). a) Moduláció fajtája? b) Amplitúdók? c) Fázis- és frekvencialöket? d) Vivő és sávszélesség?</p>`,
      ad: [R`$s_m(t)=3\cos(3\pi t+2)$ V: moduláló jel`, R`$s(t)=4\cos(500\pi t+21+5\sin(3\pi t+2))$ V: modulált jel, $t$ ms-ban`],
      ker: [R`a) FM vagy PM`, R`b) a moduláló és a modulált jel amplitúdója`, R`c) $\Phi_D$ (fázislöket, rad) és $f_D$ (frekvencialöket, kHz)`, R`d) $f_v$ (vivőfrekvencia) és $B_v$ (sávszélesség)`],
      miert: [[R`Miért FM és nem PM?`, R`A moduláló jel koszinusz, a modulációs tartalom szinusz ugyanazzal az argumentummal: a tartalom <b>deriváltja</b> (koszinusz) arányos a moduláló jellel. PM-nél maga a tartalom lenne koszinusz.`]],
      lv: [S('a) A moduláció fajtája', R`A koszinusz argumentumának $t$-től függő, nem lineáris része a modulációs tartalom.`, [
          ['definíció', R`\mu(t)=5\sin(3\pi t+2)`, R`leolvasva $s(t)$-ből, a 21 rad csak kezdőfázis`],
          ['deriválás', R`\mu'(t)=15\pi\cos(3\pi t+2)=5\pi\cdot s_m(t)`, R`arányos $s_m$-mel: <b>FM</b>`]]),
        S('b) Amplitúdók', R`A koszinuszok előtti szorzók.`, [['számérték', R`\hat s_m=3\ \text{V}\qquad\hat s=4\ \text{V}`, 'a feladat képleteiből']]),
        S('c) Löketek', R`A moduláló frekvencia a $3\pi t$ tagból: $2\pi f_m=3\pi$, $t$ ms-ban, tehát kHz.`, [
          ['átalakítás', R`f_m=\frac{3\pi}{2\pi}=1{,}5\ \text{kHz}`, ''],
          ['definíció', R`\Phi_D=\max|\mu|=5\ \text{rad}`, 'a szinusz legnagyobb értéke 1'],
          ['definíció', R`f_D=\frac{\max|\mu'|}{2\pi}=\frac{5\cdot3\pi}{2\pi}=7{,}5\ \text{kHz}`, R`ugyanez $\Phi_Df_m=5\cdot1{,}5$`]]),
        S('d) Vivő és sávszélesség', R`A vivő tagja $500\pi t$. A sávszélességet a Carson-szabály adja, mert szinuszos modulációjú FM-jelről van szó.`, [
          ['átalakítás', R`2\pi f_v=500\pi\ \Rightarrow\ f_v=250\ \text{kHz}`, ''],
          ['tétel', R`B_v\approx2(f_D+f_m)=2(7{,}5+1{,}5)=18\ \text{kHz}`, R`$f_D$ és $f_m$ a c) részből`]])],
      ered: [R`\text{a) FM}\quad\text{b) 3 V és 4 V}\quad\text{c) }\Phi_D=5\ \text{rad},\ f_D=7{,}5\ \text{kHz}\quad\text{d) }f_v=250\ \text{kHz},\ B_v\approx18\ \text{kHz}`], links: [src5(['5o_03_1'])] },

    { id: 'o1_04', num: '1.4', title: 'AM-DSB: 60 kHz, 20%, 1,8 V csúcs', tags: ['vizsga'],
      src: R`5-ösöm 3. oldal · 5o_03_2`,
      task: R`<p>60 kHz-es vivő, 10 kHz-es szinusz, $m=20\%$, csúcsérték 1,8 V. a) Rajz (200 µs). b) Időfüggvény, komponensek, a moduláló jel amplitúdója. c) Demodulátor és specifikációja.</p>`,
      ad: [R`$f_v=60$ kHz: vivőfrekvencia`, R`$f_m=10$ kHz: a moduláló szinusz frekvenciája`, R`$m=0{,}2$: modulációs mélység`, R`$\hat s=1{,}8$ V: a modulált jel csúcsértéke`],
      ker: [R`a) a jel rajza 200 µs hosszan`, R`b) $s(t)$, a spektrumvonalak, $U_m$ (a burkoló kilengése)`, R`c) a demodulátor és az $RC$ időállandó`],
      lv: [S('A modell', R`AM-DSB szinuszos modulációval (A2). A burkoló legnagyobb értéke $U_v+U_m=U_v(1+m)$, és a jel csúcsértéke ezzel egyezik, mert a vivő ott is eléri az 1-et.`, [
          ['definíció', R`s(t)=\left[U_v+U_m\cos(2\pi f_mt)\right]\cos(2\pi f_vt),\qquad U_m=mU_v`, '']]),
        S('b) Amplitúdók', R`A csúcsértékből és $m$-ből kifejezzük $U_v$-t, abból $U_m$-et.`, [
          ['behelyettesítés', R`U_v(1+0{,}2)=1{,}8\ \Rightarrow\ U_v=\frac{1{,}8}{1{,}2}=1{,}5\ \text{V}`, R`$\hat s=1{,}8$ V és $m=0{,}2$ a feladatból`],
          ['számérték', R`U_m=mU_v=0{,}2\cdot1{,}5=0{,}3\ \text{V}`, 'a moduláló jel amplitúdója a burkolón']]),
        S('b) Időfüggvény', R`A frekvenciák kHz-ben vannak, ezért az időt ms-ban írjuk, így a szorzat egység nélküli.`, [
          ['behelyettesítés', R`s(t)=\left[1{,}5+0{,}3\cos(2\pi\cdot10\,t)\right]\cos(2\pi\cdot60\,t)\ \text{V},\quad[t]=\text{ms}`, '']]),
        S('b) Spektrum', R`A $\cos a\cos b=\tfrac12[\cos(a-b)+\cos(a+b)]$ azonosság a $0{,}3\cos\cdot\cos$ szorzatból két oldalsávot csinál, mindegyik $U_m/2$ amplitúdóval.`, [
          ['tétel', R`0{,}3\cos(2\pi\cdot10t)\cos(2\pi\cdot60t)=0{,}15\cos(2\pi\cdot50t)+0{,}15\cos(2\pi\cdot70t)`, ''],
          ['számérték', R`60\ \text{kHz: }1{,}5\ \text{V}\qquad50\ \text{és}\ 70\ \text{kHz: }0{,}15\ \text{V}`, R`$f_v$ és $f_v\pm f_m$`]]),
        S('a) A rajz', R`200 µs-ba ennyi periódus fér. A burkoló $U_v-U_m=1{,}2$ V és $U_v+U_m=1{,}8$ V között ingadozik, a jel a burkoló és a tükörképe között rezeg.`, [
          ['számérték', R`T_m=\frac1{10\ \text{kHz}}=100\ \mu\text{s}\ \Rightarrow\ 2\ \text{moduláló periódus}`, ''],
          ['számérték', R`T_v=\frac1{60\ \text{kHz}}=16{,}7\ \mu\text{s}\ \Rightarrow\ \frac{200}{16{,}7}=12\ \text{vivőperiódus}`, '']]),
        S('c) Demodulátor', R`Mivel $m=0{,}2\le1$, a burkoló sosem megy nulla alá, ezért burkolódemodulátor (dióda + párhuzamos RC) használható. Az RC két vivőcsúcs között tartsa a feszültséget, de a burkolót kövesse.`, [
          ['közelítés', R`T_v=16{,}7\ \mu\text{s}\ \ll\ RC\ \ll\ T_m=100\ \mu\text{s}`, R`$T_v$ és $T_m$ az előző lépésből`],
          ['számérték', R`RC\approx\sqrt{16{,}7\cdot100}\ \mu\text{s}\approx40\ \mu\text{s}`, 'a két határ mértani közepe jó választás']])],
      ered: [R`\text{b) }s(t)=\left[1{,}5+0{,}3\cos(2\pi\cdot10t)\right]\cos(2\pi\cdot60t)\ \text{V},\ U_m=0{,}3\ \text{V},\ 60\ \text{kHz }1{,}5\ \text{V},\ 50\text{ és }70\ \text{kHz }0{,}15\ \text{V}`, R`\text{c) burkolódemodulátor},\ 16{,}7\ \mu\text{s}\ll RC\ll100\ \mu\text{s},\ \text{pl. }40\ \mu\text{s}`],
      chk: [R`A gyűjtemény kézi rajzán 200 µs alatt kevesebb vivőperiódus látszik, helyesen 12.`], links: [src5(['5o_03_2'])] },

    { id: 'o1_05', num: '1.5', title: 'AM-DSB: 80 kHz, 25%, 2,5 V csúcs', tags: ['vizsga'],
      src: R`5-ösöm 8. oldal · 5o_08_3`,
      task: R`<p>80 kHz-es vivő, 20 kHz-es szinusz, csúcsérték 2,5 V, $m=25\%$. a) Rajz (50 µs). b) Időfüggvény, időegység, komponensek.</p>`,
      ad: [R`$f_v=80$ kHz, $f_m=20$ kHz`, R`$\hat s=2{,}5$ V: a modulált jel csúcsértéke`, R`$m=0{,}25$: modulációs mélység`],
      ker: [R`a) rajz 50 µs hosszan`, R`b) $s(t)$, az idő egysége, a spektrumvonalak`],
      lv: [S('Amplitúdók', R`Ugyanaz a gondolatmenet, mint az 1.4-ben: a csúcsérték $U_v(1+m)$.`, [
          ['behelyettesítés', R`U_v(1+0{,}25)=2{,}5\ \Rightarrow\ U_v=\frac{2{,}5}{1{,}25}=2\ \text{V}`, ''],
          ['számérték', R`U_m=mU_v=0{,}25\cdot2=0{,}5\ \text{V}`, '']]),
        S('b) Időfüggvény és időegység', R`A frekvenciák kHz-ben vannak, ezért $t$ ms-ban: így $2\pi\cdot80\,t$ radiánban jön ki.`, [
          ['behelyettesítés', R`s(t)=\left[2+0{,}5\sin(2\pi\cdot20\,t)\right]\cos(2\pi\cdot80\,t)\ \text{V},\quad[t]=\text{ms}`, R`a moduláló szinusz fázisa szabadon választható`]]),
        S('b) Komponensek', R`Az oldalsávok $f_v\pm f_m$-en vannak, $U_m/2$ amplitúdóval (A2).`, [
          ['számérték', R`80\ \text{kHz: }2\ \text{V}\qquad60\ \text{és}\ 100\ \text{kHz: }\frac{0{,}5}2=0{,}25\ \text{V}`, '']]),
        S('a) A rajz', R`A burkoló $2-0{,}5=1{,}5$ V és $2+0{,}5=2{,}5$ V között ingadozik.`, [
          ['számérték', R`T_m=\frac1{20\ \text{kHz}}=50\ \mu\text{s}\qquad T_v=\frac1{80\ \text{kHz}}=12{,}5\ \mu\text{s}`, R`50 µs alatt 1 moduláló és 4 vivőperiódus`]])],
      ered: [R`\text{b) }s(t)=\left[2+0{,}5\sin(2\pi\cdot20t)\right]\cos(2\pi\cdot80t)\ \text{V},\ t\ \text{ms-ban}\qquad80\ \text{kHz }2\ \text{V},\ 60\text{ és }100\ \text{kHz }0{,}25\ \text{V}`], links: [src5(['5o_08_3'])] },

    { id: 'o1_06', num: '1.6', title: 'Az oszcilloszkópos FM-jel: a löket becslése', tags: ['vizsga', 'javitas', 'nehez'],
      src: R`5-ösöm 4…5. oldal · 5o_04_1`,
      task: R`<p>Agilent-képernyő: állandó amplitúdójú, változó sűrűségű jel (Freq = 50 kHz, Pk-Pk = 14,8 V), felette 2,5 kHz-es moduláló szinusz, 100 µs/osztás. a) Miért nem AM-DSB? b) Miért nem AM-SSB/SC? c) Tételezzük fel, hogy FM: mekkora a löket? d) Demodulátor? e) Sávszélesség? f) Csúcstényező?</p>`,
      ad: [R`Freq = 50 kHz: a műszer által mért (átlagos) frekvencia, ez a vivőfrekvencia, $f_v=50$ kHz`, R`Pk-Pk = 14,8 V: csúcstól csúcsig, ezért az amplitúdó $U=7{,}4$ V`, R`$f_m=2{,}5$ kHz: a moduláló szinusz, periódusa $T_m=400$ µs, ez 4 osztás`, R`a képről számolva: a moduláló egyik félperiódusa (200 µs) alatt kb. 8 ritka, a másik alatt kb. 12 sűrű vivőperiódus`],
      ker: [R`a), b) érvek`, R`c) $f_D$: frekvencialöket (kHz) és $\Phi_D$: fázislöket (rad)`, R`d) demodulátor`, R`e) $B_v$: sávszélesség`, R`f) $C$: csúcstényező`],
      lv: [S('a) Miért nem AM-DSB?', R`Az AM-DSB jel burkolója a moduláló jellel együtt változik. Itt az amplitúdó végig 7,4 V, viszont a nullátmenetek sűrűsége változik: a frekvencia ingadozik, nem az amplitúdó.`, []),
        S('b) Miért nem AM-SSB/SC?', R`Az SSB/SC csak eltolja a moduláló jel összetevőit. Egyetlen 2,5 kHz-es szinuszból egyetlen, $f_v\pm2{,}5$ kHz-es, <b>állandó frekvenciájú</b> szinusz lenne, aminek a sűrűsége nem ingadozhat.`, []),
        S('c) Az átlagos frekvencia a két félperiódusban', R`Megszámoljuk a vivőperiódusokat a moduláló jel egy-egy félperiódusa ($T_0=200$ µs) alatt. Ellenőrzésképpen a teljes 400 µs alatt $8+12=20$ periódus van, ez 50 kHz, egyezik a műszerrel.`, [
          ['számérték', R`f_\text{ritka}=\frac{8}{200\ \mu\text{s}}=40\ \text{kHz}\qquad f_\text{sűrű}=\frac{12}{200\ \mu\text{s}}=60\ \text{kHz}`, 'a képről leolvasott darabszámokból'],
          ['számérték', R`\Delta f_\text{átl}=60-50=50-40=10\ \text{kHz}`, 'átlagos eltérés a vivőtől egy félperiódusban']]),
        S('c) A csúcslöket az átlagos eltérésből', R`FM-nél a pillanatnyi frekvencia szinuszosan ingadozik: $f(t)=f_v+f_D\sin(2\pi f_mt)$. Egy félperióduson a $|\sin|$ átlaga $2/\pi$, ezért az átlagos eltérés a csúcslöket $2/\pi$-szerese. Ebből $f_D$ kifejezhető.`, [
          ['tétel', R`\frac1{T_0}\int_0^{T_0}\sin\frac{\pi t}{T_0}\,dt=\frac2\pi\ \Rightarrow\ \Delta f_\text{átl}=\frac2\pi f_D`, ''],
          ['átalakítás', R`f_D=\frac\pi2\cdot\Delta f_\text{átl}=\frac\pi2\cdot10=15{,}7\ \text{kHz}`, 'a leolvasásból'],
          ['számérték', R`\Phi_D=\frac{f_D}{f_m}=\frac{15{,}7}{2{,}5}=6{,}3\ \text{rad}`, R`$f_D=\Phi_Df_m$ (A3)`]]),
        S('c) A valódi érték és a leolvasás pontossága', R`Az oktató megjegyzése szerint a generátort ő állította be, $f_D=25$ kHz-re. Ebből visszaszámolva a félperiódusonkénti darabszám $10\mp3{,}2$, azaz kb. 7 és 13. A 8 és 12 tehát durva leolvasás, és egy-egy periódus tévedés is nagyot változtat az eredményen: a módszer csak a nagyságrendet adja.`, [
          ['behelyettesítés', R`f_vT_0\mp\frac2\pi f_DT_0=10\mp\frac2\pi\cdot25\cdot0{,}2=10\mp3{,}2`, R`$f_v=50$ kHz, $T_0=0{,}2$ ms, $f_D=25$ kHz`],
          ['számérték', R`\Phi_D=\frac{25}{2{,}5}=10\ \text{rad}`, 'a beállított értékkel']]),
        S('d) Demodulátor', R`FM-demodulátor kell: számláló típusú (nullátmenet-detektor → impulzusgenerátor → aluláteresztő), vagy deriváló + burkolódetektor (a deriválás után a burkoló arányos a pillanatnyi frekvenciával), vagy fázistolós szorzó.`, []),
        S('e) Sávszélesség', R`Carson-szabály a beállított lökettel.`, [
          ['tétel', R`B_v\approx2(f_D+f_m)=2(25+2{,}5)=55\ \text{kHz}`, R`a leolvasott 15,7 kHz-cel 36 kHz jönne ki`]]),
        S('f) Csúcstényező', R`A jel állandó amplitúdójú szinusz (csak a fázisa változik), ezért a csúcsérték 7,4 V, az effektív érték $7{,}4/\sqrt2$ V.`, [
          ['definíció', R`C=\frac{7{,}4}{7{,}4/\sqrt2}=\sqrt2`, '']])],
      ered: [R`\text{c) leolvasásból }f_D\approx16\ \text{kHz},\ \text{a beállított érték }f_D=25\ \text{kHz},\ \Phi_D=10\ \text{rad}\qquad\text{e) }B_v\approx55\ \text{kHz}\qquad\text{f) }C=\sqrt2`],
      gy: R`<p>A gyűjtemény c) válasza: 8 ritka és 12 sűrű periódus, „10 kHz átlagos frekvenciaeltérés, a csúcslöket nyilván nagyobb”. Az oktató levezetése a fázisra két egyenletet ír fel ($2\pi FT_0+\mu(T_0)=2\pi\cdot8$ és $2\pi F\cdot2T_0+\mu(2T_0)=2\pi\cdot20$), ebből $\Phi=8\pi/3=8{,}4$, és megjegyzi, hogy a pontos érték 25 kHz, mert ő állította be. A „ugyanehhez a példához” tartozó másik megoldás a moduláló jel feszültségéből olvas le: $\Phi_D=4/2=2$ rad, $f_D=5$ kHz.</p>`,
      fix: R`A $\Phi_D=2$ rad hibás: a moduláló jel voltban mért amplitúdója nem fázislöket, a modulátor érzékenysége nem ismert. Az oktató egyenletei a $t=0$-beli fázist nem vonják le: $\mu(t)=\Phi\cos(\pi t/T_0)$ mellett $\mu(0)=\Phi$, és a periódusszám $[\mu(T_0)-\mu(0)]$-val számol. Ezzel ugyanabból a leolvasásból $\Phi=2\pi\approx6{,}3$ rad jön ki, egyezően a fenti átlagolós úttal. A végeredmény a beállított érték: $f_D=25$ kHz `+'`[ELLENŐRIZENDŐ]`'+R`.`,
      links: [src5(['5o_04_1'])] },

    { id: 'o1_07', num: '1.7', title: 'Oszcilloszkópos AM-jel (hivatalos válaszok)', tags: ['vizsga'],
      src: R`5-ösöm 5…6. oldal · 5o_05_1`,
      task: R`<p>Agilent-képernyő: Pk-Pk(1) = 12 V (modulált), Pk-Pk(2) = 4 V, Freq(2) = 2,5 kHz. a) Miért nem szögmodulált? b) Miért nem SSB/SC? c) $m$? d) Burkolódemodulátorral? e) Komponensek? f) Csúcstényező?</p>`,
      ad: [R`Pk-Pk(1) = 12 V: a modulált jel csúcstól csúcsig, tehát a csúcsértéke $U_v+U_m=6$ V`, R`Pk-Pk(2) = 4 V: a moduláló jel csúcstól csúcsig, az amplitúdója 2 V`, R`Freq(2) = 2,5 kHz: $f_m$, a moduláló frekvencia`, R`a képről: a moduláló egy periódusa alatt 20 vivőperiódus van, ezért $f_v=20f_m$`],
      ker: [R`a), b) érvek`, R`c) $m$: modulációs mélység`, R`d) demodulálható-e burkolóval`, R`e) a spektrumvonalak frekvenciája és amplitúdója`, R`f) $C$: csúcstényező`],
      lv: [S('a) Miért nem szögmodulált?', R`A szögmodulált jel amplitúdója állandó. Itt a frekvencia (a nullátmenetek sűrűsége) állandó, az amplitúdó változik a moduláló jel ütemében.`, []),
        S('b) Miért nem SSB/SC?', R`Egyetlen szinusszal modulált SSB/SC jel egyetlen eltolt szinusz, állandó amplitúdóval. Itt az amplitúdó ingadozik.`, []),
        S('c) Modulációs mélység', R`A moduláló jel 2 V-os amplitúdója adja a burkoló kilengését ($U_m=2$ V, a képen a burkoló minimuma 2 V, ez megerősíti). A csúcsértékből megkapjuk $U_v$-t.`, [
          ['behelyettesítés', R`U_v+U_m=6\ \text{V},\ U_m=2\ \text{V}\ \Rightarrow\ U_v=4\ \text{V}`, R`6 V = 12 V / 2`],
          ['definíció', R`m=\frac{U_m}{U_v}=\frac24=0{,}5`, ''],
          ['definíció', R`s(t)=\left[4+2\cos(2\pi f_mt)\right]\cos(2\pi f_vt)=2\left[2+\cos(2\pi f_mt)\right]\cos(2\pi f_vt)`, R`a hivatalos megoldás alakja, $A=2$ V`]]),
        S('d) Burkolódemodulátor', R`Mivel $m=0{,}5<1$, a burkoló 2 V és 6 V között mozog, sosem éri el a nullát: a burkolódemodulátor kimenete $4+2\cos(2\pi f_mt)$, az egyenszint leválasztása után a moduláló jel.`, []),
        S('e) Komponensek', R`A vivő $U_v$, az oldalsávok $U_m/2$ amplitúdóval, $f_v\pm f_m$-en (A2).`, [
          ['számérték', R`f_v=20\cdot2{,}5=50\ \text{kHz}\qquad f_v\pm f_m=47{,}5\ \text{és}\ 52{,}5\ \text{kHz}`, R`$f_v=20f_m$ a képről`],
          ['számérték', R`50\ \text{kHz: }4\ \text{V}\qquad47{,}5\ \text{és}\ 52{,}5\ \text{kHz: }\frac22=1\ \text{V}`, '']]),
        S('f) Csúcstényező', R`A teljesítmény a három vonal teljesítményének összege, az effektív érték ennek gyöke, a csúcsérték 6 V.`, [
          ['definíció', R`P=\frac{4^2}2+\frac{1^2}2+\frac{1^2}2=8+0{,}5+0{,}5=9\ \text{W}`, R`1 $\Omega$-on`],
          ['számérték', R`U_\text{eff}=\sqrt9=3\ \text{V}\qquad C=\frac{6}{3}=2`, '']])],
      ered: [R`\text{c) }m=0{,}5\qquad\text{d) igen}\qquad\text{e) }47{,}5\ \text{kHz }1\ \text{V},\ 50\ \text{kHz }4\ \text{V},\ 52{,}5\ \text{kHz }1\ \text{V}\qquad\text{f) }C=2`],
      chk: [R`A hivatalos megoldás $C=3A/\left(A\sqrt{4/2+1/8+1/8}\right)=3/1{,}5=2$, ugyanez $A$-val kifejezve.`, R`A beszkennelt lapon az $A$ értéke átjavított, a 2 V a 12 V-os csúcstól csúcsig értékből következik ($3A=6$ V).`], links: [src5(['5o_05_1'])] },

    { id: 'o1_08', num: '1.8', title: 'BPSK jel csúcstényezője', tags: ['beugro'],
      src: R`5-ösöm 2. oldal · 5o_02_3`,
      task: R`<p>Mekkora a csúcstényezője egy 1 kHz vivőfrekvenciájú, 2 V amplitúdójú BPSK jelnek?</p>`,
      ad: [R`$U=2$ V: a BPSK jel amplitúdója`, R`$f_v=1$ kHz: vivőfrekvencia (az eredményhez nem kell)`],
      ker: [R`$C$: csúcstényező, a csúcsérték és az effektív érték hányadosa`],
      lv: [S('A jel alakja', R`A BPSK jel $s(t)=\pm U\cos(2\pi f_vt)$: a bit csak az előjelet (a fázist 0 vagy 180°) választja. Az abszolút értéke ezért mindig egy 2 V amplitúdójú szinuszé.`, []),
        S('Csúcsérték és effektív érték', R`A csúcsérték az amplitúdó. A négyzet nem függ az előjeltől, ezért az átlagteljesítmény ugyanaz, mint a sima szinuszé.`, [
          ['definíció', R`\hat s=2\ \text{V}\qquad s_\text{eff}=\sqrt{\overline{s^2}}=\sqrt{\frac{2^2}{2}}=\frac{2}{\sqrt2}=1{,}41\ \text{V}`, ''],
          ['számérték', R`C=\frac{\hat s}{s_\text{eff}}=\frac{2}{2/\sqrt2}=\sqrt2`, '']])],
      ered: [R`C=\sqrt2\ \text{(az amplitúdótól és a frekvenciától független)}`], links: [src5(['5o_02_3'])] }
  ]
};
