// Множина Set зберігає унікальні значення будь-якого типу,
// будь то примітиви або посилання на об’єкти.

const s1 = new Set();

// size
s2 = new Set([1, 2, 3, 0, 5, 8, 7, 6, 9, 5, 7, 1, 1, 6, 4, 3, 8]); // 1,2,3,4,5,6,7,8,9
console.log("`s2.size` :>> ", s2.size); // 9

// add() => Set додати елементи
s1.add(1).add(2).add(1); // 1,2

// has() => boolean
console.log("s1.has(1) :>> ", s1.has(1)); // true
console.log("s1.has(5) :>> ", s1.has(5)); // false

// delete()
s1.delete(1);

// clear()
s1.clear();

// values() = keys()
// entries()
// forEach()
s2.forEach((s) => console.log("s :>> ", s));
s2.forEach((s, sAgaine, set) => console.log("s :>> ", s, sAgaine));

for (const item of s2) {
  console.log("item :>> ", item);
}

// ex.: Отримати масив унікальних значень

const arr = [1, 2, 3, 5, 7, 8, 9, 6, 5, 4, 0, 2, 4]; // =>[1,2,3,5,7,8,9,6,4,0]

// const s3 = new Set(arr);
// const arr2 = [...s3]; // перетворити на масив

const arr2 = [...new Set(arr)];

// Task: Отримати масив унікальних імен => ['Test', 'Grut', 'John Doe']
const users1 = [
  "Test",
  "Grut",
  "John Doe",
  "Grut",
  "John Doe",
  "Grut",
  "John Doe",
];
const users2 = [
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Grut",
];
//=>["Test", "Grut", "John Doe","Jane Doe"]

const names = [...new Set([...users1, ...users2])];
console.log(names);

// Task: Отримати масив марок телефонів => ['IPhone', 'Samsung', 'Xiomi'] - це масив об'єктів
const users = [
  { name: "Test0", brand: "IPhone" },
  { name: "Test1", brand: "Samsung" },
  { name: "Test2", brand: "IPhone" },
  { name: "Test3", brand: "Xiomi" },
  { name: "Test4", brand: "Samsung" },
  { name: "Test5", brand: "Xiomi" },
  { name: "Test6", brand: "IPhone" },
];

// brands = ['IPhone', 'Samsung', 'Xiomi']

const brands = users.map((u) => u.brand);
const brandSet = new Set(brands);
const uniqueBrands = [...brandSet];

// let brands = new Set(users.map((user) => user.brand));
// brands = [...brands];

brands = [...new Set(users.map((user) => user.brand))];

console.log(brands);

// ex.: Отримати об,єкти виду
// {
//     IPhone:['Test0','Test2','Test6'],
//     Samsung[...],
//     Xiomi[...]
// }

// const phonesWihtUsers={
//     [brands[0]]:[],
//     [brands[1]]:[],
//     [brands[2]]:[],
// }
const phonesWihtUsers = {};

brands.forEach((b) => (phonesWihtUsers[b] = []));

// отримати всі об'єкти, де brand: 'IPhone'
const usersWithIphone = users.filter((u) => u.brand === "IPhone");

// отримати тільки імена
const usersNameWithIphone = usersWithIphone.map((u) => u.name);

//  отримати по іншим brand
brands.forEach(
  (b) =>
    (phonesWihtUsers[b] = users.filter((u) => u.brand === b).map((u) => u.name))
);
