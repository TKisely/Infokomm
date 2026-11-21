---
forras: "VikWiki/Infokomm_vizsga_2009_12_22.pdf (1 oldal, szkennelt)"
tartalom: "Infokommunikáció vizsga, 2009. december 22. – 5 feladat"
jeloles: "Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2009. december 22.

---

## 1. feladat – Sáváteresztő jel digitalizálása

**Feladat.** Valós jel szinuszos komponensei a 20–36 kHz sávban vannak; digitalizáljuk, majd visszaállítjuk.
a) Adja meg az összes „alkalmas” mintavételi frekvenciát. b) Előnyök és hátrányok, ha a szükségesnél sokkal nagyobb $f_s$-t alkalmazunk. c) A visszaállító szűrő karakterisztikája (áteresztő és zárótartomány) $f_s=38$ kHz-nél. d) Hányszorosára nő a kvantálásból eredő zaj teljesítménye, ha a digitalizált jel teljesítményét harmadára csökkentjük?

**Megoldás.**
a) $f_L=20$, $f_H=36$ kHz, $B=16$ kHz, $n\le\lfloor36/16\rfloor=2$:
- $n=1$: $f_s>72$ kHz;
- $n=2$: $\frac{2\cdot36}{2}\le f_s\le\frac{2\cdot20}{1}$ → **36 kHz < f_s < 40 kHz**.
(Szinuszos komponenseknél a határokon szigorú egyenlőtlenség kell: pl. $f_s=40$ kHz-nél a 20 kHz-es komponens éppen $f_s/2$-re esik, $f_s=36$ kHz-nél a 36 kHz-es komponens 0 Hz-re.)

b) **Előnyök:** egyszerűbb, lankásabb élű élsimító és visszaállító szűrők; a kvantálási zaj szélesebb sávban oszlik el, ezért a hasznos sávba kevesebb esik (túlmintavételezési nyereség); kisebb a tartószerv ($\sin x/x$) okozta torzítás.
**Hátrányok:** nagyobb adatsebesség (több tár, nagyobb átviteli sávszélesség), gyorsabb, drágább, több energiát fogyasztó átalakítók és feldolgozás.

c) $f_s=38$ kHz-nél a mintasorozat spektruma (pozitív oldal): **2–18 kHz** (fordított kép), **20–36 kHz** (eredeti), **40–56 kHz** (fordított), 58–74 kHz, …
A visszaállító szűrő **sáváteresztő: áteresztő tartomány 20–36 kHz, zárótartomány 0–18 kHz és 40 kHz felett** (átmeneti sávok: 18–20 és 36–40 kHz).

d) A kvantálási zaj teljesítménye $\Delta^2/12$, a lépcsőmérettől függ, a jelteljesítménytől nem (ha a jel nem lép ki a kvantálási tartományból). **A zajteljesítmény nem változik (1-szeres)**; a jel-zaj viszony $10\lg3=4{,}8$ dB-lel romlik.

**Ellenőrzés:** a) gépi átfedés-vizsgálat (0,25 kHz-es lépés, 30–80 kHz): átlapolódásmentes 36–40 kHz és 72 kHz felett. ✔ c) $-36+38=2$, $-20+38=18$, $-36+76=40$, $-20+76=56$. ✔

---

## 2. feladat – Optikai összeköttetés diszperziója

**Feladat.** 1550 nm, egymódusú szál, hossz 42 km, törésmutató 1,45, kromatikus diszperzió $D=15$ ps/(nm·km), PMD-együttható 0,1 ps/√km, a dióda 20 nm-es sávban sugároz.
a) Kromatikus impulzuskiszélesedés? b) Eredő kiszélesedés? c) Milyen hosszú kiegyenlítő szál kell, ha annak diszperziója −90 ps/(nm·km)? d) Maradék diszperzió, ha a kompenzáló szál PMD-együtthatója az átviteli száléval megegyezik?

**Megoldás.**
a) $\Delta\tau_{kr}=D\cdot\Delta\lambda\cdot L=15\cdot20\cdot42=12\,600\ \text{ps}=$ **12,6 ns**.

