let searchBook = document.getElementById("search-books");
let title = document.getElementsByClassName("title");
let list = document.getElementsByTagName("li");
let searchBookTwo = document.querySelector("#search-books");
let titles = document.querySelectorAll(".title");
//console.log(title);
//console.log(Array.isArray(Array.from(titles)));
let bookList = document.querySelector("#book-list ul");
//console.log(bookList);
bookList.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    li.remove();
  }
});

let addBook = document.querySelector("#add-book");
addBook.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = addBook.querySelector("input").value.trim();
  if (inputValue != "") {
    const li = document.createElement("li");
    const firstSpanTag = document.createElement("span");
    const secondSpanTag = document.createElement("span");

    li.appendChild(firstSpanTag);
    li.appendChild(secondSpanTag);
    bookList.appendChild(li);

    firstSpanTag.textContent = inputValue;
    secondSpanTag.textContent = "delete";

    firstSpanTag.classList.add("name");
    secondSpanTag.classList.add("delete");
  } else alert("You Are A Fool");
});

// let searchBar = searchBookTwo.querySelector("input");
// searchBar.addEventListener("keyup", (event) => {
//   const term = event.target.value.toLowerCase();
//   Array.from(list).forEach((book) => {
//     const bookTitle = book.firstElementChild.textContent;
//     if (bookTitle.toLowerCase().indexOf(term) != -1)
//       book.style.display = "block";
//     else book.style.diplay = "none";
//   });
// });

searchBook.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchTerm = searchBook.querySelector("input").value.toLowerCase();
  const books = bookList.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent.toLowerCase();
    if (title.indexOf(searchTerm) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
