'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f11', num: '11', short: 'Forgalom, VoIP', title: 'Forgalmi méretezés és VoIP',
  lead: R`Erlang-B táblázat vagy grafikon, exponenciális tartási idő, kihasználtság, és a VoIP csomagsebesség és sávszélesség számítása.`,
  alap: [
    { id: 'a11-erlang', badge: 'A1', title: 'Jelölések, Erlang-B',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$\lambda$</td><td>hívásintenzitás: átlagosan ennyi hívás érkezik időegységenként (Poisson)</td></tr>
<tr><td>$h$</td><td>átlagos tartási idő (exponenciális eloszlású)</td></tr>
<tr><td>$A$</td><td>felajánlott forgalom, $A=\lambda h$ (Erlang)</td></tr>
<tr><td>$N$</td><td>kiszolgálók (vonalak, vevők, kocsik) száma</td></tr>
<tr><td>$P_b$</td><td>blokkolási valószínűség: a beérkező igény nem kap kiszolgálót</td></tr>
<tr><td>$a$</td><td>kihasználtság: egy kiszolgáló átlagos foglaltsága</td></tr>
</tbody></table></div>$$P_b=\frac{A^N/N!}{\sum_{i=0}^NA^i/i!}\qquad a=\frac{A(1-P_b)}{N}$$<p>Rekurzív alak (kézzel is gyors): $E_0=1$, $E_n=AE_{n-1}/(n+AE_{n-1})$, $P_b=E_N$. Táblázatnál a felajánlott forgalmat <b>felfelé</b> kerekítjük, és azt a legkisebb $N$-et keressük, amelynél $P_b$ még a határ alatt van. Exponenciális tartási időnél $P(X>t)=e^{-t/h}$.</p>`,
      key: R`Lebonyolított forgalom $=A(1-P_b)=$ az átlagosan foglalt kiszolgálók száma.` },
    { id: 'a11-voip', badge: 'A2', title: 'VoIP sávszélesség',
      html: R`<p>$v_\text{forrás}$: a kodek bitsebessége, $l_p$: egy szegmens hossza (byte), $n$: szegmens csomagonként, $l_\text{fej}$: a fejrészek együtt (byte).</p>$$v_\text{cs}=\frac{v_\text{forrás}}{8\,n\,l_p}\qquad B=8\,(n\,l_p+l_\text{fej})\cdot v_\text{cs}$$<p>Több szegmens egy csomagban: kevesebb fejrész, kisebb sávszélesség, de nagyobb csomagolási késleltetés, és egy elveszett csomag több beszédet visz el.</p>` }
  ],
  ex: [
    { id: 'ai11_01', num: '11.1', title: 'DTMF-vevők méretezése', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 19., 39…40. oldal · ai2016_01_05_3, ai2016_01_05_3b`,
      task: R`<p>A tárcsázás átlagosan 10 s, óránként legalább 60 000 hívás, a blokkolás legfeljebb 0,2%, exponenciális eloszlások. a) Felajánlott forgalom? b) Hány DTMF-vevő kell (a mellékelt táblázatból: 166 Erl → 197, 167 Erl → 198 a 0,2%-os oszlopban)? c) Kihasználtság?</p>`,
      ad: [R`$\lambda=60\,000$ hívás/óra`, R`$h=10$ s: ennyi ideig foglal egy DTMF-vevőt a tárcsázás`, R`$P_b\le0{,}2\%$`],
      ker: [R`a) $A$`, R`b) $N$`, R`c) $a$`],
      lv: [S('a) Felajánlott forgalom', R`$\lambda$-t és $h$-t azonos időegységre kell hozni.`, [
          ['definíció', R`A=\lambda h=\frac{60\,000}{3600\ \text{s}}\cdot10\ \text{s}=16{,}67\cdot10=166{,}67\ \text{Erl}`, '']]),
        S('b) Vevők száma', R`A táblázatban felfelé kerekítünk (167 Erl), különben a blokkolás a határ fölé kerülhet.`, [
          ['számérték', R`167\ \text{Erl}\ \to\ N=198`, ''],
          ['ellenőrzés', R`P_b(166{,}67;\ 197)=0{,}212\%>0{,}2\%\qquad P_b(166{,}67;\ 198)=0{,}178\%`, 'rekurzióval: 197 kevés']]),
        S('c) Kihasználtság', '', [
          ['definíció', R`a=\frac{166{,}67\cdot(1-0{,}0018)}{198}=0{,}84`, '']])],
      ered: [R`\text{a) }A=166{,}7\ \text{Erl}\qquad\text{b) }N=198\qquad\text{c) }a\approx84\%`],
      fix: R`Az egyik kézírásos változat 166-ra kerekít lefelé, és 197-et ad. A gépelt változat (167 → 198) helyes.`, links: [srcAI(['ai2016_01_05_3', 'ai2016_01_05_3b'])] },

    { id: 'ai11_02', num: '11.2', title: 'Autókölcsönző két kocsival', tags: ['vizsga'],
      src: R`ALL-IN 30…31. oldal · ai2016_06_07_7`,
      task: R`<p>Naponta átlagosan 4 ügyfél (Poisson), átlagos bérlés 1,5 nap (exponenciális), 2 kocsi. a) Mekkora a valószínűsége, hogy nem tudnak kocsit adni? b) Átlagos kihasználtság? c) Napi haszon, ha egy kocsi fenntartása 60 USD/nap, a díj 100 USD/nap?</p>`,
      ad: [R`$\lambda=4$ ügyfél/nap, $h=1{,}5$ nap`, R`$N=2$ kocsi (kiszolgáló), aki nem kap, elmegy: Erlang-B`, R`fenntartás 60 USD/kocsi/nap, díj 100 USD/nap`],
      ker: [R`a) $P_b$`, R`b) $a$`, R`c) napi haszon`],
      lv: [S('a) Blokkolás', R`Felajánlott forgalom, majd Erlang-B $N=2$-re.`, [
          ['definíció', R`A=4\cdot1{,}5=6\ \text{Erl}`, ''],
          ['behelyettesítés', R`P_b=\frac{6^2/2!}{1+6+6^2/2!}=\frac{18}{25}=0{,}72`, '']]),
        S('b) Kihasználtság', '', [
          ['definíció', R`a=\frac{6\cdot(1-0{,}72)}{2}=\frac{1{,}68}{2}=0{,}84`, 'átlagosan 1,68 kocsi van kint']]),
        S('c) Haszon', R`A bevétel a kint lévő kocsik átlagos száma szorozva a napi díjjal, a költség minden kocsira jár.`, [
          ['számérték', R`1{,}68\cdot100-2\cdot60=168-120=48\ \text{USD/nap}`, '']])],
      ered: [R`\text{a) }P_b=72\%\qquad\text{b) }a=84\%\qquad\text{c) }48\ \text{USD/nap}`],
      chk: [R`A gyűjtemény az a)-ra „passz”-t ír, pedig a b)-ben kiszámolja ugyanezt, a c) nincs megoldva.`], links: [srcAI(['ai2016_06_07_7'])] },

    { id: 'ai11_03', num: '11.3', title: '15 Erlang: hosszú hívások, kiszolgálók, VoIP', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 46…48., 85…86. oldal · ai2016_01_12_3, ai2016_01_12c_3`,
      task: R`<p>Percenként 5 hívás, átlagosan 3 perc. a) Felajánlott forgalom? b) 100 hívásból hány hosszabb 6 percnél? c) Hány kiszolgáló kell 0,1%-hoz? d) Kihasználtság? e) Elfér-e a forgalom VoIP-pal egy 10 Mbit/s-os vonalon?</p>`,
      ad: [R`$\lambda=5$ hívás/perc, $h=3$ perc (exponenciális)`, R`$P_b\le0{,}1\%$`],
      ker: [R`a) $A$`, R`b) $P(X>6\ \text{perc})$`, R`c) $N$`, R`d) $a$`, R`e) VoIP-kapacitás`],
      lv: [S('a) Forgalom', '', [['definíció', R`A=5\cdot3=15\ \text{Erl}`, '']]),
        S('b) Hosszú hívások', R`Exponenciális eloszlásnál $P(X>t)=e^{-t/h}$ (A1).`, [
          ['behelyettesítés', R`P(X>6)=e^{-6/3}=e^{-2}=0{,}135`, '100-ból kb. 13 vagy 14']]),
        S('c) Kiszolgálók', R`Erlang-B rekurzióval (vagy táblázatból) a legkisebb $N$, ahol $P_b\le0{,}1\%$.`, [
          ['számérték', R`N=27:\ P_b=0{,}160\%\qquad N=28:\ P_b=0{,}086\%`, R`$N=28$`]]),
        S('d) Kihasználtság', '', [['definíció', R`a=\frac{15\cdot0{,}999}{28}=0{,}54`, '']]),
        S('e) VoIP', R`Legfeljebb 28 egyidejű hívás. Egy G.711-es (64 kbit/s) hívás a fejrészekkel kb. 80 és 90 kbit/s között (A2).`, [
          ['közelítés', R`28\cdot87\ \text{kbit/s}\approx2{,}4\ \text{Mbit/s}<10\ \text{Mbit/s}`, 'belefér, kétirányú forgalommal is']])],
      ered: [R`\text{a) }15\ \text{Erl}\quad\text{b) }\approx14\quad\text{c) }N=28\quad\text{d) }a\approx54\%\quad\text{e) belefér}`],
      fix: R`A grafikonos változat 29 kiszolgálót olvas le, a közösségi gépelt kidolgozás a helyes 28-at.`, links: [srcAI(['ai2016_01_12_3', 'ai2016_01_12c_3'])] },

    { id: 'ai11_04', num: '11.4', title: 'GSM-cella 1%-os blokkolással', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 60…62. oldal · ai2014_12_15_9`,
      task: R`<p>GSM, FRF = 12, a hívások átlagosan 2 percesek. Egy órában átlagosan hányan telefonálhatnak egy cellában, ha a blokkolás legfeljebb 1%?</p>`,
      ad: [R`124 vivő, 8 időrés, FRF $=12$`, R`$h=2$ perc $=1/30$ óra`, R`$P_b\le1\%$`],
      ker: [R`$\lambda$: hívás/óra egy cellában`],
      lv: [S('Csatornák egy cellában', R`A vivők a klaszter 12 cellája között oszlanak meg (A1 a 10. fejezetben).`, [
          ['számérték', R`\frac{124\cdot8}{12}=82{,}7\ \Rightarrow\ N=82`, R`a gyűjtemény 125 vivővel 83-at, kerekítve 80-at vesz`]]),
        S('A megengedett forgalom', R`Erlang-B: az a legnagyobb $A$, amelynél $P_b$ még 1%.`, [
          ['számérték', R`N=82:\ A=67{,}2\ \text{Erl}\qquad(N=80:\ 65{,}4\qquad N=83:\ 68{,}2)`, '']]),
        S('Hívásintenzitás', R`$A=\lambda h$-ból, $h$ órában.`, [
          ['átalakítás', R`\lambda=\frac{A}{h}=\frac{67{,}2}{1/30\ \text{h}}=30\cdot67{,}2\approx2020\ \text{hívás/óra}`, '']])],
      ered: [R`\lambda\approx2000\ \text{hívás/óra (82 csatornával 2020)}`],
      fix: R`A gyűjtemény 80 csatornával 65 Erl-t olvas le (ez jó), és 1950 hívás/órát kap. 83 csatornával 2045, 82-vel 2020 jön ki. Nagyságrendileg mind jó, a kerekítést mindig írd le.`, links: [srcAI(['ai2014_12_15_9'])] },

    { id: 'ai11_05', num: '11.5', title: 'Vállalati VoIP G.711-gyel (Moodle 2020)', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 14. oldal · ai2020_06_02_Q6`,
      task: R`<p>10 ms-os szegmensekből 80 byte, csomagonként két szegmens, a fejrészek 47 byte. a) Csomagsebesség? b) A csatorna bitsebessége? c) Milyen hátránya lenne négy szegmensnek csomagonként?</p>`,
      ad: [R`$l_p=80$ byte 10 ms-onként`, R`$n=2$`, R`$l_\text{fej}=47$ byte`],
      ker: [R`a) $v_\text{cs}$`, R`b) $B$`, R`c) $n=4$ hátránya`],
      lv: [S('A forrás', '', [['definíció', R`v_\text{forrás}=\frac{80\cdot8\ \text{bit}}{10\ \text{ms}}=64\ \text{kbit/s}`, 'G.711']]),
        S('a) Csomagsebesség', R`Egy csomag két szegmens, azaz 20 ms beszéd.`, [
          ['behelyettesítés', R`v_\text{cs}=\frac{64\,000}{8\cdot2\cdot80}=\frac{1}{20\ \text{ms}}=50\ \text{csomag/s}`, '']]),
        S('b) Bitsebesség', R`Egy csomag $2\cdot80+47=207$ byte.`, [
          ['behelyettesítés', R`B=207\cdot8\cdot50=82\,800\ \text{bit/s}=82{,}8\ \text{kbit/s}`, '']]),
        S('c) Négy szegmens', R`Kevesebb fej jut a beszédre, de a csomag csak 40 ms beszéd összegyűlése után indulhat, és egy csomag elvesztése 40 ms kiesést jelent.`, [
          ['számérték', R`25\ \text{csomag/s},\ (320+47)\cdot8\cdot25=73{,}4\ \text{kbit/s}`, 'a sávnyereség kicsi, a késés kétszeres']])],
      ered: [R`\text{a) }50\ \text{csomag/s}\qquad\text{b) }82{,}8\ \text{kbit/s}\qquad\text{c) 40 ms csomagolási késleltetés}`],
      fix: R`A hallgató 50 és 100 „bps”-t írt (mértékegység-tévesztés, a fejrészt is kihagyta). A javító 1 + 0 + 0 pontot adott.`, links: [srcAI(['ai2020_06_02_Q6'])] },

    { id: 'ai11_06', num: '11.6', title: 'IP feletti média, fair queuing, WFQ', tags: ['beugro'],
      src: R`ALL-IN 28…29., 74. oldal · ai2016_06_07_5, ai2014_01_07_7 (és 5-ösöm 29. oldal)`,
      task: R`<p>a) Mi nehezíti a „best effort” IP-n a multimédiát? b) Miért nem érdemes RTP helyett TCP-t használni? c) Mire való az IGMP? d) A fair queuing előnye a szigorú prioritással szemben, és a WFQ előnye?</p>`,
      ad: [R`fogalmi kérdések`],
      ker: [R`indokolt válaszok`],
      lv: [S('a) Best effort IP', R`Változó késleltetés (jitter), csomagvesztés, sorrendcsere, és nincs garantált sávszélesség. A valós idejű média ezekre érzékeny.`, []),
        S('b) TCP vagy RTP', R`A TCP az elveszett csomagot újraküldi: mire megérkezik, a lejátszásnál már késő. A torlódásvezérlése ráadásul visszafogja a sebességet. Az RTP (UDP felett) inkább eldobja a késő csomagot, és időbélyeget, sorszámot ad.`, []),
        S('c) IGMP', R`Multicast csoporttagság kezelése: a vevő ezzel jelzi a routernek, melyik csoport (pl. IPTV-csatorna) forgalmát kéri.`, []),
        S('d) Ütemezés', R`Szigorú prioritásnál a magas prioritású sor kiéheztetheti a többit. Fair queuing: folyamonként külön sor, körbejárva kiszolgálva, nincs kiéheztetés. WFQ: ugyanez súlyokkal, a folyamok a súlyuk arányában kapnak sávot, mindenki garantált minimummal.`, [])],
      ered: [R`\text{a) jitter, vesztés}\quad\text{b) újraküldési késés}\quad\text{c) multicast}\quad\text{d) nincs kiéheztetés, WFQ: arányos részesedés}`],
      chk: [R`A gyűjtemény a)-ra a DF és MLR mérőszámokat írja: ezek az IPTV-minőség mérőszámai, nem az okok.`], links: [srcAI(['ai2016_06_07_5', 'ai2014_01_07_7'])] }
  ]
};
