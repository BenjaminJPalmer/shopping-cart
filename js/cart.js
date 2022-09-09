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

function addDiscountToCart(event) {
    // don't let the form submit normally
    event.preventDefault();

    let submittedCode = event.target.elements['discount-code'].value;

    let discount = getDiscountByCode(submittedCode);

    let discountMessage = document.getElementById('discount-code-message');

    if (!discount) {
        discountMessage.innerHTML = 'The discount code was not recognised';
        return;
    }

    discountMessage.innerHTML = `The discount code ${submittedCode} has been applied`;

    // if there's a discount already in the cart then we remove it
    for (let i = 0; i < window.cart.length; i++) {
        if (window.cart[i].code && window.cart[i].code === discount.code) {
            // remove discount from cart
            window.cart.splice(i, 1);
            break;
        }
    }

    // map the discount to a similar structure to products in the cart
    let cartDiscount = {
        code: discount.code,
        name: `DISCOUNT`,
        type: 'discount',
        sku: discount.code,
        quantity: 1,
        price: discount.amount
    }

    window.cart.push(cartDiscount);

    saveCart();
}