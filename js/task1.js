/* -------------------------------------------------------- */
// Задание 1
/* -------------------------------------------------------- */


let variable = prompt("Введите значение:");
let num = +variable;
if (typeof num === "number" && !isNaN(num)) {
	if (num % 2 === 0) {
		console.log(num + " - является чётным числом");
	} else {
		console.log(num + " - является нечётным числом");
	}
} else {
	console.log("Упс, кажется, вы ошиблись");
}


