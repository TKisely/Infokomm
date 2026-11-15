---
title: "Infokommunikáció – Kereszthivatkozások: témakörök, források, azonos feladatok"
keszult: 2026-11-15
forrasok: "minden fájl a repóban + Forrasok/Koma/koma-eloadasok.md, koma-gyakorlatok.md (Koma kézírásos jegyzeteinek átirata, 2021 tavasz, Varga Pál)"
---

# Kereszthivatkozások

Ez a fájl köti össze az anyagokat. Ha egy feladatot tanulsz, itt látod:
- melyik **előadáson** volt az elmélete,
- melyik **gyakorlaton** és melyik **régi vizsgán** szerepelt ugyanez (vagy egy változata),
- **egyezik-e** az eredmény minden forrásban.

Minden végeredményt független szkripttel számoltam újra. ✅ = minden forrás egyezik, ⚠️ = valamelyik forrás hibás (részletek a `03_Hibajegyzek.md`-ben).

---

## 1. Azonosítók

Az azonosítók véglegesek, nem változnak, mert más fájlok és a későbbi HTML-oldal is ezekre hivatkozik.

| Előtag | Forrás | Példa |
|---|---|---|
| `eaNN` / `eaNN_x` | Koma előadásjegyzete, NN. előadás (x = feladatszám, ha van) | `ea03`, `ea13_1` |
| `kgNN_x` | Koma gyakorlatjegyzete, NN. gyakorlat, x. feladat | `kg03_2`, `kg05_44` (a hivatalos 4.4 alapján) |
| `tgNN_Px` / `tgNN_Gx` | TMIT gyakorlatanyag, NN. füzet, P (kidolgozott) vagy G (gyakorló) példa | `tg06_P63`, `tg05_G51` |
| `pdNN_x` | OneDrive `1-5 gyakorlatok.pdf`, NN. gyakorlat, x. példa | `pd03_2` |
| `vzÉÉÉÉ_HH_NN_Qx` | régi vizsga (Moodle vagy hallgatói megoldás), dátum és feladatszám | `vz2020_06_02_Q7` |
| `Mx-Tyyy`, `Fz` | a régi md jegyzetek moduljai és a feladatgyűjtemény (`Forrasok/Korabbi_md_jegyzetek/`) | `M2-T023`, `F29` |

Fájlhivatkozások: `01 §5` = az `01_Kidolgozas…` 5. fejezete, `02 §3.4` = a `02_Regi_Vizsgafeladatok…` 3.4 pontja, `05 gyak04` = az `05_TMIT…` gyak04 része.

---

## 2. Témakör-mátrix

A tárgy 12 témaköre (YouTube-csatorna és a `04_Claude_ai_projekt_megallapitasok.md` szerint), és hogy hol mi található.

| # | Témakör | Előadás (Koma) | Gyakorlat (Koma) | TMIT-füzet | OneDrive PDF | Elmélet és recept | Vizsgafeladatok |
|---|---|---|---|---|---|---|---|
| 1 | Jelek leírása | – | `kg01` | `tg00` | `pd01` | `01 §3` (jelleírás) | – |
| 2 | Mintavételezés és kvantálás | `ea01` | `kg02`, `kg06_4` | `tg01` | `pd02` | `01 §2–3` | `02 §2` |
| 3 | Analóg moduláció | `ea04`, `ea05` (FM-demodulálás) | `kg05`, `kg06_1` | `tg04` | `pd05` | `01 §8` | `02 §4` |
| 4 | Digitális alapsávi átvitel | `ea06` | `kg07` | `tg05` | – | `01 §6` | `02 §6` |
| 5 | Digitális vivős moduláció | `ea07` | `kg08` | `tg06` | – | `01 §7` | `02 §5` |
| 6 | Kódolástechnika | `ea02` | `kg03`, `kg06_2`, `kg06_5`, `kg06_6` | `tg02` | `pd04` | `01 §4–5` | `02 §3` |
| 7 | Hallás, látás | `ea08` | – | `tg07` | – | `01 §12` | `02 §9` |
| 8 | Rádiós összeköttetések | `ea03` | `kg04`, `kg06_3` | – (a `gyak03` nem érhető el) | `pd03` | `01 §1` | `02 §1` |
| 9 | Műsorszóró rendszerek | `ea09`, `ea05` (OFDM, CDMA) | `kg10` | `tg08` | – | `01 §8` (vevők, sztereó), `§7` (DVB) | `02 §4.7`, `§5.9` |
| 10 | Cellás mobiltelefónia | `ea10` | – (a Koma-sorozatból a gyak09 hiányzik) | – | – | `01 §9` | `02 §7` |
| 11 | Forgalmi méretezés, VoIP | – | `kg12` | – | – | `01 §10–11` | `02 §8` |
| 12 | Extra, vegyes | `ea11` (ABCDE5G, IoT), `ea13` (vizsgafelkészítő) | `kg06` (ZH-felkészítő) | – | – | – | – |

