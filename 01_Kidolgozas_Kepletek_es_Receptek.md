---
title: "Infokommunikáció – Gyakorlati vizsga kidolgozás (képletek, receptek, csapdák, hibajegyzék)"
keszult: 2026-11-15
forrasok:
  - "Forrasok/Korabbi_md_jegyzetek/ (modul_01…07 + feladatok 1–30; eredetileg ~/Downloads)"
  - "OneDrive: InfoKomm összes/From Balázs/1-5 gyakorlatok.pdf (hivatalos gyakorlati példatár, 1–5. gyak.)"
  - "AI Learning/Local Sources/BME/Infokom/Infokommunikáció-képletek-FINAL.pdf, ALL-IN-Infokomm-1.pdf, 5-ösöm-lesz-infokommból.pdf"
---

# Infokommunikáció – Gyakorlati vizsga kidolgozás

> **Hogyan használd:** minden témakörnél először a **képletek**, utána a **recept** (milyen
> lépésekben oldd meg), végül a **csapdák**. A `[M2-T023]` / `[F15]` hivatkozások a
> meglévő jegyzetfájlok feladatai (M = modul, F = feladatgyűjtemény), a `[PDF 3.2]`
> a hivatalos példatár példái. A régi vizsgafeladatok megoldásai a
> **`02_Regi_Vizsgafeladatok_Megoldasokkal.md`** fájlban vannak. A tanszéki gyakorlatanyag (gyak00–08)
> kidolgozása a **`05_TMIT_Gyakorlatok_Kidolgozas.md`** fájlban van. A forrásokban talált hibák a
> **`03_Hibajegyzek.md`** fájlban. Ezeket javítsd ki fejben, mielőtt a régi megoldásokból tanulsz.
>
> **Fejben számoláshoz:** lg2 = 0,3; lg3 = 0,48; lgπ ≈ 0,5; lg5 = 0,7; lg7 = 0,85; π² ≈ 10.

---

## 0. Vizsgatechnika – általános recept

1. **Mértékegység-fegyelem:** ha a képletben `t [ms]` áll, a frekvencia kHz-ben jön ki
   (`[F21]`, `[PDF 5.3]`). A dB-t **mindig** átváltod lineárisra, mielőtt összeadsz.
2. **dB-ökölszabályok:** ×2 teljesítmény = +3 dB, ×2 feszültség = +6 dB, ×10 telj. = +10 dB,
   ×10 fesz. = +20 dB. `10^(x/10)` → teljesítmény, `10^(x/20)` → feszültség/térerősség/nyomás.
3. **Kerekítés iránya:** a bitszámot, a vevők/áramkörök/operátorok számát **mindig felfelé**
   kerekíted, a csatornák/adások számát (amit be lehet zsúfolni) **mindig lefelé**.
4. **Mindig írd le a feltételezést:** 1 Ω-os terhelés, Γ = −1, szinuszos teljes kivezérlés,
   α = 0 stb. Erre részpont jár.
5. **Ellenőrzés:** BPF-mintavételnél nézd meg, hogy f_s ≥ 2B; Erlang-B-nél számold ki
   N−1-re is a blokkolást, hogy lásd, tényleg a határon vagy-e.

---

## 1. Rádiós terjedés, antennák, zaj

### Képletek
| Mennyiség | Képlet |
|---|---|
| Hullámhossz | λ = c/f, c = 3·10⁸ m/s |
| Szabadtéri csillapítás | a₀ = 20 lg(4πr/λ) [dB]; gyakorlati alak: a₀ = 32,45 + 20lg f[MHz] + 20lg d[km] (vagy 92,45 + 20lg f[GHz] + 20lg d[km]) |
| Szakaszcsillapítás | a_sz = a₀ − G_T − G_R |
| Link budget | P_R[dBm] = P_T + G_T + G_R − a₀ − (táp/csatlakozó veszteség) |
| Tartalék (fading margin) | M = P_R − P_érz |
| Kétutas térerősség | E_R = 2E₀·sin(2π·h_T·h_R / (λ·r)) |
| Kétutas csillapítás (r > 4h_Th_R/λ) | a_kétutas = 20 lg( r² / (h_T·h_R) ) − G_T − G_R **(nincs benne 2-es szorzó!)** |
| Interferenciazóna határa (utolsó maximum) | **r = 4·h_T·h_R / λ** |
| Térerősség-maximum a vevőantenna magasságában | 2π h_T h_R /(λ r) = π/2 + kπ → h_R = λr(2k+1)/(4h_T) |
| Max/min térerősség aránya | E_max/E_min = (1+|Γ|)/(1−|Γ|) |
| 1. Fresnel-zóna sugara | F₁ = √(λ·d₁·d₂/d); szabad terjedéshez ≥ 0,6·F₁ legyen szabadon |
| Apertúra-antenna nyeresége | G = 4π·A_h/λ² (parabolánál A_h ≈ R²π) |
| Vett feszültség illesztett bemeneten | U = √(P·R) |
| Zajtényező láncban (Friis) | F = F₁ + (F₂−1)/G₁ + (F₃−1)/(G₁G₂) + … |
| Passzív csillapító (kábel, T = 290 K) | F = L (lineárisan), G = 1/L |
| Zajhőmérséklet ↔ zajtényező | T_e = T₀(F−1), T₀ = 290 K; zajteljesítmény P = kTB, k = 1,38·10⁻²³ |

