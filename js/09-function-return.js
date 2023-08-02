// =================== return внутри функции ===================

function summ(a, b) {
	const result = a + b;
	return result;
}

const res = summ(10, 15);
console.log(res);

function summ(a, b) {
	const result = a + b;
	return result;
	console.log('Some other code');
}

function summ(a, b) {
	return a + b;
}
