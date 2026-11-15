# Koma jegyzetei: gyakorlatok (2021 tavasz, Varga Pál)

Kézzel írt jegyzetek átirata (iPad, Teams órák, 2021 tavaszi félév). Az eredeti PDF-ek: Gyakorlat01_0209 … Gyakorlat12_0511. A 9. és 11. gyakorlat hiányzik.
Jelölés: E(·) és M(·) egyaránt várható értéket jelöl a jegyzetben.

---

## Gyakorlat 1 (2021.02.09.) Jelek leírása → 1. témakör

**Definíciók**
- Egyenszint: Aₓ = lim 1/(t₂−t₁) ∫ x(t) dt (t₁→−∞, t₂→∞). Fourier sorban X₀, Fourier transzformáltban X(j0).
- Átlagteljesítmény: Pₓ = lim 1/(t₂−t₁) ∫ x²(t) dt
- Effektív érték: √Pₓ
- Csúcstényező: c = A/√Pₓ = x_max / x_eff. A jel „csúcsosságát” mutatja.

**1. feladat: szinusz és szimmetrikus négyszögjel (A, f₀)**

| | egyenszint | effektív érték | átlagteljesítmény | csúcstényező |
|---|---|---|---|---|
| szinusz | 0 | A/√2 | A²/2 | √2 |
| négyszög | 0 | A | A² | 1 |

(A jegyzet táblázatában a két sor fel van cserélve, a fenti a helyes: szinuszra c = √2, négyszögre c = 1.)

Több szinuszos jel összege esetén a csúcstényező csak akkor nagy, ha a komponensek fázisban vannak.

**2. feladat: két szinusz, A, f₁ és A, f₂**
x(t) = A cos(2πf₁t + φ₁) + A cos(2πf₂t + φ₂)
- Aₓ = 0, Pₓ = A²/2 + A²/2 = A², x_eff = A, x_max = 2A
- c = 2 általában (létezik olyan f₁, f₂, φ₁, φ₂, hogy nem 2). Ha f₁/f₂ aránya irracionális, akkor mindig 2.

**3. feladat: harmonikusok fázisa**
- x₁(t) = A cos(2πf₀t) + A cos(2π2f₀t) + A cos(2π3f₀t)
- x₂(t) = A cos(2πf₀t) + A sin(2π2f₀t) + A cos(2π3f₀t)
- Pₓ₁ = Pₓ₂ = 3/2·A², de x₁max = 3A.
- cos α + cos β = 2 cos((α+β)/2) cos((α−β)/2) alapján x₂(t) = A sin(2π2f₀t) + 2A cos(2πf₀t·2)cos(2πf₀t), így |x₂(t)| ≤ √(A² + 4A²cos²(2πf₀t)) ≤ √5·A, megfelelő fázisban elérheti.
- c₁ = 3A/√(3/2 A²) = √6, c₂ ≤ √5A/√(3/2 A²) = √(10/3) ≈ √3,33. A fáziseltolással kicsúcsosodott.
- A nagy csúcstényező rossz: az elektronikus rendszert vagy durván túlméretezzük, vagy a csúcsoknál nemlineáris torzítás lép fel.
- MTTS (multi tone test signal): 3800 szinuszos összetevő 100 Hz lépésközzel, a csúcstényezője 3 alatti.

**4. feladat: ideális és elsőfokú aluláteresztő szűrő**

| Ideális | Elsőfokú |
|---|---|
| nem létezik a valóságban, nem kauzális | megvalósítható, kauzális |
| H(f) = 1·e^(−j2πfT), ha \|f\| < B, különben 0 | H(f) = 1/(1 + jf/B), B a −3 dB-es határ (transzfer frekvencia) |
| h(t) = 2B · sin(2πB(t−T)) / (2πB(t−T)) | h(t) belépő, exponenciálisan lecsengő: h(t) = ε(t)·a·e^(−bt) |
| A jel csonkolásával kauzálissá tehető, de az már nem ideális | H(f) = (a/b)/(1 + j2πf/b), a = b = 2πB, RC tag: B = 1/(2πRC), magas frekvenciákat C rövidre zárja |

---

## Gyakorlat 2 (2021.02.16.) Mintavételezés, kvantálás → 2. témakör

**Képletek**
- Felmintázott spektrum: Xₘ(f) = Σₖ X(f + kfₛ)
- Kvantálási zajteljesítmény: A(ε²) = (1/fₛ)·M(εₖ²)·∫|H(f)|² df
- Egyenletes kvantálás: E(εₖ²) = Δ²/12
- SNR = (3fₛ / 2BC²)·2²ⁿ. Szinuszra C² = 2, így SNR = (3/2)·(fₛ/2B)·2²ⁿ

**1. feladat: szivárgás és aliasing**
8 kHz PCM, bemeneti és kimeneti szűrő 4 kHz-től −40 dB. Lánc: bemenő szűrő → ADC (8 kHz) → átvitel → DAC → kimenő szűrő.
- fₛ = 8 kHz, a = 40 dB ha f > 4 kHz, 0,3…3,4 kHz tökéletes átvitel (H = 1).
- f_be = 1,8 kHz, U_be = 2 V. A spektrum ismétlődik kfₛ ± 1,8 kHz helyeken. A 6,2 kHz-es komponenst a kimenő szűrő 40 dB-lel csillapítja: U_ki = 20 mV.
- A kimenő jelben 9,8 kHz, 14,2 kHz, 17,8 kHz, … összetevők is vannak (kfₛ ± 1,8 kHz, k ∈ ℤ): **szivárgás**.
- A bemenő jel egyenirányítása (diódahíd) hatására: 3,6 kHz alapú, nem sávkorlátos spektrum, β·f₂ komponensek (β ∈ ℤ). A kimenetnek köze sincs a bemenethez: **aliasing**.

