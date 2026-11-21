---
forras: "VikWiki/Infokomm_vizsga_2008_01_11.pdf (1 oldal, fénykép)"
tartalom: "Infokommunikáció vizsga, 2008. január 11. – 5 feladat"
jeloles: "[HIÁNYOS ADAT] = a forrásból hiányzó adat; Ellenőrzés: = független ellenőrzés"
---

# Infokommunikáció vizsga – 2008. január 11.

---

## 1. feladat – AM/SSB-SC/LSB

**Feladat.** Adott egy jel frekvenciatartománybeli képe (a táblára felrajzolva). A jel várható értéke zérus.
a) Határozza meg az ezzel előállított AM/SSB-SC/LSB jel spektrumát.
b) Javaslat a modulált jel előállítására (lehetőleg spektrumábrával).
c) Javaslat a demodulálásra.
d) Az AM-SSB előnye és hátránya az AM-DSB-vel szemben.

[HIÁNYOS ADAT: a táblára rajzolt spektrum nincs a lapon; a megoldás általános. Ugyanez a feladat szó szerint szerepel a 2010. január 6-i lapon, ahol a spektrum is megvan (100–500 Hz, vivő 5 kHz) – konkrét számokkal lásd `2010_01_06_kidolgozas.md` 1. feladat. Nem biztos, hogy 2008-ban ugyanez a spektrum volt a táblán.]

**Megoldás.**
a) Ha a moduláló jel spektruma $X(f)$ ($|f|\le B$), és a vivő $f_v$, akkor az alsó oldalsávos, elnyomott vivős jel spektruma csak az $f_v-B\le|f|\le f_v$ tartományban nem nulla: a pozitív frekvenciás oldalon az $X(f)$ **tükrözött** (frekvenciában megfordított) másolata, amelynek „teteje” $f_v$-nél van; vivő nincs, a felső oldalsáv hiányzik.

![](abrak/lsb_altalanos.svg)


b) Két szokásos módszer:
- **Szűrős módszer:** DSB-SC előállítása (szorzó/kiegyenlített modulátor $\cos\omega_vt$-vel), majd a felső oldalsávot levágó, $f_v$ alatti sávot átengedő sávszűrő. Ez akkor valósítható meg, ha a jelnek nincs komponense 0 Hz közelében (mert akkor az oldalsávok között rés van, és a szűrő meredeksége véges lehet). A „várható érték zérus” feltétel erre utal: nincs egyenkomponens.
- **Fázisos (Hilbert-) módszer:** $s(t)=x(t)\cos\omega_vt+\hat x(t)\sin\omega_vt$ (LSB), ahol $\hat x$ a Hilbert-transzformált (–90°-os fázistoló).

c) **Koherens (szinkron) demodulátor:** szorzás $\cos\omega_vt$-vel (a vivő frekvenciáját és fázisát pontosan elő kell állítani – pl. pilotjelből), majd $B$ sávszélességű aluláteresztő. Burkolódemodulátor nem használható.

d) **Előny:** fele akkora sávszélesség ($B$ a $2B$ helyett), a teljes adóteljesítmény hasznos információt hordoz (nincs vivő, nincs redundáns oldalsáv), jobb teljesítményhatásfok.
**Hátrány:** bonyolultabb előállítás (meredek szűrő vagy pontos fázistolás) és vétel (koherens demoduláció kell, frekvenciaeltérés hangmagasság-torzulást okoz), a 0 Hz közeli komponensek nehezen vihetők át.

---

## 2. feladat – Mintavételezés, kvantálási zaj

**Feladat.** A jel spektruma zérus, kivéve a 0–3 kHz és a 7–8 kHz sávot, ahol konstans.
a) Milyen frekvenciával kell mintát venni ahhoz, hogy a jel tökéletesen visszaállítható legyen? Adja meg az összes szóba jövő frekvenciát és a visszaállító szűrő(ke)t.
b) A D/A-ban egy 10 kHz határfrekvenciájú ideális aluláteresztő van. Melyik csökkenti jobban a kvantálási zajt: 24 kHz helyett 192 kHz mintavétel, vagy 12 bit helyett 14 bit?

