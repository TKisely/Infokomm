---
title: "Infokommunikáció – Hibajegyzék (a források hibái, ellenőrzött javítással)"
keszult: 2026-11-15
---

# Hibajegyzék

> Minden tételt újraszámoltam. A legtöbbet szkripttel (mod 2 osztás, Erlang-B rekurzió, numerikus fázisforgatás), a többit kézzel.
> ⚠️ = a forrás végeredménye **rossz**. `[ELLENŐRIZENDŐ]` = a feladat hiányos, a javítás feltételezésen alapul.

## A) Régi md jegyzetek (`Forrasok/Korabbi_md_jegyzetek/`)

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| A1 ⚠️ | M2-T022 | r(x) = x²+x, c = 1101110 | **r(x) = 1, c = 1101001** | x⁶+x⁵+x³ mod (x³+x+1) = (x²+1)+(x²+x+1)+(x+1) = 1 |
| A2 ⚠️ | M2-T023 | FCS = 011, keret 1101011011 | **FCS = 110, keret 1101011110** | a mod 2 osztás lépései hibásak |
| A3 ⚠️ | M7-T095 (módosított példa) | 1101 → FCS 101, 1101101 | **FCS 001, 1101001** | ugyanaz az eset, mint A1 |
| A4 ⚠️ | M2-T026 | „egyértelműen dekódolható” | **NEM** egyértelműen dekódolható | `11010` = 110·10 = 1101·0 |
| A5 ⚠️ | M4-T047 | P_átl = 11,67, PAPR = 4,29 (6,32 dB) | **P_átl = 23,33, PAPR = 2,14 (3,31 dB)** | P_átl = E[I²] + E[Q²], a jegyzet csak az egyik tengellyel számolt |
| A6 ⚠️ | F29 | interferenciazóna határa 2h_Th_R/λ = 225 m | **4h_Th_R/λ = 450 m** | a hivatalos példatár (PDF 3.2) és a képletgyűjtemény szerint is; a 225 m az utolsó kioltás |
| A7 ⚠️ | F15 c) | tükör = 25,5 MHz | **10,5 MHz** | alsó keverésnél f_t = |f_v − 2f_KF|; a 25,5 MHz maga a vett adó |
| A8 ⚠️ | F13 c) | „felső keverésnél távolabb a tükör” | a tükör mindig 2f_KF-re van | az előny a kisebb relatív oszcillátor-átfogás |
| A9 ⚠️ | F16 | N = 197 | **N = 198** | 197-nél B = 0,212% > 0,2% |
| A10 ⚠️ | F30 | „kereszt” 8-QAM: 2,164A² | **a forrás távolságot átlagolt, nem távolságnégyzetet** | a forrás a 2014.12.15/6 hallgatói megoldás; P = (1/8)Σdᵢ² (lásd B8) |
| A11 ⚠️ | F22 c) | ±20%, a legbelső ponttal indokolva | **csillapítás 20% (külső pont), erősítés 33% (±3-as pont)** | a legbelső pont 100%-ot is elviselne |
| A12 ⚠️ | M4-T047 b), F22 d) | a sarokpontok áthelyezése csökkenti a csúcsot | 6×6-os rácsnál **nincs nyereség**: (5,5) és (7,1) is √50 | ezt az 5-ösöm is megerősíti; 8×8-as rácsnál már van értelme |
| A13 | eredeti `infokomm_feladatok_1-10.md`, F1 | 20lg(r²/(2h_Th_R)) | **20lg(r²/(h_Th_R))** | a v2 már javítja; a 112 dB a helyes képlettel jön ki (a 2020-as vizsgán is így adtak teljes pontot) |
| A14 | M1-T009 c) | „a jel-zaj viszony romlik” | **áthallás:** 0,75L + 0,25R, a szeparáció ≈ 9,5 dB | 2020-ban a zajra hivatkozó válasz **0 pontot** ért |
| A15 | M5-T075 / F19 | 43 vagy 44 klaszter, de 43,75-tel szoroz | írd le, melyik modellt választod | 43,75 × 992 = 43 400; 43 × 992 = 42 656; 44 × 992 = 43 648 |
| A16 | M6-T076 c) | „overhead 36,25%” | a payloadhoz viszonyítva igaz; a teljes csomaghoz 26,6% | mondd meg, mihez viszonyítasz |
| A17 | M3-T035 vs. M7-T093 | – (nem hiba) | alapsáv: R_s(1+α)/2, modulált: R_s(1+α) | ha a feladat nem mondja meg, írd le, melyiket használod |
| A18 | M1-T007 / M5-T063 (c) | α-HLR + β-MSC/VLR | **+ β-BTS és β-BSC is** | 2020-ban a javító ezért vont le pontot |

