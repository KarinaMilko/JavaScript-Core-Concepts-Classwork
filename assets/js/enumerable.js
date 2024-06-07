const user = {
  firstName: "Test",
  lastName: "Testovych",
};

for (const key in user) {
  console.log(`user[${key}]=${user[key]}`);
}
console.log(user);

const arr = [1, 2, 3, 4, 5];

for (const index in arr) {
  console.log(`arr[${index}]=${arr[index]}`);
}
console.log(arr);

// for...in перелічує тільки перелічувальні (enumerable: true)
// властивості (власні та успадковані(разом з getFullName))

function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user1 = new User1("test", "test2", 20, true, "t@g.com", true);

for (const key in user1) {
  console.log("key :>> ", key);
}

// 1 hasOwnProperty - Перевірка на власну/успадковану властивість для user1
for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log("key own :>> ", key);
  }
}

// 2 Перебір власних перелічуваних властивостей

// - масив властивостей Object.keys(obj) //повертає властивості (виводить без getFullName)

// console.log("Object.keys () :>> ", Object.keys(user1)); // виводить як масив
const user1Keys = Object.keys(user1);
user1Keys.forEach((uKey) => console.log(`user[${uKey}]=${user1[uKey]}`));

// - масив значень Object.values(obj) // повертає значення цих властивостей
console.log(Object.values(user1));

// - масив пар властивостей Object.entries(obj) // формує масив (ключ - значення)
console.log(Object.entries(user1));

// Задати об'єкт телефона і вивести масив його властивостей
// і масив значень цих властивостей

const phone = {
  model: "iphone",
  color: "black",
  price: 700,
};
console.log(Object.keys(phone)); // { 'model','color','price'}
console.log(Object.values(phone)); // {"iphone","black", 700}
