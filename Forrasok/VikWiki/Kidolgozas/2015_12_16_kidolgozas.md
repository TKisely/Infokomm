---
forras: "VikWiki/Infokomm_vizsga_2015_12_16.pdf (3 oldal; korábbi feladatlapok kivágataiból és gyakorlófeladatból összeállított, kézzel kiegészített emlékeztető – nem az eredeti vizsgalap)"
tartalom: "Infokommunikáció vizsga, 2015. december 16. – rekonstruált feladatok"
jeloles: "[HIÁNYOS ADAT] = a forrásból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2015. december 16. (rekonstrukció)

A PDF a vizsga feladatait korábbi lapok kivágataival mutatja be, és kézzel jelzi az eltéréseket („D helyett…”, „+ …”). A kidolgozás ezeket a módosított változatokat követi.

---

## 1. feladat – Teljes emelt koszinuszos PAM (G.5.2. gyakorló feladat alapján)

**Feladat.** Bináris ($d_k=\pm1$) alapsávi PAM, $T$ jelzési idő, elemi jel spektruma $H(f)=h_0T\cos^2\left(\frac\pi2fT\right)$, ha $|f|<\frac1T$, egyébként 0.
a) Rajzolja fel léptékhelyesen. b) Elkerülhető-e az ISI? c) Milyen lehet a vevőszűrő, ha a rendszert szélessávú additív zajra optimalizálták? Rajzolja fel. d) (az eredeti d) helyett:) Csináljon PAM4-es kódot, rendeljen hozzá biteket, és kódolja az üzenetet!

**Megoldás.**
a) $\cos^2\left(\frac{\pi fT}{2}\right)=\frac12\left(1+\cos\pi fT\right)$: **100%-os lekerekítésű emelt koszinusz** ($\alpha=1$). $f=0$-ban $h_0T$, $f=\frac{1}{2T}$-ben $\frac{h_0T}{2}$, $f=\frac1T$-ben 0 (érintőlegesen fut nullába).
b) **Igen, ISI-mentes.** Nyquist-feltétel: $\sum_kH(f-k/T)$ konstans. $0<f<1/T$-re: $h_0T\left[\cos^2\frac{\pi fT}{2}+\cos^2\frac{\pi(f-1/T)T}{2}\right]=h_0T\left[\cos^2x+\sin^2x\right]=h_0T$. ✔ (Időtartományban $h(t)$ zérushelyei $t=kT$-nél vannak.)
c) Fehér zajra az illesztett szűrés optimális: adó és vevő egyformán osztozik a spektrumon, a vevőszűrő
$$H_V(f)=\sqrt{h_0T}\cos\left(\frac{\pi fT}{2}\right),\quad|f|<\frac1T$$
(gyökös emelt koszinusz, lineáris fázissal): $f=0$-ban $\sqrt{h_0T}$, $\frac1{2T}$-nél $0{,}707\sqrt{h_0T}$, $\frac1T$-nél 0 (itt nem érintőlegesen, hanem véges meredekséggel).

![](abrak/emelt_cos_alfa1.svg)

d) (Eredeti d): $T=833\ \mu s$ → $1/T=1200$ Hz, a jel teljes sávszélessége 1200 Hz; egy 1200 Hz-es aluláteresztő a spektrumot gyakorlatilag érintetlenül hagyja (a sávszélen $H$ már nulla) → **nem okoz számottevő ISI-t**.)
**PAM4-kód (módosított d):** két bit/szimbólum, Gray-kódolással: **00 → −3, 01 → −1, 11 → +1, 10 → +3** (szomszédos szintek csak egy bitben térnek el). Példa: az 1001 1100 üzenet → 10 | 01 | 11 | 00 → **+3, −1, +1, −3**. [HIÁNYOS ADAT: a vizsgán kódolandó üzenet nincs megadva.]

**Ellenőrzés:** b) numerikusan: $\cos^2(0{,}3\pi/2)+\cos^2(-0{,}7\pi/2)=0{,}7939+0{,}2061=1$. ✔

---

## 2. feladat – VoIP G.711 (+ VAD)

**Feladat.** 10 ms → 80 byte, csomagonként 2 szegmens, fejrészek 47 byte. a) Csomagsebesség? b) Sávszélesség +10% vezérlőforgalommal? c) A VAD szerepe, előnye GSM-ben és VoIP-ben.

**Megoldás.**
a) **50 csomag/s** (20 ms/csomag).
b) $(160+47)\cdot8\cdot50=82{,}8$ kbit/s, +10% → **≈ 91,1 kbit/s**.
c) A VAD az adóoldalon érzékeli a beszédszüneteket; ekkor nem küld beszédkeretet (csak ritka zajleíró SID-kereteket), a vevő kényelmi zajt generál. **GSM:** szakaszos adás (DTX) → kisebb akkumulátor-fogyasztás, kisebb interferencia, nagyobb kapacitás. **VoIP:** kevesebb csomag → sávszélesség-megtakarítás, statisztikus nyalábolással több hívás.

---

## 3. feladat – GSM (barangoló előfizető hív) + feketelista

**Feladat.** (Azonos a 2014.12.22-i 8. feladattal.) MS-A1 és MS-A2 az alfa előfizetője, MS-A2 a béta hálózatban barangol és hívja MS-A1-et. a)–d) mint ott; kiegészítés: feketelistás készülék esetén mi jelez?

