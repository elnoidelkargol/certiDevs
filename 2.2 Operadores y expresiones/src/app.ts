function calculateDiscount (price: number, isPremium:boolean, isOnSale:boolean): number {
    let total:number = price;

    if (price >= 100)
    {
        total = price*80/100;
    }else if (price >= 50 && price <= 99) {
        total = price*90/100;
    }else if (price < 50){
        total = price*95/100;
    }

    if (isPremium)
    {
        total = total*95/100;
    }

    if (isOnSale)
    {
        total -= 5;
    }
    
    return Math.round(total * 100) / 100;
}

console.log (calculateDiscount(120,false,false));
console.log (calculateDiscount(120,true,false));
console.log (calculateDiscount(120,true,true));