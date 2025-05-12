const myLibrary = [];

function Book(title,author,pages,isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title,author,pages,isRead) {
    const newBook = new Book(title,author,pages,isRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-id', book.id);

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:<strong> ${book.author}</p>
        <p><strong>Pages:<strong> ${book.pages}</p>
        <p><strong>Read:<strong> ${book.isRead ? 'Yes' : 'No'}</p>
        `;

        container.appendChild(card);
    });
}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

displayBooks();