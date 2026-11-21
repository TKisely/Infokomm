---
forras: "VikWiki/Infokomm_vizsga_2011_12_20_B.pdf (4 oldal, szkennelt; a szövegréteg OCR-je hibás, képről olvasva)"
tartalom: "Infokommunikáció vizsga, 2011. december 20., B csoport – 7 feladat (az 5. hat tesztkérdés)"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2011. december 20., B csoport

Pontozás: 1–3. és 7. feladat 3–3 pont, 4. és 6. feladat 2–2 pont, 5. (teszt) 6 pont. Indoklás nélküli eredményt nem fogadnak el, tört pontszám nincs. A tesztben kérdésenként akár mind a négy válasz helyes lehet; ha egyik sem, a „0” oszlopot kell jelölni.

---

## 1. feladat – GSM, két szolgáltató (alfa, béta)

**Feladat.** Az ábrán két GSM-hálózat elemei: mindkettőben HLR, AuC, EIR, MSC/VLR, SMSC, BSC, BTS. MS-A1 és MS-A2 is az alfa hálózat előfizetője, de MS-A2 a béta hálózatban barangol. MS-A1 felhívja MS-A2-t.
(a) Melyik MSC/VLR értesül előbb a hívásról?
(b) MS-A2 készüléke nincs tiltólistán. Melyik elem tárolja ezt a tiltólistát?
(c) A hívás bontása után MS-A2 SMS-t küld MS-A1-nek. Melyik SMSC kézbesíti?

**Megoldás.**
(a) **Az alfa hálózat MSC/VLR-je.** A hívást MS-A1 kezdeményezi az alfa hálózatban, a kiszolgáló alfa MSC kapja a hívásfelépítési kérést; az alfa HLR lekérdezése (a hívott MS-A2 az alfa előfizetője) után kerül csak a béta MSC/VLR-hez (MSRN-nel).
(b) **EIR – a béta hálózaté** (EIR$_\beta$): a készülékazonosító (IMEI) ellenőrzését a kiszolgáló (látogatott) hálózat MSC/VLR-je végzi a saját EIR-jében. **Tisztázva:** a GSM-ben az MSC–EIR (F) interfész a hálózaton belüli; az IMEI-ellenőrzést mindig a készüléket éppen kiszolgáló MSC/VLR végzi a saját hálózata EIR-jénél – barangolásnál tehát a látogatott hálózaté.
(c) **Az alfa hálózat SMSC-je.** Az elküldött SMS a küldő SIM-kártyáján beállított, a honos hálózathoz tartozó SMSC-be kerül (MS-A2 alfa előfizető), és onnan kézbesítik MS-A1-nek (aki szintén alfa előfizető, az alfa hálózatban).

---

## 2. feladat – GSM-cellák Budapesten (900 MHz)

**Feladat.** Mennyi felhasználó telefonálhat átlagosan egy budapesti GSM-klaszterben a 900 MHz-es sávban? Budapest területe 525 km², a frekvencia-újrahasznosítási tényező $N=12$. Ha 525 cellát használnak, hány klaszterrel fedhető le a terület? 3 szolgáltató osztozik a sávon: egy átlagos cellán belül egyszerre hány ember beszélget az egyik szolgáltatónál? (Vegye figyelembe a TDM-et és $N$-t.)

**Megoldás.**
- GSM 900: 2×25 MHz (890–915 / 935–960 MHz), 200 kHz-es vivők → 125 (a védősáv miatt ténylegesen 124) duplex vivő; vivőnként 8 időrés (TDMA).
- **Egy klaszterben** a teljes sáv egyszer használható fel: $124\cdot8=$ **992 ≈ 1000 egyidejű beszélgetés** (teljes sebességű csatornákkal, a vezérlőcsatornákat elhanyagolva).
- 525 cella / 12 cella/klaszter = **43,75 ≈ 44 klaszter** (egy cella átlagosan 1 km²).
- Egy szolgáltatónak a vivők harmada jut: $124/3\approx41$ vivő, ezt 12 cellára kell osztani: $41/12\approx3{,}4$ vivő/cella → $3{,}4\cdot8\approx$ **27–28 egyidejű beszélgetés cellánként** ($1000/36\approx27{,}8$; $992/36\approx27{,}6$).
(A valóságban cellánként legalább egy időrést a vezérlőcsatornák (BCCH stb.) foglalnak, így kicsit kevesebb.)

---

## 3. feladat – AM-DSB moduláció

**Feladat.** Vivő 60 kHz, moduláló jel 10 kHz-es szinusz, modulációs mélység 20%, a modulált jel csúcsértéke 1,8 V. Rajzolja fel léptékhelyesen legalább 200 µs-os szakaszát. Írja fel az időfüggvényt; mekkorák a vivő és a moduláló jel amplitúdó- és frekvenciakomponensei; milyen egységben kell az időt behelyettesíteni? Hogyan demodulálható? Blokkvázlat, az elemek specifikációja.

