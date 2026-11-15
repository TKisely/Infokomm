// 2. fejezet: Mintavételezés és kvantálás
// Minden szöveg String.raw-ban, hogy a TeX visszaperjelei épen maradjanak. Inline TeX: $…$, display: $$…$$.
'use strict';
const R = String.raw;

const KOMA_EA = 'Forrasok/Koma/koma-eloadasok.md';
const KOMA_GY = 'Forrasok/Koma/koma-gyakorlatok.md';
const MAROSI = 'Forrasok/Marosi_2016/marosi_2016_atirat.md';
const TMIT = '05_TMIT_Gyakorlatok_Kidolgozas.md';
const VIZSGA = '02_Regi_Vizsgafeladatok_Megoldasokkal.md';
const KEPLET = '01_Kidolgozas_Kepletek_es_Receptek.md';
const XREF = '06_Kereszthivatkozasok.md';

const EA = ['Előadás', [['ea01 Mintavételezés, kvantálás (Koma)', KOMA_EA]]];

// ---------- ábrák (inline SVG, a színek a téma tokenjeiből) ----------
function axis(x0, x1, y, ticks, unit) {
  let s = R`<line class="ob" x1="${x0}" y1="${y}" x2="${x1}" y2="${y}"/><path class="obf" d="M${x1} ${y} l-8 -4 v8 z"/>`;
  ticks.forEach(t => { s += R`<line class="gr" x1="${t[0]}" y1="${y - 4}" x2="${t[0]}" y2="${y + 4}"/><text class="tm" x="${t[0]}" y="${y + 18}" text-anchor="middle">${t[1]}</text>`; });
  return s + R`<text class="tm" x="${x1}" y="${y + 18}" text-anchor="end">${unit}</text>`;
}
const FIG_TRAPEZ = (() => {
  // f: 0…12 kHz -> x: 40…640, H: 0…1 -> y: 170…50
  const X = f => 40 + f * 50, Y = h => 170 - h * 120;
  let s = R`<svg viewBox="0 0 680 210" role="img" aria-label="A bemenő és a kimenő szűrő átviteli függvénye, és a 4,5 kHz-es bemenet álképe 3,5 kHz-en">`;
  s += axis(30, 660, 170, [[X(0), '0'], [X(3), '3'], [X(3.5), '3,5'], [X(4.5), '4,5'], [X(5), '5'], [X(8), '8'], [X(10), '10']], 'f [kHz]');
  s += R`<polyline class="jl" points="${X(0)},${Y(1)} ${X(3)},${Y(1)} ${X(5)},${Y(0)} ${X(5)},${Y(0.08)} ${X(10)},${Y(0.08)} ${X(10)},${Y(0)}"/>`;
  s += R`<text class="t" x="${X(1.2)}" y="${Y(1) - 8}">H(f)</text><text class="tm" x="${X(6.2)}" y="${Y(0.08) - 8}">0,01 (rajzon nagyítva)</text>`;
  s += R`<line class="ac" x1="${X(4.5)}" y1="${Y(0)}" x2="${X(4.5)}" y2="${Y(0.25)}"/><circle class="acf" cx="${X(4.5)}" cy="${Y(0.25)}" r="4"/>`;
  s += R`<line class="bl" x1="${X(3.5)}" y1="${Y(0)}" x2="${X(3.5)}" y2="${Y(0.75)}"/><circle class="blf" cx="${X(3.5)}" cy="${Y(0.75)}" r="4"/>`;
  s += R`<text class="t" x="${X(4.5) + 8}" y="${Y(0.25) - 6}">valódi jel</text><text class="t" x="${X(3.5) - 8}" y="${Y(0.75) - 8}" text-anchor="end">álkép (8 − 4,5)</text>`;
  return s + '</svg>';
})();
const FIG_NEGYSZOG = (() => {
  const X = f => 40 + f * 40, Y = a => 160 - a * 110;
  let s = R`<svg viewBox="0 0 680 200" role="img" aria-label="A négyszögjel komponensei a bemenő szűrő után, és az álképek 10 kHz-es mintavételnél">`;
  s += axis(30, 660, 160, [[X(0), '0'], [X(1), '1'], [X(3), '3'], [X(5), '5'], [X(7), '7'], [X(9), '9'], [X(10), '10'], [X(11), '11'], [X(13), '13']], 'f [kHz]');
  [[1, 1], [3, 1 / 3]].forEach(c => { s += R`<line class="jl" x1="${X(c[0])}" y1="${Y(0)}" x2="${X(c[0])}" y2="${Y(c[1])}"/><circle class="jlf" cx="${X(c[0])}" cy="${Y(c[1])}" r="4"/>`; });
  [[7, 1 / 3], [9, 1], [11, 1], [13, 1 / 3]].forEach(c => { s += R`<line class="ac dash" x1="${X(c[0])}" y1="${Y(0)}" x2="${X(c[0])}" y2="${Y(c[1])}"/><circle class="acf" cx="${X(c[0])}" cy="${Y(c[1])}" r="4"/>`; });
  s += R`<line class="bl dash" x1="${X(10)}" y1="${Y(1.15)}" x2="${X(10)}" y2="${Y(0)}"/><text class="t" x="${X(10)}" y="${Y(1.15) - 6}" text-anchor="middle">fₛ = 10 kHz</text>`;
  s += R`<rect x="${X(0)}" y="${Y(1.25)}" width="${X(9.9) - X(0)}" height="${Y(0) - Y(1.25)}" fill="none" class="gr dash"/>`;
  s += R`<text class="tm" x="${X(0.3)}" y="${Y(1.25) - 6}">a kimenő szűrő áteresztő sávja (9 és 11 kHz között vág)</text>`;
  return s + '</svg>';
})();

