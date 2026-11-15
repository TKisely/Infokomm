---
module_id: "05_gsm_es_mobil"
title: "Infokommunikáció - 5. Modul: GSM hálózati architektúra, cellás elrendezés, FRF és mobil rendszerek"
task_count: 15
schema_version: "1.0"
---

# 5. Modul: GSM hálózati architektúra, cellás elrendezés, FRF és mobil rendszerek

## Task_061
- **ID:** M5_T061
- **Topic:** GSM hálózati architektúra és alrendszerek
- **Type:** Theory

### Question
Ismertesse a GSM mobiltelefon-hálózat fő alrendszereit (BSS, NSS, OSS) és a benne található legfontosabb hálózati elemeket (MS, BTS, BSC, MSC, HLR, VLR, AuC, EIR) és azok feladatát!

### Solution
- **BSS (Base Station Subsystem - Rádiós alrendszer):**
  - **MS (Mobile Station):** Az előfizetői készülék és a SIM-kártya együttese.
  - **BTS (Base Transceiver Station):** Bázisállomás, amely a rádiós összeköttetésért (RF adás/vétel, moduláció, csatornakódolás) felelős egy vagy több cellában.
  - **BSC (Base Station Controller):** Bázisállomás-vezérlő, amely több BTS-t irányít, felelős a rádióerőforrás-kezelésért, handover (átadás) döntésekért és teljesítményszabályozásért.
- **NSS (Network and Switching Subsystem - Kapcsolási alrendszer):**
  - **MSC (Mobile Switching Centre):** Mobil kapcsolóközpont, a hívásfelépítést, útvonalválasztást és kapcsolást végzi a mobil és vezetékes hálózatok között.
  - **HLR (Home Location Register):** Honos tartózkodási nyilvántartó, az előfizetők állandó törzsadatait és aktuális tartózkodási helyét (VLR címét) tároló adatbázis.
  - **VLR (Visitor Location Register):** Látogatott tartózkodási nyilvántartó, az adott MSC körzetében éppen tartózkodó mobilok ideiglenes adatait tárolja.
  - **AuC (Authentication Centre):** Hitelesítési központ, a SIM-kártyák azonosításához szükséges biztonsági kulcsokat (Ki, RAND, SRES, Kc) generálja.
  - **EIR (Equipment Identity Register):** Készülékazonosító nyilvántartó, az IMEI számok alapján szűri a lopott vagy hibás készülékeket (fehér, szürke, fekete lista).

---

## Task_062
- **ID:** M5_T062
- **Topic:** GSM hívásfelépítés és MSRN roaming szám
- **Type:** Calculation / Process

### Question
Vázolja fel a hívásjelzés menetét, amikor egy vezetékes hálózati előfizető hív egy GSM mobil előfizetőt! Mi a szerepe az MSRN (Mobile Station Roaming Number) számnak?

### Solution
1. A hívás a hívott mobil száma (MSISDN) alapján az átjáró kapcsolóközponthoz (**GMSC**) érkezik.
2. A GMSC lekérdezi a hívott előfizető honos adatbázisát (**HLR**).
3. A HLR-ben tárolt információ alapján kiderül, melyik **VLR** körzetében van a mobil, és a HLR lekéri a VLR-től az ideiglenes roaming számot (**MSRN**).
4. A VLR lefoglal egy MSRN-t, és visszaküldi a HLR-en keresztül a GMSC-nek.
5. A GMSC az MSRN alapján továbbítja a hívást a látogatott **MSC**-hez.
6. A látogatott MSC a BSC-ken és BTS-eken keresztül személyhívást (**Paging**) bocsát ki a cellákban.
7. A mobil válaszol a személyhívásra, megtörténik a hitelesítés és a hívásfelépítés.

---

## Task_063
- **ID:** M5_T063
- **Topic:** GSM roaming architektúra
- **Type:** Theory

### Question
Két GSM szolgáltató ($lpha$ és $eta$) hálózatában MS-A1 és MS-A2 is az $lpha$ hálózat előfizetője, de MS-A2 a $eta$ hálózatban barangol (roaming). MS-A1 hívja MS-A2-t.
(a) Melyik hálózati eszközhöz érkezik először információ MS-A1 hívásindításáról?
(b) Melyik HLR kerül lekérdezésre a híváshoz kötődően?
(c) Melyik eszközök szereznek tudomást MS-A2 $eta$-hálózatbeli mozgásáról?
(d) Melyik eszköz segítségével kerül azonosításra MS-A1 SIM-kártyája?

### Solution
(a) **$lpha$-BTS** (MS-A1 a saját hálózatának bázisállomásán keresztül indítja a hívást).
(b) **$lpha$-HLR** (mivel mindkét előfizető az $lpha$ hálózat honos előfizetője).
(c) Az **$lpha$-HLR** (helyfrissítéskor értesül), valamint a látogatott hálózatban lévő **$eta$-MSC** és **$eta$-VLR**.
(d) **$lpha$-AuC** (az $lpha$ hálózat hitelesítő központja).

