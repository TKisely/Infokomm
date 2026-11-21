---
forras: "VikWiki/Infokom_vizsga_2016.06.07.pdf (4 oldal, szkennelt eredeti feladatlap)"
tartalom: "Infokommunikáció vizsga, 2016. június 7. – 7 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2016. június 7.

Minden részfeladat 1 pont, kivéve, ahol 2 pont van jelezve. Indoklás nélküli eredményt nem értékelnek.

---

## 1. feladat – AM-DSB a spektrumából

**Feladat.** A spektrum: 100 kHz – 2 V, 80 és 120 kHz – 0,5–0,5 V. a) Időfüggvény. b) Az oldalsávok teljesítménye az összteljesítményhez képest. c) Modulációs mélység.

**Megoldás.**
a) $f_v=100$ kHz, $f_m=20$ kHz:
$$s(t)=2\,[1+0{,}5\cos(2\pi\cdot20\,\text{kHz}\cdot t)]\cos(2\pi\cdot100\,\text{kHz}\cdot t)\ \text{V}=2\cos\omega_vt+0{,}5\cos\omega_{80}t+0{,}5\cos\omega_{120}t.$$
b) $P_v=\frac{2^2}{2}=2$, $P_{oldal}=2\cdot\frac{0{,}5^2}{2}=0{,}25$ → $\frac{P_{oldal}}{P_{össz}}=\frac{0{,}25}{2{,}25}=\frac19\approx$ **11,1%**.
c) $\frac{mU_v}{2}=0{,}5$ → **$m=0{,}5$**.

**Ellenőrzés:** $\frac{m^2/2}{1+m^2/2}=\frac{0{,}125}{1{,}125}=\frac19$. ✔

---

## 2. feladat – Forráskódolás

**Feladat.** a) Bináris forrás: „a” 90%, „b” 10%. Lehet-e prefix kód, amelynek egy szimbólumra eső átlagos hossza szigorúan kisebb 1-nél? Ha igen, tervezze meg (2 p). b) 4 egyformán valószínű szimbólumra („a”–„d”) lehet-e átlagosan 2 bitnél rövidebb kód? (1 p)

**Megoldás.**
a) **Igen**, ha több szimbólumot együtt (blokkban) kódolunk – szimbólumonként kódolva minden kódszó legalább 1 bit, ez nem menne. Az entrópia $H=-0{,}9\lg_20{,}9-0{,}1\log_20{,}1=0{,}469$ bit < 1, tehát van rá lehetőség. Példa: szimbólumpárok Huffman-kódja:
| pár | valószínűség | kódszó |
|---|---|---|
| aa | 0,81 | 0 |
| ab | 0,09 | 10 |
| ba | 0,09 | 110 |
| bb | 0,01 | 111 |
Átlag $0{,}81\cdot1+0{,}09\cdot2+0{,}09\cdot3+0{,}01\cdot3=1{,}29$ bit/pár → **0,645 bit/szimbólum < 1**. (Hosszabb blokkokkal tovább közelíthető a 0,469-hez.)
b) **Nem.** Az entrópia $\log_24=2$ bit/szimbólum, és egyértelműen megfejthető kód átlagos hossza (blokkos kódolással sem) nem lehet kisebb az entrópiánál; a 2 bites fix hosszú kód már optimális.

**Ellenőrzés:** a) Kraft: $2^{-1}+2^{-2}+2\cdot2^{-3}=1$; prefixmentes. ✔

---

## 3. feladat – GSM-cellák Győrben

**Feladat.** Győr területe ≈ 170 km², a frekvencia-újrahasznosítási tényező 12, a szolgáltatók kb. 85 cellát használnak. a) Egy átlagos klaszter mérete (900 MHz)? b) Nagyságrendileg hányan telefonálhatnak egyszerre? c) Egy szolgáltató 40 FDM-csatornát (vivőt) használ – hányan telefonálhatnak nála egyszerre egy cellában? d) VAD, előnye a GSM-ben? e) FNR és AuC szerepe?

**Megoldás.**
a) Egy cella átlagosan $170/85=2$ km² → egy klaszter (12 cella) **≈ 24 km²** (a területen kb. 7 klaszter van).
b) Klaszterenként a teljes sáv egyszer: 124 vivő × 8 időrés ≈ 1000 beszélgetés; $85/12\approx7$ klaszter → **≈ 7000 egyidejű beszélgetés** (nagyságrendileg).
c) 40 vivő / 12 cella ≈ 3,3 vivő/cella → $3{,}3\cdot8\approx$ **26 egyidejű beszélgetés** cellánként (a vezérlőcsatornák miatt valamivel kevesebb).
d) **VAD** (beszédaktivitás-detektor): beszédszünetben a mobil nem ad (DTX), csak ritka zajleíró kereteket; a vevő kényelmi zajt kever. Előny: **kisebb akkumulátor-fogyasztás, kisebb interferencia** → nagyobb kapacitás.
e) **FNR:** számhordozhatóság – megmondja, hogy egy hívószám melyik hálózathoz/HLR-hez tartozik. **AuC:** az előfizetők titkos kulcsainak (Ki) tárolása és a hitelesítési hármasok (RAND, SRES, Kc) előállítása a **hitelesítéshez** (A3) és a rádiós **titkosítás** kulcsához (A8 → Kc, A5).

