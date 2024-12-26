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
})
