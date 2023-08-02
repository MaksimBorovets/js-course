// ========  Async functions. Асинхронные функции. Потребление промиса   ========

function promiseFunction() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			res = 'success123';
			if (res == 'success') {
				resolve('DONE!');
			} else {
				reject('FAIL!');
			}
		}, 500);
	});
}

async function startPromise() {
	try {
		const result = await promiseFunction();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

startPromise();

// ========  Несколько асинхронных операций. Серия промисов.   ========

function checkRooms() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Проверяем номера в отеле...');
			// ---- код который отправляет запрос в отель ---
			let availableRooms = true;

			if (availableRooms) {
				resolve('Номера есть!');
			} else {
				reject('Номеров нет.');
			}
		}, 1500);
	});
}

function checkTickets(data) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log('----  checkTickets ----');
			console.log('Ответ на предыдущем шаге:', data);

			console.log('Проверяем авиабилеты...');
			// ---- код который отправляет запрос в авиакомпанию ---
			const availableTickets = true;

			if (availableTickets) {
				let message = 'Билеты есть';
				resolve(message);
			} else {
				let message = 'Билетов нет';
				reject(message);
			}
		}, 1000);
	});
}

function submitVacation(data) {
	console.log('---- submitVacation ----');
	console.log('Ответ на предыдущем шаге:', data);
	console.log('Едем в отпуск! 🌴 :)');
}

function cancelVacation(data) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', data);
	console.log('Отпуск отменяется 😢 :(');
}

async function checkVacation() {
	// const roomsResult = await checkRooms();
	// const ticketsResult = await checkTickets(roomsResult);

	// if (ticketsResult === 'Билеты есть') {
	// 	submitVacation(ticketsResult);
	// } else {
	// 	cancelVacation(ticketsResult);
	// }

	try {
		const roomsResult = await checkRooms();
		const ticketsResult = await checkTickets(roomsResult);
		submitVacation(ticketsResult);
	} catch (err) {
		cancelVacation(err);
	}
}

checkVacation();
