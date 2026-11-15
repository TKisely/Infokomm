---
module_id: "07_irasbeli_vizsgasorok"
title: "Infokommunikáció - 7. Modul: Írásbeli Vizsgasorok és Összetett Hálózattervezési Feladatok"
task_count: 15
schema_version: "1.0"
---

# 7. Modul: Írásbeli Vizsgasorok és Összetett Hálózattervezési Feladatok

## Task_091
- **ID:** M7_T091
- **Topic:** Komplett Rádiós Link-Budget és Szakaszcsillapítás
- **Type:** Calculation

### Question
Egy mikrohullámú összeköttetés szakasztávolsága $d = 15	ext{ km}$, az üzemi frekvencia $f = 6	ext{ GHz}$. Az adóantenna nyeresége $G_T = 35	ext{ dBi}$, a vevőantenna nyeresége $G_R = 30	ext{ dBi}$, az adó kimenő teljesítménye $P_T = 1	ext{ W}$ ($30	ext{ dBm}$). A tápvonalak és csatlakozók együttes vesztesége az adó és vevő oldalon $A_{	ext{táp}} = 3	ext{ dB}$.
a) Számítsa ki a szabadterjedési csillapítást ($A_0$) dB-ben!
b) Mekkora a vevőantennához érkező vett teljesítmény ($P_R$) dBm-ben és Watt-ban?
c) Ha a vevő érzékenysége $P_{	ext{érz}} = -85	ext{ dBm}$, mekkora a rendszer tartaléka (Fading Margin)?

### Solution
a) A szabadterjedési csillapítás:
$$A_0 = 92{,}45 + 20 \lg(f_{[	ext{GHz}]}) + 20 \lg(d_{[	ext{km}]}) = 92{,}45 + 20 \lg(6) + 20 \lg(15) = 92{,}45 + 15{,}56 + 23{,}52 = \mathbf{131{,}53	ext{ dB}}$$

b) A vett teljesítmény:
$$P_R = P_T + G_T + G_R - A_0 - A_{	ext{táp}} = 30	ext{ dBm} + 35	ext{ dBi} + 30	ext{ dBi} - 131{,}53	ext{ dB} - 3	ext{ dB} = \mathbf{-39{,}53	ext{ dBm}}$$
Watt-ban átszámítva:
$$P_R = 10^{rac{-39{,}53 - 30}{10}} = 10^{-6{,}953} pprox \mathbf{111{,}4	ext{ nW}}$$

c) A tartalék (Fading Margin):
$$M_{	ext{fading}} = P_R - P_{	ext{érz}} = -39{,}53	ext{ dBm} - (-85	ext{ dBm}) = \mathbf{45{,}47	ext{ dB}}$$

---

## Task_092
- **ID:** M7_T092
- **Topic:** AM-DSB adó-vevő Lánc és Spektrum
- **Type:** Calculation

### Question
Egy AM-DSB adó vivőfrekvenciája $f_v = 1	ext{ MHz}$, a vivő amplitúdója $U_v = 10	ext{ V}$. A moduláló jel egy összetett hangfrekvenciás jel: $u_m(t) = 4 \cos(2\pi \cdot 2000 \cdot t) + 2 \cos(2\pi \cdot 5000 \cdot t)	ext{ [V]}$.
a) Határozza meg a modulációs mélységet ($m$), a csúcsfeszültséget és a sávszélességet!
b) Adja meg a spektrális összetevők frekvenciáit és amplitúdóit!
c) Mekkora a jel teljesítménye $R = 50\,\Omega$-os terhelésen?

### Solution
a) A moduláló jel maximális amplitúdója $U_{m,\max} = 4 + 2 = 6	ext{ V}$.
A modulációs mélység: $m = rac{U_{m,\max}}{U_v} = rac{6}{10} = \mathbf{0{,}6}$ ($60\%$).
A csúcsfeszültség: $U_{\max} = U_v + U_{m,\max} = 10 + 6 = \mathbf{16	ext{ V}}$.
A legmagasabb moduláló frekvencia $f_{m,\max} = 5	ext{ kHz}$, így a sávszélesség: $B = 2 \cdot f_{m,\max} = \mathbf{10	ext{ kHz}}$.

