---
forras: "VikWiki/Infokomm_vizsga_2010_01_06.pdf (2 oldal, szkennelt; a 2. oldalon az 1. feladat táblára rajzolt spektruma kézzel)"
tartalom: "Infokommunikáció vizsgadolgozat, 2010. január 6. – 5 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsgadolgozat – 2010. január 6.

A lap megjegyzése: az értékelésnél alapvetően nem a végeredményt, hanem az indoklást vizsgálják.

---

## 1. feladat – AM/SSB-SC/LSB

**Feladat.** Adott egy jel frekvenciatartománybeli képe (táblán; a PDF 2. oldalán kézzel): $|F|$ a $f_a=100$ Hz-nél maximális, onnan lineárisan csökken $f_h=500$ Hz-ig, ahol nulla; $|f|<100$ Hz-en nulla (páros függvény). Vivő $F_v=5$ kHz. A jel várható értéke zérus.
a) Az AM/SSB-SC/LSB jel spektruma. b) Javaslat az előállításra. c) Javaslat a demodulálásra. d) Az SSB előnye és hátránya a DSB-vel szemben.

**Megoldás.**
a) Az alsó oldalsáv a $F_v-f_h\dots F_v-f_a$ = **4,5–4,9 kHz** tartományban van, frekvenciában tükrözve: 4,5 kHz-en nulla, lineárisan nő, **4,9 kHz-en maximális**, és ott hirtelen nullára esik. Vivő (5 kHz) és felső oldalsáv (5,1–5,5 kHz) nincs. A negatív frekvenciákon ennek tükörképe (−4,9…−4,5 kHz). A DSB-SC-ből szűréssel kapott jel spektrumszintje az eredeti fele ($\tfrac12F(f\mp F_v)$).

![](abrak/lsb_2010.svg)


b) **Szűrős módszer:** szorzó (kiegyenlített modulátor) az 5 kHz-es vivővel → DSB-SC: 4,5–4,9 kHz és 5,1–5,5 kHz; a két oldalsáv között **200 Hz-es rés** van (mert a jelnek nincs 100 Hz alatti komponense – ezt jelzi a „várható érték zérus” is), így egy 4,5–4,9 kHz-es sáváteresztő (vagy 5 kHz-es határfrekvenciájú, a 4,9–5,1 kHz-es résben letörő aluláteresztő) kiválasztja az alsó oldalsávot.
Alternatíva: fázisos módszer, $s(t)=x(t)\cos\omega_vt+\hat x(t)\sin\omega_vt$.

c) **Koherens demodulátor:** szorzás $\cos(2\pi\cdot5\,\text{kHz}\cdot t)$-vel (szinkron helyi vivő), majd 500 Hz-es (pl. 1–2 kHz-ig bármilyen, a 9,5 kHz körüli komponenst elnyomó) aluláteresztő. A szorzat: 100–500 Hz (hasznos) + 9,5–9,9 kHz (eltávolítandó).

d) **Előny:** fele sávszélesség (400 Hz a 800 Hz helyett), nincs vivőre és redundáns oldalsávra pazarolt teljesítmény. **Hátrány:** bonyolultabb modulátor (meredek szűrő vagy pontos 90°-os fázistoló) és demodulátor (pontos frekvenciájú/fázisú helyi vivő kell; burkolódetektor nem használható).

**Ellenőrzés:** a szorzó kimenetén $f_m=100$ Hz → 4,9 és 5,1 kHz; $f_m=500$ Hz → 4,5 és 5,5 kHz – a rés valóban 4,9–5,1 kHz. ✔

---

## 2. feladat – Földi rádió-összeköttetés 900 MHz-en

**Feladat.** Fix adó ($G_T=10$ dB, $h_T=50$ m), tőle 10 km-re mozgó vevő ($G_R=3$ dB, $h_R=1{,}67$ m).
a) A rádiócsatorna késleltetése? b) A közvetlen és a reflektált hullám útjának hossza és különbsége? c) Szakaszcsillapítás? d) Változik-e a szakaszcsillapítás 450 MHz-en, ugyanitt, ugyanezekkel a berendezésekkel?

**Megoldás.** $\lambda=1/3$ m.

a) $\tau=d/c=10^4/3\cdot10^8=$ **33,3 µs**.