**Hiányzó részek forrásonként:**
- A Koma-sorozatból hiányzik a 9. és a 11. gyakorlat (valószínűleg mobil és forgalom), valamint a 12. előadás (valószínűleg forgalom és VoIP).
- A TMIT-füzetek közül a 03 és a 09+ nem érhető el.
- A 10. és a 11. témakörhöz így a régi vizsgák (`02 §7–8`) és a `kg12` a fő forrás.

---

## 3. Azonos feladatok különböző forrásokban

A táblázat azt mutatja, hol szerepel **ugyanaz** a feladat (vagy egy változata), és egyezik-e az eredmény.

### 2. Mintavételezés és kvantálás
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| Szivárgás, 8 kHz-es PCM, 1,8 kHz, 40 dB | `pd02_2`, `kg02_1`, `tg01_G11` | 6,2 kHz-en 20 mV; n·8 ± 1,8 kHz | ✅ |
| Trapézszűrő, 1 kHz és 4,5 kHz | `tg01_P11`, `kg02_2` | 0,02 V; 4,5 kHz-es bemenetnél az álkép 0,375 V, a valódi 0,125 V | ✅ |
| Két sávban lévő jel (0–3 és 7–8 kHz), 0,2 mW | `pd02_1`, `tg01_P12`, `kg02_3` | s₀ = 25 µW/kHz; f_s ≥ 16 kHz vagy 11–14 kHz | ✅ |
| Kvantálási zaj spektruma (7B–10B) | `pd02_4`, `kg02_4` | f_s = 20B/3; a zaj 0,9-szeres; f_s = 20B esetén sávszűrővel 0,3-szeres | ✅ |
| Négyszögjel, kimenet 1, 3, 7, 9 kHz | `kg06_4`, `5-ösöm`, `02 §2.4` | 3 < f_AA < 5 kHz, 9 < f_R < 11 kHz, **f_s = 10 kHz** | ✅ |
| SNR = (3/C²)·(f_s/2B)·2^(2n) levezetése | `ea01`, `kg02` | 6,02n + 1,76 dB szinuszra | ✅ |

