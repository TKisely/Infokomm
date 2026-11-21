---
forras: "VikWiki/Infokomm_vizsga_2013_06_11.pdf (4 oldal, szkennelt)"
tartalom: "Infokommunikáció vizsga, 2013. június 11. – 6 feladat"
jeloles: "[HIÁNYOS ADAT] = a forrásból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2013. június 11.

Pontozás: az 1. és a 4. oldal feladatai (1., 2., 5., 6.) 3–3 pont, a 3. és 4. feladat 5–5 pont. Indoklás nélküli eredményt nem értékelnek.

---

## 1. feladat – AM/SSB-SC/LSB

**Feladat.** Adott egy jel spektruma (táblán), egyenszintje zérus. a) Az AM/SSB-SC/LSB jel spektruma? b) Javaslat az előállításra (spektrumábrával)? c) Az SSB előnye és hátránya a DSB-vel szemben?

[HIÁNYOS ADAT: a táblára rajzolt spektrum nincs a lapon. Konkrét számokkal (100–500 Hz-es jel, 5 kHz-es vivő) lásd `2010_01_06_kidolgozas.md` 1. feladat.]

**Megoldás.**
a) A moduláló jel $X(f)$ ($0<f_a\le|f|\le f_h$) spektrumából csak az alsó oldalsáv marad: $f_v-f_h\le|f|\le f_v-f_a$ tartományban, frekvenciában **tükrözve** (a moduláló jel legalacsonyabb komponense kerül a vivőhöz legközelebb); vivő és felső oldalsáv nincs.

![](abrak/lsb_altalanos.svg)

b) **Szűrős módszer:** szorzó (kiegyenlített modulátor) a vivővel → DSB-SC (két oldalsáv, köztük $2f_a$ széles rés, mert egyenkomponens nincs) → az alsó oldalsávot átengedő sávszűrő (a rés miatt véges meredekségű szűrő is elég). Alternatíva: fázisos (Hilbert-transzformátoros) módszer: $x(t)\cos\omega_vt+\hat x(t)\sin\omega_vt$.

![](abrak/ssb_szuros.svg)

c) **Előny:** fele sávszélesség, nincs vivőre és redundáns oldalsávra pazarolt teljesítmény. **Hátrány:** bonyolultabb előállítás és vétel (koherens demoduláció, pontos helyi vivő kell; a frekvenciahiba hangmagasság-eltolódást okoz), a 0 Hz közeli komponensek nehezen vihetők át.

---

## 2. feladat – Rövid botantenna hatásos felülete

**Feladat.** A rövid ($l\ll\lambda$), függőleges botantenna nyeresége sík föld felett 4,76 dB = 3. a) Hatásos felülete 600 kHz-en? ($4\pi\approx12{,}5$) b) Mit jelent a $G=3$? c) Nagyságrendileg mekkora egy 600 kHz-es és egy 100 MHz-es adás hatótávolsága? Miből adódik a különbség?

**Megoldás.**
a) $\lambda=c/f=3\cdot10^8/6\cdot10^5=500$ m.
$$A_{eff}=\frac{G\lambda^2}{4\pi}=\frac{3\cdot500^2}{12{,}5}=\mathbf{60\,000\ m^2}.$$
b) A fő sugárzási irányban (a föld síkjában) a teljesítménysűrűség háromszorosa annak, amit ugyanakkora betáplált teljesítményű izotróp antenna hozna létre. (A rövid dipólus iránytényezője 1,5; a föld feletti, féltérbe sugárzó botantennánál ez megduplázódik → 3.) Vételnél ugyanez: az antenna 3-szor annyi teljesítményt vesz fel, mint egy izotróp antenna ($\lambda^2/4\pi$ hatásos felület).
c) - **600 kHz (középhullám):** a felületi (föld-) hullám követi a föld görbületét, nappal **több száz km** (~100–300 km), éjjel az ionoszféráról visszavert térhullámmal **1000 km fölött** is.
- **100 MHz (URH):** közel optikai terjedés, a rádióhorizont korlátozza: **néhány tíz km** (pl. 300 m-es toronyról, 10 m-es vevőantennával ~80 km).
- A különbség **nem az antennanyereségből** adódik (az ugyanakkora), hanem a terjedési módokból: alacsony frekvencián a felületi hullám kis csillapítással elhajlik a föld görbülete mentén és az ionoszféra visszaveri a hullámot, URH-n egyik sem érvényesül. (Ráadásul azonos nyereségnél a hatásos felület $\lambda^2$-tel arányos: a 600 kHz-es antenna ugyanabból a teljesítménysűrűségből $(100\ \text{MHz}/600\ \text{kHz})^2\approx28\,000$-szer több teljesítményt vesz fel.)

**Ellenőrzés:** $3\cdot250\,000/(4\pi)=59\,683$ m² ≈ 60 000 m². ✔

