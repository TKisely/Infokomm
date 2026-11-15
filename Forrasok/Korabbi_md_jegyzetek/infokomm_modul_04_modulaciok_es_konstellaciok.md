---
module_id: "04_modulaciok_es_konstellaciok"
title: "Infokommunikáció - 4. Modul: Modulációk és konstellációk (QAM, PSK, AM/FM, Sztereó)"
task_count: 15
schema_version: "1.0"
---

# 4. Modul: Modulációk és konstellációk (QAM, PSK, AM/FM, Sztereó)

## Task_046
- **ID:** M4_T046
- **Topic:** 16-QAM vs. 16-PSK konstelláció, minimális távolság és zajmargó
- **Type:** Calculation / Conceptual

### Question
Hasonlítsa össze a 16-QAM és a 16-PSK modulációt azonos átlagos adóteljesítmény ($P_{	ext{átlag}}$) mellett!
a) Mekkora a legközelebbi konstellációs pontok közötti minimális távolság ($d_{\min}$) a két esetben?
b) Melyik moduláció biztosít jobb hibatűrést (kisebb hibaarányt) additív fehér Gauss-zajos (AWGN) csatornán?

### Solution
a) Tegyük fel, hogy az átlagos jelenergia $E_s$.
- **16-PSK esetén:** A pontok egy $R = \sqrt{E_s}$ sugárú körön helyezkednek el. Két szomszédos pont fáziskülönbsége $\Delta 	heta = rac{2\pi}{16} = 22{,}5^\circ$.
  $$d_{\min, 	ext{PSK}} = 2 \sqrt{E_s} \sin\left(rac{\pi}{16}ight) pprox 0{,}390 \sqrt{E_s}$$
- **16-QAM (négyzetes) esetén:** A pontok rácstávolsága $2d$. Az átlagos energia $E_s = 10 d^2 \implies d = \sqrt{E_s / 10}$.
  $$d_{\min, 	ext{QAM}} = 2d = 2 \sqrt{rac{E_s}{10}} pprox 0{,}632 \sqrt{E_s}$$

b) Mivel $d_{\min, 	ext{QAM}} > d_{\min, 	ext{PSK}}$, a **16-QAM konstelláció minimális távolsága lényegesen nagyobb** azonos átlagteljesítmény mellett, így AWGN csatornán a 16-QAM lényegesen jobb zajmargóval és kisebb bit-hibaaránnyal (BER) rendelkezik.

---

## Task_047
- **ID:** M4_T047
- **Topic:** 36-állapotú QAM konstellációs diagram és sarokpont-eltolás
- **Type:** Calculation / Conceptual

### Question
Egy 36-QAM rendszert rácsos konstellációval valósítunk meg ($6 	imes 6$-os rács, koordináták: $\pm 1, \pm 3, \pm 5$).
a) Rajzolja fel a konstellációs diagramot, és adja meg a csúcs- és átlagteljesítmény arányát (PAPR)!
b) Milyen módosítással csökkenthető a csúcsteljesítmény a sarokpontok áthelyezésével?

### Solution
a) A konstellációs pontok $I, Q \in \{-5, -3, -1, 1, 3, 5\}$.
- **Csúcsteljesítmény ($P_{\max}$):** A sarokpontokban ($I = \pm 5, Q = \pm 5$):
  $$P_{\max} = 5^2 + 5^2 = 50$$
- **Átlagteljesítmény ($P_{	ext{átlag}}$):**
  $$P_{	ext{átlag}} = rac{1}{3} (1^2 + 3^2 + 5^2) = rac{1 + 9 + 25}{3} = rac{35}{3} pprox 11{,}67$$
- **PAPR (Peak-to-Average Power Ratio):**
  $$	ext{PAPR} = rac{P_{\max}}{P_{	ext{átlag}}} = rac{50}{11{,}67} pprox 4{,}286 \quad (6{,}32	ext{ dB})$$

