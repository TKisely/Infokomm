---
forras: "VikWiki/Infokomm_2014_12_22.pdf (3 oldal, gépelt feladatsor beillesztett oszcilloszkópképpel és GSM-ábrával)"
tartalom: "Infokommunikáció vizsga, 2014. december 22. – 10 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2014. december 22.

---

## 1. feladat – Antenna hatásos felülete 30 MHz-en

**Feladat.** Nyereség $10\lg(4\pi)=11$ dB. a) Hullámhossz? b) Hatásos felület?

**Megoldás.**
a) $\lambda=\frac{3\cdot10^8}{3\cdot10^7}=$ **10 m**.
b) $A_{eff}=\frac{G\lambda^2}{4\pi}=\frac{4\pi\cdot\lambda^2}{4\pi}=\lambda^2=$ **100 m²**.

---

## 2. feladat – AM-DSB oszcilloszkópképről

**Feladat.** Az ábrán egy AM-DSB jel (1 V/osztás, 20 µs/osztás; mért: Avg 8 mV, RMS 1,500 V, Pk-Pk 5,91 V). (Az ábrába írt kézírás nem hivatalos.)
a) Becsülje meg a vivő és a moduláló jel frekvenciáját (indoklással). b) Becsülje a modulációs mélységet. c) A csúcstól csúcsig értéket 6 V-ra vártuk, a műszer beállítása helyes – miért lett kevesebb?

**Leolvasás (nagyított képről):** a képernyő 10 osztás széles (≈126 képpont/osztás = 20 µs). A vivő csúcsai ≈61,5 képpontonként (≈0,49 osztás ≈ 9,8 µs) követik egymást; a burkoló maximumai ≈310 képpontonként (≈2,45 osztás ≈ 49 µs), egy moduláló periódusra pontosan ~5 vivőperiódus jut. A burkoló maximuma ≈ 2,95 V, minimuma ≈ 1,1 V. A leolvasást a műszer által mért RMS = 1,500 V pontosan megerősíti (lásd Ellenőrzés).

**Megoldás.**
a) **Vivő ≈ 100 kHz** (periódus ≈ 10 µs, fél osztás), **moduláló ≈ 20 kHz** (periódus ≈ 50 µs, 2,5 osztás). (A lapra írt „60 µs” nem a moduláló periódus.)
b) $m=\frac{U_{max}-U_{min}}{U_{max}+U_{min}}\approx\frac{2{,}95-1{,}1}{2{,}95+1{,}1}\approx$ **0,5**.
c) A modulált jel pillanatértéke csak a vivő csúcsainál éri el a burkolót. Mivel egy moduláló periódusra csak kb. 5 vivőperiódus jut, a vivő csúcsai általában **nem esnek egybe a burkoló maximumával** (3 V), hanem mellette vannak – így a tényleges maximum (és minimum) kisebb abszolút értékű, a Pk-Pk ≈ 5,9 V < 6 V. (Ha $f_v/f_m$ nagy volna, mindig lenne vivőcsúcs a burkoló maximumának közelében.)

**Ellenőrzés:** a várt jel a 2014.12.15-i 2. feladatéval azonos (100 kHz, 20 kHz, $m=0{,}5$, $U=2$ V, csúcs 3 V, Pk-Pk 6 V). Effektív értéke $\sqrt{2{,}25}=1{,}5$ V – pontosan egyezik a műszer által mért RMS = 1,500 V-tal, ami megerősíti a leolvasott paramétereket. ✔

---

## 3. feladat – PAM, Nyquist-sávszélesség

**Feladat.** Jelzési sebesség 116 kBd, a vételi ponton nincs jelentős ISI. a) Legalább mekkora a vevő aluláteresztő szűrőjének sávhatára? Miért? b) 348 kbit/s-ot kell átvinni – hogyan?

**Megoldás.**
a) ISI-mentes átvitelhez legalább a Nyquist-sávszélesség kell: $B\ge\frac{1}{2T}=$ **58 kHz** (ideális, téglalap átvitelnél; emelt koszinusznál $(1+\alpha)\cdot58$ kHz).
b) $348/116=3$ bit/szimbólum → **8 szintű PAM** azonos jelzési sebességgel (a sávszélesség nem változik, de nagyobb jel-zaj viszony kell).

