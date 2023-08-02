// ================================  Объект event   ===============================

const list = document.querySelector('#list');
list.addEventListener('click', function (event) {
	console.log(this);
	console.log(event);
	console.log(event.target);
});
