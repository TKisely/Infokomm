'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f7', num: '7', short: 'Digitális mod.', title: 'Digitális moduláció: FSK, PSK, QAM',
  lead: R`FSK-nál a két jelzőfrekvencia, a löket és az MSK-feltétel, PSK és QAM esetén a konstelláció, az átlagteljesítmény és a hibatűrés (erősítés, csillapítás, fázis) a visszatérő kérdések.`,
  alap: [
    { id: 'a7-fsk', badge: 'A1', title: 'Jelölések, FSK és MSK',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$T$</td><td>jelzési (bit-) idő, $1/T$ a jelzési sebesség</td></tr>
<tr><td>$f_0,\ f_1$</td><td>a 0-s és az 1-es bithez tartozó frekvencia (FSK)</td></tr>
<tr><td>$F$</td><td>vivőfrekvencia, FSK-nál a kettő átlaga, $(f_0+f_1)/2$</td></tr>
<tr><td>$f_D$</td><td>frekvencialöket, $|f_1-f_0|/2$</td></tr>
<tr><td>$M$</td><td>a konstelláció pontjainak száma, egy szimbólum $\log_2M$ bit</td></tr>
<tr><td>$\alpha$</td><td>lekerekítés, a vivőfrekvenciás sáv $(1+\alpha)/T$</td></tr>
</tbody></table></div><p><b>MSK</b>, ha $f_D=1/(4T)$, azaz a két frekvencia távolsága $1/(2T)$: egy bit alatt a két jel fáziskülönbsége éppen $\pi$-vel nő. Ez a legkisebb távolság, amellyel a két jel még ortogonális, és a fázis folytonos marad. A sávszélességre Carson-jellegű becslés $B\approx2(f_D+f_m)$, ahol a moduláló bitjel alapharmonikusa $f_m=1/(2T)$ `+'`[ELLENŐRIZENDŐ]`'+R` (a tárgy konvenciója $1/(2T)$ vagy $1/T$).</p>`,
      key: R`Az MSK-feltétel $f_DT=1/4$, ebből a bitsebesség $1/T=4f_D$.` },
    { id: 'a7-qam', badge: 'A2', title: 'QAM: teljesítmény és hibatűrés',
      html: R`<p>Az átlagteljesítmény a pontok origótól mért távolságának <b>négyzetes</b> átlaga: $P=\frac1M\sum d_i^2$. Négyzetrácsos ($\pm1,\pm3,\ldots$) konstellációnál a döntési határok a páros egészeknél vannak. Ha a csatorna minden pontot $k$-szorosára nyújt vagy $\varphi$-vel elforgat, egy pont addig dönthető jól, amíg a saját tartományában marad:</p><ul><li><b>Csillapítás</b> ($k<1$): a legkülső szint esik a belső határra, pl. 5 → 4: $k>4/5$.</li><li><b>Erősítés</b> ($k>1$): a legkülső előtti szint lépi át a következő határt, pl. 3 → 4: $k<4/3$.</li><li><b>Fázis</b>: a legszűkebb a sarokpont ($L$, $L$): $L\sqrt2\cos(45°+\varphi)=L-1$.</li></ul><p>Fázistűrés: 16-QAM 16,9°, 36-QAM 10,6°, 64-QAM 7,7°, 1024-QAM 1,82°. $M$-PSK-nál $180°/M$.</p>`,
      key: R`Négyzetrácsnál a két kvadratúra-csatornában egymástól függetlenül lehet dönteni.` }
  ],
  ex: [
    { id: 'ai7_01', num: '7.1', title: 'BPSK jelalak a 10110 bitsorra (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 7. oldal · ai2020_05_26_Q7`,
      task: R`<p>Rajzolja le az NRZ-vezérelt BPSK jelet a 10110 bemenetre, ha a szimbólumsebesség számértékileg a vivőfrekvencia kétharmada, és definiálja az összerendelést!</p>`,
      ad: [R`$1/T=\tfrac23f_v$: szimbólumsebesség`, R`bitsor: 1, 0, 1, 1, 0`],
      ker: [R`az összerendelés és a jel rajza`],
      lv: [S('Hány vivőperiódus jut egy bitre?', R`A szimbólumidő és a vivő periódusidejének aránya:`, [
          ['átalakítás', R`\frac{T}{T_v}=\frac{f_v}{1/T}=\frac{f_v}{\tfrac23f_v}=1{,}5`, 'bitenként másfél vivőperiódus']]),
        S('Összerendelés', R`BPSK: a bit csak az előjelet választja.`, [
          ['definíció', R`1\to d_k=+1,\quad0\to d_k=-1,\quad s(t)=d_k\cos(2\pi f_vt)`, '']]),
        S('A rajz', R`5 bit $=7{,}5$ vivőperiódus. Ahol a bit 0-ra vált, a koszinusz előjelet vált (180°-os fázisugrás). Mivel egy bit nem egész számú periódus, a fázisugrás a vivő más-más pontjára esik.`, [])],
      ered: [R`1\to+\cos,\ 0\to-\cos\qquad\text{bitenként }1{,}5\ \text{vivőperiódus, összesen }7{,}5`],
      chk: [R`A vivő szinuszos (a Moodle-válasz „négyszögjel”-et írt).`], links: [srcAI(['ai2020_05_26_Q7'])] },

    { id: 'ai7_02', num: '7.2', title: 'FSK/MSK: 22,2 és 24,2 kHz', tags: ['vizsga'],
      src: R`ALL-IN 12., 27…28., 52. oldal · ai2020_06_02_Q3, ai2016_06_07_4, ai2014_12_15_1`,
      task: R`<p>Bináris FSK (MSK), $f_1=22{,}2$ kHz, $f_2=24{,}2$ kHz. a) Frekvencialöket? b) Vivőfrekvencia? c) MSK-nál a bitsebesség? d) Miért jobb az MSK, hol használnak GMSK-t?</p>`,
      ad: [R`a két jelzőfrekvencia: 22,2 és 24,2 kHz`],
      ker: [R`a) $f_D$`, R`b) $F$`, R`c) $1/T$`, R`d) indoklás`],
      lv: [S('a), b) Löket és vivő', R`FSK-nál a vivő a két jelzőfrekvencia átlaga, a löket a különbségük fele.`, [
          ['definíció', R`f_D=\frac{24{,}2-22{,}2}{2}=1\ \text{kHz}\qquad F=\frac{22{,}2+24{,}2}{2}=23{,}2\ \text{kHz}`, '']]),
        S('c) Bitsebesség MSK-nál', R`MSK-feltétel: $f_DT=1/4$.`, [
          ['tétel', R`T=\frac{1}{4f_D}=\frac1{4\ \text{kHz}}=0{,}25\ \text{ms}\ \Rightarrow\ \frac1T=4\ \text{kbit/s}`, '']]),
        S('d) Miért jobb?', R`A fázis folytonos (nincs ugrás a bithatáron), és a két frekvencia a lehető legközelebb van egymáshoz úgy, hogy még ortogonálisak: kompakt, gyorsan lecsengő spektrum, állandó burkoló. A GMSK (Gauss-szűrővel előszűrt MSK) a GSM modulációja.`, [])],
      ered: [R`\text{a) }f_D=1\ \text{kHz}\qquad\text{b) }F=23{,}2\ \text{kHz}\qquad\text{c) }4\ \text{kbit/s}\qquad\text{d) GSM}`], links: [srcAI(['ai2020_06_02_Q3', 'ai2016_06_07_4', 'ai2014_12_15_1'])] },

    { id: 'ai7_03', num: '7.3', title: 'FSK 150 kHz-en, 50 kHz-es lökettel, majd MSK', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 36…39. oldal · ai2015_12_16_4b`,
      task: R`<p>FSK, $F=150$ kHz, $f_D=50$ kHz, $T=20$ µs, amplitúdó 2 V. a) $f_0$, $f_1$, rajz a 0110 bitsorra. b) Sávszélesség? c) Mit kell változtatni MSK-hoz? d) Rajz MSK-ra.</p>`,
      ad: [R`$F=150$ kHz, $f_D=50$ kHz`, R`$T=20$ µs $\Rightarrow1/T=50$ kbit/s`, R`amplitúdó 2 V`],
      ker: [R`a) $f_0$, $f_1$`, R`b) $B_v$`, R`c) változtatás MSK-hoz`],
      lv: [S('a) A két frekvencia', R`$F\pm f_D$, és bitenként hány periódus fér el ($f\cdot T$):`, [
          ['definíció', R`150+50=200\ \text{kHz}\qquad150-50=100\ \text{kHz}`, ''],
          ['számérték', R`200\cdot0{,}02=4\qquad100\cdot0{,}02=2\ \text{periódus bitenként}`, R`$T=0{,}02$ ms`]]),
        S('b) Sávszélesség', R`Carson-jellegű becslés, a moduláló bitjel alapharmonikusa $1/(2T)=25$ kHz (A1).`, [
          ['közelítés', R`B_v\approx2\left(f_D+\tfrac1{2T}\right)=2(50+25)=150\ \text{kHz}`, R`$1/T$-vel számolva 200 kHz`]]),
        S('c) MSK', R`A bitidő maradjon 20 µs, a löketet kell az MSK-feltételhez igazítani.`, [
          ['tétel', R`f_D=\frac1{4T}=\frac{50}{4}=12{,}5\ \text{kHz}`, ''],
          ['számérték', R`f=150\pm12{,}5=162{,}5\ \text{és}\ 137{,}5\ \text{kHz}`, R`bitenként 3,25 és 2,75 periódus`]])],
      ered: [R`\text{a) }200\ \text{és}\ 100\ \text{kHz}\qquad\text{b) }B_v\approx150\ \text{kHz}\qquad\text{c) }f_D=12{,}5\ \text{kHz: }162{,}5\ \text{és}\ 137{,}5\ \text{kHz}`],
      fix: R`A gyűjtemény $2(F+f_D)=400$ kHz-et ad: a Carson-képletbe a vivőt tette a moduláló frekvencia helyére.`, links: [srcAI(['ai2015_12_16_4b'])] },

    { id: 'ai7_04', num: '7.4', title: 'OOK, BPSK, FSK egymás alatt (hivatalos megoldás)', tags: ['vizsga'],
      src: R`ALL-IN 126. oldal · aiD_7_9`,
      task: R`<p>Rajzolja fel a $d_k=\{1,0,1,1,0\}$ sorozat OOK, BPSK és FSK jelét! Az első kettőnél a vivő a jelzési sebesség, FSK-nál $f_0=1/T$, $f_1=1{,}5/T$. Mekkora az FSK löket?</p>`,
      ad: [R`OOK, BPSK: $f_v=1/T$, egy bit egy periódus`, R`FSK: $f_0=1/T$ (1 periódus), $f_1=1{,}5/T$ (1,5 periódus)`],
      ker: [R`a három jel, és $f_D$`],
      lv: [S('A jelek', R`OOK: 1-nél van vivő, 0-nál nincs. BPSK: 1-nél $+\cos$, 0-nál $-\cos$. FSK: 0-nál 1 periódus, 1-nél 1,5 periódus bitenként, a fázis a bithatáron folytonos.`, []),
        S('Löket', '', [
          ['definíció', R`f_D=\frac12\left(\frac{1{,}5}{T}-\frac1T\right)=\frac1{4T}`, R`$f_DT=1/4$: ez éppen MSK`]])],
      ered: [R`f_D=\frac1{4T}\ \text{(MSK)}`], links: [srcAI(['aiD_7_9'])] },

    { id: 'ai7_05', num: '7.5', title: '16-PSK √2 sugárral és BPSK csúcstényezője', tags: ['beugro'],
      src: R`ALL-IN 21., 127. oldal · ai2016_01_05_6, aiD_7_10 (és 5-ösöm 2. oldal)`,
      task: R`<p>a) 16-PSK, a konstelláció sugara $\sqrt2$: átlagteljesítmény? Hogyan változik a szükséges SNR 11,25°-os fázishiba esetén? b) Mekkora egy 1 kHz-es, 2 V-os BPSK jel csúcstényezője?</p>`,
      ad: [R`a) 16 pont egy $\sqrt2$ sugarú körön`, R`b) $U=2$ V, $f_v=1$ kHz`],
      ker: [R`a) $P$ és az SNR változása`, R`b) $C$`],
      lv: [S('a) Átlagteljesítmény', R`Minden pont ugyanazon a körön van, a jel amplitúdója mindig $\sqrt2$. Egy $A$ amplitúdójú szinusz teljesítménye $A^2/2$.`, [
          ['definíció', R`P=\frac{(\sqrt2)^2}{2}=1`, R`1 $\Omega$-on`]]),
        S('a) 11,25°-os fázishiba', R`A szomszéd pontok $360°/16=22{,}5°$-ra vannak, a döntési határ félúton, $11{,}25°$-nál. Ekkora hibánál a pont pont a határon ül: zaj nélkül is 50% a hibavalószínűség, bármilyen kicsi zaj a rossz oldalra viheti.`, [
          ['tétel', R`\varphi_\text{tűrés}=\frac{180°}{16}=11{,}25°`, R`$\text{SNR}\to\infty$ kellene`]]),
        S('b) BPSK csúcstényező', R`A BPSK $\pm U\cos$, az abszolút értéke mindig egy 2 V-os szinuszé.`, [
          ['definíció', R`C=\frac{2}{2/\sqrt2}=\sqrt2`, '']])],
      ered: [R`\text{a) }P=1,\ \text{a szükséges SNR végtelenre nő}\qquad\text{b) }C=\sqrt2`], links: [srcAI(['ai2016_01_05_6', 'aiD_7_10'])] },

    { id: 'ai7_06', num: '7.6', title: 'Három 8-QAM konstelláció: melyik takarékosabb?', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 57…58. oldal · ai2014_12_15_6`,
      task: R`<p>Három 8-QAM elrendezés, a pontok közti minimális távolság mindháromban $2A$. Átlagteljesítmény, melyik a legtakarékosabb? (A képről olvasott koordináták: a) $(0,\pm2A),(\pm2A,0),(\pm2A,\pm2A)$, b) $(\pm A,0),(0,\pm2A),(\pm2A,\pm2A)$, c) $(\pm A,\pm A),(\pm3A,\pm A)$.)</p>`,
      ad: [R`három 8 pontos elrendezés, a legkisebb távolság mindegyikben $2A$ (azonos zajtűrés)`],
      ker: [R`$P_a$, $P_b$, $P_c$ és a legkisebb`],
      lv: [S('Képlet', R`A teljesítmény a távolság <b>négyzetével</b> arányos (A2), ezért a négyzetek átlaga kell.`, [
          ['definíció', R`P=\frac18\sum_{i=1}^8d_i^2`, '']]),
        S('a)', R`4 pont a tengelyen ($d^2=4A^2$), 4 pont a sarkokban ($d^2=4A^2+4A^2=8A^2$).`, [
          ['számérték', R`P_a=\frac{4\cdot4+4\cdot8}{8}A^2=6A^2`, '']]),
        S('b)', R`2 pont $(\pm A,0)$: $A^2$. 2 pont $(0,\pm2A)$: $4A^2$. 4 sarokpont: $8A^2$.`, [
          ['számérték', R`P_b=\frac{2\cdot1+2\cdot4+4\cdot8}{8}A^2=\frac{42}{8}A^2=5{,}25A^2`, '']]),
        S('c)', R`4 pont $(\pm A,\pm A)$: $2A^2$. 4 pont $(\pm3A,\pm A)$: $10A^2$.`, [
          ['számérték', R`P_c=\frac{4\cdot2+4\cdot10}{8}A^2=6A^2`, '']])],
      ered: [R`P_a=6A^2,\ P_b=5{,}25A^2,\ P_c=6A^2:\ \text{a b) a legtakarékosabb}`],
      fix: R`A gyűjtemény a távolságokat átlagolta (nem a négyzetüket), és $A$-val írt $A^2$ helyett: 2,414A, 2,164A, 2,287A. A következtetés (b) véletlenül jó. A (b) ábra pontos alakja `+'`[ELLENŐRIZENDŐ]`'+'.', links: [srcAI(['ai2014_12_15_6'])] },

    { id: 'ai7_07', num: '7.7', title: 'Tribites QAM: megfigyelt pontokból hiba', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 124…126. oldal · aiD_7_3, aiD_7_8 (és 5-ösöm 9. oldal)`,
      task: R`<p>A tribitek: 000 (+1,+1), 001 (0,+3), 010 (−1,+1), 011 (−3,0), 100 (−1,−1), 101 (0,−3), 110 (+1,−1), 111 (+3,0) $(d_k,c_k)$. A megfigyelt párok: $(-0{,}20;\ 2{,}99)$, $(-0{,}94;\ -1{,}07)$, $(-1{,}08;\ 0{,}93)$, $(-2{,}98;\ -0{,}21)$. b) A tribitsorozat? c) Erősítéshiba? d) Fázishiba? e) A zaj szórása?</p>`,
      ad: [R`a nyolc ideális pont, $d_k$ a vízszintes, $c_k$ a függőleges koordináta`, R`négy vett pont`],
      ker: [R`b) a tribitek`, R`c) erősítéshiba`, R`d) fázishiba`, R`e) a zaj`],
      lv: [S('b) Legközelebbi pontok', R`Minimális távolságú döntés.`, [
          ['számérték', R`(-0{,}20;\ 2{,}99)\to001\quad(-0{,}94;\ -1{,}07)\to100\quad(-1{,}08;\ 0{,}93)\to010\quad(-2{,}98;\ -0{,}21)\to011`, '']]),
        S('c) Erősítéshiba', R`A vett és az ideális pont origótól mért távolságának aránya.`, [
          ['geometria', R`\frac{2{,}997}{3}=0{,}999\quad\frac{1{,}424}{\sqrt2}=1{,}007\quad\frac{1{,}425}{\sqrt2}=1{,}008\quad\frac{2{,}987}{3}=0{,}996`, 'mind kb. 1: nincs erősítéshiba']]),
        S('d) Fázishiba', R`A szöget $\mathrm{atan2}(c,d)$ adja, a síknegyedet is helyesen kezelve.`, [
          ['geometria', R`93{,}8°-90°=3{,}8°\quad228{,}7°-225°=3{,}7°\quad139{,}3°-135°=4{,}3°\quad184{,}0°-180°=4{,}0°`, 'kb. 4°, mind ugyanabba az irányba']]),
        S('e) Zaj', R`A zaj véletlen irányba mozdítaná a pontokat. Itt mindegyik ugyanannyit fordult, és a távolságuk 1%-on belül egyezik: a maradék szórás nagyon kicsi.`, [])],
      ered: [R`\text{b) }001\ 100\ 010\ 011\qquad\text{c) }k\approx1\qquad\text{d) }\Delta\varphi\approx4°\qquad\text{e) a zaj elhanyagolható}`],
      gy: R`<p>A gyűjtemény (gépelt „Megoldás”) szerint „a fázishiba nagy: $\tan^{-1}(-1{,}08/0{,}93)=130{,}73°\ne145°$”.</p>`,
      fix: R`A fázishiba kicsi, kb. 4°: a gyűjtemény felcserélte a tengelyeket és rossz síknegyedet vett.`, links: [srcAI(['aiD_7_3', 'aiD_7_8'])] },

    { id: 'ai7_08', num: '7.8', title: '64-QAM fázis- és erősítéstűrése', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 127. oldal · aiD_7_11 d)`,
      task: R`<p>Mekkora a 64-QAM ($\pm1\ldots\pm7$ rács) megengedett fázis-, erősítés- és csillapításhibája zajmentes esetben?</p>`,
      ad: [R`szintek $\pm1,\pm3,\pm5,\pm7$, határok $0,\pm2,\pm4,\pm6$`],
      ker: [R`$\varphi_{\max}$, a megengedett erősítés és csillapítás`],
      lv: [S('Fázis a sarokpontnál', R`A $(7,7)$ pont szöge 45°, távolsága $7\sqrt2=9{,}9$. Elfordulva egyik koordinátája $9{,}9\cos(45°+\varphi)$, ennek a 6-os határ felett kell maradnia.`, [
          ['geometria', R`\cos(45°+\varphi)=\frac{6}{7\sqrt2}=0{,}606\ \Rightarrow\ 45°+\varphi=52{,}7°\ \Rightarrow\ \varphi=7{,}7°`, ''],
          ['ellenőrzés', R`(7,5):\ 7{,}8°\qquad(7,3):\ 8{,}0°\qquad(7,1):\ 8{,}1°`, 'a többi pont kicsit többet tűr']]),
        S('Amplitúdó', R`Csillapításnál a 7-es szint ér le a 6-os határra, erősítésnél az 5-ös ér fel a 6-osra.`, [
          ['számérték', R`7k>6\ \Rightarrow\ k>\frac67=0{,}857\qquad5k<6\ \Rightarrow\ k<\frac65=1{,}2`, '']])],
      ered: [R`\varphi_{\max}\approx7{,}7°\qquad\text{csillapítás legfeljebb }14{,}3\%,\ \text{erősítés legfeljebb }20\%`],
      fix: R`A gyűjtemény 9,46°-ot ad: ez a (7,7) és a (7,5) pont közötti szög, nem a döntési határig mért.`, links: [srcAI(['aiD_7_11'])] },

    { id: 'ai7_09', num: '7.9', title: '36-QAM négyzetrácson', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 128…129. oldal · aiD_7_16 (és 5-ösöm 7. oldal)`,
      task: R`<p>36-féle szimbólum, négyzetrács. a) Konstelláció. b) A négyzetrács előnye. c) Erősítés- és csillapítástűrés zajmentesen. d) Egy kolléga a sarokpontokat a tengelyek mellé tenné. Mi javul, mi romlik?</p>`,
      ad: [R`$M=36=6\times6$: tengelyenként 6 szint`],
      ker: [R`a) konstelláció`, R`b) előny`, R`c) tűrések`, R`d) a sarokpontok áthelyezése`],
      lv: [S('a) Konstelláció', R`$36=6\times6$: tengelyenként 6 szint, egyenlő (2 egységnyi) közökkel, a nullára szimmetrikusan. A döntési határok a szintek között félúton vannak.`, [['definíció', R`\text{szintek: }\pm1,\pm3,\pm5\qquad\text{határok: }0,\pm2,\pm4`, '']]),
        S('b) Előny', R`A két koordinátáról egymástól függetlenül, egyszerű küszöbökkel lehet dönteni: két hatszintű PAM-döntés.`, []),
        S('c) Amplitúdótűrés', R`Csillapításnál az 5-ös szint ér le a 4-es határra, erősítésnél a 3-as ér fel a 4-esre.`, [
          ['számérték', R`5k>4\Rightarrow k>0{,}8\ (-20\%)\qquad3k<4\Rightarrow k<1{,}33\ (+33\%)`, '']]),
        S('c) Fázistűrés', R`A sarokpont $(5,5)$, távolsága $5\sqrt2$.`, [
          ['geometria', R`5\sqrt2\cos(45°+\varphi)=4\ \Rightarrow\ \varphi=10{,}6°`, R`$(5,1)$: 11,3°, $(5,3)$: 10,9°`]]),
        S('d) Áthelyezés (7,1)-re', '', [
          ['ellenőrzés', R`\sqrt{5^2+5^2}=\sqrt{1^2+7^2}=5\sqrt2`, 'a teljesítmény nem csökken'],
          ['geometria', R`\mathrm{arctg}\tfrac17=8{,}1°<10{,}6°`, 'a fázistűrés romlik']])],
      ered: [R`\text{c) }-20\%\ldots+33\%,\ \varphi_{\max}=10{,}6°\qquad\text{d) itt nincs előnye, a fázistűrés romlik}`],
      fix: R`A gyűjtemény fázistűrése asin(1/5) = 11,5°: az (5,1) pontot vizsgálta, a sarokpontot nem. A d) részben szerinte a fázistűrés nem változik, valójában 8,1°-ra romlik.`, links: [srcAI(['aiD_7_16'])] },

    { id: 'ai7_10', num: '7.10', title: 'Kevesebb teljesítmény 64-QAM-mel, azonos hibaaránnyal', tags: ['beugro'],
      src: R`ALL-IN 124. oldal · aiD_7_4 (és 5-ösöm 8. oldal)`,
      task: R`<p>64-QAM-nél azonos hibaarány mellett csökkenteni kell a teljesítményt. Adjon tippeket!</p>`,
      ad: [R`$8\times8$-as rács, a hibaarányt a legkisebb távolság (2) szabja meg`],
      ker: [R`ötletek`],
      lv: [S('Hol a teljesítmény?', R`A pont teljesítménye $d^2$.`, [
          ['számérték', R`\overline{d^2}=2\cdot\frac{1+9+25+49}{4}=42\qquad d^2_{(7,7)}=98`, 'a sarokpont több mint kétszerese az átlagnak']]),
        S('Ötletek', R`A sarokpontokat beljebb kell húzni üres rácshelyekre, a 2-es legkisebb távolságot megtartva: kereszt vagy közel kör alakú konstelláció. Ugyanakkora hibaarányt kisebb teljesítmény mellett ad hibajavító kódolás (kódolási nyereség), kisebb zajú vevő vagy nagyobb antennanyereség is.`, [])],
      ered: [R`\text{sarokpontok beljebb (kör vagy kereszt alak), illetve hibajavító kód}`], chk: [R`A gyűjteményben „64×64-es mátrix” áll, helyesen 8×8-as rács.`], links: [srcAI(['aiD_7_4'])] },

    { id: 'ai7_11', num: '7.11', title: 'Szemábra és 16-QAM: két feleletválasztós', tags: ['beugro'],
      src: R`ALL-IN 125. oldal · aiD_7_5 (3.1.), aiD_7_6 (4.3.)`,
      task: R`<p>a) Négyszintű PAM szemábrája, a szemek közepe 0,35 és 1,05 ms-nál: A) ISI-mentes elemi jel B) jelzési idő 0,7 ms C) RZ jel D) bitsebesség = 4 · szimbólumsebesség. b) 16-QAM: A) 4 időrés alatt 1 bit B) 1 időrés alatt 16 bit C) egyszerre 2 bit D) 100 kbaud mellett 400 kbit/s.</p>`,
      ad: [R`a) négyszintű PAM, két szomszédos szem közepe 0,35 és 1,05 ms`, R`b) 16-QAM`],
      ker: [R`melyik állítás igaz`],
      lv: [S('a) Szemábra', R`Két szomszédos szem közepe között egy jelzési idő telik el. Nyitott, éles szem a mintavételi pillanatban ISI-mentes elemi jelre utal. Négy szintnél egy szimbólum $\log_24=2$ bit.`, [
          ['számérték', R`T=1{,}05-0{,}35=0{,}7\ \text{ms}`, 'B igaz'],
          ['definíció', R`v=2\cdot\frac1T`, 'D hamis (2-szeres, nem 4-szeres)']]),
        S('b) 16-QAM', R`Egy szimbólum $\log_216=4$ bit.`, [
          ['definíció', R`100\ \text{kBd}\cdot4=400\ \text{kbit/s}`, 'csak D igaz']])],
      ered: [R`\text{a) A és B}\qquad\text{b) D}`], chk: [R`a) A és C a saját olvasatom, a gyűjteményben nincs jelölve `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['aiD_7_5', 'aiD_7_6'])] },

    { id: 'ai7_12', num: '7.12', title: 'QAM-16, [160,100] kód, 20 MHz (Moodle 2020)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 13. oldal · ai2020_06_02_Q4`,
      task: R`<p>QAM-16, emelt koszinuszos elemi spektrum, [160,100] hibadetektáló kód, a teljes sáv 20 MHz. Mekkora a nettó bitsebesség?</p>`,
      ad: [R`16-QAM: 4 bit/szimbólum`, R`[160,100] kód: 160 bitből 100 hasznos, arány $100/160=0{,}625$`, R`$B=20$ MHz, vivőfrekvenciás`, R`$\alpha$ nincs megadva`],
      ker: [R`nettó bitsebesség`],
      lv: [S('Szimbólumsebesség', R`Vivőfrekvenciás emelt koszinuszos jel: $B=(1+\alpha)/T$, tehát $1/T=B/(1+\alpha)$.`, [
          ['tétel', R`\alpha=1:\ \frac1T=\frac{20}{2}=10\ \text{MBd}\qquad\alpha=0:\ \frac1T=20\ \text{MBd}`, '']]),
        S('Nettó bitsebesség', R`Szimbólumsebesség × 4 bit × kódarány.`, [
          ['számérték', R`\alpha=1:\ 10\cdot4\cdot0{,}625=25\ \text{Mbit/s}`, ''],
          ['számérték', R`\alpha=0:\ 20\cdot4\cdot0{,}625=50\ \text{Mbit/s}`, 'elméleti felső korlát']])],
      ered: [R`25\ \text{Mbit/s}\ (\alpha=1)\qquad\text{legfeljebb }50\ \text{Mbit/s}\ (\alpha=0)`],
      fix: R`A hallgató a sávszélesség-képletet rosszul rendezte át (40 MBd, 100 Mbit/s). A javító 0 + 1 pontot adott. Az $\alpha$ értékét a feladat nem adja meg `+'`[ELLENŐRIZENDŐ]`'+'.', links: [srcAI(['ai2020_06_02_Q4'])] },

    { id: 'ai7_13', num: '7.13', title: '150 Mbit/s 72 MHz-ben: 8-PSK vagy 16-QAM?', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 22. oldal · ai2016_01_05_8`,
      task: R`<p>Adatsebesség 150 Mbit/s, sáv 72 MHz. a) Megoldható-e 8-PSK-val? b) Mivel lehetne? c) Miért nem akármilyen nagy $n$-QAM-mel?</p>`,
      ad: [R`$v=150$ Mbit/s, $B=72$ MHz`],
      ker: [R`a) 8-PSK`, R`b) más moduláció`, R`c) indoklás`],
      lv: [S('a) 8-PSK', R`$\log_28=3$ bit/szimbólum. A sávkorlátból a megengedett lekerekítés:`, [
          ['számérték', R`\frac1T=\frac{150}{3}=50\ \text{MBd}`, ''],
          ['tétel', R`(1+\alpha)\cdot50\le72\ \Rightarrow\ \alpha\le0{,}44`, 'megoldható, ha a szűrő elég meredek']]),
        S('b) 16-QAM', R`4 bit/szimbólum.`, [
          ['számérték', R`\frac1T=37{,}5\ \text{MBd}\qquad(1+\alpha)\cdot37{,}5\le72\ \Rightarrow\ \alpha\le0{,}92`, 'kényelmesen belefér']]),
        S('c) Miért nem akármekkora?', R`Azonos teljesítménynél a több pont sűrűbben van: csökken a zaj-, erősítés- és fázistűrés, egyre nagyobb jel-zaj viszony kell.`, [])],
      ered: [R`\text{a) igen, ha }\alpha\le0{,}44\qquad\text{b) 16-QAM, }\alpha\le0{,}92\qquad\text{c) romlik a zajtűrés}`],
      fix: R`A hallgató szerint 8-PSK-val nem megy. Ez csak $\alpha=1$-re igaz, a feladat nem rögzíti az $\alpha$-t `+'`[ELLENŐRIZENDŐ]`'+'.', links: [srcAI(['ai2016_01_05_8'])] }
  ]
};
