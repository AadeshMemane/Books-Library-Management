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

//Function for borrowing a available book
Library.prototype.borrowBook = function (isbn) {
  const book = this.books.find((book) => book.isbn === isbn)
  if (!book) {
    throw new Error('Book not found.')
  }
  if (!book.available) {
    throw new Error('Book is not available.')
  }
  book.available = false
}

//Function for returning a borrowed book
Library.prototype.returnBook = function (isbn) {
  const book = this.books.find((book) => book.isbn === isbn)
  if (!book) {
    throw new Error('Book not found.')
  }
  book.available = true
}

module.exports = Library