b) A 4 legszélső sarokpont ($\pm 5, \pm 5$) energiaigénye a legmagasabb. Ha ezeket a pontokat áthelyezzük a tengelyek mentén közelebb lévő üres helyekre (pl. $\pm 7, \pm 1$ és $\pm 1, \pm 7$), a csúcsteljesítmény alig nő, de az átlagos feszültségigény kiegyenlítettebbé válik, csökkentve a teljesítményerősítő linearitási követelményeit.

---

## Task_048
- **ID:** M4_T048
- **Topic:** 8-QAM konstellációk átlagos adóteljesítménye
- **Type:** Calculation

### Question
Adott két különböző 8-QAM konstelláció:
1. **1. típus (körös):** 4 pont $R_1 = A$ sugarú körön, 4 pont $R_2 = 2A$ sugarú körön.
2. **2. típus (négyzetes/téglalap):** Pontok a $(\pm A, \pm A)$ és $(\pm 3A, \pm A)$ koordinátákon.
Számítsa ki mindkét konstelláció átlagos teljesítményét $1\,\Omega$-os terhelésen!

### Solution
1. **1. típus (körös):**
   $$P_{	ext{átlag}, 1} = rac{4 \cdot R_1^2 + 4 \cdot R_2^2}{8} = rac{4 A^2 + 4 (2A)^2}{8} = rac{4 A^2 + 16 A^2}{8} = rac{20 A^2}{8} = \mathbf{2{,}5 A^2}$$

2. **2. típus (téglalap):**
   - 4 belső pont: $(\pm A, \pm A) \implies P_{	ext{belső}} = A^2 + A^2 = 2 A^2$
   - 4 külső pont: $(\pm 3A, \pm A) \implies P_{	ext{külső}} = (3A)^2 + A^2 = 10 A^2$
   $$P_{	ext{átlag}, 2} = rac{4 \cdot (2 A^2) + 4 \cdot (10 A^2)}{8} = rac{8 A^2 + 40 A^2}{8} = \mathbf{6 A^2}$$

---

## Task_049
- **ID:** M4_T049
- **Topic:** BPSK és sBPSK moduláció időfüggvénye és csúcstényezője
- **Type:** Calculation / Conceptual

### Question
a) Írja fel a BPSK modulált jel időfüggvényét $T_s$ szimbólumidő esetén!
b) Mekkora a BPSK jel csúcstényezője ($\eta = U_{\max} / U_{	ext{eff}}$)?
c) Miben különbözik a simított fázisú BPSK (sBPSK) a hagyományos BPSK-tól?

### Solution
a) A BPSK jel időfüggvénye a $k$-adik szimbólumintervallumban ($k T_s \le t < (k+1) T_s$):
$$s_{	ext{BPSK}}(t) = d_k \cdot A \cos(2\pi f_v t)$$
ahol $d_k \in \{-1, +1\}$ a szimbólumérték, $A$ a vivőamplitúdó.

b) Mivel a BPSK jel burkolója állandó ($|s(t)| \le A$), az effektív érték $U_{	ext{eff}} = A / \sqrt{2}$, a csúcsérték $U_{\max} = A$:
$$\eta = rac{U_{\max}}{U_{	ext{eff}}} = rac{A}{A / \sqrt{2}} = \mathbf{\sqrt{2} pprox 1{,}414}$$

c) Hagyományos BPSK esetén a bitváltásoknál a fázis pillanatszerűen $180^\circ$-ot ugrik, ami széles spektrális melléklebenyeket eredményez. Az sBPSK (shaped BPSK) esetén a fázisátmenetet folytonos ablakfüggvénnyel simítják, csökkentve a sávon kívüli sugárzást.

---

## Task_050
- **ID:** M4_T050
- **Topic:** 16-PSK moduláció fázishibatűrése és sávszélessége
- **Type:** Calculation

### Question
Egy $R_b = 500	ext{ kbit/s}$ adatsebességű rendszert 16-PSK modulációval üzemeltetünk.
a) Mekkora a vevőoldali fázishibatűrés ($\Delta \phi_{\max}$), mielőtt döntési hiba keletkezne?
b) Mekkora a minimális Nyquist-sávszélesség ($B_{\min}$)?

