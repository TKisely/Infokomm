---
title: "Infokommunikáció (BMEVITMAB03) – Régi vizsgafeladatok témakörönként, ellenőrzött megoldással"
keszult: 2026-11-15
forrasok:
  - "BME/Infokom/ALL-IN-Infokomm-1.pdf (Moodle elővizsga 2020.05.26 és vizsga 2020.06.02, javítói megjegyzésekkel; hallgatói megoldások: 2014.01.07, 2014.01.14, 2014.12.15, 2014.12.22, 2015.12.16, 2016.01.05, 2016.01.12, 2016.06.07)"
  - "BME/Infokom/5-ösöm-lesz-infokommból.pdf"
  - "BME/Infokom/Infokommunikáció-képletek-FINAL.pdf"
---

# Régi vizsgafeladatok – ellenőrzött megoldással

**Jelölések**
- `[2020.06.02 Q7]` – a feladat forrása (vizsga dátuma, feladat sorszáma).
- **Javító:** a Moodle-javító eredeti megjegyzése. Ez mutatja, mire **nem** jár pont.
- ⚠️ – a forrásban szereplő (hallgatói) megoldás hibás. Itt a helyes megoldás áll.
- `[ELLENŐRIZENDŐ]` – a feladat szövege vagy ábrája hiányos, ezért feltételezéssel számoltam.
- `[ÁBRA SZÜKSÉGES]` – a feladat ábrán alapul, és az ábra a forrásban csak képként van meg.

Minden számot újraszámoltam. Az Erlang-B értékek a rekurzív képlettel készültek, nem a táblázatból.

**Fejben számoláshoz (a vizsgán engedélyezett közelítések):** lg2 = 0,3; lg3 = 0,48; lgπ ≈ 0,5; lg5 = 0,7; lg7 = 0,85; lg e = 0,43; π² ≈ 10.

---

## 1. Rádiós összeköttetések

### 1.1 Kétutas csillapítás és Γ hatása `[2020.05.26 Q1]` (2/2 pont)
h_T = h_R = 10 m, r = 10 km, f = 300 MHz, G_T = 5 dB, G_R = 3 dB.
- a) a = 20lg(r²/(h_Th_R)) − G_T − G_R = 20lg(10⁸/100) − 8 = **112 dB**. Ebben a zónában **nincs frekvenciafüggés**.
- b) Γ = −0,8 → E_max/E_min = (1+0,8)/(1−0,8) = **9**.

### 1.2 Mezőkovácsháza, Kossuth Rádió `[2020.06.02 Q7]` (a hallgató 2/4 pontot kapott)
Az adó 96 m tengerszint feletti magasságban van, a torony 40 m, f = 83,3 MHz. A vevő 650 m-re van, 1 m magas asztalon, f_KF = 10,7 MHz.
- a) f₀ = 83,3 + 10,7 = **94 MHz**.
- b) f_t = 83,3 + 2·10,7 = **104,7 MHz**.
- c) λ = 3·10⁸/83,3·10⁶ = 3,6 m. Sík terepen a **tengerszint feletti magasság nem számít**, ezért h_T = 40 m, h_R = 1 m.
  Az interferenciazóna határa 4h_Th_R/λ = 4·40·1/3,6 = **44,4 m**. Mivel r = 650 m ≫ 44 m, a vevő **túl van** az interferenciazónán.
- d) Ezért a **kétutas** képlet érvényes: a = 20lg(650²/(40·1)) − 20 − 10 = 80,5 − 30 ≈ **50,5 dB**.
- **Javító:** „c elszámolva, d elszámolva”. A hallgató 4264 m-t kapott, és egyutas képlettel számolt (37 dB). Az interferenciazónán túl viszont a kétutas képlet kell.
  `[ELLENŐRIZENDŐ]`: ha valaki h_T = 136 m-rel (96 + 40) számol, az eredmény 151 m és ≈ 39,8 dB. A „sík vidék” kifejezés miatt a 40 m a helyes.

