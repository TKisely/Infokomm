---
title: "ALL-IN-Infokomm-1.pdf – oldalankénti átirat"
forras: "Local Sources/BME/Infokom/ALL-IN-Infokomm-1.pdf (175 oldal; a PDF csak helyben van, .gitignore)"
jeloles: "[bizonytalan: …] = nem biztosan olvasható · [olvashatatlan] · [kép: …] = a képen lévő ábra szöveges leírása · »…« = átírói ellenőrzés vagy megjegyzés · ⚠️ = a forrásbeli megoldás hibás"
adatvedelem: "A hallgatói felhasználóneveket, neveket és pontszámokat az átirat nem tartalmazza (publikus repó). A javítói megjegyzések és a pontozás (pl. 1+0+0) megmaradnak."
---

# ALL-IN-Infokomm-1.pdf – átirat

**Szerkezet:** 1–9. oldal Moodle-elővizsga (2020.05.26) · 10–17. oldal Moodle-vizsga (2020.06.02) · 18–88. oldal hallgatói vizsgamegoldások (2014–2016) · 89–145. oldal „Infokommunikáció feladatok” (a gyakorlati példatár feladatai fejezetenként) · 146–175. oldal az „5-ösöm lesz infokommból” (duplikátum, átirata: `Forrasok/5-osom/`).

**Azonosítók:** `ai<oldal>_<feladat>`, a vizsgáknál a vizsga dátumával is (pl. `ai2020_06_02_Q7`, `ai2016_01_05_4`). A korábbi `vz…` azonosítók ugyanezekre a feladatokra mutatnak.

**Haladás:** az átirat végén a „Feldolgozva eddig” sor mutatja az utolsó kész oldalt.

---

## A) Moodle-elővizsga, 2020.05.26 (BMEVITMAB03, „Elővizsga”) · 1–9. oldal

### 1. oldal · Q1 (2/2 pont) · `ai2020_05_26_Q1`
**Feladat:** Sík föld feletti kétutas rádióösszeköttetés: adóantenna-magasság 10 m, szakasztávolság 10 km, üzemi frekvencia 300 MHz, adóantenna-nyereség 5 dB, vevőantenna-magasság 10 m, vevőantenna-nyereség 3 dB, a reflexió tökéletes. a) Mekkora a szakaszcsillapítás? b) A vevőantenna magasságának változtatásával mekkora lesz a minimális és maximális vételi térerősség abszolút értékének aránya, ha a földreflexiós tényező nem −1, hanem −0,8?
**Hallgatói megoldás:** a) Ebben az esetben a szakaszcsillapítás nem függ a frekvenciától. [kép: a képlet nincs a szövegben] Így 112 dB adódik. A képletet úgy kapjuk, hogy a kétutas csillapítás = egyutas · (E₀/E_r)², ide az egyutas képletét és (E₀/E_r)-t behelyettesítve a 4π és a λ kiesik, csak r, h_T és h_R marad. b) E_rmax/E_rmin = (1 + 0,8)/(1 − 0,8) = 9.
**Javító:** nincs megjegyzés (teljes pont). »Ellenőrizve: 20lg(10⁸/100) − 8 = 112 dB ✓.«

### 2. oldal · Q2 (3/3 pont) · `ai2020_05_26_Q2`
**Feladat:** Egy T jelzési idejű bináris alapsávi PAM rendszer elemi jele az ábrán látható. [kép: h(t) = 1,25 a (0, T) szakaszon, 0,45 a (T, 2T) szakaszon (szaggatott vonal 0,45-nél), máshol 0; a t tengelyen T és 2T jelölve] a) Rajzolja fel a PAM jelet a …-0-1-1-0-0-1-… bitsorra (1 → +1, 0 → −1). b) Keletkezik-e szimbólumközti áthallás, ha a mintavétel fázisa T₀ = 3T/4? c) Rajzolja fel a négyszintű (d_k = −3, −1, +1, +3) jel szemábráját, alkalmas-e az elemi jel négyszintű rendszerre?
**Hallgatói megoldás:** a) ábra csatolva (2.jpg, a PDF-ben nincs benne), az új szimbólumba mindig belelátszik az előző érték is. b) Mindig a döntési küszöb felett vagy alatt vagyunk (±0,8 és ±1,7; 0 a küszöb), ezért kétszintű esetben nincs hibás döntés. c) Az elemi jel miatt több helyen lesz áthallás, pl. 3-as után 1-es: 1,25·1 + 0,45·3 = 2,6, ami bőven a 2-es küszöb felett van → négy szintre nem alkalmas.
»Ellenőrizve: 1,25 ± 0,45 = 1,7 és 0,8 ✓. Ez az elemi jel (1,25 / 0,45) más, mint a TMIT G.5.1 és Marosi 1,05 / 0,15-ös jele.«

### 3. oldal · Q3 (3/3 pont) · `ai2020_05_26_Q3`
**Feladat:** Bináris lineáris blokk-kód: 00 → 00000, 01 → 01110, 10 → 10101, 11 → 11011. a) Generátormátrix, legvalószínűbb üzenet v = (01010) esetén. b) Paritásellenőrző mátrix, szindróma v-re. c) Hány bithiba detektálható és javítható biztosan?
**Hallgatói megoldás:** a) G = (10101; 01110). v = 01010 a 01110-hoz van legközelebb (Hamming-távolság 1, a többihez 2, 5 és 2) → az üzenet 01. b) Hᵀ = (101; 110; 100; 010; 001) (G hátsó része adja Hᵀ tetejét, alá n−k-s egységmátrix). S = (100) (Hᵀ 2. és 4. sorának XOR-ja). c) d_min = 3 → 2 észlelhető, ⌊(d_min−1)/2⌋ = 1 javítható.
»Ellenőrizve ✓ (01010 és 00000 távolsága 2, 10101-é 5, 11011-é 2).«

### 4. oldal · Q4 (2/3 pont) · `ai2020_05_26_Q4`
**Feladat:** AM-DSB modulátor, 100 kHz-es vivő, 20 kHz-es szinuszos moduláló jel, modulációs mélység 50%, a modulált jel csúcsértéke 6 V. a) Rajzolja fel léptékhelyesen legalább 50 µs-os szakaszát. b) Időfüggvény, időegység, spektrális összetevők frekvenciája és amplitúdója. c) Átlagteljesítmény.
**Hallgatói megoldás:** a) ábra csatolva. b) f [kHz] miatt t [ms]; 100 kHz: 4 V (U_v); 80 kHz: 1 V (U_m/2); 120 kHz: 1 V. c) P = A²/2, A = 4 V → 8 W.
**Javító:** „teljesítmény nem jó – minden komponensé számít!” ⚠️ »Helyesen: P = 4²/2 + 2·1²/2 = 9 W (1 Ω).«

### 5. oldal · Q5 (3/3 pont) · `ai2020_05_26_Q5`
**Feladat:** Hangsugárzóra 1 W-os, 1 kHz-es jelet vezetve 1 m-re a hangnyomásszint 93 dB. a) Mekkora teljesítmény kell, hogy elérje a fájdalomküszöböt (a hangsugárzó maradéktalanul lesugároz)? b) A mérőmikrofon helyén hány phon hangosságú az a) esetben? c) Mivel magyarázható, hogy 100 Hz-en azonos teljesítménnyel 1 m-re 109 dB mérhető?
**Hallgatói megoldás:** a) SPL = 10·lg(I/I₀), I₀ = 10⁻¹² W/m². Ha a fájdalomküszöböt kb. 123 dB-nek vesszük, 30 dB-lel kell növelni → kb. 1000-szeres teljesítmény, 1000 W (feltételezve, hogy 123 dB a fájdalomküszöb). b) 1 kHz-en a phon és a dB skála egyezik → 93 phon. c) A hangszóró és a mikrofon karakterisztikája frekvenciafüggő; 100 Hz-en egy mélynyomó nagyobb hangnyomást adhat, vagy a mikrofon érzékenyebb; 1 m-re interferencia is lehet.
»Megjegyzés: a b) kérdés az a) esetre vonatkozik, ott a hangosság a fájdalomküszöb, azaz 120 (illetve a feltételezés szerint 123) phon, nem 93 phon. A javító ennek ellenére teljes pontot adott. 120 dB-lel: 10^2,7 ≈ 500 W.«

### 6. oldal · Q6 (3/3 pont) · `ai2020_05_26_Q6`
**Feladat:** a) Rajzoljon egy N = 7 Frequency Reuse Factor-ral rendelkező, nyílt, sík terepre ésszerűen elrendezett klasztert, és körvonalaival két szomszédos klasztert is. b) 70 FDM-csatornával mennyi lehet az aktív, éppen telefonáló GSM-előfizetők száma ebben a klaszterben (900 MHz-es szolgáltató)? c) Mi az FRF szerepe a GSM-modellben, mi a nagy FRF előnye és hátránya a kicsihez képest?
**Hallgatói megoldás:** a) ábra csatolva (4.jpg, nincs a PDF-ben). b) Egy klaszterben használják fel a 70 csatornát, mindegyik 8-as időosztásban → 8·70 = 560. c) Az FRF megadja, hány cella tartozik egy klaszterhez. Nagy N előnye: az azonos frekvenciát használó cellák távolabb vannak, kisebb az interferencia. Hátránya: kevesebb ember telefonálhat egy cellában, hiszen egy cellára (összes csatorna)/N jut; pl. 120 csatornánál N = 12-vel csak 10·8 ember. Tipikus N: (3), 7, 12.
»Ellenőrizve ✓.«

### 7. oldal · Q7 (3/3 pont) · `ai2020_05_26_Q7`
**Feladat:** a) Rajzolja le egy NRZ (négyszög)jellel vezérelt BPSK jel időfüggvényét a 10110 bemenetre, ha a szimbólumsebesség számértékileg a vivőfrekvencia kétharmada; szaggatott vonallal a modulálatlan vivőt is (2 pont). b) Definiálja egyértelműen az összerendelési szabályt!
**Hallgatói megoldás:** a) ábra csatolva (5.jpg). T_sz = 3·T_v/2, azaz 1 szimbólum 1,5 vivőperiódus. b) 1 → d_k = +1, 0 → d_k = −1; s_BPSK = x(t)·(vivő), ahol x(t) az aktuális d_k (±1).
»Ugyanez a feladat: Koma `ea13_5`, TMIT G.6.2 (más bitsorral). A hallgató „négyszögjel”-et írt vivő helyett, a szöveg szerint a vivő szinuszos.«

### 8. oldal · Q8 (1/2 pont) · `ai2020_05_26_Q8`
**Feladat:** [kép: két GSM-szolgáltató (α és β) hálózatelemei: α oldalon AuC, HLR_α, FNR, EIR, GMSC, VLR, MSC, SMSC, BSC, BTS, MS-A1; β oldalon FNR, HLR_β, AuC, EIR, GMSC, SMSC, MSC, VLR, BTS, BSC, MS-A2; nyíl MS-A1-től MS-A2 felé] MS-A1 és MS-A2 is az α előfizetője, MS-A2 a β hálózatában barangol, épp az imént beszélt MS-A1-gyel. Most MS-A1 hívja MS-A2-t. (a) Melyik eszközhöz érkezik először információ „MS-A2 hívásindításáról”? (b) Melyik HLR kerül lekérdezésre? (c) Melyik eszközök szereznek tudomást MS-A2 β-hálózatbeli mozgásáról? (d) Melyik eszköz segítségével azonosítják MS-A1 SIM-kártyáját? (Az a–b és a c–d együttesen ér 1–1 pontot.)
**Hallgatói megoldás:** a: α-BTS · b: α-HLR · c: α-HLR (az utolsó ismert VLR-t tárolja; ezen felül β-MSC és β-VLR) · d: α-AuC.
**Javító:** „c helytelen: a BSC is… (és persze a BTS)”. »Helyesen (c): β-BTS, β-BSC, β-MSC, β-VLR és α-HLR. A kérdés (a) részében az „MS-A2 hívásindítása” a feladat szövegében így áll (a hívó MS-A1), a válasz α-BTS.«

### 9. oldal
A Moodle-oldal lábléce (BME-linkek, kapcsolat), feladatot nem tartalmaz.

---

## B) Moodle-vizsga, 2020.06.02 („Vizsga – 06.02.”) · 10–17. oldal

### 10. oldal
A vizsga fejléce (kezdés 14:15, befejezés 15:39, 1 óra 24 perc). Feladatot nem tartalmaz.

### 11. oldal · Q1 (2/2 pont) · `ai2020_06_02_Q1`
**Feladat:** a) A Kraft–McMillan-egyenlőtlenség felhasználásával vizsgálja meg, lehet-e egyértelműen megfejthető kódot készíteni a 2,2,3,3,3,4,4,4,4 kódszóhosszakkal! b) Készítsen prefixmentes kódot a 2,2,3,3,3,5,5,5,5 kódszóhosszakkal!
**Hallgatói megoldás:** a) egyértelműen megfejthető kód készíthető, ha Σ 2^(−lᵢ) ≤ 1; itt 1,125 → nem készíthető. b) a tétel pont 1-et ad → készíthető; egyik kódszó sem előtagja a másiknak: 00, 11; 010, 011, 100; 10100, 10101, 10110, 10111.
»Ellenőrizve ✓.«

### 12. oldal · Q2 (2/3 pont) és Q3 (2/2 pont)
**`ai2020_06_02_Q2` Feladat:** a) Rajzolja fel az FM-sztereó alapsávi, frekvenciatartománybeli képét! b) Miért halljuk mono vevőkészülékkel mindkét (bal és jobb) csatorna jelét? c) Milyen következménnyel jár, ha az amplitúdóhelyesen regenerált M összetevőhöz képest az S komponens (pl. alkatrészhiba vagy rossz beállítás miatt) 6 dB-lel csillapodik?
**Hallgatói megoldás:** a) rajz csatolva: mono és sztereó jel, AM-DSB/SC moduláció, a szükséges jelek (RDS) hozzáadása, majd az egész frekvenciamodulálása. b) L + R = M (mono), így a szűrők után mindkét csatorna jelét halljuk. c) Ha az S 6 dB-lel csillapodik, a zaj sokkal jobban beleszámít az S-be, mert a zaj nem egyenletes eloszlású, az eredmény rosszabb minőség.
**Javító:** „1 + (1) + 0. Vajon a (b) válaszban milyen szűrőkről van szó?” ⚠️ »A c) helyesen: áthallás, L' = 0,75L + 0,25R, R' = 0,25L + 0,75R, a csatornaszeparáció ≈ 9,5 dB. A b)-ben a 15 kHz-es aluláteresztőt kell megnevezni.«

**`ai2020_06_02_Q3` Feladat:** Bináris FSK, f₁ = 22 200 Hz, f₂ = 24 200 Hz. a) Frekvencialöket, b) vivőfrekvencia (indoklással).
**Hallgatói megoldás:** a) (f₂ − f₁)/2 = 1000 Hz. b) (f₁ + f₂)/2 = 23 200 Hz; FSK-nál a 0 és az 1 megkülönböztetése f₁ és f₂ alapján történik. **Javító:** 1 + 1.

### 13. oldal · Q4 (1/2 pont) és Q5 (3/3 pont)
**`ai2020_06_02_Q4` Feladat:** Mekkora nettó (a forrásnál érzékelhető) bitsebességre képes egy QAM-16 modulációt használó rendszer, amely emelt koszinuszos elemi spektrumú jellel dolgozik, hibadetekcióhoz [n,k] = [160,100] kódolást használ, és a rendelkezésre álló teljes sávszélesség 20 MHz? (2 pont)
**Hallgatói megoldás:** QAM-16 → 4 bit/szimbólum; az emelt koszinusznál α = 1 (ideális eset), B = 2·(1/2T)·2 (a végén a ×2 az emelt koszinusz miatt), innen T = 0,025 µs → 4/0,025 µs = 160 Mbps → ·100/160 = 100 Mbps. **Javító:** 0 + 1. ⚠️ »α = 1-gyel B = (1+α)/T = 2/T → 1/T = 10 MBd → 40 Mbit/s → ·100/160 = **25 Mbit/s**. α = 0-val 50 Mbit/s. A hallgató a sávszélesség-képletet rosszul rendezte át.«

**`ai2020_06_02_Q5` Feladat:** AM-DSB, 240 kHz-es vivő, 30 kHz-es szinuszos moduláló jel, modulációs mélység 100%, csúcsérték 6 V. a) Léptékhelyes rajz (legalább 33 µs). b) Időfüggvény, időegység. c) Spektrális összetevők és amplitúdóik.
**Hallgatói megoldás:** a) kép csatolva, m = U_m/U_v, U_csúcs = U_v + U_m alapján U_v és U_m. b) a képen, ms a kHz miatt. c) 240 kHz: 3 V, 210 és 270 kHz: 1,5–1,5 V. »Ellenőrizve ✓ (U_v = U_m = 3 V).«

### 14. oldal · Q6 (1/3 pont) · `ai2020_06_02_Q6`
**Feladat:** Vállalati VoIP, G.711-változat: 10 ms-os beszédszegmensekből 80 byte-os adat, egy csomagba két szegmens kerül, a fejrészek összesen 47 byte. a) Mekkora a csomagsebesség? b) Mekkora a VoIP csatorna bitsebessége? c) Milyen hátránnyal járna, ha egy csomagba négy 10 ms-os szegmens kerülne?
**Hallgatói megoldás:** a) V_forrás = 80 byte/10 ms = 64 kbps, V_csomag = 64 kbps/(2·80·8) = 50 bps. b) csomagsebesség ·2 a G.711 miatt → 100 bps. c) a csomagsebesség a felére csökkenne. **Javító:** 1 + 0 + 0. ⚠️ »Helyesen: a) **50 csomag/s**; b) (2·80 + 47)·8·50 = **82,8 kbit/s**; c) n = 4: 25 csomag/s, (320 + 47)·8·25 = 73,4 kbit/s, hátrány: 40 ms-os csomagolási késleltetés, és egy elveszett csomag 40 ms beszédet visz el.«

### 15. oldal · Q7 (2/4 pont) · `ai2020_06_02_Q7`
**Feladat:** Sík vidéken, Mezőkovácsházán a gabonatárolónál 96 m-rel a tengerszint felett üzemel a rádióadó, maga az adótorony 40 m magas. A Kossuth Rádiót sugározza 83,3 MHz-en, FM-mel. A 650 m-re lévő művelődési ház előtt 1 m magas asztalon van a szuperheterodin vevő, F_KF = 10,7 MHz. a) Felső keverésnél hová kell hangolni az oszcillátort? b) Hol van a tükörfrekvencia? c) A vevő túl van-e a kétutas terjedés interferenciazónáján (az adótól legtávolabbi lokális térerősség-maximumon)? d) Mekkora a szakaszcsillapítás, ha az adóantenna nyeresége 20 dB, a vevőé 10 dB?
**Hallgatói megoldás:** a) 83,3 + 10,7 = 94 MHz. b) 83,3 + 2·10,7 = 104,7 MHz (a felső keverés jobb, mert a tükör messzebb kerül a hasznostól). c) „ha az interferenciazónán kívül vagyunk, akkor r < 4h_Th_R/λ”, ennek értéke 4264,96 m, r = 650 m → kívül vagyunk. d) Közvetlen rálátás van, egyutas terjedés: a = 20lg(4πr/λ) − G_T − G_R ≈ 37 dB.
**Javító:** „a és b OK, c elszámolva, d elszámolva.” ⚠️ »Helyesen: λ = 3,6 m, h_T = 40 m (sík terep), h_R = 1 m → 4h_Th_R/λ = 44,4 m; 650 m > 44 m, tehát a vevő túl van a zónán, ezért a kétutas képlet kell: 20lg(650²/40) − 30 ≈ **50,5 dB**. A b) indoklása is pontatlan: a tükör mindkét keverésnél 2f_KF-re van.«

### 16. oldal · Q8 (3/3 pont) · `ai2020_06_02_Q8`
**Feladat:** Tervezzen mintavevő rendszert egyenletes kvantálóval, amelynél egy valós, √2 csúcstényezőjű, teljes kivezérlésű bemenő jel visszaállításakor legalább 64 dB a jel-zaj viszony. A jel 40 és 70 kHz között tartalmaz komponenseket. a) Az átlapolódásmentességet biztosító összes mintavételi frekvencia. b) Milyen be- és kimenő szűrők használhatók? c) Hány bites kvantáló kell, ha sávszűrők nélkül, aluláteresztőkkel is visszaállítható a jel?
**Hallgatói megoldás:** a) f_s > 2B → f_s > 140 kHz biztos; kisebb is lehet: f_s − 40 < 40 → f_s < 80 és f_s > 70 → 70 < f_s < 80. b) 140 kHz-nél aluláteresztő, 70…80 kHz-nél sáváteresztő. c) SNR = (3/c²)·(f_s/2B)·2^(2n); 64 dB → n = 10,3 → 11 bit. **Javító:** 1 + 1 + 1. »Ellenőrizve ✓ (HTML-példatár 2.5).«

### 17. oldal
Moodle-lábléc, feladatot nem tartalmaz.

---

## C) Hallgatói vizsgamegoldások (gépelt és képes vegyesen) · 18–88. oldal

### 18. oldal · 2016.01.05. Infokommunikáció vizsga [a megoldó felhasználóneve kihagyva]
**`ai2016_01_05_1`** [kép: a feladat szövege beszkennelve] Egy jelet, amelynek 45 kHz és 75 kHz között vannak komponensei, közvetlenül digitálissá kell alakítani és úgy továbbítani. a) Mekkora legyen a mintavételi frekvencia aluláteresztő szűrővel? → f_s ≥ 2·75 = 150 kHz. b) Sávszűrő esetén? → f_s − 45 ≤ 45 → f_s ≤ 90 kHz, 2f_s − 75 ≥ 75 → f_s ≥ 75 kHz. c) A legkisebb mintavételi frekvenciával rajzolja fel a spektrumképet → f_s = 75 kHz. »✓ (HTML 2.4)«
**`ai2016_01_05_2`** Kétutas terjedés: a vett jel kétszeres volt egy adott távolságban (adott h_T, h_R), h_R a felére csökkent, lehet-e még fogni a jelet? Hallgatói válasz: 3 dB a kétszeres teljesítmény, viszont a nagy r-re érvényes képletben 20lg(r²/(h_Th_R)), ha h_R a fele, 20lg2-vel = 6 dB-lel nő a szakaszcsillapítás, az pedig nagyobb a 3 dB-nél. [A lapon kérdőjel.] »Megjegyzés: a feladat szövege csak emlékezetből van leírva, pontos adatai hiányoznak. `[ELLENŐRIZENDŐ]` A gondolatmenet (h_R felezése → +6 dB csillapítás a távoli zónában) helyes.«

### 19. oldal · 2016.01.05 (folyt.)
**`ai2016_01_05_3`** [kép: a feladat beszkennelve] Egy telefonos kapcsolóközpont DTMF-vevőjének méretezése. A vevők felelősek a tárcsázott számok vételéért, a tárcsázás teljes idejére egy-egy DTMF-áramkört kell lefoglalni. A tárcsázás időtartama átlagosan 10 másodperc. Annak valószínűsége, hogy az összes áramkör foglaltsága miatt nem sikerül egy tárcsázás, nem lehet nagyobb 0,2%-nál. A berendezésnek legkevesebb 60 000 hívást kell végződtetnie egy órában. A tárcsázás időtartamát és a tárcsázások között eltelt időt exponenciális eloszlással modellezzük. a) Felajánlott forgalom? b) A mellékelt táblázattal hány DTMF-vevő kell? c) Mennyi a rendszer kihasználtsága?
[kép: Erlang-B táblázat, felajánlott forgalom 162…171 Erl, blokkolás 0,1 / 0,2 / 0,3%: 162: 197/193/187 · 163: 198/194/188 · 164: 199/195/189 · 165: 200/196/190 · 166: 201/197/191 · 167: 202/198/192 · 168: 203/199/194 · 169: 204/200/195 · 170: 205/201/196 · 171: 206/202/197]
**Hallgatói megoldás:** a) h = 10 s, λ = 60 000/3600 s = 16,667 hívás/s, A = 166,67 Erl („én 166-nak vettem”). b) táblázat alapján N = 197. c) a = A/N·(1 − P_b) ≈ 166/197 = 0,84.
⚠️ »A felajánlott forgalmat lefelé kerekítette (166). Felfelé kell (167), mert a 166,67 Erl-hez legalább a 167-es sor kell: **N = 198**. A rekurzív Erlang-B is ezt adja (197 kiszolgálónál 0,212% > 0,2%). A kihasználtság 166,67/198·0,998 ≈ 0,84.«
**`ai2016_01_05_4`** Egy szisztematikus lineáris blokk-kódról tudjuk, hogy 2 bites üzenetei vannak, és 2 hibát tud detektálni. a) Mi lehet a generátormátrix? Hallgatói megoldás: k = 2, d_min − 1 = 2 → d_min = 3, javítható 1. Singleton-korlát: d_min ≤ n − k + 1 → n ≥ 4. Hamming-korlát (1 hibát javítunk): … (folytatás a 20. oldalon)

