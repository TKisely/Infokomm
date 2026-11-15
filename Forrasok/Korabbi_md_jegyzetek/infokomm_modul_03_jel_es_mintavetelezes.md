---
module_id: "03_jel_es_mintavetelezes"
title: "Infokommunikáció - 3. Modul: Jelek, mintavételezés, Nyquist-kritérium, PAM, ISI, szemábrák és kvantálás"
task_count: 15
schema_version: "1.0"
---

# 3. Modul: Jelek, mintavételezés, Nyquist-kritérium, PAM, ISI, szemábrák és kvantálás

## Task_031
- **ID:** M3_T031
- **Topic:** Aluláteresztő jel mintavételezése, Nyquist-frekvencia
- **Type:** Calculation

### Question
Egy alapsávi analóg jel legmagasabb frekvenciájú összetevője $f_{\max} = 15	ext{ kHz}$.
a) Mekkora a minimális mintavételi frekvencia ($f_{s,\min}$) a Shannon-Nyquist mintavételi tétel szerint a torzításmentes helyreállíthatósághoz?
b) Mekkora a mintavételi időköz ($T_s$)?
c) Mi történik a jellel, ha $f_s = 20	ext{ kHz}$ mintavételi frekvenciát alkalmazunk?

### Solution
a) A Shannon-Nyquist mintavételi tétel értelmében aluláteresztő jel esetén:
$$f_{s,\min} = 2 \cdot f_{\max} = 2 \cdot 15	ext{ kHz} = 30	ext{ kHz}$$

b) A mintavételi időköz:
$$T_s = rac{1}{f_s} = rac{1}{30\cdot 10^3	ext{ Hz}} pprox 33{,}33	ext{ }\mu	ext{s}$$

c) Ha $f_s = 20	ext{ kHz} < 30	ext{ kHz}$, akkor spektrális átfedés (aliasing / spektrális egymásra hajtogatódás) keletkezik, így az eredeti jel szűréssel már nem állítható helyre torzításmentesen.

---

## Task_032
- **ID:** M3_T032
- **Topic:** Sávszűrő jel mintavételezése (Bandpass sampling)
- **Type:** Calculation

### Question
Egy sávkorlátozott jel spektruma a $f_L = 40	ext{ kHz}$ és $f_H = 60	ext{ kHz}$ frekvenciatartományban nemnulla (sávszélesség: $B = 20	ext{ kHz}$).
a) Adja meg a megengedett mintavételi frekvenciatartományokat a sávszűrő mintavételi tétel alapján!
b) Mekkora a minimális elméleti mintavételi frekvencia?

### Solution
a) Sávszűrő mintavételezés esetén a mintavételi frekvenciának teljesítenie kell az alábbi feltételt egy $k$ egész számra ($1 \le k \le \lfloor f_H / B floor$):
$$rac{2 f_H}{k} \le f_s \le rac{2 f_L}{k - 1}$$
A sávszélesség $B = f_H - f_L = 20	ext{ kHz}$. $k_{\max} = \lfloor 60 / 20 floor = 3$.
- $k = 1$ esetén: $rac{2 \cdot 60}{1} \le f_s \implies 120	ext{ kHz} \le f_s$
- $k = 2$ esetén: $rac{2 \cdot 60}{2} \le f_s \le rac{2 \cdot 40}{1} \implies 60	ext{ kHz} \le f_s \le 80	ext{ kHz}$
- $k = 3$ esetén: $rac{2 \cdot 60}{3} \le f_s \le rac{2 \cdot 40}{2} \implies 40	ext{ kHz} \le f_s \le 40	ext{ kHz} \implies f_s = 40	ext{ kHz}$

b) A minimális elméleti mintavételi frekvencia $f_{s,\min} = 2B = 40	ext{ kHz}$ (pontosan $k=3$ mellett).

---

## Task_033
- **ID:** M3_T033
- **Topic:** PAM (Pulse Amplitude Modulation) alapsávi átvitel
- **Type:** Concept / Calculation

### Question
Egy alapsávi PAM rendszerben a szimbólumsebesség $R_s = 10	ext{ kkBaud}$ ($10^4	ext{ szimbólum/s}$). A rendszert $M = 8$ szintű amplitúdómodulációval üzemeltetjük.
a) Mekkora a rendszer adatátviteli sebessége (bitsebessége, $R_b$)?
b) Mekkora a minimális Nyquist-sávszélesség ideális aluláteresztő csatorna esetén?

