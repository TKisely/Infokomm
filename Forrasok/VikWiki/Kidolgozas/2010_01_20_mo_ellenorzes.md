---
forras: "VikWiki/Infokomm_vizsga_2010_01_20_mo.pdf (6 oldal, hallgatói/nem hivatalos megoldás a 2010. január 20-i vizsgához)"
tartalom: "A mellékelt megoldás pontról pontra ellenőrzése; a teljes, független kidolgozás: 2010_01_20_kidolgozas.md"
jeloles: "✔ = helyes; ⚠ = pontatlan/hiányos; ✘ = hibás"
---

# A 2010. január 20-i vizsga mellékelt megoldásának ellenőrzése

A megoldás maga is jelzi a bizonytalanságát („nem biztos”, „érdekes…”). Az alábbi táblázat a mellékelt megoldás állításait veti össze a független kidolgozással (`2010_01_20_kidolgozas.md`).

| Feladat | Mellékelt megoldás | Ellenőrzött érték | Ítélet |
|---|---|---|---|
| 1a | $Z_0=238\,e^{-j0{,}39}$ (50 kHz), $203\,e^{-j0{,}12}$ (200 kHz) | $201\,e^{-j0{,}079}$, $200\,e^{-j0{,}020}$ Ω; közelítőleg $\sqrt{L/C}=200$ Ω | ✘ |
| 1b | $\gamma=0{,}1241+j1{,}0077$; $\alpha=1{,}077$ dB/km | $\gamma=0{,}1247+j1{,}576$ (50 kHz); $\alpha=0{,}125$ Np/km = 1,09 dB/km | α ✔, β ✘ |
| 1c | $l\approx40{,}4$ km | $l\approx40{,}0$ km | ✔ (kerekítési eltérés) |
| 1d | $v=2{,}91\cdot10^5$ km/s ($\omega$-t $\alpha_{dB}$-vel osztja) | $v=1/\sqrt{LC}=2\cdot10^5$ km/s | ✘ |
| 2a | 6×6 rács, ±1, ±3, ±5 | ugyanaz | ✔ |
| 2b | „pontosabban megállapíthatók az erősítési és fázishibák” | fő előny: I és Q független PAM-ként modulálható és dönthető, egyszerű küszöbdöntés | ⚠ hiányos |
| 2c | csillapítás 4/5 (−20%), erősítés 4/3 (+33%); szöghiba $\arcsin(1/5)=11{,}5°$ | erősítés/csillapítás ✔; szöghiba: a sarokpont (5,5) a kritikus, **10,5°** | erősítés ✔, fázis ✘ |
| 2d | fázishiba nem változik; erősítéshiba-tűrés 6/7 és 6/5; a módszernek itt nincs értelme ($\sqrt{50}$ = $\sqrt{50}$) | 6/7 és 6/5 ✔; nincs teljesítménynyereség ✔; a fázistűrés kissé javul (10,5° → 10,9°) | ⚠ |
| 3a | 16 kbit/s | 16 kbit/s | ✔ |
| 3b | 200 csomag/s; 91,2 kbit/s | ugyanaz | ✔ |
| 3c | 100 csomag/s; 53,6 kbit/s | ugyanaz (a forrássebesség változatlan 16 kbit/s) | ✔ |
| 4a | felső: 42–54 MHz, alsó: 6–18 MHz; felső a jobb | ugyanaz; indoklás kiegészítendő (relatív hangolási tartomány, LO = KF ütközés alsó keverésnél) | ✔ |
| 4b | $f_{LO}=7{,}5$ MHz | 7,5 MHz | ✔ |
| 4c | tükörfrekvencia 33 MHz | **10,5 MHz** ($10{,}5+7{,}5=18$); 33 MHz nem ad 18 MHz-es KF-et | ✘ |
| 5a | $A\approx10$ Erl, $\lambda=0{,}05$ 1/s | $A=10{,}1$ Erl, $\lambda=0{,}0505$ 1/s ≈ 182/óra | ✔ |
| 5b | (nincs kidolgozva) | ≈ 1,6 hívás/év/ügyfél | hiányzik |
| 5c | 47,6% | 48% | ✔ |
| 5d | $P_B\approx1\%$ (görbéről), foglaltság nincs kiszámolva | $B(10{,}1;17)=1{,}4\%$; foglaltság ≈ $A\cdot B$ ≈ 14% | ⚠ hiányos |

**Összegzés:** a 3. feladat és az 5a/5c, 4a/4b helyes; az 1. feladat hullámellenállása, fázistényezője és terjedési sebessége, a 2c fázistűrés és a 4c tükörfrekvencia hibás; az 5b és 5d hiányos.
