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
  render();
}

function render() {
  clearAllBooks();
  const container = document.querySelector(".booklist")
  
  for (let i = 0; i < myLibrary.length; i++) {
    let newbook = document.createElement('div');
    newbook.classList.add('book');
    newbook.textContent = "Book" + i + myLibrary[i].title + "\n" +  myLibrary[i].author +
      "\n" + myLibrary[i].pages + "\n" + myLibrary[i].readhuh;
    
    let delbutton = document.createElement("BUTTON");
    delbutton.setAttribute("type", "button");
    delbutton.setAttribute("value", "Delete");
    delbutton.setAttribute("onclick", `removeBook(${i})`);
    newbook.appendChild(delbutton);
    container.appendChild(newbook);
  }

}

function renderNewBookForm() {
  const container = document.querySelector("div.newbookbutton")
  let form = document.createElement("FORM") 
  let titleinput = document.createElement("INPUT");
  let titlelabel = document.createElement("LABEL");
  titleinput.setAttribute("type", "text");
  titleinput.setAttribute("id", "title");
  titleinput.setAttribute("name", "title");
  titlelabel.setAttribute("for", "title");
  titlelabel.textContent = "Title: ";
  form.appendChild(titlelabel);
  form.appendChild(titleinput); 
  let authorinput = document.createElement("INPUT");
  let authorlabel = document.createElement("LABEL");
  authorinput.setAttribute("type", "text");
  authorinput.setAttribute("id", "author");
  authorinput.setAttribute("name", "author");
  authorlabel.setAttribute("for", "author");
  authorlabel.textContent = "Author: ";
  form.appendChild(authorlabel);
  form.appendChild(authorinput);  
  let pagesinput = document.createElement("INPUT");
  let pageslabel = document.createElement("LABEL");
  pagesinput.setAttribute("type", "text");
  pagesinput.setAttribute("id", "pages");
  pagesinput.setAttribute("name", "pages");
  pageslabel.setAttribute("for", "pages")
  pageslabel.textContent = "Number of Pages: ";
  form.appendChild(pageslabel);
  form.appendChild(pagesinput);  
  let readhuhinput = document.createElement("INPUT");
  let readhuhlabel = document.createElement("LABEL");
  readhuhinput.setAttribute("type", "text");
  readhuhinput.setAttribute("id", "readhuh");
  readhuhinput.setAttribute("name", "readhuh");
  readhuhlabel.setAttribute("for", "readhuh")
  readhuhlabel.textContent = "Read?: ";
  form.appendChild(readhuhlabel);
  form.appendChild(readhuhinput);   
  let submitbutton = document.createElement("INPUT");
  submitbutton.setAttribute("type", "button");
  submitbutton.setAttribute("value", "submit");
  submitbutton.setAttribute("onclick", "addBookToLibrary(document.getElementById('title').value," + 
  "document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('readhuh').value)")
  form.appendChild(submitbutton)
  container.appendChild(form)
}

function clearAllBooks() {
  const list = document.querySelectorAll(".book");
  const divsarr = Array.from(list);

  for (let i = 0; i < divsarr.length; i++) {
    divsarr[i].remove();
  }
}

function removeBook(num) {
  let index = num - 1;

  myLibrary.splice(index, 1);
  render();
}

render();