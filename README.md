# Library Management System

This project is a simple Library Management System implemented in JavaScript, using Jest for test-driven development (TDD). The system allows users to perform basic operations like adding books, borrowing books, returning books, and viewing available books.

## Features

- Add new books to the library.
- Borrow books (only if available).
- Return borrowed books.
- View a list of available books.

## Prerequisites

- Node.js installed on your system.
- npm (Node Package Manager) installed.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AadeshMemane/Books-Library-Management.git
   cd <repository_name>
   ```

2. **Install Dependencies**:
   Install Jest for testing:

   ```bash
   npm install jest --save-dev
   ```

3. **Project Structure**:
   The project contains the following files:
   - `book.js`: Library management system implementation.
   - `book.test.js`: Jest test cases.

## Running the Project

1. **Run Tests**:
   Execute the tests to ensure the functionality works as expected:

   ```bash
   npm run test
   ```

   The test results will indicate if all functionalities pass the defined test cases.

2. **Using the Library Management System**:

   - Import the `Library` class from `book.js` into your code.
   - Create an instance of the `Library` and interact with it using the provided methods (`addBook`, `borrowBook`, `returnBook`, `viewAvailableBooks`).

   Example usage:

   ```javascript
   const Library = require('./book')

   const library = new Library()
   library.addBook('123', 'Book Title', 'Author Name', 2023)
   console.log(library.viewAvailableBooks())
   ```

## Git Workflow

1. Initialize the Git repository:

   ```bash
   git init
   ```

2. Make frequent commits with meaningful messages as you implement each feature and test case.

3. Push the code to a remote repository:
   ```bash
   git remote add origin https://github.com/AadeshMemane/Books-Library-Management.git
   git push -u origin master
   ```
