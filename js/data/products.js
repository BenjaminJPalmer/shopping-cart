window.products = [
    { sku: "FOO123", name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { sku: "FOO124", name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { sku: "FOO125", name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { sku: "ALC222", name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { sku: "ALC223", name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { sku: "FOO126", name: "steak", type: "food", quantity: 2, price: 3.99 },
    { sku: "FOO127", name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { sku: "HOM310", name: "candles", type: "home", quantity: 3, price: 1.99 },
    { sku: "FOO128", name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { sku: "FOO129", name: "onions", type: "food", quantity: 3, price: 0.4 },
];

// Returns the product where the sku matches the supplied parameter
function getProductBySku(sku) {
    let products = window.products.filter(product => product.sku === sku);

    return products[0];
}