---
module_id: "02_kodolastechnika"
title: "Infokommunikáció - 2. Modul: Kódolástechnika és Információelmélet"
task_count: 15
schema_version: "1.0"
---

# 2. Modul: Kódolástechnika és Információelmélet

## Task_016
- **ID:** M2_T016
- **Topic:** Entrópia, információtartalom, bináris forrás
- **Type:** Calculation

### Question
Egy emlékezetmentes forrás 4 szimbólumot bocsát ki a következő valószínűségekkel: $P(A) = 1/2$, $P(B) = 1/4$, $P(C) = 1/8$, $P(D) = 1/8$.
a) Számítsa ki az egyes szimbólumok információtartalmát!
b) Mekkora a forrás entropiája ($H(X)$)?

### Solution
a) Az $x_i$ szimbólum információtartalma: $I(x_i) = -\log_2 P(x_i)$
- $I(A) = -\log_2(1/2) = 1	ext{ bit}$
- $I(B) = -\log_2(1/4) = 2	ext{ bit}$
- $I(C) = -\log_2(1/8) = 3	ext{ bit}$
- $I(D) = -\log_2(1/8) = 3	ext{ bit}$

b) A forrás entrópiája:
$$H(X) = \sum_{i=1}^4 P(x_i) I(x_i) = rac{1}{2} \cdot 1 + rac{1}{4} \cdot 2 + rac{1}{8} \cdot 3 + rac{1}{8} \cdot 3 = 0{,}5 + 0{,}5 + 0{,}375 + 0{,}375 = 1{,}75	ext{ bit/szimbólum}$$

---

## Task_017
- **ID:** M2_T017
- **Topic:** Huffman-kódolás és hatásfok
- **Type:** Algorithm & Calculation

### Question
Az előző Task_016-ban megadott $P = \{1/2, 1/4, 1/8, 1/8\}$ eloszláshoz szerkesszen Huffman-kódot!
a) Adja meg az egyes szimbólumokhoz tartozó kódszavakat!
b) Számítsa ki az átlagos kódszóhosszat ($ar{L}$) és a kód hatásfokát ($\eta$)!

### Solution
a) Huffman-fa építése:
- Összevonjuk a két legkisebb valószínűségűt: $C(1/8)$ és $D(1/8) ightarrow CD(1/4)$.
- Összevonjuk $B(1/4)$ és $CD(1/4) ightarrow BCD(1/2)$.
- Összevonjuk $A(1/2)$ és $BCD(1/2) ightarrow 1{,}0$.

Kódszavak hozzárendelése:
- $A ightarrow 0$ (hossz: $1$)
- $B ightarrow 10$ (hossz: $2$)
- $C ightarrow 110$ (hossz: $3$)
- $D ightarrow 111$ (hossz: $3$)

b) Átlagos kódszóhossz:
$$ar{L} = rac{1}{2} \cdot 1 + rac{1}{4} \cdot 2 + rac{1}{8} \cdot 3 + rac{1}{8} \cdot 3 = 1{,}75	ext{ bit/szimbólum}$$

Hatásfok:
$$\eta = rac{H(X)}{ar{L}} = rac{1{,}75}{1{,}75} = 100\%$$
A kód optimális és rákötött (a valószínűségek 2 negatív hatványai).

---

## Task_018
- **ID:** M2_T018
- **Topic:** Shannon-Fano kódolás
- **Type:** Algorithm

### Question
Adott egy ABC 5 szimbólummal és a következő valószínűségi eloszlással: $P(s_1)=0{,}35$, $P(s_2)=0{,}25$, $P(s_3)=0{,}20$, $P(s_4)=0{,}10$, $P(s_5)=0{,}10$.
Készítsen Shannon-Fano kódot a szimbólumokhoz!

