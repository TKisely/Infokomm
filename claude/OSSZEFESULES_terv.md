# Összefésülés terve: 4. példatár (fő + ALL-IN + 5-ösöm)

Állapot: 2026-11-15. A duplikátumtérkép kész, a build még nincs megírva.

## Elv
- Csak a **valódi duplikátum** (ugyanaz a feladat, ugyanazok a számok) olvad össze. Az azonos típusú, más számokkal adott változat külön példa marad.
- Az összevonásnál a megtartott példa forrássorát (`src`) és `links` csoportját kiegészítjük az elhagyott példa forrásaival. Ha az elhagyott példának van plusz részkérdése, azt lépésként vagy `chk` sorként átvesszük.
- Elsőbbség: fő példatár (`ch02`) > ALL-IN (`ai…`) > 5-ösöm (`o…`), kivéve, ha az alacsonyabb rangú a gazdagabb (pl. `o1_06`).
- Megvalósítás: új könyv a `build.js` `BOOKS`-ában (pl. `egy`, kimenet `egyesitett_peldatar.html`), új `data/mNN.js` fejezetek, amelyek a meglévő fájlokból `require`-rel veszik a példákat, és újraszámozzák őket (`num`). A meglévő azonosítók megmaradnak. Figyelem: az alap-szakaszok `a2-snr` azonosítója a `ch02`-ben és az `ai02`-ben is előfordul, ezt a fejezetben át kell nevezni vagy össze kell vonni.

## Fejezetszerkezet
1. Jelek, teljesítmény, csúcstényező: ai01
2. Mintavételezés és kvantálás: ch02 + ai02 + o04
3. Analóg moduláció: ai05 + o01
4. Digitális alapsávi átvitel (PAM, ISI): ai06 + o03
5. Digitális moduláció (FSK, PSK, QAM): ai07 + o02
6. Forrás- és hibavédő kódolás: ai04 + o06
7. Hang, hallás, kép, látás: ai08 + o07
8. Rádiós összeköttetések: ai03 + o05
9. Műsorszórás, digitális TV: ai09 + o08
10. GSM: ai10 + o09
11. Forgalom és VoIP: ai11 + o10

## Duplikátumok (megtartott ← elhagyott)
| Megtartott | Elhagyott | Megjegyzés |
|---|---|---|
| ai1_01 | o1_01 | azonos |
| ai7_05 | o1_08 | a BPSK csúcstényező az ai7_05 b) része |
| p2_04 | ai2_02 | ai2_02 c) spektrumrajz: képek 0…30 és 105…120 kHz, átvenni chk-ba |
| p2_05 | ai2_12 | azonos |
| p2_06 | — | megmarad, mellette ai2_03 és ai2_04 is (bővebbek: spektrum, szinusz, C=√6) |
| ai2_03 + ai2_04 | o4_04 | o4_04 = ai2_03 a) + ai2_04 b) |
| p2_07 | o4_01 | azonos |
| p2_09 | — | ai2_11 (feleletválasztós, teljes k-táblázat) külön marad vagy chk-ként beolvad |
| p2_11 | ai2_09 | ai2_09 hivatalos válaszai (pontlevonás okai) átvenni chk-ba |
| p2_03 | — | ai2_05 (feleletválasztós A–D) beolvasztható chk-ként |
| ai2_01 | — | o4_02 (négyszögjel bemenet) más kérdés, külön marad. p2_02 (1,8 kHz) és p2_12 (túlvezérlés) is külön |
| ai5_04 | o1_05 | o1_05 rajz-ellenőrzés: 50 µs alatt 1 moduláló és 4 vivőperiódus |
| ai5_06 | o1_07 | o1_07 extra: miért nem szögmodulált, miért nem SSB/SC, komponensek 1/4/1 V, C=2 |
| o1_06 | ai5_10 | az oktató elemzése a gazdagabb |
| ai9_08 | o2_01 | azonos (fejezet: 9.) |
| ai7_09 | o2_02 | azonos |
| ai7_10 | o2_04 | azonos |
| ai7_07 | o2_05 | azonos |
| ai6_03 | o3_02 | o3_02 hivatalos válasza chk-ba |
| ai4_01 | o6_03 | azonos |
| ai4_08 | o6_04 | azonos |
| ai4_10 | o6_06 | azonos |
| ai8_02 | o7_03 | azonos |
| ai8_10, ai8_03, ai8_04 | o7_04 | o7_04 négy részkérdése ezekben megvan |
| ai9_01 | o8_01 | azonos |
| ai9_03 | o8_02 | azonos |
| ai9_10 | o8_04 | azonos |
| ai10_03 | o9_02 | ugyanaz a forgatókönyv, o9_02 b) EIR és d) bontás részkérdése átveendő |
| ai10_04 | o9_03 | ugyanaz a forgatókönyv, más részkérdések: o9_03 a), d) átveendő |
| ai10_06 | o9_04 | o9_04 extra: FDM+TDM, betűszavak (HLR, VLR, MSC, BSC, BTS) |
| ai11_06 | o10_05 | azonos (d) rész) |

## Változatok (külön maradnak)
ai3_03 és o5_03 (900 MHz, más G_T és más kérdés: kioltás vs. zónahatár), ai6_01/ai6_02/o3_01 (elemi jel más számokkal), ai10_02 (Győr) és o9_01 (Budapest), ai11_05 és o10_02 (VoIP más számokkal), az AM-DSB változatok (ai5_01…03, o1_04).

## Becsült létszám
12 + 104 + 49 = 165 példa, kb. 27 elhagyott duplikátum után kb. 138 példa.

## Hátralévő lépések
1. `data/m01.js`…`m11.js` és `BOOKS.egy` a fenti táblázat szerint (merge-segéd: src és links összefűzése).
2. Build, `verify_ch02.py`, `verify_allin.py`, `verify_otosom.py` (az eredmények nem változnak), böngészős ellenőrzés.
3. Közzététel új artifactként, `00_STATUSZ.md` és a szabvány frissítése, commit és push.
