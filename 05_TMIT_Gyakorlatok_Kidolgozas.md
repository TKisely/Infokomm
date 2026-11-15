---
title: "Infokommunikáció – TMIT gyakorlatanyag (gyak00–08) kidolgozása"
keszult: 2026-11-15
forras: "Forrasok/TMIT_gyakorlatok/gyak00.pdf … gyak08.pdf (letöltve: tmit.bme.hu/sites/default/files/attachments/, 2026-11-15)"
---

# TMIT gyakorlatanyag – kidolgozás

**Mi van ebben a fájlban?** A tanszéki gyakorlatanyag mind a 8 elérhető füzete, témánként.
- **O.x**: elméleti összefoglaló (röviden).
- **P.x**: kidolgozott példa. A megoldást minden esetben **újraszámoltam**, és ✅ jelöli, ha egyezik.
- **G.x**: gyakorló feladat. **A forrásban ezekhez nincs megoldás**, a megoldásokat én készítettem, és ahol számolás van, szkripttel ellenőriztem.
- `[ÁBRA SZÜKSÉGES]` jelöli, ahol a feladat ábrán alapul, `[ELLENŐRIZENDŐ]` pedig, ahol feltételezéssel számoltam.
- **Kereszthivatkozás:** a példák azonosítója `tgNN_Px` / `tgNN_Gx`. Hogy ugyanez a feladat melyik előadáson, Koma-gyakorlaton és vizsgán szerepel, azt a `06_Kereszthivatkozasok.md` mutatja.

**Hiányzó füzetek:** a `gyak03.pdf` és a `gyak09.pdf`-től felfelé minden fájl 404-es hibát ad a szerveren, és a tárgyoldal sem hivatkozik rájuk.
- A témák sorrendje alapján a **03 valószínűleg a rádiós összeköttetés**. Ennek anyaga a OneDrive-on lévő `1-5 gyakorlatok.pdf` 3. fejezetében megvan, és az `01_Kidolgozas…` 1. fejezete feldolgozza.
- **A 09+ füzetek** valószínűleg a cellás mobil, a VoIP és a forgalmi méretezés témakörét fedik. Ezekhez a `02_Regi_Vizsgafeladatok…` 7–8. fejezete ad anyagot. `[ELLENŐRIZENDŐ]`

| Füzet | Téma | Oldal |
|---|---|---|
| gyak00 | Jelek alapjai: csúcstényező, Gauss-impulzus, szűrők | 3 |
| gyak01 | Mintavételezés, kvantálás | 7 |
| gyak02 | Forráskódolás és hibavédő kódolás | 6 |
| gyak04 | Analóg modulációs eljárások | 8 |
| gyak05 | Digitális alapsávi átvitel | 7 |
| gyak06 | Digitális modulációs eljárások | 7 |
| gyak07 | Hang – hallás, kép – látás | 10 |
| gyak08 | Műsorszóró rendszerek | 12 |

> Megjegyzés: a gyak00 és a gyak01 PDF-ben a szöveg egy része eltolt fontkódolású, ezért a sima szövegkinyerés olvashatatlan. Dekódoló szkripttel állítottam helyre (a számjegyekkel együtt), és a bizonytalan helyeket a PDF képéből ellenőriztem.

---

## gyak00 – Jelek alapjai

**Csúcstényező** = csúcsérték / effektív érték. Szinusz: √2, szimmetrikus négyszög: 1, háromszög: √3.

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| 1. szinusz és négyszög csúcstényezője | √2 és 1 | ✅ |
| 2. két különböző frekvenciájú, A amplitúdójú szinusz összege | a csúcs általában 2A, P = A² → csúcstényező **2** | ✅ |
| 3. x₁ = A(cos ω₀t + cos 2ω₀t + cos 3ω₀t) | csúcs 3A, effektív érték A√1,5 → **√6 ≈ 2,45** | ✅ |
| 3. x₂ = A(cos ω₀t + sin 2ω₀t + cos 3ω₀t) | a forrás csak egy felső korlátot ad: < √(10/3) ≈ 1,83 | numerikusan: csúcs ≈ 2,195A → **≈ 1,79** ✅ |
| 4. Gauss-impulzus x₀exp(−t²/2T²) | X(f) = x₀√(2π)T·exp(−f²/2B²), ahol B = 1/(2πT). A spektrum is Gauss-alakú | ✅ |
| 5. Gauss-impulzus Gauss-szűrőn | a kimenet is Gauss-impulzus, 1/B_e² = 1/B² + 1/B_H² | ✅ |
| 6. ideális és elsőfokú aluláteresztő | ideális: h(t) = 2B·sinc, nem kauzális. Elsőfokú: h(t) = 2πB·e^(−2πBt) (t ≥ 0) | ✅ |

Tanulság: a nagy csúcstényező túlméretezésre kényszeríti az elektronikát. A harmonikusokban gazdag jel csúcstényezője a fázisoktól függ.

---

## gyak01 – Mintavételezés, kvantálás

