// Példánkénti jelmagyarázat: a megoldás lépéseiben használt, de az Adott/Keresett részben
// nem szereplő jelek jelentése, az adott példa összefüggésében.
// Formátum: [példa-azonosító, jel (TeX, szóközök nélkül), jelentés]. A jelentés a témakörös
// szótárt (_gloss.js) felülírja ebben az egy példában.
'use strict';
const R = String.raw;
const zona = [[R`k`, R`a Nyquist-zóna sorszáma: a frekvenciatengelyt $f_s/2$ széles sávokra osztjuk, és $k$ annak a sávnak a sorszáma, amelybe a jel teljes sávja beleesik`], [R`k_{\max}`, R`a legnagyobb szóba jöhető zónasorszám, $\lfloor f_H/B\rfloor$`]];
const kodszo = [[R`d`, 'két szó Hamming-távolsága: hány helyen különböznek'], [R`w`, 'egy szó súlya: az egyesek száma']];
const Hmat = [[R`H`, 'paritásellenőrző mátrix'], [R`B^T`, R`a $B$ paritásrész transzponáltja`], [R`I`, 'egységmátrix']];
const asc = (a, b, A) => [[R`a`, 'a szinuszos tag együtthatója (' + a + ')'], [R`b`, 'a koszinuszos tag együtthatója (' + b + ')'], [R`\omega`, 'körfrekvencia, a frekvencia 2π-szerese'], [R`\varphi`, 'az összevont szinusz kezdőfázisa'], [R`A`, 'az összevont szinusz amplitúdója, ' + A]];
const pamk = (h0, h1) => [[R`x_k`, 'a k-adik időrésben vett minta'], [R`d_k`, 'a k-adik szimbólum (+1 vagy −1)'], [R`d_{k-1}`, 'az előző szimbólum (+1 vagy −1)'], [R`d`, 'a szimbólum értéke, +1 az 1-es és −1 a 0-s bitre'], [R`x`, 'a mintavevő kimenete (egy minta értéke)'], [R`h`, 'az elemi jel: ' + h0 + ' az első és ' + h1 + ' a második jelzési időben'], [R`k`, 'az időrés sorszáma']];
const gsm = [[R`\alpha`, 'az egyik szolgáltató (α) hálózata, alsó indexben: az α hálózat eleme'], [R`\beta`, 'a másik szolgáltató (β) hálózata, alsó indexben: a β hálózat eleme']];
const L = [
  // ch02
  ['p2_01', R`f_\text{ki}`, 'egy kimenő összetevő frekvenciája'], ['p2_01', R`f_\text{be}`, 'a bemenő szinusz frekvenciája'], ['p2_01', R`n`, 'tetszőleges egész szám'],
  ['p2_01', R`U_\text{minta}`, 'a mintavevőre jutó összetevő amplitúdója (a bemenő szűrő után)'], ['p2_01', R`U_{4{,}5}`, 'a kimenő 4,5 kHz-es összetevő amplitúdója'], ['p2_01', R`U_{3{,}5}`, 'a kimenő 3,5 kHz-es összetevő amplitúdója'],
  ['p2_02', R`f_\text{ki}`, 'egy kimenő összetevő frekvenciája'], ['p2_02', R`n`, 'tetszőleges egész szám'], ['p2_02', R`f_0`, 'az egyenirányított jel alapfrekvenciája'], ['p2_02', R`f_k`, 'az egyenirányított jel k-adik felharmonikusának frekvenciája'], ['p2_02', R`k`, 'a felharmonikus sorszáma (pozitív egész)'],
  ['p2_03', R`f_{\max}`, 'a jel legnagyobb frekvenciája (8 kHz)'], ['p2_03', R`s`, 'a jel teljesítménysűrűség-spektruma, s(f)'],
  ...['p2_04', 'p2_05', 'p2_06', 'p2_09', 'ai2_02', 'ai2_03', 'ai2_10', 'ai2_11', 'ai2_12', 'o4_04'].flatMap(id => zona.map(([s, m]) => [id, s, m])),
  ['p2_08', R`s`, 'a jel spektrális sűrűsége, s(f)'], ['p2_08', R`k`, 'a Nyquist-zóna sorszáma a sáváteresztő mintavételnél'], ['p2_08', R`M`, R`a kvantálási zaj teljesítménye a teljes $f_s$ szélességben`],
  ['p2_08', R`f_{s,a}`, R`a legkisebb $f_s$ aluláteresztő visszaállító szűrővel`], ['p2_08', R`f_{s,b}`, R`a legkisebb $f_s$ tetszőleges visszaállító szűrővel`], ['p2_08', R`P_\varepsilon`, 'a jel sávjába eső kvantálási zaj teljesítménye'],
  ['p2_10', R`S`, 'a jel teljesítménye'], ['p2_10', R`N`, 'a kvantálási zaj teljesítménye'],
  ['p2_12', R`f_k`, 'a négyszögjel egy felharmonikusának frekvenciája'], ['p2_12', R`k`, 'nemnegatív egész, a 2k+1 a felharmonikus (páratlan) sorszáma'],
  // ch06
  ['p6_02', R`\mathcalF`, 'a forrás szimbólumainak halmaza'], ['p6_02', R`F`, R`a forrás szimbólumainak halmaza ($\mathcal F^2$: a szimbólumpárok halmaza)`],
  ...['p6_03', 'p6_04'].flatMap(id => [[id, R`a`, 'az első szimbólum'], [id, R`b`, 'a második szimbólum'], [id, R`c`, 'a harmadik szimbólum']]),
  ['p6_05', R`p_i`, 'az i-edik szimbólum valószínűsége'], ['p6_05', R`p_j`, 'a j-edik szimbólum valószínűsége'], ['p6_05', R`i`, 'a pár első szimbólumának sorszáma'], ['p6_05', R`j`, 'a pár második szimbólumának sorszáma'],
  ['p6_05', R`P`, 'valószínűség'], ['p6_05', R`a_i`, 'az i-edik szimbólum'], ['p6_05', R`a_j`, 'a j-edik szimbólum'],
  ['p6_06', R`E`, 'a hibás bitek számának várható értéke'],
  ['p6_07', R`d`, 'két kódszó Hamming-távolsága: hány helyen különböznek'], ['p6_07', R`w`, 'egy kódszó súlya: az egyesek száma'], ['p6_07', R`c`, 'egy kódszó'],
  ['p6_08', R`u`, 'az üzenet (2 bit)'], ['p6_08', R`c`, 'a kódszó (5 bit)'], ['p6_08', R`u_1`, 'az üzenet első bitje'], ['p6_08', R`u_2`, 'az üzenet második bitje'], ['p6_08', R`g_1`, R`a $\mathbf G$ első sora`], ['p6_08', R`g_2`, R`a $\mathbf G$ második sora`],
  ['p6_08', R`I_3`, '3×3-as egységmátrix'], ['p6_08', R`e`, 'a hibavektor: ahol 1-es, ott romlott el a bit'], ['p6_08', R`s`, 'szindróma'],
  // ai01
  ...asc(3, 4, '5').map(([s, m]) => ['ai1_01', s, m]), ['ai1_01', R`x_\text{eff}`, 'a jel effektív értéke'],
  ['ai1_02', R`x`, 'a vizsgált jel, x(t)'], ['ai1_02', R`f_1`, 'az első koszinusz frekvenciája'], ['ai1_02', R`f_2`, 'a második koszinusz frekvenciája'],
  ['ai1_03', R`s`, 'a vizsgált jel, s(t)'], ['ai1_03', R`f_0`, 'a két tag közös frekvenciája'], ...asc(4, '−3', '5').map(([s, m]) => ['ai1_03', s, m]), ['ai1_03', R`\hats`, 'a jel csúcsértéke'],
  ['ai1_04', R`x`, 'a vizsgált jel, x(t)'], ['ai1_04', R`f`, 'a két tag közös frekvenciája'], ...asc(2, 2, '$2\\sqrt2$').map(([s, m]) => ['ai1_04', s, m]),
  // ai02
  ['ai2_01', R`U_{3{,}5}`, 'a kimenő 3,5 kHz-es összetevő amplitúdója'], ['ai2_01', R`U_{4{,}5}`, 'a kimenő 4,5 kHz-es összetevő amplitúdója'], ['ai2_01', R`U_{11{,}5}`, 'a kimenő 11,5 kHz-es összetevő amplitúdója'], ['ai2_01', R`U_{3\,\text{kHz}}`, 'a kimenő 3 kHz-es összetevő amplitúdója'],
  ['ai2_04', R`k`, 'a Nyquist-zóna sorszáma'], ['ai2_04', R`B_z`, 'a visszaállító szűrő sávszélessége (ennyi zajt enged át)'], ['ai2_12', R`B_z`, 'a visszaállító szűrő sávszélessége (ennyi zajt enged át)'], ['o4_04', R`B_z`, 'a visszaállító szűrő sávszélessége (ennyi zajt enged át)'],
  ['ai2_06', R`f_{s1}`, R`az első mintavételi frekvencia, $1/T_1$`], ['ai2_06', R`f_{s2}`, R`a második mintavételi frekvencia, $1/T_2$`], ['ai2_06', R`x`, 'a bemenő szinusz'], ['ai2_06', R`k`, 'a minta sorszáma'], ['ai2_06', R`\varphi`, 'a szinusz kezdőfázisa'],
  ['ai2_08', R`H_\text{elő}`, 'az előszűrő (bemenő szűrő) átvitele'], ['ai2_08', R`H_\text{utó}`, 'az utószűrő (visszaállító szűrő) átvitele'], ['ai2_08', R`U_{9{,}5\,\text{kHz}}`, 'a kimenő 9,5 kHz-es összetevő amplitúdója'],
  // ai03
  ['ai3_02', R`f_\mathrm{osc}`, 'az oszcillátor frekvenciája'], ['ai3_03', R`c`, R`a fénysebesség, $3\cdot10^8$ m/s`], ['ai3_04', R`P`, 'a vett teljesítmény'], ['ai3_04', R`E`, 'a térerősség'],
  ['ai3_05', R`a`, 'csillapítás (dB)'], ['ai3_06', R`c`, R`a fénysebesség, $3\cdot10^8$ m/s`], ['ai3_07', R`h`, 'antennamagasság'],
  // ai04
  ...kodszo.map(([s, m]) => ['ai4_01', s, m]), ...Hmat.map(([s, m]) => ['ai4_01', s, m]),
  ...Hmat.map(([s, m]) => ['ai4_02', s, m]), ['ai4_02', R`w`, 'egy kódszó súlya: az egyesek száma'],
  ['ai4_05', R`I_2`, '2×2-es egységmátrix'], ['ai4_05', R`w`, 'egy kódszó súlya: az egyesek száma'], ['ai4_05', R`w_{\min}`, 'a legkisebb nem nulla kódszósúly'],
  ['ai4_07', R`d`, 'két szó Hamming-távolsága: hány helyen különböznek'], ...kodszo.map(([s, m]) => ['ai4_08', s, m]), ['ai4_08', R`B^T`, R`a $B$ paritásrész transzponáltja`], ['ai4_08', R`I`, 'egységmátrix'],
  ['ai4_09', R`d`, 'két szó Hamming-távolsága: hány helyen különböznek'], ['ai4_12', R`p_i`, 'az i-edik kvantálási szint valószínűsége'],
  ['ai4_13', R`H`, 'a forrás entrópiája'], ['ai4_13', R`a`, 'a gyakori (0,9 valószínűségű) szimbólum'], ['ai4_13', R`b`, 'a ritka (0,1 valószínűségű) szimbólum'],
  // ai05
  ['ai5_03', R`T_v`, 'a vivő periódusideje'], ['ai5_06', R`f`, 'frekvencia'], ['ai5_06', R`T`, 'periódusidő'], ['ai5_06', R`T_v`, 'a vivő periódusideje'],
  ...['ai5_08', 'ai5_09'].flatMap(id => [[id, R`f_1`, 'a moduláló jel első összetevőjének frekvenciája'], [id, R`f_2`, 'a moduláló jel második összetevőjének frekvenciája'], [id, R`s`, 'a modulált jel, s(t)']]),
  ['ai5_09', R`u`, 'a burkoló pillanatnyi értéke'], ['ai5_09', R`u_{\min}`, 'a burkoló legkisebb értéke'], ['ai5_09', R`u_{\max}`, 'a burkoló legnagyobb értéke'], ['ai5_09', R`P_{\min}`, 'a legkisebb pillanatnyi teljesítmény'], ['ai5_09', R`P_{\max}`, 'a legnagyobb pillanatnyi teljesítmény'],
  ['ai5_09', R`\theta`, R`segédváltozó, $\theta=2\pi f_1t$`], ['ai5_09', R`x_{\max}`, 'a moduláló jel legnagyobb értéke'], ['ai5_09', R`x`, 'a moduláló jel, x(t)'],
  ['ai5_10', R`f_\text{átl}`, 'a vivőtől mért átlagos frekvenciaeltérés egy félperiódusban'], ['ai5_10', R`f`, 'a pillanatnyi frekvencia, f(t)'],
  ['ai5_11', R`s`, 'az FM-jel, s(t)'], ['ai5_11', R`\varphi`, 'tetszőleges kezdőfázis'], ['ai5_12', R`s`, 'az FM-jel, s(t)'], ['ai5_12', R`\mu`, 'a modulációs tartalom (a fázis eltérése a vivőétől), μ(t)'], ['ai5_14', R`s`, 'a szögmodulált jel'], ['ai5_16', R`f`, 'a moduláló jel egy összetevőjének frekvenciája'],
  // ai06
  ...pamk('1,25', '0,45').map(([s, m]) => ['ai6_01', s, m]), ...pamk('1,05', '0,15').map(([s, m]) => ['ai6_02', s, m]), ['ai6_02', R`M`, 'a szintek száma'],
  ['ai6_03', R`x`, 'tetszőleges szög (az azonosság változója)'], ['ai6_04', R`t_k`, 'a k-adik mintavételi pillanat'], ['ai6_04', R`k`, 'az időrés sorszáma'], ['ai6_04', R`x`, 'egy minta értéke'], ['ai6_04', R`M`, 'a szintek száma'],
  ['ai6_06', R`u_k`, 'a vett jel amplitúdója a k-adik időrésben'], ['ai6_06', R`a_{k-1}`, 'az eggyel korábbi szimbólum'], ['ai6_06', R`a_{k-2}`, 'a kettővel korábbi szimbólum'], ['ai6_06', R`u`, 'a vett jel amplitúdója'], ['ai6_06', R`u_4`, 'a vett jel amplitúdója a 4. időrésben'], ['ai6_06', R`c`, 'a terjedési sebesség (fénysebesség)'], ['ai6_06', R`v`, 'a vevő sebessége'],
  // ai07
  ['ai7_01', R`T_v`, 'a vivő periódusideje'], ['ai7_01', R`s`, 'a BPSK-jel, s(t)'], ['ai7_02', R`f_1`, 'az egyik jelzőfrekvencia'], ['ai7_02', R`f_2`, 'a másik jelzőfrekvencia'], ['ai7_03', R`f`, 'a 0-s vagy az 1-es bit frekvenciája'],
  ['ai7_05', R`A`, 'a szinusz amplitúdója'], ['ai7_05', R`\varphi_\text{tűrés}`, 'a megengedett fázishiba: a szomszédos pontok szögtávolságának fele'],
  ['ai7_06', R`i`, 'a pont sorszáma'], ['ai7_06', R`d_i`, 'az i-edik pont távolsága az origótól'], ['ai7_06', R`d`, 'egy pont távolsága az origótól'],
  ['ai7_07', R`c`, 'a vett pont függőleges koordinátája'], ['ai7_07', R`d`, 'a vett pont vízszintes koordinátája'], ['ai7_10', R`d`, 'egy pont távolsága az origótól'], ['ai7_13', R`n`, 'a QAM-konstelláció pontjainak száma'],
  // ai08
  ['ai8_07', R`r`, 'a forrástól mért távolság'], ['ai8_08', R`Y_G`, 'a tiszta zöld sáv világossága'], ['ai8_08', R`Y_R`, 'a tiszta vörös sáv világossága'], ['ai8_08', R`Y_B`, 'a tiszta kék sáv világossága'],
  ['ai8_09', R`a`, 'a vörös színjel szintjének sorszáma (0…3)'], ['ai8_09', R`b`, 'a zöld színjel szintjének sorszáma (0…3)'], ['ai8_09', R`c`, 'a kék színjel szintjének sorszáma (0…3)'],
  ['ai8_10', R`V`, R`láthatósági függvény, $V(\lambda)$`], ['ai8_10', R`\lambda`, 'a fény hullámhossza'],
  // ai09
  ['ai9_06', R`f`, 'a fütty frekvenciája'], ['ai9_09', R`T`, 'a szimbólumidő'],
  // ai10
  ['ai10_02', R`T_\text{cella}`, 'egy cella területe'], ['ai10_02', R`T_\text{klaszter}`, 'egy klaszter területe'],
  ...['ai10_03', 'ai10_04', 'o9_02', 'o9_03'].flatMap(id => gsm.map(([s, m]) => [id, s, m])),
  ['ai10_05', R`A`, 'az ábra A jelű üzenete'], ['ai10_05', R`B`, 'az ábra B jelű üzenete'], ['ai10_05', R`C`, 'az ábra C jelű üzenete'],
  // ai11
  ['ai11_03', R`E_0`, 'a rekurzió kezdőértéke (0 kiszolgálóra), 1'], ['ai11_03', R`E_n`, R`a blokkolási valószínűség $n$ kiszolgálóval`], ['ai11_03', R`E_{n-1}`, R`a blokkolási valószínűség $n-1$ kiszolgálóval`], ['ai11_03', R`E_N`, R`a blokkolási valószínűség $N$ kiszolgálóval`], ['ai11_03', R`n`, 'a kiszolgálók száma a rekurzió egy lépésében'], ['ai11_03', R`X`, 'egy hívás tartási ideje (valószínűségi változó)'],
  // o01
  ['o1_01', R`\omega`, R`körfrekvencia, $\omega=2\pi F$`], ['o1_01', R`\varphi`, 'az összevont szinusz kezdőfázisa'], ['o1_01', R`A`, 'az összevont szinusz amplitúdója'],
  ['o1_02', R`\varphi_0`, 'kezdőfázis'], ['o1_02', R`\mu`, 'a modulációs tartalom (a fázis eltérése a vivőétől), μ(t)'], ['o1_02', R`f`, 'a pillanatnyi frekvencia'], ['o1_02', R`U`, 'a modulált jel amplitúdója'],
  ['o1_03', R`\mu`, 'a modulációs tartalom (a fázis eltérése a vivőétől), μ(t)'], ['o1_03', R`\hats_m`, 'a moduláló jel csúcsértéke'], ['o1_03', R`\hats`, 'a modulált jel csúcsértéke'],
  ['o1_04', R`U_v`, 'a vivő amplitúdója'], ['o1_04', R`a`, 'tetszőleges szög (az azonosság első változója)'], ['o1_04', R`b`, 'tetszőleges szög (az azonosság második változója)'], ['o1_04', R`T_v`, 'a vivő periódusideje'],
  ['o1_05', R`U_v`, 'a vivő amplitúdója'], ['o1_05', R`T_v`, 'a vivő periódusideje'], ['o1_05', R`U_m`, R`a burkoló kilengése, $mU_v$`],
  ['o1_06', R`f_\text{ritka}`, 'a ritka szakasz átlagos frekvenciája'], ['o1_06', R`f_\text{sűrű}`, 'a sűrű szakasz átlagos frekvenciája'], ['o1_06', R`f_\text{átl}`, 'a vivőtől mért átlagos frekvenciaeltérés egy félperiódusban'], ['o1_06', R`f`, 'a pillanatnyi frekvencia, f(t)'],
  ['o1_07', R`s`, 'a modulált jel, s(t)'], ['o1_07', R`U_\text{eff}`, 'a modulált jel effektív értéke'], ['o1_08', R`s`, 'a BPSK-jel, s(t)'], ['o1_08', R`s_\text{eff}`, 'a jel effektív értéke'], ['o1_08', R`\hats`, 'a jel csúcsértéke'],
  // o02, o03
  ['o2_04', R`d`, 'egy pont távolsága az origótól'], ['o2_05', R`c`, 'a vett pont függőleges koordinátája'], ['o2_05', R`d`, 'a vett pont vízszintes koordinátája'],
  ...pamk('1,15', '0,25').map(([s, m]) => ['o3_01', s, m]), ['o3_02', R`x`, 'tetszőleges szög (az azonosság változója)'], ['o3_02', R`B_\text{jel}`, 'a jel sávszélessége'],
  // o04
  ['o4_02', R`\hatU`, 'a négyszögjel amplitúdója'], ['o4_02', R`k`, 'a felharmonikus (páratlan) sorszáma'], ['o4_03', R`k`, 'a felharmonikus (páratlan) sorszáma'],
  // o05
  ['o5_01', R`\Phi_D`, 'fázislöket (modulációs index)'], ['o5_02', R`a_\text{max}`, 'a megengedhető legnagyobb csillapítás'], ['o5_02', R`A_{h,R}`, 'a földi (vevő) parabola hatásos felülete'], ['o5_02', R`c`, R`a fénysebesség, $3\cdot10^8$ m/s`],
  ['o5_04', R`E_R`, 'a vett térerősség'], ['o5_04', R`E_0`, 'a közvetlen hullám térerőssége'], ['o5_04', R`x`, 'a két hullám fáziskülönbségének fele'], ['o5_04', R`x_0`, 'az x értéke a zónahatáron'], ['o5_04', R`P`, 'a vett teljesítmény az új antennamagassággal'], ['o5_04', R`P_0`, 'a vett teljesítmény az eredeti antennamagassággal'],
  ['o5_05', R`c`, R`a fénysebesség, $3\cdot10^8$ m/s`], ['o5_05', R`S_{\max}`, 'a teljesítménysűrűség a főirányban'], ['o5_05', R`S_0`, 'egy ugyanakkora teljesítményű izotróp antenna teljesítménysűrűsége'],
  // o06
  ['o6_01', R`u_1`, 'az üzenet 1. bitje'], ['o6_01', R`u_2`, 'az üzenet 2. bitje'], ['o6_01', R`u_3`, 'az üzenet 3. bitje'], ['o6_01', R`u_4`, 'az üzenet 4. bitje'], ['o6_01', R`p_1`, 'az 1. paritásbit'], ['o6_01', R`p_2`, 'a 2. paritásbit'], ['o6_01', R`p_3`, 'a 3. paritásbit'], ['o6_01', R`p_4`, R`a 4. paritásbit (csak a $C_2$ kódban)`],
  ['o6_01', R`C_1`, 'az első kód (7 bites kódszavak)'], ['o6_01', R`C_2`, 'a második kód (8 bites kódszavak)'], ['o6_01', R`u`, 'az üzenet (4 bit)'], ['o6_01', R`u_i`, 'az üzenet i-edik bitje'], ['o6_01', R`I`, 'egységmátrix'], ['o6_01', R`B`, 'a generátormátrix paritásrésze'], ['o6_01', R`B^T`, R`a $B$ paritásrész transzponáltja`],
  ['o6_01', R`e`, 'a becsült hibavektor: ahol 1-es, ott romlott el a bit'], ['o6_01', R`x`, 'tetszőleges bit'],
  ['o6_02', R`A`, 'az A szimbólum'], ['o6_02', R`B`, 'a B szimbólum'], ['o6_02', R`C`, 'a C szimbólum'],
  ['o6_03', R`I`, 'egységmátrix'], ['o6_03', R`d`, 'két szó Hamming-távolsága: hány helyen különböznek'], ['o6_03', R`B^T`, R`a $B$ paritásrész transzponáltja`],
  ['o6_04', R`d`, 'két szó Hamming-távolsága: hány helyen különböznek'], ['o6_04', R`B^T`, R`a $B$ paritásrész transzponáltja`],
  // o08
  ['o8_02', R`f`, 'a keresett zavaró (tükör) frekvencia'], ['o8_03', R`R_s`, 'szimbólumsebesség vivőnként'],
  // a témakörös szótártól eltérő jelentések
  ...['p2_12', 'ai2_01', 'o4_02', 'o4_03'].flatMap(id => [[id, R`n`, 'tetszőleges egész szám (hányadik mintavételi többszörös)']]), ['p2_11', R`i`, 'tetszőleges pozitív egész'],
  ['p2_01', R`U_7`, 'a kimenő 7 kHz-es összetevő amplitúdója'], ['p2_01', R`U_9`, 'a kimenő 9 kHz-es összetevő amplitúdója'], ['p2_01', R`U_{15}`, 'a kimenő 15 kHz-es összetevő amplitúdója'], ['p2_01', R`U_{17}`, 'a kimenő 17 kHz-es összetevő amplitúdója'],
  ['p2_03', R`f`, 'frekvencia (a spektrum változója)'], ['p2_08', R`f`, 'frekvencia (a spektrum változója)'], ['p2_08', R`P`, 'a visszaállító szűrőn átjutó kvantálási zaj teljesítménye'],
  ['ai2_01', R`f`, 'egy kimenő összetevő frekvenciája'], ['ai2_01', R`U_5`, 'az 5 kHz-es összetevő amplitúdója a mintavevő bemenetén'], ['ai2_08', R`U`, 'a kimenő 9,5 kHz-es összetevő amplitúdója'],
  ['ai5_01', R`A`, 'egy spektrumvonal amplitúdója'], ['ai7_01', R`d_k`, 'a k-adik bit szimbóluma, +1 vagy −1'], ['ai7_04', R`d_k`, 'a k-adik bit'],
];
const JEL = {};
for (const [id, s, m] of L) (JEL[id] = JEL[id] || {})[s] = m;
module.exports = { JEL };
