---
forras: "VikWiki/Infokomm_vizsga_2013_12_16.pdf (4 oldal, szkennelt)"
tartalom: "Infokommunikáció elővizsga, 2013. december 16. – 10 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció elővizsga – 2013. december 16.

Pontozás: az 1. és 9. feladat 3–3 pont, a többi 2–2 pont. Indoklás nélküli eredményt nem értékelnek.

---

## 1. feladat – Mintavételezés, 40 dB-es szűrők

**Feladat.** 8 kHz-es mintavételű rendszer a 2 V-os, 1,5 kHz-es jelet amplitúdóhelyesen viszi át. Az előszűrő és a visszaállító szűrő is jó minőségű, 4 kHz sávhatárú aluláteresztő, zárótartománybeli csillapítása 40 dB.
a) Milyen komponensek jelenhetnek meg a kimeneten 3,5 kHz-es szinuszos bemenetnél? (Miért?)
b) Milyen frekvenciájú, 2 mV-nál nagyobb komponensek lesznek a kimeneten 1,5 kHz-es négyszögjel esetén?
c) Ugyanez előszűrő nélkül.

**Modell:** $H(f)=1$, ha $|f|<4$ kHz, és $0{,}01$ (−40 dB) felette (ideálisan éles átmenet); a D/A impulzusokból állít vissza, az áteresztősávban amplitúdóhelyesen. A négyszögjel amplitúdóját a feladat nem adja meg – **2 V-os** (±2 V) négyszöget feltételezek, a szinuszéval azonos szinttel. [HIÁNYOS ADAT: a négyszögjel amplitúdója a lapon nincs megadva; más amplitúdónál minden érték arányosan változik, a 2 mV-os határ miatt a lista is.]

**Megoldás.**
a) A 3,5 kHz átjut az előszűrőn; a mintavétel után a képei $8\pm3{,}5$ = **4,5 kHz**, 11,5 kHz, 12,5 kHz, … A kimeneti szűrő a 3,5 kHz-et változatlanul, a képeket (köztük a hallható 4,5 kHz-et) **40 dB-lel csillapítva** (1%-os amplitúdóval) engedi át. Tehát a kimeneten a 3,5 kHz-es hasznos jel mellett kis, 1%-os szintű 4,5 kHz-es (és magasabb) komponensek jelenhetnek meg – a szűrő véges zárócsillapítása miatt.

b) A négyszögjel páratlan felharmonikusai $\frac{4\cdot2}{\pi k}$ V: 1,5 kHz – 2,55 V; 4,5 kHz – 0,85 V; 7,5 kHz – 0,51 V; 10,5 kHz – 0,36 V; … A 4 kHz feletti harmonikusokat az előszűrő 1%-ra csökkenti, majd 8 kHz-es mintavétellel visszahajlanak: 4,5 → 3,5; 7,5 → 0,5; 10,5 és 13,5 → 2,5; 16,5 → 0,5; 19,5 → 3,5 kHz stb. (Mivel $1{,}5/8=3/16$, minden harmonikus a 0,5; 1,5; 2,5; 3,5 kHz-es frekvenciák valamelyikére esik, és az ugyanoda eső komponensek előjelesen összeadódnak.) A 2 mV-nál nagyobb kimeneti komponensek:
| frekvencia | amplitúdó |
|---|---|
| **1,5 kHz** | 2,55 V (alapharmonikus) |
| **3,5 kHz** | ≈ 7,5 mV (a 3., 13., … harmonikus alias-a) |
| **0,5 kHz** | ≈ 3,3 mV (az 5., 11., … harmonikus alias-a) |
| **6,5; 9,5; 14,5; 17,5 … kHz** | ≈ 25 mV (az 1,5 kHz-es alapharmonikus képei, a kimeneti szűrő 40 dB-lel csillapítja) |
A 2,5 kHz-es helyre eső komponensek (7. és 9. harmonikus) ellentétes előjellel nagyrészt kioltják egymást (< 2 mV).