**2. feladat: 8 kHz fₛ, trapéz szűrő**
H(f) = 1 ha |f| ≤ 3 kHz, 2,5 − |f/2| ha 3 < |f| ≤ 5 kHz, 0,01 ha 5 < |f| ≤ 10 kHz, 0 különben.
U = 2 V, f = 1 kHz szinuszos komponens.
- a) Szivárgók: f_ki = k·8 kHz ± 1 kHz (k ≠ 0), U_ki = 0,02 V.
- b) 2 V amplitúdó, 4,5 kHz bemenet: alias jel 3,5 kHz-en, U_ki = (2,5 − 4,5/2)(2,5 − 3,5/2)·2 V = 0,375 V. Az eredeti 4,5 kHz-es jel: U_ki = 0,125 V. Szivárgók f_ki = k·8 kHz ± 4,5 kHz. A kimenő szűrő a bemenő jelet jobban elnyomta, mint az alias jelet.

**3. feladat: fₛ megválasztása (sáváteresztő jel)**
50 Ω-on mért feszültség 0…3 kHz és 7…8 kHz kivételével zérus, a tartományokban konstans |X(f)|.
- fₛ ≥ 2B miatt fₛ ≥ 16 kHz.
- P_jel = 0,2 mW (U²/R), S₀ = P_jel / 2B_össz = 25 μW/kHz, s₀ = 50 Ω · 25 μW/kHz = 1250 mV²/kHz.
- Lejjebb is mehetünk: a 7…8 kHz rész becsúszhat 3 és 7 közé. 15 kHz-nél átlapolódás, 14…11 kHz működik.

**4. feladat: kvantálási zaj spektrális viselkedése**
sₓ(f) = 6s₀(1 − |f|/12B), ha 7B < |f| < 10B, különben 0.
- Bármilyen szűrő, pl. fₛ = 6B: fₛ ± 10B, fₛ ± 7B → −4, 16 és −1, 13. 2fₛ ± 10B, 2fₛ ± 7B → 2, 22 és 5, 19. Rendben.
- 3fₛ ± 10B → 8, 28 és 3fₛ ± 7B → 11, 25: ÁTLAPOL. A harmadikat 2B-vel arrébb kell tolni: fₛ = 20/3·B (6⅔B). Ellenőrzés: 2fₛ − 10 = 3⅓, 2fₛ − 7 = 6⅓, 3fₛ − 10 = 10, 3fₛ − 7 = 13.
- Zajteljesítmény: S_ε(f) = (1/fₛ)·E(ε²)·|H²(f)|
  - a) aluláteresztő (lpf): (1/20)E(ε²)∫₋₁₀¹⁰ 1² df = 20/20, 20B széles zaj
  - b) sávszűrő (bpf): (3/20)E(ε²)·2∫₇¹⁰ 1² df = 18/20, kevesebb zaj megy át (2·3B széles)
  - c) fₛ = 20, de bpf: (1/20)E(ε²)·2∫₇¹⁰ 1² df = 6/20, jelentősen kevesebb a kvantálási zaj
- HF: PPT 5.

---

## Gyakorlat 3 (2021.02.23.) Kódolás → 6. témakör

**1. feladat: szimbólumonként kódolt bináris kód, legtömörebb, hosszak 2,3,3,3,3,4,4,4,5,5 (n = 10)**
- a) Egyértelműen megfejthető? Kraft-McMillan egyenlőtlenség: Σ 2^(−lᵢ) ≤ 1. 1/4 + 4·1/8 + 3·1/16 + 2·1/32 = 1. Igen, lehet ilyen hosszakkal egyértelműen megfejthető prefix kódot csinálni.
- b) H(p) = L (átlagos kódszóhossz, λ) mikor? Σ pᵢ ld(1/pᵢ) = Σ pᵢlᵢ akkor igaz, ha minden i-re ld(1/pᵢ) = lᵢ, vagyis pᵢ = 2^(−lᵢ).
  L = 2·1/4 + 3·4·1/8 + 4·3·1/16 + 5·2·1/32 = 1/2 + 12/8 + 12/16 + 10/32 = 49/16 = 3 1/16 bit/szimbólum.
  10 kódszóhoz egyenlő hosszú kódnál 4 bit kellene, változó kódhosszal jobban járunk.

**2. feladat: Huffman kód, p = 0,4 0,25 0,12 0,1 0,08 0,05**
Egyértelműen megfejthető, a fix hossznál tömörebb kód.
Huffman algoritmus:
1. Sorbarendezés valószínűségek szerint.
2. A két legalacsonyabból gráf levelek lesznek, föléjük az összegük kerül.
3. Ezen két helyére az összegük kerül, az 1…2. lépést ismételjük, amíg 1-et kapunk.
4. A bináris fában bal ág 0, jobb ág 1.
5. A kódszó a valószínűséghez vezető úton összeolvasott sorozat.

Összevonás (százalékban): 5 8 10 12 25 40 → 10 12 13 25 40 → 13 22 25 40 → 25 35 40 → 40 60 → 100.
Kódszavak: 0,4 → 0, 0,25 → 10, 0,12 → 1111, 0,10 → 1110, 0,08 → 1101, 0,05 → 1100.
L = Σ pᵢlᵢ = 0,4·1 + 0,25·2 + 0,35·4 = 2,3. (A jegyzetben 0,55·4 áll, de a négybites kódszavak összvalószínűsége 0,12+0,1+0,08+0,05 = 0,35, így L = 2,3 stimmel.)
Belátható, hogy Huffman kódolással tényleg a lehető legtömörebb kódot kapjuk.
Észrevételek: az 1-esek és 0-k kiosztása lényegtelen, a prefixséget és a hosszakat a fa adja. Az sem baj, ha vannak egyenlő valószínűségek.