## B) Hallgatói vizsgamegoldások (`ALL-IN-Infokomm-1.pdf`, `5-ösöm-lesz-infokommból.pdf`)

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| B1 ⚠️ | 5-ösöm, 36-QAM fázistűrés | asin(1/5) = 11,5° | **≈ 10,6°** (sarokpont) | numerikus forgatás minden pontra |
| B2 ⚠️ | ALL-IN 7.11 d), 64-QAM fázistűrés | 9,46° | **≈ 7,7°** | a forrás a szomszédos pontig mért, nem a döntési határig (Q = 6) |
| B3 ⚠️ | 5-ösöm, 24–36 MHz-es vevő, alsó keverés | tükör = F + f₀ = 33 MHz | **10,5 MHz** | 10,5 + 7,5 = 18 MHz = f_KF; a 33 MHz-ből nem lesz f_KF |
| B4 ⚠️ | 2016.01.05/3 (egyik változat) | N = 197 | **198** | lásd A9 |
| B5 ⚠️ | 2016.01.12/3 (egyik változat) | N = 29 | **28** | A = 15, N = 28 → B = 0,086% ≤ 0,1% |
| B6 ⚠️ | 2015.12.16/4 FSK sávszélesség | 2(F + f_D) = 400 kHz | **≈ 2(f_D + 1/(2T)) = 150 kHz** | a vivőfrekvencia nem moduláló frekvencia `[ELLENŐRIZENDŐ: konvenció]` |
| B7 ⚠️ | 2016.01.05/8: 8-PSK, 150 Mbit/s, 72 MHz | „nem lehet” | **lehet, ha α ≤ 0,44** | R_s = 50 MBd, B = 50(1+α) `[ELLENŐRIZENDŐ]` |
| B8 ⚠️ | 2014.12.15/6, 8-QAM | P = 2,414A / 2,164A / 2,287A | P = (1/8)Σdᵢ² (A²-ben) | távolságot átlagolt, és A-t írt A² helyett `[ÁBRA SZÜKSÉGES]` |
| B9 ⚠️ | 2020.06.02 Q4, QAM-16 [160,100] | 40 MBd → 100 Mbit/s | **25 Mbit/s (α = 1) vagy 50 Mbit/s (α = 0)** | R_s = B/(1+α); a javító 0 + 1 pontot adott |
| B10 ⚠️ | 2020.06.02 Q6, VoIP | 50 bit/s és 100 bit/s | **50 csomag/s és 82,8 kbit/s** | mértékegység-tévesztés; a javító 1 + 0 + 0 pontot adott |
| B11 ⚠️ | 2020.06.02 Q7 c–d | 4264 m, egyutas 37 dB | **44,4 m → túl van a zónán → kétutas ≈ 50,5 dB** | a javító szerint „elszámolva” |
| B12 ⚠️ | 2020.05.26 Q4, AM átlagteljesítmény | 8 W (csak a vivő) | **9 W** | a javító szerint „minden komponensé számít” |
| B13 | 5-ösöm: Budapest | 44 × 992 = 43 648 | elfogadható, de írd le a kerekítést | lásd A15 |
| B14 | 2020.05.26 Q5 | 123 dB-es fájdalomküszöb → 1000 W | a tankönyvi érték 120 dB → ≈ 500 W | mindkettőre teljes pontot adtak, mert a feltételezés le volt írva |

## C) Megerősítések a hivatalos TMIT-gyakorlatanyagból (`05`)