**Megoldás.**
a) A kétoldalas spektrum: $[-8,-7]\cup[-3,3]\cup[7,8]$ kHz (összesen 8 kHz). A mintavételezett spektrum $\sum_kX(f-kf_s)$; a képek nem fedhetik át egymást.
- **$f_s\ge16$ kHz** (Nyquist, $2\cdot8$ kHz): visszaállítás **aluláteresztővel**, határfrekvencia 8 kHz és $f_s-8$ kHz között.
- **$11\ \text{kHz}\le f_s\le14\ \text{kHz}$**: a 7–8 kHz-es sáv képei a 3–7 kHz-es résbe esnek. Pl. $f_s=12{,}5$ kHz-nél a képek 4,5–5,5 kHz-en és 9,5 kHz felett vannak. Ekkor olyan **kétsávos szűrő** kell (aluláteresztő 3 kHz-ig + sáváteresztő 7–8 kHz), amely a 3–7 kHz-es részt és 8 kHz felett mindent letilt.
- Az alsó határ: $f_s=11$ kHz-nél a $[-8,-7]$ kép $[3,4]$-re kerül (érinti a 3 kHz-et); a felső határ: $f_s=14$ kHz-nél a kép $[6,7]$-re kerül (érinti a 7 kHz-et). A határokon ideális szűrő kellene, a gyakorlatban a tartomány belsejéből érdemes választani.
- $f_s<11$ kHz-nél mindig van átlapolódás (a spektrum teljes kétoldalas szélessége 8 kHz, de a 0–3 kHz-es sáv 6 kHz széles, és a résbe nem fér).

b) A kvantálási zaj teljesítménye $\frac{\Delta^2}{12}$, ami egyenletesen oszlik el a $[-f_s/2,f_s/2]$ sávban; a 10 kHz-es szűrő után ennek $\frac{2B}{f_s}$ része marad.
- $24\to192$ kHz: $\frac{2B}{f_s}$ nyolcadára csökken → **9,0 dB** javulás.
- $12\to14$ bit: $\Delta$ negyedére csökken, $\Delta^2$ tizenhatodára → **12,0 dB** javulás.
**A 14 bites kvantálás csökkent jobban, kb. 3 dB-lel** (16/8 = 2-szeres zajteljesítmény-arány).

**Ellenőrzés:** a) gépi ellenőrzés (az összes $X(f-kf_s)$ eltolt sáv páronkénti átfedésének vizsgálata 10 Hz-es lépésben 1–20 kHz között): átlapolódásmentes tartomány 11,00–14,00 kHz és 16,00 kHz felett. ✔ b) $10\lg8=9{,}03$ dB, $10\lg16=12{,}04$ dB. ✔

---

## 3. feladat – Kétutas terjedés, interferenciazóna

**Feladat.** A bázisállomás antennájának magassága 50 m, frekvencia 900 MHz.
a) Kétutas terjedést feltételezve milyen távolságra lehet az interferenciazóna határa (a legtávolabbi térerősség-maximum)?
b) A vevőantenna magasságát változtatva mekkora a maximális és minimális térerősség aránya? Hogyan módosul, ha a földreflexiós tényező nem −1, hanem −0,9?
c) Mekkora a szakaszcsillapítás az interferenciazóna határán ($\Gamma=-1$)?
Az ismeretlen adatokat jellegzetes értékűnek kell venni, a választást is értékelik.

**Választott adatok:** vevőantenna-magasság $h_R=1{,}5$ m (kézi/autós készülék), $\lambda=c/f=1/3$ m, izotróp antennák.

**Megoldás.**
a) A direkt és a visszavert hullám útkülönbsége $\Delta r\approx\frac{2h_Th_R}{d}$, fáziskülönbsége $\frac{4\pi h_Th_R}{\lambda d}$. $\Gamma=-1$ esetén
$$E=E_0\cdot2\left|\sin\frac{2\pi h_Th_R}{\lambda d}\right|.$$
A legtávolabbi maximum ott van, ahol az argumentum $\pi/2$:
$$d_{max}=\frac{4h_Th_R}{\lambda}=\frac{4\cdot50\cdot1{,}5}{1/3}=\mathbf{900\ m}.$$

b) A két hullám összege $|1+\Gamma e^{-j\varphi}|$.
- $\Gamma=-1$: maximum $1+1=2$, minimum $1-1=0$ → **az arány végtelen** (a minimumhelyeken kioltás van).
- $\Gamma=-0{,}9$: maximum 1,9, minimum 0,1 → **arány 19, azaz 25,6 dB**.

c) A határon a térerősség a szabadtérinek kétszerese, tehát a csillapítás 6 dB-lel kisebb a szabadtéri csillapításnál:
$$L_0=32{,}45+20\lg900_{[\text{MHz}]}+20\lg0{,}9_{[\text{km}]}=90{,}6\ \text{dB}\ \Rightarrow\ L\approx\mathbf{84{,}6\ dB}.$$

**Ellenőrzés:** a) a maximum-feltétel $\Delta r=\lambda/2$: $2\cdot50\cdot1{,}5/900=0{,}1667$ m $=\lambda/2$. ✔ c) $20\lg2=6{,}02$ dB. ✔

---

## 4. feladat – GSM hívásfelépítés barangolásnál (roaming)

