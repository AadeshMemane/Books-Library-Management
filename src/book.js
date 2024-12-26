function Library() {
  this.books = []
}

//Function for adding a new book
Library.prototype.addBook = function (isbn, title, author, year) {
  this.books.push({
    isbn: isbn,
    title: title,
    author: author,
    year: year,
    available: true,
  })
}

module.exports = Library