- A **16-QAM fázistűrése** a hivatalos P.6.3 szerint 45° − arcsin(2/√18) ≈ 16,9°. Ez ugyanaz a módszer, amellyel a B1/B2 javítások készültek (a döntési határig mérve).
- **Alsó keverés tükörfrekvenciája:** a hivatalos P.8.2 (Kossuth, 540 kHz → 370 kHz) a |f_v − 2f_KF| képletet használja. Ez megerősíti az A7 és a B3 javítást.
- A **felső keverés előnye** a hivatalos P.8.1 és P.8.2 szerint a kisebb relatív oszcillátor-átfogás. Ez megerősíti az A8-at.
- **DVB-T:** a tárgy saját adatai (GI = 28 µs = 1/32, FEC 7/8 → 31,67 Mbit/s) eltérnek az `5-ösöm` példájától (GI = 1/4, FEC 3/4 → 22,4 Mbit/s). Ez nem hiba, csak más paraméterkészlet.
- **Fájdalomküszöb:** a gyak07 1 kHz-en kb. 130 dB-es tartományt ír, a vizsgamegoldások 120 vagy 123 dB-lel számoltak. Mindig írd le, melyiket használod.
- **gyak00, 3. példa:** a forrás csak felső korlátot ad x₂ csúcstényezőjére (< 1,83). Numerikusan ≈ 1,79.

## D) Koma jegyzetei (`Forrasok/Koma/`, azonosítók: `06_Kereszthivatkozasok.md`)

Az átíráskor már javított pontokat (a kg01 táblázatának sorcseréje, a kg03_2 0,55 → 0,35, a kg10_4 38,74 → 38,47, az ea02 ⌊d/2⌋ → ⌊(d−1)/2⌋, az ea08 csap/pálcika csere, az ea10 GSM-név) nem ismétlem.

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| D1 ⚠️ | `kg06_3` (GPS) | P_R ≈ 0,625 nW | **≈ 6,3·10⁻¹⁶ W = 0,63 fW** | 25 W = 14 dBW, 14 − 166 = −152 dBW. A 10^(−16,6) szorzóval 10⁻¹⁷ nagyságrend jön ki, nem 10⁻¹⁰ |
| D2 | `kg04_4 b)` | α = 0,9° | **≈ 0,83°** | α = 2/√G = 2/√19 108 = 0,01447 rad. Apró kerekítés, de a vizsgán ellenőrizhető |
| D3 ⚠️ | `ea10` | 124 vivő × 8 időrés → „992 felhasználó cellánként” | **992 / klaszter**, N = 12 esetén cellánként ≈ 83 | a 124 vivőn N cella osztozik (`01 §9`, `F19`) |
| D4 | `ea13_3` | más válaszok, mint a Moodle-vizsgán (`vz2020_05_26_Q8`) | a kérdésváltozat más (MS-A2 hívásindítása, FNR) | `[ELLENŐRIZENDŐ]`: melyik szövegváltozat a mérvadó |
| D5 | `kg06_5 c)` | a bizonyítás csak vázlatos | teljes bizonyítás: `06` 4. fejezet | B₁ ⊕ B₂ = 111 nem lehet, ha mindkettő súlya ≥ 2 |

## E) Hivatalos anyag hibája (a független számolás dönt)

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| E1 ⚠️ | `tg02_P53` (TMIT 5.3), `pd04_3` (OneDrive 4.3), és ezt átvéve az `05` első változata | Pistike-kód: L̄ = 2,05 | **L̄ = 2,35**, az eltérés az entrópiától **34,8%** | 0,5·2 + 0,25·2 + 0,15·3 + 0,1·4 = 1 + 0,5 + 0,45 + 0,4 = 2,35. Koma gyakorlati jegyzete (`kg03_3`) helyesen 2,35-öt ad |

## G) Marosi Gyula 2016-os gyakorlatai (`Forrasok/Marosi_2016/marosi_2016_atirat.md`)

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| G1 | `mg4k_4` | 2,35 bit/szimbólum, 34,8% | ✅ ez a gyakorlatvezető saját megoldása | **megerősíti az E1-et** (a hivatalos füzet 2,05-je elírás) |
| G2 ⚠️ | `mg4_5 c)` | a műholdas adóantenna nyeresége ≈ 31 dB | **≈ 37,1 dB** | a dia 2000 km **átmérőt** ír, a 31 dB a 2000 km-es sugárral jön ki |
| G3 | `mg13_2` | „RS: véletlen hiba ellen, FEC: burstös hiba ellen” | `[ELLENŐRIZENDŐ]` | a DVB-ben a belső konvolúciós kód javítja a véletlen hibákat, a külső RS (interleaverrel) a csomós hibákat |
| G4 | **A6 pontosítása** (`F29`) | 225 m vs. 450 m | az eredeti 2016-os feladat (`mgP_4 a)`) a **legtávolabbi minimumot** kérdezi, arra **225 m** a helyes. A **legtávolabbi maximum** (az interferenciazóna határa) 450 m | a két szövegváltozat két különböző kérdés. Mindig olvasd el, melyiket kérdezik |