### Receptek
- **Kétutas, ha minden adott** `[M1-T001]`: 20lg(r²/(h_Th_R)) − G_T − G_R.
  Példa: r = 10 km, h = 10/10 m, G = 5+3 dB → 120 − 8 = **112 dB**.
- **„Akár növeljük, akár csökkentjük az antennát, romlik a vétel”** `[PDF 3.2]`: a vevő a
  maximumban van → 2πh_Th_R/(λr) = π/2 → λ = 4h_Th_R/r. A csillapítás ilyenkor a szabadtéri
  csillapításnál **6 dB-lel kisebb** (2× térerősség = 4× teljesítmény).
- **Kábel + erősítő sorrendje** `[PDF 3.4]`: kábel elöl → F = L·F_erősítő (pl. 15 dB + 3 dB = 18 dB);
  erősítő elöl → F ≈ F_erősítő + (L−1)/G (≈ 3,6 dB). Tanulság: **a csillapítást az erősítő után tedd**.

### Csapdák
- Az interferenciazóna határa **4h_Th_R/λ**. A 2h_Th_R/λ távolság az **utolsó kioltás** (lásd a hibajegyzéket: `[F29]`).
- A kétutas csillapításnak (r ≫ 4h_Th_R/λ) **nincs frekvenciafüggése**, csak az antennanyereségeknek van.

---

## 2. Mintavételezés

### Képletek
- **Aluláteresztő (LPF):** f_s ≥ 2·f_max.
- **Sávszűrős (BPF) mintavétel**, B = f_H − f_L, k egész, 1 ≤ k ≤ ⌊f_H/B⌋:
  **2f_H / k ≤ f_s ≤ 2f_L / (k−1)**. A legkisebb elvi érték k_max mellett adódik (≥ 2B).
- **Aliasing:** az f komponens a |f − n·f_s| frekvenciákon jelenik meg. Ezek közül a [0, f_s/2] sávba eső látszik.
- **Mintavételezett jel spektruma:** n·f_s ± f komponensek (a kimenő szűrő ezeket csillapítja → „szivárgás”).

### Recept (BPF, táblázatosan) `[M7-T094]`
f_L = 60, f_H = 80 kHz, B = 20 → k_max = 4

| k | alsó határ 2f_H/k | felső határ 2f_L/(k−1) | tartomány |
|---|---|---|---|
| 1 | 160 | ∞ | f_s ≥ 160 kHz (LPF eset) |
| 2 | 80 | 120 | 80…120 kHz |
| 3 | 53,3 | 60 | 53,3…60 kHz |
| 4 | 40 | 40 | csak 40 kHz (elvi, a gyakorlatban nem használható) |

Visszaállításhoz **sáváteresztő** szűrő kell (f_L…f_H), LPF eset (k=1) esetén aluláteresztő.

### További tipikus kérdések
- `[M3-T043]` 1 kHz + 3 kHz, f_s = 4 kHz → a 3 kHz-es komponens 1 kHz-re hajlik át, és a két 1 kHz-es komponens összeadódik.
- `[PDF 2.2]` PCM, f_s = 8 kHz, 40 dB zárótartomány: 1,8 kHz-es, 2 V-os bemenetnél a kimeneten a 6,2 kHz-es komponens 2 V·10⁻² = **20 mV**.
  Egyenirányított bemenetnél n·8 ± k·3,6 kHz komponensek jelennek meg (pl. 0,8 és 2,8 kHz is!).
- `[PDF 2.1]` Két sávban (0–3 és 7–8 kHz) lévő jel: f_s ≥ 16 kHz LPF-fel. Ügyesebb esetben kisebb f_s is működik (spektrum-tologatással ellenőrizd).

---

## 3. Kvantálás, PCM, predikció

