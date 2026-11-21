---
forras: "VikWiki/Infokomm_vizsga_2010_01_20.pdf (2 oldal, szkennelt); a hozzá tartozó megoldás: Infokomm_vizsga_2010_01_20_mo.pdf (ellenőrzése: 2010_01_20_mo_ellenorzes.md)"
tartalom: "Infokommunikáció vizsga, 2010. január 20. – 5 feladat"
jeloles: "[MO HIBÁS] = a mellékelt megoldás ezen a ponton hibás; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2010. január 20.

A megoldásokat függetlenül számoltam, a mellékelt (hallgatói) megoldással csak utólag vetettem össze.

---

## 1. feladat – Szimmetrikus kábel (50–200 kHz)

**Feladat.** $R=50\ \Omega/\text{km}$, $G=0{,}5\ \mu\text{S/km}$, $L=1\ \text{mH/km}$, $C=25\ \text{nF/km}$, 50–200 kHz.
a) Hullámellenállás? b) Csillapítástényező? c) Az áthallási védettség legalább 65 dB; milyen hosszú lehet az erősített szakasz, ha a közelvégi áthallási csillapítás 108,5 dB? d) Terjedési sebesség?

**Megoldás.** 50 kHz-en $\omega L=314\ \Omega/\text{km}\gg R$, $\omega C=7{,}9\ \text{mS/km}\gg G$ → nagyfrekvenciás közelítés.

a) $Z_0\approx\sqrt{L/C}=\sqrt{10^{-3}/25\cdot10^{-9}}=$ **200 Ω** (a sávban gyakorlatilag valós és állandó).

b) $\alpha\approx\frac{R}{2Z_0}+\frac{GZ_0}{2}=\frac{50}{400}+\frac{0{,}5\cdot10^{-6}\cdot200}{2}=0{,}125+5\cdot10^{-5}\approx$ **0,125 Np/km = 1,09 dB/km** (a skin-hatást a feladat nem veszi figyelembe).

c) Közelvégi áthallásnál: $a_{NEXT}-\alpha l\ge65$ dB → $l\le\frac{108{,}5-65}{1{,}086}\approx$ **40 km**.

d) $v=\frac1{\sqrt{LC}}=\frac1{\sqrt{2{,}5\cdot10^{-11}}}=$ **2·10⁵ km/s**.

**Ellenőrzés (pontos komplex számítás):** 50 kHz: $Z_0=201{,}3\,e^{-j0{,}079}\ \Omega$, $\gamma=0{,}1247+j1{,}576$ 1/km, $v=\omega/\beta=1{,}99\cdot10^5$ km/s; 200 kHz: $Z_0=200{,}1\,e^{-j0{,}020}\ \Omega$, $\alpha=0{,}1250$ Np/km. ✔
**[MO HIBÁS]** A mellékelt megoldás $Z_0=238\,e^{-j0{,}39}$ (50 kHz) és $\beta=1{,}0077$ rad/km értéke hibás (helyesen ~201 Ω és 1,576 rad/km), ezért a terjedési sebességre kapott $2{,}91\cdot10^5$ km/s is hibás (a d) pontban ráadásul $\alpha_{dB}$-t osztja $\omega$-val). Az $\alpha$ (0,124 Np/km) és a szakaszhossz (~40 km) jó.

---

## 2. feladat – 36-QAM négyzetrácson

**Feladat.** 36-féle szimbólum, a jelállapotok egy négyzetrács pontjai.
a) Konstellációs diagram. b) Előnyök a négyzetrácsból. c) Hány százalék erősítés- (ill. csillapítás-) hibát visel el zajmentes esetben? d) Egy kolléga szerint a legkülső pontokat valamelyik tengely mellé kellene áthelyezni. Mi lehet az értelme? Mely jellemzők javulnak, romlanak?

**Megoldás.**
a) 6×6-os rács: $I,Q\in\{\pm1,\pm3,\pm5\}$ (36 pont). A döntési határok a $0$, $\pm2$, $\pm4$ egyenesek mindkét tengely mentén.

![](abrak/qam36.svg)


b) Az I és Q komponens egymástól függetlenül, két egyszerű 6-szintű PAM-ként modulálható és dönthető (egyszerű, szögletes döntési tartományok, küszöbdetektor); egyszerű megvalósítás (D/A-k), jó pontsűrűség a jelteret jól kitöltve; Gray-kódolás közelítőleg alkalmazható.

