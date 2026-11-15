'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f2', num: '2', short: 'QAM, PSK', title: 'QAM és PSK',
  lead: R`DVB-C bitsebesség, PSK és QAM hibatűrés, és a tribites QAM-feladat a megfigyelt pontokkal. Minden lépésnél ott van, melyik pont és melyik döntési határ számít, és miért.`,
  alap: [
    { id: 'b2-jel', badge: 'A1', title: 'Jelölések ebben a fejezetben',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th><th>Egység</th></tr></thead><tbody>
<tr><td>$M$</td><td>a szimbólumok (konstellációs pontok) száma</td><td>1</td></tr>
<tr><td>$\log_2M$</td><td>egy szimbólum által vitt bitek száma</td><td>bit</td></tr>
<tr><td>$T$</td><td>jelzési idő, egy szimbólum hossza</td><td>s</td></tr>
<tr><td>$R_s=1/T$</td><td>szimbólumsebesség</td><td>Bd</td></tr>
<tr><td>$v$</td><td>bitsebesség, $v=R_s\log_2M$</td><td>bit/s</td></tr>
<tr><td>$\alpha$</td><td>az emelt koszinuszos spektrum lekerekítési tényezője</td><td>1 vagy %</td></tr>
<tr><td>$B$</td><td>a modulált (vivőfrekvenciás) jel sávszélessége</td><td>Hz</td></tr>
<tr><td>$\varphi$</td><td>fázishiba: ennyivel fordul el a vett konstelláció</td><td>fok</td></tr>
</tbody></table></div>` },
    { id: 'b2-qam', badge: 'A2', title: 'Sávszélesség és hibatűrés',
      html: R`<p><b>Sávszélesség.</b> Alapsávban az emelt koszinuszos elemi jel $(1+\alpha)/(2T)$-ig terjed. A vivőre ültetve mindkét oldalsáv megjelenik, ezért a vivőfrekvenciás sáv kétszerese: $B=(1+\alpha)/T$.</p><p><b>Erősítés- és csillapítástűrés.</b> Ha a csatorna minden pontot ugyanazzal a $k$ tényezővel szoroz, egy pont addig dönthető jól, amíg a saját döntési tartományában marad. Négyzetrácsnál ($\pm1,\pm3,\ldots$) a határok félúton vannak ($0,\pm2,\ldots$). Csillapításnál a legkülső szint esik elsőként a belső határra, erősítésnél a legkülső előtti szint lépi át a következő határt.</p><p><b>Fázistűrés.</b> Elforgatásnál a <b>sarokpont</b> lép ki elsőként, mert az van a legmesszebb: $L$ szintű sarokpontra $L\sqrt2\cos(45°+\varphi)=L-1$ a határeset. $M$-PSK-nál a szomszédos pontok $360°/M$-re vannak, a határ félúton, így a fázistűrés $180°/M$, az amplitúdótűrés elméletben végtelen (csak a szög dönt).</p>`,
      key: R`Fázistűrés négyzetrácsos QAM-nél: 16-QAM 16,9°, 36-QAM 10,6°, 64-QAM 7,7°.` }
  ],
  ex: [
    { id: 'o2_01', num: '2.1', title: 'DVB-C 256-QAM-mel', tags: ['vizsga'],
      src: R`5-ösöm 6. oldal · 5o_06_1`,
      task: R`<p>DVB-C-ben 64-QAM helyett 256-QAM, 8 MHz-es raszter, 33,33%-os emelt koszinusz. a) Szimbólum- és bitsebesség, hány 1,5 Mbit/s-os csatorna fér el? b) A 6 Mbit/s-os kódoló előnye, hátránya? c) Az 1024-QAM előnye, hátránya?</p>`,
      ad: [R`$B=8$ MHz: a rendelkezésre álló sáv (raszter)`, R`$\alpha=1/3$: lekerekítés (33,33%)`, R`$M=256$: a QAM pontjainak száma`, R`1,5 Mbit/s: egy tévécsatorna kódolt bitsebessége`],
      ker: [R`a) $R_s$ szimbólumsebesség, $v$ bitsebesség, a csatornák száma`, R`b), c) előnyök és hátrányok`],
      lv: [S('a) Szimbólumsebesség', R`A vivőfrekvenciás emelt koszinuszos jel sávja $B=(1+\alpha)/T$ (A2). Ezt egyenlővé tesszük a 8 MHz-cel, és kifejezzük $1/T$-t.`, [
          ['tétel', R`B=\frac{1+\alpha}{T}\ \Rightarrow\ \frac1T=\frac{B}{1+\alpha}=\frac{8\ \text{MHz}}{4/3}=6\ \text{MBd}`, R`$1+\alpha=1+1/3=4/3$`]]),
        S('a) Bitsebesség és csatornaszám', R`Egy 256-QAM szimbólum $\log_2256=8$ bitet visz.`, [
          ['számérték', R`v=\frac1T\log_2M=6\cdot8=48\ \text{Mbit/s}`, ''],
          ['számérték', R`\frac{48\ \text{Mbit/s}}{1{,}5\ \text{Mbit/s}}=32\ \text{csatorna}`, '']]),
        S('b) 6 Mbit/s-os kódoló', R`Négyszer annyi bit jut egy műsorra, ezért jobb a kép (akár HD). Cserébe csak $48/6=8$ csatorna fér el a 32 helyett.`, []),
        S('c) 1024-QAM', R`Szimbólumonként $\log_21024=10$ bit a 8 helyett, így ugyanabban a sávban $6\cdot10=60$ Mbit/s (40 csatorna). A pontok azonos csúcsteljesítménynél sűrűbbek, ezért kisebb a zaj- és a fázistűrés (kb. 1,8°), több teljesítmény vagy jobb csatorna kell.`, [
          ['számérték', R`6\ \text{MBd}\cdot10=60\ \text{Mbit/s}`, ''] ])],
      ered: [R`\text{a) }6\ \text{MBd},\ 48\ \text{Mbit/s},\ 32\ \text{csatorna}\qquad\text{b) jobb kép, 8 csatorna}\qquad\text{c) 60 Mbit/s, de kisebb zajtűrés}`], links: [src5(['5o_06_1'])] },

    { id: 'o2_02', num: '2.2', title: '36-QAM négyzetrácson', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 7. oldal · 5o_07_1`,
      task: R`<p>36-féle szimbólum, négyzetrács. a) Konstelláció. b) A négyzetrács előnye? c) Hány százalék erősítés- és csillapításhibát visel el zajmentesen? d) Mi lenne, ha a sarokpontokat a tengelyek mellé tennénk?</p>`,
      ad: [R`$M=36$ pont négyzetrácson: $\sqrt{36}=6$ szint tengelyenként`],
      ker: [R`a) a pontok koordinátái`, R`b) a négyzetrács előnye`, R`c) a megengedett $k$ erősítés, illetve csillapítás, és a fázistűrés $\varphi$`, R`d) a sarokpontok áthelyezésének hatása`],
      lv: [S('a) Konstelláció', R`Tengelyenként 6 szint, egyenlő (2 egységnyi) közökkel, a nullára szimmetrikusan. A döntési határok a szintek között félúton vannak.`, [
          ['definíció', R`\text{szintek: }\pm1,\ \pm3,\ \pm5\qquad\text{határok: }0,\ \pm2,\ \pm4`, R`$6\times6=36$ pont`]]),
        S('b) A négyzetrács előnye', R`A két koordinátáról (a két kvadratúra-csatornáról) egymástól függetlenül lehet dönteni, egyszerű küszöbökkel: a 36-QAM döntés két hatszintű PAM-döntésre bomlik.`, []),
        S('c) Csillapítástűrés', R`A csatorna minden koordinátát $k<1$-gyel szoroz. Elsőként az 5-ös szint ér le a 4-es határra (a 3-as a 2-esre csak $k=2/3$-nál, az a lazább).`, [
          ['behelyettesítés', R`5k>4\ \Rightarrow\ k>\frac45=0{,}8`, R`azaz legfeljebb $-20\%$`]]),
        S('c) Erősítéstűrés', R`Most $k>1$. Az 5-ös szintnek nincs felső határa, a 3-as szint lépi át elsőként a 4-es határt (az 1-es a 2-est csak $k=2$-nél).`, [
          ['behelyettesítés', R`3k<4\ \Rightarrow\ k<\frac43=1{,}33`, R`azaz legfeljebb $+33\%$`]]),
        S('c) Fázistűrés', R`Elforgatásnál a sarokpont, az $(5,5)$ mozdul el a legtöbbet. A szöge 45°, a távolsága $5\sqrt2$. Ha $\varphi$-vel elfordul, az egyik koordinátája $5\sqrt2\cos(45°+\varphi)$ lesz, ennek a 4-es határ felett kell maradnia.`, [
          ['geometria', R`5\sqrt2\cos(45°+\varphi)>4\ \Rightarrow\ \cos(45°+\varphi)>\frac{4}{5\sqrt2}=0{,}566`, ''],
          ['számérték', R`45°+\varphi<55{,}6°\ \Rightarrow\ \varphi<10{,}6°`, ''],
          ['ellenőrzés', R`(5,1):\ \mathrm{arctg}\tfrac15=11{,}3°\qquad(5,3):\ 10{,}9°`, R`a többi pont ennél többet tűr, a sarok a szűk keresztmetszet`]]),
        S('d) A sarokpontok áthelyezése', R`Az $(5,5)$ helyett a $(7,1)$ pont távolsága ugyanannyi, tehát sem a csúcs-, sem az átlagteljesítmény nem csökken. A $(7,1)$ szöge viszont csak $8{,}1°$ a tengelytől, ekkora elfordulás után átlép a $0$-s határon.`, [
          ['ellenőrzés', R`\sqrt{5^2+5^2}=\sqrt{1^2+7^2}=\sqrt{50}`, 'azonos távolság'],
          ['geometria', R`\mathrm{arctg}\tfrac17=8{,}1°<10{,}6°`, 'a fázistűrés romlik']])],
      ered: [R`\text{c) }-20\%\ \text{és}\ +33\%,\ \varphi_{\max}=10{,}6°\qquad\text{d) itt nincs előnye, a fázistűrés }8{,}1°\text{-ra romlik}`],
      gy: R`<p>A gyűjtemény fázistűrése $\arcsin(1/5)=11{,}5°$ (az $(5,1)$ pontra), d)-re „a fázishiba nem változik”, b)-re „pontosabban megállapíthatók a hibák”.</p>`,
      fix: R`A szűk keresztmetszet a sarokpont (10,6°), nem az $(5,1)$ pont. A d) részben a fázistűrés 8,1°-ra romlik. A b) lényege a két csatorna független döntése. Nagyobb rácsnál van értelme az áthelyezésnek: a 64-QAM $(7,7)$ pontja $7\sqrt2=9{,}9$, a $(9,1)$ csak $\sqrt{82}=9{,}06$ távolságra van.`, links: [src5(['5o_07_1'])] },

    { id: 'o2_03', num: '2.3', title: '16-PSK hibatűrése, 500 kbit/s sávigénye', tags: ['vizsga'],
      src: R`5-ösöm 8. oldal · 5o_08_1`,
      task: R`<p>a) A 16-PSK elméleti amplitúdó- és fázishibatűrése? Mi határolja a gyakorlatban az amplitúdótűrést? b) 500 kbit/s ISI-mentes átvitele legalább mekkora sávot kíván 16-PSK-val?</p>`,
      ad: [R`$M=16$: 16 pont egy körön, egyenlő szögközökkel`, R`$v=500$ kbit/s: a bitsebesség`],
      ker: [R`a) amplitúdó- és fázistűrés`, R`b) $B_{\min}$: a legkisebb sávszélesség`],
      lv: [S('a) Fázistűrés', R`A 16 pont $360°/16=22{,}5°$-onként van. A döntési határ két pont között félúton húzódik, így egy pont mindkét irányban a szögköz felével fordulhat el.`, [
          ['geometria', R`\varphi_{\max}=\frac{360°}{16}\cdot\frac12=11{,}25°`, '']]),
        S('a) Amplitúdótűrés', R`A PSK-ban minden pont ugyanazon a körön van, a döntés csak a szögtől függ. Az amplitúdó változása elméletben nem okoz hibát: a tűrés végtelen. A gyakorlatban a zaj határol: kis amplitúdónál ugyanaz a zaj nagyobb szögben forgatja el a pontot, így könnyebben átkerül a szomszéd szektorba.`, []),
        S('b) A legkisebb sáv', R`Egy 16-PSK szimbólum $\log_216=4$ bitet visz. A legkisebb sáv $\alpha=0$-val adódik, vivőfrekvenciás átvitelnél $B=(1+\alpha)/T$ (A2).`, [
          ['számérték', R`R_s=\frac{v}{\log_2M}=\frac{500}{4}=125\ \text{kBd}`, ''],
          ['tétel', R`B_{\min}=\frac{1+0}{T}=R_s=125\ \text{kHz}`, R`$\alpha=0$`]])],
      ered: [R`\text{a) amplitúdó: elméletben végtelen, fázis: }\pm11{,}25°\qquad\text{b) }B_{\min}=125\ \text{kHz}`],
      chk: [R`A gyűjtemény „·2?” kérdésére: vivőfrekvenciás átvitelnél nem kell kétszerezni, mert a $(1+\alpha)/T$ már a két oldalsávot tartalmazza. Alapsávban a fele, 62,5 kHz lenne.`], links: [src5(['5o_08_1'])] },

    { id: 'o2_04', num: '2.4', title: '64-QAM kevesebb teljesítménnyel', tags: ['beugro'],
      src: R`5-ösöm 8. oldal · 5o_08_2`,
      task: R`<p>64-QAM-nél azonos hibaarány mellett csökkenteni kell a teljesítményt. Tippek?</p>`,
      ad: [R`64-QAM: $8\times8$-as rács, szintek $\pm1,\pm3,\pm5,\pm7$ tengelyenként`, R`a hibaarányt (zajos csatornán) a pontok közti legkisebb távolság szabja meg, ez maradjon 2`],
      ker: [R`ötletek a teljesítmény csökkentésére`],
      lv: [S('Hol van a teljesítmény?', R`Egy pont teljesítménye a távolsága négyzetével arányos. Az átlagos teljesítmény tengelyenként a négyzetek átlaga, a sarokpont ennek több mint kétszerese.`, [
          ['számérték', R`\overline{d^2}=2\cdot\frac{1+9+25+49}{4}=42`, 'a két tengely összesen'],
          ['számérték', R`d^2_\text{sarok}=7^2+7^2=98`, 'a (7,7) pont']]),
        S('1. ötlet: más alakú konstelláció', R`A sarokpontokat beljebb, a tengelyek közelébe, üres rácshelyekre kell tenni, a legkisebb 2-es távolságot megtartva. Így kereszt alakú, ideálisan közel kör alakú elrendezés lesz: csökken az átlag- és a csúcsteljesítmény, a hibaarány nem változik.`, []),
        S('További ötletek', R`Hibajavító kódolás (kódolási nyereség: ugyanakkora hibaarány kisebb jel-zaj viszonnyal), kisebb zajú vevő, nagyobb nyereségű antenna.`, [])],
      ered: [R`\text{kör vagy kereszt alakú konstelláció azonos legkisebb távolsággal, illetve hibajavító kód}`],
      chk: [R`A gyűjteményben „64×64-es mátrix” áll, helyesen 8×8-as rács.`], links: [src5(['5o_08_2'])] },

    { id: 'o2_05', num: '2.5', title: 'Tribites QAM a megfigyelt pontokkal', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 9. oldal · 5o_09_1 (gépelt megoldás)`,
      task: R`<p>Tribitek $(d_k,c_k)$: 000 (+1,+1), 001 (0,+3), 010 (−1,+1), 011 (−3,0), 100 (−1,−1), 101 (0,−3), 110 (+1,−1), 111 (+3,0). Megfigyelve: $(-0{,}20;\ 2{,}99)$, $(-0{,}94;\ -1{,}07)$, $(-1{,}08;\ 0{,}93)$, $(-2{,}98;\ -0{,}21)$. b) Tribitsorozat? c) Erősítéshiba? d) Fázishiba? e) Zaj?</p>`,
      ad: [R`a nyolc ideális pont $(d_k,c_k)$ koordinátái: $d_k$ a vízszintes, $c_k$ a függőleges tengely`, R`négy vett (zajos, torzult) pont`],
      ker: [R`b) melyik tribitet küldték`, R`c) erősítéshiba: a vett és az ideális távolság aránya`, R`d) fázishiba: a vett és az ideális szög különbsége`, R`e) a zaj nagysága`],
      lv: [S('b) A legközelebbi ideális pont', R`Minden vett ponthoz megkeressük a legközelebbi ideális pontot (minimális távolságú döntés).`, [
          ['számérték', R`(-0{,}20;\ 2{,}99)\to(0,3)=001\qquad(-0{,}94;\ -1{,}07)\to(-1,-1)=100`, ''],
          ['számérték', R`(-1{,}08;\ 0{,}93)\to(-1,1)=010\qquad(-2{,}98;\ -0{,}21)\to(-3,0)=011`, '']]),
        S('c) Erősítéshiba', R`A vett pont origótól mért távolságát osztjuk az ideáliséval.`, [
          ['geometria', R`\frac{\sqrt{0{,}20^2+2{,}99^2}}{3}=\frac{2{,}997}{3}=0{,}999\qquad\frac{\sqrt{0{,}94^2+1{,}07^2}}{\sqrt2}=\frac{1{,}424}{1{,}414}=1{,}007`, ''],
          ['geometria', R`\frac{1{,}425}{1{,}414}=1{,}008\qquad\frac{2{,}987}{3}=0{,}996`, 'a harmadik és a negyedik pont'],
          ['számérték', R`k\approx1`, 'nincs számottevő erősítéshiba']]),
        S('d) Fázishiba', R`A szöget az $\mathrm{atan2}(c,d)$ adja, ami a síknegyedet is helyesen kezeli. Az ideális szögekkel összevetve:`, [
          ['geometria', R`93{,}8°-90°=3{,}8°\qquad228{,}7°-225°=3{,}7°`, '1. és 2. pont'],
          ['geometria', R`139{,}3°-135°=4{,}3°\qquad184{,}0°-180°=4{,}0°`, '3. és 4. pont'],
          ['számérték', R`\varphi\approx4°`, 'mind a négy ugyanannyit fordult']]),
        S('e) Zaj', R`Ha zaj okozná az eltérést, a pontok véletlenszerűen, különböző irányba mozdulnának el. Itt mind a négy ugyanannyit fordult (3,7° és 4,3° között) és a távolságuk 1%-on belül egyezik: a maradék szórás nagyon kicsi, a zaj elhanyagolható.`, [])],
      ered: [R`\text{b) }001\ 100\ 010\ 011\qquad\text{c) }k\approx1\qquad\text{d) }\varphi\approx4°\qquad\text{e) a zaj elhanyagolható}`],
      gy: R`<p>A gépelt megoldás szerint „a fázishiba nagy: $\tan^{-1}(-1{,}08/0{,}93)=130{,}73°\ne145°$”.</p>`,
      fix: R`A gyűjtemény felcserélte a tengelyeket és rossz síknegyedet vett. Helyesen $\mathrm{atan2}(0{,}93;\,-1{,}08)=139{,}3°$ a várt 135° helyett, a fázishiba kb. 4°.`, links: [src5(['5o_09_1'])] }
  ]
};
