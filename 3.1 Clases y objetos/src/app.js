class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    isAvailable() { return (this.stock > 0); }
    decreaseStock(amount) { this.stock -= amount; }
}
class Invnetory {
    constructor(products = []) {
        this.products = products;
    }
    addProduct(product) { this.products.push(product); }
    getProductById(id) {
        const found = this.products.find((product) => product.id === id);
        return found;
    }
    getTotalInventoryValue() {
        let total = 0;
        this.products.forEach(product => {
            total += (product.price * product.stock);
        });
        return total;
    }
}
let inventory = new Invnetory();
let product0 = new Product(0, "prod0", 1, 1);
let product1 = new Product(1, "prod1", 2, 10);
let product2 = new Product(2, "prod2", 4, 20);
let product3 = new Product(3, "prod3", 1, 15);
let product4 = new Product(4, "prod4", 7, 16);
let product5 = new Product(5, "prod5", 9, 8);
let product6 = new Product(6, "prod6", 10, 9);
let product7 = new Product(7, "prod7", 11, 22);
let product8 = new Product(8, "prod8", 12, 14);
inventory.addProduct(product0);
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);
inventory.addProduct(product4);
inventory.addProduct(product5);
inventory.addProduct(product6);
inventory.addProduct(product7);
inventory.addProduct(product8);
console.log(inventory.getProductById(3));
console.log(inventory.getProductById(4));
console.log(inventory.getProductById(10));
console.log(inventory.getTotalInventoryValue());
