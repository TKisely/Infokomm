---
module_id: "01_moodle_szamolasok"
title: "Infokommunikáció - 1. Modul: Moodle Számolási Alapfeladatok"
task_count: 15
schema_version: "1.0"
---

# Infokommunikáció - 1. Modul: Moodle Számolási Alapfeladatok

## Task_001
- **ID:** M1_T001
- **Topic:** Kétutas rádióösszeköttetés, szakaszcsillapítás, térerősség
- **Type:** Calculation

### Question
Egy sík föld feletti kétutas rádióösszeköttetés adóantennájának magassága $10\text{ m}$, a szakasztávolság $10\text{ km}$, az üzemi frekvencia $300\text{ MHz}$, az adóantenna nyeresége $5\text{ dB}$; a vevőantenna magassága $10\text{ m}$ és a vevőantenna nyeresége $3\text{ dB}$, a reflexió tökéletes.
a) Mekkora a szakaszcsillapítás értéke?
b) A vevőantenna magasságának változtatásával mekkora lesz a minimális és maximális vételi térerősség abszolút értéke közötti arány, ha a földreflexiós tényező nem -1, hanem -0.8?

### Solution
a) A kétutas szakaszcsillapítás értéke:
$$a_{kétutas} = 20 \lg\left(\frac{r^2}{2 \cdot h_T \cdot h_R}\right) - G_T - G_R = 20 \lg\left(\frac{(10^4)^2}{2 \cdot 10 \cdot 10}\right) - 5 - 3 = 112\text{ dB}$$

b) A maximális és minimális térerősség aránya:
$$\frac{E_{rmax}}{E_{rmin}} = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0{,}8}{1 - 0{,}8} = 9$$

---

## Task_002
- **ID:** M1_T002
- **Topic:** PAM jel, szimbólumközti áthallás (ISI), szemábra
- **Type:** Analysis & Calculation

### Question
A mellékelt ábrán látható impulzusválaszú csatornán közvetítünk adatot.
a) Rajzolja fel az alapsávi PAM jelet, ha az átvinni kívánt bitsorozat `...-0-1-1-0-0-1-...`, és az 1-et $+1$, a 0-t pedig $-1$ értékű amplitúdó ($d_k$) jeleníti meg!
b) Keletkezik-e itt szimbólumközti áthallás, ha a mintavétel fázisa $T_m = 3T/4$? (Indokolja válaszát!)
c) Rajzolja fel egy négyszintű jel szemábráját, ahol a $d_k$ értékek $-3, -1, +1, +3$ amplitúdójúak, és állapítsa meg, alkalmas-e ez az elemi jel négyszintű rendszer üzemeltetésére! Válaszát indokolja!

### Solution
a) Az új szimbólumba belenyúlik az előző szimbólum lecsengő értéke is.
b) Mivel $T_m = 3T/4$-nél a mintavételi értékek mindig a döntési küszöb felett vagy alatt vannak ($\pm 0{,}8$ és $\pm 1{,}7$ tartományban; $0$ a döntési küszöb), **nem keletkezik szimbólumközti áthallás (ISI)**.
c) 4-szintű jel esetén több átmenetnél is áthallás keletkezik (pl. $+3$ után $+1$ jön: $1{,}25 \cdot 1 + 0{,}45 \cdot 3 = 2{,}6$, ami átlépi a döntési küszöböt). Így **4-szintű jel átvitelére nem alkalmas**.

---

## Task_003
- **ID:** M1_T003
- **Topic:** Lineáris blokkkódok, generátormátrix, paritásellenőrző mátrix, szindróma
- **Type:** Coding theory

### Question
Adott egy kód az alábbi hozzárendeléssel:
`00 -> 00000`, `01 -> 01110`, `10 -> 10101`, `11 -> 11011`.
a) Adja meg a kód generátormátrixát! Mi lehetett a legvalószínűbb küldött üzenet, amikor a vett blokk $v = (01010)$?
b) Adja meg a kód paritásellenőrző-mátrixát! Számítsa ki, milyen szindrómát kapunk a fenti $v$ esetén!
c) Hány bithiba detektálható ezzel a kóddal biztosan? Hány bithiba javítható ezzel a kóddal biztosan?

### Solution
a) Szisztematikus generátormátrix:
$$G = \begin{bmatrix} 1 & 0 & 1 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 \end{bmatrix}$$
Ha $v = (01010)$, a legközelebbi kódszó a `01110` (Hamming-távolságuk 1). A legvalószínűbb küldött üzenet a **01**.