### 20. oldal · 2016.01.05 (folyt.)
- (4. folyt.) 1 + n ≤ 2^(n−k): n = 4-re nem teljesül, n = 5-re igen (6 ≤ 8) → C(5,2) kód. G = [10111; 01011] (több jó megoldás van, a lényeg d_min = 3). b) A minimális kódszóhossz n = 5. c) A kód súlya: lineáris kódnál d_min = w_min = 3. »✓ (kódszavak 10111, 01011, 11100, mind ≥ 3 súlyú)«
- **`ai2016_01_05_5`** Oszcilloszkóp képernyőjén AM-DSB, a vivő 100 kHz-en 3 dBV, a két oldalsáv 80 és 120 kHz-en −9 dBV. a) Jelalak: f_m = 20 kHz, f_v = 100 kHz; 3 dBV → 2 V, −9 dBV → kb. 0,5 V (20lg-gel kell számolni, ami kijön, az effektív érték, ezért √2-vel még szorozni kell). s_AM = (2 + 1·cos(2π·20 kHz·t))·cos(2π·100 kHz·t) = 2cos(2π·100 kHz·t) + 0,5cos(2π·80 kHz·t) + 0,5cos(2π·120 kHz·t). b) m = U_m/U_v = 1/2 = 50%. c) Burkoló (csúcsegyenirányítós) demodulátor. [kép: dióda, párhuzamos C és R, u_be(t) és u_ki(t), felirat: „5.1.2.1.-1. ábra Csúcsegyenirányítós demodulátor”] »✓ (10^(3/20)·√2 = 2,0 V, 10^(−9/20)·√2 = 0,50 V)«

### 21. oldal · 2016.01.05 (folyt.)
- **`ai2016_01_05_6`** 16-PSK jel, a sugár √2. a) Átlagteljesítmény: P = (√2)²/2 = 1. b) 11,25°-os fázishiba esetén hogyan változik a jel-zaj viszony? Hallgatói válasz: a rendszer már (külső okból) 11,25° fázishibát szenvedett; emiatt épp a detektálhatóság határára került, a legkisebb zaj is hibát okoz → a szükséges jel-zaj viszony végtelen (dB-ben is). »✓ (16-PSK fázistűrése ±11,25°)«
- **`ai2016_01_05_7`** [kép: két GSM-szolgáltató (α, β) elemei; MS-A az α előfizetője, MS-B a β előfizetője, és épp egymás hálózatában barangolnak; a képen a hallgató bekarikázta HLR_α-t, és β-oldalon az MSC, VLR, BTS, BSC elemeket „c” jelöléssel] Az ábrán szereplő dobozokba írja a kérdés betűjelét! MS-A felhívja MS-B-t. (a) Melyik HLR kerül lekérdezésre? (b) Melyik GMSC értesül előbb a hívásról? (c) MS-A hálózaton belüli, beszélgetés közbeni mozgásáról mely elemek szereznek tudomást? (d) A hívás bontása után MS-B SMS-t küld MS-A-nak. Melyik SMSC kézbesíti ki? Plusz kérdés (+1): egy pillanatra kikapcsolja MS-A a mobilt, majd újra bekapcsolja: mi történik a HLR α-ban és β-ban?
**Hallgatói megoldás:** (a) HLR β · (b) GMSC β · (c) HLR α, BTS β, BSC β, MSC β, VLR β · (d) SMSC β. Plusz: bekapcsoláskor a készülék bejelentkezik, az MSC a VLR-be menti; cellák közötti váltást csak a készülék érzékel; több cellából location area lesz, LA-váltáskor location update; … (folytatás a 22. oldalon)

### 22. oldal · 2016.01.05 (folyt.)
- (7. folyt.) Ha nagyon messzire megyünk, átléphetünk egy más MSC-hez tartozó cellába, ezt a HLR-nek is tudnia kell. Tehát a HLR β-ban semmi, a HLR α-ban frissül a pozíció, ha kikapcsolás közben más MSC-beli cellába lépünk, különben semmi nem történik.
- **`ai2016_01_05_8`** Adott adatátviteli sebesség 150 Mbit/s és sávszélesség 72 MHz. a) Meg lehet-e oldani 8-PSK-val? Hallgatói válasz: nem, mert log₂8 = 3 bitet továbbít, a jelzési sebesség így harmada, nem elégíti ki a követelményeket. b) Mivel lehetne? 16-QAM. c) Miért nem akármilyen n-QAM-mel? Ahogy n nő, gyengül a zavartűrés, érzékenyebb az erősítés- és fázishibára. [A lapon piros X.]
⚠️ »8-PSK-val R_s = 50 MBd, a szükséges sáv (1+α)·50 MHz ≤ 72 MHz → α ≤ 0,44 esetén **megoldható**. A „nem lehet” válasz csak α = 1-re igaz. `[ELLENŐRIZENDŐ]` (a lapon lévő X is erre utalhat).«

### 23. oldal · 2016. 06. 07.
**`ai2016_06_07_1`** [kép: AM-DSB spektrum: 100 kHz-en 2 V, 80 és 120 kHz-en 0,5 V] a) Írd fel a jel időfüggvényét! Hallgatói levezetés: s_AM = cos(2πf_v t)·[U + A·cos(2πf_m t)] = U·cos(2πf_v t) + (A/2)·cos(2π(f_v + f_m)t) + (A/2)·cos(2π(f_v − f_m)t). Leolvasva f_v = 100 kHz, f_m = 20 kHz, A/2 = 0,5 V → A = 1 V, U = 2 V. s_AM(t) = cos(2π·100·t)·[2 + 1·cos(2π·20·t)] V, [t] = ms. b) Hogy aránylik az oldalsávok teljesítménye a jel összteljesítményéhez? (folytatás a 24. oldalon)

### 24. oldal · 2016.06.07 (folyt.)
- (1b folyt.) P_oldalsáv/P_össz = m²/(c² + m²), ahol c a moduláló jel csúcstényezője. m = max{m(t)}/U = A/U = 1/2 = 0,5. c = √2 (koszinusz moduláló jel). P_oldalsáv/P_össz = (1/4)/(2 + 1/4) = 1/9. Másképpen: (A²/8 + A²/8)/(A²/8 + A²/8 + U²/2) = (A²/4)/(A²/4 + U²/2) = m²/(c² + m²) = 1/9. »✓ (0,25/2,25 = 1/9 ≈ 11,1%)«
- c) Mekkora a modulációs mélység? „Már kiszámoltuk”: m = 0,5.

### 25. oldal · 2016.06.07 (folyt.)
- **`ai2016_06_07_2`** [A lapon piros kérdőjel és zöld X.] Egy bináris forrás kimenetén 90%-os valószínűséggel „a”, 10%-kal „b” jelenik meg. a) Ha lehetséges, tervezz olyan prefixmentes kódot, amelynek egy szimbólumra eső átlagos kódszóhossza szigorúan kisebb, mint 1. Ha nem lehetséges, indokold! Hallgatói megoldás: nincs (a b) pontra sincs érdemi válasz).
  ⚠️ »**Lehetséges, blokk-kódolással.** H = 0,469 bit/szimbólum < 1. Párokra: aa 0,81, ab 0,09, ba 0,09, bb 0,01. Huffman: aa→0, ab→10, ba→110, bb→111. L̄ = 0,81 + 0,18 + 0,27 + 0,03 = 1,29 bit/pár = **0,645 bit/szimbólum < 1**. Egyenként kódolva nem lehet (legalább 1 bit kell szimbólumonként).«
- **`ai2016_06_07_3`** [A feladaton narancs X.] Győr területe kb. 170 km², FRF = 12. A szolgáltatók nagyjából 85 GSM-cellát használnak. a) Mekkora egy átlagos klaszter a 900 MHz-es sávban? Hallgatói megoldás: T_c = 170/85 = 2 km², egy klaszterben FRF-nyi cella van → T_k = 12·2 = **24 km²**. [kép: FRF = 3 példa, hatszögcellák f₀ f₁ f₂ ismétlődéssel, egy klaszter pirossal körberajzolva] »✓«

### 26. oldal · 2016.06.07 (folyt.)
- (3b) Becsüld meg nagyságrendileg, hányan telefonálhatnak egyszerre! TDMA/FDMA/FDD: FDD 25 MHz-es irányonként, FDMA 200 kHz-es vivők, TDMA vivőnként 8 időrés. 25 MHz/200 kHz = 124 vivő (125, egy védősávnak). 8·124 = 992 beszélgetés klaszterenként. Klaszterek száma 85/12 ≈ 7. Összesen 7·992 ≈ **7000** (egyszerre Győrben). »✓ nagyságrendileg (pontosabban 992/12 ≈ 83 cellánként · 85 cella ≈ 7030). A jelzésre fenntartott időréseket figyelmen kívül hagyja.«

### 27. oldal · 2016.06.07 (folyt.)
- (3c) Egy szolgáltató 40 db FDM-csatornát használ. Hányan telefonálhatnak egy szolgáltatónál egyszerre egy cellán belül? Hallgató: passz.
  »Saját megoldás: 40 vivő / FRF 12 ≈ 3,3 vivő cellánként, ez 3–4 vivő · 8 időrés ≈ **26** (a jelzési időrések nélkül ennél valamivel kevesebb). `[ELLENŐRIZENDŐ]` (a feladat értelmezése: a 40 a teljes klaszterre vonatkozik).«
- (3d) Mi a VAD, és milyen előnyökkel jár a GSM-ben? Hallgatói válasz: a VAD (Voice Activity Detector) érzékeli, ha az egyik félnél csend van, és ilyenkor (komfortzajjal) jelzi ezt a másik félnek, hogy a csendes fél készüléke ne sugározzon feleslegesen. Előny: a készülék nem sugároz, nem merül olyan gyorsan.
  »Pontosítás: a VAD a beszédszüneteket ismeri fel, ilyenkor a DTX (szakaszos adás) leállítja az adást, csak ritkán küld zajparamétereket, és a vevő komfortzajt generál. Előny: kisebb akkufogyasztás **és** kisebb interferencia (jobb frekvencia-újrafelhasználás).«
- (3e) Mire való az FNR és az AuC a GSM-ben? Hallgató: FNR passz. AuC: nyilvántartja a titkosítási kulcsokat.
  »Pontosítás: **FNR** (Flexible Numbering Register): a számhordozhatóság kezelése, megmondja, melyik hálózat HLR-je tartozik egy hordozott számhoz. **AuC**: tárolja az előfizetők titkos kulcsát (Ki), és ebből hitelesítési hármasokat (RAND, SRES, Kc) állít elő a hitelesítéshez és a rejtjelezéshez.«
- **`ai2016_06_07_4`** [Szürke X.] Bináris MSK, jelzőfrekvenciák f₁ = 22,2 kHz és f₂ = 24,2 kHz (lásd 2014.12.15./1). a) frekvencialöket? b) bitsebesség? c) Miért előnyösebb az MSK az egyszerű FSK-nál? Hol használnak GMSK-t? (folytatás a 28. oldalon)

### 28. oldal · 2016.06.07 (folyt.)
- (4 folyt.) a) és b) válasz nélkül. c) Hallgatói válasz: az MSK sávtakarékosabb az egyszerű FSK-nál. GMSK-t a GSM-ben alkalmaznak, mert csökkenti a sávszélességet.
  »Saját megoldás: f₀ = 23,2 kHz, f_D = (f₂ − f₁)/2 = **±1 kHz** (a két frekvencia távolsága 2 kHz). MSK-nál a frekvenciatávolság 1/(2T_b) → 2 kHz = R_b/2 → **R_b = 4 kbit/s** (modulációs index h = 0,5). Előny: folytonos fázis, a legkisebb ortogonális frekvenciatávolság, kompaktabb spektrum. GMSK: Gauss-előszűrés, GSM (BT = 0,3). `[ELLENŐRIZENDŐ]` hogy a 2014.12.15/1 feladat azonos konvenciót használ-e.«
- **`ai2016_06_07_5`** [Fekete X.] IP feletti média-szolgáltatások (VoIP, IPTV). a) Az IP „best effort” átvitelt valósít meg. Sorolj fel legalább két dolgot, ami miatt ez megnehezíti a multimédia szolgáltatásokat! Hallgató: késleltetési tényező (delay factor), média veszteségi ráta (media loss rate).
  »Elvárt: változó késleltetés (jitter), csomagvesztés, csomagsorrend-csere, nincs garantált sávszélesség. (A DF és MLR az IPTV-minőség mérőszámai, nem az okok.)«

### 29. oldal · 2016.06.07 (folyt.)
- (5b) Az RTP UDP felett halad, ami nem garantálja a csomagvesztés elkerülését. Miért nem érdemes TCP-re áttérni? Hallgató: a TCP csak megérkezési garanciát ad, időzítésit nem, így késleltetések lehetnek. »✓ (az újraküldés olyan késést okoz, hogy a csomag már későn érkezik a lejátszáshoz, és a torlódásvezérlés is lassít)«
- (5c) Mire használják az IGMP-t? Hallgató: a multicast csoporttagságok kezelésére. »✓ (IPTV-csatornaváltás: join/leave)«
- **`ai2016_06_07_6`** a) [kép: három idődiagram ±1 szintekkel: „forrásjel”, „szórókód” (bitenként 2 chip), „kimenet”, függőleges segédvonalakkal a chiphatárokon] Kimeneten: NOT[EXOR(bit1, bit2)] (±1 jelölésnél ez a szorzat). b) passz. »A feladat szövege hiányzik, valószínűleg DSSS-szórás. `[ELLENŐRIZENDŐ]`«

### 30. oldal · 2016.06.07 (folyt.)
- **`ai2016_06_07_7`** Egy apró autókölcsönző összesen két kocsit tud kölcsönözni. Az ügyfelek Poisson-folyamat szerint érkeznek, naponta átlagosan 4. Átlagosan 1,5 napra bérlik az autót, a bérleti idő exponenciális eloszlású. Adatok: λ = 4/nap, h = 1,5 nap, N = 2 („a telefonnál az interfészek megfelelője”). a) Mekkora a valószínűsége, hogy a cég egy ügyfélnek nem tud kocsit adni? Hallgató: passz. b) Mekkora az autók átlagos kihasználtsága? A = λh = 6 Erl. P_b = (A²/2!)/(1 + A + A²/2) = 18/(1 + 6 + 18) = 18/25 = **0,72**. (Megj.: 0! = 1.)
  »Az a) kérdés válasza épp a b)-ben kiszámolt **P_b = 0,72** (Erlang-B, N = 2, A = 6).«

### 31. oldal · 2016.06.07 (folyt.)
- (7b folyt.) a = (A/N)·(1 − P_b) = (6/2)·0,28 = **0,84**. »✓«
- (7c) Mekkora a cég átlagos napi haszna, ha egy kocsi fenntartása 60 USD/nap, a bérleti díj 100 USD/nap? Hallgató: nincs megoldás.
  »Saját megoldás: átlagosan foglalt kocsik = N·a = A(1 − P_b) = 1,68. Bevétel 1,68·100 = 168 USD/nap, költség 2·60 = 120 USD/nap, **haszon ≈ 48 USD/nap**.«

### 32. oldal · 2015. 12. 16.
**`ai2015_12_16_4`** [A feladat mellett piros X.] A DVB-C rendszert 256-QAM-mel működtetjük. A 8 MHz-es raszterben az ISI-mentesség céljából 33,33%-os emelt koszinuszos elemi jelet használunk (az RS hibavédő kódolás hatását figyelmen kívül hagyjuk). a) Mekkora az elérhető szimbólumsebesség és a bitsebesség?
[kép: emelt koszinuszos X(f) spektrum: 1-es szint, 0,5-nél 1/(2T), lecsengés (1 + α)·1/(2T)-ig]
Az elemi jel sávszélessége (kétoldalsávos): 2·(1 + α)·1/(2T) = (1 + α)/T.

### 33. oldal · 2015.12.16 (folyt.)
- (4a folyt.) (1 + α)/T ≤ 8 MHz → (4/3)/T ≤ 8 MHz → 1/T ≤ **6 MBd**. 256-QAM: ld 256 = 8 bit/szimbólum. v = 8·6 = **48 Mbit/s**. »✓«
- (4b) Átlagosan 1,5 Mbit/s-os csatornánkénti bitsebességgel hány csatorna fér el? Mi lenne a 6 Mbit/s-os kódolás előnye és hátránya? 48/1,5 = **32 csatorna**. 6 Mbit/s: előny jobb képminőség (akár HD), hátrány kevesebb csatorna fér el (8). »✓«

### 34. oldal · 2015.12.16 (folyt.)
- (4c) Milyen előnnyel és hátránnyal járna 256-QAM helyett 1024-QAM? Előny: egy jelzési idő alatt 8 helyett 10 bit → nagyobb bitsebesség (60 Mbit/s). Hátrány: nagyobb teljesítményigény, kisebb zajtűrés. »✓ (a lapon lévő piros X oka nem derül ki)«
- **`ai2015_12_16_3`** A C(5,2) szisztematikus lineáris blokk-kód kódszavai között szerepel az 10101 és a 01101. a) Generátor- és paritásellenőrző mátrix: G_sz = [1 0 1 0 1; 0 1 1 0 1] = [E B], B = [1 0 1; 1 0 1]. Hᵀ = [B; E] = sorai 101, 101, 100, 010, 001. b) Minimális kódtávolság, észlelhető és javítható hibák? (folytatás)

### 35. oldal · 2015.12.16 (folyt.)
- (3b) Az összes kódszó: u = 00, 01, 10, 11 → c = 00000, 01101, 10101, 11000. d_min = 2. Észlelhető (d_min − 1) = 1, javítható ⌊(d_min − 1)/2⌋ = 0. »✓«
- (3c) A vett szó v = 11001. Mi a szindróma? Mutasd be a javítás lépéseit! Mi lehetett az üzenet? (folytatás a 36. oldalon)

### 36. oldal · 2015.12.16 (folyt.)
- (3c folyt.) s = v·Hᵀ = 11001·Hᵀ = **001**. A paritásellenőrző mátrix 5. sora adja a szindrómát. v = c + e, s = (c + e)Hᵀ = eHᵀ (mert cHᵀ = 0) → e = 00001. c = v − e = 11000 = c₄ → û = u₄ = **11**. „Tehát valószínűleg az u₄ = 11 volt az üzenet.”
  »✓ A számolás helyes (101 + 101 + 001 = 001). Megjegyzés: d_min = 2 miatt a kód elvileg nem javít, itt a szindróma egyértelműen egy egybites hibára mutat, de két bit hibája ugyanilyen szindrómát adhat (pl. 10101 → 11001 a 2. és 3. bit hibájával nem, 001-es szindrómához a 11000 a legközelebbi). A „valószínűleg” szó ezért indokolt.«
- **`ai2015_12_16_4b`** [Szürke X.] FSK-modulációnál F = 150 kHz (vivőfrekvencia) és f_D = 50 kHz. A jelzési idő 20 µs, a modulált jel amplitúdója 2 V. a) f₀, f₁ = ? Rajzold fel a modulált jelet a „0110” bitfolyamra! (folytatás)
  »Megjegyzés: az eredeti vizsgán ez a feladat sorszáma szerint a 4. (a fenti DVB-C feladat is 4. sorszámú, a hallgató két dolgozatváltozatot írt át). Az azonosító ezért `…_4b`.«

### 37. oldal · 2015.12.16 (folyt.)
- (4a folyt.) F = (f₀ + f₁)/2 = 150 kHz, f_D = (f₀ − f₁)/2 = 50 kHz (legyen f₀ > f₁) → **f₀ = 200 kHz, f₁ = 100 kHz**. T = 20 µs → 1/T = 50 kHz → f₀ = 4/T, f₁ = 2/T.
  [kép: s(t) [V], ±2 V, 0–80 µs: 0–20 µs f₀ (4 periódus), 20–40 µs f₁ (2 periódus), 40–60 µs f₁, 60–80 µs f₀] »✓«

### 38. oldal · 2015.12.16 (folyt.)
- (4b) Mekkora a modulált jel sávszélessége? Hallgató: B_v = 2(f_m + f_D) = 2(F + f_D) = 2·(150 + 50) = 400 kHz.
  ⚠️ »**Hibás:** a Carson-képletben f_m a moduláló (bit)jel frekvenciája, nem a vivő. f_m ≈ 1/(2T) = 25 kHz-cel B_v ≈ 2·(50 + 25) = **150 kHz**, ha a moduláló jel sávját 1/T-nek vesszük, akkor 2·(50 + 50) = 200 kHz. `[ELLENŐRIZENDŐ]`: a tárgy FSK-sávszélesség-konvenciója (a `00_STATUSZ` nyitott 1. pontja).«
- (4c) MSK-t szeretnénk. Mit kell változtatni? A jelzési időt tilos megváltoztatni, a frekvencialöketet meg kell. MSK: f_D = 1/(4T) = 1/(80 µs) = **12,5 kHz**. F = 150 kHz → f₀ = 162,5 kHz, f₁ = 137,5 kHz. »✓«
- (4d) Rajzold fel az MSK-jelet a „0110” bitfolyamra! T = 20 µs → f₀ = 13/(4T), f₁ = 11/(4T) (3,25 és 2,75 periódus bitenként).

### 39. oldal · 2015.12.16 (folyt.) és 2016. 01. 05
- [kép: MSK-jel ±2 V, 0–80 µs, f₀ f₁ f₁ f₀ szakaszok, a fázis a bithatárokon folytonos] »✓«
- **`ai2016_01_05_3b`** Erlangos példa (a 19. oldali DTMF-feladat újabb, gépelt kidolgozása): átlagosan 10 s egy tárcsázás, óránként legalább 60 000 hívás, exponenciális eloszlás. a) A = λh = 1000/6 Erl = 166,67 Erl ≈ **167 Erl**.

### 40. oldal · 2016.01.05 (folyt.)
- b) [kép: ugyanaz az Erlang-B táblázat, a 167-es sor és a 0,2%-os oszlop pirossal kiemelve, a 198 bekarikázva] A táblázatból **N = 198**. c) a = (A/N)·(1 − P_b) ≈ A/N = 167/198 = **0,84**. »✓ Ez a kidolgozás a helyes kerekítést használja (a 19. oldali 197-tel szemben).«

### 41. oldal · 2016.01.05 (folyt.)
- **`ai2016_01_05_7b`** (A 21. oldali GSM-feladat gépelt változata.) [kép: α- és β-hálózat elemei: HLR_α, GMSC, VLR, MSC, SMSC, BSC, BTS, MS-B az α-oldalon, illetve HLR_β, GMSC, SMSC, MSC, VLR, BTS, BSC, MS-A a β-oldalon] Válaszok: a) HLR_β. b) GMSC_β. c) HLR_α, BTS_β, BSC_β, MSC_β, VLR_β. d) SMSC_β.
  ⚠️ »a), b), d) ✓ (MS-B β-előfizető, a hívott szám β-beli, így β GMSC-je kérdezi β HLR-jét. Az SMS-t a küldő MS-B saját, β-beli SMSC-je kézbesíti.) **c) pontosítás:** beszélgetés közbeni mozgásnál hívásátadás (HO) történik, erről a BTS_β, BSC_β és MSC_β tud. Hívás közben nincs helyzetfrissítés, ezért a VLR_β és a HLR_α ilyenkor nem értesül (csak MSC-váltásnál, a hívás után). `[ELLENŐRIZENDŐ]` a tárgy elvárt válaszával (Koma `ea13_3`).«