### Solution
Rendezett eloszlás: $0{,}35 \mid 0{,}25, 0{,}20, 0{,}10, 0{,}10$ (Összegek: $0{,}35$ vs $0{,}65$).
1. vágás: $\{s_1\}$ ($0$) és $\{s_2, s_3, s_4, s_5\}$ ($1$).
2. vágás a második csoportban: $\{s_2\}$ ($10$, összeg $0{,}25$) és $\{s_3, s_4, s_5\}$ ($11$, összeg $0{,}40$).
3. vágás: $\{s_3\}$ ($110$, $0{,}20$) és $\{s_4, s_5\}$ ($111$, $0{,}20$).
4. vágás: $s_4$ ($1110$) és $s_5$ ($1111$).

Kódtáblázat:
- $s_1 ightarrow 0$ (hossz: $1$)
- $s_2 ightarrow 10$ (hossz: $2$)
- $s_3 ightarrow 110$ (hossz: $3$)
- $s_4 ightarrow 1110$ (hossz: $4$)
- $s_5 ightarrow 1111$ (hossz: $4$)

---

## Task_019
- **ID:** M2_T019
- **Topic:** Lineáris blokkkódok - Generátor- és Paritásellenőrző mátrix
- **Type:** Linear Algebra & Coding

### Question
Egy $(5,2)$ lineáris blokkkód generátormátrixa:
$$G = egin{bmatrix} 1 & 0 & 1 & 1 & 0 \ 0 & 1 & 0 & 1 & 1 \end{bmatrix}$$
a) Adja meg az összes lehetséges kódszót!
b) Írja fel a szisztematikus alakú paritásellenőrző mátrixot ($H$)!

### Solution
a) Az üzenetvektorok $u \in \{(0,0), (0,1), (1,0), (1,1)\}$:
- $c_{(0,0)} = (0,0) \cdot G = (0, 0, 0, 0, 0)$
- $c_{(0,1)} = (0,1) \cdot G = (0, 1, 0, 1, 1)$
- $c_{(1,0)} = (1,0) \cdot G = (1, 0, 1, 1, 0)$
- $c_{(1,1)} = (1,1) \cdot G = (1, 1, 1, 0, 1)$

b) Mivel $G = [I_2 \mid P]$, ahol $P = egin{bmatrix} 1 & 1 & 0 \ 0 & 1 & 1 \end{bmatrix}$, a paritásellenőrző mátrix $H = [P^T \mid I_3]$:
$$H = egin{bmatrix} 1 & 0 & 1 & 0 & 0 \ 1 & 1 & 0 & 1 & 0 \ 0 & 1 & 0 & 0 & 1 \end{bmatrix}$$

---

## Task_020
- **ID:** M2_T020
- **Topic:** Szindróma-dekódolás és hibajavítás
- **Type:** Calculation

### Question
A Task_019-beli $(5,2)$ kódot használva a vevőhöz a $v = (1, 1, 1, 1, 0)$ blokk érkezett.
a) Számítsa ki a szindrómavektort ($s = v \cdot H^T$)!
b) Melyik pozícióban keletkezett a hiba, és mi a helyreállított kódszó?

### Solution
a) A szindróma kiszámítása mod 2 összeadással:
$$s = v \cdot H^T = (1, 1, 1, 1, 0) egin{bmatrix} 1 & 1 & 0 \ 0 & 1 & 1 \ 1 & 0 & 0 \ 0 & 1 & 0 \ 0 & 0 & 1 \end{bmatrix} = (1\oplus 1, 1\oplus 1\oplus 1, 1) = (0, 1, 1)$$

b) A $H^T$ mátrix soraival összehasonlítva a $(0, 1, 1)$ szindróma a $H^T$ **2. sorával** egyezik meg.
Így a hiba a **2. biten** történt ($e = (0, 1, 0, 0, 0)$).
A javított kódszó: $\hat{c} = v \oplus e = (1, 0, 1, 1, 0)$, ami az $u = (1,0)$ üzenetnek felel meg.

---

## Task_021
- **ID:** M2_T021
- **Topic:** Hamming-kódok paraméterei
- **Type:** Theory & Calculation