---

## Task_064
- **ID:** M5_T064
- **Topic:** Cellás elrendezés és Frequency Reuse Factor (FRF)
- **Type:** Calculation

### Question
a) Rajzoljon egy $N=7$ Frequency Reuse Factor-ral rendelkező klasztert!
b) Mekkora a társcsatornás cellák középpontjai közötti $D$ védőtávolság a cellasugár ($R$) függvényében?
c) Mi az FRF növelésének előnye és hátránya?

### Solution
a) Egy klaszter $N=7$ szabályos hatszög alakú cellából áll ($f_1, f_2, \dots, f_7$ frekvenciacsoportokkal).
b) A társcsatornás (azonos frekvenciát használó) cellák távolsága:
$$D = \sqrt{3N} \cdot R = \sqrt{3 \cdot 7} \cdot R = \sqrt{21} \cdot R pprox 4{,}58 \cdot R$$
c) 
- **Előny:** A nagyobb $D/R$ arány miatt nő a társcsatornás elnyomási arány (C/I), csökken a társcsatornás interferencia.
- **Hátrány:** Egy cellára kevesebb csatorna jut ($C_{	ext{cella}} = C_{	ext{összes}} / N$), ami csökkenti a hálózat specifikus kapacitását.

---

## Task_065
- **ID:** M5_T065
- **Topic:** GSM klaszterkapacitás számítása
- **Type:** Calculation

### Question
Egy GSM 900 MHz-es szolgáltató $70	ext{ FDM}$ csatornával rendelkezik a hálózatában. Az alkalmazott klaszterméret $N=7$.
a) Hány FDM csatorna jut egyetlen cellára?
b) Hány egyidejű aktív beszédcsatorna érhető el a teljes klaszterben?

### Solution
a) A cellánkénti FDM csatornák száma:
$$C_{	ext{cella}} = rac{70}{N} = rac{70}{7} = 10	ext{ FDM csatorna/cella}$$
b) A GSM 900 szabványban 1 FDM csatorna (200 kHz sávszélesség) $8	ext{ TDMA}$ időrést hordoz:
$$N_{	ext{aktív}} = 70	ext{ FDM csatorna} 	imes 8	ext{ időrés/csatorna} = \mathbf{560	ext{ egyidejű beszélgetés}}$$

---

## Task_066
- **ID:** M5_T066
- **Topic:** GSM Handover (hívásátadás) típusok
- **Type:** Theory

### Question
Nevezze meg és jellemezze a GSM hálózatban előforduló négy fő handover (átadás) típust az érintett hálózati elemek alapján!

### Solution
1. **Intra-cell Handover:** Csatornaváltás ugyanazon a cellán (BTS-en) belül (pl. interferencia miatt). A BSC vezérli.
2. **Inter-cell / Intra-BSC Handover:** Átadás két szomszédos cella között, amelyek ugyanahhoz a BSC-hez tartoznak. A BSC hajtja végre.
3. **Inter-BSC / Intra-MSC Handover:** Átadás két olyan cella között, amelyek különböző BSC-khez, de ugyanahhoz az MSC-hez tartoznak. Az MSC koordinálja.
4. **Inter-MSC Handover:** Átadás két különböző MSC körzetébe tartozó cella között. Összetett folyamat, az MSC-k közötti jelzésváltással.

---

## Task_067
- **ID:** M5_T067
- **Topic:** GSM csatornatípusok és logikai csatornák
- **Type:** Theory

### Question
Rendszerezze a GSM logikai csatornáit! Milyen fő csoportokra oszlanak, és mi a feladatuk?

### Solution
- **Közgalmi csatornák (Traffic Channels - TCH):**
  - **TCH/F (Full Rate):** $22{,}8	ext{ kbit/s}$ brutto sebességű beszédet/adatot hordoz.
  - **TCH/H (Half Rate):** $11{,}4	ext{ kbit/s}$ félig terhelt csatorna.
- **Vezérlőcsatornák (Control Channels - CCH):**
  - **BCH (Broadcast Channels):**
    - **FCCH:** Frekvencia-szinkronizáció.
    - **SCH:** Keret-szinkronizáció és BSIC (bázisállomás azonosító).
    - **BCCH:** Hálózati rendszerspecifikus információk sugárzása.
  - **CCCH (Common Control Channels):**
    - **PCH (Paging Channel):** Személyhívás hívott mobil keresésére.
    - **RACH (Random Access Channel):** Mobil által indított véletlen hozzáférés.
    - **AGCH (Access Grant Channel):** Csatolási válasz dedicated csatorna kijelölésére.
  - **DCCH (Dedicated Control Channels):**
    - **SDCCH:** Standalone dedicated signaling (hitelesítés, helyfrissítés, hívásfelépítés).
    - **SACCH:** Slow Associated CCH (mérések, teljesítményszabályozás hívás közben).
    - **FACCH:** Fast Associated CCH (sürgős jelzésváltás, pl. Handover).