**Összefoglaló (O.1):**
- A mintasorozat spektruma f_s·ΣX(f − i·f_s). Átlapolódásmentes, ha a jel F sávjában egyik eltolt másolat sem jelenik meg.
- Kvantálási zaj: Δ²/12, a spektruma s_ε(f) = (1/f_s)·(Δ²/12)·|H(f)|².
- **Jel-zaj viszony:** p = (3/c²)·(f_s/(2B))·2^(2n). Ez a tárgy alapképlete, a túlmintavételezés hatása is benne van.

### P.1.1 Szivárgás és aliasing ✅
Mindkét szűrő: H = 1 (≤ 3 kHz), 2,5 − f/2 (3–5 kHz), 0,01 (5–10 kHz), 0 felette. f_s = 8 kHz.
- 1 kHz, 2 V bemenet → a kimeneten 1 kHz: 2 V, továbbá **7 és 9 kHz: 0,02 V** (szivárgás, H(7) = H(9) = 0,01). A 15 és 17 kHz-es komponenst a szűrő levágja.
- 4,5 kHz, 2 V bemenet → H(4,5) = 0,25 a bemeneten.
  - A valódi komponens 2·0,25·0,25 = **0,125 V**.
  - Az alias 3,5 kHz-en: 2·0,25·H(3,5) = 2·0,25·0,75 = **0,375 V**. Az álkomponens nagyobb, mint a valódi.

### P.1.2 Két sávban lévő jel (0–3 és 7–8 kHz), P = 0,2 mW, 50 Ω ✅
- A spektrális sűrűség páros függvény. s₀ = 0,2 mW/(2·4 kHz) = 25 µW/kHz = 1250 (mV)²/kHz.
- f_s ≥ 16 kHz esetén aluláteresztővel visszaállítható. **11 ≤ f_s ≤ 14 kHz** esetén is átlapolódásmentes, ekkor a jelhez illesztett (két áteresztősávú) szűrő kell.

### P.1.3 19–25 kHz-es sávszűrt jel ✅
- a) B = 6 kHz. 12 kHz-nél a 48 kHz-es eltolás átlapolódik, ezért a legkisebb jó érték **12,5 kHz**. A felső határ 38/3 ≈ 12,67 kHz.
- b) 50 kHz-es mintavétellel az SNR f_s arányában javul: 50/12,67 … 50/12,5 → **≈ 6 dB**, ugyanazzal a kvantálóval és szűrővel.

### P.1.4 Túlmintavételezés interpolációval ✅
15 kHz-es jel, 44 kHz-es mintavétel, 20 bites minták, 16 bites D/A, ideális visszaállító szűrő.
- a) Kiinduláskor (3/2)·(44/30)·2³² → **≈ 99,8 dB**. Négyszeres interpolációval ≈ **105,8 dB** (+6 dB, ugyanannyi, mint +1 bit).
- b) Elsőfokú szűrőnél 44 kHz-en a szivárgó sáv már 29 kHz-től kezdődik, ezt alig csillapítja. Négyszeres mintasűrűségnél csak 161 kHz-től, ott kb. 20 dB a csillapítás.

### G.1.1 (a forrásban nincs megoldás)
8 kHz-es PCM, a zárósáv 40 dB, 0,3–3,4 kHz-es áteresztősáv, 2 V-os 1,8 kHz-es bemenet.
- a) A 6,2 kHz-es komponens (8 − 1,8): 2 V·10⁻² = **20 mV**.
- b) n·8 ± 1,8 kHz komponensek (9,8; 14,2; 16,2 …), mindegyik a kimenő szűrővel csillapítva.
- c) Ha a bemenő amplitúdó nő, a kvantáló túlvezérlődik és vág. Megjelennek az 1,8 kHz felharmonikusai (3,6; 5,4; 7,2 … kHz) és ezek álképei n·8 ± k·1,8 kHz-en.
  A sávba is esik ilyen, pl. 8 − 5,4 = **2,6 kHz**, 8 − 7,2 = **0,8 kHz**, valamint maga a 3,6 kHz.

### G.1.2 (saját megoldás)
- a) A **hasznos jel szempontjából egyenértékű**: mindkét rendszer kimenete a bemenet 0–4 kHz-es része, és átlapolódás sehol sincs.
  A **zaj szempontjából nem**: a 20 kHz-es változatban a kvantálási zaj 0–10 kHz-re terül szét, és ebből csak 4 kHz jut át, a másikban 5 kHz-ből 4 kHz.
  Az SNR-javulás tehát (20/8)/(10/8) = **2×, azaz +3 dB**.
- b) Nagyobb f_s mellett jobb az SNR (a zaj szétterül), lazább lehet a szűrők átmeneti sávja, és kisebb az aliasing és a szivárgás. Ára a több adat.

