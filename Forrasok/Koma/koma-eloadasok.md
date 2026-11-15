# Koma jegyzetei: előadások (2021 tavasz, Varga Pál)

Kézzel írt előadásjegyzetek átirata (iPad, 2021 tavaszi félév). Az eredeti PDF-ek: Előadás01_0212 … Előadás13_0514. A 12. előadás hiányzik.
Az egyes előadások után zárójelben a projekt témakör táblázatának sorszáma.

---

## Előadás 1 (2021.02.12.) Mintavételezés, kvantálás → 2. témakör

Analóg világban élünk, de digitálisan nagyobb zajtűréssel és kisebb energiaigénnyel szállíthatók, illetve kisebb helyen tárolhatók a jelek. A digitalizálás során olyan zajt viszünk bele, amit az emberi érzékszervek nem képesek érzékelni, így a nagyfrekvenciás komponensek nem zavaróak.

**Digitalizálás = mintavételezés + kvantálás.**
Lánc: analóg x(t) jel → előszűrő → mintavevő → kvantáló (x[k]) → kódoló, DSP (pl. checksum) → átvitel → dekódoló → impulzusgenerátor → visszaállító szűrő → analóg jel.

### Mintavételezés
Analóg (FI, folytonos idejű) jelből DI (diszkrét idejű) valós jel előállítása úgy, hogy visszaállítható legyen.
- A/D: x[k] = x(kT), T = 1/fₛ a mintavételi idő (sample time).
- Nyquist-Shannon mintavételi tétel: Xₘ(f) = Σᵢ X(f − ifₛ), „szellemképek”. Akkor nem következik be jelátlapolódás, ha B sávkorlátú jelre fₛ/2 ≥ B.
- Visszaállítás: x[k] → D/A (T = 1/fₛ) → x_p(t) → H(f) → X̂(f). x̂(t) = T Σ x[k] h(t − kT).
- X̂(f) = T X_p(f) H(f) = T Σₖ x[k] e^(−j2πfkT) H(f), ahol X_p(f) = fₛ Σᵢ X(f − ifₛ). Így X̂(f) = H(f) Σᵢ X(f − ifₛ).
- Hogyan állítjuk vissza a jelet? Pl. bemenet 5, 3, −1, 4 lépcsős jel, majd szűrés.
- Visszaállítható, ha X(f) sávkorlátos (X(f) = 0, ha f ∉ [−B, B]) ÉS fₛ/2 ≥ B. (fₛ-enként szellemképek, nem szabad összecsúszniuk.) H(f) aluláteresztő jellegű kell legyen, fₛ legyen olyan, hogy ∀i ≠ 0-ra X(f − ifₛ) = 0, ha f ∈ B.
- Határhelyzet: fₛ = 2B, ekkor H(f) IDEÁLIS aluláteresztő kell (Nyquist kritérium). Általában fₛ ≥ 2B.
- Azért lesz egyértelmű a visszaállítás, mert a minták közé eső kilengéseket a szűrő nem engedi.
- Szinusz fₛ = 2B esetén beletrafálhatunk a nullhelyekbe → konstans? Ezért fₛ > 2B.

### Kvantálás
1. Egyenletes kvantálás: C a maximális érték, Δ a lépcsőméret, N a felbontás (darabszám), Δ = 2C/N.
- Δ/2 a hibahatár: **kvantálási hiba** ±Δ/2, zajként jelenik meg (εₖ, max εₖ = Δ/2).
- n bites kódszavakkal 2ⁿ érték fejezhető ki, N = 2ⁿ.
- A zaj eloszlása egyenletes a ±Δ/2 tartományon, az εₖ-k független valószínűségi változók (IID, Identical Independent Distribution). E(εₖ) = 0, E(εₖ²) = P_ε = (1/Δ)∫x² dx (−Δ/2…Δ/2) = Δ²/12 **zajteljesítmény**. (Létezik nemlineáris kvantáló is.)
- x̂[k] = x[k] + εₖ
- Parseval tétel: P = A(ŷ²) = (1/fₛ)·E(xₖ²)·∫|H(f)|² df → S_ε(f) = (1/fₛ)(Δ²/12)|H(f)|², a zaj spektrális sűrűségfüggvénye.
- **Jel-zaj viszony (SNR)**, A amplitúdó, c csúcstényező, n bites lineáris kvantálás, B sávszélesség, fₛ mintavételi frekvencia esetén:
  - Jel: S = Pₓ = A²/c²
  - Kvantálási zaj: P_ε = (1/fₛ)(Δ²/12)∫₋B^B 1² df = BΔ²/(6fₛ)
  - 2ⁿ = N = 2A/Δ
  - SNR = S/P_ε = 6fₛA²/(c²Δ²B) = (3/c²)·(fₛ/2B)·2²ⁿ
- Szinuszos jelre c = √2 → SNR = (3/2)(fₛ/2B)·2²ⁿ. SNR_dB ≈ 1,76 dB + n·6,02 dB, minden bit 6 dB-t javít! 16 bit esetén már > 96 dB az SNR.

---

## Előadás 2 (2021.02.19.) Kódolás → 6. témakör

Kódolás fajtái:
- információ hatékonyabb átvitele: tömörítő kódolás, forráskódolás
- hibavédő (hibajelző, hibajavító, hibakorlátozó) kódolás: átviteli hibák ellen
- titkosító kódolás: csak az illetékesek számára legyen értelmes az üzenet
- vonali kódolás: az előzőekkel ellentétben folytonos, a vonalon egy bit hosszát jelzi, szinkronban tartja az adót és a vevőt

### 1. Tömör megjelenítő kódolás (forráskódolás)
Szimbólumkészlet (forrás ABC) 𝓕. Ennek elemeiből képzett sorozatokat (szavakat) jelenítjük meg a kód ABC szimbólumaival (𝓚).
Kritériumok: a) egyértelműen visszaállítható legyen a kódból az eredeti információ („A királynőt megölni nem kell félnetek…”), b) veszteségmentes legyen, c) tömör legyen.

**D: kód** = kódszavak összessége. A kódszavak mind különbözőek, de nem kell, hogy fix hosszúságúak legyenek: a gyakoribbak lehetnek rövidebbek, így tömörebb a kód. Pl. a₁ → 01, a₂ → 001, a₃ → 0001, …, aₙ → 1111111 (ez a kód prefix).

lₖ: kódszóhossz függvény 𝓚 → ℕ⁺. Átlagos kódhossz: 1 szimbólumhoz átlagosan milyen hosszú kód tartozik?
- **Fix hossz**: #𝓕 = N → L ≈ log₂N, helyesen log₂N ≤ L ≤ 1 + log₂N (ha nem bináris kódot használunk, a log alapja a szimbólumok száma). Pl. N = 32 → L = 5, N = 33 → L = 6 (20% hatékonyságromlás).
- **Változó hossz**, javítunk a hatékonyságon:
  - a) Kódszavak forrásszimbólum párokat jelenítenek meg: N² darab pár → L⁽²⁾ ≈ 2log₂N (esetleg +1), 2log₂N ≤ L⁽²⁾ ≤ 1 + 2log₂N. Pl. N = 33 → N² = 1089 → L⁽²⁾ = 11 → L ≈ 5,5 < 6, így „csak” 10% a romlás. (Ugyanígy forrásszimbólum n-esek.)
  - b) Változó kódhossz: a gyakoribb szimbólumok legyenek rövidebbek (pl. Morse). Korlát a minimális L-re: egyértelmű megfejthetőség. Pl. a → 1, b → 10, c → 0: 1010 visszafejtve bb, acac, acb, bac.

**T: McMillan egyenlőtlenség**: Σᵢ 2^(−lᵢ) ≤ 1 (lᵢ az i-edik kódszó hossza), ez az egyértelmű megfejthetőség szükséges feltétele. Pl. N = 3, l₁ = 1, l₂ = 2, l₃ = 1 → 1/2 + 1/4 + 1/2 > 1. De ha l₃ = 2, akkor már jó. [≈ A4 10. IMSC HF]
- Pl. a → 1, b → 10, c → 00: 101111 0000001 → b a a a a c c c a ✓ vagy b a a a a b c c …? Nem egyértelműen visszafejthető, mert nem prefix a kód, azaz van olyan kódszó, amely egy másik kód előtagja! Pl. a → 1, b → 00, c → 01 prefix kód.

**T: Kraft egyenlőtlenség**: akkor és csak akkor alkotható egyértelműen visszafejthető prefix kód, ha Σᵢ 2^(−lᵢ) ≤ 1. (A kettő együtt a Kraft-McMillan egyenlőtlenség.)

