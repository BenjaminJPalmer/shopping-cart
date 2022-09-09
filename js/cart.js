// default is an empty cart
window.cart = [];

function loadCart() {
    // if we don't have a record in localstorage already
    // then it'll use the default value of []
    if (localStorage.getItem('cart')) {
        // JSON.parse because it's an array of objects
        window.cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCart() {
    // JSON.stringify because it's an array of objects
    localStorage.setItem('cart', JSON.stringify(window.cart));
}

// load the cart in immediately
loadCart();


function addProductToCart(event) {
    // don't follow the link href
    event.preventDefault();

    let product = getProductBySku(event.target.dataset.sku);

    let productAlreadyInCart = false;

    for (let i = 0; i < window.cart.length; i++) {
        if (window.cart[i].sku && window.cart[i].sku === product.sku) {
            productAlreadyInCart = true;
            window.cart[i].quantity++;
        }
    }

    if (!productAlreadyInCart) {
        product.quantity = 1;
        window.cart.push(product);
    }

    saveCart();
}