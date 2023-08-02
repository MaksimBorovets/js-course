// =================== 5.3 Стрелочные функции ===================

// const sayHi = (name) => {
// 	console.log(`Привет, ${name}! Как твои дела?`);
// };

const sayHi = (name) => console.log(`Привет, ${name}! Как твои дела?`);
sayHi('Yurij');

function summ(a, b) {
	const result = a + b;
}

const summ = (a, b) => {
	const result = a + b;
	return result;
};

const summ = (a, b) => {
	return a + b;
};

const summ = (a, b) => a + b;