module.exports = {
  id: 'f2', num: '2', short: 'Mintavétel, kvantálás', title: 'Mintavételezés és kvantálás',
  lead: R`Az analóg jelből mintasorozat, abból kódszavak, majd vissza analóg jel. A fejezet példái három kérdés köré épülnek: milyen $f_s$ mellett állítható vissza a jel, milyen álképek (alias) és szivárgó komponensek jelennek meg, és mekkora a kvantálás miatti jel-zaj viszony.`,

  alap: [
    { id: 'a2-lanc', badge: 'A1', title: 'A digitalizálás lánca, egyszerűen',
      html: R`<p>A digitális átvitel lánca: <b>bemenő (előszűrő, antialiasing) szűrő → mintavevő → kvantáló → kódoló → átvitel → dekódoló → D/A (impulzusgenerátor) → visszaállító szűrő</b>. A digitalizálás = mintavételezés + kvantálás (ea01).</p><p>Gondolj egy filmre. A mintavételezés azt dönti el, hány képkocka készül másodpercenként, a kvantálás azt, hány árnyalattal rajzolunk egy kockát. Ha túl ritkák a kockák, a gyors mozgás hamis lesz (a kocsikerék visszafelé forog): ez az <b>aliasing</b>. Ha kevés az árnyalat, a kép szemcsés: ez a <b>kvantálási zaj</b>.</p><p>Mire jó? Minden mintavételes feladat ennek a láncnak egy-egy pontjáról kérdez: a bemenő szűrő az aliasing ellen véd, a visszaállító szűrő a szivárgás ellen, a kvantáló bitszáma a zajt szabja meg.</p>`,
      key: R`Két szűrő van a láncban, és mindkettőnek más a feladata: a bemenő szűrő a mintavétel előtt vág (aliasing ellen), a kimenő szűrő a D/A után simít (szivárgás ellen).` },

    { id: 'a2-mintaveteli-tetel', badge: 'A2', title: 'A mintavételi tétel és a szellemképek',
      html: R`<p>A $T=1/f_s$ közönként vett minták spektruma az eredeti spektrum $f_s$-enként eltolt másolatainak összege (ea01, gyak01):</p>$$X_p(f)=f_s\sum_i X(f-i f_s)\qquad \hat X(f)=H(f)\sum_i X(f-i f_s)$$<p>Úgy képzeld el, mint egy tapétát: a mintavétel a spektrumot $f_s$ lépésközzel újra és újra rámintázza a frekvenciatengelyre. A visszaállító szűrő dolga, hogy ebből a tapétából csak az eredeti darabot vágja ki.</p><p>Ha a jel $B$ sávra korlátozott ($X(f)=0$, ha $|f|>B$), akkor a másolatok nem lapolódnak át, ha</p>$$f_s\ge 2B$$<p>Ekkor egy $B$ határfrekvenciájú ideális aluláteresztő pontosan visszaadja a jelet. A határeset ($f_s=2B$) csak ideális szűrővel működik, ezért a gyakorlatban $f_s>2B$ (ea01).</p>`,
      key: R`A „szellemkép” (alias) mindig $n f_s\pm f$ frekvencián jelenik meg. Minden feladatban ezt a listát kell felírni, és megnézni, melyik esik a szűrők áteresztő sávjába.` },

    { id: 'a2-savatereszto', badge: 'A3', title: 'Sáváteresztő (nem alapsávi) jel mintavételezése',
      html: R`<p>Ha a jel csak az $f_L\ldots f_H$ sávban van ($B=f_H-f_L$), nem kell $2f_H$-val mintavételezni. Elég, ha a másolatok a sávok közötti „üres helyre” esnek. A megengedett tartományok egész $k$-ra:</p>$$\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}\qquad 1\le k\le\left\lfloor\frac{f_H}{B}\right\rfloor$$<p>A $k=1$ eset a közönséges aluláteresztő mintavétel ($f_s\ge 2f_H$). A legkisebb elvi érték $f_s=2B$, de ez csak akkor jön ki, ha $f_H$ a $B$ egész számú többszöröse. Ilyenkor a visszaállításhoz <b>sáváteresztő</b> szűrő kell.</p><p>Analógia: egy parkolóban az autók (a spektrum másolatai) sűrűbben is elférnek, ha az üres helyek pont akkorák, mint egy autó. Ha a sáv nem fér be pontosan, kicsit nagyobb $f_s$ kell.</p>`,
      key: R`Táblázatot írj: minden $k$-ra az alsó és a felső határt. Ha az alsó nagyobb, mint a felső, az a $k$ nem ad megoldást.` },

    { id: 'a2-szivargas', badge: 'A4', title: 'Aliasing és szivárgás: melyik szűrő a hibás?',
      html: R`<p><b>Aliasing (átlapolódás):</b> a bemenő szűrő nem vágott eléggé, ezért az $f_s/2$ feletti bemenő komponens a mintavétel után egy hasznos sávba eső álképet ad. Ezt később már semmilyen szűrő nem tudja eltávolítani, mert ugyanott van, ahol a hasznos jel.</p><p><b>Szivárgás:</b> a kimenő (visszaállító) szűrő nem vágott eléggé, ezért a D/A utáni $n f_s\pm f$ másolatok egy része átjut a kimenetre. Ez a hasznos sávon <b>kívül</b> jelenik meg.</p><p>A két szűrő csillapítása szorzódik, ha egy komponens mindkettőn átmegy: a kimeneti amplitúdó = bemenő amplitúdó · $H_\text{be}(f_\text{be})$ · $H_\text{ki}(f_\text{ki})$ (gyak01 P.1.1).</p>`,
      key: R`Az álkép a bemenő szűrőn az <b>eredeti</b> frekvencián csillapodik, a kimenő szűrőn az <b>új</b> (álkép) frekvencián.` },

    { id: 'a2-kvantalas', badge: 'A5', title: 'Kvantálás és kvantálási zaj',
      html: R`<p>Az $n$ bites egyenletes kvantáló $N=2^n$ szintet használ, a lépcső $\Delta$. A minta $\hat x_k=x_k+\varepsilon_k$, ahol $|\varepsilon_k|\le\Delta/2$. A hibát egyenletes eloszlásúnak, a mintáktól függetlennek tekintjük (ea01, gyak01):</p>$$M(\varepsilon_k)=0\qquad M(\varepsilon_k^2)=\frac{1}{\Delta}\int_{-\Delta/2}^{\Delta/2}x^2\,\mathrm dx=\frac{\Delta^2}{12}$$<p>A visszaállított zaj spektrális sűrűsége és teljesítménye egy $B$ sávú ideális visszaállító szűrő után:</p>$$s_\varepsilon(f)=\frac{1}{f_s}\cdot\frac{\Delta^2}{12}\,|H(f)|^2\qquad P_\varepsilon=\frac{\Delta^2}{12}\cdot\frac{2B}{f_s}$$<p>Analógia: a zajteljesítmény egy adag homok. Ha a mintavételi frekvencia nagyobb, ugyanazt a homokot szélesebb sávra szórjuk szét, és a szűrő a kisebb sávból kevesebbet enged át. Ez a <b>túlmintavételezés</b> (oversampling) nyeresége.</p>`,
      key: R`A kvantálási zaj teljesítménye nem függ a jel nagyságától. Ezért a jel-zaj viszonyt a legnagyobb, még torzítatlan jelre szokás megadni.` },

    { id: 'a2-snr', badge: 'A6', title: 'A jel-zaj viszony képlete',
      html: R`<p>Ha a jel teljes kivezérlésű ($U_{pp}=\Delta\cdot 2^n$), a csúcstényezője $C$, a visszaállító szűrő sávja $B<f_s/2$, akkor (ea01, gyak01, képletgyűjtemény):</p>$$\frac SN=\frac{3}{C^2}\cdot\frac{f_s}{2B}\cdot 2^{2n}$$<p>Decibelben, mert $10\lg 2^{2n}=n\cdot 20\lg 2\approx 6{,}02\,n$:</p>$$\left(\frac SN\right)_{\mathrm{dB}}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B}+6{,}02\,n$$<div class="tw"><table class="tb"><thead><tr><th>Jelalak</th><th>$C$</th><th>$10\lg(3/C^2)$</th><th>Képlet $f_s=2B$-nél</th></tr></thead><tbody><tr><td>szinusz</td><td>$\sqrt2$</td><td>$1{,}76$ dB</td><td>$1{,}76+6{,}02\,n$</td></tr><tr><td>háromszög</td><td>$\sqrt3$</td><td>$0$ dB</td><td>$6{,}02\,n$</td></tr><tr><td>négyszög</td><td>$1$</td><td>$4{,}77$ dB</td><td>$4{,}77+6{,}02\,n$</td></tr></tbody></table></div><p>Ökölszabályok: <b>minden bit 6 dB</b>, a mintavételi frekvencia minden duplázása (azonos szűrővel) <b>3 dB</b>, négyszeres túlmintavételezés tehát ugyanannyi, mint egy bit.</p>`,
      key: R`A bitszámot mindig felfelé kerekítjük: $n\ge(\text{SNR}_{\mathrm{dB}}-10\lg(3/C^2)-10\lg(f_s/2B))/6{,}02$.` },

    { id: 'a2-csucstenyezo', badge: 'A7', title: 'Csúcstényező, gyors emlékeztető',
      html: R`<p>A csúcstényező a csúcsérték és az effektív érték hányadosa (gyak00, ea, Marosi):</p>$$C=\frac{x_{\max}}{\sqrt{P_x}}$$<p>Szinusz: $A/(A/\sqrt2)=\sqrt2$. Négyszög: $A/A=1$. Háromszög: $\sqrt3$. Két különböző frekvenciájú, egyforma szinusz összege: $2A/A=2$. A „hegyes” jel nagy csúcstényezőjű, és rosszabb a jel-zaj viszonya azonos kvantálónál, mert a csúcs miatt kell a teljes tartomány, a teljesítménye viszont kicsi.</p>`,
      key: R`Ha a feladat nem mond csúcstényezőt, szinuszt ($C=\sqrt2$) feltételezz, és írd le.` },

    { id: 'a2-decibel', badge: 'A8', title: 'Decibel fejben',
      html: R`<p>A decibel mindig teljesítményarány: $10\lg(P_2/P_1)$. Feszültségre, térerősségre, hangnyomásra $20\lg(U_2/U_1)$, mert a teljesítmény a négyzetükkel arányos (Marosi ik.3).</p><div class="tw"><table class="tb"><thead><tr><th>arány</th><th>2</th><th>4</th><th>5</th><th>8</th><th>10</th><th>100</th><th>400</th><th>800</th><th>4000</th></tr></thead><tbody><tr><td>dB</td><td>3</td><td>6</td><td>7</td><td>9</td><td>10</td><td>20</td><td>26</td><td>29</td><td>36</td></tr></tbody></table></div><p>A fejszámoláshoz elég: $\lg2\approx0{,}3$, $\lg3\approx0{,}48$, $\lg5\approx0{,}7$, $\lg7\approx0{,}85$.</p>`,
      key: R`Szorzásból összeadás lesz: $\times10$ és $:2$ egymás után $+10-3=+7$ dB.` },

    { id: 'a2-recept', badge: 'A9', title: 'Beugró recept: így indulj neki',
      html: R`<ol class="recipe"><li><b>Rajzold fel a spektrumot</b> (pozitív és negatív frekvenciákon is, páros függvény).</li><li><b>Alapsávi vagy sáváteresztő a jel?</b> Ha $f_L>0$ és a sáv keskeny, írd fel a sáváteresztő táblázatot ($k=1,2,\ldots$).</li><li><b>Írd fel az álképeket:</b> $n f_s\pm f$ minden bemenő komponensre.</li><li><b>Szűrők:</b> a bemenő szűrő az eredeti frekvencián, a kimenő az álkép frekvenciáján csillapít. A két csillapítás szorzódik.</li><li><b>Kvantálás:</b> $\text{SNR}_{\mathrm{dB}}=10\lg(3/C^2)+10\lg(f_s/2B)+6{,}02\,n$, a bitszámot felfelé kerekítsd.</li><li><b>Ellenőrizd:</b> $f_s\ge 2B$ mindig teljesül-e, és a mértékegység (kHz és ms) összeillik-e.</li></ol>` }
  ],

  ex: [
    { id: 'p2_01', num: '2.1', title: 'Szivárgás és aliasing trapéz alakú szűrőkkel', tags: ['beugro'],
      src: R`TMIT gyak01 P.1.1 · Koma gyak2/2 · Marosi ik.4 · azonosítók: tg01_P11, kg02_2, mg2_1`,
      task: R`<p>Egy $f_s=8$ kHz-es mintavételes rendszer bemenő és kimenő szűrője azonos: $H=1$ ($|f|\le3$ kHz), $H=2{,}5-|f|/2$ ($3\ldots5$ kHz, $f$ kHz-ben), $H=0{,}01$ ($5\ldots10$ kHz), felette $0$. a) A bemenet $2$ V amplitúdójú, $1$ kHz-es szinusz. Mik a szivárgó komponensek? b) Mi jelenik meg a kimeneten, ha a bemenet $2$ V, $4{,}5$ kHz?</p>`,
      fig: FIG_TRAPEZ,
      ad: [R`$f_s=8$ kHz, $T=125\,\mu$s`, R`$H_\text{be}(f)=H_\text{ki}(f)$, trapéz alakú`, R`a) $2$ V, $1$ kHz`, R`b) $2$ V, $4{,}5$ kHz`],
      ker: [R`a) a szivárgó komponensek frekvenciája és amplitúdója`, R`b) a kimenő komponensek frekvenciája és amplitúdója`],
      miert: [
        [R`Miért elég a frekvenciákat egyenként végignézni?`, R`Mert a lánc lineáris: minden szinuszos komponens külön utat jár be (bemenő szűrő → mintavétel → kimenő szűrő), és a végén összeadódnak.`],
        [R`Miért pont $n f_s\pm f$ helyeken vannak a másolatok?`, R`Mert a mintavétel a spektrumot $f_s$-enként eltolva megismétli, és a valós szinusznak $+f$ és $-f$ vonala is van. A $-f$ vonal $f_s$-sel eltolva adja az $f_s-f$ álképet.`],
        [R`Miért nem a bemenő szűrő a hibás az a) részben?`, R`Az $1$ kHz-et a bemenő szűrő változatlanul átengedi, ott nincs mit levágni. A $7$ és $9$ kHz-es komponens a D/A után keletkezik, és a kimenő szűrő engedi át gyengítve: ez <b>szivárgás</b>.`],
        [R`Miért rosszabb a b) eset?`, R`A $4{,}5$ kHz az $f_s/2=4$ kHz fölött van, ezért az $8-4{,}5=3{,}5$ kHz-es álképe a hasznos sávba esik, ahol a kimenő szűrő alig csillapít. Ez <b>aliasing</b>, és a végén az álkép erősebb lesz, mint a valódi jel.`]
      ],
      elm: [
        [R`Mintavett jel spektruma.`, R`A minták spektruma az eredeti $f_s$-enként eltolt másolatainak összege (A2).`, R`\hat X(f)=H_\text{ki}(f)\sum_i H_\text{be}(f-i f_s)\,X(f-i f_s)`],
        [R`Szűrők láncban.`, R`Egy komponens kimeneti amplitúdója a bemenő amplitúdó és a két szűrő értékének szorzata, mindegyik a saját frekvenciáján (A4).`]
      ],
      lv: [
        { t: 'A mintasorozat spektruma', s: R`Az $1$ kHz-es bemenet a bemenő szűrőn csillapítatlanul átjut, a mintavétel után $n\cdot 8\pm1$ kHz-en lesznek vonalai.`,
          m: [['definíció', R`f_\text{ki}=n f_s\pm f_\text{be}=n\cdot 8\pm 1\ \text{kHz}`, R`$n$ egész`], ['számérték', R`f_\text{ki}\in\{1;\ 7;\ 9;\ 15;\ 17;\ \ldots\}\ \text{kHz}`, R`$n\cdot8\pm1$, $n=0,1,2$`]] },
        { t: 'A kimenő szűrő hatása az a) esetben', s: R`A kimenő szűrő $10$ kHz felett mindent levág, $5\ldots10$ kHz között $0{,}01$-szeresre csillapít.`,
          m: [['behelyettesítés', R`U_7=2\,\text{V}\cdot H_\text{be}(1)\cdot H_\text{ki}(7)=2\cdot1\cdot0{,}01=0{,}02\ \text{V}`, R`ugyanígy $U_9=0{,}02$ V`], ['ellenőrzés', R`H_\text{ki}(15)=H_\text{ki}(17)=0\ \Longrightarrow\ U_{15}=U_{17}=0`, 'a 10 kHz feletti másolatok eltűnnek']] },
        { t: 'A bemenő szűrő a b) esetben', s: R`A $4{,}5$ kHz-es komponens a bemenő szűrő ferde szakaszára esik.`,
          m: [['behelyettesítés', R`H_\text{be}(4{,}5)=2{,}5-\frac{4{,}5}{2}=0{,}25`, R`a ferde szakasz képlete, $f=4{,}5$`], ['számérték', R`U_\text{minta}=2\,\text{V}\cdot0{,}25=0{,}5\ \text{V}`, 'ennyi jut a mintavevőre']] },
        { t: 'Az álkép és a valódi komponens a kimeneten', s: R`A mintavétel után $n\cdot8\pm4{,}5$ kHz vonalak keletkeznek. A kimenő szűrő a $10$ kHz alattiakat engedi át: a $4{,}5$ és a $3{,}5$ kHz-est.`,
          m: [['behelyettesítés', R`H_\text{ki}(4{,}5)=0{,}25\qquad H_\text{ki}(3{,}5)=2{,}5-\frac{3{,}5}{2}=0{,}75`, R`a kimenő szűrő ugyanaz a trapéz, $3{,}5=8-4{,}5$`], ['számérték', R`U_{4{,}5}=0{,}5\cdot0{,}25=0{,}125\ \text{V}\qquad U_{3{,}5}=0{,}5\cdot0{,}75=0{,}375\ \text{V}`, 'az álkép háromszor erősebb'], ['ellenőrzés', R`H_\text{ki}(8+4{,}5)=H_\text{ki}(12{,}5)=0`, 'a többi másolat nem jut át']] }
      ],
      ered: [R`\text{a) } 1\ \text{kHz: } 2\ \text{V}\qquad 7\ \text{és}\ 9\ \text{kHz: } 0{,}02\ \text{V (szivárgás)}`, R`\text{b) } 4{,}5\ \text{kHz: } 0{,}125\ \text{V}\qquad 3{,}5\ \text{kHz: } 0{,}375\ \text{V (aliasing)}`],
      chk: [R`Mértékegység: $H$ dimenzió nélküli, a kimenet V.`, R`Határeset: ha $H_\text{be}(4{,}5)=0$ lenne, se jel, se álkép nem lenne. A szorzat ezt helyesen adja.`, R`A Koma-jegyzet, a TMIT-füzet és Marosi táblai megoldása ugyanezt adja.`],
      hib: [R`Az álképet a bemenő szűrőn a $3{,}5$ kHz-en csillapítják ($0{,}75$), pedig ott még $4{,}5$ kHz a frekvencia ($0{,}25$).`, R`Elfelejtik, hogy a valódi $4{,}5$ kHz-es komponens kétszer csillapodik (be és ki), ezért lesz csak $0{,}125$ V.`],
      calc: `Ha a bemenet 4,2 kHz: H_be(4,2) = 0,4, álkép 3,8 kHz-en H_ki = 0,6.\nKimenet: 4,2 kHz 2·0,4·0,4 = 0,32 V, 3,8 kHz 2·0,4·0,6 = 0,48 V.`,
      du: [[R`bemenő szűrő gyenge`, R`aliasing, a hasznos sávban, utólag nem javítható`], [R`kimenő szűrő gyenge`, R`szivárgás, a hasznos sávon kívül, jobb szűrővel javítható`]],
      links: [EA, ['Gyakorlat', [['kg02_2 (Koma)', KOMA_GY], ['tg01 P.1.1 (TMIT)', TMIT], ['mg2_1 (Marosi ik.4)', MAROSI]]], ['Kereszthivatkozás', [['06 · Mintavételezés', XREF]]]] },

    { id: 'p2_02', num: '2.2', title: 'PCM, 1,8 kHz, 40 dB-es szűrők: szivárgás és egyenirányítás', tags: ['vizsga'],
      src: R`OneDrive 1-5 gyakorlatok 2.2 · Koma gyak2/1 · TMIT G.1.1 · azonosítók: pd02_2, kg02_1, tg01_G11`,
      task: R`<p>Egy $8$ kHz-es PCM rendszer bemenő és kimenő szűrője a zárótartományban ($4$ kHz felett) $40$ dB csillapítású, a $0{,}3\ldots3{,}4$ kHz sávban tökéletes. A bemenet $2$ V, $1{,}8$ kHz. a) Mekkora a kimenet $6{,}2$ kHz-es komponense? b) Milyen frekvenciák vannak még a kimeneten? c) Mi jelenhet meg, ha a bemenő jelet egyenirányítjuk?</p>`,
      ad: [R`$f_s=8$ kHz, $f=1{,}8$ kHz, $U=2$ V`, R`zárótartomány: $40$ dB, azaz $\times0{,}01$ amplitúdóban`],
      ker: [R`a) $U_{6{,}2}$`, R`b) a kimenő frekvenciák listája`, R`c) az egyenirányított jel komponensei`],
      miert: [
        [R`Miért $0{,}01$ a 40 dB?`, R`Mert amplitúdóra $20\lg$ kell: $10^{-40/20}=0{,}01$. Teljesítményben ez $10^{-4}$.`],
        [R`Miért csak a kimenő szűrő számít a $6{,}2$ kHz-nél?`, R`Az $1{,}8$ kHz a bemenő szűrőn csillapítatlanul átjut. A $6{,}2$ kHz a mintavétel után keletkezik ($8-1{,}8$), ezért csak a kimenő szűrőn csillapodik.`],
        [R`Miért veszélyes az egyenirányítás?`, R`Az egyenirányított szinusz periodikus, de nem szinuszos: alapfrekvenciája $2\cdot1{,}8=3{,}6$ kHz, és sok felharmonikusa van. A $4$ kHz feletti felharmonikusok a bemenő szűrőn csak csillapodnak, és az álképeik a hasznos sávba eshetnek.`]
      ],
      elm: [[R`Álképek.`, R`Egy $f$ frekvenciájú bemenet a mintavétel után az $n f_s\pm f$ frekvenciákon is megjelenik ($n$ egész).`], [R`Decibel amplitúdóban.`, R`Feszültség- (amplitúdó-) arányra $a_\mathrm{dB}=20\lg(U_1/U_2)$.`, R`U_2=U_1\cdot10^{-a/20}`]],
      lv: [
        { t: 'A 6,2 kHz-es komponens', s: R`Ez az $1{,}8$ kHz álképe az első másolatnál, a kimenő szűrő zárótartományában.`,
          m: [['definíció', R`f=f_s-1{,}8=8-1{,}8=6{,}2\ \text{kHz}`, R`$n=1$, mínusz előjel`], ['behelyettesítés', R`U_{6{,}2}=2\,\text{V}\cdot10^{-40/20}=2\cdot0{,}01=0{,}02\ \text{V}`, '20 mV']] },
        { t: 'A többi kimenő komponens', s: R`Minden másolat megjelenik, a kimenő szűrő mindet $0{,}01$-szeresre csillapítja.`,
          m: [['definíció', R`f_\text{ki}=n\cdot8\pm1{,}8\ \text{kHz}\ \Longrightarrow\ 1{,}8;\ 6{,}2;\ 9{,}8;\ 14{,}2;\ 17{,}8;\ \ldots`, 'mind 20 mV, kivéve az 1,8 kHz-et (2 V)']] },
        { t: 'Egyenirányítás', s: R`A $|\sin|$ alakú jel alapfrekvenciája a kétszeres, és vannak felharmonikusai.`,
          m: [['definíció', R`f_0=2\cdot1{,}8=3{,}6\ \text{kHz}\qquad f_k=k\cdot3{,}6\ \text{kHz}`, R`az egyenirányított szinusz periódusa a fele`], ['átalakítás', R`f_\text{ki}=n\cdot8\pm k\cdot3{,}6\ \text{kHz}`, 'a mintavétel után'], ['számérték', R`n=1:\ 8-7{,}2=0{,}8\qquad 10{,}8-8=2{,}8\ \text{kHz}`, R`$k=2$: 7,2 kHz, $k=3$: 10,8 kHz`], ['számérték', R`n=2:\ 16-14{,}4=1{,}6\qquad 18-16=2{,}0\ \text{kHz}`, 'ezek is a 0,3…3,4 kHz-es sávban vannak']] }
      ],
      ered: [R`U_{6{,}2}=20\ \text{mV}`, R`f_\text{ki}=n\cdot8\pm1{,}8\ \text{kHz}`, R`\text{egyenirányítva a hasznos sávban: } 0{,}8;\ 1{,}6;\ 2{,}0;\ 2{,}8\ \text{kHz}`],
      fix: R`A források (OneDrive 2.2, Koma) példaként csak a $0{,}8$ és a $2{,}8$ kHz-et említik. A független ellenőrzés szerint a $2f_s$ körüli álképek közül az $1{,}6$ és a $2{,}0$ kHz is a hasznos sávba esik. Ez nem ellentmondás, csak kiegészítés.`,
      chk: [R`Az álképek nem harmonikusai az $1{,}8$ kHz-nek: ez hallható, „fals” torzítás.`, R`A felharmonikus amplitúdója a bemenő szűrőn $40$ dB-t csillapodik, mégis megjelenik. Ez mutatja, hogy a 40 dB nem végtelen.`],
      hib: [R`$10\lg$-gel számolnak amplitúdóra, és $10^{-4}$-et kapnak $0{,}01$ helyett.`, R`Az egyenirányított jelnél $1{,}8$ kHz-es alapharmonikussal számolnak. Az alapfrekvencia kétszeres lesz.`],
      calc: `30 dB-es zárótartomány esetén: U(6,2 kHz) = 2·10^(−30/20) = 2·0,0316 = 63 mV.`,
      du: [[R`túlvezérlés (2.12)`, R`a vágás páratlan felharmonikusokat ad, az egyenirányítás párosakat`]],
      links: [EA, ['Gyakorlat', [['kg02_1 (Koma)', KOMA_GY], ['tg01 G.1.1 (TMIT, saját megoldás)', TMIT]]], ['Kereszthivatkozás', [['06 · Mintavételezés', XREF]]]] },

    { id: 'p2_03', num: '2.3', title: 'Két sávban lévő jel: teljesítménysűrűség és a mintavételi frekvencia', tags: ['beugro'],
      src: R`OneDrive 2.1 · TMIT P.1.2 · Koma gyak2/3 · Marosi ik.5 · azonosítók: pd02_1, tg01_P12, kg02_3, mg2_2`,
      task: R`<p>Egy $50\ \Omega$-os ellenálláson mért feszültség spektrális sűrűsége a pozitív frekvenciákon zérus, kivéve a $0\ldots3$ kHz és a $7\ldots8$ kHz sávot, ahol állandó. A jel teljesítménye $0{,}2$ mW. a) Hogyan viselkedik a spektrális sűrűség a negatív frekvenciákon? b) Mekkora a spektrális sűrűség? c) Milyen $f_s$ mellett állítható vissza a jel, és milyen szűrővel?</p>`,
      ad: [R`sávok: $0\ldots3$ és $7\ldots8$ kHz, összesen $B_\text{össz}=4$ kHz pozitív oldalon`, R`$P=0{,}2$ mW, $R=50\ \Omega$`],
      ker: [R`a) a spektrum szimmetriája`, R`b) $s_0$ teljesítmény- és feszültségnégyzet-sűrűségként`, R`c) a megengedett $f_s$ tartományok és a szűrők`],
      miert: [
        [R`Miért páros a spektrális sűrűség?`, R`Mert a jel valós. A kétoldalas spektrumban minden szinuszos komponens fele $+f$-en, fele $-f$-en van.`],
        [R`Miért $2\cdot4$ kHz a szélesség az integrálban?`, R`Mert a kétoldalas sűrűséget a pozitív és a negatív frekvenciákon is integrálni kell.`],
        [R`Miért lehet $16$ kHz alatt is mintavételezni?`, R`A $3\ldots7$ kHz között üres hely van. Ha a $7\ldots8$ kHz-es sáv álképe pont ebbe esik, nem lapolódik rá semmire.`]
      ],
      elm: [[R`Parseval.`, R`A teljesítmény a spektrális sűrűség teljes integrálja.`, R`P=\int_{-\infty}^{\infty}s(f)\,\mathrm df`], [R`Feszültségből teljesítmény.`, R`$P=U^2/R$, ezért a feszültségnégyzet-sűrűség $R$-szeres.`]],
      lv: [
        { t: 'A sűrűség értéke', s: R`A kétoldalas sűrűség $2\cdot4$ kHz szélességben állandó.`,
          m: [['tétel', R`P=s_0\cdot2B_\text{össz}`, 'Parseval'], ['átalakítás', R`s_0=\frac{P}{2B_\text{össz}}=\frac{0{,}2\ \text{mW}}{8\ \text{kHz}}=25\ \frac{\mu\text{W}}{\text{kHz}}`, R`$P=0{,}2$ mW, $2B_\text{össz}=8$ kHz`], ['átalakítás', R`s_0'=R\cdot s_0=50\cdot25\cdot10^{-9}\ \frac{\text{V}^2}{\text{Hz}}=1{,}25\cdot10^{-6}\ \frac{\text{V}^2}{\text{Hz}}=1250\ \frac{\text{mV}^2}{\text{kHz}}`, 'feszültségnégyzet-sűrűség']] },
        { t: 'Aluláteresztő visszaállítás', s: R`A legmagasabb frekvencia $8$ kHz.`,
          m: [['tétel', R`f_s\ge2f_{\max}=16\ \text{kHz}`, 'aluláteresztő, határfrekvenciája 8 kHz és $f_s/2$ között']] },
        { t: 'Kisebb mintavételi frekvencia', s: R`A $7\ldots8$ kHz-es sáv negatív oldali másolatát ($-8\ldots-7$) $f_s$-sel eltolva a $3\ldots7$ kHz-es résbe kell tenni, és a $-3\ldots3$ kHz-es sáv másolata ($f_s-3\ldots f_s+3$) nem lóghat a $7\ldots8$ kHz-es sávba.`,
          m: [['geometria', R`f_s-8\ge3\ \Longrightarrow\ f_s\ge11\ \text{kHz}`, 'a 7…8 kHz álképe a 3 kHz felett'], ['geometria', R`f_s-7\le7\ \Longrightarrow\ f_s\le14\ \text{kHz}`, 'és a 7 kHz alatt marad'], ['ellenőrzés', R`f_s-3\ge8\ \Longleftarrow\ f_s\ge11`, 'az alapsáv másolata a 8 kHz felett van']] }
      ],
      ered: [R`s(-f)=s(f)\qquad s_0=25\ \tfrac{\mu\text{W}}{\text{kHz}}=1250\ \tfrac{\text{mV}^2}{\text{kHz}}`, R`f_s\ge16\ \text{kHz (aluláteresztő)}\qquad 11\le f_s\le14\ \text{kHz (két áteresztősávú szűrő)}`],
      chk: [R`$f_s=12$ kHz: álképek $4\ldots5$ kHz-en (a résben) és $9\ldots15$ kHz-en (a sáv felett). Jó.`, R`$f_s=15$ kHz: a $7\ldots8$ álképe $7\ldots8$ kHz-re esne, rá a jelre. Rossz.`],
      hib: [R`Egyoldalas szélességgel ($4$ kHz) osztanak, és kétszeres $s_0$-t kapnak.`, R`A $11\ldots14$ kHz-es tartománynál elfelejtik, hogy a visszaállításhoz nem aluláteresztő, hanem a két sávot kiválogató szűrő kell.`],
      calc: `P = 0,5 mW esetén: s0 = 0,5 mW / 8 kHz = 62,5 µW/kHz, ×50 Ω = 3125 mV²/kHz.`,
      links: [EA, ['Gyakorlat', [['kg02_3 (Koma)', KOMA_GY], ['tg01 P.1.2 (TMIT)', TMIT], ['mg2_2 (Marosi ik.5)', MAROSI]]], ['Kereszthivatkozás', [['06 · Mintavételezés', XREF]]]] },

    { id: 'p2_04', num: '2.4', title: 'Sáváteresztő mintavétel: 45…75 kHz', tags: ['vizsga', 'beugro'],
      src: R`Vizsga 2016.01.05 1. · régi jegyzet F12 és M1-T012 · azonosítók: vz2016_01_05_Q1, F12`,
      task: R`<p>Egy jelnek $45$ és $75$ kHz között vannak komponensei. a) Mekkora legyen $f_s$, ha aluláteresztő szűrővel állítjuk vissza? b) Sáváteresztő szűrő esetén mekkora lehet? c) Mekkora a legkisebb $f_s$?</p>`,
      ad: [R`$f_L=45$ kHz, $f_H=75$ kHz, $B=30$ kHz`], ker: [R`a) $f_s$ aluláteresztővel`, R`b) a sáváteresztő tartományok`, R`c) a legkisebb $f_s$`],
      miert: [[R`Miért van értelme a sáváteresztő mintavételnek?`, R`A jel csak $30$ kHz széles, de magasan van. Ha a másolatok a sávok közé esnek, $150$ kHz helyett már $75$ kHz is elég.`],
        [R`Meddig kell $k$-t növelni?`, R`$k\le\lfloor f_H/B\rfloor=\lfloor75/30\rfloor=2$. Nagyobb $k$-ra az alsó határ meghaladná a felsőt.`]],
      elm: [[R`Sáváteresztő mintavétel.`, R`Ha a jel csak $f_L$ és $f_H$ között van ($B=f_H-f_L$), a megengedett mintavételi frekvenciák egész $k$-ra, $1\le k\le\lfloor f_H/B\rfloor$:`, R`\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}`]],
      lv: [{ t: R`Mit jelent a $k$? A Nyquist-zóna sorszáma`, s: R`A mintavétel után a spektrum $f_s$-enként ismétlődik. Osszuk fel a frekvenciatengelyt $f_s/2$ széles sávokra (Nyquist-zónákra): $0\ldots f_s/2$ az első, $f_s/2\ldots f_s$ a második, és így tovább. <b>$k$ annak a zónának a sorszáma, amelybe a jel teljes sávja beleesik:</b> $(k-1)\,f_s/2\le f_L$ és $f_H\le k\,f_s/2$. A két egyenlőtlenséget $f_s$-re rendezve kapjuk a megengedett tartományt, $2f_H/k\le f_s\le2f_L/(k-1)$. A $k=1$ eset a szokásos aluláteresztő mintavétel ($f_s\ge2f_H$). Mivel a zóna nem lehet keskenyebb a jelnél ($f_s/2\ge B$), $k$ legfeljebb $f_H/B$ lehet, lefelé kerekítve: $k_{\max}=\lfloor f_H/B\rfloor$.`, m: [] },
        
        { t: 'Aluláteresztő eset', s: R`A legmagasabb komponens dönt.`, m: [['tétel', R`f_s\ge2f_H=2\cdot75=150\ \text{kHz}`, '$k=1$']] },
        { t: 'A második Nyquist-zóna ($k=2$)', s: R`Behelyettesítünk a sáváteresztő képletbe.`,
          m: [['behelyettesítés', R`\frac{2\cdot75}{2}\le f_s\le\frac{2\cdot45}{1}`, R`$k=2$, $f_H=75$, $f_L=45$ kHz`], ['számérték', R`75\ \text{kHz}\le f_s\le90\ \text{kHz}`, R`kiszámolva`]] },
        { t: 'Ellenőrzés a spektrumon', s: R`$f_s=75$ kHz-nél a negatív oldali sáv ($-75\ldots-45$) eltolva $0\ldots30$ kHz-re kerül, $2f_s$-sel $75\ldots105$ kHz-re. Egyik sem lóg bele a $45\ldots75$ kHz-be.`,
          m: [['ellenőrzés', R`f_s=75:\ \ [0;30]\ \text{és}\ [75;105]\ \cap\ [45;75]=\{75\}`, 'csak a sávszél érintkezik, ezért határeset']] }
      ],
      ered: [R`\text{a) } f_s\ge150\ \text{kHz}\qquad\text{b) } 75\le f_s\le90\ \text{kHz}\qquad\text{c) } f_{s,\min}=75\ \text{kHz}`],
      chk: [R`$f_s\ge2B=60$ kHz minden megoldásra teljesül.`, R`A vizsgamegoldás ugyanezt adja az $f_s-45\le45$ és $2f_s-75\ge75$ feltételekből.`],
      hib: [R`$2B=60$ kHz-et mondanak legkisebbnek. Az csak akkor jó, ha $f_H/B$ egész, itt $2{,}5$.`, R`Sáváteresztő mintavételnél aluláteresztő visszaállító szűrőt rajzolnak.`],
      calc: `60…80 kHz (B = 20): k = 4 → csak 40 kHz, k = 3 → 53,3…60 kHz, k = 2 → 80…120 kHz.`,
      links: [EA, ['Vizsga', [['02 · 2.1', VIZSGA]]], ['Képletek', [['01 · 2. Mintavételezés', KEPLET]]]] },

    { id: 'p2_05', num: '2.5', title: '40…70 kHz, gyök 2-es csúcstényező, 64 dB', tags: ['vizsga'],
      src: R`Moodle-vizsga 2020.06.02 Q8 (3/3 pont) · F14 · azonosító: vz2020_06_02_Q8`,
      task: R`<p>Tervezzen mintavevő rendszert egyenletes kvantálóval, amely egy valós, $\sqrt2$ csúcstényezőjű, teljes kivezérlésű jel visszaállításakor legalább $64$ dB-es jel-zaj viszonyt ad. A jel $40$ és $70$ kHz között tartalmaz komponenseket. a) Mik az átlapolódásmentes mintavételi frekvenciák? b) Milyen szűrők kellenek? c) Hány bites kvantáló kell, ha aluláteresztő szűrőkkel állítjuk vissza?</p>`,
      ad: [R`$f_L=40$, $f_H=70$ kHz, $B=30$ kHz`, R`$C=\sqrt2$, $\text{SNR}\ge64$ dB`], ker: [R`a) $f_s$ tartományok`, R`b) a szűrők típusa`, R`c) $n$`],
      miert: [[R`Miért $f_s=2B$ a c) részben?`, R`Aluláteresztő visszaállításnál a szűrő sávja $B=70$ kHz, és a legkisebb $f_s=140$ kHz. Ekkor $f_s/2B=1$, a túlmintavételezés nem ad nyereséget.`],
        [R`Miért felfelé kerekítünk?`, R`Mert a $64$ dB alsó korlát. $10$ bittel $62$ dB lenne, az kevés.`]],
      elm: [[R`Sáváteresztő mintavétel.`, R`Ha a jel csak $f_L$ és $f_H$ között van ($B=f_H-f_L$), a megengedett mintavételi frekvenciák egész $k$-ra, $1\le k\le\lfloor f_H/B\rfloor$:`, R`\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}`], [R`Jel-zaj viszony.`, R`Egyenletes kvantálásnál, $C$ csúcstényezőjű, teljes kivezérlésű jelre, $n$ bittel, $B$ sávú visszaállító szűrővel:`, R`\text{SNR}_{\mathrm{dB}}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B}+6{,}02\,n`]],
      lv: [{ t: R`Mit jelent a $k$? A Nyquist-zóna sorszáma`, s: R`A mintavétel után a spektrum $f_s$-enként ismétlődik. Osszuk fel a frekvenciatengelyt $f_s/2$ széles sávokra (Nyquist-zónákra): $0\ldots f_s/2$ az első, $f_s/2\ldots f_s$ a második, és így tovább. <b>$k$ annak a zónának a sorszáma, amelybe a jel teljes sávja beleesik:</b> $(k-1)\,f_s/2\le f_L$ és $f_H\le k\,f_s/2$. A két egyenlőtlenséget $f_s$-re rendezve kapjuk a megengedett tartományt, $2f_H/k\le f_s\le2f_L/(k-1)$. A $k=1$ eset a szokásos aluláteresztő mintavétel ($f_s\ge2f_H$). Mivel a zóna nem lehet keskenyebb a jelnél ($f_s/2\ge B$), $k$ legfeljebb $f_H/B$ lehet, lefelé kerekítve: $k_{\max}=\lfloor f_H/B\rfloor$.`, m: [] },
        
        { t: 'Mintavételi tartományok', s: R`$\lfloor70/30\rfloor=2$, tehát $k=1$ és $k=2$.`,
          m: [['tétel', R`k=1:\ f_s\ge140\ \text{kHz}`, R`$2f_H=2\cdot70$`], ['behelyettesítés', R`k=2:\ \frac{140}{2}\le f_s\le\frac{80}{1}\ \Longrightarrow\ 70\le f_s\le80\ \text{kHz}`, R`$2f_H/2$ és $2f_L/1$`]] },
        { t: 'A szűrők', s: R`A $140$ kHz feletti esetben a be- és kimenő szűrő aluláteresztő, a $70\ldots80$ kHz-es esetben sáváteresztő ($40\ldots70$ kHz).`, m: [] },
        { t: 'A bitszám', s: R`Szinuszra $10\lg(3/2)=1{,}76$ dB, és $f_s/2B=1$.`,
          m: [['behelyettesítés', R`1{,}76+0+6{,}02\,n\ge64`, R`aluláteresztő visszaállítás: $10\lg(f_s/2B)=0$`], ['átalakítás', R`n\ge\frac{64-1{,}76}{6{,}02}=10{,}34`, R`$n$-re rendezve`], ['számérték', R`n=11\ \text{bit}`, 'felfelé kerekítve']] }
      ],
      ered: [R`f_s\ge140\ \text{kHz (aluláteresztő)}\qquad 70\le f_s\le80\ \text{kHz (sáváteresztő)}\qquad n=11\ \text{bit}`],
      chk: [R`$n=11$: $1{,}76+66{,}2=68{,}0$ dB $\ge64$ dB. $n=10$: $62{,}0$ dB, kevés.`, R`A javító 1+1+1 pontot adott erre a megoldásra.`],
      hib: [R`$6n\ge64$-ből $n=11$ jön ki, de az $1{,}76$ dB elhagyása szerencsés esetben ugyanazt adja, máskor nem. Írd fel a teljes képletet.`],
      calc: `Ha 80 dB kell: n ≥ (80 − 1,76)/6,02 = 13,0 → 13 bit (13·6,02 + 1,76 = 80,0 dB, épp elég).`,
      links: [EA, ['Vizsga', [['02 · 2.2 (Moodle 2020)', VIZSGA]]], ['Gyakorlat', [['kg02 SNR-képlet (Koma)', KOMA_GY]]]] },

    { id: 'p2_06', num: '2.6', title: '60…108 kHz, háromszögjel, 70 dB', tags: ['vizsga'],
      src: R`Hallgatói vizsgamegoldás 2014.12.15/4 és 2014.01.14/2 · azonosító: vz2014_12_15_Q4`,
      task: R`<p>Egyenletes kvantálót kell tervezni, amely egy $\sqrt3$ csúcstényezőjű (háromszög alakú), teljes kivezérlésű jel visszaállításakor legalább $70$ dB-es jel-zaj viszonyt ad. A jel $60$ és $108$ kHz között tartalmaz komponenseket. a) Mik a választható mintavételi frekvenciák? b) Hány bites kvantáló kell?</p>`,
      ad: [R`$f_L=60$, $f_H=108$ kHz, $B=48$ kHz`, R`$C=\sqrt3$, $\text{SNR}\ge70$ dB`], ker: [R`a) $f_s$ tartományok`, R`b) $n$`],
      miert: [[R`Miért pont a háromszögjel kényelmes?`, R`Mert $3/C^2=1$, így a konstans tag eltűnik, és $\text{SNR}_{\mathrm{dB}}\approx6{,}02\,n$.`],
        [R`Miért $f_s=2B$-vel számolunk a bitszámnál?`, R`A forrásmegoldás ezt a legkisebb, „célszerűen választott” mintavételt veszi. Nagyobb $f_s$-nél kevesebb bit is elég lehet (A6).`]],
      elm: [[R`Sáváteresztő mintavétel.`, R`Ha a jel csak $f_L$ és $f_H$ között van ($B=f_H-f_L$), a megengedett mintavételi frekvenciák egész $k$-ra, $1\le k\le\lfloor f_H/B\rfloor$:`, R`\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}`], [R`Jel-zaj viszony.`, R`Egyenletes kvantálásnál, $C$ csúcstényezőjű, teljes kivezérlésű jelre, $n$ bittel, $B$ sávú visszaállító szűrővel:`, R`\text{SNR}_{\mathrm{dB}}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B}+6{,}02\,n`]],
      lv: [{ t: R`Mit jelent a $k$? A Nyquist-zóna sorszáma`, s: R`A mintavétel után a spektrum $f_s$-enként ismétlődik. Osszuk fel a frekvenciatengelyt $f_s/2$ széles sávokra (Nyquist-zónákra): $0\ldots f_s/2$ az első, $f_s/2\ldots f_s$ a második, és így tovább. <b>$k$ annak a zónának a sorszáma, amelybe a jel teljes sávja beleesik:</b> $(k-1)\,f_s/2\le f_L$ és $f_H\le k\,f_s/2$. A két egyenlőtlenséget $f_s$-re rendezve kapjuk a megengedett tartományt, $2f_H/k\le f_s\le2f_L/(k-1)$. A $k=1$ eset a szokásos aluláteresztő mintavétel ($f_s\ge2f_H$). Mivel a zóna nem lehet keskenyebb a jelnél ($f_s/2\ge B$), $k$ legfeljebb $f_H/B$ lehet, lefelé kerekítve: $k_{\max}=\lfloor f_H/B\rfloor$.`, m: [] },
        
        { t: 'Mintavételi tartományok', s: R`$\lfloor108/48\rfloor=2$.`,
          m: [['tétel', R`k=1:\ f_s\ge216\ \text{kHz}`, R`$2f_H=2\cdot108$`], ['behelyettesítés', R`k=2:\ \frac{216}{2}\le f_s\le\frac{120}{1}\ \Longrightarrow\ 108\le f_s\le120\ \text{kHz}`, R`$2f_H/2$ és $2f_L/1=2\cdot60$`], ['ellenőrzés', R`f_s\ge2B=96\ \text{kHz}`, 'teljesül']] },
        { t: 'A bitszám', s: R`$10\lg(3/C^2)=10\lg1=0$ dB.`,
          m: [['behelyettesítés', R`0+6{,}02\,n\ge70`, R`túlmintavételezési nyereség nélkül`], ['átalakítás', R`n\ge\frac{70}{6{,}02}=11{,}63`, R`$n$-re rendezve`], ['számérték', R`n=12\ \text{bit}`, R`felfelé kerekítve`]] }
      ],
      ered: [R`f_s\ge216\ \text{kHz}\quad\text{vagy}\quad108\le f_s\le120\ \text{kHz}\qquad n=12\ \text{bit}`],
      chk: [R`$n=12$: $72{,}2$ dB $\ge70$. $n=11$: $66{,}2$ dB, kevés.`, R`A középfrekvenciás alak ($f_c=84$ kHz, $(2f_c\mp B)/(m)$) ugyanezt a $108\ldots120$ kHz-es tartományt adja.`],
      hib: [R`$\sqrt3$ helyett $\sqrt2$-vel számolnak, és $1{,}76$ dB-t adnak hozzá. Ez itt egy bitet is jelenthet.`],
      calc: `Ha f_s = 216 kHz, de a visszaállító szűrő csak a 60…108 kHz-et engedi át (sáváteresztő): f_s/2B = 216/96 = 2,25 → +3,5 dB, n ≥ 66,5/6,02 = 11,05 → 12 bit (épp nem lesz elég a 11).`,
      links: [EA, ['Vizsga', [['02 · 2.3', VIZSGA]]]] },

    { id: 'p2_07', num: '2.7', title: 'Négyszögjel: a kimeneten 1, 3, 7 és 9 kHz', tags: ['vizsga', 'beugro'],
      src: R`Koma gyak6/4 (ZH-felkészítő) · 5-ösöm 3. fejezet · azonosítók: kg06_4`,
      task: R`<p>A láncban ideális aluláteresztő bemenő ($f_{AA}$) és visszaállító ($f_R$) szűrő van, a sávszélességük nem egyezik. A bemenetre $1$ kHz-es szimmetrikus négyszögjelet adunk. A kimeneten csak $1$, $3$, $7$ és $9$ kHz-es komponensek jelennek meg. a) Mekkora lehet a két szűrő sávszélessége? b) Mekkora a mintavételi frekvencia?</p>`,
      fig: FIG_NEGYSZOG,
      ad: [R`négyszögjel: komponensek $1,3,5,7,9,\ldots$ kHz (páratlan felharmonikusok)`, R`kimenet: $\{1;3;7;9\}$ kHz`], ker: [R`a) $f_{AA}$ és $f_R$`, R`b) $f_s$`],
      miert: [[R`Miért csak páratlan felharmonikusok vannak?`, R`A szimmetrikus négyszögjel félhullám-szimmetrikus, ezért a Fourier-sorában csak páratlan harmonikusok vannak.`],
        [R`Honnan tudjuk, hogy a 7 és a 9 álkép?`, R`Az $5$ kHz hiányzik, tehát a bemenő szűrő $5$ kHz alatt vág. Akkor a $7$ és a $9$ sem juthatott át, csak a mintavétel hozhatta létre.`]],
      elm: [[R`Álképek.`, R`Egy $f$ frekvenciájú komponens a mintavétel után az $n f_s\pm f$ frekvenciákon is megjelenik.`]],
      lv: [
        { t: 'A bemenő szűrő', s: R`A $3$ kHz átjut, az $5$ kHz nem.`, m: [['ellenőrzés', R`3\ \text{kHz}<f_{AA}<5\ \text{kHz}`, R`a 3 kHz átjut, az 5 kHz nem`]] },
        { t: 'A mintavételi frekvencia', s: R`A mintavétel után csak $1$ és $3$ kHz álképei lehetnek. A $7$ és a $9$ kHz ezek közül kettő: $f_s-3=7$ és $f_s-1=9$.`,
          m: [['definíció', R`f_s-3=7\quad\text{és}\quad f_s-1=9\ \Longrightarrow\ f_s=10\ \text{kHz}`, R`a 7 és a 9 kHz csak álkép lehet`], ['ellenőrzés', R`f_s=8:\ 8-3=5\ \text{kHz is megjelenne}`, 'rossz'], ['ellenőrzés', R`f_s=12:\ 12-3=9,\ 12-1=11\ \text{kHz, a 7 hiányozna}`, 'rossz']] },
        { t: 'A visszaállító szűrő', s: R`$f_s=10$ kHz-nél a következő álképek $11$ és $13$ kHz. A $9$ átjut, a $11$ nem.`, m: [['ellenőrzés', R`9\ \text{kHz}<f_R<11\ \text{kHz}`, R`a 9 átjut, a $10+1=11$ nem`]] }
      ],
      ered: [R`3<f_{AA}<5\ \text{kHz}\qquad 9<f_R<11\ \text{kHz}\qquad f_s=10\ \text{kHz}`],
      chk: [R`A kimenet $f_s=10$ kHz-nél: $1$, $3$ (eredeti), $10-3=7$, $10-1=9$ (álkép), a $11$ és $13$ levágva. Pontosan a megadott lista.`],
      hib: [R`Azt hiszik, a $7$ és a $9$ kHz a négyszögjel saját felharmonikusa. Az $5$ hiánya miatt ez lehetetlen.`],
      du: [[R`2.12 (túlvezérlés)`, R`ugyanez a gondolatmenet: a hiányzó és a megjelenő komponensekből kell visszakövetkeztetni`]],
      links: [EA, ['Gyakorlat', [['kg06_4 (Koma)', KOMA_GY]]], ['Vizsga', [['02 · 2.4', VIZSGA]]]] },

    { id: 'p2_08', num: '2.8', title: 'A kvantálási zaj spektrális viselkedése', tags: ['nehez'],
      src: R`OneDrive 2.4 · Koma gyak2/4 · Marosi ik.5 (más számokkal) · azonosítók: pd02_4, kg02_4, mg2_3`,
      task: R`<p>Egy gyengén stacionárius jel spektrális sűrűsége $s(f)=6s_0\,(1-|f|/(12B))$, ha $7B<|f|<10B$, különben zérus. a) Mekkora a legkisebb $f_s$, ha a D/A utáni szűrő aluláteresztő? b) Ha a szűrő tetszőleges? c) Azonos átalakítókkal melyik esetben jobb a jel-zaj viszony? d) Mi változik, ha az a) sűrűségű mintákból a b) szűrővel állítjuk vissza a jelet?</p>`,
      ad: [R`sáv: $7B\ldots10B$, szélessége $3B$`], ker: [R`a), b) $f_s$`, R`c), d) a zajteljesítmények aránya`],
      miert: [[R`Miért $20B/3$ a b) eset?`, R`$\lfloor10B/3B\rfloor=3$, és $k=3$-ra $2\cdot10B/3\le f_s\le2\cdot7B/2$, azaz $6{,}67B\le f_s\le7B$. A legkisebb $20B/3$.`],
        [R`Miért függ a zaj a szűrőtől?`, R`A kvantálási zaj fehér, $1/f_s$ sűrűségű. Amennyi sávot a szűrő átenged, annyi zajt kapunk (A5).`]],
      elm: [[R`Kvantálási zaj.`, R`A kvantálási zaj fehér, a $0\ldots f_s$ sávban egyenletesen oszlik el: a visszaállító szűrőn átjutó része a szűrő sávszélességével arányos.`, R`P_\varepsilon=\frac{1}{f_s}M(\varepsilon^2)\int|H(f)|^2\mathrm df`]],
      lv: [
        { t: 'Mintavételi frekvenciák', s: R`Aluláteresztővel $2f_H$, tetszőleges szűrővel a sáváteresztő képlet $k=3$-ra.`,
          m: [['tétel', R`\text{a) } f_s=2\cdot10B=20B`, R`$f_H=10B$`], ['behelyettesítés', R`\text{b) } \frac{20B}{3}\le f_s\le\frac{14B}{2}=7B\ \Longrightarrow\ f_s=\frac{20B}{3}`, R`$k=3$: $2f_H/3$ és $2f_L/2$`]] },
        { t: 'Zajteljesítmények', s: R`A szűrő átengedett sávja a) $2\cdot10B=20B$, b) $2\cdot3B=6B$ (két oldal).`,
          m: [['behelyettesítés', R`\text{a) } P=\frac{1}{20B}M\cdot20B=M`, R`a zaj a teljes $f_s$ szélességben egyenletes`], ['behelyettesítés', R`\text{b) } P=\frac{3}{20B}M\cdot6B=0{,}9\,M`, 'a b) kicsit jobb'], ['behelyettesítés', R`\text{d) } P=\frac{1}{20B}M\cdot6B=0{,}3\,M`, 'a sűrű minták és a keskeny szűrő együtt']] },
        { t: 'Decibelben', s: R`A javulás a zajteljesítmények arányából.`,
          m: [['számérték', R`10\lg\frac{1}{0{,}9}=0{,}46\ \text{dB}\qquad10\lg\frac{1}{0{,}3}=5{,}2\ \text{dB}`, R`a megmaradó zaj aránya az eredetihez`]] }
      ],
      ered: [R`f_{s,a}=20B\qquad f_{s,b}=\tfrac{20}{3}B\qquad P_\varepsilon:\ M,\ 0{,}9M,\ 0{,}3M`],
      chk: [R`A Koma-jegyzet 20/20, 18/20 és 6/20 arányai ugyanezek.`, R`Marosi változata (8…10 kHz-es sáv) ugyanezt a logikát követi: azonos SNR, túlmintavételezéssel ötszörös.`],
      hib: [R`Egyoldalas sávszélességgel integrálnak, és fele akkora zajt kapnak.`],
      links: [EA, ['Gyakorlat', [['kg02_4 (Koma)', KOMA_GY], ['mg2_3 (Marosi ik.5)', MAROSI]]]] },

    { id: 'p2_09', num: '2.9', title: '19…25 kHz-es jel és a túlmintavételezés hatása', tags: ['nehez'],
      src: R`TMIT gyak01 P.1.3 · azonosító: tg01_P13`,
      task: R`<p>Egy valós jel a $19$ és $25$ kHz közötti sávon kívül nem tartalmaz komponenst. a) Mi a legkisebb $f_s$, amelynél elvileg tökéletesen visszaállítható? b) Hány dB-lel javul a jel-zaj viszony, ha a határfrekvencia kétszeresével ($50$ kHz) veszünk mintát, ugyanazzal a kvantálóval és szűrővel?</p>`,
      ad: [R`$f_L=19$, $f_H=25$ kHz, $B=6$ kHz`], ker: [R`a) $f_{s,\min}$`, R`b) $\Delta\text{SNR}$`],
      miert: [[R`Miért nem $2B=12$ kHz a válasz?`, R`$25/6$ nem egész. $12$ kHz-nél a $4\cdot12$-vel eltolt sáv ($23\ldots29$ kHz) ráesne a jelre.`]],
      elm: [[R`Sáváteresztő mintavétel.`, R`Ha a jel csak $f_L$ és $f_H$ között van ($B=f_H-f_L$), a megengedett mintavételi frekvenciák egész $k$-ra, $1\le k\le\lfloor f_H/B\rfloor$:`, R`\frac{2f_H}{k}\le f_s\le\frac{2f_L}{k-1}`], [R`Túlmintavételezés.`, R`A jel-zaj viszonyban a $10\lg(f_s/2B)$ tag: ha ugyanazzal a kvantálóval és szűrővel sűrűbben mintázunk, a kvantálási zaj szélesebb sávra terül szét, és kevesebb jut a szűrő sávjába.`]],
      lv: [{ t: R`Mit jelent a $k$? A Nyquist-zóna sorszáma`, s: R`A mintavétel után a spektrum $f_s$-enként ismétlődik. Osszuk fel a frekvenciatengelyt $f_s/2$ széles sávokra (Nyquist-zónákra): $0\ldots f_s/2$ az első, $f_s/2\ldots f_s$ a második, és így tovább. <b>$k$ annak a zónának a sorszáma, amelybe a jel teljes sávja beleesik:</b> $(k-1)\,f_s/2\le f_L$ és $f_H\le k\,f_s/2$. A két egyenlőtlenséget $f_s$-re rendezve kapjuk a megengedett tartományt, $2f_H/k\le f_s\le2f_L/(k-1)$. A $k=1$ eset a szokásos aluláteresztő mintavétel ($f_s\ge2f_H$). Mivel a zóna nem lehet keskenyebb a jelnél ($f_s/2\ge B$), $k$ legfeljebb $f_H/B$ lehet, lefelé kerekítve: $k_{\max}=\lfloor f_H/B\rfloor$.`, m: [] },
        
        { t: 'A legkisebb mintavételi frekvencia', s: R`$k=4$-re behelyettesítünk.`,
          m: [['behelyettesítés', R`\frac{2\cdot25}{4}\le f_s\le\frac{2\cdot19}{3}\ \Longrightarrow\ 12{,}5\le f_s\le12{,}67\ \text{kHz}`, R`$k=\lfloor25/6\rfloor=4$`]] },
        { t: 'A jel-zaj viszony változása', s: R`Csak az $f_s/2B$ tag változik, mert a kvantáló, a csúcstényező és a szűrő ugyanaz.`,
          m: [['átalakítás', R`\Delta\text{SNR}=10\lg\frac{50}{f_{s,\min}}`, R`a két $10\lg(f_s/2B)$ tag különbsége`], ['számérték', R`10\lg\frac{50}{12{,}67}=5{,}96\ \text{dB}\ \ldots\ 10\lg\frac{50}{12{,}5}=6{,}02\ \text{dB}`, R`a tartomány két végére`]] }
      ],
      ered: [R`f_{s,\min}=12{,}5\ \text{kHz}\qquad\Delta\text{SNR}\approx6\ \text{dB}`],
      chk: [R`$f_s=12{,}5$: $-25+4\cdot12{,}5=25$, épp érintkezik. $-19+3\cdot12{,}5=18{,}5<19$, nem lapolódik.`, R`$6$ dB ugyanannyi, mint egy bit, mert négyszeres a túlmintavételezés.`],
      hib: [R`$2B=12$ kHz-et adnak meg. A sáváteresztő táblázat nélkül ez nem derül ki.`],
      links: [EA, ['Gyakorlat', [['tg01 P.1.3 (TMIT)', TMIT]]]] },

    { id: 'p2_10', num: '2.10', title: 'Túlmintavételezés interpolált mintákkal', tags: [],
      src: R`TMIT gyak01 P.1.4 · azonosító: tg01_P14`,
      task: R`<p>A $15$ kHz sávszélességű jelet $44$ kHz-cel mintavételezzük, $20$ bites mintákkal. A visszaállító D/A átalakító $16$ bites, a szűrő ideális aluláteresztő. a) Mennyit javul a jel-zaj viszony, ha négyszeres sűrűségű interpolált mintákkal állítjuk vissza? b) Mire számíthatunk, ha a szűrő $15$ kHz-es töréspontú elsőfokú aluláteresztő?</p>`,
      ad: [R`$B=15$ kHz, $f_s=44$ kHz, D/A: $n=16$ bit`], ker: [R`a) $\text{SNR}$ előtte és utána`, R`b) a szivárgó komponensek`],
      miert: [[R`Miért a D/A bitszáma számít?`, R`A pontos ($20$ bites) mintákat a $16$ bites D/A kerekíti. A visszaállított jel kvantálási zaját ez a kerekítés adja.`],
        [R`Miért segít az interpoláció?`, R`A közbenső minták számolhatók a pontos mintákból. A D/A négyszer sűrűbben dolgozik, így a zaj négyszer szélesebb sávra oszlik szét.`]],
      elm: [[R`Jel-zaj viszony.`, R`Egyenletes kvantálásnál, $C$ csúcstényezőjű, teljes kivezérlésű jelre, $n$ bittel, $B$ sávú visszaállító szűrővel:`, R`\text{SNR}_{\mathrm{dB}}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B}+6{,}02\,n`]],
      lv: [
        { t: 'Kiindulási jel-zaj viszony', s: R`Szinuszra vonatkoztatva ($C^2=2$).`,
          m: [['behelyettesítés', R`\frac SN=\frac32\cdot\frac{44}{2\cdot15}\cdot2^{32}`, R`$C^2=2$, $f_s=44$, $B=15$ kHz, $n=16$`], ['számérték', R`10\lg\frac SN\approx99{,}8\ \text{dB}`, R`$1{,}76+1{,}66+96{,}3$`]] },
        { t: 'Négyszeres sűrűséggel', s: R`Csak az $f_s/2B$ tag változik.`,
          m: [['behelyettesítés', R`\frac SN=\frac32\cdot\frac{4\cdot44}{2\cdot15}\cdot2^{32}\ \Longrightarrow\ 105{,}8\ \text{dB}`, '+6 dB, mint egy bit']] },
        { t: 'Elsőfokú szűrővel', s: R`A legalacsonyabb szivárgó komponens $f_s-15$ kHz-nél van.`,
          m: [['számérték', R`44-15=29\ \text{kHz}\qquad 4\cdot44-15=161\ \text{kHz}`, 'interpolációval sokkal messzebb'], ['közelítés', R`|H(161)|\approx\frac{15}{161}\approx0{,}093\ \Longrightarrow\ \approx20\ \text{dB}`, 'elsőfokú szűrő, 20 dB/dekád']] }
      ],
      ered: [R`99{,}8\ \text{dB}\ \longrightarrow\ 105{,}8\ \text{dB}\qquad\text{szivárgás } 29\ \text{kHz helyett } 161\ \text{kHz-től, ott kb. 20 dB csillapítás}`],
      chk: [R`$10\lg4=6{,}02$ dB, és egy bit $6{,}02$ dB: a TMIT-füzet ugyanezt állapítja meg.`],
      hib: [R`A $20$ bites forrással számolnak. A kimenet pontosságát a $16$ bites D/A korlátozza.`],
      links: [['Gyakorlat', [['tg01 P.1.4 (TMIT)', TMIT]]]] },

    { id: 'p2_11', num: '2.11', title: 'Az előadás felvétele: 4 kHz, 9 kHz, 14 bit', tags: ['vizsga'],
      src: R`Marosi „Példák #1” 2. (2016) · azonosító: mgP_2`,
      task: R`<p>Az előadást digitális hangtechnikával rögzítjük. A mikrofon jelét $4$ kHz-es ideális aluláteresztő szűri, a mintavétel $9$ kHz, a kvantálás $14$ bites, egyenletes. a) Sikerül-e így tökéletes felvétel? b) Ha nem, miért? c) Kell-e szűrő a bemeneten és a kimeneten? d) Milyen hallható változást okoz, ha minden mintából elhagyjuk a legkisebb helyiértékű $6$ bitet? e) Ha a tréfás hallgató $26$ dB-lel hangosabban beszél, hányszoros a teljesítményigénye?</p>`,
      ad: [R`$B=4$ kHz, $f_s=9$ kHz, $n=14$ bit`], ker: [R`a)…c) szövegesen`, R`d) $\Delta\text{SNR}$`, R`e) teljesítményarány`],
      miert: [[R`Miért nem tökéletes, ha $f_s>2B$?`, R`Mintavétel szempontjából rendben van, de a $4$ kHz-es sávkorlát a beszéd magasabb összetevőit levágja, és a kvantálási zaj sem tűnik el soha.`],
        [R`Miért $6$ dB egy bit?`, R`Minden bit kétszer annyi szintet ad, a lépcső felére csökken, a zajteljesítmény negyedére. $10\lg4=6{,}02$ dB.`]],
      elm: [[R`Jel-zaj viszony.`, R`Egyenletes kvantálásnál, $C$ csúcstényezőjű, teljes kivezérlésű jelre, $n$ bittel, $B$ sávú visszaállító szűrővel:`, R`\text{SNR}_{\mathrm{dB}}=10\lg\frac{3}{C^2}+10\lg\frac{f_s}{2B}+6{,}02\,n`], [R`Decibel.`, R`Teljesítményarányra $10\lg$, feszültségre $20\lg$: 3 dB kétszeres, 10 dB tízszeres, 20 dB százszoros teljesítmény.`]],
      lv: [
        { t: 'Tökéletes-e?', s: R`Nem: a sávkorlát ($4$ kHz az érthetőséghez elég) és a kvantálási zaj miatt. Átlapolódás nincs, mert $9>2\cdot4$.`, m: [] },
        { t: 'Szűrők', s: R`A bemeneten kell, különben a $4{,}5$ kHz feletti zaj és hang átlapolódna. A kimeneten is kell, mert a D/A után ott vannak az $i\cdot9\pm f$ kHz-es másolatok ($i$ tetszőleges pozitív egész, $f$ a hang egy összetevőjének frekvenciája).`, m: [] },
        { t: '6 bit elhagyása', s: R`Minden bit $6$ dB.`,
          m: [['számérték', R`\Delta\text{SNR}=6\cdot6{,}02=36\ \text{dB}\qquad 2^{12}=4096\approx4000\text{-szeres zajteljesítmény}`, 'sistergés']] },
        { t: '26 dB hangosabban', s: R`Teljesítményarány a decibelből.`,
          m: [['átalakítás', R`10^{26/10}=10^{2{,}6}\approx398\approx400`, R`dB-ből teljesítményarány`]] }
      ],
      ered: [R`\text{d) } -36\ \text{dB}\ (\approx4000\times\ \text{zaj})\qquad\text{e) } \approx400\times`],
      chk: [R`$26$ dB $=20+6$ dB, azaz $100\cdot4=400$: a fejszámolás egyezik.`],
      hib: [R`$20\lg$-gel számolnak a teljesítménynél, és $20$-szorost kapnak.`],
      links: [EA, ['Gyakorlat', [['mgP_2 (Marosi „Példák #1”)', MAROSI]]], ['Vizsga', [['02 · 10. fejezet', VIZSGA]]]] },

    { id: 'p2_12', num: '2.12', title: 'Túlvezérlés: honnan jön a 3,5 kHz?', tags: ['vizsga', 'nehez'],
      src: R`Marosi „Példák #1” 2/b (2016) · azonosító: mgP_2b`,
      task: R`<p>Egy $8$ kHz-es mintavételi frekvenciájú rendszer egy $1{,}5$ kHz-es szinuszt hibátlanul visz át. Ha a bemenő amplitúdó $2$ V fölé nő, a kimeneten egy kis $3{,}5$ kHz-es komponens is megjelenik (a visszaállító szűrő $4$ kHz-es, jó minőségű aluláteresztő). a) Magyarázható-e ez a rendszer bemenő fokozatának túlvezérlésével? b) Milyen további frekvenciák lehetnek a kimeneten?</p>`,
      ad: [R`$f_s=8$ kHz, $f=1{,}5$ kHz, $f_R=4$ kHz`], ker: [R`a) magyarázat`, R`b) a $4$ kHz alatti komponensek`],
      miert: [[R`Miért páratlan felharmonikusok?`, R`A szimmetrikus vágás (túlvezérlés) a szinuszt a négyszög felé torzítja, amelynek csak páratlan felharmonikusai vannak.`],
        [R`Hogyan lesz $4{,}5$ kHz-ből $3{,}5$ kHz?`, R`A $3\cdot1{,}5=4{,}5$ kHz az $f_s/2$ felett van, álképe $8-4{,}5=3{,}5$ kHz (A2).`]],
      elm: [[R`Álképek.`, R`Egy $f$ frekvenciájú komponens a mintavétel után az $n f_s\pm f$ frekvenciákon is megjelenik.`]],
      lv: [
        { t: 'A torzítás komponensei', s: R`Erős túlvezérlésnél a jel a négyszöghöz közelít.`,
          m: [['definíció', R`f_k=(2k+1)\cdot1{,}5\ \text{kHz}=1{,}5;\ 4{,}5;\ 7{,}5;\ 10{,}5;\ \ldots`, R`a négyszögjel páratlan felharmonikusai`]] },
        { t: 'Mintavétel után', s: R`Minden komponensnek $n\cdot8\pm f_k$ álképe lesz.`,
          m: [['számérték', R`8-4{,}5=3{,}5\qquad8-7{,}5=0{,}5\qquad10{,}5-8=2{,}5\ \text{kHz}`, R`$n\cdot8\pm f_k$, a 4 kHz alattiak`], ['ellenőrzés', R`16-13{,}5=2{,}5\qquad16-16{,}5=-0{,}5\to0{,}5\ \text{kHz}`, 'a magasabbak ugyanezekre esnek']] }
      ],
      ered: [R`\text{a) igen}\qquad\text{b) } 0{,}5;\ 1{,}5;\ 2{,}5;\ 3{,}5\ \text{kHz}`],
      chk: [R`Marosi táblai megoldása ugyanezt a négy frekvenciát adja.`, R`Mind $1$ kHz-es rácson van, félúton: ez az $n\cdot8\pm(2k+1)\cdot1{,}5$ alakból következik.`],
      hib: [R`Csak a $4{,}5$ kHz álképét keresik, a $7{,}5$ és a $10{,}5$ kHz-es felharmonikust elfelejtik.`],
      du: [[R`2.2 (egyenirányítás)`, R`páros felharmonikusok, $n\cdot8\pm k\cdot3{,}6$ kHz`], [R`2.7 (négyszögjel)`, R`ugyanez a felharmonikus-logika szándékos négyszögjellel`]],
      links: [EA, ['Gyakorlat', [['mgP_2b (Marosi „Példák #1”)', MAROSI]]], ['Vizsga', [['02 · 10. fejezet', VIZSGA]]]] }
  ]
};
