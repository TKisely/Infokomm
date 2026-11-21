---
forras: "VikWiki/Infokomm_2015_01_13.pdf (4 oldal, szkennelt)"
tartalom: "Infokommunikáció vizsga, 2015. január 13. – 10 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2015. január 13.

Pontozás: a 2. és 9. feladat 3–3 pont, a többi 2–2 pont.

---

## 1. feladat – PAM, Nyquist-sávszélesség

**Feladat.** (Azonos a 2014.12.22-i 3. feladattal.) 116 kBd, nincs ISI. a) A vevő aluláteresztőjének legkisebb sávhatára? b) 348 kbit/s átvitele?

**Megoldás.** a) $B\ge\frac{1}{2T}=$ **58 kHz** (Nyquist; ennél keskenyebb sávban az ISI elkerülhetetlen). b) 3 bit/szimbólum → **8 szintű PAM** (nagyobb jel-zaj viszony kell).

---

## 2. feladat – Modulált jel felismerése

**Feladat.** $s(t)=\sum_{k=0}^{6}\cos\bigl(2\pi(997+k)t\bigr)$, $[t]=$ ms. a) Mi lehet a moduláció típusa, és miért? b) A demodulált jel zárt alakban. c) Hogyan változik a válasz, ha $s(t)=\sum_{k=0}^{5}\cos(2\pi(997+k)t)$?

**Megoldás.**
a) Vonalak: **997, 998, …, 1003 kHz** – 7 egyenlő amplitúdójú vonal, 1 kHz-enként, az **1000 kHz-es** vonalra szimmetrikusan → **AM-DSB vivővel** (vivő 1 MHz; a moduláló jel 1 kHz alapfrekvenciájú, 3 harmonikust tartalmazó periodikus jel). Nem FM: ott az oldalvonalak Bessel-függvény szerinti, nem egyforma amplitúdójúak.
b) $s(t)=\cos(2\pi\cdot1000t)\bigl[1+2\sum_{n=1}^{3}\cos(2\pi nt)\bigr]$ → koherens demodulálás után
$$m(t)=1+2\sum_{n=1}^{3}\cos(2\pi nt)=\frac{\sin(7\pi t)}{\sin(\pi t)},\qquad[t]=\text{ms}$$
(alapharmonikus 1 kHz; a burkoló negatív értéket is felvesz, tehát túlmodulált – burkolódetektorral $|m(t)|$ adódna).
c) 6 vonal: 997…1002 kHz. A szimmetriaközéppont **999,5 kHz**, ahol nincs vonal → **nincs vivő**: **DSB-SC** (vivő 999,5 kHz, a moduláló jel 0,5; 1,5; 2,5 kHz-es komponensekből áll: $m(t)=2\sum_{n=1}^{3}\cos(2\pi(n-\tfrac12)t)=\frac{\sin6\pi t}{\sin\pi t}$), vagy **SSB** (pl. 997 kHz alatti/feletti vivővel egyoldalsávos jel). AM vivővel nem lehet.

**Ellenőrzés:** $t\to0$: $\frac{\sin7\pi t}{\sin\pi t}\to7=1+2\cdot3$. ✔ c) $\frac{\sin6\pi t}{\sin\pi t}\to6$. ✔

---

## 3. feladat – Prefix kód visszafejtése

**Feladat.** Kísérleti prefix kódoló öt szimbólumot kódol (csökkenő valószínűség szerint A, B, C, D, E); ezeket valamilyen sorrendben, egyszer-egyszer kiadva az **1101111100101110** sorozatot kapjuk. a) Jelölje a szimbólumhatárokat, indokolja. b) Milyen lehet a forráseloszlás, ha az átlagos kódszóhossz 1,5 bit alatti? Adjon példát.

