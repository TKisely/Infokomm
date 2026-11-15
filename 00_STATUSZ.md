# Infokomm – státusz és tartalomjegyzék

Utolsó frissítés: 2026-11-15

## A jegyzet: három példatár

| Példatár | Link | Tartalom | Forrás és ellenőrzés |
|---|---|---|---|
| **Infokomm példatár** (fő, elméleti alapokkal) | https://claude.ai/artifact/WnHjsiUtTy3B5H7YoVAyS4 | 2. és 6. fejezet kész (20 példa) | `html/data/ch02.js`, `ch06.js`, `check/verify_ch02.py`, `verify_ch06.py` (22 ellenőrzés) |
| **ALL-IN példatár** | https://claude.ai/artifact/D88X7FaNkocZWMMUNbom5i | az ALL-IN 1…145. oldala, 11 fejezet, 104 példa | `html/data/ai01…ai11.js`, `check/verify_allin.py` (117 ellenőrzés) |
| **5-ösöm példatár** | https://claude.ai/artifact/GJLVVebXiYeG1EDHCbJZnU | az „5-ösöm” 30 oldala, 10 fejezet, 49 példa | `html/data/o01…o10.js`, `check/verify_otosom.py` (105 ellenőrzés) |

Build: `cd html && node build.js` (fő), `node build.js allin`, `node build.js otos`. Minden példa a forrásoldal azonosítójával (`ai…`, `5o_…`) az átiratra mutat. 2026-11-15: mindhárom példatár átdolgozva a szabvány 5a pontja szerint (minden jel megnevezve, minden szám forrása a sor mellett). A fő példatár 6. fejezete (Kódolástechnika, 8 példa, a Kódolás előadás 12 tábláján alapul) ismeretlen munkamenetből került az élő oldalra. Az élő oldal KaTeX-annotációiból visszanyerve `html/data/ch06.js` lett, szövege betűre egyezik az élővel. Következő lépés: a három példatár összefésülése (`claude/OSSZEFESULES_terv.md`).

## Mappaszerkezet

| Fájl / mappa | Mi van benne | Mire használd |
|---|---|---|
| `00_STATUSZ.md` | ez a fájl | áttekintés, mi kész és mi nincs |
| `01_Kidolgozas_Kepletek_es_Receptek.md` | 12 témakör: képletek, megoldási lépések, csapdák | **tanulás és ismétlés, vizsga előtti átnézés** |
| `02_Regi_Vizsgafeladatok_Megoldasokkal.md` | 2014–2020-as vizsgafeladatok témakörönként, ellenőrzött megoldással és a javítók megjegyzéseivel; 10. „Példák #1” (Marosi), 11. mobil és forgalom, 12. Koma új feladatai | **gyakorlás**: előbb oldd meg magad, utána ellenőrizd |
| `03_Hibajegyzek.md` | a forrásokban talált hibák (A: régi md jegyzetek, B: hallgatói megoldások, C: hivatalos megerősítések, D: Koma jegyzetei, E: a hivatalos anyag hibái) | mielőtt régi megoldásból tanulsz |
| `04_Claude_ai_projekt_megallapitasok.md` | a claude.ai projekt chatje írta: témakörök, a hiányzó részek listája, a projektbeli PDF-kidolgozások hibái | a még be nem dolgozott pontok listája |
| `05_TMIT_Gyakorlatok_Kidolgozas.md` | a tanszéki gyakorlatanyag (gyak00–08) minden kidolgozott példája ellenőrizve, és **saját megoldás a gyakorló (G.) feladatokhoz** | **gyakorlás a hivatalos feladatokon** |
| `claude/INFOKOMM_feldolgozasi_standard.md` | a plan szerinti szabványdokumentum: forrásrangsor, jelölési döntések, szóhasználat, kész fejezetek, nyitott pontok, következő teendők | **a következő session ebből indul** |
| `06_Kereszthivatkozasok.md` | **végleges azonosítók**, témakör-mátrix (12 témakör × előadás, gyakorlat, TMIT, vizsga), azonos feladatok megfeleltetése egyezés-jelöléssel, a Koma-anyag új tartalma | **navigáció**: hol volt az elmélet, hol fordul még elő ugyanez |
| `Forrasok/Koma/` | `koma-eloadasok.md` (12 előadás) és `koma-gyakorlatok.md` (10 gyakorlat): Koma kézírásos jegyzeteinek átirata (2021 tavasz), változtatás nélkül | eredeti jegyzet; a hibái a `03` D) részében |
| `Forrasok/Marosi_2016/` | Marosi Gyula 2016-os gyakorlatai: `marosi_2016_atirat.md` (53 szkennelt oldal átirata: diák, kézírásos megoldások, `mgX_y` azonosítók). A két PDF csak helyben van meg | gyakorlatvezetői megoldások, köztük a **mobil- és forgalmi gyakorlat**, amely eddig hiányzott |
| `Forrasok/ALL-IN/` | `allin_atirat.md`: az ALL-IN-Infokomm-1.pdf **teljes, oldalankénti átirata** (175 oldal: Moodle-vizsgák 2020, hallgatói vizsgamegoldások 2014–2016, témakörös feladatgyűjtemény 1–10), minden feladat ellenőrizve, `ai…` azonosítókkal. A PDF csak helyben | a régi vizsgák teljes anyaga, javításokkal (`03` H) |
| `Forrasok/5-osom/` | `5osom_atirat.md`: az „5-ösöm lesz Infokommból” teljes átirata (30 oldal, `5o_…` azonosítók). Ugyanez az ALL-IN 146–175. oldala. A PDF csak helyben | témakörös gyűjtemény, sok beszkennelt oktatói megoldással |
| `Forrasok/Korabbi_md_jegyzetek/` | a `~/Downloads/infokomm_*.md` fájlok másolata, eredeti állapotban (javítás nélkül) | referencia; a hibáikat lásd a `03`-ban |
| `Forrasok/TMIT_gyakorlatok/` | `gyak00, 01, 02, 04, 05, 06, 07, 08.pdf` (tmit.bme.hu, letöltve 2026-11-15). **Csak helyben van meg, a GitHubra nem kerül fel** (tanszéki anyag, a `.gitignore` kizárja). Eredeti: `https://www.tmit.bme.hu/sites/default/files/attachments/gyakNN.pdf` | eredeti feladatszövegek és ábrák |

