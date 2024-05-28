function sum(...argsOfSum) {
  //   console.log("arguments :>> ", arguments); // arguments - не масив
  //   console.log(argsOfSum); // залишкові параметри - масив
  let sum = 0;

  for (const el of argsOfSum) {
    sum += el;
  }

  return sum;
}

const a = sum(1, 2, 5);

function f(firstEl, ...restParams) {
  console.log(firstEl); // вказаний явно параметр не потрапить до rest-параметрів
  console.log(restParams); // сюди потрапляють всі, крім вказаних явно параметрів
}

const b = f(1, 2, 5);

// Функція приймає знак операції (+ або *)
// і накопичує суму або добуток операндів

function accum(sign, ...numbers) {
  console.log("arguments :>> ", arguments);
  if (sign === "+") {
    let sum = 0;
    for (const el of numbers) {
      sum += el;
    }
    return sum;
  } else if (sign === "*") {
    let mult = 1;
    for (const el of numbers) {
      mult *= el;
    }
    return mult;
  } else {
    return "Unknown sign";
  }
}

accum("+", 1, 2, 8); // => 11
accum("+", 1, 2, 8, 10); // => 21

accum("*", 1, 2, 8); // => 16
accum("*", 1, 2, 8, 10); // => 160

// Arguments
// Необмежена кількість аргументів

// 1 arguments - псевдомасив (пронумеровані + length)+

// arguments приймає усі перераховані при виклику функції аргументи,
// навіть якщо при оголошенні функції вказано імена для перших кількох параметрів

// Ex. a - arguments[0], b - arguments[1]

// arguments - колекція для збереження аргументів функції

function f() {
  console.log(arguments);
}
f(1, 2);

function f(a, b) {
  console.log(arguments); // arguments включає всі параметри (1, 2,3)
}
f(1, 2, 3);

// Написати функцію для підрахунку суми необмеженої кількості елементів

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log("i :>> ", i);
    sum += arguments[i];
  }
  return sum;
}
const sumOfArgs = sum(1, 2, 3, 4, 5, 6);
console.log(sumOfArgs);

// Task: написати функцію для розрахунку добутку
// необмеженої кількості переданих аргументів
function dob() {
  let dob = 1;
  for (let i = 0; i < arguments.length; i++) {
    dob *= arguments[i];
  }
  return dob;
}
const dobOfargs = dob(1, 2, 3, 4, 5, 6);
console.log(dobOfargs);
// АБО
// Task: написати функцію виду
// calculate(operation, operand1, operand2,..., operandN),
// де operation - це операція (+, *), яка має бути виконана над операндами
// operation - arguments[0], тому цикл перебираємо з 1+
// operation = arguments[0]

function calculate(operation) {
  let accum;
  if (operation === "+") {
    accum = 0;
    for (let i = 0; i < arguments.length; i++) {
      accum += arguments[i];
    }
  } else if (operation === "*") {
    accum = 1;
    for (let i = 0; i < arguments.length; i++) {
      accum *= arguments[i];
    }
  } else {
    return undefined;
  }
  return accum;
}

const result = calculate("*", 1, 2, 3, 4);
console.log(result);

// переробити під rest параметри

function calculate(operation, ...operands) {
  let accum;
  if (operation === "+") {
    accum = 0;
    for (let i = 0; i < operands.length; i++) {
      accum += operands[i];
    }
  } else if (operation === "*") {
    accum = 1;
    for (let i = 0; i < operands.length; i++) {
      accum *= operands[i];
    }
  } else {
    return undefined;
  }
  return accum;
}
// arguments              0   1  2  3  4
const result = calculate("*", 1, 2, 3, 4);
// ...operands                0  1  2  3
console.log(result);