### Solution
a) $M = 8$ szint esetén egy szimbólum által hordozott bitszám: $n = \log_2(M) = \log_2(8) = 3	ext{ bit/szimbólum}$.
A bitsebesség:
$$R_b = R_s \cdot \log_2(M) = 10	ext{ kkBaud} \cdot 3 = 30	ext{ kbit/s}$$

b) Ideális Nyquist-szűrő esetén a szükséges minimális sávszélesség:
$$B_{\min} = rac{R_s}{2} = rac{10	ext{ kHz}}{2} = 5	ext{ kHz}$$

---

## Task_034
- **ID:** M3_T034
- **Topic:** Nyquist I. feltétele és Szimbólumközti áthallás (ISI)
- **Type:** Theory / Math

### Question
a) Fogalmazza meg a Nyquist I. kritériumot a szimbólumközti áthallás (ISI) mentességre az időtartományban!
b) Milyen tulajdonságú az ideális Nyquist-impulzus ($h(t)$) mintavételi pontokban vett értéke?
c) Miért nem alkalmazható a gyakorlatban az ideális téglalap alakú átviteli karakterisztikájú Nyquist-szűrő?

### Solution
a) A Nyquist I. feltétel kimondja, hogy a csatorna és a formáló szűrők eredő impulzusválaszának $h(t)$ a $t = k \cdot T_s$ ($k \in \mathbb{Z}$) mintavételi időpontokban teljesítenie kell:
$$h(k \cdot T_s) = egin{cases} 1, & 	ext{ha } k = 0 \ 0, & 	ext{ha } k 
eq 0 \end{cases}$$

b) A mintavételi pillanatokban a saját szimbólum értéke $1$, míg az összes megelőző és követő szimbólum válasza pontosan nulláhelyre esik, így nem okoznak áthallást.

c) Az ideális téglalapszűrő impulzusválasza $	ext{sinc}(t)$ alakú, amely lassan, $1/t$ arányban cseng le. Ez időzítési bizonytalanságra (jitterre) rendkívül érzékeny, és a szűrő fizikalilag nem realizálható (nem kauzális).

---

## Task_035
- **ID:** M3_T035
- **Topic:** Emelt koszinuszos (Raised Cosine) szűrő és gördülési tényező ($lpha$)
- **Type:** Calculation

### Question
Egy digitális átviteli rendszerben $R_s = 20	ext{ kBaud}$ szimbólumsebességet alkalmazunk emelt koszinuszos spektrumformálással, ahol a gördülési tényező (roll-off factor) $lpha = 0{,}35$.
a) Mekkora a csatorna ténylegesen elfoglalt sávszélessége ($B$)?
b) Mekkora lenne a sávszélesség $lpha = 0$ és $lpha = 1$ esetén?

### Solution
a) Az emelt koszinuszos szűrő sávszélesség-igénye:
$$B = rac{R_s}{2} \cdot (1 + lpha) = rac{20	ext{ kHz}}{2} \cdot (1 + 0{,}35) = 10	ext{ kHz} \cdot 1{,}35 = 13{,}5	ext{ kHz}$$

b) 
- $lpha = 0$ (ideális Nyquist-szűrő): $B = 10	ext{ kHz} \cdot 1 = 10	ext{ kHz}$
- $lpha = 1$ (100%-os sávszélesség-többlet): $B = 10	ext{ kHz} \cdot 2 = 20	ext{ kHz}$

---

## Task_036
- **ID:** M3_T036
- **Topic:** Szemábra (Eye diagram) paraméterei és értelmezése
- **Type:** Concept

### Question
A vett PAM jelből oszcilloszkóppal szemábrát képezünk.
a) Milyen információt ad a szem függőleges nyitottsága (Eye Height)?
b) Milyen információt ad a szem vízszintes nyitottsága (Eye Width)?
c) Mit jelent a szemábra vonalainak vastagodása és kereszteződési pontjainak bizonytalansága?