### 1.3 A vevőantenna magasságának változtatása
- `[2016.01.05 / 2.]` A kétutas zónában (r ≫ 4h_Th_R/λ) h_R felezése +20lg2 = **+6 dB** csillapítást okoz, tehát a vett teljesítmény a negyedére csökken.
- `[5-ösöm, 900 MHz, h_R = 5 m, az interferenciazóna határán]` A határon 2πh_Th_R/(λr) = π/2.
  - h_R felezése → az argumentum π/4, sin²(π/4) = ½ → **−3 dB**.
  - h_R duplázása → az argumentum π, sin(π) = 0 → kioltás, a teljesítmény **−∞ dB-lel** változik.

### 1.4 Antennák hatásos felülete
- `[2014.12.22 / 1]` f = 30 MHz, G = 4π (11 dB): λ = 10 m, A_h = Gλ²/(4π) = λ² = **100 m²**.
- `[5-ösöm]` G = 3 (4,77 dB), f = 600 kHz: λ = 500 m, A_h = 3·500²/(4π) ≈ **60 000 m²**.

---

## 2. Mintavételezés, kvantálás

> Általános SNR-képlet egyenletes kvantálóra (képletgyűjtemény):
> **SNR = (3/C²)·(f_s/(2B))·2^(2n)**, ahol C a csúcstényező. Szinuszra (C = √2, f_s = 2B): 1,76 + 6,02n dB.
> A túlmintavételezés (f_s > 2B) **javítja** az SNR-t, mert a zaj nagyobb sávra terül szét, és a szűrő levágja.

### 2.1 45–75 kHz `[2016.01.05 / 1]`, `[F12]`
LPF: f_s ≥ 150 kHz. BPF: 75 ≤ f_s ≤ 90 kHz. A legkisebb érték f_s = 75 kHz (a spektrumképet ezzel kell felrajzolni).

### 2.2 40–70 kHz, √2-es csúcstényező, SNR ≥ 64 dB `[2020.06.02 Q8]` (3/3 pont)
- a) LPF: f_s ≥ 140 kHz. BPF (k = 2): 70 ≤ f_s ≤ 80 kHz.
- b) f_s ≥ 140 kHz esetén aluláteresztő be- és kimenő szűrő kell, 70–80 kHz esetén sáváteresztő.
- c) Aluláteresztővel f_s = 2B, ahol B = 70 kHz, a szorzó 1 → 6,02n + 1,76 ≥ 64 → **n = 11**.

### 2.3 60–108 kHz, √3-as csúcstényező (háromszögjel), SNR ≥ 70 dB `[2014.12.15 / 4]`, `[2014.01.14 / 2]`
- a) LPF: f_s ≥ 216 kHz. BPF: B = 48, k = ⌊108/48⌋ = 2 → **108 ≤ f_s ≤ 120 kHz**.
- b) 10lg(3/C²) = 10lg1 = 0 → 6,02n ≥ 70 → n ≥ 11,6 → **n = 12**.

### 2.4 Négyszögjel visszaállítása `[5-ösöm, 3. fejezet]`
1 kHz-es négyszögjel a bemenet (páratlan felharmonikusok). A kimeneten csak 1, 3, 7 és 9 kHz-es komponens jelenik meg.
- a) A bemenő szűrő határfrekvenciája 3 kHz < B_be < 5 kHz (az 5 kHz-es komponens hiányzik). A kimenő szűrőé 9 kHz < B_ki < 11 kHz.
- b) **f_s = 10 kHz**: 10 − 1 = 9 és 10 − 3 = 7 kHz. Ha f_s = 2, 4, 6 vagy 8 kHz lenne, 5 kHz-es komponens is megjelenne.

---

## 3. Kódolás

### 3.1 00→00000, 01→01110, 10→10101, 11→11011 `[2020.05.26 Q3]`, `[2014.01.07 / 1]` (3/3 pont)
- G = [10101; 01110]. v = 01010 → a legközelebbi kódszó 01110 (távolság 1) → u = **01**.
- Hᵀ = [101; 110; 100; 010; 001]; s = v·Hᵀ = **100** = Hᵀ 3. sora → e = 00100 → c = 01110.
- d_min = 3 → 2 hiba detektálható, 1 javítható.

### 3.2 Kraft és prefix kód `[2020.06.02 Q1]` (2/2 pont)
- 2,2,3,3,3,4,4,4,4: Σ = 9/8 > 1 → **nem** készíthető egyértelműen megfejthető kód.
- 2,2,3,3,3,5,5,5,5: Σ = 1, például 00, 11, 010, 011, 100, 10100, 10101, 10110, 10111.

