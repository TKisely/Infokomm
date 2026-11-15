'use strict';
const { R, S, srcAI } = require('./_h.js');
module.exports = {
  id: 'f10', num: '10', short: 'GSM', title: 'Cellás mobilhálózat (GSM)',
  lead: R`Kapacitásbecslés klaszterekkel és frekvencia-újrafelhasználással, valamint a roamingos „melyik HLR, melyik SMSC” kérdések. Ezekhez néhány szabályt kell biztosan tudni, a válaszoknál mindig ott van, melyikből jön.`,
  alap: [
    { id: 'a10-kapacitas', badge: 'A1', title: 'Kapacitás: vivők, időrések, klaszter',
      html: R`<p>GSM 900: irányonként 25 MHz, 200 kHz-es vivők (124 db), vivőnként 8 időrés (TDMA). Egy <b>klaszter</b> $N$ cellából áll ($N$ = FRF, frekvencia-újrafelhasználási tényező): a vivőket szétosztják köztük, így egy klaszter minden vivőt pontosan egyszer használ. $C$ vivővel egy cellában $\approx C/N$ vivő, egyszerre $8C/N$ beszélgetés (a jelzési időréseket elhanyagolva), klaszterenként $8C$.</p><p>Nagy $N$: az azonos frekvenciájú cellák távolabb vannak, kisebb az interferencia, de kevesebb vivő jut egy cellára.</p>` },
    { id: 'a10-roaming', badge: 'A2', title: 'Elemek és szabályok',
      html: R`<p>MS: készülék. BTS: bázisállomás (rádió). BSC: bázisállomás-vezérlő. MSC: kapcsolóközpont. GMSC: átjáró MSC, a kívülről jövő hívást fogadja és a HLR-t kérdezi. HLR: honi adatbázis (hol van az előfizető). VLR: látogatói adatbázis. AuC: hitelesítés. EIR: készülék-nyilvántartás. SMSC: SMS-központ. Az index ($\alpha$, $\beta$) a szolgáltatót jelöli.</p><ol><li><b>Hívásnál a hívott honi HLR-jét</b> kérdezik le, a hívott honi hálózatának GMSC-je értesül először.</li><li><b>Az SMS-t a küldő honi SMSC-je</b> fogadja és kézbesíti.</li><li><b>Beszélgetés közbeni mozgásról</b> (hívásátadás) csak a kiszolgáló hálózat BTS-e, BSC-je és MSC-je tud. Hívás nélküli mozgásnál helyzetfrissítés van: a VLR, és VLR-váltáskor a honi HLR is értesül.</li><li>Egy eseményről (hívásindítás, bontás) először a kezdeményező saját BTS-e tud.</li></ol><p>Hitelesítés: AuC (Ki, A3 → SRES, A8 → Kc), rejtjelezés A5-tel. Készülékellenőrzés: a kiszolgáló hálózat EIR-je (fehér, fekete, szürke = megfigyelt lista). FNR: számhordozhatóság.</p>`,
      key: R`A kérdés szövegéből mindig írd ki: ki kinek az előfizetője, és ki hol tartózkodik.` }
  ],
  ex: [
    { id: 'ai10_01', num: '10.1', title: 'N = 7 klaszter, 70 csatorna (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 6. oldal · ai2020_05_26_Q6`,
      task: R`<p>a) Rajzoljon N = 7-es klasztert két szomszédjával. b) 70 FDM-csatornával hány aktív előfizető lehet a klaszterben? c) Mi az FRF szerepe, mi a nagy N előnye és hátránya?</p>`,
      ad: [R`$N=7$ cellás klaszter`, R`70 FDM-csatorna (vivő), vivőnként 8 időrés`],
      ker: [R`a) rajz`, R`b) egyszerre aktív előfizetők a klaszterben`, R`c) indoklás`],
      lv: [S('a) Rajz', R`Egy középső hatszög és körülötte hat: ez egy klaszter, 1-től 7-ig számozva. Két szomszéd klaszter ugyanígy, eltolva, úgy, hogy az azonos számú cellák egymástól a lehető legmesszebb kerüljenek.`, []),
        S('b) Aktív előfizetők', R`A klaszter minden vivőt egyszer használ fel (A1), minden vivőn 8 időrés.`, [
          ['számérték', R`70\cdot8=560`, 'klaszterenként']]),
        S('c) Az FRF szerepe', R`Megadja, hány cella után lehet ugyanazt a vivőt újra használni. Nagy N: az azonos vivőt használó cellák távolabb, kisebb az azonos csatornás interferencia. Hátrány: cellánként kevesebb vivő jut (pl. 120 vivő, N = 12: csak 10 vivő, 80 beszélgetés). Tipikus értékek: 3, 7, 12.`, [])],
      ered: [R`\text{b) }560\ \text{aktív előfizető}`], links: [srcAI(['ai2020_05_26_Q6'])] },

    { id: 'ai10_02', num: '10.2', title: 'Győr: klaszter, egyidejű hívások, VAD, FNR', tags: ['vizsga'],
      src: R`ALL-IN 25…27., 145. oldal · ai2016_06_07_3`,
      task: R`<p>Győr 170 km², FRF = 12, kb. 85 GSM-cella. a) Mekkora egy klaszter? b) Hányan telefonálhatnak egyszerre? c) Egy szolgáltató 40 FDM-csatornát használ: hányan egy cellában nála? d) Mi a VAD előnye? e) Mire az FNR és az AuC?</p>`,
      ad: [R`170 km², 85 cella, FRF $=12$`, R`124 vivő, vivőnként 8 időrés`, R`c) egy szolgáltató 40 vivőt használ`],
      ker: [R`a) a klaszter területe`, R`b) egyidejű hívások`, R`c) egy cellában egy szolgáltatónál`, R`d), e) fogalmak`],
      lv: [S('a) Klaszter', R`Először egy cella területe, majd 12 cella.`, [
          ['számérték', R`T_\text{cella}=\frac{170}{85}=2\ \text{km}^2\qquad T_\text{klaszter}=12\cdot2=24\ \text{km}^2`, '']]),
        S('b) Egyidejű hívások', R`Egy cellára $124\cdot8/12=82{,}7$ beszélgetés jut (A1).`, [
          ['számérték', R`85\cdot\frac{124\cdot8}{12}=85\cdot82{,}7\approx7000`, R`ugyanez: $85/12\approx7$ klaszter $\cdot992$`]]),
        S('c) Egy szolgáltató', R`A 40 vivő oszlik meg a klaszter 12 cellája között.`, [
          ['számérték', R`\frac{40}{12}=3{,}33\ \text{vivő}\ \Rightarrow\ 3\cdot8=24\ \text{(néhol }4\cdot8=32)`, R`átlagosan kb. 26`]]),
        S('d), e) Fogalmak', R`VAD + DTX: beszédszünetben nincs adás, kevesebb fogyasztás és interferencia, a vevő komfortzajt generál. FNR: számhordozhatósági adatbázis. AuC: a SIM titkos kulcsának (Ki) tárolása, a hitelesítési adatok (RAND, SRES, Kc) előállítása.`, [])],
      ered: [R`\text{a) }24\ \text{km}^2\qquad\text{b) }\approx7000\qquad\text{c) }\approx24\ldots32`],
      chk: [R`c) A gyűjteményben „passz”, a saját megoldás feltevése, hogy a 40 vivő a klaszterre vonatkozik `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [srcAI(['ai2016_06_07_3'])] },

    { id: 'ai10_03', num: '10.3', title: 'Két roamingoló előfizető hívása és SMS-e', tags: ['vizsga', 'javitas'],
      src: R`ALL-IN 21…22., 41. oldal · ai2016_01_05_7, ai2016_01_05_7b (és 5-ösöm 27. oldal)`,
      task: R`<p>MS-A az α, MS-B a β előfizetője, egymás hálózatában barangolnak. MS-A felhívja MS-B-t. a) Melyik HLR-t kérdezik? b) Melyik GMSC értesül előbb? c) Ki tud MS-A beszélgetés közbeni mozgásáról? d) Bontás után MS-B SMS-t küld MS-A-nak, melyik SMSC kézbesíti?</p>`,
      ad: [R`MS-A: α-előfizető, β-ban van`, R`MS-B: β-előfizető, α-ban van`],
      ker: [R`a) HLR`, R`b) GMSC`, R`c) a mozgásról tudó elemek`, R`d) SMSC`],
      lv: [S('A hívás útja', R`MS-A β-ban hív: BTS$_\beta$ → BSC$_\beta$ → MSC$_\beta$. A hívott szám β-beli, ezért a GMSC$_\beta$ fogadja, megkérdezi a HLR$_\beta$-t, amely tudja, hogy MS-B a VLR$_\alpha$ területén van. A hívás innen az α hálózatba megy MS-B-hez.`, []),
        S('a), b)', R`1. szabály: a hívott (MS-B, β-előfizető) honi HLR-je, és a honi hálózatának GMSC-je.`, [['definíció', R`\text{HLR}_\beta,\ \text{GMSC}_\beta`, '']]),
        S('c) Mozgás beszélgetés közben', R`3. szabály: hívásátadás MS-A kiszolgáló hálózatában (β).`, [['definíció', R`\text{BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta`, '']]),
        S('d) SMS', R`2. szabály: a küldő (MS-B, β-előfizető) honi SMSC-je.`, [['definíció', R`\text{SMSC}_\beta`, '']])],
      ered: [R`\text{a) HLR}_\beta\quad\text{b) GMSC}_\beta\quad\text{c) BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta\quad\text{d) SMSC}_\beta`],
      fix: R`A c) részre a gyűjtemény a HLR$_\alpha$-t és a VLR$_\beta$-t is felsorolja. Hívás közben nincs helyzetfrissítés, ezek csak hívás nélküli mozgásnál értesülnek `+'`[ELLENŐRIZENDŐ]`'+'.', links: [srcAI(['ai2016_01_05_7', 'ai2016_01_05_7b'])] },

    { id: 'ai10_04', num: '10.4', title: 'Két α-előfizető, az egyik β-ban (Moodle 2020)', tags: ['vizsga'],
      src: R`ALL-IN 8. oldal · ai2020_05_26_Q8 (és 5-ösöm 28. oldal)`,
      task: R`<p>MS-A1 és MS-A2 is α-előfizető, MS-A2 a β hálózatban barangol. MS-A1 hívja MS-A2-t. a) Melyik eszközhöz érkezik először információ a hívásindításról? b) Melyik HLR-t kérdezik? c) Mely eszközök tudnak MS-A2 β-beli mozgásáról? d) Melyik eszközzel azonosítják MS-A1 SIM-jét?</p>`,
      ad: [R`MS-A1: α-előfizető, α-ban`, R`MS-A2: α-előfizető, β-ban`],
      ker: [R`a) az első eszköz`, R`b) HLR`, R`c) a mozgásról tudó elemek`, R`d) a SIM azonosítása`],
      lv: [S('a) Hívásindítás', R`4. szabály: a kezdeményező (MS-A1) saját BTS-e.`, [['definíció', R`\text{BTS}_\alpha`, '']]),
        S('b) HLR', R`1. szabály: a hívott (MS-A2) α-előfizető.`, [['definíció', R`\text{HLR}_\alpha`, R`ez tudja, hogy MS-A2 a VLR$_\beta$-nál van`]]),
        S('c) Mozgás β-ban', R`Itt a mozgás általában (nem beszélgetés közben) értendő: a helyzetfrissítés elemei is számítanak. A rádiós elemek (BTS, BSC) és az MSC/VLR a kiszolgáló hálózatban, VLR-váltáskor a honi HLR is.`, [['definíció', R`\text{BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta,\ \text{VLR}_\beta,\ \text{HLR}_\alpha`, '']]),
        S('d) SIM azonosítása', R`A SIM titkos kulcsát (Ki) csak a honi AuC ismeri, ez állítja elő a hitelesítési adatokat.`, [['definíció', R`\text{AuC}_\alpha`, ''] ])],
      ered: [R`\text{a) BTS}_\alpha\quad\text{b) HLR}_\alpha\quad\text{c) BTS}_\beta,\ \text{BSC}_\beta,\ \text{MSC}_\beta,\ \text{VLR}_\beta,\ \text{HLR}_\alpha\quad\text{d) AuC}_\alpha`],
      chk: [R`A hallgató c)-ből kihagyta a BTS-t és a BSC-t, a javító ezért vont le pontot.`], links: [srcAI(['ai2020_05_26_Q8'])] },

    { id: 'ai10_05', num: '10.5', title: 'GSM-hitelesítés: A3, A8, A5', tags: ['vizsga'],
      src: R`ALL-IN 87…88. oldal · ai2016_01_12c_5`,
      task: R`<p>Az ábrán AuC/HLR, MSC/VLR és MS. Milyen adatokat adnak egymásnak (A, B, C)? Mik a szürke dobozok? Mire való a Kc?</p>`,
      ad: [R`Ki: a SIM titkos kulcsa, csak a SIM és az AuC ismeri`],
      ker: [R`A, B, C, a dobozok, Kc`],
      lv: [S('Hitelesítés', R`Az AuC véletlen számot (RAND, 128 bit) állít elő, ebből és a Ki-ből az A3 algoritmussal a várt választ (SRES, 32 bit). A RAND-ot és az SRES-t az MSC/VLR kapja meg. A RAND a készülékhez megy (A), a SIM ugyanazzal az A3-mal kiszámolja a saját SRES-ét és visszaküldi (C). Az MSC összeveti az AuC-tól kapottal (B): ha egyezik, a SIM valódi.`, []),
        S('Rejtjelezés', R`Az A8 algoritmus mindkét oldalon a RAND-ból és a Ki-ből előállítja a rejtjelező kulcsot (Kc, 64 bit). Az A5 ebből rejtjelező bitsorozatot képez, ezt a rádiós burstök 114 adatbitjével XOR-olják. A Kc soha nem megy át a rádiós szakaszon.`, [])],
      ered: [R`A=\text{RAND},\ B=\text{SRES (AuC-tól)},\ C=\text{SRES (MS-től)}\qquad\text{dobozok: A3, A8 és A5}\qquad\text{Kc: a rádiós szakasz titkosítása}`], links: [srcAI(['ai2016_01_12c_5'])] },

    { id: 'ai10_06', num: '10.6', title: 'VAD, EIR, FNR, AuC röviden', tags: ['beugro', 'javitas'],
      src: R`ALL-IN 27., 54…55., 82. oldal · ai2016_06_07_3, ai2014_12_15_3, ai2014_01_14_3`,
      task: R`<p>Hogyan működik a VAD, milyen erőforrás takarítható meg vele (GSM, VoIP)? Mi az EIR, az FNR és az AuC szerepe?</p>`,
      ad: [R`fogalmi kérdések`],
      ker: [R`indokolt válaszok`],
      lv: [S('VAD', R`A hangaktivitás-érzékelő felismeri a beszédszünetet, ilyenkor a DTX leállítja az adást. GSM-ben az akkumulátor és a rádiós interferencia, VoIP-ban a sávszélesség (kevesebb csomag) takarítható meg. A vevő komfortzajt generál, hogy a vonal ne tűnjön megszakadtnak.`, []),
        S('EIR, FNR, AuC', R`EIR: IMEI-listák. Fehér: engedélyezett, fekete: tiltott (pl. lopott), szürke: megfigyelt. FNR: számhordozhatósági adatbázis, megmondja, melyik szolgáltatóhoz került egy hívószám. AuC: a Ki tárolása és a hitelesítési adatok (RAND, SRES, Kc) előállítása.`, [])],
      ered: [R`\text{VAD: szünetben nincs adás}\quad\text{EIR: IMEI-listák}\quad\text{FNR: számhordozhatóság}\quad\text{AuC: hitelesítés}`],
      fix: R`A gyűjtemény szerint a szürke listás készülékek „minden lépése blokkolva van”: helyesen használhatók, csak megfigyeltek.`, links: [srcAI(['ai2016_06_07_3', 'ai2014_12_15_3', 'ai2014_01_14_3'])] }
  ]
};
