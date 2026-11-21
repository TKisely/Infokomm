---
forras: "VikWiki/Infokommvizsga_2016.01.12..pdf (3 oldal; négy hallgató által emlékezetből összeállított feladatsor ábrákkal); a hozzá tartozó hallgatói megoldás: Infokommvizsga_2016.01.12._megoldasok.pdf (ellenőrzése: 2016_01_12_megoldasok_ellenorzes.md)"
tartalom: "Infokommunikáció vizsga, 2016. január 12. – 6 feladat (rekonstrukció)"
jeloles: "[HIÁNYOS ADAT] = a forrásból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2016. január 12. (rekonstrukció)

---

## 1. feladat – (7,4) szisztematikus kód

**Feladat.** $G=[1000110;\ 0100101;\ 0010011;\ 0001111]$. a) Paritásellenőrző mátrix. b) Szindróma egy adott vett szóra (a megoldás szerint 0000111). c) Hány hibát jelez és javít, miért? d) Hány bites üzenetek tartoznak a kódszavakhoz, miért?

**Megoldás.** $G=[I_4\,|\,P]$, $P$ sorai 110, 101, 011, 111.
a) $$H=[P^T\,|\,I_3]=\begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix}.$$
b) $r=0000111$: $s=Hr^T=(0+1,\ 0+1,\ 0+1)=$ **(1,1,1)** – ez $H$ 4. oszlopa → (egyszeres hibát feltételezve) a 4. bit hibás, a javított kódszó **0001111**, az üzenet **0001**. [HIÁNYOS ADAT: a vizsgán adott vett szó nem biztos, hogy ez volt.]
c) $H$ oszlopai mind különbözők és nem nullák → Hamming-kód, **$d_{min}=3$** (a 16 kódszó legkisebb nem nulla súlya 3): **2 hibát jelez, 1-et javít** ($d_{min}-1$, ill. $\lfloor(d_{min}-1)/2\rfloor$).
d) **4 bites** üzenetek: a generátormátrixnak 4 (lineárisan független) sora van, a kódszó első 4 bitje maga az üzenet (szisztematikus kód); $2^4=16$ kódszó.

**Ellenőrzés:** $GH^T=0$: pl. az 1. sor (1000110) szindrómája $(1+1,\ 1+1,\ 0)=0$. ✔

---

## 2. feladat – Szuperheterodin FM-vevő, sztereó spektrum

**Megoldás.** a) $97{,}6+10{,}7=$ **108,3 MHz**; b) tükör **119,0 MHz**.
c) Alapsávi multiplex jel: **M = L+R** 30 Hz–15 kHz; **19 kHz** pilot; **S = L−R** DSB-SC a (elnyomott) 38 kHz-es segédvivőn: **23–53 kHz**; (RDS: 57 kHz).

![](abrak/sztereo_multiplex_savok.svg)


---

## 3. feladat – Forgalmi méretezés

**Feladat.** $h=3$ perc, $\lambda=5$/perc. a) Felajánlott forgalom? b) 100 hívásból hány hosszabb 6 percnél? c) Kiszolgálók száma $P_B=0{,}1\%$-hoz? d) Kihasználtság? e) Kiszolgálható-e a forgalom VoIP-pal egy 10 Mbit/s-os vonalon egy átlagos kodekkel?

**Megoldás.**
a) $A=\lambda h=$ **15 Erl**.
b) Exponenciális tartási idő: $P(T>6)=e^{-6/3}=e^{-2}=0{,}135$ → **kb. 13–14 hívás**.
c) Erlang-B: **N = 28** ($B(15;28)=0{,}086\%$, $B(15;27)=0{,}16\%$).
d) $\rho=\frac{A(1-B)}{N}=\frac{15\cdot0{,}999}{28}\approx$ **0,54 (54%)**.
e) Egyszerre legfeljebb 28 hívás lehet. Pl. G.711 (64 kbit/s) fejrészekkel kb. 80–90 kbit/s/hívás → $28\cdot90\approx2{,}5$ Mbit/s; G.729-cel (~30 kbit/s fejrészekkel) ~0,8 Mbit/s → **bőven belefér a 10 Mbit/s-ba**. (A kodek bitsebességét a feladat becsülni kérte; a következtetés bármely szokásos kodekkel ugyanaz.)

**Ellenőrzés:** Erlang-B rekurzióval $N_{min}(15\ \text{Erl};\ 0{,}1\%)=28$. ✔

---

## 4. feladat – AM oszcilloszkópképről

**Feladat.** Mindkét csatorna 2 V/osztás, 100 µs/osztás; mért: Pk-Pk(1) = 12 V, Pk-Pk(2) = 4 V, Freq(2) = 2,5 kHz. a) Melyik a moduláló és melyik a modulált jel? b) Modulációs mélység, miért? c) Átlagteljesítmény? d) $f_m$, $f_v$ és meghatározásuk? e) Demodulátor (rajz)?