### 3.3 C(5,2) kód, amelynek kódszava 10101 és 01101 `[2015.12.16 / 3]`, `[2014.01.14 / 1]`
- G = [10101; 01101], B = [101; 101], Hᵀ = [101; 101; 100; 010; 001].
- Kódszavak: 00000, 01101, 10101, **11000** → d_min = 2 → **1 hiba jelezhető, 0 javítható**.
- v = 11001 → s = 101 ⊕ 101 ⊕ 001 = **001** = Hᵀ 5. sora → e = 00001 → c = 11000 → u = 11.
  Mivel d_min = 2, ez csak a **legvalószínűbb** javítás, garantált javításra a kód nem képes.
  Az 1. és a 2. pozíció hibája ráadásul ugyanazt a szindrómát adja.

### 3.4 (7,4) kód, B = [110; 101; 011; 111] `[2016.01.12 / 1]`
- Hᵀ = [110; 101; 011; 111; 100; 010; 001].
- v = 0000111 → s = 100 ⊕ 010 ⊕ 001 = **111** = Hᵀ 4. sora → a 4. bit hibás → c = 0001111.
- A 16 kódszó közül a legkisebb súly 3 → d_min = 3 → 2 hiba jelezhető, 1 javítható.
- Az üzenet 4 bites: G-nek 4 sora van. Ellenőrzés a Hamming-korláttal: 1 + n ≤ 2^(n−k) → 8 ≤ 8 ✓ (perfekt kód).

### 3.5 (7,4) kód, B = [011; 110; 101; 111] `[2014.12.22 / 4]`
v = 1100001 → s = 011 ⊕ 110 ⊕ 001 = **100** (Hᵀ 5. sora → az 5. bit hibás). d_min = 3.

### 3.6 Szisztematikus kód tervezése: k = 2, 2 hibát detektál `[2016.01.05 / 4]`
- d_min = 3 → 1 hiba javítható.
- Singleton-korlát: d_min ≤ n − k + 1 → n ≥ 4.
- Hamming-korlát: 1 + n ≤ 2^(n−k). n = 4-re 5 ≤ 4 ✗, n = 5-re 6 ≤ 8 ✓ → **n = 5**.
- Egy jó G: [10111; 01011]. A kódszavak 10111, 01011, 11100 → d_min = 3 ✓. Lineáris kódnál a kód súlya w_min = d_min = 3.

### 3.7 Bináris forrás, p(a) = 0,9, p(b) = 0,1 `[2016.06.07 / 2]`
Szimbólumonkénti kódolással L̄ ≥ 1 bit, mert minden kódszó legalább 1 bites. **Szimbólumpárok** kódolásával viszont kisebb is elérhető.
- Párok valószínűsége: aa 0,81, ab 0,09, ba 0,09, bb 0,01.
- Huffman: aa → 0, ab → 10, ba → 110, bb → 111.
- L̄ = 0,81 + 0,18 + 0,27 + 0,03 = 1,29 bit/pár = **0,645 bit/szimbólum < 1** ✓ (H = 0,469 bit).

---

## 4. Analóg moduláció és vevők

### 4.1 AM-DSB példák (U_v = vivőamplitúdó, A = moduláló amplitúdó, m = A/U_v, csúcs = U_v + A)
**P = U_v²/2 + 2·(A/2)²/2 (1 Ω-on).**

| Forrás | Adatok | U_v / A | Komponensek | P (1 Ω) |
|---|---|---|---|---|
| `[2020.06.02 Q5]`, M1-T004 | 240/30 kHz, m = 1, csúcs 6 V | 3 / 3 V | 240: 3 V; 210, 270: 1,5 V | 6,75 W |
| `[2020.05.26 Q4]` | 100/20 kHz, m = 0,5, csúcs 6 V | 4 / 2 V | 100: 4 V; 80, 120: 1 V | **9 W** |
| `[2014.12.15 / 2]` | 100/20 kHz, m = 0,5, csúcs 3 V | 2 / 1 V | 100: 2 V; 80, 120: 0,5 V | 2,25 W |
| `[2014.01.07 / 4]`, 5-ösöm | 80/20 kHz, m = 0,25, csúcs 2,5 V | 2 / 0,5 V | 80: 2 V; 60, 100: 0,25 V | 2,0625 W |

