---
forras: "VikWiki/Infokommvizsga_2016.01.12._megoldasok.pdf (5 oldal; hallgatói megoldások a 2016. január 12-i vizsgához)"
tartalom: "A hallgatói megoldás pontról pontra ellenőrzése; a független kidolgozás: 2016_01_12_kidolgozas.md"
jeloles: "✔ = helyes; ⚠ = pontatlan/hiányos; ✘ = hibás"
---

# A 2016. január 12-i vizsga hallgatói megoldásának ellenőrzése

| Feladat | Hallgatói megoldás | Ellenőrzött érték | Ítélet |
|---|---|---|---|
| 1a | $H=[1101100;\,1011010;\,0111001]$ | ugyanaz | ✔ |
| 1b | vett szó 0000111 → $s=111$ | $s=(1,1,1)$ = $H$ 4. oszlopa → 4. bit hibás, javítva 0001111 | ✔ (a javítás lépése hiányzik) |
| 1c | 16 kódszó, $d_{min}=3$: 2 jelez, 1 javít | helyes | ✔ |
| 1d | 4 bit (G-nek 4 sora van); kiegészítő Singleton/Hamming-korlátos „bizonyítás” | 4 bit – az indok a G sorainak száma; a korlátos levezetés felesleges és logikailag gyenge (a Hamming-korlát csak felső korlátot ad $k$-ra, $k$-t a G határozza meg) | ✔ / ⚠ |
| 2a | 108,3 MHz | 108,3 MHz | ✔ |
| 2b | 119 MHz | 119,0 MHz | ✔ |
| 2c | 50 Hz–15 kHz összegjel, 19 kHz pilot, 38 kHz ± hangsáv különbségjel, 57 kHz RDS | helyes (szabvány szerint 30 Hz–15 kHz; a 38 kHz-es segédvivő elnyomott) | ✔ |
| 3a | 15 Erl | 15 Erl | ✔ |
| 3b | $e^{-2}=0{,}14$ → 14 hívás | 0,135 → 13–14 | ✔ |
| 3c | N = 28 | 28 | ✔ |
| 3d | 53,57% | 54% | ✔ |
| 3e | 20 kbit/s × 28 = 560 kbit/s → belefér | belefér; a 20 kbit/s fejrészekkel alulbecslés (G.729 + IP/UDP/RTP ≈ 30 kbit/s, G.711 ≈ 80–90 kbit/s), de a következtetés így is helyes | ✔ / ⚠ |
| 4a | felső a moduláló, alsó a modulált | helyes | ✔ |
| 4b | $U_v=6-2=4$ V, $m=0{,}5$ | 0,5 | ✔ |
| 4c | $U_{eff}=3$ V, $P=9$ W | 9 W (1 Ω) | ✔ |
| 4d | $f_m=2{,}5$ kHz, $f_v=50$ kHz | helyes (képről becsülve) | ✔ |
| 4e | burkolódemodulátor (csúcsegyenirányító) | helyes; RC-méretezés hiányzik | ✔ / ⚠ |
| 5 | A = RAND, B = SRES, C = SRES$_{MS}$; felső szürke doboz: **A8**, alsó: **A5** | A, B, C helyes; a felső doboz (a SIM mellett, ebből jön a C = SRES) **A3**, az alsó (ebből jön a Kc) **A8**; az A5 a Kc-t használja a titkosításhoz | A–C ✔, dobozok ✘ |
| 6a | −20 dB/dekád → 10 dB | 10 dB (szabadtéri közelítés) | ✔ |
| 6b | SNR, teremakusztika, visszaverődés, elfedés, Fletcher–Munson görbék | helyes | ✔ |

**Összegzés:** a megoldás jó; egyetlen tényleges hiba az 5. feladat szürke dobozainak azonosítása (A3/A8 helyett A8/A5). Kisebb hiányosságok: 1b (javítás lépései), 4e (méretezés).
