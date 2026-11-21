---
forras: "VikWiki/Infokomm_vizsga_2009_12_15.pdf (2 oldal, szöveges PDF)"
tartalom: "Infokommunikáció elővizsga, 2009. december 15. – 5 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció elővizsga – 2009. december 15.

A lap megjegyzése: az értékelésnél alapvetően nem a végeredményt, hanem az indoklást vizsgálják.

---

## 1. feladat – Szimmetrikus kábel

**Feladat.** $R=50\ \Omega/\text{km}$, $G=0{,}5\ \mu\text{S/km}$, $L=0{,}5\ \text{mH/km}$, $C=50\ \text{nF/km}$.
a) Hullámellenállás? b) Csillapítástényező? c) Milyen hosszú lehet a (vivőfrekvenciás) erősített szakasz, ha az áthallási védettség legalább 65 dB, és a közelvégi áthallási csillapítás 108,5 dB? d) Terjedési sebesség?

**Megoldás.** Frekvencia nincs megadva; vivőfrekvenciás rendszerről van szó, ahol $\omega L\gg R$ és $\omega C\gg G$, így a nagyfrekvenciás közelítés használható. **Tisztázva:** a közelítés 60 kHz felett 5%-on belül pontos ($\omega L\ge3{,}8R$), a vivőfrekvenciás rendszerek ennél magasabb frekvencián dolgoznak; a c) pont kerek eredménye (≈ 20 km) is azt mutatja, hogy a feladat ezt a közelítést várja.

a) $Z_0\approx\sqrt{\dfrac LC}=\sqrt{\dfrac{0{,}5\cdot10^{-3}}{50\cdot10^{-9}}}=\sqrt{10^4}=\mathbf{100\ \Omega}$.

b) $\alpha\approx\dfrac{R}{2Z_0}+\dfrac{GZ_0}{2}=\dfrac{50}{200}+\dfrac{0{,}5\cdot10^{-6}\cdot100}{2}=0{,}25+2{,}5\cdot10^{-5}\approx\mathbf{0{,}25\ Np/km=2{,}17\ dB/km}$.

c) A közelvégi áthallásnál a zavaró jel az erősítő kimenetéről, teljes szinttel jut át a szomszédos érpárra, a hasznos jel viszont a szakasz végére a szakaszcsillapítással gyengülve érkezik. Ezért
$$a_{\text{védettség}}=a_{\text{NEXT}}-\alpha\,l\ \ge65\ \text{dB}\ \Rightarrow\ \alpha l\le108{,}5-65=43{,}5\ \text{dB}\ \Rightarrow\ l\le\frac{43{,}5}{2{,}17}\approx\mathbf{20\ km}.$$

d) $v=\dfrac{1}{\sqrt{LC}}=\dfrac1{\sqrt{0{,}5\cdot10^{-3}\cdot50\cdot10^{-9}}}=\dfrac{1}{5\cdot10^{-6}}=\mathbf{2\cdot10^5\ km/s}$ (a fénysebesség 2/3-a).

**Ellenőrzés:** c) 20 km-en a szakaszcsillapítás $20\cdot2{,}17=43{,}4$ dB, a védettség $108{,}5-43{,}4=65{,}1$ dB ≥ 65 dB. ✔ d) $v=\omega/\beta$, $\beta=\omega\sqrt{LC}$ → ugyanaz. ✔

---

## 2. feladat – FM modulátor

**Feladat.** Moduláló jel 1 kHz-es szinusz; vivő 100 kHz, teljesítmény 2 W (50 Ω-on), frekvencialöket 5 kHz.
a) Fázislöket? Hányszorosára változik az amplitúdó, a teljesítmény, a fázislöket és a frekvencialöket,
b) ha a moduláló jel effektív értéke felére csökken? c) ha a moduláló jel frekvenciája másfélszeresére nő?

**Megoldás.** FM-nél $\Delta f=k_f\,U_m$ (a moduláló amplitúdóval arányos, frekvenciától független), $\Delta\varphi=\beta=\Delta f/f_m$; az amplitúdó és a teljesítmény a modulációtól független ($U=\sqrt{2PR}=\sqrt{200}\approx14{,}1$ V csúcsérték).

a) $\Delta\varphi=\dfrac{5\ \text{kHz}}{1\ \text{kHz}}=\mathbf{5\ rad}$.

| | amplitúdó | teljesítmény | fázislöket | frekvencialöket |
|---|---|---|---|---|
| b) $U_{m,\text{eff}}$ felére | ×1 | ×1 | **×0,5** (2,5 rad) | **×0,5** (2,5 kHz) |
| c) $f_m$ 1,5-szeresére | ×1 | ×1 | **×2/3** (3,33 rad) | ×1 (5 kHz) |

