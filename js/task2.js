/* -------------------------------------------------------- */
// Задание 2
/* -------------------------------------------------------- */


let a = true;
if (typeof a === "number") {
	console.log(a + " — число");
} else if (typeof a === "string") {
	console.log(a + " — строка");
} else if (typeof a === "boolean") {
	console.log(a + " — логический тип");
} else {
	console.log("Тип a не определён");
}
