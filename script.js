let myLibrary = [];

function Book(title, author, pages, readhuh) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readhuh;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}