c) Előszűrő nélkül a harmonikusok csillapítatlanul hajlanak vissza; a kimenet alapsávja a mintavételezett négyszögjelnek felel meg:
| frekvencia | amplitúdó |
|---|---|
| **1,5 kHz** | 2,51 V |
| **3,5 kHz** | 0,75 V |
| **0,5 kHz** | 0,33 V |
| **2,5 kHz** | 0,10 V |
| 4,5; 11,5; 12,5 kHz | ≈ 7,5 mV |
| 6,5; 9,5; 14,5 kHz | ≈ 25 mV |
| 7,5; 8,5; 15,5 kHz | ≈ 3,3 mV |
(és így tovább 8 kHz-es periódussal a kimeneti szűrő 40 dB-es zárótartományában.) Az erős 0,5; 2,5 és 3,5 kHz-es aliasok miatt a kimenet torz – ezért kell az előszűrő.

**Ellenőrzés:** c) független módszerrel: a négyszögjel 16 mintájának (egy 2 ms-os periódus, 3 négyszögperiódus; a nullátmenetre eső mintákban 0) DFT-je 0,5 kHz: 334 mV, 1,5 kHz: 2514 mV, 2,5 kHz: 99 mV, 3,5 kHz: 748 mV – egyezik a harmonikusok átlapolódásának összegzésével (200 000 harmonikusig számolva). ✔

---

## 2. feladat – 16-PSK

**Feladat.** a) Elméleti amplitúdó- és fázishibatűrés; mi határolja a gyakorlatban az amplitúdótűrést? b) 500 kbit/s ISI-mentes átviteléhez minimálisan mekkora sávszélesség kell?

**Megoldás.**
a) Csak a fázis hordoz információt → **amplitúdóhiba-tűrés elméletileg korlátlan**; **fázishibatűrés ±π/16 = ±11,25°**. Gyakorlatban a zaj (kis jelszintnél romló jel-zaj viszony), a vevő dinamikája, az A/D felbontása, a nemlinearitás korlátozza.
b) 4 bit/szimbólum → 125 kBd → alapsávban $1/(2T)=62{,}5$ kHz, a modulált (kétoldalsávos) jelnél **125 kHz**.

---

## 3. feladat – Rádióamatőr űrbeli segélyhívás (10 GHz)

**Feladat.** Az űrállomás kb. 350 km magasan kering, 2 kW-tal sugároz a 10–10,5 GHz-es sáv alján. A földi antenna átmérője 1 m, a vevő érzékenysége 40 pW.
a) Legalább mekkora az űrállomás antennájának hatásos felülete? b) Tudnak-e a felek beszélgetni, vagy meg kell várniuk egymás adásának végét?

**Megoldás.** $\lambda=3$ cm, $d=350$ km (az állomás a fejünk felett – a legkedvezőbb eset), $A_R=\pi\cdot0{,}5^2=0{,}785$ m² (100%-os apertúrahatásfokkal).
a) Friis-képlet hatásos felületekkel: $P_R=\frac{P_TA_TA_R}{\lambda^2d^2}$ →
$$A_T\ge\frac{P_R\lambda^2d^2}{P_TA_R}=\frac{40\cdot10^{-12}\cdot9\cdot10^{-4}\cdot1{,}225\cdot10^{11}}{2000\cdot0{,}785}\approx\mathbf{2{,}8\cdot10^{-6}\ m^2}.$$
Ez kisebb, mint egy izotróp antenna hatásos felülete ($\lambda^2/4\pi=7{,}2\cdot10^{-5}$ m²), tehát **bármilyen (akár izotróp) antenna elegendő** – nagy tartalék van. (Ferde rálátásnál, nagyobb távolságon ez a tartalék csökken.)
b) A késleltetés $350\ \text{km}/c\approx$ **1,2 ms**, ami elhanyagolható (az emberi beszélgetést ~150 ms felett zavarja) → a késleltetés szempontjából **folyamatosan beszélgethetnek**. (A kérdés a terjedési késleltetésre vonatkozik. Hogy egyszerre beszélhetnek-e, az már az üzemmódon múlik: azonos frekvencián, szimplex üzemben – ami rádióamatőröknél szokásos – a gombnyomásos váltás miatt meg kell várni a másik adásának végét, ennek azonban nem a terjedési idő az oka.)

**Ellenőrzés:** dB-ben: izotróp antennával $G_T=1$, $G_R=4\pi A_R/\lambda^2=10\,966$ (40,4 dB); szabadtéri csillapítás $20\lg(4\pi d/\lambda)=163{,}3$ dB; $P_R=63+0+40{,}4-163{,}3=-59{,}9$ dBm ≈ 1 nW ≫ 40 pW. ✔

