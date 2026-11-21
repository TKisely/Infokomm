---
forras: "VikWiki/Infokomm_vizsga_2008_01_17.pdf (1 oldal, fénykép, kis felbontás – 250 dpi-s nagyítással olvasva)"
tartalom: "Infokommunikáció vizsga, 2008. január 17. – 4 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2008. január 17.

---

## 1. feladat – Sáváteresztő jel mintavételezése

**Feladat.** Egy jel komponensei 60 kHz és 108 kHz között vannak; közvetlenül digitálissá kell alakítani.
a) Melyek a választható mintavételi frekvenciák? (8 p)
b) Milyen típusú és sávszélességű szűrőket alkalmazna ezeknél? (4 p)
c) Válasszon egy célszerű mintavételi frekvenciát, és rajzolja fel a mintasorozat spektrumát! (4 p)
d) Hány bites egyenletes kvantálás kell, ha a c)-beli mintavétel mellett legalább 70 dB kvantálási jel-zaj viszonyt követelünk meg? (4 p)

**Megoldás.**
a) $f_L=60$ kHz, $f_H=108$ kHz, $B=48$ kHz. Sáváteresztő mintavételezés feltétele:
$$\frac{2f_H}{n}\le f_s\le\frac{2f_L}{n-1},\qquad n=1,\dots,\left\lfloor\frac{f_H}{B}\right\rfloor=2.$$
- $n=1$: $f_s\ge216$ kHz (hagyományos Nyquist),
- $n=2$: $\mathbf{108\ kHz\le f_s\le120\ kHz}$.

b) - $108\le f_s\le120$ kHz: a mintavétel előtt **sáváteresztő** (60–108 kHz, 48 kHz sávszélesség) kell, hogy más sávok zaja/jelei ne lapolódjanak be; a visszaállításhoz szintén **60–108 kHz-es sáváteresztő** (az alapsávba eső 0–60 kHz-es képeket le kell tiltani).
- $f_s\ge216$ kHz: elég **aluláteresztő** 108 kHz határfrekvenciával mindkét oldalon (zajszempontból itt is jobb a sáváteresztő).

c) Úgy érdemes választani, hogy a képek közti védősávok egyformák legyenek: az alsó tükrözött kép $[f_s-108,\ f_s-60]$, a következő $[2f_s-108,\ 2f_s-60]$; a rések $120-f_s$ és $2f_s-216$; egyenlők, ha **$f_s=112$ kHz** (8–8 kHz-es védősáv).
A mintasorozat spektruma (pozitív oldal): **4–52 kHz (fordított állású), 60–108 kHz (eredeti), 116–164 kHz (fordított), 172–220 kHz (eredeti), …** – $f_s$ periódussal ismétlődik.

![](abrak/mintavetel_60_108_fs112.svg)


d) Teljes kivezérlésű szinuszos jelet feltételezve: $S/N=1{,}76+6{,}02n\ge70$ dB → $n\ge11{,}34$ → **12 bit**.
(A visszaállító sáváteresztő a zajnak csak $48/56$ részét engedi át, ez +0,7 dB-t ad, nem változtat az eredményen.) **Tisztázva:** a tárgy gyűjteményének megoldása ugyanerre a feladatra (60–108 kHz, 70 dB) szintén a szinuszos $1{,}76+6{,}02n$ képletet használja → 12 bit; ha a csúcstényező meg van adva (pl. 2014.12.15: $c=\sqrt3$), akkor azzal kell számolni.

**Ellenőrzés:** a) gépi ellenőrzés az eltolt sávok átfedésével (0,5 kHz-es lépés, 50–250 kHz): átlapolódásmentes 108–120 kHz és 216 kHz felett. ✔ c) $f_s=112$: $[-108,-60]+112=[4,52]$, $[60,108]$, $[-108,-60]+224=[116,164]$ – az átfedés-mentesség és a 8 kHz-es rések teljesülnek. ✔

---

## 2. feladat – Földi rádió-összeköttetés 900 MHz-en

**Feladat.** Fix adó ($G_T=10$ dB), mozgó vevő ($G_R=3$ dB, $h_R=1{,}66$ m).
a) Mekkora lehet az adóantenna magassága, ha a legtávolabbi térerősség-maximum 1 km-re van? (5 p)
b) Mekkora lehet a maximális távolság, ha az átvitel késleltetése nem haladhatja meg az 50 µs-t? (5 p)
c) $h_T=30$ m. Mekkora a szakaszcsillapítás, ha a vevő a b) pontbeli távolságban van? (10 p)

**Megoldás.** $\lambda=c/f=3\cdot10^8/9\cdot10^8=1/3$ m.

a) A legtávolabbi maximum: $d=\frac{4h_Th_R}{\lambda}$ → $h_T=\frac{d\lambda}{4h_R}=\frac{1000\cdot1/3}{4\cdot1{,}66}\approx\mathbf{50\ m}$.

b) $d=c\cdot\tau=3\cdot10^8\cdot50\cdot10^{-6}=\mathbf{15\ km}$.