---

## Task_068
- **ID:** M5_T068
- **Topic:** GSM TDMA keretstruktúra és burst típusok
- **Type:** Calculation / Theory

### Question
a) Ismertesse a GSM TDMA keret felépítését (időrés hossza, keretidő, bitsebesség)!
b) Sorolja fel a GSM hálózatban használt burst (időrés-tartalom) típusokat!

### Solution
a) 
- 1 TDMA keret $8	ext{ időrésből (Time Slot - TS 0..7)}$ áll.
- 1 időrés hossza: $T_{TS} = rac{156{,}25	ext{ bit}}{270{,}833	ext{ kbit/s}} pprox 0{,}577	ext{ ms}$.
- 1 TDMA keretidő: $T_{frame} = 8 	imes 0{,}577	ext{ ms} pprox 4{,}615	ext{ ms}$.
- A modulációs bitsebesség: $270{,}833	ext{ kbit/s}$.

b) **Burst típusok:**
1. **Normal Burst:** Általános adat- és beszédátvitelre ($116	ext{ hasznos bit} + 26	ext{ bit tanító szekvencia}$).
2. **Frequency Correction Burst:** Csupa nullát tartalmazó jel a vevő frekvencia-szinkronizációjához.
3. **Synchronization Burst:** Hosszú tanító szekvenciát hordoz a TDMA keretszinkronhoz.
4. **Access Burst:** Hosszú védőidővel rendelkező burst a RACH csatornán véletlen hozzáféréshez.
5. **Dummy Burst:** Kitöltő burst, ha nincs aktív adás.

---

## Task_069
- **ID:** M5_T069
- **Topic:** GSM moduláció (GMSK)
- **Type:** Theory

### Question
Milyen modulációs eljárást alkalmaz a GSM hálózat? Miért erre az eljárásra esett a választás?

### Solution
A GSM hálózat **GMSK (Gaussian Minimum Shift Keying)** modulációt alkalmaz ($BT = 0{,}3$ szűrőparaméterrel).
- **Előnyei:**
  1. **Állandó burkolójú jel:** Lehetővé teszi a nemlineáris, de nagy hatásfokú C-osztályú teljesítményerősítők használatát a mobilkészülékekben (hosszabb akkumulátor-élettartam).
  2. **Keskeny spektrum:** A Gauss-szűrő elnyomja a másodlagos spektrális oldalhurkokat, csökkentve a szomszédos csatornás interferenciát (ACI).
  3. **Folytonos fázisú FSK (CPFSK):** Megelőzi a fázisugrásokat.

---

## Task_070
- **ID:** M5_T070
- **Topic:** GSM DTX, VAD és CNG mechanizmus
- **Type:** Theory

### Question
Magyarázza meg a VAD (Voice Activity Detection), DTX (Discontinuous Transmission) és CNG (Comfort Noise Generation) szerepét a GSM rendszerekben!

### Solution
- **VAD (Beszédaktivitás-detektor):** Figyeli a mikrofon jelét, és megállapítja, hogy az előfizető éppen beszél-e vagy hallgat.
- **DTX (Meggátolt adás):** Ha a VAD csendperiódust detektál, leállítja az adó működését. Ez jelentős akkumulátor-megtakarítást eredményez a mobilban, és csökkenti a hálózati interferenciát.
- **CNG (Komfortzaj-generátor):** Csendperiódusban a vevő oldalon mesterséges háttérzajt generál, hogy a hallgató ne érezze úgy, mintha megszakadt volna a vonal.

---

## Task_071
- **ID:** M5_T071
- **Topic:** GSM biztonság, hitelesítés és titkosítás
- **Type:** Theory / Process

### Question
Írja le a GSM hálózat biztonsági architektúráját! Milyen szerepet töltenek be az A3, A5 és A8 algoritmusok?

### Solution
- **A3 algoritmus:** Hitelesítő algoritmus. A SIM kártyán tárolt titkos kulcs ($K_i$) és a hálózat által küldött véletlen szám ($RAND$) alapján kiszámítja a $SRES$ választ. Ha a $SRES$ egyezik az AuC által számított értékkel, a mobil hitelesített.
- **A8 algoritmus:** Kulcsképző algoritmus. A $K_i$ és $RAND$ alapján előállítja az $K_c$ ($64	ext{ bites}$) titkosító kulcsot.
- **A5 algoritmus:** Adattitkosító szimmetrikus folyamatjel-algoritmus. A $K_c$ kulccsal titkosítja a rádiós interfészen áthaladó beszéd- és adatforgalmat.

