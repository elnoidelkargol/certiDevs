import { Item } from "./itemModel";
import { InventoryService } from "./inventoryService";

let item: Item[] = [
    {
        id: 1,
        quantity: 12,
        price: 200,
        name: "item1",
        description: "desc Item 1"
    },
    {
        id: 2,
        quantity: 55,
        price: 23,
        name: "item2",
        description: "desc Item 2"
    },
    {
        id: 3,
        quantity: 63,
        price: 99,
        name: "item3",
        description: "desc item 3"
    },
    {
        id: 4,
        quantity: 234,
        price: 1110,
        name: "item 4",
        description: "desc Item 4"
    }

]

let item1:Item = {id:5,quantity:11,price:12,name:"item5",description:"desc 5"}

console.log("### CREATE INVENTORY ###");
const inventory = new InventoryService(item);
console.log(`Items: ${inventory.getAllItems()}`);
console.log("### ADD ITEM 1 ###");
inventory.addItem(item1);
console.log(`Items: ${inventory.getAllItems()}`);
console.log("### DELETE ITEM 2 ###");
inventory.deleteItem(2);
console.log(`Items: ${inventory.getAllItems()}`);
console.log("### UPDATE QUANTITY ITEM 3 to 789 ###");
inventory.updateQuantity(789,3);
console.log(`Items: ${inventory.getAllItems()}`);
console.log("### UPDATE PRICE ITEM 4 to 789 ###");
inventory.updatePrice(789,4);
console.log(`Items: ${inventory.getAllItems()}`);
console.log("### SEARCH ITEM3 ###");
console.log(`Item3: ${inventory.getItemByName("item3")}`);