b) Spektrális összetevők (szimmetrikus oldalsávok):
- $1000	ext{ kHz}$ (vivő): $10	ext{ V}$
- $1002	ext{ kHz}$ és $998	ext{ kHz}$: $rac{4}{2} = \mathbf{2	ext{ V}}$
- $1005	ext{ kHz}$ és $995	ext{ kHz}$: $rac{2}{2} = \mathbf{1	ext{ V}}$

c) A teljesítmény $R = 50\,\Omega$-on:
$$P_v = rac{U_v^2}{2R} = rac{100}{100} = 1	ext{ W}$$
$$P_{	ext{oldalsáv}} = rac{2^2/2 + 2^2/2 + 1^2/2 + 1^2/2}{50} = rac{2 + 2 + 0{,}5 + 0{,}5}{50} = rac{5}{50} = 0{,}1	ext{ W}$$
$$P_{	ext{összes}} = P_v + P_{	ext{oldalsáv}} = 1 + 0{,}1 = \mathbf{1{,}1	ext{ W}}$$

---

## Task_093
- **ID:** M7_T093
- **Topic:** DVB-C 64-QAM Csatornakapacitás és Reed-Solomon Kódolás
- **Type:** Calculation

### Question
Egy DVB-C digitális kábeltelevíziós rendszerben a csatornaszélesség $B = 8	ext{ MHz}$. A moduláció 64-QAM, a gördülési tényező (roll-off) $lpha = 0{,}15$. A csatornakódolás Reed-Solomon RS(204, 188) kódot használ.
a) Mekkora a maximálisan átvihető szimbólumsebesség ($R_s$)?
b) Mekkora a bruttó bitsebesség és a hasznos (nettó) adatsebesség csatornánként?
c) Hány darab $2	ext{ Mbit/s}$ bitsebességű SDTV adás vihető át egyetlen $8	ext{ MHz}$-es csatornában?

### Solution
a) A Nyquist-szűrés miatti szimbólumsebesség:
$$R_s = rac{B}{1 + lpha} = rac{8	ext{ MHz}}{1{,}15} pprox \mathbf{6{,}9565	ext{ MSym/s}}$$

b) 64-QAM esetén szimbólumonként $b = \log_2(64) = 6	ext{ bit}$ vihető át.
Bruttó bitsebesség:
$$R_{	ext{bruttó}} = R_s \cdot 6 = 6{,}9565 \cdot 6 pprox \mathbf{41{,}739	ext{ Mbit/s}}$$
Az RS(204, 188) kódaránya $r = rac{188}{204} pprox 0{,}92157$.
Hasznos (nettó) bitsebesség:
$$R_{	ext{nettó}} = R_{	ext{bruttó}} \cdot rac{188}{204} = 41{,}739 \cdot 0{,}92157 pprox \mathbf{38{,}465	ext{ Mbit/s}}$$

c) A szállítható adások száma:
$$N_{	ext{csatorna}} = \left\lfloor rac{38{,}465}{2} ightfloor = \mathbf{19	ext{ TV adás}}$$

---

## Task_094
- **ID:** M7_T094
- **Topic:** Sávszűrős Mintavételezés és Tükörfrekvencia Analízis
- **Type:** Calculation

### Question
Egy sávszűrőzött analóg jel frekvenciasávja $f_{\min} = 60	ext{ kHz}$ és $f_{\max} = 80	ext{ kHz}$ közötti.
a) Mekkora a teoretikus minimális Nyquist-mintavételi frekvencia aluláteresztő (LPF) és sávszűrős (BPF) feltételezéssel?
b) Határozza meg a sávszűrős mintavétel megengedett mintavételi frekvenciatartományait!
c) Ha ezt a jelet egy szuperheterodin vevőben $f_{	ext{KF}} = 455	ext{ kHz}$ középfrekvenciára keverjük felső keveréssel, mekkora az oszcillátor frekvenciája és a tükörfrekvenciás sáv közepe?

### Solution
a) 
- Aluláteresztő mintavétel esetén: $f_{s,	ext{LPF}} \ge 2 \cdot f_{\max} = 2 \cdot 80 = \mathbf{160	ext{ kHz}}$.
- Sávszűrős mintavétel esetén a sávszélesség $B = f_{\max} - f_{\min} = 20	ext{ kHz}$. A minimális frekvencia: $2B = \mathbf{40	ext{ kHz}}$.