### 6. Kódolás
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| Hosszak 2,3,3,3,3,4,4,4,5,5 | `pd04_1`, `tg02_P51`, `kg03_1` | Kraft = 1; H = L̄ = 49/16 | ✅ |
| p = 0,4/0,25/0,12/0,1/0,08/0,05 | `tg02_P52` (Shannon-kód), `kg03_2` (Huffman-kód) | Shannon L̄ = 2,75; **Huffman L̄ = 2,3**; H = 2,236 | ✅ (két különböző kód) |
| Pistike-kód {01, 10, 011, 1011} | `pd04_3`, `tg02_P53`, `kg03_3` | nem egyértelmű; **L̄ = 2,35** (a hivatalos anyagban 2,05 ⚠️); Huffman-kóddal 1,75; H = 1,743 | ⚠️ `pd`/`tg` hibás, `kg` helyes |
| Golay (23,12) | `pd04_5`, `tg02_P55`, `kg03_4` | d = 7, 3 hibát javít, perfekt, a 15. és a 21. bit hibás | ✅ |
| (8,4), nem szisztematikus G | `pd04_6`, `tg02_P56`, `kg03_5` | c = 01101010, s = 0011 → az 1. bit hibás | ✅ |
| 00000/01110/10101/11011 | `vz2020_05_26_Q3`, `M1-T003`, `5-ösöm` | s = 100, u = 01, d = 3 | ✅ |
| G = [10110; 01011], v = 11001 | `ea02` | s = 100 → e = 00100 → u = 11 | ✅ |
| C(5,2), 1 hibát javító kód tervezése | `kg06_5`; vö. `vz2016_01_05_Q4` (`02 §3.6`) | G = [10011; 01110]; v = 10001 → s = 010 → u = 10 | ✅ (a c) részhez a `kg` bizonyítása hiányos, lásd 4. fejezet) |
| (7,3) kód javítása | `kg06_2` | d_min = 2 → 3 egy sor cseréjével | ✅ |
| Kraft 2,2,3,3,3,4,4,4,4 és prefix kód | `vz2020_06_02_Q1`, `M1-T008`, `5-ösöm` | 9/8 > 1 → nem lehet | ✅ |

### 8. Rádiós összeköttetések
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| 450 MHz, 10 km, 20 + 20 dB, 1 W | `pd03_1`, `kg04_1` | a = 65,5 dB; 0,28 µW; 3,75 mV | ✅ |
| Kétutas terjedés, h_T = 20 m, h_R = 10 m, 10 km | `pd03_2`, `kg04_2` | λ = 8 cm; ≈ 98 dB | ✅ |
| Kétutas terjedés, h_T = h_R = 10 m, 10 km, Γ = −0,8 | `vz2020_05_26_Q1`, `M1-T001`, `F1` | 112 dB; arány 9 | ✅ |
| Interferenciazóna határa | `ea03`, `pd03_2`, `kg04_2`, `F29` | **d_i = 4h_Th_R/λ** | ✅ (az `F29` hibás, lásd `03` A6) |
| Γ meghatározása P_max/P_min-ből | `kg04_3` | h_T = 200 m, Γ = −0,5 | ✅ |
| Parabolaantenna, 1,1 m, 12 GHz | `kg04_4` | G = 42,8 dB; α ≈ **0,83°** (a `kg`-ben 0,9°); G_T = 37,1 dB | ⚠️ apró kerekítés |
| GPS-link | `kg06_3` | a = 166 dB; **P_R ≈ 6,3·10⁻¹⁶ W = 0,63 fW** (a `kg`-ben 0,625 nW) | ⚠️ `kg` hibás |

### 3. Analóg moduláció
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| s = 3cos1800t + 10cos2000t + 3cos2200t | `tg04_P42`, `kg05_42` | m = 0,6; hatásfok 15%; max = 16 | ✅ |
| 60 kHz, m = 0,2, csúcs 1,8 V | `tg04_P43`, `kg05_43` | U_v = 1,5 V, U_m = 0,3 V | ✅ |
| Ismeretlen modulált jel (FM) | `pd05_3`, `tg04_P44`, `kg05_44`, `F21` (változat) | 250 kHz-es vivő (az `F21`-ben 500 kHz), Φ_D = 5, f_D = 7,5 kHz, 18 vagy 24,7 kHz | ✅ |
| Kislöketű PM torzítása | `pd05_4`, `tg04_P45`, `kg05_45` | √(1+µ²)·cos(… + arctan µ) | ✅ |
| AM-DSB, m = 1 (240/30 kHz, csúcs 6 V; illetve 210/30 kHz, csúcs 4 V) | `vz2020_06_02_Q5`, `M1-T004`; `kg06_1` | 3/1,5 V, illetve 2/1 V | ✅ |
| AM az oszcilloszkópon, 20 µs/osztás | `ea13_4`, `vz2014_12_22_Q2` | f_m = 20 kHz, f_v = 100 kHz, m = 0,5 | ✅ |
| FM-rendszer tervezése (8 kHz, 1,5 GHz, 50 kHz) | `kg05_extra` | f_D ≤ 17 kHz; Φ_D ≈ 2,125 | ✅ |

