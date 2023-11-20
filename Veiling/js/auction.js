const TOKEN = "6690684434:AAG_ClLvbXmBJnkfgYrIZPJkaVc4fuogwm0";
const CHAT_ID = "-914173160";
const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//--------------------------ДЕФЕКТИ-З-HOVER------------------------------

const infoLinks = document.querySelectorAll('.info-a');
infoLinks.forEach(infoLink => {
	infoLink.addEventListener('mouseenter', () => {
		const tankBox = infoLink.closest('.auction__tank-box');
		if (tankBox) {
			tankBox.classList.add('no-hover');
		}
	});
	infoLink.addEventListener('mouseleave', () => {
		const tankBox = infoLink.closest('.auction__tank-box');

		if (tankBox) {
			tankBox.classList.remove('no-hover');
		}
	});
});

//--------------------------МЕЛОДІЇ------------------------------

const buttons = document.querySelectorAll('.buttonClickSound');

buttons.forEach(function (button) {
	button.addEventListener('click', function () {
		const audioClick = new Audio("audio/click.mp3");
		audioClick.play();
	});
});

function newMessage() {
	const audioMessage = new Audio("audio/message.mp3");
	audioMessage.play();
}
function negativeMessage() {
	const audioMessage = new Audio("audio/negative_message.mp3");
	audioMessage.play();
}

//--------------------------ГРАВЦІ------------------------------

var MrStinger__ = [
	userInfo = [
		'Mr.Stinger__',
		48000,
		0,
	],
	userTanks = [
		'amx_30_prot1',
		'amx_els_bic',
		'bat_chat_25t',
		'bt_sv',
		'togg2',
		'super_conqueror',
		'kv_2',
		'is_7',
		'is_2_var2',
		'pz_b2',
		'type_5_heavy',
		'wz_pil',
		'fosh_155',
		'grill_15',
		'sy_130_pm'
	]
];
var Davidk104 = [
	userInfo = [
		'Davidk104',
		1500,
		0,
	],
	userTanks = [
	]
];
var Мисливець = [
	userInfo = [
		'Мисливець',
		20000,
		0,
	],
	userTanks = [
		'amx_els_bic',
		'bt_sv',
		'grill_15'
	]
];
var Вогнений_Тапок = [
	userInfo = [
		'Вогнений Тапок',
		15000,
		0,
	],
	userTanks = [
	]
];
var Killua = [
	userInfo = [
		'Killua',
		8500,
		0,
	],
	userTanks = [
	]
];

//--------------------------ІНФОРМАЦІЯ-КОРИСТУВАЧА------------------------------

const nameHTML = document.getElementById('name');
const moneyHTML = document.getElementById('gold');
var popupStart = document.getElementById('popupStart');

function startInform() {
	let raw = localStorage.getItem('InformAboutUser');
	loginDataOfUser = JSON.parse(raw);
	userInfo = JSON.parse(raw);
	let message = `<b>` + userInfo[0] + `</b>` + ` geregistreerd.`;
	console.log(message);
	axios.post(UPI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	});
}

