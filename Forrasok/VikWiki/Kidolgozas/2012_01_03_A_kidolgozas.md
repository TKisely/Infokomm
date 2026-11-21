---
forras: "VikWiki/Infokomm_vizsga_2012_01_03_A.pdf (4 oldal, szkennelt, 300 dpi)"
tartalom: "Infokommunikáció vizsga, 2012. január 3., A csoport – 7 feladat (az 5. hat tesztkérdés)"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2012. január 3., A csoport

Pontozás: 1. 3p, 2. 2p, 3. 3p, 4. 3p, 5. (teszt) 6p, 6. 2p, 7. 3p.

---

## 1. feladat – FM-jel oszcilloszkópképről

**Feladat.** Az ábrán a modulált és a moduláló jel. Beállítások: 1. csatorna 5 V/osztás, 2. csatorna 2 V/osztás, 100 µs/osztás; mért értékek: Freq(1) = 50 kHz, Pk-Pk(1) = 14,8 V, Freq(2) = 2,500 kHz.
a) Gyanítjuk, hogy ez nem AM-DSB jel – érvek? b) Tételezzük fel, hogy FM. Mekkora a frekvencialöket? c) Mekkora a fázislöket?

**Megoldás.**
a) - A modulált jel **burkolója állandó** (csúcstól csúcsig mindenhol 14,8 V), AM-DSB-nél a burkoló a moduláló jellel együtt változna (DSB-SC-nél még nullára is csökkenne, és fázisugrás lenne).
- Ehelyett a **nullátmenetek sűrűsége (a pillanatnyi frekvencia) változik** periodikusan, a moduláló jellel szinkronban: a moduláló jel maximumánál a legsűrűbb, a minimumánál a legritkább → frekvenciamoduláció.

b) A pillanatnyi periódust a képről mértem (natív 300 dpi-s kép, 116 képpont/osztás = 0,86 µs/képpont):
- legsűrűbb rész (moduláló maximum): ~16–17 képpont ≈ 14 µs → $f_{max}\approx70$ kHz,
- legritkább rész (moduláló minimum): ~37–38 képpont ≈ 33 µs → $f_{min}\approx30$ kHz.
$$\Delta f=\frac{f_{max}-f_{min}}{2}\approx20\ \text{kHz}\quad(f_v=50\ \text{kHz},\ f_m=2{,}5\ \text{kHz}).$$
**Tisztázva:** a tárgy gyűjteményében ugyanehhez a képernyőképhez az oktató megjegyzése: a jelet ő állította be, **$f_D=25$ kHz** („tudom, mert én állítottam be”); saját képleolvasása ($\Phi\approx8{,}4$, pontosabban 10,5 rad) szintén a képről mért érték alá esett. A képernyő a jelet mintavételezve, kis felbontással rajzolja ki, ezért a legsűrűbb szakasz periódusa a képen hosszabbnak látszik. **Válasz: $f_D\approx$ 20–25 kHz, a beállított érték 25 kHz.**

c) $\Delta\varphi=\beta=\frac{\Delta f}{f_m}=\frac{25}{2{,}5}=$ **10 rad** (a képről mért 20 kHz-ből 8 rad).

**Ellenőrzés:** a lefelé csúcsok helyzetére (40 csúcs) illesztett modell $\varphi(t)=2\pi f_vt+\beta\sin(2\pi f_mt+\theta)$, $f_v=50$ kHz, $f_m=2{,}5$ kHz rögzítve: legjobb illeszkedés $\Delta f=20{,}0$ kHz (a felső csúcsokra 18,5 kHz) – ez a képből kinyerhető érték; az oktatói 25 kHz-es beállítással a különbség a kirajzolás pontatlanságából adódik. ✔

---

## 2. feladat – VoIP, G.729

**Feladat.** G.729, 8 kbit/s; szegmens 10 byte; csomagonként egy szegmens; fejrészek 66 byte. a) Csomagsebesség? b) Hívásonkénti sávszélesség?

