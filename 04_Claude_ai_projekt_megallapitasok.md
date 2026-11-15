---
title: "Megállapítások a claude.ai „Infokomm Vizsga” projektből"
keszult: 2026-11-15
---

# Megállapítások a claude.ai „Infokomm Vizsga” projektből

Ezt a fájlt a claude.ai projekt chatje írta, hogy a helyi munka lássa az ott talált eredményeket.
A 00 és 03 fájlt nem módosítottam.

## 1. A tárgy 12 témaköre (YouTube: @infokommunikacio8986, zárójelben a videók száma)

1. Jelek leírása (4)
2. Mintavételezés és kvantálás (5)
3. Analóg modulációs eljárások (7)
4. Digitális alapsávi moduláció (5)
5. Digitális vivős moduláció (5)
6. Kódolástechnika (7)
7. Hallás/Látás (6)
8. Rádiós összeköttetések (6)
9. Műsorszóró rendszerek (8)
10. Cellás mobiltelefónia (8)
11. Forgalmi méretezés és VoIP (7)
12. Extra gyakorlat (5)

A 2016-os TAD (VITMAB03) elavult, a kódolás és a műsorszórás nincs benne, de a vizsgákon szerepel. A vizsga írásbeli: 3 számpélda, 1 kifejtős kérdés, 10 fogalom.

## 2. Ellenőrzés a 01 fájlon

Újraszámoltam: CRC (001, 110, 000), Erlang-B (64, 7, 4, 198), QAM fázistűrés (16,9°, 10,6°, 7,7°), 8-QAM csillag (4,73A²), DVB-T (7,61 MHz, 22,4 Mbit/s). Mind helyes.

## 3. Ami a 01 és 02 fájlból hiányzik

- **Teletext (hivatalos P.8.7):** 24 sor/oldal, 500 oldalas ciklus, 50 félkép/s × 10 sor = 500 sor/s, 500/24 = 20,83 oldal/s. Legrosszabb eset 24 s, átlag kb. 12 s. (Egy claude.ai kidolgozásban hibásan 25 sorral és 100 oldallal 2,5 s szerepel.)
- **Szótáras tömörítés (LZ78):** (prefix index, új bit) párok, üres szótárral. Nem LZW, ott csak indexek mennek át, és a szótár az ábécével indul.
- **Illesztett szűrő (gyak05):** fehér zajnál az optimális vevőszűrő a bejövő elemi jel spektrumának komplex konjugáltja (késleltetéssel). σ² arányos N0-val, a hibavalószínűség az elemi jel energiája és N0 arányától függ.
- **Φ jelölés:** a hivatalos gyak05 Φ-n a komplementer eloszlásfüggvényt érti, Pe = Φ(h0/σ). A 01 a Φ(−h0/σ) alakot használja. Értékre ugyanaz, a vizsgán egyet kell következetesen használni.
- **Hallás:** maszkolás (frekvenciabeli, időbeli elő és utómaszkolás), irányhallás (időkülönbség 1,5 kHz alatt, szintkülönbség felette).
- **Látás:** CIE színháromszög, domináns hullámhossz, színtartalom, additív színkeverés (gyak07 P.7.4 és P.7.5). Képek információtartalma.
- **Mobil:** S/I a klaszterméretből: D/R = √(3N), S/I ≈ (√(3N))^γ / 6, γ ≈ 4. Rayleigh fading. A 01-ben csak D = √(3N)·R van.
- **Műsorszórás:** rádiós sávok (LW, MW, SW, CCIR 87,5 és 108 MHz között), P.8.5 állomásszám (75 kHz löket, kb. 300 kHz sztereó sáv), P.8.9 DAB visszhang (125 µs, 8 kHz periódusú átvitel).

## 4. Hivatalos gyakorlatanyag, ami helyben nincs meg

A OneDrive „1-5 gyakorlatok.pdf” csak az 1., 2., 3., 4. és 5. gyakorlatot tartalmazza. A TMIT oldalán nyilvánosan elérhető a többi:

- https://www.tmit.bme.hu/sites/default/files/attachments/gyak06.pdf (Digitális modulációs eljárások)
- https://www.tmit.bme.hu/sites/default/files/attachments/gyak07.pdf (Hang, hallás, kép, látás)
- https://www.tmit.bme.hu/sites/default/files/attachments/gyak08.pdf (Műsorszóró rendszerek)

## 5. A claude.ai projektben lévő kidolgozások (helyben nincsenek meg)

Hét PDF kidolgozás, mind átnézve. A fő hibáik:

- **Digitális alapsávi átvitel:** „szóbeli” keret, pedig írásbeli a vizsga. A 3. ábra α = 1 görbéje hibás (lapos teteje van). „|νk| > h0” pontatlan (rossz irányú is kell). Hiányzik az illesztett szűrő, a szemábra, az L szintű Pe.
- **Digitális vivős modulációs jelek:** a tengelyes QPSK címkézése nem Gray kódú.
- **Analóg modulációs eljárások:** rendben, a QAM előjele (I·cos − Q·sin) eltér a vivős anyagétól.
- **Cellás mobiltelefónia:** IMSI 216 30 a Telekom (nem Yettel), MS = ME + SIM (a UE 3G-s). Csak az első videót fedi le.
- **Hang és látás:** p0 két jelentésben (légköri nyomás és 20 µPa). A beszéd hiányzik.
- **Jegyzet és gyakorlatanyag kidolgozás:** teletext rossz (lásd fent), LZW helyett LZ78, a fejlécben BMEVIMM4084 áll.
- **Vizsgakidolgozás és típusfeladatok:** a 8-QAM értékek ugyanaz a hiba, mint a 03 hibajegyzék B8 tétele. A (7,4) mátrixok olvashatatlanok.