## Feldolgozott források

| Forrás | Hely | Állapot |
|---|---|---|
| 7 modul + 30 feladat (md) | `Forrasok/Korabbi_md_jegyzetek/` (eredeti: `~/Downloads`) | ✅ teljesen átnézve, számolások ellenőrizve |
| Hivatalos gyakorlati példatár, 1–5. gyak. | OneDrive: `InfoKomm összes/From Balázs/1-5 gyakorlatok.pdf` | ✅ beépítve a `01`-be |
| Képletgyűjtemény | `Local Sources/BME/Infokom/Infokommunikáció-képletek-FINAL.pdf` | ✅ beépítve a `01`-be |
| Régi vizsgák és megoldások | `ALL-IN-Infokomm-1.pdf` | ✅ **teljes oldalankénti átirat** (képek is): `Forrasok/ALL-IN/allin_atirat.md`. A szöveges rész korábban a `02`-be került |
| „5-ösöm lesz infokommból” | `5-ösöm-lesz-infokommból.pdf` | ✅ **teljes oldalankénti átirat**: `Forrasok/5-osom/5osom_atirat.md` |
| TMIT gyakorlatanyag gyak00–08 (03 nélkül) | `Forrasok/TMIT_gyakorlatok/` | ✅ a `05`-ben (a P-példák ellenőrizve, a G-feladatok kidolgozva) |
| Koma jegyzetei: 12 előadás, 10 gyakorlat (2021 tavasz, átirat) | `Forrasok/Koma/` | ✅ a `06`-ban kereszthivatkozva, az új tartalom beépítve az `01`-be és az `02` 11–12. fejezetébe |

**A TMIT-oldalon nem elérhető füzetek:** `gyak03`, valamint `gyak09`–`gyak14` (404, más néven sem találtam; a `gyak00`-t így találtam meg).
A témasorrend alapján a 03 a rádiós összeköttetés lehet. Ennek anyaga a OneDrive `1-5 gyakorlatok.pdf` 3. fejezetében van, és az `01` feldolgozza.
A 09+ füzetek (cellás mobil, VoIP, forgalom) anyagát a `02` 7–8. fejezete pótolja. Ha valahol megvannak (pl. Moodle), töltsd be őket, és kidolgozom.

## Még NEM feldolgozott források

- **Elméleti jegyzetek:** `Infokomm_jegyzet.pdf` (67 oldal), `Infokom__jegyzet.pdf` (165 oldal), OneDrive `Jelek_leírása.pdf`, `Mintavételezés_kvantálás.pdf`. Ezek a szóbelihez kellenek, a gyakorlati vizsgához kevésbé.
- `Section2Final06062013.pdf`: angol nyelvű általános RF-fizika, nem tárgyspecifikus.
- **Kézírásos fotók:** OneDrive `INFOKOMM/Gyakokról` (~45), `INFOKOMM/Konzis` (~11), `~/Downloads/BACKUP/INFOKOMM` (~60).
- **Videók** (2021-es gyakorlatok és konzultációk).
- **Korábbi INFOKOMM beszélgetések** a claude.ai INFOKOMM projektben: innen nem érhetők el.

## Nyitott `[ELLENŐRIZENDŐ]` tételek

1. FSK sávszélesség-konvenció: 2(f_D + 1/(2T)) vagy 2(f_D + 1/T) (`02` 5.2).
2. 8-PSK 72 MHz-ben: mekkora α-t vár el a feladat (`02` 5.4).
3. QAM-16 [160,100] 20 MHz: milyen α-val kell számolni (`02` 5.3).
4. Mezőkovácsháza: h_T = 40 m (sík terep) a helyes, és nem a 136 m (`02` 1.2).
5. 8-QAM konstellációk: a koordináták az átirat képéről olvasva (`ai2014_12_15_6`), a (b) ábra pontos alakja bizonytalan.
6. Call center d): kidolgozva `5o_30_1`-ben (P_B = 1,3%, a 18. munkatárs foglaltsága kb. 13%), a visszahívás tartási idejére tett feltevéssel.
7. Roaming-kérdés: az `ea13_3` más szövegváltozatot old meg, mint a Moodle-vizsga (`03` D4). Ide tartozik a `03` H18–H20 is (mozgás hívás közben, SMSC, EIR).
8. Az ALL-IN és az 5-ösöm átiratának további `[ELLENŐRIZENDŐ]` jelölései (21 + 8), a `03` H részében összegyűjtve.

## Következő lépések

Kész (2026-11-15): az ALL-IN és az 5-ösöm önálló HTML-példatára. Következik a három példatár összefésülése témakörönként, ismétlés nélkül.

A részletes lista a `claude/INFOKOMM_feldolgozasi_standard.md` 8–9. fejezetében van. Röviden:
1. A nyitott pontok tisztázása (a Φ-jelölés eldöntve: mindkét alak szerepel).
2. A könyvszerű HTML-oldal (KaTeX, build.js) a plan 4–7. pontja szerint, fejezetenként, az első fejezet a mintavételezés és kvantálás.
