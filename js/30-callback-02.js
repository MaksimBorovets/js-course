// ===========  Callback. Callback hell   ==================

console.log('Start');

setTimeout(function () {
	console.log('Print after 2000ms');
}, 2000);

console.log('Finish');

console.log('Start');

setTimeout(function () {
	console.log('Print after 2000ms');
	setTimeout(function () {
		console.log('Print after 1500ms');
		setTimeout(function () {
			console.log('Print after 1000ms');
			setTimeout(function () {
				console.log('Print after 500ms');
				setTimeout(function () {
					console.log('Print after 100ms');
				}, 100);
			}, 500);
		}, 1000);
	}, 1500);
}, 2000);

//=============  Пример без задержки  =========

function checkRooms() {
	console.log('Проверяем номера в отеле...');
	// ---- код который отправляет запрос в отель ---
	const availableRooms = true;
	return availableRooms;
}

if (checkRooms()) {
	console.log('Номера есть!');
	console.log('Едем в отпуск! 🌴 :)');
} else {
	console.log('Номеров нет.');
	console.log('Отпуск отменяется 😢 :(');
}

// =========  Пример c задержкой. Проблема. Нерабочий код  =========

/*
- Добавим Timeout
- Возникает проблема, не можем передать значение из setTimeout
- Даже если вынести availableRooms в глобальную область видимости
- Добавлять setTimeout для if else нельзя, потому как мы не знаем сколько именно времени займет запрос
*/

let availableRooms;

function checkRooms() {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		availableRooms = true;
		console.log(availableRooms);
		return availableRooms;
	}, 500);
}

checkRooms();

if (availableRooms) {
	console.log('Номера есть!');
	console.log('Едем в отпуск! 🌴 :)');
} else {
	console.log('Номеров нет.');
	console.log('Отпуск отменяется 😢 :(');
}

// =========  Пример c задержкой. Решение =========

/*
Решение. Поместить код if else с дальнейшими действиями внутрь setTimeout
*/

function checkRooms() {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			console.log('Номера есть!');
			console.log('Едем в отпуск! 🌴 :)');
		} else {
			console.log('Номеров нет.');
			console.log('Отпуск отменяется 😢 :(');
		}
	}, 500);
}

checkRooms();

// =========  А если действий будет больше. callBackHell =========

// 1. Проверить номера в отеле
// 2. Проверить билеты ✈
// - Летим в отпуск! 🌴 :)
// - Отпуск отменяется 😢 :(

function checkRooms(success, failed) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			success('Номера есть!');
		} else {
			failed('Номеров нет.');
		}
	}, 500);
}

// Вынесем сообщения о Успехе и Неудаче в отдельные функции

function cancelVacation(message) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Отпуск отменяется 😢 :(');
}

function sumbitVacation(message) {
	console.log('---- sumbitVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Едем в отпуск! 🌴 :)');
}

// Уже появляются зачатки callback Hell))
// Код начинает уезжать вправо

checkRooms(
	function (messageFromCheckRooms) {
		sumbitVacation();
	},
	function (messageFromCheckRooms) {
		cancelVacation(messageFromCheckRooms);
	}
);

// =========  Добавим еще одно действие, проверить билеты. callBackHell =========

// И сделаем так чтобы функция checkTickets()
// принимала данные от результата работы checkRooms()

function checkRooms(success, failed) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			success('Номера есть!');
		} else {
			failed('Номеров нет.');
		}
	}, 500);
}

// Добавим ф-ю checkTickets которая будет принимать данные (сообщение)
// от предыдущего действия, и после запускать функции success или failed
function checkTickets(message, success, failed) {
	setTimeout(() => {
		console.log('---- function checkTickets ----');
		console.log('Ответ на предыдущем шаге:', message);

		console.log('Проверяем авиабилеты...');
		// ---- код который отправляет запрос в авиакомпанию ---
		const availableTickets = true;

		if (availableTickets) {
			let message = 'Билеты есть';
			success(message);
		} else {
			let message = 'Билетов нет';
			failed(message);
		}
	}, 1000);
}

// Сообщения о Успехе и Неудаче в отдельные функции

function cancelVacation(message) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Отпуск отменяется 😢 :(');
}

function sumbitVacation(message) {
	console.log('---- sumbitVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Едем в отпуск! 🌴 :)');
}

// callback Hell разростается
// код уезжает вправо

checkRooms(
	function (messageFromCheckRooms) {
		checkTickets(
			messageFromCheckRooms,
			function () {
				sumbitVacation(messageFromCheckRooms);
			},
			function () {
				cancelVacation(messageFromCheckRooms);
			}
		);
	},
	function (messageFromCheckRooms) {
		cancelVacation(messageFromCheckRooms);
	}
);