### 42. oldal · 2016. 01. 12.
**`ai2016_01_12_1`** [Szürke X.] Egy lineáris, szisztematikus kód generátormátrixa: G = [1000110; 0100101; 0010011; 0001111]. a) Hᵀ = ? G = [E|B] → B = [110; 101; 011; 111], Hᵀ = [B; E] = sorai 110, 101, 011, 111, 100, 010, 001. »✓«
b) Add meg az s szindrómavektort egy adott v vett kódszóhoz! (a lapon nincs kidolgozva) »s = v·Hᵀ, azaz azoknak a Hᵀ-soroknak az összege, ahol v-ben 1 áll.«

### 43. oldal · 2016.01.12 (folyt.)
- c) Mennyi hibát képes a kód jelezni és javítani, és miért? Az összes kódszót fel kell írni, és venni a legkisebb súlyt: 0000000, 1000110, 0100101, 0010011, 0001111, … → **d_min = 3**. Jelez d_min − 1 = 2, javít ⌊(d_min − 1)/2⌋ = 1 hibát. »✓ (ez a (7,4) Hamming-kód: Hᵀ sorai a 7 különböző nem nulla 3 bites vektor)«

### 44. oldal · 2016.01.12 (folyt.)
- d) Hány bites üzenetek tartoznak a kódszavakhoz, és miért? c = u·G_sz, G-nek 4 sora van → **4 bites üzenetek**. »✓«
- **`ai2016_01_12_2`** [Zöld X.] A CCIR-sávú FM rádióadás vételére alkalmas szuperheterodin vevő középfrekvenciája f_KF = 10,7 MHz. a) Felső keveréssel hová kell a helyi oszcillátort hangolni a 97,6 MHz-es adóhoz? f_0 = 97,6 + 10,7 = **108,3 MHz**. b) Hol lesz a tükörfrekvencia? f_t = 97,6 + 2·10,7 = **119 MHz**. »✓«

### 45. oldal · 2016.01.12 (folyt.)
- c) [Barna X.] Rajzold fel a sztereó rádiójelet a frekvenciatartományban az FM moduláció előtt!
  [kép: X(f) spektrum: M (L+R) 0–15 kHz, 19 kHz-es pilotjel, S' 23–53 kHz (38 kHz körül két oldalsáv, 15–15 kHz), 57 kHz-en BPSK (RDS), a tengelyen 60 kHz jelölés. Megjegyzés: S' = AM-DSB/SC{S}, mert az S jel 38 kHz-cel el van tolva.] »✓«
- Bónusz: Milyen komponensek jelennek meg a sztereó jelben, ha valaki egy 440 Hz-es hangot fütyül a bal oldali mikrofonba? „Mindig a háromszögek függőleges befogóinál” (folytatás).

### 46. oldal · 2016.01.12 (folyt.)
- [kép: X(f) vonalas spektrum: 0,44 kHz, 19 kHz pilot, 38 ± 0,44 kHz (két vonal), 57 kHz BPSK (RDS)] »✓ Csak a bal csatornán van jel, így M = L + R és S = L − R is tartalmazza a 440 Hz-et: 0,44 kHz, valamint 37,56 és 38,44 kHz (a 38 kHz-es segédvivő elnyomva), plusz a 19 kHz-es pilot.«
- **`ai2016_01_12_3`** Erlangos példa: percenként 5 hívás, átlagosan 3 perc egy kiszolgálás. a) Felajánlott forgalom: A = λh = 5·3 = **15 Erl**. »✓«

### 47. oldal · 2016.01.12 (folyt.)
- b) 100 hívásból hány lesz 6 percnél hosszabb? [kép: e^x grafikon 0…−6 között, −2-nél 0,14 pirossal leolvasva] Exponenciális eloszlás: P(X > 6 min) = e^(−µ·6), µ = 1/h = 1/3 1/min → e^(−2) = **0,14** → 100 hívásból **14** hosszabb 6 percnél. »✓ (e^(−2) = 0,135, kb. 13,5)«

### 48. oldal · 2016.01.12 (folyt.)
- c) Hány kiszolgáló kell, ha P_b = 0,1%? [kép: Erlang-B görbesereg, forgalom [Erl] a kiszolgálók száma függvényében, 0,01%…40% görbék, a 15 Erl vízszintes pirossal, leolvasva 29] A 0,1%-os görbéről a 15 Erl-hez **N = 29**.
- d) Kihasználtság: a = (A/N)(1 − P_b) ≈ 15/29 = **0,52**.
  ⚠️ »Rekurzív Erlang-B-vel (A = 15): N = 27-nél 0,160%, **N = 28-nál 0,086%** ≤ 0,1%, N = 29-nél 0,044%. A pontos válasz tehát **N = 28**, a kihasználtság 15·(1 − 0,00086)/28 ≈ **0,54**. A grafikonról leolvasott 29 a leolvasás pontatlansága (a görbéről ±1 kiszolgáló pontosság várható).«

### 49. oldal · 2016.01.12 (folyt.)
- **`ai2016_01_12_4`** [Barna X.] AM-DSB moduláció oszcilloszkópon. [kép: Agilent-képernyő, CH1 és CH2 2,00 V/osztás, 100 µs/osztás. Felül szinusz (CH2), alatta AM-jel (CH1). Mérések: Pk-Pk(1) = 12,00 V, Pk-Pk(2) = 4,00 V, Freq(2) = 2,500 kHz] a) Melyik a moduláló és a modulált jel? CH1 a modulált, CH2 a moduláló. »✓«

### 50. oldal · 2016.01.12 (folyt.)
- b) Modulációs mélység: s_AM = U·cos(2πf_v t) + (A/2)cos(2π(f_v + f_m)t) + (A/2)cos(2π(f_v − f_m)t). Egy osztás 2 V. U + A = 6 V, A = 2 V → U = 4 V → m = A/U = **0,5** (50%). »✓ (a burkoló 6 V és 2 V között: U = (6 + 2)/2, A = (6 − 2)/2)«
- c) Átlagteljesítmény: U_eff = √(U²/2 + (A/2)²/2 + (A/2)²/2) = √(16/2 + 1) = 3 V → **P = 9 W** (1 Ω-on). »✓«
- d) Vivő- és modulációs frekvencia: f_m = 2,5 kHz → T = 400 µs = 4 osztás → 1 osztás 100 µs. (folytatás)

### 51. oldal · 2016.01.12 (folyt.)
- (d folyt.) A modulált jelnél 5 csúcs van egy osztáson belül → f_v = 1/(20 µs) = **50 kHz**. »✓«
- e) Mivel lehet demodulálni (rajz is kell)? Koherens vivős szorzós demodulátorral. [kép: s_AM(t) → szorzó (cos(2πf_c t)) → ŝ_m(t) → aluláteresztő szűrő → x̂(t)]
  »Pontosítás: m = 0,5 < 1, így az egyszerűbb **burkolódemodulátor** (dióda + RC) is működik, és ez a szokásos válasz AM-DSB-re. A koherens szorzós demodulátor is helyes, de vivőszinkront igényel.«

### 52. oldal · 2014. 12. 15.
- **`ai2014_12_15_1`** [Szürke X.] Bináris MSK, f₁ = 22,2 kHz, f₂ = 24,2 kHz. a) f_D = |f₁ − f₂|/2 = **1 kHz**. b) Bitsebesség: MSK-nál f_D·T = 1/4 → 1/T = 4f_D = **4 kbit/s**. »✓ (egyezik a 28. oldali saját megoldással)«
- **`ai2014_12_15_2`** [Szürke X.] AM-DSB modulátor 100 kHz-es vivő, 20 kHz-es szinuszos moduláló jel, m = 50%. A modulált jel csúcsértéke 3 V. (folytatás)

### 53. oldal · 2014.12.15 (folyt.)
- a) Rajzold fel léptékhelyesen a modulált jel legalább 50 µs-os szakaszát! max{s(t)} = 3 V = U + A, m = A/U = 0,5 → 1,5U = 3 V → **U = 2 V, A = 1 V**. „+ RAJZ” (rajz nincs). »✓ (50 µs = 1 moduláló periódus, 5 vivőperiódus)«
- b) Írd fel az időfüggvényt! Milyen egységben kell az időt behelyettesíteni? Milyen frekvenciájú komponensei vannak, mekkora amplitúdóval? s_AM(t) = cos(2π·100·t)·[2 + 1·cos(2π·20·t)] V, [t] = ms. (folytatás)

### 54. oldal · 2014.12.15 (folyt.)
- (2b folyt.) s_AM(t) = U·cos(2π·100·t) + (A/2)·cos(2π·120·t) + (A/2)·cos(2π·80·t). Összetevők: f_c = 100 kHz → U = 2 V, f_c ± f_m = 80 és 120 kHz → A/2 = 0,5 V. »✓«
- c) Átlagteljesítmény: P = (U/√2)² + 2·((A/2)/√2)² = U²/2 + A²/4 = **2,25 W**. »✓ (2 + 0,25)«
- **`ai2014_12_15_3`** Hogy működik a VAD? Milyen erőforrások tekintetében érhető el nyereség? Hallgatói válasz: amíg az egyik fél beszél, a másik fél készüléke nem sugároz (lassabban merül), a csendes félnél a VAD komfortzajjal jelzi a „csendet”. (folytatás)

### 55. oldal · 2014.12.15 (folyt.)
- (3 folyt.) GSM: a készülék nem sugároz, így nem merül olyan gyorsan. VoIP: sávszélességet spórol. »✓ részben. Kiegészítés: GSM-ben az interferencia csökkenése is nyereség (rádiós erőforrás), VoIP-ban a csomagszám és a sávszélesség csökken.«
- **`ai2014_12_15_4`** [Szürke jel.] Egyenletes kvantálót/mintavevőt kell tervezni, amellyel egy valós, √3 csúcstényezőjű, teljes kivezérlésű bemenő jel visszaállítása esetén legalább 70 dB az SNR. A jel 60 és 108 kHz között tartalmaz komponenseket. a) f_s = ?, ha el akarjuk kerülni az átlapolódást. [kép: X(f) sáváteresztő spektrum −108…−60 és 60…108 kHz között, B = 48 kHz, középen f_c] I) aluláteresztővel f_s ≥ 2·108 = **216 kHz**.

### 56. oldal · 2014.12.15 (folyt.)
- II) Sáváteresztő: (2f_c − B)/m ≥ f_s ≥ (2f_c + B)/(m + 1), f_c = 60 + B/2 = 84 kHz. Fontos, hogy f_s ≥ 2B = 96 kHz. m = 1: (168 − 48)/1 ≥ f_s ≥ (168 + 48)/2 → **120 kHz ≥ f_s ≥ 108 kHz**. Az f_s ≥ 2B miatt lejjebb nem mehetünk. »✓ (HTML 2.6: k = 2 → 108…120 kHz)«
- b) A kvantáló bitszáma: C = √3. „Egyenletes kvantálónál f_s = 2B”: SNR = (3/C²)·2^(2n)·f_s/(2B) = (3/C²)·2^(2n). SNR_dB = 10lg(3/C²) + 20n·lg2. (folytatás)

### 57. oldal · 2014.12.15 (folyt.)
- (b folyt.) SNR ≅ 10lg(3/3) + 6n = 6n ≥ 70 → n ≥ 70/6 → **n = 12**. »✓ (pontosan 6,02n ≥ 70 → n ≥ 11,63. Az f_s/(2B) tényező 108…120 kHz-nél 1,13…1,25, ez 0,5…1 dB-t ad, az eredmény így is 12. A „f_s = 2B” indoklás pontatlan, de a végeredményt nem befolyásolja.)«
- **`ai2014_12_15_5`** Milyen következménnyel jár, ha az alapsávi FM-sztereó jel amplitúdóhelyesen regenerált M összetevőjével szemben az S komponens 6 dB-lel csillapodik? Hallgató: passz.
  »Saját megoldás: M = (L + R)/2, S = (L − R)/2, L = M + S, R = M − S. Ha S a felére csökken: L' = M + S/2 = 0,75L + 0,25R, R' = 0,25L + 0,75R. A csatornaszétválasztás romlik: az áthallás 0,25/0,75 = 1/3, azaz **≈ 9,5 dB** csatornaelválasztás. A hang „összeszűkül”, a sztereó hatás gyengül (a mono vétel nem változik).«
- **`ai2014_12_15_6`** [Piros X.] Az ábrán látható 8-QAM elrendezésekre határozd meg az átlagos adóteljesítményt! Melyikük a legenergiatakarékosabb? Két pont közti minimális táv mindhárom esetben 2A.
  [kép: három konstelláció. (a) 3×3-as rács középpont nélkül. (b) felül és alul 3–3 pont, a vízszintes tengelyen 2 pont közel az origóhoz. (c) belső 4 pont (±A, ±A) és külső 4 pont. Kézírásos jegyzetek: (a) mellett „4x, 2² + 2² = 8, λ = √8”, (c) mellett „√2, 1² + 3² = 10, √10, 1 + 1 = 2”]

### 58. oldal · 2014.12.15 (folyt.)
- (6 folyt.) „Kulcs: mindig azt kell nézni, milyen távol vannak a pöttyök az origótól. 1/8-dal osztunk, mert átlagos teljesítményt kérdez.” P_a = 4·(1/8)·(2A + √8A) = (1 + √2)A ≈ 2,414A. P_b = 2·(1/8)·(A + 2A + 2√8A) ≈ 2,164A. P_c = 4·(1/8)·(√2A + √10A) ≈ 2,287A. P_a > P_c > P_b → **b) a legtakarékosabb**.
  ⚠️ »**Hibás módszer:** a teljesítmény a távolság **négyzetével** arányos, nem a távolsággal, és A²-tel, nem A-val skálázódik. A lapon olvasott koordinátákkal (a: (0, ±2A), (±2A, 0), (±2A, ±2A). b: (±A, 0), (0, ±2A), (±2A, ±2A). c: (±A, ±A), (±3A, ±A)): P_a = (4·4 + 4·8)/8·A² = **6A²**, P_b = (2·1 + 2·4 + 4·8)/8·A² = **5,25A²**, P_c = (4·2 + 4·10)/8·A² = **6A²**. A következtetés (b a legtakarékosabb) így is igaz. `[ELLENŐRIZENDŐ]`: a (b) ábra pontos koordinátái a gyenge minőségű képről nem biztosak (a `00_STATUSZ` „8-QAM ábra” tétele), és a (b)-ben a (±A, 0) pontok és a (0, ±2A) pontok távolsága √5A ≥ 2A, ez rendben van, de a két tengelyi pont távolsága csak 2A, ez is megfelel.«
- **`ai2014_12_15_7`** [Szürke X.] 64-QAM-mel hány 1,5 Mbit/s-os DVB-C TV-csatorna fér el egy 8 MHz-es raszterben? ISI-mentesség céljából 15%-os lekerekítésű emelt koszinuszos elemi jel, és RS(204,188) hibavédő kódolás (a forrásbitek jó közelítéssel a továbbított bitek 90%-át teszik ki).

### 59. oldal · 2014.12.15 (folyt.)
- (7 folyt.) [kép: emelt koszinuszos spektrum, mint a 32. oldalon] (1 + α)/T ≤ 8 MHz → 1,15/T ≤ 8 MHz → 1/T ≤ 6,96 MBd **≅ 7 MBd**. 64-QAM: 6 bit/szimbólum. v = 6·7 = 42 Mbit/s. Hasznos: (188/204)·42 ≅ 0,9·42 = 37,8 Mbit/s. (folytatás)
  ⚠️ »A 6,96 MBd felső korlát, felfelé kerekíteni nem szabad (7 MBd-dal már 8,05 MHz kell). Pontosan: 6·6,957 = 41,74 Mbit/s, ·188/204 = **38,47 Mbit/s** (a 0,9-es közelítéssel 37,6). 38,47/1,5 = 25,6 → **25 csatorna**. A végeredmény a kerekítéstől függetlenül 25.«

### 60. oldal · 2014.12.15 (folyt.)
- (7 folyt.) ⌊37,8/1,5⌋ = **25 csatorna** fér el egy raszterben. »✓«
- **`ai2014_12_15_9`** [Sárga X.] Erlangos példa: GSM, FRF = 12. A hívások átlagos tartási ideje 2 perc. Egy órában átlagosan hányan telefonálhatnak egy cellában, ha a blokkolás valószínűsége ≤ 1%? Exponenciális eloszlás, használd a mellékelt log-log grafikont! Másképp: λ = ? 1/óra. TDMA/FDMA/FDD: FDD 25 MHz-es irányok, FDMA 200 kHz-es sávok, TDMA sávonként 8 időrés.

### 61. oldal · 2014.12.15 (folyt.)
- Csatornák száma cellánként: (25 M/200 k)·8/FRF = 125·8/12 = 1000/12 ≅ 80.
  [kép: log-log Erlang-B grafikon, vízszintesen forgalom [Erl] 1–100, függőlegesen blokkolás 0,001–0,1, görbék 3…90 csatornára. Kék vízszintes vonal 0,01-nél, függőleges a 80 csatornás görbénél.]
  »1000/12 = 83,3, lefelé kerekítve **83**, nem 80. Lásd a következő oldalt.«

### 62. oldal · 2014.12.15 (folyt.)
- A grafikonról A = **65 Erl**. A = λh → λ = A/h = 65/(1/30 óra) = **1950 hívás/óra**.
  ⚠️ »Rekurzív Erlang-B, 1%: N = 80 → A = 65,4 Erl (a leolvasás jó). De N = 83-mal (1000/12 lefelé kerekítve) A = 68,2 Erl → **λ ≈ 2040 hívás/óra**. Ha a jelzési időréseket is levonjuk, a 80 körüli érték is védhető. `[ELLENŐRIZENDŐ]` a tárgy szokásos kerekítése (a 26. oldalon ugyanez a hallgató 124 vivővel számolt, azzal 124·8/12 = 82,7 → 82 csatorna, A = 67,2 Erl).«
- **`ai2014_12_22_1`** (2014. 12. 22.) A 30 MHz-es antenna nyeresége 10lg(4π) = 11 dB. a) λ = c/f = 300/30 = **10 m**. b) Hatásos felület: G = 4π, G = A_h·4π/λ² → A_h = Gλ²/(4π) = λ² = **100 m²**. »✓«

### 63. oldal · 2014.12.22 (folyt.)
- **`ai2014_12_22_2`** Az oszcilloszkópon AM-DSB jel látható. [kép: Agilent-képernyő fotója, 1,00 V/osztás, 20,0 µs/osztás. Mérések: Avg(1) = 8 mV, RMS(1) = 1,500 V, Pk-Pk(1) = 5,91 V. A hallgató kézzel bejelölte a vivőperiódusokat (1–6) és a 60 µs, 100 µs szakaszokat.] Megj.: az x tengelyen egy osztás 20 µs. a) f_c, f_m = ? f_m becslése: 1 periódus 2,5 osztás = 50 µs → T = 50 µs.

### 64. oldal · 2014.12.22 (folyt.)
- (a folyt.) f_m = 1/T = **20 kHz**. Ezalatt a modulált jel 5 periódust tesz meg → f_c = 5f_m = **100 kHz**.
- b) Modulációs mélység: Pk-Pk = 5,91 V ≈ 6 V → max = 3 V. U + A = 3 V. Az A egy osztás → 1 V → U = 2 V → m = A/U = **0,5**. »✓ Független ellenőrzés a kijelzett RMS-sel: P = U²/2 + A²/4 = 2 + 0,25 = 2,25 → RMS = √2,25 = **1,5 V**, egyezik a műszer 1,500 V-jával.«

### 65. oldal · 2014.12.22 (folyt.)
- 3) „PAM-os cucc” (a hallgató nem írta le).
- **`ai2014_12_22_4`** [Szürke jel.] Lineáris, szisztematikus kód: G_sz = [1000011; 0100110; 0010101; 0001111]. a) B = [011; 110; 101; 111], Hᵀ = [B; E] = sorai 011, 110, 101, 111, 100, 010, 001. »✓« b) Add meg a szindrómát a v = [1100001] vett szóhoz! (folytatás)

### 66. oldal · 2014.12.22 (folyt.)
- (4b folyt.) s = v·Hᵀ = [1100001]·Hᵀ = **[100]**. »✓ (011 + 110 + 001 = 100, ez Hᵀ 5. sora → az 5. bit hibás, c = 1100101, az üzenet 1100)«
- c) Hány hibát jelez és javít, és miért? Az összes kódszó legkisebb súlya d_min = 3 → jelez 2, javít 1. »✓ (Hᵀ sorai a 7 különböző nem nulla vektor, ez Hamming(7,4))«
- **`ai2014_12_22_5`** [Zöld X.] Szuperheterodin vevő, f_KF = 10,7 MHz. a) Felső keveréssel hová kell hangolni a helyi oszcillátort a 107 MHz-es adóhoz? f₀ = 107 + 10,7 = **117,7 MHz**. b) Tükörfrekvencia? (folytatás)

### 67. oldal · 2014.12.22 (folyt.)
- (5b) f_t = f₀ + f_KF = 117,7 + 10,7 = **128,4 MHz**. »✓ (= 107 + 2·10,7)«

### 68. oldal · 2014. 01. 07.
**`ai2014_01_07_1`** [Szürke X.] Egy kód a 2 bites üzenetekből a következő kódszavakat állítja elő: 00 → 00000, 01 → 01110, 10 → 10101, 11 → 11011. a) Add meg a szisztematikus generátormátrixot! v = [01010] vett szó esetén melyik kódszót küldték a legnagyobb valószínűséggel? A G az a két kódszó, amelyek első két bitjéből egységmátrix alakítható ki: G = [10101; 01110]. A v-hez legközelebbi kódszó: **01110**. »✓ (távolságok: 2, 1, 5, 3)«
b) Add meg a paritásellenőrző mátrixot és a v szindrómáját! G = [E B] … (folytatás)

### 69. oldal · 2014.01.07 (folyt.)
- (b folyt.) B = [101; 110]. Hᵀ = [B; E] = sorai 101, 110, 100, 010, 001. s = v·Hᵀ = [01010]·Hᵀ = **[100]**. „A 2. kérdésre szemléletesebb megoldás”: s = (c + e)Hᵀ = eHᵀ → e = [00100] → c = v − e = **[01110]**, ez volt a legnagyobb valószínűséggel kiküldött kódszó. »✓ (110 + 010 = 100 = Hᵀ 3. sora)«

### 70. oldal · 2014.01.07 (folyt.)
- **`ai2014_01_07_2`** [Szürke X.] a) Frekvencia- vagy fázismodulált jel látható a képen, és miért?
  [kép: Agilent-képernyő, CH1 5,00 V/osztás, CH2 2,00 V/osztás, 100 µs/osztás. Felül a moduláló szinusz (CH2), alul a szögmodulált jel (CH1). Mérések: Freq(1) = 50 kHz, Pk-Pk(1) = 14,8 V, Freq(2) = 2,500 kHz. Valaki piros vízszintes vonalat húzott a moduláló jel csúcsaihoz.]
  Hallgatói válasz: frekvenciamodulált, mert a moduláló jel függvényében változik a modulált jel frekvenciája (sűrűsödnek, ritkulnak a nullátmenetek), az amplitúdó állandó.
  »A „frekvenciamodulált” válasz **a jel készítőjének szavai szerint helyes**: az 5-ösöm gyűjtemény 4. oldalán (`5o_04_1`) az oktató megjegyzése szerint a jelet ő állította be FM-re, f_D = 25 kHz-es lökettel. Megjegyzés: a döntés elvi kulcsa, hogy FM-nél a legsűrűbb szakasz a moduláló jel csúcsánál, PM-nél az emelkedő nullátmeneténél van. A gyenge minőségű képen ezt nem lehet biztosan leolvasni, ezért a feladat szövege (c: „Tételezze fel, hogy FM jelről van szó!”) a döntő.«