if (localStorage.getItem('InformAboutUser') !== null) {
	let raw = localStorage.getItem('InformAboutUser');
	loginDataOfUser = JSON.parse(raw);
	userInfo = JSON.parse(raw);
	userInfoSynch();
	body.classList.remove('popupOpen');
} else {
	body = document.getElementById('body');
	const loginPas = document.getElementById('loginPassword');
	var loginBox = document.querySelector('.popup__login-box');
	var startForm = document.getElementById('loginForm');
	popupStart.style.opacity = "1";
	document.querySelector('.popup_login').style.pointerEvens = "none";
	popupStart.classList.add('startStart');
	body.classList.remove('popupOpen');
	body.classList.add('lock');
	setTimeout(function () {
		popupStart.classList.remove('startStart');
		popupStart.style.opacity = "0";
		document.querySelector('.popup_login').style.pointerEvens = "all";
		body.classList.add('popupOpen');
		body.classList.remove('lock');
	}, 13000);

	startForm.addEventListener('submit', function (e) {
		e.preventDefault();
		loginValue = loginPas.value;
		if (loginValue == 'mrstinger228' || loginValue == 'Mrstinger228') {
			userInfo = MrStinger__[0];
			userTanks = MrStinger__[1];

			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else if (loginValue == 'bogach' || loginValue == 'Bogach') {
			userInfo = [
				'Bogach',
				250000,
				0,
			];
			userTanks = [
			];
			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else if (loginValue == 'davidk104' || loginValue == 'Davidk104') {
			userInfo = Davidk104[0];
			userTanks = Davidk104[1];

			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else if (loginValue == 'hunterio' || loginValue == 'Hunterio') {
			userInfo = Мисливець[0];
			userTanks = Мисливець[1];

			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else if (loginValue == 'firetapok' || loginValue == 'Firetapok') {
			userInfo = Вогнений_Тапок[0];
			userTanks = Вогнений_Тапок[1];

			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else if (loginValue == 'killua' || loginValue == 'Killua') {
			userInfo = Killua[0];
			userTanks = Killua[1];

			startUserLogo();
			localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
			checkBuyedTanks();
			startInform();
		} else {
			loginBox.classList.add('loginAlerp');
			setTimeout(function () {
				loginBox.classList.remove('loginAlerp');
			}, 5000);
		}
	});
};

//--------------------------СТАРТОВЕ-МЕНЮ-РЕЄСТРАЦІЇ------------------------------

function startUserLogo() {
	localStorage.setItem('InformAboutUser', JSON.stringify(userInfo));
	let raw = localStorage.getItem('InformAboutUser');
	loginDataOfUser = JSON.parse(raw);
	userInfoSynch();
	body.classList.remove('popupOpen');
}
function userInfoSynch() {
	nameHTML.innerHTML = userInfo[0];
	nameHTML.href = `WomT/reels/${userInfo[0]}.html`;
	moneyHTML.innerHTML = userInfo[1].toLocaleString();
};
function userMoneySynch() {
	moneyHTML.innerHTML = userInfo[1].toLocaleString();
};

//--------------------------ПЕРЕВІРКА-КУПЛЕНИХ-ТАНКІВ------------------------------

const kv_2Block = document.getElementById('kv-2Box');
const togg2Block = document.getElementById('togg2Box');
const amx_els_bicBlock = document.getElementById('amx_els_bicBox');
const crombell_bBlock = document.getElementById('cromwell_bBox');
const bt_svBlock = document.getElementById('bt-svBox');
const s_35_caBlock = document.getElementById('s35_caBox');
const cherchill_gcBlock = document.getElementById('cherchill_gcBox');
const wz_pilBlock = document.getElementById('wz_pilBox');
const is_2_var2Block = document.getElementById('is-2_var2Box');
const lorraine_40tBlock = document.getElementById('lorraine_40tBox');
const wz_111Block = document.getElementById('wz-111Box');
const amx_30_prot1Block = document.getElementById('amx_30_prot1Box');
const t_49Block = document.getElementById('t-49Box');
const amx_13_75Block = document.getElementById('amx_13_75Box');
const sy_152Block = document.getElementById('sy-152Box');
const t_28_defBlock = document.getElementById('t-28_defBox');
const sy_130_pmBlock = document.getElementById('sy-130_pmBox');
const type_5_heavyBlock = document.getElementById('type_5_heavyBox');
const is_7Block = document.getElementById('is-7Box');
const t_57_heavyBlock = document.getElementById('t-57_heavyBox');
const super_conquerorBlock = document.getElementById('super_conquerorBox');
const bat_chat_25tBlock = document.getElementById('bat-chat_25tBox');
const udes_15_16Block = document.getElementById('udes_15/16Box');
const type_59_goldBlock = document.getElementById('type-59_goldBox');
const strv_103bBlock = document.getElementById('strv_103bBox');
const tortoiseBlock = document.getElementById('tortoiseBox');
const fosh_155Block = document.getElementById('fosh_155Box');
const t_34Block = document.getElementById('t-34_kharkivBox');
const t_64Block = document.getElementById('t-64_bm_oplotBox');
const t_34_s1Block = document.getElementById('t-34_kharkiv_skin1Box');
const t_34_s2Block = document.getElementById('t-34_kharkiv_skin2Box');
const t_64_sBlock = document.getElementById('t-64_bm_oplot_skinBox');
const t_34_winterBlock = document.getElementById('t-34_winterBox');
const goldBlock = document.getElementById('goldBox');


const firstWaveMain = document.getElementById('firstWaveMain');
const secondWaveMain = document.getElementById('secondWaveMain');
const thirdWaveMain = document.getElementById('thirdWaveMain');
const firstWaveSecondtext = document.getElementById('firstWaveSecondtext');
const secondWaveSecondtext = document.getElementById('secondWaveSecondtext');
const thirdWaveSecondtext = document.getElementById('thirdWaveSecondtext');
const timerMaintext1 = document.getElementById("timerMaintext1");
const timerMaintext2 = document.getElementById("timerMaintext2");
const timerMaintext3 = document.getElementById("timerMaintext3");


function checkBuyedTanks() {
	let allTanksBlocks = {
		'kv_2': kv_2Block,
		'togg2': togg2Block,
		'amx_els_bic': amx_els_bicBlock,
		'crombell_b': crombell_bBlock,
		'bt_sv': bt_svBlock,
		's35_ca': s_35_caBlock,
		'cherchill_gc': cherchill_gcBlock,
		'wz_pil': wz_pilBlock,
		'is_2_var2': is_2_var2Block,
		'lorraine_40t': lorraine_40tBlock,
		'wz_111': wz_111Block,
		'amx_30_prot1': amx_30_prot1Block,
		't_49': t_49Block,
		'amx_13_75': amx_13_75Block,
		'sy_152': sy_152Block,
		't_28_def': t_28_defBlock,
		'sy_130_pm': sy_130_pmBlock,
		'type_5_heavy': type_5_heavyBlock,
		'is_7': is_7Block,
		't_57_heavy': t_57_heavyBlock,
		'super_conqueror': super_conquerorBlock,
		'bat_chat_25t': bat_chat_25tBlock,
		'udes_15_16': udes_15_16Block,
		'type_59_gold': type_59_goldBlock,
		'strv_103b': strv_103bBlock,
		'tortoise': tortoiseBlock,
		'fosh_155': fosh_155Block,
		't_34_kharkiv': t_34Block,
		't_34_kharkiv_skin1': t_34_s1Block,
		't_34_kharkiv_skin2': t_34_s2Block,
		't_64_bm_oplot': t_64Block,
		't_64_bm_oplot_skin': t_64_sBlock,
		't_34_winter': t_34_winterBlock
	};
	for (let i = 0; i < userTanks.length; i++) {
		let tankName = userTanks[i];
		if (allTanksBlocks[tankName]) {
			if (userTanks[i] == "t_34_kharkiv") {
				t_34_s1Block.classList.remove('tank-locked');
				t_34_s2Block.classList.remove('tank-locked');
			} else if (userTanks[i] == "t_64_bm_oplot") {
				t_64_sBlock.classList.remove('tank-locked');
			}
			allTanksBlocks[tankName].classList.add('buyedTank');
		}
	};
};


if (localStorage.getItem('InformAboutBuyedTanks') !== null) {
	rawTanks = localStorage.getItem('InformAboutBuyedTanks');
	loginDataOfBuyedTanks = JSON.parse(rawTanks);
	userTanks = loginDataOfBuyedTanks;
	checkBuyedTanks();
}
function synchUserInfoLocal() {
	localStorage.setItem('InformAboutUser', JSON.stringify(userInfo));
	let raw = localStorage.getItem('InformAboutUser');
	loginDataOfUser = JSON.parse(raw);
}
function userTanksSynchLocal() {
	localStorage.setItem('InformAboutBuyedTanks', JSON.stringify(userTanks));
	rawTanks = localStorage.getItem('InformAboutBuyedTanks');
	loginDataOfBuyedTanks = JSON.parse(rawTanks);
}

//--------------------------ЖЕТОНИ------------------------------

tokenStart = 1;
let tokenButton = document.getElementById('tokenButton');
let tokensHtml = document.getElementById('tokens');
let tokenInfoDiv = document.getElementById('tokenInfoDiv');
let hamburger = document.getElementById('ham');

let tokensNum = 0;
if (localStorage.getItem('InformAboutUser') === null) {
	localStorage.setItem('userTokens', JSON.stringify(tokensNum));
} else {
	rawTokens = localStorage.getItem('userTokens');
	rawTokensParse = JSON.parse(rawTokens);
	tokensNum = rawTokensParse;
	tokensHtml.innerHTML = rawTokensParse;
}

function tokensStart() {
	if (localStorage.getItem('userTokens') !== null) {
		rawTokens = localStorage.getItem('userTokens');
		rawTokensParse = JSON.parse(rawTokens);
		tokensNum = rawTokensParse;
		tokensHtml.innerHTML = rawTokensParse;
	} else {
		localStorage.setItem('userTokens', JSON.stringify(tokensNum));
		tokensHtml.innerHTML = tokensNum;
		tokenButtonRemove();
		hamburger.classList.add('hamTokenAnima');
	}

	function tokenButtonRemove() {
		setTimeout(function () {
			tokenButton.classList.remove('lampsBuyed');
		}, 1000);
	}
	if (tokenStart == 0) {
		tokenButton.classList.add('lampsNone');
		hamburger.classList.remove('hamTokenAnima');
		localStorage.removeItem('TimeOfTheTokens');
		timerOfTheTimers = 0;
		tokenInfoDiv.innerHTML = 'het evenement is voltooid';
	} else {

		function divTimeSych() {
			rawTimeLocal = localStorage.getItem('TimeOfTheTokens');
			rawTime = JSON.parse(rawTimeLocal);
			timeLocalPlusOne = rawTime.hours + 1;
			if (timeLocalPlusOne < 10 && timeLocalPlusOne >= 0) {
				divHou = "0" + String(rawTime.hours);
			} else {
				divHou = timeLocalPlusOne;
			}
			if (0 <= rawTime.minutes && rawTime.minutes <= 9) {
				divMin = "0" + String(rawTime.minutes);
			} else {
				divMin = rawTime.minutes;
			};
			if (0 <= rawTime.seconds && rawTime.seconds <= 9) {
				divSec = "0" + String(rawTime.seconds);
			} else {
				divSec = rawTime.seconds;
			};
			tokenInfoDiv.innerHTML = divHou + ":" + divMin + ":" + divSec;
		};
		if (localStorage.getItem('TimeOfTheTokens') !== null) {
			console.log('Ми чекаємо на завершення відліку часу для жетонів');
			timerOfTheTimers = 1;
			rawTokenTime = localStorage.getItem('TimeOfTheTokens');
			rawTokensTimeParse = JSON.parse(rawTokenTime);
			const tokensNumTime = rawTokensTimeParse;
			divTimeSych();
		} else {
			tokenButtonRemove();
			hamburger.classList.add('hamTokenAnima');
			timerOfTheTimers = 0;
		}
		tokenButton.addEventListener('submit', function (e) {
			e.preventDefault();
			tokenButton.classList.add('lampsBuyed');
			hamburger.classList.remove('hamTokenAnima');
			currentTime = new Date();
			yearL = currentTime.getFullYear();
			monthL = currentTime.getMonth();
			Date.prototype.getWeek = function () {
				var onejan = new Date(this.getFullYear(), 0, 1);
				return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
			};
			var weekL = (new Date()).getWeek();
			daysL = currentTime.getDay();
			hoursL = currentTime.getHours();
			minutesL = currentTime.getMinutes();
			secondsL = currentTime.getSeconds();
			timeLocal = {
				year: yearL,
				month: monthL,
				weeks: weekL,
				days: daysL,
				hours: hoursL,
				minutes: minutesL,
				seconds: secondsL
			};
			localStorage.setItem('TimeOfTheTokens', JSON.stringify(timeLocal));
			rawTimeLocal = localStorage.getItem('TimeOfTheTokens');
			rawTime = JSON.parse(rawTimeLocal);
			timerOfTheTimers = 1;
			tokensNum += 1;
			localStorage.setItem('userTokens', JSON.stringify(tokensNum));
			rawTokens = localStorage.getItem('userTokens');
			rawTokensParse = JSON.parse(rawTokens);
			tokensHtml.innerHTML = rawTokensParse;
			divTimeSych();
			const popup__message = document.createElement('div');
			popup__message.innerHTML = `
			<div class="popup__message">
				<div class="popup__message-text">
					Ви отримали: <span class="popup__message-value">+1</span><img class="popup__message-img" src="img/resurses/token.png">
				</div>
			</div>
			`;
			newMessage();
			document.getElementById('messages').appendChild(popup__message);
			setTimeout(function () {
				popup__message.remove();
			}, 9000);
		});



		timeCheck = setInterval(function () {
			if (timerOfTheTimers == 1) {
				rawTimeLocal = localStorage.getItem('TimeOfTheTokens');
				rawTime = JSON.parse(rawTimeLocal);
				let timeNow = new Date();
				yearN = timeNow.getFullYear();
				monthN = timeNow.getMonth();
				daysN = timeNow.getDay();
				hoursN = timeNow.getHours();
				minutesN = timeNow.getMinutes();
				secondsN = timeNow.getSeconds();
				Date.prototype.getWeek = function () {
					var onejan = new Date(this.getFullYear(), 0, 1);
					return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
				};
				var weekNumber = (new Date()).getWeek();
				timeNowBase = {
					year: yearN,
					month: monthN,
					weeks: weekNumber,
					days: daysN,
					hours: hoursN,
					minutes: minutesN,
					seconds: secondsN
				};
				function tokensOpen() {
					tokenButtonRemove();
					hamburger.classList.add('hamTokenAnima');
					localStorage.removeItem('TimeOfTheTokens');
					timerOfTheTimers = 0;
				}
				if (rawTime.hours < timeNowBase.hours && rawTime.minutes <= timeNowBase.minutes && rawTime.seconds < timeNowBase.seconds) {
					tokensOpen();
				} else if (timeNowBase.hours === rawTime.hours + 1 && rawTime.minutes > timeNowBase.minutes) {
				} else if (timeNowBase.hours > rawTime.hours) {
					tokensOpen();
				} else if (timeNowBase.year > rawTime.year) {
					tokensOpen();
				} else if (timeNowBase.month > rawTime.month) {
					tokensOpen();
				} else if (timeNowBase.days > rawTime.days) {
					tokensOpen();
				} else if (timeNowBase.days == 0 && rawTime.days > timeNowBase.days) {
					tokensOpen();
				} else if (timeNowBase.weeks > rawTime.weeks) {
					tokensOpen();
				};
				if (timeNowBase.days == 2) {
					rawTanks = localStorage.getItem('InformAboutBuyedTanks');
					loginDataOfBuyedTanks = JSON.parse(rawTanks);
					userTanks = loginDataOfBuyedTanks;
					if (userTanks.includes("t-34Kharkiv")) {
					} else {
						animaSynch();
						document.getElementById('t_34KharkivAnima').classList.remove('displayNone');
						anima(1);
						userTanks.push('t-34Kharkiv');
						checkBuyedTanks();
						userTanksSynchLocal();
						let message = `<b>` + userInfo[0] + `</b>` + ` ontvangen als cadeau ` + `<b>"Т-34 Харків"</b>` + `\n`;
						axios.post(UPI_API, {
							chat_id: CHAT_ID,
							parse_mode: 'html',
							text: message
						});
					}
				}
			}
		}, 1000);
	}
};

//--------------------------ІНФОРМАЦІЯ-ПРО-ВСІ-ТАНКИ------------------------------

let kv2Price = document.getElementById('kv2Price');
let togg2_Price = document.getElementById('togg2Price');
let amx_els_bicPrice = document.getElementById('amx_els_bicPrice');
let cromwell_bPrice = document.getElementById('cromwell_bPrice');
let bt_svPrice = document.getElementById('bt_svPrice');
let s35_caPrice = document.getElementById('s35_caPrice');
let cherchill_gcPrice = document.getElementById('cherchill_gcPrice');
let wz_pilPrice = document.getElementById('wz_pilPrice');
let is_2_var2Price = document.getElementById('is_2_var2Price');
let lorraine_40tPrice = document.getElementById('lorraine_40tPrice');
let wz_111Price = document.getElementById('wz_111Price');
let amx_30_prot1Price = document.getElementById('amx_30_prot1Price');
let t_49Price = document.getElementById('t_49Price');
let amx_13_75Price = document.getElementById('amx_13_75Price');
let sy_152Price = document.getElementById('sy_152Price');
let t_28_defPrice = document.getElementById('t_28_defPrice');
let sy_130_pmPrice = document.getElementById('sy_130_pmPrice');
let type_5_heavyPrice = document.getElementById('type_5_heavyPrice');
let is_7Price = document.getElementById('is_7Price');
let t_57_heavyPrice = document.getElementById('t_57_heavyPrice');
let super_conquerorPrice = document.getElementById('super_conquerorPrice');
let bat_chat_25tPrice = document.getElementById('bat_chat_25tPrice');
let udes_15_16Price = document.getElementById('udes_15_16Price');
let type_59_gPrice = document.getElementById('type_59_gPrice');
let strv_103bPrice = document.getElementById('strv_103bPrice');
let tortoisePrice = document.getElementById('tortoisePrice');
let fosh_155Price = document.getElementById('fosh_155Price');


var tanksArrays = {
	kv_2: ['КВ-2', 8000,],
	togg2: ['TOGG II*', 8000,],
	amx_els_bic: ['AMX ELS bic', 7500,],
	crombell_b: ['Cromwell Berlin', 7500,],
	bt_sv: ['БТ-СВ', 7500,],
	s35_ca: ['S35 CA', 7000,],
	cherchill_gc: ['Cherchill GC', 7000,],
	wz_pil: ['WZ Пилаючий', 7000,],
	is_2_var2: ['ИС-2 вар.2', 8000,],
	lorraine_40t: ['Lorraine 40t', 7500,],
	wz_111: ['WZ-111', 7500,],
	amx_30_prot1: ['AMX 30 prot.1', 8000,],
	t_49: ['T-49', 8500,],
	amx_13_75: ['AMX 13 75', 7000,],
	sy_152: ['СУ-152', 7500,],
	t_28_def: ['T-28 Defender', 8000,],
	sy_130_pm: ['СУ-130 ПМ', 8000,],
	type_5_heavy: ['Type 5 Heavy', 10000,],
	is_7: ['ИС-7', 8500,],
	t_57_heavy: ['T-57 Heavy', 8000,],
	super_conqueror: ['Super Conqueror', 8500,],
	bat_chat_25t: ['Bat-Chat 25t', 8000,],
	udes_15_16: ['Udes 15/16', 8500,],
	type_59_gold: ['Type-59 Gold', 8000,],
	strv_103b: ['Strv 103b', 9000,],
	tortoise: ['Tortoise', 8000,],
	fosh_155: ['FOSH 155', 8500,],
	t_64_bm_oplot: ['Т-64 БМ Оплот', '12',],
	t_34_kharkiv: ['Т-54', '5',],
	t_34_winter: ['Т-34 Зимній снайпер', '3',],
	t_64_bm_oplot_skin: ['Т-64 БМ Оплот Скін', '3',],
	t_34_kharkiv_skin1: ['Т-54 Патріот1', '2',],
	t_34_kharkiv_skin2: ['Т-54 Патріот2', '2',],
	gold: ['Gold', '2',],
};

//--------------------------ТАЙМЕРА------------------------------

let timers = [
	{ date: new Date("11 04, 2023 21:33:00"), wave: 0, number: 0.1 },
	{ date: new Date("11 04, 2023 21:33:15"), wave: 1, number: 1 },
	{ date: new Date("11 04, 2023 21:33:30"), wave: 1, number: 1 },
	{ date: new Date("11 04, 2023 21:33:45"), wave: 1, number: 1.3 },
	{ date: new Date("11 04, 2023 21:34:00"), wave: 1, number: 1.4 },
	{ date: new Date("11 04, 2023 21:34:15"), wave: 1, number: 0.2 },
	{ date: new Date("11 04, 2023 21:34:30"), wave: 2, number: 2 },
	{ date: new Date("11 04, 2023 21:34:45"), wave: 2, number: 2 },
	{ date: new Date("12 04, 2023 21:35:00"), wave: 2, number: 2.3 },
	{ date: new Date("11 04, 2023 21:35:15"), wave: 2, number: 2.4 },
	{ date: new Date("11 04, 2023 21:35:30"), wave: 2, number: 0.3 },
	{ date: new Date("11 04, 2023 21:40:45"), wave: 3, number: 3 },
	{ date: new Date("11 04, 2023 21:41:00"), wave: 3, number: 3 },
	{ date: new Date("11 04, 2023 21:41:15"), wave: 3, number: 3 },
	{ date: new Date("11 04, 2023 21:41:30"), wave: 3, number: 3.4 },
	{ date: new Date("11 04, 2023 21:41:45"), wave: 3, number: 3.5 },
];

let timerNum = 0;
timer();

function timer() {
	if (timerNum >= timers.length) {
		return;
	} else {
		let currentTimer = timers[timerNum].date;

		let x = setInterval(function () {
			let now = new Date().getTime();
			let t = currentTimer - now;
			let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((t % (1000 * 60)) / 1000);
			let waveNum = timers[timerNum].wave;
			if (waveNum > 0) {
				document.getElementById("hour" + waveNum).innerHTML = hours;
				document.getElementById("minute" + waveNum).innerHTML = minutes;
				document.getElementById("second" + waveNum).innerHTML = seconds;
			}

			if (t < 0) {
				timerNum++;
				clearInterval(x);
				console.log(timers[timerNum - 1].number, timerNum);
				if (timers[timerNum - 1].number == 0.1) {
					kv_2Block.classList.remove('tank-closed');
					togg2Block.classList.remove('tank-closed');
					amx_els_bicBlock.classList.remove('tank-closed');
					crombell_bBlock.classList.remove('tank-closed');;
					bt_svBlock.classList.remove('tank-closed');
					s_35_caBlock.classList.remove('tank-closed');
					cherchill_gcBlock.classList.remove('tank-closed');
					wz_pilBlock.classList.remove('tank-closed');
					tokenInfoDiv.innerHTML = 'afhaal!';
					timerMaintext1.classList.remove('noneText');
					tokensStart();
				} else if (timers[timerNum - 1].number == 1) {
					minusPriceFirstWave();
					firstWaveSecondtext.innerHTML = `(Nadat de timer is afgelopen, daalt de prijs met 1000 goud)`;
				} else if (timers[timerNum - 1].number == 1.3) {
					minusPriceFirstWave();
				} else if (timers[timerNum - 1].number == 1.4) {
					minusPriceFirstWave();
					is_2_var2Block.classList.remove('tank-locked');
					is_2_var2Block.classList.add('tank-closed');
					lorraine_40tBlock.classList.remove('tank-locked');
					lorraine_40tBlock.classList.add('tank-closed');
					wz_111Block.classList.remove('tank-locked');
					wz_111Block.classList.add('tank-closed');
					amx_30_prot1Block.classList.remove('tank-locked');
					amx_30_prot1Block.classList.add('tank-closed');
					t_49Block.classList.remove('tank-locked');
					t_49Block.classList.add('tank-closed');
					amx_13_75Block.classList.remove('tank-locked');
					amx_13_75Block.classList.add('tank-closed');
					sy_152Block.classList.remove('tank-locked');
					sy_152Block.classList.add('tank-closed');
					t_28_defBlock.classList.remove('tank-locked');
					t_28_defBlock.classList.add('tank-closed');
					sy_130_pmBlock.classList.remove('tank-locked');
					sy_130_pmBlock.classList.add('tank-closed');
					firstWaveSecondtext.innerHTML = `!!! Nadat de timer is afgelopen, is het onmogelijk om tanks van de <span class="red">Eerste </span>golf te kopen!!!`;
				} else if (timers[timerNum - 1].number == 0.2) {
					kv_2Block.classList.add('tank-closed');
					togg2Block.classList.add('tank-closed');
					amx_els_bicBlock.classList.add('tank-closed');
					crombell_bBlock.classList.add('tank-closed');;
					bt_svBlock.classList.add('tank-closed');
					s_35_caBlock.classList.add('tank-closed');
					cherchill_gcBlock.classList.add('tank-closed');
					wz_pilBlock.classList.add('tank-closed');
					firstWaveMain.innerHTML = `Voltooid`;
					timerMaintext1.classList.add('noneText');
					firstWaveSecondtext.innerHTML = ``;
					is_2_var2Block.classList.remove('tank-closed');
					lorraine_40tBlock.classList.remove('tank-closed');
					wz_111Block.classList.remove('tank-closed');
					amx_30_prot1Block.classList.remove('tank-closed');
					t_49Block.classList.remove('tank-closed');
					amx_13_75Block.classList.remove('tank-closed');
					sy_152Block.classList.remove('tank-closed');
					t_28_defBlock.classList.remove('tank-closed');
					sy_130_pmBlock.classList.remove('tank-closed');
					timerMaintext2.classList.remove('noneText');
				} else if (timers[timerNum - 1].number == 2) {
					minusPriceSecondWave();
					secondWaveSecondtext.innerHTML = `(Nadat de timer is afgelopen, daalt de prijs met 1000 goud)`;
				} else if (timers[timerNum - 1].number == 2.3) {
					minusPriceSecondWave();
				} else if (timers[timerNum - 1].number == 2.4) {
					minusPriceSecondWave();
					type_5_heavyBlock.classList.remove('tank-locked');
					type_5_heavyBlock.classList.add('tank-closed');
					is_7Block.classList.remove('tank-locked');
					is_7Block.classList.add('tank-closed');
					t_57_heavyBlock.classList.remove('tank-locked');
					t_57_heavyBlock.classList.add('tank-closed');
					super_conquerorBlock.classList.remove('tank-locked');
					super_conquerorBlock.classList.add('tank-closed');
					bat_chat_25tBlock.classList.remove('tank-locked');
					bat_chat_25tBlock.classList.add('tank-closed');
					udes_15_16Block.classList.remove('tank-locked');
					udes_15_16Block.classList.add('tank-closed');
					type_59_goldBlock.classList.remove('tank-locked');
					type_59_goldBlock.classList.add('tank-closed');
					strv_103bBlock.classList.remove('tank-locked');
					strv_103bBlock.classList.add('tank-closed');
					tortoiseBlock.classList.remove('tank-locked');
					tortoiseBlock.classList.add('tank-closed');
					fosh_155Block.classList.remove('tank-locked');
					fosh_155Block.classList.add('tank-closed');
					secondWaveSecondtext.innerHTML = `!!! Nadat de timer is afgelopen, is het onmogelijk om tanks van de <span class="red">Tweede</span> golf te kopen!!!`;
				} else if (timers[timerNum - 1].number == 0.3) {
					is_2_var2Block.classList.add('tank-closed');
					lorraine_40tBlock.classList.add('tank-closed');
					wz_111Block.classList.add('tank-closed');
					amx_30_prot1Block.classList.add('tank-closed');
					t_49Block.classList.add('tank-closed');
					amx_13_75Block.classList.add('tank-closed');
					sy_152Block.classList.add('tank-closed');
					t_28_defBlock.classList.add('tank-closed');
					sy_130_pmBlock.classList.add('tank-closed');
					secondWaveMain.innerHTML = `Voltooid`;
					timerMaintext2.classList.add('noneText');
					secondWaveSecondtext.innerHTML = ``;

					type_5_heavyBlock.classList.remove('tank-closed');
					is_7Block.classList.remove('tank-closed');
					t_57_heavyBlock.classList.remove('tank-closed');
					super_conquerorBlock.classList.remove('tank-closed');
					bat_chat_25tBlock.classList.remove('tank-closed');
					udes_15_16Block.classList.remove('tank-closed');
					type_59_goldBlock.classList.remove('tank-closed');
					strv_103bBlock.classList.remove('tank-closed');
					tortoiseBlock.classList.remove('tank-closed');
					fosh_155Block.classList.remove('tank-closed');
					timerMaintext3.classList.remove('noneText');
				} else if (timers[timerNum - 1].number == 3) {
					minusPriceThirdWave();
					thirdWaveSecondtext.innerHTML = `(Nadat de timer is afgelopen, daalt de prijs met 1000 goud)`;
				} else if (timers[timerNum - 1].number == 3.4) {
					minusPriceThirdWave();
					thirdWaveSecondtext.innerHTML = `!!! Dit is de laatste kans om deze tanks te kopen!!!`;
				} else if (timers[timerNum - 1].number == 3.5) {
					type_5_heavyBlock.classList.add('tank-closed');
					is_7Block.classList.add('tank-closed');
					t_57_heavyBlock.classList.add('tank-closed');
					super_conquerorBlock.classList.add('tank-closed');
					bat_chat_25tBlock.classList.add('tank-closed');
					udes_15_16Block.classList.add('tank-closed');
					type_59_goldBlock.classList.add('tank-closed');
					strv_103bBlock.classList.add('tank-closed');
					tortoiseBlock.classList.add('tank-closed');
					fosh_155Block.classList.add('tank-closed');
					thirdWaveMain.innerHTML = `Voltooid`;
					timerMaintext3.classList.add('noneText');
					thirdWaveSecondtext.innerHTML = ``;
					tokensStart(tokenStart = 0);
				}
				timer();
			}
		}, 10);
	}
}



//--------------------------РЕЗУЛЬТАТИ-ЗАВЕРШЕННЯ-ХВИЛЬ------------------------------

function minusPriceFirstWave() {
	tanksArrays['kv_2'][1] -= 1000;
	tanksArrays['togg2'][1] -= 1000;
	tanksArrays['amx_els_bic'][1] -= 1000;
	tanksArrays['crombell_b'][1] -= 1000;
	tanksArrays['bt_sv'][1] -= 1000;
	tanksArrays['s35_ca'][1] -= 1000;
	tanksArrays['cherchill_gc'][1] -= 1000;
	tanksArrays['wz_pil'][1] -= 1000;
	kv2Price.innerHTML = tanksArrays['kv_2'][1];
	togg2Price.innerHTML = tanksArrays['togg2'][1];
	amx_els_bicPrice.innerHTML = tanksArrays['amx_els_bic'][1];
	cromwell_bPrice.innerHTML = tanksArrays['crombell_b'][1];
	bt_svPrice.innerHTML = tanksArrays['bt_sv'][1];
	s35_caPrice.innerHTML = tanksArrays['s35_ca'][1];
	cherchill_gcPrice.innerHTML = tanksArrays['cherchill_gc'][1];
	wz_pilPrice.innerHTML = tanksArrays['wz_pil'][1];
};

function minusPriceSecondWave() {
	tanksArrays['is_2_var2'][1] -= 1000;
	tanksArrays['lorraine_40t'][1] -= 1000;
	tanksArrays['wz_111'][1] -= 1000;
	tanksArrays['amx_30_prot1'][1] -= 1000;
	tanksArrays['t_49'][1] -= 1000;
	tanksArrays['amx_13_75'][1] -= 1000;
	tanksArrays['sy_152'][1] -= 1000;
	tanksArrays['t_28_def'][1] -= 1000;
	tanksArrays['sy_130_pm'][1] -= 1000;
	is_2_var2Price.innerHTML = tanksArrays['is_2_var2'][1];
	lorraine_40tPrice.innerHTML = tanksArrays['lorraine_40t'][1];
	wz_111Price.innerHTML = tanksArrays['wz_111'][1];
	amx_30_prot1Price.innerHTML = tanksArrays['amx_30_prot1'][1];
	t_49Price.innerHTML = tanksArrays['t_49'][1];
	amx_13_75Price.innerHTML = tanksArrays['amx_13_75'][1];
	sy_152Price.innerHTML = tanksArrays['sy_152'][1];
	t_28_defPrice.innerHTML = tanksArrays['t_28_def'][1];
	sy_130_pmPrice.innerHTML = tanksArrays['sy_130_pm'][1];
};


function minusPriceThirdWave() {
	tanksArrays['type_5_heavy'][1] -= 1000;
	tanksArrays['is_7'][1] -= 1000;
	tanksArrays['t_57_heavy'][1] -= 1000;
	tanksArrays['super_conqueror'][1] -= 1000;
	tanksArrays['bat_chat_25t'][1] -= 1000;
	tanksArrays['udes_15_16'][1] -= 1000;
	tanksArrays['type_59_gold'][1] -= 1000;
	tanksArrays['strv_103b'][1] -= 1000;
	tanksArrays['tortoise'][1] -= 1000;
	tanksArrays['fosh_155'][1] -= 1000;
	type_5_heavyPrice.innerHTML = tanksArrays['type_5_heavy'][1];
	is_7Price.innerHTML = tanksArrays['is_7'][1];
	t_57_heavyPrice.innerHTML = tanksArrays['t_57_heavy'][1];
	super_conquerorPrice.innerHTML = tanksArrays['super_conqueror'][1];
	bat_chat_25tPrice.innerHTML = tanksArrays['bat_chat_25t'][1];
	udes_15_16Price.innerHTML = tanksArrays['udes_15_16'][1];
	type_59_gPrice.innerHTML = tanksArrays['type_59_gold'][1];
	strv_103bPrice.innerHTML = tanksArrays['strv_103b'][1];
	tortoisePrice.innerHTML = tanksArrays['tortoise'][1];
	fosh_155Price.innerHTML = tanksArrays['fosh_155'][1];
};

//--------------------------ПРОМОКОДИ------------------------------

let popupPromo = document.getElementById('popupPromo');
let loginPromo = document.getElementById('loginPromo');
let promoBox = document.getElementById('popupLoginBox');

let activatedPromo = [];

if (localStorage.getItem('InformAboutUser') === null) {
	localStorage.setItem('ActivatedPromoCodes', JSON.stringify(activatedPromo));
}

document.getElementById('promoCodes').addEventListener('submit', function (e) {
	e.preventDefault();
	body.classList.add('lock');
	popupPromo.classList.add('promoActive');
	document.getElementById('promoBack').addEventListener('click', function (e) {
		e.preventDefault();
		body.classList.remove('lock');
		popupPromo.classList.remove('promoActive');
	});
});

function sendMessageCode(promoValue) {
	let message = `<b>` + userInfo[0] + `</b>` + ` heb een code gekregen ` + `<b>"` + promoValue + `"</b>` + ` goud.\n`;
	axios.post(UPI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	});
}

promoBox.addEventListener('submit', function (e) {
	e.preventDefault();
	let promoCode = loginPromo.value.toLowerCase();
	let rawPromo = localStorage.getItem('ActivatedPromoCodes');
	let rawPromoActive = JSON.parse(rawPromo);
	let promoValue;

	if (rawPromoActive.includes(promoCode)) {
		promoBox.classList.add('promoAlerp');
		setTimeout(function () {
			promoBox.classList.remove('promoAlerp');
		}, 5000);
	} else {
		switch (promoCode) {
			case '5oo':
				promoValue = 500;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'qwe':
				promoValue = 1000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'ny2024':
				promoValue = 1000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'hochu2000':
				promoValue = 2000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'paral2':
				promoValue = 2000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'lama':
				promoValue = 2000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'triada':
				promoValue = 3000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'piv-kilo':
				promoValue = 5000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'kilo':
				promoValue = 10000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'protaga':
				promoValue = -8000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'nasnaga':
				promoValue = -8000;
				loginPromo.value = '';
				sendMessageCode(promoValue);
				break;
			case 'tmode':
				rawTokens = localStorage.getItem('userTokens');
				rawTokensParse = JSON.parse(rawTokens);
				tokensNum = rawTokensParse;
				tokensNum += 500;
				localStorage.setItem('userTokens', JSON.stringify(tokensNum));
				rawTokens = localStorage.getItem('userTokens');
				rawTokensParse = JSON.parse(rawTokens);
				tokensHtml.innerHTML = rawTokensParse;
				const popup__message = document.createElement('div');
				popup__message.innerHTML = `
				<div class="popup__message">
					 <div class="popup__message-text">
					 	jij hebt: <span class="popup__message-value">+500</span><img class="popup__message-img" src="img/resurses/token.png">
					 </div>
				</div>
				`;
				newMessage();
				document.getElementById('messages').appendChild(popup__message);
				setTimeout(function () {
					popup__message.remove();
				}, 9000);
				message = `<b>` + userInfo[0] + `</b>` + ` heb een code gekregen ` + `<b>"` + '500' + `"</b>` + ` munten.\n`;
				axios.post(UPI_API, {
					chat_id: CHAT_ID,
					parse_mode: 'html',
					text: message
				});
				return;
			case 'krashii':
				rawTokens = localStorage.getItem('userTokens');
				rawTokensParse = JSON.parse(rawTokens);
				tokensNum = rawTokensParse;
				tokensNum += 3;
				localStorage.setItem('userTokens', JSON.stringify(tokensNum));
				rawTokens = localStorage.getItem('userTokens');
				rawTokensParse = JSON.parse(rawTokens);
				tokensHtml.innerHTML = rawTokensParse;

				rawPromoActive.push(promoCode);
				localStorage.setItem('ActivatedPromoCodes', JSON.stringify(rawPromoActive));
				loginPromo.value = '';

				purchase('t_34_winter', 'tokens');
				message = `<b>` + userInfo[0] + `</b>` + ` een skincode ontvangen` + `<b>"` + userInfo[0] + `"</b>`;
				axios.post(UPI_API, {
					chat_id: CHAT_ID,
					parse_mode: 'html',
					text: message
				});
				return;
			case 'restart':
				localStorage.clear();
				location.reload();
				return;
			default:
				let promoBox = document.getElementById('popupLoginBox');
				promoBox.classList.add('promoAlerp');
				setTimeout(function () {
					promoBox.classList.remove('promoAlerp');
				}, 5000);
				return;
		}
		userInfo[1] += promoValue;
		userMoneySynch();
		synchUserInfoLocal();

		rawPromoActive.push(promoCode);
		localStorage.setItem('ActivatedPromoCodes', JSON.stringify(rawPromoActive));

		const popup__message = document.createElement('div');
		popup__message.innerHTML = `
		<div class="popup__message">
			 <div class="popup__message-text">
				  Ви отримали: <span class="popup__message-value">+${promoValue}</span><img class="popup__message-img" src="img/resurses/gold.png">
			 </div>
		</div>
		`;
		newMessage();
		document.getElementById('messages').appendChild(popup__message);
		setTimeout(function () {
			popup__message.remove();
		}, 9000);

	}
});

//--------------------------ПРИДБАННЯ-ТАНКІВ------------------------------
let messagePopupNegative = document.getElementById('popup__message-negative');

function messageNegative() {
	const popup__message = document.createElement('div');
	popup__message.innerHTML = `
	<div class="popup__message popup__message-negative">
		<div class="popup__message-text">
		 	Niet genoeg middelen!
		</div>
	</div>
	`;
	negativeMessage();
	document.getElementById('messages').appendChild(popup__message);
	setTimeout(function () {
		popup__message.remove();
	}, 9000);

};

function purchase(tankId, currency) {
	event.preventDefault();
	var tank = tanksArrays[tankId];
	var tankName = tank[0];
	var tankPrice = tank[1];

	if (currency == 'gold') {
		if (userInfo[1] - tankPrice >= 0) {
			animaSynch();
			document.getElementById(tankId + 'Anima').classList.remove('displayNone');
			anima(0);
			userTanks.push(tankId);
			checkBuyedTanks();
			userTanksSynchLocal();
			let message = `<b>` + userInfo[0] + `</b>` + ` gekocht ` + `<b>"` + tankName + `"</b>` + `\n`;
			message += `Prijs: <b>` + tankPrice + `</b>\n`;
			message += `In totaal: ` + userInfo[1] + ` - ` + tankPrice + ` = <b>` + (userInfo[1] - tankPrice) + `</b>`;
			console.log(message);
			axios.post(UPI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			});
			userInfo[1] -= tankPrice;
			userMoneySynch();
			synchUserInfoLocal();
		} else {
			messageNegative();
		};
	} else if (currency == 'tokens') {
		rawTokens = localStorage.getItem('userTokens');
		rawTokensParse = JSON.parse(rawTokens);
		if (rawTokensParse - tankPrice >= 0) {
			animaSynch();
			document.getElementById(tankId + 'Anima').classList.remove('displayNone');
			anima(0);
			userTanks.push(tankId);
			checkBuyedTanks();
			userTanksSynchLocal();
			let message = `<b>` + userInfo[0] + `</b>` + ` gekocht ` + `<b>"` + tankName + `"</b>` + `\n`;
			message += `Prijs: <b>` + tankPrice + `</b>\n`;
			message += `In totaal: ` + rawTokensParse + ` - ` + tankPrice + ` = <b>` + (rawTokensParse - tankPrice) + `</b>`;
			console.log(message);
			axios.post(UPI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			});
			rawTokensParse -= tankPrice;
			localStorage.setItem('userTokens', JSON.stringify(rawTokensParse));
			tokens = document.getElementById('tokens');
			tokens.innerHTML = rawTokensParse;
			if (tankName == 't_34_kharkiv') {
				t_34_s1Block.classList.remove('tank-locked');
				t_34_s2Block.classList.remove('tank-locked');
			};
		} else {
			messageNegative();
		};
	} else if (currency == 'skin') {
		rawTokens = localStorage.getItem('userTokens');
		rawTokensParse = JSON.parse(rawTokens);
		if (rawTokensParse - tankPrice >= 0) {
			userTanks.push(tankId);
			checkBuyedTanks();
			userTanksSynchLocal();
			let message = `<b>` + userInfo[0] + `</b>` + ` gekocht ` + `<b>"` + tankName + `"</b>` + `\n`;
			message += `Prijs: <b>` + tankPrice + `</b>\n`;
			message += `In totaal: ` + rawTokensParse + ` - ` + tankPrice + ` = <b>` + (rawTokensParse - tankPrice) + `</b>`;
			console.log(message);
			axios.post(UPI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			});
			rawTokensParse -= tankPrice;
			localStorage.setItem('userTokens', JSON.stringify(rawTokensParse));
			tokens = document.getElementById('tokens');
			tokens.innerHTML = rawTokensParse;
		} else {
			messageNegative();
		};
	} else if (currency == 'goldItem') {
		rawTokens = localStorage.getItem('userTokens');
		rawTokensParse = JSON.parse(rawTokens);
		if (rawTokensParse - tankPrice >= 0) {
			let raw = localStorage.getItem('InformAboutUser');
			loginDataOfUser = JSON.parse(raw);
			userInfo[1] += 1000;
			userMoneySynch();
			synchUserInfoLocal();
			rawTokensParse -= tankPrice;
			localStorage.setItem('userTokens', JSON.stringify(rawTokensParse));
			tokens = document.getElementById('tokens');
			tokens.innerHTML = rawTokensParse;
			let message = `<b>` + userInfo[0] + `</b>` + ` gekregen ` + `<b>"` + '1000' + `"</b>` + ` goud voor 2 tokens.\n`;
			message += `In totaal: ` + rawTokensParse + `\n`;
			console.log(message);
			axios.post(UPI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			});
			const popup__message = document.createElement('div');
			popup__message.innerHTML = `
			<div class="popup__message">
				 <div class="popup__message-text">
				 	jij hebt: <span class="popup__message-value">+1000</span><img class="popup__message-img" src="img/resurses/gold.png">
				 </div>
			</div>
			`;
			newMessage();
			document.getElementById('messages').appendChild(popup__message);
			setTimeout(function () {
				popup__message.remove();
			}, 9000);
			goldBlock.classList.add('buyedTank');
			setTimeout(function () {
				goldBlock.classList.remove('buyedTank');
			}, 5000);
		} else {
			messageNegative();
		};
	}
};
//--------------------------АНІМАЦІЯ-ПРИДБАННЯ------------------------------

