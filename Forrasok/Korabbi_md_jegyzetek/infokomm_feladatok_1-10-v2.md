---
title: Infokommunikáció Vizsgafeladatok (1-10) - v2
processed_count: 10
task_range: "1-10"
version: 2
---

# Infokommunikáció Feladatgyűjtemény (1–10. feladat - Javított)

## Feladat 1
- **ID:** 1
- **Témakör:** Kétutas rádióösszeköttetés, szakaszcsillapítás, térerősség

### Kérdés
Egy sík föld feletti kétutas rádióösszeköttetés adóantennájának magassága $10\text{ m}$, a szakasztávolság $10\text{ km}$, az üzemi frekvencia $300\text{ MHz}$, az adóantenna nyeresége $5\text{ dB}$; a vevőantenna magassága $10\text{ m}$ és a vevőantenna nyeresége $3\text{ dB}$, a reflexió tökéletes.
a) Mekkora a szakaszcsillapítás értéke?
b) A vevőantenna magasságának változtatásával mekkora lesz a minimális és maximális vételi térerősség abszolút értéke közötti arány, ha a földreflexiós tényező nem -1, hanem -0.8?

### Megoldás
a) A kétutas szakaszcsillapítás értéke:
$$a_{kétutas} = 20 \lg\left(\frac{r^2}{h_T h_R}\right) - G_T - G_R = 112\text{ dB}$$

b) A maximális és minimális térerősség aránya:
$$\frac{E_{rmax}}{E_{rmin}} = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0{,}8}{1 - 0{,}8} = 9$$

---

## Feladat 2
- **ID:** 2
- **Témakör:** PAM jel, szimbólumközti áthallás (ISI), szemábra

### Kérdés
A mellékelt ábrán látható impulzusválaszú csatornán közvetítünk adatot.
a) Rajzolja fel az alapsávi PAM jelet, ha az átvinni kívánt bitsorozat `...-0-1-1-0-0-1-...`, és az 1-et $+1$, a 0-t pedig $-1$ értékű amplitúdó ($d_k$) jeleníti meg!
b) Keletkezik-e itt szimbólumközti áthallás, ha a mintavétel fázisa $T_m = 3T/4$? (Indokolja válaszát!)
c) Rajzolja fel egy négyszintű jel szemábráját, ahol a $d_k$ értékek $-3, -1, +1, +3$ amplitúdójúak, és állapítsa meg, alkalmas-e ez az elemi jel négyszintű rendszer üzemeltetésére! Válaszát indokolja!

### Megoldás
a) Az új szimbólumba belenyúlik az előző szimbólum lecsengő értéke is.
b) Mivel $T_m = 3T/4$-nél a mintavételi értékek mindig a döntési küszöb felett vagy alatt vannak ($\pm 0{,}8$ és $\pm 1{,}7$ tartományban; $0$ a döntési küszöb), nem keletkezik szimbólumközti áthallás (ISI).
c) $4$-szintű jel esetén több átmenetnél is áthallás keletkezik (pl. $+3$ után $+1$ jön: $1{,}25 \cdot 1 + 0{,}45 \cdot 3 = 2{,}6$, ami átlépi a döntési küszöböt). Így $4$-szintű jel átvitelére nem alkalmas.

---

## Feladat 3
- **ID:** 3
- **Témakör:** Lineáris blokkkódok, generátormátrix, paritásellenőrző mátrix, szindróma

### Kérdés
Adott egy kód az alábbi hozzárendeléssel:
`00 -> 00000`, `01 -> 01110`, `10 -> 10101`, `11 -> 11011`.
a) Adja meg a kód generátormátrixát! Mi lehetett a legvalószínűbb küldött üzenet, amikor a vett blokk $v = (01010)$?
b) Adja meg a kód paritásellenőrző-mátrixát! Számítsa ki, milyen szindrómát kapunk a fenti $v$ esetén!
c) Hány bithiba detektálható ezzel a kóddal biztosan? Hány bithiba javítható ezzel a kóddal biztosan?

### Megoldás
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

## Feladat 4
- **ID:** 4
- **Témakör:** AM-DSB moduláció, spektrum, teljesítmény

