# INFOKOMM feldolgozási szabvány

Utolsó frissítés: 2026-11-15. Ez a dokumentum rögzíti a feldolgozás szabályait és döntéseit. Minden session végén frissül.
Az eredeti feldolgozási utasítás (plan) 0–8. pontja érvényes, itt csak a végrehajtás döntései és állapota szerepel.

---

## 1. Források és rangsoruk

| Rang | Forrás | Azonosító | Hely |
|---|---|---|---|
| 1 | Az előadó anyaga: Koma előadásjegyzete (Varga Pál, 2021, a táblák átirata) | `eaNN` | `Forrasok/Koma/koma-eloadasok.md` |
| 2 | Hivatalos dokumentumok: TMIT gyakorlatanyag (gyak00–08), OneDrive `1-5 gyakorlatok.pdf`, képletgyűjtemény | `tgNN_Px/Gx`, `pdNN_x` | `Forrasok/TMIT_gyakorlatok/` (csak helyben), OneDrive |
| 3 | Gyakorlatvezetői megoldások: Marosi Gyula 2016 (diák és kézírás) | `mg…` | `Forrasok/Marosi_2016/` |
| 3 | Gyakorlati jegyzet: Koma gyakorlatjegyzete (2021) | `kgNN_x` | `Forrasok/Koma/koma-gyakorlatok.md` |
| 4 | Régi vizsgák és hallgatói megoldások (ALL-IN, 5-ösöm), régi md jegyzetek | `vz…`, `Mx-Tyyy`, `Fz` | `Local Sources/BME/Infokom/`, `Forrasok/Korabbi_md_jegyzetek/` |

**Eltérés esetén:**
- Fogalmi és szóhasználati kérdésben a magasabb rang dönt.
- **Numerikus eredménynél a független újraszámolás dönt**, a rang nem (lásd `03` E1: a hivatalos füzet hibás, a Koma-jegyzet és Marosi megoldása helyes).
- Minden eltérés a `03_Hibajegyzek.md`-be kerül.

**Hiányzó források:** a tantárgyi adatlap és a heti tematika (a 2016-os TAD elavult). A TMIT gyak03 és gyak09+ nem érhető el. Koma 9. és 11. gyakorlata, valamint 12. előadása hiányzik. Hiányoznak a kézírásos OneDrive-fotók és a 2021-es videók is.

---

## 2. Azonosítók

A teljes séma a `06_Kereszthivatkozasok.md` 1. fejezetében van. Az azonosítók véglegesek, közzététel után nem változnak.
A HTML-oldal szakaszazonosítói ezekből képződnek ékezet nélkül (pl. `mgP_4` → `mgp_4`, `tg06_P63` → `tg06_p63`).

---

## 3. Jelölési döntések

| Jel | Jelentés ebben az anyagban | Ütközés a forrásokban | Döntés |
|---|---|---|---|
| **C** | csúcstényező | a források c-t és C-t is írnak; c egyben a fénysebesség és a hangsebesség | csúcstényező: **C**, terjedési sebesség: **c** |
| **L̄** | átlagos kódszóhossz | Marosi λ-val jelöli, ez ütközik a hullámhosszal | átlagos kódszóhossz: **L̄**, hullámhossz: **λ** |
| **Φ(x)** | a standard normális eloszlás **komplementer** eloszlásfüggvénye, P_e = Φ(h₀/σ) | a TMIT gyak05 komplementert ír; Koma, Marosi és az `01` Φ(−h₀/σ)-t (sima eloszlásfüggvényt) | **Eldöntve (2026-11-15):** mindkét alak szerepel, egymás mellett: p = Φ(−h₀/σ) (sima eloszlásfüggvény: előadás, Koma, Marosi) és p = Φ(h₀/σ) (komplementer: TMIT gyak05), egy plusz sorral, hogy melyik Φ melyik. Q(x) nem kerül be új jelként |
| **Φ_D** | fázislöket [rad] | Koma m_p-nek, Marosi Φ_D-nek, a képletgyűjtemény φ_D-nek írja | **Φ_D**. A modulációs index m_f = Φ_D (szinuszos FM) |
| **f_D** | frekvencialöket [Hz] | Koma m_f-et is ír rá (rad/s) | **f_D** Hz-ben |
| **m** | AM modulációs mélység | – | **m** |
| **Γ** | reflexiós tényező | – | **Γ** |
| **α** | emelt koszinusz lekerekítési tényezője | antennanyalábnál nyílásszög is | lekerekítés: **α**, nyílásszög: **ϑ** (félszög ϑ/2) |
| **T** | jelzési idő | szűrőkésleltetés is | jelzési idő: **T**, késleltetés: **τ** |
| **p₀** | hangnyomás-referencia (20 µPa) | Koma a légköri nyomásra is p₀-t ír | referencia: **p₀ = 20 µPa**, légköri: **p_atm** |
| **B** | a moduláló vagy alapsávi jel sávszélessége | a modulált jel sávszélessége B_össz, B_v, BW | moduláló: **B**, modulált: **B_v** |
| **A** | felajánlott forgalom [Erl] | AM-nél az oldalsáv-amplitúdó is A | forgalom: **A**, moduláló amplitúdó: **U_m** |

---

## 4. Szóhasználati táblázat

