// =================== 5.1 Параметры и аргументы для функции ===================

const userName = 'Марк';
console.log(`Привет, ${userName}! Как твои дела?`);

function sayHi(name) {
	console.log(name);
	console.log(`Привет, ${name}! Как твои дела?`);
}

const pavel = 'Павел';
sayHi(pavel);

sayHi('Боб');
sayHi('Павел');