### G.1.3 (saját megoldás)
Az áteresztősáv 4,5 kHz-ig tart, 500 Hz-es átmenet után 40 dB a csillapítás (≥ 5 kHz).
- a) A sávba (≤ 4,5 kHz) álképet a bemenet f_s − f ≥ f_s − 4,5 kHz-es komponensei adnak. A bemenő szűrő akkor csillapítja őket ≥ 40 dB-lel, ha f_s − 4,5 ≥ 5 → **f_s ≥ 9,5 kHz**. Ugyanez a feltétel elég a szivárgásra (f_s − 4,5 ≥ 5) is.
- b) f_s = 9 kHz, 4,72 kHz-es bemenet: a kimeneten megjelenik a **4,72 kHz-es** (az átmeneti sávban, részben csillapítva) és a **9 − 4,72 = 4,28 kHz-es álkép**. Az álkép az áteresztősávban van, ezért a kimenő szűrő nem csillapítja.

### G.1.4 (saját megoldás)
- a) A 3,4 kHz-es mérőjelnél 11,4 és 18,2 kHz-es szivárgás jelenik meg → f_s − 3,4 = 11,4 és f_s + 3,4 = 18,2 → **f_s = 14,8 kHz**.
- b) Jelölje H_I a bemenő, H_O a kimenő szűrőt. Az első mérésből H_I(3,4)H_O(3,4) = 0,75 és H_I(3,4)H_O(11,4) = 0,015.
  A második mérésből (4 V-os 11,4 kHz-es jel, 15 mV-os álkép 3,4 kHz-en) H_I(11,4)H_O(3,4) = 0,00375.
  A keresett érték 4·H_I(11,4)H_O(11,4) = 4·0,00375·0,015/0,75 = **0,3 mV**.

---

## gyak02 – Forráskódolás és hibavédő kódolás

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| 5.1 hosszak 2,3,3,3,3,4,4,4,5,5 | Kraft = 1 → lehet; ha H = L̄, akkor pᵢ = 2^(−lᵢ) → **H = 49/16** | ✅ |
| 5.2 Shannon-kód, p = 0,4/0,25/0,12/0,1/0,08/0,05 | 00, 01, 1010, 1100, 1101, 11110; L̄ = 2,75, H = 2,236 | ✅ |
| 5.3 Pistike kódja {01, 10, 011, 1011} | nem egyértelmű (011·011 = 01·1011); Kraft szerint a 2,2,3,4 hosszakkal készíthető prefix kód: 00, 01, 100, 1100; ⚠️ **L̄ = 0,5·2 + 0,25·2 + 0,15·3 + 0,1·4 = 2,35** (a forrásban 2,05 áll, ez számolási hiba); H = 1,743 → **34,8%-kal** több. Huffman-kóddal (1, 01, 001, 000) L̄ = 1,75 | ⚠️ javítva (`03` E1); az első változat tévesen ✅ volt |
| 5.4 kódszavak 00000/10100/01110/11010 | G = {10100, 01110}; Hᵀ-ban az 1. és a 3. sor azonos (100) → ez a két egyhiba nem különböztethető meg; egy kódszó módosításával nem javítható, mert a linearitás miatt egy másik kódszónak is változnia kell | ✅ |
| 5.5 Golay (23,12), 6 hibát jelez | d_min = 7, 3 hibát javít, 4096 kódszó, 2048 szindróma = 1 + 23 + 253 + 1771 → **perfekt**; 4 hiba nem különböztethető meg 3-tól; s = …1…1… → a 15. és a 21. bit hibás | ✅ |
| 5.6 (8,4), nem szisztematikus G | a két utolsó sort összeadva lesz szisztematikus; u = 0110 → c = **01101010**; az 1. bit hibájára s = **0011**; d_min = 3 | ✅ |
| 5.7 (7,3) ciklikus kód, g(x) = x⁴+x³+x²+1 | x⁷+1 osztható g-vel → ciklikus; u = 010 → paritás 0111, c = **0100111**; az 1. bit hibájára s(x) = x³+x²+x ≠ 0 → hiba jelezve | ✅ |
| 5.8 LZ-szerű szeletelés | 15 szelet (0\|00\|1\|11\|000\|10\|001\|01\|111\|0011\|010\|100\|0101\|0000\|0001) | ✅ (az eljárás a forrás szerint) |

---

## gyak04 – Analóg modulációs eljárások

