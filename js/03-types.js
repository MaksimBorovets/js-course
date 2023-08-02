/* =================== 2.2 Типы данных =================== */
// let userName = 'Марк'; // Строка (Текст) (Одно слово, фраза, предложение, абзац, хоть целая книга)
// let age = 30; // Число
// let isMarried = false; // Логическое значение true/false

/* Динамическая типизация */
// let someVariable = 'Some value'; // сейчас someVariable типа Number
// someVariable = 50; // а теперь someVariable типа String
// someVariable = true; // someVariable становится типа Boolean

/*
Значение null
«ничего», «пусто» или «значение неизвестно».
*/
// let age = null;

/*
Значение undefined
Означает что «значение не было присвоено
Если переменная объявлена, но ей не присвоено никакого значения,
то её значением будет undefined
*/
// let newVariable; // undefined

// let someName = 'James';
// someName = undefined; // !Так не делают
// someName = null; // Делают так

/*
Объекты
Массивы
*/

// Оператор typeof
const someName = 'Bob';
console.log(typeof someName);

// BigInt
// Symbol

/*
Числа number
BigInt
Строки string
Булевый тип данный boolean
null
undefined
Объекты object
Symbol
*/
