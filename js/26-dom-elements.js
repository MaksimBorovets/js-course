// ================================  Работа c элементами  ===============================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

// Выбор контейнера
const container = document.querySelector('#elementsContainer');

// Создание заголовка
const newHeader = document.createElement('h1');
newHeader.textContent = 'Новый заголовок';
container.append(newHeader);

// Копирование шапки
const mainHeader = document.querySelector('header');
const copyOfHeader = mainHeader.cloneNode(true);
container.append(copyOfHeader);

// Вставка разметки через строки
const htmlExample = '<h2>Еще один заголовок</h2>';
container.insertAdjacentHTML('beforeend', htmlExample);

// Вставка разметки через шаблонные строки
const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample);
