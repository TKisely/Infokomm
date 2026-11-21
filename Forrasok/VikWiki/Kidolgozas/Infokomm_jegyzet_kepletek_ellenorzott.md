---
forras: "VikWiki/Infokomm_jegyzet_kepletek.pdf (7 oldal, LaTeX-szedésű hallgatói képletgyűjtemény, „//Norbi”, 2009. január 9.)"
tartalom: "A képletgyűjtemény ellenőrzött, javított változata: minden képlet mellett ítélet, a hibák javítva"
jeloles: "✔ = helyes; ⚠ = pontatlan/kiegészítendő; ✘ = hibás (javítva)"
---

# Infokommunikáció képletgyűjtemény – ellenőrzött változat

Az eredeti szerző maga is jelzi, hogy „semmilyen garanciát nem vállal”. Az alábbiakban a gyűjtemény sorrendjét követem; a javított képleteket a vizsgák kidolgozásaiban (`Kidolgozas/`) ténylegesen használt és ellenőrzött alakban adom meg.

---

## 1. Mintavételezés, kvantálás

| Képlet | Ítélet |
|---|---|
| $\dfrac SN=\dfrac{3}{c^2}\cdot\dfrac{f_s}{2B}\cdot2^{2n}$ ($c$ csúcstényező, szinuszra $c^2=2$; $f_s$ mintavételi frekvencia; $B$ a visszaállító szűrő sávszélessége; $n$ bitszám) | ✔ |
| dB-ben: $\frac SN=10\lg\frac3{c^2}+6{,}02n+10\lg\frac{f_s}{2B}$; szinuszra $1{,}76+6{,}02n$ (+ túlmintavételezési nyereség) | kiegészítés |
| Egyenletes spektrális sűrűség: $s_0=\dfrac{P_{jel}}{2B_{össz}}$ (kétoldalas sűrűség; $B_{össz}$ az egyoldalas sávszélesség, ahol komponens van) | ✔ |

---

## 2. Távvezeték

| Képlet | Ítélet |
|---|---|
| $Z_0=\sqrt{\dfrac{R+j2\pi fL}{G+j2\pi fC}}$ | ✔ (az eredetiben a számlálóban „i” áll „j” helyett – jelölési elírás) |
| $\gamma=\alpha+j\beta=\sqrt{(R+j2\pi fL)(G+j2\pi fC)}\approx\dfrac12\dfrac R{Z_0}+\dfrac12GZ_0+j2\pi f\sqrt{LC}$ | ✔ – a közelítés csak nagy frekvencián ($\omega L\gg R$, $\omega C\gg G$) érvényes, ekkor $Z_0\approx\sqrt{L/C}$ ⚠ |
| $H(f)=e^{-\gamma(f)l}$ | ✔ |
| $a_{sz}=10\lg\frac{P_{be}}{P_{ki}}=\alpha_{dB}\cdot l=\alpha\cdot20\lg e\cdot l$ ($20\lg e=8{,}686$ dB/Np) | ✔ (illesztett lezárásnál) |
| Terjedési sebesség: $v=\omega/\beta\approx1/\sqrt{LC}$ | kiegészítés |
| Közelvégi áthallás: védettség $=a_{NEXT}-\alpha_{dB}l$ | kiegészítés (több vizsgafeladat használja) |

---

## 3. Optikai kábel

| Képlet | Ítélet |
|---|---|
| Módusdiszperzió: „akkor van, ha a magátmérő 5 µm-nél nagyobb”; $w_m=D_m\sqrt l$ [ns/√km] | ⚠ **pontatlan.** A többmódusú terjedés feltétele a normalizált frekvencia $V=\frac{2\pi a}{\lambda}\mathrm{NA}>2{,}405$ – nem egy fix 5 µm-es átmérő (az egymódusú szálak magja ~8–10 µm). A **többmódusú** szál módusdiszperziója rövid szálon $\propto l$, csak erős móduscsatolásnál $\propto\sqrt l$. A $\sqrt l$-es, ps/√km egységű képlet a vizsgafeladatokban az egymódusú szál **polarizációs módusdiszperziójára (PMD)** vonatkozik: $w_p=D_{PMD}\sqrt l$. |
| Kromatikus diszperzió: $w_c=D_c\cdot\Delta\lambda\cdot l$ | ✔ (kompenzálható negatív $D_c$-jű szállal: $D_1l_1+D_2l_2=0$) |
| Eredő: $w=\sqrt{w_m^2+w_c^2}$ | ✔ (független hatások) |
| Optikai sávszélesség: $B_{opt}\approx0{,}44/w$ | ✔ (Gauss-alakú impulzusra) |