b) Paritásellenőrző mátrix transzponáltja:
$$H^T = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$
A szindrómavektor: $s = v \cdot H^T = (1, 0, 0)$.

c) A minimális kódtávolság $d_{min} = 3$.
- Biztosan detektálható hibák száma: $d_{min} - 1 = 2$.
- Biztosan javítható hibák száma: $\lfloor(d_{min} - 1)/2\rfloor = 1$.

---

## Task_004
- **ID:** M1_T004
- **Topic:** AM-DSB moduláció, spektrum, teljesítmény
- **Type:** Calculation

### Question
Egy AM-DSB modulátor $240\text{ kHz}$ vivőfrekvenciájú jelet állít elő. A moduláló jel $30\text{ kHz}$-es szinuszos jel, a modulációs mélység $100\%$. A modulált jel csúcsértéke $6\text{ V}$!
a) Rajzolja fel léptékhelyesen a modulált jel egy szakaszát!
b) Írja fel a modulált jel időfüggvényét! Milyen egységben kell a felírt képletben az időt behelyettesíteni? Milyen frekvenciájú spektrális összetevői vannak e jelnek, és mekkora ezek amplitúdója?
c) Mekkora a jel átlagteljesítménye?

### Solution
a) A csúcsérték $\hat{U} = U_v + U_m = 6\text{ V}$ és $m = U_m/U_v = 1 \implies U_v = 3\text{ V}$, $U_m = 3\text{ V}$.
b) Időfüggvény:
$$s_{AM}(t) = (3 + 3 \cdot \sin(2\pi \cdot 30 \cdot t)) \cdot \cos(2\pi \cdot 240 \cdot t)$$
Az időt **ms**-ban kell behelyettesíteni.
Spektrális összetevők:
- $240\text{ kHz}$-nél: $3\text{ V}$ (vivő)
- $210\text{ kHz}$ és $270\text{ kHz}$-nél: $1{,}5\text{ V}$ ($U_m/2$)

c) Átlagteljesítmény ($1\,\Omega$-os terhelésen):
$$P_{átlag} = \frac{U_v^2}{2} + \frac{(U_m/2)^2}{2} + \frac{(U_m/2)^2}{2} = 4{,}5 + 1{,}125 + 1{,}125 = 6{,}75\text{ W}$$

---

## Task_005
- **ID:** M1_T005
- **Topic:** Akusztika, hangnyomásszint, fájdalomküszöb, phon
- **Type:** Calculation

### Question
Egy hangsugárzótól $1\text{ m}$ távolságban a hangnyomásszint $93\text{ dB}$.
a) Mekkora teljesítményre lenne szükség ahhoz $1\text{ kHz}$ frekvenciájú jel esetén, hogy elérje az emberi fájdalomküszöböt a hangsugárzó által keltett hangnyomásszint?
b) Ha a mérőmikrofon pozíciójában helyezkednénk el, hány phon hangosságúnak érzékelnénk a hangot az a) esetben?

### Solution
a) Az emberi fájdalomküszöb $SPL = 120\text{ dB}$. A különbség $120 - 93 = 27\text{ dB}$.
A szükséges teljesítményarány: $10^{27/10} \approx 501{,}2$-szeres teljesítmény szükséges a kiindulási értékhez képest.

b) $1\text{ kHz}$-es frekvencián a decibelben kifejezett hangnyomásszint értéke számszerűen megegyezik a phonban mért hangossággal, így **120 phon**.

---

## Task_006
- **ID:** M1_T006
- **Topic:** GSM hálózat, Frequency Reuse Factor (FRF), klaszter és kapacitás
- **Type:** Network design & Calculation

### Question
a) Rajzoljon egy $N=7$ Frequency Reuse Factor-ral rendelkező, nyílt, sík terepre ésszerűen elrendezett klasztert. Rajzoljon be körvonalaival két szomszédos klasztert is!
b) Ha a szolgáltató 70 FDM csatornával rendelkezik, mennyi lehet az aktív, éppen telefonáló GSM előfizetők száma ebben a klaszteren, ennél a 900MHz környéki frekvenciákon „működő” szolgáltatónál?
c) A GSM modellben mi az FRF szerepe? Mi az előnye/hátránya a nagy FRF-nek a kicsihez képest?