### Kérdés
Egy AM-DSB modulátor $240\text{ kHz}$ vivőfrekvenciájú jelet állít elő. A moduláló jel $30\text{ kHz}$-es szinuszos jel, a modulációs mélység $100\%$. A modulált jel csúcsértéke $6\text{ V}$!
a) Rajzolja fel léptékhelyesen a modulált jel egy szakaszát!
b) Írja fel a modulált jel időfüggvényét! Milyen egységben kell a felírt képletben az időt behelyettesíteni? Milyen frekvenciájú spektrális összetevői vannak e jelnek, és mekkora ezek amplitúdója?
c) Mekkora a jel átlagteljesítménye?

### Megoldás
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

## Feladat 5
- **ID:** 5
- **Témakör:** Akusztika, hangnyomásszint, fájdalomküszöb, phon

### Kérdés
Egy hangsugárzótól $1\text{ m}$ távolságban a hangnyomásszint $93\text{ dB}$.
a) Mekkora teljesítményre lenne szükség ahhoz $1\text{ kHz}$ frekvenciájú jel esetén, hogy elérje az emberi fájdalomküszöböt a hangsugárzó által keltett hangnyomásszint?
b) Ha a mérőmikrofon pozíciójában helyezkednénk el, hány phon hangosságúnak érzékelnénk a hangot az a) esetben?

### Megoldás
a) Az emberi fájdalomküszöb $SPL = 120\text{ dB}$. A különbség $120 - 93 = 27\text{ dB}$.
A szükséges teljesítményarány: $10^{27/10} \approx 501{,}2$-szeres teljesítmény szükséges.

b) $1\text{ kHz}$-es frekvencián a decibelben kifejezett hangnyomásszint értéke számszerűen megegyezik a phonban mért hangossággal, így **120 phon**.

---

## Feladat 6
- **ID:** 6
- **Témakör:** GSM hálózat, Frequency Reuse Factor (FRF), cellás elrendezés

### Kérdés
a) Rajzoljon egy $N=7$ Frequency Reuse Factor-ral rendelkező, nyílt, sík terepre ésszerűen elrendezett klasztert. Rajzoljon be körvonalaival két szomszédos klasztert is!
b) Ha a szolgáltató 70 FDM csatornával rendelkezik, mennyi lehet az aktív, éppen telefonáló GSM előfizetők száma ebben a klaszteren, ennél a 900MHz környéki frekvenciákon „működő” szolgáltatónál?
c) A GSM modellben mi az FRF szerepe? Mi az előnye/hátránya a nagy FRF-nek a kicsihez képest?

### Megoldás
a) A klaszter $N=7$ szabályos hatszöges cellából áll ($f_0 \dots f_6$). A szomszédos klaszterek azonos sorszámú (frekvenciájú) cellái $D = \sqrt{3N} \cdot R = \sqrt{21} \cdot R$ védőtávolságra helyezkednek el egymástól.

b) A GSM 900 MHz-es hálózatokban 1 FDM csatorna (200 kHz sávszélesség) TDMA keretben **8 időréssel** működik, így csatornánként 8 egyidejű beszédcsatorna van.
A klaszterben rendelkezésre álló 70 FDM csatorna esetén az egyidejűleg aktív GSM előfizetők maximális száma:
$$N_{aktív} = 70 \text{ csatorna} \times 8 \text{ időrés/csatorna} = \mathbf{560 \text{ aktív előfizető}}$$

c)
- **FRF (Frequency Reuse Factor) szerepe:** Megadja a klaszterben lévő cellák számát, azaz hány csatornacsoportra osztjuk fel a teljes rendelkezésre álló frekvenciakészletet.
- **Nagy FRF előnye:** Az azonos frekvenciát használó (co-channel) cellák fizikai távolsága ($D$) nagyobb, így csökken a társcsatornás interferencia (jobb a jel-interferencia arány, C/I).
- **Nagy FRF hátránya:** Egyetlen cellára kevesebb csatorna jut ($C_{cella} = C_{összes} / N$), ami csökkenti a cellánkénti egyidejű kapacitást (kevesebb előfizető tud egy időben telefonálni egy cellán belül).

---

## Feladat 7
- **ID:** 7
- **Témakör:** GSM hálózati architektúra, roaming, azonosítás

