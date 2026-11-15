---
title: "Marosi Gyula infokomm gyakorlatai (2016 tavasz) – diák és kézírásos órai jegyzet átirata"
forras: "ik_p1.pdf (26 oldal), ik_p2.pdf (27 oldal) – szkennelt, szövegréteg nélkül; a PDF-ek csak helyben vannak (.gitignore)"
jeloles: "[bizonytalan: …] = nem biztosan olvasható, [olvashatatlan] = nem olvasható, (HF) = a táblán házi feladatnak jelölve, »saját megjegyzés« = átírói ellenőrzés"
---

# Marosi Gyula gyakorlatai (2016) – átirat

Szerkezet: minden gyakorlat elején a diák (feladatszövegek), utána a kézzel írt órai megoldás. A jegyzet saját oldalszáma `ik.N` (a lap alján bekarikázva). Az azonosítók: `mg<gyakorlat>_<feladat>` (pl. `mg2_3`).

---

## 0. gyakorlat (2016.02.18.) – Jelek leírása  ·  ik.1–ik.3

**Dia: definíciók.** Egyenszint A_x = lim 1/(t₂−t₁)·∫x(t)dt; átlagteljesítmény P_x = lim 1/(t₂−t₁)·∫x²(t)dt; effektív érték √P_x; csúcstényező K/√P_x (ha A_x = 0, K a jel korlátja = abszolútérték-maximum); Fourier-transzformált és inverze.

**Jegyzet (ik.1):** determinisztikus jel (függvénnyel leírható, mérésre használjuk) vs. sztochasztikus folyamat (nem írható le formulával, de vannak nem véletlenszerű paraméterei = statisztikai jellemzők: egyenszint, átlagteljesítmény, effektív érték (RMS), csúcstényező (crest factor), Fourier-transzformáció).

- `mg0_1` Szinusz x(t) = A·cos(2πf₀t + φ₀) = A·(e^{jx} + e^{−jx})/2, spektrum: A/2 vonalak ±f₀-nál. A_x = 0, P_x = A²/2 (HF: levezetni), RMS = A/√2.
- `mg0_2` (ik.2) Csúcstényező: négyszög c = A/√A² = 1, szinusz c = A/√(A²/2) = √2. (HF: háromszögjelre √3.)
- `mg0_3` Két szinusz összege: c = 2A/√(A²/2 + A²/2) = 2 („legfeljebb ennyi lehet”).
- `mg0_4` c_x₁ = 3A/√(3·A²/2) = √6; c_x₂ ≈ 1,83 (HF: kiszámolni x₂(t) szélsőérték-helyeit). »Az 1,83 csak felső korlát (√(10/3)), a tényleges érték numerikusan ≈ 1,79, lásd `05` gyak00.«
- `mg0_5` Mérőműszerek: 4 V_pp, +3 V offszetű, 1 kHz-es jel, feszültségmérő és oszcilloszkóp. Átlagteljesítmény (szinusznál a jegyzetben): ½·5² + ½·1² = 13 [bizonytalan: a számítás a négyszögre vonatkozik, 3² + 2² = 13].

  | | négyszög | szinusz | háromszög | |
  |---|---|---|---|---|
  | feszültségmérő V_DC | +3 V | +3 V | +3 V | |
  | feszültségmérő V_AC (DC nélkül, effektív) | +2 V | +2/√2 = √2 ≈ 1,41 V | +1,155 V (HF) | |
  | oszcilloszkóp Average | +3 V | +3 V | +3 V | |
  | oszcilloszkóp Amplitude | +4 V | +4 V | +4 V | »itt a csúcstól csúcsig értéket méri« |
  | oszcilloszkóp RMS | √13 = √(3² + 2²) ≈ 3,606 V (egyen + váltó komponens) | +3,317 V (HF) | +3,215 V (HF) | |

  »Ellenőrizve: √(9+2) = 3,317; √(9 + 4/3) = 3,215; 2/√3 = 1,155.«

**ik.3**
- `mg0_6` Ideális aluláteresztő, lin-lin és log-log ábrázolás. a) H(f) = 1·e^{−j2πfT} (|f| < B), különben 0; T a szűrő késleltetése (fázismenet). h(t) = ∫H(f)e^{j2πft}df = … = 2B·sin(2πB(t−T))/(2πB(t−T)). b) (HF) elsőfokú szűrő.
- `mg0_7` **Decibel:** mindig teljesítményviszonyra értelmezzük, 10·lg(P₂/P₁). lg2 ≈ 0,3. Táblázat: 2 → 3 dB, 8 → 9 dB, 10 → 10 dB, 100 → 20 dB, 5 → 7 dB, 800 → 29 dB, 4·10¹² → 126 dB. Láncban: ×10 = +10 dB, :2 = −3 dB.

---

## 2. gyakorlat (2016.02.25.) – Mintavételezés, kvantálás  ·  ik.4–ik.5

**Diák:** A/D–D/A lánc (folytonos/diszkrét idő és érték), jelek visszaállítása egyenközű mintákból (x̂(t) = T·Σx_k·h(t−kT), X̂(f) = H(f)·ΣX(f−kf_s)), jellegzetes hibák: aliasing, szivárgás, lineáris torzítás, kvantálási zaj. Előadásról: P_kvant.zaj = (Δ²/12)·(2B/f_s), S/N = (3/c²)·2^{2n}·(f_s/2B).

Feladatok a diákon:
1. Aliasing és szivárgás: f_s = 8000 Hz, H_A/D = H_D/A = 1 (|f| ≤ 3 kHz), 2,5 − |f|/2 (3–5 kHz), 0,01 (5–10 kHz), 0 különben. a) IN: 2 V, 1 kHz szinusz. b) IN: 2 V, 4,5 kHz.
2. A mintavételi frekvencia megválasztása (50 Ω, 0–3 és 7–8 kHz, 0,2 mW): SSF negatív frekvenciákon, SSF értéke, f_s.
3. A kvantálási zaj spektrális viselkedése: s_x(f) = 6·s₀·(1 − |f|/12), ha 8 < |f| < 10 [kHz], különben 0. a) minimális f_s aluláteresztő visszaállítással, b) tetszőleges szűrővel, c) azonos átalakítókkal melyik SNR jobb, d) (a) sűrűségű mintákból (b) szűrővel.
4. Nem alapsávi jel mintavételezése (19–25 kHz), túlmintavételezés.
5. Gyakorló feladat: 8 kHz-es HF zene, 20 kHz-es mintavétel, 4 kHz-es kimenő LP vs. 4 kHz-es LP-k és 10 kHz.
6. Mire számíthatunk, ha a kódszó hosszát 1 bittel csökkentjük?

**Jegyzet (ik.4, 11.25):** Digitalizálás: 1. mintavételezés, 2. kvantálás, 3. kódolás (a: forráskódolás = redundanciacsökkentő, b: hibatűrő/hibakorlátozó, c: titkosító). Spektrum = a jel teljesítményének frekvenciatartománybeli leírása.
- `mg2_1a` Spektrumrajz: 1 kHz 2 V; 7 kHz 20 mV; 9 kHz 20 mV (a 15, 17 kHz-es komponenseket a szűrő levágja).
- `mg2_1b` 4,5 kHz-es bemenet: a bemenő szűrő után 0,5 V; a kimeneten 4,5 kHz 0,125 V, **3,5 kHz 0,375 V** (alias).
- Kvantálás: S/N = (3/c²)·2^{2n}·f_s/2B (c csúcstényező, n bitszám, B a D/A utáni szűrő sávszélessége); S/N_dB = 1,76 + 2n·10·lg2 + 0 = 1,76 + 6,02n.

