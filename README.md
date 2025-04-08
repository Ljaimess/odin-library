Odin Library
Odin Library is a simple web application that allows users to manage a collection of books. Users can add books, view them in a visually appealing layout, mark them as read or unread, and remove them from the collection. This project is part of The Odin Project curriculum and demonstrates the use of HTML, CSS, and JavaScript to build a functional and interactive library application.

Features:
Add a Book: Users can add a book to the library by filling out a form in a modal dialog.
Display Books: Books are displayed in a grid layout with details such as title, author, pages, and read status.
Remove a Book: Each book has a "Remove Book" button to delete it from the library.
Responsive Design: The layout adjusts to different screen sizes, ensuring a good user experience on both desktop and mobile devices.
Technologies Used

1. HTML
Semantic Elements:
<header>: Contains the title of the application.
<main>: Displays the library of books.
<dialog>: Used for the modal form to add a book.
Form Elements:
<form>: Collects book details (title, author, pages, and read status).
<input>: For user input fields (text, number, and checkbox).
<button>: For submitting the form and canceling the modal.
2. CSS
   Flexbox:
   Used extensively for layout and alignment (e.g., centering elements in the header, aligning content in .book elements).
   Grid:
   Used in the .shelf to display books in a responsive grid layout.
   Styling:
   Custom styles for buttons, modal dialogs, and book cards.
   Hover effects for buttons to improve user experience.
   Responsive Design:
   Ensures the application looks good on different screen sizes using flexible widths and heights.
3. JavaScript
   DOM Manipulation:
   Dynamically creates and appends book elements to the .shelf.
   Handles opening and closing of the modal dialog.
   Event Listeners:
   Listens for user interactions such as clicking buttons or submitting forms.
   Dynamic Book Management:
   Adds books to the myLibrary array and updates the DOM.
   Removes books from the myLibrary array and updates the DOM.
   Constructor Function:
   Book: A constructor function to create book objects with properties like title, author, pages, and read status.
   File Structure
4. HTML (index.html)
   Contains the structure of the application, including:
   A header with the application title.
   A modal dialog for adding books.
   A main section (.shelf) to display the books.
5. CSS (style.css)
   Styles the application, including:
   The header, modal dialog, and book cards.
   Flexbox and grid layouts for alignment and responsiveness.
   Buttons with hover effects.
6. JavaScript (script.js)
   Handles the functionality of the application, including:
   Adding books to the library.
   Removing books from the library.
   Dynamically updating the DOM.
   How It Works
7. Adding a Book
   The "Add a Book" button opens a modal dialog.
   Users fill out the form with book details (title, author, pages, and read status).
   Clicking "Add Book" creates a new book object and adds it to the myLibrary array.
   The addBookToLibrary function updates the .shelf to display the new book.
8. Displaying Books
   The addBookToLibrary function iterates over the myLibrary array.
   For each book, it creates a .book element with child elements for the title, author, pages, read status, and a "Remove Book" button.
   The .book elements are appended to the .shelf.
9. Removing a Book
   Each .book element has a "Remove Book" button.
   Clicking the button removes the book from the myLibrary array using splice() and re-renders the .shelf.

Future Improvements

Persistent Storage:
Use localStorage to save the library so it persists across page reloads.
Edit Book Details:
Add functionality to edit book details after they are added.
Improved Styling:
Enhance the UI with animations and better responsiveness.

How to Run
1.Clone the repository:
git clone <repository-url>
2.Open index.html in your browser.