**Megoldás.** (A feladat azonos a 2008. január 2-i 3. feladattal.)
- $U_v(1+m)=1{,}8$ V → **vivőamplitúdó 1,5 V**, moduláló komponens (burkolóváltozás) amplitúdója $mU_v=0{,}3$ V; vivő 60 kHz, moduláló 10 kHz.
- $u(t)=1{,}5\,[1+0{,}2\cos(2\pi\cdot10^4t)]\cos(2\pi\cdot6\cdot10^4t)$ V, **$t$ másodpercben** (kHz-es frekvenciákkal ms-ban).
- Spektrum: 60 kHz – 1,5 V; 50 és 70 kHz – 0,15–0,15 V.
- Rajz: 200 µs = 2 moduláló és 12 vivőperiódus, a burkoló 1,2 V és 1,8 V között.

![](abrak/am_60k_10k_m02.svg)

- Demodulátor: $m<1$ → burkolódetektor (dióda + RC, $16{,}7\ \mu s\ll RC\le78\ \mu s$, pl. 40 µs), egyenáramú leválasztás, 10 kHz-es aluláteresztő; vagy koherens demodulátor.

![](abrak/burkolodetektor.svg)


**Ellenőrzés:** $1{,}5+0{,}15+0{,}15=1{,}8$ V csúcs. ✔

---

## 4. feladat – ISI-mentes jelzési idő

**Feladat.** A $p(t)$ valós elemi jel egyoldalas spektruma: $P(f)=1$ $f_1=0{,}8$ MHz-ig, majd az 1 MHz-es pontra (ahol 0,5) szimmetrikusan lecseng, $f_2=1{,}2$ MHz-től 0. Hogyan válasszuk a jelzési időt, hogy a rendszer ISI-mentes legyen?

**Megoldás.** A spektrum az $f_N=\frac{f_1+f_2}{2}=1$ MHz-es pontra páratlan szimmetriájú (vestigiális szimmetria: $P(f_N-x)+P(f_N+x)=1$), ez a Nyquist-kritérium (emelt koszinusz jellegű, $\alpha=0{,}2$). ISI-mentesség, ha $f_N=\frac1{2T}$:
$$T=\frac{1}{2\cdot1\ \text{MHz}}=\mathbf{0{,}5\ \mu s}\quad(\text{2 MBd}).$$
Ennek egész számú többszörösei ($T=k\cdot0{,}5\ \mu s$) is ISI-mentesek, mert $p(t)$ zérushelyei $t=k\cdot0{,}5\ \mu s$-nál vannak; rövidebb $T$ nem lehet.

**Ellenőrzés:** $\sum_kP(f-k/T)$ $1/T=2$ MHz-zel (kétoldalas spektrum, $|f|\le1{,}2$): a 0,8–1,2 MHz-es átmenetben $P(f)+P(2-f)=1$ → konstans. ✔

---

## 5. feladat – Teszt

| | A | B | C | D | 0 |
|---|---|---|---|---|---|
| 5.1 | X | X | | X | |
| 5.2 | X | | X | X | |
| 5.3 | | X | | | |
| 5.4 | X | | | | |
| 5.5 | | | | X | |
| 5.6 | X | | X | | |

**5.1** Sztereó FM, a jobb oldali mikrofonba 520 Hz-es hang. $M=L+R$ → 520 Hz (**B** ✔); $S=L-R=-R$ DSB-SC a 38 kHz-es segédvivőn → 37 480 és **38 520 Hz** (**A** ✔); a 38 kHz-es segédvivő el van nyomva (**C** ✘); a **19 kHz-es pilot** mindig jelen van (**D** ✔).

**5.2** PDH: **A** ✔ (Plesiochronous Digital Hierarchy). **B** ✘: E1-ben 32 időrés van, de csak 30 visz beszédet (TS0 keretszinkron, TS16 jelzés). **C** ✔: $125\ \mu s/32=3{,}9\ \mu s$. **D** ✔: a TS16 (64 kbit/s) 16 keretes multikeretben 30 csatorna jelzését viszi, csatornánként 4 bit / 2 ms = **2 kbit/s**.

**5.3** $s(t)=10\cos(2\pi Ft+0{,}1\sin2000\pi t)$: $f_m=1$ kHz, fázislöket $\beta=0{,}1$ rad (**A** ✘, nem $0{,}1/2\pi$); frekvencialöket $\beta f_m=100$ Hz (**D** ✘). Keskenysávú szögmoduláció ($\beta\ll1$): csak az első oldalsávpár jelentős ($J_1(0{,}1)=0{,}05$, $J_2=0{,}001$) → $B\approx2f_m=$ **2 kHz** (**B** ✔; Carson-szabállyal 2,2 kHz). Teljesítmény $10^2/2=50$ (1 Ω-on), a $10/\sqrt2$ az effektív érték (**C** ✘).

