// ================================  Работа c атрибутами ===============================

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

const img = document.querySelector('#logo');
img.getAttribute('src');

img.setAttribute('src', './img/php.png');
img.setAttribute('width', '200');
img.setAttribute('src', './img/js.png');

img.src = './img/js.png';