**ik.5**
- `mg2_2` a) SSF rajz (páros); b) s₀·8 kHz/50 Ω = 0,2 mW → s₀ = 1,25·10⁻⁶ V²/Hz; c) f_s > 16 kHz → elég aluláteresztő a D/A után; 11 kHz < f_s < 14 kHz → sáváteresztő kell. (Megjegyzés a jegyzetben: „A floppy az a pörgős pendrive.”)
- `mg2_3` (s₀ csúcs 6s₀, 8–10 kHz sáv): a) f_s > 20 kHz; b) f_s,min = 4 kHz (sávszűrővel); c) S/N = (3/c²)·2^{2n}·f_s/2B: (a) 20 kHz / 2·10 kHz, (b) 4 kHz / 2·2 kHz → **ugyanannyi**; d) ekkor nő az S/N (ötszörösére) → ez az oversampling.
  »Ellenőrizve: BPF k = ⌊10/2⌋ = 5: 20/5 = 4 ≤ f_s ≤ 16/4 = 4 → 4 kHz; 20/(2·2) = 5×. Ez a `pd02_4` / `kg02_4` feladat más számokkal (ott 7B–10B).«

---

## 4. gyakorlat (2016.03.10. körül) – Rádióösszeköttetés  ·  (diák)

Feladatok a diákon:
1. 10 km, 450 MHz, szabadtéri csillapítás, 20 + 20 dB, 1 W, 50 Ω → vett feszültség.
2. Kétutas terjedés: hogyan függ a térerősség a távolságtól és a vevőantenna magasságától?
3. Kétutas példa #1: 10 km, adóantenna 20 m, vevő 10 m, 10–10 dB; a vevőantenna magasságának változtatása csökkenti a vett teljesítményt → üzemi hullámhossz, szakaszcsillapítás. |E₂| = 2|E₁|·|sin(π·2h_Th_R/(rλ))|.
4. Kétutas példa #2: **900 MHz**, 3 km, a vett teljesítmény 10 és 90 nW között változik a vevőantenna magasságától függően, **5 m-es** periodicitással → magyarázat, földreflexiós tényező, adóantenna magassága. E₂ = E₁ + Γ_f·E₁·e^{−j2πΔ/λ}, Δ = 2h_Th_R/r.
5. µhold: 12 GHz-es műsorsugárzás, parabolaantenna átmérője **1,125 m**, A_h = G·λ²/4π. a) nyereség, b) irányítási pontosság szinkronpályán, c) a műholdas adóantenna nyeresége 2000 km átmérőjű lefedéshez.

**Jegyzet (ik.6, III.3.)**
- `mg4_1` Szakaszcsillapítás a_sz = P_T/P_R. A nyereség az izotróp antennához (minden irányba egyforma erősséggel sugároz) képest értendő. Teljesítménysűrűség r távolságban P_T/(4r²π)·G_T, vett teljesítmény ·A_R, ahol G_R = A_R·4π/λ² (hatásos felület), λ = c/f.
  a_sz = (4πr/λ)²·1/(G_T·G_R); (2·10⁴·π·3)² ≈ 4·10¹⁰·… ≈ 106 dB [bizonytalan: a jegyzetben „(2·10⁴·π·3)² = 4·10¹⁰” áll, a helyes 4πr/λ = 4π·10⁴·1,5 = 1,885·10⁵ → 105,5 dB]. a_sz ≈ 106 − 20 − 20 = 66 dB → P_R ≈ 282 nW; P = U²/R → U = √(PR) ≈ 3,75 mV.
- `mg4_2` a_kétutas = a_egyutas/|E₂/E₁|² ≈ r⁴/(h_Th_R)²·1/(G_TG_R).
- `mg4_3` (20 m és 10 m, 10 km, 10 + 10 dB) π·2h_Th_R/(rλ) = π/2 + kπ, k = 0 → λ = 4h_Th_R/r = 8 cm → f = 3,75 GHz. a_sz2 = a_sz1·(½)² = (½)²·(4rπ/λ)²·1/G_T·1/G_R ≈ 124 dB − 6 dB − 2·10 dB = **98 dB**.

**ik.7**
- `mg4_4` |E₂/E₁| max = 1 − Γ, min = 1 + Γ (Γ < 0). 90 nW/10 nW = ((1−Γ)/(1+Γ))² → 3(1+Γ) = 1 − Γ → **Γ = −½** (földreflexiós tényező). h_T = 100 m (HF: kiszámolni). »Ellenőrizve: 900 MHz → λ = 1/3 m; a h_R-periódus 5 m = rλ/(2h_T) → h_T = 3000·(1/3)/10 = 100 m. A Koma-változat (`kg04_3`) 450 MHz-cel 200 m-t ad.«
- `mg4_5` Egyutas terjedés a műhold és a Föld között. a) A_R = G_R·λ²/4π, λ = 2,5 cm, A_R = (d/2)²π, d = 1,125 m → **G_R ≈ 43 dB**. b) G = 4R²π/(x²π) = 4/tg²(α/2), ahol x = R·tg(α/2) a folt sugara → **α = 1,62°** (teljes nyílásszög). c) a műholdas adóantenna nyeresége ≈ **31 dB** [a jegyzetben]. »Ellenőrzés: 2000 km **átmérőjű** foltra tg(α/2) = 1000/35 786 → G = 4/tg² ≈ 5123 = **37,1 dB**. A jegyzet 31 dB-je akkor jön ki, ha a 2000 km-t sugárnak veszik. A dia szerint átmérő, ezért a helyes 37,1 dB (egyezik a `kg04_4` c) eredményével). Az a) részre (π·d/λ)² = (π·45)² = 19 986 → 43,0 dB ✓, a b) részre 2·arctg(2/√G) = 1,62° ✓.«

---

## 4. gyakorlat (forráskódolás) – Kódolás  ·  ik.8–ik.10 (III.10.)

**Diák:** Mintavételezett és kvantált jelek veszteségmentes forráskódolása: egyértelmű megfejthetőség, állandó vs. változó szóhossz, folyamatos olvashatóság, entrópia H = Σpᵢ·ld(1/pᵢ), H ≤ L < 1 + H, átlagos kódszóhossz, szimbólumcsoportok kódolása.
1. Lehet-e egyértelműen megfejthető bináris kód a 2,3,3,3,3,4,4,4,5,5 hosszakkal? 2. Mekkora a forrás entrópiája, ha éppen egyenlő az átlagos szóhosszal?
3. Diszkrét memóriamentes forrás, A–F szimbólumok, 20 000 szimbólum/s, valószínűségek 40, 25, 12, 10, 8 (és 5) %. a) Shannon-kód, b) Huffman-kód; bit/s; mennyire közelíti az alsó határt.
4. Más kódja: A = 01, B = 10, C = 011, D = 1011, p = 50, 25, 15, 10 %. a) egyértelmű? b) lehet-e ilyen hosszakkal prefixmentes kód? c) várható kódszóhossz, d) eltérés az alsó határtól (%).
5. Hibajavítás lineáris kóddal: G = [1000 0011; 0100 0110; 0011 0101; 0001 1001] (azaz (8,4) kód). a) szisztematikus? b) hány hibát jelez/javít? c) paritásellenőrző mátrix, d) kódszó u = 0110-hoz, e) javítás, ha az első bit meghibásodik.
Emlékeztető dia: c = u·G, s = H·vᵀ = H·eᵀ; szisztematikus C(n,k) kódra G = (I_k, P), H = (−Pᵀ, I_{n−k}).
Lineáris kód, példa #2: c₁ = 00000, c₂ = 01110, c₃ = 10100, c₄ = 11010 → G, egyhibás szindrómák, lehet-e egy kódszó módosításával minden egyhibát javító lineáris kód.
Példa #3: lineáris szisztematikus blokk-kód, n = 496, k = 480: szindróma elemszáma, paritáselemek száma, javíthat-e minden egyhibás / kéthibás mintát, melyik elemet kell javítani, ha s = [0100 0000 0000 0000].

**Jegyzet (ik.8)**
- Információtartalom: k-adik szimbólum p_k → log₂(1/p_k) [bit]; független k és i együtt p_k·p_i → log₂(1/(p_k p_i)) = log₂(1/p_k) + log₂(1/p_i). p_i·N az i várható száma, Σp_i·N·ld(1/p_i) az összes információtartalom; H = Σp_i·ld(1/p_i) [bit/szimbólum] egy szimbólum átlagos információtartalma; λ = Σp_i·l_i az átlagos kódszóhossz.
- Σ2^{−l_i} < 1 vagy = 1 → lehet, hogy egyértelműen megfejthető; > 1 → biztos, hogy nem.
- `mg4k_1` ¼ + 4·⅛ + 3·1/16 + 2·1/32 = 1 → lehetséges.
- `mg4k_2` H = Σp_i·ld(1/p_i) = Σp_i·l_i = λ = 49 [bizonytalan: 49/16] bit/szimbólum; egy megoldás: minden i-re ld(1/p_i) = l_i → p_i = 2^{−l_i} (HF: befejezni, levezetni).

