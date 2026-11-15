---
title: Infokommunikáció Vizsgafeladatok (11-20)
processed_count: 10
task_range: "11-20"
---

# Infokommunikáció Feladatgyűjtemény (11–20. feladat)

## Feladat 11
- **ID:** 11
- **Témakör:** VoIP csomagolás, kodek méretezés, sávszélesség-igény

### Kérdés
Cégünk egyik telephelyére VoIP megvalósítást választottunk. Ismerjük a kodek paramétereit:
- Egy beszédszegmens mérete: $10\text{ byte}$ ($80\text{ bit}$)
- Egy beszédszegmens időtartama: $5\text{ ms}$
- A csomagfejrészek plusz $47\text{ byte}$ többlet-információt adnak a csomagokhoz.
a) Mekkora a kódolt beszéd mint adatforrás sebessége (forrássebesség)?
b) Tegyük fel, hogy egy IP csomagban egyetlen beszédszegmenst továbbítunk ($n=1$):
  b1) Mekkora a beszédcsomagok kibocsátási gyakorisága (csomagsebesség)?
  b2) Mennyi az egyetlen hívás által igényelt átviteli sebesség (sávszélesség)?
c) Hogyan módosulnak a b1) és b2) kérdésekre adott válaszok, ha egy IP csomagban két beszédszegmenst továbbítunk ($n=2$)?

### Megoldás
a) Forrássebesség:
$$V_{forrás} = \frac{10\text{ byte}}{5\text{ ms}} = \frac{80\text{ bit}}{0{,}005\text{ s}} = 16\text{ kbit/s}$$

b1) Csomagsebesség ($n=1$):
$$V_{csomag} = \frac{V_{forrás}}{n \cdot l_p} = \frac{16\text{ kbit/s}}{80\text{ bit}} = 200\text{ pps (packet/s)}$$

b2) Sávszélesség-igény ($n=1$):
$$l_{cs} = 10 + 47 = 57\text{ byte} = 456\text{ bit}$$
$$B = l_{cs} \cdot V_{csomag} = 456\text{ bit} \cdot 200\text{ pps} = 91{,}2\text{ kbit/s}$$

c) Két beszédszegmens esetén ($n=2$):
- Csomagsebesség feleződik: $V_{csomag} = 100\text{ pps}$
- Csomagméret: $l_{cs} = 2 \cdot 10 + 47 = 67\text{ byte} = 536\text{ bit}$
- Sávszélesség-igény: $B = 536\text{ bit} \cdot 100\text{ pps} = 53{,}6\text{ kbit/s}$

---

## Feladat 12
- **ID:** 12
- **Témakör:** Mintavételezés aluláteresztő és sávszűrő esetén

### Kérdés
Egy jelet, amelynek $45\text{ kHz}$ és $75\text{ kHz}$ között vannak komponensei, közvetlenül digitálissá kell alakítani.
a) Mekkora legyen a mintavételi frekvencia, ha aluláteresztő szűrőt alkalmazunk?
b) Sávszűrő esetén mekkora lehet a mintavételi frekvencia?
c) A legkisebb mintavételi frekvenciát alkalmazva adja meg a mintavételi feltételeket!

### Megoldás
a) Aluláteresztő szűrő esetén a Nyquist-mintavételi tétel szerint a maximális frekvencia kétszerese szükséges:
$$f_s \ge 2 \cdot f_{max} = 2 \cdot 75\text{ kHz} = 150\text{ kHz}$$

b) Sávszűrő (sávpásztázó) mintavételezés esetén ($f_{min} = 45\text{ kHz}$, $f_{max} = 75\text{ kHz}$, $B = 30\text{ kHz}$):
$$2 f_s - f_{max} \ge f_{max} \implies f_s \ge 75\text{ kHz}$$
$$f_s - f_{min} \le f_{min} \implies f_s \le 90\text{ kHz}$$
Így a megengedett tartomány: $75\text{ kHz} \le f_s \le 90\text{ kHz}$.