### Solution
a) **Függőleges nyitottság:** A zajmargót határozza meg. Minél nyitottabb a szem függőlegesen, annál nagyobb zajfeszültséget tud elviselni a rendszer anélkül, hogy hibás döntést hozna.
b) **Vízszintes nyitottság:** A mintavételi fázisérzékenységet (időzítési margót / jitter-tűrést) mutatja.
c) A vonalak függőleges vastagodása az **additív zaj jelenlétét**, a kereszteződési pontok vízszintes szóródása pedig a **fázis-jittert** és a **szimbólumközti áthallást (ISI)** jelzi.

---

## Task_037
- **ID:** M3_T037
- **Topic:** Egyenletes kvantáló méretezése
- **Type:** Calculation

### Question
Egy analóg jel feszültségtartománya $U_{\min} = -5	ext{ V}$ és $U_{\max} = +5	ext{ V}$. A jelet $n = 8$ bites egyenletes kvantálóval digitalizáljuk.
a) Hány kvantálási szintje van a kvantálónak ($N$)?
b) Mekkora a kvantálási lépésköz ($\Delta$)?
c) Mekkora a maximális kvantálási hiba ($e_{\max}$)?

### Solution
a) A kvantálási szintek száma:
$$N = 2^n = 2^8 = 256$$

b) A teljes feszültségtartomány $V_{pp} = U_{\max} - U_{\min} = 5 - (-5) = 10	ext{ V}$.
A kvantálási lépésköz:
$$\Delta = rac{V_{pp}}{N} = rac{10	ext{ V}}{256} pprox 0{,}03906	ext{ V} = 39{,}06	ext{ mV}$$

c) A maximális kvantálási hiba kerekítéses kvantáló esetén a lépésköz fele:
$$e_{\max} = rac{\Delta}{2} = rac{39{,}06	ext{ mV}}{2} = 19{,}53	ext{ mV}$$

---

## Task_038
- **ID:** M3_T038
- **Topic:** Jel-kvantálási zajviszony (SQNR) kiszámítása
- **Type:** Calculation

### Question
Egy szinuszos jelet egyenletes kvantálóval digitalizálunk.
a) Vezesse le vagy adja meg az SQNR (Signal-to-Quantization-Noise Ratio) ismert dB-es ökölszabályát a kvantálási bitszám ($n$) függvényében!
b) Mekkora lesz az SQNR értéke $n = 10$ bit esetén szinuszos kivezérlésnél?

### Solution
a) Teljes kivezérlésű szinuszos jel esetén ($U_p = V_{pp}/2$) a jelteljesítmény $P_s = U_p^2 / 2 = V_{pp}^2 / 8$.
A kvantálási zaj teljesítménye egyenletes eloszlású hiba esetén $P_q = \Delta^2 / 12 = (V_{pp} / 2^n)^2 / 12 = V_{pp}^2 / (12 \cdot 2^{2n})$.
Az SQNR aránya:
$$	ext{SQNR} = rac{P_s}{P_q} = rac{V_{pp}^2 / 8}{V_{pp}^2 / (12 \cdot 2^{2n})} = rac{12}{8} \cdot 2^{2n} = 1{,}5 \cdot 2^{2n}$$
Decibelben kifejezve:
$$	ext{SQNR}_{	ext{dB}} = 10 \lg(1{,}5 \cdot 2^{2n}) = 10 \lg(1{,}5) + 20 n \lg(2) pprox 1{,}76 + 6{,}02 n 	ext{ dB} pprox \mathbf{6n + 1{,}8	ext{ dB}}$$

b) $n = 10$ bit esetén:
$$	ext{SQNR}_{	ext{dB}} pprox 6 \cdot 10 + 1{,}8 = \mathbf{61{,}8	ext{ dB}}$$

---

## Task_039
- **ID:** M3_T039
- **Topic:** Nemegyenteles kvantálás ($\mu$-law, A-law)
- **Type:** Theory

### Question
a) Mi a fő hátránya az egyenletes kvantálásnak kis amplitúdójú jelek esetén?
b) Milyen elven működik a nemegyenletes kvantálás (kompandálás)?
c) Milyen kompandálási szabványokat használnak a telefonhálózatokban Európában és Észak-Amerikában?