**ik.9**
- `mg4k_3` Huffman-kód (A 40, B 25, C 12, D 10, E 8, F 5 %): A = 1, B = 01, C = 0011, D = 0010, E = 0001, F = 0000. Átlagos kódszóhossz 0,4·1 + 0,25·2 + 0,35·4 = **2,3 bit/szimbólum** → 46 kbps; H = 2,2356 bit/szimbólum → elméletileg 44,7 kbps.
- `mg4k_4` a) 011|011 = C C = A D → nem egyértelműen dekódolható; b) 2⁻² + 2⁻² + 2⁻³ + 2⁻⁴ = 11/16 < 1 → létezhet: A = 00, B = 10, C = 110, D = 0100; c) **2,35 bit/szimbólum**; d) **34,8%** (HF: levezetni). »Ez a gyakorlatvezető saját megoldása, és megerősíti a `03` E1 javítását: a hivatalos füzetek 2,05-je elírás.«
- Hibatűrő kódolás C(k,n). `mg4k_5` a) nem szisztematikus, mert G nem egységmátrixszal kezdődik; C(4,8) kód.

**ik.10**
- b) detektálható t_min − 1, javítható ⌊(t_min − 1)/2⌋ (t_min = minimális kódtávolság). A 16 kódszó táblázata; t_min = 3 → 2 hibát jelez, 1-et javít.
- c) H = (−Pᵀ, I) = [0011 1000; 0110 0100; 1100 0010; 1001 0001].
- d) c = 0110 1010 (az eleje az u). e) v = 1110 1010, s = H·v = 0011 → biztos, hogy hiba történt; s = H(c + e) = H·e → e = 1000 0000.

---

## 6. gyakorlat (2016.03.17.) – Analóg moduláció  ·  ik.11–ik.15

**Jegyzet (ik.11):** a moduláció frekvenciatartománybeli eltolás. Hírközlés általános modellje: információforrás → átalakító → adó → hírközlő csatorna → vevő → átalakító → információnyelő. Adó: erősít, modulál, szűr; vevő: szűr, erősít, demodulál. A moduláció céljai: frekvenciakiosztás, könnyebb kisugározhatóság, eszközök korlátainak leküzdése, nyalábolás, zaj- és interferencia-elnyomás.
s_t = A_t·cos(2πF_t t + φ_t) modulált jel, A·cos(2πFt + φ₀) vivőjel, x_t moduláló jel. AM: A_t ~ x_t, F_t és φ_t konstans. AM-DSB: s_t = (U₀ + x_t)·cos(2πFt + φ₀). Demoduláció: (x_t·cos2πFt)·cos2πFt = ½x_t + ½x_t·cos4πFt → koherens vivős szorzó demoduláció (ugyanaz a frekvencia és fázis), a 2F-es tag kiszűrhető. Ha U₀ ≠ 0, a vivőből a vivőjel kinyerhető.

**ik.12**
- AM-DSB/SC: elnyomott vivőjű (U₀ = 0). AM-VSB: csonka oldalsáv (a vivő megmarad, kisebb az átviendő sávszélesség).
- `mg6_1` B sávszélességű jel: AM-DSB 2B, DSB/SC 2B, SSB B, VSB B és 2B között.
- `mg6_2` 50%-os és 150%-os szinuszos AM-DSB: m = max|x_t|/U₀ (modulációs index); burkolódetektor kimenete |U₀ + x_t|, ez = U₀ + x_t ⟺ m ≤ 1 (100%) → ekkor használható burkolódetektor. P_hasznos/P_össz = (A/U)²/((A/U)² + 2) = m²/(m² + 2) (2 = c², csúcstényező²). 50%: **11%**, 150%: **53%**.

**ik.13**
- `mg6_3` x(t) = 0,1·sin(2πf₁t) + 0,5·cos(2πf₂t), s_AM = A(1 + x(t))cos(2πFt), f₁ = 1 kHz, f₂ = 2 kHz, F = 800 kHz, A = 100 V. a) max|x(t)| = 0,6 → m = 60%. b) 50 Ω-on: 798, 799, 800, 801, 802 kHz: 6,25 / 0,25 / 100 / 0,25 / 6,25 W (100²/2/50 = 100 W; (0,1·100/2)²/2/50 = 0,25 W); P_hasznos = 13 W. »Egyezik `pd05_2`-vel.«
- `mg6_4` AM-SSB előállítása, F = 100 kHz, b = 300 Hz, B = 3400 Hz. 1. ötlet: 100 kHz-es cos-szal szorzás és szűrés (99,7 és 100,3 kHz között kellene vágni) → elvileg jó, de túl nagy lenne a szűrő meredeksége. 2. ötlet: (1) 20 kHz-es eltolás, (2) szűrés (19,7/20,3 kHz), (3) 80 kHz-es eltolás, (4) szűrés.

**ik.14**
- 3. ötlet (fázistolós): x_t = cos(2πft) → s_t = cos(2π(F ± f)t) = cos2πFt·cos2πft ∓ sin2πFt·sin2πft (USB/LSB).
- Frekvenciamoduláció: s_FM/PM = U₀·cos(2πFt + φ₀ + µ_t), µ_t ~ x_t (PM) vagy ~∫x_t dt (FM). f_p = (1/2π)·dΦ/dt. Frekvencialöket f_D = (1/2π)·max|µ̇_t|, fázislöket Φ_D = max|µ_t|. Szögmodulációnál a modulált jel sávszélessége elvileg végtelen.
- `mg6_5` táblázat, x = A·cos2πft: PM: µ = cA·cos2πft, µ̇ = −cA·2πf·sin2πft, Φ_D = cA, f_D = cA·f. FM: µ = c·A/(2πf)·sin2πft, µ̇ = cA·cos2πft, Φ_D = cA/(2πf), f_D = cA/2π. A modulált jelek amplitúdója és teljesítménye sosem változik!
- `mg6_6` 10 MHz-es vivő, f_m = 20 kHz szinuszos, m_f = 3,4 (= Φ_D). a) Bessel: B = 2·α·f_m, α = 1 + √m_f + m_f → **B ≈ 250 kHz**. NBFM (m_f < 0,1, kisebb sávszélesség kell), WBFM (m_f > 10, kevésbé zajérzékeny).

**ik.15**
- `mg6_6 b)` Carson: B = 2(f_D + B_m) ≈ **176 kHz** → ez nagyon durva becslés. »Ellenőrizve: f_D = 3,4·20 = 68 kHz → 2·88 = 176 kHz; Bessel 2·20·6,244 = 249,8 kHz.«
- `mg6_7` F₁ vivőjű, kislöketű (Φ₁₀) fázismodulátorral F₂-es, nagylöketű (Φ₂₀) FM jel előállítása. PM: F₁ = 100 kHz, Φ₁₀ ≤ 0,1 rad; FM: F₂ = 64 MHz, Φ₂₀ = 6,28 rad. (1) integráló tagon (kondenzátor) átengedve FM jelet kapunk; (2) 6 frekvenciaduplázón átengedve (×64) a fázislöket 6,4 rad lenne, ezért előtte Φ₁₀ = 6,28/64 rad, így tényleg 6,28 rad lesz, F pedig 6,4 MHz; (3) AM-SSB_USB modulálás 57,6 MHz-cel → 64 MHz.
- `mg6_8` Fázistolós szorzó demodulátor: cos(2πFt + φ₀ + µ_t)·cos(2πFt + φ₀ + µ_{t−T} − ψ) → LP után ½cos(µ_t − µ_{t−T} + ψ), ψ = 90° → ½sin(µ_t − µ_{t−T}) ≈ ½(µ_t − µ_{t−T}) (T kicsi) = ½T·µ̇_t = ½T·x_t → maga a moduláló jel (FM miatt). »Egyezik `pd05_5`, `tg04_P46`.«