**Összefoglaló (O.4):**
- AM-DSB: s = [U + x(t)]·cos(2πFt + φ). Szorzó demodulátorral fázishelyes vivő kell. A 90°-os fázishiba nullát ad, ezen alapul a QAM.
- **Burkolódetektor** csak akkor működik torzítás nélkül, ha U + x(t) > 0 (m ≤ 1). Felette túlmoduláció lép fel.
- **P_hasznos/P_össz = m²/(c² + m²)** (c = a moduláló jel csúcstényezője).
- Szögmoduláció: Φ_D = max|m(t)|, f_D = max|m'(t)|/2π. Sávszélesség: B_v ≈ 2B(1+Φ_D) vagy ≈ 2(f_D + B).
- FM-demodulálás deriválással és burkolódetektorral (diszkriminátor), illetve fázistolós szorzóval.

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| P.4.1 m = 0,5 és 1,5, szinusz | a hatásfok m²/(2+m²) = **11%**, illetve **53%**. Háromszögnél (c = √3) ≈ **8%**, illetve **43%**. 150%-nál a burkolódetektor torzít (|U + x|) | ✅ |
| P.4.2 s = 3cos1800t + 10cos2000t + 3cos2200t | DSB, s_m = 6cos200t, f_v = 2000/2π egység, max/min = ±16, m = 0,6, a hatásfok 0,36/2,36 = **15%** | ✅ |
| P.4.3 60 kHz, m = 0,2, csúcs 1,8 V, 10 kHz | U = 1,5 V, s = (1,5 + 0,3cos2π·10t)cos2π·60t [V, ms]. Komponensek: 50/60/70 kHz, 0,15/1,5/0,15 V. Demodulálni szorzóval vagy burkolóval, ≥ 10 kHz-es aluláteresztővel | ✅ |
| P.4.4 4cos(500πt + 21 + 5sin(3πt + 2)) | FM (állandó amplitúdó, a fázis a moduláló jel integrálja). Amplitúdók 3 V és 4 V, **f_v = 250 kHz**, Φ_D = 5 rad, f_D = 7,5 kHz, B ≈ 18 kHz (vagy 24,7 kHz a finomabb becslés szerint) | ✅ |
| P.4.5 kislöketű PM kvadratúrával | s = U√(1+m²)·cos(2πFt + arctan m) → járulékos AM és nemlineáris torzítás. Φ = 0,5 esetén ≈ 10% | ✅ |
| P.4.6 fázistolós szorzó | φ = 270° esetén a kimenet sin(m(t) − m(t−T)) ≈ T·m'(t) → FM-demodulátor | ✅ |

### G.4.1 Négyszögjeles (kapcsolóüzemű) szorzó demodulátor (saját megoldás)
A négyszög harmonikusai (F, 3F, 5F …) a bemenetet **3F, 5F … környékéről is lekeverik az alapsávba**.
Ezért a demodulátor **elé** sáváteresztő kell, amely a 3F, 5F … környéki jeleket (más adókat, zajt) eltávolítja. A kimeneti aluláteresztővel szembeni követelmény lényegében nem változik, az erősítés 2/π-szeresre módosul.

### G.4.2 m = 1, az alsó oldalsáv kiszűrve, burkolódetektor (saját megoldás)
s = U·cos ωt + (U/2)·cos(ω+ω_m)t → a burkoló **U·√(1,25 + cos ω_m t)**, értéke 0,5U és 1,5U között változik.
Ez nem szinuszos: numerikusan **k₂ ≈ 12%, k₃ ≈ 3%** torzítás. Az SSB plusz vivő jel burkolódetektorral csak kis m mellett demodulálható tűrhetően.

### G.4.3 Harmadfokú (köbös) erősítő (saját megoldás)
A vivő körüli komponens ∝ ¾·A³(t), vagyis a burkoló (1 + m·cos)³ lesz → **igen, keletkezik második harmonikus**.

| m | k₂ | k₃ |
|---|---|---|
| 0,2 | 9,9% | 0,3% |
| 0,5 | 23,5% | 2,0% |
| 1,0 | 40% | 6,7% |

Képlettel: k₂ = (m/2)/(1 + m²/4).

### G.4.4 FM és PM azonos szinusz moduláló jellel (20 mV, Φ_D = 4,71 rad, f_D = 31,4 kHz → f_m = 6,67 kHz) (saját megoldás)
| Változás | Amplitúdó, teljesítmény | PM: Φ_D / f_D | FM: Φ_D / f_D |
|---|---|---|---|
| a) a moduláló jel effektív értéke ½-re csökken | nem változik | ½ / ½ | ½ / ½ |
| b) f_m 1,5-szeresre nő | nem változik | **1×** / 1,5× | ⅔× / **1×** |
| c) a moduláló jel teljesítménye ½-re csökken | nem változik | 1/√2 / 1/√2 | 1/√2 / 1/√2 |

### G.4.5 Háromszög moduláló jelű FM (1 kHz, 100 kHz-es vivő, 2 W 50 Ω-on, f_D = 5 kHz) (saját megoldás)
- a) A fázis a háromszög integrálja → **Φ_D = 2π·f_D·T/8 = 5π/4 ≈ 3,93 rad** (numerikusan ellenőrizve). Szinusznál 5 rad lenne.
  Az amplitúdó: U = √(2·P·R) = 14,1 V.
- b) Ha az effektív érték felére csökken: f_D és Φ_D is felére csökken, az amplitúdó és a teljesítmény nem változik.
- c) Ha f_m 1,5-szeresre nő: f_D nem változik, Φ_D ⅔-szorosára csökken, az amplitúdó és a teljesítmény nem változik.

---

## gyak05 – Digitális alapsávi átvitel

