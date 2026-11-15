'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f10', num: '10', short: 'GSM', title: 'Cellás mobilhálózat (GSM)',
  lead: R`Kapacitásbecslés klaszterekkel és frekvencia-újrafelhasználással, valamint a roamingos „melyik HLR, melyik SMSC” kérdések. Ezekhez néhány szabályt kell biztosan tudni.`,
  alap: [
    { id: 'a10-kapacitas', badge: 'A1', title: 'Kapacitás: vivők, időrések, klaszter',
      html: R`<p>GSM 900: irányonként 25 MHz, 200 kHz-es vivők (124 db), vivőnként 8 időrés (TDMA). Egy klaszter $N$ (FRF) cellából áll, a vivőket szétosztják köztük: egy cellában $\approx\lfloor C/N\rfloor$ vivő, egyszerre $8\lfloor C/N\rfloor$ beszélgetés (a jelzési időréseket elhanyagolva). Klaszterenként $8C$, a terület klasztereinek száma $(\text{cellák})/N$.</p><p>Nagy $N$: kisebb azonos csatornás interferencia, de kevesebb vivő jut egy cellára.</p>` },
    { id: 'a10-roaming', badge: 'A2', title: 'Roaming: a három szabály',
      html: R`<ul><li><b>Hívásnál a hívott honi HLR-jét</b> kérdezik le, a hívott honi hálózatának GMSC-je értesül először.</li><li><b>Az SMS-t a küldő honi SMSC-je</b> fogadja és kézbesíti.</li><li><b>Beszélgetés közbeni mozgásról</b> (hívásátadás) csak a kiszolgáló hálózat BTS-e, BSC-je és MSC-je tud. Hívás nélküli mozgásnál helyzetfrissítés van: VLR, és VLR-váltáskor a honi HLR is.</li></ul><p>Hitelesítés: AuC (Ki, A3 → SRES, A8 → Kc), rejtjelezés A5-tel. Készülékellenőrzés: EIR (fehér, fekete, szürke = megfigyelt lista). FNR: számhordozhatóság.</p>`,
      key: R`A kérdés szövegéből mindig írd ki: ki kinek az előfizetője, és ki hol tartózkodik.` }
  ],
  ex: [
    { id: 'ai10_01', num: '10.1', title: 'N = 7 klaszter, 70 csatorna (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 6. oldal · ai2020_05_26_Q6`,
      task: R`<p>a) Rajzoljon N = 7-es klasztert két szomszédjával. b) 70 FDM-csatornával hány aktív előfizető lehet a klaszterben? c) Mi az FRF szerepe, mi a nagy N előnye és hátránya?</p>`,
      lv: [S('b)', '', [['számérték', R`70\cdot8=560`, 'klaszterenként']])],
      ered: [R`560\ \text{előfizető}`], chk: [R`c) Nagy N: az azonos frekvenciájú cellák távolabb, kisebb interferencia, de cellánként kevesebb vivő (pl. 120 vivő, N = 12: csak 10·8). Tipikus: 3, 7, 12.`], links: [srcAI(['ai2020_05_26_Q6'])] },
    { id: 'ai10_02', num: '10.2', title: 'Győr: klaszter, egyidejű hívások, VAD, FNR', tags: ['vizsga'],
      src: R`ALL-IN 25…27., 145. oldal · ai2016_06_07_3`,
      task: R`<p>Győr 170 km², FRF = 12, kb. 85 GSM-cella. a) Mekkora egy klaszter? b) Hányan telefonálhatnak egyszerre? c) Egy szolgáltató 40 FDM-csatornát használ: hányan egy cellában nála? d) Mi a VAD előnye? e) Mire az FNR és az AuC?</p>`,
      lv: [S('Terület és kapacitás', '', [['számérték', R`T_c=\frac{170}{85}=2\ \text{km}^2\qquad T_k=12\cdot2=24\ \text{km}^2`, ''], ['számérték', R`\frac{85}{12}\approx7\ \text{klaszter}\cdot124\cdot8\approx7000`, 'b)'], ['számérték', R`\left\lfloor\tfrac{40}{12}\right\rfloor\cdot8=24`, 'c), 3,33 vivővel kb. 26']])],
      ered: [R`24\ \text{km}^2\qquad\approx7000\qquad\approx24`],
      chk: [R`c) a gyűjteményben „passz”, a saját megoldás feltevése, hogy a 40 vivő a klaszterre vonatkozik `+'`[ELLENŐRIZENDŐ]`'+'.', R`d) VAD + DTX: beszédszünetben nincs adás, kevesebb fogyasztás és interferencia, a vevő komfortzajt kap. e) FNR: számhordozhatóság. AuC: a Ki tárolása, hitelesítési hármasok.`], links: [srcAI(['ai2016_06_07_3'])] },
    { id: 'ai10_03', num: '10.3', title: 'Két roamingoló előfizető hívása és SMS-e', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 21…22., 41. oldal · ai2016_01_05_7, ai2016_01_05_7b`,
      task: R`<p>MS-A az α, MS-B a β előfizetője, egymás hálózatában barangolnak. MS-A felhívja MS-B-t. a) Melyik HLR-t kérdezik? b) Melyik GMSC értesül előbb? c) Ki tud MS-A beszélgetés közbeni mozgásáról? d) Bontás után MS-B SMS-t küld MS-A-nak, melyik SMSC kézbesíti?</p>`,
      lv: [S('Alkalmazott szabályok', 'A hívott (MS-B) β-előfizető. A beszélgetés közbeni mozgás hívásátadás. Az SMS-t a küldő (MS-B) honi SMSC-je kézbesíti.', [])],
      ered: [R`\text{a) HLR}_\beta\quad\text{b) GMSC}_\beta\quad\text{c) BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta\quad\text{d) SMSC}_\beta`],
      fix: R`A c) részre a gyűjtemény a HLR$_\alpha$-t és a VLR$_\beta$-t is felsorolja. Hívás közben nincs helyzetfrissítés, ezek csak hívás nélküli mozgásnál értesülnek `+'`[ELLENŐRIZENDŐ]`'+'.', links: [srcAI(['ai2016_01_05_7', 'ai2016_01_05_7b'])] },
    { id: 'ai10_04', num: '10.4', title: 'Két α-előfizető, az egyik β-ban (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 8. oldal · ai2020_05_26_Q8`,
      task: R`<p>MS-A1 és MS-A2 is α-előfizető, MS-A2 a β hálózatban barangol. MS-A1 hívja MS-A2-t. a) Melyik eszközhöz érkezik először információ a hívásindításról? b) Melyik HLR-t kérdezik? c) Mely eszközök tudnak MS-A2 β-beli mozgásáról? d) Melyik eszközzel azonosítják MS-A1 SIM-jét?</p>`,
      lv: [S('Megoldás', 'Itt a mozgás általában (nem beszélgetés közben) értendő, ezért a helyzetfrissítés elemei is számítanak.', [])],
      ered: [R`\text{a) BTS}_\alpha\quad\text{b) HLR}_\alpha\quad\text{c) BTS}_\beta,\text{BSC}_\beta,\text{MSC}_\beta,\text{VLR}_\beta,\text{HLR}_\alpha\quad\text{d) AuC}_\alpha`],
      chk: [R`A hallgató c)-ből kihagyta a BTS-t és a BSC-t, a javító ezért vont le pontot.`], links: [srcAI(['ai2020_05_26_Q8'])] },
    { id: 'ai10_05', num: '10.5', title: 'GSM-hitelesítés: A3, A8, A5', tags: ['vizsga'],
      src: R`ALL-IN 87…88. oldal · ai2016_01_12c_5`,
      task: R`<p>Az ábrán AuC/HLR, MSC/VLR és MS. Milyen adatokat adnak egymásnak (A, B, C)? Mik a szürke dobozok? Mire való a Kc?</p>`,
      lv: [S('Folyamat', 'Az AuC véletlenszámot (RAND, 128 bit) állít elő, ebből és a Ki-ből A3-mal SRES-t (32 bit). A SIM ugyanezt számolja, az MSC összeveti a kettőt. A8-cal mindkét oldal Kc-t (64 bit) képez, ezzel A5 állítja elő a rejtjelező bitsorozatot, amelyet a burstök 114 bitjével XOR-olnak.', [])],
      ered: [R`A=\text{RAND},\ B=\text{SRES},\ C=\text{SRES}_\text{MS}\qquad\text{felső doboz: A8 (A3), alsó: A5}`], links: [srcAI(['ai2016_01_12c_5'])] },
    { id: 'ai10_06', num: '10.6', title: 'VAD, EIR, FNR, AuC röviden', tags: ['beugro', 'javitas'],
      src: R`ALL-IN 27., 54…55., 82. oldal · ai2016_06_07_3, ai2014_12_15_3, ai2014_01_14_3`,
      task: R`<p>Hogyan működik a VAD, milyen erőforrás takarítható meg vele (GSM, VoIP)? Mi az EIR, az FNR és az AuC szerepe?</p>`,
      lv: [S('Válaszok', 'VAD: felismeri a beszédszünetet, ilyenkor a DTX leállítja az adást, a vevő komfortzajt generál. GSM: akkumulátor és interferencia, VoIP: sávszélesség (kevesebb csomag). EIR: IMEI-lista, fehér (engedélyezett), fekete (tiltott), <b>szürke (megfigyelt)</b>. FNR: számhordozhatóság. AuC: hitelesítés (Ki, RAND, SRES, Kc).', [])],
      ered: [R`\text{lásd a válaszokat}`],
      fix: R`A gyűjtemény szerint a szürke listás készülékek „minden lépése blokkolva van”: helyesen használhatók, csak megfigyeltek.`, links: [srcAI(['ai2016_06_07_3', 'ai2014_12_15_3', 'ai2014_01_14_3'])] }
  ]
};