---

## 3. feladat – Két bináris lineáris kód

**Feladat.**
$C_1:\ u_1u_2u_3u_4\to u_1u_2u_3u_4p_1p_2p_3$, $p_1=u_1\oplus u_2\oplus u_4$, $p_2=u_1\oplus u_3\oplus u_4$, $p_3=u_2\oplus u_3\oplus u_4$.
$C_2:\ u_1u_2u_3u_4\to u_1u_2u_3u_4p_1p_2p_3p_4$, ugyanazokkal a $p_1,p_2,p_3$-mal és $p_4=p_1\oplus p_2\oplus p_3$.
a) $C_1$ összes kódszava. b) $C_1$ paritásellenőrző mátrixa; hány bites szindrómák? c) Mi lehetett az üzenet, ha $C_1$-gyel a 0110000 szót vettük? Biztos? d) $C_2$ generátormátrixa, ha létezik. e) Melyik kód tud több bithibát biztosan észlelni, ill. javítani?

**Megoldás.**
a) $C_1$ 16 kódszava ($u_1u_2u_3u_4\,p_1p_2p_3$):
0000000, 0001111, 0010011, 0011100, 0100101, 0101010, 0110110, 0111001, 1000110, 1001001, 1010101, 1011010, 1100011, 1101100, 1110000, 1111111.

b) $G_1=[I_4\,|\,P]$, $P=\begin{pmatrix}1&1&0\\1&0&1\\0&1&1\\1&1&1\end{pmatrix}$ (sorok: $u_1..u_4$, oszlopok: $p_1p_2p_3$), és
$$H_1=[P^T\,|\,I_3]=\begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix}.$$
A szindróma $s=Hv^T$ **3 bites** (7 nem nulla érték = 7 egyszeres hibahely: ez a (7,4) Hamming-kód).

c) A 0110000 szó szindrómája: az üzenetrészből számolt paritás $p=(1,1,0)$, a vett paritás $(0,0,0)$ → $s=(1,1,0)$ = $H_1$ 1. oszlopa → **$u_1$ hibás**, a javított kódszó 1110000, **az üzenet 1110**.
**Nem biztos:** a kód $d_{min}=3$, csak egy hibát javít; ha két hiba történt (pl. a küldött 0110110 két paritásbitje romlott el), a dekóder tévesen javít. A döntés a legvalószínűbb (legkevesebb hibát feltételező) eset.

d) $p_4=p_1\oplus p_2\oplus p_3=(u_1\oplus u_2\oplus u_4)\oplus(u_1\oplus u_3\oplus u_4)\oplus(u_2\oplus u_3\oplus u_4)=u_4$. Minden paritásbit az üzenetbitek lineáris (XOR) kombinációja, tehát a kód lineáris, **a generátormátrix létezik**:
$$G_2=\left(\begin{array}{cccc|cccc}1&0&0&0&1&1&0&0\\0&1&0&0&1&0&1&0\\0&0&1&0&0&1&1&0\\0&0&0&1&1&1&1&1\end{array}\right).$$

e) **Egyformák.** $C_1$: $d_{min}=3$ → 2 hibát biztosan jelez, 1-et javít. $C_2$-ben $p_4=u_4$ csak megismétli az $u_4$-et; a $C_1$ súlyú 3-as, $u_4=0$-s kódszavaiból (pl. 1000110 → 10001100) 3 súlyú $C_2$-kódszó lesz, így **$C_2$ $d_{min}$-je is 3**: szintén 2 hibát jelez, 1-et javít. (Ha $p_4$ a teljes kódszó paritása volna – valódi kiterjesztett Hamming-kód –, $d_{min}=4$ lenne és 3 hibát jelezne.)

**Ellenőrzés:** gépi felsorolás: $C_1$ és $C_2$ minimális nem nulla súlya egyaránt 3; a 0110000-hoz legközelebbi kódszó az 1110000 (távolság 1), a következők 2 távolságra. ✔

---

## 4. feladat – GSM, kölcsönös barangolás

**Feladat.** MS-A az alfa előfizetője, de a béta hálózatban barangol; MS-B a béta előfizetője, de az alfa hálózatban barangol. Az ábrán mindkét hálózatban AuC, HLR, FNR, EIR, GMSC, VLR, MSC, SMSC, BSC, BTS. MS-A felhívja MS-B-t.
a) Melyik HLR-t kérdezik le? b) Melyik elemet kérdezik le a hívó készülékének letiltásával kapcsolatban? MS-B kézzel bontja a hívást: c) melyik elem értesül erről először? d) mely elemek értesülnek? MS-A SMS-t küld MS-B-nek: e) melyik SMSC-nek adja fel? f) melyik SMSC próbálja kézbesíteni? Továbbá: az AuC szerepe; mit jelent, hogy a GSM FDM-et és TDM-et is használ?

