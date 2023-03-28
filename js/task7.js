/* -------------------------------------------------------- */
// Задание 7
/* -------------------------------------------------------- */


const arr = [1, 2, "3", null, 0, "five", 6, 7, undefined];

// Фильтруем только числа и преобразуем их к типу Number
const numbers = arr.filter(item => typeof item === "number" && !isNaN(item)).map(item => Number(item));

// Количество чисел
const numbersCount = numbers.length;

// Количество нулевых элементов
const zeroCount = numbers.filter(item => item === 0).length;

// Количество чётных и нечётных элементов
const evenCount = numbers.filter(item => item !== 0 && item % 2 === 0).length;
const oddCount = numbers.filter(item => item !== 0 && item % 2 !== 0).length;

console.log(`Количество чисел: ${numbersCount}`);
console.log(`Количество нулей: ${zeroCount}`);
console.log(`Количество чётных чисел: ${evenCount}`);
console.log(`Количество нечётных чисел: ${oddCount}`);