### Kérdés
Két GSM szolgáltató ($\alpha$ és $\beta$) távközlési hálózatának elemei láthatóak. MS-A1 és MS-A2 is az $\alpha$ hálózat előfizetője, utóbbi a $\beta$ hálózatban barangol (roaming). Most MS-A1 hívja MS-A2-t.
(a) Melyik hálózati eszközhöz érkezik először információ MS-A2 hívás-indításáról?
(b) Melyik HLR kerül lekérdezésre a híváshoz kötődően?
(c) Melyik eszközök szereznek tudomást MS-A2 $\beta$-hálózatbeli mozgásáról?
(d) Melyik eszköz segítségével kerül azonosításra MS-A1 SIM-kártyája?

### Megoldás
(a) **$\alpha$-BTS** (MS-A1 hívásindításakor a saját bázisállomásához)
(b) **$\alpha$-HLR** (mivel MS-A2 az $\alpha$-hálózat előfizetője)
(c) **$\alpha$-HLR**, valamint a látogatott hálózatban a **$\beta$-MSC** és **$\beta$-VLR**
(d) **$\alpha$-AuC** (Authentication Centre)

---

## Feladat 8
- **ID:** 8
- **Témakör:** Forráskódolás, Kraft-McMillan egyenlőtlenség, prefix kód

### Kérdés
a) $2, 2, 3, 3, 3, 4, 4, 4, 4$ kódszóhosszakkal lehet-e egyértelműen megfejthető kódot készíteni?
b) Készítsen prefixum-mentes kódot a $2, 2, 3, 3, 3, 5, 5, 5, 5$ kódszóhosszakkal!

### Megoldás
a) A Kraft–McMillan-egyenlőtlenség alapján:
$$\sum_{i=1}^{N} 2^{-l_i} = 2 \cdot 2^{-2} + 3 \cdot 2^{-3} + 4 \cdot 2^{-4} = \frac{2}{4} + \frac{3}{8} + \frac{4}{16} = \frac{18}{16} = 1{,}125 > 1$$
Mivel a Kraft-egyenlőtlenség nem teljesül ($\sum 2^{-l_i} > 1$), **nem készíthető egyértelműen megfejthető kód**.

b) A $2, 2, 3, 3, 3, 5, 5, 5, 5$ kódszóhosszakkal a Kraft-összeg éppen $1$, így készíthető prefixmentes kód. Egy lehetséges kódtábla:
- 2 bitesek: `00`, `11`
- 3 bitesek: `010`, `011`, `100`
- 5 bitesek: `10100`, `10101`, `10110`, `10111`

---

## Feladat 9
- **ID:** 9
- **Témakör:** FM-sztereó rádiózás, multiplex jel spektruma

### Kérdés
a) Rajzolja fel az alapsávi FM-sztereó rádiójel spektrumát!
b) Miért halljuk monó vevőkészülékünkkel mindkét (bal és jobb) csatorna jelét?
c) Milyen következménnyel jár, ha az alapsávi FM-sztereó rádiójel M összetevőjével szemben az S komponens 6 dB-lel csillapodik?

### Megoldás
a) Az alapsávi sztereó multiplex jel összetevői: $M = L + R$ ($0\dots15\text{ kHz}$), $19\text{ kHz}$-es pilottónus, $S = L - R$ ($23\dots53\text{ kHz}$ sávban $38\text{ kHz}$-es AM-DSB/SC vivőre ültetve), valamint az RDS jel ($57\text{ kHz}$).
b) A monó összetevő $M = L + R$, így a monó vevőkészülék szűrői után közvetlenül megjelenik mindkét csatorna összege.
c) Ha az $S$ komponens $6\text{ dB}$-lel csillapodik (amplitúdója feleződik), a sztereó szeparáció gyengül, és a jel-zaj viszony romlása miatt a sztereó hangminőség érezhetően leromlik.

---

## Feladat 10
- **ID:** 10
- **Témakör:** FSK moduláció, frekvencialöket, vivőfrekvencia

### Kérdés
Egy bináris FSK-t használó rendszerben a jelzőfrekvenciák $f_1 = 22200\text{ Hz}$ és $f_2 = 24200\text{ Hz}$.
a) Adja meg a frekvencialöketet ($f_D$)!
b) Adja meg a vivőfrekvenciát ($F$)!

### Megoldás
a) A frekvencialöket:
$$f_D = \frac{|f_2 - f_1|}{2} = \frac{24200 - 22200}{2} = 1000\text{ Hz} = 1\text{ kHz}$$

b) A vivőfrekvencia:
$$F = \frac{f_1 + f_2}{2} = \frac{22200 + 24200}{2} = 23200\text{ Hz} = 23{,}2\text{ kHz}$$
