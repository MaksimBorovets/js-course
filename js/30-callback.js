// ================================  Callback hell   ===============================

// ------------------------

setTimeout(function () {
	console.log('Print after 2000ms');
}, 2000);

setTimeout(function () {
	console.log('Print after 2000ms');
}, 1500);

// ------------------------

setTimeout(function () {
	console.log('Print after 2000ms');
	setTimeout(function () {
		console.log('Print after 1500ms');
	}, 1500);
}, 2000);

// ------------------------

// callback Hell
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