**Összefoglaló (O.5):**
- s_PAM = Σd_k·h(t−kT).
- ISI-mentesség: h(t₀) = h₀ és h(t₀+kT) = 0. Frekvenciatartományban: **ΣH(f − k/T) = állandó** (Nyquist).
- Illesztett vevőszűrő fehér zajban: H_V = k·H_A*. Ekkor **h₀²/σ² = 2E/N₀**, vagyis az elemi jel energiája számít.

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| P.5.2 háromszögspektrum (B) | h(t) = (sin πBt/πBt)², a nullhelyek 1/B többszöröseinél → az ISI-mentes jelzési idő **T = k/B** | ✅ |
| P.5.3 illesztett szűrőpár | H_V = H_A = √(1 − |f·T|), ha |f| < 1/T | ✅ |
| P.5.4 h₀ = 1,2 V, σ = 0,3 V | P_e = Φ(4) ≈ **3,2·10⁻⁵**. L szintre P_e = 2(L−1)/L·Φ(h₀/σ): 4 szinten +50%, 8 szinten +75%. A teljesítmény (L²−1)/3-szoros: 5× (**7 dB**), illetve 21× (**13 dB**) | ✅ |
| P.5.5 időzítési hiba (m₀ = 0,99, m±1 = 0,1) | a fél ponttávolság 0,99 − d_max·0,2 → 2 szinten 0,79, 4 szinten 0,39, **8 szinten negatív** (zaj nélkül is hibázik) | ✅ |
| P.5.6 m₀ = 1, m₁ = 0,1, m₋₁ = 0,15 | kétszintű esetben ±1,25, ±1,05, ±0,95, ±0,75. Négyszintűben a 3-as szint 2,25…3,75 közé, az 1-es 0,25…1,75 közé esik | ✅ |

### G.5.1 h(t) = 1,05 a (0,T) szakaszon, 0,15 a (T,2T) szakaszon, mintavétel T/4-nél (saját megoldás) `[ÁBRA SZÜKSÉGES a rajzokhoz]`
- b) **Van ISI** (az előző szimbólum 0,15-tel látszik), de kétszintű jelnél nem okoz hibát.
- c) A minták: ±1,05 ± 0,15 = **±1,2 és ±0,9**.
- e) **Négy szint (±1, ±3):** a küszöbök 0 és ±2,1. A legrosszabb esetek 1,05 − 0,45 = 0,6 > 0, 1,05 + 0,45 = 1,5 < 2,1, 3,15 − 0,45 = 2,7 > 2,1 → **alkalmas** (a margó 1,05-ről 0,6-ra csökken).
- f) **Nyolc szint:** 1,05 ± 7·0,15 = 0 … 2,1, vagyis a minta pont a küszöbre esik → **nem alkalmas**, mert nem marad zajmargó.

### G.5.2 H(f) = h₀T·cos²(πfT/2), ha |f| < 1/T (saját megoldás)
- b) cos²(x) + cos²(x − π/2) = 1, tehát a halmozott spektrum állandó → **ISI-mentes**. Ez az α = 1-es emelt koszinusz.
- c) A vevőszűrő az illesztés miatt √H, azaz **cos(πfT/2)**, ha |f| < 1/T.
- d) T = 833 µs → 1/T = 1200 Hz, ennyi a jel sávszélessége is. A 1200 Hz-es aluláteresztő ezért **nem okoz számottevő ISI-t**.

### G.5.3 h(t) = h₀cos²(π(t−T)/(2T)) a (0, 2T) szakaszon (saját megoldás)
- b) Ha t₀ = T, a szomszédos minták 0-ra és 2T-re esnek, ahol h = 0 → **ISI-mentes**.
- c) 0,1T-s hibánál a saját minta 0,9755·h₀, a következő szimbólumé 0,0245·h₀ → kétszintű esetben **±1,0 és ±0,951**.
- d) Ideális időzítéssel 4 és 8 szint is működhet (csak a zaj korlátoz).
- e) 0,1T-s hibánál a margó 4 szinten 0,976 − 3·0,0245 = 0,90 (−0,8 dB), 8 szinten 0,976 − 7·0,0245 = 0,80 (−1,9 dB). Mindkettő még működik.

---

## gyak06 – Digitális modulációs eljárások

**Összefoglaló (O.6):**
- FSK: F = (f₁+f₀)/2, f_D = |f₁−f₀|/2. **MSK: f_D = 1/(4T)**, ennél nagyobb löket nem ad előnyt a jó demodulátornak.
- **OOK** (0 vagy 2 amplitúdó) és **BPSK** (±1) azonos zajtűrésű, de az OOK átlagteljesítménye **kétszeres** (+3 dB).
- QAM: fázishelyes vivő kell. A fázishiba elforgatja a konstellációt, a saját döntésekből becsülhető és korrigálható.
- 32 pontos (nem négyzetszám) konstelláció: az origóhoz legközelebbi rácspontokat érdemes használni.

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| P.6.1 differenciális FSK-demodulátor | a kimenet sin(2πf_D·T·d_k), ez **f_D·T = 1/4 (MSK)** esetén a legjobb | ✅ |
| P.6.2 OOK vs. BPSK | a BPSK fele akkora teljesítménnyel ugyanannyit tud | ✅ |
| P.6.3 **16-QAM tűrése** | erősítés: **2/3 (−33%)** és **2× (+100%)**; fázis: a sarokpont 45° − arcsin(2/√18) ≈ **16,9°** (a legkisebb) | ✅ (ugyanaz, mint a `03` hibajegyzékben a QAM-fázistűrés módszere) |
| P.6.4 sarokpontok áthelyezése | 16-QAM: (3,3) = 18 → (5,1) = 26 → **rosszabb**. 64-QAM: (7,7) = 98 → (9,1) = 82 → **jobb** | ✅ |
| P.6.5 Doppler, 900 MHz | gyalogos (1,5 m/s): **4,5 Hz**, autó (30 m/s): **90 Hz**; T = 10 µs esetén 0,324°/szimbólum | ✅ |

