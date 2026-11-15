---
module_id: "06_voip_erlang_akusztika"
title: "Infokommunikáció - 6. Modul: VoIP csomagolás, Erlang-B forgalmi méretezés, DTMF és Akusztika"
task_count: 15
schema_version: "1.0"
---

# 6. Modul: VoIP csomagolás, Erlang-B forgalmi méretezés, DTMF és Akusztika

## Task_076
- **ID:** M6_T076
- **Topic:** VoIP csomagfejléc-overhead és sávszélesség-számítás
- **Type:** Calculation

### Question
Egy VoIP alapon működő beszédátviteli rendszerben G.711 kodeket használnak (64 kbit/s PCM beszédsebesség). A beszédmintákat 20 ms-os keretekben csomagolják. A csatornafejlécek mérete: IP fejléc (20 byte), UDP fejléc (8 byte), RTP fejléc (12 byte), Ethernet L2 overhead (18 byte).
a) Mekkora egyetlen VoIP csomag hasznos beszédatai terjedelme byte-ban?
b) Mekkora a teljes átviteli sávszélesség-igény (kbit/s) egyetlen beszédcsatornára az L2 keretszintet is figyelembe véve?
c) Hány százalékos a fejlécek okozta overhead (fejléc-veszteség)?

### Solution
a) 20 ms-os keretidő alatt a 64 kbit/s-os kodek által előállított beszédadat:
$$Payload = rac{64000 	ext{ bit/s} \cdot 0{,}02 	ext{ s}}{8 	ext{ bit/byte}} = 160 	ext{ byte}$$

b) A teljes csomagméret a fejlécekkel együtt:
$$Header = 20 (	ext{IP}) + 8 (	ext{UDP}) + 12 (	ext{RTP}) + 18 (	ext{Ethernet}) = 58 	ext{ byte}$$
$$L_{összes} = 160 + 58 = 218 	ext{ byte}$$
A csomagismétlődési frekvencia: $p_f = rac{1}{0{,}02	ext{ s}} = 50 	ext{ csomag/s}$.
A teljes sávszélesség-igény:
$$B = 218 	ext{ byte/csomag} \cdot 8 	ext{ bit/byte} \cdot 50 	ext{ csomag/s} = 87200 	ext{ bit/s} = \mathbf{87{,}2 	ext{ kbit/s}}$$

c) Az overhead aránya:
$$Overhead = rac{58}{160} \cdot 100\% pprox \mathbf{36{,}25\%}$$

---

## Task_077
- **ID:** M6_T077
- **Topic:** Erlang-B méretezés, felajánlott forgalom és blokkolási valószínűség
- **Type:** Calculation

### Question
Egy telefonközpont áramkörkapcsolt trunk csoportjához óránként átlagosan 1200 hívásérkezés tartozik, és az átlagos tartási idő 2,5 perc.
a) Számítsa ki a trunk csoportra felajánlott forgalmat Erlangban ($A$)!
b) Ha a megengedett blokkolási valószínűség $P_b \le 1\%$, hány áramkörre (vonalra) van szükség a trunk csoportban? (Használja az Erlang-B modellt!)

### Solution
a) A hívásérkezési intenzitás: $\lambda = rac{1200}{3600 	ext{ s}} = rac{1}{3} 	ext{ hívás/s}$.
Az átlagos tartási idő: $T_s = 2{,}5 \cdot 60 = 150 	ext{ s}$.
A felajánlott forgalom:
$$A = \lambda \cdot T_s = rac{1200}{60} \cdot 2{,}5 = 20 \cdot 2{,}5 = \mathbf{50 	ext{ Erlang}}$$

b) Az Erlang-B formula alapján $A = 50	ext{ Erl}$ és $P_b \le 0{,}01$ (1%) mellett a szükséges áramkörök száma a táblázatból/iterációból:
$$N pprox \mathbf{64 	ext{ áramkör}}$$

---

## Task_078
- **ID:** M6_T078
- **Topic:** DTMF (Dual-Tone Multi-Frequency) jelzés és regiszter-méretezés
- **Type:** Calculation / Concept