### 4. Digitális alapsávi átvitel
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| Háromszögspektrum, ISI-mentesség | `tg05_P52`, `kg07_2` | T = k/B | ✅ |
| Illesztett szűrők | `tg05_P53`, `kg07_3` | H_A = H_V = √(1 − \|fT\|) | ✅ |
| Időzítési hiba (0,99 és ±0,1) | `tg05_P55`, `kg07_4` | 0,79 / 0,39 / −0,41 | ✅ |
| Elemi jel 1,05 és 0,15, mintavétel T/4-nél | `tg05_G51`, `ea13_1`, `vz2020_05_26_Q2` (változat, 3T/4) | ±1,2, ±0,9; 4 szint alkalmas (margó 0,6), **8 szint nem** (a margó 0) | ✅ (az `ea13_1` megerősíti az `05` saját megoldását) |
| cos² spektrum, 833 µs, 1200 Hz | `tg05_G52`, `ea13_2` | α = 1, nincs ISI | ✅ |

### 5. Digitális vivős moduláció
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| OOK vs. BPSK | `tg06_P62`, `kg08_1` | P̄_OOK = A², P̄_BPSK = A²/2 | ✅ |
| QPSK-pontok (1,5;−1) … | `tg06_G63`, `kg08_2` | 11 10 10 11; 1,27-szeres erősítés; 11,31° | ✅ (a `kg` megerősíti az `05` saját megoldását) |
| QAM erősítés- és fázistűrése | `tg06_P63`, `kg08_3`, `02 §5.6–5.7` | 16-QAM: 2/3 és 2, **16,9°**; 64-QAM: 6/7 és 6/5, **7,7°**; 1024-QAM: 30/31 és 30/29, **1,82°** | ✅ |
| Sarokpontok áthelyezése | `tg06_P64`, `kg08_3` | 16-QAM: nem éri meg; 64-QAM: (7,7) → (9,1) megéri | ✅ |
| Doppler, 900 MHz | `tg06_P65`, `kg08_Doppler` | 4,5 Hz és 90 Hz; 0,0162° és 0,324° | ✅ |
| BPSK, f_s = ⅔·f_v | `ea13_5`, `tg06_G62` | másfél vivőperiódus szimbólumonként | ✅ |
| FSK/MSK, 22,2 és 24,2 kHz | `vz2020_06_02_Q3`, `vz2014_12_15_Q1`, `M1-T010` | f_D = 1 kHz; MSK esetén 4 kbit/s | ✅ |

