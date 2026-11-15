# Infokomm – státusz és tartalomjegyzék

Utolsó frissítés: 2026-11-15

## A jegyzet

**Infokomm példatár** (könyvszerű HTML, az EMTA-jegyzet szerkezetében): https://claude.ai/artifact/WnHjsiUtTy3B5H7YoVAyS4 · forrás és build: `html/`. Kész: 2. Mintavételezés és kvantálás (9 alapozó szakasz, 12 ellenőrzött példa). A többi fejezet ebből a fájlokból készül, fejezetenként.

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
| `Forrasok/Korabbi_md_jegyzetek/` | a `~/Downloads/infokomm_*.md` fájlok másolata, eredeti állapotban (javítás nélkül) | referencia; a hibáikat lásd a `03`-ban |
| `Forrasok/TMIT_gyakorlatok/` | `gyak00, 01, 02, 04, 05, 06, 07, 08.pdf` (tmit.bme.hu, letöltve 2026-11-15). **Csak helyben van meg, a GitHubra nem kerül fel** (tanszéki anyag, a `.gitignore` kizárja). Eredeti: `https://www.tmit.bme.hu/sites/default/files/attachments/gyakNN.pdf` | eredeti feladatszövegek és ábrák |

## Feldolgozott források

| Forrás | Hely | Állapot |
|---|---|---|
| 7 modul + 30 feladat (md) | `Forrasok/Korabbi_md_jegyzetek/` (eredeti: `~/Downloads`) | ✅ teljesen átnézve, számolások ellenőrizve |
| Hivatalos gyakorlati példatár, 1–5. gyak. | OneDrive: `InfoKomm összes/From Balázs/1-5 gyakorlatok.pdf` | ✅ beépítve a `01`-be |
| Képletgyűjtemény | `Local Sources/BME/Infokom/Infokommunikáció-képletek-FINAL.pdf` | ✅ beépítve a `01`-be |
| Régi vizsgák és megoldások | `Local Sources/BME/Infokom/ALL-IN-Infokomm-1.pdf` (szöveges része) | ✅ a `02`-ben |
| „5-ösöm lesz infokommból” | `Local Sources/BME/Infokom/5-ösöm-lesz-infokommból.pdf` (szöveges része) | ✅ a `02`-ben |
| TMIT gyakorlatanyag gyak00–08 (03 nélkül) | `Forrasok/TMIT_gyakorlatok/` | ✅ a `05`-ben (a P-példák ellenőrizve, a G-feladatok kidolgozva) |
| Koma jegyzetei: 12 előadás, 10 gyakorlat (2021 tavasz, átirat) | `Forrasok/Koma/` | ✅ a `06`-ban kereszthivatkozva, az új tartalom beépítve az `01`-be és az `02` 11–12. fejezetébe |

**A TMIT-oldalon nem elérhető füzetek:** `gyak03`, valamint `gyak09`–`gyak14` (404, más néven sem találtam; a `gyak00`-t így találtam meg).
A témasorrend alapján a 03 a rádiós összeköttetés lehet. Ennek anyaga a OneDrive `1-5 gyakorlatok.pdf` 3. fejezetében van, és az `01` feldolgozza.
A 09+ füzetek (cellás mobil, VoIP, forgalom) anyagát a `02` 7–8. fejezete pótolja. Ha valahol megvannak (pl. Moodle), töltsd be őket, és kidolgozom.

## Még NEM feldolgozott források

- **Képként beágyazott feladatszövegek és ábrák** az `ALL-IN` és az `5-ösöm` PDF-ben (oszcilloszkóp-képek, konstellációk, GSM-ábrák, a PAM elemi jele, Erlang-grafikon). A `02`-ben `[ÁBRA SZÜKSÉGES]` jelöli őket.
- **Az ALL-IN „Infokommunikáció feladatok” része** (1.1–10.x, a példatár sorszámai szerint). Ennek csak a szöveges megjegyzései vannak meg, maguk a feladatok képek.
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
5. 8-QAM konstellációk: az ábra kell hozzá (`02` 5.8).
6. Call center d): a visszahívás tartási ideje (`02` 8.3).
7. Roaming-kérdés: az `ea13_3` más szövegváltozatot old meg, mint a Moodle-vizsga (`03` D4).

## Következő lépések

A részletes lista a `claude/INFOKOMM_feldolgozasi_standard.md` 8–9. fejezetében van. Röviden:
1. A nyitott pontok tisztázása (a Φ-jelölés eldöntve: mindkét alak szerepel).
2. A könyvszerű HTML-oldal (KaTeX, build.js) a plan 4–7. pontja szerint, fejezetenként, az első fejezet a mintavételezés és kvantálás.