### Question
a) Írja le a DTMF billentyűzet frekvenciakiosztásának elvét (alsó és felső frekvenciacsoportok)!
b) Egy mellékközpontban 500 előfizető található. A csúcsórában egy előfizető átlagosan 2 hívást kezdeményez, és a tárcsázás (DTMF gombnyomások) ideje átlagosan 6 másodperc. Mekkora a DTMF regiszterekre felajánlott forgalom, és hány DTMF vevőegységre van szükség $P_b \le 0{,}2\%$ veszteségnél?

### Solution
a) A DTMF 8 frekvenciát használ $4 	imes 4$-es mátrixban:
- **Alsó csoport (sorok):** $697	ext{ Hz}, 770	ext{ Hz}, 852	ext{ Hz}, 941	ext{ Hz}$
- **Felső csoport (oszlopok):** $1209	ext{ Hz}, 1336	ext{ Hz}, 1477	ext{ Hz}, 1633	ext{ Hz}$
Egy gomb megnyomásakor pontosan egy sor- és egy oszlopfrekvencia szuperpozíciója generálódik.

b) A hívásintenzitás: $\lambda = 500 \cdot 2 = 1000 	ext{ hívás/óra}$.
A regiszter-foglaltsági idő: $T_{DTMF} = 6 	ext{ s} = rac{6}{3600} 	ext{ óra} = rac{1}{600} 	ext{ óra}$.
A felajánlott forgalom a DTMF regiszterekre:
$$A_{DTMF} = \lambda \cdot T_{DTMF} = 1000 \cdot rac{6}{3600} = \mathbf{1{,}67 	ext{ Erlang}}$$
Erlang-B táblázatból $A = 1{,}67	ext{ Erl}$ és $P_b \le 0{,}002$ esetén a szükséges DTMF vevők száma:
$$N_{DTMF} = \mathbf{7 	ext{ egység}}$$

---

## Task_079
- **ID:** M6_T079
- **Topic:** Akusztika, hangnyomásszint (SPL) és pontforrás csillapodása
- **Type:** Calculation

### Question
Egy pontszerűen sugárzó szabadterű hangforrás $1	ext{ m}$ távolságban $100	ext{ dB}$ hangnyomásszintet ($SPL$) hoz létre.
a) Mekkora a hangnyomásszint $10	ext{ m}$ távolságban?
b) Mekkora a tényleges akusztikai hangnyomás ($p$) Pascalban kifejezve $1	ext{ m}$-nél és $10	ext{ m}$-nél? (A referencia hangnyomás $p_0 = 2 \cdot 10^{-5}	ext{ Pa}$).

### Solution
a) Szabad térben a hangnyomás a távolsággal fordítottan arányos ($p \sim 1/r$), így a hangnyomásszint a távolság duplázódásakor $6	ext{ dB}$-lel, tízszereződésekor $20	ext{ dB}$-lel csökken:
$$SPL(10	ext{ m}) = SPL(1	ext{ m}) - 20 \lg\left(rac{10}{1}ight) = 100	ext{ dB} - 20	ext{ dB} = \mathbf{80	ext{ dB}}$$

b) A hangnyomás kiszámítása a definíció alapján ($SPL = 20 \lg(p / p_0)$):
- $1	ext{ m}$-nél: $p(1	ext{ m}) = p_0 \cdot 10^{100/20} = 2 \cdot 10^{-5} \cdot 10^5 = \mathbf{2	ext{ Pa}}$
- $10	ext{ m}$-nél: $p(10	ext{ m}) = p_0 \cdot 10^{80/20} = 2 \cdot 10^{-5} \cdot 10^4 = \mathbf{0{,}2	ext{ Pa}}$

---

## Task_080
- **ID:** M6_T080
- **Topic:** Hangosság, Phon és Sone skála
- **Type:** Concept / Calculation

### Question
a) Definiálja a **Phon** és a **Sone** mértékegységeket!
b) Egy $1	ext{ kHz}$-es szinuszos hang hangnyomásszintje $60	ext{ dB}$. Hány phon és hány sone a hangossága?
c) Ha a hangnyomásszintet $60	ext{ dB}$-ről $80	ext{ dB}$-re növeljük $1	ext{ kHz}$-en, hányszorosára nő a subjektív érzékelt hangosság sone-ban?