### Solution
a) 16-PSK esetén a konstellációs pontok fázisszögei $	heta_i = i \cdot rac{2\pi}{16} = i \cdot 22{,}5^\circ$.
A szomszédos pontok közötti fázistávolság $22{,}5^\circ$, így a döntési határ a szomszédos pontok közötti felezővonalnál van:
$$\Delta \phi_{\max} = \pm rac{22{,}5^\circ}{2} = \mathbf{\pm 11{,}25^\circ}$$

b) 16-PSK esetén egy szimbólum $m = \log_2(16) = 4	ext{ bit}$-et hordoz.
A szimbólumsebesség:
$$R_s = rac{R_b}{\log_2(16)} = rac{500	ext{ kbit/s}}{4} = 125	ext{ kkBaud}$$
A minimális Nyquist-sávszélesség alapsávi szűrés és ideális sávszűrő esetén:
$$B_{\min} = R_s = \mathbf{125	ext{ kHz}}$$

---

## Task_051
- **ID:** M4_T051
- **Topic:** AM-DSB moduláció spektruma és teljesítményeloszlása
- **Type:** Calculation

### Question
Egy $f_v = 1	ext{ MHz}$ vivőfrekvenciájú AM-DSB adó $U_v = 100	ext{ V}$ csúcsértékű vivőt sugároz. A moduláló jel egy $f_m = 5	ext{ kHz}$-es szinuszos hangfrekvenciás jel, a modulációs mélység $m = 0{,}8$ ($80\%$).
a) Adja meg a spektrális összetevők frekvenciáját és amplitúdóját!
b) Számítsa ki a vivő teljesítményét és az oldalsávok összteljesítményét $R = 50\,\Omega$-os antennaterhelésen!

### Solution
a) Spektrális összetevők:
- **Vivő:** $f_v = 1000	ext{ kHz}$, amplitúdó: $U_v = \mathbf{100	ext{ V}}$
- **Alsó oldalsáv (LSB):** $f_{LSB} = f_v - f_m = 995	ext{ kHz}$, amplitúdó: $U_{LSB} = rac{m U_v}{2} = rac{0{,}8 \cdot 100}{2} = \mathbf{40	ext{ V}}$
- **Felső oldalsáv (USB):** $f_{USB} = f_v + f_m = 1005	ext{ kHz}$, amplitúdó: $U_{USB} = rac{m U_v}{2} = \mathbf{40	ext{ V}}$

b) Teljesítmények:
- **Vivőteljesítmény:**
  $$P_v = rac{U_v^2}{2 R} = rac{100^2}{2 \cdot 50} = rac{10000}{100} = \mathbf{100	ext{ W}}$$
- **Egy oldalsáv teljesítménye:**
  $$P_{SB} = rac{U_{SB}^2}{2 R} = rac{40^2}{2 \cdot 50} = rac{1600}{100} = 16	ext{ W}$$
- **Oldalsávok összteljesítménye:**
  $$P_{	ext{oldalsávok}} = 2 \cdot P_{SB} = \mathbf{32	ext{ W}}$$
- **Összes adóteljesítmény:** $P_{	ext{össz}} = 100 + 32 = 132	ext{ W}$.

---

## Task_052
- **ID:** M4_T052
- **Topic:** AM-DSB/SC és SSB moduláció generálása
- **Type:** Conceptual / Calculation

### Question
a) Mi a különbség az AM-DSB/SC és az SSB (Single Sideband) moduláció között?
b) Írja fel az SSB jel időfüggvényét Hilbert-transzformált segítségével!

### Solution
a) 
- **AM-DSB/SC (Double Sideband Suppressed Carrier):** A vivőt teljesen elnyomjuk, csak a két oldalsávot sugározzuk ki. Sávszélessége $B = 2 f_{\max}$.
- **SSB (Single Sideband):** Az egyik oldalsávot (LSB vagy USB) is kiszűrjük/elnyomjuk, így az információtisztán egyetlen oldalsávban továbbítjuk. Sávszélessége $B = f_{\max}$ (fele a DSB-nek).

