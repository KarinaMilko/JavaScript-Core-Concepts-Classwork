const user = { firstName: "Test", lastName: "Testovych" };

function renderUser({ firstName: name = "Anon", lastName = "Anonimous" }) {
  document.write(`
          <article>
            <h2>${name} ${lastName}</h2>
          </article>
        `);
}
renderUser(user);

// Оголосити змінні, використовуючи деструктуризацію
const book = { author: "Astred Lindgren", title: "Karlson" };

function renderBook({ author: name = "Astred Lindgren", title = "Anonimous" }) {
  document.write(`
            <article>
              <h2>${name} ${title}</h2>
            </article>
          `);
}
renderBook(book);
