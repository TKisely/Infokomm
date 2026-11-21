---
forras: "VikWiki/Infokomm_vizsga_2015_05_26.pdf (2 oldal; emlékezetből leírt feladatsor, nem az eredeti lap – a feladatok sorrendje és pontos szövege eltérhet)"
tartalom: "Infokommunikáció vizsga, 2015. május 26. – 6 feladat (rekonstrukció)"
jeloles: "[HIÁNYOS ADAT] = a rekonstrukcióból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2015. május 26. (emlékezetből leírt változat)

A leírás szerint a GSM- és a tribites feladat 5 pontos, a többi 3 pontos volt.

---

## 1. feladat – Lineáris szisztematikus blokk-kód, 16 paritásbit

**Feladat.** a) Hány elemű a szindrómavektor? b) Hány bites lehet a kódszó, hogy az összes egybites hiba biztosan javítható legyen? c) Hány bites lehet a kódszó, ha a kódtávolság legalább 5?

**Megoldás.**
a) A szindróma a paritásbitek számával egyező hosszúságú: **16 bit**.
b) Egyszeres hibajavításhoz minden egyes hibahelyhez külön, nem nulla szindróma kell: $n\le2^{16}-1=$ **65 535 bit** (legfeljebb; ez a (65535, 65519) Hamming-kód).
c) $d_{min}\ge5$ → 2 hiba javítható. Hamming-korlát: $1+n+\binom n2\le2^{16}$ → **$n\le361$** (felső korlát). Létező kód: a kettős hibát javító **BCH(255, 239)** kód pontosan 16 paritásbittel, $d_{min}=5$ → pl. **255 bites** kódszó (vagy annál rövidebb, rövidített változat). A rekonstruált kérdésre („hány bites lesz a kódszó”) a válasz tehát: **legfeljebb 361 bit** (Hamming-korlát); konkrét, ismert kód 255 bites.

**Ellenőrzés:** $1+361+\binom{361}{2}=65\,342\le65\,536$, $n=362$-re $65\,705>65\,536$. ✔

---

## 2. feladat – TV-elmélet

a) **QAM** – a **kábeltelevízióban (DVB-C)**: a kábel jó jel-zaj viszonyú, lineáris, nem többutas csatorna, ezért nagy spektrumhatékonyságú (64/256-QAM) moduláció alkalmazható – sok csatorna fér a 8 MHz-es raszterbe.
b) **AM-VSB** – az **analóg TV képjelének** átvitelére: a DSB-nél jóval kisebb sávszélesség (egy oldalsáv + csonka másik), de – az SSB-vel ellentétben – a 0 Hz közeli (egyen-) komponensek is átvihetők, ami a képjelnél lényeges; vivővel együtt egyszerű burkolódetektorral vehető.
c) **OFDM** (DVB-T): sok, egyenként keskeny sávú alvivő hosszú szimbólumidővel és **védőintervallummal** (ciklikus előtag). A többi adótól érkező azonos jel a vevő számára csak késleltetett visszhangnak látszik; ha a késleltetés a védőintervallumon belül van, nem okoz szimbólumközi áthallást, sőt hasznos jelként összegződik → **egyfrekvenciás hálózat (SFN)** építhető.

---

## 3. feladat – GSM (két szolgáltató)

[HIÁNYOS ADAT: a rekonstrukció nem írja le, ki hol barangol. Az alábbi a gyakori változatra – MS-A az alfa előfizetője a béta hálózatban, MS-B a béta előfizetője az alfa hálózatban – vonatkozik, lásd `2013_06_11_kidolgozas.md` 4. feladat.]

a) MS-A hívja MS-B-t: **HLR$_\beta$** (a hívott honos HLR-je).
b) A hívó készülék tiltólistája: **EIR$_\beta$** (a hívót kiszolgáló hálózaté).
c) MS-B bontja a hívást: először **BTS$_\alpha$** (az alfa hálózat, ahol MS-B tartózkodik) / logikailag MSC$_\alpha$.
d) Részt vevő elemek: BTS$_\alpha$, BSC$_\alpha$, MSC$_\alpha$, (G)MSC$_\beta$, MSC$_\beta$, BSC$_\beta$, BTS$_\beta$.
e) MS-B SMS-t küld MS-A-nak: a kérés **SMSC$_\beta$**-hez (MS-B honos SMSC-je) fut be.
f) Ugyanez az **SMSC$_\beta$** kézbesíti (HLR$_\alpha$ lekérdezése után MSC$_\beta$-n keresztül).

**FNR:** számhordozhatósághoz: megmondja, hogy egy hívószám ténylegesen melyik hálózathoz/HLR-hez tartozik.
**Roaming nélkül tud-e a VLR adatokat a telefonokról?** **Igen.** A VLR nem csak a „látogatók” regisztere: minden, az MSC területén tartózkodó előfizető (a saját hálózatbeliek is) adatait tárolja (helyterület, TMSI, a HLR-ből átmásolt előfizetői adatok), mert hívásnál az MSC ezekből dolgozik.

---

## 4. feladat – Telefon (GSM) elmélet

