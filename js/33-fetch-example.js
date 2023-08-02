// ====  Пример fetch c промисами получение данных по API   =======
// https://www.cbr-xml-daily.ru/

async function getCurrencies() {
	// 1. Получить данные с сервера
	const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
	const response = await fetch(url);
	const data = await response.json();

	// 2. Отобразить эти данные на странице
	renderRates(data);
}

getCurrencies();

function renderRates(data) {
	const usdRate = data.Valute.USD.Value.toFixed(2);
	const eurRate = data.Valute.EUR.Value.toFixed(2);

	// 2. Отобразить эти данные на странице
	const usdElement = document.querySelector('#usd');
	const eurElement = document.querySelector('#eur');

	usdElement.innerText = usdRate;
	eurElement.innerText = eurRate;
}