b) A megengedett tartományok $n \in \mathbb{N}$ egész számra ($1 \le n \le \lfloor f_{\max}/B floor = 4$):
$$rac{2 f_{\max}}{n} \le f_s \le rac{2 f_{\min}}{n - 1}$$
- $n = 4$: $rac{160}{4} \le f_s \le rac{120}{3} \implies \mathbf{40	ext{ kHz} \le f_s \le 40	ext{ kHz}}$ (pontszerű).
- $n = 3$: $rac{160}{3} \le f_s \le rac{120}{2} \implies \mathbf{53{,}33	ext{ kHz} \le f_s \le 60	ext{ kHz}}$.
- $n = 2$: $rac{160}{2} \le f_s \le rac{120}{1} \implies \mathbf{80	ext{ kHz} \le f_s \le 120	ext{ kHz}}$.

c) Felső keverésnél a vivőközép $f_0 = 70	ext{ kHz}$:
Oszcillátor frekvencia: $f_{	ext{OSC}} = f_0 + f_{	ext{KF}} = 70 + 455 = \mathbf{525	ext{ kHz}}$.
Tükörfrekvencia közepe: $f_{	ext{tükör}} = f_0 + 2 f_{	ext{KF}} = 70 + 2 \cdot 455 = \mathbf{980	ext{ kHz}}$.

---

## Task_095
- **ID:** M7_T095
- **Topic:** Ciklikus Kódok és CRC Generátorpolinomos Osztás
- **Type:** Calculation

### Question
Adott a $g(x) = x^3 + x + 1$ generátorpolinomos CRC kód.
a) Határozza meg a $d = (1011)$ adatsorhoz tartozó ellenőrző biteket (FCS) bináris polino osztással!
b) Írja fel a továbbított teljes kódszót!
c) Igazolja, hogy ha a vett kódszó megegyezik a küldöttel, az osztási maradék (szindróma) nullát ad!

### Solution
a) Az adatvektor $d = (1, 0, 1, 1)$, ehhez tartozó polinom $d(x) = x^3 + x + 1$.
Mivel a generátorpolinom $g(x)$ fokszáma $r = 3$, az adatvektort eltoljuk 3 bittel balra ($x^3 \cdot d(x) \implies 1011000$).
Bináris modulo-2 osztás (XOR) $1011000 \pmod{1011}$:
```
1011000 : 1011 = 1000
1011
----
0000000 -> Maradék: 000
```
Pontosítás: $g(x) = x^3 + x + 1 \implies$ binárisan `1011`.
Elmozdított adat $1011000$:
`1011000 XOR 1011000 = 0000000`.
A maradék (FCS): **000**.

Módosított példa szemléltetésre: $d = (1101) \implies 1101000$:
```
1101000 : 1011
1011
----
 1100
 1011
 ----
  1110
  1011
  ----
   101 -> Maradék (FCS) = 101
```
A továbbított kódszó: **1101101**.

c) Vevő oldali ellenőrzés:
A vett $1101101$ kód elosztása $1011$-gyel modulo-2 pontosan **000** maradékot ad, jelezve a hibátlan átvitelt.

---

## Task_096
- **ID:** M7_T096
- **Topic:** GSM Szektorált Klaszter és Kapacitástervezés
- **Type:** Calculation

### Question
Egy GSM 900 hálózatban a szolgáltató $N_c = 42$ FDM csatornával rendelkezik. A cellák $120^\circ$-os szektorálást alkalmaznak ($3	ext{ szektor/bázisállomás}$).
a) Számítsa ki egy szektor FDM csatornáinak számát $N = 7$-es klaszter esetén!
b) Hány egyidejű beszédcsatorna érhető el szektoronként, bázisállomásonként és a teljes klaszterben?
c) Hogyan változik a bázisállomásonkénti kapacitás, ha $N = 3$-as klaszterre térünk át?

### Solution
a) $N = 7$-es klaszter esetén a $42$ FDM csatorna feloszlik a 7 cella között:
$$	ext{FDM/cella} = rac{42}{7} = 6	ext{ FDM csatorna}$$
Mivel $3$ szektor van cellánként:
$$	ext{FDM/szektor} = rac{6}{3} = \mathbf{2	ext{ FDM csatorna/szektor}}$$

b) Egy GSM FDM csatorna $8$ TDMA időrést (beszédcsatornát) biztosít:
- **Szektoronként:** $2 	imes 8 = \mathbf{16	ext{ beszédcsatorna}}$
- **Bázisállomásonként (BS):** $3 	imes 16 = \mathbf{48	ext{ beszédcsatorna}}$
- **Teljes klaszterben:** $7 	imes 48 = \mathbf{336	ext{ egyidejű beszédcsatorna}}$