---

## 7. gyakorlat (2016.03.31.) – Digitális alapsávi átvitel (PAM)  ·  ik.16–ik.18

**Diák:** PAM blokkvázlat (Dirac-impulzus generátor → adószűrő–csatorna–vevőszűrő H_Cs(f) → mintavevő → döntő). Feladatok: 1. ideális NRZ elemi jel, {1,0,1,1,0} jelalak, szemábra; 2. ha a fel- és lefutás, valamint a csúcson maradás T/2-re torzul; 3. trapéz alakú H_Cs(f): milyen jelzési sebességnél ISI-mentes (Nyquist: ΣH_Cs(f − k/T) = const); 4. (hf) háromszögspektrum M(f) = (1/B)(1 − |f|/B), m(t) = (sin(πBt)/(πBt))²; 5. hibavalószínűség: d_k = ±1,2 V, σ_N = 0,3 V, H_A = H_V = √(2(1 − |fT|)), Pe = Φ(−|d_k|/σ_N), 4 és 8 szintre is; 6. az ISI romboló hatása (m₀ = 0,99, m±1 = ±0,1); ISI kompenzálása háromegyütthatós FIR-szűrővel; (hf) m₀ = 1, m₊₁ = −0,15, m₋₁ = 0,1; mely tényezők rontják a döntés biztonságát (zaj, ISI és rossz mintavételi pozíció, a főminta eltérése a várttól = laperősítésbeli bizonytalanság).

**Jegyzet (ik.16, III.31.)**
- Illesztett szűrős struktúra: az adószűrő és a vevőszűrő egymás komplex konjugáltjai.
- `mg7_1` a) h(t) = h₀ a (0, T) szakaszon; b) s(t) = Σd_k·h(t − kT), d_k ∈ {±1}, a 1 0 1 1 0 jelalak; c) a jel állandósult szakaszait T periódusidővel egymásra rajzoljuk → szemábra, itt nincs szimbólumközti áthallás.
- `mg7_2` Trapéz elemi jel (felfutás T/2-ig, lapos T-ig, lefutás 3T/2-ig): van ISI; a szemábrán a szem közepén (¾T körül) nincs ISI, itt a legjobb a zajtűrés, itt kell mintavételezni.

**ik.17**
- `mg7_3` H(f) = H_A·H_Cs·H_V (a 3 csatorna kaszkádjának átvitele = az elemi jel spektruma). f₀ + i/T = −f₀ + j/T → 2f₀ = (j − i)/T → **T = k·1/(2f₀)** (k pozitív egész), 1/T a szimbólumsebesség.
- `mg7_4` Háromszögjel = négyszögjel önmagával vett konvolúciója, m(t) = (sin(πBt)/(πBt))², sin(πBT) = 0 → T = k/B, 1/T = B/k (így is kijött).
- `mg7_5` H(f) = H_A·H_V = 2(1 − |fT|), ha |f| ≤ 1/T; 1/T-vel eltolgatva konstanst kapunk → Nyquist-kritériumnak megfelel. H_V(f) = H_A*(f) → illesztett szűrős struktúra (matched filtering) → ekkor lesz a legjobb a zaj szempontjából (Wiener-szűrési feladat).

**ik.18**
- `mg7_5` folyt. PAM-L: 2·(L−1)/L·Φ(−h₀/σ), h₀ = 1,2 V, σ = 0,3 V → **3,2·10⁻⁵**, ha L = 2.
- `mg7_6` s_k = d_k·100% az ideális eset; s̃_k = −0,1·d_{k−1} + 0,99·d_k + 0,1·d_{k+1}. Legrosszabb esetben d_k = 1, d_{k−1} = 1, d_{k+1} = −1 → 0,79 (PAM-2); L = 4: d_k = 1, d_{k−1} = +3, d_{k+1} = −3 → 0,39 (PAM-4); PAM-8: −0,7 + 0,99 − 0,7 < 0 (ha nincs zaj, már akkor is hibás az olvasás!). »Egyezik `tg05_P55`, `kg07_4`.«

---

## 8. gyakorlat (2016.04.07.) – Digitális vivős moduláció  ·  ik.19–ik.20 (és p2 eleje)

**Diák:** 1. elemi jelalakok bináris ASK, PSK és FSK jelhez, a d_k = {1,0,1,1,0} jelszakaszok; OOK és BPSK relációja; lehetne PAM + AM-xSB? Digitális modulációs eljárások áttekintése (moduláció, demoduláció, spektrum, zajérzékenység és bithibaarány, alkalmazás). 3. QAM blokkvázlat és szorzatazonosságok. QPSK: 4QAM kétdimenziós szemábrája, s_QAM = x_k·cos(2πFt) + y_k·sin(2πFt) = √(x² + y²)·cos(2πFt − arctan(y/x)); Φ fokos demodulátor-fázishiba: x' = x·cosΦ − y·sinΦ, y' = x·sinΦ + y·cosΦ. 4. 16QAM erősítés- és fázishiba-tűrése. QAM jelek teljesítményigénye (16/64QAM takarékosabban, a ponttávolság csökkentése nélkül). 5. Doppler: F = 900 MHz, gyalogos **v = 1 m/s**, autó v = 30 m/s; szögelfordulás időrésenként f = 100 kBaud-os QAM-nál.

**Jegyzet (ik.19, IV.7.)**
- `mg8_1a` ASK (OOK): s₁(t) amplitúdó ±2, s₀(t) = 0; 1/T jelzési sebesség, F_v vivőfrekvencia; d_k = {±1} → {+2, 0}. A 1 0 1 1 0 OOK-jel; demodulálás koherens vivős szorzó demodulátorral.
- `mg8_1b` PSK: s₁ = 1·cos(2πFt + 0°), s₀ = +180°; a demodulált jel ±½. DBPSK: a 0-nál van fázisváltás (az előzőhöz képest) → könnyebb demodulálni.

**ik.20**
- `mg8_1c` FSK: f_v = (f₁ + f₀)/2 vivőfrekvencia, f_D = |f₁ − f₀|/2 löket; MSK (minimum shift keying): f_D = ¼·1/T. Két szűrővel lehet demodulálni (az egyik az egyik frekvenciát engedi át, a másik a másikat).
- `mg8_1d` OOK és BPSK: BPSK jelteljesítmények 1²/2 és (−1)²/2 → P_átl,BPSK = ½; OOK 2²/2 és 0²/2 → P_átl,OOK = 1. Ugyanakkora zajtolerancia mellett az OOK-hoz kétszer akkora teljesítmény kell.
- `mg8_2` F_v = 1200 Hz (adó) és 2400 Hz (vevő), 1/T = 600 Baud: BPSK/DBPSK 600 bps, (D)QPSK 1200 bps.
- `mg8_3` QAM: x_k, y_k ∈ {±1} helyett {±1, ±3} → 16 pont, konstellációs diagram, döntési küszöbök; amplitúdó- és fázismoduláció.

**ik.21** (ik_p2 2. oldal; az ik_p2 1. oldala az ik.20 ismételt szkennelése, már fel van dolgozva)
- `mg8_4` 16QAM erősítéshiba: 2/3 < ΔA < 2 (a kétszeres már önmagában gondot okoz). Fázishiba: |Δφ| < 45°; < arctg(1/3) ≈ 18,43°; < arcsin(2/√10) − arctg(1/3) ≈ 20,8°; < 45° − arcsin(2/√18) ≈ **16,87° (ez a domináns)**. Bármilyen frekvenciahiba gondot okoz!
- `mg8_5` Doppler: F' = F ± v/λ = F ± F·v/c = F(1 ± v/c) → ±3 Hz (v = 1 m/s), ±90 Hz (v = 30 m/s).

---

## 9. gyakorlat (2016.04.14.) – Hallás és látás  ·  ik.22–ik.23