| A tárgy szava | Előforduló változatok | Megjegyzés |
|---|---|---|
| szakaszcsillapítás | path loss | |
| interferenciazóna | interferencia zóna | |
| csúcstényező | crest factor | |
| szimbólumközti áthallás (ISI) | szimbólumok közötti áthallás | |
| emelt koszinuszos (spektrum) | raised cosine, lekerekítés, roll-off | |
| középfrekvencia (KF) | IF | |
| tükörfrekvencia | | |
| felső / alsó keverés | | |
| kódszóhossz | kódhossz | |
| paritásellenőrző mátrix | hibamátrix (Koma) | |
| dúsítás | redundancia hozzáadása | Koma szava, a hibavédő kódolásnál |
| felajánlott / lebonyolított forgalom | Y_N | |
| hívásátadás (HO) | handover | |
| helyzetfrissítés (LU) | location update | |
| személyhívás (paging) | | |

---

## 5. Szövegszabályok (plan 6. pont)

- A végleges HTML látható szövegében nincs gondolatjel és nincs pontosvessző. Tizedesvessző kell.

### 5a. Kidolgozási szabály: minden lépés követhető (2026-11-15, a felhasználó kérése)
A tömör „képlet = szám” megoldás nem elfogadható. Minden példában:
1. **Adott és Keresett** lista: minden jel neve, jelentése és mértékegysége (pl. „$\Phi_D$: fázislöket, a fázis legnagyobb eltérése a vivőétől, rad”), és hogy a feladat melyik részéből jön.
2. **Minden behelyettesített szám mellett ott a forrása**: a feladat szövege, leolvasás az ábráról, melyik korábbi lépés eredménye.
3. **Minden képlet mellett, hogy miért alkalmazható** (melyik modell, milyen feltétel teljesül).
4. **A 2–3 apró közbenső lépés is kiírva**: átrendezés, egységváltás (pl. ms és kHz), azonosság (pl. $\cos a\cos b$).
5. **Minden eredmény a kérdéséhez kötve**: „a)”, „b)” betűvel és egy mondattal, mire válasz.
6. A szöveges kérdésekre (miért, mi a szerepe) is indokolt válasz, nem csak kulcsszó.
- **A jelenlegi md munkafájlok (`00`–`06`) még nem felelnek meg ennek**: van bennük gondolatjel és pontosvessző. A HTML-buildnél ezeket át kell fogalmazni, a forrásfájlokat (`Forrasok/`) nem módosítjuk.

---

## 6. Kész fejezetek

| Fájl | Állapot |
|---|---|
| `01` képletek és receptek | 12 témakör. Beépítve: TMIT, képletgyűjtemény, Koma, Marosi (mobil, forgalom, FM, SSB, SFN, színjelek) |
| `02` régi vizsgák | 9 témakör + 10. „Példák #1” + 11. mobil/forgalom + 12. Koma új feladatai |
| `03` hibajegyzék | A–G részek |
| `05` TMIT gyak00–08 | kész, a G-feladatokra saját megoldás |
| `06` kereszthivatkozások | Koma, TMIT, Marosi, vizsgák megfeleltetése |
| ALL-IN példatár | 11 fejezet, 104 példa: https://claude.ai/artifact/D88X7FaNkocZWMMUNbom5i · `html/data/ai*.js`, `check/verify_allin.py` |
| 5-ösöm példatár | 10 fejezet, 49 példa: https://claude.ai/artifact/GJLVVebXiYeG1EDHCbJZnU · `html/data/o*.js`, `check/verify_otosom.py` |
| Átiratok | `Forrasok/ALL-IN/allin_atirat.md` (175 oldal), `Forrasok/5-osom/5osom_atirat.md` (30 oldal), javítások: `03` H |
| HTML-oldal („Infokomm példatár”) | **2. fejezet kész** (9 alap, 12 példa), közzétéve: https://claude.ai/artifact/WnHjsiUtTy3B5H7YoVAyS4 · forrás: `html/` (`build.js`, `data/ch02.js`, `check/verify_ch02.py`) |

---

## 7. Javítások

A központi lista a `03_Hibajegyzek.md`. Ami különösen fontos:
- **E1:** a Pistike-kód L̄ = 2,35, nem 2,05 (hivatalos hiba).
- **G4/A6:** a legtávolabbi minimum 2h_Th_R/λ, a maximum (az interferenciazóna határa) 4h_Th_R/λ.
- **QAM fázistűrés:** 16,9° / 10,6° / 7,7° / 1,82°.

---

## 8. Nyitott pontok

2. A `00_STATUSZ.md` 1–7. `[ELLENŐRIZENDŐ]` tétele.
3. Marosi-átirat 4 olvasási kérdése (az átirat végén).
4. RS/FEC szerepkiosztás a DVB-ben (`03` G3).
5. A TV-sorszám páratlanságának indoklása (`mg12_5`).
6. Hiányzó források: tematika és adatlap, TMIT gyak03/09+, OneDrive-fotók.

---

## 9. A következő session teendői

0. **A három példatár összefésülése** (a felhasználó terve): témakörönként egy közös fejezetszerkezet, minden feladattípus egyszer, a duplikátumok forrásai a „Forrás” sorban összevonva. A gyűjtemény-példatárak kompakt példaformátuma (`gy`: a gyűjtemény megoldása, `fix`: javítás, opcionális Adott/Keresett/Miért/elmélet) a `build.js`-ben már támogatott.

1. A nyitott pontok tisztázása a felhasználóval.
2. A következő HTML-fejezet (javasolt sorrend: 6. Kódolás, 8. Rádiós összeköttetések, 3. Analóg moduláció, 4–5. Digitális átvitel, 9. Műsorszórás, 10–11. Mobil és forgalom, 7. Hallás és látás, 1. Jelek). Fejezetenként: `data/chNN.js`, `check/verify_chNN.py`, build, böngészős ellenőrzés, újraközzététel ugyanarra az URL-re.
3. A build menete: `cd html && npm install && node build.js && python3 -I check/verify_ch02.py`. A kimenet `dist/infokomm_peldatar.html` (artifact) és `dist/index.html` (önálló).
