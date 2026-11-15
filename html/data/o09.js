'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f9', num: '9', short: 'GSM', title: 'GSM: kapacitás, hívásfogadás, SMS',
  lead: R`Klaszterek és időrések, és a roamingos kérdések három szabálya.`,
  alap: [
    { id: 'b9-gsm', badge: 'A1', title: 'Szabályok',
      html: R`<ul><li>Hívásnál a <b>hívott</b> honi HLR-jét kérdezik, a hívott honi GMSC-je értesül először.</li><li>Az SMS-t a <b>küldő</b> honi SMSC-je fogadja és kézbesíti.</li><li>Az IMEI-t a <b>kiszolgáló</b> hálózat MSC/VLR-je ellenőrzi a saját EIR-jénél.</li><li>Beszélgetés közbeni mozgás: hívásátadás, csak BTS, BSC, MSC.</li></ul><p>Kapacitás: 124 vivő, vivőnként 8 időrés, $N$ cellás klaszter.</p>` }
  ],
  ex: [
    { id: 'o9_01', num: '9.1', title: 'Budapest: hány klaszter, hányan beszélhetnek?', tags: ['vizsga'],
      src: R`5-ösöm 25. oldal · 5o_25_1`,
      task: R`<p>Budapest 525 km², FRF = 12, 525 cella. a) Hány klaszter? b) Hányan beszélhetnek egyszerre? c) Egy átlagos cellában hányan egy szolgáltatónál (kb. 40 csatorna)?</p>`,
      lv: [S('Megoldás', '', [['számérték', R`124\cdot8=992\ \text{klaszterenként}\qquad\frac{525}{12}=43{,}75\approx44`, ''], ['számérték', R`44\cdot992=43\,648`, R`kerekítés nélkül $\approx43\,400$`], ['számérték', R`\left\lfloor\tfrac{40}{12}\right\rfloor\cdot8=24`, 'c) 4 vivővel 32']])],
      ered: [R`\approx44\ \text{klaszter},\ \approx43\,600\ \text{beszélgetés},\ 24\ldots32\ \text{fő/cella/szolgáltató}`],
      chk: [R`A gyűjtemény szerint több hely: Half Rate, AMR, vagy az 1800 MHz-es sáv (75 MHz, 374 vivő). A szolgáltatónkénti vivőszám régi adat `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_25_1'])] },
    { id: 'o9_02', num: '9.2', title: 'Roaming: hívás, bontás, SMS', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 27. oldal · 5o_27_1`,
      task: R`<p>MS-A az α, MS-B a β előfizetője, MS-A β-ban, MS-B α-ban barangol. MS-A felhívja MS-B-t. a) Melyik HLR? b) Melyik elem ellenőrzi a hívó készülék tiltását? MS-B bont: c) ki értesül először? d) kik értesülnek? MS-A SMS-t küld MS-B-nek: e) melyik SMSC kapja? f) melyik kézbesíti?</p>`,
      lv: [S('A szabályok alkalmazása', '', [])],
      ered: [R`\text{a) HLR}_\beta\quad\text{b) EIR}_\beta\quad\text{c) BTS}_\alpha\quad\text{e), f) SMSC}_\alpha`],
      fix: R`b) A gyűjtemény EIR$_\alpha$-t ír, de MS-A a β hálózatban van, ott ellenőrzik `+'`[ELLENŐRIZENDŐ]`'+R`. d) A bontásról a kapcsolat minden eleme értesül: BTS$_\alpha$, BSC$_\alpha$, MSC$_\alpha$, a GMSC$_\beta$ és MSC$_\beta$, BSC$_\beta$, BTS$_\beta$. A gyűjtemény ugyanezen az oldalon egy másik változatban (MS-B SMS-e MS-A-nak) SMSC$_\alpha$-t ír, helyesen SMSC$_\beta$.`, links: [src5(['5o_27_1'])] },
    { id: 'o9_03', num: '9.3', title: 'Két α-előfizető, az egyik β-ban', tags: ['vizsga'],
      src: R`5-ösöm 28. oldal · 5o_28_1`,
      task: R`<p>MS-A1 és MS-A2 is α-előfizető, MS-A2 β-ban barangol. a) MS-A1 hívja MS-A2-t: melyik VLR-t kérdezi a HLR$_\alpha$? b) Melyik MSC értesül? c) Ki tud MS-A2 beszélgetés közbeni mozgásáról? d) Bontás után MS-A2 SMS-t ír a készülékét a tengerbe dobó MS-A1-nek: ki tárolja?</p>`,
      lv: [S('Megoldás', '', [])],
      ered: [R`\text{a) VLR}_\beta\quad\text{b) MSC}_\alpha\ (\text{a hívó kiszolgálója})\quad\text{c) BTS}_\beta,\text{BSC}_\beta,\text{MSC}_\beta\quad\text{d) SMSC}_\alpha`],
      chk: [R`c) A gyűjtemény HLR$_\alpha$-t és VLR$_\beta$-t is ír, hívás közben azonban nincs helyzetfrissítés. A b) kérdés kétértelmű `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_28_1'])] },
    { id: 'o9_04', num: '9.4', title: 'AuC, FDM és TDM, VAD, a betűszavak', tags: ['beugro'],
      src: R`5-ösöm 21., 27…28. oldal · 5o_21_2, 5o_27_1, 5o_28_1`,
      task: R`<p>Mi az AuC szerepe? Mit jelent, hogy a GSM FDM-et és TDM-et is használ? Mi a VAD előnye GSM-ben és VoIP-ban, és hogyan tartják fenn a kapcsolat érzetét? Ismertesse: HLR, VLR, EIR, MSC, BSC, BTS, FNR.</p>`,
      lv: [S('Válaszok', 'AuC: Ki tárolása, RAND, SRES, Kc előállítása a hitelesítéshez. FDM + TDM: 200 kHz-es vivők, vivőnként 8 időrés. VAD: beszédszünetben nincs adás. GSM: kisebb fogyasztás és interferencia. VoIP: kevesebb csomag, kisebb sáv. A vevőnél <b>komfortzaj</b>. HLR: honi előfizetői adatbázis. VLR: a területen tartózkodók ideiglenes adatai. EIR: IMEI-listák (fehér, fekete, szürke = megfigyelt). MSC: kapcsolóközpont, hívásirányítás. BSC: bázisállomás-vezérlő. BTS: rádiós adó-vevő. FNR: számhordozhatóság.', [])],
      ered: [R`\text{lásd a válaszokat}`], links: [src5(['5o_21_2', '5o_27_1', '5o_28_1'])] }
  ]
};