### G.6.1 Számláló típusú FSK-demodulátor (saját megoldás)
A folytonos fázisú FSK nullátmenetei 1/(2f₀) vagy 1/(2f₁) távolságra követik egymást, a váltás helye ebből kiolvasható.
Ha minden nullátmenetnél egy keskeny impulzust adunk, és ezeket T szélességű ablakban integráljuk, a kimenet ∝ 2f_pillanatnyi·U·Δ. Az impulzusokat lényegében **megszámoljuk**, ezért „számláló típusú” demodulátor.

### G.6.2 BPSK nullátmenetei (saját megoldás)
Ha f_v = 1,5/T, a 180°-os ugrás egy fél periódus végére esik, ezért a nullátmenetek egyenletesen 1/(2f_v) távolságra vannak. Ez akkor igaz, ha f_v a jelzési frekvencia félegész többszöröse.
Trapézos átmenetnél a burkoló az ugrás közepén átmegy a nullán, de a nullátmenetek helye nem változik.
Hasznos alkalmazás: négyzetre emeléssel (2f_v) **vivővisszaállítás**. QPSK-nál ehhez negyedik hatvány kell (4f_v).

### G.6.3 QPSK, 00 → (+1,+1), 01 → (−1,+1), 10 → (−1,−1), 11 → (+1,−1) (saját megoldás)
- b) Megfigyelt pontok: (1,5;−1), (−1;−1,5), (−1;−1,5), (1,5;−1) → a negyedekből a bitek: **11 10 10 11**.
- c) Mindkét pontból ugyanaz jön ki: **+11,3°-os fáziselfordulás** és **1,275-szörös (+2,1 dB) erősítés**. A QPSK ±45°-ot és bármilyen pozitív erősítést elvisel.

### G.6.4 4PSK → 8PSK azonos hibaarányhoz (saját megoldás)
A d_min aránya sin45°/sin22,5° → **+5,3 dB** adóteljesítmény kell.

### G.6.5 Kétutas terjedés OOK-val (T és 2T késleltetés, −12 dB = 0,25 amplitúdó) (saját megoldás)
A vett minták a_k + 0,25·a_(k−1) alakúak, a 2,2,0,2,0,0,2 sorozatra: 2 · 2,5 · 0,5 · 2 · 0,5 · 0 · 2.
- a) **Van ISI**, de 1-es küszöbbel zaj nélkül még nincs hiba. A margó 1-ről 0,5-re (−6 dB) csökken.
- b) Lassú mozgásnál a két út fázisviszonya lassan változik, a „2”-es szint 1,5 és 2,5 között fadingel.
- c) Gyors mozgásnál ez a változás időrésen belül történik (Doppler), ezért a burkoló időrésen belül ingadozik, és a döntés hibázhat.

### G.6.6 32-QAM kereszt alakú konstellációja (saját megoldás)
A 6×6-os rácsból elhagyjuk a 4 sarkot. Azonos ponttávolság mellett:
- **kereszt:** P_átl = 20, P_csúcs = 34,
- **4×8-as téglalap:** P_átl = 26, P_csúcs = 58.

A kereszt tehát átlagban **1,14 dB-lel**, csúcsban **2,3 dB-lel** takarékosabb.

---

## gyak07 – Hang – hallás, kép – látás

**Összefoglaló (O.7):**
- L_p = 20lg(p/20 µPa) ≈ L_I = 10lg(I/1 pW/m²). A fül 4 kHz körül a legérzékenyebb, a hallás 20 Hz – 20 kHz között működik.
  A hallásküszöb és a fájdalomküszöb között 1 kHz-en **kb. 130 dB** van. A tárgy itt 130 dB-t ír, máshol 120 dB-es fájdalomküszöb szerepel, ezt mindig írd le.