**Diák („1. gyakorlat” fejléccel):** 1. Fletcher-görbék: milyen kvantitatív és kvalitatív jellemzők olvashatók le, hogyan készíthetnénk ilyet. 2. Phon-ban mekkora annak az 1 kHz-es szinuszos hangnak a hangossága, amelynek **intenzitása** a hallásküszöbhöz tartozó intenzitás 100-szorosa? Milyen szubjektív érzetet kelt? (I = p²/(ρc), 10·lg(I/10⁻¹²) = 20·lg(p/20 µPa) dB). 3. Loudness: a fiziológiai hangerőszabályzás célja, miért kell, gyakorlati problémák. A 2007. őszi ZH-feladat (10 kHz 15 dB [a dián 15 dB, a többi forrásban 10 dB], 1 kHz 30 dB, 100 Hz 0 dB). 4. A látásunk: a kínai Nagy Fal látható-e a Holdról; legalább milyen átmérőjű objektum látszik 385 ezer km-ről (a szem felbontóképessége fényességre 2', színre 10'). 5. TV sorok: 51 cm-es képátlójú TV-t milyen távolságról nézzünk, hogy a képernyő rövidebbik oldalát 10° alatt lássuk; pixelszám 4:3-nál 20°-os nézésnél. 6. RGB → szürkeskála konverzió; ha csak G-t vesszük; milyen jelenségekre számíthatunk. CIE relatív láthatósági függvény. RGB metamer színérzet. 7. Színkülönbségi jelek: miért elég a háromból kettő, melyik kettő, értéktartományok. 8. Yuv: R, G, B a [0,205; 0,145; 0,259] Yuv-vektorhoz, u = (B−Y)/2,03, v = (R−Y)/1,14; fényesség, telítettség, színezet. RGB additív színkeverés. A 2007. őszi ZH: Y, C_B, C_R kábelcsere (menyasszony). 9. XYZ és xy: R−Y = 0,35, B−Y = −0,15, Y = 45%.

**Jegyzet (ik.22, IV.14.)**
- `mg9_3a` A hallásunkból adódó különböző frekvenciájú jelekhez tartozó hallásküszöböt kompenzálni (loudness).
- `mg9_2` a) SPL = 10·lg(I/I₀) = 10·lg(100) = **20 dB = 20 phon**, mivel 1 kHz-es a jel. b) halk (~40 dB a normál beszéd). »A dián intenzitás szerepel (×100 → 20 dB). Az `F25` változatában hangnyomás (×100 → 40 dB), mindkettő helyes a saját adataival.«
- `mg9_zh` 2007. őszi ZH: a) mivel éppen hallható, 0 phon; b) 30 phon, mivel 1 kHz-es; c) a hallásküszöb alatt van; d) a hangszóró karakterisztikája nem egységnyi.
- `mg9_6` a) fényességérzet Y = 0,3R + 0,59G + 0,11B (luminancia); b) Y = G → azok a színek, amelyekben nincs zöld, mind feketék lesznek.
- `mg9_7` 0 = 0,3(R−Y) + 0,59(G−Y) + 0,11(B−Y) = C_R + C_G + C_B súlyozott összege → ezek közül 2 és az Y elég (így teljesül a kompatibilitási feltétel is). Hagyjuk el C_G-t: (G−Y) = −(0,3/0,59)(R−Y) − (0,11/0,59)(B−Y) [a jegyzetben az előjelek és az első tag pontatlanul szerepelnek], az együtthatók ≈ ½ és ≈ 1/6 → a zajteljesítmény csökken.

**ik.23**
- `mg9_8` a) B = 2,03u + Y = 0,5; R = 1,14v + Y = 0,5; G = 0. b) Y = 0,205 → fényesség 20,5%; színezet: kék + piros = bíbor; telítettség S = 1 − min{R,G,B}/Y = 1 = 100%. »Ellenőrizve: B = 2,03·0,145 + 0,205 = 0,499; R = 1,14·0,259 + 0,205 = 0,500; G = (0,205 − 0,15 − 0,055)/0,59 = 0.«
- `mg9_zh2` 2007. őszi ZH (kábelcsere): a) fehér: R = G = B, Y = R = G = B, C_R = C_B = 0 → semmi nem történik. b) minden szürke és ahol C_R = C_B → R = B (rajz: a G–(R=B) síkon a fekete–fehér átló, a zöld és a bíbor (Mg) sarkok).

---

## 12. gyakorlat (2016.04.21.) – Műsorszórás  ·  ik.24–ik.25

**Diák:** 1. Kossuth Rádió tükörfrekvenciája (F = 540 kHz, f_KF = 455 kHz, felső keverés), szupervevő blokkvázlat (RF, keverő, KF, demodulátor, HF). 2. 87,5–108 MHz, 10,7 MHz-es KF: oszcillátorsáv, Petőfi Rádió (94,8 MHz), tükör, miért jó a 10,7 MHz. 3. FM-sztereó: Sláger Rádió jele (időfüggvény, spektrum), amikor Voga János „A” hangot fütyül a bal mikrofonba; mit hall a mono hallgató; M/S mátrix. 4. Frekvenciakiosztás: hány FM-adó élhet Budapesten az URH-sávban (f_m = 50 Hz–15 kHz, f_D = 75 kHz, URH/CCIR 87,5–108 MHz; adólista 93,6–99,5 MHz). 5. A TV-sorok száma: miért páratlan mindenhol? 6. A TV-jel: üres FeFe sakktábla, 50%-os szürke, sárga [1 1 0], sárga–encián; a FeFe TV-jel ábrája (fehér Y = 1, fekete Y = 0, szinkron, 12 µs, 64 µs, utóváll, előváll). Teletext: 500 oldal, félképenként 10 sor.

**Jegyzet (ik.24, IV.21.)**
- `mg12_1` Felső keverés: F₀ = F₁ + F_KF, a tüköradó F₂ = F₀ + F_KF. F₁ = 540 kHz, F_KF = 455 kHz → F₀ = **995 kHz**, F₂ = **1450 kHz**.
- `mg12_2` F₀ = 98,2…118,7 MHz-en kell hangolhatóvá tenni az oszcillátort; a tükörfrekvenciás sáv 108,9…129,4 MHz → ebben a sávban már nincs adó → ezért jó a 10,7 MHz-es KF.
- `mg12_3` Sztereó adó blokkvázlata: L és R → 15 kHz-es LP → M (összeg) és S (különbség); S·cos(2π·38 kHz·t) (a 19 kHz-es oszcillátor ×2-ből); 19 kHz-es pilot; ×3 → 57 kHz DBPSK RDS; összegzés → FM → erősítő → antenna.

**ik.25**
- a) Spektrum: M 0–15 kHz, pilot 19 kHz, S' 23–53 kHz (38 kHz körül), RDS (DBPSK) 57 kHz, a jel ~60 kHz-ig. Komponensek: 440 Hz, 19 000 Hz, 37 560 Hz, 38 440 Hz + RDS. B ≈ 60 kHz → FM → ~200 kHz széles sáv 100,5 MHz körül [bizonytalan: 200 kHz].
- b) A mono hallgató a 440 Hz-es fütyülést hallja.
- c) Visszaállított csatornák: L* = (M + S)/2, R* = (M − S)/2. Ha elromlott a vevő, és 180°-os fázistolással működik az oszcillátor: S* = −S → felcserélődik a két csatorna.
- `mg12_4` Az URH két sávja: URH/OIRT (keleti) 65,8–73 MHz (már nincs rajta adás) és URH/CCIR (nyugati) 87,5–108 MHz. A továbbított jel sávszélessége B = 2(60 + 75) = 270 ≈ 300 kHz → összesen **68 adó**; de egy adóhelynél 600 kHz a rasztertávolság → egy adóhelyről 34 adó.
- `mg12_5` Európában 625 = 5·5·5·5 → számolni kellett, hány sort töltöttek meg; egyszerűbb volt 4 db 5-ig számláló áramkört építeni. »Megjegyzés (kiegészítés, a jegyzetben nem szerepel): a páratlanság a váltott soros letapogatás miatt kell, így esik a második félkép sorai az első félkép sorai közé.«
- `mg12_6` QAM-jel amplitúdója √(x² + y²) (a krominancia x_t·cos(2πf_csc t) + y_t·sin(2πf_csc t)). Y_sárga = 0,89, Y_encián = 0,7. »Ellenőrizve: 0,3 + 0,59 = 0,89; 0,59 + 0,11 = 0,70.«