**Megoldás.** a) **HLR$_\alpha$**; b) **AuC$_\alpha$** (a hármasokat a HLR$_\alpha$ adja át a VLR$_\beta$-nek, az összehasonlítás ott történik); c) **BTS$_\beta$, BSC$_\beta$, MSC$_\beta$** (handover); d) **HLR$_\alpha$** (Message Waiting Data; a VLR is jelzőt állít).
**Feketelistás készülék:** a kiszolgáló **MSC$_\beta$/VLR$_\beta$** lekérdezi az **EIR$_\beta$**-t az IMEI alapján; ha az a feketelistán van, az EIR ezt jelzi, és az MSC elutasítja a hálózati hozzáférést/hívást. (A lapon csak a kérdés vázlata szerepel: „fekete listás készülék esetén mi jelez”.)

---

## 4. feladat – DVB-C 256-QAM (+ 64-QAM erősítéshiba-tűrése)

**Feladat.** (Azonos a 2014.12.22-i 9. feladattal.) Kiegészítés: a 64-QAM erősítési és csillapítási hibatűrése.

**Megoldás.** a) **6 MBd, 48 Mbit/s**; b) **32 csatorna** (1,5 Mbit/s), 6 Mbit/s-mal csak 8, de jobb minőség; c) 1024-QAM: több bit/szimbólum (60 Mbit/s), de sokkal nagyobb SNR-igény és érzékenység.
**64-QAM erősítéshiba-tűrése:** 8×8-as rács, koordináták $\pm1,\pm3,\pm5,\pm7$, döntési küszöbök $0,\pm2,\pm4,\pm6$. $g$-szeres skálázásnál: az 5-ös koordináta a 6-os küszöböt $g=6/5$-nél, a 7-es a 6-ost $g=6/7$-nél éri el (a 3-as: 2/3…4/3, az 1-es: …2 – ezek tágabbak).
- **Erősítés: legfeljebb +20%** ($g<6/5$, ≈ +1,6 dB),
- **csillapítás: legfeljebb −14,3%** ($g>6/7$, ≈ −1,3 dB).

**Ellenőrzés:** a 36-QAM-nél (2010.01.20) ugyanez a módszer +33%/−20%-ot adott; a több szintű 64-QAM-nél szűkebb a tűrés – konzisztens. ✔

---

## 5. feladat – C(5,2) kód (+ szindrómadekódolás)

**Feladat.** (Azonos a 2014.01.14-i 1. feladattal.) A kódszavak között 10101 és 01101. a) G és H; b) $d_{min}$, jelzés/javítás; c) vett szó **11001**: szindróma, a javítás lépései, üzenet.

**Megoldás.**
a) $G=\begin{pmatrix}1&0&1&0&1\\0&1&1&0&1\end{pmatrix}$, $H=\begin{pmatrix}1&1&1&0&0\\0&0&0&1&0\\1&1&0&0&1\end{pmatrix}$.
b) Kódszavak 00000, 10101, 01101, 11000 → $d_{min}=2$: 1 hibát jelez, **javítani garantáltan nem tud**.
c) $s=Hr^T$, $r=11001$: 1. sor $1+1+0=0$, 2. sor $r_4=0$, 3. sor $1+1+r_5=1$ → **$s=(0,0,1)$**. Ez nem nulla → hiba történt. $H$ oszlopai: (1,0,1), (1,0,1), (1,0,0), (0,1,0), (0,0,1) – a szindróma az **5. oszloppal** egyezik → az 5. bit hibás (egyszeres hibát feltételezve) → javított kódszó **11000** → **üzenet: 11**.
Megjegyzés: $d_{min}=2$ miatt a javítás nem garantált (pl. az 1. és 2. oszlop azonos, ott a hibahely nem azonosítható); itt az eredmény a legközelebbi kódszóval egyezik (11000 távolsága 1, a többié ≥ 2).

---

## 6. feladat – FSK, MSK

**Feladat.** $f_v=150$, $f_d=50$ (egység a forrásban nincs megadva). a) Mi legyen $f_0$ és $f_1$? Rajzoljon mintát! b) Sávszélesség? c) Hogyan lehet ezekkel az adatokkal MSK-t csinálni, mit kell változtatni? d) MSK-rajz.

[HIÁNYOS ADAT: az adatsebesség és az egység nem ismert; a megoldás Hz-et feltételez és általános.]

**Megoldás.**
a) $f_{0,1}=f_v\mp f_d$: **$f_0=100$, $f_1=200$** (Hz). A jel bitidőnként az adott frekvenciájú szinusz.
b) Carson-jellegű becslés: $B\approx2(f_d+f_b)$, ahol $f_b=1/T$ a bitsebesség (a moduláló négyszögjel első harmonikusát $1/(2T)$-nek véve $B\approx2f_d+1/T$). A bitsebesség ismerete nélkül: $B\ge|f_1-f_0|=100$ Hz + a moduláló jel sávszélessége. [HIÁNYOS ADAT]
c) **MSK** = folytonos fázisú FSK $h=0{,}5$ modulációs indexszel: $f_d=\frac{1}{4T}$ → a bitsebességet **$1/T=4f_d=200$ bit/s**-ra kell választani (vagy adott bitsebességhez a löketet $f_d=\frac{1}{4T}$-re állítani), és a fázist a bitváltásoknál folytonosan kell tartani. Ekkor egy bit alatt az $f_1$-es jel pontosan fél periódussal többet fut, mint az $f_0$-s (ortogonalitás, minimális frekvenciaköz).
d) MSK-rajz: 200 bit/s mellett egy bit 5 ms: „1”-nél a 200 Hz-es jelből 1 teljes periódus, „0”-nál a 100 Hz-esből fél periódus, a bitváltásoknál törés és fázisugrás nélkül folytatva.

![](abrak/fsk_msk.svg)


**Ellenőrzés:** c) $(f_1-f_0)T=100\cdot0{,}005=0{,}5$ → $h=0{,}5$. ✔
