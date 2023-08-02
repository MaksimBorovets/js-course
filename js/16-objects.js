// ================================ 9. Объекты ===============================

let userName = 'Марк';
let age = 30;
let isMarried = false;

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};

console.log(person);
console.log(person.name);

person.speciality = 'JS developer';
console.log(person);
console.log(person.speciality);

delete person.age;
console.log(person);