### Question
Egy szisztematikus Hamming-kódban a paritásbitek száma $m = 4$.
a) Mekkora a kód blokkhossza ($n$) és az üzenetbitek száma ($k$)?
b) Mekkora a kód kódsebessége ($R$)?
c) Hány hibát tud a kód biztosan detektálni és hányat javítani?

### Solution
a) Hamming-kódok esetén:
- Blokkhossz: $n = 2^m - 1 = 2^4 - 1 = 15$
- Üzenetbitek száma: $k = n - m = 15 - 4 = 11$
Ez tehát egy $(15, 11)$ Hamming-kód.

b) Kódsebesség:
$$R = rac{k}{n} = rac{11}{15} pprox 0{,}733	ext{ (73,3\%)}$$

c) Minden Hamming-kód minimális Hamming-távolsága $d_{\min} = 3$.
- Detektálható hibák: $d_{\min} - 1 = 2$ hiba.
- Javítható hibák: $\lfloor(d_{\min} - 1)/2floor = 1$ hiba.

---

## Task_022
- **ID:** M2_T022
- **Topic:** Ciklikus kódok és generátorpolinom
- **Type:** Algebra & Polynomials

### Question
Adott egy $(7,4)$ ciklikus kód $g(x) = x^3 + x + 1$ generátorpolinommal.
Generálja a $u(x) = x^3 + x^2 + 1$ ($u = (1, 1, 0, 1)$) üzenethez tartozó szisztematikus kódszót!

### Solution
1. Az üzenetpolinom eltolása $n-k = 3$ pozícióval:
$$x^{n-k} \cdot u(x) = x^3 \cdot (x^3 + x^2 + 1) = x^6 + x^5 + x^3$$

2. Polinom osztás $g(x)$-szel mod 2:
$$(x^6 + x^5 + x^3) : (x^3 + x + 1) = x^3 + x^2 + x$$
Maradék: $r(x) = x^2 + x$.

3. Szisztematikus kódszó polinomja:
$$c(x) = x^{n-k} u(x) + r(x) = x^6 + x^5 + x^3 + x^2 + x$$
Vektor alakban: $c = (1, 1, 0, 1, 1, 1, 0)$.

---

## Task_023
- **ID:** M2_T023
- **Topic:** CRC (Cyclic Redundancy Check) hibaellenőrzés
- **Type:** Calculation

### Question
A küldő az $M = 1101011$ adatbites sorozatot kívánja továbbítani $G = 1011$ generátorpolinom használatával.
a) Számítsa ki a kiküldendő CRC ellenőrző biteket (FCS)!
b) Mi lesz a csatornára kikerülő teljes keret?

### Solution
a) A generátor hossza $L = 4$ bit, így $L-1 = 3$ darab nullát fűzünk az adathoz: $M' = 1101011000$.
Elvégezzük a mod 2 bináris osztást $1101011000 / 1011$:
- $1101 \oplus 1011 = 0110 ightarrow 1100$
- $1100 \oplus 1011 = 0111 ightarrow 1111$
- $1111 \oplus 1011 = 0100 ightarrow 1001$
- $1001 \oplus 1011 = 0010 ightarrow 0100$
- $0100 \oplus 0000 = 0100 ightarrow 1000$
- $1000 \oplus 1011 = 0011$

A maradék (FCS): **011**.

b) A csatornára kerülő teljes keret: **1101011011**.

---

## Task_024
- **ID:** M2_T024
- **Topic:** Paritásbit és Hamming-távolság
- **Type:** Theory

### Question
Egy $k$ bites üzenethez 1 páros paritásbitet fűzünk.
a) Mekkora a keletkező kód minimális Hamming-távolsága ($d_{\min}$)?
b) Hány bithiba mutatható ki és hány javítható ezzel a kódolással?

### Solution
a) Egyetlen paritásbit hozzáadásával minden érvényes kódszóban páros számú 1-es bit lesz. Két legközelebbi kódszó között legalább 2 bitnek kell megváltoznia ahhoz, hogy a paritás páros maradjon. Így a minimális Hamming-távolság: **$d_{\min} = 2$**.