---

## 4. Antennák, rádiós terjedés

| Képlet | Ítélet |
|---|---|
| Izotróp: $S_0=\dfrac{P_{be}}{4\pi r^2}$; nyereség $G_T=\dfrac{S_{max}}{S_0}$ | ✔ |
| „A parabolaantenna hatásos felülete megegyezik az alapkörének területével, ha **a hullámhossz az átmérőjének sokszorosa**” | ✘ **fordítva:** ha **az átmérő a hullámhossz sokszorosa** ($D\gg\lambda$). (A valóságban $A_h=\eta\cdot\pi D^2/4$, $\eta\approx0{,}55$–0,7.) |
| $\alpha$ nyílásszögű kúpban: $S=\dfrac{P_{be}}{\pi r^2\sin^2\alpha}\approx\dfrac{P_{be}}{\pi r^2\alpha^2}$ ($\alpha$ a fél nyílásszög, kis szögre) | ✔ |
| $P_R=S\cdot A_h$; $G=\dfrac{4\pi A_h}{\lambda^2}$ | ✔ (adóra és vevőre egyaránt; a Friis-képlet: $P_R=\dfrac{P_TA_TA_R}{\lambda^2r^2}$) |
| Szabadtéri szakaszcsillapítás: $a_{sz}=10\lg\dfrac{P_{be}}{P_R}=20\lg\dfrac{4\pi r}{\lambda}-G_T^{dB}-G_R^{dB}$ | ✔ (gyakorlati alak: $32{,}45+20\lg f_{MHz}+20\lg d_{km}$ dB) |
| Kétutas, $\Gamma=-1$: $|E_R|=2|E_0|\left|\sin\left(\pi\dfrac{2h_Th_R}{r\lambda}\right)\right|$ | ✔ |
| Kiegészítés: interferenciazóna határa (legtávolabbi maximum) $r_0=\dfrac{4h_Th_R}{\lambda}$; távoli zónában $a_{sz}\approx40\lg r-20\lg h_T-20\lg h_R$ (frekvenciafüggetlen) | kiegészítés |
| Nem teljes reflexió: $E_R=E_0+\Gamma_fE_0e^{-j2\pi f\Delta/\lambda}=E_0\left(1+\Gamma_fE_0e^{-j2\pi f\Delta/\lambda}\right)$, $\Delta=2h_Rh_T/r$ | ✘ **két elírás:** a kitevőben nincs $f$, és a zárójelben nincs második $E_0$. Helyesen: $E_R=E_0\left(1+\Gamma_fe^{-j2\pi\Delta/\lambda}\right)$. Max/min arány: $\frac{1+|\Gamma|}{1-|\Gamma|}$. |

---

## 5. Amplitúdómoduláció

| Képlet | Ítélet |
|---|---|
| AM-DSB: $s(t)=(U+x(t))\cos(2\pi ft+\varphi)$; spektrum: $X(f)$ eltolva $\pm f$-re + vivővonal $\pm f$-en | ✔ |
| $m=\dfrac{\max|x(t)|}{U}=\dfrac XU$; $m<1$ esetén csúcsegyenirányítóval demodulálható | ✔ (kiegészítés: a burkolódetektor RC-jére $1/f\ll RC\le\frac{\sqrt{1-m^2}}{2\pi f_mm}$, ami csak $f\gg f_m$ esetén teljesíthető) |
| $\dfrac{\text{hasznos}}{\text{összes}}=\dfrac{P_{jel}}{U^2+P_{jel}}=\dfrac{m^2}{c^2+m^2}$ (szinuszra $\frac{m^2}{2+m^2}$) | ✔ |
| AM-DSB/SC: $s(t)=x(t)\sin(2\pi f+\varphi)$ | ✘ elírás: $s(t)=x(t)\sin(2\pi ft+\varphi)$ (hiányzik a $t$) |
| AM-SSB/SC: szinuszos ($f_0$) modulálásnál USB: $\sin(2\pi(f+f_0)t)$; összetett jelnél minden komponens $f$-fel tolódik, a jelalak nem marad meg | ✔ (LSB-nél $f-f_0$, a spektrum tükröződik) |

---

## 6. Szögmoduláció

