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

function Book(title, aurthor, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${aurthor}, ${pages} pages, ${read ? "read" : "not read"}`;
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
  console.log(myLibrary);
  console.log("clicked");
});

function addBookToLibrary() {
  // take params, create a book then store it in the array
};

