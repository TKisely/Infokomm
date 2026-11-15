'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f6', num: '6', short: 'PAM, ISI', title: 'Digitális alapsávi átvitel (PAM, ISI)',
  lead: R`Az elemi jelből kell kiolvasni, hogy a mintavételi pillanatban mennyi „lóg át” a szomszéd szimbólumokból, és hogy ez elrontja-e a döntést két-, négy- vagy nyolcszintű jelnél.`,
  alap: [
    { id: 'a6-isi', badge: 'A1', title: 'Jelölések, ISI és a többszintű jel próbája',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$d_k$</td><td>a $k$-adik szimbólum ($\pm1$, illetve $\pm1,\pm3,\ldots,\pm(M-1)$)</td></tr>
<tr><td>$h(t)$</td><td>elemi jel: egyetlen $d=1$ szimbólum válasza a vevőben</td></tr>
<tr><td>$h_0$</td><td>az elemi jel a saját mintavételi pillanatában</td></tr>
<tr><td>$h_i$</td><td>az elemi jel $i$ jelzési idővel arrébb (ez lóg át a szomszéd mintába)</td></tr>
<tr><td>$T$</td><td>jelzési idő, $M$ a szintek száma</td></tr>
</tbody></table></div><p>A minta $x_k=h_0d_k+\sum_{i\ne0}h_id_{k-i}$, a második tag a <b>szimbólumközti áthallás (ISI)</b>. A legrosszabb eset, ha a szomszédok a legnagyobb értékükkel ($M-1$) ellene dolgoznak. A döntési küszöbök a névleges szintek között félúton: $0,\ \pm2h_0,\ \pm4h_0,\ldots$ A szem nyitott, ha</p>$$h_0-(M-1)\sum_{i\ne0}|h_i|>0$$<p>és a felső szinteknél a következő küszöböt sem lépi át a minta.</p>`,
      key: R`A zaj nem ISI-ok: az ISI-t a hosszú (Nyquist-feltételt nem teljesítő) elemi jel és az időzítési hiba okozza.` },
    { id: 'a6-nyquist', badge: 'A2', title: 'Nyquist-feltétel, emelt koszinusz',
      html: R`<p>ISI-mentes az elemi jel, ha a spektrumát $1/T$-vel eltolva és összegezve frekvenciafüggetlen állandót kapunk. Az emelt koszinusz ilyen: $1/(2T)$-re (ahol az értéke a fele) pontszimmetrikus lecsengéssel, a sáv $(1+\alpha)/(2T)$ alapsávban, $(1+\alpha)/T$ vivőfrekvenciás átvitelnél. Fehér zajra az optimális vevőszűrő az illesztett szűrő: $H_V=\sqrt{H}$, ha az adó és a vevő egyformán osztozik a teljes $H$-n.</p>` }
  ],
  ex: [
    { id: 'ai6_01', num: '6.1', title: 'Elemi jel 1,25 és 0,45 (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 2. oldal · ai2020_05_26_Q2`,
      task: R`<p>Bináris PAM, $h(t)=1{,}25$ a $(0,T)$-n, $0{,}45$ a $(T,2T)$-n. b) Van-e ISI, ha a mintavétel fázisa $T_0=3T/4$? c) Alkalmas-e négyszintű rendszerre?</p>`,
      ad: [R`$h_0=1{,}25$: az elemi jel értéke a saját időrésében, $h_1=0{,}45$: az értéke a következő időrésben (ez lóg át a következő szimbólumba)`, R`mintavétel az időrés $3T/4$ pontjában`],
      ker: [R`b) van-e ISI, és hibázik-e a döntés`, R`c) négy szint`],
      lv: [S('A minta képlete', R`A $3T/4$-es pontban a saját elemi jel első szakasza (1,25) és az előző szimbólum második szakasza (0,45) adódik össze.`, [
          ['definíció', R`x_k=1{,}25\,d_k+0{,}45\,d_{k-1}`, '']]),
        S('b) Kétszintű', R`$d=\pm1$, a küszöb 0.`, [
          ['számérték', R`x=\pm(1{,}25\pm0{,}45)=\pm1{,}7\ \text{vagy}\ \pm0{,}8`, 'a minta függ az előző bittől: van ISI'],
          ['ellenőrzés', R`0{,}8>0`, 'a döntés így is hibátlan']]),
        S('c) Négyszintű', R`$d\in\{\pm1,\pm3\}$, küszöbök $0$ és $\pm2\cdot1{,}25=\pm2{,}5$, az áthallás legfeljebb $3\cdot0{,}45=1{,}35$.`, [
          ['behelyettesítés', R`d_k=1:\ 1{,}25-1{,}35=-0{,}1<0`, 'átlépi a 0-s küszöböt'],
          ['behelyettesítés', R`d_k=1:\ 1{,}25+1{,}35=2{,}6>2{,}5`, 'a felső küszöböt is'],
          ['ellenőrzés', R`d_k=3:\ 3{,}75-1{,}35=2{,}4<2{,}5`, 'a 3-as szint is hibázhat']])],
      ered: [R`\text{b) van ISI, de a kétszintű döntés hibátlan}\qquad\text{c) négyszintűre nem alkalmas}`], links: [srcAI(['ai2020_05_26_Q2'])] },

    { id: 'ai6_02', num: '6.2', title: 'Elemi jel 1,05 és 0,15: két-, négy-, nyolcszintű', tags: ['vizsga'],
      src: R`ALL-IN 116…117., 121. oldal · aiD_6_2, aiD_6_9 (3.4.)`,
      task: R`<p>Bináris PAM, $h=1{,}05$ a $[0,T]$-n, $0{,}15$ a $[T,2T]$-n. Van-e ISI? Milyen mintákat ad a mintavevő? Alkalmas-e négy-, illetve nyolcszintű rendszerre? Illesztett szűrővel ISI-mentessé tehető-e?</p>`,
      ad: [R`$h_0=1{,}05$, $h_1=0{,}15$`],
      ker: [R`a minták, a négy- és nyolcszintű próba, az illesztett szűrő hatása`],
      lv: [S('Kétszintű minták', R`$x_k=1{,}05d_k+0{,}15d_{k-1}$, $d=\pm1$.`, [
          ['számérték', R`x=\pm(1{,}05\pm0{,}15)=\pm0{,}9\ \text{vagy}\ \pm1{,}2`, 'van ISI, a döntés hibátlan']]),
        S('Négyszintű', R`Küszöbök $0$, $\pm2{,}1$, az áthallás legfeljebb $3\cdot0{,}15=0{,}45$.`, [
          ['behelyettesítés', R`d=1:\ 1{,}05-0{,}45=0{,}6>0\quad\text{és}\quad1{,}05+0{,}45=1{,}5<2{,}1`, ''],
          ['behelyettesítés', R`d=3:\ 3{,}15-0{,}45=2{,}7>2{,}1`, 'alkalmas']]),
        S('Nyolcszintű', R`$d\in\{\pm1,\ldots,\pm7\}$, az áthallás legfeljebb $7\cdot0{,}15=1{,}05$.`, [
          ['behelyettesítés', R`d=1:\ 1{,}05-1{,}05=0`, 'a szem bezárul, nem alkalmas']]),
        S('Illesztett szűrő', R`Az illesztett szűrő a fehér zaj ellen optimális, az ISI-t nem szünteti meg: az elemi jel ettől még két időrésre nyúlik.`, [])],
      ered: [R`\pm0{,}9,\ \pm1{,}2\qquad M=4:\ \text{igen}\qquad M=8:\ \text{nem}\qquad\text{illesztett szűrővel nem tehető ISI-mentessé}`], links: [srcAI(['aiD_6_2', 'aiD_6_9'])] },

    { id: 'ai6_03', num: '6.3', title: R`$H(f)=h_0T\cos^2(\pi fT/2)$`, tags: ['vizsga'],
      src: R`ALL-IN 118…119. oldal · aiD_6_3 (és 5-ösöm 11. oldal)`,
      task: R`<p>Bináris PAM, az elemi jel spektruma $h_0T\cos^2(\tfrac\pi2fT)$, ha $|f|<1/T$. b) Elkerülhető-e az ISI? c) Milyen a fehér zajra optimalizált vevőszűrő? d) Okoz-e ISI-t egy 1200 Hz-es aluláteresztő, ha $T=833$ µs?</p>`,
      ad: [R`$H(f)=h_0T\cos^2(\tfrac\pi2fT)$, ha $|f|<1/T$, máshol 0`, R`d) $T=833$ µs`],
      ker: [R`b) Nyquist-feltétel`, R`c) $H_V$`, R`d) ISI az 1200 Hz-es szűrőtől`],
      lv: [S('Az alak', R`$\cos^2x=\tfrac12(1+\cos2x)$:`, [
          ['átalakítás', R`H(f)=\frac{h_0T}{2}\left(1+\cos\pi fT\right)`, R`$\alpha=1$-es (100%-os) emelt koszinusz`]]),
        S('b) Nyquist', R`A $0\le f\le1/T$ tartományban a $H(f)$ és a $1/T$-vel eltolt $H(f-1/T)$ fed át.`, [
          ['átalakítás', R`\cos^2\!\left(\tfrac\pi2fT-\tfrac\pi2\right)=\sin^2\!\left(\tfrac\pi2fT\right)`, ''],
          ['tétel', R`H(f)+H(f-\tfrac1T)=h_0T(\cos^2+\sin^2)=h_0T`, 'állandó: nincs ISI']]),
        S('c) Vevőszűrő', '', [
          ['definíció', R`H_V(f)=\sqrt{H(f)}\propto\cos\tfrac\pi2fT,\quad|f|<\tfrac1T`, 'illesztett szűrő, koszinusz félhullám']]),
        S('d) Az 1200 Hz-es szűrő', R`A spektrum $1/T$-nél ér véget.`, [
          ['számérték', R`\frac1T=\frac1{833\ \mu\text{s}}=1200\ \text{Hz}`, 'a szűrő semmit sem vág le']])],
      ered: [R`\text{b) ISI-mentes}\qquad\text{c) }H_V\propto\cos(\pi fT/2)\qquad\text{d) nem okoz ISI-t}`], links: [srcAI(['aiD_6_3'])] },

    { id: 'ai6_04', num: '6.4', title: R`$\cos^2$ elemi jel időzítési hibával`, tags: ['vizsga', 'nehez'],
      src: R`ALL-IN 119…120. oldal · aiD_6_4`,
      task: R`<p>$h(t)=h_0\cos^2\left(\frac\pi2\cdot\frac{t-T}{T}\right)$, ha $t\in(0,2T)$. b) Hogyan válasszuk a mintavételt? c) Milyen minták jönnek $t_k=(1{,}1+k)T$-ben? d), e) Négy- és nyolcszintű rendszer a 0,1T-s hibával?</p>`,
      ad: [R`$h(t)$: $0$ és $2T$ között $\cos^2$ alakú „púp”, a csúcsa $t=T$-ben $h_0$, a két végén 0`, R`c) a mintavétel $0{,}1T$-vel késik`],
      ker: [R`b) a jó mintavételi pillanat`, R`c) a minták`, R`d), e) négy- és nyolcszintű próba`],
      lv: [S('b) Ideális mintavétel', R`A saját csúcsánál ($t=T$) mintázunk. Ekkor a szomszéd elemi jelek éppen a végükön ($0$ vagy $2T$) vannak.`, [
          ['ellenőrzés', R`h(T)=h_0\qquad h(0)=h(2T)=0`, 'ISI-mentes']]),
        S('c) 0,1T késés', R`A saját elemi jel $1{,}1T$-ben, a következő (egy jelzési idővel később induló) $0{,}1T$-ben van. Az előző már $2{,}1T$-nél tartana, ott 0.`, [
          ['behelyettesítés', R`h(1{,}1T)=h_0\cos^2(0{,}05\pi)=0{,}9755\,h_0`, ''],
          ['behelyettesítés', R`h(0{,}1T)=h_0\cos^2(-0{,}45\pi)=0{,}0245\,h_0`, ''],
          ['számérték', R`x=\pm(0{,}9755\pm0{,}0245)h_0=\pm h_0\ \text{vagy}\ \pm0{,}951\,h_0`, 'kétszintű']]),
        S('d), e) Többszintű próba', R`Az áthallás legfeljebb $(M-1)\cdot0{,}0245h_0$.`, [
          ['behelyettesítés', R`M=4:\ 0{,}9755-3\cdot0{,}0245=0{,}902>0`, ''],
          ['behelyettesítés', R`M=8:\ 0{,}9755-7\cdot0{,}0245=0{,}804>0`, 'a szem mindkét esetben nyitva']])],
      ered: [R`\text{b) }t=(k+1)T\qquad\text{c) }\pm h_0,\ \pm0{,}951h_0\qquad\text{d), e) négy- és nyolcszintű is működik}`], links: [srcAI(['aiD_6_4'])] },

    { id: 'ai6_05', num: '6.5', title: '1200 baudos PAM: válasszuk meg $f_1$-et, $f_2$-t és A-t', tags: ['vizsga'],
      src: R`ALL-IN 120. oldal · aiD_6_5 (hivatalos)`,
      task: R`<p>1200 baudos PAM. A teljes átviteli függvény emelt koszinusz: 0 Hz-en $A$, $f_2$-nél nulla, $f_1=f_2/2$-nél a fele. Biztosítson ISI-mentességet!</p>`,
      ad: [R`$1/T=1200$ Bd`, R`a spektrum 0 Hz-en $A$, az $f_2$ frekvencián nulla, és $f_1=f_2/2$-nél éppen $A/2$`],
      ker: [R`$f_1$: ahol a spektrum a felére csökken, $f_2$: ahol nullára csökken, $A$: a spektrum értéke 0 Hz-en`],
      lv: [S('A feltétel', R`Nyquist (A2): a lecsengésnek a $1/(2T)$ pontra kell szimmetrikusnak lennie, és ott kell felvennie a felét. Ez a pont tehát $f_1$.`, [
          ['tétel', R`f_1=\frac{1}{2T}=\frac{1200}{2}=600\ \text{Hz}\qquad f_2=2f_1=1200\ \text{Hz}`, R`$\alpha=1$`],
          ['ellenőrzés', R`A\ne0\ \text{tetszőleges}`, 'csak a jel nagyságát skálázza']])],
      ered: [R`f_1=600\ \text{Hz},\ f_2=1200\ \text{Hz},\ A\ne0\ \text{tetszőleges}`], links: [srcAI(['aiD_6_5'])] },

    { id: 'ai6_06', num: '6.6', title: 'Kétutas OOK és Doppler', tags: ['vizsga'],
      src: R`ALL-IN 115…116. oldal · aiD_6_1`,
      task: R`<p>Az OOK jel két úton jut a vevőbe: $T$ késleltetés és 3 dB csillapítás, illetve $2T$ és 9 dB. A jelzési idő $T$, a vivő $1/T$, az amplitúdósorozat 2022002. a) Rajzolja fel a vett jelet! b) Hogyan változik a jelzési sebesség, ha a vevő nagy sebességgel az adó felé halad?</p>`,
      ad: [R`két út: $T$ késés, 3 dB, illetve $2T$ késés, 9 dB`, R`OOK: a vivő amplitúdója a szimbólum (2 vagy 0), egy jelzési idő alatt pont egy vivőperiódus`, R`$a_k$: 2, 0, 2, 2, 0, 0, 2`],
      ker: [R`a) a vett jel amplitúdói`, R`b) Doppler-hatás`],
      lv: [S('Csillapítások szorzóként', R`Feszültségre $20\lg$:`, [
          ['átalakítás', R`10^{-3/20}=0{,}71\qquad10^{-9/20}=0{,}35`, 'arányuk éppen 1/2']]),
        S('A vett amplitúdó', R`A késések egész vivőperiódusok ($T$ és $2T$), ezért a két út vivője azonos fázisban érkezik, az amplitúdók összeadódnak.`, [
          ['definíció', R`u_k=0{,}71\,a_{k-1}+0{,}35\,a_{k-2}`, ''],
          ['számérték', R`u:\ 1{,}42;\ 0{,}71;\ 1{,}42;\ 2{,}13;\ 0{,}71;\ 0;\ 1{,}42;\ 0{,}71`, R`a 2. időréstől, pl. $u_4=0{,}71\cdot2+0{,}35\cdot2$`]]),
        S('b) Doppler', R`Ha a vevő $v$ sebességgel közeledik, a jel időben összenyomódik: minden frekvencia, a jelzési sebesség is $(1+v/c)$-szeresére nő.`, [
          ['közelítés', R`\frac1{T'}=\frac1T\left(1+\frac vc\right)`, R`$v\ll c$`]])],
      ered: [R`\text{a) burkoló }0{,}71a_{k-1}+0{,}35a_{k-2}:\ 1{,}42;\ 0{,}71;\ 1{,}42;\ 2{,}13;\ 0{,}71;\ 0;\ 1{,}42;\ 0{,}71\qquad\text{b) }(1+v/c)\text{-szeres}`], links: [srcAI(['aiD_6_1'])] }
  ]
};
