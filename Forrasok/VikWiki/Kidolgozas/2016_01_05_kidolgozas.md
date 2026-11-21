---
forras: "VikWiki/Vizsgafeladat2016.01.05..pdf (3 oldal; hallgató („gyezo12”) által emlékezetből és kivágatokból összeállított feladatsor); a hozzá tartozó hallgatói megoldás: Megoldas_2016.01.05..pdf (ellenőrzése: 2016_01_05_megoldas_ellenorzes.md)"
tartalom: "Infokommunikáció vizsga, 2016. január 5. – 8 feladat (rekonstrukció)"
jeloles: "[HIÁNYOS ADAT] = a forrásból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2016. január 5. (rekonstrukció)

---

## 1. feladat – Sáváteresztő jel (45–75 kHz) mintavételezése

**Feladat.** A jel komponensei 45 és 75 kHz között vannak. a) Mekkora legyen $f_s$ aluláteresztő szűrő esetén? b) Sávszűrő esetén mekkora lehet $f_s$? c) A legkisebb $f_s$-sel rajzolja fel a mintavételezett spektrumot.

**Megoldás.**
a) $f_s\ge2\cdot75=$ **150 kHz**.
b) $B=30$ kHz, $n\le\lfloor75/30\rfloor=2$; $n=2$: $\frac{2\cdot75}{2}\le f_s\le\frac{2\cdot45}{1}$ → **75 kHz ≤ f_s ≤ 90 kHz** (vagy $f_s\ge150$ kHz).
c) $f_s=75$ kHz: képek (pozitív oldal) **0–30 kHz** (fordított), **45–75 kHz** (eredeti), **75–105 kHz** (fordított), **120–150 kHz** (eredeti), … – a 75 kHz-nél két kép éppen érintkezik, védősáv nincs (a gyakorlatban ideális szűrő kellene; célszerűbb pl. 82,5 kHz).

![](abrak/mintavetel_45_75_fs75.svg)


**Ellenőrzés:** gépi átfedés-vizsgálat (0,5 kHz-es lépés): megengedett 75–90 kHz és 150 kHz felett. ✔

---

## 2. feladat – Kétutas terjedés, felére csökkentett vevőmagasság

**Feladat (rekonstrukció).** Adott $h_T$, $h_R$ mellett „abban a bizonyos távolságban” a vett jel kétszeres volt; ha $h_R$ a felére csökken, vehető-e még a jel? [HIÁNYOS ADAT: a pontos szöveg és a számadatok hiányoznak.]

**Megoldás – két értelmezés:**
1. *A vett teljesítmény a vevő érzékenységének kétszerese (3 dB tartalék), a vevő a távoli zónában van.* Ott $L=40\lg d-20\lg h_T-20\lg h_R$, így $h_R$ felezése **+6 dB** csillapítást jelent → 3 dB-lel az érzékenység alá kerül: **nem vehető**.
2. *A vevő az interferenciazóna határán van (a térerősség a szabadtérinek kétszerese, $\sin x=1$).* $h_R$ felezésével a szinusz argumentuma $\pi/4$-re csökken: a teljesítmény $\sin^2(\pi/4)=0{,}5$-szörös (**−3 dB**), a térerősség a szabadtérinek $\sqrt2$-szerese.
[HIÁNYOS ADAT: a rekonstruált szövegből nem dönthető el, melyik helyzetről van szó. A hallgatói megoldás az 1. értelmezést követi, és a tárgy gyűjteménye a gondolatmenetét helyesnek fogadja el; ha valóban 3 dB volt a tartalék, mindkét értelmezésben legfeljebb a határon vehető a jel.]

---

## 3. feladat – DTMF-vevők (0,2%)

**Feladat.** Tárcsázás átlagosan 10 s, legalább 60 000 hívás/óra, blokkolás ≤ 0,2%. a) Felajánlott forgalom? b) Hány DTMF-vevő kell (Erlang-B táblázat)? c) A rendszer kihasználtsága?

