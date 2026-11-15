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

## F) Fájl-állapot

- `~/Downloads/infokomm_feladatok_1-10-v2 (1).md` **sérült** másolat, eltűntek belőle a képletek. Nem másoltam át. A `infokomm_feladatok_1-10-v2.md` a jó.
- A `modul_02 … 07` és a `feladatok_21-30` fájlokban a LaTeX részben sérült (`\t`, `\f`, `\r`, `\b`, `\a` → `	ext`, `rac`, `egin`, `lpha`), ezért nem renderelődnek szépen. A tartalom olvasható, és **nem javítottam bennük**: az eredeti állapotban vannak a `Forrasok/` alatt.
- Az 1–10. feladat ugyanaz, mint az M1-T001…T010, a 11–20. pedig nagyrészt az M1-T011…T015 és az M5/M6 duplikátuma.
- A régi md jegyzetek nagy része ugyanazokból a vizsgafeladatokból készült, mint az ALL-IN (pl. 2020.05.26 Q1–Q8 = M1-T001…T008).
