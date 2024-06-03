// function User1(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }
// // в прототипі - для екземплярів
// User1.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// // статичний метод - для функції конструктора
// User1.isUser = function (obj) {
//   return obj instanceof User1;
// };

// const user1 = new User1(
//   "jack",
//   "wilsher",
//   23,
//   true,
//   "test@SpeechGrammarList.com",
//   true
// );

// class User {
//   constructor(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const user2 = new User1(
//   "jack",
//   "wilsher",
//   23,
//   true,
//   "test@SpeechGrammarList.com",
//   true
// );

// console.log(user2.getFullName());

class User {
    constructor(name, surname, age, isMale, email, isSubscribed) {
      this._name = name;
      this._surname = surname;
      this.age = age;
      this._isMale = isMale;
      this._email = email;
      this._isSubscribed = isSubscribed;
    }
    getFullName() {
      return ${this._name} ${this._surname};
    }
  //   get fullName() {
  //     return ${this._name} ${this._surname};
  //   }
    set age(value) {
      if (typeof value !== "number") {
        throw new TypeError("age must be number");
      }
      if (!Number.isInteger(value)  value < 0  value > 150) {
        throw new RangeError("age must be nonnegative integer");
      }
      this._age = value;
    }
    get age() {
      return this._age;
    }
    static isUser(obj) {
      return obj instanceof User;
    }
  }
  try {
    // екземпляр / інстанс
  
    const user2 = new User(
      "jack",
      "wilsher",
      23,
      true,
      "test@SpeechGrammarList.com",
      true
    );
    console.log(user2.getFullName());
    console.log(User.isUser(user2));
    console.log("user2 :>> ", user2.age); // age()
    user2.age = 23; // age(-23)
  } catch (err) {
    console.log("err :>> ", err);
  }

  // Task: реалізувати клас для телефонів (марка, модель, колір, ціна, рік випуску)
// реалізувати метод для розрахунку віку телефону (*у вигляді геттеру)
// створити екземпляр класу, викликати для нього метод(и)
// створити метод render для додавання телефону в розмітку
// *у випадку помилки вивести повідомлення, що виникла помилка
// *прописати сеттер для кольору. колір може бути один зі списку 
// ['white', 'red', 'black', 'yellow', 'green', 'blue', 'grey']

class Phone {
    constructor(brand, model, color, price, year) {
      this._brand = brand;
      this._model = model;
      this._color = color;
      this._price = price;
      this._year = year;
        }
        get year() {
            return new Date().getFullYear() - this._year;;
          }

          set color(value) {
            if (typeof value !== "'white', 'red', 'black', 'yellow', 'green', 'blue', 'grey'") {
              throw new TypeError("age must be number");
            }
            if (!Number.isInteger(value)  value < 0  value > 150) {
              throw new RangeError("age must be nonnegative integer");
            }
            this._age = value;
          }
    }
 
    const phone = new Phone(
        "Samsung",
        "Galaxy S21",
        "Phantom Black",
        9990,
        2023,
         );