**Megoldás.**
a) $A=\frac{60\,000}{3600}\cdot10=$ **166,7 Erl**.
b) A táblázatban felfelé kerekítve a 167 Erl-es sor, 0,2% → **198 vevő**. (A 166-os sor 197-et adna, de az a ténylegesnél kisebb forgalomra vonatkozik: 197 vevővel a blokkolás 0,21% > 0,2%.)
c) $\rho=\frac{A(1-B)}{N}=\frac{166{,}7\cdot0{,}998}{198}\approx$ **0,84 (84%)**.

**Ellenőrzés:** Erlang-B rekurzióval $B(166{,}67;197)=0{,}212\%$, $B(166{,}67;198)=0{,}178\%$. ✔

---

## 4. feladat – Lineáris kód: 2 bites üzenet, 2 hiba jelzése

**Feladat.** Szisztematikus lineáris blokk-kód, 2 bites üzenetek, 2 hibát tud detektálni. a) Lehetséges generátormátrix? b) Hány bitesek (legalább) a kódszavak? c) A kód súlya?

**Megoldás.** 2 hiba jelzéséhez $d_{min}\ge3$ kell.
b) **Legalább 5 bit.** A Singleton-korlát ($d\le n-k+1$) csak $n\ge4$-et ad, de $n=4$-gyel nem lehet: a (4,2) kódban a két generátorsor súlya legalább 3, így mindkettő 4 bitjéből legalább 3 egyes, ezért összegük súlya legfeljebb 2. (Általánosan: Griesmer-korlát $n\ge3+\lceil3/2\rceil=5$; vagy mivel $d_{min}=3$-mal 1 hiba javítható, a Hamming-korlát $1+n\le2^{n-2}$ is $n\ge5$-öt ad.)
a) Pl. $G=\begin{pmatrix}1&0&1&1&1\\0&1&0&1&1\end{pmatrix}$ – kódszavak 00000, 10111, 01011, 11100.
c) A kód súlya (a legkisebb nem nulla kódszósúly) lineáris kódnál $=d_{min}=$ **3**.

**Ellenőrzés:** a fenti kódszavak súlya 4, 3, 3 → $d_{min}=3$. ✔

---

## 5. feladat – AM-DSB dBV-ben megadott spektrumból

**Feladat.** Vivő 100 kHz-en 3 dBV, oldalsávok 80 és 120 kHz-en −9 dBV. a) $s_{AM}(t)$? b) Modulációs mélység? c) Demodulátor blokkvázlata?

**Megoldás.** A dBV effektív értékre vonatkozik: 3 dBV → $10^{3/20}=1{,}41$ V eff → **2 V csúcs**; −9 dBV → 0,355 V eff → **0,5 V csúcs**.
a) $f_m=20$ kHz: $$s_{AM}(t)=2\,[1+0{,}5\cos(2\pi\cdot20\,\text{kHz}\cdot t)]\cos(2\pi\cdot100\,\text{kHz}\cdot t)\ \text{V}=2\cos\omega_vt+0{,}5\cos\omega_{80}t+0{,}5\cos\omega_{120}t.$$
b) $\frac{mU_v}{2}=0{,}5$ → $m=\frac{2\cdot0{,}5}{2}=$ **0,5**.
c) $m<1$ → elvben **burkolódetektor** (dióda + RC + egyenáram-leválasztás + aluláteresztő). Itt azonban $f_v/f_m=5$: a feltétel $10\ \mu s\ll RC\le\frac{\sqrt{1-m^2}}{2\pi f_mm}=13{,}8\ \mu s$ nem teljesíthető jól, a kimenet erősen hullámos lenne → jobb a **koherens demodulátor** (szorzó a 100 kHz-es szinkron vivővel + 20 kHz feletti, 180 kHz alatti határfrekvenciájú aluláteresztő).

![](abrak/koherens_demod.svg)


---

## 6. feladat – 16-PSK, $r=\sqrt2$

**Feladat.** a) A jel teljesítménye? b) 11,25°-os fázishiba esetén hogyan változik a jel-zaj viszony?

