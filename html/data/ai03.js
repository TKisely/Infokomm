'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f3', num: '3', short: 'Rádió', title: 'Rádiós összeköttetések',
  lead: R`Szabadtéri (egyutas) és sík föld feletti (kétutas) terjedés, antennanyereség és hatásos felület. A kulcskérdés mindig az, hogy a vevő az interferenciazónán belül vagy azon túl van-e.`,
  alap: [
    { id: 'a3-egyutas', badge: 'A1', title: 'Jelölések és egyutas (szabadtéri) terjedés',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$P_T,\ P_R$</td><td>adott és vett teljesítmény</td></tr>
<tr><td>$G_T,\ G_R$</td><td>adó- és vevőantenna-nyereség (dB-ben vagy szorzóként)</td></tr>
<tr><td>$a_\mathrm{sz}$</td><td>szakaszcsillapítás, $10\lg(P_T/P_R)$, az antennákkal együtt</td></tr>
<tr><td>$\lambda$</td><td>hullámhossz, $\lambda=c/f$, $c=3\cdot10^8$ m/s</td></tr>
<tr><td>$r$</td><td>távolság</td></tr>
<tr><td>$h_T,\ h_R$</td><td>az adó- és a vevőantenna magassága a visszaverő sík felett</td></tr>
<tr><td>$\Gamma$</td><td>a talaj reflexiós tényezője (tökéletes tükörnél $-1$)</td></tr>
<tr><td>$A_h$</td><td>hatásos felület</td></tr>
</tbody></table></div>$$a_\mathrm{sz}=20\lg\frac{4\pi r}{\lambda}-G_T^\mathrm{dB}-G_R^\mathrm{dB}$$<p>A teljesítménysűrűség a távolság négyzetével csökken, a vevő ebből a hatásos felületével „merít”: $P_R=S\cdot A_h$.</p>`,
      key: R`Kétszeres távolság: +6 dB csillapítás. Tízszeres: +20 dB.` },
    { id: 'a3-ketutas', badge: 'A2', title: 'Kétutas terjedés sík föld felett',
      html: R`<p>A vevőbe a direkt és a földről visszavert hullám érkezik, az úthossz-különbség kb. $2h_Th_R/r$. Tökéletes tükörnél ($\Gamma=-1$):</p>$$|E_R|=2|E_0|\left|\sin\left(\frac{2\pi h_Th_R}{r\lambda}\right)\right|$$<p>Az argumentum $\pi/2$-nél a legtávolabbi <b>maximum</b> (az interferenciazóna határa): $r=4h_Th_R/\lambda$. Az argumentum $\pi$-nél a legtávolabbi <b>kioltás</b>: $r=2h_Th_R/\lambda$. A zónán túl $\sin x\approx x$, és</p>$$a_\mathrm{sz}=20\lg\frac{r^2}{h_Th_R}-G_T^\mathrm{dB}-G_R^\mathrm{dB}$$<p>Itt a csillapítás nem függ a frekvenciától, és a távolsággal 40 dB/dekád meredeken nő. Ha a föld nem tökéletes tükör, a két hullám nem oltja ki teljesen egymást: $E_{\max}/E_{\min}=(1+|\Gamma|)/(1-|\Gamma|)$.</p>`,
      key: R`Előbb számold ki $4h_Th_R/\lambda$-t, és csak utána válassz képletet.` },
    { id: 'a3-antenna', badge: 'A3', title: 'Antennanyereség és hatásos felület',
      html: R`$$G=\frac{4\pi A_h}{\lambda^2}\qquad A_h=\frac{G\lambda^2}{4\pi}$$<p>Parabolánál a hatásos felület közelítőleg a nyílás területe, $A_h\approx R^2\pi$.</p>` }
  ],
  ex: [
    { id: 'ai3_01', num: '3.1', title: 'Kétutas szakasz, 10 km, 300 MHz (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 1. oldal · ai2020_05_26_Q1`,
      task: R`<p>$h_T=h_R=10$ m, $r=10$ km, $f=300$ MHz, $G_T=5$ dB, $G_R=3$ dB, tökéletes reflexió. a) Szakaszcsillapítás? b) A vevőantenna magasságának változtatásával mekkora $E_{\max}/E_{\min}$, ha $\Gamma=-0{,}8$?</p>`,
      ad: [R`$h_T=h_R=10$ m, $r=10$ km $=10^4$ m`, R`$f=300$ MHz $\Rightarrow\lambda=3\cdot10^8/3\cdot10^8=1$ m`, R`$G_T=5$ dB, $G_R=3$ dB`, R`b) $\Gamma=-0{,}8$`],
      ker: [R`a) $a_\mathrm{sz}$`, R`b) $E_{\max}/E_{\min}$`],
      lv: [S('Melyik zónában van a vevő?', R`A zónahatár (A2):`, [
          ['behelyettesítés', R`\frac{4h_Th_R}{\lambda}=\frac{4\cdot10\cdot10}{1}=400\ \text{m}\ll10\ \text{km}`, 'távoli zóna, a kétutas képlet kell']]),
        S('a) Szakaszcsillapítás', '', [
          ['behelyettesítés', R`a_\mathrm{sz}=20\lg\frac{(10^4)^2}{10\cdot10}-5-3=20\lg10^6-8=120-8=112\ \text{dB}`, '']]),
        S('b) Nem tökéletes reflexió', R`A vevő magasságát változtatva a két hullám hol azonos, hol ellentétes fázisban adódik össze: a térerősség $1+|\Gamma|$ és $1-|\Gamma|$ között változik (a direkt hullámhoz képest).`, [
          ['definíció', R`\frac{E_{\max}}{E_{\min}}=\frac{1+0{,}8}{1-0{,}8}=\frac{1{,}8}{0{,}2}=9`, R`$20\lg9=19$ dB`]])],
      ered: [R`\text{a) }a_\mathrm{sz}=112\ \text{dB}\qquad\text{b) }E_{\max}/E_{\min}=9`], links: [srcAI(['ai2020_05_26_Q1'])] },

    { id: 'ai3_02', num: '3.2', title: 'Mezőkovácsháza: zóna, csillapítás, keverés (Moodle 2020)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 15. oldal · ai2020_06_02_Q7`,
      task: R`<p>Sík vidék, az adótorony 40 m magas (a talaj 96 m-rel a tengerszint felett), $f=83{,}3$ MHz FM, $f_\mathrm{KF}=10{,}7$ MHz. A vevő 650 m-re, 1 m magasan. a) Felső keverésnél az oszcillátor? b) Tükörfrekvencia? c) Túl van-e a vevő az interferenciazónán? d) Szakaszcsillapítás, ha $G_T=20$ dB, $G_R=10$ dB?</p>`,
      ad: [R`$h_T=40$ m (a talaj felett), $h_R=1$ m, $r=650$ m`, R`$f=83{,}3$ MHz $\Rightarrow\lambda=3\cdot10^8/83{,}3\cdot10^6=3{,}6$ m`, R`$f_\mathrm{KF}=10{,}7$ MHz, felső keverés`, R`$G_T=20$ dB, $G_R=10$ dB`],
      ker: [R`a) $f_\text{osc}$`, R`b) $f_t$`, R`c) a vevő helye a zónához képest`, R`d) $a_\mathrm{sz}$`],
      miert: [[R`Miért 40 m és nem 136 m?`, R`A kétutas modellben az antenna magassága a <b>visszaverő sík</b> fölött számít. Sík vidéken a talaj 96 m-es tengerszint feletti magassága érdektelen.`]],
      lv: [S('a), b) Keverés', R`Felső keverésnél az oszcillátor $f_\mathrm{KF}$-fel a vett frekvencia felett van, a tükör még $f_\mathrm{KF}$-fel feljebb.`, [
          ['behelyettesítés', R`f_\mathrm{osc}=83{,}3+10{,}7=94\ \text{MHz}\qquad f_t=94+10{,}7=104{,}7\ \text{MHz}`, '']]),
        S('c) Zóna', R`A zónahatár (A2):`, [
          ['behelyettesítés', R`\frac{4h_Th_R}{\lambda}=\frac{4\cdot40\cdot1}{3{,}6}=44{,}4\ \text{m}`, ''],
          ['ellenőrzés', R`650\ \text{m}>44{,}4\ \text{m}`, 'túl van a zónán']]),
        S('d) Kétutas csillapítás', R`A távoli zónában a kétutas képlet érvényes.`, [
          ['behelyettesítés', R`a_\mathrm{sz}=20\lg\frac{650^2}{40\cdot1}-20-10=20\lg10\,562-30=80{,}5-30=50{,}5\ \text{dB}`, '']])],
      ered: [R`\text{a) }94\ \text{MHz}\qquad\text{b) }104{,}7\ \text{MHz}\qquad\text{c) túl van}\qquad\text{d) }a_\mathrm{sz}\approx50{,}5\ \text{dB}`],
      gy: R`<p>A hallgató a zónahatárt 4265 m-nek kapta, és egyutas képlettel 37 dB-t. A javító a c) és d) részt „elszámolva” jelöléssel nem fogadta el.</p>`,
      fix: R`A zónahatár 44,4 m, a vevő túl van rajta, ezért a kétutas képlet kell: kb. 50,5 dB. A b) indoklása („felső keverésnél messzebb a tükör”) pontatlan, a tükör mindkét keverésnél $2f_\mathrm{KF}$-re van a vett frekvenciától.`,
      links: [srcAI(['ai2020_06_02_Q7'])] },

    { id: 'ai3_03', num: '3.3', title: '900 MHz: ne legyen kioltás 1 km-en túl', tags: ['vizsga'],
      src: R`ALL-IN 99…100. oldal · aiD_3_1`,
      task: R`<p>900 MHz, fix adó ($G_T=10$ dB), mozgó vevő ($G_R=3$ dB, $h_R=1{,}66$ m). a) Mekkora lehet $h_T$, ha 1 km-en túl nincs kioltás? b) Maximális távolság, ha a késleltetés legfeljebb 50 µs? c) Szakaszcsillapítás ekkor? d) Adóteljesítmény, ha a vevő 100 pW alatt nem érzékel?</p>`,
      ad: [R`$f=900$ MHz $\Rightarrow\lambda=1/3$ m`, R`$G_T=10$ dB, $G_R=3$ dB, $h_R=1{,}66$ m`, R`a legtávolabbi kioltás 1 km-en`, R`a terjedési késleltetés legfeljebb 50 µs`, R`a vevő érzékenysége 100 pW`],
      ker: [R`a) $h_T$`, R`b) $r_{\max}$`, R`c) $a_\mathrm{sz}$`, R`d) $P_T$`],
      lv: [S('a) A legtávolabbi kioltás', R`A kioltás ott van, ahol a szinusz argumentuma $\pi$ (A2): $r=2h_Th_R/\lambda$. Ezt egyenlővé tesszük 1 km-rel.`, [
          ['geometria', R`h_T=\frac{r\lambda}{2h_R}=\frac{1000\cdot1/3}{2\cdot1{,}66}=\frac{333{,}3}{3{,}32}\approx100\ \text{m}`, '']]),
        S('b) Legnagyobb távolság', R`A rádióhullám $c$ sebességgel terjed, 50 µs alatt:`, [
          ['behelyettesítés', R`r=c\cdot50\ \mu\text{s}=3\cdot10^8\cdot5\cdot10^{-5}=15\ 000\ \text{m}=15\ \text{km}`, '']]),
        S('c) Csillapítás 15 km-en', R`15 km messze túl van a zónahatáron ($4h_Th_R/\lambda=2$ km), kétutas képlet.`, [
          ['behelyettesítés', R`a_\mathrm{sz}=20\lg\frac{(15\cdot10^3)^2}{100\cdot1{,}66}-10-3=20\lg(1{,}36\cdot10^6)-13=122{,}6-13=109{,}6\ \text{dB}`, '≈ 110 dB']]),
        S('d) Adóteljesítmény', R`$P_T=P_R\cdot10^{a_\mathrm{sz}/10}$, kerekítve 110 dB-lel.`, [
          ['számérték', R`P_T=100\ \text{pW}\cdot10^{11}=10^{-10}\cdot10^{11}=10\ \text{W}`, '']])],
      ered: [R`\text{a) }h_T\approx100\ \text{m}\qquad\text{b) }r=15\ \text{km}\qquad\text{c) }a_\mathrm{sz}\approx110\ \text{dB}\qquad\text{d) }P_T\approx10\ \text{W}`],
      hib: [R`A legtávolabbi kioltást a $4h_Th_R/\lambda$ képlettel keresni: az a legtávolabbi maximum.`], links: [srcAI(['aiD_3_1'])] },

    { id: 'ai3_04', num: '3.4', title: '450 MHz-es mobilrendszer (hivatalos megoldás)', tags: ['vizsga'],
      src: R`ALL-IN 101. oldal · aiD_3_10`,
      task: R`<p>450 MHz, bázisállomás-antenna 50 m, vevők 1,5 m. a) Hol az interferenciazóna határa? b) A vevő magasságát változtatva mekkora $E_{\max}/E_{\min}$, ha $\Gamma=-1$, illetve $-0{,}9$? c) Kinek pozitív az antennanyeresége? d) Csillapítás a zóna határán ($\Gamma=-1$, nyereségek összege 6 dB)? e) 10 km-en mennyit változik a vett teljesítmény, a térerősség és a csillapítás, ha 3 m magasról hívunk?</p>`,
      ad: [R`$f=450$ MHz $\Rightarrow\lambda=2/3$ m`, R`$h_T=50$ m, $h_R=1{,}5$ m`, R`d) $G_T+G_R=6$ dB`],
      ker: [R`a) zónahatár`, R`b) $E_{\max}/E_{\min}$`, R`c) antennanyereség`, R`d) $a_\mathrm{sz}$ a határon`, R`e) változások dB-ben`],
      lv: [S('a) Zónahatár', '', [
          ['behelyettesítés', R`\frac{4h_Th_R}{\lambda}=\frac{4\cdot50\cdot1{,}5}{2/3}=450\ \text{m}`, '']]),
        S('b) Arány', R`A2 szerint, $\Gamma=-1$-nél a minimum 0.`, [
          ['definíció', R`\Gamma=-1:\ \frac{2}{0}=\infty\qquad\Gamma=-0{,}9:\ \frac{1{,}9}{0{,}1}=19`, '']]),
        S('c) Antennanyereség', R`A bázisállomás antennája irányított (a vízszintes sík felé koncentrál), nyeresége pozitív. A mobilkészülék antennája kicsi, közel körsugárzó, nyeresége 0 dB körüli, akár negatív.`, []),
        S('d) Csillapítás a határon', R`A határon a szinusz 1, a térerősség a szabadtéri kétszerese: a teljesítmény 4-szeres, ez 6 dB-lel kisebb csillapítás.`, [
          ['behelyettesítés', R`20\lg\frac{4\pi\cdot450}{2/3}=20\lg8482=78{,}57\ \text{dB}`, 'szabadtéri alapcsillapítás'],
          ['számérték', R`a_\mathrm{sz}=78{,}57-6-6=66{,}57\ \text{dB}`, 'kétutas nyereség és antennák']]),
        S('e) Kétszeres vevőmagasság 10 km-en', R`10 km a távoli zónában van: a térerősség $h_R$-rel, a teljesítmény $h_R^2$-tel arányos.`, [
          ['számérték', R`P:\ 10\lg4=+6\ \text{dB}\qquad E:\ 20\lg2=+6\ \text{dB}\qquad a_\mathrm{sz}:\ -6\ \text{dB}`, '']])],
      ered: [R`\text{a) }450\ \text{m}\quad\text{b) }\infty\ \text{és}\ 19\quad\text{c) a bázisállomásé}\quad\text{d) }66{,}57\ \text{dB}\quad\text{e) }+6,\ +6,\ -6\ \text{dB}`], links: [srcAI(['aiD_3_10'])] },

    { id: 'ai3_05', num: '3.5', title: 'Felére csökkentett vevőantenna a távoli zónában', tags: ['vizsga'],
      src: R`ALL-IN 18. oldal · ai2016_01_05_2 (emlékezetből leírt feladat)`,
      task: R`<p>Kétutas terjedésnél egy adott távolságban a vett jel kétszerese volt a szükségesnek. Fogható-e még a jel, ha $h_R$-t felére csökkentjük?</p>`,
      ad: [R`a vett teljesítmény a szükséges kétszerese: 3 dB tartalék`, R`a vevő a távoli zónában van`],
      ker: [R`fogható-e $h_R/2$-vel`],
      lv: [S('Mennyit ront a felezés?', R`A távoli zónában $a_\mathrm{sz}=20\lg(r^2/(h_Th_R))-G_T-G_R$, tehát $h_R$ felezése $20\lg2$-vel növeli a csillapítást.`, [
          ['számérték', R`\Delta a=20\lg2=6\ \text{dB}`, ''],
          ['ellenőrzés', R`6\ \text{dB}>10\lg2=3\ \text{dB}`, 'a tartalék kevés']])],
      ered: [R`\text{nem fogható: a vett teljesítmény a szükséges fele lesz}`], chk: [R`A feladat pontos adatai hiányoznak, a hallgatói gondolatmenet helyes.`], links: [srcAI(['ai2016_01_05_2'])] },

    { id: 'ai3_06', num: '3.6', title: 'Hatásos felület és parabolanyereség', tags: ['beugro'],
      src: R`ALL-IN 62., 102. oldal · ai2014_12_22_1, aiD_3_11`,
      task: R`<p>a) Egy 30 MHz-es antenna nyeresége $10\lg(4\pi)=11$ dB. Mekkora a hullámhossz és a hatásos felület? b) Egy 1,5 GHz-es parabola apertúrájának sugara 1 m. Mekkora a nyeresége dB-ben ($\pi^2\approx10$)?</p>`,
      ad: [R`a) $f=30$ MHz, $G=4\pi$`, R`b) $f=1{,}5$ GHz, $R=1$ m`],
      ker: [R`a) $\lambda$, $A_h$`, R`b) $G$ dB-ben`],
      lv: [S('a)', R`$\lambda=c/f$, majd A3.`, [
          ['behelyettesítés', R`\lambda=\frac{3\cdot10^8}{3\cdot10^7}=10\ \text{m}`, ''],
          ['behelyettesítés', R`A_h=\frac{G\lambda^2}{4\pi}=\frac{4\pi\cdot10^2}{4\pi}=100\ \text{m}^2`, '']]),
        S('b)', R`$\lambda=3\cdot10^8/1{,}5\cdot10^9=0{,}2$ m. A hatásos felület a nyílás területe, $\pi R^2=\pi$ m².`, [
          ['behelyettesítés', R`G=\frac{4\pi\cdot\pi R^2}{\lambda^2}=\frac{4\pi^2}{0{,}04}\approx\frac{40}{0{,}04}=1000`, R`$\pi^2\approx10$`],
          ['átalakítás', R`10\lg1000=30\ \text{dB}`, '']])],
      ered: [R`\text{a) }\lambda=10\ \text{m},\ A_h=100\ \text{m}^2\qquad\text{b) }G\approx30\ \text{dB}`], links: [srcAI(['ai2014_12_22_1', 'aiD_3_11'])] },

    { id: 'ai3_07', num: '3.7', title: 'Kétutas modell műhold és földi antenna között?', tags: ['beugro'],
      src: R`ALL-IN 101. oldal · aiD_3_5`,
      task: R`<p>Bátran használhatjuk-e a kétutas terjedésnél tanultakat egy műhold és egy földi antenna között?</p>`,
      ad: [R`a kétutas modell feltételei: két, közel vízszintesen haladó hullám (direkt és talajról visszavert), $r\gg h_T,h_R$`],
      ker: [R`alkalmazható-e`],
      lv: [S('Indoklás', R`Nem. A földi antenna erősen irányított és felfelé néz: a talajról visszavert hullám a főnyalábon kívülről érkezik, elhanyagolható. A modell geometriai feltétele ($r\gg h$, közel vízszintes sugarak) sem teljesül. Szabadtéri (egyutas) terjedéssel kell számolni.`, [])],
      ered: [R`\text{nem, egyutas (szabadtéri) modell kell}`],
      gy: R`<p>A gyűjtemény szerint „a kérdés hülye, nem definiálták a bátran szót”, és a reflexió nélküli határesetre utal. Ez a lényeget nem mondja ki.</p>`,
      links: [srcAI(['aiD_3_5'])] }
  ]
};
