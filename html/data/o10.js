'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f10', num: '10', short: 'VoIP, Erlang', title: 'VoIP és forgalmi méretezés',
  lead: R`VoIP csomagsebesség és sávszélesség, Erlang-B grafikon és egy elsőre megtévesztő Little-típusú feladat.`,
  alap: [
    { id: 'b10-forg', badge: 'A1', title: 'Képletek',
      html: R`$$v_\text{cs}=\frac{v_\text{forrás}}{n\,l_p}\qquad B=(n\,l_p+l_\text{fej})\cdot8\cdot v_\text{cs}\qquad A=\lambda h\qquad a=\frac AN(1-P_b)$$<p>Az átlagosan foglalt kiszolgálók (vagy egyszerre jelen lévők) száma a lebonyolított forgalom: $A(1-P_b)$.</p>` }
  ],
  ex: [
    { id: 'o10_01', num: '10.1', title: '16 kbit/s-os kodek, 20 byte-os szegmens, 66 byte fej', tags: ['vizsga'],
      src: R`5-ösöm 29. oldal · 5o_29_2`,
      task: R`<p>a) Csomagsebesség? b) Hívásonkénti sávszélesség? c) Mi korlátozza, hogy több szegmenst tegyünk egy csomagba?</p>`,
      lv: [S('Megoldás', '', [['behelyettesítés', R`v_\text{cs}=\frac{16\,000}{20\cdot8}=100\ \text{pps}`, ''], ['behelyettesítés', R`B=(66+20)\cdot8\cdot100=68{,}8\ \text{kbit/s}`, '']])],
      ered: [R`100\ \text{csomag/s}\qquad68{,}8\ \text{kbit/s}\qquad\text{c) késleltetés}`], chk: [R`A gyűjteményben a b) csak képletként szerepel.`], links: [src5(['5o_29_2'])] },
    { id: 'o10_02', num: '10.2', title: '10 byte, 5 ms, 47 byte fej: egy és két szegmens', tags: ['vizsga'],
      src: R`5-ösöm 29. oldal · 5o_29_3`,
      task: R`<p>a) Forrássebesség? b) Egy szegmens csomagonként: csomagsebesség és sávszélesség? c) Két szegmens csomagonként?</p>`,
      lv: [S('Megoldás', '', [['definíció', R`\frac{10\cdot8}{5\ \text{ms}}=16\ \text{kbit/s}`, ''], ['behelyettesítés', R`n=1:\ 200\ \text{pps},\ 57\cdot8\cdot200=91{,}2\ \text{kbit/s}`, ''], ['behelyettesítés', R`n=2:\ 100\ \text{pps},\ 67\cdot8\cdot100=53{,}6\ \text{kbit/s}`, '']])],
      ered: [R`16\ \text{kbit/s}\qquad91{,}2\ \text{kbit/s}\qquad53{,}6\ \text{kbit/s}`], links: [src5(['5o_29_3'])] },
    { id: 'o10_03', num: '10.3', title: 'Ügyfélszolgálat 21 munkatárssal', tags: ['vizsga', 'nehez'],
      src: R`5-ösöm 30. oldal · 5o_30_1`,
      task: R`<p>990 ezer ügyfél, 21 munkatárs, a csúcsidőben 0,1%-os blokkolás. a) Hívásintenzitás, ha a tartási idő 200 s? b) Hányszor hív egy ügyfél évente, ha ez az intenzitás állandó? c) Foglaltság? d) Hármat elbocsátanak, 17 fogadja a hívásokat, a 18. csak a blokkoltakat hívja vissza. Mekkora az ő foglaltsága?</p>`,
      lv: [S('a), b), c)', '', [['számérték', R`A(21;\,0{,}1\%)\approx10\ \text{Erl}\ \Rightarrow\ \lambda=\frac{10}{200}=0{,}05/\text{s}`, R`pontosan 10,1 Erl`], ['számérték', R`\frac{0{,}05\cdot3600\cdot24\cdot365}{990\,000}\approx1{,}6\ \text{hívás/év}`, 'b)'], ['számérték', R`a=\frac{10}{21}\cdot0{,}999=47{,}6\%`, 'c)']]),
        S('d)', '', [['számérték', R`P_b(10;\,17)=1{,}3\%`, 'grafikonról ≈ 1%'], ['behelyettesítés', R`\lambda P_b\cdot h=0{,}05\cdot0{,}013\cdot200=0{,}13\ \text{Erl}`, 'ha a visszahívás is 200 s']])],
      ered: [R`\lambda=0{,}05/\text{s}\qquad\approx1{,}6/\text{év}\qquad47{,}6\%\qquad\text{d) kb. 13\%}`],
      chk: [R`A gyűjtemény a d)-nél $P_b\approx1\%$-nál abbamarad. A visszahívás tartási idejére tett feltevés `+'`[ELLENŐRIZENDŐ]`'+'.'], links: [src5(['5o_30_1'])] },
    { id: 'o10_04', num: '10.4', title: 'Üzlet négy vásárlónak: mennyi a kiszolgálási idő?', tags: ['vizsga', 'javitas'],
      src: R`5-ösöm 30. oldal · 5o_30_2`,
      task: R`<p>A vásárlók között átlagosan 10 perc telik el, 4 fér el az üzletben, a többi nem vár. Átlagosan 0,6 vásárló van bent, a visszautasítás valószínűsége 0,2%. Mekkora a kiszolgálási idő?</p>`,
      miert: [[R`Mi a 0,6?`, R`Az egyszerre bent lévők átlagos száma a lebonyolított forgalom, $A(1-P_b)$. Ebből és a beérkezési intenzitásból kapjuk a tartási időt.`]],
      lv: [S('Megoldás', '', [['definíció', R`\lambda=\tfrac1{10}\ \text{1/perc}\qquad A=\frac{0{,}6}{1-0{,}002}=0{,}601\ \text{Erl}`, ''], ['számérték', R`h=\frac A\lambda\approx6\ \text{perc}`, '']])],
      ered: [R`h\approx6\ \text{perc}`],
      fix: R`A gyűjtemény „$A=h\lambda=10\cdot0{,}6=6$”-ot ír: a szám véletlenül jó, de a jelölés rossz (a 6 a tartási idő percben, nem a forgalom).`, links: [src5(['5o_30_2'])] },
    { id: 'o10_05', num: '10.5', title: 'Fair queuing és WFQ', tags: ['beugro'],
      src: R`5-ösöm 29. oldal · 5o_29_1`,
      task: R`<p>Mi a fair queuing előnye a szigorú prioritással szemben, és mi a WFQ előnye?</p>`,
      lv: [S('Válasz', 'Fair queuing: nincs kiéheztetés. WFQ: súlyozott, a fontosabb folyamok arányosan több sávot kapnak, mindenki kap garantált minimumot.', [])],
      ered: [R`\text{lásd a választ}`], links: [src5(['5o_29_1'])] }
  ]
};