b) Az SSB jel időfüggvénye (felső oldalsáv - USB és alsó oldalsáv - LSB):
$$s_{	ext{SSB}}(t) = m(t) \cdot \cos(2\pi f_v t) \mp \hat{m}(t) \cdot \sin(2\pi f_v t)$$
ahol $m(t)$ a moduláló jel, $\hat{m}(t)$ pedig $m(t)$ Hilbert-transzformáltja ($90^\circ$-os fázistolás). A minusz jel az USB, a plusz jel az LSB összetevőt adja.

---

## Task_053
- **ID:** M4_T053
- **Topic:** FM szögmodulált jel fázislökete, frekvencialökete és sávszélessége
- **Type:** Calculation

### Question
Egy FM adó moduláló jele $m(t) = 3 \cos(2\pi \cdot 15000 \cdot t)$. A frekvenciamodulátor érzékenysége $k_f = 2{,}5	ext{ kHz/V}$.
a) Számítsa ki a frekvencialöketet ($f_D$) és a fázislöketet ($\Phi_D$)!
b) Határozza meg a modulált jel sávszélességét a Carson-szabály alapján!

### Solution
a) 
- Moduláló frekvencia: $f_m = 15	ext{ kHz}$, moduláló feszültség amplitúdója: $U_m = 3	ext{ V}$.
- **Frekvencialöket ($f_D$):**
  $$f_D = k_f \cdot U_m = 2{,}5	ext{ kHz/V} \cdot 3	ext{ V} = \mathbf{7{,}5	ext{ kHz}}$$
- **Fázislöket ($\Phi_D$ / modulációs index $m_f$):**
  $$\Phi_D = m_f = rac{f_D}{f_m} = rac{7{,}5	ext{ kHz}}{15	ext{ kHz}} = \mathbf{0{,}5	ext{ rad}}$$

b) **Carson-szabály szerinti sávszélesség ($B_v$):**
$$B_v = 2 \cdot (f_D + f_m) = 2 \cdot (7{,}5	ext{ kHz} + 15	ext{ kHz}) = 2 \cdot 22{,}5	ext{ kHz} = \mathbf{45	ext{ kHz}}$$

---

## Task_054
- **ID:** M4_T054
- **Topic:** Alapsávi FM-sztereó rádiójel multiplexer spektruma
- **Type:** Conceptual / Diagrammatic

### Question
Írja le részletesen az alapsávi FM-sztereó multiplex (MPX) jel spektrális felépítését! Milyen frekvenciasávokat foglalnak el az egyes összetevők?

### Solution
Az FM sztereó multiplex jel ($0\dots57	ext{ kHz}$ sávban) a következő elemekből áll:
1. **$0	ext{–}15	ext{ kHz}$ (Monó összetevő - $M$):** $M = L + R$ (Bal + Jobb csatorna összege). Biztosítja a monó kompatibilitást.
2. **$19	ext{ kHz}$ (Pilottónus):** $19	ext{ kHz}$-es szinuszos vivő a vevőoldali $38	ext{ kHz}$-es segédvivő koherens helyreállításához.
3. **$23	ext{–}53	ext{ kHz}$ (Sztereó különbségi összetevő - $S$):** $S = L - R$ jel, amely $38	ext{ kHz}$-es elnyomott vivőjű AM-DSB/SC modulációval van felültetve.
4. **$57	ext{ kHz}$ (RDS jel):** Radio Data System digitális adatátvitel ($1187{,}5	ext{ bit/s}$ bázisú BPSK szubvivő).

---

## Task_055
- **ID:** M4_T055
- **Topic:** FM-sztereó vevő működése és csatorna-szeparáció
- **Type:** Conceptual / Calculation