c) A legkisebb mintavételi frekvencia:
$$f_{s,min} = 75\text{ kHz}$$

---

## Feladat 13
- **ID:** 13
- **Témakör:** Szuperheterodin vevő, FM vétel, keverési frekvenciák

### Kérdés
Egy FM rádióadó $83{,}3\text{ MHz}$-es vivőfrekvencián ad. A szuperheterodin vevőkészülék középfrekvenciája $F_{KF} = 10{,}7\text{ MHz}$.
a) Felső keverést alkalmazva hová kell hangolni a vevő helyi oszcillátorát ($f_0$)?
b) Ugyancsak felső keverésnél hol van ezen adó tükörfrekvenciája ($f_t$)?
c) Mi a felső keverés előnye az alsó keveréssel szemben?

### Megoldás
a) Felső keverésnél az oszcillátor frekvenciája:
$$f_0 = f_v + F_{KF} = 83{,}3\text{ MHz} + 10{,}7\text{ MHz} = 94\text{ MHz}$$

b) Tükörfrekvencia felső keverésnél:
$$f_t = f_v + 2 \cdot F_{KF} = 83{,}3\text{ MHz} + 2 \cdot 10{,}7\text{ MHz} = 104{,}7\text{ MHz}$$

c) Felső keverésnél a tükörfrekvencia távolabb kerül a hasznos vett jeltől ($f_v$-től), így az előszűrő sokkal hatékonyabban tudja csillapítani a tükörfrekvenciás zavart.

---

## Feladat 14
- **ID:** 14
- **Témakör:** Sávhatárolt jel mintavételezése, SNR, kvantáló bitszám

### Kérdés
Egy valós, $\sqrt{2}$ csúcstényezőjű, teljes kivezérlésű bemenő jel visszaállítása esetén legalább $64\text{ dB}$-es jel-zaj viszonyt ($SNR$) követelünk meg. A jel $40\text{ kHz}$ és $70\text{ kHz}$ között tartalmaz komponenseket ($B = 30\text{ kHz}$).
a) Adja meg az átlapolódás-mentességet biztosító lehetséges mintavételi frekvencia-tartományokat!
b) Milyen típusú szűrőket kell alkalmazni az egyes tartományokban?
c) Hány bites kvantálót érdemes használni, ha aluláteresztő szűrővel állítjuk vissza a jelet?

### Megoldás
a) Átlapolódásmentes mintavételi frekvenciák:
- Aluláteresztő esetben: $f_s \ge 2 \cdot 70\text{ kHz} = 140\text{ kHz}$
- Sávpásztázó esetben ($m=1$): $70\text{ kHz} \le f_s \le 80\text{ kHz}$

b) Szűrők típusa:
- $f_s \ge 140\text{ kHz}$ esetén: Aluláteresztő szűrő (LPF)
- $70\text{ kHz} \le f_s \le 80\text{ kHz}$ esetén: Sáváteresztő szűrő (BPF)

c) $64\text{ dB}$-es $SNR$ eléréséhez uniform kvantálónál ($SNR \approx 1{,}76 + 6{,}02 \cdot n\text{ dB}$):
$$n \ge \frac{64 - 1{,}76}{6{,}02} \approx 10{,}33 \implies 11\text{ bit}$$

---

## Feladat 15
- **ID:** 15
- **Témakör:** Szuperheterodin vevő méretezése (24–36 MHz)

### Kérdés
Szuperheterodin vevőnk a $24\text{ MHz}$ és $36\text{ MHz}$ közötti frekvenciatartományban elhelyezkedő adók vételére szolgál. Középfrekvenciája $F_{KF} = 18\text{ MHz}$.
a) Mekkora frekvenciatartományt kell átfognia a helyi oszcillátornak felső, illetve alsó keverés esetén? Melyik a kedvezőbb és miért?
b) Milyen frekvenciára kell állítani a helyi oszcillátort, ha alsó keverést használunk és $25{,}5\text{ MHz}$-es jelet szeretnénk venni?
c) Mekkora ennek az adónak a tükörfrekvenciája alsó keverésnél?

