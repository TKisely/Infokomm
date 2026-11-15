---
title: Infokommunikáció Vizsgafeladatok (21-30)
processed_count: 10
task_range: "21-30"
last_task_id: 30
---

# Infokommunikáció Feladatgyűjtemény (21–30. feladatok)

## Feladat 21
- **ID:** 21
- **Témakör:** FM szögmodulált jel paraméterei és demodulációja

### Kérdés
Egy modulátor az $s_m(t) = 3 \cdot \cos(3\pi \cdot t 	ext{ [ms]} + 2)	ext{ [V]}$ bemenő jel hatására az
$$s_{FM}(t) = 5 \cdot \cos(1000\pi \cdot t 	ext{ [ms]} + 9 + 5\sin(3\pi \cdot t 	ext{ [ms]} + 2))	ext{ [V]}$$
modulált jelet állítja elő.
a) Milyen fajtájú modulációs módszerről van szó?
b) Mekkora a moduláló jel és a modulált jel amplitúdója?
c) Mekkora a modulált jel fázis- és frekvencialöket?
d) Határozza meg a modulált jel vivőfrekvenciáját és sávszélességét!

### Megoldás
a) Frekvenciamodulációról (FM) van szó, mivel a pillanatnyi fázis modulációs tartalma arányos a moduláló jellel.
b) Moduláló jel amplitúdója $U_m = 3	ext{ V}$, a modulált jel (vivő) amplitúdója $U_v = 5	ext{ V}$.
c) Fázislöket: $\Phi_D = \max|m(t)| = 5	ext{ rad}$.
Frekvencialöket:
$$f_D = rac{1}{2\pi} \max\left|rac{dm(t)}{dt}ight| = rac{1}{2\pi} \cdot 5 \cdot 3\pi \cdot 10^3	ext{ Hz} = 7{,}5	ext{ kHz}$$
d) Vivőfrekvencia:
$$f_v = rac{1000\pi \cdot 10^3}{2\pi} = 500	ext{ kHz}$$
Moduláló frekvencia: $f_m = rac{3\pi \cdot 10^3}{2\pi} = 1{,}5	ext{ kHz}$.
A sávszélesség (Carson-szabály alapján):
$$B_v pprox 2 \cdot (f_m + f_D) = 2 \cdot (1{,}5	ext{ kHz} + 7{,}5	ext{ kHz}) = \mathbf{18	ext{ kHz}}$$

---

## Feladat 22
- **ID:** 22
- **Témakör:** 36-állapotú QAM konstellációs diagram és hibatűrés

### Kérdés
Önt megbízzák egy QAM rendszer tervezésével, amelyről azt tudhatjuk, hogy összesen 36-féle szimbólumot kell átvinnie. Ön egy olyan megoldást választ, amelyben a jelállapotok valamennyien egy négyzetrács pontjai.
a) Rajzolja fel egy ilyen rendszer konstellációs diagramját!
b) Milyen előnyei lehetnek annak, hogy a jelpontok négyzetrácsra illeszkednek?
c) Hány százalék erősítés- (ill. csillapítás-) hibát visel el a választott rendszer zajmentes esetben?
d) A tervezés során egyik kollégája javasolja, hogy a legkülső pontokat helyezzék át valamelyik tengely mellé. Mi lehet ennek a javaslatnak az értelme?

### Megoldás
a) A konstellációs diagram egy $6 	imes 6$-os négyzetrács, ahol a koordináták a csatolt tengelyeken $\pm 1, \pm 3, \pm 5$ értékeket vesznek fel (összesen 36 jelpont).
b) A négyzetrácsos elrendezés előnye, hogy a két kvadratúra-komponens ($I$ és $Q$) egymástól függetlenül, egyszerű komparátorokkal és független döntési küszöbökkel demodulálható.
c) A döntési határok a jelpontok között félúton helyezkednek el (pl. 1 és 3 között a küszöb 2). A legbelső pontoknál ($\pm 1$) a megengedett maximális elmozdulás $\pm 1$, ami legfeljebb $\mathbf{20\%}$-os amplitúdó- (erősítési) hibát jelent zajmentes esetben.
d) A sarokpontok elhagyásával és a tengelyek mellé helyezésével csökkenthető a jel csúcsteljesítménye és átlagteljesítménye (a konstelláció közelebb kerül a kör alakhoz), ami hatékonyabb teljesítmény-kihasználást eredményez.

---

## Feladat 23
- **ID:** 23
- **Témakör:** BPSK jel csúcstényezője és teljesítménye

### Kérdés
a) Határozza meg a $x(t) = 3\sin(2\pi F t) + 4\cos(2\pi F t)$ jel csúcstényezőjét, maximális értékét és teljesítményét!
b) Mekkora a csúcstényezője egy $1	ext{ kHz}$ vivőfrekvenciájú, $2	ext{ V}$ amplitúdójú BPSK jelnek?