c) $N = 3$-as klaszter esetén:
$$	ext{FDM/cella} = rac{42}{3} = 14	ext{ FDM csatorna}$$
$$	ext{Beszédcsatorna/BS} = 14 	imes 8 = \mathbf{112	ext{ egyidejű beszédcsatorna}}$$
A kapacitás több mint **duplájára ($2{,}33	imes$) nő**, de a társcsatornás védőtávolság csökkenése miatt erősebb interferencia védelmet igényel.

---

## Task_097
- **ID:** M7_T097
- **Topic:** VoIP Hálózat Forgalmi Méretezése és QoS
- **Type:** Calculation

### Question
Egy vállalat VoIP központjába átlagosan $1200$ hívás érkezik az átlagos terhelési órában (BHCA). Egy hívás átlagos tartama $t = 2{,}5	ext{ perc}$. A hívásblokkolási valószínűség felső határa $P_b \le 1\%$.
a) Számítsa ki a felajánlott forgalmat Erlangban!
b) Hány IP trunk csatornára van szükség Erlang-B táblázat alapján?
c) Mekkora a szükséges minimális IP sávszélesség, ha G.711 kodeket ($80	ext{ kbit/s}$ csomagszintű sebesség) használunk?

### Solution
a) A hívási sűrűség $\lambda = rac{1200}{3600} = rac{1}{3}	ext{ hívás/mp}$.
A hívásidő $T = 2{,}5 	imes 60 = 150	ext{ mp}$.
A felajánlott forgalom:
$$A = \lambda \cdot T = rac{1}{3} 	imes 150 = \mathbf{50	ext{ Erlang}}$$

b) Erlang-B formula alapján $A = 50	ext{ Erl}$ és $P_b = 0{,}01$ ($1\%$):
Erlang-B táblázatból/számításból a szükséges trunk csatornák száma:
$$N = \mathbf{64	ext{ csatorna}}$$

c) A sávszélesség-szükséglet:
$$B_{	ext{összes}} = 64 	imes 80	ext{ kbit/s} = 5120	ext{ kbit/s} = \mathbf{5{,}12	ext{ Mbit/s}}$$

---

## Task_098
- **ID:** M7_T098
- **Topic:** Teremakusztika és Utózengési Idő (Sabine)
- **Type:** Calculation

### Question
Egy előadóterem térfogata $V = 1000	ext{ m}^3$, a határoló felületek összterülete $S = 650	ext{ m}^2$. A felületek átlagos elnyelési tényezője $lpha = 0{,}15$.
a) Számítsa ki a terem utózengési idejét ($T_{60}$) a Sabine-képlettel!
b) Mekkora elnyelési felületet ($A$) kell pluszban beépíteni, hogy az utózengési idő $T_{60} = 0{,}8	ext{ mp}$-re csökkenjen?

### Solution
a) A Sabine-féle utózengési idő képlete:
$$T_{60} = 0{,}161 \cdot rac{V}{A} = 0{,}161 \cdot rac{V}{lpha \cdot S}$$
A jelenlegi elnyelési felület: $A_1 = 0{,}15 	imes 650 = 97{,}5	ext{ m}^2$.
$$T_{60,1} = 0{,}161 \cdot rac{1000}{97{,}5} pprox \mathbf{1{,}65	ext{ mp}}$$

b) A kívánt $T_{60,2} = 0{,}8	ext{ mp}$-hez szükséges elnyelési felület:
$$A_2 = 0{,}161 \cdot rac{V}{T_{60,2}} = 0{,}161 \cdot rac{1000}{0{,}8} = 201{,}25	ext{ m}^2$$
A beépítendő plusz elnyelési felület:
$$\Delta A = A_2 - A_1 = 201{,}25 - 97{,}5 = \mathbf{103{,}75	ext{ m}^2	ext{ (Sabin)}}$$

---

## Task_099
- **ID:** M7_T099
- **Topic:** Szemábra és Emelt Koszinuszos Szűrés
- **Type:** Conceptual & Calculation

