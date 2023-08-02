// ================================  Работа с SetTimeOut   ===============================

console.log('Start');

setTimeout(function () {
	console.log('Print after 2s');
}, 2000);

// ------------------------------------------

console.log('Start');

setTimeout(function () {
	console.log('Print after 2s');
}, 2000);

console.log('Finish');

clearTimeout();
