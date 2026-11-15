'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f10', num: '10', short: 'VoIP, Erlang', title: 'VoIP és forgalmi méretezés',
  lead: R`VoIP csomagsebesség és sávszélesség, Erlang-B méretezés és egy elsőre megtévesztő feladat a lebonyolított forgalomról.`,
  alap: [
    { id: 'b10-voip', badge: 'A1', title: 'VoIP: jelölések és képletek',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$v_\text{forrás}$</td><td>a kodek bitsebessége</td></tr>
<tr><td>$l_p$</td><td>egy beszédszegmens (keret) hossza bájtban</td></tr>
<tr><td>$n$</td><td>ennyi szegmens kerül egy csomagba</td></tr>
<tr><td>$l_\text{fej}$</td><td>a fejrészek (IP, UDP, RTP, adatkapcsolati) együttes hossza bájtban</td></tr>
<tr><td>$v_\text{cs}$</td><td>csomagsebesség (csomag/s)</td></tr>
<tr><td>$B$</td><td>egy hívás egy irányának sávigénye</td></tr>
</tbody></table></div>$$v_\text{cs}=\frac{v_\text{forrás}}{8\,n\,l_p}\qquad B=8\,(n\,l_p+l_\text{fej})\cdot v_\text{cs}$$<p>A 8-as szorzó a bájt és a bit váltása.</p>` },
    { id: 'b10-forg', badge: 'A2', title: 'Forgalom: jelölések és képletek',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Jel</th><th>Jelentés</th></tr></thead><tbody>
<tr><td>$\lambda$</td><td>hívásintenzitás: átlagosan ennyi hívás érkezik időegységenként</td></tr>
<tr><td>$h$</td><td>átlagos tartási idő</td></tr>
<tr><td>$A=\lambda h$</td><td>felajánlott forgalom (Erlang)</td></tr>
<tr><td>$N$</td><td>kiszolgálók (vonalak, munkatársak) száma</td></tr>
<tr><td>$P_b$</td><td>blokkolási valószínűség (Erlang-B, a blokkolt hívás elveszik)</td></tr>
<tr><td>$a$</td><td>egy kiszolgáló átlagos foglaltsága (kihasználtság)</td></tr>
</tbody></table></div><p>A <b>lebonyolított forgalom</b> $A(1-P_b)$: ennyi kiszolgáló foglalt átlagosan, és ennyi ügyfél van átlagosan „bent”. Egy kiszolgáló foglaltsága $a=A(1-P_b)/N$. Az Erlang-B képlet rekurzióval: $E_0=1$, $E_n=AE_{n-1}/(n+AE_{n-1})$, $P_b=E_N$.</p>` }
  ],
  ex: [
    { id: 'o10_01', num: '10.1', title: '16 kbit/s-os kodek, 20 byte-os szegmens, 66 byte fej', tags: ['vizsga'],
      src: R`5-ösöm 29. oldal · 5o_29_2`,
      task: R`<p>Egy VoIP-hívásban 16 kbit/s-os kodeket használunk, a szegmensek 20 byte-osak, csomagonként egy szegmens, a fejrészek összesen 66 byte. a) Csomagsebesség? b) Hívásonkénti sávszélesség? c) Mi korlátozza, hogy több szegmenst tegyünk egy csomagba?</p>`,
      ad: [R`$v_\text{forrás}=16$ kbit/s`, R`$l_p=20$ byte $=160$ bit`, R`$n=1$`, R`$l_\text{fej}=66$ byte`],
      ker: [R`a) $v_\text{cs}$`, R`b) $B$`, R`c) a korlát`],
      lv: [S('a) Csomagsebesség', R`Másodpercenként 16 000 bit keletkezik, egy csomag $20\cdot8=160$ bitet visz (A1).`, [
          ['behelyettesítés', R`v_\text{cs}=\frac{16\,000}{160}=100\ \text{csomag/s}`, R`egy szegmens $160/16\,000=10$ ms beszéd`]]),
        S('b) Sávszélesség', R`Egy csomag a szegmenssel és a fejjel együtt $20+66=86$ byte.`, [
          ['behelyettesítés', R`B=86\cdot8\cdot100=68\,800\ \text{bit/s}=68{,}8\ \text{kbit/s}`, R`a 16 kbit/s-nak több mint négyszerese`]]),
        S('c) A korlát', R`Több szegmenssel kevesebb fej jut egy bitnyi beszédre, de a csomag csak akkor indulhat, ha minden szegmense elkészült: minden további szegmens 10 ms-mal növeli a késleltetést. Egy elveszett csomag is több beszédet visz magával. A beszélgetéshez a teljes egyirányú késleltetés kb. 150 ms alatt kell, hogy maradjon.`, [])],
      ered: [R`\text{a) }100\ \text{csomag/s}\qquad\text{b) }68{,}8\ \text{kbit/s}\qquad\text{c) a késleltetés (és a csomagvesztés hatása)}`], chk: [R`A gyűjteményben a b) csak képletként szerepel.`], links: [src5(['5o_29_2'])] },

    { id: 'o10_02', num: '10.2', title: '10 byte, 5 ms, 47 byte fej: egy és két szegmens', tags: ['vizsga'],
      src: R`5-ösöm 29. oldal · 5o_29_3`,
      task: R`<p>A kodek 5 ms-onként 10 byte-os szegmenst ad, a fejrészek 47 byte. a) Forrássebesség? b) Egy szegmens csomagonként: csomagsebesség és sávszélesség? c) Két szegmens csomagonként?</p>`,
      ad: [R`$l_p=10$ byte, 5 ms-onként egy`, R`$l_\text{fej}=47$ byte`],
      ker: [R`a) $v_\text{forrás}$`, R`b), c) $v_\text{cs}$ és $B$, ha $n=1$, illetve $n=2$`],
      lv: [S('a) Forrássebesség', '', [
          ['definíció', R`v_\text{forrás}=\frac{10\cdot8\ \text{bit}}{5\ \text{ms}}=16\ \text{kbit/s}`, '']]),
        S('b) Egy szegmens csomagonként', R`5 ms-onként indul egy csomag, mérete $10+47=57$ byte.`, [
          ['behelyettesítés', R`v_\text{cs}=\frac{1}{5\ \text{ms}}=200\ \text{csomag/s}\qquad B=57\cdot8\cdot200=91{,}2\ \text{kbit/s}`, '']]),
        S('c) Két szegmens csomagonként', R`10 ms-onként indul egy csomag, mérete $2\cdot10+47=67$ byte.`, [
          ['behelyettesítés', R`v_\text{cs}=100\ \text{csomag/s}\qquad B=67\cdot8\cdot100=53{,}6\ \text{kbit/s}`, R`kevesebb fej, de 5 ms-mal több késés`]])],
      ered: [R`\text{a) }16\ \text{kbit/s}\qquad\text{b) }200\ \text{csomag/s},\ 91{,}2\ \text{kbit/s}\qquad\text{c) }100\ \text{csomag/s},\ 53{,}6\ \text{kbit/s}`], links: [src5(['5o_29_3'])] },

    { id: 'o10_03', num: '10.3', title: 'Ügyfélszolgálat 21 munkatárssal', tags: ['vizsga', 'nehez'],
      src: R`5-ösöm 30. oldal · 5o_30_1`,
      task: R`<p>990 ezer ügyfél, 21 munkatárs, a csúcsidőben 0,1%-os blokkolás. a) Hívásintenzitás, ha a tartási idő 200 s? b) Hányszor hív egy ügyfél évente, ha ez az intenzitás állandó? c) Foglaltság? d) Hármat elbocsátanak, 17 fogadja a hívásokat, a 18. csak a blokkoltakat hívja vissza. Mekkora az ő foglaltsága?</p>`,
      ad: [R`$N=21$ munkatárs (kiszolgáló)`, R`$P_b=0{,}1\%$ a csúcsidőben`, R`$h=200$ s: átlagos tartási idő`, R`990 000 ügyfél`],
      ker: [R`a) $\lambda$`, R`b) hívás/ügyfél/év`, R`c) $a$: egy munkatárs foglaltsága`, R`d) a visszahívó munkatárs foglaltsága`],
      lv: [S('a) A felajánlott forgalom', R`Az Erlang-B táblázatból (vagy a rekurzióval) azt az $A$-t keressük, amelynél 21 kiszolgálóval a blokkolás éppen 0,1%.`, [
          ['számérték', R`P_b(A;\ 21)=0{,}001\ \Rightarrow\ A=10{,}1\ \text{Erl}`, 'a grafikonról kb. 10'],
          ['átalakítás', R`\lambda=\frac{A}{h}=\frac{10{,}1}{200\ \text{s}}=0{,}0505\ \tfrac1{\text{s}}`, R`kb. 182 hívás óránként`]]),
        S('b) Hívás ügyfelenként', R`Ha egész évben ez lenne az intenzitás:`, [
          ['számérték', R`0{,}0505\cdot3600\cdot24\cdot365=1{,}59\cdot10^6\ \text{hívás/év}`, ''],
          ['számérték', R`\frac{1{,}59\cdot10^6}{990\,000}=1{,}6\ \text{hívás/ügyfél/év}`, '']]),
        S('c) Foglaltság', R`A lebonyolított forgalom megoszlik a 21 munkatárs között (A2).`, [
          ['definíció', R`a=\frac{A(1-P_b)}{N}=\frac{10{,}1\cdot0{,}999}{21}=0{,}48`, 'kb. 48%']]),
        S('d) Blokkolás 17 munkatárssal', R`Ugyanaz a felajánlott forgalom, de csak 17 kiszolgáló.`, [
          ['számérték', R`P_b(10{,}1;\ 17)=1{,}4\%`, 'rekurzióval, a grafikonról kb. 1%']]),
        S('d) A visszahívó foglaltsága', R`A blokkolt hívások intenzitása $\lambda P_b$. Ha minden visszahívás is átlagosan 200 s, a 18. munkatárs forgalma ebből számolható.`, [
          ['behelyettesítés', R`\lambda P_bh=0{,}0505\cdot0{,}014\cdot200=0{,}14\ \text{Erl}`, 'foglaltsága kb. 14%']])],
      ered: [R`\text{a) }\lambda\approx0{,}05\ \tfrac1{\text{s}}\qquad\text{b) }\approx1{,}6\ \text{hívás/év}\qquad\text{c) }\approx48\%\qquad\text{d) }\approx14\%`],
      chk: [R`A gyűjtemény a d)-nél $P_b\approx1\%$-nál abbamarad. A visszahívás tartási idejére tett feltevés (200 s) `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_30_1'])] },

    { id: 'o10_04', num: '10.4', title: 'Üzlet négy vásárlónak: mennyi a kiszolgálási idő?', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 30. oldal · 5o_30_2`,
      task: R`<p>A vásárlók között átlagosan 10 perc telik el, 4 fér el az üzletben, a többi nem vár. Átlagosan 0,6 vásárló van bent, a visszautasítás valószínűsége 0,2%. Mekkora a kiszolgálási idő?</p>`,
      ad: [R`10 perc a vásárlók között $\Rightarrow\lambda=0{,}1$ vásárló/perc`, R`$N=4$: ennyi fér el (kiszolgáló), aki nem fér be, elmegy (Erlang-B modell)`, R`0,6: átlagosan ennyi vásárló van bent`, R`$P_b=0{,}002$`],
      ker: [R`$h$: átlagos kiszolgálási (tartási) idő`],
      miert: [[R`Mi a 0,6?`, R`Az egyszerre bent lévők átlagos száma a <b>lebonyolított</b> forgalom, $A(1-P_b)$ (A2). Ebből a felajánlott forgalom, abból és a beérkezési intenzitásból a tartási idő jön.`]],
      lv: [S('A felajánlott forgalom', R`A lebonyolított forgalomból visszaszámolunk.`, [
          ['átalakítás', R`A(1-P_b)=0{,}6\ \Rightarrow\ A=\frac{0{,}6}{1-0{,}002}=0{,}601\ \text{Erl}`, '']]),
        S('A tartási idő', R`$A=\lambda h$-ból kifejezzük $h$-t.`, [
          ['átalakítás', R`h=\frac{A}{\lambda}=\frac{0{,}601}{0{,}1\ \text{1/perc}}=6{,}0\ \text{perc}`, '']])],
      ered: [R`h\approx6\ \text{perc}`],
      gy: R`<p>A gyűjtemény „$A=h\lambda=10\cdot0{,}6=6$”-ot ír.</p>`,
      fix: R`A szám véletlenül jó, de a gondolatmenet rossz: a 6 a tartási idő percben, nem a forgalom, és a 10 perc nem $\lambda$, hanem $1/\lambda$. Megjegyzés: $A=0{,}6$ Erl és $N=4$ mellett az Erlang-B blokkolás 0,3%, a feladat 0,2%-a kerekített adat, az eredményt nem befolyásolja.`, links: [src5(['5o_30_2'])] },

    { id: 'o10_05', num: '10.5', title: 'Fair queuing és WFQ', tags: ['beugro'],
      src: R`5-ösöm 29. oldal · 5o_29_1`,
      task: R`<p>Mi a fair queuing előnye a szigorú prioritással szemben, és mi a WFQ előnye?</p>`,
      ad: [R`ütemezési módszerek egy router kimeneti sorában`],
      ker: [R`a két előny`],
      lv: [S('Szigorú prioritás', R`Mindig a legmagasabb prioritású sor csomagja megy ki először. Ha abban folyamatosan van forgalom, az alacsonyabb sorok soha nem kerülnek sorra: <b>kiéheztetés</b>.`, []),
        S('Fair queuing', R`Minden folyam saját sort kap, és a router körbejárva, felváltva szolgálja ki őket. Így egyetlen folyam sem éheztetheti ki a többit, mindegyik egyenlő részt kap a kapacitásból.`, []),
        S('WFQ (súlyozott fair queuing)', R`Ugyanez súlyokkal: a folyamok a súlyuk arányában kapnak sávot. A fontosabb forgalom (pl. hang) több részt kap, de mindenki kap egy garantált minimumot, kiéheztetés továbbra sincs.`, [])],
      ered: [R`\text{fair queuing: nincs kiéheztetés}\qquad\text{WFQ: súlyozott, arányos részesedés garantált minimummal}`], links: [src5(['5o_29_1'])] }
  ]
};