**3. feladat: „Pisti kód”, p = 0,5 0,25 0,15 0,1, kódszavak 01, 10, 011, 1011**
- a) Nem dekódolható egyértelműen, mert nem prefix (pl. 011 011 → A D vagy C C).
- b) Lehet ezekkel a hosszakkal jót csinálni? Kraft: 1/4 + 1/4 + 1/8 + 1/16 ≤ 1, tehát lehet, pl. 00, 11, 011, 1011 vagy 00, 01, 10(0), 11(00).
- L = 2·0,5 + 2·0,25 + 3·0,15 + 4·0,1 = 2,35. Fix kóddal 00 11 01 10 → L = 2, a fix jobb!
- H(p) = 0,5·1 + 0,25·2 + 0,15·ld(1/0,15) + 0,1·ld10 = 1,74
- Huffman kód: 10 15 25 50 → kódszavak 000, 001, 01, 1. L = 0,5·1 + 0,25·2 + 0,25·3 = 1,75.

**4. feladat: bináris, lineáris, szisztematikus Golay kód (23, 12)**
n = 23 a végső kódszóhossz (dúsítás után), k = 12 a dúsítás előtti üzenethossz.
- a) d_min = 7 → 6 hibát jelez.
- b) javítani ⌊(7−1)/2⌋ = 3 hibát lehet.
- c) Kódszavak száma 2¹², ennyi lehetséges vett szó lehet (a többi invalid).
- d) G k×n mátrix, Hᵀ n×(n−k) mátrix, így 2¹¹ szindróma lehet (2^(n−k)).
  0 hibát 1 szindróma jelez, 1 hibát 23, 2 hibát C(23,2) = 253, 3 hibát C(23,3) = 1771. Összesen 2048: a teljes szindrómateret javításra használjuk, a Golay kód **perfekt kód**.
- e) 4 hibát jelez, de javítani nem tud.
- f) s = 001 000001 00, melyik bit romlott el? Pl. e = 12 nulla, majd 11 bites részben két egyes: a 15. és 21. bit romlott el. Más nem lehet, mert 2 hibát a Golay mindenképp tud javítani. (Hᵀ = [B ; I], a szindróma két Hᵀ sor összege.)

**5. feladat: (8,4) kód**
G sorai: 1000 0011, 0100 0110, 0011 0101, 0001 1001.
- a) Nem szisztematikus, nincs benne I.
- b) Szisztematikussá tesszük: 3. sor := 3. sor + 4. sor.
  G_sz sorai: 1000 0011, 0100 0110, 0010 1100, 0001 1001.
- c) Paritásellenőrző mátrix Hᵀ = [B ; I_(n−k)], sorai: 0011, 0110, 1100, 1001, 1000, 0100, 0010, 0001.
- d) u = 0110 → c = 0110 1010. Vett v = 1110 1010, vHᵀ = s = 0011 → e = 1000 0000 → c = v + e = 0110 1010 → u = 0110.

---

## Gyakorlat 4 (2021.03.02.) Rádiós összeköttetés → 8. témakör

**1. feladat: szabadtéri egyutas terjedés**
G_R = 20 dB, R_R = 50 Ω, r = 10 km, c = 3·10⁸ m/s, f = 450 MHz → λ = 2/3 m, G_T = 20 dB, P_T = 1 W.
- a_sz = P_adó / P_vett = (4πr/λ)² · 1/(G_T·G_R)
- a_sz[dB] = 20 lg(4πr/λ) − G_T^dB − G_R^dB = 65,506 dB
- Kézi számolás (π² ≈ 10, lg táblázat: lg2 = 0,3, lg3 = 0,477, lg4 = 0,6, lg5 = 0,7, lg6 = 0,777, lg7 = 0,848, lg8 = 0,9, lg9 = 0,95): 10 lg(4²·3²·10⁸·10 / 2²) = 10 lg(4·9·10⁹) ≈ 105,5 dB → a_sz = 65,5 dB.
- P_vett = P_adó · 10^(−65,5/10) = 0,281 μW (!)
- Akkor problémás, ha a zajjal egy nagyságrendű (SNR ≈ 10), nem tudjuk kiválogatni a zajból. Antenna érzékenysége: mekkora jelet lehet még kiválogatni a zajból? Emberi beszéd SNR ≈ 30 dB, zenéhez nagyobb kell.
- U_R = √(P_vett · R_R) ≈ 3,75 mV, reális.

**2. feladat: kétutas terjedés**
G_T = 10 dB, r = 10 km, G_R = 10 dB, h_T = 20 m, h_R = 10 m. Direkt út R₁ és földről visszavert út R₂.
- |E_r| = 2|E₀|·|sin(π·2h_T h_R/(rλ))|, maximális (= 2|E₀|), ha π·2h_T h_R/(rλ) = kπ + π/2.
- d_int (k = 0): λ = 4h_T h_R / r = 8 cm. Itt pont a d_int helyen vagyunk. (Az előadáson sokkal nagyobb r-re vezettük le.)
- a_sz^dB = a_sz^dB(egyutas) − 6 dB = 10 lg((4πr/λ)²) − G_T^dB − G_R^dB − 6 dB ≈ 98 dB (R₁ ≈ r).