- **Javító `[2020.05.26 Q4]`:** „teljesítmény nem jó – minden komponensé számít!” A hallgató csak a vivőt számolta (8 W), a helyes érték 9 W.
- Az időt **ms-ban** kell behelyettesíteni, ha a frekvencia kHz-ben van megadva.
- Rajznál: 50 µs alatt a 20 kHz-es moduláló jel 1 periódusa és a 80 kHz-es vivő 4 periódusa fér el.

### 4.2 AM-spektrum dBV-ben megadva `[2016.01.05 / 5]`
A vivő 3 dBV, az oldalsávok −9 dBV. A dBV **effektív** értékre vonatkozik: 3 dBV → 1,41 V_eff → **2 V** csúcs; −9 dBV → 0,355 V_eff → **0,5 V** csúcs.
Ebből s(t) = (2 + 1·cos 2π·20t)·cos 2π·100t [V, t ms], m = 0,5. Demodulálni burkolódetektorral lehet (m < 1).

### 4.3 Az oldalsávok teljesítményaránya `[2016.06.07 / 1]`
P_oldalsáv/P_össz = **m²/(C² + m²)**, ahol C a moduláló jel csúcstényezője. Szinuszra C² = 2, m = 0,5 → 0,25/2,25 = **1/9**.

### 4.4 Oszcilloszkópos AM `[2016.01.12 / 4]` `[ÁBRA SZÜKSÉGES]`
Függőlegesen 1 osztás = 2 V, vízszintesen 1 osztás = 100 µs.
- Csúcs 6 V, A = 2 V → U_v = 4 V, **m = 0,5**.
- P = 4²/2 + 2·1²/2 = **9 W**.
- f_m: a periódus 4 osztás = 400 µs → 2,5 kHz. f_v: 5 periódus 100 µs alatt → 50 kHz.
- Demodulátor: burkoló (csúcsegyenirányítós) vagy koherens szorzós.

### 4.5 FM-sztereó `[2020.06.02 Q2]` (2/3 pont)
- b) Mono vevő: a 15 kHz-es aluláteresztő szűrő után az M = L+R marad, ezért mindkét csatorna szól.
  **Javító:** „Vajon a (b) válaszban milyen szűrőkről van szó?” Nevezd meg: a 15 kHz-es aluláteresztőről van szó.
- c) Ha az S 6 dB-lel csillapodik, **áthallás** keletkezik: L' = 0,75L + 0,25R, R' = 0,25L + 0,75R, a szeparáció ≈ 9,5 dB.
  **Javító: a „zaj miatt rosszabb minőség” válasz 0 pontot ért.**
- Bónusz `[2016.01.12 / 2]`: ha a bal mikrofonba 440 Hz-es hangot fütyülnek, a komponensek: 440 Hz (M), 38 kHz ± 440 Hz (S oldalsávjai) és a 19 kHz-es pilot. A 38 kHz-es vivő el van nyomva.

### 4.6 FM-jel az oszcilloszkópon `[2014.01.07 / 2]` `[ÁBRA SZÜKSÉGES]`
- FM, mert az amplitúdó állandó, a nullátmenetek pedig sűrűsödnek és ritkulnak.
- f_c = 50 kHz, f_m = 2,5 kHz, Φ_D ≈ 2 rad → f_D = Φ_D·f_m = **5 kHz**.
- Demodulátor: PLL, számláló típusú vagy fázistolós szorzós.

### 4.7 Szuperheterodin vevő
| Forrás | f_v | f₀ (felső keverés) | f_t |
|---|---|---|---|
| `[2016.01.12 / 2]` | 97,6 MHz | 108,3 MHz | 119 MHz |
| `[2014.12.22 / 5]`, `[2014.01.07 / 5]` | 107 MHz | 117,7 MHz | 128,4 MHz |
| `[2020.06.02 Q7]` | 83,3 MHz | 94 MHz | 104,7 MHz |

- `[5-ösöm, 24–36 MHz, f_KF = 18 MHz]`: alsó keverésnél f₀ = 7,5 MHz, ha 25,5 MHz-et akarunk venni.
  ⚠️ A forrás szerint a tükör „F + f₀ = 33 MHz”. **Ez hibás:** a tükör az a jel, amelyikből a keverő szintén 18 MHz-et állít elő. 10,5 + 7,5 = 18 → **f_t = 10,5 MHz** (= |f_v − 2f_KF|).