a) **Burst:** a GSM-ben a mobil nem folyamatosan, hanem a saját időrésében rövid (577 µs-os, 148 bites) **adatcsomagokban (burst)** ad. Ez teszi lehetővé, hogy egy 200 kHz-es vivőn 8 felhasználó osztozzon (TDMA), és az adó az idő nagy részében kikapcsolhat (energiatakarékosság); a burst közepén lévő ismert tanítószekvencia segíti a kiegyenlítést.
b) **Frekvenciaugratás:** keretenként (≈ 4,615 ms-onként, ~217 ugrás/s) más vivőn adnak/vesznek, hogy a frekvenciaszelektív fading és az interferencia ne mindig ugyanazt a beszélgetést sújtsa (frekvencia- és interferencia-diverzitás; a hibákat az interleaving és a hibajavító kód javítja). (Az adás és vétel között ráadásul mindig 45 MHz duplex távolság és 3 időrésnyi eltolás van, így a készüléknek nem kell egyszerre adnia és vennie.)
c) **Lehallgatás elleni védelem:** a rádiós szakasz **titkosítása** (A5 algoritmus a Kc kulccsal, amelyet a SIM az A8-cal a titkos Ki-ből és a hálózat RAND-jából számol), **hitelesítés** (A3), és az azonosító védelme ideiglenes **TMSI**-vel (az IMSI nem megy a levegőben). (A frekvenciaugratás mellékesen szintén nehezíti a lehallgatást.)

---

## 5. feladat – Tribites (8 pontos) QAM

**Feladat (rekonstrukció).** A pontok: $(\pm1,\pm1)$, $(0,\pm3)$, $(\pm3,0)$; a táblázatból csak: 000 → $(d,c)=(+1,+1)$, 001 → $(0,+3)$, 011 → $(-1,+1)$. a) Konstellációs ábra. b) Vett értékek (pl. (+0,72; +2,91)) berajzolása, bitsorozat. c) Erősítéshiba jellege és mértéke. d) Fázishiba. e) Demodulátor blokkvázlat.

[HIÁNYOS ADAT: a teljes bit–pont hozzárendelés és a többi vett érték nem ismert.]

**Megoldás.**
a) 8 pont: belső négyzet $(\pm1,\pm1)$ ($|s|=\sqrt2$), külső „kereszt” $(0,\pm3)$, $(\pm3,0)$ ($|s|=3$).

![](abrak/qam8_kereszt.svg)

b) (+0,72; +2,91) legközelebbi pontja $(0,+3)$ (távolság² 0,53; a $(1,1)$-ig 3,73) → **001**.
c) $|r|=\sqrt{0{,}72^2+2{,}91^2}=2{,}998\approx3$ → ennél a mintánál **gyakorlatilag nincs erősítéshiba** (≈ 0%).
d) A fázis: $\arctan(0{,}72/2{,}91)\approx$ **13,9°** elfordulás (a $(0,3)$ ponthoz képest, a $d$ tengely felé). A konstelláció (minimális távolságú döntéssel számolt) fázistűrése **±32°**, tehát ez a hiba a tűrés kb. 43%-a, a döntés még helyes. (Erősítéshiba-tűrés ugyanígy számolva: csillapításnál $g>0{,}58$, azaz kb. −42%.) A többi vett minta nem ismert. [HIÁNYOS ADAT]

**Ellenőrzés:** a tűréseket gépi úton, a 8 pont elforgatásával/skálázásával és minimális távolságú döntéssel határoztam meg (0,01°-os lépés). ✔
e) **Koherens QAM-demodulátor:** bemeneti sávszűrő → két ágra bontás → szorzás $\cos\omega_vt$-vel, illetve $-\sin\omega_vt$-vel (vivővisszaállítás, pl. PLL; 90°-os fázistoló) → aluláteresztők → mintavétel a szimbólumórajellel (órajel-visszaállítás) → kétdimenziós döntő (legközelebbi pont) → bit-hozzárendelés (tribit).

![](abrak/qam_demod.svg)


---

## 6. feladat – Látás, színek

a) Komponensenként 4 szint → $4^3=$ **64 színérzet** (a szürkékkel együtt). Világosság: $Y=0{,}299R+0{,}587G+0{,}114B$ súlyokkal mind a 64 kombináció különböző $Y$-t ad (64 érték, de sok nagyon közel van egymáshoz); ha a komponenseket egyforma súllyal vennénk, csak **10** különböző érték ($R+G+B=0\dots9$ lépés). A tárgy a világosságot $Y=0{,}3R+0{,}59G+0{,}11B$-vel számolja, ezzel a 64 kombináció **64 különböző** világosságértéket ad.
b) 1 bit/komponens → 8 szín, világosság szerint növekvő sorrendben ($Y$): **fekete (0), kék (0,11), piros (0,30), bíbor/magenta (0,41), zöld (0,59), cián (0,70), sárga (0,89), fehér (1)**.
c) **Gamma-előtorzítás:** a képcső (CRT) fénykibocsátása a vezérlőfeszültség nemlineáris ($\gamma\approx2{,}2$-edik hatványú) függvénye; az adóoldali ($1/\gamma$) előtorzítással ezt egyszer, központilag kompenzálják, nem minden vevőben. Mellékes előny: az előtorzított jelben a sötét részek finomabban vannak kódolva, ami a szem (közel logaritmikus) érzékenységéhez illeszkedik → a zaj és a kvantálási hiba kevésbé látható.

**Ellenőrzés:** 6a: a 64 súlyozott $Y$-érték gépi felsorolással mind különböző; egyenlő súllyal 10 érték. ✔
