'use strict';
const { R, S, src5 } = require('./_h.js');
module.exports = {
  id: 'f3', num: '3', short: 'PAM, ISI', title: 'Digitális alapsávi átvitel (PAM, ISI)',
  lead: R`Elemi jelből szemábra, ISI és a többszintű rendszer próbája, valamint az emelt koszinuszos spektrum leolvasása.`,
  alap: [
    { id: 'b3-isi', badge: 'A1', title: 'ISI és többszintű jel',
      html: R`<p>A minta a saját és a szomszéd szimbólumok elemi jelének összege. $M$ szintnél a szem nyitott, ha $h_0-(M-1)\sum_{i\ne0}|h_i|>0$, és a felső szinteknél a küszöbök ($\pm2h_0,\ldots$) sem sérülnek. Nyquist: a spektrum $1/T$-s eltoltjainak összege állandó, emelt koszinusznál a lecsengés $1/(2T)$-re pontszimmetrikus, $\alpha=(f_2-f_1)/(f_2+f_1)$.</p>` }
  ],
  ex: [
    { id: 'o3_01', num: '3.1', title: 'Elemi jel 1,15 és 0,25', tags: ['vizsga'],
      src: R`5-ösöm 10. oldal · 5o_10_1`,
      task: R`<p>Bináris PAM, $h=1{,}15$ a $[0,T]$-n, $0{,}25$ a $[T,2T]$-n. a) PAM jel a …0-1-1-0-0-1… sorra. b) Van-e ISI, ha $t_0=3T/4$? c) Négyszintű szemábra ($-3,-1,+1,+3$), alkalmas-e?</p>`,
      lv: [S('Kétszintű', '', [['számérték', R`\pm1{,}15\pm0{,}25=\pm0{,}9,\ \pm1{,}4`, 'ISI van']]),
        S('Négyszintű', '', [['behelyettesítés', R`1{,}15-3\cdot0{,}25=0{,}4>0`, ''], ['ellenőrzés', R`1{,}15+0{,}75=1{,}9<2{,}3<3{,}45-0{,}75=2{,}7`, 'a 2,3-as küszöb is rendben']])],
      ered: [R`\pm0{,}9,\ \pm1{,}4\qquad\text{négyszintűre alkalmas}`],
      chk: [R`A kézírás „1,15 − 4·0,25 > 0”-t ír: a szorzó 3 (a szomszéd legfeljebb ±3), a következtetés jó.`], links: [src5(['5o_10_1'])] },
    { id: 'o3_02', num: '3.2', title: R`$\cos^2$ spektrumú elemi jel (hivatalos válasszal)`, tags: ['vizsga'],
      src: R`5-ösöm 11. oldal · 5o_11_1`,
      task: R`<p>$H(f)=h_0T\cos^2(\tfrac\pi2fT)$, ha $|f|<1/T$. a) Rajz. b) Elkerülhető-e az ISI? c) A szélessávú zajra optimális vevőszűrő? d) Okoz-e ISI-t egy 1200 Hz-es aluláteresztő, ha $T=833$ µs?</p>`,
      lv: [S('Megoldás', '', [['átalakítás', R`\cos^2(\tfrac\pi2fT)=\tfrac12(1+\cos\pi fT)`, '100%-os emelt koszinusz'], ['definíció', R`H_V\propto\sqrt{H}=\cos(\tfrac\pi2fT)`, 'koszinusz félhullám'], ['számérték', R`1/T=1200\ \text{Hz}`, 'a szűrő nem vág bele']])],
      ered: [R`\text{ISI-mentes}\qquad H_V\propto\cos(\pi fT/2)\qquad\text{nincs számottevő ISI}`],
      chk: [R`Hivatalos: „Igen, mert eltolgatva és összegezve az eredmény frekvenciafüggetlen konstans.” A vevőszűrő arányossági tényezője érdektelen, a jelre és a zajra egyaránt hat.`], links: [src5(['5o_11_1'])] },
    { id: 'o3_03', num: '3.3', title: 'Emelt koszinusz 0,8 és 1,2 MHz között', tags: ['vizsga'],
      src: R`5-ösöm 11. oldal · 5o_11_2, 5o_11_3`,
      task: R`<p>Az elemi jel spektruma 0,8 MHz-ig 1, 1,2 MHz-re nullára csökken, 1 MHz-en 0,5. a) Milyen jelzési idő ad ISI-mentes rendszert? b) A spektrum neve? c) Négyszintű rendszernél mekkora a bitsebesség? d) Hány százalékos a lekerekítés?</p>`,
      lv: [S('Megoldás', '', [['tétel', R`\frac1{2T}=1\ \text{MHz}\ \Rightarrow\ T=0{,}5\ \mu\text{s}`, ''], ['számérték', R`v=\frac{\log_24}{T}=2\cdot2=4\ \text{Mbit/s}`, ''], ['definíció', R`\alpha=\frac{1{,}2-1}{1}=20\%`, '']])],
      ered: [R`T=0{,}5\ \mu\text{s}\qquad\text{emelt koszinusz}\qquad4\ \text{Mbit/s}\qquad\alpha=20\%`], links: [src5(['5o_11_2', '5o_11_3'])] }
  ]
};