### Megoldás
a) Oszcillátortartományok:
- Felső keverés ($f_0 = f_v + F_{KF}$): $f_0 \in [24+18, 36+18] = [42, 54]\text{ MHz}$. Relatív átfogás: $54/42 \approx 1{,}28$.
- Alsó keverés ($f_0 = f_v - F_{KF}$): $f_0 \in [24-18, 36-18] = [6, 18]\text{ MHz}$. Relatív átfogás: $18/6 = 3$.

A **felső keverés kedvezőbb**, mert lényegesen kisebb a helyi oszcillátor relatív frekvenciaátfogása ($1{,}28$ vs $3$), így sokkal könnyebb és stabilabb az oszcillátor megvalósítása.

b) Alsó keverésnél $f_v = 25{,}5\text{ MHz}$:
$$f_0 = f_v - F_{KF} = 25{,}5\text{ MHz} - 18\text{ MHz} = 7{,}5\text{ MHz}$$

c) Tükörfrekvencia alsó keverésnél:
$$f_t = f_0 + F_{KF} = 7{,}5 + 18 = 25{,}5\text{ MHz} \quad \text{illetve} \quad |f_t - f_v| = 33\text{ MHz}$$

---

## Feladat 16
- **ID:** 16
- **Témakör:** Telefontartomány, Erlang B méretezés, DTMF vevők

### Kérdés
Egy telefonos kapcsolóközpont DTMF vevőinek méretezésénél a tárcsázás időtartama átlagosan $10\text{ másodperc}$ ($h = 10\text{ s}$). A tárcsázások blokkolási valószínűsége nem lehet nagyobb, mint $0{,}2\%$. A berendezésnek legalább $60000\text{ hívást}$ kell tudnia végződtetni egy órában ($\lambda = 60000\text{ hívás/óra}$).
a) Mekkora a berendezés számára a felajánlott forgalom ($A$)?
b) Hány DTMF vevőre van szükség $P_b \le 0{,}2\%$ esetén?

### Megoldás
a) A hívási intenzitás:
$$\lambda = \frac{60000}{3600\text{ s}} = 16{,}67\text{ hívás/s}$$
A felajánlott forgalom Erlangban:
$$A = \lambda \cdot h = 16{,}67\text{ hívás/s} \cdot 10\text{ s} = 166{,}67\text{ Erl}$$

b) Erlang B táblázatból $A = 166{,}67\text{ Erl}$ és $P_b = 0{,}2\%$ blokkolás mellett a szükséges kiszolgálók száma:
$$N = 197$$

---

## Feladat 17
- **ID:** 17
- **Témakör:** DVB-C csatornakapacitás, QAM moduláció, Reed-Solomon kód

### Kérdés
64-QAM modulációt használva hány $1{,}5\text{ Mbit/s}$ bitsebességű DVB-C TV-csatorna fér el egy $8\text{ MHz}$-es raszterben? Az emelt koszinuszos szűrő lekerekítettsége $\alpha = 15\%$, a Reed–Solomon kódolás paramétere $[n, k] = [204, 188]$.

### Megoldás
- 64-QAM esetén egy szimbólum kódolása: $m = \log_2(64) = 6\text{ bit/szimbólum}$.
- A szimbólumsebesség (Baud-rate) $8\text{ MHz}$-es csatornaszélességnél, $\alpha = 0{,}15$ mellett:
$$B = R_s \cdot (1 + \alpha) \implies R_s = \frac{8\text{ MHz}}{1{,}15} \approx 6{,}957\text{ MBaud}$$
- A bruttó bitsebesség:
$$R_{bruttó} = R_s \cdot 6 = 6{,}957 \cdot 6 \approx 41{,}74\text{ Mbit/s}$$
- A hasznos (nettó) bitsebesség a Reed–Solomon kódolás korrekciója után:
$$R_{hasznos} = R_{bruttó} \cdot \frac{188}{204} \approx 41{,}74 \cdot 0{,}9216 \approx 38{,}46\text{ Mbit/s}$$
- Elhelyezhető csatornák száma:
$$N_{csatorna} = \left\lfloor \frac{38{,}46\text{ Mbit/s}}{1{,}5\text{ Mbit/s}} \right\rfloor = 25\text{ csatorna}$$

