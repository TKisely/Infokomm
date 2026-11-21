---
forras: "VikWiki/Infokomm_vizsga_2008_01_02.pdf (2 oldal, szkennelt)"
tartalom: "Infokommunikáció vizsga, 2008. január 2. – 5 feladat"
jeloles: "Ellenőrzés: = független, más módszerű ellenőrzés"
---

# Infokommunikáció vizsga – 2008. január 2.

A lap megjegyzése: az Arial szedésű kérdések elméletiek, a Courier szedésűek számolásigényesek.

---

## 1. feladat – Mintavételezés, aliasing

**Feladat.** $f_s$ mintavételi frekvenciával egy $f_s+\Delta f$ alapfrekvenciájú periodikus jel mintáit vesszük, majd D/A átalakítóval és $B=f_s/10$ sávhatárú aluláteresztővel visszaállítjuk. Szinuszos bemenetnél a visszaállított jel az eredetivel azonos amplitúdójú szinusz. A mintavétel előtt a jelet $B_I=10f_s$ határfrekvenciájú aluláteresztővel szűrjük.
a) Kimenő amplitúdó és frekvencia szinuszos bemenetnél, $\Delta f<B$?
b) Kimenő jel alakja és frekvenciája szimmetrikus háromszögjelnél, $B/3<\Delta f<B$?
c) Ugyanez háromszögjelnél, $\Delta f<B/10$?
d) Milyen jel-zaj viszony jellemzi a kimenő jelet 16 bites mintáknál és átalakítóknál?

**Megoldás.**
Az $f$ frekvenciájú komponens mintavétel után az $|f-kf_s|$ frekvenciákon is megjelenik; a $B$ sávú kimenő szűrő csak a $[0,B]$-be eső képet engedi át.

a) $f_s+\Delta f$ képe $\Delta f$-nél van, és $\Delta f<B$, tehát átjut. **Kimenet: szinusz, frekvenciája $\Delta f$, amplitúdója az eredetivel azonos (A).**

b) A szimmetrikus háromszögjel csak páratlan felharmonikusokat tartalmaz: $k(f_s+\Delta f)$, $k=1,3,5,\dots$, amplitúdójuk $\frac{8A}{\pi^2k^2}$. A bemenő szűrő ($10f_s$) a $k\le 9$ harmonikusokat engedi át. A $k$-adik harmonikus képe: $k f_s + k\Delta f \to k\Delta f$ (mivel $k\Delta f<0{,}9f_s$, ez nem hajlik át $f_s$ közelébe).
$B/3<\Delta f$ miatt már $3\Delta f>B$, tehát csak az alapharmonikus képe jut át.
**Kimenet: szinusz, frekvenciája $\Delta f$, amplitúdója $8A/\pi^2\approx0{,}81A$** (a háromszögjel alapharmonikusa).

c) $\Delta f<B/10$ esetén $k\Delta f\le 9\Delta f<0{,}9B$, tehát mind az öt átjutó harmonikus ($k=1,3,5,7,9$) képe átjut, változatlan amplitúdóval és fázissal.
**Kimenet: háromszögjel-szerű jel, alapfrekvenciája $\Delta f$** (időben $\frac{f_s+\Delta f}{\Delta f}$-szeresére „széthúzott” bemenet). A 11. harmonikustól felfelé a bemenő szűrő levágta a komponenseket, ezért a csúcsok kissé lekerekednek: a csúcsérték $\frac{8A}{\pi^2}(1+\frac19+\frac1{25}+\frac1{49}+\frac1{81})\approx0{,}96A$.

d) Egyenletes kvantálásnál
$$\frac{S}{N}=\frac{3}{c^2}\,2^{2n}\,\frac{f_s}{2B},$$
ahol $c$ a csúcstényező, $n=16$, és a kimenő szűrő a kvantálási zajnak csak $2B/f_s=1/5$ részét engedi át.
- Teljes kivezérlésű szinusz ($c=\sqrt2$): $1{,}76+6{,}02\cdot16+10\lg5\approx1{,}76+96{,}3+7{,}0\approx$ **105 dB**.
- Háromszögjel ($c=\sqrt3$, $3/c^2=1$): $96{,}3+7{,}0\approx$ **103 dB**.
Szűrés nélkül ($f_s/2B=1$) a szokásos 98 dB, illetve 96 dB volna. **Tisztázva:** a tárgy képlete (gyakorlati képletlap, Marosi-gyakorlat) a $rac{f_s}{2B}$ tényezőt mindig tartalmazza, és a feladat a $B=f_s/10$ kimeneti sávszélességet kifejezetten megadja – a várt válasz tehát a szűrt eset: **≈ 105 dB** (szinusz).

