// =================== 7. Циклы ===================

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// =================== 7. Обход массива циклом for ===================

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

for (let i = 0; i < autoBrands.length; i++) {
	autoBrands[i];
}

// =================== 7. Обход массива циклом for ( of ) ===================

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

for (let item of autoBrands) {
	console.log(item);
}

// =================== 8. Обход массива методом forEach() ===================

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

autoBrands.forEach(function (item) {
	console.log(item);
});