---
forras: "VikWiki/Infokomm_2014_12_15_elovizsga.pdf (4 oldal, fényképezett lap, ráillesztett kézírásos hallgatói megoldásokkal; több rész kitakarva)"
tartalom: "Infokommunikáció (elő)vizsga, 2014. december 15. – 10 feladat; független kidolgozás + a kézírásos megoldások ellenőrzése"
jeloles: "[HALLGATÓI MO HIBÁS] = a lapra írt megoldás hibás; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2014. december 15.

Pontozás: a 2. és 9. feladat 3–3 pont, a többi 2–2 pont. A lapon kézírásos (nem hivatalos) megoldások is vannak; ezeket feladatonként értékelem.

---

## 1. feladat – Bináris MSK

**Feladat.** Jelzőfrekvenciák $f_1=22\,200$ Hz, $f_2=24\,200$ Hz. a) Frekvencialöket? b) Adatsebesség?

**Megoldás.**
a) Vivő 23 200 Hz, löket $\Delta f=\frac{|f_1-f_2|}{2}=$ **±1000 Hz**.
b) MSK-nál a modulációs index $h=0{,}5$: $|f_1-f_2|=\frac{1}{2T}$ → $\frac1T=2\cdot2000=$ **4000 bit/s** (azaz $\Delta f=\frac{1}{4T}$).
**Hallgatói megoldás:** 1000 Hz és 4000 bit/s – **helyes**.

---

## 2. feladat – AM-DSB

**Feladat.** Vivő 100 kHz, moduláló 20 kHz-es szinusz, modulációs mélység 50%, csúcsérték 3 V. a) Rajzolja fel legalább 50 µs-os szakaszát. b) Időfüggvény, időegység, spektrális összetevők és amplitúdóik. c) Átlagteljesítmény.

**Megoldás.** $U(1+m)=3$ V → $U=2$ V.
a) 50 µs = 1 moduláló periódus = 5 vivőperiódus; a burkoló 1 V és 3 V között változik.

![](abrak/am_100k_20k_m05.svg)

b) $s(t)=2\,[1+0{,}5\cos(2\pi\cdot20t)]\cos(2\pi\cdot100t)$ V, **$t$ ms-ban** (a frekvenciák kHz-ben). Komponensek: **100 kHz – 2 V; 80 és 120 kHz – 0,5–0,5 V**.
c) Egységnyi (1 Ω) ellenálláson: $P=\frac{2^2}{2}+2\cdot\frac{0{,}5^2}{2}=2+0{,}25=$ **2,25 W** (a vivő 2 W, az oldalsávok együtt 0,25 W).

**Hallgatói megoldás:** a) $U=2$ V helyes, a vázlat nagyjából jó; b) helyes; **c) [HALLGATÓI MO HIBÁS]** – csak a vivő teljesítményét (2 W) számolta, az oldalsávokét (0,25 W) kihagyta.

**Ellenőrzés:** $P=\frac{U^2}{2}(1+\frac{m^2}{2})=2\cdot1{,}125=2{,}25$ W. ✔

---

## 3. feladat – VAD és kényelmi zaj

**Feladat.** a) Hogyan működik a VAD, milyen erőforrásokban hoz nyereséget? b) Az átviteli lánc melyik elemében alkalmaznak kényelmizaj-generátort, és miért?

**Megoldás.**
a) A VAD az adóoldalon figyeli, van-e beszéd; beszédszünetben a kodek nem küld beszédkereteket (csak ritkán egy-egy zajleíró SID-keretet). Nyereség: **GSM** – a mobil nem ad → kisebb akkumulátor-fogyasztás és kisebb interferencia (nagyobb rendszerkapacitás); **VoIP** – kevesebb csomag → sávszélesség-megtakarítás, statisztikus nyalábolással több hívás.
b) A **vevőoldalon (a dekódernél)**: a szünetekben a SID-keretekben kapott paraméterek alapján háttérzajt állít elő, mert teljes csendnél a hallgató azt hinné, megszakadt a kapcsolat.
**Hallgatói megoldás:** az a) rész lényegében helyes (GSM: nem ad, energiát spórol; VoIP: sávszélességet spórol); a b) rész ki van takarva.

---

## 4. feladat – Kvantáló √3 csúcstényezőjű jelre (60–108 kHz, 70 dB)