**3. feladat: kétutas terjedés, vevőantenna mozgatásával**
f = 450 MHz (λ = 2/3 m), r = 3 km, a vett teljesítmény h_R függvényében R = 5 m periódussal ingadozik, P_min = 10 nW, P_max = 90 nW, G_R = 3 dB.
- 2π h_T h_R/(rλ) = π (egy periódus h_R = 5 m-en) → h_T = 200 m.
- E_R = E₀ + Γ E₀ e^(−j2πΔ/λ)
- P_max/P_min = (1+|Γ|)²/(1−|Γ|)² = 9 → (1+|Γ|)/(1−|Γ|) = ±3 → Γ = 2 (nem lehet, |Γ| ≤ 1) vagy |Γ| = 0,5. Γ (≠ −1) = −0,5.

**4. feladat: parabolaantenna (egyutas), műholdas vétel**
d = 1,1 m, f = 12 GHz, λ = 0,025 m = 2,5 cm.
- a) G_R = ? A_hatásos = (d²/4)π = 0,95 m², G_R = A_h · 4π/λ² = 19107,55 → G_R^dB = 42,812 dB.
- b) Szinkronpálya, mekkora pontosság kell? Nyalábszög α, S = P_T/(πr² tg²α). r nagyon nagy, így tg²α ≈ α², S ≈ P_T/(πr²α²), S₀ = P_T/(4πr²), **G = S/S₀ = 4/α²** (nagy távolságnál). G_R = 42,812 dB → α = 0,9°, kézzel állítható.
- c) G_T = ? Lefedett terület átmérője d_s = 2000 km, szinkronpálya r ≈ 35786 km. tg α ≈ sin α = 1000/35786 → G_T ≈ 5122 = 37,1 dB.

---

## Gyakorlat 5 (2021.03.09.) Analóg moduláció → 3. témakör

(A feladatszámok a hivatalos gyakorlatanyag 4. fejezetét követik, 4.2 … 4.5.)

**4.2 AM**
s_AM(t) = 3cos(1800πt) + 10cos(2000πt) + 3cos(2200πt), vagyis 900 Hz, 1 kHz, 1100 Hz komponensek (spektrum: 10 a vivőn, 3 az oldalsávokon).
- 1 kHz vivőjel, 100 Hz modulálójel, AM-DSB átvitel, s_m(t) = 6cos(200πt).
- s_AM(t) = (10 + 6cos(2π100t))·cos(2π1000t). Addíciós tétellel visszakapjuk: 10cos(1000·2πt) + (6/2)cos(900·2πt) + (6/2)cos(1100·2πt).
- s_AM maximális értéke: a vivő amplitúdója 10, ettől a modulálójel miatt ±6-tal tér el. A modulálójel 1 periódusában a vivőnek 10 periódusa van, mindkettő koszinuszos, nincs fáziseltolás, így s_AM max = 16.
- s_AM min viszont soha nem lehet −16, mert addigra a modulálójel „szűkebb”, picit több lesz (fáziseltolás, több komponens esetén bonyolultabb lehet).
- m = U_m/U_v = 6/10 = 0,6
- Oldalsávok és vivő teljesítményaránya: P_h/P_Σ = m²/(m² + C²) = 0,36/(0,36 + 2) = 0,36/2,36 ≈ 0,1525
- Javasolt demodulátor: a) burkolódetektor (dióda + párhuzamos RC), kétutassal jobb. b) szorzó: s_AM · 2cos(2πf_v t), majd LPF. Az LPF-et ne a töréspontra tervezzük, mert ott már −3 dB a jel, kicsit nagyobb (20 kHz) sávú szűrő jó lesz.

**4.3 AM-DSB**
f_v = 60 kHz, m = 20%, Û = 1,8 V, f_m = 10 kHz.
- s_AM(t) = (U_v + s_m(t))·cos(2πf_v t + φ), s_m(t) = U_m cos(2πf_m t)
- m = U_m/U_v = 0,2 → U_v = 5U_m. Û = U_v + U_m = 1,8 V → 6U_m = 1,8 → U_m = 0,3 V, U_v = 1,5 V.

**4.4 PM és FM**
s_modulált(t) = a(t)·cos(Θ(t)). s_m ~ μ(t) PM esetén, s_m ~ μ'(t) FM esetén.
- s_m(t) = 3 V·cos(3πt + 2), s_FM(t) = 4 V·cos(500πt + 21 + 5sin(3πt + 2)) (t ms-ban): 500πt = 2π·250 kHz·t, 21 rad kezdőfázis, a 5sin(…) tag ∫s_m dt-vel arányos, tehát FM.
- ±5 rad eltérés → m_p = Φ_D = 5 rad.
- s_FM(t) = U_v cos(2πf_v t + (k_FM U_m / f_m)·sin(2πf_m t))
- f_D/f_m = 5 → f_D = 5·1,5 kHz = 7,5 kHz
- Carson: BW_FM ≥ 2(f_D + B_moduláló) = 2(7,5 + 1,5) kHz = 18 kHz
- Pontosabban: BW_FM ≈ 2f_m(1 + √m_p + m_p) ≈ 24,72 kHz

**4.5 Kislöketű FM nemlineáris torzítása**
Kislöketű FM ≈ 90°-kal eltolt vivőjű AM-DSB/SC hozzáadva a vivőhöz:
η_t = cos(2πf_v t) − μ_t sin(2πf_v t). Mivel cos x − a sin x = √(1+a²)·cos(x + arctg a):
- ha μ_t kellően kicsi (sin x ≈ x), akkor tiszta szögmoduláció (fazorábrán a PM oldalsáv merőleges a vivőre)
- ha már nem elég kicsi, az amplitúdó változni kezd, és a szög sem lineáris, hanem arctg.