**Ellenőrzés:** c) $\beta=\Delta f/f_m=5/1{,}5=3{,}33$ rad, valóban 2/3-szoros. ✔

---

## 3. feladat – Melyik szerelő? (kétutas terjedés)

**Feladat.** GSM 900 MHz, bázisállomás-antenna 33⅓ m magasan. A bekötőút a főúttól pontosan keletre, 3 km hosszan vezet a bázisállomáshoz. $\Gamma=-1$. A két szerelő magassága kb. 150 cm, illetve 210 cm.
a) Melyik dolgozott, ha a kereszteződéstől számítva az első térerősség-maximumot 2160 m-nél tapasztalta?
b) Szakaszcsillapítás ezen a helyen fejmagasságban: adóteljesítmény 10 W, bázisantenna nyeresége 6 dB, mérőfej 0 dB, mért teljesítmény 80 nW.
c) Mekkora a vett teljesítmény, ha a toronyig hátralévő távolság egyharmadát megtesszük?
d) Mekkora a szakaszcsillapítás, ha a b) ponthoz képest a hátralévő távolság további egynegyedét tesszük meg?
e) (Bónusz) Hogyan lehetne a b) helyzetben a szabadtéri terjedésnél mérhető teljesítményt vizsgálni?

**Megoldás.** $\lambda=1/3$ m. Kétutas modellben ($\Gamma=-1$):
$$P_r(d)\ \propto\ \frac1{d^2}\sin^2\!\left(\frac{2\pi h_Th_R}{\lambda d}\right).$$

a) A kereszteződéstől a torony felé haladva az első maximum a legtávolabbi maximum, $d_0=\frac{4h_Th_R}{\lambda}$. A toronytól mért távolság $3000-2160=840$ m:
$$h_R=\frac{d_0\lambda}{4h_T}=\frac{840\cdot1/3}{4\cdot33{,}33}=\mathbf{2{,}1\ m}\ \Rightarrow\ \text{a magas (210 cm-es) szerelő dolgozott.}$$

b) $P_T=10$ W = 40 dBm, $P_R=80$ nW = −40,97 dBm. A tárgy definíciója szerint a szakaszcsillapítás a betáplált és a vett teljesítmény aránya (az antennanyereségeket is tartalmazza):
$$a_{sz}=10\lg\frac{P_T}{P_R}=40+40{,}97\approx\mathbf{81{,}0\ dB}.$$
(Az izotróp antennák közötti terjedési csillapítás ebből $81+6+0=87$ dB. A kétutas elmélet a maximumhelyen $90{,}0-6-6=78$ dB-es szakaszcsillapítást adna; a mért érték 3 dB-lel rosszabb – a feladat a mért adatból dolgozik.)

c) Egyharmad megtétele után $d=840\cdot\frac23=560$ m. A szinusz argumentuma $\frac\pi2\cdot\frac{840}{560}=\frac{3\pi}4$:
$$\frac{P(560)}{P(840)}=\left(\frac{840}{560}\right)^2\cdot\sin^2\frac{3\pi}{4}=2{,}25\cdot0{,}5=1{,}125\ \Rightarrow\ P_R=\mathbf{90\ nW}.$$

d) A b) ponthoz (840 m) képest a hátralévő távolság negyede 210 m → $d=630$ m, argumentum $\frac\pi2\cdot\frac{840}{630}=\frac{2\pi}3$:
$$\frac{P(630)}{P(840)}=\left(\frac{840}{630}\right)^2\cdot\sin^2\frac{2\pi}3=1{,}778\cdot0{,}75=1{,}333\ (+1{,}25\ \text{dB})\ \Rightarrow\ a_{sz}\approx81{,}0-1{,}25=\mathbf{79{,}7\ dB}.$$
**Tisztázva:** a szöveg kifejezetten „a b) feladatrészhez képest” méri a hátralévő távolságot, ezért a kiindulópont a 840 m (nem a c) pont 560 m-e). (Ha mégis 560 m-ről indulnánk, 420 m-en az argumentum $\pi$, ott kioltás volna.)

e) A kétutas tér $2|\sin(\cdot)|$-szerese a szabadtérinek; ha $2\sin x=1$, azaz $x=\pi/6$, a mért érték éppen a szabadtéri. Ehhez a mérőfejet $h_R=\frac{d\lambda}{12h_T}=\frac{840/3}{400}=$ **0,7 m** magasra kell tenni (a fejmagasság harmadára). Más lehetőség: a talajreflexiót elnyomni (irányított mérőantenna a torony felé, ill. elnyelő a reflexiós pontnál).

**Ellenőrzés:** a) a maximum feltétele: útkülönbség $2h_Th_R/d=2\cdot33{,}33\cdot2{,}1/840=0{,}1667=\lambda/2$. ✔ c)–d) gépi számítás a teljes $P_r(d)$ képlettel: 560 m → 90,0 nW; 630 m → 106,7 nW (+1,25 dB). ✔