### 71. oldal · 2014.01.07 (folyt.)
- b) Becsüld meg a jel frekvencia- és fázislöketét! Hallgató: s(t) = U·cos(2πf_c t + m(t)), m(t) = A·sin(2πf_m t). Leolvasva f_c = 50 kHz, f_m = 2,5 kHz (CH2, felül, moduláló). Fázislöket Φ_D = max{m(t)} = A. „A moduláló jel U_pp-je A ≈ 2 rad” → Φ_D = 2 rad. f_D = (1/2π)·max{ṁ(t)} = f_m·A = 2,5·2 = **5 kHz**.
  ⚠️ »Az f_D = Φ_D·f_m összefüggés helyes, de a **Φ_D = 2 rad hibás**: a fázislöket nem a moduláló jel feszültségéből olvasható le (a modulátor érzékenysége nem ismert). A modulált jel ritka és sűrű szakaszának periódusaiból kell becsülni. Az oktató saját elemzése (5-ösöm 4. oldal): fél moduláló periódus alatt kb. 8, egy teljes alatt kb. 20 vivőperiódus, ebből Φ_D ≈ 8,4 rad, pontosabb leolvasással **Φ_D ≈ 10,5 rad**, és a beállított érték **f_D = 25 kHz** (Φ_D = 10 rad).«
- c) Milyen demodulátort javasolsz? Rajzold fel a blokkvázlatát! Hallgató: PLL diszkriminátor. »FM-hez helyes. PM-hez a PLL hibajele (fázisdetektor kimenete) közvetlenül a fázist adja, vagy FM-demodulátor után integrátor kell.«

### 72. oldal · 2014.01.07 (folyt.)
- (2c folyt.) [kép: PLL-demodulátor blokkvázlat: s_FM → PD (fázisdetektor) → aluláteresztő szűrő → ŝ kimenet, a kimenetről VCO (feszültségvezérelt oszcillátor) vissza a PD-re] »✓ (FM-demodulátorként: a kimenet a VCO vezérlőfeszültsége)«
- **`ai2014_01_07_4`** AM-DSB modulált jel, vivő 80 kHz, moduláló 20 kHz-es szinusz, csúcsérték 2,5 V, m = 25%. a) Rajzold fel a jel legalább 50 µs-os szakaszát! max = 2,5 V = U + A, A = 0,25U → 1,25U = 2,5 V. (folytatás)

### 73. oldal · 2014.01.07 (folyt.)
- (4a folyt.) **U = 2 V, A = 0,5 V**. „+ RAJZ” (rajz nincs).
- b) Időfüggvény, mértékegység, komponensek: f_v = 80 kHz, f_m = 20 kHz. s_AM(t) = cos(2π·80·t)·[2 + 0,5·cos(2π·20·t)] V, [t] = ms. Kifejtve: U·cos(2π·80t) + (A/2)·cos(2π·100t) + (A/2)·cos(2π·60t). Komponensek: 80 kHz → 2 V, 60 és 100 kHz → **0,25 V**. »✓ (a lapon a képletben A betű maradt 0,5 helyett)«

### 74. oldal · 2014.01.07 (folyt.)
- **`ai2014_01_07_5`** [Zöld X.] Szuperheterodin, f_KF = 10,7 MHz, felső keverés, 107 MHz-es adó: f₀ = 117,7 MHz, f_t = 128,4 MHz. »✓ (azonos a 66–67. oldallal)«
- **`ai2014_01_07_7`** Mi a „fair queuing” előnye a szigorú prioritáskezeléssel szemben? Hallgató: nincs „éhezés” a rendszerben. Mi a WFQ előnye a fair queuinggal szemben? A WFQ (weighted FQ) súlyozott, a fontosabb folyamatok gyakrabban jutnak erőforráshoz. »✓ (szigorú prioritásnál az alacsony prioritású sor kiéhezhet. WFQ: a folyamok súlyuk arányában kapnak sávszélességet, így differenciált szolgáltatás és minimális garancia egyszerre)«

### 75. oldal · 2014.01.07 (folyt.)
- **`ai2014_01_07_9`** [Piros X.] DVB-C rendszerben 64-QAM helyett 256-QAM. Lekerekítés 33,33%, raszter 8 MHz. a) Szimbólum- és bitsebesség? [kép: emelt koszinuszos spektrum] (1 + α)/T ≤ 8 MHz, α = 0,3333 → (4/3)/T ≤ 8 MHz. (folytatás)

### 76. oldal · 2014.01.07 (folyt.)
- (9a folyt.) 1/T ≤ **6 MBd**. 256-QAM: 8 bit/szimbólum → v = 8·6 = **48 Mbit/s**. Hány 1,5 Mbit/s-os csatorna fér el? 48/1,5 = **32**. b) A 6 Mbit/s-os kódoló előnye: jobb képminőség (akár HD). Hátránya: egy csatorna több helyet foglal, kevesebb fér el. »✓ (azonos a 32–33. oldallal)«

### 77. oldal · 2014.01.07 (folyt.)
- **`ai2014_01_07_10`** [Zöld X.] a) A Kraft-egyenlőtlenséggel bizonyítsd, hogy lehet-e egyértelműen megfejthető kódot készíteni az l_k = {2,2,3,3,3,4,4,4,4} hosszakkal! Σ2^(−l_k) = 2·2^(−2) + 3·2^(−3) + 4·2^(−4) = 4/8 + 3/8 + 2/8 = **9/8 > 1** → nem teljesül, ezekkel a hosszakkal **nem lehet** egyértelműen megfejthető kódot készíteni. »✓ (McMillan: egyértelműen megfejthető kódra is szükséges a Kraft-feltétel)«
- b) Készíts prefixmentes kódot a 2,2,3,3,3,5,5,5,5 hosszakkal! Prefixmentes kód: egyik kódszó sem előtagja a másiknak. Pl.: 00, 11, 010, 011, … (folytatás)
  »Kraft: 2/4 + 3/8 + 4/32 = 1 → pontosan teljes kód, készíthető.«

### 78. oldal · 2014.01.07 (folyt.) és 2014. 01. 14.
- (10b folyt.) …, 100, 10100, 10101, 10110, 10111. »✓ (a teljes kód: 00, 11, 010, 011, 100, 10100, 10101, 10110, 10111, prefixmentes)«
- **`ai2014_01_14_1`** A C(5,2) szisztematikus kód kódszavai között szerepel az 10101 és a 01101. a) G_sz = [10101; 01101] = [E B], B = [101; 101]. (azonos a 34–36. oldallal)

### 79. oldal · 2014.01.14 (folyt.)
- (1a folyt.) Hᵀ = [B; E] = sorai 101, 101, 100, 010, 001. b) d_min és a hibák: u = 00, 01, 10, 11 → c = 00000, 01101, 10101, 11000. A 11000 a legkisebb súlyú nem nulla kódszó → **d_min = 2**. Javítható ⌊(d_min − 1)/2⌋ = 0, észlelhető d_min − 1 = 1. »✓«

### 80. oldal · 2014.01.14 (folyt.)
- Megj.: AER = alsó egész rész.
- **`ai2014_01_14_2`** Egyenletes kvantálót kell tervezni, amellyel egy valós jel közvetlenül digitálissá alakítható 70 dB-es SNR mellett. A jel 60 és 108 kHz között tartalmaz komponenseket. a) Mik a büntetlenül választható mintavételi frekvenciák? [kép: sáváteresztő spektrum, mint az 55. oldalon] I) f_s ≥ 216 kHz. II) (2f_c − B)/m ≥ f_s ≥ (2f_c + B)/(m + 1), f_c = 84 kHz. (A 55–57. oldali feladat másik változata, itt a csúcstényező nincs megadva.)

### 81. oldal · 2014.01.14 (folyt.)
- (a folyt.) f_s ≥ 2B = 96 kHz. m = 1: **120 kHz ≥ f_s ≥ 108 kHz**. »✓«
- b) A bitszám célszerűen választott f_s mellett: „legyen a valós jel háromszögjel: C = √3”. SNR = (3/C²)·2^(2n)·f_s/(2B), „egyenletes kvantálónál f_s = 2B”, így SNR = 6n dB ≥ 70 (folytatás).
  »A feladat nem adja meg a jel alakját, a hallgató háromszögjelet feltételezett (C = √3), ez jó, ha kimondja. Szinuszra (C = √2) 1,76 + 6,02n ≥ 70 → n = 12 szintén. A „f_s = 2B” állítás itt is pontatlan (célszerű f_s = 108…120 kHz, ez +0,5…1 dB).«

### 82. oldal · 2014.01.14 (folyt.)
- (b folyt.) 6n ≥ 70 → **n = 12**. »✓«
- **`ai2014_01_14_3`** Mi az EIR szerepe a GSM-ben? EIR (Equipment Identity Register): a hálózatban használható készülékek (IMEI) listája. White: használható. Black: letiltva. Gray: „használhatók, de minden lépésük blokkolva van”.
  ⚠️ »**Szürke lista: megfigyelt** készülékek (használhatók, de nyomon követik őket), nem blokkoltak.« Mi az FNR szerepe? Hallgató: passz. »Lásd a 27. oldalt: számhordozhatóság.«
- 5) elmélet, „ugyanaz, mint 2014.01.07/7” (fair queuing, WFQ).
- **`ai2014_01_14_4`** [Lila X.] A szinuszjelet előállító függvénygenerátor jelét hangszóróra vezetjük. Az így előállított, **éppen hallható** 10 kHz-es hang hangnyomásszintje 10 dB. A generátor frekvenciáját 1 kHz-re csökkentve a mért hangnyomásszint 30 dB. (folytatás)

### 83. oldal · 2014.01.14 (folyt.)
- a) Hány phon a 10 kHz-es hang? **0 phon**, mert éppen hallható (hallásküszöb). »✓ (a hallásküszöb görbéje a 0 phonos izofon)«
- b) Hány phon az 1 kHz-es hang? 1 kHz-en az x dB-es hangot x phonosnak érzékeljük → **30 phon**. »✓ (a phon definíciója szerint)«
- 9) „Ugyanaz, mint 2014.12.15/9” (GSM Erlang, log-log grafikon). 10) „Ugyanaz, mint 2014.12.15/6” (8-QAM konstellációk).

### 84. oldal · Infokommunikáció vizsga 2016.01.12. (közös, gépelt megoldás) [a négy összeállító felhasználóneve kihagyva]
**`ai2016_01_12c_1`** (a 42–44. oldali feladat közösségi kidolgozása) G = [1000110; 0100101; 0010011; 0001111]. a) Hᵀ sorai 110, 101, 011, 111, 100, 010, 001, H = [1101100; 1011010; 0111001]. b) Szindróma a v = 0000111 vett szóhoz: **s = 111**. c) Mind a 16 kódszó: 0000000, 0001111, 0010011, 0011100, 0100101, 0101010, 0110110, 0111001, 1000110, 1001001, 1010101, 1011010, 1100011, 1101100, 1110000, 1111111. d_min = 3, jelez 2, javít 1. d) 4 bites üzenetek, mert a generátormátrixnak 4 sora van. »✓ (s = 100 + 010 + 001 = 111 = Hᵀ 4. sora → a 4. bit hibás, c = 0001111)«

### 85. oldal · 2016.01.12 (közös, folyt.)
- (1d bővebben) k bites üzenet, d_min = 3, n = 7. Singleton: d_min ≤ n − k + 1 → k ≤ 5. Hamming-korlát (1 hibát javítunk): 1 + n ≤ 2^(n−k), k = 5-re nem teljesül, k = 4-re igen (8 ≤ 8) → C(7,4) kód, 4 bites üzenetek. »✓ (perfekt kód: a Hamming-korlát egyenlőséggel teljesül)«
- **`ai2016_01_12c_2`** [Zöld X.] Szuperheterodin, f_KF = 10,7 MHz, 97,6 MHz: f₀ = **108,3 MHz**, f_tükör = 108,3 + 10,7 = **119 MHz**. c) Sztereó jel: 50 Hz–15 kHz hangsáv összegjel, 19 kHz pilot, 38 kHz ± (50 Hz–15 kHz) különbségi jel, 57 kHz RDS. »✓«
- **`ai2016_01_12c_3`** Forgalmi méretezés: h = 3 perc, λ = 5/perc. a) A = **15 Erl**. b) 100 hívásból hány 6 percnél hosszabb? P(X > 6) = e^(−6/3) = e^(−2) = 0,14 → **14**. [kép: e^(−x) görbe 0–6] c) Kiszolgálók száma, ha P_b = 0,1%: **N = 28** (táblázatból). »✓ Ez a kidolgozás a helyes 28-at adja (a 48. oldali grafikonos 29-cel szemben).«

### 86. oldal · 2016.01.12 (közös, folyt.)
- [kép: Erlang-B görbesereg, mint a 48. oldalon]
- (3d) Kihasználtság: a = (A/N)(1 − P_b) = 15/28 = 0,5357 → **53,6%** (az 1 − P_b „nagyon kicsi” eltérés, ezért elhanyagolták). »✓«
- (3e) VoIP-kérdés: 10 Mbit/s-os vonalon átlagos kodekkel (a bitsebességet tippelni kellett) kiszolgálható-e a fenti forgalom? „Itt fontos, hogy a feladat kapcsolódik az előzőhöz. Ha kb. 10–20 kbit/s kell egy híváshoz, ezt a maximális forgalommal (N, ennyi kiszolgáló van) kell szorozni: 20 kbit/s·28 = 560 kbit/s, tehát belefér.” »✓ (fejlécekkel együtt is: G.711 kb. 87 kbit/s·28 ≈ 2,4 Mbit/s, G.729 kb. 31 kbit/s·28 ≈ 0,9 Mbit/s, mind belefér)«
- **`ai2016_01_12c_4`** Az oszcilloszkóp képernyője [kép: ugyanaz az Agilent AM-DSB kép, mint a 49. oldalon: Pk-Pk(1) = 12 V, Pk-Pk(2) = 4 V, Freq(2) = 2,5 kHz]. a) A felső a moduláló, az alsó a modulált jel: az alsónak változik az amplitúdója, a felsőnek kisebb a frekvenciája, és a felső „rásimul” az alsóra. »✓«

### 87. oldal · 2016.01.12 (közös, folyt.)
- (4b) U_m = 2 V, U_v = U_csúcs − U_m = 12/2 − 2 = 4 V, m = 2/4 = **50%**. c) U_eff = √(4²/2 + 1²/2 + 1²/2) = √9 → **P = 9 W**. d) 100 µs/osztás, a moduláló jel 4 osztás → T_m = 400 µs, f_m = **2500 Hz**. A modulált jelen 5 csúcs egy osztáson belül → 1 periódus 20 µs → f_v = **50 kHz**. e) Burkoló (csúcsegyenirányítós) demodulátor [kép: „5.1.2.1-1. ábra Csúcsegyenirányítós demodulátor”, dióda, C és R párhuzamosan]. »✓ (egyezik az 50–51. oldallal, a demodulátor itt a jobb választás)«
- **`ai2016_01_12c_5`** GSM-es feladat („valami ilyesmi volt”): Milyen adatokat adnak egymásnak A, B, C? A szürke négyszögek milyen algoritmusok? Kc mire való?
  [kép: kézi rajz fotója: AuC/HLR, MSC/VLR, MS (SIM) oszlopok. AuC → MSC „A” 128 bit, „B” 32 bit, Kc. MSC → MS „C” nyíl. MSC-ben „B == C” döntés, „igen” ág „engedély megadva”, alul „vmi BTS”. MS-ben két szürke doboz és SIM.]
  Megoldás: az AuC véletlenszámot generál, elküldi a készüléknek. Ebből a SIM és az AuC is előállít egy 32 bites számot az A3 algoritmussal. Az MSC hitelesít: egyezik-e az AuC-tól és a készüléktől kapott 32 bites szám. Ki-ből A8-cal Kc-t állít elő az AuC és a SIM is, ebből A5-tel áll elő a beszélgetés titkosítására szolgáló 114 bites kód, amit a burstökben továbbított bitekkel XOR-olnak.

### 88. oldal · 2016.01.12 (közös, folyt.)
- [kép: tankönyvi ábra, GSM-hitelesítés: SIM (Ki → „A8” | „A3”), AuC (RAND 128 bit, Ki 128 bit → „A3” | „A8”), SRES 32 bit, Kc 64 bit, MSC…BTS-ben „== ?” → OK/failed, mindkét oldalon „A5”: plaintext ↔ cyphertext n·114 bit]
  Ez alapján: **A = RAND, B = SRES, C = SRES_MS, alsó szürke doboz: A5, felső szürke doboz: A8** (az A3 a felsőben együtt). »✓«
- **`ai2016_01_12c_6`** [Lila X.] a) Előadáson elromlik a mikrofon. 2 m-re az előadótól SPL = 30 dB. Körülbelül mekkora az SPL a terem végében (20 m)? b) Milyen tényezők befolyásolják, hogy a hátul ülők hallják-e az előadót?
  Megoldás: a) −20 dB/dekád, tehát 20 m-en **10 dB**. Másik megoldás: 30 dB = 10lg(I/I₀), az intenzitás a távolság négyzetével fordítottan arányos, 10-szeres távnál 100-ad, ez 20 dB csillapodás. b) Az SNR, a terem átviteli karakterisztikája (mely frekvenciasávokat szűr ki), a levegő hangcsillapítása, a terem akusztikája (visszaverődések). Másik megoldás: a háttérzaj elfedése megemeli a hallásküszöböt. Hátra már csak 10 dB-es hangnyomásszint ér, a Fletcher-görbék teknő alakúak, kb. 100 Hz alatt és 5 kHz felett a 10 dB a hallásküszöböt sem éri el, csak az 1 kHz körüli beszédösszetevőket halljuk, halkabban.
  »✓ szabad téri pontforrásra (1/r²). Zárt teremben a zengő tér miatt a csökkenés kisebb (a lila X erre utalhat). `[ELLENŐRIZENDŐ]`«

---

## D) „Infokommunikáció feladatok” (témakör szerinti gyűjtemény) · 89–145. oldal

### 89. oldal · 0. Matek
[kép: „Trigonometrikus azonosságok” táblázat: sin² + cos² = 1, addíciós tételek, sin 2x, cos 2x, tg(x ± y), összegből szorzat, szorzatból összeg (sin x sin y = −½[cos(x + y) − cos(x − y)], sin x cos y = ½[sin(x + y) + sin(x − y)], cos x cos y = ½[cos(x + y) + cos(x − y)]), sh, ch, arsh, arch, arth, arcth]
Fejben tartandó logaritmusok: lg2 = 0,3 · lg e = 0,44 · lg3 = 0,48 · lgπ = 0,5 · lg5 = 0,7 · lg7 = 0,85. [kép: mém, tartalmilag nem releváns]
»✓ (lg2 = 0,301, lg e = 0,434, lg3 = 0,477, lgπ = 0,497, lg5 = 0,699, lg7 = 0,845)«

### 90. oldal · 1. Jelelmélet
Összefoglaló [kép: képletek beszkennelve]: egyenszint A_x = lim 1/(t₂ − t₁)·∫x(t)dt · átlagteljesítmény P_x = lim 1/(t₂ − t₁)·∫x²(t)dt (effektív érték √P_x) · csúcstényező K/√P_x (ha A_x = 0) · Fourier-transzformált X(f) = ∫x(t)e^(−j2πft)dt, inverz x(t) = ∫X(f)e^(j2πft)df · várható érték m_ξ(t) = ∫x·f_ξ(x,t)dx.
- **`aiD_1_1`** Határozza meg az x(t) = 3sin(2πFt) + 4cos(2πFt) jel csúcstényezőjét, maximális értékét és teljesítményét! [kép: kézírás] a) csúcstényező √2. b) „sin x = cos x, x = πn − 3π/4, sin(π/4) = cos(π/4) = 1/√2 → x̂ = 3/√2 + 4/√2 = 7/√2”. c) P = Σ U²/2 = 9/2 + 16/2 = **12,5**.
  ⚠️ »b) **hibás**: a maximum nem ott van, ahol sin = cos. Azonos frekvenciájú összetevők egyetlen szinusszá adódnak: x = 5·sin(2πFt + arctg(4/3)), **x̂ = √(3² + 4²) = 5** (a 7/√2 ≈ 4,95 kisebb ennél). a) C = 5/√12,5 = √2 ✓, c) ✓.«
- **`aiD_1_2`** x(t) = 2cos(2πf₁t) + 2cos(2πf₂t), f₁/f₂ = √2. Csúcstényező: **2**. Legnagyobb érték: **4**. Teljesítmény: **4**. »✓ (f₁/f₂ irracionális, a két koszinusz tetszőlegesen közel kerül egyszerre 1-hez, így a csúcs 4, P = 2 + 2 = 4, C = 4/√4 = 2)«

### 91. oldal · 1. Jelelmélet (folyt.) és 2. Mintavételezés, kvantálás
- **`aiD_1_3`** (4.6.) Az s(t) = 4sin(2πf₀t) − 3cos(2πf₀t) jel: A) csúcsértéke 4 („→ 5”) B) csúcstényezője 1/√2 C) t = 42/f₀-ban az értéke −4 D) átlagteljesítménye 3,5. [A lapon A, B, C bekarikázva.]
  ⚠️ »**Egyik állítás sem igaz:** csúcsérték 5, csúcstényező √2, s(42/f₀) = 4·0 − 3·1 = **−3**, átlagteljesítmény 12,5. A karikák valószínűleg a „hamis” jelölései. `[ELLENŐRIZENDŐ]`«
- **`aiD_1_5`** x(t) = 2sin(2πft) + 2cos(2πft) csúcstényezője? [kép: kézírás] Két azonos frekvenciájú szinuszjel (csak a fázisuk tér el) összege egy szinuszjel → C = √2. [x̂ = A, P = A²/2 → x_eff = A/√2. „Megoldás szempontjából nem kötelező”: = √(2² + 2²)·cos(2πft − arctg(2/2)).] »✓ (amplitúdó 2√2)«
- **2. Mintavételezés, kvantálás · összefoglaló:** SNR = (3/c²)·(f_s/2B)·2^(2n), dB-ben 10lg(SNR). [kép: blokkvázlat x(t) → sáváteresztő szűrő → ADC → csatorna → DAC → sáváteresztő szűrő → x̂(t)] A bemenő jel mindkét szűrőn átmegy, ha a zárótartományba esik, duplán lesz csillapítva. Az átlapolódás az ADC-nél jelenik meg, ha a zárótartományba esik, csak az utószűrő csillapítja. n·f_s ± f₁ frekvenciák jelennek meg.

### 92. oldal · 2. Mintavételezés (folyt.)
- **`aiD_2_1`** 8 kHz-es digitális rendszer, a bemenetre adott 2 V-os 1,5 kHz-es jelet amplitúdóhelyesen továbbítja. Az elő- és a visszaállító szűrő jó minőségű (zárótartománybeli csillapítás 40 dB), 4 kHz sávhatárú aluláteresztő. [kép: kézi rajz: ideális aluláteresztő 4 kHz-ig, felette −40 dB, blokkvázlat előszűrő → A/D → csatorna → D/A → utószűrő]
  a) Milyen komponensek jelenhetnek meg, ha a bemenet 3,5 kHz-es 2 V-os szinusz? Hallgató: n·f_s ± f_a: n = 0 → 3,5 kHz 2 V. 1·f_s ± 3,5 → 4,5 kHz, 11,5 kHz. n > 0-ra −40 dB → **20 mV**. »✓ (4,5, 11,5, 12,5, 19,5 … kHz, mind 20 mV)«
  b) Milyen 2 mV-nál nagyobb komponensek várhatók, ha a bemenet 1, 3 és 5 kHz-es, egyenként 2 V-os? Hallgató: 1 kHz → 2 V, 3 kHz → 2,02 V, 5 kHz: be −40 dB, ki −40 dB. „De a 3 kHz-es 2 V-os jel a mV határon 5 kHz-re ráesik.” 5 kHz: 2 V − 40 dB = 20 mV, átlapolódik 3 kHz-re. n·f_s ± 1 és n·f_s ± 3 (n > 0): 20 mV.
  »✓ Pontosítva: kimeneten 1 kHz 2 V, 3 kHz **2 V ± 20 mV** (a 8 − 5 = 3 kHz-es átlapolódott 20 mV-os összetevő a fázistól függően 1,98…2,02 V-ot ad), és 5, 7, 9, 11, 13, 15 … kHz-en 20 mV (az 1 és 3 kHz képei). Az 5 kHz-es bemenet saját 5 kHz-es összetevője kétszer csillapodik (0,2 mV < 2 mV), az 5 kHz-en mért 20 mV a 3 kHz képe (8 − 3).«
  c) Ha az előszűrőt eltávolítjuk, mi jelenik meg a kimeneten 1,5 és 3 kHz-es, egyenként 2 V-os bemenetre? (folytatás)

