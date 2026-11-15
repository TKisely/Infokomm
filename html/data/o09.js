'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f9', num: '9', short: 'GSM', title: 'GSM: kapacitás, hívásfogadás, SMS',
  lead: R`Klaszterek és időrések, és a roamingos kérdések szabályai. A roamingos válaszoknál minden elem mellett ott van, melyik szabályból jön.`,
  alap: [
    { id: 'b9-elemek', badge: 'A1', title: 'A hálózat elemei',
      html: R`<div class="tw"><table class="tb"><thead><tr><th>Elem</th><th>Szerep</th></tr></thead><tbody>
<tr><td>MS</td><td>mobilállomás (készülék + SIM)</td></tr>
<tr><td>BTS</td><td>bázisállomás: a rádiós adó-vevő egy cellában</td></tr>
<tr><td>BSC</td><td>bázisállomás-vezérlő: több BTS-t irányít, a hívásátadás egy részét intézi</td></tr>
<tr><td>MSC</td><td>mobil kapcsolóközpont: hívásirányítás, kapcsolás</td></tr>
<tr><td>GMSC</td><td>átjáró MSC: a hálózatba kívülről érkező hívást ez fogadja, és ez kérdezi a HLR-t</td></tr>
<tr><td>HLR</td><td>honi adatbázis: az előfizető adatai és hogy éppen melyik VLR területén van</td></tr>
<tr><td>VLR</td><td>látogatói adatbázis: a területén éppen tartózkodók ideiglenes adatai</td></tr>
<tr><td>AuC</td><td>hitelesítési központ: a SIM titkos kulcsával (Ki) azonosít</td></tr>
<tr><td>EIR</td><td>készülék-nyilvántartás: IMEI-listák (fehér, fekete, szürke)</td></tr>
<tr><td>SMSC</td><td>SMS-központ: tárolja és továbbítja az üzeneteket</td></tr>
</tbody></table></div><p>Az α és β két szolgáltató hálózata, az index mutatja, melyiké az elem.</p>` },
    { id: 'b9-gsm', badge: 'A2', title: 'A szabályok',
      html: R`<ol><li><b>Hívás:</b> a hívott szám a hívott honi hálózatához tartozik, ezért a hívás ennek GMSC-jéhez fut, és ez a <b>hívott honi HLR</b>-jét kérdezi. A HLR tudja, melyik VLR területén van a hívott, onnan kér barangolási számot.</li><li><b>SMS:</b> a <b>küldő</b> honi SMSC-je fogadja, tárolja és kézbesíti.</li><li><b>Készülékellenőrzés:</b> a <b>kiszolgáló</b> (ahol a készülék éppen van) hálózat MSC/VLR-je ellenőrzi az IMEI-t a saját EIR-jénél.</li><li><b>Mozgás beszélgetés közben:</b> hívásátadás (handover), ebben csak a BTS, a BSC és az MSC vesz részt. Helyzetfrissítés (és a VLR, HLR értesítése) csak hívás nélküli mozgásnál van.</li><li>Egy esemény (hívásindítás, bontás) először azon az elemen jelenik meg, amelyikkel a kezdeményező készülék közvetlenül beszél: a <b>saját BTS-én</b>.</li></ol><p>Kapacitás: a GSM 900 sávjában 124 vivő van, vivőnként 8 időrés. Egy $N$ cellás klaszter az összes vivőt egyszer használja fel.</p>` }
  ],
  ex: [
    { id: 'o9_01', num: '9.1', title: 'Budapest: hány klaszter, hányan beszélhetnek?', tags: ['vizsga'],
      src: R`5-ösöm 25. oldal · 5o_25_1`,
      task: R`<p>Budapest 525 km², FRF = 12, 525 cella. a) Hány klaszter? b) Hányan beszélhetnek egyszerre? c) Egy átlagos cellában hányan egy szolgáltatónál (kb. 40 csatorna)?</p>`,
      ad: [R`525 cella (kb. 1 km²-enként egy)`, R`FRF $=12$: frekvencia-újrafelhasználási tényező, egy klaszter 12 cellából áll`, R`124 vivő, vivőnként 8 időrés (A2)`, R`c) egy szolgáltató kb. 40 vivőt használ`],
      ker: [R`a) a klaszterek száma`, R`b) az egyszerre lehetséges beszélgetések száma`, R`c) egy cella egy szolgáltatójánál egyszerre beszélők száma`],
      lv: [S('a) Klaszterek', R`Minden klaszter 12 cellából áll.`, [
          ['számérték', R`\frac{525}{12}=43{,}75\approx44\ \text{klaszter}`, '']]),
        S('b) Egyszerre beszélők', R`Egy klaszter mind a 124 vivőt felhasználja, mindegyiken 8 időrés, egy időrés egy beszélgetés.`, [
          ['számérték', R`124\cdot8=992\ \text{beszélgetés klaszterenként}`, ''],
          ['számérték', R`43{,}75\cdot992=43\,400`, R`kb. 43 400 egyszerre a városban`]]),
        S('c) Egy cella, egy szolgáltató', R`A szolgáltató 40 vivője 12 cella között oszlik meg.`, [
          ['számérték', R`\frac{40}{12}=3{,}33\ \Rightarrow\ 3\ \text{vagy}\ 4\ \text{vivő cellánként}`, ''],
          ['számérték', R`3\cdot8=24\ \text{és}\ 4\cdot8=32\ \text{fő}`, '']])],
      ered: [R`\text{a) }\approx44\ \text{klaszter}\qquad\text{b) }\approx43\,400\ \text{beszélgetés}\qquad\text{c) }24\ldots32\ \text{fő}`],
      chk: [R`A gyűjtemény szerint több hely: Half Rate, AMR, vagy az 1800 MHz-es sáv (75 MHz, 374 vivő). A szolgáltatónkénti vivőszám régi adat `+'`[ELLENŐRIZENDŐ]`'+'.', R`Valójában néhány időrés jelzésre megy el, ezért ez felső becslés.`], links: [src5(['5o_25_1'])] },

    { id: 'o9_02', num: '9.2', title: 'Roaming: hívás, bontás, SMS', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 27. oldal · 5o_27_1`,
      task: R`<p>MS-A az α, MS-B a β előfizetője, MS-A β-ban, MS-B α-ban barangol. MS-A felhívja MS-B-t. a) Melyik HLR? b) Melyik elem ellenőrzi a hívó készülék tiltását? MS-B bont: c) ki értesül először? d) kik értesülnek? MS-A SMS-t küld MS-B-nek: e) melyik SMSC kapja? f) melyik kézbesíti?</p>`,
      ad: [R`MS-A: α-előfizető, a β hálózatban van`, R`MS-B: β-előfizető, az α hálózatban van`],
      ker: [R`a) a lekérdezett HLR`, R`b) az EIR`, R`c), d) a bontásról értesülők`, R`e), f) az SMSC`],
      lv: [S('A hívás útja', R`MS-A a β hálózatban indítja a hívást: BTS$_\beta$ → BSC$_\beta$ → MSC$_\beta$. A hívott szám β-beli, ezért a hívás a GMSC$_\beta$-hoz fut, az lekérdezi a HLR$_\beta$-t, amely tudja, hogy MS-B a VLR$_\alpha$ területén van. A hívás innen MSC$_\alpha$ → BSC$_\alpha$ → BTS$_\alpha$ → MS-B úton halad.`, []),
        S('a) HLR', R`1. szabály: a <b>hívott</b> (MS-B) honi HLR-je.`, [['definíció', R`\text{HLR}_\beta`, 'MS-B β-előfizető']]),
        S('b) A készülék ellenőrzése', R`3. szabály: a hívó készülékét az a hálózat ellenőrzi, ahol a készülék éppen van. MS-A a β-ban van.`, [['definíció', R`\text{MSC}_\beta\ \text{az EIR}_\beta\text{-nél}`, '']]),
        S('c) Ki értesül először a bontásról?', R`5. szabály: MS-B bont, és ő a BTS$_\alpha$-val beszél közvetlenül.`, [['definíció', R`\text{BTS}_\alpha`, '']]),
        S('d) Kik értesülnek?', R`A bontás a teljes összeköttetésen végigfut, minden elem felszabadítja az erőforrásait: a hívás útjának minden eleme.`, [['definíció', R`\text{BTS}_\alpha,\ \text{BSC}_\alpha,\ \text{MSC}_\alpha,\ \text{GMSC}_\beta,\ \text{MSC}_\beta,\ \text{BSC}_\beta,\ \text{BTS}_\beta`, 'és végül MS-A']]),
        S('e), f) SMS', R`2. szabály: a <b>küldő</b> (MS-A) honi SMSC-je fogadja és kézbesíti, akárhol van is MS-A.`, [['definíció', R`\text{SMSC}_\alpha`, 'mindkét kérdésre']])],
      ered: [R`\text{a) HLR}_\beta\quad\text{b) EIR}_\beta\quad\text{c) BTS}_\alpha\quad\text{d) a hívás útjának minden eleme}\quad\text{e), f) SMSC}_\alpha`],
      gy: R`<p>A gyűjtemény b)-re EIR$_\alpha$-t ír. Ugyanezen az oldalon egy másik változatban (MS-B SMS-e MS-A-nak) SMSC$_\alpha$-t.</p>`,
      fix: R`b) MS-A a β hálózatban van, a kiszolgáló hálózat ellenőriz: EIR$_\beta$ `+'`[ELLENŐRIZENDŐ]`'+R`. A másik változatban a küldő MS-B, az ő honi SMSC-je az SMSC$_\beta$.`, links: [src5(['5o_27_1'])] },

    { id: 'o9_03', num: '9.3', title: 'Két α-előfizető, az egyik β-ban', tags: ['vizsga'],
      src: R`5-ösöm 28. oldal · 5o_28_1`,
      task: R`<p>MS-A1 és MS-A2 is α-előfizető, MS-A2 β-ban barangol. a) MS-A1 hívja MS-A2-t: melyik VLR-t kérdezi a HLR$_\alpha$? b) Melyik MSC értesül? c) Ki tud MS-A2 beszélgetés közbeni mozgásáról? d) Bontás után MS-A2 SMS-t ír a készülékét a tengerbe dobó MS-A1-nek: ki tárolja?</p>`,
      ad: [R`MS-A1: α-előfizető, otthon (α)`, R`MS-A2: α-előfizető, a β hálózatban`],
      ker: [R`a) a VLR`, R`b) az MSC`, R`c) a mozgásról tudó elemek`, R`d) az SMS-t tároló elem`],
      lv: [S('a) VLR', R`A hívott (MS-A2) α-előfizető, ezért a HLR$_\alpha$-t kérdezik (1. szabály). A HLR$_\alpha$ tudja, hogy MS-A2 a β hálózat VLR-jénél van bejelentkezve, ettől kér barangolási számot.`, [['definíció', R`\text{VLR}_\beta`, '']]),
        S('b) MSC', R`A hívást MS-A1 indítja α-ban, így elsőként a saját kiszolgáló MSC-je értesül. A hívás ezután az MSC$_\beta$-hoz jut, amely MS-A2-t kiszolgálja.`, [['definíció', R`\text{MSC}_\alpha,\ \text{majd MSC}_\beta`, 'a kérdés kétértelmű']]),
        S('c) Mozgás beszélgetés közben', R`4. szabály: hívásátadás, csak a kiszolgáló hálózat rádiós és kapcsoló elemei vesznek részt benne.`, [['definíció', R`\text{BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta`, '']]),
        S('d) SMS tárolása', R`2. szabály: a küldő (MS-A2) honi SMSC-je fogadja. Mivel MS-A1 nem érhető el, ott várakozik, amíg kézbesíthető nem lesz.`, [['definíció', R`\text{SMSC}_\alpha`, ''] ])],
      ered: [R`\text{a) VLR}_\beta\quad\text{b) MSC}_\alpha\ (\text{a hívóé}),\ \text{majd MSC}_\beta\quad\text{c) BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta\quad\text{d) SMSC}_\alpha`],
      chk: [R`c) A gyűjtemény HLR$_\alpha$-t és VLR$_\beta$-t is ír, hívás közben azonban nincs helyzetfrissítés. A b) kérdés kétértelmű `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_28_1'])] },

    { id: 'o9_04', num: '9.4', title: 'AuC, FDM és TDM, VAD, a betűszavak', tags: ['beugro'],
      src: R`5-ösöm 21., 27…28. oldal · 5o_21_2, 5o_27_1, 5o_28_1`,
      task: R`<p>Mi az AuC szerepe? Mit jelent, hogy a GSM FDM-et és TDM-et is használ? Mi a VAD előnye GSM-ben és VoIP-ban, és hogyan tartják fenn a kapcsolat érzetét? Ismertesse: HLR, VLR, EIR, MSC, BSC, BTS, FNR.</p>`,
      ad: [R`a betűszavak jelentése az A1 táblázatban`],
      ker: [R`rövid, indokolt válaszok`],
      lv: [S('AuC', R`A SIM titkos kulcsát (Ki) tárolja. Hitelesítéskor véletlen számot (RAND) küld a készüléknek, és a Ki-ből az A3 algoritmussal kiszámolja a várt választ (SRES). Ha a SIM ugyanezt adja, a SIM valódi. Az A8 algoritmussal ugyanebből a rejtjelező kulcs (Kc) is előáll, ezzel titkosítják a rádiós szakaszt (A5).`, []),
        S('FDM és TDM', R`FDM: a sáv 200 kHz-es vivőkre van osztva. TDM: minden vivőn egy keret 8 időrésből áll, mindegyik időrés egy-egy beszélgetésé. Egy beszélgetést tehát egy vivő és egy időrés jelöl ki.`, []),
        S('VAD', R`A hangaktivitás-érzékelő (VAD) felismeri a beszédszünetet, ilyenkor nem adnak. GSM-ben ez kisebb akkumulátor-fogyasztást és kisebb interferenciát jelent, VoIP-ban kevesebb csomagot, kisebb sávot. Hogy a vevő ne higgye a vonalat megszakadtnak, a vevőoldal <b>komfortzajt</b> generál (a szünet elején átküldött zajjellemzők alapján).`, []),
        S('A betűszavak', R`HLR: honi előfizetői adatbázis. VLR: a területen tartózkodók ideiglenes adatai. EIR: IMEI-listák, fehér (engedélyezett), fekete (tiltott), szürke (megfigyelt). MSC: kapcsolóközpont, hívásirányítás. BSC: bázisállomás-vezérlő. BTS: rádiós adó-vevő. FNR: számhordozhatósági adatbázis (melyik szolgáltatóhoz került át egy szám).`, [])],
      ered: [R`\text{AuC: hitelesítés (Ki, RAND, SRES, Kc)}\quad\text{200 kHz-es vivők, 8 időrés}\quad\text{VAD: kevesebb adás, komfortzaj}`], links: [src5(['5o_21_2', '5o_27_1', '5o_28_1'])] }
  ]
};