c) A töréspont $d_t=4h_Th_R/\lambda=4\cdot30\cdot1{,}66\cdot3\approx598$ m, a 15 km ennél jóval nagyobb, így a sík földes (kétutas) közelítés érvényes:
$$40\lg d-20\lg h_T-20\lg h_R=40\lg15000-20\lg30-20\lg1{,}66=167{,}0-29{,}5-4{,}4\approx133{,}1\ \text{dB}$$
(izotróp antennák között). A tárgyban a **szakaszcsillapítás** $a_{sz}=10\lg\frac{P_{be}}{P_{ki}}$, azaz az antennanyereségeket is tartalmazza ($a_{sz}=20\lg\frac{r^2}{h_Th_R}-G_T-G_R$):
$$a_{sz}=133{,}1-10-3\approx\mathbf{120{,}1\ dB}.$$
(Összehasonlításul: a szabadtéri csillapítás 15 km-en $32{,}45+20\lg900+20\lg15=115{,}1$ dB – a földreflexió miatt 18 dB-lel nagyobb a valódi csillapítás.)

**Ellenőrzés:** c) pontos kétutas számítás $r_1=\sqrt{d^2+(h_T-h_R)^2}$, $r_2=\sqrt{d^2+(h_T+h_R)^2}$, $\Gamma=-1$ értékekkel: $L=133{,}10$ dB. ✔ a) Behelyettesítve: $4\cdot50{,}2\cdot1{,}66\cdot3=1000$ m. ✔

---

## 3. feladat – Szögmoduláció

**Feladat.** A modulátor bemenete $s_m(t)=3\,[\text{V}]\cos(3\pi t_{[\text{ms}]}+2)$, kimenete
$$s_{??}(t)=4\,[\text{V}]\cos\bigl(500\pi t_{[\text{ms}]}+21+5\sin(3\pi t_{[\text{ms}]}+2)\bigr).$$
a) Milyen modulációról van szó? b) A moduláló és a modulált jel amplitúdója? c) Fázis- és frekvencialöket? d) Becsülje meg kétféleképpen a sávszélességet!

**Megoldás.**
a) A pillanatnyi fázis eltérése $5\sin(3\pi t+2)$, ami a moduláló $\cos(3\pi t+2)$ jel **integráljával** arányos. A pillanatnyi frekvencia eltérése tehát a moduláló jellel arányos → **frekvenciamoduláció (FM)**. (PM esetén a fázis maga a koszinusz volna.)

b) Moduláló jel: **3 V**; modulált jel: **4 V** (az FM-jel amplitúdója állandó).

c) Vivő: $500\pi/(2\pi)=250$ kHz (t ms-ban!), moduláló frekvencia $f_m=3\pi/(2\pi)=1{,}5$ kHz.
- **Fázislöket:** $\Delta\varphi=\beta=5$ rad.
- **Frekvencialöket:** $\Delta f=\beta f_m=5\cdot1{,}5=$ **7,5 kHz**.

d) 1. **Carson-szabály:** $B\approx2(\Delta f+f_m)=2(7{,}5+1{,}5)=$ **18 kHz** (a teljesítmény ~98%-a).
2. **Bessel-függvényekkel:** az $n$-edik oldalsávpár amplitúdója $J_n(5)$: $J_6=0{,}131$, $J_7=0{,}053$, $J_8=0{,}018$, $J_9=0{,}006$. Az 1%-os amplitúdókritérium szerint $n=8$ oldalsávpárt kell átvinni: $B=2\cdot8\cdot1{,}5=$ **24 kHz**.
(Harmadik becslés nagy $\beta$-ra: $B\approx2\Delta f=15$ kHz – ez alulbecslés.)

**Ellenőrzés:** $J_n(5)$ értékei numerikus integrálással: $J_0=-0{,}178$, $J_1=-0{,}327$, $J_2=0{,}047$, $J_3=0{,}365$, $J_4=0{,}391$, $J_5=0{,}262$, $J_6=0{,}131$, $J_7=0{,}054$, $J_8=0{,}018$. A Carson-sávba ($n\le6$) eső teljesítmény $J_0^2+2\sum_{n=1}^{6}J_n^2\approx0{,}994$. ✔

---

## 4. feladat – Szuperheterodin FM-vevő

**Feladat.** Szuperheterodin vevő a 87,5–108 MHz-es CCIR FM-sávra, KF = 10,7 MHz.
a) Felső keverésnél milyen sávban kell hangolni a helyi oszcillátort? b) Hová kell hangolni a 94,8 MHz-es (MR2 Petőfi) adóhoz? c) Mi ennek a tükörfrekvenciája? d) Miért jó választás ehhez a sávhoz a 10,7 MHz-es KF?

**Megoldás.**
a) $f_{LO}=f_j+10{,}7$ MHz → **98,2–118,7 MHz**.
b) $f_{LO}=94{,}8+10{,}7=$ **105,5 MHz**.
c) $f_t=f_{LO}+f_{KF}=94{,}8+2\cdot10{,}7=$ **116,2 MHz**.
d) - A sáv szélessége 20,5 MHz $<2f_{KF}=21{,}4$ MHz, így **bármely sávbeli adó tükörfrekvenciája (108,9–129,4 MHz) a műsorszóró sávon kívül esik** – másik FM-adó nem lehet tükör, és a bemeneti előszelektor (87,5–108 MHz) könnyen elnyomja.
- A KF jóval nagyobb a csatorna sávszélességénél (~200 kHz), mégis elég alacsony ahhoz, hogy jó szelektivitású, olcsó (kerámia) szűrők legyenek hozzá; szabványos érték.

**Ellenőrzés:** c) A 116,2 MHz-es jel a 105,5 MHz-es LO-val keverve $116{,}2-105{,}5=10{,}7$ MHz-et ad. ✔