### 93. oldal · 2. Mintavételezés (folyt.)
- (2.1c) [kép: kézírás és spektrum] Kimenet: 1,5 kHz és 3 kHz 2 V, valamint n·8 ± 1,5 és n·8 ± 3 kHz 20 mV. »✓ (mindkét bemenő összetevő 4 kHz alatt van, ezért az előszűrő hiánya itt nem okoz átlapolódást)«
- **`aiD_2_2`** Egy √6 csúcstényezőjű, 60–108 kHz közötti jelet közvetlenül digitálissá kell alakítani. a) Választható f_s? [kép: kézírás] f_s ≥ 2·108 = 216 kHz, B = 48 kHz. n·f_s ± (60, 108) képek alapján 2f_s − 108 ≥ 108 → f_s ≥ 108, f_s − 60 ≤ 60 → f_s ≤ 120 → **108 kHz ≤ f_s ≤ 120 kHz**. b) Szűrők: f_s ≥ 216 kHz → aluláteresztő, 108 kHz törésponttal. 108…120 kHz → sávszűrő (60, 108). c) Válasszunk célszerű f_s-t és rajzoljuk fel a spektrumot: f_s = **114 kHz**. [kép: spektrum: 6–54 (n = 1), 60–108 (n = 0), 120–168 (n = 2), 174–222 (n = 1), 288–336 (n = 2) … kHz] »✓ (HTML 2.6)«

### 94. oldal · 2. Mintavételezés (folyt.)
- (2.2d) Milyen áteresztősávú visszaállító szűrő és hány bites kvantálás kell, ha f_s = 432 kHz és legalább 60 dB a kvantálási SNR? Kézírás: SNR = (3/c²)(f_s/2B)·2^(2n) ≥ 10⁶ → n = 8. B aluláteresztőnél a törésponti f.
  Megjegyzések a gyűjteményben: „szerintem n = 10”, illetve egy másik: „60 dB az 1000 és nem 10⁶, mert az SNR 20·log, ezért n = 5”. Erre a válasz: „az SNR a jel és a zaj teljesítményének hányadosa, ezért 10·log”.
  ⚠️ »**Helyes: n = 10.** Az SNR teljesítményarány, 60 dB = 10⁶. Sávszűrős visszaállításnál (60–108 kHz, B = 48 kHz): 0,5·4,5·4ⁿ ≥ 10⁶ → n ≥ 9,4 → 10. 108 kHz-es aluláteresztővel (zajsáv 108 kHz): 0,5·2·4ⁿ ≥ 10⁶ → n ≥ 9,97 → 10. A kézírásos n = 8 és az n = 5 hibás. Szűrő: aluláteresztő 108 kHz-es töréspont (vagy 60–108 kHz-es sávszűrő).«
- **`aiD_2_3`** (3.3.) Valós jel csak a 0–3 kHz és 7–8 kHz sávban. Mely f_s mellett lehetséges a tökéletes visszaállítás? A) 13,6 kHz („gyakanyagban benne van → 11…14 kHz”) B) 16,2 kHz (f_s > 2B) C) 15 kHz D) 10 kHz. [A és B bekarikázva.] »✓ (HTML 2.3: 11…14 kHz és f_s ≥ 16 kHz. 15 kHz-nél a 7–8 kHz-es sáv képe 7–8 kHz-re esik, 10 kHz-nél a 2–3 kHz-re)«
- **`aiD_2_4`** 2 V-os 4 kHz-es jel visszaállítható-e, ha a mintavételi idő 125 µs? És ha √2-ére csökkentjük? a) T₁ = 125 µs → f_s1 = 8 kHz ≥ 2·4 kHz → visszaállítható. b) T₂ = T₁/√2 → f_s2 = 11,3 kHz, „mivel f_s2 > 2f_s1”, visszaállítható.
  ⚠️ »a) **Nem állítható vissza biztosan:** pontosan f_s = 2f-nél a mintavételi tétel szigorú egyenlőtlenséget kíván (f_s > 2f_max). Szinusznál a minták akár mind a nullátmenetekre eshetnek. b) ✓, de az indoklás elírás: f_s2 = 11,3 kHz > 2·4 kHz (nem 2f_s1).«
- **`aiD_2_5`** 60–108 kHz-es jel közvetlen digitalizálása. a) f_s > 216 kHz és 108…120 kHz. b) Minden választható tartományhoz a bitszám 70 dB-hez: SNR = 1,76 + 6,02n → **12 bit**. (folytatás)
  »Szinuszra (C = √2) túlmintavételezés nélkül 12 bit ✓. Pontosítás: a tartományonként eltérő f_s/(2B) nyereség miatt f_s = 216 kHz-nél, ha a visszaállítás sávszűrővel (B = 48 kHz) történik, 10lg(216/96) = 3,5 dB nyereség → n ≥ 10,75 → **11 bit** is elég. 108…120 kHz-nél 12 bit. `[ELLENŐRIZENDŐ]`, a gyűjtemény egységesen 12-t mond.«

### 95. oldal · 2. Mintavételezés (folyt.)
- (2.5 folyt.) „Ez a képlet biztosan jó (előadáson is említették), és másképpen még úgy jön ki 12 bit, ha az SNR = 10⁷.” »✓«
- **`aiD_2_6`** (4.1.) 10 kHz-es mintavételezés, a be- és kimenő szűrő azonos: H(f) = 1 (|f| ≤ 5 kHz), 3,5 − |f|/2 (5 ≤ |f| ≤ 7 kHz), 0 egyébként. A bemenő jel 2 V-os 1 kHz-es és 3 V-os 6 kHz-es komponens. Az áteresztősávban az A/D–D/A pár feszültséghelyes. A kimenő jelben megjelenik: A) 6 kHz-es komponens 0,75 V-tal B) 4 kHz-es komponens C) 6 kHz-es 0,5 V-tal D) 9 kHz-es komponens. [A és B bekarikázva.]
  »✓ A és B. A 6 kHz az előszűrőn 3·0,5 = 1,5 V, átlapolódik 4 kHz-re (1,5 V, átjut). A 6 kHz-es vonal az utószűrőn 1,5·0,5 = **0,75 V**. A 9 kHz (10 − 1) az utószűrőn H = 0.«
- **`aiD_2_9`** f_s = 12 kHz, a 2 V-os 2,5 kHz-es mérőjel kimenő 2,5 kHz-es összetevője 2 V, a 9,5 kHz-es csak 20 mV. a) Rajzolja fel a blokkvázlatot, különös tekintettel a szűrőkre! („Lásd az összefoglalóban.”) b) Mekkora a 2 V-os 9,5 kHz-es bemenő jel hatására a kimenő 9,5 kHz-es összetevő, ha a 2,5 kHz-es összetevő 40 mV?
  [kép: kézírás, füzetlap] a)-ból H_utó(9,5 kHz) = 0,01. b)-ből H_elő(9,5 kHz) = 0,02. U_ki(9,5 kHz) = U_be·H_elő(9,5)·H_utó(9,5) = 2 V·0,02·0,01 = **0,4 mV**. »✓«

### 96. oldal · 2. Mintavételezés (folyt.)
- (2.9c) A rendszer melyik elemét változtatnád, hogy a 9,5 kHz-es bemenő jel hatására létrejövő 2,5 kHz-es összetevő lecsökkenjen? „Bemenő szűrő felső határfrekvenciája vagy a mintavételezési frekvencia megnövelése.” »✓ Pontosabban: az **előszűrő** zárótartománybeli csillapítását kell növelni (meredekebb vagy alacsonyabb törésponti szűrő), vagy f_s-t úgy növelni, hogy f_s − 9,5 kHz az átviteli sávon kívül essen. Az utószűrő nem segít, mert az átlapolódott 2,5 kHz az áteresztősávban van.«
- **`aiD_2_11`** [kép: hivatalos megoldás beszkennelve, több darabban] Az előadásokat digitális hangtechnikával rögzítjük. A szuperjó (hibátlan átalakítású) mikrofon jelét egy 4 kHz-es, ideális aluláteresztő szűrőn átvezetve 9 kHz-es mintavételezéssel és 14 bites egyenletes kvantálással digitalizáljuk. a) Sikerül-e tökéletes hanghűséggel rögzíteni az előadó hangját? b) Ha nem, miért nem? c) Szükség van-e az előszűrőre? d) Milyen mérhető és hallható változást okoz, ha minden minta legkisebb 6 bitjét elhagyjuk? e) Ha egy hallgató 26 dB-lel hangosabb beszédet kér, hányszoros teljesítményleadást igényel ez az oktatótól?
  Hivatalos válaszok: a) „Nyilván nem.” b) Sávkorlát: a 4 (sőt 3) kHz-es sáv elég az érthetőséghez, de 4 kHz felett is van beszédhang, ezt elveszítjük. Kvantálás: a 14 bit nagyon jónak számít, de kvantálási zaj mégis „születik”. Megjegyzés: a D/A átalakító szűrője itt nem játszik (rossz válasz lenne), átlapolódás sem fordul elő (bármelyik −5 pont). c) Igen! Beszédjelnél is megjelenhetnek 4,5 kHz-nél magasabb komponensek (főleg mert a mikrofon „szuperjó”) a mintavevő bemenetén, ezek az alapsávba visszalapolódva kellemetlenkednek. d) A kvantálási torzítás nő. Ez jó közelítéssel fehérzaj, ennek növekedése (mert eddig is volt!) kb. 36 dB-es, és már normál hangerejű visszahallgatásnál is (főleg a beszédszünetekben) jól hallható sistergést jelent. e) Kb. **400-szoros** (10lg P = 26 dB).
  »✓ (6·6,02 = 36,1 dB, 10^2,6 = 398. HTML 2.11)«

### 97. oldal · 2. Mintavételezés (folyt.)
- **`aiD_2_12`** [kép: hivatalos megoldás, aláírás „bg. Dr. …”] 60–108 kHz-es jel, adja meg az összes célszerűen választható f_s-t! Kézírás: f_s > 2·108 = 216 kHz (1 pont). Σ X(f − i·f_s) → csak egyetlen tagja különbözzön 0-tól, vagy minden tag 0. f_s − 60 < 60 → f_s < 120 kHz, 2f_s − 108 > 108 → f_s > 108 kHz. **108 < f_s < 120 kHz** (2 pont). Megjegyzés: 2·48 kHz-nél kisebb nem jöhet szóba. »✓«
- **`aiD_2_13`** [kép: kézírás] B = 70…100 kHz. f_s ≥ 2·f_max = 200 kHz (aluláteresztő szűrővel). Táblázatos próbálgatás: f_s = 60 kHz (n·f_s − 70, n·f_s − 100) nem jó. f_s = 66,7 kHz: n = 2 → 63, 33, n = 3 → 130, 100 ✓ → „f_s = 66,7 kHz, itt csak sávszűrővel”.
  »✓ A teljes válasz: f_s ≥ 200 kHz, **100 ≤ f_s ≤ 140 kHz** (k = 2), **66,7 ≤ f_s ≤ 70 kHz** (k = 3). A gyűjtemény a k = 2 tartományt nem írja le.«
- **`aiD_2_15`** (5.4.) 8 kHz-es mintavételezés, a be- és kimenő szűrő azonos (H = 1, ha |f| ≤ 5 kHz, 3,5 − |f|/2, ha 5…7 kHz, 0 egyébként). Bemenet 2 V 1 kHz és 3 V 6 kHz. A kimenetben megjelenik: A) 6 kHz-es 3/4 V-os B) 2 kHz-es 0,5 V-tal C) 4,5 kHz-es 0,5 V-tal D) 2 kHz-es 3/4 V-tal. Válasz: **A**. »✓ (6 kHz → előszűrő 1,5 V, átlapolódik 2 kHz-re 1,5 V-tal (ez sem B, sem D), a 6 kHz-es vonal az utószűrőn 0,75 V)«

### 98. oldal · 2. Mintavételezés (folyt.) és 3. Rádiós összeköttetések
- **`aiD_2_16`** (5.6.) Valós jel 19–25 kHz között. Mely f_s mellett lehetséges a tökéletes visszaállítás? A) 12,6 B) 11 C) 50,75 D) 39 kHz. Válasz: **A, C**. »✓ (k = 4: 12,5…12,67 kHz, k = 1: ≥ 50 kHz. A 39 kHz a k = 2 tartomány (25…38) és az 50 között van. HTML 2.9)«
- **3. Rádiós összeköttetések · összefoglaló:** egyutas a_sz[dB] = 10lg(P_T/P_R) = 20lg(4πr/λ) − G_T − G_R. Kétutas |E_R| = 2|E₀|·|sin(π·2h_Th_R/(rλ))|, a_kétutas = (1/(G_TG_R))·(r²/(h_Th_R))². Kérdés a gyűjteményben: „itt 10lg vagy 20lg?” Válasz: 10lg, ha a zárójelről leveszed a négyzetet, akkor 20lg lesz belőle. dB-ben: a = 20lg(r²/(h_Th_R)) − G_T − G_R. (1 + |Γ|)/(1 − |Γ|) = E_max/E_min = √(P_max/P_min).
  [kép: kézírás: kétutas terjedés görbéje E/E₀ a távolság függvényében, a d_int határig oszcillál, utána r⁻⁴-nel csökken. „Az interferencia-zóna pozitív helyén 2×-es az egyutashoz képest”: a_sz = 20lg(4πr/λ) − G_T − G_R − 6 dB. r ≫ d_int: sin x ≈ x → a_sz = 20lg(r²/(h_Th_R)) − G_T − G_R. Példa: ha a vevő 100 pW-ot érzékel, P_R = 10^(−10) W, a_sz = 110 dB → P_T = 10 W.]

### 99. oldal · 3. Rádiós összeköttetések (folyt.)
[kép: kézi jegyzetek, kiemelve: a₁ = 10lg(P_A/P_V) = 20lg(4πr/λ) − G_A − G_V. Gömb rajz: S₀ = P_A/(4πr²), G_A = S/S₀, P_V = S·A_h, A_h = Gλ²/(4π), P_V = G_V·(λ²/4π)·G_A·P_A/(4πr²), P_A/P_V = (4πr)²/λ²·1/G_A·1/G_V.]
[kép: „Ha kétutas és messze vagyunk az interferenciahatártól”: a_sz[dB] = 10lg(r²/(h_Th_R))² − G_T − G_R. „Antenna nyereség”: A_h = r²π, G = A_h·4π/λ².] »✓ (az A_h = r²π a parabolaantenna geometriai felülete, a hatásos felület ennél a hatásfokkal kisebb)«
- **`aiD_3_1`** Földi, 900 MHz körüli összeköttetés, fix adó (G_T = 10 dB), mozgó vevő (G_R = 3 dB, h_R = 1,66 m). a) Mekkora lehet az adóantenna magassága, ha az 1 km-nél távolabbi zónában az interferencia miatt kioltás nem jöhet létre? (folytatás)

### 100. oldal · 3. Rádiós összeköttetések (folyt.)
- (3.1a) [kép: kézírás] Az adótól 1 km-nél távolabb nincs kioltás → a legtávolabbi minimum (Γ = −1, E = 0) helye 1 km. [kép: E(r) görbe, kioltások, az utolsó minimum 1 km-nél, utána az interferenciazóna határa] |E_R| = 2|E₀|·|sin(2πh_Th_R/(rλ))|, λ = c/f = 1/3 m. 2πh_Th_R/(rλ) = kπ, k = 1 → h_T = (1/2)·rλ/h_R = (1/2)·1000·(1/3)/(5/3) = **100 m**. »✓ (h_R = 1,66 ≈ 5/3 m. A legtávolabbi minimum 2h_Th_R/λ-nál van, `03` G4)«
- b) Maximális távolság, ha a késleltetés legfeljebb 50 µs: r = c·Δt = **15 km**. »✓«
- c) Szakaszcsillapítás 15 km-en: a = 20lg(r²/(h_Th_R)) − G_T − G_R = 109,9 dB ≈ **110 dB**. »✓ (109,6 dB)«
- d) Mekkora legyen az adó teljesítménye, ha a vevő 100 pW alatt nem érzékel? 110 dB = 10lg(P_T/100 pW) → P_T = 10¹¹·100 pW = **10 W**. »✓«

### 101. oldal · 3. Rádiós összeköttetések (folyt.)
- **`aiD_3_5`** Bátran használhatjuk-e a kétutas terjedésnél tanultakat egy műhold és egy földi antenna között? Gyűjteménybeli válasz: „A kérdés hülye, mert nem definiálták a bátran szót.” Elvileg a kétutas képlet nem használható, mert nem számolunk a reflexiókkal, de a kétutas képlet reflexió nélküli határesete kiadja a szabadtéri képletet.
  »Elvárt válasz: **nem.** A földi antenna erősen irányított, felfelé néz, a talajról visszavert sugár a főnyalábon kívülről érkezik, így elhanyagolható. A kétutas modell feltételei (két közel vízszintes sugár, r ≫ h_T, h_R) sem teljesülnek. Szabadtéri (egyutas) terjedéssel kell számolni.«
- **`aiD_3_10`** [kép: hivatalos megoldás darabjai] 450 MHz-es mobil rendszer, bázisállomás-antenna 50 m, vevők 1,5 m. a) Kétutas terjedésnél milyen távolságra van az interferenciazóna határa, azaz a legtávolabbi térerősség-maximum? **450 m** (4h_Th_R/λ). b) A vevőantenna magasságának változtatásával mekkora a maximális és minimális térerősség aránya? Hogyan módosul, ha a földreflexiós tényező nem −1, hanem −0,9? **Végtelen, illetve 1,9/0,1 = 19.** c) A bázisállomásnak vagy a vevőkészüléknek pozitív (dB) antennanyeresége egy tipikus hívás során? A bázisállomásnak biztosan, mert a tipikus irányból érkező hívásokat preferálja. A mobilkészülék irányítottsága jóval kisebb, adott esetben negatív. d) Szakaszcsillapítás az interferenciazóna határán (Γ = −1, az antennanyereségek összege 6 dB): **66,57 dB**. e) 10 km-en mennyivel változik a vett teljesítmény, a vételi térerősség és a szakaszcsillapítás, ha a hívást 3 m-es magasságból folytatjuk (h_R duplája)? **+6 dB, +6 dB, −6 dB**.
  »✓ (λ = 2/3 m, 4·50·1,5/(2/3) = 450 m. d) 20lg(4π·450/(2/3)) = 78,57 dB, a maximumban a térerősség kétszeres (−6 dB), a nyereségek −6 dB → 66,57 dB. e) távoli zónában P_R ∝ h_R²)«

### 102. oldal · 3. Rádiós összeköttetések (folyt.) és 4. Kódolás
- **`aiD_3_11`** Egy 1,5 GHz körüli parabolaantenna kör alakú apertúrájának sugara 1 m. Adja meg decibelben a nyereséget! (π·π ≈ 10) [kép: kézírás] A_h = R²π, A_h = Gλ²/(4π) → G = 4π²R²/λ² = (1/(1/5))²·4π² = 100π² ≈ 1000 → **G = 30 dB**. (f = 300 MHz ↔ λ = 1 m) »✓ (λ = 0,2 m, ideális apertúra-hatásfokkal)«
- **4. Kódolás · összefoglaló** [A fejezetcím mellett zöld X.] Forráskódolás: prefix kódok egyértelműen dekódolhatók, az f kód prefix, ha egyik kódszó sem folytatása a másiknak. McMillan: minden egyértelműen dekódolható kódra Σs^(−|f(x_i)|) ≤ 1 (s a kódábécé elemszáma). Kraft: ha Σs^(−l_i) ≤ 1, létezik prefix kód ezekkel a hosszakkal. Átlagos szóhossz λ = Σp_i·l_i, entrópia H(P) = Σp_i·ld(1/p_i). Shannon I.: tetszőleges egyértelműen dekódolható kódra λ ≥ H(P), és létezik prefix kód, amelyre λ ≤ H(P) + 1.
  »Jelölés: a gyűjtemény λ-t ír az átlagos kódszóhosszra, ebben az anyagban **L̄** (a λ a hullámhossz, lásd a standard 3. pontját).«

### 103. oldal · 4. Kódolás (folyt.)
[kép: kézírás: a −3…+3 szintek valószínűségei 1/16, 1/16, 1/8, 1/2, 1/8, 1/16, 1/16, és a hozzá tartozó Huffman-fa: 1 (p = 1/2), 000, 001, 0100, 0101, 0110, 0111 jellegű levelek]
Hibavédelem [kép: kézírás]: t_jel = d_min − 1, t_jav = ⌊(d_min − 1)/2⌋, G = [I|A], H = [Aᵀ|I], sᵀ = H·cᵀ, sᵀ = H·eᵀ, C(n,k) esetén s (n − k) bites. d_min: a legkevésbé eltérő kódszavak hány bitben különböznek. A G minden sora érvényes kódszó. I: egységmátrix.
[kép: „Szindróma”: s = v·Hᵀ = e·Hᵀ, v = c + e. „0 hiba → 1 szindróma”, javításhoz Σ_{x=0}^{t} C(n,x) = 2^(n−k).]
  »Pontosítás: a javíthatóság feltétele Σ_{x=0}^{t} C(n,x) **≤** 2^(n−k) (Hamming-korlát). Egyenlőség csak perfekt kódnál (pl. Hamming(7,4)) áll fenn.«
[kép: „Szisztematikus kód”: kódszó = [üzenet | paritás], pl. C(8,4): n = 8, k = 4. c = u·G, G = [I Bᵀ], Hᵀ = [Bᵀ; I].]

### 104. oldal · 4. Kódolás (folyt.)
- **`aiD_4_1`** Egy 2 kHz sávszélességű alapsávi analóg jelet digitalizálunk, a Nyquist szerinti minimális mintavételi frekvenciával. A kvantáló hét értékre kerekít: {−3, −2, −1, 0, +1, +2, +3}, valószínűségek rendre 1/16, 1/16, 1/8, 1/2, 1/8, 1/16, 1/16. Veszteségmentes forráskódolás, hibavédő és titkosító kódolás nélkül. a) Mennyire lehet kicsi az átlagos kódszóhossz, és legalább mekkora bitsebesség kell? b) Huffman- (vagy Shannon-) kód. c) Az elért átlagos sebesség?
  [kép: kézírás] Minimális átlagos kódszóhossz = entrópia: H = (1/16·4)·4 + (1/8·3)·2 + (1/2·1)·1 = **2,25 bit/szimbólum**. f_s = 4 kHz → 4000 minta/s → **9000 bit/s**. Kód: A 1111, B 1110, C 101, D 0, E 100, F 1101, G 1100. „Ha L̄ > H(P), akkor tömöríthető szimbólumcsoportok kódolásával.”
  »✓ A valószínűségek kettő hatványai, ezért a Huffman-kód pontosan eléri az entrópiát: L̄ = 4·(1/16)·4 + 2·(1/8)·3 + (1/2)·1 = 2,25 → c) **9000 bit/s**.«
- **`aiD_4_2`** A G generátormátrixú kódban a 001 üzenethez 0101011, a 110-hez 1011011, a 101-hez 1000110 kódszó tartozik. [kép: kézírás: (n,k) = (7,3), „nem szisztematikus: v₁v₂v₃ → v₁v₂v₃c₄c₅…”] a) Adja meg a 000 üzenet kódszavát! (folytatás)

### 105. oldal · 4. Kódolás (folyt.)
- (4.2a) 000 → **0000000** (c = u·G). »✓ (lineáris kód)«
- b) Hány lehetséges kódszó van? Hányféle szindróma lehet legfeljebb? 2³ = **8** kódszó, 2^(n−k) = 2⁴ = **16** szindróma. Megjegyzés: e·Hᵀ = s, illetve H·eᵀ = sᵀ, „és nem máshogy!” »✓«
- c) Hibajelző és -javító képesség: G = [1101101; 0110110; 0101011] (100 = 001 ⊕ 101, 010 = 100 ⊕ 110). Kódszavak: 000 → 0000000, 001 → 0101011, 010 → 0110110, 011 → 0011101, 100 → 1101101, 101 → 1000110, 110 → 1011011, 111 → 1110000. **d_min = 3** → jelez 2, javít 1. »✓ (a legkisebb súly 3: 1000110 és 1110000)«
- **`aiD_4_3`** [kép: elmosódott beszkennelt feladat] Bináris, lineáris, szisztematikus blokk-kód, G = [10011; 01110]. a) Adja meg a kódszavakat! Mi lehetett a legvalószínűbb üzenet, ha a vett blokk v = (10101)? b) Paritásellenőrző mátrix, a v szindrómája? (A gyűjteményben nincs megoldás.)
  »Saját megoldás (a képről olvasott adatokkal, `[ELLENŐRIZENDŐ]`): kódszavak 00000, 10011, 01110, 11101. v = 10101 távolságai 3, 2, 4, **1** → 11101, üzenet **11**. Hᵀ sorai 011, 110, 100, 010, 001, s = 011 + 100 + 001 = **110** = Hᵀ 2. sora → a 2. bit hibás, c = 11101. d_min = 3.«