### Solution
a) Egy klaszter $N=7$ szabályos hatszög alakú cellából áll. A szomszédos klaszterekben lévő társcsatornás cellák középpontjainak védőtávolsága: $D = \sqrt{3N} \cdot R = \sqrt{21} \cdot R$.

b) A GSM 900 MHz-es szabványban 1 FDM csatornán (200 kHz sávszélesség) TDMA keretezéssel **8 időrés** érhető el.
Így a klaszterben egyidejűleg aktív telefonáló előfizetők száma:
$$N_{\text{aktív}} = 70 \text{ FDM csatorna} \times 8 \text{ időrés/csatorna} = 560 \text{ aktív előfizető}$$

c) 
- **FRF (Frequency Reuse Factor) szerepe:** Megadja, hogy hány cellából áll egy klaszter, azaz hány csatornacsoportra osztjuk fel a teljes frekvenciakészletet.
- **Nagy FRF előnye:** Nagyobb az azonos frekvenciát használó cellák távolsága ($D$), így kisebb a társcsatornás interferencia (C/I arány javul).
- **Nagy FRF hátránya:** Egy cellára kevesebb csatorna jut ($C_{\text{cella}} = C_{\text{összes}} / N$), így csökken a cellánkénti egyidejű kapacitás.

---

## Task_007
- **ID:** M1_T007
- **Topic:** GSM hálózati architektúra, roaming, azonosítás
- **Type:** Conceptual

### Question
Két GSM szolgáltató ($lpha$ és $eta$) távközlési hálózatának elemei láthatóak. MS-A1 és MS-A2 is az $lpha$ hálózat előfizetője, utóbbi a $eta$ hálózatban barangol (roaming). Most MS-A1 hívja MS-A2-t.
(a) Melyik hálózati eszközhöz érkezik először információ MS-A2 hívás-indításáról?
(b) Melyik HLR kerül lekérdezésre a híváshoz kötődően?
(c) Melyik eszközök szereznek tudomást MS-A2 $eta$-hálózatbeli mozgásáról?
(d) Melyik eszköz segítségével kerül azonosításra MS-A1 SIM-kártyája?

### Solution
(a) **$lpha$-BTS** (MS-A1 hívásindításakor a saját bázisállomásához)
(b) **$lpha$-HLR** (mivel MS-A2 az $lpha$-hálózat előfizetője)
(c) **$lpha$-HLR**, valamint a látogatott hálózatban a **$eta$-MSC** és **$eta$-VLR**
(d) **$lpha$-AuC** (Authentication Centre)

---

## Task_008
- **ID:** M1_T008
- **Topic:** Forráskódolás, Kraft-McMillan egyenlőtlenség, prefix kód
- **Type:** Coding theory

### Question
a) $2, 2, 3, 3, 3, 4, 4, 4, 4$ kódszóhosszakkal lehet-e egyértelműen megfejthető kódot készíteni?
b) Készítsen prefixum-mentes kódot a $2, 2, 3, 3, 3, 5, 5, 5, 5$ kódszóhosszakkal!

### Solution
a) A Kraft–McMillan-egyenlőtlenség alapján:
$$\sum_{i=1}^{N} 2^{-l_i} = 2 \cdot 2^{-2} + 3 \cdot 2^{-3} + 4 \cdot 2^{-4} = \frac{2}{4} + \frac{3}{8} + \frac{4}{16} = \frac{18}{16} = 1{,}125 > 1$$
Mivel a Kraft-egyenlőtlenség nem teljesül ($\sum 2^{-l_i} > 1$), **nem készíthető egyértelműen megfejthető kód**.

b) A $2, 2, 3, 3, 3, 5, 5, 5, 5$ kódszóhosszakkal a Kraft-összeg éppen $1$, így készíthető prefixmentes kód. Egy lehetséges kódtábla:
- 2 bitesek: `00`, `11`
- 3 bitesek: `010`, `011`, `100`
- 5 bitesek: `10100`, `10101`, `10110`, `10111`

---

## Task_009
- **ID:** M1_T009
- **Topic:** FM-sztereó rádiózás, multiplex jel spektruma
- **Type:** Conceptual & Signal analysis

### Question
a) Rajzolja fel az alapsávi FM-sztereó rádiójel spektrumát!
b) Miért halljuk monó vevőkészülékünkkel mindkét (bal és jobb) csatorna jelét?
c) Milyen következménnyel jár, ha az alapsávi FM-sztereó rádiójel M összetevőjével szemben az S komponens 6 dB-lel csillapodik?

