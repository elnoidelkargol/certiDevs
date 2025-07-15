import { Item } from "./itemModel";

export class InventoryService{
    
    constructor(public items: Item[]){}

    public addItem(item: Item){
        this.items.push(item);
    }

    public deleteItem(id:number){
        const index = this.items.findIndex(item =>item.id === id);

        if (index !== -1){
            this.items.splice(index,1);
        }
    }

    public updateQuantity(quantity: number, id: number){
        const item = this.items.find(item => item.id === id);
        if(item && quantity > 0) item.quantity = quantity;
    }
    public updatePrice(price: number, id: number){
        const item = this.items.find(item => item.id === id);
        if(item && price > 0) item.price = price;
    }

    public getItemByName(name: string): Item | undefined{
        return this.items.find(item => item.name === name);
    }

    public getAllItems (): Item[]
    {
        return this.items
            .filter(item => item.quantity > 0);
    }
}