---

## 4. feladat – Üzlet (veszteséges rendszer)

**Feladat.** (Azonos a 2012.01.03-i A csoport 6. feladatával.) Átlagos érkezési köz 10 perc, 4 férőhely, nincs várakozás; átlagosan 0,6 vásárló van bent, a visszautasítás valószínűsége 0,2%. Mekkora a kiszolgálási idő?

**Megoldás.** $A(1-B)=0{,}6$ → $A=0{,}601$ Erl → $h=A/\lambda=0{,}601\cdot10\approx$ **6 perc**. (Erlang-B-vel $B(0{,}6;4)=0{,}3\%$ – a megadott 0,2% kissé ellentmondó adat; a tárgy gyűjteményének megoldása is 6 percet ad.)

---

## 5. feladat – Szuperheterodin FM-vevő

**Feladat.** KF = 10,7 MHz. a) Felső keverésnél hová hangoljuk az LO-t a 97,6 MHz-es adóhoz? b) A tükörfrekvencia?

**Megoldás.** a) $97{,}6+10{,}7=$ **108,3 MHz**. b) $108{,}3+10{,}7=$ **119,0 MHz** ($=97{,}6+2\cdot10{,}7$).

---

## 6. feladat – Szögmodulált jel

**Feladat.** $s_m(t)=3\,\text{V}\cos(3\pi t_{[\text{ms}]}+2)$, $s_{FM}(t)=5\,\text{V}\cos(1000\pi t_{[\text{ms}]}+9+5\sin(3\pi t_{[\text{ms}]}+2))$.
a) Vivőfrekvencia és fázislöket? b) Hogyan lehetne demodulálni? Blokkvázlat.

**Megoldás.**
a) Vivő: $1000\pi/(2\pi)$ 1/ms = **500 kHz**; fázislöket **5 rad** (a fázis a moduláló jel integráljával arányos → FM; $f_m=1{,}5$ kHz, frekvencialöket $5\cdot1{,}5=7{,}5$ kHz).
b) **Határoló + frekvenciadiszkriminátor + aluláteresztő:** sávszűrő (500 kHz, ~18 kHz széles, Carson) → amplitúdóhatároló (az amplitúdózaj eltávolítása) → diszkriminátor (pl. derivált képző / meredekségi szűrő, ami a frekvenciaváltozást amplitúdóváltozássá alakítja, majd burkolódetektor), vagy **PLL-demodulátor** (a VCO vezérlőfeszültsége a moduláló jel) → 1,5 kHz-es aluláteresztő → egyenáramú leválasztás.

![](abrak/fm_demod.svg)


---

## 7. feladat – BPSK csúcstényezője

**Feladat.** 1 kHz-es vivő, 2 V amplitúdó, BPSK. Csúcstényező?

**Megoldás.** Ideális (négyszögletes elemi jelű) BPSK: $s(t)=\pm2\cos(\omega_vt)$, a burkoló állandó. Csúcsérték 2 V, effektív érték $2/\sqrt2=\sqrt2$ V → **$c=\sqrt2\approx1{,}41$** (mint egy szinuszé). (Sávkorlátozott BPSK-nál a burkoló ingadozik, és a csúcstényező ennél nagyobb.)

---

## 8. feladat – GSM, kölcsönös barangolás

**Feladat.** MS-A az alfa, MS-B a béta előfizetője, és épp egymás hálózatában barangolnak (MS-A a bétában, MS-B az alfában). MS-A felhívja MS-B-t. (a) Melyik HLR-t kérdezik le? (b) Melyik GMSC értesül előbb a hívásról? (c) MS-A hálózaton belüli, beszélgetés közbeni mozgásáról mely elemek szerezhetnek tudomást? (d) A hívás után MS-B SMS-t küld MS-A-nak – melyik SMSC kézbesíti?