b) $\Delta\tau_{PMD}=0{,}1\sqrt{42}=0{,}65$ ps. A két hatás független, négyzetesen összegződik: $\Delta\tau=\sqrt{12600^2+0{,}65^2}\approx$ **12,6 ns** (a PMD itt elhanyagolható).

c) $D_1L_1+D_2L_2=0$ → $L_2=\frac{15\cdot42}{90}=$ **7 km**.

d) A kromatikus diszperzió kiegyenlítődik (0). A PMD véletlen jellegű, nem kompenzálódik, hanem a teljes hosszon négyzetesen adódik össze: $0{,}1\sqrt{42+7}=0{,}1\cdot7=$ **0,7 ps**.

**Ellenőrzés:** c) $15\cdot42=630$ ps/nm, $-90\cdot7=-630$ ps/nm. ✔ d) $\sqrt{0{,}648^2+0{,}265^2}=0{,}700$ ps. ✔
(A törésmutató a feladatban nem szükséges; csak a késleltetéshez kellene: $\tau=nL/c=203\ \mu$s.)

---

## 3. feladat – Kétutas terjedés

**Feladat.** A bázisállomástól 450 m-re, az interferenciazóna határán 20 µW a vett teljesítmény (kétutas, $\Gamma=-1$). Mekkora a vett teljesítmény a) 900 m-en, b) 300 m-en, c) 225 m-en, d) 225 m-en egyutas terjedéssel?

**Megoldás.** $P(d)\propto\frac1{d^2}\sin^2\left(\frac\pi2\cdot\frac{d_0}{d}\right)$, $d_0=450$ m (itt a szinusz argumentuma $\pi/2$).

a) 900 m: $\left(\tfrac{450}{900}\right)^2\sin^2\tfrac\pi4=0{,}25\cdot0{,}5=0{,}125$ → **2,5 µW**.
b) 300 m: $\left(\tfrac{450}{300}\right)^2\sin^2\tfrac{3\pi}4=2{,}25\cdot0{,}5=1{,}125$ → **22,5 µW**.
c) 225 m: $\sin^2\pi=0$ → **0** (interferenciaminimum, kioltás).
d) A határon a kétutas térerősség a szabadtéri kétszerese, teljesítményben négyszerese → szabadtéri 450 m-en 5 µW; 225 m-en $5\cdot(450/225)^2=$ **20 µW**.

**Ellenőrzés (szabadtéri referenciából):** $P_{fs}(450)=5$ µW (d pont). 900 m-en a szabadtéri $5\cdot\frac14=1{,}25$ µW, a kétutas szorzó $4\sin^2\frac\pi4=2$ → 2,5 µW; 300 m-en $5\cdot2{,}25\cdot4\cdot0{,}5=22{,}5$ µW. ✔

---

## 4. feladat – Statisztikus nyalábolás (beszédcsatornák linken)

**Feladat.** 30 beszédfolyam, egyenként 64 kbit/s csúcssebesség, 60% aktivitás. A túlcsordulás valószínűsége (a pillanatnyi sebesség meghaladja $C$-t) éppen 0,25.
a) Egy beszédcsatorna átlagos sebessége? b1) Nő vagy csökken a túlcsordulási valószínűség, ha az aktivitás 50%-ra csökken? b2) Mennyivel lehet csökkenteni a link kapacitását, hogy a túlcsordulási valószínűség ne változzon? c) Mekkora lesz a túlcsordulási valószínűség, ha a csúcssebességet kódolással felére csökkentjük, de a csatornák számát megduplázzuk?

**Megoldás.** A tárgy (2009-es képletlap, „Statisztikus multiplexelés”) a túlcsordulásra a **Hoeffding-féle felső becslést** használja: $n$ független, $0\dots h_i$ közötti sebességű forrás összegére, $M=\sum m_i$ átlaggal
$$P(X>C)\le\exp\!\left(-\frac{2(C-M)^2}{\sum h_i^2}\right),\qquad C_{min}(\gamma)=M+\sqrt{\frac{-\ln\gamma\cdot\sum h_i^2}{2}}.$$
(A képletlapon a $C_{min}$ képletében elírásból − áll; helyesen +, lásd `Infokomm_jegyzet_kepletek_ellenorzott.md`.)