| Képlet | Ítélet |
|---|---|
| $s(t)=U\cos(2\pi Ft+m(t)+\varphi)$; $f_p=F+\dfrac1{2\pi}m'(t)$ | ✔ |
| PM: $m(t)\propto$ moduláló jel; FM: $m'(t)\propto$ moduláló jel | ✔ |
| $\Phi_D=\max|m(t)|$, $f_D=\dfrac1{2\pi}\max|m'(t)|$; szinuszos modulálásnál $\Phi_D=f_D/f_m$ | ✔ |
| Kis fázislöketnél ($\Phi_D\lesssim0{,}1$…0,2) $B_v\approx2B$; nagynál $B_v\approx2B(1+\Phi_D)$ és $B_v\approx2(B+f_D)$ (Carson) | ✔ |

---

## 7. Digitális moduláció

| Képlet | Ítélet |
|---|---|
| FSK: $F=\dfrac{f_0+f_1}{2}$, $f_d=\dfrac{|f_0-f_1|}{2}$ | ✔ |
| „Az ideális demodulátor számára nem jelent előnyt, ha $f_d>1/(4T)$; $f_d=1/(4T)$ az MSK” | ⚠ lényegében helyes: koherens vételnél $f_d=1/(4T)$-nél a két jel már ortogonális, ennél nagyobb löket csak sávszélességet pazarol. (Pontosan: a minimális korreláció $h\approx0{,}715$-nél van, ez ~0,8 dB-lel jobb az ortogonálisnál.) Az MSK-hoz folytonos fázis is kell. Nem koherens vételnél a minimális löket $1/(2T)$. |
| ASK, OOK (0 vagy 2 amplitúdó), BPSK (±1) | ✔ |
| Kiegészítés: M-PSK fázistűrése $\pm\pi/M$, amplitúdótűrése elvben korlátlan; ISI-mentes minimális sávszélesség alapsávban $\frac1{2T}$, modulált jelnél $\frac1T$; emelt koszinusznál $(1+\alpha)$-szoros | kiegészítés |

---

## 8. Tömegkiszolgálás

| Képlet | Ítélet |
|---|---|
| $A=\lambda h$ [Erl] (az időegységek egyezzenek) | ✔ |
| Kihasználtság: $a=(1-P_B)\dfrac AN$ | ✔ |
| Tartási idő: $F(x)=P(T<x)=1-e^{-x/h}$ | ✔ |
| Kiegészítés: Erlang-B $P_B=\dfrac{A^N/N!}{\sum_{k=0}^NA^k/k!}$; rekurzió $B_k=\dfrac{AB_{k-1}}{k+AB_{k-1}}$, $B_0=1$ | kiegészítés |

---

## 9. Statisztikus multiplexálás

| Képlet | Ítélet |
|---|---|
| $X=\sum X_i$, $M=\sum m_i$; értelmes, ha $M<C<\sum h_i$ | ✔ |
| Felső becslés (Hoeffding): $P(X>C)\le\exp\left(-\dfrac{2(C-M)^2}{\sum h_i^2}\right)$ | ✔ |
| $C_{min}(\gamma)=M-\sqrt{\dfrac{-\ln\gamma\cdot\sum h_i^2}{2}}$ | ✘ **előjelhiba.** A fenti egyenlőtlenségből $\exp(\dots)=\gamma$ → $C-M=\sqrt{\frac{-\ln\gamma\sum h_i^2}{2}}$, tehát $$C_{min}(\gamma)=M+\sqrt{\frac{-\ln\gamma\cdot\sum_{i=1}^nh_i^2}{2}}.$$ (A mínuszos alak $M$-nél kisebb kapacitást adna, ami a feltétellel – $C>M$ – is ellentmond.) |
| Kiegészítés: Gauss-közelítéssel $C=M+z\sigma$, $\sigma^2=\sum h_i^2p_i(1-p_i)$ (be/ki források), $Q(z)=\gamma$ | kiegészítés (lásd 2009.12.22, 4. feladat) |

**Ellenőrzés (9. pont):** példa: 30 forrás, $h_i=64$ kbit/s, $M=1152$ kbit/s, $\gamma=0{,}25$: a javított képlet $C=1152+\sqrt{1{,}386\cdot30\cdot64^2/2}=1152+292=1444$ kbit/s, ami (felső becslésként) nagyobb a Gauss-közelítés 1268 kbit/s-ánál – konzisztens; a hibás képlet 860 kbit/s-ot adna, ami $M$ alatt van. ✔

---

## Összegzés

Hibás (javítva): parabolaantenna-feltétel (fordítva), nem teljes reflexió képlete (két elírás), DSB/SC időfüggvény (hiányzó $t$), $C_{min}$ előjele. Pontatlan: a módusdiszperzió feltétele és $\sqrt l$-es skálázása (a PMD-vel keverve), az FSK-löketre vonatkozó megjegyzés. A többi képlet helyes.