c) Erősítéshiba $g$-szeres skálázás: az 1-es koordinátájú pont a 2-es küszöböt $g=2$-nél, a 3-as a 2-es/4-es küszöböt $g=2/3$, ill. $g=4/3$-nál, az 5-ös a 4-es küszöböt $g=4/5$-nél éri el.
- **Erősítés: legfeljebb +33%** ($g<4/3$, a 3-as koordinátájú pontok szabják meg) ≈ +2,5 dB;
- **csillapítás: legfeljebb −20%** ($g>4/5$, a szélső, 5-ös koordinátájú pontok) ≈ −1,9 dB.

Fázishiba (kiegészítésként, mert a mellékelt megoldás is tárgyalja): a legkritikusabb a **sarokpont** (5,5): $\sqrt{50}\sin(45°-\vartheta)=4$ → $\vartheta_{max}=45°-34{,}45°=$ **10,5°**.

d) A sarokpontok (±5,±5) a legnagyobb amplitúdójú pontok. Az áthelyezés célja a csúcsteljesítmény (csúcstényező) vagy az átlagteljesítmény csökkentése lehetne (mint a kereszt alakú 32-QAM-nél). Rácspontra, tengely mellé téve a legközelebbi hely pl. $(7,1)$, ennek amplitúdója $\sqrt{50}$ – **ugyanakkora, mint a sarokponté**, így sem a csúcs-, sem az átlagteljesítmény (23,3) nem csökken: **ennél a konstellációnál a javaslatnak nincs értelme**. Következmények (mind a négy sarkot egy-egy különböző tengely mellé téve, pl. (7,1), (−1,7), (−7,−1), (1,−7)):
- a fázistűrés kissé javul: 10,5° → 10,9° (már a (5,3) típusú pontok a kritikusak),
- az erősítéshiba-tűrés romlik: +33% → **+20%** ($g<6/5$), a csillapítástűrés −20% → **−14%** ($g>6/7$),
- a döntési tartományok szabálytalanná válnak (a döntés bonyolultabb).
(Nagyobb konstellációnál van értelme: pl. 64-es rácson a (7,7) sarokpont $\sqrt{98}=9{,}9$, míg a (9,1) pont $\sqrt{82}=9{,}06$.)

**Ellenőrzés:** gépi, minimális távolságú döntéssel: a rácsra $g\in(0{,}80;\ 1{,}333)$, fázis ±10,55°; áthelyezett sarkokkal $g\in(0{,}858;\ 1{,}20)$, fázis ±10,9°; átlagteljesítmény mindkettőnél 23,33, csúcsamplitúdó 7,07. ✔
**[MO HIBÁS]** A mellékelt megoldás a megengedhető szöghibát a (5,1) pontra $\arcsin(1/5)=11{,}5°$-nak adja; valójában a (5,1) pont $\arctan(1/5)=11{,}3°$-nál éri el a határt, de a sarokpont már 10,5°-nál – ez a valódi korlát. A d) részben a „fázishiba nem változik” állítás is pontatlan (kissé javul).

---

## 3. feladat – VoIP kodek

**Feladat.** Beszédszegmens 10 byte, 5 ms; kódolási+csomagolási, illetve kicsomagolási+dekódolási idő szegmensenként 4–4 ms; fejrész 47 byte; a vevőoldali sorban állási késleltetés legfeljebb 10 ms.
a) Forrássebesség? b) Egy szegmens/csomag: b1) csomagsebesség, b2) egy hívás sávszélessége? c) Hogyan változnak ezek, ha egy csomagban két szegmens megy?

**Megoldás.**
a) $\frac{10\cdot8\ \text{bit}}{5\ \text{ms}}=$ **16 kbit/s**.
b1) 1 szegmens/csomag: $\frac{1}{5\ \text{ms}}=$ **200 csomag/s**.
b2) $(10+47)\cdot8\cdot200=$ **91,2 kbit/s**.
c) Forrássebesség **változatlan, 16 kbit/s**; csomagsebesség **100 csomag/s**; sávszélesség $(20+47)\cdot8\cdot100=$ **53,6 kbit/s**. A fejrész-többlet aránya csökken, viszont a csomagolási késleltetés nő (a második szegmensre is várni kell, +5 ms).

**Ellenőrzés:** a fejrész-többlet $47\cdot8\cdot200=75{,}2$ kbit/s, illetve $47\cdot8\cdot100=37{,}6$ kbit/s; ehhez 16 kbit/s hasznos → 91,2 és 53,6 kbit/s. ✔ (A mellékelt megoldás egyezik.)

---

## 4. feladat – Szuperheterodin vevő 24–36 MHz, KF 18 MHz

