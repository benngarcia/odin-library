let myLibrary = [
  new Book("Gone", "Grant", "200", "true"),
  new Book("Light", "Grant", "200", "true"),
  new Book("Monster", "Grant", "200", "false")
];

function Book(title, author, pages, readhuh) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readhuh = readhuh;
}

function addBookToLibrary(title, author, pages, readhuh) {
  myLibrary.push(new Book(title, author, pages, readhuh));
}

function render() {

  const container = document.querySelector(".booklist")
  
  for (let i = 0; i < myLibrary.length; i++) {
    let newbook = document.createElement('div');
    newbook.classList.add('book');
    newbook.textContent = myLibrary[i].title + "\n" +  myLibrary[i].author +
      "\n" + myLibrary[i].pages + "\n" + myLibrary[i].readhuh;
      
    container.appendChild(newbook);
  }

}


render();