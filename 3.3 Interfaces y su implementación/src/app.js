var DocumentTest = /** @class */ (function () {
    function DocumentTest(content) {
        this.content = content;
    }
    DocumentTest.prototype.print = function () {
        console.log("Content: ".concat(this.content));
    };
    return DocumentTest;
}());
var documentTest = new DocumentTest("This is a log to test");
documentTest.print();