**Feladat.** Valós, $\sqrt3$ csúcstényezőjű, teljes kivezérlésű jel, komponensei 60–108 kHz között; legalább 70 dB jel-zaj viszony. a) Az átlapolódásmentességet biztosító összes $f_s$? b) Egy választott $f_s$ mellett a bitszám?

**Megoldás.**
a) **108 kHz ≤ f_s ≤ 120 kHz** vagy **f_s ≥ 216 kHz**.
b) $S/N=\frac{3}{c^2}2^{2n}\frac{f_s}{2B}$; $c=\sqrt3$ → $\frac{3}{c^2}=1$ (0 dB). $f_s=216$ kHz és 108 kHz-es visszaállító aluláteresztő esetén $\frac{f_s}{2B}=1$: $6{,}02n\ge70$ → $n\ge11{,}6$ → **12 bit**. ($f_s=112$ kHz és 60–108 kHz-es sávszűrő esetén $\frac{f_s}{2B}=\frac{112}{96}$, +0,7 dB → szintén 12 bit.)
**Hallgatói megoldás:** a) helyes. b) A végeredmény (12 bit) helyes, de **[HALLGATÓI MO HIBÁS]** a képletben az 1,76 dB-es tagot használta, ami szinuszra ($c=\sqrt2$) érvényes; $c=\sqrt3$-nál ez 0 dB. (Itt nem változtat az eredményen: $70/6{,}02=11{,}6$ → 12.)

---

## 5. feladat – Csillapított S komponens az FM-sztereóban

**Feladat.** Milyen következménnyel jár, ha az alapsávi FM-sztereó jelben az S komponens az M-hez képest 6 dB-lel csillapodik?

**Megoldás.** $S'=S/2$. A dekódolt jelek:
$$L'=\frac{M+S'}{2}=\frac{(L+R)+\frac12(L-R)}{2}=0{,}75L+0{,}25R,\qquad R'=0{,}25L+0{,}75R.$$
A csatornák **áthallanak egymásba**: a sztereó csatornaszétválasztás $20\lg\frac{0{,}75}{0{,}25}\approx$ **9,5 dB**-re romlik (a sztereókép „összeszűkül”, a hang a monó felé tolódik). A monó vétel ($M$) nem változik. (A megoldás a lapon ki van takarva.)

---

## 6. feladat – 8QAM konstellációk

**Feladat.** (Azonos a 2014.01.14-i 10. feladattal.) Három 8 pontos konstelláció, minimális távolság $2A$; átlagos adóteljesítmény, melyik a legenergiatakarékosabb?

**Megoldás.** Lásd `2014_01_14_kidolgozas.md`, 10. feladat: (a) $6A^2$, (b) $5{,}25A^2$, (c) $6A^2$ → **(b) a legtakarékosabb**. Az ábra ezen a fényképen nem olvasható, de a feladat szövege azonos a 2014.01.14-ivel, ahol a (b) elrendezés képről lemérhető: $(\pm A,0)$, $(0,\pm2A)$, $(\pm2A,\pm2A)$.
**Hallgatói megoldás:** **[HALLGATÓI MO HIBÁS]** – az átlagos **amplitúdót** ($\frac18\sum|s_i|$) számolta, nem az átlagteljesítményt ($\frac18\sum|s_i|^2$); a (b)-re felvett pontok ($4\times\sqrt8A$, $2\times A$, $2\times2A$) sem adnak mindenhol $2A$ minimális távolságot. A végső válasz („b a legtakarékosabb”) egyezik.

---

## 7. feladat – DVB-C csatornák száma

**Feladat.** 64-QAM, 8 MHz-es raszter, 15%-os emelt koszinuszos elemi jel, RS(204,188) kódolás – a forrásbitek a csatornabitek kb. 90%-át teszik ki. Hány 1,5 Mbit/s-os TV-csatorna fér el?

**Megoldás.** $B=\frac{1+\alpha}{T}$ → $\frac1T=\frac{8\ \text{MHz}}{1{,}15}=6{,}957$ MBd; 64-QAM: 6 bit/szimbólum → bruttó **41,7 Mbit/s**; nettó $41{,}7\cdot0{,}9=37{,}6$ Mbit/s (pontosan $188/204$-gyel 38,5 Mbit/s) → $37{,}6/1{,}5=25{,}0$ → **25 csatorna** (a pontos aránnyal 25,6 → szintén 25).
**Hallgatói megoldás:** 25 csatorna – **helyes**.

