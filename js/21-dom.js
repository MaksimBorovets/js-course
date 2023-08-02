// ================================  Выбор DOM элементов ===============================

// Выбор одного элемента DOM по селектору
// Будет выбрат первый найденный элемент. Поиск осуществляется с начала кода страницы, сверху вниз.

document.querySelector('selector');

document.querySelector('h2').classList.add('red');
document.querySelector('p');

const heading2 = document.querySelector('h2');
heading2.classList.add('red');

// Выбор коллекции элементов
document.querySelectorAll('selector');

document.querySelectorAll('h2');
document.querySelectorAll('p');

const h2headings = document.querySelectorAll('h2');
for (heading of h2headings) {
	console.log(heading);
	heading.classList.add('green');
}

// Также есть следующие методы
document.getElementsByClassName(); // выбор Коллекции элементов по CSS классу
document.getElementsByTagName(); // выбор Коллекции элементов по Тегу
document.getElementById(); // выбор одного элемента по ID