**Megoldás.**
a) Állandó burkoló: $s(t)=\sqrt2\cos(\omega_vt+\varphi_k)$ → $P=\frac{(\sqrt2)^2}{2}=$ **1** (egységnyi ellenálláson). (A konstellációs pontok négyzetes abszolút értéke, azaz a komplex burkoló teljesítménye $r^2=2$ – a definíciótól függően.)
b) A 16-PSK fázistűrése $\pm\frac{\pi}{16}=\pm11{,}25°$: ekkora fázishibánál a pontok **pontosan a döntési határon** vannak, a zajtartalék nullára csökken – bármilyen kicsi zaj 50% körüli valószínűséggel hibás döntést okoz. Ugyanakkora hibaarány tartásához **végtelen jel-zaj viszony kellene** (az effektív jel-zaj viszony, a döntési határtól mért távolsággal számolva, nullára esik).

---

## 7. feladat – GSM, kölcsönös barangolás (+ ki-/bekapcsolás)

**Feladat.** MS-A az alfa, MS-B a béta előfizetője, épp egymás hálózatában barangolnak. MS-A felhívja MS-B-t. (a) Melyik HLR-t kérdezik le? (b) Melyik GMSC értesül előbb a hívásról? (c) MS-A hálózaton belüli, beszélgetés közbeni mozgásáról mely elemek szereznek tudomást? (d) MS-B SMS-t küld MS-A-nak – melyik SMSC kézbesíti? (+1) MS-A egy pillanatra kikapcsol, majd bekapcsol – mi történik a HLR$_\alpha$-ban és a HLR$_\beta$-ban?

**Megoldás.** (a) **HLR$_\beta$**; (b) **GMSC$_\beta$**; (c) **BTS$_\beta$, BSC$_\beta$, MSC$_\beta$** (handover; a VLR és a HLR beszélgetés közben nem kap helyfrissítést); (d) **SMSC$_\beta$** (MS-B honos SMSC-je).
(+1) Kikapcsoláskor a készülék **IMSI detach** üzenetet küld, a **VLR$_\beta$** „nem elérhető”-nek jelöli. Bekapcsoláskor **IMSI attach** (ha ugyanabban a helyterületben van, a VLR$_\beta$ ismeri). A **HLR$_\alpha$-ban** csak akkor történik változás (Update Location, Cancel Location a régi VLR felé), ha a készülék közben **másik VLR/MSC területére** került; egyébként semmi. A **HLR$_\beta$-ban semmi** nem történik (MS-A nem béta előfizető).

---

## 8. feladat – 150 Mbit/s 72 MHz-en

**Feladat (rekonstrukció; a megoldásból: 150 Mbit/s, 72 MHz).** a) Megoldható-e 8-PSK-val? b) Mivel lehetne? c) Miért nem lehet akármilyen n-QAM-mel?

**Megoldás.**
a) 8-PSK: 3 bit/szimbólum → 50 MBd. A modulált jel ISI-mentes minimális sávszélessége $(1+\alpha)\cdot50$ MHz; ez **$\alpha\le0{,}44$ lekerekítésnél belefér a 72 MHz-be**, nagyobb lekerekítésnél (pl. $\alpha=0{,}5$ → 75 MHz) nem. **Válasz: megoldható** – a lapon a hallgató „nem lehet” válasza mellett javítói X van, és a hozzá tartozó kézírásos vázlat is a $B=(1+\alpha)/T$ képletből indul. [HIÁNYOS ADAT: a lekerekítési tényező a rekonstrukcióban nincs megadva; ha $\alpha>0{,}44$ lett volna, a 8-PSK nem férne el.]
b) **16-QAM**: 4 bit/szimbólum → 37,5 MBd, sávszélesség $(1+\alpha)\cdot37{,}5$ MHz – $\alpha\le0{,}92$-ig belefér.
c) A szintszám növelésével (azonos teljesítménynél) a pontok közti távolság csökken: **nő a szükséges jel-zaj viszony**, a rendszer érzékenyebb a zajra, az erősítés- és fázishibára, a nemlinearitásra; ezért a csatorna jel-zaj viszonya (Shannon-korlát) felső határt szab.