**Extra feladat: FM rendszer tervezése**
Moduláló 8 kHz, vivő 1,5 GHz, BW = 50 kHz.
- a) BW ≥ 2(f_D + B_m) → 50 ≥ 2(f_D + 8) → f_D ≤ 17 kHz. BW ≈ 2B_m(1 + Φ_D) → 50 = 2·8(1 + Φ_D) → Φ_D ≈ 2,125.
- b) s_FM(t) = 5·cos(Xπt + φ + Y·sin(Zπt)) [V, ms, rad]: X = vivőfrekvencia kétszerese = 3 GHz = 3 000 000 [kHz], Y = Φ_D = 2,125 rad, Z = a modulálójel legnagyobb frekvenciájának kétszerese = 16 [kHz].

---

## Gyakorlat 6 (2021.03.16.) Gyakorló feladatok (vegyes, ZH felkészítő)

**1. feladat: AM-DSB modulátor** → 3. témakör
f_v = 210 kHz, f_m = 30 kHz, m = 100%, Û_AM = 4 V.
- Spektrum: 2 V a 210 kHz-es vivőn, 1 V a 180 és 240 kHz-es oldalsávokon. U_v = 2 V, U_m = 2 V.
- 33 μs szakasz = 1 periódus f_m, 7 periódus f_v. A burkoló 16,5 μs-nál 0-ra megy le (m = 100%).
- s_AM(t) = 2 V·cos(2π·210 kHz·t) + 1 V·cos(2π·180 kHz·t) + 1 V·cos(2π·240 kHz·t)

**2. feladat: lineáris blokk kód (7,3)** → 6. témakör
G sorai: 0101010, 0111011, 1100110.
Kódszavak (üzenet → kód, súly): 000 → 0000000 (0), 001 → 1100110 (4), 010 → 0111011 (5), 011 → 1011101 (5), 100 → 0101010 (3), 101 → 1001100 (3), 110 → 0010001 (2), 111 → 1110111 (6).
- d_min = 2 (a legkisebb nem nulla súly) → 1-et jelez, 0-t javít.
- G_sz = [I | B], sorai: 100 1100, 010 1010, 001 0001. Hᵀ = [B ; I], sorai: 1100, 1010, 0001, 1000, 0100, 0010, 0001.
- Hogy javítható legyen, „csak” a 2-es súlyú kódszót kell javítani, de ez ronthat a többin is!
- Javított G₂' sorai: 100 1100, 010 1010, 001 0011. Kódszavak: 000 → 0000000, 001 → 0010011 (3), 010 → 0101010 (3), 011 → 0111001 (4), 100 → 1001100 (3), 101 → 1011111 (6), 110 → 1100110 (4), 111 → 1110101 (5). d_min = 3 → 2-t jelez, 1-et javít.

**3. feladat (extra 1): GPS** → 8. témakör
f_v = 1,5 GHz, P_T = 25 W, 20 000 km magasan, G_T = 13 dB, G_R = 3 dB, egyutas, π² ≈ 10.
- λ = c/f = 0,2 m
- a_sz = P_adó/P_vevő = (4πr/λ)²·1/(G_T G_R), a_sz,dB = 10 lg((4πr/λ)²) − G_T^dB − G_R^dB = 10 lg((4π·10⁸)²) − 13 − 3 = 10 lg(2⁴·10¹⁷) − 13 − 3 = 12 + 170 − 13 − 3 = 166 dB
- P_R = 25 W·10^(−16,6) ≈ 0,625 nW

**4. feladat (extra 2): mintavételezés** → 2. témakör
Lánc: jel → ideális LPF (f_AA) → A/D (fₛ) → csatorna → D/A (fₛ) → ideális LPF (f_R). Bemenet f_m = 1 kHz-es szimmetrikus négyszög. A kimeneten 1, 3, 7, 9 kHz-es komponensek jelennek meg.
- a) A jel komponensei: 1, 3, 5, 7, 9, … kHz (páratlan harmonikusok).
- b) f_AA, f_R = ? 11 kHz nincs a kimeneten → 9 kHz < f_R < 11 kHz. Az 5 kHz hiányzik, tehát a mintavételkor vagy előtte tűnik el → 3 kHz < f_AA < 5 kHz.
- c) fₛ = 10 kHz (a 7 és 9 kHz-es komponensek valójában a 3 és 1 kHz szellemképei).

**5. feladat (extra 3): hibajavító kód C(5,2)** → 6. témakör
Szisztematikus lineáris blokk kód, 1 hibát javít.
- a) 1 hibát javít → d_min = 3. C(5,2): 2 bites üzenetet 5 biten kódolunk. G = [I | B], sorai: 10 011, 01 110. Kódszavak: 00 → 00000, 01 → 01110, 10 → 10011, 11 → 11101. Hᵀ = [B ; I], sorai: 011, 110, 100, 010, 001.
- b) v = 10001 (lehetett 10 vagy 00). s = vHᵀ = eHᵀ = 010 → e = 00010 → c = v − e = 10011 → az üzenet 10.
- c) Bizonyítsuk: nincs olyan C(5,2), 1 hibát javító kód, amelyben benne van c = 11111. Tfh. c = 11111 kódszó → u = 11 → G sorai 10 010 és 01 101 alakúak. De az elvárt kódtávolsághoz legalább egy 1-es kéne még, ami elrontja az XOR-t, VAGY nem teljesül a kódtávolság feltétel.