- **`aiD_4_5`** (3.6.) Egy kód kódszavai 10101, 01010, 00011, 11100, 11111. A) d_min = 2. B) Egy bithiba mindig javítható. C) Egy bithiba mindig észlelhető. D) Ez nem szisztematikus kód. [Bekarikázva: A, C, D. Kézírás: d_min = 2, d_min − 1 = 1, ⌊(d_min − 1)/2⌋ = 0.] »✓ (10101 és 11111 távolsága 2. A kód nem is lineáris: nincs benne 00000, és 5 kódszava van)«

### 106. oldal · 4. Kódolás (folyt.)
- **`aiD_4_6`** (4.5.) Az a, b, c karakterekből álló üzeneteket a 0/1 ábécével kódoljuk: a ↦ 1, b ↦ 10, c ↦ 100. A) Az 1011001001 a „bacca” kódja („csak így lehet felbontani”). B) Ez prefix kód (áthúzva: „prefix, akkor ha nem előtagja egymásnak”). C) Létezik olyan prefix kód, amelynek kódszóhosszai megegyeznek ezekkel (pl. 1, 01, 001). D) A kód egyértelműen dekódolható (Σ2^(−l) ≤ 1). [Bekarikázva A, C, D. Sarokban válaszrács.]
  »✓ A, C, D. B hamis (az 1 a 10 előtagja). D indoklása pontosítva: a Kraft-összeg ≤ 1 csak szükséges feltétel. Ez a kód azért egyértelműen dekódolható, mert **posztfix-mentes** (minden kódszó 1-gyel kezdődik, így az 1-esek jelzik a kódszavak elejét).«
- **`aiD_4_7`** (6.) G = [10101; 01011]. a) Kódszavak: 10101, 01011, 11110 (A XOR B), 00000 (a csupa nulla mindig kódszó). v = (11101) „legközelebb az elsőhöz van” → 10101, üzenet 10. b) Hᵀ sorai 101, 011, 100, 010, 001, H = [10100; 01010; 11001]. s = v·Hᵀ (vagy s = H·vᵀ) = **011**: azoknak a Hᵀ-soroknak az XOR-ja, ahol v-ben 1 van („tehát azok a sorok, amiket v kijelöl Hᵀ-ban”). c) d_min = 3, detektál 2, javít 1. »✓ (s = 011 = Hᵀ 2. sora → a 2. bit hibás, c = 10101)«

### 107. oldal · 5. Analóg modulációs eljárások
Összefoglaló: amplitúdómoduláció, AM-DSB: s(t) = (U + x(t))·cos(2πFt + φ), U amplitúdó, x(t) moduláló jel, F vivőfrekvencia. Demoduláció: burkolódetektorral.
[kép: „AM jel alakjai”: s_AM(t) = [U_v + U_m cos(2πf_m t + α)]cos(2πf_v t + φ) = U_v cos(2πf_v t) + ½U_m cos((f_v − f_m)t2π) + ½U_m cos((f_v + f_m)t2π): vivőjel és oldalsávi komponensek. Jelalak U_v + U_m, U_v, U_v − U_m szintekkel.]
[kép: „Modulációs mélység”: m = max{s_m(t)}/U ≅ U_m/U_v. „Sávszélesség”: B_AM-DSB = 2B_m, B_AM-SSB = B_m. „Oldalsáv teljesítménye”: P_hasznos/P_összes = m²/(c² + m²). Burkoló demodulátor (dióda, C, R) és szorzó demodulátor (s_AM × 2cos(2πf_v t) → aluláteresztő, B ≪ 110 kHz → ŝ moduláló).]
Szögmoduláció: (folytatás)

### 108. oldal · 5. Analóg moduláció (folyt.)
[kép: „Általános alak”: s_FM(t) = U_v cos(2πf_v t + m(t) + φ), m(t) modulációs tartalom, s_M(t) moduláló jel. A jel PM, ha m(t) ~ s_M(t). FM, ha m'(t) ~ s_M(t). Fázislöket Φ_D = max|m(t)|, frekvencialöket f_D = (1/2π)·max|m'(t)|, s_FM(t) = U cos(2πf_v t + Φ_D sin(2πf_m t)).]
Táblázat (gépelt): x(t) moduláló jel. PM: µ(t) = x(t), dµ/dt = dx/dt. FM: µ(t) = ∫x(t)dt, dµ/dt = x(t). Φ_D = max|µ(t)|, f_D = (1/2π)·max|dµ/dt|. Szinuszos x(t) = A·cos(2πf_m t) esetén: PM: µ = A cos(2πf_m t), Φ_D = A, f_D = f_m·A, m = A. FM: µ = A sin(2πf_m t)/(2πf_m), Φ_D = A/(2πf_m), f_D = A/(2π), m = A/(2πf_m). Modulációs index m = f_D/f_m, „valójában Φ_D = m”. B: moduláló jel sávszélessége, B_v: elfoglalt sáv. **B_v ≅ 2B(1 + Φ_D), illetve B_v ≅ 2(f_D + B)**.
[kép: kézírás: s(t) = A[V]·cos(2π·F[kHz]·t[ms] + φ + B·sin(2π·f_m[kHz]·t[ms])), B = f_D/f_m]
Egy eltévedt sor a lapon: „Mennyire közelíti meg az így konstruált kód a veszteségmentes kódolással elérhető bitsebesség alsó határát?” (a 4.1 feladathoz tartozik). »✓ (a táblázat FM-oszlopában A az frekvenciaérzékenységgel szorzott amplitúdó, rad/s egységben)«

### 109. oldal · 5. Analóg moduláció (folyt.)
- **`aiD_5_1`** FM rendszer, 20 Hz és 8 kHz közötti jelet kell továbbítani 1,5 GHz-es vivőn, a rendelkezésre álló sávszélesség 40 kHz (számoljunk a maximális 8 kHz-cel). [kép: kézírás, spektrumvázlat] a) Frekvencialöket: B_FM = 2(f_D + f_m) = 40 kHz → **f_D = 12 kHz**. b) s(t) = 5[V]·cos(Aπt[ms] + φ + B sin(Cπt[ms])) alakban mi A, B, C? Moduláló s_m(t) = ξ·cos(2π·8 kHz·t). **C = 16, B = f_D/f_m = 1,5 rad, A = 3·10⁶.** c) Demodulátor blokkvázlata (nincs kidolgozva).
  »✓ A számértékek jók (t ms-ban: 2π·1,5·10⁶·t → A = 3·10⁶, 2π·8·t → C = 16). A lapon a „kHz” egység az A és C mellett felesleges, ezek egység nélküli számok.«
- **`aiD_5_5`** Egy FM rádióadóról tudjuk: ha a moduláló jel 1 V csúcsértékű, 1 ms periódusidejű szinusz, akkor a modulált jel amplitúdója 9 V, frekvencialökete 9 kHz. f_m = 1 kHz, f_D = 9 kHz = (1/2π)·max|m'(t)|. a) Fázislöket: **Φ_D = f_D/f_m = 9 rad**. (folytatás)

### 110. oldal · 5. Analóg moduláció (folyt.)
- (5.5b) Sávszélesség: B = 2(f_D + f_m) = **20 kHz**. c) Ha a moduláló jel teljesítménye duplázódik: P'_m = 2P_m → P'_FM = **1·P_FM**. d) Ha a moduláló frekvencia duplázódik: P'_FM = **1·P_FM**. »✓ (az FM-jel teljesítménye U²/2 = 40,5 W-os normált érték, a modulációtól független)«
- e) Demodulátor: „fáziskéses szorzó”: U·cos(2πFt + m(t))·cos(2πFt + φ + m(t − T)) = (U/2)·cos(φ + m(t) − m(t − T)) + (U/2)·cos(4πFt + …). φ = 3π/2-vel (U/2)·sin(m(t) − m(t − T)) ≈ (U/2)·T·m'(t). [kép: blokkvázlat: s_FM → szorzó → LPF, a szorzó másik bemenete a jel „fázistolt + T késleltetett” változata] »✓ (késleltetővonalas, kvadratúra-demodulátor. A lapon φ = 3π/4 olvasható, a sin-hoz 90°-os (π/2 vagy 3π/2) tolás kell `[ELLENŐRIZENDŐ]`)«
- **`aiD_5_6`** x(t) = 0,1cos(2πf₁t) + 0,5cos(2πf₂t), s(t) = A(U₀ + x(t))cos(2πFt), f₁ = 1 kHz, f₂ = 2 kHz, F = 900 kHz, U₀ = 2 V, A = 100 V. a) Moduláció fajtája: AM-DSB (az alakja megfelel). b) m = max|x(t)|/U₀ = (0,1 + 0,5)/2 = **30%**. c) Nem nulla teljesítmény: **F, F ± f₁, F ± f₂**. »✓ (t = 0-ban mindkét koszinusz 1, így max|x| = 0,6)«

### 111. oldal · 5. Analóg moduláció (folyt.)
- **`aiD_5_7`** A gitáros egyetlen húrját használja, amely 220 Hz-es alaphangon szól. A tremolókarral a hang magasságában 5,5 Hz-es szinuszos változást tud előidézni, másodpercenként ötször és félszer maximálisan ±10%-kal megváltoztatva a hangmagasságot. a) Az alaphang milyen modulációjával állítható elő? **Frekvenciamoduláció.** b) Mekkora sávszélesség kell? „220 Hz ± 10% → 198–242 → B = 44 Hz.” c) Milyen mintavételezést javasolna a felvételhez, figyelembe véve, hogy a húr sok felharmonikussal szól? CD-minőség, 44 100 Hz („itt volt valami más jó is, de az f_s > 2B simán nem elég”).
  ⚠️ »b) **Carson szerint** f_D = 22 Hz, f_m = 5,5 Hz → B_v ≈ 2(22 + 5,5) = **55 Hz**. A 44 Hz csak a 2f_D, a moduláló frekvenciát kihagyja. c) A felharmonikusok miatt nem a 44 Hz-es sáv, hanem a hallható tartomány (kb. 20 kHz) a mérvadó, és **antialiasing előszűrő** kell: f_s ≥ 40 kHz, pl. 44,1 kHz.«
- **`aiD_5_8`** (3.2.) Szögmodulált jel, F = 10 kHz, s(t) = 20cos(2πFt + 0,1sin 2000πt). A) fázislöket 0,1 rad B) frekvencialöket 100 Hz C) sávszélesség nagyobb, mint 2 kHz D) effektív érték 20/√2. [Mind a négy bekarikázva. Kézírás: Φ_D = 0,1, f_D = (1/2π)·max|m'(t)| = 100 Hz, B = 2(f_D + f_m) = 2B(1 + Φ_D) = 2,2 kHz, U_eff = 20/√2.] »✓ mind a négy igaz.«
- **`aiD_5_9`** (4.4.) Mely állítások igazak a 10·m(t)·cos(2000πt + 40) modulált jelre, ha m 300 Hz és 3,4 kHz között tartalmaz komponenseket, és |m(t)| ≤ 0,6 V? A) Burkolódetektorral demodulálható. B) A modulált jel sávszélessége 3,1 kHz. C) A vivő frekvenciája 2000 Hz („→ 1000 Hz”). D) Fázislökete pontosan 40 rad. [A lap szélén egy oda nem illő, levágott konstellációs ábrarészlet.]
  »**Egyik sem igaz:** vivő nélküli AM-DSB/SC, ezért burkolóval nem demodulálható. A sávszélesség 2·3,4 = 6,8 kHz. A vivő 1000 Hz. A 40 állandó fázis, nem löket.«
- **`aiD_5_17`** [kép: hivatalos megoldás darabjai] Illesztett lezárású AM-DSB modulátor kimenete s_AM(t) = A·[2 + x(t)]·cos(2πFt), a bemeneten x(t) = 0,1·sin(2πf₁t) + cos(2πf₂t), a kimeneten R ellenállás (f₁ = 1 kHz, f₂ = 2 kHz, F = 900 kHz, A = 100 V, R = 50 Ω). a) Modulációs mélység? m = max|x(t)|/U, max|x(t)| = 1,1 (t = 0,75 ms-nél), U = 2 → **m = 55%**. »✓ (sin = −1 és cos = −1 egyszerre: −1,1)«

### 112. oldal · 5. Analóg moduláció (folyt.)
- (5.17b) A terhelésen megjelenő frekvenciák és teljesítmények: 898 kHz: 50²/2/50 = **25 W** · 899 kHz: 5²/2/50 = **0,25 W** · 900 kHz: 200²/2/50 = **400 W** · 901 kHz: 0,25 W · 902 kHz: 25 W. c) Oldalsávok aránya: (25 + 0,25 + 0,25 + 25)/(25 + 0,25 + 400 + 0,25 + 25) ≈ **11,21%**. d) Minimális pillanatnyi teljesítmény: (U + min x(t))²/R = (200 − 110)²/50 = **162 W**. e) Maximális: (U + max x(t))²/R = (200 + 100,125)²/50 = **1801,5 W** (egyszerű deriválásból). Becslés: 300²/50 = 1800 < P < 310²/50 = 1922 W. »✓ mind (max x = 1 + 0,1²/8 = 1,00125 a sin θ = 0,025 pontban)«
- **`aiD_5_18`** [kép: hivatalos megoldás, aláírás „by Dr. …”] Ugyanaz, mint 5.5: f_D = 9 kHz, m(t) szinuszos, f₀ = 1 kHz. m'(t) = 2πf₀Φ_D·cos(2πf₀t) → f_D = f₀Φ_D → **Φ_D = 9 rad**. B_v = 2(f_D + f₀) = **20 kHz** („szinuszos jelekre”), illetve B_v = 2(1 + √Φ_D + Φ_D)·f₀ = **26 kHz** („csak szinuszos jelekre”).
  »Két becslés: a Carson-szabály (20 kHz, kb. 98% teljesítmény) és egy pontosabb, Bessel-alapú közelítés (26 kHz, kb. 99%). Vizsgán a Carson-szabály az elvárt, a második a hivatalos megoldás kiegészítése. (`01` FM fejezet: Bessel/Carson)«
- **`aiD_5_19`** Adott egy jel frekvenciatartománybeli képe (táblára rajzolva), egyenszintje zérus. Adja meg az ebből előálló AM/SSB-SC/LSB modulált jel spektrumát! (folytatás)

### 113. oldal · 5. Analóg moduláció (folyt.) és 6. Digitális alapsávi átvitel
- (5.19 folyt.) [kép: |F(jω)| háromszög-spektrum: f_a = 100 Hz-nél a legnagyobb, f_h = 500 Hz-nél nulla, tükrösen a negatív oldalon. f_v = 5 kHz] Adjon részletes javaslatot a modulált jel előállítására! Milyen előnye és hátránya van az AM-SSB-nek az AM-DSB-vel szemben? (A gyűjteményben nincs megoldás.)
  »Saját megoldás: LSB: 5 kHz − (100…500 Hz) = **4,5…4,9 kHz**, a spektrum tükrözve (a 4,9 kHz-es vége a legnagyobb, a 4,5 kHz-es vége nulla), negatív oldalon tükörképe. Előállítás: szorzó (DSB-SC), majd sávszűrő a felső oldalsáv levágására (a két oldalsáv között 200 Hz rés van, ez éles szűrőt kíván), vagy fázisos (Hilbert-transzformátoros) módszer. Előny: fele sávszélesség, nincs vivőre és második oldalsávra pazarolt teljesítmény. Hátrány: bonyolultabb előállítás és koherens (vivőhelyreállításos) demoduláció.«
- **`aiD_5_21`** (5.3.) Szögmodulált jel, F = 2·10⁶ Hz, s(t) = 10cos(2πFt + 0,1sin 2000πt). A) fázislöket 0,1/2π B) sávszélesség 2 kHz C) teljesítmény 10/√2 D) frekvencialöket 200 Hz. (Nincs megoldás.)
  »Saját megoldás: A hamis (Φ_D = 0,1 rad). C hamis (P = 10²/2 = 50, a 10/√2 az effektív érték). D hamis (f_D = 0,1·1000 = 100 Hz). B: keskenysávú szögmoduláció (Φ_D ≪ 1), sávszélessége ≈ 2f_m = **2 kHz**, igaz (Carson szerint 2,2 kHz). `[ELLENŐRIZENDŐ]`: az 5.8 C állítása Carsonnal „nagyobb, mint 2 kHz”, ez a két kérdés együtt az elvárt közelítést mutatja.«
- **6. Digitális alapsávi átvitel · összefoglaló** [kép: ideális bináris NRZ jel (elemi jel 0…T négyszög, jelsorozat, nyitott szemábra) és diszperzió sújtotta jel (trapéz elemi jel 0, T/2, T, 3T/2 pontokkal, jelsorozat, szűkülő szemábra)]

### 114. oldal · 6. Digitális alapsávi átvitel (folyt.)
[kép: kézírás, „2. segítség”: h(t) a félsávszélességű téglalap időtartományban: h(t) = sin(πBt)/(πBt), h²(t) = (sin(πBt)/(πBt))². Ábra a nullhelyekkel ±1/B, ±2/B … Jelzési idő T = 1/B: nincs ISI. Ha ennél kisebb a jelzési idő → nagyobb a jelzési sebesség, de van ISI. „Halmozott spektrum”: háromszögek B, 2B eltolással, T = 1/B esetén konstans, nincs ISI.]
ISI okai (a lap szerint): nem megfelelő jelzési idő, zaj, mintavételi hiba.
  »Pontosítás: a **zaj nem ISI-ok**, az a döntési hibát külön növeli. ISI-t a nem Nyquist-feltételt teljesítő elemi jel (sávkorlátozás, diszperzió, többutas terjedés) és az időzítési (mintavételi) hiba okoz.«
[kép: „PAM (Pulse Amplitude Modulation)”: pl. „0” → −1, „1” → +1. Elemi jel: 1,15 a [0,T]-n, 0,25 a [T,2T]-n. „Ez ISI-t eredményez, ha a mintavétel időpontjában nem a megfelelő érték van a 0-ban.” „Azt jelenti, hogy a 0 −0,25-tel, az 1 +0,25-tel kiabál bele a következő jelbe.” Többszintű rendszernél, ha a legnagyobb pozitívról a legkisebb negatívra váltunk, az a worst case. Ha ekkor az ISI elrontja a döntési küszöböt, a rendszer nem használható.]

### 115. oldal · 6. Digitális alapsávi átvitel (folyt.)
[kép: kézírás: „lekerekítettség: α”, emelt koszinuszos spektrum 1/(2T)-nél, α·1/T szélességű átmenet, a sáv vége 1/(2T) + (α/2)·(1/T). „Moduláció ⇒”: a spektrum f_v köré tolva, „max 72 MHz”. Sávszélesség: 2·(1/(2T) + α·1/(2T)) ≤ B, 1/T = f → baud. Átviteli sebesség: attól függ, hány PSK, pl. 4PSK-nál 1 szimbólum 2 bit, így baud·bit a max adatátviteli sebesség.] »✓ (vivőfrekvenciás átvitelnél B_v = (1 + α)/T)«
- **`aiD_6_1`** Rádiós összeköttetésben az adótól a vevőig két úton jut el az OOK modulált jel: az egyiken T késleltetés és 3 dB csillapítás, a másikon 2T és 9 dB. Jelzési idő T, a vivőfrekvencia éppen 1/T. A modulált amplitúdók sorozata 2022002. [kép: kézírás: a két út rajza, h(t): T…2T között √2 (−3 dB), 2T…3T között √2/2 (−9 dB). „6 dB, tehát a 2. úton az 1.-höz képest fele akkora lesz az amplitúdó.”] (folytatás)

### 116. oldal · 6. Digitális alapsávi átvitel (folyt.)
- (6.1a) Rajzolja fel a vett jelet léptékhelyesen! [kép: kézírás: vett jel T…10T között, az első és második út összegeként, szaggatott burkolóval] 
  »A számolás alapja: első út amplitúdószorzója 10^(−3/20) = 0,71, második úté 10^(−9/20) = 0,35 (a kettő aránya 1/2 ✓). A vett burkoló a k-adik résben 0,71·a_(k−1) + 0,35·a_(k−2). Mivel a vivő egész periódusú (f = 1/T), a két összetevő azonos fázisban adódik össze.«
- b) Miként változik a jelzési sebesség, ha a vevő nagy sebességgel az adó felé halad? T' = T·c/(v + c), f' = f_v(1 + v/c). „A Doppler-effektus miatt változik a jelzési sebesség.” »✓ (a vett jelzési sebesség (1 + v/c)-szeresére nő, a vivő is ugyanígy eltolódik)«
- **`aiD_6_2`** T jelzési idejű, bináris (d_k = ±1) alapsávi PAM, elemi jel h(t): 1,05 a [0,T]-n, 0,15 a [T,2T]-n. a) Rajzolja fel a PAM jelet az 1-0-1-1-1-0 bitsorozatra (1 → +1, 0 → −1)! [kép: kézírás: az elemi jel, majd a jelsorozat: az egyes impulzusok és az összegük pirossal, szintek ±1,05, ±0,15] (folytatás)

### 117. oldal · 6. Digitális alapsávi átvitel (folyt.)
- (6.2b) Keletkezik-e ISI? **ISI van.** c) Milyen mintákat ad a mintavevő? **±1 → ±0,9, ±1,2.** d) Szemábra [kép: vízszintes vonalak +1,2, +0,9, −0,9, −1,2 szinteken]. »✓ (1,05 ± 0,15)«
- e) Alkalmas-e négyszintű rendszerre (d_k = ±1, ±3)? „Igen.” [kép: kézírás: a legrosszabb eset 1,05 − 3·0,15 = 0,6. Szintek 3, 1, −1, −3, küszöbök 2, 0, −2 szaggatottan] »✓ Az 1-es szint 0,6…1,5, a 3-as 2,7…3,6, a küszöb 2·1,05 = 2,1 közöttük van, a szem nyitva.«
- f) Nyolcszintű (±1, ±3, ±5, ±7)? −7·0,15 + 1,05 = 0 → **nem**. »✓ (a szem pontosan bezárul)«

### 118. oldal · 6. Digitális alapsávi átvitel (folyt.)
- **`aiD_6_3`** T jelzési idejű, bináris (d_k = ±1) alapsávi PAM, az elemi jel spektruma H(f) = h₀T·cos²((π/2)fT), ha |f| < 1/T, egyébként 0. a) Rajzolja fel léptékhelyesen! [kép: két számítógépes grafikon: cos² harang −1…1 (fT) tartományon, és a pozitív fele 0…1] b) Elkerülhető-e az ISI? „F pontra pontszimmetrikus (F, B = 1/(2T)-nél van). Így ebben a rendszerben elkerülhető az ISI.” c) Milyen lehet a vevőszűrő? (Szélessávú additív zajra optimalizált rendszer.) Rajzolja fel! [kép: cos harang −1…1]
  »✓ cos²(πfT/2) = (1 + cos πfT)/2, ez α = 1-es emelt koszinusz, a Nyquist-feltétel teljesül.«

### 119. oldal · 6. Digitális alapsávi átvitel (folyt.)
- (6.3c folyt.) H(f) = c·H_A(f)·H_C(f)·H_V(f). Torzításmentes csatorna (H_C = 1). Szélessávú zajra a legjobb vevőszűrő illeszkedik a vett jelhez: H_V(f) = k·H_A*(f). Legegyszerűbben H_V(f) = H_A(f) = k·|cos((π/2)fT)|, ha |f| < 1/T (mivel H = H_V·H_A, így H_V = √H). Tisztán valós karakterisztikájú szűrőkkel valósítható meg (gyak7-ben is volt). »✓«
- (6.3d) Az adó jelét 1200 Hz-es aluláteresztővel szűrjük. Okoz-e számottevő ISI-t, ha T = 833 µs? f = 1,2 kHz, T = 0,833 ms. ISI-mentességhez a minimális sáv 1/(2T) = 0,6 kHz. „Ennél nagyobb sávval az adatátvitel biztonsága nő, de 1/T-nél nagyobb sáv értelmetlen.”
  »A válasz kimondva: **nem okoz számottevő ISI-t**, mert 1/T = 1,2 kHz, és a H(f) éppen 1/T-ig terjed, így az 1200 Hz-es szűrő semmit nem vág le belőle.«
