
class Book {
  constructor(id, title, author, releaseDate) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.releaseDate = releaseDate;
    this.inStock = true;
    this.isRead = false;
  }
}

class Library {
  // properties: how many books, list of books, form elements
  constructor() {
    this.DOM = {
      bookContainer: document.querySelector("#library-container"),
      form: {
        self: document.querySelector("form"),
        title: document.querySelector("#bookTitle"),
        author: document.querySelector("#bookAuthor"),
        releaseDate: document.querySelector("#bookReleaseDate"),
      },
    };
    this.nextId = 0;
    this.count = 0;
    this.books = [];

    this.DOM.form.self.addEventListener("submit", (e) =>
      this.handleFormSubmission(e)
    );
  }
  addBook(title, author, releaseDate) {
    let newBook = new Book(this.nextId++, title, author, releaseDate);
    this.books.unshift(newBook);
    this.count++;
    console.log(this.books);
    this.displayBooks();
  }

  handleFormSubmission(event) {
    event.preventDefault();
    console.log(this);
    this.addBook(
      this.DOM.form.title.value,
      this.DOM.form.author.value,
      this.DOM.form.releaseDate.value
    );

    this.DOM.form.title.value = "";
    this.DOM.form.author.value = "";
    this.DOM.form.releaseDate.value = "";
  }

  updateStock(id) {}

  removeBook(id) {}

  displayBooks() {
    this.DOM.bookContainer.innerHTML = "";
    this.books.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const h2 = document.createElement("h2");
      h2.textContent = book.title;
      const h3 = document.createElement("h3");
      h3.textContent = book.author;
      const small = document.createElement("small");
      small.textContent = book.releaseDate;
      card.append(h2, h3, small);
      this.DOM.bookContainer.appendChild(card);
    });
  }
}
let library = new Library();