class Library {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.books = [];
    }
    addBook(title, author) {
        const book = new Book(title, author);
        console.log(book.id);
        this.books.push(book);
        return book.id;
    }
    borrowBook(id) {
        const book = this.books.find(book => book.id === id);
        if (book && book.available) {
            book.available = !book.available;
            return true;
        }
        else {
            return false;
        }
    }
    returnBook(id) {
        const book = this.books.find(book => book.id === id);
        if (book && !book.available) {
            return true;
        }
        else {
            return false;
        }
    }
    getAvailableBooks() {
        let namesArray = [];
        this.books.forEach(book => {
            if (book.available) {
                namesArray.push(book.title);
            }
        });
        return namesArray;
    }
}
class Book {
    constructor(title, author) {
        Book.id++;
        this.available = true;
        this.title = title;
        this.author = author;
    }
    get id() {
        return Book.id;
    }
}
const library = new Library("library1", "Tarragona");
library.addBook("libro1", "author1");
console.log(library.getAvailableBooks());