- A „felső keverésnél messzebb a tükör” indoklás **téves**: a tükör mindig 2f_KF-re van a vett jeltől. A valódi előny az oszcillátor kisebb relatív átfogása (42–54 MHz: 1,29×, illetve 6–18 MHz: 3×).

---

## 5. Digitális moduláció

### 5.1 FSK/MSK, f₁ = 22,2 kHz, f₂ = 24,2 kHz `[2020.06.02 Q3]`, `[2014.12.15 / 1]`, `[2016.06.07 / 4]`
- f_D = 1 kHz, F = 23,2 kHz.
- MSK esetén f_D·T = 1/4 → 1/T = 4f_D = **4 kbit/s**.
- Az MSK sávtakarékosabb és folytonos fázisú. GMSK-t a GSM használ.

### 5.2 FSK → MSK, F = 150 kHz, f_D = 50 kHz, T = 20 µs, A = 2 V `[2015.12.16 / 4]`
- a) f₀ = 200 kHz = 4/T, f₁ = 100 kHz = 2/T.
- b) ⚠️ A forrás szerint B = 2(F + f_D) = 400 kHz. Ez **hibás**, mert a vivőfrekvencia nem moduláló frekvencia.
  A moduláló (adat)jel alapharmonikusa 1/(2T) = 25 kHz, így Carson szerint B ≈ 2(50 + 25) = **150 kHz**.
  `[ELLENŐRIZENDŐ]`: más konvenció B ≈ 2(f_D + 1/T) = 200 kHz-et ad. Írd le, melyiket használod.
- c) MSK-hoz a jelzési idő marad, f_D = 1/(4T) = **12,5 kHz** → f₀ = 162,5 kHz (13/4T), f₁ = 137,5 kHz (11/4T).

### 5.3 QAM-16, [n,k] = [160,100], 20 MHz `[2020.06.02 Q4]` (1/2 pont)
R_s = B/(1+α), mert a modulált jel kétoldalsávos.
- α = 1 esetén: R_s = 10 MBd → 40 Mbit/s → ·100/160 = **25 Mbit/s**.
- α = 0 esetén: 20 MBd → 80 → **50 Mbit/s**.
- **Javító: 0 + 1.** A hallgató 40 MBd-dal számolt, ami a sávszélesség-képlet hibás alkalmazása. `[ELLENŐRIZENDŐ]`: a feladat nem adja meg α-t, írd le a feltételezést.

### 5.4 150 Mbit/s 72 MHz-ben `[2016.01.05 / 8]`
- 8-PSK: R_s = 50 MBd. A szükséges sávszélesség (1+α)·50 MHz ≤ 72 → **α ≤ 0,44 esetén megoldható**.
  ⚠️ A hallgató szerint „nem lehet”. Ez csak akkor igaz, ha a sávszélességet α = 1-gyel számoljuk. `[ELLENŐRIZENDŐ]`
- 16-QAM: 37,5 MBd → α ≤ 0,92, kényelmesen belefér.
- Miért nem bármilyen nagy M? Mert romlik a zajtűrés, és nő az erősítés- és fázishiba-érzékenység.

### 5.5 16-PSK, R = √2 `[2016.01.05 / 6]`
P = R²/2 = 1 W (1 Ω, R a csúcsamplitúdó). Ha már 11,25° fázishiba van, a pontok a döntési határon állnak. A legkisebb zaj is hibát okoz, ezért a szükséges SNR **végtelen**.

### 5.6 36-QAM (6×6 rács, ±1, ±3, ±5) `[F22]`, `[5-ösöm]`
- Erősítés- és csillapítástűrés: a csillapítás határa **4/5 (−20%)** (külső pont), az erősítésé **4/3 (+33%)** (±3-as pont).
- Fázistűrés: ⚠️ az 5-ösöm szerint asin(1/5) = 11,5°. Numerikusan minden pontra ellenőrizve a legszigorúbb a sarokpont (5,5): **≈ 10,6°**.
- A sarokpontok áthelyezése: (±5, ±5) → (±7, ±1) esetén mindkettő √50, tehát a csúcsteljesítmény **nem csökken**, és a fázistűrés romlana, ha két szomszédos pont kerülne a tengely mellé. 6×6-os rácsnál ennek nincs értelme. 8×8-asnál már lenne: 7√2 = 9,9 > √82 = 9,06.

