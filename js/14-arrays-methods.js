// =================== 7. Методы массивов ===================
// .push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()  ...

/*
.push(...items) – Добавить элемент в конец массива
arr.pop() – Удалить элемент из конца массива
arr.shift() – Удалить элемент из начала массива
arr.unshift(...items) – Добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
*/

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.push('Nissan');
console.log(autoBrands);

autoBrands.splice(2, 1);
console.log(autoBrands);

// Методы массивов - это тема для отдельного урока