---

## 13. gyakorlat (2016.04.28.) – Digitális TV, mobil  ·  ik.26–ik.28

**Diák:** 1. DVB-C: QAM64-gyel hány digitális TV-csatorna fér el a 8 MHz-es raszter egy sávjában (előadásról: 15%-os lekerekítés, RS(204,188)). 2. DVB-T: a DVB-T.HU multiplexenkénti nettó bitsebessége (OFDM 6817 (6048) vivő, T₀ = 896 µs, GI = +¼, QAM64, RS(204,188), FEC-rate = ¾). 3. Single-Frequency Networks: mekkora távolságkülönbségre véd az OFDM (a: DVB-T_HU T₀ = 896 µs, GI = +¼; b: DAB T₀ = 1 ms, GI = 24,6%). 4. Cell(s and )phones: a) hányan telefonálhatnak egyszerre 900 MHz-en egy szolgáltatónál Budapesten; b) és egy cellán belül?

**Jegyzet (ik.26, IV.28.)**
- `mg13_1` QAM64 → 1 szimbólum = 6 bit. 15%-os roll-off: az alapsávi spektrum 1/2T-nél 50%-on metszi → így lesz ISI-mentes. 2·(1/2T)·(1 + 15%) = 8 MHz → 1/T = 8 MHz/1,15 = **6,96 MBaud** → 6·6,96 = 41,74 Mbps (bruttó) → nettó 41,74·188/204 = **38,47 Mbps** → ebben elfér sok adó (1 Mbps, 0,8 Mbps, 5,5 Mbps … az egyes adók bitsebessége).
- `mg13_2` OFDM ↔ interferencia (többutas terjedés miatt, ha több adó sugározza ugyanazt a jelet) → egy szimbólum továbbításának ideje legyen jóval nagyobb (kisebb szimbólumsebesség) → összemegy a sávszélesség → tegyünk egymás mellé sokat! Véd az ISI ellen, de sokkal nehezebb demodulálni. Ha a frekvenciák távolsága 1/T₀ (ortogonális frekvenciák), akkor FFT-vel könnyen szétválaszthatók. A teljes sávszélesség 6817·1/T₀. GI (Guard Interval): az az időintervallum, amit fenntartanak azért, hogy meg tudjon érkezni az összes jel (az egyes szimbólumok között).

**ik.27**
- Doppler-effektusra nagyon érzékeny → sok modulálatlan (pilot) jel van. 6817·1/T₀ = **7,6 MHz** az analóg sávszélesség (1116 Hz-es raszter). Egy szimbólum továbbítása egy vivőn T₀(1 + GI) = 896(1 + ¼) µs. 6048·1/(896(1 + ¼)) = **5,4 Mbaud** → ·6 (QAM64) = 32,4 Mbps → ·188/204·¾ = **22,394 Mbps** (konkatenált kódolás).
- RS: véletlen hiba ellen véd; FEC: burstös hiba ellen (amikor egyszerre sok bit romlik el). »Ellenőrizendő megjegyzés: a DVB-ben a belső konvolúciós kód (FEC) a véletlen hibákat javítja, a külső RS-kód (interleaverrel) a Viterbi-dekóder után maradó csomós hibákat. A jegyzetbeli szerepkiosztás ennek a fordítottja, lásd `03` G3.«
- `mg13_3` Mivel OFDM-et használunk, lehet SFN-t is használni. a) Δl = c·T_GI = **67,2 km** (T_GI = GI·T₀ = 224 µs); b) DAB: Δl = c·T_GI = **73,8 km**. »Ellenőrizve: 3·10⁸·224·10⁻⁶ = 67,2 km; 3·10⁸·246·10⁻⁶ = 73,8 km.«

**ik.28**
- `mg13_4` a) Budapest 525 km², kb. 525 cella → 1 cella/km². A 124 frekvenciasáv elosztása: Telenor, Vodafone, T-Mobile 40 + 40 + 40, Antenna Hungária 4. Uplink 890–915 MHz, downlink 935–960 MHz (200 kHz-es raszter), a közelvégi áthallás miatt van köztük távolság. 525·40·(1/12)·8 = **14 000-en** tudnak maximum egyszerre telefonálni (cellaszám · frekvenciaszám · 1/klaszter · időosztás). FRF: egy cellán belül nem használják az összes sávot, hogy ne legyen interferencia → klaszterekre bontják (12 a klaszterméret). b) 40·(1/12)·8 [≈ 26,7].

---

## „Példák #1” (2016.05.05.) – vizsgafelkészítő sor  ·  ik.28–ik.33

**Diák:** 1. („Jelek”) x = 3·sin(2πft) + 4·cos(2πft): csúcstényező, legnagyobb érték, teljesítmény (ZH-változatok: 2 sin + 2 cos; 3 sin + 3 cos). 1/b. x(t) = 3A·cos(2πf₀t) − 2A·sin(2πf₁t)·sin(2πf₀t): a) egyenszint, ha f₁ = f₀; b) csúcsérték, c) effektív érték, d) csúcstényező, ha f₁ = f₀√2. 2. („Mintavételezés + kvantálás”) előadás felvétele: 4 kHz-es ideális LP, 9 kHz-es mintavétel, 14 bit; a) tökéletes-e, b) ha nem, miért, c) kell-e szűrő, d) ha az utolsó 6 bitet elhagyjuk, e) ha 26 dB-lel hangosabban beszél. 2/b. 8 kHz-es rendszer, 1,5 kHz-es bemenet; ha az amplitúdó > 2 V, a kimeneten 3,5 kHz-es összetevő is megjelenik (4 kHz-es visszaállító szűrő): a) túlvezérlés? b) milyen frekvenciák lehetnek még. 3. („Hibatűrő kódolás”) H = [110100; 101010; 011001]: G, szisztematikus-e, kódszavak, hány hibát jelez/javít, 1 súlyú hibavektorok az 1 db 1-est tartalmazó szindrómákhoz. 4. („Rádiós jelterjedés”) 450 MHz, bázisállomás 50 m, vevő 1,5 m: a) az interferenciazónán belül (Γ = −1) a bázisállomástól milyen távolságra lehet a **legtávolabbi térerősség-minimum** helye; b) hogyan változik, ha Γ = −0,9; c) mekkora ott a szakaszcsillapítás (10 + 3 dB); d) a vevőantenna magasságának változtatásával a max/min teljesítményarány, ha Γ = −1, illetve −0,9; e) 10 km-en, ha dupla magasságból folytatjuk a hívást. 4/b. 3 GHz, kör alakú apertúra, sugara 0,5 m, π·π ≈ 10 → nyereség dB-ben. 5. („Moduláció”) x = 0,1·sin(2πf₁t) + 0,5·cos(2πf₂t), s = A·[U₀ + x(t)]·cos(2πFt), f₁ = 1 kHz, f₂ = 2 kHz, F = 900 kHz, U₀ = 2, A = 100 V: a) milyen moduláció, b) modulációs mélység, c) nemnulla teljesítményű frekvenciák, d) spektrális sűrűség, e) 50 Ω-on a minimális és maximális teljesítmény. 5/b. FM: 1 V csúcsértékű, 1 ms periódusú szinusz → 9 V amplitúdó, 9 kHz frekvencialöket: a) fázislöket, b) sávszélesség, c) teljesítmény, ha a moduláló amplitúdója duplázódik, d) ha a frekvenciája duplázódik, e) demodulálás. 6. („PAM”) elemi jel 1,05 (0..T), 0,15 (T..2T), bitsor 1-0-1-1-1-0: a) jel, b) ISI, c) minták, d) szemábra, e) négyszintű, f) nyolcszintű. 6/b. PAM, adószűrő H_A(f) = 2 (|f| ≤ 800 Hz), 0,1·√(1200 − |f|) (800–1200 Hz), 0 felette, T = 0,5 ms: a) vevőszűrő az ISI-mentességhez, b) optimális zajra, c) ±1 V-os minták, Gauss-zaj 10⁻³ mW/Hz → hibavalószínűség, d) 5 ilyen szakasz egymás után. 7. („xSK”) d_k = {0,1,1,0,1}: OOK, BPSK, FSK (vivő = jelzési sebesség, illetve f₀ = 1/T, f₁ = 1,5·f₀); az FSK frekvencialökete. 8. („QAM”) 64 állapotú QAM, a minimális teljesítményű pontok ±1, ±1, a maximálisak ±7, ±7: javaslat a teljesítmény csökkentésére azonos hibaarány mellett (konstellációs diagram).

