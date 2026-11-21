---
forras: "VikWiki/Infokomm_vizsga_2014_01_14.pdf (4 oldal, fényképezett)"
tartalom: "Infokommunikáció vizsga, 2014. január 14. – 10 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2014. január 14.

Pontozás: minden feladat 2 pont, kivéve az 1. és 9. feladatot (3–3 pont). Indoklás nélküli eredményt nem értékelnek.

---

## 1. feladat – C(5,2) szisztematikus lineáris kód

**Feladat.** A kódszavak között szerepel a 10101 és a 01101. a) Generátor- és paritásellenőrző mátrix? b) Minimális kódtávolság; hány bithiba észlelése, ill. javítása garantált?

**Megoldás.**
a) Szisztematikus kódnál az üzenet (2 bit) elöl áll, így a két kódszó éppen a 10 és 01 üzenetek kódszava:
$$G=\begin{pmatrix}1&0&1&0&1\\0&1&1&0&1\end{pmatrix}=[I_2\,|\,P],\quad P=\begin{pmatrix}1&0&1\\1&0&1\end{pmatrix},\qquad H=[P^T\,|\,I_3]=\begin{pmatrix}1&1&1&0&0\\0&0&0&1&0\\1&1&0&0&1\end{pmatrix}.$$
b) Kódszavak: 00000, 10101, 01101, 11000 → a legkisebb nem nulla súly **$d_{min}=2$** (11000). Garantáltan **1 hibát jelez**, **javítani nem tud** (0 hibát).

**Ellenőrzés:** $GH^T=0$: pl. $(10101)\cdot$ $H$ sorai: $1+1=0$, $0$, $1+1=0$ (mod 2). ✔

---

## 2. feladat – Sáváteresztő jel kvantálója (60–108 kHz, 70 dB)

**Feladat.** a) A büntetlenül választható mintavételi frekvenciák? b) Egy célszerű $f_s$ mellett az egyenletes kvantáló bitszáma?

**Megoldás.** (Lásd 2008.01.17 1. és 2012.01.03 4. feladat.)
a) **108 kHz ≤ f_s ≤ 120 kHz**, vagy **f_s ≥ 216 kHz**.
b) $f_s=112$ kHz (egyenlő védősávok); teljes kivezérlésű szinuszra $1{,}76+6{,}02n\ge70$ → **12 bit**. (A tárgy gyűjteménye ugyanerre a feladatra a szinuszos $1{,}76+6{,}02n$ képlettel 12 bitet ad.)

---

## 3. feladat – EIR és FNR

a) **EIR (Equipment Identity Register):** a mobilkészülékek azonosítóinak (IMEI) adatbázisa fehér (engedélyezett), szürke (megfigyelt) és fekete (tiltott – pl. lopott, nem típusengedélyes) listával; az MSC hívásfelépítéskor / regisztrációkor lekérdezheti, és a tiltott készüléket kizárja.
b) **FNR (Flexible Numbering Register):** a **számhordozhatóságot** támogató adatbázis: megmondja, hogy egy (esetleg másik szolgáltatótól áthozott) hívószám (MSISDN) melyik hálózathoz / melyik HLR-hez tartozik, így a hívást és a HLR-lekérdezést a megfelelő helyre lehet irányítani (a hívószám már nem jelzi egyértelműen a szolgáltatót).

---

## 4. feladat – Vevőantenna magassága az interferenciazóna határán

**Feladat.** 900 MHz-es vevő antennája 5 m magasan, éppen az interferenciazóna határán működik. Hány dB-lel változik a vett teljesítmény, ha az antenna magasságát a) felére, b) másfélszeresére módosítjuk?

**Megoldás.** $P\propto\sin^2\frac{2\pi h_Th_R}{\lambda d}$; a határon az argumentum $\pi/2$ (maximum).
a) $h_R=2{,}5$ m → argumentum $\pi/4$ → $\sin^2=0{,}5$ → **−3 dB**.
b) $h_R=7{,}5$ m → argumentum $3\pi/4$ → $\sin^2=0{,}5$ → **−3 dB**.
(Mindkét irányban csökken, mert a határon a térerősség-maximumban vagyunk.)

---

## 5. feladat – Fair queueing, WFQ

**Megoldás.**
- **Fair queueing vs. szigorú prioritás:** a szigorú prioritásnál a magas prioritású forgalom folyamatos jelenléte mellett az alacsony prioritású **kiéhezik** (soha nem kerül sorra). A fair queueing a folyamokat körbejárva szolgálja ki, **minden folyamnak egyenlő részt** ad a kapacitásból, így senki sem éhezik ki, és egy túlküldő folyam sem nyomja el a többit.
- **WFQ vs. fair queueing:** a WFQ **súlyokat** rendel a folyamokhoz/osztályokhoz, így **különböző, garantált kapacitásarányokat** lehet beállítani (szolgáltatásminőség-differenciálás: pl. a beszéd nagyobb részt kap), miközben megmarad a kiéheztetés-mentesség.

---

## 6. feladat – Hangosság phonban

**Feladat.** A hangszóró éppen hallható 10 kHz-es hangjának szintje 10 dB. 1 kHz-re csökkentve a frekvenciát a mért szint 30 dB. a) A 10 kHz-es hang hangossága? b) Az 1 kHz-esé?

**Megoldás.**
a) Az éppen hallható hang a hallásküszöbön van → **0 phon**.
b) 1 kHz-en a phon-érték definíció szerint megegyezik a dB-ben mért hangnyomásszinttel → **30 phon**.

---

## 7. feladat – Lali majom golyói (forráskódolás)

**Feladat.** Férfiakat kék, nőket piros, gyerekeket zöld golyóval dob meg; a látogatók 66%-a gyerek, 20%-a nő (tehát 14% férfi). a) Legtömörebb bináris írásmód? b) Naponta hány bit, ha 1000 látogató van?