b) 
- Detektálható hibák: $d_{\min} - 1 = 1$ páratlan számú bithiba biztosan kimutatható.
- Javítható hibák: $\lfloor(2 - 1)/2floor = 0$. Egyetlen hiba sem javítható, mert a legközelebbi kódszó nem határozható meg egyértelműen.

---

## Task_025
- **ID:** M2_T025
- **Topic:** Kraft-McMillan egyenlőtlenség igazolása
- **Type:** Proof & Verification

### Question
Döntse el a Kraft-McMillan egyenlőtlenség alapján, hogy létezhet-e egyértelműen dekódolható bináris kód az alábbi kódszóhosszakkal:
a) $L_1 = \{1, 2, 3, 3\}$
b) $L_2 = \{2, 2, 2, 3, 3\}$

### Solution
A Kraft-McMillan egyenlőtlenség bináris kódra: $K = \sum_{i=1}^N 2^{-l_i} \le 1$.

a) $L_1$ esetén:
$$K_1 = 2^{-1} + 2^{-2} + 2^{-3} + 2^{-3} = rac{1}{2} + rac{1}{4} + rac{1}{8} + rac{1}{8} = 1{,}0 \le 1$$
**Igen**, létezhet egyértelműen dekódolható (és prefix) kód!

b) $L_2$ esetén:
$$K_2 = 2^{-2} + 2^{-2} + 2^{-2} + 2^{-3} + 2^{-3} = 3 \cdot rac{1}{4} + 2 \cdot rac{1}{8} = rac{3}{4} + rac{1}{4} = 1{,}0 \le 1$$
**Igen**, $L_2$-vel is készíthető egyértelműen dekódolható kód!

---

## Task_026
- **ID:** M2_T026
- **Topic:** Kódfa és prefix tulajdonság
- **Type:** Verification

### Question
Vizsgálja meg az alábbi kódtáblázatot! Prefix kód-e, és egyértelműen dekódolható-e?
$C = \{A ightarrow 0, B ightarrow 10, C ightarrow 110, D ightarrow 1101\}$

### Solution
- A kódszavak: $0, 10, 110, 1101$.
- Ellenőrzés: A $C$ szimbólum kódszava (`110`) kezdőszelete (prefixe) a $D$ szimbólum kódszavának (`1101`).
- **Következtetés:** A kód **NEM prefixmentes**!
- Azonban a Sardinas-Patterson algoritmussal igazolható, hogy a kód **egyértelműen dekódolható**, de a dekódolás nem várakozásmentes (nem azonnali).

---

## Task_027
- **ID:** M2_T027
- **Topic:** Tömörítési arány és redundancia
- **Type:** Calculation

### Question
Egy 8 bites fix hosszúságú karakterkóddal írt szövegben az entrópia $H(X) = 3{,}2	ext{ bit/karakter}$.
a) Mekkora a forrás redundanciája?
b) Elméletileg legfeljebb hány százalékos tömörítési megtakarítás érhető el információvesztés nélkül?

### Solution
a) A maximális információkapacitás $8	ext{ bit}$. A redundancia:
$$R = R_{absz} = L_{\max} - H(X) = 8 - 3{,}2 = 4{,}8	ext{ bit/karakter}$$
Relatív redundancia:
$$r = rac{R}{L_{\max}} = rac{4{,}8}{8} = 0{,}60	ext{ (60\%)}$$

b) A Shannon-féle forráskódolási tétel szerint a minimális átlagos kódszóhossz $H(X) = 3{,}2	ext{ bit}$.
A maximális tömörítési arány megtakarítása:
$$\Delta = rac{8 - 3{,}2}{8} = 60\%$$

---

## Task_028
- **ID:** M2_T028
- **Topic:** Csatornakapacitás és Shannon-Hartley tétel
- **Type:** Calculation