### Képletek
- Szintek: N = 2ⁿ; lépésköz Δ = (U_max − U_min)/2ⁿ; max. hiba Δ/2.
- Kvantálási zaj: M(ε) = 0, M(ε²) = Δ²/12 (egyenletes eloszlás) `[PDF 2.3]`.
- **SQNR (teljes kivezérlésű szinusz): 6,02·n + 1,76 dB** (≈ 6n + 1,8).
- Általánosan, η csúcstényezőjű jelre: **SQNR = 6,02n + 4,77 − 20lg η** dB (√2 → 1,76).
- **A tárgy képletgyűjteménye szerint, túlmintavételezéssel együtt:** **SNR = (3/C²)·(f_s/(2B))·2^(2n)** (C = csúcstényező).
  √3-as csúcstényezőnél (háromszögjel) 3/C² = 1 → SNR ≈ 6n dB. f_s minden duplázása +3 dB-t ad, ha a visszaállító szűrő B sávú.
- Dinamikatartomány: SQNR_max = SQNR_min + D `[M3-T045]`.
- PCM: R_b = f_s·n (beszéd: 8 kHz · 8 bit = 64 kbit/s); E1: 32·64 = 2048 kbit/s.
- Kompandálás: Európa: A-law (A = 87,6), USA/Japán: µ-law (µ = 255).
- **Lineáris predikció (Wiener–Hopf):**
  - 1. fokú: a₁ = R₁/R₀, hiba E = R₀ − a₁R₁.
  - 2. fokú: R₀a₁ + R₁a₂ = R₁ ; R₁a₁ + R₀a₂ = R₂ ; hiba E = R₀ − a₁R₁ − a₂R₂.
  - Egyetlen minta alapján a legjobb becslés: ξ̂(t₂) = R(t₂−t₁)/R(0) · ξ(t₁) `[PDF 1.5]`.

### Receptek
- **Bitszám előírt SNR-hez:** n ≥ (SNR − 1,76)/6,02 → felfelé kerekítesz. 64 dB → 10,34 → **11 bit** `[F14]`; 50 dB → **9 bit** `[M3-T042]`.
- **Rekurzív (DPCM) kódoló** `[PDF 2.7]`: a kvantáló bemenete = aktuális minta − predikció.
  Predikció: x̂ = x_{k−1} − 0,8·x_{k−2} = 3 − 0,8·(−8) = 9,4 → 7 − 9,4 = −2,4 → kerekítve **−2**.
- **Exp. autokorreláció mintái (R_n = R₀e^(−n))** `[PDF 2.6]`: a₁ = e⁻¹, a₂ = 0. A másodfokú prediktor nem jobb az elsőfokúnál (Markov-tulajdonság).

### Jelleírás (1. gyakorlat, röviden)
- Sávhatárolt fehér zaj (s₀, |f| ≤ B) → R(τ) = 2Bs₀·sin(2πBτ)/(2πBτ). Nullhelyei: τ = k/(2B).
- R(τ) = R₀e^(−|τ|/T) → s(f) = 2R₀T / (1 + (2πfT)²) (elsőfokú aluláteresztővel szűrt fehér zaj).
- η_t = ξ_t − ξ_{t−T} → s_η/s_ξ = 4sin²(πfT).
- Gyenge stacionaritás: konstans várható érték, és R csak τ-tól függ. Ergodikusság: egy realizációból kiolvasható a statisztika.

---

## 4. Forráskódolás (információelmélet)

### Képletek
- Információtartalom: I = −log₂p; entrópia H = Σ pᵢ·log₂(1/pᵢ).
- Átlagos szóhossz L̄ = Σ pᵢlᵢ; hatásfok η = H/L̄; redundancia L_max − H, relatív: (L_max − H)/L_max.
- **Kraft–McMillan:** Σ 2^(−lᵢ) ≤ 1 ⇔ létezik ilyen hosszakkal prefix kód (és így egyértelműen megfejthető kód is).
- Ha L̄ = H, akkor pᵢ = 2^(−lᵢ) (pl. `[PDF 4.1]`: H = 49/16).
- Shannon–Hartley: C = B·log₂(1 + S/N); B → ∞ esetén (E_b/N₀)_min = ln2 = −1,59 dB.
- BSC: C = 1 − H_b(p), H_b(p) = −p log₂p − (1−p) log₂(1−p).

### Receptek
- **Huffman:** a két legkisebb valószínűséget vond össze, ismételd, majd visszafelé oszd ki a 0/1-eket.
- **Shannon–Fano:** csökkenő sorrend, majd két csoportra vágsz úgy, hogy a csoportok összege a lehető legközelebb legyen egymáshoz.
- **Shannon-kód** `[PDF 4.2]`: lᵢ = ⌈log₂(1/pᵢ)⌉, Fᵢ = Σ_{k<i} p_k. A kódszó Fᵢ bináris törtjének első lᵢ bitje.
- **Prefix kód a megadott hosszakból:** a rövidtől a hosszú felé haladj, és mindig a „következő szabad” bináris számot vedd. Pl. 2,2,3,3,3,5,5,5,5 → 00, 01, 100, 101, 110, 11100, 11101, 11110, 11111.
- **Egyértelműen megfejthető-e egy nem prefix kód?** Keress két különböző kódszósorozatot, amelyekből ugyanaz a bitsor jön ki:
  - `[PDF 4.3]` {01, 10, 011, 1011}: 011|011 = 01|1011 → **nem** egyértelmű.
  - `[M2-T026]` {0, 10, 110, 1101}: 110|10 = 1101|0 = `11010` → **nem** egyértelmű (a jegyzet tévesen állítja az ellenkezőjét).
  - Ha nem találsz ilyet, a módszeres eszköz a Sardinas–Patterson-teszt (a maradék-„lógó” végeket addig képezed, amíg kódszó nem jön ki, vagy el nem fogynak).