### Solution
a) Egyenletes kvantáló esetén a kvantálási lépésköz ($\Delta$) állandó, így kis amplitúdójú jelek esetén a relatív kvantálási hiba és a zajjel aránya kedvezőtlen (alacsony SQNR).
b) A **kompandálás** (Compressing + Expanding) során a kis amplitúdójú jeleket jobban felerősítik és sűrűbb kvantálási szintekkel látják el, míg a nagy amplitúdójú jeleknél ritkább szinteket használnak. Ezáltal a relatív SQNR közel állandó marad a teljes dinamikatartományban.
c) Európában az **A-law** ($	ext{A}=87{,}6$), Észak-Amerikában és Japánban a **$\mu$-law** ($\mu=255$) kompandálási jelleggörbe a szabványos.

---

## Task_040
- **ID:** M3_T040
- **Topic:** PCM (Pulse Code Modulation) átviteli sebesség
- **Type:** Calculation

### Question
A beszédjelet $f_{max} = 3{,}4	ext{ kHz}$-re sávkorlátozzuk, és $f_s = 8	ext{ kHz}$ frekvenciával mintavételezzük. A mintákat $n = 8$ bites A-law PCM kódolóval konvertáljuk.
a) Mekkora egyetlen PCM beszédcsatorna bitsebessége ($R_b$)?
b) Mekkora a bitsebesség az európai E1 primer multiplex rendszerben, ahol 30 beszédcsatorna mellett 2 keretképző/jelzésátviteli csatorna működik?

### Solution
a) Egy csatorna bitsebessége:
$$R_b = f_s \cdot n = 8	ext{ kHz} \cdot 8	ext{ bit} = \mathbf{64	ext{ kbit/s}}$$

b) Az E1 rendszer összesen $32$ időrést (csatornát) tartalmaz keretenként $8	ext{ kHz}$-es keretfrekvenciával:
$$R_{E1} = 32 	ext{ csatorna} \cdot 64	ext{ kbit/s/csatorna} = \mathbf{2048	ext{ kbit/s}} = \mathbf{2{,}048	ext{ Mbit/s}}$$

---

## Task_041
- **ID:** M3_T041
- **Topic:** DPCM (Differenciális PCM) és ADPCM elve
- **Type:** Concept

### Question
a) Mi a DPCM kódolás alapgondolata a hagyományos PCM-hez képest?
b) Milyen komponensekből áll a DPCM adó oldala?
c) Milyen plusz funkciót valósít meg az ADPCM (Adaptív DPCM)?

### Solution
a) A DPCM nem a jel közvetlen mintáit kódolja, hanem a **tényleges minta és a megelőző mintákból képzett becsült minta közötti különbséget (predikciós hibát)**. Mivel a szomszédos minták korreláltak, a különbségi jel varianciája lényegesen kisebb, így kevesebb bittel kódolható.
b) A DPCM adó fő részei: mintavételező, kivonó áramkör, kvantáló, kódoló és a **prediktor (becslő hálózat)** a visszacsatoló ágban.
c) Az ADPCM dinamikusan változtatja a kvantálási lépésközt ($\Delta$) és/vagy a prediktor együtthatóit a bemeneti jel pillanatnyi lokális statisztikájához (stacionáriusságához) igazodva.

---

## Task_042
- **ID:** M3_T042
- **Topic:** Kvantálási bitszám meghatározása előírt SQNR alapján
- **Type:** Calculation

### Question
Egy mérőrendszerben a minimálisan elvárt jel-kvantálási zajviszony $	ext{SQNR}_{\min} = 50	ext{ dB}$ szinuszos tesztjel esetén.
a) Hány bites kvantálóra van legalább szükség?
b) Mekkora lesz a tényleges SQNR a választott bitszámmal?

### Solution
a) Az $	ext{SQNR} pprox 6n + 1{,}8	ext{ dB}$ képletet átrendezve:
$$6n + 1{,}8 \ge 50 \implies 6n \ge 48{,}2 \implies n \ge rac{48{,}2}{6} pprox 8{,}033	ext{ bit}$$
Mivel a bitszám csak egész érték lehet, felfelé kerekítve: **$n = 9	ext{ bit}$**.

b) A tényleges SQNR $n = 9$ bit mellett:
$$	ext{SQNR} = 6 \cdot 9 + 1{,}8 = 54 + 1{,}8 = \mathbf{55{,}8	ext{ dB}}$$