**6. feladat (extra 4): Huffman kód** → 6. témakör
5 fokozatú értékelés (1…5) bináris leírása a cél.
- a) Elég lehet átlagosan 2 bit? Lehet, ha eltérők a valószínűségek. Tfh. sok 5-ös, kevés 1-es, pl. az 5-ös legyen 1 bit, az 1-es pedig 3.
- b) Kód: Tfh. p₅ = 1/2, p₄ = 1/4, p₃ = 1/8, p₂ = 1/16, p₁ = 1/16. Kódszavak: 5 → 0, 4 → 10, 3 → 110, 2 → 1110, 1 → 1111, prefix.
  Átlagos λ = 1/2·1 + 1/4·2 + 1/8·3 + 1/16·2·4 = 1,875 < 2 (H(p) = 1,875).

---

## Gyakorlat 7 (2021.03.23.) Digitális alapsávi átvitel → 4. témakör

(Feladatszámok a hivatalos gyakorlatanyag 5. fejezetéből.)

**1. Szemábrák (5.1)**
Lánc: d_k → átalakító → csatorna (+ν zaj) → visszaalakító → d̂_k.
- a) Ideális bináris NRZ jel: h₀ magasságú, T hosszú négyszög. 1 → h₀, 0 → −h₀.
- b) 1011 jelalak: h₀, −h₀, h₀, h₀.
- c) Szemábra: periodikus jelek megfigyelése oszcilloszkóppal, a periódusok egymásra rajzolódnak. A szem „hunyorog”, ha a jel ingadozik. Minél nagyobb a zaj, annál jobban összeszűkül, a döntési küszöb közelébe kerül, így több a bithiba.
- d) Diszperzió (elkenődés): a csúcson maradás és az élek ideje is T/2. Trapéz alakú elemi jel (T/2-ig felfut, T-ig lapos… ), a szemábrán 2× meredekség. Ideális esetben a szem téglalap.

**2. Szimbólumközi áthallás elkerülése (5.2)**
H(f) = (1/B)(1 − |f|/B), ha |f| ≤ B, különben 0 (háromszög). Milyen jelzési sebesség esetén nincs ISI?
- A háromszög két fele szélességű ablak konvolúciója, ezért időtartományban szorzás: h(t) = sinc²(πBt) = sin²(πBt)/(πBt)². Nullhelyek ±1/B, ±2/B, ±3/B, …
- Nyquist feltétel: Σₖ H(f − k/T) = konst. Teljesül (B/2-re szimmetrikus), tehát T = 1/B jelzési idővel (B jelzési sebességgel) nincs ISI.

**3. Illesztett adó- és vevőszűrő (5.3)**
Lánc: d_k → átalakító → adószűrő H_a → csatorna (+ν) → vevőszűrő H_v → visszaalakító → d̂_k.
- Zaj szempontjából előnyös: H_a* = H_v (konjugált).
- H_Σ(f) = H_a(f)·H_v(f). Pl. H_v(f) = H_a*(f) = √(1 − |fT|), ha |f| < 1/T, különben 0 → H_Σ = 1 − |fT|, ha |f| < 1/T.
- Emelt koszinusz, α = 0, 0,5, 1. α = 1 esetén H(f) = (T/2)(1 + cos πfT), ha |f| ≤ 1/T, különben 0.

**4. ISI romboló hatása (5.5)**
A mintavétel időzítése elcsúszik. m₀ → ±1, m±1 → 0, m±2 → 0 kellene, de m₀ = 0,99, m₁ = 0,1, m₋₁ = −0,1, m±2… = 0.
- Döntési küszöbök: PAM-2: 0 (±d). PAM-4: szintek ±d, ±3d, döntés 0, ±2d. PAM-8: szintek ±d, ±3d, ±5d, ±7d, döntés 0, ±2d, ±4d, ±6d.
- PAM-2, „110”: az összeg 0,79 (1 helyett). 0 döntési küszöbbel a zajtól függ, hogy hogy döntünk, −0,8 zajjal már negatív.
- PAM-4, legrosszabb eset „3 1 −3”: 0,99 − 3·0,1 − 3·0,1 = 0,39. Ehhez már elegendő 0,4-es zaj! De még mindig jó lehet.
- PAM-8, „7 1 −7”: 0,99 − 7·2·0,1 = −0,41! Zaj nélkül is −1 lesz belőle. A többszintű jel több hibát is jelent.
- Baj pl. PAM-8-nál: ha a zaj miatt a −1-nek szánt jel pozitívba csap, 011 helyett 100 a döntés, rögtön 3 bithiba! Jobb kódolás kell (Gray).

---

## Gyakorlat 8 (2021.03.30.) Digitális moduláció → 5. témakör

**1. OOK és BPSK**
s_ASK(t) = (U + x(t))·sin(2πf_v t + φ), x(t) = Σₖ d_k h(t − kT) → PAM.
- OOK: U = 0, d_k ∈ {0, 2}. BPSK: U = 0, d_k ∈ {−1, 1}. Pl. x[k] = […, 1, 0, 0, 1, 1, …]: OOK 0 és 2A között, BPSK ±A között kapcsol.
- Tfh. P(d_k = 0) = P(d_k = 2): P̄_OOK = (P_max + P_min)/2 = (4A²/2 + 0)/2 = A². P̄_BPSK = A²/2.
- Demodulátor (szorzós): s(t) · 2sin(2πf_v t + φ) → LPF → d̂_k.