**Megoldás.**
a) A **felső** (2. csatorna) szinusz a **moduláló** jel (állandó amplitúdó, kis frekvencia); az **alsó** (1. csatorna) a **modulált**: nagy frekvenciájú vivő, amelynek burkolója a moduláló jel ütemében változik.
b) A modulált jel burkolója: max $12/2=6$ V, min ≈ 2 V (a képen ≈ ±1 osztás) → $m=\frac{6-2}{6+2}=$ **0,5**. Ugyanez adódik, ha a modulátor a moduláló jelet egyszerűen hozzáadja a vivőamplitúdóhoz: $U_v=6-2=4$ V, $m=U_m/U_v=2/4$.
c) Komponensek: vivő 4 V, oldalsávok $mU_v/2=1$–1 V → $P=\frac{4^2}{2}+2\cdot\frac{1^2}{2}=$ **9 W** (1 Ω-on; effektív érték 3 V).
d) $f_m$: a moduláló jel periódusa 4 osztás = 400 µs → **2,5 kHz** (a műszer is ezt méri). $f_v$: egy osztásra (100 µs) kb. 5 vivőperiódus jut → $T_v\approx20\ \mu s$ → **≈ 50 kHz** (egy moduláló periódusra ~20 vivőperiódus). (A tárgy gyűjteményében ugyanez a mérés-összeállítás – 100 µs/osztás, 2,5 kHz-es moduláló – 50 kHz-es vivővel szerepel: „Freq(1) = 50 kHz”.)
e) $m<1$ és $f_v/f_m=20$ → **burkolódetektor**: dióda + párhuzamos RC ($20\ \mu s\ll RC\le\frac{\sqrt{1-m^2}}{2\pi f_mm}=110\ \mu s$, pl. $RC\approx60\ \mu s$) + egyenáram-leválasztó kondenzátor (+ 2,5 kHz-es aluláteresztő).

![](abrak/burkolodetektor.svg)


**Ellenőrzés:** $U_{eff}=\sqrt{8+0{,}5+0{,}5}=3$ V, $P=9$ W. ✔

---

## 5. feladat – GSM-hitelesítés (kézzel rajzolt ábra)

**Feladat (rekonstrukció).** Az ábrán AuC/HLR – MSC/VLR – MS. Az AuC/HLR felől „A” (128 bit) és „B” (32 bit) megy az MSC/VLR-hez, az MS felől „C”; az MSC/VLR összehasonlítja: B == C? → igen: „engedély megadva”, a Kc a BTS-hez kerül. Az MS-ben két szürke doboz (az egyik a SIM mellett, a másik alatta, ebből jön a Kc). Kérdések: milyen adatok A, B, C? Milyen algoritmusok a szürke dobozok? Mire használják a Kc-t?

**Megoldás.**
- **A = RAND** (128 bites véletlen szám; az MSC/VLR továbbküldi az MS-nek).
- **B = SRES** (32 bites „várt válasz”, az AuC számolja: A3(Ki, RAND)).
- **C = SRES'** (az MS-ben a SIM által számolt 32 bites válasz). Ha **B = C**, a hitelesítés sikeres.
- **Felső szürke doboz: A3** (a SIM-ben a titkos Ki és a RAND alapján SRES-t számol – ebből megy a C).
- **Alsó szürke doboz: A8** (a Ki és a RAND alapján a 64 bites **Kc** kulcsot számolja).
- **Kc:** a rádiós szakasz **titkosításának** kulcsa: az MS-ben és a BTS-ben az **A5** algoritmus a Kc-ből és a keretszámból 114 bites kulcsfolyamot állít elő, amelyet a burst adatbitjeivel XOR-olnak. (A Kc-t a hálózat sosem küldi át a rádión.)
(A rajzon az alsó dobozból **kijön** a Kc, és a Kc-t a hálózati oldalon az AuC küldi a BTS-hez – tehát a doboz a Kc-t előállító A8; a tárgy tankönyvi ábráján is a SIM-ben az A3 és A8 van, az A5 a BTS-ben és a mobil rádiós részében.)

---

## 6. feladat – Hangnyomásszint a teremben

**Feladat.** 2 m-re SPL = 30 dB. a) Körülbelül mekkora 20 m-en? b) Mi befolyásolja, hogy a terem végén hallják-e az előadót?

**Megoldás.**
a) Szabad térben (pontszerű forrás) az intenzitás a távolság négyzetével csökken: tízszeres távolság → $-20$ dB → **kb. 10 dB**.
b) - **Teremakusztika:** a falakról visszavert (diffúz) hangtér miatt a valóságban a szint nem csökken ennyire (a zengő térben a távoli szint a zengési hangtér szintjéhez tart), viszont a hosszú utózengés rontja az érthetőséget.
- **Háttérzaj, elfedés:** a hallgatóság zaja, szellőzés stb. elfedi a halk beszédet (a hallásküszöb a zaj spektruma körül megemelkedik).
- **A fül frekvenciafüggő érzékenysége:** 10 dB körüli szinten a 100 Hz alatti és a magas (néhány kHz feletti) összetevők a hallásküszöb alá esnek, csak az 1–4 kHz környéki rész hallható.
- A levegő elnyelése (magas frekvencián), a hallgatók fejének, testének árnyékolása, a beszélő hangereje és iránya.