### Solution
a) Az alapsávi sztereó multiplex jel összetevői: $M = L + R$ ($0\dots15\text{ kHz}$), $19\text{ kHz}$-es pilottónus, $S = L - R$ ($23\dots53\text{ kHz}$ sávban $38\text{ kHz}$-es AM-DSB/SC vivőre ültetve), valamint az RDS jel ($57\text{ kHz}$).
b) A monó összetevő $M = L + R$, így a monó vevőkészülék szűrői után közvetlenül megjelenik mindkét csatorna összege.
c) Ha az $S$ komponens $6\text{ dB}$-lel csillapodik (amplitúdója feleződik), a sztereó szeparáció gyengül, és a jel-zaj viszony romlása miatt a sztereó hangminőség érezhetően leromlik.

---

## Task_010
- **ID:** M1_T010
- **Topic:** FSK moduláció, frekvencialöket, vivőfrekvencia
- **Type:** Calculation

### Question
Egy bináris FSK-t használó rendszerben a jelzőfrekvenciák $f_1 = 22200\text{ Hz}$ és $f_2 = 24200\text{ Hz}$.
a) Adja meg a frekvencialöketet ($f_D$)!
b) Adja meg a vivőfrekvenciát ($F$)!

### Solution
a) A frekvencialöket:
$$f_D = \frac{|f_2 - f_1|}{2} = \frac{24200 - 22200}{2} = 1000\text{ Hz} = 1\text{ kHz}$$

b) A vivőfrekvencia:
$$F = \frac{f_1 + f_2}{2} = \frac{22200 + 24200}{2} = 23200\text{ Hz} = 23{,}2\text{ kHz}$$

---

## Task_011
- **ID:** M1_T011
- **Topic:** VoIP csomagolás, kodek méretezés, sávszélesség-igény
- **Type:** Calculation

### Question
Egy VoIP rendszerben egy beszédkodek 5 ms-onként generál egy 10 byte-os beszédmintát. A VoIP csomagolási overhead (L2 + IP + UDP + RTP fejléc) összesen 47 byte.
a) Számítsa ki a csomaggenerálási sebességet és az átviteli sávszélességet, ha minden IP csomag pontosan 1 beszédmintát tartalmaz ($n=1$)!
b) Számítsa ki az átviteli sávszélességet, ha egy IP csomagban 2 beszédmintát vonunk össze ($n=2$)!

### Solution
a) Ha $n=1$:
- Csomagfrekvencia: $V_{csomag} = \frac{1}{5\text{ ms}} = 200\text{ csomag/s (pps)}$
- Hasznos beszédsebesség: $V_{beszéd} = \frac{10 \times 8\text{ bit}}{0{,}005\text{ s}} = 16\text{ kbit/s}$
- Teljes csomagméret: $10\text{ B} + 47\text{ B} = 57\text{ byte} = 456\text{ bit}$
- Szükséges sávszélesség: $B = 200 \times 456\text{ bit/s} = 91{,}2\text{ kbit/s}$

b) Ha $n=2$:
- Csomagfrekvencia: $V_{csomag} = \frac{1}{10\text{ ms}} = 100\text{ pps}$
- Teljes csomagméret: $20\text{ B} + 47\text{ B} = 67\text{ byte} = 536\text{ bit}$
- Szükséges sávszélesség: $B = 100 \times 536\text{ bit/s} = 53{,}6\text{ kbit/s}$

---

## Task_012
- **ID:** M1_T012
- **Topic:** Mintavételezés aluláteresztő és sávszűrő esetén
- **Type:** Calculation

### Question
Egy analóg jel frekvenciatartománya $45\text{ kHz}$ és $75\text{ kHz}$ között terjed.
a) Mekkora a minimális mintavételi frekvencia aluláteresztő (LPF) mintavételezés esetén?
b) Mekkora a lehetséges mintavételi frekvenciatartomány sávszűrős (BPF) mintavételezés esetén?

### Solution
a) LPF mintavételezésnél a legmagasabb frekvencia a mérvadó ($f_{max} = 75\text{ kHz}$):
$$f_s \ge 2 \cdot f_{max} = 2 \cdot 75\text{ kHz} = 150\text{ kHz}$$

