// ================================  Promise   ===============================

/*
Представим себе такую ситуацию. Нам необходимо сделать запрос на сервер.
И только после того как придет ответ продолжать работу программы
*/

// На callback это бы выглядело так:

function serverRequest() {
	const res = 'success';
	// В случае успеха нашего запроса мы должны запустить функцию resolve()
	if ((res = 'success')) {
		(function () {
			console.log('DONE');
		})();
	} else {
		// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
		(function () {
			console.log('FAIL');
		})();
	}
}

const myFirstPromise = new Promise((resolve, reject) => {
	// выполняется асинхронная операция, которая в итоге вызовет:
	//
	//   resolve(someValue); // успешное завершение
	// или
	//   reject("failure reason"); // неудача
});

// const promise = new Promise( function(resolve, reject){ ... } );

const promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		// Представим что здесь был запрос на сервер и он вернул нам значение в переменную res
		res = 'success123123213';
		// В случае успеха нашего запроса мы должны запустить функцию resolve()
		if (res == 'success') {
			resolve('DONE!');
		} else {
			// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
			reject('FAIL!');
		}
	}, 500);
});

function startPromise() {
	return promise
		.then(function (done) {
			console.log(done);
		})
		.catch(function (fail) {
			console.log(fail);
		});
}

startPromise();