**5.4** $f_s=8$ kHz, $H(f)=1$ ($|f|\le5$ kHz), $3{,}5-|f|/2$ (5–7 kHz), 0 egyébként; bemenet 2 V/1 kHz + 3 V/6 kHz.
A bemeneti szűrő után: 1 kHz – 2 V; 6 kHz – $3\cdot H(6)=3\cdot0{,}5=1{,}5$ V. Mintavétel után képek: 1 kHz → 7, 9 kHz…; 6 kHz → **2 kHz**, 10, 14 kHz… A kimeneti szűrő után: 1 kHz – 2 V; 2 kHz – 1,5 V; 6 kHz – $1{,}5\cdot0{,}5=$ **0,75 V**; 7 kHz – $2\cdot H(7)=0$.
**A** ✔ (6 kHz, 3/4 V); **B** ✘ és **D** ✘ (a 2 kHz-es komponens 1,5 V); **C** ✘ (nincs 4,5 kHz-es komponens).

**5.5** $I=1\ \text{nW/m}^2$: $L=10\lg\frac{10^{-9}}{10^{-12}}=$ **30 dB** (**D** ✔, **C** ✘). 100 Hz-en a hallásküszöb kb. 25 dB, tehát a 30 dB-es 100 Hz-es hang alig hallható, hangossága csak néhány phon (**A** ✘ – 1000 phon értelmetlen; **B** ✘ – 30 phon csak 1 kHz-en egyezne a dB-értékkel).

**5.6** 19–25 kHz, $B=6$ kHz, $n\le\lfloor25/6\rfloor=4$: megengedett tartományok $f_s\ge50$; $25\le f_s\le38$; $16{,}67\le f_s\le19$; $12{,}5\le f_s\le12{,}67$ kHz.
**A** ✔ (12,6 kHz); **B** ✘ (11 kHz < 2B = 12 kHz); **C** ✔ (50,75 kHz); **D** ✘ (39 kHz a 38–50 kHz-es tiltott tartományban).

**Ellenőrzés:** 5.4: a 6 kHz-es komponens képe $8-6=2$ kHz. ✔ 5.6: gépi átfedés-vizsgálat (10 Hz-es lépés) – megengedett 12,50–12,66, 16,67–19,00, 25,00–38,00 és 50+ kHz. ✔

---

## 6. feladat – Sith lovagok (Erlang-B)

**Feladat.** Évente 16 jelentkező (Poisson), egyszerre csak 2 Sith lehet, a többi jelentkező Jedinek áll; egy Sith átlagosan negyed évig szolgál. Mekkora a felajánlott forgalom? Mekkora a valószínűsége, hogy valaki Jedinek áll, mert épp ketten voltak?

**Megoldás.** Veszteséges rendszer (a „blokkolt” jelentkező elvész) → Erlang-B.
- $A=\lambda h=16\ \tfrac1{\text{év}}\cdot0{,}25\ \text{év}=$ **4 Erl**.
- $$B(4,2)=\frac{A^2/2!}{1+A+A^2/2!}=\frac{8}{1+4+8}=\frac{8}{13}\approx\mathbf{0{,}615\ (61{,}5\%)}.$$

**Ellenőrzés:** rekurzió: $B_1=\frac{4}{1+4}=0{,}8$; $B_2=\frac{4\cdot0{,}8}{2+4\cdot0{,}8}=\frac{3{,}2}{5{,}2}=0{,}615$. ✔

---

## 7. feladat – TCP torlódásvezérlés

**Feladat.** Az ábra a TCP cwnd méretét mutatja (szegmensben) az idő (RTT) függvényében. Mely intervallumokban működik congestion avoidance fázisban? Mi történhetett a 16. időpillanatban? Milyen reláció áll fenn a cwnd és a másik fél által meghirdetett ablakméret között a 19. időpillanatban?

**Leolvasott értékek:** t = 1…6: 1, 2, 4, 8, 16, 32; t = 7…16: 33, 34, …, 42; t = 17…22: 21, 22, …, 26; t = 23…26: 1, 2, 4, 8.

**Megoldás.**
- **Slow start:** 1–6 (duplázódás) és 23–26. Az ssthresh kezdetben 32 volt (32 után lineáris növekedés).
- **Congestion avoidance: a 6–16. és a 17–22. RTT között** (RTT-nként +1 szegmens).
- **A 16. időpillanatban** 3 duplikált ACK érkezett (egy szegmens elveszett, de a későbbiek megérkeztek): **fast retransmit / fast recovery** (TCP Reno) → ssthresh = cwnd/2 = 21, cwnd = 21, és innen rögtön congestion avoidance folytatódik. (A 22–23. között viszont **időtúllépés** (timeout) történt: cwnd = 1, ssthresh = 13, újra slow start.)
- **A 19. időpillanatban: cwnd ≤ meghirdetett ablak (rwnd).** A küldő mindig a maximálisan elküldhető $\min(\text{cwnd},\text{rwnd})$ szegmenst küldi; a cwnd ekkor 23, és korábban már 42 szegmenst is elküldhetett, tehát a fogadó ablaka nem volt a szűk keresztmetszet – az átvitelt a cwnd korlátozta. **Tisztázva:** ha a meghirdetett ablak kisebb volna a cwnd-nél, a küldő legfeljebb rwnd szegmenst küldhetne, és ez nem nőne RTT-nként tovább; a feladat szerint a küldő mindig a maximumot küldi, és a 19. pillanat körül a forgalom a cwnd-vel együtt egyenletesen nő – tehát a cwnd a szűk keresztmetszet: **cwnd ≤ rwnd**.
