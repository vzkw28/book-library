const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const container = document.getElementById("books-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.setAttribute("data-id", book.id);

    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:<strong> ${book.author}</p>
        <p><strong>Pages:<strong> ${book.pages}</p>
        <p><strong>Read:<strong> ${book.isRead ? "Yes" : "No"}</p>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeBookFromLibrary(book.id);
        });

        card.appendChild(removeBtn);
        container.appendChild(card);

  });
}

function removeBookFromLibrary(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index,1);
        displayBooks();
    }
}

const form = document.getElementById("book-form");
const newBookBtn = document.getElementById("new-book-btn");

newBookBtn.addEventListener("click", () => {
  form.style.display = form.style.display === "none" ? "block" : "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title,author,pages,isRead);

  form.reset();
  form.style.display = 'none';
});