### Solution
a) 
- **Phon:** A szubjektív hangosságszint mértékegysége. Egy tetszőleges frekvenciájú hang phon-értéke megegyezik az vele egyenlő hangosságúnak érzékelt $1	ext{ kHz}$-es tiszta szinuszos hang $	ext{dB}$-ben mért hangnyomásszintjével.
- **Sone:** A lineáris szubjektív hangosságmérték. $1	ext{ sone}$ a $40	ext{ phon}$ hangosságszintű $1	ext{ kHz}$-es hang érzékelt hangossága.

b) $1	ext{ kHz}$-en a decibel és a phon értéke számszerűen megegyezik:
$$L_{phon} = \mathbf{60	ext{ phon}}$$
A Sone átszámítási képlete ($L \ge 40	ext{ phon}$ esetén):
$$S = 2^{(L_{phon} - 40)/10} = 2^{(60 - 40)/10} = 2^2 = \mathbf{4	ext{ sone}}$$

c) $80	ext{ dB}$ ($80	ext{ phon}$) esetén:
$$S_{80} = 2^{(80 - 40)/10} = 2^4 = 16	ext{ sone}$$
A hangosság növekedése: $rac{16	ext{ sone}}{4	ext{ sone}} = \mathbf{4	ext{-szeresére}}$ nő (minden $10	ext{ phon}$ emelkedés duplázza a sone értéket).

---

## Task_081
- **ID:** M6_T081
- **Topic:** Voice Activity Detection (VAD) és Komfortzaj-generálás (CNG)
- **Type:** Concept

### Question
A VoIP és mobil hálózatokban széles körben alkalmazzák a VAD (Voice Activity Detector) és CNG (Comfort Noise Generator) funkciókat.
a) Mi a VAD működési elve és elsődleges célja?
b) Milyen problémát okoz a VAD önmagában a vevő oldalon, és hogyan oldja meg ezt a CNG?
c) Hogyan továbbítja a jeladó a csendperiódusok jellemzőit a vevő felé (SID keretek)?

### Solution
a) A VAD folyamatosan elemzi az analóg/digitális beszédjelet, és megkülönbözteti az aktív beszédperiódusokat a szünetektől (csendperiódusoktól). Szünet esetén leállítja a beszédcsomagok küldését, így **30-50% sávszélességet és adóteljesítményt takarít meg**.

b) VAD alkalmazásakor a szünetekben nem érkezik csomag, így a vevő oldalon teljes süketség (nulla jel) keletkezne. A hallgató ezt a vonal megszakadásaként érzékelné. A **CNG (Comfort Noise Generator)** a szünetekben mesterséges, alacsony szintű háttérzajt szintetizál a vevőnél a természetes érzet fenntartására.

c) A jeladó a csend kezdetén és időszakosan úgynevezett **SID (Silence Descriptor)** kereteket küld, amelyek tartalmazzák a háttérzaj spektrális és teljesítmény-paramétereit, így a CNG pontosan modellezni tudja a helyi zajt.

---

## Task_082
- **ID:** M6_T082
- **Topic:** VoIP dzsitter (Jitter) és De-jitter puffer méretezése
- **Type:** Calculation / Concept

### Question
Egy IP hálózaton továbbított VoIP csomagfolyam egymást követő csomagjainak hálózati késleltetései (Latency) a következők: $30	ext{ ms}, 45	ext{ ms}, 25	ext{ ms}, 60	ext{ ms}, 35	ext{ ms}$.
a) Definiálja a hálózati dzsitter (jitter) fogalmát!
b) Számítsa ki a maximális késleltetésingadozást (peak-to-peak jitter)!
c) Mekkora legyen a vevőoldali de-jitter puffer minimális mérete ms-ban, ha a csomagvesztést el akarjuk kerülni?

### Solution
a) A **dzsitter (jitter)** a csomagok hálózati terjedési késleltetésének ingadozása (szórása) az átlagos késleltetés körül.

b) A mért késleltetések: $D_{\min} = 25	ext{ ms}$, $D_{\max} = 60	ext{ ms}$.
A peak-to-peak jitter:
$$J_{p-p} = D_{\max} - D_{\min} = 60	ext{ ms} - 25	ext{ ms} = \mathbf{35	ext{ ms}}$$

