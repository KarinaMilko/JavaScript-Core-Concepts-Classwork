// if - умовний оператор, розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// const isOnline = true;

// if (isOnline) {
//   document.write(`<p>User is online</p>`);
// } else {
//   document.write(`<p>User is offline</p>`);
//   console.log("new code");
// }

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//   document.write(`<p>Операцію схвалено</p>`);
// } else {
//   document.write(`<p>Операцію відхилено</p>`);
// }

// {} - Block область видимості

// const isOnline = true;

// let color = null;
// if (isOnline) {
//   color = "green";
// } else {
//   color = "red";
// }

// if (isOnline) {
//   document.write(
//     `<p>User is <span style="color:${color};background-color:yellow;">online</span></p>`
//   );
// } else {
//   document.write(
//     `<p>User is  <span style="color:${color};background-color:grey;">offline</span></p>`
//   );
// }
// const isOnline = true;

// let color = null;
// let status = null;
// if (isOnline) {
//   color = "green";
//   status = "online";
// } else {
//   color = "red";
//   status = "offline";
// }
// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// Тернарний оператор
// 3
// const isOnline = true;

// умовна (тернатна) операція ?:
// const color = isOnline ? "green" : "red";
// const status = isOnline ? "online" : "offline";
// console.log(color);

// Єдине джерело істини, DRY
// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// Оператори порівняння
// const age = 18;

// > < >= <=

// if (age >= 18) {
//   document.write("<p>У вас є повний доступ</p>");
// } else {
//   document.write("<p>У вас обмежений доступ</p>");
// }

// const RIGHT_NUMBER = 2;
// const guessNumber = +prompt("Вкажіть число");

// = - приводить до одного типу, а потім boolean видає true або fals !!!Так не пишуть!!!
// == - нестрога рівність !!!ПОГАНО!!! (неявно приводе тип)
// === - строга рівність

// if (RIGHT_NUMBER === guessNumber) {
//   document.write("<p>Ви вгадали число</p>");
// } else {
//   document.write("<p>Ви не вгадали число</p>");
// }

// const isRightNumber = RIGHT_NUMBER === guessNumber;
// document.write(`<p>Ви ${isRightNumber ? "" : "не "}вгадали число</p>`);

// != - нестрога нерівність !!!ПОГАНО!!! (неявно приводе тип)
// !== - строга нерівність

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю

// let firstNumber = +prompt("Вкажіть перше число");
// let sign = prompt("Вкажіть знак операції");
// let secondNumber = +prompt("Вкажіть друге число");

// if (sign === "+") {
//   console.log(firstNumber + secondNumber);
// } else {
//   console.log(firstNumber - secondNumber);
// }

// const value1 = Number(prompt("Перше число"));
// const value2 = Number(prompt("Друге число"));
// const sumbol = prompt("Введіть символ");

// if (sumbol === "+") {
//   document.write(value1 + value2);
// } else {
//   document.write(value1 - value2);
// }

// const isAdding = sumbol === "+";
// document.write(`<p>${isAdding ? value1 + value2 : value1 - value2}</p>`);

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// Якщо введено "*", то порахувати і вивести добуток цих чисел,
// Якщо введено "-", то порахувати і вивести різницю цих чисел,
// Інакше вивести повідомлення про некоректний знак операції

// Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

// const value1 = Number(prompt("Перше число"));
// const value2 = Number(prompt("Друге число"));
// const sign = prompt("Введіть символ");

// if (sign === "+") {
//   console.log(value1 + value2);
// } else if (sign === "*") {
//   console.log(value1 * value2);
// } else if (sign === "-") {
//   console.log(value1 - value2);
// } else {
//   console.log("Некоректний знак операції");
// }

// Для дефолтних випадків варто використовувати sign
// const firstNumber = +prompt("Введіть перше число");
// const secondNumber = +prompt("Введіть друге число");
// const sumbol = prompt("Введіть символ");

