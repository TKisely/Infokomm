# Tankönyv (LaTeX)

A három példatár (fő, ALL-IN, 5-ösöm) a tankönyvsablon stílusában, LaTeX-forrásként. A meglévő HTML-példatárak (`html/dist`) változatlanok maradtak, ez egy új kimenet ugyanabból az adatból.

| Fájl | Mi van benne |
|---|---|
| `infokomm_tankonyv.tex` | a fő példatár: 2. Mintavételezés és kvantálás, 6. Kódolástechnika (20 feladat) |
| `allin_tankonyv.tex` | az ALL-IN gyűjtemény, 11 fejezet, 104 feladat |
| `otosom_tankonyv.tex` | az „5-ösöm” gyűjtemény, 10 fejezet, 49 feladat |
| `preambulum.tex` | közös stílus: a sablon dobozai (feladat, keresunk, jeloles, elmelet, eredmeny, figyelem, tipp) és egy új `rajz` doboz, színek, TikZ-stílusok |
| `hasznalat.tex` | „Hogyan használd ezt a könyvet” |
| `fejezetek/*.tex` | a fejezetek, generálva |

Egy feladat felépítése: Feladat (forrással), Mit keresünk?, Jelölések ebben a feladatban (jel, jelentés, érték és egység), elméleti dobozok, számozott lépések, Rajz (TikZ-ábra és a kézi rajz pontjai), Eredmény, Ellenőrzés, Tipikus hibák, Javítás.

**Színek.** A feladat által megadott mennyiségek közül legfeljebb öt saját színt kap. A jel a jeltáblában és a képletekben, az érték a behelyettesítésnél ugyanabban a színben jelenik meg, és a behelyettesítő sorok előtt egy „Behelyettesítés:” sor mutatja a párosítást. Egy érték csak akkor színeződik, ha legalább kétjegyű és a feladatban egyetlen mennyiséghez tartozik, hogy ne lehessen félreérthető.

## Generálás és fordítás

A `fejezetek` és a három főfájl generált. Kézzel ne szerkeszd őket, a forrás a `html/data` mappa.

```bash
cd html && node build_tex.js mind
```

```bash
cd Tankonyv && tectonic -X compile infokomm_tankonyv.tex
```

A preambulum motorfüggő: pdflatex alatt T1 és inputenc, xelatex, lualatex és tectonic alatt fontspec (Latin Modern). Pdflatex-hel kétszer kell fordítani a tartalomjegyzék miatt. A PDF-ek csak helyben vannak meg (`.gitignore`).
