'use strict';
const { R, S, srcAI } = require('./_h.js');
const hu = v => String(v).replace('.', '{,}');
const amLines = (fv, fm, U, A) => R`f_v=${fv}\ \text{kHz: }${hu(U)}\ \text{V}\qquad f_v\pm f_m=${fv - fm}\ \text{és}\ ${fv + fm}\ \text{kHz: }${hu(A)}\ \text{V}`;
module.exports = {
  id: 'f5', num: '5', short: 'Analóg mod.', title: 'Analóg moduláció: AM és FM',
  lead: R`AM-nél a csúcsérték és a modulációs mélység adja a vivő és az oldalsávok amplitúdóját, a teljesítmény a három komponens teljesítményének összege. FM-nél a fázis- és a frekvencialöket kapcsolata ($f_D=\Phi_Df_m$) és a Carson-szabály a kulcs.`,
  alap: [
    { id: 'a5-jel', badge: 'A1', title: 'Jelölések ebben a fejezetben',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th><th>Egység</th></tr></thead><tbody>
<tr><td>$f_v$ (vagy $F$)</td><td>vivőfrekvencia</td><td>Hz</td></tr>
<tr><td>$f_m$</td><td>a moduláló jel frekvenciája</td><td>Hz</td></tr>
<tr><td>$U$</td><td>a vivő amplitúdója (AM-nél a burkoló középértéke)</td><td>V</td></tr>
<tr><td>$U_m$</td><td>a burkoló kilengése a középérték körül</td><td>V</td></tr>
<tr><td>$m$</td><td>modulációs mélység, $m=U_m/U$ (több hangnál $\max|x|/U$)</td><td>1 vagy %</td></tr>
<tr><td>$\mu(t)$</td><td>modulációs tartalom: ennyivel tér el a fázis a vivőétől</td><td>rad</td></tr>
<tr><td>$\Phi_D$</td><td>fázislöket, $\max|\mu(t)|$</td><td>rad</td></tr>
<tr><td>$f_D$</td><td>frekvencialöket: a pillanatnyi frekvencia legnagyobb eltérése $f_v$-től</td><td>Hz</td></tr>
<tr><td>$B_v$</td><td>a modulált jel sávszélessége</td><td>Hz</td></tr>
<tr><td>$P$</td><td>átlagteljesítmény (ha nincs más megadva, 1 Ω-on)</td><td>W</td></tr>
</tbody></table></div>`,
      key: R`Ha a feladat az időt ms-ban, a frekvenciát kHz-ben adja, a kettő szorzata egység nélküli: $2\pi\cdot100\,\text{kHz}\cdot t\,[\text{ms}]$ helyett $2\pi\cdot100\,t$. Visszafelé: a $t$ együtthatója osztva $2\pi$-vel kHz-ben adja a frekvenciát.` },
    { id: 'a5-am', badge: 'A2', title: 'AM-DSB egyszerűen',
      html: R`$$s(t)=\left[U+U_m\cos(2\pi f_mt)\right]\cos(2\pi f_vt)$$<p>A szögletes zárójel a burkoló: $U-U_m$ és $U+U_m$ között ingadozik, ezért a jel csúcsértéke $U+U_m=U(1+m)$. A $\cos a\cos b=\tfrac12[\cos(a-b)+\cos(a+b)]$ azonosság szerint a spektrum három vonal:</p>$$s(t)=U\cos2\pi f_vt+\frac{U_m}{2}\cos2\pi(f_v-f_m)t+\frac{U_m}{2}\cos2\pi(f_v+f_m)t$$<p>Teljesítmény (1 Ω): a vonalak teljesítménye összeadódik, $P=\frac{U^2}2+2\cdot\frac{(U_m/2)^2}{2}$. Az oldalsávok aránya $P_\text{oldal}/P=m^2/(C^2+m^2)$, ahol $C$ a moduláló jel csúcstényezője (szinusznál $\sqrt2$). Ha $m\le1$, a burkoló nem megy nulla alá, a burkolódemodulátor (dióda, RC, $1/f_v\ll RC\ll1/f_m$) működik.</p>` },
    { id: 'a5-fm', badge: 'A3', title: 'Szögmoduláció: fázis- és frekvencialöket',
      html: R`<p>$s(t)=U\cos(2\pi f_vt+\mu(t))$. PM-nél $\mu(t)$ arányos a moduláló jellel, FM-nél a deriváltja, $\mu'(t)$. A pillanatnyi frekvencia $f_v+\mu'(t)/(2\pi)$, ezért $\Phi_D=\max|\mu|$, $f_D=\frac{1}{2\pi}\max|\mu'|$. Szinuszos modulációnál $\mu=\Phi_D\sin(2\pi f_mt)$, a deriváltja $2\pi f_m\Phi_D\cos(\ldots)$, így</p>$$f_D=\Phi_D\,f_m\qquad B_v\approx2(f_D+f_m)=2f_m(1+\Phi_D)\ \text{(Carson)}$$<p>A modulált jel teljesítménye $U^2/2$, a modulációtól független. Oszcilloszkópon: FM-nél a jel a moduláló jel csúcsánál a legsűrűbb (ott a legnagyobb a frekvencia), PM-nél az emelkedő nullátmeneténél (ott a legnagyobb a derivált).</p>`,
      key: R`A fázislöket nem a moduláló jel voltban mért amplitúdója: azt a modulált jel sűrű és ritka szakaszából kell becsülni.` }
  ],
  ex: [
    { id: 'ai5_01', num: '5.1', title: 'AM: 100 kHz, 50%, 6 V csúcs (Moodle 2020)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 4. oldal · ai2020_05_26_Q4`,
      task: R`<p>AM-DSB, 100 kHz-es vivő, 20 kHz-es szinuszos moduláló jel, $m=50\%$, a modulált jel csúcsértéke 6 V. b) Komponensek. c) Átlagteljesítmény.</p>`,
      ad: [R`$f_v=100$ kHz, $f_m=20$ kHz`, R`$m=0{,}5$`, R`$\hat s=6$ V: a modulált jel csúcsértéke`],
      ker: [R`b) a spektrumvonalak frekvenciája és amplitúdója`, R`c) $P$ (1 Ω-on)`],
      lv: [S('Amplitúdók', R`A csúcsérték $U(1+m)$ (A2), ebből $U$, majd $U_m=mU$.`, [
          ['behelyettesítés', R`U(1+0{,}5)=6\ \Rightarrow\ U=\frac{6}{1{,}5}=4\ \text{V}`, ''],
          ['számérték', R`U_m=0{,}5\cdot4=2\ \text{V}\qquad\frac{U_m}{2}=1\ \text{V}`, 'az oldalsávok amplitúdója']]),
        S('b) Komponensek', R`Vonalak $f_v$-n és $f_v\pm f_m$-en.`, [['számérték', amLines(100, 20, 4, 1), '']]),
        S('c) Teljesítmény', R`Mindhárom vonal teljesítménye számít, $A^2/2$-vel.`, [
          ['definíció', R`P=\frac{4^2}{2}+\frac{1^2}{2}+\frac{1^2}{2}=8+0{,}5+0{,}5=9\ \text{W}`, R`1 $\Omega$-on`]])],
      ered: [R`\text{b) }100\ \text{kHz: }4\ \text{V},\ 80\text{ és }120\ \text{kHz: }1\ \text{V}\qquad\text{c) }P=9\ \text{W}`],
      fix: R`A hallgató csak a vivőt számolta (8 W). A javító: „minden komponensé számít!”`, links: [srcAI(['ai2020_05_26_Q4'])] },

    { id: 'ai5_02', num: '5.2', title: 'AM: 240 kHz, 100%, 6 V csúcs (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 13. oldal · ai2020_06_02_Q5`,
      task: R`<p>240 kHz-es vivő, 30 kHz-es szinusz, $m=100\%$, csúcsérték 6 V. Komponensek és amplitúdóik?</p>`,
      ad: [R`$f_v=240$ kHz, $f_m=30$ kHz, $m=1$, $\hat s=6$ V`],
      ker: [R`a vonalak frekvenciája és amplitúdója`],
      lv: [S('Amplitúdók', R`$m=1$-nél $U_m=U$, a csúcs $2U$.`, [
          ['behelyettesítés', R`U(1+1)=6\ \Rightarrow\ U=3\ \text{V},\ U_m=3\ \text{V},\ \frac{U_m}{2}=1{,}5\ \text{V}`, '']]),
        S('Vonalak', '', [['számérték', amLines(240, 30, 3, 1.5), '']])],
      ered: [R`240\ \text{kHz: }3\ \text{V}\qquad 210\ \text{és}\ 270\ \text{kHz: }1{,}5\ \text{V}`],
      chk: [R`Rajzhoz: $T_m=1/30\ \text{kHz}=33\ \mu$s alatt $240/30=8$ vivőperiódus. A burkoló 0 és 6 V között mozog, épp eléri a nullát.`], links: [srcAI(['ai2020_06_02_Q5'])] },

    { id: 'ai5_03', num: '5.3', title: 'AM: 100 kHz, 50%, 3 V csúcs', tags: ['vizsga'],
      src: R`ALL-IN 52…54. oldal · ai2014_12_15_2`,
      task: R`<p>100 kHz-es vivő, 20 kHz-es szinusz, $m=50\%$, csúcsérték 3 V. a) Rajz (50 µs). b) Időfüggvény, időegység, komponensek. c) Átlagteljesítmény.</p>`,
      ad: [R`$f_v=100$ kHz, $f_m=20$ kHz, $m=0{,}5$, $\hat s=3$ V`],
      ker: [R`a) rajz`, R`b) $s(t)$, az időegység, a vonalak`, R`c) $P$`],
      lv: [S('Amplitúdók', R`A modulált jel csúcsértéke a burkoló maximuma, $U+U_m=U(1+m)$. Ebből $U$, majd $U_m=mU$, az oldalsávok amplitúdója $U_m/2$.`, [
          ['behelyettesítés', R`U\cdot1{,}5=3\ \Rightarrow\ U=2\ \text{V}\qquad U_m=0{,}5\cdot2=1\ \text{V}`, '']]),
        S('b) Időfüggvény', R`A frekvenciák kHz-ben, ezért $t$ ms-ban.`, [
          ['behelyettesítés', R`s(t)=\left[2+\cos(2\pi\cdot20\,t)\right]\cos(2\pi\cdot100\,t)\ \text{V},\ [t]=\text{ms}`, ''],
          ['számérték', amLines(100, 20, 2, 0.5), R`$U_m/2=0{,}5$ V`]]),
        S('a) Rajz', R`A burkoló 1 V és 3 V között ingadozik.`, [
          ['számérték', R`T_m=\frac1{20\ \text{kHz}}=50\ \mu\text{s}\qquad T_v=10\ \mu\text{s}`, R`50 µs alatt 1 moduláló és 5 vivőperiódus`]]),
        S('c) Teljesítmény', '', [
          ['definíció', R`P=\frac{2^2}{2}+2\cdot\frac{0{,}5^2}{2}=2+0{,}25=2{,}25\ \text{W}`, '']])],
      ered: [R`\text{b) }s(t)=\left[2+\cos(2\pi\cdot20t)\right]\cos(2\pi\cdot100t)\ \text{V},\ t\ \text{ms-ban},\ 100\ \text{kHz: }2\ \text{V},\ 80\text{ és }120\ \text{kHz: }0{,}5\ \text{V}\qquad\text{c) }2{,}25\ \text{W}`], links: [srcAI(['ai2014_12_15_2'])] },

    { id: 'ai5_04', num: '5.4', title: 'AM: 80 kHz, 25%, 2,5 V csúcs', tags: ['vizsga'],
      src: R`ALL-IN 72…73. oldal · ai2014_01_07_4 (és 5-ösöm 8. oldal)`,
      task: R`<p>80 kHz-es vivő, 20 kHz-es szinusz, csúcsérték 2,5 V, $m=25\%$. Időfüggvény és komponensek?</p>`,
      ad: [R`$f_v=80$ kHz, $f_m=20$ kHz, $m=0{,}25$, $\hat s=2{,}5$ V`],
      ker: [R`$s(t)$ és a vonalak`],
      lv: [S('Amplitúdók', R`A modulált jel csúcsértéke a burkoló maximuma, $U+U_m=U(1+m)$. Ebből $U$, majd $U_m=mU$, az oldalsávok amplitúdója $U_m/2$.`, [
          ['behelyettesítés', R`U\cdot1{,}25=2{,}5\ \Rightarrow\ U=2\ \text{V}\qquad U_m=0{,}25\cdot2=0{,}5\ \text{V}`, '']]),
        S('Időfüggvény és vonalak', R`$t$ ms-ban, a frekvenciák kHz-ben.`, [
          ['behelyettesítés', R`s(t)=\left[2+0{,}5\cos(2\pi\cdot20\,t)\right]\cos(2\pi\cdot80\,t)\ \text{V}`, ''],
          ['számérték', amLines(80, 20, 2, 0.25), R`$U_m/2=0{,}25$ V`]])],
      ered: [R`s(t)=\left[2+0{,}5\cos(2\pi\cdot20t)\right]\cos(2\pi\cdot80t)\ \text{V},\ t\ \text{ms-ban}\qquad80\ \text{kHz: }2\ \text{V},\ 60\text{ és }100\ \text{kHz: }0{,}25\ \text{V}`],
      chk: [R`Rajzhoz (5-ösöm): 50 µs alatt 1 moduláló és 4 vivőperiódus, a burkoló 1,5 és 2,5 V között.`], links: [srcAI(['ai2014_01_07_4'])] },

    { id: 'ai5_05', num: '5.5', title: 'AM-spektrum dBV-ben és az oldalsávok teljesítménye', tags: ['vizsga'],
      src: R`ALL-IN 20., 23…24. oldal · ai2016_01_05_5, ai2016_06_07_1`,
      task: R`<p>A spektrumon a vivő 100 kHz-en 3 dBV, az oldalsávok 80 és 120 kHz-en −9 dBV (effektív értékek). a) Időfüggvény. b) Modulációs mélység. c) Az oldalsávok és az összteljesítmény aránya. d) Demodulátor.</p>`,
      ad: [R`vivő: 100 kHz, 3 dBV`, R`oldalsávok: 80 és 120 kHz, −9 dBV`, R`dBV: effektív érték 1 V-hoz viszonyítva, $20\lg(U_\text{eff}/1\,\text{V})$`],
      ker: [R`a) $s(t)$`, R`b) $m$`, R`c) $P_\text{oldal}/P$: az oldalsávok teljesítménye osztva a teljes teljesítménnyel`, R`d) demodulátor`],
      miert: [[R`Miért kell $\sqrt2$-vel szorozni?`, R`A dBV effektív értéket ad meg, az időfüggvényben csúcsérték (amplitúdó) szerepel. Szinusznál az amplitúdó az effektív érték $\sqrt2$-szöröse.`]],
      lv: [S('Amplitúdók a dBV-értékekből', R`Először a $20\lg$ visszafordítása effektív értékre, aztán $\sqrt2$-vel amplitúdóra.`, [
          ['átalakítás', R`U=10^{3/20}\cdot\sqrt2=1{,}41\cdot1{,}41=2{,}0\ \text{V}`, 'vivő'],
          ['átalakítás', R`\frac{U_m}{2}=10^{-9/20}\cdot\sqrt2=0{,}355\cdot1{,}41=0{,}5\ \text{V}\ \Rightarrow\ U_m=1\ \text{V}`, 'oldalsávok']]),
        S('a) Időfüggvény', R`Az oldalsávok $\pm20$ kHz-re vannak, tehát $f_m=20$ kHz.`, [
          ['behelyettesítés', R`s(t)=\left[2+\cos(2\pi\cdot20\,t)\right]\cos(2\pi\cdot100\,t)\ \text{V},\ t\ \text{ms-ban}`, '']]),
        S('b) Modulációs mélység', '', [['definíció', R`m=\frac{U_m}{U}=\frac12=0{,}5`, '']]),
        S('c) Oldalsávok aránya', R`Közvetlenül a vonalak teljesítményéből, és ellenőrzésképpen a képletből (A2).`, [
          ['definíció', R`\frac{P_\text{oldal}}{P}=\frac{2\cdot0{,}5^2/2}{2^2/2+2\cdot0{,}5^2/2}=\frac{0{,}25}{2{,}25}=\frac19`, ''],
          ['tétel', R`\frac{m^2}{C^2+m^2}=\frac{0{,}25}{2+0{,}25}=\frac19`, R`$C=\sqrt2$, szinuszos moduláló jel`]]),
        S('d) Demodulátor', R`$m=0{,}5<1$, a burkoló 1 és 3 V között mozog, sosem nulla: burkolódemodulátor (dióda + RC, csúcsegyenirányító).`, [])],
      ered: [R`\text{a) }s(t)=\left[2+\cos(2\pi\cdot20t)\right]\cos(2\pi\cdot100t)\ \text{V}\qquad\text{b) }m=0{,}5\qquad\text{c) }1/9\approx11\%\qquad\text{d) burkolódemodulátor}`], links: [srcAI(['ai2016_01_05_5', 'ai2016_06_07_1'])] },

    { id: 'ai5_06', num: '5.6', title: 'Oszcilloszkópos AM: 12 V csúcstól csúcsig', tags: ['vizsga'],
      src: R`ALL-IN 49…51., 86…87. oldal · ai2016_01_12_4, ai2016_01_12c_4 (és 5-ösöm 5…6. oldal)`,
      task: R`<p>Agilent-képernyő, 2 V/osztás, 100 µs/osztás. Pk-Pk(1) = 12 V (modulált), Pk-Pk(2) = 4 V, Freq(2) = 2,5 kHz (moduláló). A moduláló jel egy periódusa 4 osztás, a modulált jelen 5 csúcs van egy osztáson belül. a) Melyik a moduláló? b) $m$? c) Átlagteljesítmény? d) $f_v$, $f_m$? e) Demodulátor?</p>`,
      ad: [R`Pk-Pk(1) = 12 V: a modulált jel csúcstól csúcsig, csúcsértéke 6 V`, R`Pk-Pk(2) = 4 V: a moduláló jel csúcstól csúcsig, amplitúdója 2 V`, R`a képről: a burkoló 6 V és 2 V között mozog`, R`időalap 100 µs/osztás: a moduláló periódusa 4 osztás, a vivőé egy osztáson 5`],
      ker: [R`a) a moduláló jel`, R`b) $m$`, R`c) $P$`, R`d) $f_v$, $f_m$`, R`e) demodulátor`],
      lv: [S('a) Melyik a moduláló?', R`A 2. csatorna: állandó amplitúdójú, lassú szinusz (2,5 kHz). Az 1. csatorna a modulált jel, ennek burkolója követi a 2. csatornát.`, []),
        S('b) Modulációs mélység', R`A burkoló legnagyobb és legkisebb értékéből a középérték és a kilengés:`, [
          ['geometria', R`U=\frac{6+2}{2}=4\ \text{V}\qquad U_m=\frac{6-2}{2}=2\ \text{V}`, 'a képről leolvasva'],
          ['definíció', R`m=\frac{U_m}{U}=\frac24=0{,}5`, R`$U_m=2$ V egyezik a moduláló jel amplitúdójával`]]),
        S('c) Teljesítmény', R`Három vonal: vivő 4 V, oldalsávok $U_m/2=1$ V (A2).`, [
          ['definíció', R`P=\frac{4^2}{2}+\frac{1^2}{2}+\frac{1^2}{2}=8+1=9\ \text{W}`, R`1 $\Omega$-on`]]),
        S('d) Frekvenciák', R`Periódusidők a képernyőről, $f=1/T$.`, [
          ['számérték', R`T_m=4\cdot100\ \mu\text{s}=400\ \mu\text{s}\ \Rightarrow\ f_m=2{,}5\ \text{kHz}`, 'egyezik a Freq(2)-vel'],
          ['számérték', R`T_v=\frac{100\ \mu\text{s}}{5}=20\ \mu\text{s}\ \Rightarrow\ f_v=50\ \text{kHz}`, '']]),
        S('e) Demodulátor', R`$m=0{,}5<1$, ezért burkolódemodulátor (dióda + RC, $20\ \mu\text{s}\ll RC\ll400\ \mu\text{s}$). A koherens (szorzós) demodulátor is helyes, de vivőszinkront igényel.`, [])],
      ered: [R`\text{b) }m=0{,}5\qquad\text{c) }P=9\ \text{W}\qquad\text{d) }f_m=2{,}5\ \text{kHz},\ f_v=50\ \text{kHz}\qquad\text{e) burkolódemodulátor}`],
      chk: [R`Az 5-ösöm hivatalos válaszai ugyanehhez a képhez: komponensek 47,5 kHz 1 V, 50 kHz 4 V, 52,5 kHz 1 V, csúcstényező $6/\sqrt9=2$.`], links: [srcAI(['ai2016_01_12_4', 'ai2016_01_12c_4'])] },

    { id: 'ai5_07', num: '5.7', title: 'Oszcilloszkópos AM a műszer RMS-értékével ellenőrizve', tags: ['vizsga'],
      src: R`ALL-IN 63…64. oldal · ai2014_12_22_2`,
      task: R`<p>1 V/osztás, 20 µs/osztás, Pk-Pk = 5,91 V, RMS = 1,500 V. A moduláló jel egy periódusa 2,5 osztás, alatta 5 vivőperiódus. a) $f_c$, $f_m$? b) $m$?</p>`,
      ad: [R`Pk-Pk = 5,91 V: csúcsérték kb. 2,96 V, azaz $U+U_m\approx3$ V`, R`RMS = 1,5 V: a műszer effektív értéke, $P=1{,}5^2=2{,}25$ W (1 Ω)`, R`a moduláló periódusa 2,5 osztás, alatta 5 vivőperiódus`],
      ker: [R`a) $f_c$ (vivő), $f_m$`, R`b) $m$`],
      lv: [S('a) Frekvenciák', '', [
          ['számérték', R`T_m=2{,}5\cdot20\ \mu\text{s}=50\ \mu\text{s}\ \Rightarrow\ f_m=20\ \text{kHz}`, ''],
          ['számérték', R`f_c=5\cdot f_m=100\ \text{kHz}`, 'egy moduláló periódus alatt 5 vivőperiódus']]),
        S('b) Két egyenlet két ismeretlenre', R`A csúcsérték és a teljesítmény is felírható $U$-val és $U_m$-mel (A2).`, [
          ['definíció', R`U+U_m=3\qquad\frac{U^2}{2}+\frac{U_m^2}{4}=2{,}25`, R`a második: $U^2/2+2\cdot(U_m/2)^2/2$`],
          ['átalakítás', R`U_m=3-U:\ 2U^2+(3-U)^2=9\ \Rightarrow\ 3U^2-6U=0\ \Rightarrow\ U=2`, R`$U=0$ nem értelmes`],
          ['számérték', R`U_m=1\ \text{V}\qquad m=\frac12=0{,}5`, '']])],
      ered: [R`\text{a) }f_c=100\ \text{kHz},\ f_m=20\ \text{kHz}\qquad\text{b) }m=0{,}5`],
      chk: [R`Visszaszámolva: $\sqrt{2^2/2+1^2/4}=\sqrt{2{,}25}=1{,}5$ V, egyezik a műszerrel.`], links: [srcAI(['ai2014_12_22_2'])] },

    { id: 'ai5_08', num: '5.8', title: 'Kéthangos AM, 30%', tags: ['beugro'],
      src: R`ALL-IN 110. oldal · aiD_5_6`,
      task: R`<p>$x(t)=0{,}1\cos(2\pi f_1t)+0{,}5\cos(2\pi f_2t)$, $s(t)=A(U_0+x(t))\cos(2\pi Ft)$, $f_1=1$ kHz, $f_2=2$ kHz, $F=900$ kHz, $U_0=2$ V, $A=100$ V. Moduláció fajtája, mélysége, a nem nulla teljesítményű frekvenciák?</p>`,
      ad: [R`$x(t)$: két hangból álló moduláló jel`, R`$U_0=2$ V: az egyenszint (a burkoló középértéke $A$-szorosan)`, R`$F=900$ kHz: vivő`],
      ker: [R`a moduláció fajtája, $m$, a frekvenciák`],
      lv: [S('A moduláció fajtája', R`Az alak $[\text{állandó}+x(t)]\cdot\cos$: AM-DSB vivővel.`, []),
        S('A modulációs mélység', R`Több hangnál $m=\max|x|/U_0$. $t=0$-ban mindkét koszinusz 1, ezért ott a legnagyobb $x$.`, [
          ['számérték', R`\max|x|=x(0)=0{,}1+0{,}5=0{,}6`, ''],
          ['definíció', R`m=\frac{0{,}6}{2}=0{,}3=30\%`, '']]),
        S('A frekvenciák', R`Minden hang két oldalsávot ad a vivő körül.`, [
          ['definíció', R`F,\ F\pm f_1,\ F\pm f_2:\ 898,\ 899,\ 900,\ 901,\ 902\ \text{kHz}`, '']])],
      ered: [R`\text{AM-DSB},\ m=30\%,\ 898,\ 899,\ 900,\ 901,\ 902\ \text{kHz}`], links: [srcAI(['aiD_5_6'])] },

    { id: 'ai5_09', num: '5.9', title: 'Kéthangos AM 50 Ω-on (hivatalos megoldás)', tags: ['vizsga', 'nehez'],
      src: R`ALL-IN 111…112. oldal · aiD_5_17`,
      task: R`<p>$s(t)=A[2+x(t)]\cos(2\pi Ft)$, $x(t)=0{,}1\sin(2\pi f_1t)+\cos(2\pi f_2t)$, $f_1=1$ kHz, $f_2=2$ kHz, $F=900$ kHz, $A=100$ V, $R=50\,\Omega$. a) $m$? b) Frekvenciák és teljesítmények? c) Oldalsávok aránya? d) A pillanatnyi teljesítmény minimuma és e) maximuma?</p>`,
      ad: [R`a burkoló $100\,[2+x(t)]$ V, a középértéke 200 V`, R`$R=50\ \Omega$: a teljesítményt ezen kell számolni, $P=U^2/(2R)$ amplitúdóból`],
      ker: [R`a) $m$`, R`b) vonalak és teljesítményük`, R`c) $P_\text{oldal}/P$: az oldalsávok teljesítménye osztva a teljes teljesítménnyel`, R`d), e) a burkolóhoz tartozó legkisebb és legnagyobb pillanatnyi teljesítmény`],
      lv: [S('a) Modulációs mélység', R`$m=\max|x|/2$. A legnagyobb abszolút érték a minimumnál van: ha $\sin=-1$ és $\cos=-1$ egyszerre. $t=0{,}75$ ms-ban $\sin(2\pi\cdot0{,}75)=\sin(1{,}5\pi)=-1$ és $\cos(2\pi\cdot2\cdot0{,}75)=\cos3\pi=-1$.`, [
          ['behelyettesítés', R`x(0{,}75\ \text{ms})=-0{,}1-1=-1{,}1`, ''],
          ['definíció', R`m=\frac{1{,}1}{2}=55\%`, '']]),
        S('b) Vonalak', R`Amplitúdók: vivő $100\cdot2=200$ V, a $\cos$ tag oldalsávjai $100\cdot1/2=50$ V, a $\sin$ tagé $100\cdot0{,}1/2=5$ V. Teljesítmény $U^2/(2\cdot50)$.`, [
          ['számérték', R`900:\ \frac{200^2}{100}=400\ \text{W}\qquad898,\ 902:\ \frac{50^2}{100}=25\ \text{W}\qquad899,\ 901:\ \frac{5^2}{100}=0{,}25\ \text{W}`, '']]),
        S('c) Oldalsávok aránya', '', [
          ['számérték', R`\frac{2\cdot25+2\cdot0{,}25}{400+50{,}5}=\frac{50{,}5}{450{,}5}=11{,}21\%`, '']]),
        S('d) A legkisebb pillanatnyi teljesítmény', R`A hivatalos megoldás a burkoló pillanatnyi értékét veszi (a vivőcsúcsban mért feszültséget), és $u^2/R$-rel számol. A burkoló minimuma az a) részbeli $x=-1{,}1$-nél:`, [
          ['behelyettesítés', R`u_{\min}=100\,(2-1{,}1)=90\ \text{V}\qquad P_{\min}=\frac{90^2}{50}=162\ \text{W}`, '']]),
        S('e) A legnagyobb', R`$x$ maximumát deriválással keressük. Legyen $\theta=2\pi f_1t$, ekkor $\cos2\theta=1-2\sin^2\theta$, és $s=\sin\theta$-val $x=1+0{,}1s-2s^2$.`, [
          ['deriválás', R`\frac{dx}{ds}=0{,}1-4s=0\ \Rightarrow\ s=0{,}025\ \Rightarrow\ x_{\max}=1+0{,}0025-0{,}00125=1{,}00125`, ''],
          ['behelyettesítés', R`u_{\max}=100\cdot3{,}00125=300{,}1\ \text{V}\qquad P_{\max}=\frac{300{,}1^2}{50}=1801{,}5\ \text{W}`, '']])],
      ered: [R`\text{a) }m=55\%\qquad\text{b) }400,\ 2\times25,\ 2\times0{,}25\ \text{W}\qquad\text{c) }11{,}21\%\qquad\text{d) }162\ \text{W}\qquad\text{e) }1801{,}5\ \text{W}`],
      chk: [R`A hivatalos becslés e)-re: $300^2/50=1800<P<310^2/50=1922$ W. A szó szerinti pillanatnyi teljesítmény minimuma 0 (a vivő nullátmeneteiben), a kérdés a burkolóra vonatkozik.`], links: [srcAI(['aiD_5_17'])] },

    { id: 'ai5_10', num: '5.10', title: 'FM vagy PM az oszcilloszkópon? A löket becslése', tags: ['vizsga', 'javitas', 'nehez'],
      src: R`ALL-IN 70…72. oldal · ai2014_01_07_2 · az oktató elemzése: 5-ösöm 4. oldal`,
      task: R`<p>Agilent-képernyő: Freq(1) = 50 kHz, Pk-Pk(1) = 14,8 V, a moduláló jel 2,5 kHz, 100 µs/osztás. a) Frekvencia- vagy fázismodulált? b) Becsülje meg a frekvencia- és fázislöketet! c) Demodulátor?</p>`,
      ad: [R`$f_v=50$ kHz: a műszer átlagos frekvenciája`, R`$U=14{,}8/2=7{,}4$ V: állandó amplitúdó`, R`$f_m=2{,}5$ kHz, $T_m=400$ µs, félperiódusa $T_0=200$ µs`, R`a képről: egyik félperiódus alatt kb. 8 ritka, a másik alatt kb. 12 sűrű vivőperiódus`],
      ker: [R`a) FM vagy PM`, R`b) $f_D$ és $\Phi_D$`, R`c) demodulátor`],
      lv: [S('a) FM vagy PM?', R`FM-nél a pillanatnyi frekvencia magát a moduláló jelet követi: a jel ott a legsűrűbb, ahol a moduláló jel a csúcsán van. PM-nél a deriváltat követi: ott a legsűrűbb, ahol a moduláló jel emelkedve megy át a nullán. A képen (a gyűjtemény és az oktató szerint) a sűrűsödés a moduláló csúcsával esik egybe: FM.`, []),
        S('b) Átlagos eltérés', R`A két félperiódus átlagos frekvenciája a leszámolt periódusokból:`, [
          ['számérték', R`\frac{8}{200\ \mu\text{s}}=40\ \text{kHz}\qquad\frac{12}{200\ \mu\text{s}}=60\ \text{kHz}\ \Rightarrow\ \Delta f_\text{átl}=10\ \text{kHz}`, '']]),
        S('b) Csúcslöket', R`FM-nél $f(t)=f_v+f_D\sin(2\pi f_mt)$. A $|\sin|$ átlaga egy félperióduson $2/\pi$, ezért az átlagos eltérés a csúcslöket $2/\pi$-szerese.`, [
          ['átalakítás', R`f_D=\frac\pi2\Delta f_\text{átl}=\frac\pi2\cdot10=15{,}7\ \text{kHz}\qquad\Phi_D=\frac{f_D}{f_m}=6{,}3\ \text{rad}`, 'a leolvasásból'],
          ['számérték', R`f_D=25\ \text{kHz},\ \Phi_D=\frac{25}{2{,}5}=10\ \text{rad}`, 'az oktató által beállított érték']]),
        S('c) Demodulátor', R`Számláló típusú (nullátmenet-detektor → impulzusgenerátor → aluláteresztő), vagy deriváló + burkolódetektor. A Carson-sáv a beállított lökettel $2(25+2{,}5)=55$ kHz.`, [])],
      ered: [R`\text{a) FM}\qquad\text{b) leolvasásból }f_D\approx16\ \text{kHz, a beállított érték }f_D=25\ \text{kHz},\ \Phi_D=10\ \text{rad}`],
      gy: R`<p>A gyűjtemény szerint FM (ez helyes), de a fázislöketet a moduláló jel feszültségéből olvassa le: „$\Phi_D=4/2=2$ rad”, ebből $f_D=5$ kHz.</p>`,
      fix: R`A moduláló jel voltban mért amplitúdója nem fázislöket (a modulátor érzékenysége nem ismert). Az oktató saját megjegyzése szerint a generátort ő állította be, $f_D=25$ kHz. A 25 kHz-hez félperiódusonként $10\mp\tfrac2\pi\cdot25\cdot0{,}2=10\mp3{,}2$, azaz kb. 7 és 13 vivőperiódus tartozna: a 8 és 12 durva leolvasás, ezért ad a becslés kisebb löketet.`,
      hib: [R`A szögmodulált jel csúcstényezője $\sqrt2$, a burkoló állandó. Ha a burkoló változik, az nem szögmoduláció.`], links: [srcAI(['ai2014_01_07_2'])] },

    { id: 'ai5_11', num: '5.11', title: 'FM 1,5 GHz-en, 40 kHz-es sávban', tags: ['vizsga'],
      src: R`ALL-IN 109. oldal · aiD_5_1`,
      task: R`<p>20 Hz és 8 kHz közötti jelet FM-mel kell továbbítani 1,5 GHz-es vivőn, a sáv 40 kHz (számoljunk 8 kHz-cel). a) Frekvencialöket? b) $s(t)=5\cos(A\pi t+\varphi+B\sin(C\pi t))$ alakban ($t$ ms-ban) mi A, B, C?</p>`,
      ad: [R`$f_m=8$ kHz: a legnagyobb moduláló frekvencia (erre méretezünk)`, R`$B_v=40$ kHz: a rendelkezésre álló sáv`, R`$f_v=1{,}5$ GHz`],
      ker: [R`a) $f_D$`, R`b) a képlet három paramétere: $A$: a vivő tagjának együtthatója ($A\pi t$), $B$: a fázisban álló szinusz amplitúdója (a fázislöket), $C$: a moduláló tag együtthatója ($C\pi t$)`],
      lv: [S('a) Frekvencialöket', R`A Carson-szabályt $f_D$-re rendezzük.`, [
          ['tétel', R`2(f_D+8)=40\ \Rightarrow\ f_D=20-8=12\ \text{kHz}`, '']]),
        S('b) A vivő tagja: A', R`$A\pi t=2\pi f_vt$, $t$ ms-ban. $f_v=1{,}5\ \text{GHz}=1{,}5\cdot10^6\ \text{kHz}$, azaz $1{,}5\cdot10^6$ 1/ms.`, [
          ['átalakítás', R`A\pi=2\pi\cdot1{,}5\cdot10^6\ \Rightarrow\ A=3\cdot10^6`, '']]),
        S('b) A moduláló tagja: C', '', [
          ['átalakítás', R`C\pi=2\pi\cdot8\ \Rightarrow\ C=16`, R`$f_m=8$ kHz, $t$ ms-ban`]]),
        S('b) A szinusz együtthatója: B', R`A fázisban álló szinusz amplitúdója a fázislöket, és $f_D=\Phi_Df_m$.`, [
          ['definíció', R`B=\Phi_D=\frac{f_D}{f_m}=\frac{12}{8}=1{,}5\ \text{rad}`, '']])],
      ered: [R`\text{a) }f_D=12\ \text{kHz}\qquad\text{b) }A=3\cdot10^6,\ B=1{,}5,\ C=16`], links: [srcAI(['aiD_5_1'])] },

    { id: 'ai5_12', num: '5.12', title: 'FM rádióadó: 9 kHz-es löket, 1 kHz-es moduláló', tags: ['vizsga'],
      src: R`ALL-IN 109…110., 112. oldal · aiD_5_5, aiD_5_18 (hivatalos)`,
      task: R`<p>Ha a moduláló jel 1 V csúcsértékű, 1 ms periódusú szinusz, a modulált jel 9 V amplitúdójú, frekvencialökete 9 kHz. a) Fázislöket? b) Sávszélesség? c), d) Hogyan változik a modulált jel teljesítménye, ha a moduláló jel teljesítménye, illetve frekvenciája duplázódik? e) Demodulátor?</p>`,
      ad: [R`$T_m=1$ ms $\Rightarrow f_m=1$ kHz`, R`$f_D=9$ kHz`, R`$U=9$ V: a modulált jel amplitúdója`],
      ker: [R`a) $\Phi_D$`, R`b) $B_v$`, R`c), d) $P$ változása`, R`e) demodulátor`],
      lv: [S('a) Fázislöket', R`Szinuszos FM-nél $f_D=\Phi_Df_m$ (A3).`, [
          ['definíció', R`\Phi_D=\frac{f_D}{f_m}=\frac{9}{1}=9\ \text{rad}`, '']]),
        S('b) Sávszélesség', '', [
          ['tétel', R`B_v\approx2(f_D+f_m)=2(9+1)=20\ \text{kHz}`, 'Carson'],
          ['közelítés', R`B_v\approx2(1+\sqrt{\Phi_D}+\Phi_D)f_m=2(1+3+9)\cdot1=26\ \text{kHz}`, 'a hivatalos megoldás pontosabb becslése']]),
        S('c), d) Teljesítmény', R`A szögmodulált jel amplitúdója állandó, a teljesítménye ezért a modulációtól független: sem a moduláló teljesítménye, sem a frekvenciája nem változtat rajta. (A löket és a sávszélesség változik.)`, [
          ['definíció', R`P=\frac{9^2}{2}=40{,}5\ \text{W}`, R`1 $\Omega$-on, mindkét esetben`]]),
        S('e) Demodulátor', R`Késleltetővonalas (kvadratúra) demodulátor: $s(t)$-t szorozzuk egy késleltetett, 90°-kal eltolt példányával, a szorzat aluláteresztő után $\mu'(t)$-vel, azaz a moduláló jellel arányos. Lehet PLL is, vagy számláló típusú.`, [])],
      ered: [R`\text{a) }\Phi_D=9\ \text{rad}\qquad\text{b) }B_v\approx20\ \text{kHz (26 kHz)}\qquad\text{c), d) }P=40{,}5\ \text{W, nem változik}`], links: [srcAI(['aiD_5_5', 'aiD_5_18'])] },

    { id: 'ai5_13', num: '5.13', title: 'Gitár tremolókarral', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 111. oldal · aiD_5_7`,
      task: R`<p>A húr 220 Hz-en szól, a tremolókar 5,5 Hz-cel szinuszosan, legfeljebb ±10%-kal változtatja a hangmagasságot. a) Milyen moduláció? b) Mekkora sávszélesség? c) Milyen mintavételezés kell a felvételhez (sok felharmonikus szól)?</p>`,
      ad: [R`$f_v=220$ Hz: a „vivő” a húr alaphangja`, R`$f_m=5{,}5$ Hz: a tremolókar mozgatásának frekvenciája`, R`$\pm10\%$: a frekvencia legnagyobb eltérése`],
      ker: [R`a) a moduláció fajtája`, R`b) $B_v$`, R`c) $f_s$`],
      lv: [S('a) A moduláció', R`A hangmagasság (a frekvencia) változik szinuszosan: frekvenciamoduláció.`, []),
        S('b) Sávszélesség', '', [
          ['definíció', R`f_D=0{,}1\cdot220=22\ \text{Hz}`, ''],
          ['tétel', R`B_v\approx2(f_D+f_m)=2(22+5{,}5)=55\ \text{Hz}`, 'Carson']]),
        S('c) Mintavételezés', R`A felvételen nemcsak az alaphang, hanem a felharmonikusok is ott vannak, egészen a hallható tartomány tetejéig (20 kHz). Ehhez $f_s>2\cdot20$ kHz kell, előtte antialiasing szűrővel.`, [
          ['tétel', R`f_s\ge2\cdot20\ \text{kHz}=40\ \text{kHz}`, R`pl. CD-minőség, 44,1 kHz`]])],
      ered: [R`\text{a) FM}\qquad\text{b) }B_v\approx55\ \text{Hz}\qquad\text{c) }f_s\ge40\ \text{kHz (pl. 44,1 kHz) előszűrővel}`],
      gy: R`<p>A gyűjtemény b)-re: „220 Hz ± 10% → 198 és 242 Hz → B = 44 Hz”.</p>`,
      fix: R`A 44 Hz csak $2f_D$, a moduláló frekvencia hiányzik belőle. Carson szerint 55 Hz.`, links: [srcAI(['aiD_5_7'])] },

    { id: 'ai5_14', num: '5.14', title: R`Szögmodulált jel $0{,}1\sin(2000\pi t)$-vel: két feleletválasztós`, tags: ['beugro'],
      src: R`ALL-IN 111., 113. oldal · aiD_5_8 (3.2.), aiD_5_21 (5.3.)`,
      task: R`<p>a) $F=10$ kHz, $s=20\cos(2\pi Ft+0{,}1\sin2000\pi t)$: A) $\Phi_D=0{,}1$ rad B) $f_D=100$ Hz C) a sáv nagyobb 2 kHz-nél D) effektív érték $20/\sqrt2$. b) $F=2$ MHz, $s=10\cos(2\pi Ft+0{,}1\sin2000\pi t)$: A) $\Phi_D=0{,}1/2\pi$ B) a sáv 2 kHz C) a teljesítmény $10/\sqrt2$ D) $f_D=200$ Hz.</p>`,
      ad: [R`$\mu(t)=0{,}1\sin(2000\pi t)$, itt $t$ s-ban`],
      ker: [R`melyik állítás igaz`],
      lv: [S('Közös adatok', R`A fázisban álló szinusz amplitúdója a fázislöket. A $2000\pi t$ tagból $f_m$.`, [
          ['definíció', R`\Phi_D=0{,}1\ \text{rad}\qquad2\pi f_m=2000\pi\ \Rightarrow\ f_m=1000\ \text{Hz}`, ''],
          ['definíció', R`f_D=\Phi_Df_m=0{,}1\cdot1000=100\ \text{Hz}`, ''],
          ['tétel', R`B_v\approx2(100+1000)=2{,}2\ \text{kHz}`, 'Carson, kicsit több 2 kHz-nél']]),
        S('a) rész', R`A) igaz. B) igaz. C) a Carson-sáv 2,2 kHz, igaz. D) állandó amplitúdójú szinusz, az effektív érték $20/\sqrt2$, igaz.`, []),
        S('b) rész', R`A) hamis, $\Phi_D=0{,}1$. B) $\Phi_D\ll1$, keskenysávú szögmoduláció, a sáv kb. $2f_m=2$ kHz: közelítőleg igaz. C) hamis, $P=10^2/2=50$, a $10/\sqrt2$ az effektív érték. D) hamis, 100 Hz.`, [])],
      ered: [R`\text{a) mind a négy igaz}\qquad\text{b) csak B (közelítőleg)}`],
      chk: [R`A két kérdés együtt mutatja, hogy a 2 kHz a keskenysávú közelítés, a 2,2 kHz a Carson-érték `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['aiD_5_8', 'aiD_5_21'])] },

    { id: 'ai5_15', num: '5.15', title: R`$10\,m(t)\cos(2000\pi t+40)$: négy hamis állítás`, tags: ['beugro', 'sajat'],
      src: R`ALL-IN 111. oldal · aiD_5_9 (4.4.)`,
      task: R`<p>$m(t)$ 300 Hz és 3,4 kHz között, $|m|\le0{,}6$ V. A) Burkolódetektorral demodulálható. B) A sáv 3,1 kHz. C) A vivő 2000 Hz. D) A fázislöket pontosan 40 rad.</p>`,
      ad: [R`$s(t)=10\,m(t)\cos(2000\pi t+40)$: a moduláló jel közvetlenül szorozza a vivőt`],
      ker: [R`melyik állítás igaz`],
      lv: [S('A moduláció fajtája', R`A szorzóban nincs egyenszint ($s=10\,m(t)\cdot\cos$), ezért ez vivő nélküli AM (DSB-SC). A burkolója $|m(t)|$, ami előjelváltáskor „visszahajlik”.`, []),
        S('Az állítások', '', [
          ['ellenőrzés', R`\text{A: }|m|\ne m`, 'hamis, koherens demodulátor kell'],
          ['számérték', R`B_v=2\cdot3{,}4=6{,}8\ \text{kHz}`, 'B hamis: a 3,1 kHz csak az $m$ sávja'],
          ['átalakítás', R`2\pi f_v=2000\pi\ \Rightarrow\ f_v=1000\ \text{Hz}`, 'C hamis'],
          ['ellenőrzés', R`40\ \text{rad}=\text{állandó kezdőfázis}`, 'D hamis: nem változik, nem löket']])],
      ered: [R`\text{egyik sem igaz}`], links: [srcAI(['aiD_5_9'])] },

    { id: 'ai5_16', num: '5.16', title: 'AM/SSB-SC/LSB spektrum', tags: ['vizsga', 'sajat'],
      src: R`ALL-IN 112…113. oldal · aiD_5_19 (a gyűjteményben nincs megoldás)`,
      task: R`<p>A moduláló jel háromszög alakú spektruma 100 Hz-nél a legnagyobb, 500 Hz-nél nulla, egyenszint nincs. $f_v=5$ kHz. Adja meg az AM/SSB-SC/LSB jel spektrumát, javaslatot az előállítására, és az SSB előnyét, hátrányát!</p>`,
      ad: [R`a moduláló spektrum: 0 Hz-en 0, 100 Hz-en a legnagyobb, 500 Hz-re nullára csökken`, R`$f_v=5$ kHz`, R`LSB: csak az alsó oldalsáv marad, vivő nélkül (SC)`],
      ker: [R`az LSB-spektrum, az előállítás, előny és hátrány`],
      lv: [S('LSB spektrum', R`DSB-nél a moduláló spektrum $f_v$ fölé (felső oldalsáv) és tükrözve $f_v$ alá (alsó oldalsáv) kerül. Az LSB csak az alsót tartja meg: egy $f$ frekvenciájú összetevő $f_v-f$-re kerül.`, [
          ['számérték', R`5-0{,}5=4{,}5\ \text{kHz (0)}\qquad5-0{,}1=4{,}9\ \text{kHz (maximum)}\qquad5-0=5\ \text{kHz (0)}`, 'a spektrum 4,5 és 5 kHz között, tükrözve']]),
        S('Előállítás', R`Szorzó (DSB-SC), utána sávszűrő a felső oldalsáv levágására. A két oldalsáv az 5 kHz-nél összeér, de ott a spektrum kicsi (0 Hz-en 0), így a szűrőnek kb. ±100 Hz-en belül kell átmennie áteresztésből zárásba: nagyon meredek szűrő kell. Másik út: fázisos (Hilbert-transzformátoros) módszer.`, []),
        S('Előny, hátrány', R`Előny: fele sávszélesség, és nem megy teljesítmény a vivőre és a második oldalsávra. Hátrány: bonyolultabb előállítás, és a vételhez vivőhelyreállítás (koherens demoduláció) kell.`, [])],
      ered: [R`\text{LSB: }4{,}5\ldots5\ \text{kHz, maximum 4,9 kHz-en}\qquad\text{előny: fele sáv, kisebb teljesítmény}\qquad\text{hátrány: koherens vétel}`], links: [srcAI(['aiD_5_19'])] }
  ]
};
