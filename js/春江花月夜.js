sleep(100);var window = floaty.window('<frame><vertical><button id="btn" text="暂停"/><horizontal><button id="speedLow" text="减速" w="80"/><button id="speedHigh" text="加速"w="80"/></horizontal><horizontal><button id="speed" text="x1" w="80"/><button id="stop" text="停止"w="80"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.stopAll()})
var s=1;var speedControl=1;var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));//快速适配分辨率
} else {
    setScreenMetrics(1080, 2340); //默认分辨率，以下按键位置基于此分辨率
    var x = [410, 680, 950, 1220, 1490, 1760, 2030];
    var y = [980, 870, 760];
    var xy = [];for(var i = 0; i < 21; i++) {xy.push(x[i % 7], y[parseInt(i / 7)])}
}
function ran(){return Math.random()*20-10}
function pre(id,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(xy[id*2-2]+ran(),xy[id*2-1]+ran(),c)}
function c4(t) {pre(1,t)};function d4(t) {pre(2,t)};function e4(t) {pre(3,t)};
function f4(t) {pre(4,t)};function g4(t) {pre(5,t)};function a4(t) {pre(6,t)};
function b4(t) {pre(7,t)};function c5(t) {pre(8,t)};function d5(t) {pre(9,t)};
function e5(t) {pre(10,t)};function f5(t) {pre(11,t)};function g5(t) {pre(12,t)};
function a5(t) {pre(13,t)};function b5(t) {pre(14,t)};function c6(t) {pre(15,t)};
function d6(t) {pre(16,t)};function e6(t) {pre(17,t)};function f6(t) {pre(18,t)};
function g6(t) {pre(19,t)};function a6(t) {pre(20,t)};function b6(t) {pre(21,t)};
function sl(t) {while (s != 1) {sleep(100)};sleep(t/speedControl)};
a4();sl(35);a6();sl(287);e4();sl(35);a6();sl(147);a4();sl(33);a6();sl(139);c5();sl(41);c6();sl(291);e5();sl(41);d6();sl(127);a6();sl(170);g4();sl(40);g6();sl(290);d4();sl(339);d4();sl(43);g6();sl(454);b4();sl(53);a6();sl(114);g4();sl(36);g6();sl(303);d4();sl(44);g6();sl(289);g4();sl(36);a6();sl(299);b4();sl(36);c6();sl(159);d5();sl(35);d6();sl(144);a4();sl(35);e6();sl(305);e4();sl(328);a4();sl(329);e5();sl(329);a4();sl(39);e6();sl(289);e4();sl(35);d6();sl(142);a4();sl(31);e6();sl(146);c5();sl(43);g6();sl(287);e5();sl(40);e6();sl(140);g6();sl(172);a4();sl(37);a6();sl(461);e4();sl(33);c6();sl(300);a4();sl(32);d6();sl(465);f4();sl(41);c6();sl(296);c4();sl(37);d6();sl(144);e4();sl(37);f4();sl(136);a4();sl(40);d6();sl(292);c5();sl(40);c6();sl(127);a6();sl(169);g4();sl(45);g6();sl(286);d4();sl(330);g4();sl(57);g6();sl(443);b4();sl(45);c6();sl(124);a4();sl(31);a6();sl(142);e4();sl(35);c6();sl(138);a4();sl(38);d6();sl(302);c5();sl(49);a6();sl(125);e5();sl(49);c6();sl(130);g6();sl(166);d6();sl(165);a4();sl(37);e6();sl(305);e4();sl(333);a4();sl(328);e5();sl(329);a4();sl(40);e6();sl(296);e4();sl(45);a6();sl(126);a4();sl(44);c6();sl(134);c5();sl(40);g6();sl(135);e5();sl(37);a6();sl(140);e6();sl(165);d6();sl(171);g4();sl(67);d6();sl(265);d4();sl(350);g4();sl(329);d5();sl(328);a4();sl(40);e6();sl(456);e4();sl(47);g6();sl(285);a4();sl(45);a5();sl(128);c5();sl(30);g5();sl(142);e5();sl(45);a5();sl(124);g4();sl(38);d6();sl(304);d4();sl(42);e6();sl(126);g4();sl(48);d6();sl(130);b4();sl(48);c6();sl(124);d5();sl(50);d6();sl(125);e6();sl(165);c6();sl(59);f5();sl(110);g4();sl(49);d6();sl(286);d4();sl(331);g4();sl(333);d5();sl(331);g4();sl(53);d6();sl(286);d4();sl(329);g4();sl(333);d5();sl(336);g4();sl(47);d6();sl(291);d4();sl(332);g4();sl(333);d5();sl(336);g4();sl(47);d6();sl(293);d4();sl(44);d6();sl(294);g4();sl(175);b4();sl(170);d5();sl(330);f4();sl(66);c6();sl(267);c4();sl(331);f4();sl(46);c6();sl(129);a4();sl(58);d6();sl(120);c5();sl(46);a6();sl(131);g6();sl(172);f4();sl(46);c6();sl(470);e4();sl(73);c4();sl(268);f4();sl(70);d6();sl(430);f4();sl(54);c6();sl(444);c4();sl(50);e6();sl(296);f4();sl(63);d6();sl(441);f4();sl(43);c6();sl(294);c4();sl(61);d6();sl(117);f4();sl(68);e6();sl(104);a4();sl(78);d6();sl(262);c5();sl(58);c6();sl(113);a6();sl(168);g4();sl(65);g6();sl(271);d4();sl(339);g4();sl(63);g6();sl(434);d5();sl(72);a6();sl(102);a4();sl(54);e6();sl(443);e4();sl(51);g6();sl(287);a4();sl(59);a6();sl(282);c5();sl(75);c6();sl(99);g4();sl(64);g6();sl(273);d4();sl(332);g4();sl(77);g6();sl(259);b4();sl(59);c6();sl(117);d5();sl(51);d6();sl(123);a4();sl(41);a6();sl(457);e4();sl(61);c6();sl(276);a4();sl(61);g6();sl(283);c5();sl(53);f6();sl(128);a4();sl(73);e6();sl(429);e4();sl(50);d6();sl(285);a4();sl(46);c6();sl(292);e5();sl(65);e6();sl(106);g4();sl(49);d6();sl(287);d4();sl(331);g4();sl(336);d5();sl(333);a4();sl(73);e6();sl(271);e4();sl(64);a6();sl(107);a4();sl(62);c6();sl(107);c5();sl(50);g6();sl(121);e5();sl(59);a6();sl(113);g6();sl(168);e6();sl(169);g4();sl(81);d6();sl(256);d4();sl(54);e6();sl(121);g4();sl(48);d6();sl(127);b4();sl(57);c6();sl(113);d5();sl(59);d6();sl(112);e6();sl(169);c6();sl(168);g4();sl(72);d6();sl(270);d4();sl(331);g4();sl(337);d5();sl(341);a4();sl(49);e6();sl(306);e4();sl(332);a4();sl(332);e5();sl(336);a4();sl(55);e6();sl(607);e4();sl(45);e6();sl(125);a4();sl(54);g6();sl(120);c5();sl(54);e6();sl(119);e5();sl(51);g6();sl(124);g4();sl(71);d6();sl(265);d4();sl(334);g4();sl(57);d6();sl(283);d5();sl(336);a4();sl(54);e6();sl(286);e4();sl(331);a4();sl(62);a6();sl(437);c5();sl(48);c6();sl(132);g4();sl(44);g6();sl(293);d4();sl(331);g4();sl(54);g6();sl(454);c5();sl(52);c6();sl(125);a4();sl(52);a6();sl(120);e4();sl(44);c6();sl(128);a4();sl(63);d6();sl(273);c5();sl(65);a6();sl(107);e5();sl(55);c6();sl(120);g6();sl(172);d6();sl(173);a4();sl(66);e6();sl(273);e4();sl(331);a4();sl(330);e5();sl(331);a4();sl(62);e6();sl(277);e4();sl(57);a6();sl(119);a4();sl(46);c6();sl(127);c5();sl(59);g6();sl(115);e5();sl(60);a6();sl(113);g6();sl(168);e6();sl(169);g4();sl(51);d6();sl(287);d4();sl(333);g4();sl(333);d5();sl(330);g4();sl(40);d6();sl(131);d4();sl(39);e6();sl(133);g4();sl(38);g6();sl(297);b4();sl(45);e6();sl(125);d5();sl(37);g6();sl(138);e6();sl(166);d6();sl(166);f4();sl(51);c6();sl(285);c4();sl(337);f4();sl(327);c5();sl(328);f4();sl(45);c6();sl(285);c4();sl(39);c6();sl(293);f4();sl(40);c6();sl(290);a4();sl(40);d6();sl(135);c5();sl(30);e6();sl(144);a4();sl(39);a6();sl(295);e4();sl(330);a4();sl(347);e5();sl(333);a4();sl(34);a6();sl(301);e4();sl(39);a6();sl(298);a4();sl(39);c6();sl(292);e5();sl(57);g6();sl(273);a4();sl(35);e6();sl(468);e4();sl(50);e6();sl(279);a4();sl(50);e6();sl(286);e5();sl(36);g6();sl(132);a4();sl(36);e6();sl(469);e4();sl(48);e6();sl(284);a4();sl(32);e6();sl(301);e5();sl(43);g6();sl(123);a4();sl(36);a6();sl(468);e4();sl(40);c6();sl(295);a4();sl(40);d6();sl(456);f4();sl(43);c6();sl(292);c4();sl(41);d6();sl(157);f4();sl(38);e6();sl(131);a4();sl(43);d6();sl(289);c5();sl(41);c6();sl(129);a6();sl(168);g4();sl(35);g6();sl(298);d4();sl(329);g4();sl(43);g6();sl(450);d5();sl(50);a6();sl(118);g4();sl(35);g6();sl(302);d4();sl(41);g6();sl(292);g4();sl(45);a6();sl(286);b4();sl(37);c6();sl(134);d5();sl(36);d6();sl(135);a4();sl(41);e6();sl(293);e4();sl(331);a4();sl(328);e5();sl(330);a4();sl(46);e6();sl(285);e4();sl(47);a6();sl(124);a4();sl(35);c6();sl(138);c5();sl(41);g6();sl(125);e5();sl(55);a6();sl(119);g6();sl(168);e6();sl(165);g4();sl(36);d6();sl(305);d4();sl(43);e6();sl(125);g4();sl(35);d6();sl(157);b4();sl(43);c6();sl(129);d5();sl(48);d6();sl(129);e6();sl(166);c6();sl(164);g4();sl(50);d6();sl(291);d4();sl(328);g4();sl(330);d5();sl(328);g4();sl(39);d6();sl(296);d4();sl(331);g4();sl(330);d5();