### Question
a) Definiálja a Nyquist I. és II. krítériumát!
b) Egy digitális átviteli rendszerben a szimbólumsebesség $R_s = 2	ext{ MBaud}$. Mekkora az emelt koszinuszos szűrő sávszélessége $lpha = 0$, $lpha = 0{,}5$ és $lpha = 1$ gördülési tényezők esetén?
c) Hogyan befolyásolja az $lpha$ növelése a szemábra nyitottságát és a dzsitter-érzékenységet?

### Solution
a) 
- **Nyquist I. kritérium:** A szimbólumközti áthallás (ISI) mentes mintavétel feltétele, hogy az impulzusválasz $h(t)$ a mintavételi pillanatokban ($t = k T_s$) $1$ legyen $k=0$-ra, és $0$ minden $k 
e 0$ egészre.
- **Nyquist II. kritérium:** Kontrollált ISI-t ír elő, ahol az áthallás csak a közvetlenül szomszédos szimbólumokra terjed ki (pl. Duobinary kódolás).

b) A sávszélesség képlete: $B = rac{R_s}{2} (1 + lpha) = 1	ext{ MHz} \cdot (1 + lpha)$.
- $lpha = 0$ (ideális téglalap szűrő): $B = \mathbf{1	ext{ MHz}}$ (minimális Nyquist-sávszélesség).
- $lpha = 0{,}5$: $B = 1 	imes 1{,}5 = \mathbf{1{,}5	ext{ MHz}}$.
- $lpha = 1$ (100% túlméretezés): $B = 1 	imes 2 = \mathbf{2	ext{ MHz}}$.

c) Az $lpha$ gördülési tényező növelése mérsékli a lecsengő hullámzást az időtartományban, ezáltal **szélesebbre nyitja a szemábrát**, és **csökkenti a mintavételi fázishibából (dzsitter) eredő ISI-érzékenységet**, a sávszélesség-igény növekedésének árán.

---

## Task_100
- **ID:** M100
- **Topic:** DTMF Mátrix és Erlang-B Túlterhelési Vizsgálat
- **Type:** Calculation

### Question
Egy alközpontban $200$ előfizető található. Minden előfizető átlagosan óránként $2$ hívást indít, és a tárcsázás során a DTMF vevőt $t = 6	ext{ másodpercig}$ foglalja le.
a) Számítsa ki a DTMF vevőkre jutó felajánlott forgalmat ($A_{	ext{DTMF}}$)!
b) Hány DTMF vevő egység szükséges, ha a megengedett blokkolás $P_b \le 0{,}5\%$?

### Solution
a) Hívások száma óránként: $\lambda = 200 	imes 2 = 400	ext{ hívás/óra}$.
Egy tárcsázási foglaltság ideje $T = 6	ext{ mp} = rac{6}{3600}	ext{ óra} = rac{1}{600}	ext{ óra}$.
A felajánlott forgalom a DTMF vevőkön:
$$A_{	ext{DTMF}} = \lambda \cdot T = 400 	imes rac{1}{600} = \mathbf{0{,}667	ext{ Erlang}}$$

b) Erlang-B képlettel $A = 0{,}667	ext{ Erl}$ és $P_b \le 0{,}005$:
- $N = 1$ vevőnél: $P_b = rac{0{,}667}{1 + 0{,}667} pprox 40\%$.
- $N = 2$ vevőnél: $P_b pprox 11{,}7\%$.
- $N = 3$ vevőnél: $P_b pprox 2{,}5\%$.
- $N = 4$ vevőnél: $P_b pprox 0{,}42\% \le 0{,}5\%$.
Szükséges DTMF vevők száma: **4 darab**.

---

## Task_101
- **ID:** M7_T101
- **Topic:** QPSK es 8-PSK Gray-kódolás és Bit-Hibaarány (BER)
- **Type:** Conceptual & Calculation

### Question
a) Rajzolja fel a QPSK moduláció konstellációs diagramját Gray-kódolású bitösszerendeléssel!
b) Miért előnyös a Gray-kódolás alkalmazása a digitális modulációknál?
c) Hasonlítsa össze a QPSK és 8-PSK modulációk fázistávolságát és zajmargóját azonos átlagteljesítmény esetén!

### Solution
a) QPSK konstelláció (4 szimbólum, $90^\circ$-os fáziskülönbség):
- $45^\circ$: `00`
- $135^\circ$: `01`
- $225^\circ$: `11`
- $315^\circ$: `10`