### 5.7 64-QAM (±1 … ±7) `[ALL-IN 7.11 d]`
- Erősítéstűrés: a sarokpontnál 6/7 (−14,3%), a ±5-ös pontnál 6/5 (+20%).
- Fázistűrés: ⚠️ a forrás szerint π/4 − asin(5/√74) = 9,46°. Ez a szomszédos **pontig** mért szög, nem a döntési határig. Helyesen **≈ 7,7°** (sarokpont, a határ Q = 6). 16-QAM-nál ugyanez ≈ 16,9°.

### 5.8 8-QAM konstellációk, 2A ponttávolság `[2014.12.15 / 6]` `[ÁBRA SZÜKSÉGES]`
⚠️ A forrásmegoldás (Pa = 2,414A, Pb = 2,164A, Pc = 2,287A) a pontok origótól mért **távolságát** átlagolja, nem a **négyzetét**, és a mértékegysége sem A². A teljesítmény a távolságnégyzetek átlaga: P = (1/8)Σdᵢ².
Ábra nélkül a három elrendezést nem lehet rekonstruálni. Referenciaértékek: téglalap (2×4) 6A², csillag 4+4 ≈ 4,73A², 8-PSK kör 6,83A². A legtakarékosabb az lesz, amelyik a legkisebb (1/8)Σdᵢ²-et adja.

### 5.9 DVB-C és DVB-T
- `[2014.12.15 / 7]` 64-QAM, α = 15%, RS(204,188): R_s = 6,96 MBd → 41,7 Mbit/s → ·188/204 ≈ 38,5 Mbit/s → **25 db** 1,5 Mbit/s-os adás.
- `[2015.12.16 / 4]`, `[5-ösöm]` 256-QAM, α = 1/3, RS nélkül: R_s = 8/(4/3) = **6 MBd**, 8 bit → **48 Mbit/s** → **32** csatorna.
  RS-sel 44,2 Mbit/s és 29 csatorna. A 6 Mbit/s-os kódolás jobb minőséget (akár HD-t) ad, de kevesebb csatorna fér el.
  1024-QAM: 10 bit/szimbólum, de nagyobb teljesítményigény és kisebb zajtűrés.
- `[5-ösöm P.9.2]` DVB-T: 6817 vivő, ebből 6048 adat, T₀ = 896 µs, GI = 1/4, 64-QAM, FEC 3/4, RS(204,188):
  - B = (6817 + 1)/T₀ = **7,61 MHz**,
  - v_s = 6048/((1 + 1/4)·T₀) = **5,4 MBd** → ·6 = 32,4 Mbit/s → ·3/4·188/204 = **22,4 Mbit/s** → ≈ 14–15 db 1,5 Mbit/s-os adás.

---

## 6. Digitális alapsávi átvitel

- `[2020.05.26 Q2]` `[ÁBRA SZÜKSÉGES]` A PAM elemi jele 3T/4-es mintavételi fázisnál ±0,8 és ±1,7 értékeket ad, ezek a 0-s küszöb jó oldalán vannak, tehát kétszintű jelnél nincs ISI.
  Négyszintű jelnél viszont 1,25·1 + 0,45·3 = 2,6 > 2 → hibás döntés, ezért négyszintű átvitelre **nem alkalmas**.
- `[5-ösöm 2.]` Koszinusz félhullám alakú elemi jel (gyökös Nyquist): a sávszélessége ≈ 1/T, ezért egy 1/T határfrekvenciájú aluláteresztő nem okoz számottevő ISI-t.
- Additív zaj okozta döntési hiba: PAM-2 esetén p = Φ(−h₀/σ), L szintű PAM esetén **p = 2(L−1)/L · Φ(−h₀/σ)**.

---

## 7. GSM

### 7.1 Roaming: MS-A1 és MS-A2 az α előfizetője, MS-A2 β-ban barangol `[2020.05.26 Q8]` (1/2 pont)
- (a) α-BTS, (b) α-HLR, (d) α-AuC.
- (c) **β-BTS, β-BSC, β-MSC, β-VLR + α-HLR.**
  **Javító:** „c helytelen: a BSC is… (és persze a BTS)”. A BSS elemeit is fel kell sorolni.