### Megoldás
a)
- Maximális érték: $U_{\max} = \sqrt{3^2 + 4^2} = \mathbf{5	ext{ V}}$.
- Effektív érték: $U_{	ext{eff}} = rac{5}{\sqrt{2}}	ext{ V}$.
- Csúcstényező: $\eta = rac{U_{\max}}{U_{	ext{eff}}} = \mathbf{\sqrt{2}} pprox 1{,}414$.
- Átlagteljesítmény ($R = 1\,\Omega$ esetén): $P = U_{	ext{eff}}^2 = rac{25}{2} = \mathbf{12{,}5	ext{ W}}$.

b) A BPSK jel szinuszos vivőből áll, amelynek amplitúdója állandó ($2	ext{ V}$), csupán a fázisa változik ($\pm \pi$). Mivel a burkolója állandó szinuszos jel:
$$\eta = \mathbf{\sqrt{2}} pprox 1{,}414$$

---

## Feladat 24
- **ID:** 24
- **Témakör:** Y, Cb, Cr színkomponensek és színérzet TV rendszerekben

### Kérdés
Van olyan TV készülék, amelyet a DVD lejátszóval három vezetékpár – $Y, Cb, Cr$ feliratú – köt össze ($Cb = B - Y$, $Cr = R - Y$).
a) Milyen színű lesz a menyasszony hófehér ruhája, ha a $Cb$ és $Cr$ kábeleket felcseréljük?
b) Melyek azok a színélmények, amelyek e cserére érzéketlenek?
c) A csere következtében hogyan változik a képernyő keltette világosságérzet?

### Megoldás
a) A hófehér szín esetén $R = G = B$, így a színkülönbségi jelek $Cb = 0$ és $Cr = 0$. A két nullás jel felcserélése után az értékek változatlanul $0$-k maradnak, így a menyasszony ruhája **hófehér** marad.
b) Azok a színek nem változnak, amelyekre $Cb = Cr$. Idetartoznak a szürkeárnyalatok (fekete, szürke, fehér), valamint az olyan zöldes és bíbor árnyalatok, ahol a két különbségi jel egyenlő.
c) A világosságérzetet kizárólag az $Y$ (luminancia) vezeték hordozza. Mivel azt nem cseréltük fel, a képernyő keltette világosságérzet **változatlan marad**.

---

## Feladat 25
- **ID:** 25
- **Témakör:** Akusztika, hangnyomásszint és fájdalomküszöb

### Kérdés
a) Határozza meg phon-ban annak az $1	ext{ kHz}$-es szinuszos hangnak a hangosságát, melynek hangnyomása a hallásküszöbhöz tartozó hangnyomás $100$-szorosa! Hány decibel e hang hangnyomásszintje?
b) Az emberi hallásküszöb $20\ \mu	ext{Pa}$. A fül $120	ext{ dB}$-es dinamikatartományban hall. Mekkora nyomású légköri zavarra van szükség ezen tartomány felső határának (fájdalomküszöb) eléréséhez?

### Megoldás
a) A hangnyomásszint:
$$L = 20 \lg\left(rac{p_{	ext{eff}}}{p_0}ight) = 20 \lg(100) = \mathbf{40	ext{ dB}}$$
Mivel a frekvencia $1	ext{ kHz}$, a decibelben mért hangnyomásszint számszerűen megegyezik a phon értékével, így **40 phon**.

b) A fájdalomküszöbhöz tartozó $120	ext{ dB}$-es hangnyomásszintből a nyomás értéke:
$$120	ext{ dB} = 20 \lg\left(rac{p_1}{20\ \mu	ext{Pa}}ight) \implies 10^6 = rac{p_1}{20 \cdot 10^{-6}	ext{ Pa}} \implies p_1 = \mathbf{20	ext{ Pa}}$$

---

## Feladat 26
- **ID:** 26
- **Témakör:** Parabolaantenna nyeresége és hatásos felülete

### Kérdés
Egy $1{,}5	ext{ GHz}$ környékén működő parabola antenna kör alakú apertúrájának sugara $R = 1	ext{ m}$. Adja meg decibelben az antenna nyereségét! (Segítség a számoláshoz: $\pi \cdot \pi pprox 10$).

### Megoldás
 hullámhossz:
$$\lambda = rac{c}{f} = rac{3 \cdot 10^8	ext{ m/s}}{1{,}5 \cdot 10^9	ext{ Hz}} = 0{,}2	ext{ m}$$
Hatásos felület:
$$A_h = R^2 \pi = 1^2 \cdot \pi = \pi	ext{ m}^2$$
Az antenna nyeresége:
$$G = rac{4\pi A_h}{\lambda^2} = rac{4\pi \cdot \pi}{(0{,}2)^2} = rac{4\pi^2}{0{,}04} = 100 \pi^2 pprox 100 \cdot 10 = 1000$$
Decibelben kifejezve:
$$G_{	ext{dB}} = 10 \lg(1000) = \mathbf{30	ext{ dB}}$$

---

## Feladat 27
- **ID:** 27
- **Témakör:** Műholdas vevő frekvenciakeverése és tükörfrekvenciája