c) A de-jitter puffernek legalább a maximális késleltetésingadozást át kell hidalnia, így a minimális pufferméret **$35	ext{ ms}$** (a gyakorlatban tartalékkal $40	ext{–}50	ext{ ms}$).

---

## Task_083
- **ID:** M6_T083
- **Topic:** Erlang-C modell (Várakozásos rendszerek)
- **Type:** Concept / Calculation

### Question
Egy call-center ügyfélszolgálatára óránként 180 hívás érkezik. Az operátorok átlagos híváskezelési ideje 3 perc.
a) Mekkora a rendszerre felajánlott forgalom Erlangban?
b) Mi a lényegi különbség az Erlang-B és Erlang-C modell feltételezései között?
c) Hány operátor szükséges ahhoz, hogy a rendszer ne legyen túlterhelt ($ho < 1$)?

### Solution
a) A hívásintenzitás: $\lambda = 180 	ext{ hívás/óra}$.
A kezelési idő: $T_s = 3 	ext{ perc} = 0{,}05 	ext{ óra}$.
A felajánlott forgalom:
$$A = \lambda \cdot T_s = 180 \cdot 0{,}05 = \mathbf{9 	ext{ Erlang}}$$

b)
- **Erlang-B:** Elvesztéses rendszer. Ha minden kiszolgáló foglalt, az új hívás azonnal elutasításra kerül és elvész.
- **Erlang-C:** Várakozásos rendszer. Ha minden kiszolgáló foglalt, az új hívás várakozási sorba (pufferbe) kerül, és amint felszabadul egy kiszolgáló, sorra kerül.

c) A stabil működés feltétele, hogy a kiszolgálók száma ($N$) nagyobb legyen a felajánlott forgalomnál ($A$):
$$N > A \implies N > 9 \implies N_{\min} = \mathbf{10 	ext{ operátor}}$$

---

## Task_084
- **ID:** M6_T084
- **Topic:** Teremakusztika, utózengési idő (Sabine-képlet)
- **Type:** Calculation

### Question
Egy $10	ext{ m} 	imes 6	ext{ m} 	imes 3	ext{ m}$ méretű előadóterem falainak és mennyezetének átlagos elnyelési tényezője $lpha = 0{,}15$.
a) Számítsa ki a terem térfogatát ($V$) és teljes felületét ($S$)!
b) Számítsa ki a terem utózengési idejét ($T_{60}$) a Sabine-féle összefüggéssel!

### Solution
a) Térfogat és felület:
$$V = 10 \cdot 6 \cdot 3 = \mathbf{180 	ext{ m}^3}$$
$$S = 2 \cdot (10 \cdot 6 + 10 \cdot 3 + 6 \cdot 3) = 2 \cdot (60 + 30 + 18) = 2 \cdot 108 = \mathbf{216 	ext{ m}^2}$$

b) Az egyenértékű elnyelési felület ($A_{elnyelés}$):
$$A_{elnyelés} = S \cdot lpha = 216 \cdot 0{,}15 = 32{,}4 	ext{ m}^2$$
A Sabine-képlet az utózengési időre ($T_{60}$):
$$T_{60} = 0{,}161 \cdot rac{V}{A_{elnyelés}} = 0{,}161 \cdot rac{180}{32{,}4} pprox \mathbf{0{,}894 	ext{ másodperc}}$$

---

## Task_085
- **ID:** M6_T085
- **Topic:** SIP (Session Initiation Protocol) hívásfelépítési üzenetváltás
- **Type:** Concept

### Question
A VoIP hálózatokban a SIP protokoll felelős a munkamenetek (hívások) létrehozásáért, módosításáért és bontásáért.
a) Rajzolja fel és nevezze meg a SIP sikeres hívásfelépítésének alapvető üzenetváltási sorrendjét két végpont (User Agent A és B) között!
b) Milyen szerepet tölt be az SDP (Session Description Protocol) a SIP INVITE üzenetben?