**Megoldás.**
a) **HLR$_\beta$** – a hívott MS-B honos HLR-je (MS-B száma béta-szám; a béta GMSC – itt a béta hálózatban lévő hívó kiszolgáló MSC-je – kérdezi le, a HLR$_\beta$ az alfa VLR-től MSRN-t kér).
b) **EIR$_\beta$** – a hívó MS-A-t a béta hálózat MSC/VLR-je szolgálja ki, az ellenőrzi az IMEI-t a saját EIR-jénél.
c) **BTS$_\alpha$** – MS-B az alfa hálózatban van; a bontási üzenet rádión először az alfa BTS-hez érkezik (logikailag az alfa MSC dolgozza fel).
d) A teljes hívásútvonal elemei: **BTS$_\alpha$, BSC$_\alpha$, MSC$_\alpha$** (VLR$_\alpha$), majd a béta oldalon az **MSC$_\beta$** (MS-A kiszolgálója; mivel MS-B béta-számát hívta, ez az MSC maga végezte a HLR$_\beta$-lekérdezést, GMSC-funkcióban), **BSC$_\beta$, BTS$_\beta$** és végül MS-A. A HLR-ek, VLR-ek a bontásról nem értesülnek (a hívásútvonalnak nem részei).
e) **SMSC$_\alpha$** – MS-A SIM-jén beállított honos SMSC (a béta MSC-n keresztül adja fel).
f) **SMSC$_\alpha$** – ugyanaz az SMSC kézbesít: lekérdezi a HLR$_\beta$-t MS-B helyéről, és az MSC$_\alpha$-n keresztül kézbesít.

**AuC (Authentication Centre, hitelesítési központ):** tárolja az előfizetők titkos kulcsát (Ki), és véletlen számból (RAND) előállítja a hitelesítési hármasokat (RAND, SRES, Kc) – az A3 algoritmussal a hitelesítéshez (SRES), az A8-cal a rádiós titkosítás kulcsához (Kc). A hármasokat a HLR-en keresztül a VLR kapja meg.

**FDM + TDM:** a GSM-sáv 200 kHz-es vivőkre van osztva (FDMA; ráadásul a fel- és lefelé irány külön sávban van – FDD), és minden vivőn 8 időrés van (TDMA): egy beszélgetés egy vivő egy időrését használja (4,615 ms-os keretenként 577 µs). A két módszer együtt adja a csatornát; frekvenciaugratás esetén a vivő is változik keretenként.

---

## 5. feladat – Voice Activity Detector

**Feladat.** a) Milyen előnnyel jár a VAD a GSM-ben, és miért? b) A VoIP-ben? c) VAD-aktivitás mellett hogyan tartják fenn a vevő oldali emberben a csatorna működésének élményét?

**Megoldás.**
a) **GSM (DTX – szakaszos adás):** beszédszünetben a mobil nem ad (csak ritka SID-kereteket) → **kisebb akkumulátor-fogyasztás**, és **kisebb interferencia** a többi cellában (sűrűbb frekvencia-újrahasznosítás, nagyobb kapacitás). Egy beszélgetésben átlagosan csak ~40–50% az aktív beszéd.
b) **VoIP:** szünetben nem küldenek csomagot → **sávszélesség-megtakarítás**, statisztikus nyalábolással ugyanazon a linken több hívás vihető át.
c) **Kényelmi zaj (comfort noise generation):** a vevő a szünetekben az adótól kapott ritka zajleíró (SID) keretek alapján háttérzajt generál; teljes csend esetén a hallgató azt hinné, megszakadt a kapcsolat.

---

## 6. feladat – Huffman-kód

**Feladat.** Memóriamentes forrás, {A, B, C}, valószínűségek 50%, 25%, 25%, pontosan 20 000 szimbólum/s. a) Bináris Huffman-kód. b) Várhatóan hány bit/s? c) Mennyire közelíti a veszteségmentes kódolás alsó határát?

**Megoldás.**
a) B és C összevonása (0,5), majd A-val: **A → 0, B → 10, C → 11**.
b) Átlagos kódszóhossz $\bar l=0{,}5\cdot1+0{,}25\cdot2+0{,}25\cdot2=1{,}5$ bit/szimbólum → $20\,000\cdot1{,}5=$ **30 000 bit/s**.
c) Entrópia $H=0{,}5\cdot1+2\cdot0{,}25\cdot2=1{,}5$ bit/szimbólum → alsó határ 30 000 bit/s. **A kód pontosan eléri az alsó határt** (a valószínűségek 2 negatív egész hatványai, ezért a Huffman-kód optimális és a redundanciája nulla).

**Ellenőrzés:** Kraft-egyenlőtlenség $2^{-1}+2^{-2}+2^{-2}=1$ (teljes, prefix kód). ✔
