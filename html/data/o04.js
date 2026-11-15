'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f4', num: '4', short: 'Mintavétel', title: 'Mintavételezés és kvantálás',
  lead: R`Mi jelenik meg a kimeneten, és milyen mintavételi frekvenciák választhatók. Négyszögjelnél a páratlan felharmonikusok mind „képeket” adnak.`,
  alap: [
    { id: 'b4-jel', badge: 'A1', title: 'Jelölések és a lánc',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$f_s$</td><td>mintavételi frekvencia</td></tr>
<tr><td>$f_L,\ f_H$</td><td>a jel legkisebb és legnagyobb frekvenciája</td></tr>
<tr><td>$B$</td><td>a jel sávszélessége, $B=f_H-f_L$</td></tr>
<tr><td>$n$</td><td>a kvantáló bitszáma</td></tr>
<tr><td>$C$</td><td>a jel csúcstényezője (szinusznál $\sqrt2$)</td></tr>
</tbody></table></div><p>A lánc: <b>előszűrő → mintavevő → … → visszaállító (utó)szűrő</b>. Egy $f$ frekvenciájú bemenet a mintavétel után az $nf_s\pm f$ frekvenciákon is megjelenik (álképek). Egy kimenő összetevő amplitúdója: bemenő amplitúdó × az előszűrő átvitele az eredeti frekvencián × az utószűrő átvitele a kimenő frekvencián. A 40 dB-es csillapítás 0,01-es szorzó, mert $20\lg0{,}01=-40$.</p>` },
    { id: 'b4-kepl', badge: 'A2', title: 'Sáváteresztő mintavétel és kvantálási zaj',
      html: R`<p>Sáváteresztő jelnél a megengedett tartományok egész $k$-ra:</p>$$\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}\qquad1\le k\le\left\lfloor\frac{f_H}{B}\right\rfloor$$<p>Egyenletes kvantálásnál a jel-zaj viszony dB-ben:</p>$$\text{SNR}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B_z}+6{,}02\,n$$<p>Az első tag a jel alakja (szinusznál $10\lg1{,}5=1{,}76$ dB), a második a túlmintavételezés nyeresége ($B_z$ a visszaállító szűrő sávja, ennyi zaj marad meg a $f_s/2$ szélességben szétterülő zajból), a harmadik a bitszám.</p>` }
  ],
  ex: [
    { id: 'o4_01', num: '4.1', title: 'Négyszögjelből csak 1, 3, 7, 9 kHz', tags: ['vizsga'],
      src: R`5-ösöm 12. oldal · 5o_12_1`,
      task: R`<p>A be- és kimenő szűrő ideális aluláteresztő, de más a sávjuk. A bemenet 1 kHz-es négyszögjel (páratlan felharmonikusok), a kimeneten csak 1, 3, 7, 9 kHz jelenik meg. a) A szűrők sávja? b) A mintavételi frekvencia?</p>`,
      ad: [R`a bemenet összetevői: $1,\ 3,\ 5,\ 7,\ 9,\ \ldots$ kHz (az 1 kHz-es négyszögjel páratlan felharmonikusai)`, R`a kimenet: csak $1,\ 3,\ 7,\ 9$ kHz`],
      ker: [R`a) $B_\text{be}$, $B_\text{ki}$: a két szűrő határfrekvenciája`, R`b) $f_s$`],
      lv: [S('a) Az előszűrő', R`A 3 kHz megjelenik, tehát átjutott. Ha az 5 kHz átjutna, a kimeneten is ott lenne (a kimenő szűrő a 9 kHz-et is átengedi). Tehát az előszűrő a 3-at átengedi, az 5-öt nem.`, [
          ['ellenőrzés', R`3\ \text{kHz}<B_\text{be}<5\ \text{kHz}`, '']]),
        S('b) A mintavételi frekvencia', R`A mintavevőhöz csak az 1 és a 3 kHz jut el, ezek álképei $f_s\pm1$ és $f_s\pm3$. A 7 és a 9 kHz nem lehet eredeti összetevő (az előszűrő levágta), tehát álkép.`, [
          ['behelyettesítés', R`f_s-3=7\quad\text{és}\quad f_s-1=9\ \Rightarrow\ f_s=10\ \text{kHz}`, ''],
          ['ellenőrzés', R`f_s=8:\ 8-3=5\ \text{kHz is lenne}\qquad f_s=12:\ 12-3=9,\ 12-1=11,\ \text{a 7 hiányozna}`, 'más érték nem jó']]),
        S('a) A kimenő szűrő', R`$f_s=10$ kHz-nél a következő álképek $10+1=11$ és $10+3=13$ kHz. A 9 kHz átjut, a 11 nem.`, [
          ['ellenőrzés', R`9\ \text{kHz}<B_\text{ki}<11\ \text{kHz}`, ''] ])],
      ered: [R`\text{a) }3<B_\text{be}<5\ \text{kHz},\ 9<B_\text{ki}<11\ \text{kHz}\qquad\text{b) }f_s=10\ \text{kHz}`], links: [src5(['5o_12_1'])] },

    { id: 'o4_02', num: '4.2', title: '8 kHz, 40 dB-es szűrők, négyszögjel a bemeneten', tags: ['vizsga', 'nehez', 'javitas'],
      src: R`5-ösöm 12. oldal · 5o_12_2`,
      task: R`<p>8 kHz-es rendszer, 4 kHz-es aluláteresztő elő- és utószűrő 40 dB-es zárócsillapítással, a 2 V-os 1,5 kHz-es jelet amplitúdóhelyesen viszi át. a) Mi jelenik meg 3,5 kHz-es szinuszra? b) Milyen 2 mV-nál nagyobb komponensek jönnek 1,5 kHz-es (2 V-os) négyszögjelre? c) És előszűrő nélkül?</p>`,
      ad: [R`$f_s=8$ kHz`, R`mindkét szűrő 4 kHz alatt 1-szeres, felette 0,01-szeres (40 dB)`, R`a) 2 V-os, 3,5 kHz-es szinusz`, R`b) 2 V-os, 1,5 kHz-es négyszögjel`],
      ker: [R`a), b), c) a kimenet összetevői és amplitúdóik`],
      lv: [S('a) Szinusz 3,5 kHz-en', R`A 3,5 kHz a sávban van, az előszűrő 2 V-tal átengedi. A mintavétel után a $n\cdot8\pm3{,}5$ kHz-es álképek is megjelennek, ugyancsak 2 V-tal. Az utószűrő a sávon kívülieket 0,01-szeresre csillapítja.`, [
          ['számérték', R`3{,}5\ \text{kHz: }2\ \text{V}`, 'a sávban'],
          ['számérték', R`4{,}5,\ 11{,}5,\ 12{,}5,\ 19{,}5,\ \ldots\ \text{kHz: }2\cdot0{,}01=20\ \text{mV}`, R`$8\pm3{,}5$, $16\pm3{,}5$, …`]]),
        S('b) A négyszögjel összetevői', R`A $\hat U$ amplitúdójú négyszögjel $k$-adik (páratlan) felharmonikusa $4\hat U/(\pi k)$. A 4 kHz felettieket az előszűrő 0,01-szeresre csökkenti.`, [
          ['számérték', R`1{,}5\ \text{kHz: }\frac{4\cdot2}{\pi}=2{,}55\ \text{V}`, R`$k=1$, átjut`],
          ['számérték', R`4{,}5\ \text{kHz: }0{,}85\cdot0{,}01=8{,}5\ \text{mV}\qquad7{,}5:\ 5{,}1\ \text{mV}\qquad10{,}5:\ 3{,}6\ \text{mV}\qquad13{,}5:\ 2{,}8\ \text{mV}`, R`$k=3,5,7,9$, az előszűrő után`]]),
        S('b) Hová lapolódnak?', R`Mindegyik a $8$ kHz többszöröseitől mért távolságára, a sávba is. Az utószűrő a sávbelieket átengedi, a sávon kívülieket még egyszer 0,01-gyel szorozza.`, [
          ['számérték', R`8-4{,}5=3{,}5\qquad8-7{,}5=0{,}5\qquad10{,}5-8=2{,}5\qquad16-13{,}5=2{,}5\ \text{kHz}`, 'a sávba esnek'],
          ['számérték', R`n\cdot8\pm1{,}5\ \text{kHz (6,5, 9,5, 14,5, …): }2{,}55\cdot0{,}01=25\ \text{mV}`, 'az alapharmonikus álképei'],
          ['ellenőrzés', R`4{,}5\ \text{kHz eredetiben: }8{,}5\ \text{mV}\cdot0{,}01\approx0{,}1\ \text{mV}<2\ \text{mV}`, 'kétszer csillapítva elhanyagolható']]),
        S('c) Előszűrő nélkül', R`Ugyanazok a frekvenciák jelennek meg, de a felharmonikusok csillapítatlanul lapolódnak a sávba.`, [
          ['számérték', R`3{,}5\ \text{kHz: }0{,}85\ \text{V}\qquad0{,}5\ \text{kHz: }0{,}51\ \text{V}\qquad2{,}5\ \text{kHz: }0{,}36\ \text{és }0{,}28\ \text{V}`, R`a 4,5, 7,5, 10,5 és 13,5 kHz-es felharmonikusból`]])],
      ered: [R`\text{a) }3{,}5\ \text{kHz }2\ \text{V},\ n\cdot8\pm3{,}5\ \text{kHz }20\ \text{mV}`, R`\text{b) }1{,}5\ \text{kHz }2{,}55\ \text{V},\ 0{,}5,\ 2{,}5,\ 3{,}5\ \text{kHz néhány mV},\ n\cdot8\pm1{,}5\ \text{kHz }25\ \text{mV}\qquad\text{c) ugyanezek a frekvenciák, a sávban tized voltos nagyságban}`],
      gy: R`<p>A gyűjtemény b)-re csak „$\pm(1{,}5+kf_0)$, $k$ páratlan” vázlatot ad, c)-re szerinte „szűrő nélkül is megkapjuk az összes jelet”.</p>`,
      fix: R`A frekvenciák halmaza előszűrő nélkül valóban nem változik, de a sávba lapolódó összetevők a néhány mV helyett több száz mV-osak: ez erős, hallható torzítás.`, links: [src5(['5o_12_2'])] },

    { id: 'o4_03', num: '4.3', title: '1,45 kHz előszűrő nélkül (hivatalos válaszok)', tags: ['vizsga'],
      src: R`5-ösöm 13. oldal · 5o_13_1`,
      task: R`<p>8 kHz-es rendszer, jó 4 kHz-es visszaállító szűrő, de nincs előszűrő. a) Kimenet 2 V-os 1,45 kHz-re? b) Lesz-e 9,45 kHz-es összetevő? c) Mi jelenik meg 4,45 kHz-es bemenetre? d) És 1,45 kHz-es négyszögjelre?</p>`,
      ad: [R`$f_s=8$ kHz, nincs előszűrő`, R`a visszaállító szűrő jó (ideálisnak vehető), 4 kHz-ig enged át`],
      ker: [R`a), b), c), d) a kimenet összetevői`],
      lv: [S('a) 1,45 kHz', R`A sávban van, a szűrő átengedi. Az álképei ($8\pm1{,}45$, …) mind 4 kHz felett vannak, a jó szűrő levágja őket.`, [
          ['számérték', R`1{,}45\ \text{kHz},\ 2\ \text{V}`, '']]),
        S('b) 9,45 kHz', R`A mintavétel után van ilyen összetevő, mert $8+1{,}45=9{,}45$. A kimeneten nincs, mert a visszaállító szűrő eltávolítja.`, [
          ['számérték', R`8+1{,}45=9{,}45\ \text{kHz}>4\ \text{kHz}`, 'levágva']]),
        S('c) 4,45 kHz', R`Előszűrő nincs, a 4,45 kHz bejut. Az álképe a sávba esik, és a kimenő szűrő ezt nem tudja megkülönböztetni egy valódi 3,55 kHz-es jeltől.`, [
          ['számérték', R`8-4{,}45=3{,}55\ \text{kHz},\ 2\ \text{V}`, 'hamis összetevő, a jó szűrő sem távolítja el']]),
        S('d) Négyszögjel 1,45 kHz-en', R`A felharmonikusok ($k\cdot1{,}45$ kHz, $k$ páratlan) mind bejutnak, és a sávba lapolódnak. A $k$-adik amplitúdója a négyszögjel amplitúdójának $4/(\pi k)$-szorosa.`, [
          ['számérték', R`4{,}35\to3{,}65\qquad7{,}25\to0{,}75\qquad10{,}15\to2{,}15\qquad13{,}05\to2{,}95\qquad15{,}95\to0{,}05\ \text{kHz}`, R`$|n\cdot8-k\cdot1{,}45|$`]])],
      ered: [R`\text{a) }1{,}45\ \text{kHz},\ 2\ \text{V}\quad\text{b) nincs a kimeneten}\quad\text{c) }3{,}55\ \text{kHz},\ 2\ \text{V}\quad\text{d) sok, nem harmonikus sávbeli összetevő (3,65, 0,75, 2,15, … kHz)}`], links: [src5(['5o_13_1'])] },

    { id: 'o4_04', num: '4.4', title: '60…108 kHz-es jel', tags: ['vizsga'],
      src: R`5-ösöm 13. oldal · 5o_13_2, 5o_13_3 (hivatalos)`,
      task: R`<p>Egy jel 60 és 108 kHz között tartalmaz összetevőket. a) A büntetlenül választható mintavételi frekvenciák? b) Hány bit kell 70 dB-hez (szinuszos jel)?</p>`,
      ad: [R`$f_L=60$ kHz, $f_H=108$ kHz: a jel sávjának két széle`, R`$\text{SNR}\ge70$ dB, szinuszos jel: $C=\sqrt2$`],
      ker: [R`a) $f_s$ megengedett tartományai`, R`b) $n$: bitszám`],
      lv: [{ t: R`Mit jelent a $k$? A Nyquist-zóna sorszáma`, s: R`A mintavétel után a spektrum $f_s$-enként ismétlődik. Osszuk fel a frekvenciatengelyt $f_s/2$ széles sávokra (Nyquist-zónákra): $0\ldots f_s/2$ az első, $f_s/2\ldots f_s$ a második, és így tovább. <b>$k$ annak a zónának a sorszáma, amelybe a jel teljes sávja beleesik:</b> $(k-1)\,f_s/2\le f_L$ és $f_H\le k\,f_s/2$. A két egyenlőtlenséget $f_s$-re rendezve kapjuk a megengedett tartományt, $2f_H/k\le f_s\le2f_L/(k-1)$. A $k=1$ eset a szokásos aluláteresztő mintavétel ($f_s\ge2f_H$). Mivel a zóna nem lehet keskenyebb a jelnél ($f_s/2\ge B$), $k$ legfeljebb $f_H/B$ lehet, lefelé kerekítve: $k_{\max}=\lfloor f_H/B\rfloor$.`, m: [] },
        S(R`a) Hány zóna jöhet szóba?`, R`A jel sávszélessége $B=f_H-f_L$, és $k$ legfeljebb $\lfloor f_H/B\rfloor$ lehet.`, [
          ['számérték', R`B=108-60=48\ \text{kHz}\qquad\left\lfloor\frac{108}{48}\right\rfloor=\lfloor2{,}25\rfloor=2`, R`$k=1$ vagy $2$`]]),
        S('a) A tartományok', R`Behelyettesítünk a sáváteresztő képletbe (A2).`, [
          ['behelyettesítés', R`k=1:\ f_s\ge\frac{2\cdot108}{1}=216\ \text{kHz}`, 'aluláteresztő visszaállítás'],
          ['behelyettesítés', R`k=2:\ \frac{2\cdot108}{2}\le f_s\le\frac{2\cdot60}{1}\ \Rightarrow\ 108\le f_s\le120\ \text{kHz}`, 'sáváteresztő visszaállítás']]),
        S('b) Bitszám', R`Szinuszra $10\lg(3/2)=1{,}76$ dB. Biztonságosan a túlmintavételezés nyereségét nem számítjuk ($10\lg(f_s/2B_z)\ge0$).`, [
          ['behelyettesítés', R`1{,}76+6{,}02\,n\ge70\ \Rightarrow\ n\ge\frac{70-1{,}76}{6{,}02}=11{,}34`, ''],
          ['számérték', R`n=12\ \text{bit}`, 'egész számra felfelé kerekítve']]),
        S('b) Kiegészítés: mikor elég 11 bit?', R`Ha $f_s=216$ kHz és sáváteresztő (48 kHz-es) szűrővel állítunk vissza, a zajnak csak $B_z=48$ kHz-nyi része marad meg.`, [
          ['behelyettesítés', R`10\lg\frac{216}{2\cdot48}=3{,}5\ \text{dB}\ \Rightarrow\ n\ge\frac{70-1{,}76-3{,}5}{6{,}02}=10{,}75`, R`ekkor $n=11$`],
          ['ellenőrzés', R`f_s=108\ldots120:\ 10\lg\frac{f_s}{96}=0{,}5\ldots1{,}0\ \text{dB}`, R`itt marad $n=12$`]])],
      ered: [R`\text{a) }f_s\ge216\ \text{kHz},\ \text{vagy}\ 108\le f_s\le120\ \text{kHz}\qquad\text{b) }n=12\ \text{bit}\ (f_s\ge216\ \text{kHz-nél sávszűrővel 11 is elég})`], links: [src5(['5o_13_2', '5o_13_3'])] }
  ]
};