---

## Task_072
- **ID:** M5_T072
- **Topic:** Cellahasítás (Cell Splitting) és Szektorálás
- **Type:** Calculation / Theory

### Question
Hogyan növelhető egy meglévő GSM cellás hálózat kapacitása cellahasítással és szektorálással?

### Solution
- **Cellahasítás (Cell Splitting):**
  - A nagy méretű cellákat kisebb sugárra ($R' = R/2$) osztjuk fel.
  - A területen így többszöröződik a klaszterek száma, ami a rendszerszintű kapacitást a cellák számával arányosan növeli anélkül, hogy több frekvenciára lenne szükség.
- **Szektorálás (Sectoring):**
  - Omnidirekcionális (mindenirányú) adó helyett szektorantennákat ($120^\circ$ vagy $60^\circ$) használunk a bázisállomáson.
  - Csökkenti a társcsatornás interferenciát generáló szomszédok számát ($6$-ról $2$-re $120^\circ$-os szektorálásnál), így kisebb $N$ (pl. $N=3$) FRF is alkalmazható, ami növeli a cellánkénti kapacitást.

---

## Task_073
- **ID:** M5_T073
- **Topic:** 3G / UMTS és WCDMA alapok
- **Type:** Theory

### Question
Miben tér el az UMTS (3G) rádiós hozzáférése a GSM (2G) rendszertől? Ismertesse a WCDMA és a kódosztásos multiplexelés elvét!

### Solution
- A GSM-mel ellentétben az UMTS **WCDMA (Wideband Code Division Multiple Access)** technológiát használ $5	ext{ MHz}$-es csatornaszélességgel.
- Minden felhasználó ugyanazon a frekvencián és egyidejűleg adhat.
- A felhasználók jeleit ortogonális kódokkal (**OVSF - Orthogonal Variable Spreading Factor**) terítik szét a teljes sávszélességre.
- **Feldolgozási nyereség (Spreading Gain):** $G_p = rac{W}{R}$, ahol $W$ a chipsebesség ($3{,}84	ext{ Mcps}$), $R$ pedig az adatsebesség.
- A vevő a saját kóddal történő korrelációval emeli ki a kívánt jelet a zajszerű összetett jelből.

---

## Task_074
- **ID:** M5_T074
- **Topic:** 4G / LTE és OFDMA
- **Type:** Theory

### Question
Milyen rádiós hozzáférési technológiát alkalmaz az LTE (4G) a le- és feltöltési irányban, és miért?

### Solution
- **Letöltési irány (Downlink): OFDMA (Orthogonal Frequency Division Multiple Access)**
  - Sok egymással ortogonális alvivőre bontja a csatornát.
  - Kiváló spektrális hatásfok és rugalmas sávszélesség-kiosztás ($1{,}4	ext{–}20	ext{ MHz}$).
  - Ellenálló a többutas terjedéssel szemben (Ciklikus Prefix - CP segítségével).
- **Feltöltési irány (Uplink): SC-FDMA (Single Carrier FDMA)**
  - Az OFDMA-hoz képest lényegesen alacsonyabb a csúcsteljesítmény-átlagteljesítmény aránya (PAPR).
  - Ez kevesebb energiát fogyaszt a mobil teljesítményerősítőjében, növelve az akkumulátor élettartamát.

---

## Task_075
- **ID:** M5_T075
- **Topic:** Budapesti GSM hálózat kapacitásmodellje
- **Type:** Calculation

### Question
Egy budapesti GSM hálózat lefedésére $525	ext{ cellát}$ telepítettek. Az alkalmazott klaszterméret $N=12$. A szolgáltató $124	ext{ FDM csatornával}$ gazdálkodik.
a) Hány teljes klaszter alakítható ki a városban?
b) Hány egyidejű beszélgetés hordozható egyetlen klaszterben?
c) Mekkora a teljes budapesti hálózat egyidejű beszédkapacitása?

### Solution
a) A klaszterek száma:
$$N_{	ext{klaszter}} = \left\lfloor rac{525}{12} ightfloor = \mathbf{43	ext{ teljes klaszter}} \quad (	ext{vagy pontról pontra } 43{,}75 ightarrow 44)$$
b) Egy klaszterben elérhető egyidejű csatornák száma (mivel 1 FDM = 8 TDMA időrés):
$$C_{	ext{klaszter}} = 124	ext{ FDM csatorna} 	imes 8 = \mathbf{992	ext{ egyidejű beszélgetés/klaszter}}$$
c) A teljes hálózati kapacitás:
$$C_{	ext{összes}} = 43{,}75 	imes 992 = \mathbf{43400	ext{ egyidejű beszélgetés}}$$
