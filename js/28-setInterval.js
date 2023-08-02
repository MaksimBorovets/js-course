// ============  setInterval   ==============

// const timerIntervalID = setInterval(function () {
// 	console.log('Fired!');
// }, 1000);

// clearInterval(timerIntervalID)

// ============  setTimeOut   ==============

// const timerID = setTimeout(function () {
// 	console.log('setTimeout Fired!');
// }, 2000);

// clearInterval(timerID);

// ============  setInterval + setTimeOut   ==============

// const timerID = setInterval(function () {
// 	console.log('setInterval Fired!');
// }, 1000)

// setTimeout(function () {
// 	clearInterval(timerID);
// }, 10000)

// ============  Секундомер   ==============

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
	console.log('btnStart');
	timerID = setInterval(function () {
		counter++;
		counterElement.innerText = counter;
	}, 1000);
};

// Пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
	console.log('btnStop');
	clearInterval(timerID);
};

// Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
	counter = 0;
	counterElement.innerText = counter;
	clearInterval(timerID);
};