**2. QPSK**
Bitpár → (d_k, c_k): 00 → (+1, +1), 01 → (−1, +1), 11 → (+1, −1), 10 → (−1, −1). (Ez a címkézés Gray: a szomszédok egy bitben térnek el.)
- a) Konstelláció: I tengely d_k, Q tengely c_k. 00 (1,1), 01 (−1,1), 10 (−1,−1), 11 (1,−1).
- b) Vett jelek x̂ = (1,5; −1), (−1; −1,5), (−1; −1,5), (1,5; −1) → 11, 10, 10, 11.
- c) Erősítés és fázishiba: A = √(1,5² + 1²)/√2 ≈ 1,27. Δ = φ₂ − φ₁ = atan(1,5/1) − 45° ≈ 11,31°.

**3. QAM**
QAM-16 mekkora erősítéshibát és mekkora fázishibát visel el? I·cos(2πf_v t) + Q·sin(2πf_v t), I, Q ∈ {±1, ±3, …}.
- A zaj miatt a pontok „körtelőjük” (2D szemábra).
- Erősítéshiba: 2× erősítéssel már 2 bit hiba, 2/3-os csillapodással már baj van. (A legkülső 3-as pont a 2-es döntési határt 2/3-nál, a belső 1-es pont 2-nél lépi át.)
- Fázishiba: a sarokpont (3,3), β = 45°, δ = 18,43°. γ = π/4 − arcsin(2/√18) ≈ 16,8° fázishiba már baj.
- Állandó fázishiba vs. frekvenciakülönbség miatt a konstelláció forog.
- QAM-64: 6/7 < A < 6/5 (min. és max. erősítés), fázishiba π/4 − asin(6/(7√2)) ≈ 7,7°.
- QAM-1024: 30/31 < A < 30/29, fázishiba π/4 − asin(30/(31√2)) ≈ 1,82°.
- Doppler effektus: közeledve az antennához vagy távolodva tőle az észlelt frekvencia változik, ezért állandó forgás (PLL pl. kompenzálja). 108 km/h → 90 Hz különbség 900 MHz-en → 0,324° eltérés (T = 10 μs alatt).
- Hogyan csökkenthető a QAM-16 és QAM-64 teljesítményigénye? A sarokpontokat beljebb visszük, pl. (7;7) √98 helyett (9;1) √82 (QAM-64). QAM-16-ban nem tudunk nyerni. (A jegyzetben egy (9;5) → √106 köztes próbálkozás is szerepel.)

**Doppler (6.5)**
f₀ = 900 MHz, T = 10 μs. Gyalogos v₁ és autó v₂ távolodik a bázisállomástól. A·sin(2πf₀t), A·sin(2πf₁t), A·sin(2πf₂t), a Θ(t) fázisok eltérő meredekséggel nőnek.
- f' = f + v/λ = f(1 + v/c) → Δφ = 2π(f₂ − f₁)t = 2πΔf t
- v₁ = 1,5 m/s, v₂ = 30 m/s → Δf₁ = f₀v₁/c = 4,5 Hz, Δf₂ = f₀v₂/c = 90 Hz
- T = 10 μs (100 kB/s): Δφ₁ = 2πΔf₁T·360/2π = 0,0162°, Δφ₂ = 0,324°
- 1 T alatt 0,324°, több alatt elcsúszhat, követni kell. Bitszámtól függ.

---

## Gyakorlat 10 (2021.04.20.) Műsorszórás → 9. témakör

**1. Kossuth Rádió tükörfrekvenciája (8.2)**
Szuperheterodin vevő: antenna → RF (hangolható sávszűrő, erősítő) → keverő (f_v · f_o oszcillátor) → KF (éles szűrő f_KF-en, erősítő) → demodulátor → HF erősítő → hangszóró. Az RF fokozat adja a távoli szelektivitást, a KF a közeli szelektivitást.
- Kossuth Rádió: AM-DSB középhullám, f_v = 540 kHz, f_KF = 455 kHz → f_o = 995 kHz = f_KF + f_v (**felső keverés**).
- s(t) = A cos(2πf_v t)·A cos(2πf_o t) = C cos(2π(f_v − f_o)t) + D cos(2π(f_v + f_o)t), a különbségi tag esik f_KF-re.
- f_o + f_KF is f_KF-be látszik: **tükörfrekvencia** f_t = 1450 kHz. Ezért f_v köré f_t-t elnyomó szűrő kell (hangolható), f_KF köré pedig élesen vágó szűrő.
- **Alsó keverés**: f_o = f_v − f_KF = 85 kHz → f_t = f_v − 2f_KF = −370 kHz (|f_t| = 370 kHz), nehezebb kiszűrni!

**2. Szupervevő (8.1)**
87,5…108 MHz CCIR sáv, f_KF = 10,7 MHz (szabvány).
- a) Felső keverés, az oszcillátor milyen tartományban legyen hangolható? cos(2πf_v t)·cos(2πf_o t) = ½cos(2π(f_v − f_o)t) + ½cos(2π(f_v + f_o)t), f_o − f_v = f_KF = 10,7 MHz → f_o ∈ [98,2; 118,7] MHz.
- b) f_o = ? f_v = 94,8 MHz (Petőfi Rádió) → f_o = f_v + f_KF = 105,5 MHz.
- c) f_t = f_v + 2f_KF = 94,8 + 21,4 = 116,2 MHz.
- d) f_KF = 10,7 MHz azért jó, mert a tükörfrekvenciák sávja [108,9; 129,4] MHz, kívül esik a használt vivősávon.