**Ellenőrzés:** a) $f_s=10$ kHz, $\Delta f=0{,}5$ kHz: a 10,5 kHz-es szinusz mintái $\cos(2\pi\cdot10{,}5\,n/10)=\cos(2\pi\cdot0{,}5\,n/10)$, azaz pontosan az 500 Hz-es szinusz mintái. ✔ d) $10\lg(1{,}5\cdot2^{32}\cdot5)=105{,}08$ dB (gépi számítás). ✔

---

## 2. feladat – Szimmetrikus kábel

**Feladat.** $R=50\ \Omega/\text{km}$, $L=1\ \text{mH/km}$, $C=50\ \text{nF/km}$; üzemi sáv 50–500 kHz.
a) Hullámellenállás és csillapítástényező 50 kHz-en.
b) Becslés 500 kHz-re.
c) Ha az erek távolsága nő, $L$ nő, $C$ csökken. Hogyan változik $Z_0$ és $\alpha$? Előnyös-e?
d) Hátrányos következmények, ha az összetartozó erek távol vannak egymástól.

**Megoldás.**
a) $\omega L=2\pi\cdot5\cdot10^4\cdot10^{-3}=314\ \Omega/\text{km}\gg R=50\ \Omega/\text{km}$ (és $G\approx0$), tehát a nagyfrekvenciás közelítés használható:
$$Z_0\approx\sqrt{\frac LC}=\sqrt{\frac{10^{-3}}{50\cdot10^{-9}}}=\sqrt{2\cdot10^4}\approx\mathbf{141\ \Omega},\qquad
\alpha\approx\frac{R}{2Z_0}=\frac{50}{2\cdot141}\approx\mathbf{0{,}177\ Np/km\approx1{,}54\ dB/km}.$$

b) 500 kHz-en a közelítés még pontosabb ($\omega L=3142\ \Omega/\text{km}$). $Z_0\approx141\ \Omega$ marad. A csillapítás viszont a **skin-hatás** miatt nő: $R\sim\sqrt f$, így $R(500\text{ kHz})\approx50\sqrt{10}\approx158\ \Omega/\text{km}$, és
$$\alpha\approx\frac{158}{2\cdot141}\approx\mathbf{0{,}56\ Np/km\approx4{,}9\ dB/km}.$$
(Ha $R$-t frekvenciafüggetlennek tekintjük, $\alpha$ ugyanúgy 0,177 Np/km maradna.) **Tisztázva:** a „becsülje” szó a skin-hatásra utal. Telefonkábel-ereknél (0,4–0,9 mm-es réz) a behatolási mélység 50 kHz-en $\delta=\sqrt{2/(\omega\mu\sigma)}\approx0{,}29$ mm, ami már összemérhető az ér sugarával, így 50–500 kHz között a $R\propto\sqrt f$ közelítés jogos – a becslés: $Z_0\approx141\ \Omega$ változatlan, $\alpha\approx0{,}56$ Np/km ≈ 4,9 dB/km.

c) $Z_0=\sqrt{L/C}$ **nő**, $\alpha\approx R/(2Z_0)$ **csökken** (a $G$-tag elhanyagolható). A csillapítás szempontjából **előnyös** (ugyanez az elve a pupinozásnak: $L$ növelése csökkenti a csillapítást).

d) Az erek által bezárt hurok felülete nagy lesz, ezért
- a külső mágneses terek nagyobb zavarfeszültséget indukálnak (rosszabb zavarvédettség, nagyobb áthallás a szomszédos érpárakkal),
- a vezetékpár jobban sugároz (zavarja a többi érpárt),
- nő a kábel mérete, és romlik a szimmetria (a földhöz képesti kapacitások eltérhetnek), ami a közös módusú zavarok átalakulását okozza.