const hlopushka = new Audio("audio/hlopushka.mp3");
const popupVideo = document.getElementById('popupVideo');

function animaSynch() {
	document.getElementById('kv_2Anima').classList.add('displayNone');
	document.getElementById('pz_b2Anima').classList.add('displayNone');
	document.getElementById('togg2Anima').classList.add('displayNone');
	document.getElementById('amx_els_bicAnima').classList.add('displayNone');
	document.getElementById('crombell_bAnima').classList.add('displayNone');
	document.getElementById('bt_svAnima').classList.add('displayNone');
	document.getElementById('s35_caAnima').classList.add('displayNone');
	document.getElementById('cherchill_gcAnima').classList.add('displayNone');
	document.getElementById('wz_pilAnima').classList.add('displayNone');
	document.getElementById('is_2_var2Anima').classList.add('displayNone');
	document.getElementById('lorraine_40tAnima').classList.add('displayNone');
	document.getElementById('wz_111Anima').classList.add('displayNone');
	document.getElementById('amx_30_prot1Anima').classList.add('displayNone');
	document.getElementById('amx_13_75Anima').classList.add('displayNone');
	document.getElementById('sy_152Anima').classList.add('displayNone');
	document.getElementById('scorpion_gAnima').classList.add('displayNone');
	document.getElementById('t_28_defAnima').classList.add('displayNone');
	document.getElementById('sy_130_pmAnima').classList.add('displayNone');
	document.getElementById('type_5_heavyAnima').classList.add('displayNone');
	document.getElementById('t_57_heavyAnima').classList.add('displayNone');
	document.getElementById('is_7Anima').classList.add('displayNone');
	document.getElementById('t_49Anima').classList.add('displayNone');
	document.getElementById('super_conquerorAnima').classList.add('displayNone');
	document.getElementById('bat_chat_25tAnima').classList.add('displayNone');
	document.getElementById('udes_15_16Anima').classList.add('displayNone');
	document.getElementById('type_59_goldAnima').classList.add('displayNone');
	document.getElementById('strv_103bAnima').classList.add('displayNone');
	document.getElementById('grill_15Anima').classList.add('displayNone');
	document.getElementById('tortoiseAnima').classList.add('displayNone');
	document.getElementById('fosh_155Anima').classList.add('displayNone');
	document.getElementById('t_34_kharkivAnima').classList.add('displayNone');
	document.getElementById('t_64_bm_oplotAnima').classList.add('displayNone');
	document.getElementById('t_34KharkivAnima').classList.add('displayNone');
	document.getElementById('t_34_kharkiv_skin1Anima').classList.add('displayNone');
	document.getElementById('t_34_kharkiv_skin2Anima').classList.add('displayNone');
	document.getElementById('t_64_bm_oplot_skinAnima').classList.add('displayNone');
	document.getElementById('t_34_winterAnima').classList.add('displayNone');
};