**3. Sztereó átvitel (8.4)**
- a) „A” hang (440 Hz) a bal csatornán. Multiplex spektrum: L+R 50 Hz…15 kHz (440 Hz-en „A”), 19 kHz pilot, L−R DSB-SC 38 kHz körül 23…53 kHz (komponensek 37 560 Hz és 38 440 Hz), RDS 57 kHz. A mono hallgató csak a 440 Hz-et hallja.
- b) Hány sztereó adó fér el a CCIR sávban? B_össz ≈ 2(f_D + B_alap) = 2(75 kHz + 60 kHz) = 270 kHz ≈ 300 kHz (védősávval) → (108 − 87,5) MHz / 300 kHz ≈ 68 adó (ma nem használjuk ki).

**4. DVB-C (9.1)**
QAM-64, 8 MHz raszter, az ISI elkerülése érdekében α = 15%-os emelt koszinusz, Reed-Solomon (204, 188) kódolás.
- B = 2·(1/2T)·1,15 = 8 MHz → 1/T = 6,96 MBaud (T a jelzési idő)
- 6,96 MBaud · 6 bit = 41,74 Mb/s (bruttó)
- RS(204, 188): 41,74 Mb/s · 188/204 ≈ 38,5 Mb/s NETTÓ (a jegyzetben 38,74 áll, de a szorzat 38,47).
- d_min = n − k + 1 = 17 → 8 hibás (bájt) szimbólumot javít.
- SD felbontásban, kódolástól függően átlag adás 1,5 Mb/s → 38,5/1,5 ≈ 25 csatorna fér el.

**5. DVB-T (9.2)**
OFDM, 6817 vivő, ebből 6048 hordoz adatot, 769 segéd (pl. Doppler ellen). T₀ = 896 μs, GI = T₀/4 → 224 μs. QAM-64 → 6 bit/szimbólum. RS(204, 188) hibatűrő, FEC 3/4 konvolúciós kód.
- B = 2·(1/2T₀)·(0,5 + 6817 + 0,5) ≈ 7,6 MHz
- Szimbólumsebesség: 6048 · 1/((1 + GI)T₀) = 5,4 MBaud → 32,4 Mb/s (5,4 · 6) BRUTTÓ
- Kódolással együtt a tényleges bitsebesség: 188/204 · 3/4 · 32,4 Mb/s = 22,4 Mb/s
- SD felbontásban MPEG-4 kódolással (átlagosan 1,5 Mb/s): 22,4/1,5 ≈ 14…15 csatorna.

---

## Gyakorlat 12 (2021.05.11.) Telefonkp. (telefonközpont), VoIP → 11. témakör

**1. feladat**
5,3 kb/s, mintaméret 20 B, 1 csomagban 1 minta, fejléc 47 B.
- a) Csomagsebesség (n = 1): 5,3 kb/s / (20 B · 8) = 33,125 packet/s
- b) Hívásonkénti sávszélesség: B_c = (20 B + 47 B)·8·33,125 p/s = 17,75 kb/s (a zárójel a csomag bruttó mérete)

**2. feladat: G.729**
10 B minta 10 ms alatt, d_c kódolási késleltetés 5 ms. Overhead: 6 B (Layer 2, tunneling) + 20 B (IP) + 8 B (UDP) + 12 B (RTP) + 1 B (Flag) = 47 B.
- a) Forrássebesség: V_s = l_p/t_p = 8·10 B / 0,01 s = 8 kb/s
- b) Késleltetés: δ = n·t_seg + p_d + T + τ + t_r + p_d
  - T = ~100 B / 2 Mb/s = 800 b / 2 Mb/s ≈ 0,4 ms
  - τ = 2·10⁷ m / 2·10⁸ m/s = 100 ms
  - p_d = 5 ms
  - δ = 120,4 + n·t_sz < 150 ms, t_sz = 10 ms → n ≤ 2
- V_cs = 8 kb/s / (2·10 B·8) = 50 packet/s
- B_c = (20 B + 47 B)·8·50 pps = 26,8 kb/s, +5% hívásszervezési overhead → 28,1 kb/s

**3. feladat: tartási idő eloszlása**
30 Ft/perc (megkezdett percenként), mennyit fizet? Exponenciális eloszlás, átlagosan 2 perc → λ = 0,5.
- 30 Ft: F(1) = 0,3935
- 60 Ft: F(2) − F(1) = 0,2386
- 90 Ft: F(3) − F(2) = 0,1448
- > 90 Ft: 1 − F(3) = 0,2231
- Törvény kellett a másodperc alapú számlázáshoz, különben a szolgáltatók a percdíjjal lehúznák a népet!

**4. feladat: Erlang-B**
Átlag 120 hívás/óra = 2 hívás/perc, 20 perc/hívás.
- a) A = λh = 40 Erlang
- b) P_block ≤ 2% → N = 50 kiszolgáló kell (Erlang-B táblázatból)
- c) Kihasználtság: a = (A/N)(1 − P_b) = 40/50 · 0,98 = 78,4%
- d) Egyidőben hány vonal foglalt átlagosan? 50 · 78,4% ≈ 40 vonal (≈ A)

**5. feladat: tömegkiszolgáló**
2,48 hívás / 30 s, P(L > 90 s) = 0,6.
- e^(−λ·1,5) = 0,6 → λ = −ln 0,6 / 1,5 = 0,34055 (1/perc, ez a tartási idő paramétere)
- a) A = (2,48/0,5)·(1/λ) = 14,565 Erlang
- b) P_b ≤ 0,01% → N = 31 kiszolgáló kell
- c) a = (A/N)(1 − P_b) ≈ A/N = 0,469 = 46,9%