---

## Task_043
- **ID:** M3_T043
- **Topic:** Mintavételezés és tétel-rekonstrukció
- **Type:** Calculation / Math

### Question
Adott a $g(t) = \cos(2\pi \cdot 1000 \cdot t) + 0{,}5 \cos(2\pi \cdot 3000 \cdot t)$ jel.
a) Mekkora a jel maximális frekvenciája ($f_{\max}$)?
b) Ha a mintavételi frekvencia $f_s = 4000	ext{ Hz}$, milyen frekvenciájú összetevők jelennek meg az ideális aluláteresztő szűrővel ($f_c = 2000	ext{ Hz}$) történő rekonstrukció után?

### Solution
a) A frekvenciakomponensek: $f_1 = 1000	ext{ Hz}$ és $f_2 = 3000	ext{ Hz}$. Így $f_{\max} = 3000	ext{ Hz}$.

b) $f_s = 4000	ext{ Hz}$ esetén a $3000	ext{ Hz}$-es összetevő aliasingot szenved. Az áthajtogatott frekvencia:
$$f_{	ext{alias}} = |f_2 - f_s| = |3000 - 4000| = 1000	ext{ Hz}$$
Az $f_c = 2000	ext{ Hz}$-es LPF szűrő után két $1000	ext{ Hz}$-es összetevő szuperponálódik, míg a $3000	ext{ Hz}$-es összetevő elveszik. A helyreállított jel torzult lesz.

---

## Task_044
- **ID:** M3_T044
- **Topic:** PAM jelspektrum és minta-és-tartó (Flat-top PAM) torzítás
- **Type:** Concept

### Question
a) Mi a különbség az ideális (pillanatnyi) mintavételezésű PAM és a véges impulzusszélességű (Flat-top / minta-és-tartó) PAM között?
b) Milyen hatással van a Flat-top kódolás a rekonstruált jel spektrumára (apertúra-hatás)?
c) Hogyan korrigálható az apertúra-hatás a vevőoldalon?

### Solution
a) A pillanatnyi mintavételes PAM esetében a minták ideális Dirac-impulzusok, míg a Flat-top PAM esetén a minták véges $T_p$ szélességű téglalapimpulzusok.
b) A Flat-top mintavétel a frekvenciatartományban egy $	ext{sinc}(f \cdot T_p)$ alakú szorzótényezőt (amplitúdócsökkenést és torzítást) eredményez. Ezt nevezik **apertúra-hatásnak** (Aperture effect).
c) Az apertúra-hatás korrigálható a vevőoldali rekonstrukciós szűrő elé iktatott **$1 / 	ext{sinc}(f \cdot T_p)$ átviteli karakterisztikájú kiemelő szűrővel (equalizer)**.

---

## Task_045
- **ID:** M3_T045
- **Topic:** Jel-zaj viszony és dinamikatartomány összefüggése kvantálóban
- **Type:** Calculation

### Question
Egy kísérleti kódolóban a bemeneti jel dinamikatartománya $D = 48	ext{ dB}$ (a legkisebb és legnagyobb feldolgozandó jelszint aránya).
a) Hány bites kvantálóra van szükség ahhoz, hogy a legkisebb amplitúdójú jel esetén is legalább $12	ext{ dB}$ legyen az SQNR?
b) Mekkora lesz a maximális SQNR a teljes kivezérlésnél?

### Solution
a) A legkisebb jelszintnél tapasztalható $	ext{SQNR}_{\min} = 12	ext{ dB}$. Mivel a dinamikatartomány $D = 48	ext{ dB}$, a teljes kivezérlésnél az SQNR:
$$	ext{SQNR}_{\max} = 	ext{SQNR}_{\min} + D = 12	ext{ dB} + 48	ext{ dB} = 60	ext{ dB}$$
A szükséges bitszám:
$$6n + 1{,}8 \ge 60 \implies 6n \ge 58{,}2 \implies n \ge 9{,}7 \implies \mathbf{n = 10	ext{ bit}}$$

b) $n = 10$ bit esetén a maximális SQNR:
$$	ext{SQNR}_{\max} = 6 \cdot 10 + 1{,}8 = \mathbf{61{,}8	ext{ dB}}$$