---

## 8. feladat – GSM, visszahívás barangoló előfizetőnek

**Feladat.** MS-A1 és MS-A2 az alfa előfizetője, MS-A2 a béta hálózatban barangol. MS-A1 visszahívja MS-A2-t. (a) A HLR-lekérdezéskor melyik VLR címét kapja vissza (b) melyik (eredetileg kérdező) MSC? (c) Melyik elem kerül lekérdezésre azzal kapcsolatban, hogy a hívott készülék tiltólistán van-e? (d) A hívás után MS-A2 SMS-t küld MS-A1-nek, aki közben barlangászik (nem elérhető). Melyik elemben tárolódik az SMS a kézbesítésig vagy lejáratig?

**Megoldás.**
(a) **VLR$_\beta$** (pontosabban a HLR$_\alpha$ a VLR$_\beta$-tól kapott MSRN-t adja vissza).
(b) **MSC$_\alpha$** (MS-A1 kiszolgáló MSC-je, amely itt GMSC-funkcióban kérdez; ha a hálózat külön GMSC-t használ, a GMSC$_\alpha$).
(c) **EIR$_\beta$** – a hívott MS-A2-t a béta hálózat szolgálja ki; a hívásfelépítéskor (paging után) az ő MSC-je ellenőrzi az IMEI-t a saját EIR-jénél (az MSC–EIR interfész hálózaton belüli, barangolásnál mindig a látogatott hálózat EIR-jét kérdezik).
(d) **SMSC$_\alpha$** – MS-A2 honos SMSC-je tárolja, amíg MS-A1 újra elérhető nem lesz (a HLR$_\alpha$ jelzi, ha MS-A1 visszajelentkezett).
**Hallgatói megoldás:** a) VLR$_\beta$ ✔, b) MSC$_\alpha$ ✔, **c) EIR$_\alpha$ – [HALLGATÓI MO HIBÁS]** (a hívott készülék a béta hálózatban van), d) SMSC$_\alpha$ ✔.

---

## 9. feladat – GSM-cella forgalma

**Feladat.** (Mint a 2014.01.14-i 9. feladat, itt kikötve: egyetlen szolgáltató.) Reuse 12, tartási idő 2 perc, blokkolás ≤ 1%. Óránként hány hívás egy cellában?

**Megoldás.** $124\cdot8/12\approx82$ csatorna/cella → $A\approx67$ Erl → $\lambda=67/2$ perc ≈ **2000 hívás/óra**.
**Hallgatói megoldás:** $128\cdot8/12\approx80$ csatorna, $A\approx65$ Erl, 1950 hívás/óra – a végeredmény nagyságrendileg jó, de **[HALLGATÓI MO HIBÁS]** a GSM 900-ban 124 (névlegesen 125) vivő van, nem 128; és $128\cdot8/12=85$, nem 80.

**Ellenőrzés:** Erlang-B: $N=82$, $B=1\%$ → $A=67{,}2$ Erl; $N=80$ → 65,4 Erl. ✔

---

## 10. feladat – Kraft-egyenlőtlenség, prefix kód

**Feladat.** a) Lehet-e egyértelműen megfejthető kódot készíteni a 2,2,3,3,3,4,4,4,4 hosszakkal? b) Készítsen prefix kódot a 2,2,3,3,3,5,5,5,5 hosszakkal.

**Megoldás.**
a) $\sum2^{-l_i}=2\cdot\frac14+3\cdot\frac18+4\cdot\frac1{16}=\frac{18}{16}>1$ → **nem** (a McMillan-tétel szerint egyértelműen megfejthető kódnál is teljesülnie kell a Kraft-egyenlőtlenségnek).
b) $2\cdot\frac14+3\cdot\frac18+4\cdot\frac1{32}=1$ → létezik. Pl.: **00, 01, 100, 101, 110, 11100, 11101, 11110, 11111**.
**Hallgatói megoldás:** a) helyes; b) 00, 11, 100, 101, 011, 01000, 01001, 01010, 01011 – **helyes** prefix kód (egyik kódszó sem eleje másiknak).
