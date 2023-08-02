// ======== 4. Тернарный оператор =========

if (10 < 12) {
	console.log('Условие верно');
} else {
	console.log('Условие НЕ верно');
}

// (условие) ? (условие верно) : (условие не верно);

10 < 12 ? console.log('Условие верно') : console.log('Условие НЕ верно');

let greeting;

if (10 < 12) {
	greeting = 'Доброе утро';
} else {
	greeting = 'Добрый день';
}

console.log(greeting);

let greeting;
greeting = 10 < 12 ? 'Доброе утро' : 'Добрый день';
console.log(greeting);

let greeting;
greeting = 10 < 12 ? 'Доброе утро' : null;
console.log(greeting);