### 7.2 Keresztbe barangolás: MS-A az α-é és β-ban van, MS-B a β-é és α-ban van `[2016.01.05 / 7]`, `[5-ösöm 9.]`
Ha MS-A hívja MS-B-t:
- (a) **HLRβ** kerül lekérdezésre (a hívott fél honos HLR-je),
- (b) **GMSCβ** értesül előbb,
- (c) MS-A hívás közbeni mozgásáról: BTSβ, BSCβ, MSCβ, VLRβ (és HLRα, ha VLR-területet vált),
- (d) az SMS-t a **küldő honos** SMSC-je kézbesíti: MS-B küld → SMSCβ. A másik változatban MS-A2 (α-előfizető) küld → SMSCα, és ez tárolja az üzenetet a kézbesítésig vagy a lejártáig.
- Ki- és bekapcsolás: a HLRβ-ban nem történik semmi. A HLRα csak akkor frissül, ha közben más MSC/VLR-területre került a készülék.

### 7.3 Cellás kapacitás
- Budapest `[F19]`, `[5-ösöm]`: 124·8 = 992/klaszter. 525/12 = 43,75 klaszter → 43 400 egyidejű hívás. A forrásban 44 klaszterrel 43 648 is szerepel.
- Győr `[2016.06.07 / 3]`: 170 km², 85 cella → 2 km²/cella, a klaszter 24 km². 85/12 ≈ 7 klaszter → ≈ **7000** egyidejű hívás.
  c) 40 FDM-csatornás szolgáltató cellánként: 40/12 ≈ 3,3 FDM × 8 ≈ **26** egyidejű hívás.
- Erlang + GSM `[2014.12.15 / 9]`: N = 12, h = 2 perc, P_b ≤ 1%. A csatornák cellánként 124·8/12 ≈ 82 → A(82; 1%) ≈ **67 Erl** → λ = A/h ≈ **2000 hívás/óra**. A forrás grafikonról 65 Erl-t és 1950/órát olvasott le.

### 7.4 Hitelesítés `[2016.01.12 / 5]` `[ÁBRA SZÜKSÉGES]`
- Az AuC egy RAND-ot generál, és elküldi a mobilnak.
- A3 algoritmus: K_i + RAND → SRES (32 bit), ezt a SIM és az AuC is kiszámítja. Az MSC/VLR összehasonlítja a kettőt.
- A8 algoritmus: K_i + RAND → K_c (64 bit). A5 algoritmus: K_c-ből 114 bites kulcsfolyam keletkezik, ezt XOR-olják a burst bitjeivel.
- Az ábra jelölései: A = RAND, B = SRES, C = SRES(MS), a felső doboz A8, az alsó A5.
- EIR: készüléklisták (fehér, fekete, szürke). FNR: a hordozott számok nyilvántartása (számhordozás).

---

## 8. Forgalmi méretezés, VoIP

### 8.1 DTMF, 60 000 hívás/óra, 10 s, P_b ≤ 0,2% `[2016.01.05 / 3]`
A = 166,7 Erl → **N = 198**. ⚠️ Az egyik forrás 197-et ad, de ott B = 0,212% > 0,2%. Kihasználtság: a = A/N·(1−P_b) ≈ 0,84.

### 8.2 5 hívás/perc, 3 perc `[2016.01.12 / 3]`
- A = 15 Erl.
- P(tartás > 6 perc) = e^(−6/3) = e^(−2) = 0,135 → 100 hívásból ≈ **14**.
- P_b ≤ 0,1% → **N = 28** (B = 0,086%; 27-nél 0,16%). ⚠️ Az egyik forrásban 29 szerepel.
- Kihasználtság: a = 15/28·0,999 ≈ **0,535**.
- e) 10 Mbit/s-os vonal: 28 hívás × ~20 kbit/s ≈ 0,56 Mbit/s, G.711-gyel (~87 kbit/s) ≈ 2,4 Mbit/s. Mindkét esetben **belefér**.

