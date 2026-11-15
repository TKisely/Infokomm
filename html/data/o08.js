'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f8', num: '8', short: 'Műsorszórás', title: 'Műsorszórás és digitális TV',
  lead: R`Szuperheterodin vevő és tükörfrekvencia, valamint a DVB-T multiplex nettó bitsebessége.`,
  alap: [
    { id: 'b8-szuper', badge: 'A1', title: 'Szuperheterodin vevő',
      html: R`<p>A vevő a venni kívánt $f_v$ frekvenciájú jelet egy helyi oszcillátor ($f_\text{osc}$) jelével keveri (szorozza). A szorzat a különbségi és az összegfrekvencián jelenik meg. A különbségi frekvencia az állandó <b>középfrekvencia</b> ($f_\mathrm{KF}$), ezt erősíti és szűri a vevő, az összeget eldobja:</p>$$|f_v-f_\text{osc}|=f_\mathrm{KF}$$<p><b>Felső keverés:</b> $f_\text{osc}=f_v+f_\mathrm{KF}$. <b>Alsó keverés:</b> $f_\text{osc}=f_v-f_\mathrm{KF}$.</p><p>A <b>tükörfrekvencia</b> ($f_t$) az a másik frekvencia, amelyik ugyanazzal az oszcillátorral szintén $f_\mathrm{KF}$-et ad: az oszcillátor túloldalán, tőle $f_\mathrm{KF}$-re. Felső keverésnél $f_t=f_\text{osc}+f_\mathrm{KF}=f_v+2f_\mathrm{KF}$, alsónál $f_t=|f_\text{osc}-f_\mathrm{KF}|=|f_v-2f_\mathrm{KF}|$. A tükröt a keverő <b>előtt</b> kell kiszűrni, utána már nem különböztethető meg a hasznos jeltől.</p>` },
    { id: 'b8-dvb', badge: 'A2', title: 'DVB-T (OFDM)',
      html: R`<p>Sok keskeny vivő egymás mellett, mindegyik egy-egy QAM-szimbólumot visz. $T_0$ a hasznos szimbólumidő, a vivőköz $1/T_0$. Minden szimbólum elé védőintervallum kerül ($GI$, a $T_0$ hányadában), így egy OFDM-szimbólum $(1+GI)T_0$ ideig tart. A sávszélesség kb. $(N_\text{vivő}+1)/T_0$. Csak a hasznos vivők visznek adatot:</p>$$R_s=\frac{N_\text{hasznos}}{(1+GI)T_0}\qquad v_\text{nettó}=R_s\cdot\log_2M\cdot\text{FEC}\cdot\frac{188}{204}$$<p>A FEC a konvolúciós kód aránya, a $188/204$ az RS(204,188) kódé (204 bájtból 188 a hasznos).</p>` }
  ],
  ex: [
    { id: 'o8_01', num: '8.1', title: 'Felső keverés: 97,6 és 107 MHz', tags: ['vizsga'],
      src: R`5-ösöm 24. oldal · 5o_24_2, 5o_24_3`,
      task: R`<p>KF 10,7 MHz, felső keverés. Oszcillátor és tükör a 97,6 és a 107 MHz-es adóhoz?</p>`,
      ad: [R`$f_\mathrm{KF}=10{,}7$ MHz: középfrekvencia`, R`felső keverés: az oszcillátor a vett frekvencia fölött`, R`$f_v=97{,}6$ és $107$ MHz: a két adó`],
      ker: [R`$f_\text{osc}$: az oszcillátor frekvenciája`, R`$f_t$: tükörfrekvencia`],
      lv: [S('97,6 MHz', R`Felső keverésnél az oszcillátor $f_\mathrm{KF}$-fel a vett frekvencia felett van, a tükör még egyszer $f_\mathrm{KF}$-fel feljebb (A1).`, [
          ['behelyettesítés', R`f_\text{osc}=97{,}6+10{,}7=108{,}3\ \text{MHz}`, ''],
          ['behelyettesítés', R`f_t=108{,}3+10{,}7=119\ \text{MHz}`, R`ellenőrzés: $119-108{,}3=10{,}7$`]]),
        S('107 MHz', 'Ugyanígy.', [
          ['behelyettesítés', R`f_\text{osc}=107+10{,}7=117{,}7\ \text{MHz}\qquad f_t=117{,}7+10{,}7=128{,}4\ \text{MHz}`, '']])],
      ered: [R`97{,}6\ \text{MHz: }f_\text{osc}=108{,}3,\ f_t=119\ \text{MHz}\qquad107\ \text{MHz: }f_\text{osc}=117{,}7,\ f_t=128{,}4\ \text{MHz}`],
      chk: [R`Mindkét tükör a CCIR FM-sáv (87,5 és 108 MHz) fölött van, ezért egy sávszűrő kiszűri. Ezért választják a 10,7 MHz-et: $2f_\mathrm{KF}=21{,}4$ MHz nagyobb a sáv szélességénél (20,5 MHz).`], links: [src5(['5o_24_2', '5o_24_3'])] },

    { id: 'o8_02', num: '8.2', title: '24…36 MHz, KF 18 MHz', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 24. oldal · 5o_24_4`,
      task: R`<p>A vételi sáv 24 és 36 MHz között van, a KF 18 MHz. a) Az oszcillátor tartománya felső és alsó keverésnél, melyik jobb? b) Alsó keverésnél a 25,5 MHz-hez? c) Tükörfrekvencia, mi vele a gond?</p>`,
      ad: [R`$f_v=24\ldots36$ MHz: vételi sáv`, R`$f_\mathrm{KF}=18$ MHz`],
      ker: [R`a) $f_\text{osc}$ tartománya mindkét esetben`, R`b) $f_\text{osc}$ a 25,5 MHz-hez, alsó keverés`, R`c) $f_t$ és a gond vele`],
      lv: [S('a) Hangolási tartomány', R`A sáv két szélére kiszámoljuk az oszcillátort (A1). Egy oszcillátort annál könnyebb megépíteni, minél kisebb a legnagyobb és a legkisebb frekvencia aránya.`, [
          ['behelyettesítés', R`\text{felső: }24+18=42\ \ldots\ 36+18=54\ \text{MHz}\qquad\frac{54}{42}=1{,}29`, ''],
          ['behelyettesítés', R`\text{alsó: }24-18=6\ \ldots\ 36-18=18\ \text{MHz}\qquad\frac{18}{6}=3`, ''],
          ['ellenőrzés', R`1{,}29<3`, 'a felső keverés a jobb']]),
        S('b) Alsó keverés, 25,5 MHz', '', [
          ['behelyettesítés', R`f_\text{osc}=25{,}5-18=7{,}5\ \text{MHz}`, '']]),
        S('c) A tükör', R`Az a másik frekvencia, amely 7,5 MHz-cel keverve szintén 18 MHz-et ad. A különbség $f-7{,}5=\pm18$ ad 25,5-et (a hasznos jelet) és $-10{,}5$-et, ami a 10,5 MHz-es jelnek felel meg: ezt az <b>összegfrekvencia</b> viszi a KF-re.`, [
          ['behelyettesítés', R`f_t=|f_v-2f_\mathrm{KF}|=|25{,}5-36|=10{,}5\ \text{MHz}`, ''],
          ['ellenőrzés', R`10{,}5+7{,}5=18\ \text{MHz}`, 'tényleg a KF-re esik']]),
        S('c) Mi vele a gond?', R`A tükrök a sáv bejárásakor $|24-36|=12$ MHz és $|36-36|=0$ között mozognak: ezt a keverő előtt egy hangolt szűrőnek kell elnyomnia. Ráadásul alsó keverésnél az oszcillátor a sáv tetején 18 MHz-en, pont a KF-en jár, és közvetlenül bejut a KF-erősítőbe. Felső keverésnél ($f_t=60\ldots72$ MHz) ezek a gondok nincsenek.`, [])],
      ered: [R`\text{a) felső: }42\ldots54\ \text{MHz, alsó: }6\ldots18\ \text{MHz, a felső a jobb}\qquad\text{b) }7{,}5\ \text{MHz}\qquad\text{c) }f_t=10{,}5\ \text{MHz}`],
      gy: R`<p>A gyűjtemény tükörként $F+f_0=25{,}5+7{,}5=33$ MHz-et ad.</p>`,
      fix: R`A 33 MHz a keverés összegfrekvenciája, nem tükör: $|33-7{,}5|=25{,}5\ne18$. A tükör 10,5 MHz.`, links: [src5(['5o_24_4'])] },

    { id: 'o8_03', num: '8.3', title: 'DVB-T.HU multiplex nettó bitsebessége', tags: ['vizsga'],
      src: R`5-ösöm 25…26. oldal · 5o_25_2`,
      task: R`<p>6817 vivő, ebből 6048 hasznos, $T_0=896$ µs, $GI=1/4$, 64-QAM, RS(204,188), FEC 3/4. Mekkora a nettó bitsebesség, és hány 1,5 Mbit/s-os csatorna fér el?</p>`,
      ad: [R`$N=6817$ vivő, ebből $N_\text{hasznos}=6048$ visz adatot`, R`$T_0=896$ µs: hasznos szimbólumidő`, R`$GI=1/4$: védőintervallum, $T_0$ negyede`, R`64-QAM: $\log_264=6$ bit/szimbólum/vivő`, R`FEC 3/4 és RS(204,188): a két hibajavító kód aránya`],
      ker: [R`$v_\text{nettó}$ és a csatornák száma`],
      lv: [S('Sávszélesség (ellenőrzésképpen)', R`A vivőköz $1/T_0=1{,}116$ kHz, a vivők sávja kb. $(N+1)/T_0$ (A2).`, [
          ['behelyettesítés', R`B=\frac{6818}{896\ \mu\text{s}}=7{,}61\ \text{MHz}`, 'belefér a 8 MHz-es csatornába']]),
        S('Szimbólumsebesség', R`Egy OFDM-szimbólum a védőintervallummal $(1+1/4)\cdot896=1120$ µs. Ennyi idő alatt 6048 hasznos QAM-szimbólum megy át.`, [
          ['behelyettesítés', R`R_s=\frac{6048}{1120\ \mu\text{s}}=5{,}4\ \text{MBd}`, '']]),
        S('Nettó bitsebesség', R`Szorozzuk a bit/szimbólummal, majd a két kód arányával.`, [
          ['számérték', R`5{,}4\cdot6=32{,}4\ \text{Mbit/s}`, 'bruttó'],
          ['számérték', R`32{,}4\cdot\frac34\cdot\frac{188}{204}=24{,}3\cdot0{,}922=22{,}4\ \text{Mbit/s}`, 'nettó']]),
        S('Csatornák', '', [
          ['számérték', R`\frac{22{,}4}{1{,}5}=14{,}9\ \Rightarrow\ 14\ \text{csatorna}`, 'egész számú csatorna fér el']])],
      ered: [R`v_\text{nettó}=22{,}4\ \text{Mbit/s}\qquad14\ \text{teljes csatorna (14,9)}`], links: [src5(['5o_25_2'])] },

    { id: 'o8_04', num: '8.4', title: 'Miért QAM és AM-VSB?', tags: ['beugro'],
      src: R`5-ösöm 24. oldal · 5o_24_1`,
      task: R`<p>Miért használunk a műsorszórásban QAM-et és AM-VSB-t?</p>`,
      ad: [R`az analóg színes TV jelei: széles sávú, egyenszintet is tartalmazó képjel ($Y$) és két színkülönbségi jel`],
      ker: [R`a két modulációs mód indoklása`],
      lv: [S('QAM', R`A színsegédvivőt két, egymásra merőleges (koszinusz és szinusz) vivővel modulálják: két független jelet, a két színkülönbségi jelet visz ugyanabban a sávban, egymás zavarása nélkül. Ugyanez az elv a digitális QAM-nél: két kvadratúra-csatorna egy sávban.`, []),
        S('AM-VSB', R`A képjel 5 MHz körüli széles és egyenszintet (0 Hz körüli összetevőt) is tartalmaz. AM-DSB-vel a sáv 10 MHz lenne: pazarló. SSB-hez a vivő közvetlen közelében kellene éles szűrő, ez DC-tartalmú jelnél nem valósítható meg. A csonka oldalsáv (VSB) az egyik oldalsávot nagyrészt levágja, csak egy kis maradékot hagy: a sáv majdnem a felére csökken, és a jel egyszerű burkolódetektorral demodulálható.`, [])],
      ered: [R`\text{QAM: két független jel egy sávban}\qquad\text{AM-VSB: majdnem fele sáv, burkolódetektorral vehető}`],
      chk: [R`A gyűjtemény válasza („a QAM két szín esetén hasznos, frekvencianyereséggel jár (?)”) bizonytalan, a VSB-részlet nagyjából jó.`], links: [src5(['5o_24_1'])] }
  ]
};
