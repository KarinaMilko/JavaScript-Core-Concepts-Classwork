const s = Symbol("key");
console.log("s :>> ", s);

const s2 = Symbol("key"); // s===s2 => false
console.log("s2 :>> ", s2);

// Symbol не мщжна прочитати
const key = Symbol("key");

const option = {
  url: "http://some.address.com",
  [key]: "fdgdfgyghfd",
};

for (const key in option) {
  console.log(key); //   url:'http://some.address.com' (без 'fdgdfgyghfd')
}

// Symbol значення різні
Symbol() === Symbol(); //false

// Symbol.iterator - деструктуризація, spread, Array.from(), for..of

// Symbol.iterator— відомий символ, що задає ітератор об’єкта,
// який використовується за умовчанням.
// Замінюється в конструкції for...of.

// Ітератор - інтерфейс , що надає доступ до елементів колекції
// ( масиву або контейнера ) і навігацію по них.
// Результат obj[Symbol.iterator]() називається ітератором.
// Він забезпечує подальший процес ітерації.

// Ітеровані – це об’єкти, які реалізують метод Symbol.iterator.
// Об’єкти, які можна використовуватися у for..of, називаються ітерованими.

// метод Array.from, який приймає ітерований об’єкт
// або псевдомасив і робить з нього “справжній” масив.