**Megoldás.**
a) $10\cdot8=80$ bit = 10 ms beszéd → **100 csomag/s**.
b) $(10+66)\cdot8\cdot100=$ **60,8 kbit/s** (a fejrész 7,6-szorosa a hasznos tehernek).

---

## 3. feladat – 8 pontú QAM tribitekkel

**Feladat.** A két kvadratúra-csatorna amplitúdóit tribitek határozzák meg:

| tribit | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| $c_k$ | +1 | +1 | −1 | −1 | +1 | +1 | −1 | −1 |
| $d_k$ | +1 | +3 | +1 | +3 | −1 | −3 | −1 | −3 |

a) Konstellációs diagram. b) A várt $(c_k,d_k)$ helyett a (−0,95; +2,9), (+1,3; −0,75), (−1,5; −2,5) sorozatot vesszük – rajzolja be. c) Mely tribit-sorozat okozta a legnagyobb valószínűséggel, és miért?

**Megoldás.**
a) 2×4-es téglalap rács: $c\in\{\pm1\}$, $d\in\{\pm1,\pm3\}$. Pontok: (+1,+1) 000, (+1,+3) 001, (−1,+1) 010, (−1,+3) 011, (+1,−1) 100, (+1,−3) 101, (−1,−1) 110, (−1,−3) 111.
b) A vett pontok a diagramba berajzolandók.

![](abrak/qam8_tribit.svg)

c) Fehér Gauss-zajnál a legvalószínűbb az a pont, amelyik **legközelebb** van (minimális euklideszi távolság); döntési határok: $c$-ben 0, $d$-ben 0 és ±2.
- (−0,95; 2,9) → (−1, +3) → **011**
- (1,3; −0,75) → (+1, −1) → **100**
- (−1,5; −2,5) → (−1, −3) (távolság² 0,5; a (−1,−1) pontig 2,5) → **111**
**Legvalószínűbb sorozat: 011 100 111.**

---

## 4. feladat – Sáváteresztő jel (60–108 kHz) mintavételezése

**Feladat.** a) Melyek a büntetlenül választható mintavételi frekvenciák? b) Válasszon célszerű értéket, rajzolja fel a mintasorozat spektrumát; milyen szűrők kellenek? c) Hány bit kell legalább 70 dB kvantálási jel-zaj viszonyhoz?

**Megoldás.** (A feladat lényegében azonos a 2008. január 17-i 1. feladattal.)
a) $B=48$ kHz, $n\le\lfloor108/48\rfloor=2$: **108 kHz ≤ f_s ≤ 120 kHz** vagy **f_s ≥ 216 kHz**.
b) **$f_s=112$ kHz** (egyforma, 8 kHz-es védősávok). Spektrum: 4–52 kHz (fordított), 60–108 kHz, 116–164 kHz (fordított), 172–220 kHz, …. Szűrők: mintavétel előtt és visszaállításkor is **60–108 kHz-es sáváteresztő**.

![](abrak/mintavetel_60_108_fs112.svg)

c) Teljes kivezérlésű szinuszra $1{,}76+6{,}02n\ge70$ → **12 bit**. (A tárgy gyűjteménye ugyanerre a feladatra a szinuszos képlettel 12 bitet ad.)

**Ellenőrzés:** gépi átfedés-vizsgálat: átlapolódásmentes 108–120 kHz és 216 kHz felett. ✔

---

## 5. feladat – Teszt

| | A | B | C | D | 0 |
|---|---|---|---|---|---|
| 5.1 | | X | | | |
| 5.2 | | | X | | |
| 5.3 | | | X | X | |
| 5.4 | X | X | | X | |
| 5.5 | X | X | | | |
| 5.6 | | | X | X | |

**5.1** A hangosság mértéke a phon: A (100 Hz, 25 dB) a küszöb körül, ~0 phon; **B 20 phon**; C 10 phon; D (9 kHz, 22 dB) ~10 phon → **B**.