### Question
Egy $B = 3{,}1	ext{ kHz}$ sávszélességű telefoncsatornán a jel-zaj viszony $SNR = 30	ext{ dB}$.
a) Számítsa ki a csatorna elméleti kapacitását ($C$)!
b) Átvitelhető-e ezen a csatornán $56	ext{ kbit/s}$ sebességű adatfolyam hibamentesen?

### Solution
a) Átszámítjuk az $SNR$-t lineáris skálára:
$$SNR_{lin} = 10^{30/10} = 1000$$

A Shannon-Hartley képlet alapján:
$$C = B \cdot \log_2(1 + SNR_{lin}) = 3100 \cdot \log_2(1001) pprox 3100 \cdot 9{,}967 pprox 30898	ext{ bit/s} pprox 30{,}9	ext{ kbit/s}$$

b) Mivel $56	ext{ kbit/s} > 30{,}9	ext{ kbit/s}$, ez a sebesség ezen a csatornán **nem vihető át hibamentesen**.

---

## Task_029
- **ID:** M2_T029
- **Topic:** Bináris Szimmetrikus Csatorna (BSC) és kapacitás
- **Type:** Calculation

### Question
Egy bináris szimmetrikus csatorna (BSC) hibaátviteli valószínűsége $p = 0{,}1$.
a) Mekkora a csatorna kapacitása ($C_{BSC}$)?
b) Mekkora a kapacitás, ha a csatorna teljesen zajos ($p = 0{,}5$)?

### Solution
a) A BSC csatorna kapacitásképlete:
$$C_{BSC} = 1 - H_b(p) = 1 - (-p \log_2 p - (1-p) \log_2 (1-p))$$
Behelyettesítve $p = 0{,}1$-re:
$$H_b(0{,}1) = -0{,}1 \log_2(0{,}1) - 0{,}9 \log_2(0{,}9) pprox 0{,}332 + 0{,}137 = 0{,}469	ext{ bit}$$
$$C_{BSC} = 1 - 0{,}469 = 0{,}531	ext{ bit/szimbólum}$$

b) Ha $p = 0{,}5$:
$$H_b(0{,}5) = 1	ext{ bit} \implies C_{BSC} = 1 - 1 = 0	ext{ bit/szimbólum}$$
A csatornán semmilyen információ nem vihető át.

---

## Task_030
- **ID:** M2_T030
- **Topic:** Összetett kódolási feladat (Blokkkód és paritás)
- **Type:** Linear Algebra

### Question
Adott a $H = egin{bmatrix} 1 & 1 & 1 & 1 & 0 & 0 \ 0 & 1 & 1 & 0 & 1 & 0 \ 1 & 0 & 1 & 0 & 0 & 1 \end{bmatrix}$ paritásellenőrző mátrix.
a) Mekkora a kód blokkhossza ($n$), az üzenetbitek száma ($k$) és a paritásbitek száma ($m$)?
b) Szisztematikus-e ez a kód? Írja fel a hozzá tartozó $G$ generátormátrixot!

### Solution
a) 
- $H$ soraik száma $m = 3$ (paritásbitek).
- $H$ oszlopainak száma $n = 6$ (blokkhossz).
- Az üzenetbitek száma: $k = n - m = 6 - 3 = 3$.
Ez egy $(6,3)$ kód.

b) Mivel a $H$ mátrix jobb oldala $I_3$ egységmátrix ($H = [P^T \mid I_3]$), a kód **szisztematikus**.
A $P^T$ mátrix:
$$P^T = egin{bmatrix} 1 & 1 & 1 \ 0 & 1 & 1 \ 1 & 0 & 1 \end{bmatrix} \implies P = egin{bmatrix} 1 & 0 & 1 \ 1 & 1 & 0 \ 1 & 1 & 1 \end{bmatrix}$$

A $G = [I_3 \mid P]$ generátormátrix:
$$G = egin{bmatrix} 1 & 0 & 0 & 1 & 0 & 1 \ 0 & 1 & 0 & 1 & 1 & 0 \ 0 & 0 & 1 & 1 & 1 & 1 \end{bmatrix}$$
