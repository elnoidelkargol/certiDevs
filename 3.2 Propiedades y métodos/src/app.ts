class Library {
    readonly name: string;
    books: Book[];
    location ?: string;

    constructor(
        name:string,
        location ?: string,
    ){
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(title: string, author: string): number
    {
        const book = new Book(title,author);
        this.books.push(book)
        return book.id;
    }

    borrowBook(id:number): boolean{
        const book = this.books.find(book => book.id === id);
        if (book && book.available){
            book.available = false;
            return true;
        }else{
            return false
        }
    }

    returnBook(id:number): boolean{
        const book = this.books.find(book => book.id === id);
        if (book && !book.available){
            book.available = true;
            return true;
        }else{
            return false;
        }
    }

    getAvailableBooks(): string[]{
        return this.books
            .filter(book => book.available)
            .map(book => book.title)
    }
}

class Book {
    static totalIds: number = 0;
    id: number = 0;
    title: string;
    author: string;
    available: boolean;
    
    constructor(title: string, author: string) {
        Book.totalIds ++;
        this.id = Book.totalIds;
        this.available = true;

        this.title = title;
        this.author = author;        
    }    
}

const library = new Library("library1","Tarragona");
library.addBook("libro1","author1");
console.log(library.getAvailableBooks());