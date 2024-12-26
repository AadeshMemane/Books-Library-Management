const Library = require('../src/book')

describe('Library Management System', function () {
  let library

  beforeEach(function () {
    library = new Library()
  })
  //test 1
  test('Should add a new book', function () {
    library.addBook('12345', 'Ikigai', 'Hector Garcia', 2010)
    expect(library.books.length).toBe(1)
    expect(library.books[0]).toEqual({
      isbn: '12345',
      title: 'Ikigai',
      author: 'Hector Garcia',
      year: 2010,
      available: true,
    })
  })

  //test 2
  test('Should allow borrowing an available book', function () {
    library.addBook('12345', 'Ikigai', 'Hector Garcia', 2010)
    library.borrowBook('12345')
    expect(library.books[0].available).toBe(false)
  })

  //test 3
  test('Should not allow borrowing a book that does not exist', function () {
    expect(() => library.borrowBook('97985')).toThrow('Book not found.')
  })
})