### Csapda
- A Kraft-egyenlőtlenség teljesülése nem bizonyítja, hogy egy **adott** kód egyértelműen megfejthető, csak azt, hogy **létezik** ilyen hosszúságú prefix kód.

---

## 5. Hibavédő (csatorna-) kódolás

### Képletek
- Detektálható hibák: d_min − 1; javítható hibák: ⌊(d_min−1)/2⌋. Lineáris kódnál d_min = a legkisebb nem nulla kódszósúly.
- Szisztematikus: **G = [I_k | P]**, **H = [Pᵀ | I_{n−k}]**, Hᵀ = [P ; I].
- Szindróma: s = v·Hᵀ = e·Hᵀ. Egyhibás minta szindrómája = **Hᵀ megfelelő sora**.
  Ha Hᵀ-ban van két egyforma sor, az a két egyhiba nem különböztethető meg `[PDF 4.4]`.
- Hamming: n = 2^m − 1, k = n − m, d_min = 3.
- Perfekt kód: Σ_{i=0}^{t} C(n,i) = 2^(n−k) (Golay (23,12): 1+23+253+1771 = 2048 = 2¹¹) `[PDF 4.5]`.
- Egy paritásbit: d_min = 2 → 1 hiba jelezhető, 0 javítható.

### Receptek
- **G a kódszavakból:** k = log₂(kódszavak száma). Bázisnak válassz k darab lineárisan független, nem nulla kódszót. Ha lehet, olyat, amelyiknél az eleje egységmátrix.
- **Nem szisztematikus G → szisztematikus** `[PDF 4.6]`: sorműveletekkel (mod 2 sorösszeadás) képezz az elejére I-t.
- **CRC/ciklikus kód kódszava:**
  1. A generátor fokszáma r (bitekben: hossz − 1). Fűzz r darab 0-t az üzenet után.
  2. Mod 2 osztás (XOR), ahol az aktuális vezető bit 1.
  3. A maradék (r bit) az FCS. A kódszó: üzenet + FCS. Ellenőrzéskor a vett szót osztva 0 maradék jön ki.
  - Ellenőrzött példák: 1101 / 1011 → FCS **001**, kódszó **1101001**; 1101011 / 1011 → FCS **110**, keret **1101011110**; 1011 / 1011 → FCS **000**.
- **Polinomos rövidítés g(x) = x³+x+1-hez:** x³ ≡ x+1, x⁴ ≡ x²+x, x⁵ ≡ x²+x+1, x⁶ ≡ x²+1.
  Ezzel a maradék gyorsan, fejben is kijön.

---

## 6. Digitális alapsávi átvitel (PAM, Nyquist, szemábra)

### Képletek
- R_b = R_s·log₂M.
- **Nyquist I.:** h(kT) = 1, ha k = 0, és 0 minden más k-ra (ISI-mentes).
- **Emelt koszinusz:**
  - **alapsávi** sávszélesség: B = R_s(1+α)/2,
  - **modulált (sávátviteli)** sávszélesség: B = R_s(1+α) (DVB-C, PSK).
- α nagyobb → szélesebb a szem, kisebb a jitter-érzékenység, de nagyobb a sávszélesség.
- **Duobinary (Nyquist II., kontrollált ISI):** prekódolás b_k = a_k ⊕ b_{k−1}, kimenet c_k = b_k + b_{k−1} ∈ {0,1,2}.
  Dekódolás: a_k = c_k mod 2 (c = 1 → 1; c = 0 vagy 2 → 0). Ellenőrzött: a = 1011001 → c = 1,2,1,1,2,2,1.

### Recept – „Van-e ISI az adott mintavételi fázisnál?” `[M1-T002]`
1. Olvasd le az impulzusválaszt a mintavételi pillanatokban: h₀ (saját), h₁, h₂ … (szomszédok).
2. A legrosszabb eset: h₀·d_k − Σ|h_i|·|d_max|. Ha ez a döntési küszöb jó oldalán marad, nincs döntési hiba.
3. Többszintű (±1, ±3) jelnél a küszöbök 0 és ±2. Nézd meg a +3 → +1 és hasonló átmeneteket (pl. 1,25·1 + 0,45·3 = 2,6 > 2 → hibás döntés).

