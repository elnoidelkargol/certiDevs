type ProductCategory = "electronics" | "clothing" | "books" | "food";
type ProductStatus =  "available" | "out-of-stock" | "discontinued";

type Product = {
    id: string,
    name: string,
    price: number,
    category: ProductCategory,
    status: ProductStatus,
    tags: string[]
}

type Inventory = Product[];

function filterProductsByCategory(inventario: Inventory,categoria: ProductCategory): Inventory{
    
    return inventario.filter((product) => product.category === categoria);
    /* let nuevoInventario: Inventory = [];
    
    inventario.forEach(producto => {
        if (producto.category === categoria)
        {
            nuevoInventario.push(producto);
        }
    });

    return nuevoInventario; */
}

let inventario: Inventory = [
    {
        id: "1",
        name: "articulo 1",
        price: 100,
        category: "electronics",
        status: "available",
        tags: []
    },
    {
        id: "2",
        name: "articulo 2",
        price: 0,
        category: "clothing",
        status: "available",
        tags: []
    },
    {
        id: "3",
        name: "articulo 3",
        price: 0,
        category: "food",
        status: "available",
        tags: []
    },
    {
        id: "4",
        name: "articulo 4",
        price: 0,
        category: "books",
        status: "available",
        tags: []
    }
];

console.log(filterProductsByCategory(inventario,"electronics"));



