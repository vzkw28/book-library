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

addBookToLibrary("1984", "George Orwell", 328, true);
console.log(myLibrary);