### Kérdés
A műhold a venni kívánt műsorokat a $10{,}7	ext{–}11{,}7	ext{ GHz}$ sávban sugározza. Adjon meg egy olyan oszcillátorfrekvenciát, amellyel ez a sáv a beltéri egység $1	ext{–}2	ext{ GHz}$ közötti sávjába áttehető! Hol van ekkor a tükörfrekvenciák tartománya?

### Megoldás
Alsó keverést választva a $10{,}7	ext{ GHz}$-es alsó sávszélből $1	ext{ GHz}$-es középfrekvenciás jelet állítunk elő:
$$f_0 = 10{,}7	ext{ GHz} - 1	ext{ GHz} = \mathbf{9{,}7	ext{ GHz}}$$
(Ellenőrzés a felső sávszélre: $11{,}7	ext{ GHz} - 9{,}7	ext{ GHz} = 2	ext{ GHz}$, ami pontosan a kívánt $1	ext{–}2	ext{ GHz}$ sávba esik.)

Tükörfrekvenciás tartomány alsó keverés esetén ($f_t = f_0 - f_{	ext{KF}}$):
$$f_t = 9{,}7	ext{ GHz} - (1	ext{–}2	ext{ GHz}) = \mathbf{7{,}7	ext{–}8{,}7	ext{ GHz}}$$

---

## Feladat 28
- **ID:** 28
- **Témakör:** Váltott soros képalkotás (Interlacing) a televíziózásban

### Kérdés
Mi az előnye a váltott soros képalkotásnak (interlacing) a televíziózásban?

### Megoldás
A váltott soros képalkotás során a teljes képet két egymást követő félképre (páros és páratlan sorok) bontva továbbítják. Ennek fő előnye:
1. **Villogásmentesség sávszélesség-növekedés nélkül:** Megduplázható a képfrissítési frekvencia (pl. $25	ext{ Hz}$ helyett $50	ext{ Hz}$ félkép/másodperc), ami megszünteti a nagy felületű villogást (flicker).
2. **Sávszélesség-megtakarítás:** Mivel egyidőben csak a sorok felét kell átvinni, az átviteli csatorna sávszélesség-igénye a felére csökken a progresszív képalkotáshoz képest.

---

## Feladat 29
- **ID:** 29
- **Témakör:** Mobil rádiórendszer kétutas terjedése és Fresnel-zóna

### Kérdés
Egy $450	ext{ MHz}$-es mobil rádiórendszerben a bázisállomás antennájának magassága $50	ext{ m}$, a vevőkészülékek $1{,}5	ext{ m}$-es magasságban vannak.
a) Kétutas terjedést feltételezve a bázisállomástól milyen távolságra lehet az interferencia zóna határa (a legtávolabbi térerősség-maximum helye)?
b) Mekkora a maximális és minimális vételi térerősség abszolút értékének aránya, ha a földreflexiós tényező $-0{,}9$?

### Megoldás
a) Hullámhossz:
$$\lambda = rac{3 \cdot 10^8}{450 \cdot 10^6} = rac{2}{3}	ext{ m} pprox 0{,}667	ext{ m}$$
A legtávolabbi térerősség-maximum helye ($k=1$ interferencia határa):
$$r_{	ext{int}} = rac{2 h_T h_R}{\lambda} = rac{2 \cdot 50 \cdot 1{,}5}{2/3} = \mathbf{225	ext{ m}}$$

b) Ha a földreflexiós tényező $\Gamma = -0{,}9$, a maximális és minimális térerősség aránya:
$$rac{E_{\max}}{E_{\min}} = rac{1 + |\Gamma|}{1 - |\Gamma|} = rac{1 + 0{,}9}{1 - 0{,}9} = rac{1{,}9}{0{,}1} = \mathbf{19}$$

---

## Feladat 30
- **ID:** 30
- **Témakör:** 8-QAM konstellációk átlagos adóteljesítménye

### Kérdés
Milyen összefüggés alapján határozható meg a 8-QAM konstellációk átlagos adóteljesítménye $2A$ minimális ponttávolság mellett, és hogyan választható ki a legenergiatakarékosabb konstelláció?

### Megoldás
Az átlagos adóteljesítmény az egyes konstellációs pontok origótól mért távolságnégyzeteinek átlaga:
$$P_{	ext{átlag}} = rac{1}{8} \sum_{i=1}^{8} d_i^2$$
ahol $d_i$ az $i$-edik pont távolsága az origótól.

A három tipikus 8-QAM elrendezés közül az a konstelláció a legenergiatakarékosabb, amelynél a pontok a legközelebb helyezkednek el az origóhoz (a csillag/kör alakhoz legközelebb eső elrendezés).
Például a kereszt alakú 8-QAM elrendezésnél:
$$P_{	ext{átlag}} = \left(rac{3}{4} + \sqrt{2}ight) A^2 pprox \mathbf{2{,}164 A^2}$$
ami alacsonyabb átlagteljesítményt igényel, mint a téglalap vagy négyzet rácsra épülő 8-QAM változatok.