b) **A Gray-kódolás előnye:** A szomszédos konstellációpontok csak 1 bitben térnek el egymástól. Így a leggyakoribb szimbólumhiba (amikor a zaj a legközelebbi szomszédos pontba torzítja a jelet) mindössze **1 bit hibát eredményez**, minimálisra csökkentve a bit-hibaarányt (BER).

c) Fázisszögek és fázismargó azonos $R$ amplitúdó mellett:
- QPSK esetén a szomszédos pontok közötti szögtávolság $\Delta \phi = 90^\circ$, fázismargó: $\pm 45^\circ$.
- 8-PSK esetén a szomszédos pontok közötti szögtávolság $\Delta \phi = 45^\circ$, fázismargó: $\pm 22{,}5^\circ$.
A 8-PSK minimális euklideszi távolsága $d_{\min} = 2R \sin(22{,}5^\circ) pprox 0{,}765 R$, míg a QPSK-é $d_{\min} = 2R \sin(45^\circ) pprox 1{,}414 R$. A 8-PSK kb. **5,3 dB-legyengébb zajvédettségű** azonos adóteljesítmény mellett.

---

## Task_102
- **ID:** M7_T102
- **Topic:** Shannon-Hartley Csatornakapacitás Határérték
- **Type:** Calculation

### Question
a) Írja fel a Shannon-Hartley csatornakapacitás tételét!
b) Számítsa ki a csatornakapacitást, ha $B = 1	ext{ MHz}$ és az $SNR = 15	ext{ dB}$!
c) Határozza meg a minimális egy bitre jutó energiát a zajteljesítmény-sűrűséghez képest ($(E_b/N_0)_{\min}$) tetszőlegesen nagy sávszélesség ($B 	o \infty$) esetén!

### Solution
a) A Shannon-Hartley összefüggés:
$$C = B \cdot \log_2\left(1 + rac{S}{N}ight)	ext{ [bit/s]}$$

b) $SNR = 15	ext{ dB} \implies rac{S}{N} = 10^{1{,}5} pprox 31{,}62$.
$$C = 10^6 \cdot \log_2(1 + 31{,}62) = 10^6 \cdot \log_2(32{,}62) pprox 10^6 	imes 5{,}028 = \mathbf{5{,}028	ext{ Mbit/s}}$$

c) Végtelen sávszélesség ($B 	o \infty$) esetén a Shannon-határ:
$$\lim_{B 	o \infty} C = \lim_{B 	o \infty} B \log_2\left(1 + rac{S}{N_0 B}ight) = rac{S}{N_0} \log_2(e) pprox 1{,}44 \cdot rac{S}{N_0}$$
Az $S = C \cdot E_b$ behelyettesítéssel visszakapjuk a híres Shannon-korlátot:
$$\left(rac{E_b}{N_0}ight)_{\min} = \ln(2) pprox 0{,}693 pprox \mathbf{-1{,}59	ext{ dB}}$$

---

## Task_103
- **ID:** M7_T103
- **Topic:** GSM Hívásfelépítés és Autentikáció Jelzésáramlása
- **Type:** Conceptual

### Question
Vázolja fel és ismertesse lépésről lépésre a GSM hálózaton belüli hívásindítás és autentikáció folyamatát az MS, BTS, BSC, MSC, HLR és AuC elemek között!

### Solution
1. **Random Access (RACH):** Az MS egy `Channel Request` üzenetet küld a BTS-nek a RACH csatornán.
2. **Kijelölés (AGCH):** A BSC kijelöl egy dedikált vezérlőcsatornát (SDCCH), és elküldi az MS-nek az AGCH-n.
3. **Szolgáltatáskérés:** Az MS az SDCCH-n átküldi a `CM Service Request` üzenetet az MSC felé.
4. **Autentikáció kérése (AuC/HLR $	o$ MSC):** Az MSC elkéri az AuC/HLR-től a tripletet: $(	ext{RAND}, 	ext{SRES}, K_c)$.
5. **Kihívás-Válasz (MS $\leftrightarrow$ MSC):** Az MSC elküldi a `RAND` értéket az MS-nek. Az MS a SIM kártyán lévő $K_i$ kulccsal és az A3 algoritmussal kiszámítja a `SRES`-t, majd visszaküldi az MSC-nek.
6. **Azonosítás:** Az MSC összehasonlítja a kapott és az AuC-tól kapott `SRES`-t. Egyezés esetén a hívás engedélyezett.
7. **Titkosítás (A5):** Az MSC elindítja a titkosítást a $K_c$ kulccsal (A8 algoritmus).
8. **TCH Kijelölés:** A BSC kijelöli a TCH beszédcsatornát, a hívás felépül.

