const bookTitle = document.querySelector(".bookTitle");
const authorName = document.querySelector(".authorName");
const submitBttn = document.querySelector(".submitBttn");
const pageNum = document.querySelector(".pageNum");
const completedBttn = document.querySelector(".completedBttn");
const shelf = document.querySelector(".shelf");

const myLibrary = [
  {
    title: "lord of the rings",
    author: "tolken",
    pages: 420,
    read: false,
  },

];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read"}`;
  };

}

submitBttn.addEventListener("click", (event) => {
  event.preventDefault();
  
  const newBook = new Book(
    bookTitle.value,
    authorName.value,
    pageNum.value,
    completedBttn.checked
  );

  myLibrary.push(newBook);

  addBookToLibrary();

  bookTitle.value = "";
  authorName.value = "";
  pageNum.value = "";
  completedBttn.checked = false;
});

function addBookToLibrary() {
  shelf.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const titleDiv = document.createElement("h3");
    titleDiv.textContent = `Title: ${book.title}`;
    const authorDiv = document.createElement("p");
    authorDiv.textContent = `Author: ${book.author}`;
    const pagesDiv = document.createElement("p");
    pagesDiv.textContent = `Pages: ${book.pages}`;
    const readDiv = document.createElement("p");
    readDiv.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);

    shelf.appendChild(bookDiv);
  });
};

addBookToLibrary();