b) BPF mintavételezésnél a sávszélesség $B = 75 - 45 = 30\text{ kHz}$, a sávpozíció paramétere $k = \lfloor 75 / 30 \rfloor = 2$.
A megengedett sávpassz mintavételi frekvenciatartomány:
$$\frac{2 \cdot 75\text{ kHz}}{2} \le f_s \le \frac{2 \cdot 45\text{ kHz}}{2 - 1} \implies 75\text{ kHz} \le f_s \le 90\text{ kHz}$$

---

## Task_013
- **ID:** M1_T013
- **Topic:** Szuperheterodin FM vevő, oszcillátor frekvencia, tükörfrekvencia
- **Type:** Calculation

### Question
Egy FM vevőkészüléket a Kossuth Rádió $83{,}3\text{ MHz}$-es adójára hangolunk. A vevő középfrekvenciája $f_{KF} = 10{,}7\text{ MHz}$.
a) Mekkora a helyi oszcillátor frekvenciája felső keverés esetén?
b) Mekkora a vevő tükörfrekvenciája ezen a hangolási ponton?

### Solution
a) Felső keverésnél a helyi oszcillátor frekvenciája:
$$f_0 = f_v + f_{KF} = 83{,}3\text{ MHz} + 10{,}7\text{ MHz} = 94{,}0\text{ MHz}$$

b) A tükörfrekvencia felső keverésnél:
$$f_t = f_v + 2 \cdot f_{KF} = 83{,}3\text{ MHz} + 21{,}4\text{ MHz} = 104{,}7\text{ MHz}$$

---

## Task_014
- **ID:** M1_T014
- **Topic:** Sávhatárolt jel mintavételezése és kvantálási bitszáma ($SNR = 64	ext{ dB}$)
- **Type:** Calculation

### Question
Egy $f_min = 35	ext{ kHz}$ és $f_max = 70	ext{ kHz}$ közötti jelet kvantálunk és digitalizálunk. A megkövetelt jel-kvantálási zaj arány legalább $64	ext{ dB}$.
a) Adja meg a minimális mintavételi frekvenciát aluláteresztő és sávszűrő mintavételezésnél!
b) Hány bites kvantálót kell alkalmaznunk a jel-zaj arány teljesüléséhez?

### Solution
a) Mintavétel:
- LPF: $f_s \ge 2 \cdot 70\text{ kHz} = 140\text{ kHz}$
- BPF ($B = 35\text{ kHz}, k = 70/35 = 2$): $70\text{ kHz} \le f_s \le 70\text{ kHz} \implies f_s = 70\text{ kHz}$

b) Kvantáló bitszáma (uniform kvantáló esetén $SNR \approx 6{,}02 \cdot n + 1{,}76\text{ dB}$):
$$64 \le 6{,}02 \cdot n + 1{,}76 \implies n \ge \frac{62{,}24}{6{,}02} \approx 10{,}34 \implies n = 11\text{ bit}$$

---

## Task_015
- **ID:** M1_T015
- **Topic:** Szuperheterodin vevő keverése, tükörfrekvencia és oszcillátortartomány
- **Type:** Calculation

### Question
Egy vevő a $24\text{–}36\text{ MHz}$ sávban működik, a középfrekvencia $f_{KF} = 455\text{ kHz}$.
a) Számítsa ki a helyi oszcillátor frekvenciatartományát alsó és felső keverésre! Melyik elrendezést érdemes választani?
b) Mekkora a tükörfrekvencia, ha a vevőt $25{,}5\text{ MHz}$-re hangoljuk alsó keverés mellett?

### Solution
a) Oszcillátortartományok:
- **Felső keverés:** $f_0 \in [24 + 0{,}455; 36 + 0{,}455] = [24{,}455; 36{,}455]\text{ MHz}$. Relatív átfogás: $36{,}455 / 24{,}455 \approx 1{,}49$.
- **Alsó keverés:** $f_0 \in [24 - 0{,}455; 36 - 0{,}455] = [23{,}545; 35{,}545]\text{ MHz}$. Relatív átfogás: $35{,}545 / 23{,}545 \approx 1{,}51$.
A **felső keverés** kedvezőbb a kisebb relatív átfogás miatt.

b) Alsó keverésnél ($f_v = 25{,}5\text{ MHz}$):
- Oszcillátor: $f_0 = 25{,}5 - 0{,}455 = 25{,}045\text{ MHz}$
- Tükörfrekvencia: $f_t = f_v - 2 \cdot f_{KF} = 25{,}5 - 0{,}91 = 24{,}59\text{ MHz}$