## H) Az ALL-IN és az 5-ösöm teljes, oldalankénti átirata (`Forrasok/ALL-IN/allin_atirat.md`, `Forrasok/5-osom/5osom_atirat.md`)

A B) rész tételei megmaradnak, az átirat azonosítóival kiegészítve. Új tételek:

| # | Hol | A forrásban | Helyesen | Miért |
|---|---|---|---|---|
| H1 ⚠️ | `ai2016_06_07_2` | „nem lehet 1-nél rövidebb” (nincs válasz) | **lehet**: párok Huffman-kódja 0,645 bit/szimbólum | H = 0,469 bit, blokk-kódolással megközelíthető |
| H2 ⚠️ | `ai2014_12_15_7` | 1/T ≅ 7 MBd | **6,96 MBd**, felfelé nem kerekíthető | 7 MBd-hoz 8,05 MHz kellene. A csatornaszám (25) nem változik |
| H3 ⚠️ | `ai2014_12_15_9` | 80 csatorna/cella | 1000/12 = **83** (124 vivővel 82) | a grafikonról 65 Erl helyett 67…68 Erl |
| H4 ⚠️ | `ai2014_01_07_2`, `5o_05` | Φ_D = 2 rad (a moduláló jel feszültségéből) | **Φ_D ≈ 10 rad, f_D = 25 kHz** | az oktató saját elemzése (`5o_04_1`): ő állította be a generátort |
| H5 ⚠️ | `aiD_1_1` | x̂ = 7/√2 | **5** | azonos frekvenciájú összetevők: √(3² + 4²) |
| H6 ⚠️ | `aiD_1_3` | A, B, C bekarikázva | **egyik állítás sem igaz** | s(42/f₀) = −3, C = √2, P = 12,5 |
| H7 ⚠️ | `aiD_2_2 d)` | n = 8 (és egy megjegyzésben n = 5) | **n = 10** | 60 dB = 10⁶ (teljesítményarány) |
| H8 ⚠️ | `aiD_2_4` | f_s = 2f esetén visszaállítható | **nem biztosan** | a mintavételi tétel f_s > 2f_max-ot kíván |
| H9 ⚠️ | `aiD_5_7` | B = 44 Hz | **≈ 55 Hz** (Carson) | 2(f_D + f_m) = 2(22 + 5,5) |
| H10 ⚠️ | `aiD_7_3`, `5o_09_1` | „a fázishiba nagy: 130,73° ≠ 145°” | **a fázishiba kb. 4°** | atan2(0,93; −1,08) = 139,3°, a várt 135°. Tengelycsere és rossz síknegyed |
| H11 ⚠️ | `aiD` 123. old. | bit/szimbólum = #QAM/4 | **log₂M** | 16-QAM-nél véletlen egyezés |
| H12 ⚠️ | `aiD_7_16`, `5o_07_1 d)` | a sarokpontok áthelyezésével a fázistűrés nem változik | **romlik 8,1°-ra** | a (7, 1) pont arctg(1/7)-nél éri el az y = 0 határt |
| H13 ⚠️ | `aiD` 131. old. | elfedés 100 µs és 20 µs | **kb. 100–200 ms és 20 ms** `[ELLENŐRIZENDŐ]` | szakirodalmi nagyságrend |
| H14 ⚠️ | `aiD_8_6`, `5o_23_2` | váltott sor: „a fél kép fele idő alatt” | **azonos sávnál kétszeres villogási frekvencia** | 50 félkép/s a 25 kép/s helyett |
| H15 ⚠️ | `aiD_9_11`, `aiD_9_13` | a 19 kHz-es pilot kimarad | **a pilot mindig összetevő** | 9.11: C, D. 9.13: A, B, D |
| H16 | `aiD_9_14` | A, D | **A, C, D** `[ELLENŐRIZENDŐ]` | 125 µs/32 = 3,906 µs ≈ 3,9 µs ± 1% |
| H17 ⚠️ | `aiD` 144. old. | „bruttó = nettó·(k/n)·FEC” | **nettó = bruttó·(k/n)·FEC** | a csatornaszám a nettóból jön (`5o_25_2` helyesen) |
| H18 ⚠️ | `ai2016_01_05_7b`, `5o_27_1`, `5o_28_1` | beszélgetés közbeni mozgásról a HLR és a VLR is értesül | **csak BTS, BSC, MSC** (hívásátadás) `[ELLENŐRIZENDŐ]` | hívás közben nincs helyzetfrissítés (`03` A18 kiegészítése) |
| H19 ⚠️ | `5o_27_1` | MS-B SMS-ét az SMSC_α kézbesíti | **SMSC_β** `[ELLENŐRIZENDŐ]` | a küldő honi SMSC-je (az ALL-IN ugyanerre SMSC_β-t ír) |
| H20 | `5o_27_1 b)` | tiltólista: EIR_α | **EIR_β** `[ELLENŐRIZENDŐ]` | a kiszolgáló (látogatott) hálózat ellenőrzi az IMEI-t |
| H21 ⚠️ | `5o_14_2` | 40 pW = 4·10⁻¹² W, 147 dB | **4·10⁻¹¹ W, 137 dB** | ezzel G_T ≈ −14 dB, bármilyen antenna elég |
| H22 | `5o_14_3 b)` | 111 dB | **112,6 dB** | 20lg 83,3 = 38,4 (nem 40) |
| H23 ⚠️ | `5o_20_1` | alsó korlát 4 bit | **log₂9 = 3,17 bit** (Huffman 3,22) | 9 állapot, egyenlő valószínűséggel `[ELLENŐRIZENDŐ]` |
| H24 | `5o_22_3 d)` | R = 0,6, „lilás” | **R = 0, kék** | Cr = −0,3, R = Cr + Y = 0 |
| H25 | `5o_30_2` | „A = h·λ = 6” | **h = A/λ ≈ 6 perc** | a 0,6 a lebonyolított forgalom, nem a tartási idő |
| H26 | `aiD_6_2`, `5o_10_1` | legrosszabb eset 1,15 − 4·0,25 | **1,15 − 3·0,25 = 0,4** | négyszintű jelnél a szomszéd legfeljebb ±3 |
| H27 ⚠️ | `5o_04_1` (oktatói levezetés), `ai2014_01_07_2` | 2πF·T₀ + μ(T₀) = 2π·8 → Φ = 8π/3 = 8,4 | **a t = 0-beli fázist le kell vonni: μ(T₀) − μ(0) = −2Φ, így ugyanabból a leolvasásból Φ = 2π ≈ 6,3 rad, f_D ≈ 15,7 kHz** | ugyanez jön ki az átlagolásból: átlagos eltérés = (2/π)·f_D, 10 kHz → 15,7 kHz. A beállított érték (az oktató szerint) 25 kHz, ehhez félperiódusonként kb. 7 és 13 vivőperiódus tartozna, a 8 és 12 durva leolvasás `[ELLENŐRIZENDŐ]` |
| H28 | `ai2020_05_26_Q3` (ALL-IN példatár 4.1) | d(01010, 11011) = 3 | **2** | 01010 ⊕ 11011 = 10001. A döntés (01110) nem változik |
| H29 | `5o_24_4` (megjegyzés) | — | alsó keverésnél az oszcillátor a sáv tetején (36 MHz) 18 MHz-en, a KF-en jár | a felső keverés ezért is jobb |

## F) Fájl-állapot

- `~/Downloads/infokomm_feladatok_1-10-v2 (1).md` **sérült** másolat, eltűntek belőle a képletek. Nem másoltam át. A `infokomm_feladatok_1-10-v2.md` a jó.
- A `modul_02 … 07` és a `feladatok_21-30` fájlokban a LaTeX részben sérült (`\t`, `\f`, `\r`, `\b`, `\a` → `	ext`, `rac`, `egin`, `lpha`), ezért nem renderelődnek szépen. A tartalom olvasható, és **nem javítottam bennük**: az eredeti állapotban vannak a `Forrasok/` alatt.
- Az 1–10. feladat ugyanaz, mint az M1-T001…T010, a 11–20. pedig nagyrészt az M1-T011…T015 és az M5/M6 duplikátuma.
- A régi md jegyzetek nagy része ugyanazokból a vizsgafeladatokból készült, mint az ALL-IN (pl. 2020.05.26 Q1–Q8 = M1-T001…T008).