A forrásszimbólumok gyakorisági eloszlását ismerve a kódhosszak úgy oszthatók ki, hogy L minimális legyen. pᵢ, i = 1…N, Σpᵢ = 1.
- Cél: legyen tömör (L = Σ pᵢlᵢ minimális) ÉS egyértelműen megfejthető (Σ 2^(−lᵢ) ≤ 1).
- Lagrange-féle multiplikátoros módszerrel a legjobb megoldás: lᵢ = ⌈log₂(1/pᵢ)⌉ (felső egészrész). L = ⌈Σ pᵢ log₂(1/pᵢ)⌉, az elérhető minimumot az eloszlás befolyásolja.
- Optimum: N = 2ᵏ → L = Σ pᵢ log₂(1/pᵢ), „rendezetlenség”.
- **ENTRÓPIA**: H(p) = Σᵢ pᵢ log₂(1/pᵢ), az eloszlás entrópiája.

Hogyan közelíthetjük a minimumot? Szimbólumpárok kódolása (#𝓕² = N²). A szimbólumpárok valószínűségei pᵢpⱼ:
H(𝓕²) = ΣᵢΣⱼ pᵢpⱼ ld(1/(pᵢpⱼ)) = ΣᵢΣⱼ pᵢpⱼ(ld(1/pᵢ) + ld(1/pⱼ)) = 2H(𝓕).
- A kódszavak minimális átlagos hossza az eloszlás entrópiájának kétszerese: L⁽²⁾_min = ⌈2H(𝓕)⌉.
- H(𝓕) ≤ L⁽¹⁾ ≤ ½ + H(𝓕) → 0,5-re meg tudjuk közelíteni. Szimbólum k-asokra H(𝓕) ≤ L ≤ 1/k + H(𝓕), 1/k bitre meg tudjuk közelíteni az entrópiát! (A gyakorlatban viszont költséges lehet.)
- Az entrópia jó a forrás információtartalmának mérésére!

### 2. Hibavédő kódolás
A tömörítés kárára további biteket adunk hozzá, hogy az átviteli hibák ellen védjük az adatot.
- Törlődéses hiba: 0? 1? Melyik helyen?
- Tévesztéses hiba: 0 → 1, 1 → 0.
- p₀,₁ = 0, de p₁,₀ ≠ 0: aszimmetrikus csatorna.
- Szimmetrikus csatorna (BSC, Binary Symmetric Channel): p₀,₁ = p₁,₀. A hibák lehetnek függetlenek, de csomósodhatnak is.
- Pl. n = 1000 bit, p = 10⁻⁴: 0 hiba valószínűsége (1−p)ⁿ ≈ 0,9048 (binomiális eloszlás). [Megjegyzés a jegyzetben: 1000 közül 5…6 biztos hibás!]
- Probléma lehet: túl hasonló kódok, 1…2 bit hibája még értelmes kódot ad. Megoldás: **dúsítás**. k bites üzenetet n bitesre dúsítjuk adott helyekre beszúrt extra bitekkel.
- Mennyire hasonlítanak a kódok? Kódtávolság: hány bitben különböznek? **Hamming távolság**: d(a, b) = az a XOR b-ben az 1-esek száma. Távolság: pozitív, szimmetrikus, Δ egyenlőtlenség.
- Kód „jósága”: a legközelebbi kódszavak távolsága, d_min = min d(cᵢ, cⱼ), cᵢ, cⱼ ∈ C, cᵢ ≠ cⱼ. A d_min-nél kisebb távolság esetén észrevesszük a hibát, mert invalid szót kapunk.
- **d_min − 1 hiba jelezhető** legfeljebb. **Javítani ⌊d_min/2⌋** bitet lehet. (Pontosabban ⌊(d_min−1)/2⌋, pl. 5 bit távolságnál 3 bit hibát már rosszul javítunk.)

Kódolás: u (k bit) → c ∈ C (n bit), C a kódhalmaz. Hibamodell: c → v(c, e) vett üzenet, e a hibavektor (ahol 1, ott invertálódik a kód bitje). Dekódolás: v → ĉ ∈ C → û.

### Lineáris blokk kódok
Elemi műveletek mod 2 a {0, 1}-en: + (XOR), × (AND).
- Lineáris kód: C lineáris kódtér, c₁ ∈ C és c₂ ∈ C → c₁ + c₂ ∈ C. c₁ + c₁ = 0, 0 ∈ C.
- Kódtér bázisa: a generátormátrix elemei. G sorai g₁ … gₖ, c = u·G (n = k × n mátrix · k).
- Hibamodell: v = c + e, e a hibamaszk. Pl. c = 101110, e = 001001, v = 100111.
- Hibavektorok h₁, h₂, …, h_(n−k): a G-re ortogonális teret alkotnak (H mátrix). v·Hᵀ = s **szindrómavektor**, ami a hibákat jelzi. s = (c + e)Hᵀ = cHᵀ + eHᵀ = eHᵀ (cHᵀ = 0). Ha s = 0, akkor kódszót vettünk! e sorokat jelöl ki Hᵀ-ből.

Dekódolás mátrixműveletekkel: ĉ + ê = v, ĉ → û.
- Segít, ha G szisztematikus (szerepel benne I_k, és a kódra jellemző B): G = [I | B], ekkor Hᵀ = [B ; I_(n−k)].
- vHᵀ = 0, ha kódszó, s ≠ 0, ha hibás.
- 0. lépés: szindrómatáblázat (Look Up Table): melyik hibák milyen szindrómát eredményeznek? s = eHᵀ
- 1. vHᵀ = s, ki kell választani a táblából e-t. 2. sᵢ → eᵢ. 3. ĉ = v + e (mod 2 miatt), DEKÓDOLÁS. 4. ĉ → û.

Példa: G sorai 10 110, 01 011 (I | B). Az üzenet megjelenik a kódolás elején. c = uG: 00 → 00000, 01 → 01011, 10 → 10110, 11 → 11101. Hᵀ = [B ; I] sorai: 110, 011, 100, 010, 001.
Tfh. v = 11001: s = vHᵀ = 100. eHᵀ = 100 → e = 00100 → ĉ = 11101 → û = 11. Gyors így a dekódolás.

---

## Előadás 3 (2021.02.26.) Rádióösszeköttetések → 8. témakör

A vevőantennánál a rádióhullám síkhullámnak tekinthető. Adóantenna: elektromos jel → terjedő EM hullám. Vevőantenna: a síkhullámból valamekkora teljesítményt kicsatol és elektromos jellé alakítja.
- Antenna = térbeli szűrő (sugárzás, illetve érzékenység irányfüggő) → **iránykarakterisztika**: főirány, mellékirányok (elszórt teljesítmény), nullirányok. θ irányeltérési szög: a főiránytól θ szögnél 3 dB-t csökken az átvitel.
- Adó P_be → S → vevő P_ki. a_sz szakaszcsillapítás: a_sz^dB = 10 lg(P_ki/P_be) (10, mert teljesítmény). S: teljesítménysűrűség.
- **Izotróp antenna**: minden irányban S₀(R) = P_be/(4πR²), minden irányba ugyanolyan teljesítménysűrűség. A hozzávezetés miatt ilyen NINCS.
- A valódi antennák valamerre eltolják a teljesítményt (főirány). **Antennanyereség**: G(R) = S_főirány(R)/S₀(R), ahol S₀ az azonos teljesítményű izotróp antenna teljesítménysűrűsége azonos távolságban (izotróp: G ≡ 1). G(R) = S_max(R)/(P_be/4πR²) az adóantenna nyeresége.
- Vevőantenna: generátor U_g és belső impedancia Z_b, P_R terhelés. P_R attól függ, a hullám mekkora részét tudja venni: **A_R = P_R/S hatásos felület** (aperture). Izotróp antenna: A_R = λ²/4π, λ az átviteli hullámhossz.
- **Reciprok antenna**: adóként és vevőként ugyanolyan karakterisztikájú. G/A_R = 4π/λ² → A_R = Gλ²/4π → P_R = S·Gλ²/4π.

Frekvenciasávok:
- AM rádió: középhullám, λ ~ 100 m, f ~ 1000 kHz
- FM rádió: rövid, ultrarövid hullám, λ ~ 4…5 m, f ~ 100 MHz
- Mikrohullám: λ ~ 4…5 cm, f ~ 2,4 GHz
- Infravörös: λ ~ μm, f ~ 100 THz
- Látható fény: λ ~ 500 nm
- UV fény: λ ~ 10…100 nm
- Röntgen sugár, gamma sugár

Antennatípusok: dipólantenna (fánkszerű karakterisztika), síkantenna (lapos), irányított antenna (pl. 3 darabot teszünk egy toronyra).

**Hullámterjedés**
- Egyutas, közvetlen: homogén út, pl. műhold
- Refrakció (elhajlás): a légkör törésmutató gradiense miatt
- Reflexió (többutas): visszaverődés légkörről, talajról, tereptárgyakról
- Diffrakció: árnyékolt antenna is vehet jelet
- Troposzférikus szórás
- Ionoszférás visszaverés

**Egyutas terjedés**
a_sz^dB = 10 lg(P_be/P_ki) = 10 lg(P_IN/P_R). G_T adó, G_R vevő nyereség.
P_IN/P_R = (S·4πR²/G_T(R)) / (S·G_R(R)·λ²/4π) = (4πR/λ)²·1/(G_T(R)G_R(R))
→ **a_sz^dB = 10 lg((4πr/λ)²) − G_T^dB − G_R^dB**, szabadtéri szakaszcsillapítás.

**Többutas terjedés**
- Talaj- vagy vízfelületről tiszta visszaverődés: ha ϑ ≤ 5°, vertikális polarizáció és fázisfordító teljes reflexió történik, különben valamennyi el is nyelődik.
- Γ reflexiós tényező (nagy gamma): Γ = E_reflektált/E_beeső = −1. E: térerősség (jel), P ~ E².
- Többutas terjedés → különböző jelutak → a találkozáskor fáziskülönbség → interferencia.
- Geometria: h_T adóantenna magasság, h_R vevőantenna magasság, d távolság, R₁ direkt út, R₂ visszavert út. R₂ − R₁ (Pitagorasz) = Δ ≈ 2h_T h_R/d. Δ/λ határozza meg az interferenciát.
- Eredő térerősség: E_eredő = E₀ + Γ_föld E₀ e^(−j2πΔf/c) = E₀(1 + Γe^(−j2πΔ/λ)).
  |E_eredő| = |E₀|·|e^(−jπΔ/λ)|·|e^(jπΔ/λ) − e^(−jπΔ/λ)| (ha Γ = −1, ϑ < 5°) = 2|E₀|·|sin(πΔ/λ)|.
  πΔ/λ = kπ → teljes kioltás. πΔ/λ = kπ ± π/2 → ±E₀ (kétszeres).
- **|E_eredő| = 2|E₀|·|sin(π·2h_T h_R/(dλ))|**
- a_sz^dB(kétutas) = 2a_sz^dB(egyutas)·|E_eredő/E₀| [a jegyzet jelölése]
- Kicsi π·2h_T h_R/(dλ) esetén (nagy távolság az antennák között): sin(π·2h_T h_R/(dλ)) ≈ π·2h_T h_R/(dλ) (ha d ≫ 2πh_T h_R/λ).
- Az adóhoz közeledve a szinusz „besűrűsödik”. E_r/E₀ a d függvényében 0 és 2 között ingadozik az **interferencia zónában**, az első csúcs d_i-nél: 2πh_T h_R/(d_iλ) = π/2 + kπ, k = 0: **d_i = 4h_T h_R/λ**.
- Nagy d-re: a_sz = (4πd/λ)²·1/(G_T G_R)·(dλ/(4πh_T h_R))² = **d⁴/(G_T G_R h_T² h_R²)**, nem függ a hullámhossztól.

---

## Előadás 4 (2021.03.05.) Analóg moduláció → 3. témakör

Lánc: forrás → átalakító (A/D, kódolás, moduláció, torzítás) → csatorna (vivőfrekvencia, zaj) → átalakító (D/A, dekódolás, zajszűrés, demoduláció, torzítás) → érzékszervek.

Tiszta hang (szinuszos) átvitele tiszta szinuszos vivőhullámon: s_v(t) = a(t)·cos(Θ(t)).
- a(t) ≠ konst: **amplitúdómoduláció** (AM)
- Θ(t): **szögmoduláció**, f_p(t) = (1/2π)·dΘ/dt **pillanatnyi frekvencia** (ω = 2πf körfrekvencia), f_p(t) ≠ konst.
- Valójában fázist változtatunk, de ennek a deriváltja szerint a frekvencia is változik!

### Amplitúdómodulált jelek
s_AM(t) = a(t)cos(Θ(t)) = a(t)cos(ω_v t + φ), ω_v vivőfrekvencia. Ha φ = 0: s_AM(t) = a(t)cos(ω_v t).
- Ha a vivőjel s_v(t) = U_v cos(ω_v t) és a modulálójel s_m(t), akkor s_AM(t) = U_v(1 + m·s_m(t))cos(ω_v t), m a **modulációs tényező, modulációs mélység**.
- Ha s_m(t) = U_m cos(ω_m t) és a(t) = U_v + U_m cos(ω_m t):
  s_AM(t) = (U_v + U_m cos(ω_m t))cos(ω_v t) = s_v(t) + (U_m/2)cos((ω_v − ω_m)t) + (U_m/2)cos((ω_v + ω_m)t).
- **Kétoldalsávos amplitúdómoduláció (AM-DSB)**: vonalak ω_v − ω_m, ω_v, ω_v + ω_m helyen. A teljes információ megjelenik az egyik oldalsávban, és ω_v teljesítménye is pazarló.
- **Elnyomott vivőjű AM (AM-DSB/SC**, Double Side Band, Suppressed Carrier).
- **AM-SSB** (Single Side Band): AM-LSB (Lower Side Band, ω_v − ω_m) vagy AM-USB (Upper Side Band, ω_v + ω_m). Teljesítményt és sávot is nyerünk komplexebb demodulátor árán.

**Modulációs mélység**
- Burkoló U_v ± U_m között. Nagyobb modulációs mélység → nagyobb eltérés U_v-től. Ha U_m > U_v, 0 alá mehet!
- Szinuszos: m = U_m/U_v. Általában: m = max(s_m(t))/U_v = Ŝ_m/U_v.
- Teljesítmény: P_hasznos/P_összes = (S_m²/C_sm²)/(U_v² + S_m²/C_sm²) = m²/(C_sm² + m²) (C_sm a moduláló csúcstényezője).
- Nem érdemes túllőni a modulációs tényezőt, a demodulálhatóságot is elronthatja. m = 100%-nál a burkoló 0-ig ér. m > 1: fázist vált, és burkoló visszaállítással nem demodulálható.

### AM demoduláció
1. **Burkolódetektor**: jel egyenirányítása (dióda), majd aluláteresztő szűrőkondenzátor. CSAK AM-DSB, CSAK m ≤ 1!
2. **Szorzódemodulátor**: s_AM(t) · 2cos(ω_v t + Φ) → LPF → ŝ_m(t).
   (U_v + s_m(t))·2cos(ω_v t + Φ)cos(ω_v t) = (U_v + s_m(t))(cos Φ + cos(2ω_v t + Φ)), a második tagot az LPF kiszűri.
   ŝ_m(t) = (U_v + s_m(t))cos Φ. cos Φ = 1 esetén ŝ_m(t) + U_v-vel offszetelve s_m(t) visszanyerhető.
   Lehet, hogy Φ = π/2, ekkor nem érzékeljük! Így egy vivőfrekvencián 2 jel vihető π/2 eltolással!
- **QAM, kvadratúra AM**: S_AM^I: Φ = 0, S_AM^Q: Φ = π/2 → STEREO!! Egyszerre cos és sin komponens.
- Digitális: ±1 → 2 bit 1 pillanatban! (Konstelláció: 00, 11, 10, 01 a négy negyedben.)

### Szögmoduláció
s_Θ(t) = U_v cos(ω_v t + m(t) + Φ), Θ(t) a teljes argumentum. Pillanatnyi frekvencia f_p = (1/2π)dΘ/dt.
- Ha m(t) = k·s_m(t), akkor **fázismoduláció (PM)** történik, ha ṁ(t) = k·s_m(t), akkor pedig **frekvenciamoduláció (FM)**.
- Pl. s_m = U_m cos(ω_m t), Φ = 0:
  - s_PM(t) = U_v cos(ω_v t + k_PM U_m cos(ω_m t))
  - s_FM(t) = U_v cos(ω_v t + (k_FM 2πU_m/ω_m)sin(ω_m t)) = U_v cos(2πf_v t + (k_FM U_m/f_m)sin(2πf_m t))
- m analógiája: **fázislöket** Φ_D = max(m(t)) [rad], max ennyit tud eltérni a vivő fázisától. **Frekvencialöket** m_f = max(ṁ(t)) [rad/s], a pillanatnyi frekvencia maximális kitérése a vivőtől.
- Teljesítmény: U_v²/(2R_terhelő).
- f_p = k_FM s_m(t) + f_v = k_FM U_m cos(ω_m t) + f_v = f_D cos(ω_m t) + f_v (f_D = m_f).
- Frekvenciamoduláltnak fázislökete? Fordítva? Értelmezhető, nézőpont kérdése.
- **Sávszélesség**: B_össz ≈ 2B_moduláló(1 + Φ_D) (PM), B_össz ≈ 2(f_D + B_moduláló) (FM). Az alapsávi B_moduláló széles jelből f_v körül B_össz széles sáv lesz.

---

## Előadás 5 (2021.03.12.) FM demoduláció, többszörös hozzáférési módszerek → 3. és 9. témakör

### FM demoduláció
s_FM(t) = U_v cos(ω_v t + 2πk_FM ∫₀ U_m cos(ω_m τ)dτ) (szinuszos vivő, szinuszos moduláló) = U_v cos(ω_v t + (k_FM 2πU_m/ω_m)sin(ω_m t)) = U_v cos(ω_v t + (k_FM U_m/f_m)sin(ω_m t)), f_D = k_FM U_m. A pillanatnyi frekvencia f_v − f_D és f_v + f_D között mozog.
Nem változik az amplitúdó, elég a nullátmeneteket figyelembe venni.

1. **Félrehangolt rezgőkör**: a rezgőkör rezonanciagörbéjének oldalán közel lineáris amplitúdó-frekvencia kapcsolat (f_v ± f_D a meredek szakaszon, f_oszcilláció a csúcs). Lánc: FM/AM átalakítás → AM demodulátor → ŝ_m(t). Előny: egyszerű. Hátrány: nem teljesen lineáris (torzít), az amplitúdózajt is megjeleníti.
2. **Ellenütemű diszkriminátor**: két, f₁ és f₂-re hangolt rezgőkör különbsége. Szélesebb lineáris tartomány, a BW nagyobb, de az amplitúdózaj még mindig bezavar.
3. **Nullátmenet detektor**: nullátmenet számláló → impulzusgenerátor → LPF → ŝ_m(t).
4. **Fázistoló szorzó (koincidencia demodulátor)**: s_FM(t) szorozva saját, φ(ω) fázistolón átvitt változatával → LPF. a XOR b akkor 1, ahol különböznek (ez a 0-átmeneteknél van). Amplitúdóra érzéketlen!
5. **Fáziszárt hurok (PLL)**: fáziskomparátor → LPF → ŝ_m(t), visszacsatolásban VCO (feszültségvezérelt oszcillátor) f₀. A frekvenciakülönbséggel arányos amplitúdót kapunk. Amplitúdóra érzéketlen.

### Többszörös hozzáférési módszerek
- Több adó, több vevő egy csatornán.
- 1 vevő és 1 adó között több különböző csatorna egyszerre.
- Időmultiplexelés, időosztás: TDM, TDMA. Frekvenciamultiplexelés, frekvenciaosztás: FDM, FDMA. Ortogonális frekvenciaosztás: OFDM, OFDMA. Kódosztás: CDMA.
- TDM: Time Division Multiplexing. TDMA: Time Division Multiple Access. Egy adó t₁ t₂ t₃ időrésekben küld több csatornát, vagy több adó (Adó 1, 2, 3) osztozik az időréseken.
- FDM: minden csatorna saját f₁, f₂, f₃ frekvencián, kell védősáv a frekvenciák közé.

**OFDM**: spektrálisan hatékonyabb, a fázis (ortogonalitás) miatt a közelebbi frekvenciák nem zavarják egymást.
- Nagy frekvenciájú egyetlen vivő esetén sok zaj, nagy kivezérelt amplitúdó kellene. Ugyanaz az átviteli sebesség elérhető sok kisebb frekvenciával: + kisebb amplitúdó, + hatékonyabb spektrumkihasználás, + zavarvédelem.
- Mindegyik kis vivőn QAM jel. Az f₁ … fₙ alvivőkön T₁, T₂, … szimbólumidőnként egy-egy QAM szimbólum (pl. 11, 00, 00, 11, 10…), a vevő mindegyikre egyszerre ráhangolódik → bitsorozat.
- Adó: S/P → minden alvivőre QAM leképezés → inverz FFT → Re és Im ág DAC → f_v-vel (cos és 90°-kal tolt) keverés → összegzés → antenna.
- Vevő: antenna → 90°-os és 0°-os ág, LPF → FFT → döntés → ŝ.
- Nagyon nagy adatátviteli sebesség.
- Doppler effektus: mozgó adó vagy vevő esetén „benézzük” a frekvenciát. Kijelölhetők ismert vezérfrekvenciák (pilot), amik adott jelet adnak, ezek alapján korrigálható.

**CDMA**: kódosztás (Code Division Multiple Access).
- Ugyanazon frekvencián és időben más kód → jobb spektrumkihasználás.
- A digitális jelet nagyobb frekvenciájú* szórókóddal összeXNORozzuk, ezt sugározzuk ki: DS-CDMA (Direct Sequence). *„chip rate”
- A szórókódok ortogonálisak. Ha a frekvenciák aránya r, akkor 2^(r−1) csatorna lehet.
- Szétválogatáshoz elég ismét összeXNORozni a szórókóddal a vett (összegzett) jelet, és egy LPF-en átengedni.

---

## Előadás 6 (2021.03.19.) Digitális alapsávi átvitel → 4. témakör

Lánc: forrás s (s(t), S(f)) → átalakító → csatorna (aluláteresztő, +ν zaj) → visszaalakító → vevő (ŝ(t), Ŝ(f)). A csatorna aluláteresztő, simít, nincs éles 0…1 váltás.
- bps: bit per sec. Baud: szimbólum/s.
- Cél: a 0/1, illetve a szimbólumok megkülönböztetése az analóg csatorna túloldalán.

Impulzusmodulációk:
- **PAM**: Pulzus Amplitúdó Moduláció
- **PPM**: Pulzus Pozíció Moduláció
- **PDM**: Pulzus Időtartam (Duration) Moduláció
- PAM elemi jel: non-return-to-zero (NRZ, egész T-n át tart) vagy return-to-zero (RZ). A „0” és a zaj megkülönböztetése: ±1 → **PAM-2**.
- PAM-4: ±1, ±3 szintek (Gray címkézés: 11, 10, 01, 00 felülről). Lehet PAM-8, PAM-16, …
- De a csatorna lassú, lehet, hogy rosszul vesszük a mintát, illetve az átviteli sebességet korlátozza, ronthat a jelintegritáson is.

Adó oldal: s(t) → blokk készítő → impulzusgenerátor (T) → adószűrő (LPF) → csatorna (+ν).
Vevő oldal: vevőszűrő → mintavevő (T) → döntő (küszöb) → ŝ(t).

Az előző időrés impulzusának lecsengése belezavarhat a következőbe!
- s(t) = Σₖ d_k h_a(t − kT), h_a(t) az adóoldal impulzusválasza (H_a(f) inverz Fourier transzformáltja).
- H(f) = H_a(f)·H_cs(f)·H_v(f), h(t) = 𝓕⁻¹{H(f)} → ŝ(t) = Σₖ d_k h(t − kT).
- n-edik (többi) időrés: Σₙ d_n h(t − nT) → s_k = Σₙ d_n h(kT + T₀ − nT): a k-adik időrés jele = saját időréshez tartozó tag + többi időrésből beáthallatszó tagok.
- Cél: a sajátban jól, de a többiben minél kevésbé látszani.
- s_k = d_k h(T₀) + d_(k−1)h(T₀ + T) + d_(k−2)h(T₀ + 2T) + … + d_(k+1)h(T₀ − T) + d_(k+2)h(T₀ − 2T) + … + d_(k+n)h(T₀ − nT)
- Csak a T₀-ban kellene: h(t) = h₀, ha t = T₀, és 0, ha t = T₀ + kT (k ∈ ℤ, k ≠ 0). Ekkor nem zavar a le- és felfutás áthallatszódása.
- **ISI: szimbólumok közötti áthallás.**

**Nyquist-féle áthallásmentességi feltétel**: a rendszer ISI-mentes, ha Σₖ H(f − k/T) konstans.
- BW ≥ 1/2T.
- Példák: háromszög, ami nem fedi át egymást → nem konstans. Ideális négyszög ±1/2T-ig → konstans, de nem megvalósítható. Lekerekített (szimmetrikusan lecsengő) élek → konstans és meg is valósítható. 1/2T-nél ½ magas kell legyen.
- Időtartományban: h(t) nullhelyei 2T, 3T, 4T, …-nél. Baj: nem kauzális! De a feltételt teljesíti (többi időpontban 0). Megoldás: „elkenjük” a karakterisztikát.
- **Emelt koszinuszos karakterisztika**: paraméter α, a spektrum „lekerekítését” jellemző állandó. α = 0 (az előző, négyszög ±1/2T-ig), α = ½, α = 1 (cos², ±1/T-ig). α növelése növeli a szükséges sávszélességet is (cserébe h(t) gyorsabban lecseng).

Mégsem garantált a jó döntés a csatornazaj miatt…

**Additív zaj hatása**
Pl. PAM-2 rendszer: d_k ∈ {h(0), −h(0)}, döntési küszöb 0, d̃_k a vett (becsült) szint.
ŝ(t) = s(t) + ν(t), E(ν) = 0, var(ν) = σ² (a jegyzetben σ áll), Gauss eloszlás.
P(d̃_k ≠ d_k) = P(d_k = +1 | ν_k < −h(0)) + P(d_k = −1 | ν_k > h(0)) = 2·½·P(ν_k > h(0)) = Φ(−h(0)/σ).
(Itt Φ a sima eloszlásfüggvény. A tárgy jelölésében Φ a komplementer, ott ugyanez Pe = Φ(h₀/σ).)
Minél nagyobb h(0), és minél kisebb a zaj, annál jobb a találati arány.

---

## Előadás 7 (2021.03.26.) Digitális vivős moduláció → 5. témakör

Lánc: d_k → modulátor (T, f_v) → adószűrő H_a(f) → s(t) → csatorna H_cs(f) (+ν zaj) → vevőszűrő H_v(f) → ŝ(t) → demodulátor (T, f_v) → döntő → d̂_k. H(f) = H_a·H_cs·H_v. Több adó közül f_v hangolásával választunk.

Hogyan különböztetjük meg a 0-t az 1-től?

**ASK**: Amplitúdó Billentyűzés (Amplitude Shift Keying). **OOK**: On-Off Keying, S₀ = 0, S₁ = A cos(2πf_v t).
- ASK-val 4 vagy 8 szintű jel is átvihető.
- Változat: S₀ = −A cos(2πf_v t), S₁ = A cos(2πf_v t), 180°-os fázisugrás, detektálható.
- OOK spektruma: sinc alakú f_v körül, nullhelyek f_v ± 1/T, f_v ± 2/T, …

**PSK**: Fázis Billentyűzés (Phase Shift Keying), pl. az előbbi ±A.
- S₀ = A cos(2πf_v t + φ₀), S₁ = A cos(2πf_v t + φ₁), tipikus: φ₀ = 0, φ₁ = π. **BPSK**: Binary PSK.
- Bizonytalan: nem tudjuk, mivel kezdett, rossz fázist láthatunk. Nagyon fontos, hogy koherens legyen, sok a rontás.
- **DBPSK**: Differential BPSK. „0” → nem vált fázist, „1” → fázist vált, jobban detektálható. Adott időközönként kell 1-es, hogy tudja, hol tart (vonali kód), így jobb visszaállíthatóság.
- PSK is lehet többszintű, de nehezebb dekódolni. **QPSK** (kvadratúra PSK): 01, 00, 11, 10 a Re, Im síkon, nagyobb bitráta.
- Cél: minél kisebb bithiba-arány, ez korlátozza a bitsebességet. Kódolással javítható (2× bitsebesség mellett jobban javítható, de 2× bitnél kevesebb plusz bitet „pazarló” kódolás → megéri).

**FSK**: Frekvencia Billentyűzés.
- S₀ = A cos(2πf₀t), S₁ = A cos(2πf₁t), f_v = (f₀ + f₁)/2, f_D = (f₁ − f₀)/2. S₀ = A cos(2π(f_v + f_D)t), S₁ = A cos(2π(f_v − f_D)t).
- Zaj miatt és ugrások miatt érdemes kicsit elkenni a spektrumot.
- T idő alatt a minimális f_D különbség félperiódus vagy egészperiódus, így 0 fázisugrás. „0”: 0-átmenet középen, „1”: végkitérés középen.
- **BFSK**: Bináris FSK. **MSK** (Minimum Shift Keying): f₁ = 1/T, f₀ = 1/2T, f₁ = 2f₀ → f_v = 1,5f₀ = 3/4T, f_D = 1/4T.
- Spektruma: f_D T = 0,25 (MSK), 0,35, 0,75 görbék. Az MSK sávszélessége a legkisebb.
- Demoduláció ≈ FM demodulálás (pl. félrehangolt rezgőkör, fázisdiszkriminátor).

**QAM** (korábban már szerepelt): QPSK változat, ahol φ₁₁ = π/4, φ₁₀ = 5π/4, φ₀₁ = 3π/4, φ₀₀ = 7π/4.
- Ez persze felfogható QPSK és QAM jelként is: s_QAM = x cos(2πf_v t) + y sin(2πf_v t), x, y: 1 → +1, 0 → −1. 1 frekvencián 1 időrésben 2 bitet visz át.
- A 4 érték kiosztása szabad, de 00 és 11 ne legyen egymás mellett.
- x: I komponens (Inline), y: Q komponens (Quadrature), „IQ”.
- QAM modulátor: x · (φ = 0) + y · (φ = 90°) → s_QAM(t). Demodulátor: ×2, két ágon szorzás φ = 0° és φ = 90° vivővel, LPF → x̂, ŷ.
- s_QAM(t) = √(x² + y²)·cos(2πf_v t − arctg(y/x))
- Ha x és y többszintű, akkor még több bit vihető át. **16-QAM** (4 bit): pontok (±1, ±3) × (±1, ±3), konstellációs diagram. A szomszédosak között minél kevesebb eltérés legyen! (Gray kód, Karnaugh tábla.)
- „2D-s szemábra”: a pontok körül a zaj miatt felhő. 1024-QAM esetén már nagyon valószínű a bithiba! Csatornazaj minél kevesebb bithibát okozzon! (Vagy az adó teljesítmény nagyon nagy → nemlineáris torzítás.)
- Nagyon pontosan össze kell hangolni az adó és vevő fázisát (vagy a jelbe kell fázisinformációt építeni). Frekvenciakülönbség is lehet (elhangolódás, Doppler effektus), ezért időről időre újra szinkronizálni kell, hogy a konstellációs diagram ne forduljon el túl sokat.
- Analóg jel is átvihető (pl. szín).

---

## Előadás 8 (2021.04.09.) Hallás, látás → 7. témakör

Elég azokat a frekvenciákat, színeket átvinni, amit az ember érzékelni tud. Elég akkora képfrissítési frekvenciát használni, amit az ember érzékelni tud.

### Hang, emberi hallás
Közeg rezgését érzékeljük, mechanikai rezgést (a fülben).
- Akusztikai alapok: P(t) = p₀ + p(t), p₀ a légköri nyomás (csend szintje). P_hang = √(1/(t₂−t₁)·∫(P(t) − p₀)² dt). t₂ → t₁ esetén pillanatnyi hangnyomásról beszélünk.
- **Hang intenzitása**: I = p²/(ϱc) [W/m²], ϱc az **akusztikus impedancia** (ϱ közegsűrűség, c hangsebesség a közegben, c = λf, c ≈ 340 m/s levegőben 18 °C-on).
- c_levegő = (331,5 + 0,6ϑ) m/s, ahol ϑ a hőmérséklet °C-ban.
- **SPL, hangnyomásszint**: SPL = 10 lg(I/I₀), ahol I₀ a „csend” intenzitása. SPL = 10 lg((p²/ϱc)/(p₀²/ϱc)) = 20 lg(p/p₀) [dB].
  (Figyelem: itt p₀ már a 20 μPa-os referencianyomás, nem a légköri nyomás.)
- „Csend”: **hallásküszöb** (amit már éppen hallunk), I₀ = 10⁻¹² W/m² → 0 dB (referencia 1 kHz-en). Teljes csendben 2…3 m-re egy szúnyog.

Jellemző szintek:
- emberi suttogás 30 dB
- normál beszéd (3…5 m) 60…70 dB
- telefoncsörgés 80 dB
- városi zaj 85 dB
- teherautó 90 dB → hosszútávon halláskárosodás!!!
- motorkerékpár (gyors, közelről) 100 dB
- rock/metal koncert 115 dB
- sűrített levegős szegecselő 120 dB → fájdalomküszöb!!
- repülőgép turbina 140 dB (rövid idő alatt is halláskárosodást okoz)
- világrekord 194 dB (épületet rombol)
- 110 dB feletti berendezéshez viseljünk védőfelszerelést!

Frekvenciatartományban: lásd diasoron **Fletcher-Munson görbesereg**, ~20…20 000 Hz.
- **Phon**: az érzékelt hangerő skálája (frekvenciától ÉS SPL-től függ). Referencia: 1 kHz-es szinuszos hangra annyi phon, amennyi az SPL dB-ben. Nem SI mértékegység!
- 4 kHz környékén sokkal jobban hallunk, mint máshol. 10 kHz-et kevésbé halljuk. 200 Hz alatt folyamatosan csökken a hallhatóság (ugyanazon SPL-hez kisebb phon érték tartozik).

**A hallás pszichofizikai jellemzése**
- Hangosságérzet [phon] ↔ mérhető: SPL [dB]
- Hangmagasság ↔ kvázi periodikus jel alapfrekvenciája [Hz]
- Hangszín ↔ spektrális eloszlás (teljesítményspektrum)
- A megfeleltetés persze nem 1:1, függenek egymástól, és személyenként ÉS időben is változik!

**Elfedési jelenségek**: az emberi hallás becsapható, pl. a tömörítés nem mindig tűnik fel.
- **Időtartománybeli elfedés**: éles hang után nem azonnal áll vissza a hallás. **Utóelfedés**: nagy I után ~100 ms-ig nem hallunk jól. **Előelfedés**: nagy I előtt 5…20 ms-mal már nem hallunk jól.
- **Frekvenciatartománybeli elfedés**: a Fletcher-Munson görbeseregből adódik. Adott f₁ környékén megemelkedik a küszöb, a környező frekvenciákat erősebben kell megszólaltatni, mintha az erős f₁ nem lenne.

**Irányhallás**: nagy távolságból egyszerre érkezik → a hangosabbat halljuk csak. Kisebb távolság → a közelebbit halljuk, a távolabbit kevésbé.

### Kép, emberi látás
380…740 nm EM hullámok érzékelése (a szemben).
- Világosság, fényesség érzet ↔ fénysűrűség (egységnyi térszögbe eső fényáram)
- Színesség ↔ domináns hullámhossz(ok) (az érzeti pár pontosabban a színezet)
- Színtelítettség ↔ a fehér szín és a monokróm domináns λ eltérése (mennyire halvány?)
- Az összerendelés itt sem 1:1, egymással összefüggnek, személyenként, szemenként és időben változhat.

A szem: pupilla, írisz (mennyi fény érkezzen be?), szemlencse (fókuszáláshoz), retina (képérzékelő hártya), látóideg (információ továbbítás az agy látáslebenyébe), + támasztószövet.
- A jegyzet szerint „csap” sejtek: világosság, főleg sötétben, „pálcika” sejtek: szín, főleg világosban. **Ez fordítva helyes**: a pálcikák érzékelik a világosságot (sötétben), a csapok a színt (világosban).
- Színcsatornák: kék-sárga (V + Z − K) és vörös-zöld (V − Z + K).
- Spektrális érzékenység: relatív láthatóság görbe, nappali csúcs 555 nm-en (zöld), az éjszakai görbe balra tolódik. Legjobban a zöldet érzékeljük. (400 nm lila, kék, 555 zöld, sárga, 700 vörös.)
- 3 színből a látásnak megfelelő színérzet kikeverhető. Színpaletták alapján meghatározhatjuk egy adott színhez tartozó komponensek értékeit. Vörös, zöld és kék fénnyel megvilágítva a különbségek alapján beállítható.
- De bizonyos ciánkék színek nem állíthatók vissza, vöröset még kell belőle elvenni (az R színillesztő görbe negatív 430…530 nm között). R, G, B fényforrás az ismeretlen F forrás mellett, optikai különbségképzés.
- **Metamer színérzékelés**: ugyanaz a szín többféleképp is kikeverhető. **Metamer színek**: eltérő spektrális összetételűek, de ugyanolyan színérzetet keltenek.
- **CIE színpatkó**: benne az összes szín, amit érzékelni tudunk. Kerülete mentén a szivárvány tiszta színei (380…700 nm). 2 hullámhosszt összekötő vonalon tudjuk az arányokat meghatározni. A kijelzők ebből egy háromszöget vágnak ki. Középen referencia fehér, kifelé nő a telítettség.
- Adott intenzitással összekeverve R, G, B komponensekből fehér adódik, a súlyozás a világosságérzetet befolyásolja: R 0,3, G 0,59, B 0,11.
- Kék + zöld → türkiz, cián. Kék + vörös → lila, rózsaszín, magenta. Zöld + vörös → sárga, narancs.
- Színek megadása: RGB (vörös, zöld, kék, kisugárzott), CMYK (cián, magenta, sárga, fekete, elnyelés festékben), HSV (árnyalat, telítettség, színérték, érzékelt).

### Képalkotás
- Állóképnél 2' (szögperc) távolságnál kisebb esetén a fényességkülönbség nem érzékelhető. A színeket 10'-en belül nem tudjuk megkülönböztetni (érzékelt felbontás).
- Képarány (Aspect Ratio): eleinte 4:3, wide 16:9 ≈ 2:1, mozi 21:9, ultrawide 32:9 vagy hasonló.
- Fókuszban kb. 10° × 20°. Körülötte periféria látás (kb. 120° × 90°): ne tartalom legyen, csak jelzések.
- WB (fehéregyensúly): a színvisszaadás is fontos, a környezethez kell kalibrálni.
- Mozgókép: 16…20 FPS (24 állókép egymás után 1 s alatt) már folytonos mozgás érzetét kelti, de még vibrál. Mozi, TV, videó: 30 FPS.
- A szem fúziós frekvenciája (vibrálásmentes): 50…60 Hz, pl. fénycsövénél is figyelembe kell venni. Mozi: 25 FPS felvétel, 50 FPS lejátszás (2× minden kép). Mai gamer monitor: 120…360 Hz.

---

## Előadás 9 (2021.04.16.) Műsorszóró rendszerek (rádiós, analóg és digitális) → 9. témakör

### Sávok
- **LW (hosszúhullám)**: 148,5…283,5 kHz. Tengerentúli távolság, jó vételi adottságok, kis sávszélesség. AM-DSB, 9 kHz sávszélesség, erős szűrőre lehet szükség, VAGY 8 kHz a sávszélesség, 1…1 kHz tiltott sávok.
- **MW (középhullám)**: 531…1602 kHz, 9 kHz sávszélesség, AM-DSB (néha 10 kHz).
- **SW (rövidhullám)**: 2,3…26,1 MHz. Rádióamatőrök, világ területi alapon sávokra van osztva. Jó vételi tulajdonság az ionoszféráról visszaverve, 9…10 kHz sávszélesség. Zenéhez 10 kHz kell legalább!
- **USW / UKW / URH (ultrarövidhullám)**: 87,5…108 MHz. FM, sztereó, CCIR szabvány. > 10 kHz (~15 kHz) sávszélesség, a zene jó minőséggel átvihető. Valódi sávszélesség 300 kHz (sztereó + frekvencialöket).

Problémák a vevővel: precíz oszcillátor kell, nagyon meredeken levágó sávszűrő kell, széles sávban hangolható kell legyen, ezért rosszabb szűrési képesség. Különösen LW és MW esetén jelentkezik.
Megoldás: **szuperheterodin elv**, többlépcsős szűrés.

### Szuperheterodin vevő
Antenna → RF (rádiófrekvenciás): hangolható szűrő (f_v), erősítő → keverő (oszcillátor f₀) → KF (középfrekvenciás): nagyon éles levágású szűrő, erősítő → demodulátor → HF (hangfrekvenciás) erősítő → hangszóró.
- Az oszcillátor a jelet pontosan leviszi adott középfrekvencia köré, a meredek szűrő KF tartományban van.
- Felső keverésnél f₀ = f_KF + f_v.
- Oszcillátor „jósága”: Q = f₀/B (B az oszcillátoron hangolható sávszélesség).
- A szorzás hatására f_v + 2f_KF is megjelenik: **f_tükör**. Ha az RF hangolható szűrő nem elég éles, ez is belehallatszik az adásba! f_tükör lehet akár egy másik adás is. Az RF szűrővel szemben a szorzás miatt csak az az elvárás, hogy hangolható legyen, és f_v + 2f_KF ne hallatszon bele.
- f₀ = f_v − f_KF is megengedett: **alsó keverés** f₀ < f_v, **felső keverés** f₀ > f_v. Alsó keverésnél f_tükör = f_v − 2f_KF.
- Gyakorlatban felső keverést alkalmazunk, így jobban teljesíthető az oszcillátor jósága.

### FM sztereó
Zenét sztereóban érdemes átvinni az élmény érdekében.
- L és R mikrofon → LPF → M = L + R (mono összeg) és S = L − R (sztereó különbség).
- 19 kHz oszcillátor (pilot) → 2× (38 kHz, ezzel szorozzuk S-t, AM-DSB/SC) és 3× (57 kHz, RDS BPSK modulátor, a bináris RDS információval).
- Összegzés → pre-emphasis (PE) → FM modulátor (f_D = 75 kHz) → antenna.
- Spektrum: M 0…15 kHz, pilot 19 kHz, S 23…53 kHz (38 kHz körül AM-DSB/SC), RDS 57 kHz, B_jel = 60 kHz, f_D = 75 kHz.
- A moduláció után a ~100 MHz-es vivő körül B_össz = 2(f_D + B_jel) = 2(75 + 60) kHz = 270 kHz (Carson szabály).
- RDS: 1187,5 b/s BPSK, α = 100%. Csatorna adatai, idő, útinfó, …
- A zaj feszültsége egyenletesen nő a frekvenciával (háromszögzaj), ezért a teljesítménye parabolikusan nő. A magasabb részt érdemes jobban erősíteni (pl. RDS): **pre-emphasis** (előkiemelő), vevő oldalon **de-emphasis** (utóelnyomó, kiemelés kompenzáló).
- Digitális adás (DAB+) elérhető volt Magyarországon is 2020 őszig: + jobb zajtűrés, + több információ, − minden készüléket le kell cserélni.

### Televíziós műsorszórás
- Magyarországon 1955 óta. Analóg videóátvitel volt, mára CSAK digitális adás létezik. Internet felett: IPTV.
- Színcsatornák: R, G, B. (Emlékeztető az emberi látásról: 2' felbontás, 10' színfelbontás, 24 FPS mozgókép (15…30), 45…60 Hz villogás határ, 20° ↔, 10° ↕ látómező, Y = 0,3R + 0,59G + 0,11B.)
- Analóg adás: 0 = 0,3(R − Y) + 0,59(G − Y) + 0,11(B − Y), ezért a fényességinformációt is átvisszük (luminancia, Y). Krominancia: C_r = 0,3(R − Y), C_b = 0,11(B − Y) [a jegyzet szerint].
- Átvitel csatornái: Y C_r C_b (fekete-fehér: Y) + függőleges és vízszintes szinkron.

**Digitális átvitel**
- Trükkök: „az ember úgy sem veszi észre”, tömörítés. Kockás, darabos átvitel lehet.
- Előny: szabályozható átvitel (jogosultság), metaadat.
- **DVB**: Digitális Videó Adás. DVB-T: földfelszíni adás. DVB-C: kábel. DVB-S: műholdas (analóg műholdas: FM, f_D ≈ 6 MHz → B = 2(6 + 7,25) = 26,5 MHz). DVB-H: mobilra történő műsorszórás (alternatíva: internet).
- Általában: progresszív kódolás (1280×720 → 720p, 1920×1080 → 1080p), interlaced (2 képkocka összefűzve, 1080i). MPEG-2, MPEG-4, H.264 tömörítés → késleltetés: kellő mennyiségű adat összevárása, időérzékeny adat nem vihető át. QAM moduláció. OFDM csatornaosztás (akár 6048 vivő és ~800 pilot frekvencia, 8 MHz sáv), jól véd Doppler és interferencia ellen.

Megvalósítások:
- **DVB-C**: QAM 16/64/256, emelt koszinusz (a jegyzetben α = 0,5 olvasható, a gyakorlaton α = 15%), 8 MHz sáv, 38 Mb/s, OFDM, esetleg QPSK.
- **DVB-S**: QPSK, emelt koszinusz α = 0,35, védelmi információk, 37,1 MHz sáv, 38 Mb/s, FEC 3/4 (Forward Error Correction) kódolás (+ Reed-Solomon).
- **DVB-T** (pl. MinDigTV): QAM 4/16/64 + OFDM, „2k” vagy „8k” mód. Szimbólumidő 224/896 μs, 7,61 MHz sáv. Jelzési időhöz hozzáadjuk a GI-t (Guard Interval) T/4, T/8, T/16, T/32 (ISI ellen). Reed-Solomon (204, 188) hibavédő kódolás (+ FEC 3/4).
- **SFN**: Single Frequency Network, a területet mindenhol ugyanazzal a frekvenciasávval sugározzák be (nem zavar az interferencia).

---

## Előadás 10 (2021.04.23.) Cellás mobiltelefónia → 10. témakör

**PLMN**: Public Land Mobile Network. Hatszögletű cellák: elvi lefedési modell.
- Szomszédos cellák vivője eltérő (interferencia ellen). Minden cellában külön uplink és downlink vivőfrekvencia.
- N-es clustereket hozunk létre (pl. N = 3: a, b, c, a: f_v1…f_v5, b: f_v6…f_v10, c: f_v11…f_v15). N: **frequency reuse factor (FRF)**.
- A vevő celláról cellára halad. Az aktuális cella térerősségeiből a telefon tudja a cellahatártól való távolságát. Átlépéskor az új cella vivői erősebbek, a telefon engedélyt kér az adótól a csatlakozásra (ha túl sokan vannak benne, megtagadja az adó).
- N = 3 a gyakorlatban nem jellemző, N = 7, N = 12 jellemzőbb.
- N növelésével az interferencia esélye csökken, de az adók és a vevők bonyolultabbak, illetve nagyobb sávszélesség kell, vagy szűkebb az egy cellára jutó sávszélesség (kevesebb vevő „fér bele”).
- Adótornyokat a sarkokba telepítenek, 3 db 120°-os szögű antennával, főirány a cella közepe. Valójában 65°-nál már 3 dB-lel csökken a teljesítmény!
- Nagyobb cellák → kevesebb adó, nagyobb távolság. Kisebb cellák → több vevő kiszolgálható, kisebb interferencia. Felhasználósűrűségtől függ a cellaméret.
- Teljesítmény: szabvány korlátozza (telefon: fejtől elfelé ≤ 2 W).
- Architektúra: mobiltelefon ↔ rádiókapcsolat ↔ bázisállomás ↔ **maghálózat** (networking subsystem) ↔ internet, vezetékes telefon, vészhelyzeti központ, más szolgáltatók (akár külföldön).
- **Roaming**: idegen hálózatról „telefonálunk haza”.

### Generációk
**1G: Nordic Mobile Telephony (NMT)**, 450 MHz analóg.
- 1973: skandináv országokban nagy áttörés (nehéz lenne kábellel összekötni). Először Szaúd-Arábiában. Magyarországon először 1990-ben. 2010: az utolsó NMT adást is leállították (Izland). Magyarországon 2003-ban állt le.
- Beszéd: FM, jelzés: FSK.

**2G: GSM** (a jegyzetben „Global Systems for Telecommunication”, helyesen Global System for Mobile Communications).
- Francia eredetű szabvány.
- 900 MHz körül: uplink 890…915 MHz, downlink 935…960 MHz (a nagyobb frekvencia hamarabb elhal, nagyobb teljesítménnyel kell adni, ezért a bázisállomás kell ezzel adjon).
- Minden vivő körül 200 kHz sáv, digitális átvitel, összesen 124 darab vivő, széleken 100 kHz védősáv.
- 1 vivő 8 időrésre van osztva (TDMA) → 992 felhasználó cellánként.
- Beszédkodekek:
  - PCM: 300…4000 Hz komponensek (sávszűrő), 8 kHz mintavétel, 8 bites lineáris kvantálás → 64 kb/s, túl nagy, és még nem is volt hibavédő kódolás!
  - GSM kodek: 8 kHz mintavétel, 13 bites kvantálás, tömörítés európai nyelvek jellemzői alapján → 13 kb/s bitsebesség kell (full-rate kodek, half-rate 6,5 kb/s). Más nyelvekre, adatra nem jó! A beszédet 20 ms-os időintervallumonként 260 biten kódoljuk, plusz 196 bit hibavédő → 456 bit 20 ms alatt → összesen 22,8 kb/s.
- **GMSK**: Gaussian Minimum Shift Keying → 230 kHz sávigény. N = 12 → 1 cellára 10…11 vivő jut, amik elosztható úgy, hogy meglegyen a 230 kHz.
- **Frequency hopping**: a vevőkészülék a neki legjobb vivőn tudja nagy eséllyel adni. A bázisállomás kapcsolódáskor megadja az algoritmust. Így a változó terepviszonyok mellett is mindenkinek egyenlő esélye van jól venni.
- Adás és vétel külön időrésben történhet, a maradék 6/8 időben mérést végez: kell-e váltani? Merre jó a vétel?
- **Voice Activity Detection**: a csendet nem adja, helyette csak egy „csend” flaget ad. Ekkor a vevő komfortzajt ad, hogy ne higgyük azt, hogy elment a vonal (**Comfort Noise Generation**), ezt az eszköz generálja!
- Titkosított csatorna, kulcscsere (most nem tárgyaljuk). Csak a rádiószakaszon, a maghálózatban már nem feltétlenül.
- GSM azonosítók: megkülönböztethető, de személyes adatokhoz nem kötött azonosítószám.
  - **IMEI** szám (International Mobile Equipment ID, „készülékazonosító”), 15 jegyű.
  - **IMSI**: International Mobile Subscriber ID, a SIM kártya (Subscriber ID Module) egyedi azonosítója, 15 jegyű. Magyarország: 216 30 + 10 jegy, 216 70 + 10 jegy, 216 01 + 10 jegy.
  - **MSISDN**: maga a hívószám (+36…).
  - **TMSI**: Temporary IMSI. Először átmegy az IMSI, de a kapcsolat további részére ezt használják, a készülék mindig újat kap. 32 bites, a protokollüzenetekben ez jelenik meg → rugalmas előfizetés- és hívószámkezelés.
- Hitelesítés kell a csalás ellen.
- Mobilitás: újonnan a cellába lépő eszközt és előfizetőt azonosítani kell.

**3G, UMTS, 4G, LTE, 5G**: hasonló architektúrájúak, de internetkapcsolatra, jóval nagyobb sávszélességre képesek. A GSM kiegészítései.

### GSM hálózati elemek
- A bázisállomások központi vezérlésűek, vezérlőközpontból (**BSC**: Base Station Controller) is több van.
- Ezeket az **MSC** (Mobile Switching Center) / **VLR** (Visitor Location Register) vezérli, ami egy mobilfunkciókkal kiegészített telefonközpont, ami tárolja az általa kezelt előfizetők (területi alapon) szolgáltatási adatait. Ebből csak néhány van.
- Ezeket a **HLR** (Home Location Register) vezérli, ami egy-egy szolgáltató összes ügyfelének adatait tárolja. Az MSC-VLR lekéri a szükséges adatokat az előfizető honos HLR-jétől, amint az előfizető annak területére lép.
- A HLR mellett van **EIR** (Equipment Identity Register), ami a készülékek adatait hitelesíti (lopott? nem megfelelően kapcsolódik? stb.), **AUC** (Authentication Center: a SIM tényleg az, akinek mondja magát?), **SMSC** (üzenetközpont), **O&M** (felügyeleti, hibajavító rendszer), **B&C** (számlázó rendszer), …

---

## Előadás 11 (2021.04.30.) ABCDE5G, IoT → nincs külön témakör (12. „extra” közelében, kifejtős kérdésnek jöhet)

ABCDE5G: AI, Blockchain, Cloud Computing, Data Science, Edge Computing + 5G. IoT: Internet of Things. „A jövő gyára.”
- Co-bot: ember és robot együtt dolgozik. Adatgyűjtés → prediktív analízis → intelligens szervizelés. AR támogatás alkalmazottaknak. Gépi látás, szenzorok. Moduláris berendezések. Önvezető szállító járművek.
- Ipar elvárásai: nagy megbízhatóság, gazdaságosság, komplex folyamatok kezelése, rendszerek együttműködése, biztonság (security: berendezés védett legyen), biztonságosság (safety: berendezés ne okozzon kárt), tömegtermelt eszközök egyedi konfigurációkban, adatok valós idejű (RT), biztonságos megosztása, optimalizáció, mérnöki munka segítése, …
- **Kiberfizikai rendszerek**: szabályozási körök (visszacsatolás), ember és gép is lehet a hurokban. A fizikai és informatikai világ hatással vannak egymásra. Érzékelés és beavatkozás helyben, adatfeldolgozás akár távolabb. Gyors kommunikáció kell → 5G, felhő, Edge Computing. Kiberbiztonság fontos. EU IoT keretrendszere: Arrowhead.
- **AI az iparban**: automatizált tervezés, beszédfeldolgozás, gépi látás, predikciók, ütemezett végrehajtás, erőforráskezelés, hibafelismerés, analitika, autonóm járművek, minőségbiztosítás. Gépi tanulás, mély neurális hálók óriási adathalmazokkal, előre nem látott minták is felismerhetők.
- **Blockchain**: követhetőség (időbélyeg, nonce), letagadhatatlanság (megbízhatóság), elosztott tárolás. Adatintegritás ellenőrizhető: aszimmetrikus titkosítás, hash, digitális aláírás. Adatbiztonság: bizalmasság (titkosítás), integritás (módosítás, adatvesztés elleni védelem), elérhetőség (elosztott tárolás). → Biztonságos, intelligens, önteljesítő szerződések. Minőségbiztosítás, hibakövetés, hitelesítés, eszköz történetének visszakövetése, termékvisszahívás intelligens lebonyolítása.
- **Felhőtechnológiák**: nagy adathalmazok, komplex szolgáltatások erőforráshatékony, megbízható, rendszerszintű feldolgozása és tárolása.
- **Adattudomány**: statisztika, modellek, predikciók nagy adathalmazon, tudáskinyerés.
- **Edge Computing**: feldolgozás a hálózat peremén. Sok kisebb helyi feldolgozóegység a felhővel összehangolva.
- **5G**: hatékony, nagysebességű (Gb/s), nagy lefedettségű, biztonságos, nagy mobilitást tűrő, kis késleltetésű (< 1 ms), megbízható, nagy végpontszámú (1 millió/km²) hálózati kommunikáció, az ipari megoldások csúcstrázsa. Decentralizált, párhuzamosított, feladatnak megfelelő szeletekre osztott (végponttól végpontig garantált paraméterek) maghálózat, rengeteg lokális alhálózattal.

---

## Előadás 13 (2021.05.14.) Vegyes példák (vizsgafelkészítő) → 4., 3., 5., 7., 10. témakör

**1. PAM, ISI** (4. témakör)
h(t) = 1,05 a [0, T) intervallumon, 0,15 a [T, 2T) intervallumon, utána 0. Bitsorozat 1 0 1 1 1 0, mintavétel t₀ = T/4-nél.
- A vett jel szintjei ±1,2 (két egyforma bit egymás után: 1,05 + 0,15) és ±0,9 (váltás: 1,05 − 0,15).
- Igen, keletkezik szimbólumközti áthallás, de 0 döntési hiba. Szemábra: a szem ±0,9 és ±1,2 között, nyitott.
- 4 szintű: +3, +1, −1, −3 → t-ben 3,15, 1,05, −1,05, −3,15, t+1-ben 0,45, 0,15, −0,15, −0,45. Legrosszabb eset +3 után −1: 0,45 − 1,05 = −0,6, még jó lehet.
- 8 szintű: +7 +5 +3 +1 −1 −3 −5 −7. Legrosszabb eset +7 után −1: 7·0,15 − 1,05 = 0, nem tud dönteni, a zaj határoz meg! +7 után +1: a döntési küszöb fölé kerül, 3-at dönt!

**2. Emelt koszinusz** (4. témakör)
T = 833 μs, B = 1200 Hz. Két szomszédos szimbólum spektruma ±1/2T-nél h₀/2-ben metszi egymást, 0 szimbólumközti áthallás. B = 2·1/2T = 1/T (α = 1).

**3. Mobiltelefon** (10. témakör)
MS-A1 és MS-A2 a HLR_α-hoz tartozik, MS-A2 épp HLR_β területén van.
- a) MS-A2 hívásindítása HLR_β BTS-éhez érkezik.
- b) HLR_α kerül lekérdezésre.
- c) A2 hordozott szám → HLR_β FNR-ét kell kérdezni (FNR: számhordozási regiszter).
- d) MS-A1 SIM kártyáját HLR_α EIR, AuC egységei azonosítják.
- SMS: saját szolgáltató (HLR_α) SMSC-je tárolja.
- Barangolásról HLR_α és HLR_β MSC-VLR-je szerez tudomást (+ BTS, BSC).

