// ================================ 10. Классы. Конструкторы объектов ===============================

// Представим ситуацию когда нам надо описать несколько одинаковых объектов

const person1 = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

const person2 = {
	userName: 'Павел',
	age: 28,
	isMarried: true,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

// Выглядит довольно громоздко, не так ли.
// Плюс заметно что мы используем "одну и ту же структуру" для каждого объекта.
// Если бы это можно было упростить.
// И такой способ есть, использовать классы

// Опишем класс, это как чертеж для всех будущих объектов person которые будут создаваться на его основе

class Person {
	constructor(userName, age, isMarried) {
		this.userName = userName;
		this.age = age;
		this.isMarried = isMarried;
	}

	sayHi(yourName) {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	}
}

// Теперь создадим новые объекты на основе класса person

const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);

// Они были созданы с указанными свойствами, плюс оба имеют методы которые были описаны в конструкторе

person1.sayHi('Юрий');
person2.sayHi('Елена');