---

## 4. feladat – (7,4) szisztematikus kód, szindróma

**Feladat.** $G=[1000011;\ 0100110;\ 0010101;\ 0001111]$. a) H (vagy Hᵀ) mátrix, szindróma az 1100001 vett szóra. b) Hány hiba jelzésére és javítására alkalmas?

**Megoldás.** $G=[I_4\,|\,P]$, $P$ sorai: 011, 110, 101, 111.
$$H=[P^T\,|\,I_3]=\begin{pmatrix}0&1&1&1&1&0&0\\1&1&0&1&0&1&0\\1&0&1&1&0&0&1\end{pmatrix}.$$
a) $s=Hr^T$, $r=1100001$: 1. sor $0+1+0+0+0+0+0=1$; 2. sor $1+1+0+0+0+0+0=0$; 3. sor $1+0+0+0+0+0+1=0$ → **$s=(1,0,0)$**. Ez $H$ 5. oszlopa → az 5. bit hibás (egyszeres hibát feltételezve), a javított kódszó **1100101** (üzenet 1100).
b) $H$ oszlopai mind különbözők és nem nullák (7 db 3 bites oszlop) → (7,4) **Hamming-kód**, $d_{min}=3$: **2 hibát jelez, 1 hibát javít**.

**Ellenőrzés:** az 1100 üzenet kódszava $G$ 1. és 2. sorának összege: $1000011\oplus0100110=1100101$, ami a vett szótól csak az 5. bitben tér el. ✔

---

## 5. feladat – Szuperheterodin, 107 MHz

**Megoldás.** a) Felső keverés: $f_{LO}=107+10{,}7=$ **117,7 MHz**. b) Tükör: $117{,}7+10{,}7=$ **128,4 MHz**.

---

## 6. feladat – DTMF-vevők méretezése

**Feladat.** Tárcsázás átlagosan 10 s, blokkolás ≤ 0,1%, legalább 60 000 hívás/óra, exponenciális eloszlások. a) Felajánlott forgalom? b) Hány DTMF-vevő kell (a mellékelt Erlang-B táblázattal: felajánlott forgalom 162–171 Erl, blokkolás 0,1/0,2/0,3% → szükséges kiszolgálószám)?

**Megoldás.**
a) $A=\lambda h=\frac{60\,000}{3600\ \text{s}}\cdot10\ \text{s}=$ **166,7 Erl**.
b) A táblázatban a 166,7-nél nagyobb legközelebbi sor a 167 Erl (felfelé kerekítünk, hogy a blokkolás biztosan ≤ 0,1% legyen): 0,1%-hoz **202 DTMF-vevő** kell.

**Ellenőrzés:** Erlang-B rekurzióval: $A=166{,}67$ Erl, $B\le0{,}1\%$ → $N_{min}=202$. ✔

---

## 7. feladat – Fair queueing és WFQ

**Megoldás.** (Lásd 2014.01.14, 5. feladat.)
a) A fair queueing nem engedi az alacsony prioritású forgalmat **kiéheztetni**: minden folyam egyenlő részt kap a kapacitásból, egy túlküldő folyam sem foglalhatja le az egészet.
b) A WFQ **súlyozott** részesedést ad: különböző forgalmi osztályoknak különböző (garantált) kapacitásarány állítható be, kiéheztetés nélkül (QoS-differenciálás).

---

## 8. feladat – GSM, barangoló előfizető hív

**Feladat.** MS-A1 és MS-A2 az alfa előfizetője; MS-A2 a béta hálózatban barangol. MS-A2 hívja MS-A1-et. a) Melyik HLR-t kérdezik le? b) Melyik eszköz segítségével azonosítják MS-A2 SIM-kártyáját? c) MS-A2 béta hálózaton belüli, beszélgetés közbeni mozgásáról mely elemek szereznek tudomást? d) A hívás után MS-A2 SMS-t küld MS-A1-nek, akinek lemerült a telefonja. Melyik elemben jegyzik be, hogy ha MS-A1 elérhető lesz, jelezni kell az SMSC-nek?