### Solution
a) A SIP hívásfelépítés alapvető üzenetei:
1. **UA-A $	o$ UA-B:** `INVITE` (Hívásindítási kérelem SDP leírással)
2. **UA-B $	o$ UA-A:** `100 Trying` (Kérelem feldolgozás alatt)
3. **UA-B $	o$ UA-A:** `180 Ringing` (A hívott fél kicseng)
4. **UA-B $	o$ UA-A:** `200 OK` (A hívott fél felvette a telefont)
5. **UA-A $	o$ UA-B:** `ACK` (Nyugtázás, a hívás létrejött)
*(Ezt követi a közvetlen RTP beszédáram)*

b) Az **SDP (Session Description Protocol)** az INVITE üzenet törzsében szállítja a média-paramétereket: az alkalmazott hangkodekeket (pl. G.711, G.729), az IP-címeket és az RTP portszámokat.

---

## Task_086
- **ID:** M6_T086
- **Topic:** Több hangforrás eredő hangnyomásszintjének összegzése
- **Type:** Calculation

### Question
Egy műhelyben három független gép működik. Külön-külön mérve a mérési pontban keltett hangnyomásszintjük: $SPL_1 = 82	ext{ dB}$, $SPL_2 = 85	ext{ dB}$, $SPL_3 = 85	ext{ dB}$.
a) Mekkora a három gép egyidejű működésekor mérhető eredő hangnyomásszint ($SPL_{eredő}$)?
b) Számítsa ki az eredő hangnyomásszintet, ha a legkisebb hangerejű gépet ($82	ext{ dB}$) kikapcsolják!

### Solution
a) Inkoherens hangforrások esetén a hangteljesítmények/négyzetes hangnyomások összeadódnak:
$$SPL_{eredő} = 10 \lg\left(10^{SPL_1/10} + 10^{SPL_2/10} + 10^{SPL_3/10}ight)$$
$$10^{8{,}2} = 158{,}49 \cdot 10^6$$
$$10^{8{,}5} = 316{,}23 \cdot 10^6$$
$$10^{8{,}5} = 316{,}23 \cdot 10^6$$
Összeg: $(158{,}49 + 316{,}23 + 316{,}23) \cdot 10^6 = 790{,}95 \cdot 10^6$
$$SPL_{eredő} = 10 \lg(790{,}95 \cdot 10^6) = 10 \cdot 8{,}898 = \mathbf{88{,}98 	ext{ dB}} pprox \mathbf{89 	ext{ dB}}$$

b) Ha az $82	ext{ dB}$-es gépet kikapcsolják, két azonos $85	ext{ dB}$-es forrás marad. Két azonos hangforrás összege $+3	ext{ dB}$ növekedést ad:
$$SPL'_{eredő} = 85	ext{ dB} + 3	ext{ dB} = \mathbf{88	ext{ dB}}$$

---

## Task_087
- **ID:** M6_T087
- **Topic:** MOS (Mean Opinion Score) és R-faktor (G.107 E-model)
- **Type:** Concept

### Question
A VoIP beszédminőség mérésére és becslésére a leghatékonyabb eszköz a G.107 E-modell.
a) Ismertesse a MOS (Mean Opinion Score) skálát (értéktartomány és jelentéstartalom)!
b) Hogyan függ össze a G.107 E-modell által számított $R$-faktor a MOS értékesítéssel?
c) Milyen tényezők csökkentik az $R$-faktort egy VoIP hálózatban?

### Solution
a) A **MOS** egy 1-től 5-ig terjedő szubjektív/objektív skála:
- **5:** Kiváló (Excellent)
- **4:** Jó (Good)
- **3:** Közepes (Fair)
- **2:** Gyenge (Poor)
- **1:** Használhatatlan (Bad)

b) Az $R$-faktor egy 0-tól 100-ig terjedő skála. Az $R$-értékből a MOS számszerűen átszámítható (pl. $R \ge 90 \implies 	ext{MOS} > 4{,}34$; $R = 70 \implies 	ext{MOS} pprox 3{,}6$).

c) Az $R$-faktort csökkentő tényezők:
- Kodek tömörítési torzítása ($I_e$)
- Hálózati csomagvesztés ($I_{e-eff}$)
- Egyutas száj-fül késleltetés ($I_d$)
- Visszhang (Echo) és háttérzaj.

---

## Task_088
- **ID:** M6_T088
- **Topic:** A-súlyozású hangnyomásszint (dBA) és hallási érzékenység
- **Type:** Concept