### Szemábra
- Függőleges nyitottság → zajmargó; vízszintes nyitottság → időzítési (jitter-) tűrés; vastag vonalak → zaj/ISI.

### Additív zaj okozta döntési hiba (képletgyűjtemény)
- PAM-2: p = Φ(−h₀/σ); L szintű PAM: **p = 2·(L−1)/L · Φ(−h₀/σ)** (h₀ = a jelszint távolsága a küszöbtől, σ = a zaj szórása).
- Nyquist-feltétel a frekvenciatartományban: Σ_k H(f − k/T) = állandó → nincs ISI.

---

## 7. Digitális moduláció (PSK, QAM, FSK, MSK)

### Képletek
| | |
|---|---|
| M-PSK fázistűrés | ±180°/M (16-PSK: ±11,25°; 8-PSK: ±22,5°; QPSK: ±45°) |
| M-PSK d_min | 2R·sin(π/M) |
| Négyzetes M-QAM (±1, ±3, …) átlagteljesítmény | **P_átl = 2(M−1)/3** (16: 10; 36: 23,33; 64: 42) |
| Csúcsteljesítmény | a legkülső pont |
| PAPR | P_max/P_átl (36-QAM: 50/23,33 = **2,14 ≈ 3,3 dB**) |
| Csúcstényező | U_max/U_eff (szinusz és téglalapimpulzusos BPSK: √2) |
| Szimbólumsebesség | R_s = R_b/log₂M |
| Sávátviteli Nyquist-sávszélesség | B_min = R_s (α = 0), illetve R_s(1+α) |
| FSK | f_D = |f₂−f₁|/2, F = (f₁+f₂)/2 |
| MSK | Δf = 1/(2T_s) (h = 0,5); GMSK: Gauss-előszűrő, BT = 0,3 (GSM) |

### Receptek
- **Erősítés/csillapítás-tűrés négyzetrácsos QAM-nél** (zajmentes, minden pont g-szeresére változik):
  a pontnak a saját döntési tartományában kell maradnia. 6×6 rács (±1, ±3, ±5), küszöbök 0, ±2, ±4:
  - csillapítás: 5g ≥ 4 → g ≥ 0,8 → **20%**,
  - erősítés: 3g ≤ 4 → g ≤ 1,33 → **33%**.
  A szűk keresztmetszet a külső pontoknál van, nem a legbelsőnél.
  64-QAM-nál ugyanez: g ∈ [6/7; 6/5] (−14,3% / +20%).
- **Fázistűrés négyzetes QAM-nél:** minden pontot forgass el, és nézd meg, mikor lépi át a saját döntési tartománya határát. Nem a szomszédos pontig mért szöget kell venni!
  Numerikusan ellenőrzött értékek: **16-QAM ≈ 16,9°, 36-QAM ≈ 10,6°, 64-QAM ≈ 7,7°**, mindháromnál a sarokpont a döntő.
  (Gyors képlet a sarokpontra: 45° − arcsin(K/(r_sarok)), ahol K a legkülső küszöb. 64-QAM-nál 45° − arcsin(6/√98) = 7,7°.)
- **Sarokpontok áthelyezése a tengely mellé:** csak akkor van értelme, ha az új pont amplitúdója kisebb.
  6×6-os rácsnál (5,5) → (7,1) esetén mindkettő √50, tehát nincs nyereség. 8×8-asnál (7,7) → (9,1) esetén 9,9 → 9,06, itt már van.
- **8-QAM, 2A minimális ponttávolsággal** (energia-összehasonlítás):
  - 2×4 téglalap (±A, ±3A) × (±A): **6A²**,
  - 8-PSK kör (R = A/sin22,5° = 2,61A): **6,83A²**,
  - „csillag” 4+4 (belső (±A,±A), külső a tengelyeken ±(1+√3)A): **≈ 4,73A²** → ez a legtakarékosabb a három közül.
- **Gray-kódolás:** a szomszédos pontok csak 1 bitben térnek el (QPSK körbe: 00, 01, 11, 10), így egy szimbólumhiba ≈ 1 bithiba.
- **16-QAM vs. 16-PSK** azonos átlagteljesítményen: d_min,QAM = 0,632√E_s > d_min,PSK = 0,390√E_s → a QAM a jobb.
- **QPSK vs. 8-PSK:** 20lg(1,414/0,765) ≈ 5,3 dB a QPSK javára.
- **DVB-C kapacitás** `[F17]`, `[M7-T093]`: R_s = 8 MHz/1,15 = 6,957 MBd → ×6 bit = 41,74 Mbit/s → ×188/204 = 38,46 Mbit/s → ÷ adásonkénti sebesség, **lefelé** kerekítve (1,5 Mbit/s → 25; 2 Mbit/s → 19).
  256-QAM, α = 1/3 esetén: 6 MBd, 48 Mbit/s (RS nélkül 32, RS-sel 29 csatorna).
