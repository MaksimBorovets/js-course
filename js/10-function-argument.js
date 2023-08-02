// =================== 5.3 Функция как аргумент ===================

function summ(a, b) {
	return a + b;
}

const res = summ(summ(5, 5), summ(20, 20));
console.log(res);

// =================== 5.3 Функция как аргумент - 2 ===================

function summ (a, b){
	return a + b;
}

function diff (a, b){
	return a - b;
}

function doSomething(func){
	let result = func(10, 15);
	console.log(result);
}

doSomething(summ); // 25
doSomething(diff); // -5