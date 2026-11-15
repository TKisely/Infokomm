// 6. fejezet: Kódolástechnika. Az élő fő példatárból (2026-11-15, 14:53-as változat) visszanyerve, a TeX a KaTeX-annotációkból.
'use strict';
module.exports = {
 "id": "f6",
 "num": "6",
 "title": "Kódolástechnika",
 "lead": "A kódolás négy fajtájából kettővel számolunk: a forráskódolással (mennyire tömöríthető a forrás) és a hibavédő kódolással (hány hibát jelez és javít a kód). Az anyag a Kódolás előadás 12 tábláján alapul, koma E2 jegyzetével és G3, G6 gyakorlatával összevetve. A [bizonytalan] jelölésű részek megerősítésre várnak.",
 "alap": [
  {
   "id": "a6-fajtak",
   "badge": "A1",
   "title": "A kódolás fajtái, egyszerűen",
   "html": "<p>A táblán négy fajta szerepel (tábla 1): <b>tömörítő kódolás</b> (forráskódolás), <b>hibavédő kódolás</b> (ezen belül hibajelző és hibajavító), <b>titkosító kódolás</b>, és külön nyíllal a <b>vonali kódolás</b>.</p><p>Gondolj egy csomagküldésre. A tömörítés a vákuumozás: ugyanaz a tartalom kisebb dobozban. A hibavédő kódolás a buborékfólia: plusz anyag, ami nem tartalom, de megvédi a sérüléstől. A titkosítás a lakat: csak az nyitja ki, akinek kulcsa van. A vonali kódolás a futár menetrendje: nem a tartalomról szól, hanem arról, hogy az adó és a vevő egy ütemre dolgozzon.</p><p>Mire jó? A tömörítő és a hibavédő kódolás ellentétes irányba húz: az egyik elveszi a fölösleget, a másik szándékosan tesz hozzá (koma E2: „a tömörítés kárára további biteket adunk hozzá”). Ezért külön lépésként kezeljük őket.</p><p>A táblán a vonali kódolás előtt nyíl áll, a többi előtt felsorolásjel. Koma jegyzete szerint a vonali kódolás folytonos, a vonalon egy bit hosszát jelzi, és szinkronban tartja az adót és a vevőt, ezért más jellegű, mint a többi.</p>",
   "key": "A fejezet két fajtával számol: a forráskódolással (mennyire lehet tömöríteni) és a hibavédő kódolással (hány hibát lehet jelezni és javítani)."
  },
  {
   "id": "a6-kod",
   "badge": "A2",
   "title": "Kód, kódszó, prefixmentesség",
   "html": "<p>A forrás ABC ($\\mathcal F$) elemei a <b>forrásszimbólumok</b>, a kód ABC elemei a <b>kódszimbólumok</b> (nálunk a 0 és az 1). A kódolás minden forrásszimbólumhoz egy kódszót rendel. <b>A kódszavak összessége a kód</b> (tábla 2). Az $a_i$ szimbólum kódszavának hossza $l_i$ (szóban elhangzott).</p><p>Egy kódtól három dolgot várunk (tábla 1): legyen <b>egyértelműen visszaállítható</b>, <b>veszteségmentes</b> és <b>tömör</b>.</p><p><b>Prefixmentes</b> (koma: prefix kód) az a kód, amelyben egyik kódszó sem eleje (prefixe) egy másiknak. A tábla példája ($01, 001, 0001, \\dots, 1111111$) ilyen: a $01$ nem eleje a $001$ szónak, a $011$ szónak viszont eleje lenne (szóban elhangzott). Az ilyen kód <b>azonnal dekódolható</b>: minden kódszó végén rögtön tudjuk, melyik szimbólum volt (szóban elhangzott).</p><div class=\"fig\"><svg viewBox=\"0 0 560 215\" role=\"img\" aria-label=\"A prefixmentes a, b, c kód bináris fája: minden kódszó levél\"><line class=\"ob\" x1=\"260\" y1=\"30\" x2=\"160\" y2=\"100\"></line><line class=\"ob\" x1=\"260\" y1=\"30\" x2=\"360\" y2=\"100\"></line><line class=\"ob\" x1=\"160\" y1=\"100\" x2=\"100\" y2=\"170\"></line><line class=\"ob\" x1=\"160\" y1=\"100\" x2=\"220\" y2=\"170\"></line><text class=\"tm\" x=\"200\" y=\"58\" text-anchor=\"middle\">0</text><text class=\"tm\" x=\"322\" y=\"58\" text-anchor=\"middle\">1</text><text class=\"tm\" x=\"120\" y=\"132\" text-anchor=\"middle\">0</text><text class=\"tm\" x=\"202\" y=\"132\" text-anchor=\"middle\">1</text><circle class=\"obf\" cx=\"260\" cy=\"30\" r=\"7\"></circle><circle class=\"obf\" cx=\"160\" cy=\"100\" r=\"6\"></circle><circle class=\"acf\" cx=\"360\" cy=\"100\" r=\"9\"></circle><circle class=\"acf\" cx=\"100\" cy=\"170\" r=\"9\"></circle><circle class=\"acf\" cx=\"220\" cy=\"170\" r=\"9\"></circle><text class=\"t\" x=\"360\" y=\"128\" text-anchor=\"middle\">a: 1</text><text class=\"t\" x=\"100\" y=\"198\" text-anchor=\"middle\">b: 00</text><text class=\"t\" x=\"220\" y=\"198\" text-anchor=\"middle\">c: 01</text><text class=\"tm\" x=\"260\" y=\"18\" text-anchor=\"middle\">gyökér</text><text class=\"tm\" x=\"440\" y=\"92\" text-anchor=\"start\">kódszó = levél</text><text class=\"tm\" x=\"440\" y=\"110\" text-anchor=\"start\">belső csomópont</text><text class=\"tm\" x=\"440\" y=\"128\" text-anchor=\"start\">nem lehet kódszó</text><circle class=\"acf\" cx=\"430\" cy=\"88\" r=\"6\"></circle><circle class=\"obf\" cx=\"430\" cy=\"106\" r=\"4\"></circle></svg></div><p>Analógia: a telefonszámok. Ha a 12 és a 123 is érvényes szám lenne, a központ már a 2 után kapcsolna, és a 123 sosem lenne hívható. A telefonszámok ezért prefixmentesek. A bináris fán ez azt jelenti, hogy minden kódszó levél, egyik sem áll egy másik útjában.</p>",
   "key": "A prefixmentesség elégséges, de nem szükséges az egyértelmű megfejthetőséghez. Az $\\{1, 10, 00\\}$ kód egyértelműen megfejthető, de nem azonnal dekódolható (6.4. példa)."
  },
  {
   "id": "a6-hossz",
   "badge": "A3",
   "title": "Átlagos kódszóhossz és a fix hosszú kód",
   "html": "<p>Ha az $a_i$ szimbólum valószínűsége $p_i$, az átlagos kódszóhossz egy forrásszimbólumra:</p>$$L=\\sum_{i=1}^{N} p_i\\, l_i \\quad [\\text{bit/szimbólum}]$$<p>Fix hosszú kódnál minden kódszó egyforma hosszú. $N$ szimbólumhoz annyi bit kell, hogy $2^L \\ge N$ legyen, tehát $L=\\lceil \\log_2 N\\rceil$, és ez mindig ebbe a sávba esik (tábla 3):</p>$$\\log_2 N \\le L < 1+\\log_2 N$$<p>Ha $N$ kettő hatványa, nincs veszteség. Ha eggyel több, majdnem egy egész bitet fizetünk ki: $N=32$ esetén 5 bit, $N=33$ esetén már 6 (6.1. példa).</p><p>A tábla javaslata: kódoljunk szimbólumpárokat. Párból $N^2$ van, egy pár kódszava $\\lceil 2\\log_2 N\\rceil$ bit, és a kerekítés miatti fölösleg két szimbólum között oszlik meg (6.2. példa):</p>$$2\\log_2 N \\le L^{(2)} < 1+2\\log_2 N \\quad\\Longrightarrow\\quad \\log_2 N \\le \\frac{L^{(2)}}{2} < \\frac12+\\log_2 N$$<p>Analógia: a csomagolás. Ha minden tárgy külön dobozba kerül, minden dobozban marad üres hely. Ha kettesével csomagolunk, az üres hely két tárgyra oszlik el, egy tárgyra legfeljebb fele annyi jut.</p>",
   "key": "Az átlagos kódszóhossz mindig egy forrásszimbólumra vonatkozik. Párok kódolásakor $L = L^{(2)}/2$."
  },
  {
   "id": "a6-entropia",
   "badge": "A4",
   "title": "Entrópia: a tömörítés alsó korlátja",
   "html": "<p>Ha a szimbólumok nem egyformán gyakoriak, a gyakoribbak kaphatnak rövidebb kódszót (② változó szóhosszúságú kódszavak, tábla 3). A legjobb elérhető átlagos hosszt az <b>entrópia</b> adja (tábla 5):</p>$$H(\\mathcal F)=\\sum_{i=1}^{N} p_i \\log_2\\frac{1}{p_i}\\quad[\\text{bit/szimbólum}]$$<p>Ha az $a_i$ kódszava kb. $\\log_2(1/p_i)$ hosszú (felfelé kerekítve), akkor (tábla 5):</p>$$H(\\mathcal F) \\le L < 1+H(\\mathcal F)$$<p>Független szimbólumok párjára $H(\\mathcal F^2)=2H(\\mathcal F)$ (tábla 6, 6.5. példa), ezért a felső korlát egy szimbólumra felére csökken:</p>$$H(\\mathcal F) \\le L < \\tfrac12 + H(\\mathcal F)$$<p>Koma jegyzete szerint $k$ szimbólumos csoportokra $H \\le L < 1/k + H$, tehát az entrópia tetszőlegesen megközelíthető, csak egyre drágábban.</p><p>Analógia: a meglepetés. Ha egy esemény szinte biztos, a hír, hogy megtörtént, alig mond újat ($\\log_2(1/p_i)$ kicsi). A ritka esemény híre sokat mond. Az entrópia a hírek átlagos meglepetése bitben, ennél rövidebben átlagosan nem lehet leírni a forrást.</p>",
   "key": "$\\mathrm{ld}=\\log_2$. Az entrópia akkor egyenlő $L$ értékével, ha minden $p_i$ kettő negatív egész hatványa (koma G3/1)."
  },
  {
   "id": "a6-kraft",
   "badge": "A5",
   "title": "Kraft és McMillan: mikor megfejthető egy kód?",
   "html": "<p>Ha a kódszavak hossza $l_1, \\dots, l_N$, mindkét tétel ugyanazt a feltételt írja fel (tábla 4):</p>$$\\sum_{i=1}^{N} 2^{-l_i} \\le 1$$<p><b>McMillan-egyenlőtlenség:</b> ha a kód egyértelműen megfejthető, a feltétel teljesül. Ha tehát az összeg 1 fölött van, a kód biztosan nem egyértelműen megfejthető. <b>Kraft-egyenlőtlenség:</b> ha a feltétel teljesül, létezik ilyen hosszakkal prefixmentes kód (koma E2: akkor és csak akkor).</p><p>Analógia: egy torta. Egy $l$ hosszú kódszó a lehetséges bitsorozatok $2^{-l}$ részét foglalja le (minden vele kezdődő folytatást). Egy 1 bites kódszó a torta felét, egy 2 bites a negyedét viszi. Többet nem lehet szétosztani, mint amennyi torta van.</p>",
   "key": "A feltétel csak a hosszakról szól. Ha teljesül, ezekkel a hosszakkal lehet jó kódot csinálni, de egy konkrét kód ettől még lehet rossz (koma G3/3)."
  },
  {
   "id": "a6-csatorna",
   "badge": "A6",
   "title": "Hibák a csatornán, BSC",
   "html": "<p>Kétféle hiba van (tábla 7). <b>Törlődéses hiba:</b> a vevő nem tud dönteni, nem tudja, 0 vagy 1 jött. <b>Tévesztés:</b> a vevő dönt, de rosszul, $0 \\to 1$ vagy $1 \\to 0$.</p><div class=\"fig\"><svg viewBox=\"0 0 640 250\" role=\"img\" aria-label=\"Zajos kétszintű jel: a harmadik és a negyedik bitnél a zajtüske miatt rossz a döntés\"><line class=\"ob\" x1=\"60\" y1=\"125\" x2=\"595\" y2=\"125\"></line><path class=\"obf\" d=\"M595 125 l-8 -4 v8 z\"></path><line class=\"ob\" x1=\"70\" y1=\"25\" x2=\"70\" y2=\"225\"></line><text class=\"tm\" x=\"58\" y=\"59\" text-anchor=\"end\">+1</text><text class=\"tm\" x=\"58\" y=\"199\" text-anchor=\"end\">−1</text><text class=\"tm\" x=\"592\" y=\"143\" text-anchor=\"middle\">t</text><text class=\"t\" x=\"84\" y=\"22\" text-anchor=\"start\">s(t)</text><path class=\"gr dash\" d=\"M70 55 H195M195 195 H320M320 195 H445M445 55 H570\"></path><line class=\"gr\" x1=\"195\" y1=\"30\" x2=\"195\" y2=\"220\"></line><line class=\"gr\" x1=\"320\" y1=\"30\" x2=\"320\" y2=\"220\"></line><line class=\"gr\" x1=\"445\" y1=\"30\" x2=\"445\" y2=\"220\"></line><path class=\"jl\" d=\"M70.0 55.1L71.3 54.5L72.5 58.2L73.8 57.2L75.0 55.5L76.3 54.9L77.5 58.5L78.8 51.8L80.0 54.2L81.3 55.7L82.5 56.8L83.8 52.6L85.0 53.7L86.3 58.6L87.5 55.0L88.8 57.2L90.0 53.6L91.3 57.9L92.5 54.5L93.8 55.1L95.0 57.7L96.3 58.8L97.5 51.3L98.8 51.1L100.0 58.2L101.3 55.5L102.5 51.2L103.8 57.6L105.0 55.7L106.3 54.6L107.5 53.6L108.8 56.8L110.0 57.8L111.3 50.9L112.5 55.5L113.8 57.2L115.0 54.6L116.3 56.4L117.5 57.9L118.8 52.7L120.0 56.2L121.3 56.3L122.5 58.5L123.8 51.4L125.0 57.3L126.3 51.9L127.5 55.5L128.8 57.6L130.0 54.9L131.3 57.1L132.5 55.0L133.8 57.1L135.0 63.3L136.3 64.9L137.5 66.1L138.8 72.9L140.0 77.5L141.3 79.1L142.5 81.4L143.8 85.9L145.0 86.7L146.3 94.2L147.5 94.0L148.8 92.8L150.0 91.1L151.3 84.3L152.5 83.4L153.8 78.9L155.0 75.7L156.3 71.7L157.5 63.7L158.8 65.7L160.0 62.1L161.3 56.2L162.5 54.2L163.8 52.4L165.0 52.2L166.3 52.4L167.5 53.2L168.8 53.9L170.0 54.6L171.3 59.0L172.5 56.5L173.8 56.2L175.0 57.4L176.3 55.9L177.5 53.4L178.8 53.0L180.0 57.0L181.3 51.2L182.5 59.1L183.8 56.2L185.0 54.3L186.3 55.5L187.5 58.4L188.8 50.9L190.0 55.4L191.3 51.9L192.5 54.3L193.8 55.3L195.0 198.1L196.3 192.5L197.5 191.7L198.8 197.0L200.0 199.0L201.3 197.9L202.5 193.3L203.8 193.3L205.0 193.7L206.3 191.9L207.5 197.3L208.8 192.2L210.0 197.8L211.3 198.9L212.5 198.5L213.8 199.0L215.0 194.7L216.3 192.2L217.5 192.1L218.8 198.0L220.0 195.1L221.3 198.8L222.5 196.9L223.8 195.1L225.0 198.7L226.3 196.2L227.5 197.3L228.8 196.7L230.0 192.6L231.3 198.1L232.5 197.8L233.8 199.2L235.0 194.0L236.3 198.5L237.5 195.8L238.8 198.3L240.0 195.2L241.3 195.7L242.5 199.1L243.8 192.8L245.0 195.4L246.3 193.0L247.5 196.4L248.8 191.4L250.0 193.2L251.3 193.8L252.5 196.9L253.8 196.2L255.0 198.6L256.3 191.8L257.5 198.5L258.8 198.6L260.0 197.6L261.3 196.6L262.5 199.0L263.8 194.2L265.0 195.5L266.3 196.0L267.5 194.7L268.8 191.6L270.0 194.7L271.3 195.6L272.5 198.0L273.8 191.2L275.0 192.7L276.3 193.2L277.5 188.2L278.8 187.8L280.0 186.3L281.3 177.4L282.5 172.5L283.8 170.2L285.0 163.3L286.3 156.2L287.5 151.9L288.8 149.5L290.0 153.9L291.3 153.8L292.5 162.2L293.8 166.8L295.0 176.3L296.3 184.9L297.5 181.9L298.8 188.9L300.0 190.4L301.3 194.1L302.5 191.9L303.8 192.2L305.0 194.8L306.3 195.4L307.5 191.8L308.8 193.1L310.0 198.8L311.3 196.1L312.5 195.3L313.8 190.9L315.0 193.7L316.3 197.9L317.5 193.5L318.8 197.8L320.0 197.5L321.3 194.8L322.5 196.6L323.8 199.0L325.0 191.1L326.3 194.9L327.5 198.9L328.8 195.9L330.0 197.7L331.3 193.7L332.5 197.2L333.8 193.0L335.0 196.6L336.3 191.6L337.5 194.2L338.8 195.9L340.0 192.2L341.3 197.7L342.5 196.3L343.8 195.7L345.0 191.7L346.3 194.4L347.5 198.5L348.8 197.8L350.0 195.1L351.3 197.1L352.5 195.8L353.8 194.9L355.0 196.4L356.3 199.0L357.5 198.7L358.8 193.0L360.0 195.3L361.3 194.5L362.5 191.5L363.8 198.0L365.0 195.1L366.3 196.0L367.5 193.4L368.8 194.5L370.0 190.7L371.3 181.2L372.5 174.0L373.8 172.9L375.0 158.7L376.3 149.7L377.5 137.4L378.8 127.2L380.0 113.8L381.3 109.7L382.5 109.8L383.8 108.6L385.0 112.5L386.3 121.2L387.5 137.0L388.8 144.1L390.0 156.5L391.3 169.6L392.5 180.5L393.8 185.6L395.0 190.7L396.3 188.7L397.5 191.8L398.8 189.7L400.0 196.2L401.3 195.9L402.5 196.3L403.8 197.8L405.0 191.4L406.3 194.0L407.5 192.6L408.8 193.3L410.0 196.9L411.3 194.3L412.5 198.1L413.8 193.2L415.0 191.1L416.3 194.1L417.5 196.4L418.8 196.4L420.0 194.5L421.3 194.4L422.5 198.2L423.8 195.9L425.0 192.3L426.3 193.0L427.5 194.8L428.8 194.8L430.0 194.1L431.3 196.0L432.5 198.5L433.8 198.0L435.0 196.0L436.3 191.5L437.5 192.9L438.8 191.4L440.0 195.4L441.3 191.9L442.5 195.5L443.8 198.5L445.0 51.7L446.3 56.3L447.5 57.1L448.8 57.2L450.0 58.8L451.3 56.2L452.5 56.3L453.8 51.0L455.0 52.4L456.3 54.0L457.5 54.7L458.8 58.8L460.0 55.3L461.3 57.9L462.5 55.1L463.8 56.6L465.0 57.2L466.3 54.8L467.5 54.4L468.8 57.4L470.0 54.3L471.3 53.6L472.5 55.1L473.8 58.4L475.0 59.2L476.3 55.1L477.5 55.3L478.8 59.2L480.0 54.0L481.3 58.4L482.5 58.5L483.8 56.6L485.0 55.6L486.3 53.6L487.5 51.2L488.8 51.9L490.0 58.0L491.3 59.7L492.5 53.2L493.8 53.0L495.0 56.2L496.3 60.4L497.5 67.2L498.8 72.0L500.0 89.7L501.3 99.9L502.5 111.3L503.8 130.0L505.0 137.3L506.3 147.7L507.5 151.2L508.8 142.8L510.0 137.6L511.3 129.3L512.5 110.8L513.8 96.5L515.0 89.8L516.3 77.6L517.5 71.0L518.8 64.0L520.0 62.9L521.3 59.2L522.5 56.1L523.8 55.2L525.0 55.0L526.3 51.4L527.5 58.5L528.8 56.2L530.0 58.5L531.3 58.0L532.5 58.0L533.8 56.4L535.0 58.3L536.3 56.4L537.5 58.3L538.8 55.7L540.0 56.6L541.3 52.3L542.5 55.3L543.8 54.9L545.0 51.7L546.3 53.6L547.5 56.2L548.8 53.0L550.0 55.3L551.3 57.1L552.5 52.6L553.8 57.1L555.0 54.0L556.3 55.6L557.5 55.3L558.8 51.9L560.0 58.3L561.3 55.0L562.5 55.7L563.8 57.3L565.0 52.6L566.3 53.4L567.5 57.5L568.8 53.1L570.0 58.3\"></path><circle class=\"obf\" cx=\"132.5\" cy=\"55.0\" r=\"5\"></circle><text class=\"tm\" x=\"132.5\" y=\"40\" text-anchor=\"middle\">küldött 1</text><text class=\"tm\" x=\"132.5\" y=\"240\" text-anchor=\"middle\">döntés 1</text><circle class=\"obf\" cx=\"257.5\" cy=\"198.5\" r=\"5\"></circle><text class=\"tm\" x=\"257.5\" y=\"40\" text-anchor=\"middle\">küldött 0</text><text class=\"tm\" x=\"257.5\" y=\"240\" text-anchor=\"middle\">döntés 0</text><circle class=\"acf\" cx=\"382.5\" cy=\"109.8\" r=\"5\"></circle><text class=\"tm\" x=\"382.5\" y=\"40\" text-anchor=\"middle\">küldött 0</text><text class=\"t\" x=\"382.5\" y=\"240\" text-anchor=\"middle\" font-weight=\"700\">döntés 1</text><circle class=\"acf\" cx=\"507.5\" cy=\"151.2\" r=\"5\"></circle><text class=\"tm\" x=\"507.5\" y=\"40\" text-anchor=\"middle\">küldött 1</text><text class=\"t\" x=\"507.5\" y=\"240\" text-anchor=\"middle\" font-weight=\"700\">döntés 0</text><text class=\"tm\" x=\"382.5\" y=\"222\" text-anchor=\"middle\">tévesztés</text><text class=\"tm\" x=\"507.5\" y=\"222\" text-anchor=\"middle\">tévesztés</text></svg></div><p>$p_{0,1}$ annak valószínűsége, hogy a küldött 0 helyett 1 érkezik, $p_{1,0}$ fordítva [bizonytalan: az indexek sorrendje a táblán nincs definiálva]. Ha $p_{0,1}=0$, de $p_{1,0}\\ne 0$, a csatorna aszimmetrikus (koma szava). Ha $p_{0,1}=p_{1,0}=p$, a csatorna <b>bináris szimmetrikus csatorna</b> (BSC, Binary Symmetric Channel).</p><p>BSC esetén, ha a bitek egymástól függetlenül romlanak el, $n$ bitből pontosan $k$ hibás valószínűsége binomiális (tábla 7):</p>$$P(k\\ \\text{hiba})=\\binom{n}{k}p^k(1-p)^{n-k}$$<p>Analógia: $n$ feldobás egy erősen cinkelt érmével, ami csak $p$ eséllyel mutat írást. Annak esélye, hogy pontosan $k$ írás jön, az írások lehetséges helyeinek száma szorozva egy ilyen sorozat valószínűségével.</p>",
   "key": "A hibás bitek várható száma $np$. Ha $np \\ll 1$, a hibátlan blokk a legvalószínűbb, és minden további hiba még ritkább: $P(k+1)/P(k)\\approx np/(k+1)$."
  },
  {
   "id": "a6-hamming",
   "badge": "A7",
   "title": "Hamming-távolság és kódtávolság",
   "html": "<p>Két egyforma hosszú bitsorozat <b>Hamming-távolsága</b> az a szám, ahány helyen különböznek. Kiszámolva: a két szót helyenként XOR művelettel összeadjuk, és megszámoljuk az egyeseket (szóban elhangzott). Az egyesek számát súlynak hívjuk, jele $w$ (jelölés: kiegészítés).</p>$$d(\\mathbf a,\\mathbf b)=w(\\mathbf a+\\mathbf b)$$<p>Ez valódi távolság (tábla 8): pozitív (és csak egyforma szavakra nulla), szimmetrikus, és teljesíti a háromszög-egyenlőtlenséget, $d(A,C) \\le d(A,B)+d(B,C)$. Például $A=000$, $B=011$, $C=111$ esetén $3 \\le 2+1$.</p><p>A kód jósága a legközelebbi kódszavak távolsága, a <b>kódtávolság</b> (tábla 9):</p>$$d_{\\min}=\\min_{\\mathbf c_i,\\mathbf c_j\\in\\mathcal C,\\ \\mathbf c_i\\ne\\mathbf c_j} d(\\mathbf c_i,\\mathbf c_j)$$$$\\text{jelezhető hibák: } d_{\\min}-1 \\qquad \\text{javítható hibák: } \\left\\lfloor \\frac{d_{\\min}-1}{2}\\right\\rfloor$$<p>Analógia: városok egy térképen, a kódszavak a városok. Egy hiba egy lépés valamelyik városból. Amíg nem érünk el egy másik városba, látjuk, hogy úton vagyunk (jelzés). Ha a félútnál közelebb maradtunk, egyértelmű, melyik városból indultunk (javítás).</p>",
   "key": "Lineáris kódnál $d_{\\min}$ a nemnulla kódszavak legkisebb súlya, nem kell minden párt végignézni (6.7. példa, kiegészítés)."
  },
  {
   "id": "a6-linearis",
   "badge": "A8",
   "title": "Lineáris blokk-kódok és a szindróma",
   "html": "<p>Az $\\mathbf u$ üzenet $k$ bites, a $\\mathbf c$ kódszó $n$ bites. A műveletek mod 2 értendők: az összeadás XOR, a szorzás AND (tábla 10). A kód lineáris, ha két kódszó összege is kódszó. Mivel $\\mathbf c+\\mathbf c=\\mathbf 0$, a csupa nulla szó mindig kódszó.</p>$$\\mathbf c=\\mathbf u\\,\\mathbf G \\qquad (\\mathbf u: 1\\times k,\\ \\ \\mathbf G: k\\times n,\\ \\ \\mathbf c: 1\\times n)$$<p>A $\\mathbf G$ generátormátrix sorai ($\\mathbf g_1, \\dots, \\mathbf g_k$) a kód bázisa: minden kódszó ezek közül néhánynak az összege. A hibamodell $\\mathbf v=\\mathbf c+\\mathbf e$, ahol $\\mathbf e$ a hibavektor: ahol egyes áll benne, ott a bit átbillen (tábla 10).</p><p>A $\\mathbf H$ mátrix (a szakirodalomban paritásellenőrző mátrix, a táblán a sorai „hibavektorok” néven szerepelnek) olyan, hogy minden kódszóra $\\mathbf c\\,\\mathbf H^{\\mathsf T}=\\mathbf 0$. Ezért a vett szóból számolt <b>szindróma</b> csak a hibától függ (tábla 10):</p>$$\\mathbf s=\\mathbf v\\,\\mathbf H^{\\mathsf T}=(\\mathbf c+\\mathbf e)\\,\\mathbf H^{\\mathsf T}=\\mathbf c\\,\\mathbf H^{\\mathsf T}+\\mathbf e\\,\\mathbf H^{\\mathsf T}=\\mathbf e\\,\\mathbf H^{\\mathsf T}$$<p>Szisztematikus generátormátrixnál (tábla 11) a $\\mathbf H^{\\mathsf T}$ rögtön felírható:</p>$$\\mathbf G=[\\,\\mathbf I_k \\mid \\mathbf B\\,] \\quad\\Longrightarrow\\quad \\mathbf H^{\\mathsf T}=\\begin{bmatrix}\\mathbf B\\\\ \\mathbf I_{n-k}\\end{bmatrix}$$<p>Analógia: a szindróma olyan, mint egy tünetlista. Nem a beteget (a kódszót) írja le, hanem csak a bajt (a hibát). Ugyanaz a hiba bármelyik kódszón ugyanazt a tünetet adja, ezért elég egyetlen táblázat a tünetekről és az okaikról.</p>",
   "key": "Dekódolás (tábla 11): 0) szindrómatábla, $\\mathbf s=\\mathbf e\\mathbf H^{\\mathsf T}$ 1) $\\mathbf s=\\mathbf v\\mathbf H^{\\mathsf T}$ 2) a táblából $\\mathbf s\\to\\hat{\\mathbf e}$ 3) $\\hat{\\mathbf c}=\\mathbf v+\\hat{\\mathbf e}$ 4) $\\hat{\\mathbf c}\\to\\hat{\\mathbf u}$."
  },
  {
   "id": "a6-recept",
   "badge": "A9",
   "title": "Beugró recept: így indulj neki",
   "html": "<ol class=\"recipe\"><li><b>Ismerd fel a típust.</b> „átlagos kódszóhossz, tömör, entrópia”: forráskódolás (A3, A4). „egyértelműen megfejthető, adottak a hosszak”: Kraft és McMillan (A5). „mi a valószínűsége, hogy $k$ hiba”: binomiális (A6). „hány hibát jelez, javít”: kódtávolság (A7). „adott a generátormátrix, dekódold a vett szót”: szindróma (A8).</li><li><b>Írd fel az adatokat</b> mértékegységgel: bit, bit/szimbólum, valószínűség 0 és 1 között.</li><li><b>Hosszaknál</b> mindig felfelé kerekíts: $L=\\lceil\\log_2 N\\rceil$, és egy szimbólumra add meg.</li><li><b>Kraftnál</b> előbb összeadsz ($\\sum 2^{-l_i}$), csak utána mondasz ítéletet. Ha 1 fölött van, a kód rossz. Ha nincs, a konkrét kódot még meg kell nézni.</li><li><b>Szindrómánál</b> a $\\mathbf v\\mathbf H^{\\mathsf T}$ szorzat azoknak a soroknak az összege, ahol $\\mathbf v$ egyes. Utána $\\hat{\\mathbf c}=\\mathbf v+\\hat{\\mathbf e}$, és az üzenetet is olvasd ki.</li><li><b>Ellenőrizd,</b> hogy a javított szó valóban kódszó ($\\hat{\\mathbf c}\\mathbf H^{\\mathsf T}=\\mathbf 0$), és hogy a valószínűségek összege legfeljebb 1.</li></ol>"
  }
 ],
 "elmelet": [
  {
   "id": "e6-forras",
   "badge": "T1",
   "title": "Forráskódolás a táblákon (tábla 1…3)",
   "html": "<p><b>A kódolás fajtái:</b> tömörítő (forrás), hibavédő (hibajelző, hibajavító), titkosító, és nyíllal a vonali kódolás. <b>① Forráskódolás:</b> az $\\mathcal F$ forrás ABC elemei a forrásszimbólumok, a kód ABC elemei a kódszimbólumok. <b>Követelmény:</b> 1) egyértelműen visszaállítható, 2) veszteségmentes, 3) tömör.</p><p><b>Def.:</b> a kódszavak összessége a KÓD. Példa: $a_1\\to01$, $a_2\\to001$, $a_3\\to0001$, …, $a_k\\to00\\dots01$, …, $a_n\\to1111111$. Szóban elhangzott: $a_k$ kódszavának hossza $l_k$, a kód prefixmentes (a $01$ nem prefixe a $001$ szónak, a $011$ szónak viszont az lenne), és az ilyen kód azonnal dekódolható.</p><p><b>Fix hossznál</b> és <b>javítsunk a hatékonyságon!</b> ① A kódszavak forrásszimbólum-párokat jelenítenek meg, ilyen párból $N^2$ darab van. ② Változó szóhosszúságú kódszavak (T2).</p><div class=\"tw\"><table class=\"tb eqt\"><tbody><tr><td class=\"no\">(6.1)</td><td>$$\\#\\mathcal F=N$$</td><td class=\"note\">a forrás ABC elemszáma</td></tr><tr><td class=\"no\">(6.2)</td><td>$$\\log_2 N\\le L<1+\\log_2 N$$</td><td class=\"note\">fix hosszú kód, kb. $\\log_2 N$ bit</td></tr><tr><td class=\"no\">(6.3)</td><td>$$\\log_2 N^2=2\\log_2 N$$</td><td class=\"note\">egy szimbólumpár kódszóhossza</td></tr><tr><td class=\"no\">(6.4)</td><td>$$2\\log_2 N\\le L^{(2)}<1+2\\log_2 N$$</td><td class=\"note\">párok, pl. $N=33$: $N^2=1089$, $L^{(2)}=11$ bit, $L=5{,}5$ bit, „csak 10%” romlás</td></tr></tbody></table></div><p><span class=\"note\">Jelölés: a táblán a forrás ABC jele $\\mathcal F$, a kód ABC jelére nincs jel (koma: $\\mathcal K$). A 2. táblán $a_k$ és $l_k$ áll, a jegyzet többi részén $a_i$ és $l_i$, mert $k$ a hibavédő résznél az üzenet bitszáma. A 3. tábla keretes példájában $N$ áll $L$ helyett, lásd Javítások.</span></p>"
  },
  {
   "id": "e6-megfejt",
   "badge": "T2",
   "title": "Megfejthetőség és entrópia (tábla 4…6)",
   "html": "<p><b>Korlát a minimális átlagos kódszóméretre?</b> ⇒ Egyértelmű megfejthetőség. Példa: $a:1$, $b:10$, $c:0$, majd $c:00$, és egy prefixmentes változat: $a:1$, $b:00$, $c:01$ (6.3. és 6.4. példa).</p><div class=\"tw\"><table class=\"tb eqt\"><tbody><tr><td class=\"no\">(6.5)</td><td>$$\\sum_{i=1}^{N}2^{-l_i}\\le 1$$</td><td class=\"note\">Tétel: McMillan-egyenlőtlenség. Tétel: Kraft-egyenlőtlenség. Pl. $N=3$: $\\tfrac12+\\tfrac14+\\tfrac14=1$</td></tr><tr><td class=\"no\">(6.6)</td><td>$$\\sum_{i=1}^{N}p_i=1,\\quad i=1,2,\\dots,N$$</td><td class=\"note\">a szimbólumok valószínűségei</td></tr><tr><td class=\"no\">(6.7)</td><td>$$L=\\sum_{i=1}^{N}p_i\\,l_i$$</td><td class=\"note\">Cél: legyen tömör a kód, és egyértelműen megfejthető</td></tr><tr><td class=\"no\">(6.8)</td><td>$$\\log_2\\frac1{p_i}\\le l_i<1+\\log_2\\frac1{p_i}$$</td><td class=\"note\">Megoldás, a legjobb: $l_i=\\log_2(1/p_i)$</td></tr><tr><td class=\"no\">(6.9)</td><td>$$H=\\sum_{i=1}^{N}p_i\\log_2\\frac1{p_i}\\le L<1+\\sum_{i=1}^{N}p_i\\log_2\\frac1{p_i}$$</td><td class=\"note\">a kétszer aláhúzott összeg az <b>entrópia</b></td></tr><tr><td class=\"no\">(6.10)</td><td>$$H(\\mathcal F^2)=2H(\\mathcal F)$$</td><td class=\"note\">szimbólumpárok, együttes valószínűség $p_i\\,p_j$, $\\mathrm{ld}=\\log_2$</td></tr><tr><td class=\"no\">(6.11)</td><td>$$2H(\\mathcal F)\\le L^{(2)}<1+2H(\\mathcal F),\\qquad H(\\mathcal F)\\le L^{(1)}<\\tfrac12+H(\\mathcal F)$$</td><td class=\"note\">Tehát. A második sor vége letörölve [bizonytalan: a levezetésből csak $H(\\mathcal F)$ lehet]</td></tr></tbody></table></div><p><span class=\"note\">Megjegyzés: a táblán $l_i=\\log_2(1/p_i)$ áll. Ez csak akkor egész, ha $p_i$ kettő negatív egész hatványa. Általában $l_i=\\lceil\\log_2(1/p_i)\\rceil$ (koma), erre teljesül a (6.8) egyenlőtlenség, és a hosszakra a Kraft-feltétel is, mert $2^{-l_i}\\le p_i$. $L^{(1)}$ az egy szimbólumra, $L^{(2)}$ a párra jutó átlagos hossz. A (6.10) levezetésében a táblán elírás van, lásd Javítások és 6.5. példa.</span></p>"
  },
  {
   "id": "e6-hiba",
   "badge": "T3",
   "title": "Hibák, csatorna, kódtávolság (tábla 7…9)",
   "html": "<p><b>Hibavédő kódolás.</b> Törlődéses hiba: 0? 1? Tévesztés: $0\\to1$, $1\\to0$ (döntés). A tábla ábráján a zajos jelben két tévesztés látszik, ezt rajzolja újra az A6 ábrája.</p><div class=\"tw\"><table class=\"tb eqt\"><tbody><tr><td class=\"no\">(6.12)</td><td>$$p_{0,1}=0,\\qquad p_{1,0}\\ne0$$</td><td class=\"note\">aszimmetrikus csatorna (koma szava) [bizonytalan: a táblán nincs neve]</td></tr><tr><td class=\"no\">(6.13)</td><td>$$p_{0,1}=p_{1,0}=p$$</td><td class=\"note\">BSC</td></tr><tr><td class=\"no\">(6.14)</td><td>$$P(0)=(1-p)^n\\cong0{,}9048$$</td><td class=\"note\">Példa: $n=1000$ bit, $p=10^{-4}$</td></tr><tr><td class=\"no\">(6.15)</td><td>$$P(1)=\\binom n1p\\,(1-p)^{n-1}\\cong0{,}0905$$</td><td class=\"note\"></td></tr><tr><td class=\"no\">(6.16)</td><td>$$P(2)=\\binom n2p^2(1-p)^{n-2}\\cong0{,}0045$$</td><td class=\"note\">a táblán befejezetlen („≅ 0,0…”), az érték a független szkriptből</td></tr></tbody></table></div><p><b>Dúsítsuk:</b> a $k$ bites üzenetek ($2^k$ darab) helyett $n$ bites szavakat küldünk, ezek a kódszavak, a kódszavak halmaza a kód. A $2^n$ lehetséges szóból csak $2^k$ kódszó, a többi érvénytelen. Ha érvénytelen szó érkezik, hiba történt.</p><div class=\"fig\"><svg viewBox=\"0 0 640 215\" role=\"img\" aria-label=\"Dúsítás: a 4 üzenetből 4 kódszó lesz a 32 lehetséges ötbites szó között\"><circle class=\"acf\" cx=\"60\" cy=\"80\" r=\"7\"></circle><text class=\"tm\" x=\"60\" y=\"104\" text-anchor=\"middle\">00</text><circle class=\"acf\" cx=\"110\" cy=\"80\" r=\"7\"></circle><text class=\"tm\" x=\"110\" y=\"104\" text-anchor=\"middle\">01</text><circle class=\"acf\" cx=\"60\" cy=\"130\" r=\"7\"></circle><text class=\"tm\" x=\"60\" y=\"154\" text-anchor=\"middle\">10</text><circle class=\"acf\" cx=\"110\" cy=\"130\" r=\"7\"></circle><text class=\"tm\" x=\"110\" y=\"154\" text-anchor=\"middle\">11</text><text class=\"t\" x=\"85\" y=\"40\" text-anchor=\"middle\">üzenetek</text><text class=\"tm\" x=\"85\" y=\"190\" text-anchor=\"middle\">2ᵏ = 4 darab</text><line class=\"ob\" x1=\"160\" y1=\"105\" x2=\"230\" y2=\"105\"></line><path class=\"obf\" d=\"M232 105 l-9 -4.5 v9 z\"></path><text class=\"tm\" x=\"195\" y=\"95\" text-anchor=\"middle\">dúsítás</text><circle class=\"acf\" cx=\"270\" cy=\"60\" r=\"8\"></circle><text class=\"tm\" x=\"270\" y=\"81\" text-anchor=\"middle\">00000</text><circle class=\"obf\" cx=\"318\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"366\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"414\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"462\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"510\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"558\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"606\" cy=\"60\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"270\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"318\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"366\" cy=\"94\" r=\"2.5\"></circle><circle class=\"acf\" cx=\"414\" cy=\"94\" r=\"8\"></circle><text class=\"tm\" x=\"414\" y=\"115\" text-anchor=\"middle\">01011</text><circle class=\"obf\" cx=\"462\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"510\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"558\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"606\" cy=\"94\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"270\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"318\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"366\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"414\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"462\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"510\" cy=\"128\" r=\"2.5\"></circle><circle class=\"acf\" cx=\"558\" cy=\"128\" r=\"8\"></circle><text class=\"tm\" x=\"558\" y=\"149\" text-anchor=\"middle\">10110</text><circle class=\"obf\" cx=\"606\" cy=\"128\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"270\" cy=\"162\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"318\" cy=\"162\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"366\" cy=\"162\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"414\" cy=\"162\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"462\" cy=\"162\" r=\"2.5\"></circle><circle class=\"acf\" cx=\"510\" cy=\"162\" r=\"8\"></circle><text class=\"tm\" x=\"510\" y=\"183\" text-anchor=\"middle\">11101</text><circle class=\"obf\" cx=\"558\" cy=\"162\" r=\"2.5\"></circle><circle class=\"obf\" cx=\"606\" cy=\"162\" r=\"2.5\"></circle><text class=\"t\" x=\"438\" y=\"30\" text-anchor=\"middle\">az összes n bites szó</text><text class=\"tm\" x=\"438\" y=\"200\" text-anchor=\"middle\">2ⁿ = 32 szó, ebből 4 kódszó, a többi érvénytelen</text></svg></div><p><span class=\"note\">A tábla jobb oldali rácsában két kódszó külön áll, négy egymás mellett [bizonytalan: nem hangzott el, hogy ez a túl közeli, rossz esetet mutatja].</span></p><p><b>Hasonlóság, távolság:</b> Hamming-távolság (helyenként XOR, szóban elhangzott). Pozitív, szimmetrikus, eleget tesz a háromszög-egyenlőtlenségnek. <b>A kód jósága:</b> a legközelebbi kódszavak távolsága. $\\mathbf c=(c_1,c_2,\\dots,c_n)$, $\\mathcal C$ a kód maga, $d(\\mathbf c_1,\\mathbf c_2)$ a két kódszó távolsága.</p><div class=\"tw\"><table class=\"tb eqt\"><tbody><tr><td class=\"no\">(6.17)</td><td>$$d_{\\min}=\\min_{\\mathbf c_i,\\mathbf c_j\\in\\mathcal C,\\ \\mathbf c_i\\ne\\mathbf c_j}d(\\mathbf c_i,\\mathbf c_j)$$</td><td class=\"note\">a kódtávolság [a felirat takarva, valószínű alakja]</td></tr><tr><td class=\"no\">(6.18)</td><td>$$d_{\\min}-1$$</td><td class=\"note\">jelezhető hibák száma [takarva: „hibajelzés”]</td></tr><tr><td class=\"no\">(6.19)</td><td>$$\\left\\lfloor\\frac{d_{\\min}-1}{2}\\right\\rfloor$$</td><td class=\"note\">javítható hibák száma [takarva: „hibajavítás”]</td></tr></tbody></table></div>"
  },
  {
   "id": "e6-linearis",
   "badge": "T4",
   "title": "Lineáris blokk-kódok és szindróma (tábla 10…12)",
   "html": "<p><b>Kódolás:</b> $\\mathbf u\\to\\mathbf c\\in\\mathcal C$, $k$ bitből $n$ bit. <b>Hibamodell:</b> $\\mathbf c\\to\\mathbf v(\\mathbf c,\\mathbf e)$. <b>Dekódolás:</b> $\\mathbf v\\to\\hat{\\mathbf c}\\in\\mathcal C\\to\\hat{\\mathbf u}$ (a 10. táblán kalap nélkül $\\mathbf u$ áll, a 11. táblán már $\\hat{\\mathbf u}$).</p><p><b>Lineáris blokk-kódok.</b> Elemi műveletek mod 2 a $\\{0,1\\}$ elemhalmazon: $+$ (XOR), $\\times$ (AND). <b>Lineáris kód:</b> $\\mathcal C$ lineáris tér, ha $\\mathbf c_1,\\mathbf c_2\\in\\mathcal C$, akkor $\\mathbf c_1+\\mathbf c_2\\in\\mathcal C$. $\\mathbf c_1+\\mathbf c_1=\\mathbf 0$, ezért $\\mathbf 0\\in\\mathcal C$. <b>A generátormátrix elemei:</b> $\\mathbf g_1,\\mathbf g_2,\\dots,\\mathbf g_k$.</p><div class=\"tw\"><table class=\"tb eqt\"><tbody><tr><td class=\"no\">(6.20)</td><td>$$\\mathbf c=\\mathbf u\\,\\mathbf G\\qquad (1\\times n)=(1\\times k)(k\\times n)$$</td><td class=\"note\">a táblán: $n$, $k$, $k\\times n$</td></tr><tr><td class=\"no\">(6.21)</td><td>$$\\mathbf v=\\mathbf c+\\mathbf e$$</td><td class=\"note\">pl. $\\mathbf c=101110$, $\\mathbf e=001001$, $\\mathbf v=100111$</td></tr><tr><td class=\"no\">(6.22)</td><td>$$\\mathbf s=\\mathbf v\\,\\mathbf H^{\\mathsf T}=(\\mathbf c+\\mathbf e)\\,\\mathbf H^{\\mathsf T}=\\mathbf c\\,\\mathbf H^{\\mathsf T}+\\mathbf e\\,\\mathbf H^{\\mathsf T}=\\mathbf e\\,\\mathbf H^{\\mathsf T}$$</td><td class=\"note\">$\\mathbf c\\mathbf H^{\\mathsf T}=\\mathbf 0$, a $\\mathbf H$ sorai $\\mathbf h_1,\\dots,\\mathbf h_{n-k}$</td></tr><tr><td class=\"no\">(6.23)</td><td>$$\\mathbf G=[\\,\\mathbf I_k\\mid\\mathbf B\\,]\\quad\\Longrightarrow\\quad\\mathbf H^{\\mathsf T}=\\begin{bmatrix}\\mathbf B\\\\\\mathbf I_{n-k}\\end{bmatrix}$$</td><td class=\"note\">Segít, ha $\\mathbf G$ … [a sor vége kilóg a képből, koma szerint: szisztematikus]</td></tr><tr><td class=\"no\">(6.24)</td><td>$$\\mathbf v\\,\\mathbf H^{\\mathsf T}=\\mathbf 0:\\ \\text{kódszó},\\qquad \\mathbf s\\ne\\mathbf 0:\\ \\text{hiba van}$$</td><td class=\"note\"></td></tr><tr><td class=\"no\">(6.25)</td><td>$$\\hat{\\mathbf c}+\\hat{\\mathbf e}=\\mathbf v\\ \\to\\ \\hat{\\mathbf u}$$</td><td class=\"note\">dekódolás</td></tr></tbody></table></div><ul class=\"recipe\" style=\"list-style:none;padding-left:4px\"><li><b>0)</b> szindrómatábla: $\\mathbf s=\\mathbf e\\,\\mathbf H^{\\mathsf T}$</li><li><b>1)</b> $\\mathbf v_i\\,\\mathbf H^{\\mathsf T}=\\mathbf s_i$</li><li><b>2)</b> dekódoló tábla: $\\mathbf s_i\\to\\mathbf e_i$</li><li><b>3)</b> $\\hat{\\mathbf c}=\\mathbf v-\\mathbf e$ (dekódolás, mod 2 ugyanaz, mint $\\mathbf v+\\mathbf e$)</li><li><b>4)</b> $\\hat{\\mathbf c}\\to\\hat{\\mathbf u}$ (a táblán fordított nyíl áll, lásd Javítások). $\\hat{\\mathbf c}$ csak becsült kódszó, ebből kell még az üzenet (szóban elhangzott).</li></ul><p><span class=\"note\">Megjegyzések: a táblán a $\\mathbf h_1,\\dots,\\mathbf h_{n-k}$ vektorok „hibavektorok” néven szerepelnek, de a jegyzetben a hibavektor csak $\\mathbf e$, hogy egy szó egy dolgot jelentsen. A $\\mathbf H$ mátrix a szakirodalomban paritásellenőrző mátrix [bizonytalan: az előadó elnevezése nem ismert]. A $\\mathbf c\\,\\mathbf H^{\\mathsf T}=\\mathbf 0$ oka $\\mathbf G\\,\\mathbf H^{\\mathsf T}=\\mathbf 0$, ez a táblán nem szerepel (koma: a $\\mathbf h_i$ vektorok a $\\mathbf G$ sorai által kifeszített térre merőleges teret alkotnak). A táblán a vektorokat egy, a mátrixokat két aláhúzás jelöli, a jegyzetben félkövér kis- és nagybetű.</span></p>"
  },
  {
   "id": "e6-jeloles",
   "badge": "T5",
   "title": "Jelölések és szóhasználat",
   "html": "<div class=\"tw\"><table class=\"tb\"><thead><tr><th>Jel</th><th>Jelentés</th><th>Megjegyzés</th></tr></thead><tbody><tr><td>$\\mathcal F$, $N$</td><td>forrás ABC és elemszáma</td><td>tábla</td></tr><tr><td>$a_i$, $l_i$, $p_i$</td><td>szimbólum, kódszavának hossza, valószínűsége</td><td>a 2. táblán $a_k$, $l_k$</td></tr><tr><td>$L$, $L^{(2)}$</td><td>átlagos kódszóhossz szimbólumonként, illetve páronként</td><td>$L^{(1)}=L=L^{(2)}/2$</td></tr><tr><td>$H(\\mathcal F)$</td><td>entrópia, bit/szimbólum</td><td>dőlt $H$, nem azonos a félkövér $\\mathbf H$ mátrixszal</td></tr><tr><td>$\\mathrm{ld}$</td><td>$\\log_2$</td><td>tábla 6</td></tr><tr><td>$p$</td><td>a bitek hibavalószínűsége (BSC)</td><td>index nélkül, $p_i$ a szimbólumok valószínűsége</td></tr><tr><td>$p_{0,1}$</td><td>0 küldve, 1 véve</td><td>[bizonytalan: az indexek sorrendje]</td></tr><tr><td>$\\mathbf u,\\mathbf c,\\mathbf v,\\mathbf e,\\mathbf s$</td><td>üzenet, kódszó, vett szó, hibavektor, szindróma</td><td>táblán egy aláhúzás</td></tr><tr><td>$\\mathbf G$, $\\mathbf H$, $\\mathbf B$</td><td>generátormátrix, paritásellenőrző mátrix, a szisztematikus alak jobb oldali része</td><td>táblán két aláhúzás</td></tr><tr><td>$\\mathcal C$</td><td>a kód, a kódszavak halmaza</td><td>táblán $C$</td></tr><tr><td>$k$, $n$</td><td>az üzenet és a kódszó bitszáma</td><td></td></tr><tr><td>$d$, $d_{\\min}$, $w$</td><td>Hamming-távolság, kódtávolság, súly (egyesek száma)</td><td>$w$: kiegészítés</td></tr></tbody></table></div><div class=\"tw\"><table class=\"tb\"><thead><tr><th>Szó (előadó)</th><th>Más forrásban</th><th>Jelentés</th></tr></thead><tbody><tr><td>prefixmentes kód</td><td>prefix kód (koma)</td><td>egyik kódszó sem eleje egy másiknak</td></tr><tr><td>azonnal dekódolható kód</td><td></td><td>minden kódszó végén rögtön dönthető, melyik szimbólum volt</td></tr><tr><td>egyértelműen visszaállítható, megfejthető</td><td>egyértelműen visszafejthető (koma)</td><td>minden bitsorozatnak legfeljebb egy felbontása van</td></tr><tr><td>törlődéses hiba, tévesztés</td><td></td><td>a vevő nem dönt, illetve rosszul dönt</td></tr><tr><td>kódtávolság</td><td>$d_{\\min}$</td><td>a legközelebbi kódszavak Hamming-távolsága</td></tr><tr><td>szindróma</td><td>szindrómavektor (koma)</td><td>$\\mathbf s=\\mathbf v\\mathbf H^{\\mathsf T}$</td></tr></tbody></table></div>"
  }
 ],
 "ex": [
  {
   "id": "p6_01",
   "num": "6.1",
   "title": "Fix hosszú kód: 32 és 33 szimbólum",
   "src": "Kódolás előadás, tábla 3 (kép 2268) · koma E2 · azonosító: p6_01",
   "tags": [
    "beugro",
    "javitas"
   ],
   "task": "<p>Egy forrás $N=32$, egy másik $N=33$ különböző szimbólumot ad ki. Mindkettőt fix hosszú bináris kóddal kódoljuk. Hány bites kódszó kell, és hány százalékkal hosszabb ez az elméleti $\\log_2 N$ értéknél?</p>",
   "ad": [
    "$N_1=32$ szimbólum",
    "$N_2=33$ szimbólum",
    "bináris kód, fix kódszóhossz"
   ],
   "ker": [
    "$L_1$, $L_2$ [bit/szimbólum]",
    "a romlás százalékban"
   ],
   "miert": [
    [
     "Miért $\\log_2 N$ az elméleti érték?",
     "Mert $L$ biten $2^L$ különböző szó írható fel. Ahhoz, hogy $N$ szimbólum mind külön szót kapjon, $2^L \\ge N$ kell, vagyis $L \\ge \\log_2 N$."
    ],
    [
     "Miért kell felfelé kerekíteni?",
     "Mert bitből csak egészet lehet küldeni. Ha $\\log_2 N$ nem egész, a következő egész bitszám kell, különben valamelyik szimbólumnak nem jut szó."
    ],
    [
     "Miért pont a 33 a rossz eset?",
     "Mert $33 = 2^5+1$: egyetlen szimbólum miatt kell a 6. bit, és az általa nyert újabb 32 szóból csak egy kell."
    ]
   ],
   "elm": [
    [
     "Fix hosszú kód.",
     "$L$ bit $2^L$ szót ad, ezért (6.2):",
     "L=\\lceil\\log_2N\\rceil,\\qquad \\log_2N\\le L<1+\\log_2 N"
    ]
   ],
   "lv": [
    {
     "t": "A szükséges bitszám 32 szimbólumra",
     "s": "Megkeressük a legkisebb $L$ értéket, amelyre $2^L\\ge N$.",
     "m": [
      [
       "definíció",
       "2^{L}\\ge N",
       "minden szimbólumnak külön szó jusson"
      ],
      [
       "behelyettesítés",
       "2^{5}=32\\ge 32",
       ""
      ],
      [
       "számérték",
       "L_1=5\\ \\text{bit}",
       "$\\log_2 32=5$ egész, nincs veszteség"
      ]
     ]
    },
    {
     "t": "A szükséges bitszám 33 szimbólumra",
     "s": "Ugyanez a feltétel, de most az 5 bit már kevés.",
     "m": [
      [
       "behelyettesítés",
       "2^{5}=32<33\\le 64=2^{6}",
       "5 biten egy szimbólum kimaradna"
      ],
      [
       "átalakítás",
       "\\log_2 33=\\frac{\\ln 33}{\\ln 2}",
       "áttérés természetes alapú logaritmusra"
      ],
      [
       "számérték",
       "\\log_2 33\\approx 5{,}044",
       ""
      ],
      [
       "számérték",
       "L_2=\\lceil 5{,}044\\rceil=6\\ \\text{bit}",
       ""
      ]
     ]
    },
    {
     "t": "A romlás",
     "s": "Összevetjük a tényleges hosszt az elméleti értékkel.",
     "m": [
      [
       "definíció",
       "\\text{romlás}=\\frac{L-\\log_2N}{\\log_2N}",
       ""
      ],
      [
       "számérték",
       "\\frac{6-5{,}044}{5{,}044}\\approx 0{,}189=18{,}9\\,\\%",
       "az elméleti értékhez képest"
      ],
      [
       "átalakítás",
       "\\frac{6-5}{5}=0{,}2=20\\,\\%",
       "a 32 szimbólumos esethez képest, így adja a tábla"
      ]
     ]
    },
    {
     "t": "Ellenőrzés a korláttal",
     "s": "A (6.2) korlát mindkét esetben teljesül.",
     "m": [
      [
       "ellenőrzés",
       "5\\le 5<6,\\qquad 5{,}044\\le 6<6{,}044",
       ""
      ]
     ]
    }
   ],
   "fix": "A táblán (3. tábla, jobb oldali keret) „$N=32\\to N=5$” és „$N=33\\to N=6$” áll. A nyíl jobb oldalán a kódszóhossz van, helyesen $L=5$ és $L=6$. Az oktató a táblán nem javította.",
   "ered": [
    "L_1=5\\ \\text{bit},\\qquad L_2=6\\ \\text{bit},\\qquad \\text{romlás}\\approx 19\\,\\%\\ \\ (\\text{kb. }20\\,\\%)"
   ],
   "chk": [
    "Mértékegység: bit/szimbólum, egész szám, ahogy fix hosszú kódnál kell.",
    "Határeset: $N=2^m$ esetén nincs romlás, $N=2^m+1$ esetén a legnagyobb.",
    "Nagyságrend: 6 bit 64 szót ad, ebből 33 kell, a kapacitás fele kihasználatlan. Ez a romlás oka."
   ],
   "hib": [
    "$L=\\log_2 33\\approx 5{,}04$ bitet írnak, pedig fix hossznál csak egész bit lehet.",
    "A romlást rossz alapra számolják. A tábla 20%-a az 5 bithez, a 19% a $\\log_2 33$ értékhez viszonyít. Írd le, mihez viszonyítasz."
   ],
   "calc": "Angol ábécé, 26 betű: log2 26 = 4,700, L = 5 bit, romlás (5 − 4,700)/4,700 = 6,4%.\nDecimális számjegyek, 10 szimbólum: log2 10 = 3,322, L = 4 bit, romlás 20,4%.",
   "du": [
    [
     "6.2. példa",
     "ugyanez a 33 szimbólum párokba szervezve, a romlás a felére csökken"
    ],
    [
     "A3",
     "a fix hosszú kód korlátja"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 3",
       "#e6-forras"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ],
    [
     "Gyakorlat",
     [
      [
       "G3 Kódolás (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_02",
   "num": "6.2",
   "title": "Szimbólumpárok kódolása: 33 szimbólum",
   "src": "Kódolás előadás, tábla 3 (kép 2269, 2270) · koma E2 · azonosító: p6_02",
   "tags": [
    "beugro"
   ],
   "task": "<p>Egy forrás 33 különböző szimbólumot ad ki. A szimbólumait párosával kódoljuk, fix hosszú kóddal. Hány bites egy pár kódszava, mennyi az egy szimbólumra jutó átlagos kódszóhossz, és mennyi most a romlás?</p>",
   "ad": [
    "$N=33$",
    "párok kódolása fix hosszú kóddal"
   ],
   "ker": [
    "$L^{(2)}$ [bit/pár]",
    "$L$ [bit/szimbólum]",
    "a romlás"
   ],
   "miert": [
    [
     "Miért segít a párosítás?",
     "A felfelé kerekítés miatti veszteség (kevesebb mint 1 bit) most egy kódszóra jut, de a kódszó két szimbólumot visz. Egy szimbólumra így kevesebb mint fél bit veszteség jut."
    ],
    [
     "Miért $N^2$ szimbólumpár van?",
     "Mert az első helyre $N$, a másodikra is $N$ szimbólum kerülhet, és minden kombináció előfordulhat."
    ],
    [
     "Miért osztunk kettővel a végén?",
     "Mert az átlagos kódszóhossz egy forrásszimbólumra vonatkozik, a pár kódszava pedig kettőt hordoz."
    ]
   ],
   "elm": [
    [
     "Párok száma.",
     "Minden kombináció külön pár:",
     "\\#\\mathcal F^2=N^2"
    ],
    [
     "Párok kódszóhossza.",
     "(6.4):",
     "2\\log_2N\\le L^{(2)}<1+2\\log_2 N"
    ]
   ],
   "lv": [
    {
     "t": "A párok száma",
     "s": "Megszámoljuk, hány különböző szimbólumpár lehet.",
     "m": [
      [
       "definíció",
       "\\#\\mathcal F^2=N^2",
       ""
      ],
      [
       "számérték",
       "33^2=1089",
       ""
      ]
     ]
    },
    {
     "t": "A pár kódszavának hossza",
     "s": "A legkisebb kettőhatványt keressük, amely legalább 1089.",
     "m": [
      [
       "behelyettesítés",
       "2^{10}=1024<1089\\le 2048=2^{11}",
       ""
      ],
      [
       "számérték",
       "L^{(2)}=11\\ \\text{bit}",
       "$2\\log_2 33\\approx 10{,}09$ felfelé kerekítve"
      ]
     ]
    },
    {
     "t": "Egy szimbólumra jutó hossz",
     "s": "A pár két szimbólumot visz, ezért kettővel osztunk.",
     "m": [
      [
       "átalakítás",
       "L=\\frac{L^{(2)}}{2}",
       ""
      ],
      [
       "számérték",
       "L=\\frac{11}{2}=5{,}5\\ \\text{bit}",
       ""
      ]
     ]
    },
    {
     "t": "A romlás",
     "s": "Összevetjük az elméleti $\\log_2 33\\approx5{,}044$ bittel és a fix 5 bittel.",
     "m": [
      [
       "számérték",
       "\\frac{5{,}5-5{,}044}{5{,}044}\\approx 0{,}090=9{,}0\\,\\%",
       ""
      ],
      [
       "átalakítás",
       "\\frac{5{,}5-5}{5}=0{,}1=10\\,\\%",
       "így adja a tábla: „csak 10%” romlás"
      ]
     ]
    },
    {
     "t": "A korlát egy szimbólumra",
     "s": "A (6.4) korlátot kettővel osztjuk.",
     "m": [
      [
       "átalakítás",
       "\\log_2N\\le L<\\tfrac12+\\log_2N",
       ""
      ],
      [
       "ellenőrzés",
       "5{,}044\\le 5{,}5<5{,}544",
       "teljesül"
      ]
     ]
    }
   ],
   "ered": [
    "L^{(2)}=11\\ \\text{bit/pár},\\qquad L=5{,}5\\ \\text{bit/szimbólum},\\qquad \\text{romlás}\\approx 9\\,\\%"
   ],
   "chk": [
    "Mértékegység: a pár kódszava bit/pár, az átlag bit/szimbólum.",
    "Határeset: ha $N^2$ kettő hatványa, a romlás nulla.",
    "Nagyságrend: 11 bit 2048 szót ad, ebből 1089 kell. A kihasználatlan rész egy szimbólumra vetítve kisebb, mint 6 bitnél."
   ],
   "hib": [
    "A 11 bitet adják meg végeredménynek, pedig az egy párra vonatkozik.",
    "Azt hiszik, a párosítás mindig javít. Itt javít, de $N=32$ esetén nincs mit javítani."
   ],
   "calc": "Hármasával: 33³ = 35 937, 2^15 = 32 768 < 35 937 ≤ 65 536 = 2^16.\nL(3) = 16 bit, L = 16/3 = 5,333 bit, romlás (5,333 − 5,044)/5,044 = 5,7%.",
   "du": [
    [
     "6.1. példa",
     "ugyanez a forrás szimbólumonként"
    ],
    [
     "6.5. példa",
     "ugyanez a gondolat entrópiával: $H(\\mathcal F^2)=2H(\\mathcal F)$"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 3",
       "#e6-forras"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_03",
   "num": "6.3",
   "title": "McMillan-egyenlőtlenség: az a, b, c kód",
   "src": "Kódolás előadás, tábla 4 (kép 2273) · koma E2 · azonosító: p6_03",
   "tags": [
    "beugro"
   ],
   "task": "<p>Három szimbólum kódja: $a \\to 1$, $b \\to 10$, $c \\to 0$. a) Egyértelműen megfejthető a kód? Bontsuk fel a 10101010 sorozatot. b) Mi változik, ha $c \\to 00$?</p>",
   "ad": [
    "$l_a=1$, $l_b=2$, $l_c=1$ (első változat)",
    "$l_c=2$ (második változat)",
    "vett sorozat: 10101010"
   ],
   "ker": [
    "$\\sum 2^{-l_i}$ mindkét változatra",
    "a 10101010 felbontásai"
   ],
   "miert": [
    [
     "Miért elég összeadni a $2^{-l_i}$ tagokat?",
     "Mert a McMillan-egyenlőtlenség szerint minden egyértelműen megfejthető kód hosszaira $\\sum 2^{-l_i}\\le 1$. Ha az összeg nagyobb, a kód biztosan rossz, és ehhez magukat a kódszavakat meg sem kell nézni."
    ],
    [
     "Miért nem elég, ha az összeg legfeljebb 1?",
     "Mert a feltétel csak a hosszakról szól. Azt mondja meg, hogy ilyen hosszakkal lehet jó kódot csinálni, de egy konkrét kód ettől még lehet rossz."
    ],
    [
     "Miért pont a 10101010 a jó próba?",
     "Mert benne a $10$ kódszó és az $a\\,c$ sorozat (1, majd 0) betűre ugyanaz. Ahol ez a kétféle olvasat lehetséges, ott a kód kétértelmű."
    ]
   ],
   "elm": [
    [
     "McMillan-egyenlőtlenség.",
     "Egyértelműen megfejthető kódra (6.5):",
     "\\sum_{i=1}^{N}2^{-l_i}\\le 1"
    ],
    [
     "Kraft-egyenlőtlenség.",
     "Ha a feltétel teljesül, létezik ilyen hosszú prefixmentes kód (A5).",
     null
    ]
   ],
   "lv": [
    {
     "t": "Az összeg az első változatra",
     "s": "Kiszámoljuk a McMillan-összeget a hosszakból.",
     "m": [
      [
       "tétel",
       "\\sum 2^{-l_i}=2^{-1}+2^{-2}+2^{-1}",
       "McMillan"
      ],
      [
       "számérték",
       "\\tfrac12+\\tfrac14+\\tfrac12=1{,}25>1",
       "nem teljesül"
      ]
     ]
    },
    {
     "t": "Következtetés",
     "s": "Ha a feltétel sérül, a kód nem lehet egyértelműen megfejthető.",
     "m": [
      [
       "tétel",
       "1{,}25>1\\ \\Longrightarrow\\ \\text{nem egyértelműen megfejthető}",
       ""
      ]
     ]
    },
    {
     "t": "Kétértelmű sorozat",
     "s": "Konkrétan is megmutatjuk: a 10101010 többféleképp bontható fel.",
     "m": [
      [
       "behelyettesítés",
       "10\\,|\\,10\\,|\\,10\\,|\\,10 = b\\,b\\,b\\,b",
       ""
      ],
      [
       "behelyettesítés",
       "1\\,|\\,0\\,|\\,1\\,|\\,0\\,|\\,1\\,|\\,0\\,|\\,1\\,|\\,0=a\\,c\\,a\\,c\\,a\\,c\\,a\\,c",
       ""
      ],
      [
       "számérték",
       "2^4=16\\ \\text{felbontás}",
       "mind a négy $10$ lehet $b$ vagy $a\\,c$"
      ]
     ]
    },
    {
     "t": "A javított változat",
     "s": "A táblán a $c$ kódszava $00$ lett, így $l_3=2$.",
     "m": [
      [
       "behelyettesítés",
       "2^{-1}+2^{-2}+2^{-2}=\\tfrac12+\\tfrac14+\\tfrac14=1\\le 1",
       "a tábla sora"
      ],
      [
       "tétel",
       "\\text{a feltétel teljesül}",
       "a Kraft-tétel szerint létezik ilyen hosszú prefixmentes kód"
      ]
     ]
    },
    {
     "t": "Prefixmentes kód ugyanezekkel a hosszakkal",
     "s": "A tábla jobb szélén: $a\\to1$, $b\\to00$, $c\\to01$.",
     "m": [
      [
       "ellenőrzés",
       "1,\\ 00,\\ 01:\\ \\text{egyik sem eleje a másiknak}",
       "azonnal dekódolható"
      ]
     ]
    }
   ],
   "ered": [
    "\\{1,10,0\\}:\\ \\sum 2^{-l_i}=1{,}25>1,\\qquad \\{1,10,00\\}\\ \\text{és}\\ \\{1,00,01\\}:\\ \\sum 2^{-l_i}=1"
   ],
   "chk": [
    "A 16 felbontást a független szkript számolta, minden lehetséges darabolást végignézve.",
    "Határeset: ha minden kódszó 1 bites, legfeljebb 2 szimbólum fér el ($2\\cdot\\tfrac12=1$).",
    "Sardinas és Patterson tesztje (kiegészítés) szerint az első kód nem, a második és a harmadik egyértelműen megfejthető."
   ],
   "hib": [
    "A feltétel teljesülését a kód helyességének hiszik. Az $\\{1,10,00\\}$ kód nem az összegtől jó, hanem a szerkezetétől: bár az $1$ eleje a $10$-nek, a $00$ miatt mindig csak egyféleképpen bontható fel, csak nem azonnal.",
    "Elfelejtik, hogy a McMillan-feltétel csak szükséges: ha teljesül, a konkrét kódot még külön meg kell vizsgálni."
   ],
   "du": [
    [
     "6.4. példa",
     "a javított $\\{1,10,00\\}$ kód dekódolása"
    ],
    [
     "koma G3/3",
     "a „Pisti kód”: a hosszak jók, a kód mégsem prefixmentes"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 4",
       "#e6-megfejt"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ],
    [
     "Gyakorlat",
     [
      [
       "G3 Kódolás (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_04",
   "num": "6.4",
   "title": "Egyértelmű, de nem azonnal dekódolható kód",
   "src": "Kódolás előadás, tábla 4 (kép 2273) · koma E2 (javítva) · azonosító: p6_04",
   "tags": [
    "nehez",
    "javitas"
   ],
   "task": "<p>A kód: $a\\to1$, $b\\to10$, $c\\to00$. A vett sorozat: 1011110000001. Dekódold! Azonnal dekódolható a kód?</p>",
   "ad": [
    "kódszavak: $1$, $10$, $00$",
    "vett sorozat: $1011110000001$ (13 bit)"
   ],
   "ker": [
    "a dekódolt szimbólumsorozat",
    "azonnal dekódolható a kód?"
   ],
   "miert": [
    [
     "Miért nem azonnal dekódolható?",
     "Mert az $1$ kódszó eleje a $10$ kódszónak. Egy egyes után még nem tudjuk, hogy kész $a$ jött, vagy egy $b$ első bitje. Ezt csak a következő bitek döntik el, néha sok bittel később."
    ],
    [
     "Akkor miért mégis egyértelmű?",
     "Mert a kód visszafelé olvasva prefixmentes: a kódszavak megfordítva $1$, $01$, $00$, és ezek közül egyik sem eleje a másiknak. A sorozatot hátulról olvasva minden lépésben biztosan dönthetünk (kiegészítés, a táblán nem szerepel)."
    ],
    [
     "Miért érdemes a végéről kezdeni?",
     "Mert hátulról nézve a kód azonnal dekódolható, előlről nem. A felbontás ezért egyértelmű, csak előlről nem látszik rögtön."
    ]
   ],
   "elm": [
    [
     "Prefixmentes kód.",
     "Egyik kódszó sem eleje egy másiknak, ekkor azonnal dekódolható (A2).",
     null
    ],
    [
     "Egyértelmű megfejthetőség.",
     "Minden bitsorozatnak legfeljebb egy felbontása van.",
     null
    ]
   ],
   "lv": [
    {
     "t": "Hátulról olvasva",
     "s": "A sorozat végén $1$ áll. Ez csak $a$ lehet, mert $b=10$ nullára végződik.",
     "m": [
      [
       "behelyettesítés",
       "\\dots 0\\,|\\,1 \\ \\Rightarrow\\ a",
       ""
      ],
      [
       "behelyettesítés",
       "\\dots 00\\,|\\,00\\,|\\,00\\,|\\,1 \\ \\Rightarrow\\ c\\,c\\,c\\,a",
       "hat nulla páronként: három $c$"
      ]
     ]
    },
    {
     "t": "A maradék eleje",
     "s": "Maradt $101111$. A végén álló egyesek egyenként $a$, mert utánuk nincs nulla, ami $b$ vége lehetne.",
     "m": [
      [
       "behelyettesítés",
       "10\\,|\\,1\\,|\\,1\\,|\\,1\\,|\\,1",
       "az elején álló $10$ csak $b$ lehet"
      ],
      [
       "számérték",
       "b\\,a\\,a\\,a\\,a",
       ""
      ]
     ]
    },
    {
     "t": "A csapda előlről olvasva",
     "s": "Ha a hatodik és a hetedik bitet (a táblán felülvonással jelölve) $b$ kódszónak olvassuk, zsákutcába jutunk.",
     "m": [
      [
       "behelyettesítés",
       "10\\,|\\,1\\,|\\,1\\,|\\,1\\,|\\,\\overline{1\\,0}\\,|\\,000001",
       "a 6. és 7. bit $b$ lenne"
      ],
      [
       "ellenőrzés",
       "00\\,|\\,00\\,|\\,01\\ ?",
       "a végén $01$ marad, ez nem kódszó"
      ],
      [
       "számérték",
       "b\\,a\\,a\\,a\\,a\\,c\\,c\\,c\\,a",
       "az egyetlen jó felbontás"
      ]
     ]
    },
    {
     "t": "Azonnal dekódolható?",
     "s": "Megnézzük a prefixfeltételt.",
     "m": [
      [
       "definíció",
       "1\\ \\text{eleje a}\\ 10\\ \\text{kódszónak}",
       "a kód nem prefixmentes"
      ],
      [
       "ellenőrzés",
       "\\text{egyértelmű, de nem azonnal dekódolható}",
       "szóban elhangzott"
      ]
     ]
    }
   ],
   "fix": "Koma E2 jegyzete szerint ez a kód „nem egyértelműen visszafejthető”. Ez téves. Az előadáson elhangzott: egyértelműen megfejthető, csak nem dekódolható azonnal, sorban haladva. A független szkript is egyetlen felbontást talál.",
   "ered": [
    "1011110000001\\ \\to\\ b\\,a\\,a\\,a\\,a\\,c\\,c\\,c\\,a,\\qquad \\text{egyértelmű, de nem azonnal dekódolható}"
   ],
   "chk": [
    "A független szkript az összes lehetséges darabolást végignézte: pontosan egy felbontás van.",
    "Visszakódolás: $10\\,1\\,1\\,1\\,1\\,00\\,00\\,00\\,1$ egymás után írva 1011110000001 ✓.",
    "A Kraft-összeg $\\tfrac12+\\tfrac14+\\tfrac14=1$, a McMillan-feltétel teljesül."
   ],
   "hib": [
    "Mohó olvasás: mindig a leghosszabb illeszkedő kódszót választják, és a 6. és 7. bitet $b$ kódszónak veszik. Ez zsákutcába visz.",
    "Azt mondják, nem prefixmentes, tehát nem egyértelmű. A prefixmentes kód mindig egyértelmű, de fordítva nem igaz."
   ],
   "du": [
    [
     "6.3. példa",
     "ugyanez a kód a McMillan-feltétel oldaláról"
    ],
    [
     "A2",
     "azonnal dekódolható, prefixmentes kód"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 4",
       "#e6-megfejt"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_05",
   "num": "6.5",
   "title": "Szimbólumpárok entrópiája",
   "src": "Kódolás előadás, tábla 5 és 6 (kép 2274, 2276) · koma E2 · azonosító: p6_05",
   "tags": [
    "nehez",
    "javitas"
   ],
   "task": "<p>Mutassuk meg, hogy független szimbólumokból álló pár entrópiája az egyes szimbólum entrópiájának kétszerese: $H(\\mathcal F^2)=2H(\\mathcal F)$. Mi következik ebből az átlagos kódszóhosszra?</p>",
   "ad": [
    "$\\mathcal F$ forrás, $N$ szimbólum, $p_1,\\dots,p_N$",
    "a szimbólumok egymástól függetlenek",
    "$\\mathrm{ld}=\\log_2$"
   ],
   "ker": [
    "$H(\\mathcal F^2)$",
    "az egy szimbólumra jutó átlagos kódszóhossz korlátja"
   ],
   "miert": [
    [
     "Miért $p_i\\,p_j$ a pár valószínűsége?",
     "Mert feltesszük, hogy a szimbólumok egymástól függetlenek. Független eseményeknél az együttes valószínűség a szorzat. A függetlenség a táblán nincs kimondva, a $p_i\\,p_j$ alakból következik."
    ],
    [
     "Miért bomlik szét a logaritmus?",
     "Mert a logaritmus a szorzatot összeggé alakítja: $\\log(xy)=\\log x+\\log y$. Ettől lesz a kettős összegből két külön, egyforma tag."
    ],
    [
     "Miért tűnik el a külső összeg?",
     "Mert $\\sum_j p_j=1$. Ezért $\\sum_j p_j \\sum_i p_i\\,\\mathrm{ld}\\tfrac1{p_i}$ értéke egyszerűen $1\\cdot H(\\mathcal F)$."
    ]
   ],
   "elm": [
    [
     "Entrópia.",
     "(6.9):",
     "H(\\mathcal F)=\\sum_{i=1}^{N}p_i\\,\\mathrm{ld}\\frac1{p_i}"
    ],
    [
     "Logaritmus azonosság.",
     "Szorzat logaritmusa:",
     "\\mathrm{ld}(xy)=\\mathrm{ld}\\,x+\\mathrm{ld}\\,y"
    ]
   ],
   "lv": [
    {
     "t": "A pár entrópiája definíció szerint",
     "s": "A párok halmazára írjuk fel az entrópiát, a pár valószínűsége $p_ip_j$.",
     "m": [
      [
       "definíció",
       "H(\\mathcal F^2)=\\sum_{i=1}^{N}\\sum_{j=1}^{N}p_ip_j\\,\\mathrm{ld}\\frac{1}{p_ip_j}",
       "függetlenség: $P(a_i,a_j)=p_ip_j$"
      ]
     ]
    },
    {
     "t": "A logaritmus szétbontása",
     "s": "A szorzat logaritmusa összeg.",
     "m": [
      [
       "átalakítás",
       "=\\sum_{i=1}^{N}\\sum_{j=1}^{N}p_ip_j\\left[\\mathrm{ld}\\frac1{p_i}+\\mathrm{ld}\\frac1{p_j}\\right]",
       "logaritmus azonosság"
      ]
     ]
    },
    {
     "t": "Két tagra bontás és kiemelés",
     "s": "Az első tagban $p_j$, a másodikban $p_i$ nem függ a belső összeg futó indexétől, ezért kiemelhető.",
     "m": [
      [
       "átalakítás",
       "=\\sum_{j=1}^{N}p_j\\sum_{i=1}^{N}p_i\\,\\mathrm{ld}\\frac1{p_i}+\\sum_{i=1}^{N}p_i\\sum_{j=1}^{N}p_j\\,\\mathrm{ld}\\frac1{p_j}",
       "kiemelés"
      ],
      [
       "definíció",
       "\\sum_{i=1}^{N}p_i\\,\\mathrm{ld}\\frac1{p_i}=H(\\mathcal F),\\qquad \\sum_{j=1}^{N}p_j=1",
       "a táblán kapcsos zárójellel jelölve"
      ]
     ]
    },
    {
     "t": "Az eredmény",
     "s": "Mindkét tag $1\\cdot H(\\mathcal F)$.",
     "m": [
      [
       "számérték",
       "H(\\mathcal F^2)=1\\cdot H(\\mathcal F)+1\\cdot H(\\mathcal F)=2H(\\mathcal F)",
       ""
      ]
     ]
    },
    {
     "t": "Következmény a kódszóhosszra",
     "s": "A párok kódjára a (6.9) korlát érvényes, utána egy szimbólumra osztunk.",
     "m": [
      [
       "tétel",
       "2H(\\mathcal F)\\le L^{(2)}<1+2H(\\mathcal F)",
       "a tábla „Tehát” sora"
      ],
      [
       "átalakítás",
       "H(\\mathcal F)\\le L^{(1)}<\\tfrac12+H(\\mathcal F)",
       "osztás kettővel, $L^{(1)}=L^{(2)}/2$"
      ]
     ]
    }
   ],
   "fix": "A táblán a második alakban $p_i\\cdot p_i$ és $[\\mathrm{ld}\\,\\tfrac1{p_i}+\\mathrm{ld}\\,\\tfrac1{p_i}]$ áll. Helyesen $p_i\\,p_j$ és $[\\mathrm{ld}\\,\\tfrac1{p_i}+\\mathrm{ld}\\,\\tfrac1{p_j}]$, mert $\\mathrm{ld}\\tfrac{1}{p_ip_j}=\\mathrm{ld}\\tfrac1{p_i}+\\mathrm{ld}\\tfrac1{p_j}$. Az $1+2H(\\mathcal F)$ tagban a 2 vastagon át van írva, valószínűleg az oktató a táblán javította.",
   "ered": [
    "H(\\mathcal F^2)=2H(\\mathcal F),\\qquad H(\\mathcal F)\\le L^{(1)}<\\tfrac12+H(\\mathcal F)"
   ],
   "chk": [
    "Szimbolikusan (sympy, $N=3$, tetszőleges $p_1,p_2$ és $p_3=1-p_1-p_2$) az azonosság teljesül.",
    "Számpéldán is: $p=(\\tfrac12,\\tfrac14,\\tfrac18,\\tfrac18)$ esetén $H=1{,}75$ bit, $H(\\mathcal F^2)=3{,}5$ bit.",
    "Határeset: ha egy szimbólum biztos ($p_1=1$), $H=0$, és a pár entrópiája is 0."
   ],
   "hib": [
    "A külső összeget nem veszik 1-nek, és $H^2$ jön ki $2H$ helyett.",
    "A függetlenséget nem mondják ki. Ha a szimbólumok összefüggnek, $H(\\mathcal F^2)<2H(\\mathcal F)$, és a párosítás még többet nyer (kiegészítés)."
   ],
   "calc": "p = (1/2, 1/4, 1/8, 1/8):\nH = 1/2·1 + 1/4·2 + 2·1/8·3 = 1,75 bit\nPrefixmentes kód: 0, 10, 110, 111, L = 1/2·1 + 1/4·2 + 2·1/8·3 = 1,75 bit = H\nPárok: 16 pár, H(F²) = 3,5 bit = 2 · 1,75 bit",
   "du": [
    [
     "6.2. példa",
     "ugyanez fix hosszú kóddal: $L=L^{(2)}/2$"
    ],
    [
     "koma G3/1",
     "$H=L$, ha minden $p_i=2^{-l_i}$"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 5 és 6",
       "#e6-megfejt"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ],
    [
     "Gyakorlat",
     [
      [
       "G3 Kódolás (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_06",
   "num": "6.6",
   "title": "Hibák egy 1000 bites blokkban, BSC",
   "src": "Kódolás előadás, tábla 7 (kép 2277) · koma E2 (javítva) · azonosító: p6_06",
   "tags": [
    "beugro",
    "javitas"
   ],
   "task": "<p>Bináris szimmetrikus csatornán $n=1000$ bitet küldünk, a bitek hibavalószínűsége $p=10^{-4}$, a hibák függetlenek. Mennyi annak a valószínűsége, hogy 0, 1, illetve 2 bit hibás? Hány hibás bit várható?</p>",
   "ad": [
    "$n=1000$ bit",
    "$p=10^{-4}$",
    "BSC, független hibák"
   ],
   "ker": [
    "$P(0)$, $P(1)$, $P(2)$",
    "a hibás bitek várható száma"
   ],
   "miert": [
    [
     "Miért binomiális eloszlás?",
     "Mert minden bit egymástól függetlenül, ugyanazzal a $p$ valószínűséggel romlik el. Ez $n$ független kísérlet, és a hibák száma binomiális eloszlású."
    ],
    [
     "Miért kell az $\\binom{n}{k}$ szorzó?",
     "Mert nem mindegy, hol van a hiba. $k$ hibás helyet $\\binom{n}{k}$ féleképpen lehet kiválasztani, és mindegyik elrendezés ugyanolyan valószínű."
    ],
    [
     "Miért $(1-p)^{n-k}$?",
     "Mert a többi $n-k$ bitnek hibátlannak kell lennie, mindegyiknek $1-p$ eséllyel."
    ]
   ],
   "elm": [
    [
     "Binomiális eloszlás.",
     "$k$ hiba $n$ bitből (A6):",
     "P(k)=\\binom{n}{k}p^k(1-p)^{n-k}"
    ],
    [
     "Várható érték.",
     "Binomiális eloszlásnál:",
     "E=np"
    ]
   ],
   "lv": [
    {
     "t": "Nulla hiba",
     "s": "Mind az 1000 bitnek jónak kell lennie.",
     "m": [
      [
       "behelyettesítés",
       "P(0)=(1-p)^{n}=(1-10^{-4})^{1000}",
       ""
      ],
      [
       "közelítés",
       "(1-p)^n\\approx e^{-np}=e^{-0{,}1}",
       "mert $\\ln(1-p)\\approx -p$, ha $p\\ll1$"
      ],
      [
       "számérték",
       "P(0)\\approx 0{,}9048",
       "a tábla értéke"
      ]
     ]
    },
    {
     "t": "Egy hiba",
     "s": "Egy hibás hely ezerféleképpen választható.",
     "m": [
      [
       "behelyettesítés",
       "P(1)=\\binom{1000}{1}\\,10^{-4}\\,(1-10^{-4})^{999}",
       ""
      ],
      [
       "számérték",
       "P(1)\\approx 1000\\cdot10^{-4}\\cdot 0{,}9049\\approx 0{,}0905",
       "a tábla értéke"
      ]
     ]
    },
    {
     "t": "Két hiba",
     "s": "Két hibás hely $\\binom{1000}{2}=499\\,500$ féleképpen választható.",
     "m": [
      [
       "behelyettesítés",
       "P(2)=\\binom{1000}{2}\\,10^{-8}\\,(1-10^{-4})^{998}",
       ""
      ],
      [
       "számérték",
       "P(2)\\approx 499\\,500\\cdot10^{-8}\\cdot0{,}9050\\approx 0{,}0045",
       "a táblán befejezetlen"
      ]
     ]
    },
    {
     "t": "Várható hibaszám, legalább egy hiba",
     "s": "Összevetjük koma állításával.",
     "m": [
      [
       "tétel",
       "E=np=1000\\cdot10^{-4}=0{,}1",
       "binomiális eloszlás várható értéke"
      ],
      [
       "számérték",
       "P(\\ge1)=1-P(0)\\approx 0{,}0952",
       "nagyjából minden 10. blokkban van hiba"
      ]
     ]
    }
   ],
   "fix": "Koma E2 jegyzetében „1000 közül 5…6 biztos hibás” áll. Ez téves: a hibás bitek várható száma $np=0{,}1$, és kb. 90% eséllyel egyetlen hiba sincs. A tábla harmadik sora befejezetlen („≅ 0,0…”), a helyes érték 0,0045.",
   "ered": [
    "P(0)\\approx0{,}9048,\\qquad P(1)\\approx0{,}0905,\\qquad P(2)\\approx0{,}0045,\\qquad E=0{,}1\\ \\text{hibás bit}"
   ],
   "chk": [
    "Összeg: $0{,}9048+0{,}0905+0{,}0045+0{,}00015\\approx1$, a 3 hibánál több elhanyagolható.",
    "Arány: $P(1)/P(0)\\approx np=0{,}1$, $P(2)/P(1)\\approx np/2=0{,}05$ ✓.",
    "A független szkript a pontos binomiális értékeket adja: 0,90483, 0,09049, 0,00452."
   ],
   "hib": [
    "Elfelejtik az $\\binom{n}{k}$ szorzót, és $P(1)=p(1-p)^{n-1}\\approx 10^{-4}$ jön ki.",
    "A várható értéket összekeverik a hibák biztos számával: átlagosan 0,1 hiba nem jelenti, hogy biztosan van hiba."
   ],
   "calc": "Ha p = 10⁻³, akkor np = 1:\nP(0) = 0,3677, P(1) = 0,3681, P(2) = 0,1840, P(legalább 1) = 0,632.\nEgy hiba ugyanolyan valószínű, mint a hibátlan blokk, és a blokkok kb. 63%-a hibás.",
   "du": [
    [
     "6.7. példa",
     "a hibás blokkok 95%-ában pontosan 1 hiba van, ezért egy hiba javítása már sokat ér (kiegészítés)"
    ],
    [
     "A6",
     "a BSC modell"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 7",
       "#e6-hiba"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_07",
   "num": "6.7",
   "title": "Kódtávolság: hány hibát jelez és javít a C(5,2) kód?",
   "src": "Kódolás előadás, tábla 8, 9 és 12 (kép 2278, 2280, 2287) · koma E2, G6/5 · azonosító: p6_07",
   "tags": [
    "beugro"
   ],
   "task": "<p>A tábla kódjának négy kódszava: $00000$, $01011$, $10110$, $11101$. Mennyi a kódtávolság? Hány hibát jelez és hányat javít a kód?</p>",
   "fig": "<svg viewBox=\"0 0 600 205\" role=\"img\" aria-label=\"Két kódszó 3 távolságra: 2 hibáig jelezhető, 1 hibáig javítható\"><ellipse class=\"bl\" cx=\"160\" cy=\"120\" rx=\"108\" ry=\"56\"></ellipse><ellipse class=\"bl\" cx=\"440\" cy=\"120\" rx=\"108\" ry=\"56\"></ellipse><line class=\"gr\" x1=\"90\" y1=\"112\" x2=\"510\" y2=\"112\"></line><circle class=\"acf\" cx=\"90\" cy=\"112\" r=\"9\"></circle><text class=\"t\" x=\"90\" y=\"140\" text-anchor=\"middle\">00000</text><circle class=\"obf\" cx=\"230\" cy=\"112\" r=\"5\"></circle><text class=\"tm\" x=\"230\" y=\"140\" text-anchor=\"middle\">00001</text><text class=\"tm\" x=\"230\" y=\"158\" text-anchor=\"middle\">1 hiba</text><circle class=\"obf\" cx=\"370\" cy=\"112\" r=\"5\"></circle><text class=\"tm\" x=\"370\" y=\"140\" text-anchor=\"middle\">00011</text><text class=\"tm\" x=\"370\" y=\"158\" text-anchor=\"middle\">2 hiba</text><circle class=\"acf\" cx=\"510\" cy=\"112\" r=\"9\"></circle><text class=\"t\" x=\"510\" y=\"140\" text-anchor=\"middle\">01011</text><text class=\"tm\" x=\"510\" y=\"158\" text-anchor=\"middle\">3 hiba</text><text class=\"tm\" x=\"90\" y=\"94\" text-anchor=\"middle\">kódszó</text><text class=\"tm\" x=\"510\" y=\"94\" text-anchor=\"middle\">kódszó</text><text class=\"tm\" x=\"160\" y=\"196\" text-anchor=\"middle\">ide javít: 00000</text><text class=\"tm\" x=\"440\" y=\"196\" text-anchor=\"middle\">ide javít: 01011</text><line class=\"ac\" x1=\"90\" y1=\"34\" x2=\"370\" y2=\"34\"></line><path class=\"acf\" d=\"M370 34 l-8 -4 v8 z\"></path><text class=\"tm\" x=\"230\" y=\"24\" text-anchor=\"middle\">jelezhető: legfeljebb 2 hiba</text></svg>",
   "ad": [
    "$\\mathcal C=\\{00000,\\,01011,\\,10110,\\,11101\\}$",
    "$n=5$, $k=2$"
   ],
   "ker": [
    "$d_{\\min}$",
    "a jelezhető és a javítható hibák száma"
   ],
   "miert": [
    [
     "Miért a legkisebb távolság számít?",
     "Mert a hibák a legközelebbi két kódszó között okoznak bajt. Ha két kódszó $d$ távolságra van, $d$ hiba az egyiket a másikba viszi át, és ezt a vevő nem veheti észre."
    ],
    [
     "Miért $d_{\\min}-1$ a jelezhető hibák száma?",
     "Mert legfeljebb $d_{\\min}-1$ hibától egy kódszó még nem ér el egy másik kódszót, tehát a vett szó érvénytelen, és ez feltűnik."
    ],
    [
     "Miért $\\lfloor (d_{\\min}-1)/2\\rfloor$ a javítható hibák száma?",
     "Mert javítani úgy lehet, hogy a legközelebbi kódszót választjuk. Ez akkor biztosan a jó, ha a hibás szó közelebb maradt az eredetihez, mint bármelyik máshoz, vagyis a távolság felénél kevesebbet tért el."
    ]
   ],
   "elm": [
    [
     "Hamming-távolság.",
     "Ahány helyen különböznek, helyenként XOR (A7):",
     "d(\\mathbf a,\\mathbf b)=w(\\mathbf a+\\mathbf b)"
    ],
    [
     "Kódtávolság.",
     "(6.17) és (6.18), (6.19):",
     "d_{\\min}=\\min_{\\mathbf c_i\\ne\\mathbf c_j}d(\\mathbf c_i,\\mathbf c_j)"
    ]
   ],
   "lv": [
    {
     "t": "Páronkénti távolságok",
     "s": "Négy kódszóból hat pár van. Mindegyikre XOR, majd megszámoljuk az egyeseket.",
     "m": [
      [
       "behelyettesítés",
       "d(00000,01011)=w(01011)=3",
       ""
      ],
      [
       "behelyettesítés",
       "d(00000,10110)=w(10110)=3",
       ""
      ],
      [
       "behelyettesítés",
       "d(00000,11101)=w(11101)=4",
       ""
      ],
      [
       "behelyettesítés",
       "d(01011,10110)=w(11101)=4",
       ""
      ],
      [
       "behelyettesítés",
       "d(01011,11101)=w(10110)=3",
       ""
      ],
      [
       "behelyettesítés",
       "d(10110,11101)=w(01011)=3",
       ""
      ]
     ]
    },
    {
     "t": "A kódtávolság",
     "s": "A legkisebb érték.",
     "m": [
      [
       "számérték",
       "d_{\\min}=3",
       ""
      ]
     ]
    },
    {
     "t": "Jelzés és javítás",
     "s": "Behelyettesítünk a (6.18) és (6.19) képletbe.",
     "m": [
      [
       "tétel",
       "d_{\\min}-1=2\\ \\text{hiba jelezhető}",
       ""
      ],
      [
       "tétel",
       "\\left\\lfloor\\frac{3-1}{2}\\right\\rfloor=1\\ \\text{hiba javítható}",
       ""
      ]
     ]
    },
    {
     "t": "Gyorsabban, lineáris kódnál",
     "s": "A páronkénti XOR mindig egy kódszót ad (linearitás), ezért elég a nemnulla kódszavak súlya.",
     "m": [
      [
       "átalakítás",
       "d_{\\min}=\\min_{\\mathbf c\\ne\\mathbf 0}w(\\mathbf c)=\\min(3,3,4)=3",
       "kiegészítés, a táblán nem szerepel"
      ]
     ]
    }
   ],
   "ered": [
    "d_{\\min}=3,\\qquad 2\\ \\text{hibát jelez},\\qquad 1\\ \\text{hibát javít}"
   ],
   "chk": [
    "A független szkript minden kódszóra és minden 1, 2, 3 bites hibamintára kipróbálta: 2 hibáig minden hiba feltűnik, és 1 hiba mindig helyesen javul.",
    "Az 1. lépésben a páronkénti XOR eredménye mindig a kód egy szava (linearitás).",
    "Ugyanezt mutatja a szindrómatábla: a kód $\mathbf H^{\mathsf T}$ mátrixának öt sora (110, 011, 100, 010, 001) mind különböző és nemnulla, ezért mind az öt egybites hiba más szindrómát ad, és javítható."
   ],
   "hib": [
    "A $\\lfloor d_{\\min}/2\\rfloor$ képletet használják (koma E2 így írja). Páros $d_{\\min}$ esetén ez eggyel többet ad: $d_{\\min}=4$ mellett 2 helyett csak 1 hiba javítható.",
    "Jelzés és javítás egyszerre: ugyanaz a kód nem tud egyszerre 2 hibát jelezni és 1 hibát javítani. Ha 2 hiba van, a javító dekóder rossz kódszóra javít."
   ],
   "calc": "Ismétlő kód, 0000 és 1111: d_min = 4, 3 hibát jelez, ⌊3/2⌋ = 1 hibát javít.\nKét hibánál (0000 → 1100) a vett szó mindkét kódszótól 2 távolságra van, nem dönthető el.\nÖtszörös ismétlés, 00000 és 11111: d_min = 5, 4 hibát jelez, 2 hibát javít.",
   "du": [
    [
     "A7",
     "a városok analógiája"
    ],
    [
     "koma G3/4",
     "Golay (23, 12) kód: $d_{\\min}=7$, 6 hibát jelez, hármat javít"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 8 és 9",
       "#e6-hiba"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ],
    [
     "Gyakorlat",
     [
      [
       "G3 Kódolás (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ],
      [
       "G6/5 C(5,2) kód (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ]
     ]
    ]
   ]
  },
  {
   "id": "p6_08",
   "num": "6.8",
   "title": "Szindróma dekódolás: C(5,2), v = 11001",
   "src": "Kódolás előadás, tábla 10…12 (kép 2281…2287) · koma E2 · azonosító: p6_08",
   "tags": [
    "javitas"
   ],
   "task": "<p>Egy szisztematikus lineáris blokk-kód generátormátrixa $\\mathbf G=\\begin{bmatrix}1&0&1&1&0\\\\0&1&0&1&1\\end{bmatrix}$. a) Sorold fel a kódszavakat! b) Írd fel a $\\mathbf H^{\\mathsf T}$ mátrixot! c) A vett szó $\\mathbf v=11001$. Dekódold!</p>",
   "ad": [
    "$\\mathbf G=[\\,\\mathbf I_2\\mid\\mathbf B\\,]$, $\\mathbf B=\\begin{bmatrix}1&1&0\\\\0&1&1\\end{bmatrix}$",
    "$n=5$, $k=2$, $n-k=3$",
    "$\\mathbf v=11001$"
   ],
   "ker": [
    "a kódszavak",
    "$\\mathbf H^{\\mathsf T}$",
    "$\\hat{\\mathbf e}$, $\\hat{\\mathbf c}$, $\\hat{\\mathbf u}$"
   ],
   "miert": [
    [
     "Miért szisztematikus a $\\mathbf G$?",
     "Mert az első két oszlopa az egységmátrix. Ezért a kódszó első $k$ bitje maga az üzenet, a maradék $n-k$ bit az ellenőrző rész. A dekódolás végén az üzenetet csak le kell olvasni."
    ],
    [
     "Miért éppen $\\mathbf H^{\\mathsf T}=[\\mathbf B;\\mathbf I]$?",
     "Mert így $\\mathbf G\\mathbf H^{\\mathsf T}=\\mathbf I\\mathbf B+\\mathbf B\\mathbf I=\\mathbf B+\\mathbf B=\\mathbf 0$ mod 2. Ettől lesz minden kódszó szindrómája nulla."
    ],
    [
     "Miért elég a szindróma a hiba megtalálásához?",
     "Mert $\\mathbf s=\\mathbf e\\mathbf H^{\\mathsf T}$ csak a hibától függ. Egy hibánál $\\mathbf s$ éppen $\\mathbf H^{\\mathsf T}$ annak a sora, ahol a hiba van, így a szindróma megmutatja a hiba helyét."
    ],
    [
     "Miért a legkisebb súlyú hibát választjuk?",
     "Mert kis $p$ mellett az egy hiba sokkal valószínűbb, mint a kettő: például $n=1000$, $p=10^{-4}$ esetén $P(1)\approx0{,}09$, $P(2)\approx0{,}0045$. Ugyanahhoz a szindrómához több hibaminta is tartozik, ezek közül a legvalószínűbbet vesszük."
    ]
   ],
   "elm": [
    [
     "Kódolás.",
     "(6.20):",
     "\\mathbf c=\\mathbf u\\mathbf G"
    ],
    [
     "Szisztematikus alak.",
     "(6.23):",
     "\\mathbf G=[\\,\\mathbf I_k\\mid\\mathbf B\\,]\\quad\\Longrightarrow\\quad \\mathbf H^{\\mathsf T}=\\begin{bmatrix}\\mathbf B\\\\\\mathbf I_{n-k}\\end{bmatrix}"
    ],
    [
     "Szindróma.",
     "(6.22):",
     "\\mathbf s=\\mathbf v\\mathbf H^{\\mathsf T}=\\mathbf e\\mathbf H^{\\mathsf T}"
    ]
   ],
   "lv": [
    {
     "t": "A kódszavak",
     "s": "Minden $\\mathbf u$ üzenetre $\\mathbf c=\\mathbf u\\mathbf G$: azoknak a soroknak az összege, ahol $\\mathbf u$ egyes.",
     "m": [
      [
       "definíció",
       "\\mathbf c=\\mathbf u\\mathbf G=u_1\\mathbf g_1+u_2\\mathbf g_2",
       "mod 2"
      ],
      [
       "számérték",
       "00\\to00000,\\qquad 01\\to01011,\\qquad 10\\to10110,\\qquad 11\\to11101",
       "$11$: $10110+01011=11101$"
      ]
     ]
    },
    {
     "t": "A H transzponált",
     "s": "$\\mathbf B$ alá az egységmátrix kerül.",
     "m": [
      [
       "behelyettesítés",
       "\\mathbf H^{\\mathsf T}=\\begin{bmatrix}1&1&0\\\\0&1&1\\\\1&0&0\\\\0&1&0\\\\0&0&1\\end{bmatrix}",
       "felül $\\mathbf B$, alul $\\mathbf I_3$"
      ],
      [
       "ellenőrzés",
       "\\mathbf G\\mathbf H^{\\mathsf T}=\\mathbf B+\\mathbf B=\\mathbf 0",
       "minden kódszó szindrómája nulla"
      ]
     ]
    },
    {
     "t": "Szindrómatábla (0. lépés)",
     "s": "Az egybites hibák szindrómái $\\mathbf H^{\\mathsf T}$ sorai.",
     "m": [
      [
       "definíció",
       "\\mathbf s=\\mathbf e\\mathbf H^{\\mathsf T}",
       ""
      ],
      [
       "számérték",
       "10000\\to110,\\qquad 01000\\to011,\\qquad 00100\\to100,\\qquad 00010\\to010,\\qquad 00001\\to001",
       "mind különböző és nemnulla"
      ]
     ]
    },
    {
     "t": "A szindróma (1. lépés)",
     "s": "$\\mathbf v$ egyesei az 1., a 2. és az 5. helyen vannak, ezeket a sorokat adjuk össze (a táblán csillaggal jelölve).",
     "m": [
      [
       "behelyettesítés",
       "\\mathbf s=\\mathbf v\\mathbf H^{\\mathsf T}=110+011+001",
       "mod 2"
      ],
      [
       "számérték",
       "\\mathbf s=100\\ne\\mathbf 0",
       "hiba van"
      ]
     ]
    },
    {
     "t": "A hiba (2. lépés)",
     "s": "A szindrómatáblából kikeressük.",
     "m": [
      [
       "behelyettesítés",
       "\\mathbf s=100\\ \\Longrightarrow\\ \\hat{\\mathbf e}=00100",
       "a 3. bit hibás"
      ]
     ]
    },
    {
     "t": "A javított kódszó (3. lépés)",
     "s": "Mod 2 a kivonás ugyanaz, mint az összeadás.",
     "m": [
      [
       "átalakítás",
       "\\hat{\\mathbf c}=\\mathbf v-\\hat{\\mathbf e}=\\mathbf v+\\hat{\\mathbf e}",
       ""
      ],
      [
       "számérték",
       "\\hat{\\mathbf c}=11001+00100=11101",
       ""
      ],
      [
       "ellenőrzés",
       "\\hat{\\mathbf c}\\mathbf H^{\\mathsf T}=110+011+100+001=000",
       "valóban kódszó"
      ]
     ]
    },
    {
     "t": "Az üzenet (4. lépés)",
     "s": "Szisztematikus kódnál az első $k=2$ bit.",
     "m": [
      [
       "számérték",
       "\\hat{\\mathbf u}=11",
       "szóban elhangzott"
      ]
     ]
    }
   ],
   "fix": "A táblán a dekódolás 4. lépése „$\\hat{\\mathbf u}\\to\\hat{\\mathbf c}$”. Helyesen $\\hat{\\mathbf c}\\to\\hat{\\mathbf u}$: a javított kódszóból nyerjük ki az üzenetet. Az előadáson el is hangzott, hogy $\\hat{\\mathbf c}$ csak becsült kódszó, ebből kell még az üzenet.",
   "ered": [
    "\\hat{\\mathbf e}=00100,\\qquad \\hat{\\mathbf c}=11101,\\qquad \\hat{\\mathbf u}=11"
   ],
   "chk": [
    "A javított szó szindrómája 000, tehát kódszó, és szerepel a kódszavak listájában.",
    "Visszafelé: $\\hat{\\mathbf u}\\mathbf G=11\\cdot\\mathbf G=11101=\\hat{\\mathbf c}$ ✓.",
    "A független szkript (numpy, mod 2) ugyanezt adja, koma E2 eredménye is ez."
   ],
   "hib": [
    "A szindrómát $\\mathbf H^{\\mathsf T}$ sorai helyett oszlopaiból rakják össze, vagy elfelejtik, hogy a mod 2 összeadásban $1+1=0$.",
    "$\\hat{\\mathbf c}$ értékét adják meg végeredménynek, pedig a kérdés az üzenet."
   ],
   "calc": "Ha v = 10110 érkezik: s = 110 + 100 + 010 = 000, tehát kódszó, û = 10.\nHa v = 01111 érkezik: s = 011 + 100 + 010 + 001 = 100, ê = 00100, ĉ = 01011, û = 01.",
   "du": [
    [
     "6.7. példa",
     "ugyanennek a kódnak a kódtávolsága: 1 hibát javít, ezért elég az egybites szindrómatábla"
    ],
    [
     "koma G6/5",
     "C(5,2) más $\\mathbf B$ mátrixszal, $\\mathbf v=10001$"
    ],
    [
     "koma G3/5",
     "(8,4) kód: előbb szisztematikussá kell alakítani"
    ]
   ],
   "links": [
    [
     "Előadás",
     [
      [
       "Kódolás, tábla 10…12",
       "#e6-linearis"
      ],
      [
       "E2 Kódolás (Koma)",
       "Forrasok/Koma/koma-eloadasok.md"
      ]
     ]
    ],
    [
     "Gyakorlat",
     [
      [
       "G6/5 C(5,2) kód (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ],
      [
       "G3 Kódolás (Koma)",
       "Forrasok/Koma/koma-gyakorlatok.md"
      ]
     ]
    ]
   ]
  }
 ],
 "jav": {
  "id": "j6",
  "html": "<header class=\"sh\"><span class=\"badge\">J</span><h3>Javítások (6. fejezet)</h3><a class=\"pin\" href=\"#j6\" aria-label=\"Hivatkozás erre\">#</a></header><p>A forrásokban talált hibák. Csendben semmit nem javítottunk: minden eltérés itt és a példánál is szerepel.</p><div class=\"tw\"><table class=\"tb\"><thead><tr><th>Hol</th><th>Mi állt ott</th><th>Helyesen</th><th>Miért</th></tr></thead><tbody><tr><td>Előadás, tábla 3 (kép 2268)</td><td>„$N=32\\to N=5$”, „$N=33\\to N=6$”</td><td>$L=5$, $L=6$</td><td>a nyíl jobb oldalán a kódszóhossz áll (6.1. példa)</td></tr><tr><td>Előadás, tábla 6 (kép 2276)</td><td>$p_i\\cdot p_i\\,[\\mathrm{ld}\\tfrac1{p_i}+\\mathrm{ld}\\tfrac1{p_i}]$</td><td>$p_ip_j\\,[\\mathrm{ld}\\tfrac1{p_i}+\\mathrm{ld}\\tfrac1{p_j}]$</td><td>a pár valószínűsége $p_ip_j$, és $\\mathrm{ld}\\tfrac1{p_ip_j}$ két tagra bomlik (6.5. példa)</td></tr><tr><td>Előadás, tábla 11 (kép 2285)</td><td>4) $\\hat{\\mathbf u}\\to\\hat{\\mathbf c}$</td><td>$\\hat{\\mathbf c}\\to\\hat{\\mathbf u}$</td><td>a javított kódszóból nyerjük ki az üzenetet, szóban is így hangzott el (6.8. példa)</td></tr><tr><td>Koma E2</td><td>$L\\le1+\\log_2N$</td><td>$L<1+\\log_2N$</td><td>$\\lceil x\\rceil<x+1$, a tábla is szigorú egyenlőtlenséget ír</td></tr><tr><td>Koma E2</td><td>az $\\{1,10,00\\}$ kód „nem egyértelműen visszafejthető”</td><td>egyértelműen megfejthető, de nem azonnal dekódolható</td><td>egyetlen felbontás létezik (szkript), az előadáson is így hangzott el (6.4. példa)</td></tr><tr><td>Koma E2</td><td>„1000 közül 5…6 biztos hibás”</td><td>átlagosan 0,1 hibás bit, 90,5% eséllyel egy sem</td><td>$np=1000\\cdot10^{-4}=0{,}1$ (6.6. példa)</td></tr><tr><td>Koma E2</td><td>javítani $\\lfloor d_{\\min}/2\\rfloor$ bitet lehet</td><td>$\\lfloor (d_{\\min}-1)/2\\rfloor$</td><td>páros $d_{\\min}$ esetén a félúton lévő szó egyforma messze van két kódszótól (6.7. példa)</td></tr></tbody></table></div>"
 },
 "short": "Kódolás"
};