**Megoldás.**
a) **HLR$_\alpha$** – a hívott MS-A1 honos HLR-je.
b) **AuC$_\alpha$** – MS-A2 honos hitelesítési központja állítja elő (a Ki kulcs alapján) a hitelesítési hármasokat, amelyeket a HLR$_\alpha$ átad a **VLR$_\beta$**-nek; az összehasonlítást a VLR$_\beta$ végzi.
c) Handover: **BTS$_\beta$, BSC$_\beta$, MSC$_\beta$** (a VLR/HLR beszélgetés közben nem).
d) **HLR$_\alpha$** – a sikertelen kézbesítés után a HLR-ben (Message Waiting Data, a várakozó SMSC címe) jegyzik fel; amikor MS-A1 újra bejelentkezik, a HLR értesíti az SMSC$_\alpha$-t. (A VLR$_\alpha$ is beállít egy „nem elérhető” jelzőt.)

---

## 9. feladat – DVB-C 256-QAM-mel

**Feladat.** 8 MHz-es raszter, 33,33%-os emelt koszinusz, RS-kódolás nélkül. a) Szimbólum- és bitsebesség 256-QAM-mel? b) Hány 1,5 Mbit/s-os csatorna fér el? A 6 Mbit/s-os kódolás előnye, hátránya? c) A 1024-QAM előnye, hátránya a 64-QAM-hez képest?

**Megoldás.**
a) $\frac1T=\frac{8\ \text{MHz}}{1+1/3}=$ **6 MBd**; 8 bit/szimbólum → **48 Mbit/s**.
b) $48/1{,}5=$ **32 csatorna**. 6 Mbit/s-os kódolással csak **8 csatorna** fér el, de **jobb képminőség** (pl. HD, kevesebb tömörítési hiba).
c) 1024-QAM: 10 bit/szimbólum → 60 Mbit/s (a 64-QAM 36 Mbit/s-ához képest +67%, a 256-QAM-hez képest +25%) – **több csatorna**. Hátrány: a pontok sokkal közelebb vannak egymáshoz, **jóval nagyobb jel-zaj viszony** kell (minden négyszeres pontszám kb. +6 dB), érzékenyebb a fázis- és amplitúdóhibákra, nemlinearitásra; bonyolultabb, drágább vevő.

---

## 10. feladat – Vizsgajegyek kódolása

**Feladat.** Ötfokozatú skála. a) Elég lehet-e átlagosan két bit vizsgánként? b) Alkosson prefix kódot.

**Megoldás.**
a) Egyenletes eloszlásnál az entrópia $\log_25=2{,}32$ bit > 2 → **nem** elég. **Ha azonban a jegyek eloszlása kellően egyenetlen** (entrópiája ≤ 2 bit), átlagosan 2 bit (vagy kevesebb) is elég – változó hosszúságú (Huffman-)kóddal, ahol a gyakori jegyek rövidebb kódszót kapnak. Pl. ha az egyik jegy legalább 50%-os gyakoriságú, az {1,3,3,3,3} hosszúságú kóddal az átlag $3-2p_1\le2$ bit.
b) Pl. (a gyakoriságokat a tapasztalat szerint becsülve: a közepes jegyek gyakoribbak) **3 → 00, 2 → 01, 4 → 10, 5 → 110, 1 → 111** (prefix kód; Kraft: $3\cdot\frac14+2\cdot\frac18=1$). Átlaga $2+p_5+p_1$ bit; 2 bit alá a fenti {1,3,3,3,3}-típusú kód visz, ha egy jegy domináns: pl. **2 → 0, 1 → 100, 3 → 101, 4 → 110, 5 → 111**. (A jegyek eloszlása nincs megadva, ezért a válasz feltételes: egyenletes eloszlásnál nem elég 2 bit, ferde eloszlásnál igen.)
