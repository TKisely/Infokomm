'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f5', num: '5', short: 'Rádió', title: 'Rádiós összeköttetések',
  lead: R`Teljesítménymérleg dB-ben, kétutas terjedés zónahatára és kioltása, antennanyereség és hatásos felület, GPS-összeköttetés.`,
  alap: [
    { id: 'b5-jel', badge: 'A1', title: 'Jelölések',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th><th>Egység</th></tr></thead><tbody>
<tr><td>$P_T,\ P_R$</td><td>az adóantennába juttatott, illetve a vevőantenna által leadott teljesítmény</td><td>W vagy dBW</td></tr>
<tr><td>$G_T,\ G_R$</td><td>az adó- és a vevőantenna nyeresége (az izotróp antennához képest)</td><td>dB vagy szorzó</td></tr>
<tr><td>$a_\mathrm{sz}$</td><td>szakaszcsillapítás: $P_T/P_R$ dB-ben, az antennanyereségekkel együtt</td><td>dB</td></tr>
<tr><td>$\lambda$</td><td>hullámhossz, $\lambda=c/f$, $c=3\cdot10^8$ m/s</td><td>m</td></tr>
<tr><td>$r$</td><td>az adó és a vevő távolsága</td><td>m</td></tr>
<tr><td>$h_T,\ h_R$</td><td>az adó- és a vevőantenna magassága a sík föld felett</td><td>m</td></tr>
<tr><td>$A_h$</td><td>hatásos felület: a vett teljesítmény osztva a beeső teljesítménysűrűséggel</td><td>m²</td></tr>
</tbody></table></div><p>Teljesítménymérleg dB-ben: $P_R=P_T-a_\mathrm{sz}$. A dBW a wattban mért teljesítmény $10\lg$-e: $20$ dBW $=100$ W, $-65$ dBW $=10^{-6{,}5}$ W.</p>` },
    { id: 'b5-radio', badge: 'A2', title: 'Képletek egy helyen',
      html: R`<p>Szabadtéri (egyutas) terjedés és kétutas terjedés sík föld felett, távoli zónában:</p>$$a_\mathrm{sz}=20\lg\frac{4\pi r}{\lambda}-G_T-G_R\qquad a_\mathrm{sz}^\text{kétutas}=20\lg\frac{r^2}{h_Th_R}-G_T-G_R$$<p>Antennanyereség és hatásos felület kapcsolata (parabolánál $A_h\approx$ a nyílás felülete):</p>$$A_h=\frac{G\lambda^2}{4\pi}$$<p>Kétutas terjedésnél a direkt és a földről visszavert hullám összege: $|E_R|=2|E_0|\left|\sin\frac{2\pi h_Th_R}{r\lambda}\right|$. A <b>zónahatár</b> (legtávolabbi maximum): az argumentum $\pi/2$, ebből $r=4h_Th_R/\lambda$. Ezen túl (távoli zóna) a térerősség monoton csökken. A <b>legtávolabbi kioltás</b>: az argumentum $\pi$, $r=2h_Th_R/\lambda$.</p>` }
  ],
  ex: [
    { id: 'o5_01', num: '5.1', title: '100 MHz, 85 dB csillapítás: vett teljesítmény', tags: ['vizsga'],
      src: R`5-ösöm 14. oldal · 5o_14_1`,
      task: R`<p>Szabadtéri összeköttetés 100 MHz-en, 25 kHz-es mérőjel, 75 kHz-es löket. Az adóantennába 20 dBW jut, a teljes szakaszcsillapítás 85 dB. a) A vett teljesítmény? b) A sávszélesség analóg FM-nél?</p>`,
      ad: [R`$P_T=20$ dBW $=100$ W: az adóantennába jutó teljesítmény`, R`$a_\mathrm{sz}=85$ dB: a teljes csillapítás (antennákkal együtt)`, R`$f_m=25$ kHz: a mérőjel (moduláló jel) frekvenciája`, R`$f_D=75$ kHz: frekvencialöket`],
      ker: [R`a) $P_R$: vett teljesítmény`, R`b) $B_v$: az FM-jel sávszélessége`],
      lv: [S('a) Vett teljesítmény', R`dB-ben a mérleg kivonás (A1).`, [
          ['behelyettesítés', R`P_R=P_T-a_\mathrm{sz}=20-85=-65\ \text{dBW}`, ''],
          ['átalakítás', R`P_R=10^{-65/10}\ \text{W}=10^{-6{,}5}\ \text{W}=3{,}16\cdot10^{-7}\ \text{W}\approx0{,}32\ \mu\text{W}`, '']]),
        S('b) Sávszélesség', R`Szinuszos mérőjellel modulált FM-jel sávja a Carson-szabállyal becsülhető.`, [
          ['tétel', R`B_v\approx2(f_D+f_m)=2(75+25)=200\ \text{kHz}`, R`a fázislöket $\Phi_D=75/25=3$ rad`]])],
      ered: [R`\text{a) }P_R=-65\ \text{dBW}\approx0{,}32\ \mu\text{W}\qquad\text{b) }B_v\approx200\ \text{kHz}`],
      chk: [R`A kézírás „(1/3)·10⁶”-t ír, a kitevő előjele hibás (helyesen $10^{-6}$ nagyságrend). A b) a gyűjteményben nincs kidolgozva.`], links: [src5(['5o_14_1'])] },

    { id: 'o5_02', num: '5.2', title: 'Rádióamatőr űrállomás 350 km-en', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 14. oldal · 5o_14_2`,
      task: R`<p>10 GHz, az űrállomás 350 km magasan 2 kW-tal sugároz, a földi parabola átmérője 1 m, a vevő érzékenysége 40 pW. a) Legalább mekkora az űrállomás antennájának hatásos felülete? b) Beszélgethetnek-e egyszerre?</p>`,
      ad: [R`$f=10$ GHz $\Rightarrow\lambda=3\cdot10^8/10^{10}=0{,}03$ m`, R`$r=350$ km: a távolság (az állomás a vevő felett)`, R`$P_T=2$ kW: adóteljesítmény`, R`$d=1$ m: a földi parabola átmérője, sugara 0,5 m`, R`$P_{R,\min}=40$ pW $=4\cdot10^{-11}$ W: a vevő érzékenysége`],
      ker: [R`a) $A_{h,T}$: az űrállomás antennájának hatásos felülete (legalább)`, R`b) beszélgethetnek-e egyszerre`],
      lv: [S('A megengedett csillapítás', R`A vett teljesítmény nem lehet kisebb az érzékenységnél, így a csillapítás legfeljebb $P_T/P_{R,\min}$.`, [
          ['behelyettesítés', R`a_\text{max}=10\lg\frac{2000}{4\cdot10^{-11}}=10\lg(5\cdot10^{13})=137\ \text{dB}`, '']]),
        S('A földi parabola nyeresége', R`A hatásos felületet a nyílás felületével közelítjük, és a $G=4\pi A_h/\lambda^2$ összefüggést használjuk (A2).`, [
          ['behelyettesítés', R`A_{h,R}=\pi\cdot0{,}5^2=0{,}785\ \text{m}^2`, ''],
          ['behelyettesítés', R`G_R=\frac{4\pi\cdot0{,}785}{0{,}03^2}=1{,}1\cdot10^4\ \Rightarrow\ 10\lg(1{,}1\cdot10^4)=40{,}4\ \text{dB}`, '']]),
        S('A szabadtéri alapcsillapítás', R`Az antennanyereségek nélküli tag, $r=3{,}5\cdot10^5$ m.`, [
          ['behelyettesítés', R`20\lg\frac{4\pi\cdot3{,}5\cdot10^5}{0{,}03}=20\lg(1{,}47\cdot10^8)=163{,}3\ \text{dB}`, '']]),
        S('a) Az adóantenna', R`$a_\mathrm{sz}=163{,}3-G_T-40{,}4\le137$, ebből $G_T$, majd a hatásos felület.`, [
          ['átalakítás', R`G_T\ge163{,}3-40{,}4-137=-14{,}1\ \text{dB}\ \Rightarrow\ G_T\ge0{,}039`, ''],
          ['behelyettesítés', R`A_{h,T}=\frac{G_T\lambda^2}{4\pi}=\frac{0{,}039\cdot0{,}03^2}{4\pi}=2{,}8\cdot10^{-6}\ \text{m}^2`, 'gyakorlatilag bármilyen antenna elég']]),
        S('b) Beszélgetés', R`A jel terjedési ideje $r/c=3{,}5\cdot10^5/3\cdot10^8=1{,}2$ ms, ez a beszélgetést nem zavarja. Egyszerre beszélni (duplex) csak két külön frekvencián lehet, egy frekvencián (szimplex) felváltva.`, [])],
      ered: [R`\text{a) }G_T\ge-14\ \text{dB},\ A_{h,T}\ge2{,}8\cdot10^{-6}\ \text{m}^2\qquad\text{b) 1,2 ms késés, duplexhez két frekvencia kell}`],
      gy: R`<p>A kézírás a 40 pW-ot $4\cdot10^{-12}$ W-nak veszi, így 147 dB-es megengedett csillapítást kap.</p>`,
      fix: R`$40\ \text{pW}=4\cdot10^{-11}$ W, a megengedett csillapítás 137 dB. A feladat adatai `+'`[ELLENŐRIZENDŐ]`'+R`: velük a „legalább mekkora” kérdés triviális.`, links: [src5(['5o_14_2'])] },

    { id: 'o5_03', num: '5.3', title: '900 MHz: zónahatár 1 km-en, csillapítás 15 km-en', tags: ['vizsga'],
      src: R`5-ösöm 14. oldal · 5o_14_3`,
      task: R`<p>$G_T=13$ dB, $G_R=3$ dB, $h_R=1{,}66$ m (lg 830 ≈ 3, lg 225 ≈ 2,35). a) Mekkora $h_T$, ha az interferenciazóna határa 1 km-en van? b) A szakaszcsillapítás 15 km-en?</p>`,
      ad: [R`$f=900$ MHz $\Rightarrow\lambda=3\cdot10^8/9\cdot10^8=1/3$ m`, R`$G_T=13$ dB, $G_R=3$ dB: antennanyereségek`, R`$h_R=1{,}66$ m: a vevőantenna magassága`, R`a zónahatár $r_0=1$ km-en`],
      ker: [R`a) $h_T$: az adóantenna magassága`, R`b) $a_\mathrm{sz}$ 15 km-en`],
      lv: [S('a) Az adóantenna magassága', R`A zónahatár (a legtávolabbi maximum) helye $r_0=4h_Th_R/\lambda$ (A2). Ebből kifejezzük $h_T$-t.`, [
          ['geometria', R`h_T=\frac{r_0\lambda}{4h_R}=\frac{1000\cdot1/3}{4\cdot1{,}66}=\frac{333{,}3}{6{,}64}=50\ \text{m}`, '']]),
        S('b) Melyik képlet?', R`15 km jóval a zónahatáron (1 km) túl van, a távoli zónában a kétutas képlet érvényes.`, [
          ['tétel', R`a_\mathrm{sz}=20\lg\frac{r^2}{h_Th_R}-G_T-G_R`, '']]),
        S('b) Behelyettesítés', R`$r^2=(15\cdot10^3)^2=2{,}25\cdot10^8$, $h_Th_R=50\cdot1{,}66=83{,}3$. A lg-et tényezőkre bontjuk, a megadott logaritmusokkal.`, [
          ['átalakítás', R`20\lg(2{,}25\cdot10^8)=20(\lg225+6)=20\cdot8{,}35=167`, R`$\lg225\approx2{,}35$`],
          ['átalakítás', R`20\lg83{,}3=20(\lg833-1)\approx20\cdot1{,}92=38{,}4`, ''],
          ['számérték', R`a_\mathrm{sz}=167-38{,}4-13-3=112{,}6\ \text{dB}`, '']])],
      ered: [R`\text{a) }h_T=50\ \text{m}\qquad\text{b) }a_\mathrm{sz}\approx112{,}6\ \text{dB}`],
      chk: [R`A kézírás $20\lg83{,}3$ helyett 40-et ír (a „lg 830 ≈ 3” durva tippjével), így 111 dB-t kap. Pontosan $\lg830=2{,}92$.`], links: [src5(['5o_14_3'])] },

    { id: 'o5_04', num: '5.4', title: 'A zóna határán felezett és duplázott antennamagasság', tags: ['vizsga'],
      src: R`5-ösöm 15. oldal · 5o_15_1`,
      task: R`<p>900 MHz, a vevőantenna (5 m) az interferenciazóna határán van. Hány dB-t változik a teljesítmény, ha a magasságot a) felére csökkentjük, b) kétszeresére növeljük?</p>`,
      ad: [R`$h_R=5$ m, a vevő a zónahatáron van`],
      ker: [R`a), b) a vett teljesítmény változása dB-ben`],
      lv: [S('A kiindulás', R`A kétutas térerősség $|E_R|=2|E_0||\sin x|$, ahol $x=2\pi h_Th_R/(r\lambda)$ (A2). A zónahatáron $x=\pi/2$, ott $|\sin x|=1$, a térerősség a legnagyobb. Az $x$ egyenesen arányos $h_R$-rel.`, [
          ['definíció', R`x_0=\frac\pi2\qquad|E_R|=2|E_0|`, '']]),
        S('a) Felezett magasság', R`$h_R$ felére csökken, ezért $x$ is.`, [
          ['behelyettesítés', R`x=\frac\pi4\ \Rightarrow\ |E_R|=2|E_0|\sin\frac\pi4=2|E_0|\cdot0{,}707`, ''],
          ['átalakítás', R`\frac{P}{P_0}=0{,}707^2=0{,}5\ \Rightarrow\ 10\lg0{,}5=-3\ \text{dB}`, 'a teljesítmény a térerősség négyzetével arányos']]),
        S('b) Duplázott magasság', R`$h_R$ kétszeres, ezért $x=\pi$.`, [
          ['behelyettesítés', R`|E_R|=2|E_0|\sin\pi=0\ \Rightarrow\ 10\lg0=-\infty\ \text{dB}`, 'kioltás: a két hullám ellenfázisban']])],
      ered: [R`\text{a) }-3\ \text{dB}\qquad\text{b) }-\infty\ \text{dB (kioltás)}`], links: [src5(['5o_15_1'])] },

    { id: 'o5_05', num: '5.5', title: 'Rövid botantenna 600 kHz-en', tags: ['beugro'],
      src: R`5-ösöm 15. oldal · 5o_15_2`,
      task: R`<p>A rövid függőleges botantenna nyeresége sík föld felett 4,76 dB (3). Mekkora a hatásos felülete 600 kHz-en ($4\pi\approx12{,}5$)? Mit jelent, hogy $G=3$?</p>`,
      ad: [R`$G=3$ (4,76 dB, mert $10\lg3=4{,}77$)`, R`$f=600$ kHz`],
      ker: [R`$A_h$: hatásos felület`, R`a $G=3$ jelentése`],
      lv: [S('Hullámhossz', '', [['definíció', R`\lambda=\frac{c}{f}=\frac{3\cdot10^8}{6\cdot10^5}=500\ \text{m}`, '']]),
        S('Hatásos felület', R`A nyereség és a hatásos felület kapcsolata (A2), a megadott $4\pi\approx12{,}5$-del.`, [
          ['behelyettesítés', R`A_h=\frac{G\lambda^2}{4\pi}=\frac{3\cdot500^2}{12{,}5}=\frac{750\,000}{12{,}5}=60\,000\ \text{m}^2`, 'egy 245 m oldalú négyzet']]),
        S('Mit jelent G = 3?', R`A nyereség a főirányban mért teljesítménysűrűség és egy ugyanakkora teljesítményű izotróp antenna teljesítménysűrűségének aránya: $G=S_{\max}/S_0$. A főirányban háromszor akkora a sűrűség. Vételnél: háromszor annyi teljesítményt vesz, mint az izotróp antenna.`, [])],
      ered: [R`A_h=60\,000\ \text{m}^2\qquad G=3:\ \text{a főirányban háromszoros teljesítménysűrűség az izotróphoz képest}`],
      chk: [R`A hatásos felület nem a fizikai méret: egy rövid bot is nagy felületről „gyűjt” teljesítményt, mert a hullámhossz nagy.`], links: [src5(['5o_15_2'])] },

    { id: 'o5_06', num: '5.6', title: 'GPS: csillapítás, tartalék, antennaátmérő', tags: ['vizsga'],
      src: R`5-ösöm 15…16. oldal · 5o_15_3, 5o_16_1 (gépelt megoldás)`,
      task: R`<p>20 000 km, 1500 MHz, 25 W, $G_T=13$ dB, $G_R=3$ dB, a vevő érzékenysége −160 dBW. a) Járulékos csillapítás-tartalék? b) A műhold parabolájának átmérője? c), d) Miért nem nagyobb nyereségű a műhold és a vevő antennája?</p>`,
      ad: [R`$r=2\cdot10^7$ m: a műhold távolsága`, R`$f=1500$ MHz $\Rightarrow\lambda=3\cdot10^8/1{,}5\cdot10^9=0{,}2$ m`, R`$P_T=25$ W $\Rightarrow10\lg25=14$ dBW`, R`$G_T=13$ dB, $G_R=3$ dB`, R`$P_{R,\min}=-160$ dBW: a vevő érzékenysége`],
      ker: [R`a) $a_\mathrm{sz}$ és a tartalék (mennyi járulékos csillapítás férhet még bele)`, R`b) $d$: a műholdantenna átmérője`, R`c), d) indoklás`],
      lv: [S('a) Szakaszcsillapítás', R`Szabadtéri terjedés (A2).`, [
          ['behelyettesítés', R`20\lg\frac{4\pi\cdot2\cdot10^7}{0{,}2}=20\lg(1{,}26\cdot10^9)=182\ \text{dB}`, ''],
          ['számérték', R`a_\mathrm{sz}=182-13-3=166\ \text{dB}`, '']]),
        S('a) Tartalék', R`A vett teljesítményt összevetjük az érzékenységgel.`, [
          ['behelyettesítés', R`P_R=14-166=-152\ \text{dBW}`, ''],
          ['számérték', R`-152-(-160)=8\ \text{dB}`, 'ennyi járulékos csillapítás (eső, lomb, épület) fér még bele']]),
        S('b) Az antenna átmérője', R`A 13 dB-es nyereségből a hatásos felület, abból kör alakú nyílást feltételezve az átmérő.`, [
          ['átalakítás', R`G_T=10^{1{,}3}=20`, ''],
          ['behelyettesítés', R`A_h=\frac{G_T\lambda^2}{4\pi}=\frac{20\cdot0{,}2^2}{4\pi}=0{,}0635\ \text{m}^2`, ''],
          ['geometria', R`d=2\sqrt{\frac{A_h}{\pi}}=2\sqrt{0{,}0202}=0{,}284\ \text{m}`, R`$A_h=\pi(d/2)^2$`]]),
        S('c) Miért nem nagyobb a műhold nyeresége?', R`A nagyobb nyereségű antenna keskenyebb nyalábot ad: a műholdnak a Föld egész látható felét kell besugároznia. Nagyobb nyereséggel kisebb területet fedne le, több műhold kellene.`, []),
        S('d) Miért nem nagyobb a vevőé?', R`A vevő nem tudja, merre van a műhold, és egyszerre több (legalább négy) műholdat kell vennie különböző irányokból. Ehhez közel körsugárzó antenna kell.`, [])],
      ered: [R`\text{a) }a_\mathrm{sz}=166\ \text{dB},\ \text{tartalék }8\ \text{dB}\qquad\text{b) }d\approx28\ \text{cm}`], links: [src5(['5o_15_3', '5o_16_1'])] }
  ]
};