**Megoldás.**
a) Olyan 5 részre bontást keresünk, ahol a részek páronként különbözők, és egyik sem kezdőszelete (prefixe) a másiknak. **A felbontás nem egyértelmű** (gépi kereséssel 12 ilyen felbontás létezik). A legtermészetesebb (a Kraft-összeg itt a legnagyobb, 0,95 – „majdnem teljes”, egyoldalú/unáris jellegű kód):
$$\mathbf{110\,|\,111110\,|\,0\,|\,10\,|\,1110}$$
azaz a kódszavak 0, 10, 110, 1110, 111110 (hossz 1, 2, 3, 4, 6). Indoklás: prefixmentes (minden kódszó az első 0-ig tart), mind az öt különböző, és összefűzve pontosan a vett sorozatot adja. Csökkenő valószínűség mellett a rövidebb kódszó a valószínűbb szimbólumé: **A = 0, B = 10, C = 110, D = 1110, E = 111110**; a kiadott sorrend C, E, A, B, D. (Teljes felsorolással 12 prefixmentes felbontás létezik; a Kraft-összeg a fenti és a 110111|1100|10|111|0 felbontásnál a legnagyobb (0,95). A fenti az, amelyik egy rendszeres – „az első 0-ig tart” – kódszabályból következik, ezért ez a természetes válasz; a feladat indoklást kér, nem egyértelműséget.)
b) Az átlag $\bar l=p_A+2p_B+3p_C+4p_D+6p_E<1{,}5$ csak akkor lehet, ha **A nagyon valószínű** (kb. $p_A>0{,}75$). Példa: $p=(0{,}8;\ 0{,}1;\ 0{,}04;\ 0{,}03;\ 0{,}03)$ → $\bar l=0{,}8+0{,}2+0{,}12+0{,}12+0{,}18=$ **1,42 bit**.

**Ellenőrzés:** $110+111110+0+10+1110$ = 1101111100101110 (16 bit). ✔

---

## 4. feladat – Kétutas terjedés, 300 MHz

**Feladat.** $h_T=h_R=10$ m, $d=10$ km, $f=300$ MHz, $G_T=5$ dB, $G_R=3$ dB, tökéletes reflexió. a) Szakaszcsillapítás? b) A vevőantenna magasságát változtatva mekkora a minimális és maximális térerősség aránya, ha $\Gamma=-0{,}8$?

**Megoldás.** $\lambda=1$ m; töréspont $4h_Th_R/\lambda=400$ m ≪ 10 km.
a) $L=40\lg d-20\lg(h_Th_R)=160-40=$ **120 dB** (izotróp antennák között); a nyereségekkel **112 dB**.
b) $|1+\Gamma e^{-j\varphi}|$: max $1{,}8$, min $0{,}2$ → arány **9 (19,1 dB)** (maximum/minimum).

**Ellenőrzés:** szabadtéri csillapítás $20\lg(4\pi d/\lambda)=102$ dB; a kétutas szorzó $4\sin^2\frac{2\pi h_Th_R}{\lambda d}=4\sin^2(0{,}0628)=0{,}0158$ (−18 dB) → $102+18=120$ dB. ✔

---

## 5. feladat – A GSM beszédcsatorna késleltetése

**Megoldás.** Fő összetevők (egy irányban):
- **beszédkódolás**: 20 ms-os keretek gyűjtése + előretekintés és feldolgozás – kb. 20–30 ms;
- **csatornakódolás és interleaving** (a keretet 8 burstre szórják szét): kb. 37,5 ms;
- **TDMA-keretezés** (várakozás a saját időrésre, 4,615 ms-os keret): néhány ms;
- **dekódolás**, deinterleaving a vevőben: kb. 10–20 ms;
- **terjedés** (rádión µs-os, a hálózaton néhány ms), átkódolás (transcoder), kapcsolás: néhány ms.
Összesen **kb. 90–100 ms** egy mobil–vezetékes irányban (mobil–mobil hívásnál ennek közel kétszerese).

---

## 6. feladat – VoIP G.711

**Feladat.** 10 ms → 80 byte; csomagonként két szegmens; fejrészek 47 byte. a) Csomagsebesség? b) Hívásonkénti sávszélesség +10% vezérlőforgalommal?

**Megoldás.**
a) 20 ms beszéd/csomag → **50 csomag/s**.
b) $(2\cdot80+47)\cdot8\cdot50=82{,}8$ kbit/s; +10% → **≈ 91,1 kbit/s**.

---

