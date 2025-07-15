interface IPrintable{
    print():void;
}

class DocumentTest implements IPrintable {
    constructor(
        public content: string,
    ){

    }
    print(): void {
        console.log(`Content: ${this.content}`)
    }

}

const documentTest = new DocumentTest("This is a log to test");
documentTest.print();