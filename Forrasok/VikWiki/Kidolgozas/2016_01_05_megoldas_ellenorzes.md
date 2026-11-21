---
forras: "VikWiki/Megoldas_2016.01.05..pdf (5 oldal; hallgatói („gyezo12”) megoldás a 2016. január 5-i vizsgához)"
tartalom: "A hallgatói megoldás pontról pontra ellenőrzése; a független kidolgozás: 2016_01_05_kidolgozas.md"
jeloles: "✔ = helyes; ⚠ = pontatlan/hiányos; ✘ = hibás"
---

# A 2016. január 5-i vizsga hallgatói megoldásának ellenőrzése

| Feladat | Hallgatói megoldás | Ellenőrzött érték | Ítélet |
|---|---|---|---|
| 1a | $f_s\ge150$ kHz | 150 kHz | ✔ |
| 1b | $75\le f_s\le90$ kHz | 75–90 kHz (és ≥150 kHz) | ✔ |
| 1c | $f_s=75$ kHz (spektrumrajz nincs) | 75 kHz; képek 0–30, 45–75, 75–105, 120–150 kHz | ⚠ rajz hiányzik |
| 2 | $h_R$ felezése +6 dB csillapítás > 3 dB tartalék → nem vehető | a távoli zónára helyes; ha a vevő az interferenciazóna határán volt, csak −3 dB | ⚠ értelmezésfüggő |
| 3a | $A=166{,}67$ Erl („166-nak vettem”) | 166,7 Erl | ✔ (a kerekítés lefelé hibás) |
| 3b | $N=197$ (a 166-os sorból) | **198** (felfelé kell kerekíteni; 197-tel $B=0{,}21\%>0{,}2\%$) | ✘ |
| 3c | 0,84 | 0,84 | ✔ |
| 4a | $G=[10111;\,01011]$, $d_{min}=3$ | helyes | ✔ |
| 4b | $n=5$ (Hamming-korláttal) | 5 (a Hamming-korlát $d_{min}=3$ miatt alkalmazható) | ✔ |
| 4c | súly 3 | 3 | ✔ |
| 5a | $(2+\cos\omega_mt)\cos\omega_vt$; 2 V és 0,5 V | helyes (dBV → effektív → ×√2) | ✔ |
| 5b | $m=0{,}5$ | 0,5 | ✔ |
| 5c | burkolódetektor (csúcsegyenirányító) | elvben igen, de $f_v/f_m=5$ miatt az RC-feltétel ($10\ \mu s\ll RC\le13{,}8\ \mu s$) nem teljesíthető jól → koherens demodulátor a jobb | ⚠ |
| 6a | $P=1$ | 1 (vagy $r^2=2$ a komplex burkolóra) | ✔ |
| 6b | a pontok a döntési határon, „0 zaj engedhető meg, a jel-zaj viszony végtelen” | a zajtartalék nullára csökken – az állítás lényege helyes, a megfogalmazás pontatlan (végtelen jel-zaj viszony *kellene*) | ⚠ |
| 7a | HLR$_\beta$ | HLR$_\beta$ | ✔ |
| 7b | GMSC$_\beta$ | GMSC$_\beta$ | ✔ |
| 7c | HLR$_\alpha$, BTS$_\beta$, BSC$_\beta$, MSC$_\beta$, VLR$_\beta$ | BTS$_\beta$, BSC$_\beta$, MSC$_\beta$ – a HLR és a VLR beszélgetés közbeni mozgásról (handover) nem értesül | ✘ (HLR$_\alpha$, VLR$_\beta$ felesleges) |
| 7d | SMSC$_\beta$ | SMSC$_\beta$ | ✔ |
| 7 +1 | HLR$_\beta$-ban semmi; HLR$_\alpha$-ban csak akkor frissül, ha más MSC területére került | helyes (kiegészítés: IMSI detach/attach a VLR$_\beta$-ben) | ✔ |
| 8a | 8-PSK nem elég (50 MBd) | 8-PSK-hoz $(1+\alpha)\cdot50$ MHz kell → $\alpha\le0{,}44$-nél belefér 72 MHz-be | ⚠ a lekerekítés nélkül nem dönthető el |
| 8b | 16-QAM | 16-QAM (37,5 MBd) | ✔ |
| 8c | nagyobb n → gyengébb zavartűrés | helyes | ✔ |

**Összegzés:** a megoldás nagyrészt helyes; tényleges hiba a 3b (197 helyett 198 vevő) és a 7c (HLR/VLR nem értesül a handoverről); pontatlan/indoklásra szoruló a 2., 5c, 6b és 8a pont.