- **`aiD_6_4`** Bináris PAM, h(t) = h₀·cos²((π/2)·(t − T)/T), ha t ∈ (0, 2T), egyébként 0. a) Rajzolja fel! [kép: grafikon 0…2 (t/T), csúcs 1-nél] b) Elkerülhető-e az ISI, hogyan választaná a mintavételi időpontokat? A mintavételi időpontok (k + 1)T. ISI-mentes, mert ezen időpontok közül csak egyben nem nulla (k = 0), a többiben 0. »✓« c) Milyen értékeket vehetnek fel a minták t_k = (1,1 + k)T-ben (Δt₀ = 0,1T időzítési hiba)? (folytatás)

### 120. oldal · 6. Digitális alapsávi átvitel (folyt.)
- (6.4c folyt.) A k = 0 és k = −1 tagot kell vizsgálni, a többi úgyis 0. k = 0: t = 1,1T, h = **0,9755h₀**. k = −1: t = 0,1T, h = **0,0245h₀**. 0,9755 − 0,0245 = 0,951 és 0,9755 + 0,0245 = 1 → a lehetséges értékek **±0,951h₀ és ±h₀**. »✓ (cos²(0,05π) = 0,9755, cos²(0,45π) = 0,0245)«
- d) Érdemes-e négy- vagy nyolcszintű átvitellel próbálkozni? Időzítési hiba nélkül a rendszer ISI-mentes, így nem okoz problémát a többszintű jel, érdemes. e) Hogyan befolyásolja a Δt₀ = 0,1T időzítési hiba? Négyszintű legrosszabb eset: 1·0,9755h₀ − 3·0,0245h₀ = **0,902h₀ > 0**. Nyolcszintű: 1·0,9755h₀ − 7·0,0245h₀ = **0,804h₀ > 0**. Mindkét esetben érdemes, nem okoz döntési hibát. »✓ (a felső szinteknél is rendben: pl. a 7-es szint legkisebb értéke 6,66h₀ > 6h₀-s küszöb)«
- **`aiD_6_5`** [kép: hivatalos megoldás] 1200 Baud-os PAM rendszer teljes átviteli függvénye (emelt koszinusz a táblára rajzolva: A-nál éri el az ordinátát, f₂-nél az abszcisszát, f₁ az f₂ felénél). Biztosítson ISI-mentességet f₁, f₂ és A ügyes megválasztásával! Kézírás: 1/T = 1200 Baud, Σ H(f − i/T) = frekvenciafüggetlen állandó (≠ 0). „f₁: az összeg egyenletes, nem konstans.” 1/T = f₂ (f₁ = 1/(2T)), A tetszőleges (≠ 0). »✓ f₁ = **600 Hz**, f₂ = **1200 Hz** (α = 1), A ≠ 0 tetszőleges.«

### 121. oldal · 6. Digitális alapsávi átvitel (folyt.) és 7. Digitális modulációs eljárások
- **`aiD_6_9`** (3.4.) Bináris PAM, elemi jel 1,05 a [0,T]-n, 0,15 a [T,2T]-n. A) A rendszer ISI-mentes. B) Négyszintű rendszerre alkalmas lehet. C) Nyolcszintűre nem alkalmas. D) Illesztett szűrővel ISI-mentessé tehető („→ zaj ellen véd”, „ISI van, mert nem fér el az elemi jel 1 időablakban”). [Bekarikázva B, C. Kézírás: m₀ = 1,05, m₁ = 0,15, m₀ − d_max·Σ|m_i| (i ≠ 0), kétszintű ±1, négyszintű ±1 ±3, nyolcszintű ±1 ±3 ±5 ±7.] »✓ B, C (6.2 e és f)«
- **7. Digitális modulációs eljárások · összefoglaló** [kép: kézírás: ASK (OOK), FSK, PSK (BPSK) jelalakok 0-ra és 1-re. ASK teljesítmény: P = [(A·U)²/2 + …]:2, az adott szimbólumhoz tartozó jelteljesítmény-komponensek. FSK demodulátor: fázistolós szorzó (s_FSK → szorzó, a másik ág fázistolón át → aluláteresztő → M.V.). „Minimális FSK periódusidő”: f_D = |f₀ − f₁|/2, f_D·T = 1/4, f_v = (f₀ + f₁)/2, B = 2f_D, f₀ = (3/4)·(1/T), f₁ = (5/4)·(1/T).]
  »A „B = 2f_D” csak a két vonal távolsága, nem a jel sávszélessége (a moduláló jel sávja is hozzáadódik, pl. Carson: 2(f_D + 1/(2T))). Lásd a `00_STATUSZ` nyitott FSK-sávszélesség pontját.«

### 122. oldal · 7. Digitális moduláció (folyt.)
[kép: ugyanaz a lekerekítési (α) és sávszélesség-jegyzet, mint a 115. oldalon]
FSK (Frequency Shift Keying), frekvenciabillentyűzés: az állandó amplitúdójú jel időrésenként f₁ vagy f₀ frekvenciájú szinuszos csomagokat tartalmaz, a fázis folytonosan változik. Vivőfrekvencia F = (f₁ + f₀)/2, frekvencialöket f_D = |f₁ − f₀|/2. Ha f_D = 1/(4T), MSK (Minimum Shift Keying): a jól demodulálható FSK jelek közül ennek minimális a sávszélessége (minimális a frekvencialökete). ASK változatok: OOK (On-Off Keying), BPSK (Binary Phase Shift Keying). QAM (Quadrature AM).
[kép: „Konstellációs diagram”: 16 pont 4×4 rácsban, döntési határok (zöld), erősítési hiba (kifelé), csillapítási hiba (befelé), fázishiba (elforgatás). Egy pont mellé írva: 3cos(2πf_v t) − 1·sin(2πf_v t).] »✓ (a BPSK ASK-változatként: ±1 amplitúdó, ez kétszintű ASK vivő nélkül)«

### 123. oldal · 7. Digitális moduláció (folyt.)
[kép: kézírás: „Erősítési hiba”: megnézi, hogy egy adott pont milyen (legkisebb) távol van a döntési küszöbtől, ha a pontok távolodnak az origótól, az a távolság az erősítési hiba. „Csillapítási hiba”: ugyanaz, csak a pontokat az origó felé mozgatjuk. „Fázishiba”: az egész konstellációs ábra elfordul az origó körül, melyik pont mennyit foroghat a döntési küszöbig → a legkisebb a fázishiba. „Doppler-effektus”: az adóval szemben haladva f_v + v/λ = f_v(1 + v/c), távolodva „−”. Δf_v = f_v·v/c. Ha a mintavételezési idő T, a fázishiba Δφ = T·360°·Δf_v.]
[kép: „#QAM/4 = egy időrés alatt továbbítható bitek száma”, „csatorna baud·4 = adatsebesség”.]
  ⚠️ »**Hibás általánosítás:** egy szimbólum log₂M bitet visz, nem M/4-et. 16-QAM-nél véletlenül mindkettő 4, de 64-QAM-nél 6 (nem 16), 256-QAM-nél 8 (nem 64).«
PSK (Phase Shift Keying). Erősítési hiba számolásakor erősítési és csillapítási hibát is kell számolni (mindkét irányú tűrés). »✓ (az erősítési tűrést a külső pontok, a csillapításit a belső pontok korlátozzák)«

### 124. oldal · 7. Digitális moduláció (folyt.)
[kép: kézírás: „Doppler-effektus hatása”: szembe haladunk a hullámmal: f + v/λ = f(1 + v/c). Távolodunk: f − v/λ = f(1 − v/c).]
- **`aiD_7_3`** QAM rendszer két csatornájában az elemi jelek amplitúdóit a bitsorozat tribitjei határozzák meg: 000: d = +1, c = +1 · 001: 0, +3 · 010: −1, +1 · 011: −3, 0 · 100: −1, −1 · 101: 0, −3 · 110: +1, −1 · 111: +3, 0. a) Konstellációs diagram: felveszünk egy koordináta-rendszert (egyik tengely c_k, a másik d_k, ráírjuk, melyik melyik), és bejelöljük a pontokat. b) A várt párok helyett (−0,20; +2,99), (−0,94; −1,07), (−1,08; +0,93), (−2,98; −0,21) figyelhető meg. Rajzolja be, és mi lehetett a tribitsorozat? „Nem nehéz kitalálni, melyik melyikhez van legközelebb.” c) Erősítéshiba? „Minimális”: √((−2,98)² + (−0,21)²) = 2,987 ≅ 3 és √((−0,94)² + (−1,07)²) = 1,424 ≅ √2. d) Fázishiba? „A fázishiba viszont nagy. Pl. tan⁻¹(−1,08/0,93) = 130,73° ≠ 145°.” e) Zaj szórása? „Pici, két nagyságrenddel kisebb, mert a fázis- és az erősítéshiba minden pontra jó közelítéssel ugyanannyi.”
  ⚠️ »b) A legközelebbi pontok (d, c) síkon: **001, 100, 010, 011**. c) ✓ (a sugarak aránya 0,996…1,008). d) **Hibás:** a fázishiba **kicsi, kb. +4°** (3,8°, 3,7°, 4,3°, 4,0°). A 130,73°-os szög a tengelyek felcserélésével és rossz síknegyeddel jött ki: a (−1,08; 0,93) pont szöge atan2(0,93; −1,08) = 139,3°, a várt (−1; 1) ponté 135°. e) ✓ (a pontok egyformán elfordulva, egyforma sugárral: a zaj kicsi).«
- **`aiD_7_4`** 64-QAM esetén azonos hibaarány mellett kell csökkenteni a teljesítményt, tippeket kell adni. „A 64-QAM állapotai egy 64×64 mátrixban rajzolhatók fel. A teljesítményt a sarkokban levő állapotok dobják meg, ezért ezeket kell beljebb húzni az oldalakhoz, ideális esetben egyenletesen töltött körben helyezkednek el.” »Az ötlet ✓ (kör alakú, kereszt alakú konstelláció, azonos minimális távolsággal). Elírás: 64-QAM **8×8**-as rács.«

### 125. oldal · 7. Digitális moduláció (folyt.)
- **`aiD_7_5`** (3.1.) Az ábrán egy alapsávi PAM szemábrája. [kép: négyszintű szemábra, három egymás feletti szemnyílás, 0…1,4 ms tengely, a szemek közepe kb. 0,35 és 1,05 ms-nál, ±0,5 V körüli szintek] A) A rendszerben használt elemi jel ISI-mentes. B) A jelzési idő 0,0007 s volt. C) RZ jelet használ. D) A bitsebesség épp a szimbólumsebesség négyszerese. (Megoldás nincs jelölve.)
  »Saját olvasat `[ELLENŐRIZENDŐ]`: B **igaz** (a szemközepek távolsága 0,7 ms). D **hamis** (négy szint → 2 bit/szimbólum, kétszeres). C hamis (NRZ jellegű). A: a görbék a mintavételi pontokban élesen összefutnak → ISI-mentes, **igaz**.«
- **`aiD_7_6`** (4.3.) Igazságtartalom a 2D-s szemábráról: [kép: 16-QAM konstelláció zajfelhőkkel, ±1, ±3 szintek] A) Négy időrés alatt 1 bit („→ 1 időrés alatt 4 bit”). B) Egy időrés alatt 16 bit („→ 4 bit”). C) Egyszerre 2 bit, hisz QAM („→ 4 bit”). D) 100 kbaud-os csatornán 400 kbit/s („100 kbaud·4 = 400 kbit”). [D bekarikázva] »✓ D (log₂16 = 4)«
- **`aiD_7_8`** (5.) Ugyanaz a tribit-táblázat, mint 7.3-ban. a) Konstellációs diagram. [kép: kézírás: d_k vízszintes, c_k függőleges tengely, pontok: 000 (1,1), 001 (0,3), 010 (−1,1), 011 (−3,0), 100 (−1,−1), 101 (0,−3), 110 (1,−1), 111 (3,0). Néhány pont mellé számok (1–4) írva a b) megfigyeléseihez.] »✓«

### 126. oldal · 7. Digitális moduláció (folyt.)
- (7.8b) A várt (d_k, c_k) párok helyett (−0,3; +2,99), (−0,93; −1,07), (−1,07; +0,93), (−2,98; −0,3) figyelhető meg. Tribitek: **001, 100, 010, 011** („az előző ábrában ábrázoljuk, és a legközelebbi pont lehetett az eredeti érték”). c) Erősítéshiba: (−0,3; 2,99) → √((A·d)² + (A·c)²) = A·√9,0301, a (0; 3) pontra √(d² + c²) = 3 → A = √9,0301/3 = **1,0016**. d) Fázishiba? e) Demodulátor blokkvázlata. (d és e nincs kidolgozva.)
  »b), c) ✓. d) saját megoldás: a szögeltérések 5,7°, 4,0°, 4,0°, 5,7°, a fázishiba **kb. 4…6°** (pozitív irányú elforgatás, a tengelyen lévő pontoknál a 0,3-as eltérés a nagyobb). e) kvadratúra-demodulátor: két szorzó cos(2πf_v t) és −sin(2πf_v t) vivővel, mindkét ágban illesztett (aluláteresztő) szűrő, mintavevő és döntő.«
- **`aiD_7_9`** [kép: hivatalos megoldás, aláírás „by Dr. …”] Rajzolja fel egymás alá a d_k = {1, 0, 1, 1, 0} bitsorozathoz tartozó OOK, BPSK és FSK jelet! Az első kettőnél a vivőfrekvencia a jelzési sebesség, FSK-nál f₀ = 1/T, f₁ = 1,5/T. Mekkora az FSK frekvencialökete? [kép: három sablon, OOK (1 → van vivő, 0 → nincs), BPSK (1 → +1, 0 → −1, „ez nem lehet”/„ez lehet” megjegyzésekkel a fázisugrásnál), FSK (a jel deriváltja folytonos, a fázis folytonos)] f_D = ½|f₁ − f₀| = ½(1,5/T − 1/T) = **1/(4T)** [= 300 Hz a lapon], f_D·T = 1/4 → **MSK**. »✓«

### 127. oldal · 7. Digitális moduláció (folyt.)
- **`aiD_7_10`** Mekkora a csúcstényezője egy 1 kHz vivőfrekvenciájú, 2 V amplitúdójú BPSK jelnek? **C = √2**. [kép: kézi rajz BPSK jelről fázisugrásokkal] »✓ (állandó burkolójú szinusz, a fázisugrás a csúcs/effektív arányt nem változtatja)«
- **`aiD_7_11`** [Piros X.] 64-QAM helyett 256-QAM a DVB-C-ben, 8 MHz, α = 33,33% (RS nélkül). a) α = 1/3, B = 8 MHz = 2·(1/(2T))(1 + α) = (1/T)·4/3 → 1/T = **6 MBd**, bitsebesség log₂256·6 = **48 Mbit/s**. b) 48/1,5 = **32** csatorna. c) „Tipp: zaj, fázis-, erősítésérzékenység.” d) (+ a 64-QAM erősítési és csillapítási hibája.) 64-QAM fázis- és erősítéshibája: a legérzékenyebb a tengelyektől legtávolabbi (7,7) pont. Fázishiba: szög(7,7) − szög(7,5) → π/4 − arcsin(5/√(5² + 7²)) = 9,46°. Erősítéshiba: A5 és A7 között: A > 6/7 és A < 6/5 (mert a 6-os értéknél van a komparálási határ).
  ⚠️ »Fázishiba **hibás**: a 9,46° a (7,7) és a (7,5) **pont** közötti szög, nem a döntési határig. A (7,7) pont a 6-os határt cos(45° + φ) = 6/(7√2) → **φ = 7,7°**-nál éri el (`01`, standard 7. pont). Erősítés ✓: 6/7 < A < 6/5, azaz −14,3% … +20%.«

### 128. oldal · 7. Digitális moduláció (folyt.)
- **`aiD_7_16`** QAM rendszer, 36-féle szimbólum, a jelállapotok egy négyzetrács pontjai. a) Konstellációs diagram [kép: 6×6-os rács ±1, ±3, ±5 koordinátákkal, három koncentrikus négyzet mentén pirossal] b) Milyen előnyei vannak a négyzetrácsnak? „Pontosabban megállapíthatók az erősítési és fázishibák (nem biztos).” Ugyanolyan távolságra vannak egymástól a pontok, így mindegyikhez ugyanakkora döntési küszöb tartozik, a megengedhető jel/zaj viszony független a jelponttól. „Négyzetrács esetén a két csatornában a döntések egymástól függetlenül hozhatók meg” (7. gyak./4. példa). c) Hány százalék erősítés- és csillapításhibát visel el zajmentes esetben? (folytatás) »b) ✓ (a független döntés a fő előny: két egyszerű többszintű döntő)«

### 129. oldal · 7. Digitális moduláció (folyt.)
- (7.16c folyt.) [kép: a rács döntési küszöbökkel, egy kiemelt döntési tartomány] A tengely menti (5-ös) rácspontok **4/5-ös csillapításnál** kerülnek döntési küszöbre, a középső négyzet (3-as) pontjai **4/3-os erősítésnél**. »✓ (−20% … +33%)«
  [kép: koncentrikus körök a pontokon át, kék szögtartomány a (5, ±1) pontnál] „Szöghiba esetén a jelölt helyen a legkisebb a megengedhető. Értéke asin(1/5) = 11,5°.”
  ⚠️ »**Hibás:** a (5,1) pontnál a határ (y = 0) arctg(1/5) = 11,3°-nál jön, de a **sarokpont (5,5) érzékenyebb**: cos(45° + φ) = 4/(5√2) → **φ = 10,6°** (standard 7. pont: 36-QAM 10,6°).«
- d) Egy kolléga javasolja, hogy a legkülső (sarok) pontokat helyezzük át valamelyik tengely mellé. Mi ennek az értelme? Mely jellemzők javulnak, romlanak? Gyűjteménybeli válasz: ha a 4 sarokpontot 4 különböző tengely mellé helyezzük, a fázishiba nem változik (bármely két egymás melletti pont asin(1/7)-re csökkentené). Az erősítési hiba maximuma 6/7-re (csillapítás), illetve 6/5-re (erősítés) csökken. Az értelme, hogy kisebb a megvalósítandó erősítés (csúcsamplitúdó). A1 = √(5² + 5²) = 5√2, A2 = √(1² + 7²) = 5√2, „tehát ebben az esetben a módszernek nincs értelme (érdekes…)”. 7-es és 9-es esetén lenne értelme, mert ott √2·7 = 9,9 és √(81 + 1) = 9,05.
  »A csúcsamplitúdó és az átlagteljesítmény valóban nem változik (5√2 = √50). Pontosítás a fázistűrésre: az új (7, 1) típusú pont arctg(1/7) = **8,1°**-os forgatásnál eléri az y = 0 határt, így a fázistűrés 10,6°-ról **8,1°-ra romlik**. Az erősítés/csillapítás-tűrés is romlik (6/5 és 6/7). Ennél a mérete nincs előnye, nagyobb (pl. 64-pontos) konstellációnál a csúcsteljesítmény csökken. `[ELLENŐRIZENDŐ]`«

### 130. oldal · 8. Hang, hallás, kép, látás
Összefoglaló, hallás [kép: kézírás: hangosság, hangnyomás: p = 20lg(p_eff/p₀) ≅ L_I ≅ 10lg(I/I₀), ahol p₀ = 20 µPa, I₀ = 1 pW/m²]
[kép: egyenlő hangosságú görbék (izofonok) 0–120 phon, 20 Hz–10 kHz, „threshold of audibility”, „threshold of pain”]
Leolvasható, hogy kisebb frekvencián sokkal érzéketlenebb a fülünk: a 10 dB-es 1 kHz-es hangot 10 phonnak halljuk, az ugyanilyen intenzitású 100 Hz-es hangot egyáltalán nem halljuk (a phon-skála ott nincs értelmezve). A phon egy hang hangosságát adja meg az 1 kHz-es szinuszhoz képest: egy hang hangossága phonban annyi, mint a vele azonos hangosságérzetet keltő 1 kHz-es szinusz szintje dB-ben. »✓«

### 131. oldal · 8. Hang, hallás, kép, látás (folyt.)
Elfedési jelenségek: i) Utóelfedés: nagy intenzitású hang után a hallásküszöb ideiglenesen megemelkedik, ez akár tartós is lehet (pl. koncert után). Hirtelen nagy hangnál „100 µs nagyságrendbe esik”. ii) Előelfedés: nagy intenzitású hang megszólalása előtt „20 µs tartományban” már megemelkedik a hallásküszöb. Magyarázat: az agy felé haladva a nagy intenzitású jel terjedési sebessége nagyobb, „utoléri” az őt megelőző kis intenzitású jelet és elfedi. iii) Frekvenciatartománybeli elfedés: egy nagy intenzitású hang környékén megemelkedik a hallásküszöb. Ezt kódolásban kihasználhatjuk: az elfedett tartomány kódolása tetszőleges lehet, amíg a hallásküszöb alatt van.
  ⚠️ »Az időtartamok a szakirodalomban **ms** nagyságrendűek: utóelfedés kb. 100–200 **ms**, előelfedés kb. 20 **ms** (a µs valószínűleg elírás). `[ELLENŐRIZENDŐ]` az előadásanyaggal.«
Látás [kép: láthatósági függvény V(λ) 300–800 nm, sötétben (szürke, kb. 507 nm csúcs) és világosban (sárga, kb. 555 nm csúcs)]. **Y = 0,3R + 0,59G + 0,11B.** »✓ (a világossági jel együtthatói, `01` színjelek)«

### 132. oldal · 8. Hang, hallás, kép, látás (folyt.)
[kép: kézírás: „A szem felbontóképessége: 2' fényességre, 10' színekre.” Ehhez kell: a képernyő H magassága, V szélessége, d nézési távolság, a felbontási szög rajza.]
[kép: „Színkeverési szabványok”: FCC: RGB. CIE: XYZ (Y a világosság). Átszámítás: X = 0,61R + 0,17G + 0,2B, Y = 0,3R + 0,59G + 0,11B, Z = 0·R + 0,07G + 1,12B. **Y = 0,3R + 0,59G + 0,11B.**]
[kép: „YUV”: U = (B − Y)/2,03, V = (R − Y)/1,14. „Hue-Saturation-Brightness” (színezet, telítettség, fényesség): B = Y, H = arctg((R − Y)/(B − Y)), S = 1 − min{R, G, B}.]
  »✓ YUV és Y. A HSB-képletek egyszerűsítettek (a szabványos S = 1 − min/max, a színezet a színkülönbségi síkon mért szög). `[ELLENŐRIZENDŐ]` hogy a tárgy melyik alakot használja.«

### 133. oldal · 8. Hang, hallás, kép, látás (folyt.)
A szem becsapható: három monokróm fényforrással additív keveréssel fehér és rengeteg színérzet kikeverhető. **Metamer színérzet:** azonos színérzet többféle spektrális összetételű fénnyel is elérhető. 10–20 mozgásfázis másodpercenként elég ahhoz, hogy az agy folyamatos mozgásnak érzékelje. Ezzel szemben a 45–60 Hz-es villogást még érzékeljük (fényerőfüggő, a perifériás látásnál sokkal magasabb is lehet: az áruházban a mellettünk lévő TV villog, odanézve megszűnik). Ez a szem **fúziós frekvenciája**, ennél gyorsabb villogást folyamatos fénynek látunk.
- **`aiD_8_1`** [kép: beszkennelt kérdés] a) Mely színeket hívjuk metamer színeknek? b) Mit értünk a látásunk fúziós frekvenciáján? (A válasz az összefoglaló két bekezdése.) »✓«
- **`aiD_8_2`** [Lila X.] 3/a Mit érzékel hangosabbnak egy átlagember: a 400 Hz-es 20 phonos vagy az 1 kHz-es 20 phonos hangot? „A phon a hangosságérzet mértékegysége, így egyforma.” 3/b A 400 Hz-es 20 dB-es vagy az 1 kHz-es 20 dB-es hangot? „Az 1 kHz, 20 dB-hez 20 phon tartozik, a 400 Hz, 20 dB nem értelmezett, a hallásküszöb alatt van.”
  »3/a ✓. 3/b a következtetés jó (az 1 kHz-es hangosabb), de az indoklás nem: 400 Hz-en a hallásküszöb kb. 10 dB, így a 20 dB-es hang hallható, csak kb. 10–15 phonos, halkabb a 20 phonos 1 kHz-esnél. `[ELLENŐRIZENDŐ]` az izofon-ábrán.«