### 9. Műsorszóró rendszerek
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| Kossuth, 540 kHz, 455 kHz-es KF | `tg08_P82`, `kg10_1` | 995 kHz / 1450 kHz; alsó keverés: 85 / 370 kHz | ✅ |
| CCIR, 10,7 MHz-es KF, Petőfi 94,8 MHz | `tg08_P81`, `kg10_2` | 98,2–118,7 MHz; 105,5; 116,2 MHz | ✅ |
| „A” hang a bal mikrofonban, adók száma | `tg08_P84–P85`, `kg10_3` | 440 Hz, 19 kHz, 37,56 és 38,44 kHz. Carson: 256 kHz (B = 53 kHz) vagy 270 kHz (B = 60 kHz) → ≈ 300 kHz → **68 adó** | ✅ (eltérő B-vel) |
| DVB-C, 64-QAM, α = 0,15, RS(204,188) | `kg10_4`, `F17`, `M7-T093`, `vz2014_12_15_Q7` | 6,96 MBd; 41,7 → **38,5 Mbit/s** (a `kg`-ben 38,74 elírás); 25 csatorna; RS d = 17 → 8 bájtot javít | ✅ |
| DVB-T | `kg10_5`, `5-ösöm P.9.2` (GI = 1/4, FEC 3/4 → 22,4 Mbit/s); `tg08` (GI = 1/32, FEC 7/8 → 31,67 Mbit/s) | 7,61 MHz, 5,4 MBd | ✅ (két paraméterkészlet) |
| DVB-S | `ea09`, `tg08` | 27,5 MBd QPSK = 55 Mbit/s bruttó; FEC 3/4 és RS után **≈ 38 Mbit/s** nettó; ≈ 37 MHz | ✅ (az `ea09` 38 Mb/s-ja a nettó érték) |

### 10–11. Mobil, forgalom, VoIP
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| N = 7, 70 FDM-csatorna | `vz2020_05_26_Q6`, `M1-T006`, `ea13_6` | 560 egyidejű hívás | ✅ |
| GSM 124 vivő × 8 időrés | `ea10`, `F19`, `5-ösöm` | 992 / **klaszter** (az `ea10`-ben „cellánként” ⚠️) | ⚠️ `ea10` |
| Roaming (α/β) | `vz2020_05_26_Q8`, `M1-T007`, `ea13_3` | lásd `02 §7.1`. Az `ea13_3` más kérdésváltozatot old meg (FNR, hordozott szám) | `[ELLENŐRIZENDŐ]` |
| VoIP, 10 byte / 5 ms, 47 byte fejléc | `F11`, `5-ösöm`, `02 §8.5` | 91,2 / 53,6 kbit/s | ✅ |
| VoIP, 5,3 kbit/s, 20 byte, 47 byte | `kg12_1` | 33,125 pps; 17,75 kbit/s | ✅ |
| G.729, késleltetési költségvetés | `kg12_2` | n ≤ 2; 50 pps; 26,8 kbit/s (+5% → 28,1) | ✅ |
| Exponenciális tartási idő, percdíj | `kg12_3`, `vz2016_01_12_Q3` (változat) | 0,3935 / 0,2387 / 0,1447 / 0,2231 | ✅ |
| Erlang-B, 40 Erl, 2% | `kg12_4` | **N = 50** (B = 1,87%); kihasználtság 78,4% | ✅ |
| Erlang-B, 14,565 Erl, 0,01% | `kg12_5` | **N = 31** (B = 0,0066%) | ✅ |

### 7. Hallás, látás
| Feladat | Előfordulás | Eredmény | Állapot |
|---|---|---|---|
| 1 W → 93 dB, fájdalomküszöb | `vz2020_05_26_Q5`, `M1-T005`, `ea13_7` | ≈ 500 W (120 dB); 120 phon; a 100 Hz-en mért 109 dB oka a frekvenciafüggés | ✅ |
| 10 kHz 10 dB, 1 kHz 30 dB, 100 Hz 0 dB | `tg07_P71`, `5-ösöm`, `vz2014_01_14_Q4` | 0 phon / 30 phon / nem hallható | ✅ |
| Y = 0,3R + 0,59G + 0,11B | `ea08`, `ea09`, `tg07` | – | ✅ |

---

## 4. A koma-anyag új tartalma (eddig sehol nem szerepelt)

Ezeket a régi fájlok még nem dolgozták fel. A következő kör ezeket építi be a megfelelő fejezetbe (`01`, `02`).