**Ellenőrzés:** pontos komplex számítás $Z=R+j\omega L$, $Y=j\omega C$ értékekkel: 50 kHz-en $|Z_0|=142{,}3\ \Omega$ ($-4{,}5°$), $\alpha=\mathrm{Re}\sqrt{ZY}=0{,}1762$ Np/km; 500 kHz-en $R=158\ \Omega$-mal $\alpha=0{,}5588$ Np/km. A közelítés hibája < 1%. ✔

---

## 3. feladat – AM-DSB moduláció

**Feladat.** Vivő 60 kHz, moduláló jel 10 kHz-es szinusz, modulációs mélység 20%, a modulált jel csúcsértéke 1,8 V.
a) Rajzolja fel léptékhelyesen a jel legalább 200 µs-os szakaszát.
b) Írja fel az időfüggvényt. Milyen egységben kell az időt behelyettesíteni?
c) Az összetevők frekvenciája és amplitúdója.
d) Demodulálás: blokkvázlat és az elemek specifikációja.

**Megoldás.** A vivős AM: $u(t)=U_v\,(1+m\cos\omega_mt)\cos\omega_vt$. A csúcsérték $U_v(1+m)=1{,}8$ V → $U_v=1{,}8/1{,}2=$ **1,5 V**.

a) 200 µs = 2 moduláló periódus (100 µs) = 12 vivőperiódus (16,7 µs). A burkoló 1,5 V középérték körül **1,2 V és 1,8 V között** szinuszosan változik (100 µs periódussal); a vivő ±burkoló között rezeg.

![](abrak/am_60k_10k_m02.svg)


b) $$u(t)=1{,}5\,\bigl(1+0{,}2\cos(2\pi\cdot10^4\,t)\bigr)\cos(2\pi\cdot6\cdot10^4\,t)\ \text{V},$$ ahol **$t$ másodpercben** értendő (mert a frekvenciák Hz-ben vannak). Ha $t$-t ms-ban akarjuk behelyettesíteni, a frekvenciákat kHz-ben kell írni: $\cos(2\pi\cdot10\,t)$, $\cos(2\pi\cdot60\,t)$.

c) $u(t)=1{,}5\cos\omega_vt+\frac{0{,}2\cdot1{,}5}{2}[\cos(\omega_v-\omega_m)t+\cos(\omega_v+\omega_m)t]$:

| frekvencia | amplitúdó |
|---|---|
| 50 kHz | 0,15 V |
| 60 kHz (vivő) | 1,5 V |
| 70 kHz | 0,15 V |

d) Mivel $m<1$, **burkolódemodulátor** használható: dióda + párhuzamos RC tag, utána egyenáram-leválasztó kondenzátor és 10 kHz-es aluláteresztő.
- RC: $1/f_v\ll RC$ (a vivő szűrése), és a burkoló követéséhez $RC\le\frac{\sqrt{1-m^2}}{\omega_m m}=\frac{0{,}98}{2\pi\cdot10^4\cdot0{,}2}\approx78\ \mu s$. Jó választás pl. $RC\approx40\ \mu s$ (pl. $R=4\ \text{k}\Omega$, $C=10$ nF).
- Alternatíva: koherens (szinkron) demodulátor: szorzó a 60 kHz-es helyi vivővel (vivővisszaállítás, pl. PLL) + 10 kHz-es aluláteresztő.


![](abrak/burkolodetektor.svg)


**Ellenőrzés:** teljesítménymérleg: a komponensek csúcsértékeinek összege $1{,}5+0{,}15+0{,}15=1{,}8$ V, ami egyezik a megadott csúccsal (mindhárom komponens $t=0$-ban egyszerre maximális). ✔

---

## 4. feladat – FM sztereó multiplex jel

**Feladat.** Ismertesse az FM-műsorszórás sztereó multiplex jelének szerkezetét.
a) Blokkvázlat az előállításra.
b) Komponensek, ha a BAL mikrofon 10 kHz-es jelet vesz.
c) Komponensek, ha a JOBB mikrofon 25 kHz-es jelet vesz.