**4. AM-DSB** (3. témakör)
- a) 20 μs osztás → moduláló 20 kHz, vivő 100 kHz.
- b) Modulációs mélység: 2 V vivő, 1 V moduláló → 50%.
- c) Csúcstól csúcsig azért nem 6 V, mert a vivő és a moduláló nincsenek fázisban.

**5. NRZ BPSK** (5. témakör)
Bitsorozat 10110, szimbólumsebesség 2/3·f_vivő → T_szimbólum = 3/2·T_vivő. Az 1 és a 0 elemi jel másfél vivőperiódus, ellentétes fázissal.

**6. Sík terepen frequency reuse factor N = 7 cluster** (10. témakör)
70 FDM vivő → cellánként 10, idő: 8 időrés → 560 beszélő cellánként.

**7. Hangosság** (7. témakör)
- P = 1 W, f = 1 kHz → 93 dB. Fájdalomküszöb 120 dB → 27 dB különbség → 500 W kellene (27 dB = 30 dB − 3 dB → ·1000/2).
- Phon-ban 120 phon, mert 1 kHz-en nézzük.
- f = 100 Hz, P = 1 W → 109 dB. Okai: hangszóró átviteli karakterisztikája, mérőeszköz karakterisztikája, interferencia, csillapodás frekvenciafüggése.