| Azonosító | Tartalom | Ellenőrzött eredmény |
|---|---|---|
| `kg04_3` | Γ meghatározása a vett teljesítmény ingadozásából | (1+\|Γ\|)/(1−\|Γ\|) = √(P_max/P_min) = 3 → \|Γ\| = 0,5; a h_R-periódus 5 m → h_T = rλ/(2·5) = 200 m |
| `kg04_4` | Parabolaantenna-nyaláb: G ≈ 4/α² (α = félszög), műholdas lefedés | 42,8 dB → α ≈ 0,83°; 2000 km-es folt → G_T ≈ 5123 = 37,1 dB |
| `kg06_3` | GPS-link | 166 dB → **6,3·10⁻¹⁶ W** |
| `kg06_2` | (7,3) kód d_min = 2 → 3 egy generátorsor módosításával | ellenőrizve: az új kód d_min-je 3 |
| `kg06_5 c)` | Nincs olyan 1 hibát javító C(5,2) kód, amelynek kódszava 11111 | **Tiszta bizonyítás (saját):** 11111 = g₁ + g₂, ezért B₁ ⊕ B₂ = 111. A d_min = 3 miatt g₁ = 10B₁ és g₂ = 01B₂ súlya ≥ 3, azaz B₁ és B₂ súlya ≥ 2. Két, egyenként ≥ 2 súlyú 3 bites vektor összege legfeljebb 2 súlyú lehet (mert legalább egy közös 1-esük van), tehát nem lehet 111. Ellentmondás. Szkripttel is ellenőrizve: egyetlen ilyen (B₁, B₂) pár sincs. |
| `kg06_6` | 5 fokozatú értékelés Huffman-kódja, 2 bit alatt | L̄ = H = 1,875 bit |
| `kg05_extra` | FM-rendszer tervezése, időfüggvény felírása | Φ_D ≈ 2,125; X = 3·10⁶, Z = 16 [kHz, ms] |
| `kg12_2` | VoIP késleltetési költségvetés (δ < 150 ms) | n ≤ 2 |
| `kg12_3` | Percdíjas számlázás exponenciális tartással | a fenti valószínűségek |
| `kg12_5` | Tartási idő paraméter P(L > t)-ből | λ = −ln0,6/1,5 = 0,34055 /perc, A = 14,565 Erl, N = 31 |
| `kg08_3` | 1024-QAM tűrése | 30/31 … 30/29; 1,82° |
| `ea05` | FM-demodulátorok (félrehangolt rezgőkör, ellenütemű diszkriminátor, nullátmenet-számláló, koincidencia, PLL), TDMA/FDMA/OFDM/CDMA | elmélet (kifejtős kérdéshez) |
| `ea08` | Hangszintek táblázata, elfedés (előelfedés 5–20 ms, utóelfedés ~100 ms), szem felépítése, színcsatornák | elmélet |
| `ea09` | LW/MW/SW/URH sávok, RDS 1187,5 b/s, DVB-változatok, SFN | elmélet |
| `ea10` | NMT, GSM-kodek (13 kb/s, 260 + 196 bit/20 ms = 22,8 kb/s), IMSI-előtagok, TMSI | elmélet |
| `ea11` | ABCDE5G, IoT, kiberfizikai rendszerek | kifejtős kérdés |

---

## 5. Forrásrangsor eltérés esetén

Az eredeti feldolgozási plan 1. pontja szerint:

1. Az **előadó saját anyaga** (Koma előadásjegyzete az előadó tábláiról, `ea`).
2. **Hivatalos dokumentumok** (TMIT-füzetek `tg`, OneDrive PDF `pd`).
3. Gyakorlati jegyzetek (`kg`), régi vizsgamegoldások (`vz`), md jegyzetek.

**Kivétel:** numerikus eredményeknél a független újraszámolás dönt, a rang nem. Ezért helyes a Pistike-kódnál a `kg` (2,35), és nem a hivatalos `pd`/`tg` (2,05). Az ilyen eltéréseket a `03_Hibajegyzek.md` E) része rögzíti.