**Megoldás.** A multiplex jel (alapsáv, 0–53 kHz):
- **M = L+R** összegjel: 30 Hz – 15 kHz (monó vevővel kompatibilis),
- **19 kHz-es pilotjel** (a vevőben ebből állítják vissza a 38 kHz-es segédvivőt),
- **S = L−R** különbségjel elnyomott vivős DSB-modulációval a 38 kHz-es segédvivőn: 23–53 kHz.
(Később a 57 kHz-es RDS-segédvivő is megjelent.)

a) L, R → előkiemelés (50 µs) → 15 kHz-es aluláteresztő → mátrix (L+R, L−R) → az L−R ágon kiegyenlített modulátor (szorzó) a 38 kHz-es segédvivővel; a 38 kHz a 19 kHz-es oszcillátor frekvenciakétszerezésével készül (fázishelyesen) → összegző (M + DSB-SC + 19 kHz pilot) → FM-modulátor.

![](abrak/sztereo_kodolo.svg)


b) $L=$ 10 kHz, $R=0$: $M=L$ és $S=L$. Komponensek: **10 kHz** (M), **19 kHz** (pilot), **28 kHz és 48 kHz** ($38\pm10$ kHz, S oldalsávjai).

c) A 25 kHz-es jel a hangfrekvenciás sávon kívül esik, a bemenő **15 kHz-es aluláteresztő kiszűri** → a multiplex jelben csak a **19 kHz-es pilot** marad. (Szűrő nélkül 25 kHz, valamint $38\pm25$ = 13 és 63 kHz jelenne meg; a 13 kHz-es komponens az M-sávba esne, és torzítaná a monó jelet – ezért kell a sávkorlátozás.)

**Ellenőrzés:** b) visszaállítás: $L=\frac{M+S}2$, $R=\frac{M-S}2$; $M=S$ esetén $R=0$, egyezik a feltétellel. ✔

---

## 5. feladat – Fogalmak

a) **Pulse Code Modulation (PCM):** analóg jel digitalizálása mintavételezéssel, kvantálással és bináris kódolással. Távbeszélőben 8 kHz mintavétel × 8 bit (A-törvényű kompanderezés) = 64 kbit/s.

b) **Slip (csúszás):** digitális hálózatban, ha az írási és olvasási órajel nem szinkron, a pufferben (rugalmas tárban) adat vész el vagy ismétlődik. Szabályozott csúszásnál egy teljes keret (125 µs) esik ki vagy duplázódik.

c) **Felajánlott forgalom:** az a forgalom, amelyet a rendszer lebonyolítana, ha nem volna torlódás: $A=\lambda\cdot h$ (hívásintenzitás × átlagos tartási idő), egysége az Erlang.

d) **Tartási idő:** az az idő, ameddig egy hívás egy erőforrást (vonalat, áramkört) lefoglal.

e) **Szekunder központ:** a hierarchikus távbeszélőhálózatban a primer (góc-) központok felett álló tranzitközpont, amely primer körzeteket köt össze (regionális szint), és amelyen keresztül a távolsági forgalom halad. (A magyar analóg távbeszélőhálózat négyszintű volt: helyi központ – primer központ (a körzetszámmal azonosított primer körzet központja) – szekunder központ (több primer körzetet fog össze, regionális tranzit) – tercier/nemzetközi központ. A tárgy átirataiban a fogalom nem szerepel, a meghatározás a szakirodalmi hierarchián alapul.)

f) **Base Station Controller (BSC):** GSM bázisállomás-vezérlő; több BTS-t vezérel, kezeli a rádiós erőforrásokat (csatornakiosztás, teljesítményszabályozás), a BSC-n belüli handovert, és az MSC felé kapcsolódik.

g) **Home Location Register (HLR):** GSM honos helyregiszter; az előfizető állandó adatait (IMSI, MSISDN, előfizetett szolgáltatások, hitelesítési adatok az AuC-vel) és aktuális tartózkodási helyét (melyik VLR/MSC alatt van) tároló adatbázis.