**5.2** **C ✔**: a bázisállomástól (a magasban) távolodva a mobil teljesítményszabályozása maximálisra emeli az adóteljesítményt; a sok, nagy teljesítménnyel adó készülék (és felharmonikusai, intermodulációs termékei) zavarhatja a fedélzeti rádió- és navigációs berendezéseket. A ✘ (a készülék nem „hangolódik rá” a légiirányítás frekvenciájára), B ✘ (értelmetlen), D ✘ (eltérő frekvenciasávok, nincs ilyen interferencia). (A tiltás hivatalos indoka a fedélzeti navigációs és kommunikációs elektronika zavarásának kockázata; a négy állítás közül csak a C ír le ilyen fizikai mechanizmust.)

**5.3** Jobb mikrofon, 720 Hz: M → 720 Hz; S → 37 280 és **38 720 Hz** (D ✔); **19 kHz** pilot (C ✔); 18 280 Hz (A ✘) és 19 720 Hz (B ✘) nincs.

**5.4** VAD: **A ✔**, **B ✔** (közvetetten több csatorna), C ✘ (a VAD az adóoldalon dolgozik), **D ✔** (kényelmi zaj a vevőben).

**5.5** Prioritáskezelés: **A ✔** (szigorú prioritásnál folyamatos magas prioritású forgalom mellett az alacsony „éhezik”); **B ✔** (a WFQ súlyozottan minden osztályt kiszolgál); C ✘ (a WFQ a **súlyokkal arányos**, nem egyforma sávszélességet ad); D ✘ (nem kiszolgálási időt egyenlít ki).

**5.6** A2 (β-ban barangol) SMS-t küld A1-nek: MSC$_\beta$ → SMSC$_\alpha$ → (HLR$_\alpha$) → MSC$_\alpha$ → **C, D**.

---

## 6. feladat – Üzlet (veszteséges rendszer)

**Feladat.** A vásárlók érkezése közötti átlagos idő 10 perc. Az üzletben 4 vásárló fér el, a többi nem vár. Mekkora a kiszolgálási idő, ha átlagosan 0,6 vásárló tartózkodik az üzletben, és annak valószínűsége, hogy a vásárló nem mehet be, 0,2%?

**Megoldás.** Erlang-veszteséges rendszer, $N=4$. Az üzletben tartózkodók átlagos száma = átvitt forgalom: $A(1-B)=0{,}6$ → $A=0{,}6/0{,}998=0{,}601$ Erl.
$$h=\frac{A}{\lambda}=0{,}601\cdot10\ \text{perc}\approx\mathbf{6\ perc}.$$

**Ellenőrzés:** Erlang-B-vel $B(0{,}6;4)=0{,}30\%$ – a megadott 0,2% kissé eltér (a feladat adatai túlhatározottak); ha a 0,2%-ból számolnánk $A$-t, $A=0{,}535$ Erl → $h=5{,}4$ perc, de akkor az átlagos létszám 0,53 lenne. A kérdés az átlagos létszámból egyértelműen **≈ 6 perc** – a tárgy gyűjteményének megoldása is 6 percet ad, a 0,2% csak elhanyagolható korrekció.

---

## 7. feladat – Szabadtéri összeköttetés 100 MHz-en

**Feladat.** (Azonos a 2012.05.29-i A csoport 3. feladatával, plusz c) pont.) Moduláló 25 kHz, löket 75 kHz, adóantenna 22 dB, betáplált 20 dBW, vevőantenna (5 km) 13 dB, a szakasz teljes csillapítása 85 dB.
a) Vett teljesítmény? b) Sávszélesség analóg FM-nél? c) Milyen rádiós szolgáltatás működik ebben a sávban?

**Megoldás.**
a) A tárgyban a szakaszcsillapítás $a_{sz}=10\lg\frac{P_{be}}{P_{ki}}$ (az antennanyereségekkel együtt): $P_R=20-85=-65$ dBW = **0,32 µW** (részletesen lásd a 2012.05.29-i kidolgozás 3. feladatát).
b) Carson: $2(75+25)=$ **200 kHz**.
c) A 100 MHz az **URH-FM műsorszóró sávba (87,5–108 MHz)** esik – éppen a 75 kHz-es löket és a 200 kHz-es csatorna is a sztereó FM rádióműsorszórás jellemzője.