### Question
a) Hogyan állítja elő a sztereó FM vevő a bal ($L$) és jobb ($R$) csatorna jelét a vett $M = L+R$ és $S = L-R$ jelekből?
b) Mi történik a hallható hanggal, ha a vevőben az $S$ összetevő amplitúdója $6	ext{ dB}$-lell lecsökken az $M$-hez képest?

### Solution
a) A demultiplexálás utáni összegző-kivonó mátrixozás:
- **Bal csatorna:** $rac{M + S}{2} = rac{(L+R) + (L-R)}{2} = \mathbf{L}$
- **Jobb csatorna:** $rac{M - S}{2} = rac{(L+R) - (L-R)}{2} = \mathbf{R}$

b) A $6	ext{ dB}$-es csillapodás azt jelenti, hogy az $S$ komponens amplitúdója feleződik ($S' = 0{,}5 S$).
Igy a helyreállított jelek:
- $L' = rac{(L+R) + 0{,}5(L-R)}{2} = 0{,}75 L + 0{,}25 R$
- $R' = rac{(L+R) - 0{,}5(L-R)}{2} = 0{,}25 L + 0{,}75 R$
**Eredmény:** A sztereó áthallás megnő, a két csatorna közötti szeparáció leromlik, a hangzás közelebb kerül a monóhoz.

---

## Task_056
- **ID:** M4_T056
- **Topic:** QPSK moduláció és Gray-kódolás
- **Type:** Conceptual / Calculation

### Question
a) Rajzolja fel a QPSK moduláció konstellációs diagramját Gray-kódolású bit-hozzárendeléssel!
b) Miért előnyös a Gray-kódolás alkalmazása a szomszédos konstellációs pontok között?

### Solution
a) QPSK esetén $4$ konstellációs állapot van a $rac{\pi}{4}, rac{3\pi}{4}, rac{5\pi}{4}, rac{7\pi}{4}$ fázisszögeknél ($45^\circ, 135^\circ, 225^\circ, 315^\circ$):
- $45^\circ$ (I>0, Q>0) $ightarrow \mathbf{11}$
- $135^\circ$ (I<0, Q>0) $ightarrow \mathbf{01}$
- $225^\circ$ (I<0, Q<0) $ightarrow \mathbf{00}$
- $315^\circ$ (I>0, Q<0) $ightarrow \mathbf{10}$

b) **Gray-kódolás lényege:** Bármely két szomszédos konstellációs pont kódja **mindössze 1 bitben** különbözik egymástól. Mivel a zaj miatt bekövetkező téves döntések túlnyomó többsége a közvetlen szomszédos pontok közé esik, a Gray-kód biztosítja, hogy egy szimbólumhiba szinte mindig csak **egyetlen bithibát** eredményezzen.

---

## Task_057
- **ID:** M4_T057
- **Topic:** MSK és GMSK moduláció a GSM hálózatban
- **Type:** Conceptual

### Question
a) Mi a Minimum Shift Keying (MSK) moduláció definíciója és lényege?
b) Miért használ a GSM hálózat Gaussian Minimum Shift Keying (GMSK) modulációt simító szűrővel?

### Solution
a) Az **MSK (Minimum Shift Keying)** egy folytonos fázisú FSK (CPFSK) moduláció, ahol a két jelzőfrekvencia közötti eltérés pontosan a minimális ortogonalitási feltételnek felel meg:
$$h = 2 f_D T_s = 0{,}5 \implies \Delta f = |f_1 - f_2| = rac{1}{2 T_s}$$
Állandó a burkolója, így nemlinearitásokra érzéketlen.

b) Az MSK jel fázisátmenetei törtvonalasak, így a spektrumában a melléklebenyek még viszonylag lassan csillapodnak.
A **GMSK (Gaussian MSK)** során a moduláló adatsorozatot egy Gauss-profilú aluláteresztő szűrővel ($BT = 0{,}3$) előszűrik. Ez elsimítja a fázisátmeneteket, megszünteti a meredek spektrális kiugrásokat, így rendkívül keskeny sávszélességet és minimális társcsatornás interferenciát tesz lehetővé a GSM cellákban.