**Feladat.** Böbe az „M” magyar szolgáltató előfizetője, Görögországban a „G” hálózatra csatlakozik. Albert (szintén M-előfizető) Magyarországról felhívja.
a) Rajzolja fel sematikusan a két hálózat fontos elemeit (BSC, MSC, VLR, HLR, GMSC) és logikai kapcsolatukat.
b) Sorszámozott nyilakkal jelölje a teljes hívásfelépítés útját és az üzenetek funkcióját.

**Megoldás.**

![](abrak/gsm_roaming_hivas.svg)


**Előzmény (bekapcsoláskor):** Böbe telefonja a G-hálózatban helyfrissítést kér → G-VLR → (nemzetközi jelzéshálózat) → M-HLR: *Update Location*; az HLR elküldi az előfizetői adatokat (*Insert Subscriber Data*), a régi VLR-t törli (*Cancel Location*). Innen az HLR tudja, hogy Böbe a G-hálózat melyik VLR-je alatt van.

**Hívásfelépítés:**
1. Albert MS → BTS → BSC → kiszolgáló MSC (M): hívásfelépítési kérés Böbe hívószámával (MSISDN).
2. Az MSC (az MSISDN alapján) a hívást az M-hálózat **GMSC**-jéhez irányítja.
3. GMSC → M-**HLR**: útvonal-lekérdezés (*Send Routing Information*).
4. HLR → G-**VLR**: barangolási szám kérése (*Provide Roaming Number*).
5. G-VLR → HLR: válasz az ideiglenesen kiosztott **MSRN**-nel.
6. HLR → GMSC: MSRN visszaadása.
7. GMSC → nemzetközi hálózat → G-hálózat **MSC**-je: hívásfelépítés az MSRN-re.
8. G-MSC → G-VLR: Böbe adatainak lekérése (helyterület, TMSI).
9. G-MSC → BSC(k) → BTS(ek): **keresés (paging)** Böbe helyterületén.
10. Böbe MS válaszol, csatornakiosztás, hitelesítés; kicsengetés, majd a beszédkapcsolat létrejön Albert–M-MSC–GMSC–nemzetközi szakasz–G-MSC–BSC–BTS–Böbe útvonalon.

Megjegyzés: a hívott fél a nemzetközi szakaszt fizeti, mert a hívás az M-hálózat GMSC-jén keresztül megy ki („tromboning”).

---

## 5. feladat – Fogalmak

a) **Tükörfrekvencia:** szuperheterodin vevőben az a frekvencia, amely a helyi oszcillátorral keverve szintén a középfrekvenciát adja; a hasznos jellel a helyi oszcillátor frekvenciájára szimmetrikus: felső keverésnél $f_t=f_j+2f_{KF}$.

b) **PAL rendszerű képjel:** színes TV-szabvány (Phase Alternating Line). A kompozit jel a fényességi jelből (Y) és a színkülönbségi jelekből (U, V) áll; U és V kvadratúra-modulációval (QAM) ül a 4,43 MHz-es színsegédvivőn, a V komponens fázisa soronként váltakozik, így a fázishibák két sor átlagolásával kiesnek. 625 sor, 25 kép/s (50 félkép/s), sor- és képszinkron, színszinkron (burst).

c) **OFDM/DMT:** többvivős moduláció; a jelfolyamot sok, egymásra ortogonális (frekvenciatávolság $1/T_s$) alvivőre osztják, IFFT/FFT-vel valósítják meg, ciklikus előtaggal védekeznek a szimbólumközi áthallás ellen. A DMT az alapsávi változat (pl. ADSL), ahol alvivőnként a csatorna jel-zaj viszonyához igazítják a bitszámot (bit-loading).

d) **Módusdiszperzió:** többmódusú optikai szálban a különböző módusok eltérő úton/csoportsebességgel terjednek, ezért egy impulzus kiszélesedik; korlátozza a sávszélesség–távolság szorzatot. (Gradiens indexprofillal csökkenthető, egymódusú szálban nincs.)

e) **Szimbólumközi áthallás (ISI):** a sávkorlátozott csatorna (vagy többutas terjedés) miatt az egyes szimbólumok válaszai átnyúlnak a szomszédos szimbólumidőkbe, és a mintavételi pillanatban zavarják egymást. Nyquist-szűréssel, kiegyenlítéssel csökkenthető.

f) **Emelt koszinusz:** a Nyquist-kritériumot teljesítő (ISI-mentes) szűrőkarakterisztika: a sávszél közelében koszinuszosan lecsengő átvitel, $\alpha$ lekerekítési (roll-off) tényezővel; sávszélessége $\frac{1+\alpha}{2T}$.