### Question
a) Miért van szükség az akusztikában és zajvédelemben az **A-súlyozású szűrőkre (dBA)** a lineáris decibel (dB SPL) értékek helyett?
b) Milyen frekvenciatartományban a legérzékenyebb az emberi fül, és hogyan tükrözi ezt az A-súlyozási görbe?

### Solution
a) Az emberi fül frekvenciafüggő érzékenységgel rendelkezik (az egyenlő hangossági görbék / Fletcher-Munson görbék alapján). Az alacsony ($100	ext{ Hz}$ alatti) és a nagyon magas frekvenciájú hangokat kevésbé érezzük hangosnak, mint a közepes frekvenciájúakat. Az **A-súlyozás (dBA)** az emberi fül kis és közepes hangerőn tapasztalható frekvenciafüggő érzékenységét korrigálja.

b) Az emberi fül a **$2	ext{ kHz} \dots 4	ext{ kHz}$** tartományban a legérzékenyebb (a hallójárat saját rezonanciája miatt). Az A-súlyozási görbe ebben a tartományban kismértékű kiemelést/nulla csillapítást alkalmaz, míg $100	ext{ Hz}$-en kb. $-20	ext{ dB}$ csillapítást visz be.

---

## Task_089
- **ID:** M6_T089
- **Topic:** RTP és RTCP protokollok szerepe VoIP átvitelben
- **Type:** Concept

### Question
Hasonlítsa össze az **RTP (Real-time Transport Protocol)** és az **RTCP (RTP Control Protocol)** feladatát VoIP rendszerekben!

### Solution
- **RTP (Real-time Transport Protocol):**
  - **Feladata:** A valósidejű beszéd- és adatáram továbbítása UDP felett.
  - **Fejléc tartalma:** Sorszám (Sequence Number) a csomagvesztés és sorrendhelyreállítás észlelésére, Időbélyeg (Timestamp) a dzsitter puffereléshez és szinkronizációhoz, Csomagolási típus (Payload Type).

- **RTCP (RTP Control Protocol):**
  - **Feladata:** Out-of-band vezérlés és minőség-felügyelet (QoS monitoring).
  - **Működése:** Időperiodikusan vezérlőcsomagokat küld a hívó felek között, amelyek statisztikát tartalmaznak az elszenvedett csomagvesztésről, dzsitterről és RTT (Round Trip Time) késleltetésről.

---

## Task_090
- **ID:** M6_T090
- **Topic:** Teljes VoIP és Akusztikai Rendszerméretezés (Összetett feladat)
- **Type:** Calculation

### Question
Egy vállalati VoIP hálózatban 100 egyidejű hívás kiszolgálását tervezik G.729 kodekkel ($8	ext{ kbit/s}$ beszédsebesség, 10 ms-os keretidő $\implies 10	ext{ byte}$ hasznos teher csomagokként).
A csomagfejléc mérete (IP+UDP+RTP+Ethernet): $58	ext{ byte}$.
a) Mekkora egyetlen G.729 VoIP csomag teljes mérete?
b) Mekkora a csomagismétlődési frekvencia és egyetlen csatorna sávszélessége?
c) Mekkora a 100 egyidejű híváshoz szükséges teljes aggregált sávszélesség-igény Mbit/s-ban?

### Solution
a) A csomagméret:
$$L_{csomag} = 10 	ext{ byte (payload)} + 58 	ext{ byte (fejléc)} = \mathbf{68 	ext{ byte}}$$

b) $10	ext{ ms}$-os keretidőnél a csomagsebesség:
$$p_f = rac{1}{0{,}01	ext{ s}} = 100 	ext{ csomag/másodperc}$$
Egyetlen csatorna sávszélessége:
$$B_1 = 68 	ext{ byte} \cdot 8 	ext{ bit/byte} \cdot 100 	ext{ csomag/s} = 54400 	ext{ bit/s} = \mathbf{54{,}4 	ext{ kbit/s}}$$

c) 100 egyidejű hívás aggregált sávszélessége:
$$B_{100} = 100 \cdot 54{,}4 	ext{ kbit/s} = 5440 	ext{ kbit/s} = \mathbf{5{,}44 	ext{ Mbit/s}}$$