animaZone = document.getElementById('popupAnimationEventListener');
caseZone = document.getElementById('case');
animaText = document.getElementById('animaText');
animaButton = document.getElementById('tankAnimationButton');
buyedTankBlock = document.getElementById('buyedTankBlock');
congAnima = document.getElementById('congAnima');
wit_sec = document.getElementById('wit_sec');

function anima(value) {
	if (value == 1) {
		congAnima.innerHTML = 'Gelukkig 2024!';
	} else {
		congAnima.innerHTML = 'Gefeliciteerd!';
	}

	body.classList.add('case-op');
	animaZone.classList.add('animaZoneOp');
	animaZone.addEventListener('click', e => {
		const audioOpen = new Audio("audio/case_opening.mp3");
		audioOpen.play();
		setTimeout(function () {
			hlopushka.play();
		}, 2000);
		wit_sec.classList.add('wit-op');
		popupVideo.play();

		setTimeout(function () {
			wit_sec.classList.remove('wit-op');
			caseZone.classList.add('case-op');
			animaText.classList.add('text-cl');
			buyedTankBlock.classList.add('tank-op');
			setTimeout(function () {
				animaButton.classList.add('button-op');
				congAnima.classList.add('textCon-op');
			}, 1000);
			animaButton.addEventListener('submit', function (e) {
				e.preventDefault();
				animaNone();
			});
		}, 500);
	}, { once: true });
};

function animaNone() {
	animaZone.classList.remove('animaZoneOp');
	body.classList.remove('case-op');
	caseZone.classList.remove('case-op');
	popupVideo.pause();
	popupVideo.currentTime = 0;
	animaText.classList.remove('text-cl');
	animaButton.classList.remove('button-op');
	buyedTankBlock.classList.remove('tank-op');
	congAnima.classList.remove('textCon-op');
};