---

## 4. feladat – Ügyfélszolgálat (Erlang-B)

**Feladat.** 1 millió ügyfél; 21 munkatárs; a csúcsidőben 0,1%-os blokkolás.
a) Hívásintenzitás a csúcsidőben, ha az átlagos tartási idő 2,5 perc? b) Ha egész nap ekkora a hívásintenzitás, mennyi a várható idő egy ügyfél két hívása között? c) Egy munkatárs átlagos foglaltsága? d) A blokkolást 0,05%-ra akarják csökkenteni – hány új munkatárs kell? e) Ezután a hívásintenzitás 20%-kal nő – hány munkatárs kell? f) 12 s-os automatikus tájékoztatót hallgattatnak meg a munkatárshoz kapcsolás előtt – hogyan változik a létszám?

**Megoldás.**
a) Erlang-B, $N=21$, $B=0{,}1\%$ → $A\approx$ **10,1 Erl** (a görbéről leolvasva; számítva 10,11).
$$\lambda=\frac Ah=\frac{10{,}1}{2{,}5\ \text{perc}}\approx\mathbf{4{,}04\ hívás/perc\approx243\ hívás/óra}.$$

b) Egy napra: $243\cdot24\approx5820$ hívás/nap. Egy ügyfélre: $5820/10^6$ hívás/nap → két hívás közötti várható idő $10^6/5820\approx$ **172 nap** (≈ 5,7 hónap).

c) Átvitt forgalom / létszám: $\rho=\frac{A(1-B)}{N}=\frac{10{,}1\cdot0{,}999}{21}\approx$ **0,48** (48%).

d) $A=10{,}1$, $B\le0{,}05\%$: $N=21$-nél $B=0{,}1\%$, $N=22$-nél $B=0{,}046\%$ → **22 fő, azaz 1 új munkatárs**.

e) $A=1{,}2\cdot10{,}1=12{,}13$ Erl, $B\le0{,}05\%$ → **25 fő** (3 újabb).

f) A tájékoztató automatikus, a munkatársat nem foglalja: a munkatársakhoz érkező forgalom nem változik → **a létszám nem változik (25 fő)**. (A bejövő vonalakat/automatát viszont hívásonként 12 s-mal tovább foglalja, ott kell kapacitásbővítés: $A$ 12/150 = 8%-kal nő.)

**Ellenőrzés:** az Erlang-B rekurzióval ($B_k=\frac{AB_{k-1}}{k+AB_{k-1}}$) visszaszámolva: $B(10{,}11;21)=0{,}100\%$, $B(10{,}11;22)=0{,}046\%$, $B(12{,}13;25)=0{,}043\%$, $B(12{,}13;24)>0{,}05\%$. ✔

---

## 5. feladat – Szuperheterodin vevő 4–32 MHz

**Feladat.** Vevő 4–32 MHz-re, KF = 3,5 MHz.
a) Milyen tartományt kell átfognia a helyi oszcillátornak felső, illetve alsó keverésnél? Melyik jobb és miért? b) Alsó keverésnél hová kell állítani az LO-t az 5,5 MHz-es jelhez? c) Lesz-e tüköradó? Ha igen, mi a frekvenciája?

**Megoldás.**
a) - Felső keverés: $f_{LO}=f+3{,}5$ → **7,5–35,5 MHz** (arány 4,7).
- Alsó keverés: $f_{LO}=f-3{,}5$ → **0,5–28,5 MHz** (arány 57).
**A felső keverés a jobb:** az LO-nak sokkal kisebb relatív hangolási tartományt kell átfognia ($f\sim1/\sqrt{C}$ miatt a kapacitásarány $4{,}7^2\approx22$, alsó keverésnél $57^2\approx3250$ – kivitelezhetetlen); ráadásul alsó keverésnél az LO a KF közelébe/alá is kerülne.

b) $f_{LO}=5{,}5-3{,}5=$ **2 MHz**.

c) A keverő $|f\pm f_{LO}|$ frekvenciákat állít elő; 3,5 MHz-et ad az $f=f_{LO}+f_{KF}=5{,}5$ MHz (hasznos) és az $f=f_{KF}-f_{LO}=1{,}5$ MHz is (összegfrekvencia: $1{,}5+2=3{,}5$). **Igen, van tüköradó: 1,5 MHz-en** – ez a középhullámú műsorszóró sávba esik, ahol erős AM-adók vannak, így a bemeneti szűrőnek ezt el kell nyomnia.

**Ellenőrzés:** az általános tükörképlet alsó keverésre $f_t=f-2f_{KF}=5{,}5-7=-1{,}5$ MHz, ennek abszolút értéke 1,5 MHz. ✔