// const result =
//   sumbol === "+"
//     ? firstNumber + secondNumber
//     : sumbol === "-"
//     ? firstNumber - secondNumber
//     : sumbol === "*"
//     ? firstNumber * secondNumber
//     : "Некоректний знак операції!!!!";

// document.write(result);

// Вивести попередження для неповнолітніх

// if (умова) {
//     гілка true
// }

// const age = 16;
// if (age < 18) {
//   alert("У вас обмежений доступ для послуг порталу");
// }

// document.write("<p>Вітаємо на порталі</p>");

// const age1 = Number(prompt("Input age", "0"));

// if (Number.isInteger(age1)) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect. Input again");
// }

// if (Number.isInteger(age1) === false) {
//   console.log("Incorrect. Input again");
// }

// Логічні (булеві) операції

// умова І умова   - умова && умова    - age >= 18 && isVactinated
// умова АБО умова - умова || умова    - age < 18  || isVactinated
// НЕ умова        - !умова

// console.group("Таблиця істинності &&:");

// console.log("true && true :>> ", true && true); // => true, якщо всі true
// console.log("false && false :>> ", false && false);
// console.log("true && false :>> ", true && false);
// console.log("false && true :>> ", false && true);

// console.groupEnd();

// console.group("Таблиця істинності ||:");

// console.log("true || true :>> ", true || true);
// console.log("false || false :>> ", false || false); // => false, якщо всі false
// console.log("true || false :>> ", true || false);
// console.log("false || true :>> ", false || true);

// console.groupEnd();

// console.group("Таблиця істинності !:");

// console.log("!true :>> ", !true);
// console.log("!false  :>> ", !false);

// console.groupEnd();

// Вивести привітання
// Mr - для чоловіків
// Mrs - для заміжніх жінок
// Ms - для незаміжніх жінок

// const isMale = true;
// const isMarried = false;
// const name = "Test";

// if (isMale) {
//   document.write(`<p>Hello Mr ${name}`);
// } else if (!isMale && isMarried) {
//   document.write(`<p>Hello Mrs ${name}`);
// } else {
//   document.write(`<p>Hello Ms ${name}`);
// }

// let appeal = "";

// if (isMale) {
//   appeal = "Mr";
// } else if (isMarried) {
//   appeal = "Mrs";
// } else {
//   appeal = "Ms";
// }

// document.write(`<p>Hello ${appeal} ${name}</p>`);

// Вартість price
// Надати знижку неповнолітнім і пенсіонерам
// та вивести остаточну суму до сплати

// const price = 800;
// const age = 20;
// let discount = 0.2;
// const sum = +price - +price * +discount;

// if (age < 18 || age >= 65) {
//   console.log(sum);
// } else {
//   console.log(price);
// }

// const userAge = 65;
// const fullPrice = 500;
// let discount = 0;

// if (userAge < 18 || userAge >= 65) {
//   discount = 100;
// }

// document.write("<p>Вітаємо на порталі</p>");
// const resultPrice = fullPrice - discount;
// document.write(`<p>${resultPrice}</p>`);

// видати повідомлення про знижку, якщо пт 13
// const day = "friday";
// const date = 13;

// if (date && day) {
//   document.write("Your discount is 10%");
// }

const day = "friday";
const date = 13;

if (day === "friday" && date === 13) {
  document.write("<p>Вітаємо, у Вас знижка 10%<p/>");
}

// NaN === NaN => false
// Number.isNaN()

// Перевірка

let value = 0;

if (value !== undefined && value !== null) {
  console.log("Correct");
}

if (value) {
  console.log("Correct");
}

// false, null, undefined, '', 0/-0, NaN -- falsy-значення

const port = 0;

// let PORT;

// if(port) {
//     PORT = port;
// } else {
//     PORT = 5500;
// }

const PORT = port || 5500; //  false, null, undefined, '', 0/-0, NaN
const PORT1 = port ?? 5500; //  null, undefined (nullish)

console.log("PORT :>> ", PORT);
console.log("PORT1 :>> ", PORT1);