### 8.3 Ügyfélszolgálat: 990 ezer ügyfél, N = 21, P_b = 0,1%, h = 200 s `[5-ösöm 10.]`
- a) A(21; 0,1%) ≈ **10,1 Erl** → λ = A/h ≈ 0,05 hívás/s ≈ 182 hívás/óra.
- b) 0,05 · 3600 · 24 · 365 / 990 000 ≈ **1,6 hívás/ügyfél/év**.
- c) a = 10/21·(1 − 0,001) ≈ **47,6%**.
- d) N = 17 esetén P_b(17; 10) ≈ **1,3%**. A visszahívó munkatárs foglaltsága ≈ A·P_b ≈ 0,13 Erl ≈ **13%**. `[ELLENŐRIZENDŐ]`: feltételezem, hogy a visszahívás is h ideig tart.

### 8.4 Autókölcsönző: 2 kocsi, λ = 4/nap, h = 1,5 nap `[2016.06.07 / 7]`
- A = 6 Erl. P_b = (6²/2!)/(1 + 6 + 18) = 18/25 = **0,72**.
- Kihasználtság: a = 6/2 · 0,28 = **0,84**.
- c) Átlagosan 1,68 kocsi van bérelve → bevétel 168 USD/nap, költség 2 × 60 = 120 USD/nap → haszon **48 USD/nap**.

### 8.5 VoIP
- `[F11]`, `[5-ösöm]`: 10 byte/5 ms, 47 byte fejléc → n = 1: 200 pps, 91,2 kbit/s; n = 2: 100 pps, 53,6 kbit/s.
- `[2020.06.02 Q6]` (1/3 pont) G.711, 80 byte/10 ms, n = 2, 47 byte fejléc:
  - a) **50 csomag/s**,
  - b) (160 + 47)·8·50 = **82,8 kbit/s**,
  - c) n = 4 esetén 25 pps és 73,4 kbit/s. Hátrány: **40 ms csomagolási késleltetés**, és egy elveszett csomag 40 ms beszédet visz el.
  - **Javító: 1 + 0 + 0.** A hallgató 50 bit/s-ot és 100 bit/s-ot írt, összekeverte a csomag/s és a bit/s mértékegységet.
- IP-médiaszolgáltatások `[2016.06.07 / 5]`:
  - A best effort problémái: késleltetés, jitter és csomagvesztés.
  - TCP azért nem jó, mert az újraküldés késleltetést okoz, és a valós idejű médiának időzítési garancia kell.
  - IGMP: a multicast csoporttagság kezelése (IPTV).
  - Fair queuing: nincs éhezés. WFQ: súlyozott, a fontosabb folyam többször kap sorra.

---

## 9. Hang, hallás, kép, látás

- `[2020.05.26 Q5]` 1 W → 93 dB 1 m-en.
  - a) 120 dB-es fájdalomküszöbig +27 dB → **≈ 500 W**. A javító 3/3 pontot adott arra a megoldásra is, amely 123 dB-lel (1000 W) számolt, mert a feltételezést leírta.
  - b) 1 kHz-en a dB és a phon számértéke egyezik.
  - c) A 100 Hz-en mért 109 dB a hangszóró, a mikrofon és a terem frekvenciafüggésével magyarázható.
- `[2014.01.14 / 4]`, `[5-ösöm]` A „hallásküszöbön” lévő hang **0 phon**, bármilyen frekvencián. 1 kHz és 30 dB → 30 phon. 100 Hz és 0 dB → nem hallható.
- `[2016.01.12 / 6]` 2 m-en 30 dB → 20 m-en −20 dB (1/r² intenzitás) → **10 dB**. A hallhatóságot a háttérzaj (elfedés), a terem akusztikája és a hallásküszöb frekvenciafüggése befolyásolja.
- p = 1000·p₀ → 60 dB → 1 kHz-en **60 phon**.
- **Y = 0,3R + 0,59G + 0,11B:** a zöld csík a legvilágosabb, utána a piros, a kék a legsötétebb. A zöld és a piros csík akkor olvad össze, ha a zöld fényességét 0,3/0,59-szeresére csökkentjük.
- Mozgásérzékeléshez 10–20 kép/s kell. A villogásérzet 45–60 Hz-ig (fúziós frekvencia, a fényerőtől függ) van meg. Metamer szín: azonos színérzet különböző spektrumokkal.
