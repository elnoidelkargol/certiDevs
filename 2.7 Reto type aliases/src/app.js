function filterProductsByCategory(inventario, categoria) {
    var nuevoInventario = [];
    inventario.forEach(function (producto) {
        if (producto.category === categoria) {
            nuevoInventario.push(producto);
        }
    });
    return nuevoInventario;
}
var inventario = [
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
        category: "electronics",
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
console.log(filterProductsByCategory(inventario, "electronics"));