b) $r_1=\sqrt{d^2+(h_T-h_R)^2}=\sqrt{10^8+48{,}33^2}=$ **10 000,117 m**; $r_2=\sqrt{d^2+(h_T+h_R)^2}=\sqrt{10^8+51{,}67^2}=$ **10 000,133 m**; különbség $\Delta r\approx\frac{2h_Th_R}{d}=\frac{2\cdot50\cdot1{,}67}{10^4}=$ **16,7 mm** ($=\lambda/20$).

c) A töréspont $4h_Th_R/\lambda=1002$ m ≪ 10 km, a sík föld modell érvényes:
$$40\lg d-20\lg h_T-20\lg h_R=160-34{,}0-4{,}5=121{,}6\ \text{dB}$$
(izotróp antennák között); a tárgy szerinti szakaszcsillapítás (antennanyereségekkel): $a_{sz}=121{,}6-10-3=$ **108,6 dB**.

d) A sík földes távoli tartományban a szakaszcsillapítás **frekvenciafüggetlen**: a szabadtéri csillapítás $\lambda^2$-tel csökkenne, de a kétutas interferencia-tényező ($4\sin^2\frac{2\pi h_Th_R}{\lambda d}\approx(\frac{4\pi h_Th_R}{\lambda d})^2$) éppen $\lambda^{-2}$-tel nő. A töréspont 501 m-re kerül, 10 km-en továbbra is érvényes a közelítés → **a szakaszcsillapítás (gyakorlatilag) nem változik**, ~108,6 dB.
**Tisztázva:** a tárgy anyagában ugyanez a következtetés szerepel („ebben az esetben a szakaszcsillapítás nem függ a frekvenciától”, 2020-as elővizsga, teljes pontszámmal). A feladat a nyereségeket adatként adja, ezeket változatlannak tekintjük. (Valódi, 900 MHz-re méretezett antennák 450 MHz-en elhangolódnának – ez a feladat keretein kívül esik.)

**Ellenőrzés:** pontos kétutas számítás ($\Gamma=-1$, $r_1$, $r_2$ fenti értékekkel): 900 MHz-en 121,60 dB, 450 MHz-en 121,58 dB. ✔

---

## 3. feladat – Négyszintű szinkron PAM

**Feladat.** Az elemi jel spektruma a vevő mintavevőjének bemenetén $A(f)=\frac{1-|f/B|}{B}$, ha $|f|<B$, egyébként 0; $B=100$ kHz.
a) Mekkora lehet a jelzési sebesség? Lehet-e kisebb, illetve nagyobb? b) Az adatátviteli sebesség? c) A rendszert a vonali fehérzaj ellen optimalizálták: határozza meg és rajzolja fel az elemi jel spektrumát a vevőszűrő bemenetén! d) Mi változik nyolcszintű átvitelnél? Mi korlátozza a szintek számát?

**Megoldás.**
a) A háromszög alakú spektrum időfüggvénye $a(t)=\mathrm{sinc}^2(Bt)=\left(\frac{\sin\pi Bt}{\pi Bt}\right)^2$, ennek zérushelyei $t=k/B$ ($k\ne0$). ISI-mentes mintavétel tehát $T=1/B$ esetén: **$1/T=B=100$ kBd**. (Frekvenciatartományban: a $B$-vel eltolt háromszögek összege konstans – teljesül a Nyquist-kritérium.)
- **Kisebb:** csak $B/m$ ($m=2,3,\dots$, pl. 50 kBd, 33,3 kBd) lehet, mert ekkor a mintavételi pillanatok szintén a zérushelyekre esnek; tetszőleges kisebb érték nem ISI-mentes.
- **Nagyobb nem lehet**, mert $T<1/B$-nél a mintavételi pillanatokban $a(t)\ne0$ → szimbólumközi áthallás.

b) 4 szint = 2 bit/szimbólum → $R=2\cdot100=$ **200 kbit/s**.

c) Fehérzajra optimális (illesztett szűrős) rendszerben az adó és a vevő szűrője egymás konjugáltja, és a teljes átvitel $A(f)=|G(f)|^2$. A vevőszűrő bemenetén tehát
$$|G(f)|=\sqrt{A(f)}=\sqrt{\frac{1-|f|/B}{B}},\qquad|f|<B,$$
lineáris fázissal (gyök-háromszög: $f=0$-ban $1/\sqrt B$, a sávszélen függőleges érintővel nullára fut).

![](abrak/gyok_haromszog.svg)


