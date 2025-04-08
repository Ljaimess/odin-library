const bookTitle = document.querySelector(".bookTitle");
const authorName = document.querySelector(".authorName");
const submitBttn = document.querySelector(".submitBttn");
const pageNum = document.querySelector(".pageNum");
const completedBttn = document.querySelector(".completedBttn");
const shelf = document.querySelector(".shelf");
const bookModal = document.querySelector(".bookModal");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");

openModal.addEventListener("click", () => {
  bookModal.showModal();
});
closeModal.addEventListener("click", () => {
  bookModal.close();
});
//Close the modal when clicking outside of it
bookModal.addEventListener("click", (event) => {
  if (event.target === bookModal) {
    bookModal.close();
  }
});

const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
    read: false,
  },

];

// Constructor function to create a new book object
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

  // Create a new book object using the input values
  const newBook = new Book(
    bookTitle.value,
    authorName.value,
    pageNum.value,
    completedBttn.checked
  );

  myLibrary.push(newBook);
  addBookToLibrary();

  // Clear the input fields for the next entry
  bookTitle.value = "";
  authorName.value = "";
  pageNum.value = "";
  completedBttn.checked = false;
});

function addBookToLibrary() {
  shelf.innerHTML = ""; // Clear the shelf to avoid duplicate entries
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const titleDiv = document.createElement("h3");
    titleDiv.classList.add("titleDiv");
    titleDiv.textContent = `${book.title}`;
    const authorDiv = document.createElement("p");
    authorDiv.classList.add("authorDiv");
    authorDiv.textContent = `By: ${book.author}`;
    const pagesDiv = document.createElement("p");
    pagesDiv.classList.add("pagesDiv");
    pagesDiv.textContent = `Pages: ${book.pages}`;
    const readDiv = document.createElement("p");
    readDiv.classList.add("readDiv");
    readDiv.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    const removeBttn = document.createElement("button"); // remove button funtinality
    removeBttn.textContent = "Remove Book";
    removeBttn.classList.add("removeBttn");
    removeBttn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      addBookToLibrary();
    });
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(removeBttn);
    shelf.appendChild(bookDiv);
  });
};

addBookToLibrary();