**Megoldás.**
a) Huffman: **zöld → 0, piros → 10, kék → 11**. Átlagos hossz $0{,}66\cdot1+0{,}34\cdot2=$ **1,34 bit/dobás**. (Entrópia: $H=-\sum p\log_2p=1{,}257$ bit; ezt csak több dobás együttes kódolásával lehetne jobban megközelíteni.)
b) Látogatónként egy dobást feltételezve: $1000\cdot1{,}34=$ **1340 bit/nap** (az elméleti alsó korlát ≈ 1257 bit). (A feladat a látogatók számát adja meg, és minden látogató – férfi, nő vagy gyerek – egyértelműen egy színhez tartozik: egy látogató = egy dobás.)

**Ellenőrzés:** Kraft: $2^{-1}+2\cdot2^{-2}=1$. ✔

---

## 8. feladat – 16-QAM emelt koszinuszos szűrővel

**Feladat.** 1800 Hz-es vivő, 16-QAM, 9600 bit/s. a) Sávszélesség 20%-os lekerekítésű emelt koszinuszos szűrővel? b) Rajzolja fel a formázó szűrő karakterisztikáját.

**Megoldás.**
a) 4 bit/szimbólum → $1/T=2400$ Bd. Modulált jel sávszélessége $(1+\alpha)/T=1{,}2\cdot2400=$ **2880 Hz**, azaz **360–3240 Hz** (belefér a 300–3400 Hz-es telefonsávba).
b) Alapsávi formázó szűrő: **0–960 Hz** között lapos (1), **960–1440 Hz** között koszinuszosan csökken, 1200 Hz-en ($1/2T$) 0,5, **1440 Hz** felett 0. (Négyzetgyök-emelt koszinusz esetén – adó és vevő megosztva – az 1200 Hz-es érték $1/\sqrt2$.)

![](abrak/emelt_cos_alfa02_2400Bd.svg)


---

## 9. feladat – GSM-cella forgalma (Erlang-B)

**Feladat.** 900 MHz-es GSM, újrahasznosítási tényező 12, átlagos tartási idő 2 perc (exponenciális). Óránként átlagosan hány hívás lehet egy cellában, ha a blokkolás legfeljebb 1%?

**Megoldás.** GSM 900: 124 vivő × 8 időrés = 992 csatorna klaszterenként → cellánként $992/12\approx82$ csatorna (egy szolgáltató a teljes sávot használja; a vezérlőcsatornákat elhanyagolva).
Erlang-B, $N=82$, $B=1\%$ → $A\approx$ **67 Erl** (a log-log grafikonon a 80-as görbe környékén ~65 Erl).
$$\lambda=\frac{A}{h}=\frac{67}{2\ \text{perc}}=33{,}5\ \text{hívás/perc}\approx\mathbf{2000\ hívás/óra}.$$
(A feladat ugyanezen változata a 2014.12.15-i lapon kifejezetten „egyetlen szolgáltatót” feltételez, és a tárgy gyűjteményének megoldása is a teljes sávval, ~80 csatornával, 1950 hívás/órával számol. A vezérlőcsatornák néhány időrést elvisznek, ez ~1–2%-os eltérés.)

**Ellenőrzés:** Erlang-B rekurzióval: $N=80$: 65,4 Erl (1961 hívás/óra), $N=82$: 67,2 Erl (2017 hívás/óra). ✔

---

## 10. feladat – 8QAM konstellációk átlagteljesítménye

**Feladat.** Három 8 pontos konstelláció, a pontok közti minimális távolság $2A$: (a) 3×3-as rács középpont nélkül; (b) középen két pont az I tengelyen, felette és alatta 3–3 pont; (c) 2×4-es téglalap. Átlagos adóteljesítmény? Melyik a legenergiatakarékosabb?

**Megoldás.** (Az ábráról leolvasott elrendezésekkel.)
- **(a)** pontok: $(\pm2A,\pm2A)$ – $8A^2$; $(0,\pm2A)$, $(\pm2A,0)$ – $4A^2$ → $P=\frac{4\cdot8+4\cdot4}{8}A^2=$ **6 A²**.
- **(b)** pontok (a fényképen a belső pontok vízszintes távolsága 29, a külső oszlopoké 58, a sorok távolsága 60 képpont, azaz $A$, $2A$, $2A$): $(\pm A,0)$ – $A^2$; $(0,\pm2A)$ – $4A^2$; $(\pm2A,\pm2A)$ – $8A^2$ → $P=\frac{2\cdot1+2\cdot4+4\cdot8}{8}A^2=$ **5,25 A²**.
- **(c)** pontok: $(\pm A,\pm A)$ – $2A^2$; $(\pm3A,\pm A)$ – $10A^2$ → $P=$ **6 A²**.
**A (b) a legenergiatakarékosabb** (ugyanakkora minimális távolság – azonos zajtűrés – mellett $10\lg(6/5{,}25)=0{,}58$ dB-lel kevesebb teljesítmény).

**Ellenőrzés:** (b)-ben a legközelebbi párok: $(-A,0)$–$(A,0)$: $2A$; $(0,2A)$–$(2A,2A)$: $2A$; $(A,0)$–$(0,2A)$ és $(A,0)$–$(2A,2A)$: $\sqrt5A>2A$ – a minimális távolság $2A$. ✔ A tárgy gyűjteményének (2014.12.15) átirata ugyanezeket a koordinátákat és 5,25A²-et ad. (Megjegyzés: ha a középső sort $\sqrt3A$-ra közelebb húznánk, a minimális távolság még mindig $2A$ maradna, és $4{,}5A^2$ adódna – ez a (b) elrendezés optimalizált változata.)