## 7. feladat – RED (Random Early Detection)

**Megoldás.**
a) A RED a sor **átlagos** hosszát figyeli; egy alsó küszöb felett a csomagokat a sorhossz növekedésével növekvő valószínűséggel **véletlenszerűen, előre eldobja** (a felső küszöb felett mindet). A TCP-források a vesztést érzékelve csökkentik az ablakukat, **mielőtt a puffer megtelne** – így elkerülhető a tele sor miatti tömeges (tail drop) vesztés, a TCP-folyamok globális szinkronizációja és a nagy sorban állási késleltetés.
b) **Nem érdemes.** A VoIP UDP felett megy, a forrás a vesztésre nem lassít, így az eldobás nem csökkenti a terhelést, csak rontja a beszédminőséget. A VoIP-forgalmat ki kell venni a RED alól (pl. elsőbbségi sor, WRED osztályonként eltérő küszöbökkel).

---

## 8. feladat – Késleltetés és tömöríthetőség

**Megoldás.**
a) A jobb tömörítéshez a kodeknek **hosszabb jelszakaszt** kell egyszerre elemeznie (hosszabb keret, előretekintés), ami növeli az algoritmikus és csomagolási késleltetést. Mivel a teljes egyirányú késleltetésnek 150–200 ms alatt kell maradnia (és ebből a hálózat, a jitterpuffer is elvisz), a kodek keretmérete néhányszor 10 ms-ra korlátozódik – ez **korlátozza az elérhető tömörítési arányt**.
b) Az alsó korlát a forrás **entrópiája** ($\bar l\ge H$). Huffman- (vagy Shannon–Fano-) kóddal $H\le\bar l<H+1$, tehát egy biten belül megközelíthető; több szimbólumot blokkban kódolva a szimbólumonkénti többlet $1/n$-re csökken (vagy aritmetikai kódolással / univerzális Lempel–Ziv kódolással).

---

## 9. feladat – 802.11: 16-QAM vs. 64-QAM

**Feladat.** 16-QAM 3/4: 15 dB alatt értékelhetetlen, 30 dB-en 2,4 Mbyte/s. 64-QAM 3/4: 22 dB-en még semmi, 35 dB-en 3,1 Mbyte/s (ábra). a) Miért kell 64-QAM-nél ennyivel jobb SNR? b) Miért érhető el nagy SNR-en ennyivel nagyobb sebesség? c) Miért nem nő tovább a sebesség egy SNR felett?

**Megoldás.**
a) Azonos átlagteljesítmény mellett a 64 pont sokkal sűrűbben helyezkedik el a konstellációs síkon: a szomszédos pontok távolsága kb. **felére** csökken ($\sqrt{(16-1)/(64-1)}\approx0{,}49$) → ugyanakkora zaj sokkal könnyebben átviszi a jelet a szomszéd döntési tartományába; azonos hibaarányhoz kb. **6 dB-lel nagyobb SNR** kell (a mérésben is ~7 dB az eltolás).

![](abrak/qam16_64_zaj.svg)

b) 64-QAM-nél 6, 16-QAM-nél 4 bit/szimbólum → azonos szimbólumsebesség és kódarány mellett **1,5-szeres** bitsebesség (elméletileg 3,6 Mbyte/s; a mért 3,1 a protokoll-többlet és újraküldések miatt kevesebb).
c) Elég nagy SNR-nél a hibaarány már elhanyagolható, nincs újraküldés; a sebességet ekkor a **szimbólumsebesség × bit/szimbólum × kódarány** (és a MAC-réteg többlete) korlátozza – az SNR további növelése ezen nem változtat (telítődés).

---

## 10. feladat – Üzlet (veszteséges rendszer)

**Megoldás.** (Azonos a 2012.01.03-i 6. és a 2013.12.16-i 4. feladattal.) $A=0{,}6/0{,}998\approx0{,}6$ Erl, $h=A/\lambda=$ **≈ 6 perc**. (A megadott 0,2%-os blokkolás az Erlang-B szerint (0,3%) kissé ellentmond, de csak elhanyagolható korrekciót jelent; a tárgy gyűjteménye is 6 percet ad.)