- **Reed–Solomon:** d_min = n − k + 1. **Singleton-korlát** (minden kódra): d_min ≤ n − k + 1. **Hamming-korlát** t hiba javításához: Σ_{i≤t} C(n,i) ≤ 2^(n−k), egyhibára 1 + n ≤ 2^(n−k).
- **OFDM / DVB-T (képletgyűjtemény, 5-ösöm P.9.2):**
  - sávszélesség: B = 2·(1/(2T₀))·(0,5 + n + 0,5) = (n+1)/T₀ (n = az összes vivő, pilot + adat),
  - szimbólumsebesség: v_s = k/((1+GI)·T₀) (k = adatvivők száma, GI = védőintervallum),
  - nettó bitsebesség: v_b = v_s·log₂M·FEC·(188/204).
  - Példa: 6817/6048 vivő, T₀ = 896 µs, GI = 1/4, 64-QAM, FEC 3/4 → 7,61 MHz, 5,4 MBd, 32,4 → **22,4 Mbit/s**.
- **Doppler-effektus:** Δf = v/λ (közeledéskor +, távolodáskor −). A konstelláció elfordulása szimbólumonként: φ = 360°·Δf·T.
  Ez akkor okoz hibát, ha eléri a fázistűrést.
- **MSK:** f_D·T = 1/4 → bitsebesség = 4f_D (pl. 22,2/24,2 kHz → f_D = 1 kHz → 4 kbit/s).

---

## 8. Analóg moduláció, vevők, FM-sztereó

### AM
- s(t) = (U_v + U_m·cos ω_m t)·cos ω_v t; m = U_m/U_v; csúcsérték U_v(1+m).
- Spektrum: vivő U_v, oldalsávok f_v ± f_m, amplitúdójuk m·U_v/2.
- Teljesítmény: P = U_v²/(2R)·(1 + m²/2). Egy oldalsáv: (mU_v/2)²/(2R).
- Több hang esetén: m = (a legnegatívabb moduláló érték abszolútértéke)/U_v. Csúcsteljesítmény: (U_v(1+m_max+))²/(2R) `[PDF 5.2]`.
- `[M1-T004]`: csúcs 6 V, m = 1 → U_v = U_m = 3 V; komponensek 240 kHz: 3 V, 210/270 kHz: 1,5 V; P = 6,75 W (1 Ω).
- DSB/SC: B = 2f_max, nincs vivő; SSB: B = f_max, s = m·cos ωt ∓ m̂·sin ωt.

### Szögmoduláció (FM/PM)
- Ha a fázis a moduláló jel **integráljával** arányos, FM; ha magával a jellel, PM. Az amplitúdó állandó.
- Fázislöket Φ_D = a fázis „lötyögésének” amplitúdója; frekvencialöket f_D = Φ_D·f_m (szinusznál), illetve f_D = k_f·U_m.
- **Carson:** B ≈ 2(f_D + f_m). Finomabb becslés: B ≈ 2f_m(1 + Φ_D + √Φ_D) `[PDF 5.3]`.
- Kiolvasás `[F21]`: cos(1000π·t[ms] + … + 5 sin(3π·t[ms] + 2)) → f_v = 500 kHz, f_m = 1,5 kHz, Φ_D = 5 rad, f_D = 7,5 kHz, B ≈ 18 kHz.
- Pre-/de-emphasis: az FM-zaj spektruma f²-tel nő, ezért az adó kiemeli a magas hangokat, a vevő pedig elnyomja (τ = 50 µs Európában).

### Szuperheterodin vevő
| | felső keverés (f₀ > f_v) | alsó keverés (f₀ < f_v) |
|---|---|---|
| oszcillátor | f₀ = f_v + f_KF | f₀ = f_v − f_KF |
| tükörfrekvencia | f_t = f_v + 2f_KF | f_t = |f_v − 2f_KF| |

- A tükör **mindkét esetben 2f_KF** távolságra van a vett jeltől. A felső keverés előnye a **kisebb relatív oszcillátor-átfogás** (f₀,max/f₀,min).
  Példa `[F15]`: 24–36 MHz, f_KF = 18 MHz → felső: 42–54 MHz (1,29×), alsó: 6–18 MHz (3×).
- Műholdas LNB `[F27]`: 10,7–11,7 GHz → 1–2 GHz: f₀ = 9,7 GHz (alsó keverés), tükörsáv 7,7–8,7 GHz.