---

## Task_058
- **ID:** M4_T058
- **Topic:** Szuperheterodin vevőkészülék keverője és középfrekvenciája
- **Type:** Calculation

### Question
Egy szuperheterodin FM vevő $f_{	ext{vett}} = 100	ext{ MHz}$ jelet vesz. A vevő középfrekvenciája $f_{KF} = 10{,}7	ext{ MHz}$.
a) Adja meg a helyi oszcillátor frekvenciáját ($f_0$) felső keverés esetén!
b) Mekkora a vevő tükörfrekvenciája ($f_t$)?

### Solution
a) **Felső keverés esetén ($f_0 > f_{	ext{vett}}$):**
$$f_0 = f_{	ext{vett}} + f_{KF} = 100	ext{ MHz} + 10{,}7	ext{ MHz} = \mathbf{110{,}7	ext{ MHz}}$$

b) **Tükörfrekvencia ($f_t$):**
A tükörfrekvencia az a frekvencia, amely a helyi oszcillátorral keverve szintén a középfrekvenciára ($f_{KF}$) képeződik le:
$$f_t = f_0 + f_{KF} = f_{	ext{vett}} + 2 \cdot f_{KF} = 100	ext{ MHz} + 2 \cdot 10{,}7	ext{ MHz} = \mathbf{121{,}4	ext{ MHz}}$$

---

## Task_059
- **ID:** M4_T059
- **Topic:** FM pre-emphasis és de-emphasis szerepe
- **Type:** Conceptual

### Question
Mi a szerepe az FM műsorszórásban alkalmazott pre-emphasis (kiemelés) és de-emphasis (elnyomás) szűrőpárnak?

### Solution
FM demoduláció során a vevő kimenetén megjelenő zaj teljesítménysűrűsége a frekvencia négyzetével arányosan növekszik (trianguláris zajspektrum). Ez azt jelenti, hogy a magasabb hangfrekvenciás összetevők sokkal zajosabbak lennének.
- **Pre-emphasis (Adóoldal):** A magas hangfrekvenciás összetevőket ($2	ext{ kHz}$ felett, $	au = 50\,\mu	ext{s}$ vagy $75\,\mu	ext{s}$ időállandójú emelt karakterisztikájú szűrővel) mesterségesen kiemelik a moduláció előtt.
- **De-emphasis (Vevőoldal):** A demodulált jel magasfrekvenciás összetevőit pontosan ugyanilyen mértékben elnyomják.
**Eredmény:** A hasznos jel magas frekvenciás összetevői változatlanok maradnak, miközben a magas frekvenciás csatornazaj jelentősen lecsökken, javítva a jel-zaj viszonyt ($SNR$).

---

## Task_060
- **ID:** M4_T060
- **Topic:** M-ary QAM sávszélesség-hatékonysága és csatornakapacitás
- **Type:** Calculation

### Question
Egy $B = 2	ext{ MHz}$ sávszélességű csatornán $R_b = 8	ext{ Mbit/s}$ adatsebességet kell átvinni Nyquist-szűrés ($lpha = 0$) mellett.
a) Milyen minimális méretű M-ary QAM konstellációt kell választani?
b) Mekkora a rendszer sávszélesség-hatékonysága ($\eta_{BW}$)?

### Solution
a) A sávszélesség-hatékonyság kifejezése Nyquist-szűrés esetén ($lpha = 0$):
$$\eta_{BW} = rac{R_b}{B} = rac{8	ext{ Mbit/s}}{2	ext{ MHz}} = 4	ext{ bit/s/Hz}$$
Mivel $\eta_{BW} = \log_2 M$, így:
$$\log_2 M = 4 \implies M = 2^4 = \mathbf{16	ext{ (16-QAM)}}$$

b) A sávszélesség-hatékonyság:
$$\eta_{BW} = \mathbf{4	ext{ bit/s/Hz}}$$