---

## 4. feladat – MSK

**Feladat.** $f_1=22\,200$ Hz, $f_2=24\,200$ Hz. a) Frekvencialöket? b) Adatsebesség? c) Miért előnyösebb az MSK az egyszerű FSK-nál? Hol használnak GMSK-t?

**Megoldás.** (a–b azonos a 2014.12.15-i 1. feladattal.)
a) **±1000 Hz** (vivő 23,2 kHz).
b) MSK: $|f_1-f_2|=\frac{1}{2T}$ → **4000 bit/s**.
c) Az MSK **folytonos fázisú** FSK a legkisebb olyan frekvenciaközzel ($h=0{,}5$), amelynél a két jel koherens vételnél még ortogonális → **keskeny sávszélesség**, **állandó burkoló** (nemlineáris, nagy hatásfokú erősítővel is torzításmentes), a spektrum gyorsan lecseng (kis szomszédcsatornás zavar). **GMSK** (Gauss-szűrt MSK, BT = 0,3): a **GSM** rádiós interfészén (és pl. DECT-ben, Bluetooth-ban GFSK-ként).

---

## 5. feladat – Média IP felett

**Megoldás.**
a) A best-effort IP nem garantál semmit: **csomagvesztés**, **változó késleltetés (jitter)**, nagy késleltetés torlódáskor, **sorrendcsere**, nincs garantált sávszélesség – a valós idejű média ezekre érzékeny.
b) A TCP a vesztett csomagokat **újraküldi**, ami RTT-nyi többletkésleltetést okoz (a későn érkező hang/kép már használhatatlan), a sorrendhelyes kézbesítés miatt egy vesztés a mögötte lévő csomagokat is feltartja (head-of-line blocking), a torlódásvezérlés pedig csökkenti a küldési sebességet – a valós idejű forgalomnál inkább elviselünk némi vesztést (PLC, FEC), mint a késleltetést.
c) **IGMP** (Internet Group Management Protocol): a hosztok ezzel jelzik a helyi routernek, hogy mely **multicast csoportokhoz** akarnak csatlakozni/kilépni (join/leave) – pl. IPTV-nél a csatornaváltás = kilépés az egyik és belépés egy másik multicast csoportba.

---

## 6. feladat – CDMA

**Feladat.** a) Állítsa elő a forrásjel és a szórókód szorzataként az adó kimeneti jelét (1 p). b) A vevőnél megjelenő összetett jelből a szórókód segítségével dekódolja a vett jelet (2 p).

**Leolvasás (nagyított ábráról).** a) A szórókód chipenként váltakozik (−1, +1, −1, +1, …), egy forrásbit 2 chip. A forrásjel bitjei (a 2. chiptől): **−1, +1, +1, −1, +1, −1** (az ábra elején egy félbitnyi +1). b) Az összetett jel félchipenként 0, ±2 értékű; a szórókód ugyanaz. (A leolvasást az b) rész dekódolása igazolja: a vevő oldalon visszanyert bitsorozat bitről bitre egyezik az a) rész forrásjelével.)

**Megoldás.**
a) Kimenet = forrásjel × szórókód, chipenként. Mivel bitenként a kód (+1, −1), a kimenet bitenként $d_k\cdot(+1,-1)$:
bitek −1, +1, +1, −1, +1, −1 → kimenet **(−1,+1), (+1,−1), (+1,−1), (−1,+1), (+1,−1), (−1,+1)** (az első, csonka chip: $(+1)\cdot(-1)=-1$).

![](abrak/cdma_ado.svg)

b) **Vett jel = összetett jel × szórókód** (félchipenként), majd **bitidőnként összegezzük (integráljuk)**, és az előjel alapján döntünk:
| bit | szorzat félchipenként | összeg | döntés |
|---|---|---|---|
| 1. | 0, −2, 0, −2 | −4 | **−1** |
| 2. | +2, 0, +2, 0 | +4 | **+1** |
| 3. | 0, +2, 0, +2 | +4 | **+1** |
| 4. | −2, 0, −2, 0 | −4 | **−1** |
| 5. | +2, 0, +2, 0 | +4 | **+1** |
| 6. | 0, −2, … | <0 | **−1** |
**Eredeti forrásjel: −1, +1, +1, −1, +1, −1** – megegyezik az a) rész forrásjelével; a másik felhasználó (más, ortogonális kódú) jelének hozzájárulása bitidőre integrálva nulla.

![](abrak/cdma_vevo.svg)


**Ellenőrzés:** a dekódolt sorozat bitről bitre egyezik az a) pontbeli forrásjellel, ami a leolvasás helyességét is megerősíti. ✔

---

## 7. feladat – Autókölcsönző (Erlang-B)

**Megoldás.** (Azonos a 2012.01.17-i A csoport 7. feladatával.) $A=4\cdot1{,}5=6$ Erl, $N=2$.
a) $B=\frac{18}{1+6+18}=$ **0,72**. b) Autónként $\frac{6\cdot0{,}28}{2}=$ **0,84**. c) $1{,}68\cdot100-2\cdot60=$ **48 USD/nap**.