### FM-sztereó (MPX)
- M = L+R (0–15 kHz), pilot 19 kHz, S = L−R DSB/SC 38 kHz-en (23–53 kHz), RDS 57 kHz.
- Mono vevő az M-et hallja, ezért szól benne mindkét csatorna.
- **S 6 dB-es csillapodása:** L' = (M + S/2)/2 = 0,75L + 0,25R, R' = 0,25L + 0,75R.
  Az áthallás nő, a csatornaszeparáció 20lg(0,75/0,25) ≈ **9,5 dB**-re romlik, a kép a mono felé „szűkül”.

---

## 9. Mobilhálózatok (GSM, cellás tervezés)

### Képletek, adatok
- Klaszter N cellával; társcsatornás távolság **D = √(3N)·R** (N = 7 → 4,58R).
- Cellánkénti csatorna = összes/N. GSM: 1 vivő (200 kHz) = 8 időrés → beszédcsatorna = FDM-csatorna × 8.
- Egyidejű hívás klaszterenként = összes FDM × 8 (pl. 70 × 8 = 560; 124 × 8 = 992).
- Szektorálás 120°-kal: 3 szektor/cella, kevesebb zavaró társcsatornás cella (6 → 2), így kisebb N is elég.
- TDMA: időrés 577 µs (156,25 bit), keret 4,615 ms, 270,833 kbit/s, GMSK.
- Nagy N: + kisebb társcsatornás interferencia (jobb C/I), − kevesebb csatorna jut egy cellára.

### Hálózati elemek (a roaming-kérdés `[M1-T007]` megoldásához)
- MS (készülék + SIM), BTS (rádió), BSC (rádióerőforrás, handover), MSC (kapcsolás), GMSC (átjáró),
  HLR (honos törzsadat + hol van a mobil), VLR (az aktuális körzetben tartózkodók), AuC (hitelesítés: K_i, RAND → SRES, K_c), EIR (IMEI-listák).
- Roaming-kérdés, ha MS-A1 hívja a β-ban barangoló MS-A2-t:
  (a) α-BTS, (b) α-HLR, (c) **β-BTS, β-BSC, β-MSC, β-VLR + α-HLR**, (d) α-AuC.
  A javító 2020-ban levont pontot, mert a válaszból kimaradt a BSC és a BTS.
- **Ökölszabályok a GSM-kérdésekhez:** mindig a **hívott fél honos** HLR-je és GMSC-je kerül lekérdezésre. Az SMS-t a **küldő honos** SMSC-je tárolja és kézbesíti.
  A mozgásról a látogatott hálózat BSS-e és MSC/VLR-je tud, a honos HLR pedig csak VLR-váltáskor értesül.
- További azonosítók: IMSI (SIM), IMEI (készülék), MSISDN (hívószám), TMSI (ideiglenes, 32 bit). FNR: hordozott számok. SMSC: SMS-központ.
- Algoritmusok: A3 hitelesítés (SRES), A8 kulcsképzés (K_c), A5 titkosítás.

### Recept – városi kapacitás `[F19]`
525 cella, N = 12, 124 vivő → 43,75 klaszter → 43,75 × 992 = **43 400** egyidejű hívás
(ugyanez cellánként: 124·8/12 = 82,7 csatorna × 525). Ha csak teljes klasztereket számolsz: 43 × 992 = 42 656.
Írd le, melyiket választod.

---

## 10. Forgalomelmélet (Erlang), DTMF

### Képletek
- **A = λ·h** [Erl], ahol λ = hívásintenzitás, h = átlagos tartási idő (azonos időegységben!).
- **Erlang-B rekurzió számológéphez** (táblázat helyett):
  B(0) = 1, **B(k) = A·B(k−1) / (k + A·B(k−1))**. Addig növeld k-t, amíg B(k) ≤ P_b.
- Erlang-C (várakozásos rendszer): stabilitáshoz N > A szükséges.
- Zárt alak: P_N(A) = (A^N/N!) / Σ_{k=0}^{N} A^k/k! (kis N-re kézzel is, pl. N = 2, A = 6 → 18/25).
- **Egy kiszolgáló átlagos kihasználtsága: a = (A/N)·(1 − P_B)**. Az egyidejűleg foglalt kiszolgálók várható száma N·a = A(1 − P_B).
- Exponenciális tartási idő: P(tartás > t) = e^(−t/h) (pl. h = 3 perc, t = 6 perc → e⁻² ≈ 0,135).
- VoIP-késleltetés: δ = n·t_sz + csomagolás + T (továbbítás) + γ (terjedés) + t_r (sorban állás) + kicsomagolás.
- DTMF: alsó csoport 697/770/852/941 Hz (sorok), felső 1209/1336/1477/1633 Hz (oszlopok); egy gomb = 1 sor + 1 oszlop frekvencia.

