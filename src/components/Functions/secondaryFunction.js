export const totalPriceItems = order => order.price * order.count;

export const toLocaleCurrency = num => num.toLocaleString('ru-RU', {
	style: 'currency',
	currency: 'RUB'
});