**Jegyzet (ik.28 alja, V.5.)**
- `mgP_1` s = x·cosβ + y·sinβ = √(x² + y²)·cos(β − arctg(y/x)) → csúcstényező √2, csúcsérték 5, P = 5²/2 = **12,5**.
- `mgP_1b` a) f₁ = f₀: x(t) = 3A·cosβ − 2A·sin²β = 3A·cosβ − A + A·cos2β → egyenszint **−A**. b) csúcsérték A·√13, c) effektív érték A·√(11/2), d) csúcstényező **√(26/11)**. »Ellenőrizve: a két frekvencia összemérhetetlen, a csúcs ≤ √(9 + 4) A; P = 9A²/2 + A² = 11A²/2; √(26/11) ≈ 1,537.«

**ik.29**
- `mgP_2` a) Nem. b) (1) sávkorlát miatt (4 kHz az érthetőséghez elegendő sávszélesség); (2) kvantálási zaj (nem lehet eltüntetni); (a D/A átalakító a szűrő miatt nem játszik, nincs jelátlapolódás sem). c) Kell, hogy ne legyen átlapolódás a bemeneten; a kimeneten is kell, hiszen ez maga a D/A átalakító. d) minden bit 6 dB-t jelent az SNR-ben → 36 dB-lel nő a zaj (csökken az SNR) → sistergés (4000-szeres zajteljesítmény). e) 400-szoros. »Ellenőrizve: 2¹² = 4096; 10^2,6 ≈ 398.«
- `mgP_2b` a) nagyon durva túlvezérlésnél négyszögjel lenne, ekkor az alapfrekvencia páratlan többszörösein lennének komponensek (1,5; 4,5 … kHz): ±(2k+1)·1,5 kHz → mintavételezés után ±(2k+1)·1,5 ∓ n·8 kHz → igen. b) k: 1,5; 4,5; 7,5; 10,5; 13,5; 16,5 …, a 4 kHz alatt: 1,5; 3,5 (8 − 4,5); 0,5 (8 − 7,5); 2,5 (10,5 − 8) kHz.

**ik.30**
- `mgP_3` C(n,k), n = 6, k = 3 → 8 üzenet, 8 kódszó. s = H·v = H(c + e) = H·e (a H·c = 0 az egyetlen előírás H-ra). a) G ↔ H: G = (I_{k×k}, P), H = (Pᵀ, I); G = [100 110; 010 101; 001 011]. b) Igen (a kódszó első k bitje maga az üzenet). c) kódszavak: 000000, 001011, 010101, 011110, 100110, 101101, 110011, 111000. d) lineáris kódnál kódszavak összege is kódszó → elég a legkisebb súlyú (nem nulla) kódszót megkeresni, ennek a súlya a távolság [= 3 → 2 hibát jelez, 1-et javít]. e) szindrómák 1 db 1-essel: 001 → e = 000001, 010 → 000010, 100 → 000100; 1 súlyú hibavektor 6 db van.

**ik.31**
- `mgP_4` λ = 2/3 m, h_T = 50 m, h_R = 1,5 m. a) |E₂| = 2|E₁|·|sin(2πh_Th_R/(dλ))| = 0 ⟺ 2πh_Th_R/(dλ) = kπ → d = 2h_Th_R/(kλ) → a legtávolabbi minimum k = 1-nél: **225 m**. b) Γ = −0,9: a távolság nem változik (csak nem teljes kioltás lesz). c) a_szakasz = ∞, mivel teljes kioltás van ebben a pontban. d) Γ = −1: ∞ (a minimális teljesítmény 0); Γ = −0,9: (1,9/0,1)² = **361**. e) a_szakasz = r⁴/(h_T²h_R²)·1/G_T·1/G_R (az interferenciazóna határától távol); ha h_R kétszeresére nő → a szakaszcsillapítás negyedére csökken (−6 dB) → négyszeres a vett teljesítmény (+6 dB), kétszeres a térerősség (+6 dB).
  »**Fontos a `03` A6 javításához:** ez az eredeti feladat a *legtávolabbi minimumot* kérdezi, arra a 225 m a helyes. Az `F29` feladatszövege a *legtávolabbi maximumot* (az interferenciazóna határát) kérdezi, arra 450 m a helyes. A két szövegváltozat két különböző kérdés.«
- `mgP_4b` G = A_e·4π/λ² = ¼·4·π²·(1/0,01) [A_e = (½)²π, λ = 0,1 m] → G = 1000 = **30 dB**.
- `mgP_5` a) analóg AM-DSB → burkolódetektorral lehet demodulálni; b) van modulációs mélység: m = max|x(t)|/U₀ = 0,6/2 = **30%** (ha > 1, nem lehet burkolódetektorral demodulálni).

**ik.32**
- c) Spektrum: alapsávi jel 1 (0,1) és 2 kHz (0,5); s(f) 898, 899, 900, 901, 902 kHz körül. e) min: 0, max: **1252,5 W**. »Ellenőrizve: max x(t) = 0,5025 (sin θ = 0,05-nél) → a pillanatnyi csúcsteljesítmény (100·2,5025)²/50 = 1252,5 W; a minimum (a vivő nullátmeneténél) 0.«
- `mgP_5b` s = U₀·cos(2πFt + φ₀ + µ_t), µ_t = c·∫x_t dt (fázismodulációnál µ_t = c·x_t). U₀ = 9 V, A = 1 V, f = 1 kHz (T = 1 ms). µ_t = c·A/(2πf)·sin(2πft), µ̇_t = c·A·cos(2πft); Φ_D = cA/(2πf_m), f_D = cA/2π = 9 kHz → **Φ_D = f_D/f_m = 9 rad**. b) Bessel: B = 2(1 + √m_f + m_f)·f_m = 2(1 + 3 + 9)·1 = **26 kHz**; Carson: B = 2(f_m + f_D) = **20 kHz** (durva becslés). c) nem változik! d) nem változik! e) számláló, PLL, félrehangolt rezgőkör.
- `mgP_6` A 1 0 1 1 1 0 PAM jel rajza: szintek ±1,2; ±1,05; ±0,9; ±0,15 (a második szimbólum átlóg).

**ik.33**
- b) Keletkezik ISI. d) Szemábra: ±1,2 és ±0,9 között. Hibaarány P_e = 2·(L−1)/L·Φ(−d/σ), d: 1,05 → 0,9 → a hibaarány nő.
- f) d_k = {±1, ±3, ±5, ±7}, d_k = 1 és d_{k−1} = −7: 1,05 − 7·0,15 = 0 → **NEM** (mivel ez pont a döntési küszöbre esik).
- `mgP_7` FSK: f₀ = 1/T, f₁ = 1,5/T, rajz a 0 1 1 0 1 sorra; f_D = |f₀ − f₁|/2 = |2/(4T) − 3/(4T)| = 1/(4T) → **MSK** (minimális az f_D, ami még elég a jó demoduláláshoz).
- `mgP_8` 64QAM (csak a koordinátarendszer van felrajzolva, megoldás nincs). »Lásd `tg06_P64`: a (±7, ±7) sarokpontokat (±9, ±1)-re téve 98 → 82.«

---

## Mobil gyakorlat (2016.05.12.)  ·  ik.34–ik.36