- Phon: annyi phon, ahány dB az azonos hangosságú 1 kHz-es hang.
- Beszéd: 300 Hz – 5 kHz, kb. 30 dB dinamika, ≥ 30 dB SNR. Zene: 40 Hz – 10 kHz, 60 dB.
- Telefon: 8 kHz × 8 bit (13 bites lebegőpontos) → 64 kbit/s. CD: 44,1 kHz × 16 bit → 96 dB, kb. 1,4–1,5 Mbit/s sztereóban.
- Szem: 2 szögperc a fényesség, kb. 10 szögperc a szín felbontása. 25 kép/s. SDTV 4:2:2: 13,5 + 2·6,75 MHz × 10 bit = **270 Mbit/s**.

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| P.7.1 10 kHz 10 dB (éppen hallható), 1 kHz 30 dB, 100 Hz 0 dB | **0 phon, 30 phon, a küszöb alatt** (nem hallható); a különbség oka a hangszóró, a mikrofon, a terjedés és a reflexiók frekvenciafüggése | ✅ |
| P.7.2 hangerőszabályozás | a Fletcher-görbék nem párhuzamosak, ezért halkításkor a mélyek és a magasak eltűnnek (fiziológiai hangerő-szabályozás) | ✅ |
| P.7.4 FCC-alapszínek CIE-koordinátái | R: (0,67; 0,33), G: (0,20; 0,71), B: (0,14; 0,08); a domináns hullámhossz kb. 610/535/470 nm; az egyenlő súlyú keverék x ≈ y ≈ 0,31 → majdnem E fehér | ✅ (számolva: W = (0,309; 0,315)) |
| P.7.5 zöld + kék azonos világossággal | B = 9,09α, G = 1,69(1−α); a legkisebb teljesítmény α = 0 (tiszta zöld); minimális színtartalom ≈ 510 nm-nél, ≈ 25% | ✅ |

### G.7.1 Hangerőszabályzó Fletcher-görbék alapján `[ÁBRA SZÜKSÉGES]`
Módszer: a 80, 60, 40, 20 és 0 phon görbéből olvasd ki 100 Hz és 6 kHz között a szükséges csillapítást, és foglald táblázatba (lépcsőnként és frekvenciánként, ±5 phon tűréssel).
A görbék a mély hangoknál összefutnak, ezért **mély hangoknál kisebb** csillapítás kell. Ez legalább egy töréspontot jelent (≈ 1 kHz alatt). Ellenállásokkal és egy kondenzátorral (RC-tag) egy töréspont megvalósítható.

### G.7.2 Cb ↔ Cr csere
A fehér fehér marad (Cb = Cr = 0). Nem változnak azok a színek, amelyekre R = B (szürkék, zöldek, bíborok). Lásd az `01`-et.

### G.7.3 Emese zöld lámpái (saját megoldás)
- a) Y = 0,3R + 0,59G + 0,11B. A szem a zöldre a legérzékenyebb, egységnyi teljesítményből a zöld adja a legtöbb világosságérzetet.
- b) A fehér (R = G = B = 1) teljesítménye 3 egység, Y = 1. Csak zölddel G = 1/0,59 = 1,69 → **≈ 43,5% megtakarítás**.
- c) Bizonytalanságok: a fényforrások hatásfoka nem egyforma, a TV-alapszínek nem a lámpák spektrumai, a színvisszaadás tönkremegy, gyenge fénynél (szürkületi látás) más a spektrális érzékenység, és a megszokás is számít.

### G.7.4 R−Y = 0,35, B−Y = −0,15, Y = 0,45 (saját megoldás)
- a) R = 0,80, B = 0,30, G = (0,45 − 0,3·0,8 − 0,11·0,3)/0,59 = **0,30** → **(0,8; 0,3; 0,3)**.
- b) Telítetlen vörös (rózsás-lazacszín).
- c) **0,3 súlyú E fehér + 0,5 súlyú R alapszín.**
- d) Színtartalom a CIE-diagramon: P = (0,426; 0,320), W = (0,309; 0,315), R = (0,67; 0,33) → WP/WR ≈ **0,32**.
  A vörös alapszín saját színtartalma ≈ 1, tehát ≈ **32%**. RGB-súlyokkal számolva 0,5/0,8 = 62,5% jönne ki, de a tárgy a CIE-szerinti értelmezést használja. `[ELLENŐRIZENDŐ]`

---

## gyak08 – Műsorszóró rendszerek

**Összefoglaló (O.8):**
- Szupervevő: f_KF = f₀ − f_v (felső keverés), a tükör f_v + 2f_KF. A tükörszelektivitás a bemenő szűrő dolga.
- Helyfoglalás: középhullám (AM-DSB) 9 kHz, URH FM sztereó 300 kHz, analóg TV (AM-VSB) 8 MHz. Analóg műholdas FM: 27 MHz, f_D ≈ 6 MHz.
- **DVB-S:** QPSK, 27,5 MBd → 55 Mbit/s, α = 0,35 → 2·1,35·27,5/2 ≈ **37 MHz**.
- **DVB-C:** 64-QAM, α = 0,15 → 6,96 MBd → 41,76 Mbit/s.
- **DVB-T (a tárgy adatai):** 6817 vivő, T₀ = 896 µs, **T = 924 µs (védőidő 28 µs = 1/32 → kb. 9 km-es echók)**, a raszter 1116 Hz, 7,61 MHz.
  Bruttó 6817·6/924 µs ≈ **44 Mbit/s**, hasznos ≈ **31,67 Mbit/s** (6048 adatvivő, FEC 7/8, RS 188/204, szkripttel ellenőrizve).
  Az `5-ösöm` példája más paraméterkészletet használ (GI = 1/4, FEC 3/4 → 22,4 Mbit/s), mindkettő konzisztens.