**Feladat.** a) LO-tartomány felső és alsó keverésnél, melyik jobb és miért? b) Alsó keverésnél az LO frekvenciája 25,5 MHz-es jelhez? c) Mekkora ennek a tükörfrekvenciája? Milyen gondot okoz?

**Megoldás.**
a) - Felső: $f_{LO}=f+18$ → **42–54 MHz** (relatív hangolás 1,29).
- Alsó: $f_{LO}=f-18$ → **6–18 MHz** (relatív hangolás 3).
**A felső keverés a jobb:** kisebb relatív hangolási tartomány; alsó keverésnél a 36 MHz-es vételhez az LO éppen 18 MHz = KF lenne, az oszcillátor jele közvetlenül bejutna a KF-erősítőbe; a felső keverésnél a tükörsáv (60–72 MHz) messze van a vételi sávtól, könnyen kiszűrhető.

b) $f_{LO}=25{,}5-18=$ **7,5 MHz**.

c) A keverő $|f\pm f_{LO}|$-t állít elő. 18 MHz-et ad a 25,5 MHz-es ($25{,}5-7{,}5$) és a **10,5 MHz-es** jel is ($10{,}5+7{,}5=18$). **Tükörfrekvencia: 10,5 MHz.** A gond: az ezen a frekvencián lévő adó (rövidhullám) a hasznos jellel egy KF-re kerül, és a KF-szűrő már nem tudja szétválasztani; csak a keverő előtti (bemeneti) szűrő nyomhatja el. Mivel a 10,5 MHz a 24–36 MHz-es sávon kívül van, egy jó bemeneti sávszűrő elnyomja.

**Ellenőrzés:** általános képlet alsó keverésre: $f_t=f-2f_{KF}=25{,}5-36=-10{,}5$ MHz → |−10,5| = 10,5 MHz. ✔
**[MO HIBÁS]** A mellékelt megoldás szerint a tükörfrekvencia $F+f_0=33$ MHz; ez helytelen, mert $33-7{,}5=25{,}5\ne18$ és $33+7{,}5=40{,}5\ne18$ MHz.

---

## 5. feladat – Ügyfélszolgálat (Erlang-B)

**Feladat.** 990 000 ügyfél; 21 munkatárs; csúcsidőben 0,1%-os blokkolás.
a) Hívásintenzitás, ha az átlagos tartási idő 200 s? b) Évente hányszor fordul egy átlagos ügyfél az ügyfélszolgálathoz, ha az a)-beli intenzitást a teljes időre feltételezzük? c) Egy munkatárs átlagos foglaltsága? d) Hármat elbocsátanak; 17-en fogadják a hívásokat, a 18. kizárólag a blokkolás miatt ki nem szolgált ügyfeleket hívja vissza. Mekkora lesz a „foglaltsága”?

**Megoldás.**
a) Erlang-B görbe: $N=21$, $B=0{,}1\%$ → $A\approx10{,}1$ Erl. $\lambda=A/h=10{,}1/200\ \text{s}\approx$ **0,0505 hívás/s ≈ 182 hívás/óra**.

b) Egy évben $0{,}0505\cdot3600\cdot24\cdot365\approx1{,}59\cdot10^6$ hívás; egy ügyfélre $1{,}59\cdot10^6/990\,000\approx$ **1,6 hívás/év**.

c) $\rho=\frac{A(1-B)}{N}=\frac{10{,}1\cdot0{,}999}{21}\approx$ **0,48 (48%)**.

d) A 17 munkatárs a változatlan $A=10{,}1$ Erl forgalmat kapja: $B(10{,}1;17)\approx1{,}4\%$. A visszahívandó hívások intenzitása $\lambda B$; ha egy visszahívás is átlagosan 200 s, a 18. munkatárs foglaltsága
$$A\cdot B\approx10{,}1\cdot0{,}014\approx\mathbf{0{,}14\ (14\%)}.$$
(Modellfeltevés, amit a feladat szövege sugall: a blokkolt ügyfelek nem próbálkoznak újra – őket a 18. munkatárs hívja vissza –, és a visszahívás is átlagosan 200 s. A visszahívó munkatárs nem blokkolódhat, hiszen ő kezdeményez.)

**Ellenőrzés:** Erlang-B rekurzióval: $B(10{,}108;21)=0{,}100\%$, $B(10{,}108;17)=1{,}40\%$. ✔ A mellékelt megoldás a d) pontban a görbéről ~1%-ot olvas le (pontosabban 1,4%), a foglaltságot nem számolja ki; az a) és c) pont egyezik (A = 10, 47,6%).