d) Nyolc szinten 3 bit/szimbólum → **300 kbit/s** azonos jelzési sebesség és sávszélesség mellett. Viszont azonos (csúcs)teljesítménynél a szintek távolsága $3/7$-ére csökken → a zajtűrés romlik, ugyanakkora hibavalószínűséghez kb. 7,4 dB-lel (átlagteljesítményre vetítve kb. 6,2 dB-lel) nagyobb jel-zaj viszony kell. A szintek számát a **zaj (jel-zaj viszony)** korlátozza (Shannon: $C=B\log_2(1+S/N)$), továbbá a nemlinearitás, az időzítési hiba (jitter) és a döntőáramkör pontossága.

**Ellenőrzés:** a) $\sum_kA(f-k\cdot B)$: a $[0,B]$ intervallumban $\frac{1-f/B}{B}+\frac{1-(B-f)/B}{B}=\frac1B$ konstans. ✔ d) $20\lg(7/3)=7{,}36$ dB, $10\lg\frac{63}{15}=6{,}23$ dB. ✔

---

## 4. feladat – Háromfokozatú kapcsolómátrix

**Feladat.** 6 be- és 6 kimenetű, 3 fokozatú mátrix; a szélső fokozat elemei 3–3 külső bekötést kezelnek; a középső fokozatban 4 elem van, mindegyiknek pontosan 1 kapcsolata van minden szélső elemhez.
a) Hány szélső elem van? Rajzolja le! b) Belső blokkolásmentes-e? c) Hány kapcsolópont van összesen? d) Hány kapcsolópont kellene egy monolitikus, blokkolásmentes mátrixban?

**Megoldás.** Clos-hálózat: $N=6$, $n=3$, $r=N/n=2$, $m=4$.

a) Bemenő oldalon $6/3=2$, kimenő oldalon 2 elem → **4 szélső elem**. Bemenő elemek: 3×4, középső elemek: 2×2, kimenő elemek: 4×3; minden bemenő elem mind a 4 középső elemhez, minden középső elem mindkét kimenő elemhez 1–1 vonallal kapcsolódik.

![](abrak/clos_6x6.svg)


b) A szigorú értelemben vett blokkolásmentesség (Clos) feltétele $m\ge2n-1=5$; itt $m=4$ → **nem blokkolásmentes**.
Ellenpélda: az A bemenő elem $a_1$, $a_2$ bemenete az 1. és 2. középső elemen át az X kimenő elemre kapcsolt; a B bemenő elem két bemenete a 3. és 4. középső elemen át az Y kimenő elem $y_1$, $y_2$ kimenetére. Most $a_3$ az $y_3$-ra akar kapcsolódni: A-ból csak a 3. és 4. középső elem szabad, Y felé csak az 1. és 2. → **nincs szabad út**, holott $a_3$ és $y_3$ is szabad.
(Átrendezéssel blokkolásmentes, mert $m\ge n=3$.)

c) $2\cdot(3\cdot4)+4\cdot(2\cdot2)+2\cdot(4\cdot3)=24+16+24=$ **64 kapcsolópont**.

d) $6\times6=$ **36 kapcsolópont**. (Ilyen kis méretnél a többfokozatú felépítés nem takarékos; nagy $N$-nél előnyös.)

---

## 5. feladat – GSM-egységek

a) **HLR (Home Location Register):** a honos hálózat előfizetői adatbázisa – IMSI, MSISDN, előfizetett szolgáltatások, és az aktuális VLR címe; hívásnál innen kérdezi le a GMSC az útvonalat.
b) **VLR (Visitor Location Register):** az MSC-hez tartozó ideiglenes adatbázis a területén lévő előfizetőkről (helyterület, TMSI, a HLR-ből kapott adatok); hívásnál MSRN-t oszt ki.
c) **EIR (Equipment Identity Register):** a készülékazonosítók (IMEI) nyilvántartása fehér/szürke/fekete listával; az ellopott vagy nem engedélyezett készülékek kizárására szolgál.
d) **MSC (Mobile Switching Center):** mobil kapcsolóközpont; hívásfelépítés és -kapcsolás, MSC-k közti handover, kapcsolat más hálózatokkal (GMSC), a VLR-rel és HLR-rel együttműködve.
e) **BSC (Base Station Controller):** több BTS vezérlése, rádiós erőforrás-kezelés (csatornakiosztás, teljesítményszabályozás), BSC-n belüli handover; az MSC felé kapcsolódik.
