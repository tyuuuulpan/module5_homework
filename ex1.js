const result = +prompt("Введите число");
if (typeof result !== 'Number' && isNaN(result)) {
  console.log("Упс, кажется, вы ошиблись");
} else if (result % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("число нечетное");
}