---

## Task_104
- **ID:** M7_T104
- **Topic:** Duobinary Kódolás és Kontrollált ISI
- **Type:** Calculation & Conceptual

### Question
Egy Duobinary (Nyquist II.) rendszerben a bemeneti bit-sorozat $a_k \in \{0, 1\}$.
a) Ismertesse a prekódolás és a duobinary összegzés menetét!
b) Határozza meg a kimeneti $y_k$ szintsorozatot a következő bemenetre: $a_k = (1, 0, 1, 1, 0, 0, 1)$!
c) Hány kimeneti feszültségszint keletkezik?

### Solution
a) A Duobinary kódolás kontrollált ISI-t használ.
1. **Prekódolás:** $b_k = a_k \oplus b_{k-1} \pmod 2$.
2. **Kimenet képzése:** $c_k = b_k + b_{k-1}$ (ahol $b_k \in \{0, 1\}$), a kimeneti szintek $c_k \in \{0, 1, 2\}$.

b) Bemenet: $a_k = (1, 0, 1, 1, 0, 0, 1)$. Legyen $b_{-1} = 0$:
- $k=0: a_0=1 \implies b_0 = 1 \oplus 0 = 1 \implies c_0 = 1 + 0 = 1$
- $k=1: a_1=0 \implies b_1 = 0 \oplus 1 = 1 \implies c_1 = 1 + 1 = 2$
- $k=2: a_2=1 \implies b_2 = 1 \oplus 1 = 0 \implies c_2 = 0 + 1 = 1$
- $k=3: a_3=1 \implies b_3 = 1 \oplus 0 = 1 \implies c_3 = 1 + 0 = 1$
- $k=4: a_4=0 \implies b_4 = 0 \oplus 1 = 1 \implies c_4 = 1 + 1 = 2$
- $k=5: a_5=0 \implies b_5 = 0 \oplus 1 = 1 \implies c_5 = 1 + 1 = 2$
- $k=6: a_6=1 \implies b_6 = 1 \oplus 1 = 0 \implies c_6 = 0 + 1 = 1$

A kimeneti sorozat $c_k = \mathbf{(1, 2, 1, 1, 2, 2, 1)}$.

c) A kimeneten **3 feszültségszint** ($0, 1, 2$) keletkezik.

---

## Task_105
- **ID:** M7_T105
- **Topic:** Fresnel-zóna Térszámítás és Akadálymentes Terjedés
- **Type:** Calculation

### Question
Egy $d = 20	ext{ km}$-es összeköttetésen $f = 2	ext{ GHz}$-en rádiózunk. A szakasz közepén ($d_1 = d_2 = 10	ext{ km}$) egy hegygerinc található.
a) Számítsa ki az 1. Fresnel-zóna sugarát ($F_1$) a szakasz közepén!
b) Hány méter szabad rálátási magasságot kell biztosítani a hegygerinc felett, hogy a szabadterjedési csillapítás érvényesüljön (60%-os Fresnel-zóna szabály)?

### Solution
a) A hullámhossz:
$$\lambda = rac{c}{f} = rac{3 \cdot 10^8}{2 \cdot 10^9} = 0{,}15	ext{ m}$$
Az 1. Fresnel-zóna sugara a szakaszfelezőben ($d_1 = d_2 = 10000	ext{ m}$, $d = 20000	ext{ m}$):
$$F_1 = \sqrt{rac{\lambda \cdot d_1 \cdot d_2}{d}} = \sqrt{rac{0{,}15 \cdot 10000 \cdot 10000}{20000}} = \sqrt{rac{1500000}{20000}} = \sqrt{75} pprox \mathbf{8{,}66	ext{ méter}}$$

b) A rádiótechnikai gyakorlatban az akadálymentes terjedéshez az 1. Fresnel-zóna legalább **60%-ának** szabadon kell maradnia:
$$h_{\min} = 0{,}6 	imes F_1 = 0{,}6 	imes 8{,}66 pprox \mathbf{5{,}2	ext{ méter}}$$
Tehát a hegygerinc felett legalább **5,2 méter** szabad rálátási magasságot kell biztosítani az antennák magasságának helyes megválasztásával.