**Megoldás.**
(a) **HLR$_\beta$** (a hívott MS-B honos HLR-je).
(b) **GMSC$_\beta$** – a hívás MS-B béta-hívószámára szól, ezért a béta hálózat átjárója kérdezi le a HLR$_\beta$-t; MS-A maga is a béta hálózatban van, így a hívás ott indul. (Az alfa GMSC-n nem megy át: a béta hálózatból az MSRN alapján közvetlenül az alfa MSC felé épül a kapcsolat. A tárgy gyűjteményében ugyanerre a kérdésre szintén GMSC$_\beta$ a válasz.)
(c) Beszélgetés közben **handover** történik, ezt a kiszolgáló **BTS$_\beta$, BSC$_\beta$** és (BSC-k közötti átadásnál) az **MSC$_\beta$** kezeli. A VLR/HLR beszélgetés közben nem kap helyfrissítést (csak a hívás után, ha helyterületet váltott).
(d) **SMSC$_\beta$** – MS-B honos SMSC-je.

---

## 9. feladat – Bináris PAM ISI-vel

**Feladat.** $h(t)=1{,}15$ ($0..T$), $0{,}25$ ($T..2T$). a) Rajzolja fel a PAM-jelet a …0-1-1-0-0-1… sorozatra (1 → +1, 0 → −1). b) Van-e ISI, ha a mintavétel fázisa $t_0=3T/4$? c) Négyszintű szemábra ($d_k=-3,-1,+1,+3$); alkalmas-e az elemi jel négyszintű üzemre?

**Megoldás.**
a) A $k$-adik időrésben a jel $1{,}15d_k+0{,}25d_{k-1}$. A $d$ sorozat: −1, +1, +1, −1, −1, +1 → az időrésekben: $-1{,}15+0{,}25d_0$ (az előző bit ismeretlen: −1,4 vagy −0,9), **+0,9, +1,4, −0,9, −1,4, +0,9** V; az utolsó szimbólum után még egy $T$ hosszú, ±0,25 V-os „farok”.

![](abrak/pam_115_025.svg)

b) **Igen**: $3T/4$-ben az aktuális szimbólum (1,15) mellett az előző szimbólum elemi jelének második része (0,25) is jelen van → a minta $1{,}15d_k\pm0{,}25$.
c) Szintek $1{,}15\cdot\{\pm1,\pm3\}=\pm1{,}15,\ \pm3{,}45$; a legrosszabb ISI $\pm3\cdot0{,}25=\pm0{,}75$; döntési küszöbök 0 és ±2,3. A +1,15-ös szint mintái 0,4…1,9 közé, a +3,45-ös szinté 2,7…4,2 közé esnek → **a szem nyitott** (minimális nyitás 2·0,4 = 0,8), **alkalmas** a négyszintű üzemre. Általános feltétel: $h_0>(M-1)h_1$: $1{,}15>3\cdot0{,}25=0{,}75$ ✔ (8 szintnél $7\cdot0{,}25=1{,}75>1{,}15$ – nem működne).

![](abrak/szem_4szint_115_025.svg)


---

## 10. feladat – A tartály állapotának kódolása

**Feladat.** Hártyával két félre osztott tartályban kék és piros szemcsék véletlenszerűen, egymástól függetlenül mozognak. Óránként fel kell jegyezni, melyik félben milyen színű szemcsék vannak (a számuk nem lényeges). a) Alsó korlát a legrövidebb átlagos kódszóhosszra. b) Szerkessze meg a kódot.

**Megoldás.** Mindkét színből van szemcse (különben nem volna mit mozgatni). Egy színre három lehetőség: csak a bal félben, csak a jobb félben, mindkettőben → a két szín független → **9 állapot**. Az eloszlás ismeretlen; a legrosszabb esetre (egyenlő valószínűségek, maximális entropia) méretezve – így a korlát bármely eloszlásnál érvényes kódhosszt ad (sok szemcsénél a „mindkét félben” állapot valószínűbb, ekkor az entrópia kisebb, a kód rövidíthető):
a) $H=\log_29\approx$ **3,17 bit/feljegyzés** az alsó korlát.
b) Huffman-kód 9 egyforma valószínűségű állapotra: 7 állapot 3 bites, 2 állapot 4 bites kódszót kap (pl. 000, 001, 010, 011, 100, 101, 110, 1110, 1111) → átlag $\frac{7\cdot3+2\cdot4}{9}=3{,}22$ bit. Több feljegyzést együtt kódolva a korlát jobban megközelíthető (pl. 5 feljegyzés: $9^5=59\,049<2^{16}$ → 16/5 = 3,2 bit).

**Ellenőrzés:** Kraft: $7\cdot2^{-3}+2\cdot2^{-4}=1$. ✔