- DAB: 1536 vivő, QPSK, 1 kHz-es raszter, 246 µs-os védőidő (≈ 74 km).

| Példa | Eredmény | Ellenőrzés |
|---|---|---|
| P.8.1 CCIR 87,5–108 MHz, f_KF = 10,7 MHz | felső keverésnél az oszcillátor 98,2–118,7 MHz; MR2 (94,8 MHz) → **105,5 MHz**, tükör **116,2 MHz**. A 10,7 MHz azért jó, mert > a sávszélesség fele, így a tükrök (≥ 108,9 MHz) a sávon kívül esnek | ✅ |
| P.8.2 Kossuth 540 kHz, f_KF = 455 kHz | felső keverés: f₀ = **995 kHz**, tükör **1450 kHz**. Alsó keverés: f₀ = 85 kHz, tükör **370 kHz** (= |f_v − 2f_KF|) | ✅ (ez megerősíti a `03` hibajegyzék A7/B3 javítását) |
| P.8.3 sztereó demodulátor | szorzó demodulátor 38 kHz-cel, amelyet a 19 kHz-es pilotból állítanak elő (a 19 kHz könnyen leválasztható a 15 és 23 kHz közötti résben). A szorzó erősítéshibája áthallást okoz. Mintavételezős változat: f_s = 38 kHz, a mintavétel fázisa szerint L vagy R | ✅ |
| P.8.4 „A” hang (440 Hz) a bal mikrofonban | a multiplex jelben **440 Hz, 19 kHz, 37,56 kHz és 38,44 kHz**; mono vevő: a 440 Hz-es hang | ✅ |
| P.8.5 CCIR-sáv, hány adó | Carson: 2(75 + 53) = 256 kHz ≈ 300 kHz → (108 − 87,5)/0,3 ≈ **68 adó** | ✅ |
| P.8.6 sakktábla | sorfrekvencia 15 625 Hz, 64 µs/sor (52 µs aktív); fekete 0,3, fehér 1,0. 50%-os szürke gammával 0,3 + 0,7·0,5^(1/2,2) ≈ **0,81** | ✅ |
| P.8.7 teletext, 10 sor/félkép, 500 oldal | 50·10/24 ≈ 20,8 oldal/s → legrosszabb esetben **24 s**, átlagosan **12 s** | ✅ |
| P.8.8 pilotok OFDM-ben | alapsávban 1 pilot elég, vivős esetben legalább 2 (a frekvenciaeltolás és a raszter miatt). DVB-T-ben 177 folyamatos és 524 szórt pilot, valamint 68 TPS van | ✅ |
| P.8.9 DAB, 125 µs-os és −12 dB-es második út | H = 1 + 0,25·e^(−j2πfτ), a periódus **8 kHz**, |H| 0,75 és 1,25 között. 1 kHz-es vivőraszternél ez vivőnként korrigálható | ✅ |

### G.8.1 Sztereó multiplex jel (saját megoldás)
- a) Blokkvázlat: L+R és L−R mátrix → 15 kHz-es aluláteresztők → az (L−R) jel DSB/SC 38 kHz-en (amit a 19 kHz-es pilot duplázásával állítanak elő) → összegzés a 19 kHz-es pilottal (és az 57 kHz-es RDS-sel) → FM-modulátor.
- b) Bal mikrofon, 10 kHz: **10 kHz (M), 19 kHz (pilot), 28 és 48 kHz (S oldalsávok)**.
- c) Jobb mikrofon, 25 kHz: a 15 kHz-es bemenő aluláteresztő **kiszűri**, csak a 19 kHz-es pilot marad.
  Szűrő nélkül a 25 kHz-es komponens az S-sávba (23–53 kHz) esne, és 13, illetve 63 kHz-es komponensek is keletkeznének, vagyis zavarna.

### G.8.2 Szőke kapitány: minden adó a saját tükörsávjában is sugároz (saját megoldás)
Nem működik általánosan. A tükör helye a **vevő** f_KF-étől és keverési módjától függ, nem az adóétól.
A duplikált adás a sávot is elfoglalja, ami más adók helye, így ott interferenciát okoz. A spektrum-kihasználás a felére romlik.

### G.8.3 OFDM-zavaró adó (saját megoldás)
Nem érdemes egyenletesen szétteríteni a teljesítményt. Célzottan a **pilotvivőket** és a TPS-vivőket kell zavarni, mert ezek nélkül a vevő nem tud szinkronizálni és csatornát becsülni.
Alternatíva: rövid, szélessávú impulzusok, amelyek egész OFDM-szimbólumokat rontanak el.
