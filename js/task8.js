/* -------------------------------------------------------- */
// Задание 8
/* -------------------------------------------------------- */


const myMap = new Map([
	['apple', 'red'],
	['banana', 'yellow'],
	['kiwi', 'green']
 ]);
 
 myMap.forEach((value, key) => {
	console.log(`Ключ — ${key}, значение — ${value}`);
 });
