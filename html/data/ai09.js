'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f9', num: '9', short: 'Műsorszórás', title: 'Műsorszórás, sztereó FM, digitális TV',
  lead: R`Szuperheterodin vevő (oszcillátor, tükörfrekvencia), az FM sztereó multiplex jel szerkezete, és a DVB-C, DVB-T bitsebesség-számítása.`,
  alap: [
    { id: 'a9-szuper', badge: 'A1', title: 'Szuperheterodin: oszcillátor és tükör',
      html: R`<p>A vevő a venni kívánt $f_v$ jelet a helyi oszcillátor $f_\text{osc}$ jelével keveri (szorozza). A különbségi frekvencia az állandó <b>középfrekvencia</b>: $|f_v-f_\text{osc}|=f_\mathrm{KF}$. <b>Felső keverés:</b> $f_\text{osc}=f_v+f_\mathrm{KF}$, a tükör $f_v+2f_\mathrm{KF}$. <b>Alsó keverés:</b> $f_\text{osc}=f_v-f_\mathrm{KF}$, a tükör $|f_v-2f_\mathrm{KF}|$.</p><p>A <b>tükör</b> az a másik frekvencia, amely az oszcillátorral <b>szintén</b> $f_\mathrm{KF}$-et ad (az oszcillátor túloldalán). Csak a keverő előtti, hangolt bemeneti (RF) szűrő tudja csillapítani. A felső keverés előnye a kisebb relatív hangolási tartomány.</p>`,
      key: R`Ha $2f_\mathrm{KF}$ nagyobb a vételi sáv szélességénél, minden tükör a sávon kívülre esik.` },
    { id: 'a9-sztereo', badge: 'A2', title: 'FM sztereó multiplex',
      html: R`<p>$L$, $R$: a bal és a jobb csatorna. A multiplex jel (az FM-modulátor bemenete):</p><ul><li>$M=L+R$ a 50 Hz és 15 kHz közötti sávban (ezt hallja a mono vevő),</li><li>19 kHz-es pilotjel (a vevő ebből állítja elő a 38 kHz-et),</li><li>$S=L-R$ AM-DSB/SC-vel a 38 kHz-es, elnyomott segédvivőn: 23 és 53 kHz között,</li><li>RDS 57 kHz-en.</li></ul><p>Egy csatornán megszólaló $f$ frekvenciájú hang $M$-ben és $S$-ben is megjelenik, így az összetevők: $f$, $38\pm f$ kHz és a pilot. A 15 kHz feletti hangot a bemeneti szűrő levágja.</p>` },
    { id: 'a9-dvb', badge: 'A3', title: 'DVB-C és DVB-T bitsebesség',
      html: R`<p>DVB-C (egyvivős QAM): $(1+\alpha)/T\le8$ MHz, bruttó $=\log_2M/T$, nettó $=$ bruttó $\cdot188/204$ (RS(204,188): 204 bájtból 188 a hasznos). DVB-T (OFDM): 6817 vivő, ebből 6048 hasznos, $T_0$ a hasznos szimbólumidő, $GI$ a védőintervallum aránya:</p>$$R_s=\frac{6048}{(1+GI)T_0}\qquad v_\text{nettó}=R_s\log_2M\cdot\text{FEC}\cdot\frac{188}{204}$$`,
      key: R`A szimbólumsebesség felső korlát, felfelé kerekíteni nem szabad.` }
  ],
  ex: [
    { id: 'ai9_01', num: '9.1', title: 'Felső keverés: 97,6 és 107 MHz', tags: ['vizsga'],
      src: R`ALL-IN 44., 66…67., 74., 141. oldal · ai2016_01_12_2, ai2014_12_22_5, ai2014_01_07_5, aiD_9_10 (és 5-ösöm 24. oldal)`,
      task: R`<p>CCIR FM, $f_\mathrm{KF}=10{,}7$ MHz, felső keverés. Hová hangoljuk az oszcillátort, és hol a tükör, ha az adó a) 97,6 MHz, b) 107 MHz?</p>`,
      ad: [R`$f_\mathrm{KF}=10{,}7$ MHz, felső keverés`, R`a) $f_v=97{,}6$ MHz, b) $f_v=107$ MHz`],
      ker: [R`$f_\text{osc}$, $f_t$`],
      lv: [S('a) 97,6 MHz', R`Az oszcillátor $f_\mathrm{KF}$-fel a vett frekvencia felett, a tükör még egyszer $f_\mathrm{KF}$-fel feljebb (A1).`, [
          ['behelyettesítés', R`f_\text{osc}=97{,}6+10{,}7=108{,}3\ \text{MHz}\qquad f_t=108{,}3+10{,}7=119\ \text{MHz}`, R`ellenőrzés: $119-108{,}3=10{,}7$`]]),
        S('b) 107 MHz', '', [
          ['behelyettesítés', R`f_\text{osc}=117{,}7\ \text{MHz}\qquad f_t=128{,}4\ \text{MHz}`, '']])],
      ered: [R`\text{a) }108{,}3\ \text{és}\ 119\ \text{MHz}\qquad\text{b) }117{,}7\ \text{és}\ 128{,}4\ \text{MHz}`], links: [srcAI(['ai2016_01_12_2', 'ai2014_12_22_5', 'ai2014_01_07_5', 'aiD_9_10'])] },

    { id: 'ai9_02', num: '9.2', title: 'A teljes CCIR sáv (hivatalos megoldás)', tags: ['vizsga'],
      src: R`ALL-IN 138. oldal · aiD_9_4`,
      task: R`<p>87,5…108 MHz, KF 10,7 MHz. a) Felső keverésnél milyen sávban hangolható az oszcillátor? b) Hová a 94,8 MHz-hez? c) A tükre? d) Miért jó a 10,7 MHz?</p>`,
      ad: [R`vételi sáv: 87,5 és 108 MHz között (20,5 MHz széles)`, R`$f_\mathrm{KF}=10{,}7$ MHz, felső keverés`],
      ker: [R`a) az oszcillátor tartománya`, R`b) $f_\text{osc}$ a 94,8 MHz-hez`, R`c) $f_t$`, R`d) indoklás`],
      lv: [S('a) Tartomány', R`A sáv két szélére:`, [['behelyettesítés', R`87{,}5+10{,}7=98{,}2\ \ldots\ 108+10{,}7=118{,}7\ \text{MHz}`, '']]),
        S('b), c) 94,8 MHz', '', [['behelyettesítés', R`f_\text{osc}=94{,}8+10{,}7=105{,}5\ \text{MHz}\qquad f_t=94{,}8+21{,}4=116{,}2\ \text{MHz}`, '']]),
        S('d) Miért jó a 10,7 MHz?', R`A legalsó adó tükre is a sáv fölé esik, mert $2f_\mathrm{KF}=21{,}4$ MHz nagyobb a sáv 20,5 MHz-es szélességénél. A tükrök sávjában (108,9 és 129,4 MHz között) nincs FM-műsor, egy rögzített sávszűrő elég.`, [
          ['ellenőrzés', R`87{,}5+21{,}4=108{,}9>108`, ''] ])],
      ered: [R`\text{a) }98{,}2\ldots118{,}7\ \text{MHz}\qquad\text{b) }105{,}5\ \text{MHz}\qquad\text{c) }116{,}2\ \text{MHz}\qquad\text{d) }2f_\mathrm{KF}>20{,}5\ \text{MHz}`], links: [srcAI(['aiD_9_4'])] },

    { id: 'ai9_03', num: '9.3', title: '24…36 MHz, KF 18 MHz: felső vagy alsó keverés?', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 142. oldal · aiD_9_15 (és 5-ösöm 24. oldal)`,
      task: R`<p>A vételi sáv 24 és 36 MHz között van, a KF 18 MHz. a) Mekkora tartományt fog át az oszcillátor felső, illetve alsó keverésnél? Melyik jobb? b) Alsó keverésnél hová kell hangolni a 25,5 MHz-hez? c) A tükre, és mi vele a gond?</p>`,
      ad: [R`$f_v=24\ldots36$ MHz, $f_\mathrm{KF}=18$ MHz`],
      ker: [R`a) $f_\text{osc}$ tartománya`, R`b) $f_\text{osc}$ alsó keverésnél`, R`c) $f_t$`],
      lv: [S('a) Hangolási tartomány', R`Az oszcillátort annál könnyebb megépíteni, minél kisebb a legnagyobb és a legkisebb frekvencia aránya.`, [
          ['behelyettesítés', R`\text{felső: }42\ldots54\ \text{MHz},\ \tfrac{54}{42}=1{,}29\qquad\text{alsó: }6\ldots18\ \text{MHz},\ \tfrac{18}{6}=3`, 'a felső a jobb']]),
        S('b) Alsó keverés', '', [['behelyettesítés', R`f_\text{osc}=25{,}5-18=7{,}5\ \text{MHz}`, '']]),
        S('c) A tükör', R`Az a frekvencia, amely 7,5 MHz-cel keverve szintén 18 MHz-et ad. Mivel $7{,}5<18$, ez csak az összegfrekvencián lehet: $f_t+7{,}5=18$.`, [
          ['behelyettesítés', R`f_t=|f_v-2f_\mathrm{KF}|=|25{,}5-36|=10{,}5\ \text{MHz}`, R`ellenőrzés: $10{,}5+7{,}5=18$`]]),
        S('c) A gond', R`A tükrök a sáv bejárása közben 12 MHz és 0 között mozognak, ezeket egy hangolt bemeneti szűrőnek kell elnyomnia. Ráadásul a sáv tetején (36 MHz) az oszcillátor 18 MHz-en, pont a KF-en jár, és közvetlenül bejut a KF-erősítőbe. Felső keverésnél ($f_t=60\ldots72$ MHz) ezek a gondok nincsenek.`, [])],
      ered: [R`\text{a) felső: }42\ldots54\ \text{MHz, alsó: }6\ldots18\ \text{MHz, a felső a jobb}\qquad\text{b) }7{,}5\ \text{MHz}\qquad\text{c) }f_t=10{,}5\ \text{MHz}`],
      fix: R`A gyűjtemény tükörként 33 MHz-et ad ($F+f_0$): ez a keverés összegfrekvenciája, $|33-7{,}5|=25{,}5\ne18$, a 33 MHz-ből nem lesz KF.`, links: [srcAI(['aiD_9_15'])] },

    { id: 'ai9_04', num: '9.4', title: 'Műholdvevő: 10,7…11,7 GHz-ből 1…2 GHz', tags: ['vizsga'],
      src: R`ALL-IN 141. oldal · aiD_9_9 (hivatalos)`,
      task: R`<p>A 10,7…11,7 GHz-es műholdas sávot egy állandó oszcillátorral az 1…2 GHz-es beltéri sávba kell tenni. Adjon meg oszcillátorfrekvenciát, és hol van a tükrök sávja?</p>`,
      ad: [R`$f_v=10{,}7\ldots11{,}7$ GHz`, R`kimenő (KF-)sáv: 1 és 2 GHz között`],
      ker: [R`$f_\text{osc}$ és a tükrök sávja`],
      lv: [S('Alsó keverés (oszcillátor a sáv alatt)', R`A sáv alja az 1 GHz-re, a teteje a 2 GHz-re kerüljön.`, [
          ['behelyettesítés', R`f_\text{osc}=10{,}7-1=11{,}7-2=9{,}7\ \text{GHz}`, ''],
          ['behelyettesítés', R`f_t=f_\text{osc}-(1\ldots2)=7{,}7\ldots8{,}7\ \text{GHz}`, '']]),
        S('Felső keverés (oszcillátor a sáv felett)', R`Itt a sáv megfordul: 10,7 GHz-ből 2 GHz, 11,7-ből 1 GHz lesz.`, [
          ['behelyettesítés', R`f_\text{osc}=10{,}7+2=11{,}7+1=12{,}7\ \text{GHz}`, ''],
          ['behelyettesítés', R`f_t=f_\text{osc}+(1\ldots2)=13{,}7\ldots14{,}7\ \text{GHz}`, '']])],
      ered: [R`9{,}7\ \text{GHz (tükrök }7{,}7\ldots8{,}7\ \text{GHz)}\qquad\text{vagy}\qquad12{,}7\ \text{GHz (tükrök }13{,}7\ldots14{,}7\ \text{GHz)}`],
      chk: [R`A gyakorlatban (LNB) a 9,75 GHz körüli alsó oszcillátor terjedt el, a sáv nem fordul meg.`], links: [srcAI(['aiD_9_9'])] },

    { id: 'ai9_05', num: '9.5', title: 'A sztereó multiplex jel és egy-egy fütty', tags: ['vizsga'],
      src: R`ALL-IN 45…46., 139. oldal · ai2016_01_12_2 c), aiD_9_5`,
      task: R`<p>a) Rajzolja fel a sztereó jelet az FM előtt! b) Milyen összetevők jelennek meg, ha valaki 440 Hz-et fütyül a bal mikrofonba? c) Ha a bal mikrofon 10 kHz-et vesz? d) Ha a jobb mikrofon 25 kHz-et?</p>`,
      ad: [R`a multiplex jel felépítése (A2)`],
      ker: [R`b), c), d) a multiplex jel összetevői`],
      lv: [S('a) A spektrum', R`$M$: 0,05 és 15 kHz között, pilot 19 kHz-en, $S$ két oldalsávja 23 és 53 kHz között (a 38 kHz-es segédvivő elnyomva), RDS 57 kHz-en.`, []),
        S('b) 440 Hz balra', R`Csak $L$-ben van, ezért $M=L+R$ és $S=L-R$ is tartalmazza. $S$ a 38 kHz körül két oldalsávot ad.`, [
          ['definíció', R`0{,}44\ \text{kHz},\quad38\pm0{,}44=37{,}56\ \text{és}\ 38{,}44\ \text{kHz},\quad19\ \text{kHz (pilot)}`, '']]),
        S('c) 10 kHz balra', '', [['definíció', R`10,\quad38\pm10=28\ \text{és}\ 48,\quad19\ \text{kHz}`, '']]),
        S('d) 25 kHz jobbra', R`A 15 kHz-es bemeneti aluláteresztő levágja.`, [['ellenőrzés', R`25\ \text{kHz}>15\ \text{kHz}`, 'csak a pilot marad']])],
      ered: [R`\text{b) }0{,}44;\ 19;\ 37{,}56;\ 38{,}44\ \text{kHz}\qquad\text{c) }10;\ 19;\ 28;\ 48\ \text{kHz}\qquad\text{d) csak }19\ \text{kHz}`], links: [srcAI(['ai2016_01_12_2', 'aiD_9_5'])] },

    { id: 'ai9_06', num: '9.6', title: 'Fütty a jobb mikrofonba: két feleletválasztós', tags: ['beugro', 'javitas'],
      src: R`ALL-IN 141…142. oldal · aiD_9_11 (5.3.), aiD_9_13 (5.1.)`,
      task: R`<p>a) 720 Hz: A) 18 280 Hz B) 19 720 Hz C) 19 kHz D) 38 720 Hz. b) 520 Hz: A) 38 520 Hz B) 520 Hz C) 38 kHz D) 19 kHz. Melyek a multiplex jel összetevői?</p>`,
      ad: [R`egy hang a jobb csatornán`],
      ker: [R`a multiplex jel összetevői`],
      lv: [S('Az összetevők', R`A jobb csatorna hangja $M$-ben $+f$, $S$-ben $-f$ előjellel szerepel, a frekvenciák ugyanazok, mint balra (A2). A 38 kHz-es segédvivő el van nyomva, a pilot mindig jelen van.`, [
          ['definíció', R`f,\quad38\pm f,\quad19\ \text{kHz}`, '']]),
        S('a) 720 Hz', '', [['számérték', R`0{,}72;\ 19;\ 37{,}28;\ 38{,}72\ \text{kHz}`, 'C és D igaz']]),
        S('b) 520 Hz', '', [['számérték', R`0{,}52;\ 19;\ 37{,}48;\ 38{,}52\ \text{kHz}`, 'A, B és D igaz, C hamis (elnyomott)']])],
      ered: [R`\text{a) C és D}\qquad\text{b) A, B és D}`],
      fix: R`A gyűjtemény az a)-ra csak D-t (megjegyzéssel: „a C-t nem kéne bejelölni?”), a b)-re A, B-t ad. A pilot a multiplex jel része.`, links: [srcAI(['aiD_9_11', 'aiD_9_13'])] },

    { id: 'ai9_07', num: '9.7', title: 'Ha az S komponens 6 dB-lel csillapodik', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 12., 57. oldal · ai2020_06_02_Q2, ai2014_12_15_5`,
      task: R`<p>a) Az FM sztereó alapsávi spektruma. b) Miért halljuk mono vevőn mindkét csatornát? c) Mi történik, ha az amplitúdóhelyes $M$-hez képest $S$ 6 dB-lel csillapodik?</p>`,
      ad: [R`$S$ az $M$-hez képest $-6$ dB, azaz feleakkora amplitúdójú`],
      ker: [R`a) spektrum`, R`b) indoklás`, R`c) a visszaállított $L'$, $R'$`],
      lv: [S('a), b)', R`A spektrum A2 szerint. A mono vevő a 15 kHz-es aluláteresztő után csak $M=L+R$-et kapja, ebben mindkét csatorna benne van.`, []),
        S('c) A vevő visszaállítása', R`Legyen $M=(L+R)/2$ és $S=(L-R)/2$, a vevő $L'=M+S$, $R'=M-S$-et képez. Ha $S$ fele akkora:`, [
          ['behelyettesítés', R`L'=\frac{L+R}{2}+\frac{L-R}{4}=0{,}75L+0{,}25R\qquad R'=0{,}25L+0{,}75R`, ''],
          ['számérték', R`20\lg\frac{0{,}75}{0{,}25}=20\lg3=9{,}5\ \text{dB}`, 'csatornaelválasztás']])],
      ered: [R`\text{c) áthallás: a bal csatornában a jobb is szól, csak 9,5 dB-lel halkabban, a sztereó kép összeszűkül}`],
      fix: R`A Moodle-válasz (a zaj „jobban beleszámít”) 0 pontot kapott, az ALL-IN 2014-es változatában „passz”.`, links: [srcAI(['ai2020_06_02_Q2', 'ai2014_12_15_5'])] },

    { id: 'ai9_08', num: '9.8', title: 'DVB-C 256-QAM-mel, α = 1/3', tags: ['vizsga'],
      src: R`ALL-IN 32…34., 75…76., 127. oldal · ai2015_12_16_4, ai2014_01_07_9, aiD_7_11 (és 5-ösöm 6. oldal)`,
      task: R`<p>8 MHz-es raszter, 33,33%-os emelt koszinusz, 256-QAM (RS nélkül). a) Szimbólum- és bitsebesség? b) Hány 1,5 Mbit/s-os csatorna fér el, mi a 6 Mbit/s-os kódolás előnye és hátránya? c) Mi az 1024-QAM előnye és hátránya?</p>`,
      ad: [R`$B=8$ MHz, $\alpha=1/3$, $M=256$`],
      ker: [R`a) $1/T$, $v$`, R`b) csatornaszám`, R`c) 1024-QAM`],
      lv: [S('a) Szimbólumsebesség', R`Vivőfrekvenciás emelt koszinusz: $(1+\alpha)/T\le B$.`, [
          ['tétel', R`\frac43\cdot\frac1T\le8\ \text{MHz}\ \Rightarrow\ \frac1T=6\ \text{MBd}`, '']]),
        S('a), b) Bitsebesség, csatornák', R`$\log_2256=8$ bit/szimbólum.`, [
          ['számérték', R`6\cdot8=48\ \text{Mbit/s}\qquad\frac{48}{1{,}5}=32\ \text{csatorna}`, ''],
          ['számérték', R`\frac{48}{6}=8\ \text{csatorna}`, '6 Mbit/s-mal: jobb kép (HD), de kevesebb műsor']]),
        S('c) 1024-QAM', R`10 bit/szimbólum: $6\cdot10=60$ Mbit/s (40 csatorna). A pontok sűrűbbek: kisebb zaj- és fázistűrés (kb. 1,8°), nagyobb jel-zaj viszony kell.`, [])],
      ered: [R`\text{a) }6\ \text{MBd},\ 48\ \text{Mbit/s}\qquad\text{b) }32\ \text{csatorna (6 Mbit/s-mal 8)}\qquad\text{c) 60 Mbit/s, de kisebb zajtűrés}`], links: [srcAI(['ai2015_12_16_4', 'ai2014_01_07_9', 'aiD_7_11'])] },

    { id: 'ai9_09', num: '9.9', title: 'DVB-C 64-QAM-mel, α = 15%, RS(204,188)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 58…60. oldal · ai2014_12_15_7`,
      task: R`<p>Hány 1,5 Mbit/s-os csatorna fér el egy 8 MHz-es raszterben 64-QAM-mel, 15%-os lekerekítéssel és RS(204,188) kóddal?</p>`,
      ad: [R`$B=8$ MHz, $\alpha=0{,}15$, $M=64$ (6 bit), kódarány $188/204$`],
      ker: [R`a csatornák száma`],
      lv: [S('Szimbólumsebesség', R`$(1+\alpha)/T\le B$, ez felső korlát, felfelé nem kerekíthetünk.`, [
          ['tétel', R`\frac1T=\frac{8}{1{,}15}=6{,}957\ \text{MBd}`, '']]),
        S('Nettó bitsebesség és csatornák', '', [
          ['számérték', R`6{,}957\cdot6\cdot\frac{188}{204}=41{,}74\cdot0{,}922=38{,}47\ \text{Mbit/s}`, ''],
          ['számérték', R`\frac{38{,}47}{1{,}5}=25{,}6\ \Rightarrow\ 25\ \text{csatorna}`, 'csak egész csatorna fér el']])],
      ered: [R`25\ \text{csatorna}`],
      fix: R`A gyűjtemény 7 MBd-ra kerekít felfelé (ehhez már 8,05 MHz kellene). A csatornaszám véletlenül ugyanaz.`, links: [srcAI(['ai2014_12_15_7'])] },

    { id: 'ai9_10', num: '9.10', title: 'Fogalmak: QAM, AM-VSB, OFDM, egyfrekvenciás hálózat', tags: ['beugro'],
      src: R`ALL-IN 137., 140., 145. oldal · aiD_9_3, aiD_9_6, aiD_10_1 (és 5-ösöm 24. oldal)`,
      task: R`<p>Miért QAM és AM-VSB a műsorszórásban? Ismertesse az analóg földi és műholdas, a digitális földi TV és az egyfrekvenciás hálózat jellemzőit! Miért lehet OFDM-mel SFN-t építeni?</p>`,
      ad: [R`fogalmi kérdések`],
      ker: [R`indokolt válaszok`],
      lv: [S('QAM', R`Két, egymásra merőleges (koszinusz és szinusz) vivővel két független jelet (a két színkülönbségi jelet, illetve két adatcsatornát) visz ugyanabban a sávban, egymás zavarása nélkül.`, []),
        S('AM-VSB', R`A képjel széles (kb. 5 MHz) és egyenszintet is tartalmaz. AM-DSB-vel 10 MHz kellene: pazarló. SSB-hez a vivő közvetlen közelében kellene éles szűrő, ez DC-tartalmú jelnél nem megy. A csonka oldalsáv majdnem felezi a sávot, és a jel burkolóval demodulálható.`, []),
        S('A rendszerek', R`Analóg földi TV: kép AM-VSB, szín QAM, hang FM, 7 vagy 8 MHz-es csatorna. Analóg műholdas: FM, 10,7 és 12,75 GHz között, kb. 27 MHz. DVB-T: OFDM (2k vagy 8k vivő), QPSK, 16-QAM vagy 64-QAM, konvolúciós kód és RS(204,188), 7,61 MHz.`, []),
        S('SFN és OFDM', R`Egyfrekvenciás hálózat (SFN): több adó szinkronban, ugyanazon a frekvencián sugározza ugyanazt. A vevőben a többi adó jele késleltetett visszhangként jelenik meg. Az OFDM szimbólumai hosszúak, és védőintervallum előzi meg őket: ha a késés ezen belül van, a visszhang nem okoz ISI-t, sőt a teljesítménye hasznosul.`, [])],
      ered: [R`\text{QAM: két jel egy sávban}\quad\text{VSB: fél sáv, burkolós vétel}\quad\text{SFN: a védőintervallumon belüli visszhang hasznos}`], links: [srcAI(['aiD_9_3', 'aiD_9_6', 'aiD_10_1'])] },

    { id: 'ai9_11', num: '9.11', title: 'PDH és E1: négy állítás', tags: ['beugro'],
      src: R`ALL-IN 142. oldal · aiD_9_14 (5.2.)`,
      task: R`<p>A) Pleziokron Digitális Hierarchia. B) E1 szinten 32 időrésben beszéd. C) Egy időrés 3,9 µs (±1%). D) Csatornánként a jelzés 2 kbit/s.</p>`,
      ad: [R`E1: 2,048 Mbit/s, 125 µs-os keret (8 kHz-es mintavétel), 32 időrés, időrésenként 8 bit`, R`TS0: keretszinkron, TS16: jelzés, a többi 30 beszéd`],
      ker: [R`melyik állítás igaz`],
      lv: [S('A), B)', R`A PDH a Plesiochronous Digital Hierarchy rövidítése: A igaz. A 32 időrésből csak 30 beszéd: B hamis.`, []),
        S('C) Időrés hossza', '', [['számérték', R`\frac{125\ \mu\text{s}}{32}=3{,}906\ \mu\text{s}`, 'C igaz']]),
        S('D) Jelzés csatornánként', R`A TS16 16 keretből álló multikeretben váltakozva viszi a 30 csatorna jelzését: csatornánként 4 bitet 16 keretenként.`, [
          ['számérték', R`\frac{4\ \text{bit}}{16\cdot125\ \mu\text{s}}=\frac{4}{2\ \text{ms}}=2\ \text{kbit/s}`, 'D igaz']])],
      ered: [R`\text{A, C, D igaz, B hamis}`], chk: [R`A gyűjtemény A, D-t ad. A C számszerűen igaz, a kérdező szándéka `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['aiD_9_14'])] }
  ]
};