### Ellenőrzött eredmények
| Feladat | A | P_b | N |
|---|---|---|---|
| 1200 hívás/h × 2,5 perc `[M6-T077]` | 50 Erl | 1% | **64** (B = 0,84%; 63-nál 1,09%) |
| 500 előfizető × 2 hívás × 6 s `[M6-T078]` | 1,67 Erl | 0,2% | **7** (B = 0,13%) |
| 200 előfizető × 2 hívás × 6 s `[M7-T100]` | 0,667 Erl | 0,5% | **4** (B = 0,42%) |
| 60 000 hívás/h × 10 s `[F16]` | 166,7 Erl | 0,2% | **198** (197-nél még 0,212%!) |
| 180 hívás/h × 3 perc `[M6-T083]` | 9 Erl | Erlang-C | ≥ 10 operátor |

---

## 11. VoIP

### Recept
1. Forrássebesség = szegmensméret / szegmensidő (10 byte / 5 ms = 16 kbit/s).
2. n szegmens csomagonként → csomagsebesség = 1/(n·T_szegmens).
3. Csomagméret = n·payload + fejléc (L2 + IP 20 + UDP 8 + RTP 12; Ethernet-tel összesen 58 byte, vagy ahogy a feladat megadja).
4. **Sávszélesség = csomagméret[bit] × csomagsebesség.**

| Eset | csomag/s | csomag | sávszélesség |
|---|---|---|---|
| 10 B / 5 ms, 47 B fejléc, n = 1 | 200 | 57 B | 91,2 kbit/s |
| ugyanez, n = 2 | 100 | 67 B | 53,6 kbit/s |
| G.711, 20 ms, 58 B fejléc | 50 | 218 B | 87,2 kbit/s |
| G.729, 10 ms, 58 B fejléc | 100 | 68 B | 54,4 kbit/s |

- Overhead: mondd meg, mihez viszonyítasz. 58/160 = 36% a payloadhoz, 58/218 = 27% a teljes csomaghoz.
- VAD + CNG: GSM-ben akkumulátort és interferenciát spórol, VoIP-ban sávszélességet (≈ 30–50%). A vevő oldalon komfortzajt generál, SID-keretek alapján.
- SIP: INVITE (SDP-vel) → 100 Trying → 180 Ringing → 200 OK → ACK → RTP. Jitter p-p = D_max − D_min, ennyi a de-jitter puffer minimuma.

---

## 12. Akusztika, hallás, TV

### Képletek
- SPL = 20lg(p/p₀) = 10lg(I/I₀), p₀ = 20 µPa, I₀ = 10⁻¹² W/m², I = p²/(ρc); fájdalomküszöb 120 dB ↔ 20 Pa.
  Ha a vizsgán más értékkel (pl. 123 dB) számolsz, írd le. 2020-ban így is teljes pontot adtak.
- Hangsebesség: c ≈ 331,5 + 0,6·ϑ [m/s] (ϑ °C-ban). „Éppen hallható” hang = **0 phon**, bármilyen frekvencián.
- Pontforrás, szabad tér: −20lg(r₂/r₁) (dupla távolság −6 dB, tízszeres −20 dB).
- Teljesítményarány ΔL dB-hez: 10^(ΔL/10) (93 → 120 dB: ×501).
- Inkoherens források összege: L = 10lg Σ 10^(Lᵢ/10) (két egyforma: +3 dB; 82+85+85 → 89 dB).
- Phon: 1 kHz-en a phon számértéke = dB SPL. Sone: S = 2^((L_phon − 40)/10), azaz +10 phon = 2× hangosság.
- Sabine: T₆₀ = 0,161·V/A, ahol A = Σαᵢ·Sᵢ [m² Sabin].
- A-súlyozás: a fül 2–4 kHz körül a legérzékenyebb; 100 Hz-en kb. −20 dB.

### TV
- **Y = 0,3R + 0,59G + 0,11B** (a zöld a legvilágosabb, a kék a legsötétebb). Cb = B−Y, Cr = R−Y. **Cb ↔ Cr csere** `[F24]`: fehér/szürke/fekete változatlan (Cb = Cr = 0).
  Általában azok a színek nem változnak, amelyekre R = B (szürkék, zöldek, bíborok). A világosság (Y) nem változik.
- Váltott soros (interlace): 50 félkép/s → nem villog, de csak 25 teljes kép/s sávszélessége kell.

---

## 13. Hibajegyzék és státusz

- A forrásokban (régi md jegyzetek, hallgatói vizsgamegoldások, 5-ösöm, ALL-IN) talált hibák: **`03_Hibajegyzek.md`**.
- A feldolgozott és a még fel nem dolgozott források listája: **`00_STATUSZ.md`**.