a) $\bar r=0{,}6\cdot64=$ **38,4 kbit/s**.

A link kapacitása: $M=30\cdot38{,}4=1152$ kbit/s, $\sum h_i^2=30\cdot64^2=122\,880$ (kbit/s)², $\gamma=0{,}25$:
$$C=1152+\sqrt{\frac{1{,}386\cdot122\,880}{2}}=1152+292\approx\mathbf{1444\ kbit/s}.$$

b1) Aktivitás 50%: $M'=30\cdot32=960$ kbit/s → $P\le\exp\!\left(-\frac{2\cdot484^2}{122\,880}\right)=e^{-3{,}81}\approx$ **0,022 – csökken**.

b2) A becslés csak $C-M$-től függ, ezért ugyanakkora túlcsordulási valószínűséghez $C'=M'+292=1252$ kbit/s elég: **192 kbit/s-mal csökkenthető** (pontosan az átlag csökkenésével, $30\cdot0{,}1\cdot64$).

c) 60 csatorna, 32 kbit/s: $M=1152$ kbit/s (változatlan), $\sum h_i^2=60\cdot32^2=61\,440$ → $P\le\exp\!\left(-\frac{2\cdot292^2}{61\,440}\right)=e^{-2{,}77}=0{,}25^2\approx$ **0,06** (csökken: több, kisebb forrás jobban kiátlagolódik).

**Ellenőrzés (két független módszerrel):**
- *Gauss-közelítés* ($\mu=Npr$, $\sigma=r\sqrt{Np(1-p)}$, $Q(z)=0{,}25\Rightarrow z=0{,}674$): $C=1152+0{,}674\cdot171{,}7=1268$ kbit/s; b1) 0,04; b2) 190 kbit/s; c) 0,17.
- *Pontos binomiális* számítás a Gauss-féle $C=1268$ kbit/s-mal: b1) $P(K_{30;0{,}5}\ge20)=0{,}049$; c) $P(K_{60;0{,}6}\ge40)=0{,}179$.
A Hoeffding-korlát felső becslés, ezért nagyobb kapacitást ad (1444 > 1268 kbit/s) és kisebb túlcsordulási valószínűségeket; a változások iránya és a b2) eredménye (≈ 190 kbit/s) mindhárom módszerrel egyezik. ✔

---

## 5. feladat – Mobilhálózati egységek

a) **HLR (Home Location Register, honos helyregiszter):** az előfizetők állandó adatbázisa a saját hálózatban: IMSI, MSISDN, előfizetett szolgáltatások, és hogy az előfizető éppen melyik VLR/MSC területén van. Kapcsolat: VLR-ek (helyfrissítés), GMSC (útvonal-lekérdezés), AuC (hitelesítési adatok).

b) **BSC (Base Station Controller, bázisállomás-vezérlő):** több BTS-t vezérel; rádiós erőforrás-kezelés (csatornakiosztás, teljesítményszabályozás), BSC-n belüli handover; az MSC és a BTS-ek között áll.

c) **MSC (Mobile Switching Center, mobilkapcsoló központ):** hívások kapcsolása, hívásfelépítés, MSC-k közötti handover, kapcsolat a vezetékes hálózattal (GMSC-funkció); BSC-khez, VLR-hez, HLR-hez, más MSC-khez kapcsolódik.

d) **BTS (Base Transceiver Station, bázis adó-vevő állomás):** a rádiós interfész (Um) a mobilkészülékek felé: adó-vevők, antennák, moduláció, csatornakódolás, titkosítás egy cellában; a BSC vezérli.

e) **VLR (Visitor Location Register, látogató helyregiszter):** az MSC-hez rendelt ideiglenes adatbázis a területén tartózkodó (saját és barangoló) előfizetőkről: helyterület (LA), TMSI, a HLR-ből átmásolt előfizetői adatok; hívásnál MSRN-t oszt ki.