**Diák:** 1. GSM-CS: mekkora késéssel érkezik meg A előfizető hangja B-hez egy GSM rendszeren belül, és ez elfogadható-e? 2. LU-k, HO-k és P-k: milyen helyzetfrissítések történnek az α413 → α415 → α452 → α921 → β731 úton? 3. SMS-ek és darabjaik: mennyit kell fizetni egy épp 160 karakteres (ékezetes) üzenetért? 4. Egyszerű GSM-hívásfelépítés két Gy-Mobile előfizető között; átirányítások (ki fizet); CallNotification, NotifyMe!, WhoCalled szolgáltatások; lehallgatható-e. 5. SMS Submit, Deliver, Report: Ausztriában síelő Westel-előfizetőtől a Görögországban karácsonyozó „06-70”-es Pannon-előfizetőhöz; hogyan jut vissza a Delivery report.

**Jegyzet (ik.34, V.12.)**
- `mgM_0` Beszédjel → 20 ms-os keretek (ahol csend van, nem küld adatot). 8 kHz-es mintavételezés, 13 bites kvantálás → 104 kbps → GSM-kódoló → **13 kbps** → 260 bit/20 ms → hibatűrő kódoló (196 bit ECC, Error Correcting Code) → **456 bit/20 ms** → 4 timeslot kell hozzá (egy timeslot 114 bit, burst). Egy TDMA-keret 4,615 ms ≈ 1/216⅔ s = (24/26)·5 ms ↔ 200 beszédburst/s lenne; (26/24)·200 = 216⅔ burst/s (a 13. adattovábbítás, a 26. csend). ⅛·4,615 ms = **577 µs** jut egy előfizetőre egy burstben; 148/270 833 = **546 µs**-ig ad egy előfizető.
- `mgM_1` t_delay = (20 ms [amíg bevárjuk a mintát] + 1 ms [kódolás] + 8 [vagy 9]·(24/26)·5 ms [interleave miatt])·2 [fogadni is kell] ≈ **100…120 ms**. Bit-interleave: szétosztja a biteket az időrések között (csomós hibák ellen); 4-gyel későbbi időrésben küldi a következő biteket. »Ellenőrizve: (20 + 1 + 8·4,615)·2 = 115,8 ms; 9-cel 125 ms.«

**ik.35**
- `mgM_2` LU: Location Update (ha nincs folyamatos kapcsolat), HO: Hand Over (ha van folyamatos kapcsolat) – cellaváltáskor; P: Paging (amikor keresik az adott készüléket). α413 → (nincs) α415 → (LA-váltás) α452 → (BSC-váltás) α921 → (MSC-váltás) β731. Az LU-k típusai: bekapcsoláskor, periodikus, cellaváltás (intercell), LA-váltás, BSC-váltás, MSC-váltás (ha országok közötti váltás van, az is ilyen).
- `mgM_3` Ha be van kapcsolva a redukált karakterkészlet, akkor 1 SMS. Ha nem, akkor minden karakter 16 bites (egy SMS 140 byte-os). »Kiegészítés, a jegyzetben nem szerepel: 16 bites (UCS-2) kódolással egy SMS 70 karakter, összefűzött üzenetben részenként 67 → 160 karakter = **3 SMS**; 7 bites kódolással 160 karakter = 140 byte = 1 SMS.«
- `mgM_4` Hívásfelépítés: MS_A → (RL) BSS → BSC → MSC/VLR → a HLR-nél megkérdezi, hol van B (SRI_B, Send Routing Information, MSISDN) → a HLR (IMSI) → MSC/VLR_B → BSC → BSS → Paging → MS_B. AuC, EIR. A HLR-ben van meg egyedül az IMSI ↔ MSISDN összerendelés.

**ik.36**
- `mgM_5` SMS: SUBMIT: MS → BSS → BSC → MSC_A (Ausztria) → ForwardSM (MSISDN_A, MSISDN_B, tartalom) → SMSC (Westel) → OK. DELIVER: SMSC (Westel) → SRI4SM (MSISDN_B) → HLR Vodafone [FNR: Flexible Number Register, ebben vannak a hordozott számok] → SRI4SM (MSISDN_B) → HLR Pannon GSM → (IMSI_B, MSC_görög) → ForwardSM (MSISDN_A, IMSI_B, tartalom) → MSC (Görögország) → (TMSI_B) → B → OK.

---

## 10. gyakorlat (2016.05.19.) – Forgalom  ·  ik.37–ik.38

**Diák:** 1. Órák (slip): két E1-es hálózati szegmens külön óráról jár, pontosság δ = 1 ppm: mennyi időnként tapasztalhatunk PCM-keretcsúszást? 2. A tartási idő eloszlása: a hívások hány százaléka után fizetnek 20, 40, 60 vagy több forintot (megkezdett percenként 20 Ft, átlagos tartás 2 perc, exponenciális). 3. Hogyan változik a bevétel másodperc-alapú elszámolásnál? 4. Erlang és a mobilok: bázisállomás N = 1 csatornával, M = 50 mozgó állomás, egyenként λ_MS = 0,4 hívás/óra, h = 1 perc: a) hívásintenzitás, b) felajánlott forgalom, c) hívásveszteség (torlódási szint), d) lebonyolított forgalom, e) kihasználtság. 5. Erlang-B: λ = 120 hívás/óra, h = 20 perc: a) A, b) N, ha p_B ≤ 2%, c) Y_N, d) Y₁ (%), e) az egyidejűleg foglalt interfészek átlaga.

**Jegyzet (ik.37, V.19.)**
- `mg10_1` T = (N + 1)·T_Rx = N·T_Tx; a legrosszabb esetben T_Rx = 1/(f₀(1 + δ)), T_Tx = 1/(f₀(1 − δ)) (f₀ = 8 kHz az eredeti órajel). (N + 1)(1 − δ) = N(1 + δ) → 1 − δ = 2Nδ → N = (1 − δ)/(2δ) → T = 1/(2δf₀). »Számérték (kiegészítés): 1/(2·10⁻⁶·8000) = **62,5 s**.«
- `mg10_2` Exponenciális eloszlás: f(x) = α·e^{−αx} (x ≥ 0), M(ξ) = 1/α, F(x) = 1 − e^{−αx}. Táblázat (α = ½ /perc): F(1) = 39,35%, F(2) = 63,21%, F(3) = 77,69%; P(k−1 < ξ < k): 39,35% / 23,87% / 14,47%.

**ik.38**
- Egy hívásra jutó átlagos díjegység: Σk·(e^{−α(k−1)} − e^{−αk}) = Σk(y^{k−1} − y^k) (y = e^{−α}) = 1 + y + y² + … = 1/(1 − y) = 1/(1 − e^{−α}) = **2,54 → ≈ 50 Ft**.
- `mg10_3` Csökken, kb. **40 Ft**.
- `mg10_4` a) λ_BS = M·λ_MS = 20 hívás/óra; b) A = λ_BS·h = 20·(1/60) = **⅓ Erl**; c) P_B = (A^N/N!)/Σ = (⅓)/(1 + ⅓) = **0,25 = 25%** (P_C: várakoztatásos, nem blokkolásos rendszerre); d) Y_N = A(1 − P_B) = ⅓·0,75 = ¼ Erl; e) Y₁ = Y_N/N = ¼ Erl.
- `mg10_5` λ_BS = 120 hívás/óra, h = 20 perc = ⅓ óra. a) A = **40 Erl**; b) P_B = 2% → Erlang-B táblázatból **N = 50**; c) Y_N = A(1 − P_B) = 40·98% = **39,2 Erl**; d) Y₁ = Y_N/N = 39,2/50 = **78,4%**; e) 39,2. »Egyezik `kg12_4`-gyel.«

---

## Nyitott kérdések (átírás)

1. `mg0_5`: az átlagteljesítmény-számítás („½·5² + ½·1² = 13”) melyik jelalakra vonatkozik? [bizonytalan]
2. `mg4k_2`: „λ = 49” – a jegyzetben valószínűleg 49/16 bit/szimbólum (a feladat szerint ez a helyes érték).
3. `mg12_3`/`ik.25`: az FM-jel sávszélessége „200 kHz” vagy 300 kHz a rajzon? [bizonytalan]
4. `mg13_2`: az RS és a FEC szerepkiosztása (lásd fent).
