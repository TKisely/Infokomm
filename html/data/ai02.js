'use strict';
const { R, S, srcAI, MAIN } = require('./_h.js');
const ALAP = ['Elmélet bővebben', [['Infokomm példatár, 2. fejezet', MAIN]]];
module.exports = {
  id: 'f2', num: '2', short: 'Mintavétel', title: 'Mintavételezés és kvantálás',
  lead: R`A gyűjtemény leggyakoribb feladattípusa. Három kérdés ismétlődik: milyen $f_s$ mellett állítható vissza a jel, milyen frekvenciájú és mekkora komponensek jelennek meg a kimeneten, és hány bit kell egy adott jel-zaj viszonyhoz.`,
  alap: [
    { id: 'a2-tetel', badge: 'A1', title: 'Jelölések, álképek, két szűrő',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$f_s$</td><td>mintavételi frekvencia ($T=1/f_s$ a mintavételi idő)</td></tr>
<tr><td>$f_L,\ f_H$</td><td>a jel legkisebb és legnagyobb frekvenciája, $B=f_H-f_L$ a sávszélessége</td></tr>
<tr><td>$H_\text{elő},\ H_\text{utó}$</td><td>az elő- (antialiasing) és az utó- (visszaállító) szűrő átvitele</td></tr>
<tr><td>$n$</td><td>a kvantáló bitszáma</td></tr>
<tr><td>$C$</td><td>a jel csúcstényezője</td></tr>
</tbody></table></div><p>A mintavétel a spektrumot $f_s$-enként megismétli, ezért egy $f$ frekvenciájú bemenet után $nf_s\pm f$ helyeken jelennek meg vonalak. Az <b>előszűrő</b> a mintavétel előtt az eredeti frekvencián csillapít (az átlapolódás ellen), az <b>utószűrő</b> a D/A után az új frekvencián (a „szivárgás” ellen). Egy komponens kimeneti amplitúdója:</p>$$U_\text{ki}=U_\text{be}\cdot H_\text{elő}(f_\text{be})\cdot H_\text{utó}(f_\text{ki})$$<p>40 dB csillapítás feszültségben 0,01-es szorzó ($20\lg0{,}01=-40$). Alapsávi jelnél a tétel: $f_s>2f_{\max}$ (szigorúan, a határeset szinusznál nem működik).</p>`,
      key: R`Mindig írd fel az $nf_s\pm f$ listát, és nézd meg, melyik esik az utószűrő áteresztő sávjába.` },
    { id: 'a2-sav', badge: 'A2', title: 'Sáváteresztő jel mintavételezése',
      html: R`<p>Ha a jel csak $f_L\ldots f_H$ között van, elég, ha a másolatok a sávok közötti résbe esnek. A megengedett tartományok egész $k$-ra:</p>$$\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}\qquad k=1,2,\ldots,\lfloor f_H/B\rfloor$$<p>$k=1$ a szokásos $f_s\ge2f_H$ (a felső határ végtelen). Nagyobb $k$-nál a visszaállításhoz <b>sávszűrő</b> kell. A legnagyobb $k$-nál túl a tartomány alsó határa nagyobb lenne a felsőnél, ott nincs megoldás.</p>`,
      key: R`Készíts táblázatot $k$-ra, és ellenőrizd egy választott $f_s$-sel a képek helyét.` },
    { id: 'a2-snr', badge: 'A3', title: 'Kvantálási jel-zaj viszony',
      html: R`$$\frac SN=\frac{3}{C^2}\cdot\frac{f_s}{2B_z}\cdot2^{2n}\qquad \left(\frac SN\right)_\mathrm{dB}=10\lg\frac3{C^2}+10\lg\frac{f_s}{2B_z}+6{,}02\,n$$<p>$B_z$ a visszaállító szűrő sávja: a kvantálási zaj a $0\ldots f_s/2$ tartományban terül szét egyenletesen, és ennek csak a szűrőn átjutó része marad meg. Szinusz ($C=\sqrt2$): $1{,}76+6{,}02n$ dB. Háromszög ($C=\sqrt3$): $6{,}02n$ dB. A jel-zaj viszony <b>teljesítményarány</b>, ezért 60 dB $=10^6$, nem $10^3$. A bitszámot felfelé kerekítjük.</p>`,
      key: R`Minden bit 6 dB, a mintavételi frekvencia minden duplázása (ugyanazzal a visszaállító szűrővel) 3 dB.` }
  ],
  ex: [
    { id: 'ai2_01', num: '2.1', title: 'Mi jelenik meg a kimeneten? 8 kHz, 40 dB-es szűrők', tags: ['vizsga'],
      src: R`ALL-IN 92…93. oldal · aiD_2_1`,
      task: R`<p>Egy $8$ kHz-es digitális rendszer a 2 V-os 1,5 kHz-es jelet amplitúdóhelyesen továbbítja. Az elő- és a visszaállító szűrő 4 kHz sávhatárú aluláteresztő, a zárótartományban 40 dB csillapítással. a) Mi jelenik meg a kimeneten 3,5 kHz-es, 2 V-os bemenetre? b) Milyen 2 mV-nál nagyobb komponensek várhatók, ha a bemenet 1, 3 és 5 kHz-es, egyenként 2 V-os? c) Mi változik b)-hez képest 1,5 és 3 kHz-es bemenetnél, ha az előszűrőt elhagyjuk?</p>`,
      ad: [R`$f_s=8$ kHz`, R`mindkét szűrő: 4 kHz alatt $H=1$ (az 1,5 kHz amplitúdóhelyes), felette $H=0{,}01$ (40 dB)`],
      ker: [R`a), b), c) a kimenő összetevők frekvenciája és amplitúdója`],
      miert: [[R`Miért 20 mV minden „kép”?`, R`A 40 dB feszültségben 100-szoros csillapítás: $2\ \text{V}/100=20$ mV. Ami egyszer a zárótartományba esik, ennyi lesz, ami kétszer, $0{,}2$ mV.`]],
      lv: [S('a) 3,5 kHz', R`A 3,5 kHz a sávban van, az előszűrő átengedi. Mintavétel után vonalak $n\cdot8\pm3{,}5$ kHz-en (A1). Az utószűrő a 4 kHz felettieket 0,01-szeresre csillapítja.`, [
          ['definíció', R`f\in\{3{,}5;\ 4{,}5;\ 11{,}5;\ 12{,}5;\ 19{,}5;\ \ldots\}\ \text{kHz}`, R`$8\pm3{,}5$, $16\pm3{,}5$, …`],
          ['számérték', R`U_{3{,}5}=2\ \text{V}\qquad U_{4{,}5}=U_{11{,}5}=\ldots=2\cdot0{,}01=20\ \text{mV}`, '']]),
        S('b) Az előszűrő után', R`Az 1 és a 3 kHz átjut (2 V), az 5 kHz a zárótartományban van.`, [
          ['számérték', R`U_5=2\cdot0{,}01=20\ \text{mV}`, 'az 5 kHz a mintavevőn']]),
        S('b) Mintavétel és utószűrő', R`Az 5 kHz-es (20 mV-os) összetevő álképe $8-5=3$ kHz, a sávba esik, és összeadódik a valódi 3 kHz-cel. Az 1 és 3 kHz álképei ($n\cdot8\pm1$, $n\cdot8\pm3$) 4 kHz felett vannak, 0,01-szeresre csillapodnak.`, [
          ['számérték', R`U_{3\,\text{kHz}}=2\ \text{V}\pm20\ \text{mV}`, 'a fázistól függően'],
          ['definíció', R`5,\ 7,\ 9,\ 11,\ 13,\ 15,\ \ldots\ \text{kHz: }2\cdot0{,}01=20\ \text{mV}`, R`$8-3$, $8-1$, $8+1$, $8+3$, $16-3$, …`],
          ['ellenőrzés', R`\text{az 5 kHz saját vonala: }2\cdot0{,}01\cdot0{,}01=0{,}2\ \text{mV}<2\ \text{mV}`, 'kétszer csillapodik, elhanyagolható']]),
        S('c) Előszűrő nélkül', R`Az 1,5 és a 3 kHz is 4 kHz alatt van, az előszűrő úgysem csillapította őket. Átlapolódás csak 4 kHz feletti bemenetből lehetne, ilyen nincs: semmi sem változik.`, [
          ['számérték', R`1{,}5\ \text{és}\ 3\ \text{kHz: }2\ \text{V}\qquad n\cdot8\pm1{,}5,\ n\cdot8\pm3\ \text{kHz: }20\ \text{mV}`, '']])],
      ered: [R`\text{a) }3{,}5\ \text{kHz }2\ \text{V},\ n\cdot8\pm3{,}5\ \text{kHz }20\ \text{mV}\qquad\text{b) }1\ \text{kHz }2\ \text{V},\ 3\ \text{kHz }2\ \text{V}\pm20\ \text{mV},\ \text{a képek }20\ \text{mV}\qquad\text{c) nem változik}`],
      gy: R`<p>A hallgatói kézírás ugyanezt adja, a 3 kHz-re „2,02 V”-ot írva.</p>`,
      hib: [R`Az 5 kHz-en mért 20 mV-ot az 5 kHz-es bemenetnek tulajdonítani. Az valójában a 3 kHz képe ($8-3$).`],
      links: [srcAI(['aiD_2_1']), ALAP] },

    { id: 'ai2_02', num: '2.2', title: '45…75 kHz-es jel mintavételezése', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 18. oldal · ai2016_01_05_1`,
      task: R`<p>Egy jelnek 45 és 75 kHz között vannak komponensei, közvetlenül digitalizáljuk. a) Mekkora $f_s$ kell aluláteresztővel? b) Sávszűrővel? c) Rajzolja fel a spektrumot a legkisebb $f_s$-sel!</p>`,
      ad: [R`$f_L=45$ kHz, $f_H=75$ kHz`],
      ker: [R`a) $f_s$ aluláteresztő visszaállításhoz`, R`b) $f_s$ sávszűrős visszaállításhoz`, R`c) a spektrum $f_{s,\min}$-nél`],
      lv: [S('A $k$ értékei', '', [
          ['számérték', R`B=75-45=30\ \text{kHz}\qquad\left\lfloor\frac{75}{30}\right\rfloor=\lfloor2{,}5\rfloor=2`, R`$k=1$ vagy $2$`]]),
        S('a) Aluláteresztővel', R`$k=1$: a legmagasabb komponens dönt.`, [
          ['behelyettesítés', R`f_s\ge2\cdot75=150\ \text{kHz}`, '']]),
        S('b) Sávszűrővel', R`$k=2$ az A2 képletébe:`, [
          ['behelyettesítés', R`\frac{2\cdot75}{2}\le f_s\le\frac{2\cdot45}{1}\ \Rightarrow\ 75\le f_s\le90\ \text{kHz}`, '']]),
        S('c) Spektrum $f_s=75$ kHz-nél', R`A képek $n\cdot75\pm(45\ldots75)$:`, [
          ['számérték', R`n=1:\ 75-(45\ldots75)=0\ldots30\qquad75+(45\ldots75)=120\ldots150`, ''],
          ['számérték', R`n=2:\ 150-(45\ldots75)=75\ldots105\qquad150+\ldots=195\ldots225`, ''],
          ['ellenőrzés', R`0\ldots30,\ \mathbf{45\ldots75},\ 75\ldots105,\ 120\ldots150,\ \ldots`, 'a 75…105 éppen érinti az eredetit, nincs átfedés']])],
      ered: [R`\text{a) }f_s\ge150\ \text{kHz}\qquad\text{b) }75\le f_s\le90\ \text{kHz}\qquad\text{c) }f_{s,\min}=75\ \text{kHz},\ \text{képek }0\ldots30,\ 75\ldots105,\ 120\ldots150\ \text{kHz}`],
      chk: [R`A hallgatói megoldás ugyanezt a tartományt adja ($f_s-45\le45$, $2f_s-75\ge75$).`],
      fix: R`A példatár korábbi változata a képeket „0…30, 105…120 kHz”-nek írta: helyesen 0…30, 75…105, 120…150 kHz.`, links: [srcAI(['ai2016_01_05_1'])] },

    { id: 'ai2_03', num: '2.3', title: '60…108 kHz-es jel: mintavételi frekvenciák és spektrum', tags: ['vizsga'],
      src: R`ALL-IN 55…56., 80…81., 93., 94., 97. oldal · ai2014_12_15_4, ai2014_01_14_2, aiD_2_2, aiD_2_5, aiD_2_12`,
      task: R`<p>Egy 60 és 108 kHz közötti komponensekből álló jelet közvetlenül digitalizálunk. a) Melyek a büntetlenül választható mintavételi frekvenciák? b) Milyen szűrők kellenek? c) Rajzolja fel a mintasorozat spektrumát egy célszerű $f_s$-sel!</p>`,
      ad: [R`$f_L=60$ kHz, $f_H=108$ kHz`],
      ker: [R`a) $f_s$ tartományai`, R`b) a szűrők`, R`c) a spektrum`],
      miert: [[R`Miért nem lehet $f_s=96$ kHz $(=2B)$?`, R`A legkisebb elvi érték csak akkor $2B$, ha $f_H$ a $B$ egész többszöröse. Itt $108/48=2{,}25$, ezért a $k=2$-es tartomány alja $108$ kHz.`]],
      lv: [S('a) Tartományok', '', [
          ['számérték', R`B=48\ \text{kHz}\qquad\lfloor108/48\rfloor=2`, ''],
          ['behelyettesítés', R`k=1:\ f_s\ge216\ \text{kHz}\qquad k=2:\ \frac{216}{2}=108\le f_s\le\frac{2\cdot60}{1}=120\ \text{kHz}`, '']]),
        S('b) Szűrők', R`$k=1$ ($f_s\ge216$ kHz): elő- és utószűrő is 108 kHz-es aluláteresztő. $k=2$ ($108\ldots120$ kHz): mindkettő 60…108 kHz-es sávszűrő, mert az alapsávban (6…54 kHz) is lesz kép.`, []),
        S('c) Spektrum $f_s=114$ kHz-nél', R`A tartomány közepét választjuk, hogy mindkét oldalon legyen tartalék. Képek $n\cdot114\pm(60\ldots108)$:`, [
          ['számérték', R`6\ldots54,\ \mathbf{60\ldots108},\ 120\ldots168,\ 174\ldots222,\ 234\ldots282,\ 288\ldots336\ \text{kHz}`, 'nincs átfedés, 6 kHz-es rések']])],
      ered: [R`\text{a) }f_s\ge216\ \text{kHz},\ \text{vagy}\ 108\le f_s\le120\ \text{kHz}\qquad\text{b) 108 kHz-es aluláteresztő, illetve 60…108 kHz-es sávszűrő}`],
      chk: [R`Ugyanez a feladat öt helyen szerepel a gyűjteményben, mindenhol ezzel az eredménnyel, az egyik hivatalos (aláírt) kézírással.`],
      links: [srcAI(['ai2014_12_15_4', 'ai2014_01_14_2', 'aiD_2_2', 'aiD_2_5', 'aiD_2_12']), ALAP] },

    { id: 'ai2_04', num: '2.4', title: '60…108 kHz-es jel: hány bit kell?', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 56…57., 81…82., 94…95. oldal · ai2014_12_15_4, ai2014_01_14_2, aiD_2_2 d), aiD_2_5 b)`,
      task: R`<p>Ugyanehhez a jelhez: a) $C=\sqrt3$, legalább 70 dB SNR. b) Szinuszos jel, 70 dB, minden választható tartományra. c) $C=\sqrt6$, $f_s=432$ kHz, legalább 60 dB. Hány bites egyenletes kvantáló kell?</p>`,
      ad: [R`a jel 60…108 kHz, $B=48$ kHz, választható $f_s$: 108…120 kHz vagy legalább 216 kHz (2.3)`],
      ker: [R`$n$ a három esetben`],
      lv: [S('a) Háromszögjel, 70 dB', R`$10\lg(3/C^2)=10\lg1=0$. A $108\ldots120$ kHz-es tartományban sávszűrővel ($B_z=48$ kHz) a túlmintavételezés $10\lg(f_s/96)=0{,}5\ldots1$ dB.`, [
          ['behelyettesítés', R`0+0{,}5+6{,}02\,n\ge70\ \Rightarrow\ n\ge\frac{69{,}5}{6{,}02}=11{,}5`, R`$f_s=108$ kHz, a legrosszabb eset`],
          ['számérték', R`n=12`, '']]),
        S('b) Szinusz, 70 dB', R`$10\lg(3/2)=1{,}76$ dB.`, [
          ['behelyettesítés', R`1{,}76+6{,}02\,n\ge70\ \Rightarrow\ n\ge11{,}3\ \Rightarrow\ 12`, 'túlmintavételezés nélkül'],
          ['behelyettesítés', R`f_s=216,\ B_z=48:\ 10\lg\frac{216}{96}=3{,}5\ \text{dB}\ \Rightarrow\ n\ge\frac{70-1{,}76-3{,}5}{6{,}02}=10{,}75\ \Rightarrow\ 11`, 'csak sávszűrős visszaállításnál']]),
        S('c) $C=\sqrt6$, 432 kHz, 60 dB', R`A 60 dB teljesítményarány, $10^{60/10}=10^6$. Sávszűrővel $B_z=48$ kHz.`, [
          ['behelyettesítés', R`\frac{3}{6}\cdot\frac{432}{96}\cdot4^n\ge10^6\ \Rightarrow\ 2{,}25\cdot4^n\ge10^6\ \Rightarrow\ 4^n\ge444\,444`, R`$2^{2n}=4^n$`],
          ['átalakítás', R`n\ge\log_4444\,444=\frac{\lg444\,444}{\lg4}=9{,}4\ \Rightarrow\ n=10`, R`108 kHz-es aluláteresztővel is $9{,}97\to10$`]])],
      ered: [R`\text{a) }12\qquad\text{b) }12\ (f_s\ge216\ \text{kHz-nél sávszűrővel }11)\qquad\text{c) }10\ \text{bit}`],
      fix: R`A c) részre a kézírás $n=8$-at ad, egy megjegyzés pedig $n=5$-öt („a 60 dB az 1000”). Mindkettő hibás: az SNR teljesítményarány, $10\lg$-gel számolandó. Az a) és b) indoklásában az „egyenletes kvantálónál $f_s=2B$” állítás pontatlan, a végeredményt nem rontja.`,
      hib: [R`$20\lg$-et használni a jel-zaj viszonyra.`, R`Lefelé kerekíteni a bitszámot.`],
      links: [srcAI(['ai2014_12_15_4', 'ai2014_01_14_2', 'aiD_2_2', 'aiD_2_5']), ALAP] },

    { id: 'ai2_05', num: '2.5', title: '0…3 és 7…8 kHz-es jel: melyik $f_s$ jó?', tags: ['beugro'],
      src: R`ALL-IN 94. oldal · aiD_2_3 (feleletválasztós 3.3.)`,
      task: R`<p>Egy valós jel csak a 0…3 kHz és a 7…8 kHz közötti sávban tartalmaz komponenseket. Mely mintavételi frekvenciák mellett lehetséges a tökéletes visszaállítás? A) 13,6 kHz B) 16,2 kHz C) 15 kHz D) 10 kHz</p>`,
      ad: [R`két sáv: 0…3 kHz és 7…8 kHz, köztük 3…7 kHz-es rés`],
      ker: [R`a jó $f_s$-ek`],
      lv: [S('A feltétel', R`A legközelebbi képek $f_s-(0\ldots3)$ és $f_s-(7\ldots8)$. Egyik sem eshet a két sávra. Aluláteresztő visszaállításhoz $f_s\ge16$ kHz kell. Kisebb $f_s$-nél a $7\ldots8$ kHz képének a résbe kell esnie: $f_s-8\ge3$ és $f_s-7\le7$, azaz $11\le f_s\le14$ kHz (két áteresztősávú szűrővel).`, []),
        S('Az opciók', '', [
          ['ellenőrzés', R`A)\ 13{,}6:\ 5{,}6\ldots6{,}6\ \text{és}\ 10{,}6\ldots13{,}6\ \text{kHz}`, 'a résben és a sáv felett: jó'],
          ['ellenőrzés', R`B)\ 16{,}2>16`, 'jó'],
          ['ellenőrzés', R`C)\ 15-(7\ldots8)=7\ldots8`, 'a sáv önmagára fordul: rossz'],
          ['ellenőrzés', R`D)\ 10-8=2\ \text{kHz}\in0\ldots3`, 'rossz']])],
      ered: [R`\text{A és B}`], links: [srcAI(['aiD_2_3']), ALAP] },

    { id: 'ai2_06', num: '2.6', title: '4 kHz-es szinusz 8 kHz-es mintavétellel', tags: ['beugro', 'javitas'],
      src: R`ALL-IN 94. oldal · aiD_2_4`,
      task: R`<p>Visszaállítható-e egy 2 V-os 4 kHz-es jel, ha a mintavételi idő 125 µs? És ha $\sqrt2$-ed részére csökkentjük?</p>`,
      ad: [R`$f=4$ kHz, $T_1=125$ µs, $T_2=125/\sqrt2=88{,}4$ µs`],
      ker: [R`visszaállítható-e a két esetben`],
      lv: [S('Első eset', R`A mintavételi frekvencia a mintavételi idő reciproka.`, [
          ['definíció', R`f_{s1}=\frac{1}{125\ \mu\text{s}}=8\ \text{kHz}=2f`, 'éppen a határeset'],
          ['ellenőrzés', R`x(kT)=2\sin(2\pi\cdot4\cdot k\cdot0{,}125+\varphi)=2\sin(k\pi+\varphi)`, R`ha $\varphi=0$, minden minta 0`]]),
        S('Második eset', '', [
          ['számérték', R`f_{s2}=\sqrt2\cdot8=11{,}3\ \text{kHz}>2\cdot4\ \text{kHz}`, 'visszaállítható']])],
      ered: [R`8\ \text{kHz: nem biztosan (a fázistól függ)}\qquad 11{,}3\ \text{kHz: igen}`],
      fix: R`A gyűjtemény szerint 8 kHz-nél „visszaállítható”. A tétel szigorú egyenlőtlenséget kíván: pontosan $f_s=2f$-nél a minták a szinusz nullátmeneteire is eshetnek. A második indoklásban „$f_{s2}>2f_{s1}$” elírás, helyesen $f_{s2}>2f$.`,
      links: [srcAI(['aiD_2_4'])] },

    { id: 'ai2_07', num: '2.7', title: 'Ferde szűrős rendszer: 10 és 8 kHz-es változat', tags: ['beugro'],
      src: R`ALL-IN 95., 97. oldal · aiD_2_6 (4.1.), aiD_2_15 (5.4.)`,
      task: R`<p>A be- és kimenő szűrő azonos: $H=1$, ha $|f|\le5$ kHz, $H=3{,}5-|f|/2$, ha $5\le|f|\le7$ kHz ($f$ kHz-ben), egyébként 0. A bemenet 2 V-os 1 kHz-es és 3 V-os 6 kHz-es komponens. Mi jelenik meg a kimeneten, ha a) $f_s=10$ kHz (A: 6 kHz 0,75 V, B: 4 kHz, C: 6 kHz 0,5 V, D: 9 kHz), b) $f_s=8$ kHz (A: 6 kHz 3/4 V, B: 2 kHz 0,5 V, C: 4,5 kHz 0,5 V, D: 2 kHz 3/4 V)?</p>`,
      ad: [R`$H(f)$: 5 kHz-ig 1, 5 és 7 kHz között lineárisan csökken 0-ra, felette 0`, R`bemenet: 1 kHz, 2 V és 6 kHz, 3 V`],
      ker: [R`a), b) a kimenő összetevők`],
      lv: [S('Az előszűrő után', R`Az 1 kHz átjut. A 6 kHz a ferde szakaszon van:`, [
          ['behelyettesítés', R`H(6)=3{,}5-\frac62=0{,}5\ \Rightarrow\ 3\cdot0{,}5=1{,}5\ \text{V}`, 'a mintavevőre jut']]),
        S('a) $f_s=10$ kHz', R`Képek: $10\pm1$, $10\pm6$, … Az utószűrő ugyanaz a $H$.`, [
          ['számérték', R`1\ \text{kHz: }2\ \text{V}\qquad6\ \text{kHz: }1{,}5\cdot0{,}5=0{,}75\ \text{V}\qquad10-6=4\ \text{kHz: }1{,}5\cdot1=1{,}5\ \text{V}`, ''],
          ['ellenőrzés', R`10-1=9\ \text{kHz: }H(9)=0`, 'D hamis, C hamis (0,75 V, nem 0,5)']]),
        S('b) $f_s=8$ kHz', '', [
          ['számérték', R`6\ \text{kHz: }0{,}75\ \text{V}\qquad8-6=2\ \text{kHz: }1{,}5\ \text{V}`, 'B és D hamis (1,5 V)'],
          ['ellenőrzés', R`8-1=7\ \text{kHz: }H(7)=0`, 'C hamis, 4,5 kHz-es vonal nincs']])],
      ered: [R`\text{a) A és B}\qquad\text{b) csak A}`], links: [srcAI(['aiD_2_6', 'aiD_2_15'])] },

    { id: 'ai2_08', num: '2.8', title: '12 kHz-es rendszer: a szűrők mérése', tags: ['vizsga'],
      src: R`ALL-IN 95…96. oldal · aiD_2_9`,
      task: R`<p>$f_s=12$ kHz. A 2 V-os 2,5 kHz-es mérőjel kimenő 2,5 kHz-es összetevője 2 V, a 9,5 kHz-es csak 20 mV. b) Mekkora a 2 V-os 9,5 kHz-es bemenet hatására a kimenő 9,5 kHz-es összetevő, ha a 2,5 kHz-es összetevő 40 mV? c) Melyik elemet változtatnád, hogy a 9,5 kHz-es bemenet hatására keletkező 2,5 kHz-es összetevő csökkenjen?</p>`,
      ad: [R`$f_s=12$ kHz`, R`1. mérés: be 2,5 kHz, 2 V → ki 2,5 kHz: 2 V, 9,5 kHz: 20 mV`, R`2. mérés: be 9,5 kHz, 2 V → ki 2,5 kHz: 40 mV`],
      ker: [R`b) a 2. mérésnél a kimenő 9,5 kHz-es összetevő`, R`c) mit kell változtatni`],
      miert: [[R`Miért lehet a két mérésből szűrőértéket kiolvasni?`, R`Mert minden kimeneti amplitúdó két szűrőérték szorzata (A1). Az első mérés az utószűrőt adja 9,5 kHz-en, a második az előszűrőt 9,5 kHz-en.`]],
      lv: [S('Az utószűrő 9,5 kHz-en', R`Az 1. mérésben a 9,5 kHz a 2,5 kHz képe ($12-2{,}5$). A 2,5 kHz-es kimenet 2 V, tehát a sávban mindkét szűrő 1.`, [
          ['behelyettesítés', R`2\cdot H_\text{elő}(2{,}5)\cdot H_\text{utó}(9{,}5)=0{,}02\ \Rightarrow\ H_\text{utó}(9{,}5)=0{,}01`, R`$H_\text{elő}(2{,}5)=1$`]]),
        S('Az előszűrő 9,5 kHz-en', R`A 2. mérésben a 9,5 kHz-es bemenet $12-9{,}5=2{,}5$ kHz-re lapolódik, ott az utószűrő 1.`, [
          ['behelyettesítés', R`2\cdot H_\text{elő}(9{,}5)\cdot1=0{,}04\ \Rightarrow\ H_\text{elő}(9{,}5)=0{,}02`, '']]),
        S('b) A keresett összetevő', R`A 9,5 kHz-es bemenet saját vonala mindkét szűrőn 9,5 kHz-en megy át.`, [
          ['számérték', R`U=2\cdot0{,}02\cdot0{,}01=0{,}4\ \text{mV}`, '']]),
        S('c) Mit változtassunk?', R`Az átlapolódott 2,5 kHz-es összetevő az utószűrő áteresztősávjában van, azt az utószűrő nem tudja csillapítani. Csak az előszűrő 9,5 kHz-es csillapítását lehet növelni (meredekebb szűrő), vagy nagyobb $f_s$-t választani, hogy a kép ne essen a sávba.`, [])],
      ered: [R`\text{b) }U_{9{,}5\,\text{kHz}}=0{,}4\ \text{mV}\qquad\text{c) az előszűrő (zárótartománybeli csillapítás), vagy nagyobb }f_s`],
      gy: R`<p>A gyűjtemény c) válasza: „bemenő szűrő felső határfrekvenciája vagy a mintavételi frekvencia megnövelése”. Ez helyes irány.</p>`,
      links: [srcAI(['aiD_2_9']), ALAP] },

    { id: 'ai2_09', num: '2.9', title: 'Előadásrögzítés: 4 kHz, 9 kHz, 14 bit (hivatalos megoldás)', tags: ['vizsga'],
      src: R`ALL-IN 96…97. oldal · aiD_2_11`,
      task: R`<p>A „szuperjó” mikrofon jelét 4 kHz-es ideális aluláteresztőn át 9 kHz-es mintavételezéssel és 14 bites egyenletes kvantálással digitalizáljuk. a) Tökéletes-e a hanghűség? b) Ha nem, miért? c) Kell-e az előszűrő? d) Mi változik, ha minden minta legkisebb 6 bitjét elhagyjuk? e) Hányszoros teljesítmény kell 26 dB-lel hangosabb beszédhez?</p>`,
      ad: [R`4 kHz-es ideális aluláteresztő a mikrofon után`, R`$f_s=9$ kHz, $n=14$ bit`],
      ker: [R`a), b), c) szöveges válaszok`, R`d) a jel-zaj viszony változása`, R`e) teljesítményarány`],
      lv: [S('a), b) Tökéletes-e?', R`Nem. A 4 kHz feletti beszédösszetevők (sziszegő hangok) elvesznek, és a 14 bites kvantálás is ad (kicsi) zajt. Átlapolódás nincs, mert $9>2\cdot4$ kHz, és a D/A utáni szűrés sem ok (ezekért a javító pontot vont le).`, []),
        S('c) Előszűrő', R`Kell. A 4 kHz-es szűrő éppen ez: nélküle a $f_s/2=4{,}5$ kHz feletti hangok és zajok visszalapolódnának a hasznos sávba.`, []),
        S('d) 6 bit elhagyása', R`Minden bit 6,02 dB-t ér (A3), 6 bit elhagyása 8 bites kvantálást jelent.`, [
          ['számérték', R`\Delta\text{SNR}=6\cdot6{,}02=36{,}1\ \text{dB}\qquad2^{2\cdot6}=4096`, 'a zajteljesítmény kb. 4000-szeres, hallható sistergés']]),
        S('e) 26 dB', R`A dB teljesítményarány, $10\lg$-ből visszafelé:`, [
          ['átalakítás', R`10^{26/10}=10^{2{,}6}=398\approx400`, R`fejben: $26=20+6$ dB, $100\cdot4=400$`]])],
      ered: [R`\text{a) nem}\quad\text{c) igen}\quad\text{d) a zaj kb. 36 dB-lel nő}\quad\text{e) kb. 400-szoros}`], links: [srcAI(['aiD_2_11'])] },

    { id: 'ai2_10', num: '2.10', title: '70…100 kHz-es jel', tags: ['vizsga'],
      src: R`ALL-IN 97. oldal · aiD_2_13`,
      task: R`<p>Egy jel 70 és 100 kHz között tartalmaz komponenseket. Milyen mintavételi frekvenciák választhatók?</p>`,
      ad: [R`$f_L=70$ kHz, $f_H=100$ kHz`],
      ker: [R`az $f_s$ tartományai`],
      lv: [S('A $k$ értékei', '', [
          ['számérték', R`B=30\ \text{kHz}\qquad\lfloor100/30\rfloor=\lfloor3{,}33\rfloor=3`, R`$k=1,2,3$`]]),
        S('Tartományok', R`Behelyettesítés az A2 képletébe:`, [
          ['behelyettesítés', R`k=1:\ f_s\ge200\qquad k=2:\ \frac{200}{2}=100\le f_s\le\frac{140}{1}=140`, 'kHz'],
          ['behelyettesítés', R`k=3:\ \frac{200}{3}=66{,}7\le f_s\le\frac{140}{2}=70`, 'kHz']])],
      ered: [R`f_s\ge200\ \text{kHz}\qquad100\ldots140\ \text{kHz}\qquad66{,}7\ldots70\ \text{kHz}`],
      gy: R`<p>A kézírás táblázatos próbálgatással a 66,7 kHz-et találja meg („itt csak sávszűrővel”), a $k=2$-es tartományt nem írja le.</p>`,
      links: [srcAI(['aiD_2_13']), ALAP] },

    { id: 'ai2_11', num: '2.11', title: '19…25 kHz-es jel: feleletválasztós', tags: ['beugro'],
      src: R`ALL-IN 98. oldal · aiD_2_16 (5.6.)`,
      task: R`<p>Egy valós jel csak 19 és 25 kHz között tartalmaz komponenseket. Mely $f_s$ mellett lehetséges a tökéletes visszaállítás? A) 12,6 B) 11 C) 50,75 D) 39 kHz</p>`,
      ad: [R`$f_L=19$ kHz, $f_H=25$ kHz`],
      ker: [R`a jó $f_s$-ek`],
      lv: [S('Tartományok', '', [
          ['számérték', R`B=6\ \text{kHz}\qquad\lfloor25/6\rfloor=4`, ''],
          ['behelyettesítés', R`k=1:\ \ge50\quad k=2:\ 25\ldots38\quad k=3:\ 16{,}7\ldots19\quad k=4:\ 12{,}5\ldots12{,}67`, R`kHz, pl. $k=4$: $50/4$ és $38/3$`]]),
        S('Az opciók', '', [
          ['ellenőrzés', R`12{,}6\in[12{,}5;\ 12{,}67]\qquad50{,}75\ge50`, 'A és C jó'],
          ['ellenőrzés', R`11<12{,}5\qquad38<39<50`, 'B és D rossz']])],
      ered: [R`\text{A és C}`], links: [srcAI(['aiD_2_16'])] },

    { id: 'ai2_12', num: '2.12', title: '40…70 kHz, 64 dB (Moodle-vizsga 2020)', tags: ['vizsga'],
      src: R`ALL-IN 16. oldal · ai2020_06_02_Q8`,
      task: R`<p>Valós, $\sqrt2$ csúcstényezőjű, teljes kivezérlésű jel, 40 és 70 kHz között, legalább 64 dB SNR. a) Az összes átlapolódásmentes $f_s$. b) Szűrők. c) Hány bit, ha aluláteresztőkkel állítjuk vissza?</p>`,
      ad: [R`$f_L=40$ kHz, $f_H=70$ kHz`, R`$C=\sqrt2$, SNR legalább 64 dB`],
      ker: [R`a) $f_s$`, R`b) szűrők`, R`c) $n$`],
      lv: [S('a) Tartományok', '', [
          ['számérték', R`B=30\ \text{kHz}\qquad\lfloor70/30\rfloor=2`, ''],
          ['behelyettesítés', R`k=1:\ f_s\ge140\qquad k=2:\ 70\le f_s\le80\ \text{kHz}`, R`$140/2$ és $80/1$`]]),
        S('b) Szűrők', R`$f_s\ge140$ kHz: aluláteresztő (70 kHz-es) elő- és utószűrő. $70\ldots80$ kHz: 40…70 kHz-es sávszűrők.`, []),
        S('c) Bitszám', R`Aluláteresztő visszaállításnál ($f_s=140$ kHz, $B_z=70$ kHz) nincs túlmintavételezési nyereség: $10\lg(140/140)=0$.`, [
          ['behelyettesítés', R`1{,}76+6{,}02\,n\ge64\ \Rightarrow\ n\ge\frac{62{,}24}{6{,}02}=10{,}34`, ''],
          ['számérték', R`n=11`, R`ellenőrzés: 11 bittel 68,0 dB, 10 bittel 62,0 dB`]])],
      ered: [R`\text{a) }f_s\ge140\ \text{kHz vagy }70\ldots80\ \text{kHz}\qquad\text{b) aluláteresztő, illetve sávszűrő}\qquad\text{c) }n=11`],
      chk: [R`A javító teljes pontot adott.`], links: [srcAI(['ai2020_06_02_Q8']), ALAP] }
  ]
};