### 134. oldal · 8. Hang, hallás, kép, látás (folyt.)
- **`aiD_8_4`** Egy 4:3-as színes TV képernyőjét három egymás alatti, azonos méretű sáv tölti ki, felülről kék, zöld, vörös, fénysűrűségük (intenzitásuk) azonos. Rajzolja fel arányosan egy fekete-fehér TV képét, melyik mező a legsötétebb és melyik a legkevésbé. Csökkenteni vagy növelni kellene a zöld sáv fényességét, hogy legalább két csík összeolvadjon? Y = 0,3R + 0,59G + 0,11B, a fekete-fehér TV-n a **zöld a legvilágosabb**, aztán a piros, a **kék a legsötétebb**. Két csík összeolvadásához a zöldet **csökkenteni** kell, pl. a pirossal olvadjon össze: a 0,3/0,59-ed részére. »✓ (vagy 0,11/0,59-re, hogy a kékkel olvadjon össze)«
- **`aiD_8_5`** [Lila X.] Az emberi hallásküszöb 20 µPa. 120 dB-es tartományban hall, mekkora nyomású légköri „zavarra” van szükség ezen tartomány eléréséhez? 120 dB = 20lg(p₁/20 µPa) (20lg, mert nyomás szerepel). „6 dB = lg(p₁/20 µPa)”, 10⁶ = p₁/20 µPa, **p₁ = 20 Pa**. Kiegészítés a gyűjteményben: „egyszerűen azért 20lg(p/p₀), mert a (lég)nyomás négyzetesen arányos a hangnyomásszinttel…”
  »Eredmény ✓. Elírás: a második sor helyesen 6 = lg(p₁/20 µPa) (dB nélkül). A kiegészítés pontosítva: az **intenzitás** arányos a hangnyomás négyzetével, ezért 10lg(I/I₀) = 20lg(p/p₀).«
- **`aiD_8_6`** Mi az előnye a váltott soros képalkotásnak? Gyűjteménybeli válasz: „A fél képet fele annyi idő alatt fel lehet rakni a képernyőre, így szebb lesz a kép érzete.”
  ⚠️ »Pontosan: **azonos sávszélesség mellett megkétszerezi a képváltási (villogási) frekvenciát** (25 kép/s helyett 50 félkép/s), így a villogás a fúziós frekvencia fölé kerül. Másként: azonos villogásmentességhez fele sávszélesség elég.«
- **`aiD_8_7`** (3.5.) Melyik RGB-hármas kelti a legnagyobb világosságérzetet? A) (0,1; 0; 0,1) B) (0,3; 0,1; 0,3) C) (0; 0,1; 0,1) D) (0,4; 0,1; 0,2). Y = 0,3R + 0,59G + 0,11B → **D** (bekarikázva). [A lap szélén egy másik feladat (3.4) számolása: 1,05 − 3·0,15 = 0,6 és 1,05 − 7·0,15 = 0.] »✓ (Y = 0,041 / 0,182 / 0,070 / 0,201)«
- **`aiD_8_8`** (4.2.) Milyen hangosnak érezzük azt a 100 Hz-es szinuszos hangot, amelynek intenzitása 1 nW/m²? A) 1000 phon B) 30 phon. Hány dB a hangnyomásszintje? C) 20 dB D) 30 dB. L = 10lg(I/I₀) = **30 dB** (I₀ = 10⁻¹² W/m²) → **D**. „1000 phon nagyon sok, 30 phon akkor lenne, ha 1 kHz-es jel.” »✓ (100 Hz-en a 30 dB a hallásküszöb közelében van, a hangosság csak néhány phon)«

### 135. oldal · 8. Hang, hallás, kép, látás (folyt.)
- **`aiD_8_9`** [Lila X.] Függvénygenerátor + hangszóró. Az éppen hallható 10 kHz-es hang hangnyomásszintje 15 dB. 1 kHz-re csökkentve 30 dB, tovább 100 Hz-re 0 dB (az amplitúdó nem változott). a) A 10 kHz-es hang hangossága? „Éppen hallható”, definíció szerint **0 phon**. b) Az 1 kHz-es? **30 phon** (1 kHz-en a phon és a dB egyezik). c) A 100 Hz-es? „0 dB hangnyomásszint a légköri nyomás, csend, phonban nincs definiálva.” d) Miért eltérők a szintek azonos amplitúdónál? Az erősítő, a hangszóró és a terem karakterisztikája nem frekvenciafüggetlen.
  »a), b), d) ✓. c) a következtetés jó (nem hallható, a 0 phonos küszöb alatt van), de a 0 dB **nem a légköri nyomás**, hanem a 20 µPa-os referencia-hangnyomás. 100 Hz-en a hallásküszöb kb. 25 dB.«
- **`aiD_8_13`** Rajzolja fel a láthatósági függvényt, tengelyfeliratokkal, skálával! Mekkora a maximális értéke? [kép: V(λ) sötétben és világosban, 300–800 nm] »Maximum **1** (normált), világosban 555 nm-nél (abszolút értékben 683 lm/W), sötétben kb. 507 nm-nél.«

### 136. oldal · 8. Hang, hallás, kép, látás (folyt.)
- **`aiD_8_14`** [Lila X.] Phonban mekkora annak az 1 kHz-es szinuszos hangnak a hangossága, amelynek hangnyomása a hallásküszöbhöz tartozó 1000-szerese? Hány dB? Mennyire érezzük hangosnak? a) SPL = 20lg(1000) = **60 dB**, 1 kHz-en a hangnyomás és a hangosság megegyezik → **60 phon**. b) 60 dB. c) [táblázat: 70 erős forgalom 5 m-ről, 60 iroda vagy vendéglő belül, 50 csendes vendéglő belül] „Pár ember beszélget, vagy egy, de hangosan.” »✓«
- **`aiD_8_15`** Ugyanez 100-szoros hangnyomással: L = 20lg(p_eff/20 µPa) = **40 dB** → **40 phon**. [kép: hivatalos megoldás, izofonvázlat, „hallásküszöb 1 kHz-en a referencia”, „hangosság: annak az 1 kHz-es hangnak a szintje, amit ugyanolyan hangosnak érzünk”, „1 jó válasz 1 pont”. Táblázat: 40, lakóterület éjjel.] »✓«
- **`aiD_8_16`** Rajzolja fel a láthatósági függvényt! [kép: hivatalos megoldás: harang alakú görbe, csúcs 1 az 550 nm-nél, 400 nm (kék) és 700 nm (vörös) között, „a TV-nél használt világossági jel Y = 0,6G + 0,3R + 0,1B”] »✓«

### 137. oldal · 9. Műsorszóró rendszerek
Összefoglaló [kép: kézírás, „Szuperheterodin vevőkészülék”: RF szűrő: tükörszelektivitást biztosít, (+) hangolható, (−) átmeneti tartománya széles. A lokális oszcillátort állítjuk mi. KF-keskeny szűrő → nem hangolható.] »✓«
- **`aiD_9_3`** Miért használunk a műsorszórásban QAM-et és AM-VSB-t? Gyűjteménybeli válasz: „A QAM két szín esetén hasznos, frekvenciaerőséggel jár (?). Az AM-VSB a csonka oldalsávos, nem redundáns átvitel: a baloldali oldalsáv egy részét leszűrjük, hogy ezen a helyen egyéb jeleket sugározhassunk.”
  »Pontosítás: **QAM**: két független jelet (pl. analóg TV-ben a két színkülönbségi jelet a színsegédvivőn, digitálisan két kvadratúracsatornát) visz ugyanabban a sávban, ez kétszeres spektrális hatékonyság. **AM-VSB**: a képjel nagyon széles és egyenáramú (DC) összetevőt is tartalmaz, az SSB ezért nem valósítható meg jól, a DSB pedig pazarló. A csonka oldalsáv majdnem felezi a sávot, és egyszerű (burkoló) demodulációt enged.«

### 138. oldal · 9. Műsorszóró rendszerek (folyt.)
- **`aiD_9_4`** (hivatalos, gépelt megoldás) Szuperheterodin vevő a 87,5–108 MHz-es CCIR FM sávhoz, KF = 10,7 MHz. a) Felső keverésnél milyen sávban kell hangolni a helyi oszcillátort? Felső keverés: a helyi oszcillátor frekvenciája nagyobb a venni kívánt vivőnél, a KF-jel alsó oldalsávi termékként jelenik meg (ez csak a szögmodulációs tartalom előjelét befolyásolja). A másik lehetőség az alsó keverés. KF-ként akár az összegfrekvenciát is használhatnánk, de ez ritka. Érdekünk, hogy az oszcillátor hangolása minél szűkebb (relatív) sávban legyen, ez a felső keverésnél a legkeskenyebb. Hangolási sáv: 87,5 + 10,7 = **98,2 MHz** és 108 + 10,7 = **118,7 MHz** között. b) Hová kell hangolni a 94,8 MHz-es adóhoz? 94,8 + 10,7 = **105,5 MHz**. (Nagyobb vivőhöz nagyobb oszcillátorfrekvencia kell, gondoljuk meg, így van-e alsó keverésnél, illetve összegfrekvenciát hasznosító keverésnél!) c) Tükörfrekvencia: felső keverésnél az az adó, amelynek jeléből az oszcillátor alsó keveréssel állítja elő a KF-et: KF-fel nagyobb az oszcillátornál, 2·KF-fel a kívánt vivőnél: 94,8 + 10,7 + 10,7 = **116,2 MHz**. d) Miért jó a 10,7 MHz-es KF? A vételi sáv alsó határának tükörfrekvenciája (108,9 MHz) is nagyobb a sáv felső határánál, a tükörfrekvenciák sávjában nincs műsorszolgáltatás (más adás persze lehet). Alsó keverésnél is így lenne. Mindkét esetben az a lényeg, hogy a KF nagyobb a műsorsáv szélességének felénél. »✓ (20,5/2 = 10,25 < 10,7)«

### 139. oldal · 9. Műsorszóró rendszerek (folyt.)
- **`aiD_9_5`** Ismertesse az FM hangműsorszórás sztereó multiplex jelének szerkezetét! [kép: spektrum: L + R alapsáv 50 Hz–15 kHz, 19 kHz-es sztereó pilot, L − R a 38 kHz-es segédvivő körül, RDS adat 57 kHz-en] Bal és jobb mikrofon: M = R + L és S = L − R. Csak M-et és S-t kell küldeni, a vevő összegükből és különbségükből előállítja a bal és jobb jelet. Ha csak összeadnánk őket, egymásra esnének, ezért S-t AM-DSB/SC-vel 38 kHz-re toljuk, és így adjuk hozzá M-hez. A vevő visszaviszi és demodulálja, ehhez koherens vivő kell: ezért adnak 19 kHz-es pilotot, amiből a vevő a koherens 38 kHz-et előállítja. 57 kHz-en BPSK RDS-jel (adóinformáció). a) Blokkvázlat a multiplex jel előállítására. b) Összetevők, ha a BAL mikrofon 10 kHz-es jelet vesz? c) Ha a JOBB mikrofon 25 kHz-et? (b, c nincs kidolgozva)
  »Saját megoldás: a) L, R → összegző (M) és különbségképző (S) → S × 38 kHz (szorzó, a 19 kHz frekvenciakétszerezésével) → összegzés M-mel és a 19 kHz-es pilottal (+ RDS) → FM modulátor. b) 10 kHz (M), **28 és 48 kHz** (S oldalsávjai), 19 kHz pilot. c) A 25 kHz a 15 kHz-es hangsávon kívül esik, az előszűrő kiszűri: csak a **19 kHz-es pilot** (és az RDS) marad.«

### 140. oldal · 9. Műsorszóró rendszerek (folyt.)
- **`aiD_9_6`** [Piros X.] Ismertesse néhány mondatban a felsorolt rendszerek legfontosabb tulajdonságait (moduláció, sávszélesség, sebesség, egyéb jellemzők)! a) Analóg földfelszíni TV: AM-VSB + QAM, B = 8 MHz. b) Analóg műholdas TV: FM, f_v ≈ 10–10 GHz, B = 27 MHz, f_D = 6 MHz. c) Digitális földfelszíni TV: OFDM + QAM, B = 7,61 MHz, RS(204,188). d) Egyfrekvenciás hálózat: nincs válasz.
  »A válaszok vázlatosak (a piros X erre utalhat). Kiegészítés: a) a kép AM-VSB, a színkülönbségi jelek QAM-mel a színsegédvivőn, a hang FM-mel külön vivőn, 7 vagy 8 MHz-es csatorna. b) 10,7–12,75 GHz. c) DVB-T: 2k/8k OFDM, QPSK/16-QAM/64-QAM, belső konvolúciós kód + RS(204,188), védőintervallum. d) **SFN**: több adó ugyanazon a frekvencián, szinkronban (GPS-időzítés) sugározza ugyanazt a jelet. Az OFDM védőintervalluma miatt a többi adó jele hasznos visszhangként jelenik meg, ha a késleltetés a védőintervallumon belül van (`01` SFN).«
- **`aiD_9_7`** [kép: hivatalos megoldás darabjai] Primitív színes rendszer: R, G, B 2 bites kvantálással (00 ↔ 0%, 01 ↔ 33%, 10 ↔ 67%, 11 ↔ 100% intenzitás). a) Hány különböző (fény)érzet állítható elő? 2^(3·2) = **64**. b) És hány fényességérték? 2^(3·2) = **64**. c) Hány szürke árnyalat és milyen fényességgel? Konkrétan négy: fekete, sötétszürke (33%), világosszürke (67%), fehér (100%). d) Ha R, G, B 1 bites, sorolja fel fényesség szerint a színeket! (Itt fényesség = világosság = láthatóság = luminancia = Y.) »✓ (b ellenőrizve: a 30a + 59b + 11c értékek a, b, c ∈ {0…3} mellett mind különbözők, tényleg 64)«

### 141. oldal · 9. Műsorszóró rendszerek (folyt.)
- (9.7d) [táblázat] RGB 000: 0% fekete · 001: 11% kék · 100: 30% vörös · 101: 41% bíbor · 010: 59% zöld · 011: 70% kékeszöld · 110: 89% sárga · 111: 100% fehér. »✓«
- **`aiD_9_9`** [kép: hivatalos megoldás] A műhold a 10,7–11,7 GHz-es sávban sugároz. Adjon meg olyan oszcillátorfrekvenciát, amellyel a sáv a beltéri egység 1–2 GHz-es sávjába áttehető! Hol van a tükörfrekvenciák tartománya? Felső keverés: f₀ = **12,7 GHz**, tükör **13,7…14,7 GHz**. Alsó keverés: f₀ = **9,7 GHz**, tükör **7,7…8,7 GHz** („gyakorlatban ezt használják”). »✓«
- **`aiD_9_10`** Szuperheterodin, KF 10,7 MHz, felső keverés, 97,6 MHz: 97,6 + 10,7 = **108,3 MHz**, tükör 97,6 + 21,4 = **119 MHz**. »✓«
- **`aiD_9_11`** (5.3.) A műsorvezető a jobb oldali mikrofonba 720 Hz-es hangot fütyül. A sztereó multiplex jel összetevői közül melyek lesznek? A) 18 280 Hz B) 19 720 Hz C) 19 kHz D) 38 720 Hz. Gyűjtemény: „D, mert a 38 kHz-es AM-DSB/SC jelként kerül továbbításra az L − R jel, 38 000 + 720 Hz, ezen kívül az L + R jel miatt lesz egy összetevő 720 Hz-en is. A C-t nem kéne bejelölni?”
  »**C és D.** A 19 kHz-es pilot mindig jelen van a sztereó multiplex jelben, tehát a C is igaz. (Az összetevők: 0,72, 19, 37,28 és 38,72 kHz.)«

### 142. oldal · 9. Műsorszóró rendszerek (folyt.)
- **`aiD_9_13`** (5.1.) A műsorvezető a jobb oldali mikrofonba 520 Hz-es hangot fütyül. A sztereó FM jel spektrumának összetevői (FM előtt): A) 38 520 Hz B) 520 Hz C) 38 kHz D) 19 kHz. Gyűjtemény: **A, B**.
  ⚠️ »**A, B, D.** A 19 kHz-es pilot itt is jelen van (lásd 9.11). A 38 kHz-es segédvivő el van nyomva (DSB/SC), ezért C hamis.«
- **`aiD_9_14`** (5.2.) Mely állítások igazak az (európai) PDH-ról? A) Pleziokron Digitális Hierarchia. B) E1 szinten 32 időrésben továbbít beszédet. C) E1 szinten egy időrés 3,9 µs (±1%). D) E1 szinten egy beszédcsatornához rendelt jelzések sebessége 2 kbit/s. Gyűjtemény: **A, D**.
  »A ✓, B hamis (32 időrésből 30 beszéd, TS0 keretszinkron, TS16 jelzés), D ✓ (TS16: 64 kbit/s, 16 keretes multikeretben csatornánként 4 bit/2 ms = 2 kbit/s). **C is igaz:** 125 µs/32 = 3,906 µs, ez 3,9 µs ± 1%-on belül van. `[ELLENŐRIZENDŐ]`: lehet, hogy a kérdező a ± 1%-ot szigorúbb értelemben szánta, de számszerűen igaz.«
- **`aiD_9_15`** Szuperheterodin vevő 24…36 MHz közötti adókra, KF = 18 MHz. a) Mekkora tartományt kell átfognia a helyi oszcillátornak felső, illetve alsó keverésnél? Melyik jobb és miért? Felső: f₀,min − 24 = 18, f₀,max − 36 = 18 → **f₀ = 42…54 MHz**. Alsó: 24 − f₀,min = 18, 36 − f₀,max = 18 → **f₀ = 6…18 MHz**. A felső keverés a jobb, gyakorlatban is ezt használják többet: a tükörfrekvencia (f₀ + KF) messzebb kerül a hasznos összetevőtől, így a szűrő csillapítása nagyobb. b) Alsó keverésnél a 25,5 MHz-es adóhoz: f₀ = 25,5 − 18 = **7,5 MHz**. c) Tükörfrekvencia és a gond vele: „F + f₀ = 25,5 + 7,5 = 33 MHz. Egy szűrő itt még nem igazán csillapít, 7,5/33 ≈ 5 → 7 dB.”
  ⚠️ »a) ✓ Kiegészítés: a felső keverés fő előnye a **kisebb relatív hangolási tartomány** (54/42 = 1,29, szemben 18/6 = 3-mal). Felső keverésnél a tükör 60…72 MHz, alsónál 0…12 MHz. c) **Hibás:** alsó keverésnél a tükörfrekvencia |f_v − 2f_KF| = |25,5 − 36| = **10,5 MHz** (a 10,5 MHz-es jel is 18 MHz-es különbséget ad a 7,5 MHz-es oszcillátorral). A 33 MHz az összegfrekvencia, nem tükör. A gond: a 10,5 MHz a vételi sáv alatt viszonylag közel van, és egy hangolatlan bemeneti szűrő nem csillapítja eléggé (`01` szuperheterodin).«

### 143. oldal · 10. Digitális TV és cellás mobiltelefónia
Összefoglaló [kép: kézírás, DVB-C: raszter [f] = 2·(1/(2T))(1 + α) → 2(1/(2T) + α/(2T)). 1/T = baudrate (szimbólum/s) [Baud]. ld(#QAM) = bit/szimbólum. Bitsebesség [bps] = bit/szimbólum·baudrate. Reed–Solomon (n, k) → kódolás, lassít! Bitsebesség·k/n → hasznos jelsebesség. Ha megadják B_csatorna-t: #csatornák = hasznos jelsebesség/B_csatorna. d_min, RS = n − k + 1.] »✓ (az RS d_min-je szimbólumokban értendő)«

### 144. oldal · 10. Digitális TV (folyt.)
[kép: kézírás, DVB-T: T₀ időablak (egy szimbólum átvitele). Sávszélesség: 2·(1/(2T₀))·(0,5 + 6817 + 0,5) = B („összes vivő száma, ebből 6048 hordoz felhasználói adatot”, „műszaki megoldás miatti védősáv elhanyagolható”). Hasznos jel szimbólumsebessége: 6048·1/((1 + GI)·T₀) [baud]. h.j.sz.s.·ld(#QAM) = bitsebesség („nettó!!”). „Bruttó: nettó·(k/n)·FEC” (Reed–Solomon). Bruttó/B_csatorna ≈ #csatorna.]
  ⚠️ »**A nettó és bruttó felcserélve:** a 6048 adatvivőből számolt bitsebesség a **bruttó** (kódolt) sebesség, ebből a nettó (hasznos) = bruttó·(k/n)_RS·(belső FEC-arány). A csatornaszám = **nettó**/B_csatorna. A sávszélességre a 6817 vivő·(1/T₀) ≈ 7,61 MHz (8k mód).«

### 145. oldal · 10. Cellás mobiltelefónia (folyt.)
[kép: kézírás, „Cellás mobiltelefónia”: uplink 890(895)–915, downlink 935–960 MHz, 2·25 MHz, 20 MHz duplex távolság a sávok között. „Van benne 124 db sáv” (FDM miatt) → 1 sáv ≈ 0,2 MHz. A 124 vivő megosztása: 40 T-Mobile, 40 Telenor, 43 Vodafone, 1 (más). Full rate, half rate, adaptive multi rate. 900 MHz-nél 25 MHz – 124 sáv, 1800 MHz-nél 75 MHz – 374 sáv. TDM miatt 8 időrés. FRF: N, egy klaszterben lévő cellák száma (12 eltérő frekvencia). 124/N = vivőfrekvenciák száma cellánként. 124·8 időrés = egy klaszterben egyszerre beszélni képes felhasználók száma. Egy szolgáltatónál egyszerre egy cellán belül ⌊40/N⌋·8 beszélhet. Budapesten A_BP/(12·A_cella) klaszter van → hányan beszélhetnek egyszerre.] »✓ (a 27. oldali 3c saját megoldásával egyezik: ⌊40/12⌋·8 = 24)«
- **`aiD_10_1`** [Piros X.] a) Mire használnak QAM-et, és miért pont azt? QAM-et a színkülönbségi jelek kódolására: a világosságjel mellett pixelenként egy UV-koordinátapár adja meg a színt. Viszonylag régi technológia (NTSC 1941, PAL '50-es évek), eléggé zavartűrő, és a rendelkezésre álló sávszélességen pont elég. b) Mire használnak AM-VSB-t és miért? Az analóg TV világosság- és szinkronjelét (Y) viszi át, a VSB az AM kisebb sávszélességű változata. c) OFDM, miért csinálhatunk vele egyfrekvenciás hálózatokat? (nincs válasz)
  »a), b) ✓ (NTSC színes rendszer: 1953). c) saját: az OFDM hosszú szimbólumidejű, védőintervallummal ellátott alvivőkből áll, a többi adóból érkező, a védőintervallumnál kisebb késésű jel többutas terjedésként viselkedik, és nem okoz ISI-t, sőt teljesítménynyereséget ad.«

---

## E) 146–175. oldal: az „5-ösöm lesz Infokommból” gyűjtemény másolata

Ellenőrizve (2026-11-15): az ALL-IN 146–175. oldala a `5-ösöm-lesz-infokommból.pdf` 1–30. oldalával **oldalanként azonos** (a szövegréteg bájtra egyezik, a 20 dpi-s renderelt képek eltérése 0). Ezért itt nincs külön átirat, a tartalom a `Forrasok/5-osom/5osom_atirat.md`-ben van. Megfeleltetés: ALL-IN *n*. oldal = 5-ösöm (*n* − 145). oldal.

---

**Feldolgozva: 1–175. oldal (teljes).** Összesen 30 ⚠️ javítás és 21 `[ELLENŐRIZENDŐ]` jelölés. A javítások a `03_Hibajegyzek.md` H részébe kerülnek.