---

## Feladat 18
- **ID:** 18
- **Témakör:** Voice Activity Detector (VAD), GSM, VoIP, komfortzaj

### Kérdés
Távközlési rendszerekben gyakran alkalmaznak Voice Activity Detector-t (VAD).
a) Milyen előnnyel jár a használata a GSM rendszerben? Miért?
b) Milyen előnnyel jár a használata a VoIP rendszerekben? Miért?
c) A VAD aktivitása esetén hogyan tartják fenn a csatorna működésének élményét a vevő oldalon?

### Megoldás
a) **GSM rendszerben:** Csökkenti a mobilkészülék adóteljesítmény-felvételét és az akkumulátor merülését (hosszabb üzemidő), valamint csökkenti a rádiós felület általános interferenciaszintjét.
b) **VoIP rendszerekben:** Lényeges sávszélesség-megtakarítást eredményez a hálózaton, mivel a csendperiódusok alatt nem továbbít csomagokat.
c) **Komfortzaj (Comfort Noise Generation - CNG):** A vevő oldalon mesterséges háttérzajt generálnak a csendperiódusokban, hogy a hallgató ne érezze úgy, mintha megszakadt volna a vonal.

---

## Feladat 19
- **ID:** 19
- **Témakör:** GSM cellás hálózat kapacitása, klaszterezés

### Kérdés
Tekintsük Budapest területét $525\text{ km}^2$-nek, a frekvenciaújrafelhasználási tényező $N = 12$ (klaszterméret).
a) Ha $525$ cellát használnak a szolgáltatók, hány klaszter fed le Budapestet?
b) A $25\text{ MHz}$-es GSM sávban $124$ darab $200\text{ kHz}$-es csatorna van, és minden csatornában $8$ TDMA időrés található. Hány felhasználó beszélhet egy klaszterben egyidejűleg?
c) Összesen hányan telefonálhatnak egyidejűleg Budapesten?

### Megoldás
a) Klaszterek száma:
$$\text{Klaszterek száma} = \frac{\text{Cellák száma}}{N} = \frac{525}{12} = 43{,}75 \approx 44\text{ klaszter}$$

b) Egy klaszterben lévő összes csatorna száma:
$$124\text{ vivőfrekvencia} \cdot 8\text{ időrés} = 992\text{ egyidejű beszélgető / klaszter}$$

c) Budapesten egyidejűleg beszélgetők száma:
$$\text{Összes felhasználó} = 43{,}75 \cdot 992 = 43400\text{ felhasználó}$$

---

## Feladat 20
- **ID:** 20
- **Témakör:** 16-PSK moduláció, fázishibatűrés, Nyquist sávszélesség

### Kérdés
a) Adja meg a 16-PSK digitális modulációs eljárás elméleti fázishibatűrését!
b) $500\text{ kbit/s}$ adatforgalom ISI-mentes átvitele minimálisan mekkora sávszélességet igényel standard 16-PSK rendszerrel (Nyquist-szűrés esetén)?

### Megoldás
a) 16-PSK esetén a konstellációs pontok a körvonalon egyenletesen $360^\circ / 16 = 22{,}5^\circ$-os szögtávolságra vannak egymástól. A maximális megengedett fázishiba a döntési határokig:
$$\Delta \phi = \frac{360^\circ}{2 \cdot 16} = \pm 11{,}25^\circ$$

b) 16-PSK esetén $m = \log_2(16) = 4\text{ bit/szimbólum}$.
A szimbólumsebesség:
$$R_s = \frac{R_b}{m} = \frac{500\text{ kbit/s}}{4} = 125\text{ kBaud}$$
A minimális Nyquist-sávszélesség ($lpha = 0$ esetén):
$$B_{min} = R_s = 125\text{ kHz}$$
