// Check that the product list element is on the page
const productList = document.getElementById("product-list");

// Only run the below if product list exists
if(productList !== null) {
    window.products.forEach((product) => {
        let productElement = document.createElement('div');

        let productTile = document.createElement('strong');
        productTile.innerHTML = product.name;

        let productLink = document.createElement('a');
        productLink.innerHTML = 'View this product';
        productLink.href = `product.html?sku=${product.sku}`;

        productElement.appendChild(productTile);
        productElement.appendChild(productLink);

        productList.appendChild(productElement);
    })
}


// if we have a product page element then we populate the template
const productPageBody = document.getElementById('product-page');

// only run the code below if the product page element exists
if (productPageBody !== null) {
    const url = new URL(window.location.href);
    const sku = url.searchParams.get("sku");

    // @TODO: Add error handling - what if sku param does not exist? Or is not valid?
    const productData = getProductBySku(sku);

    let productTitle = document.getElementById('product-title');
    let productSku = document.getElementById('product-sku');
    let productType = document.getElementById('product-type');
    let productPrice = document.getElementById('product-price');
    let productBuy = document.getElementById('product-buy');

    productTitle.innerHTML = productData.name;
    productSku.innerHTML = productData.sku;
    productType.innerHTML = productData.type;
    productPrice.innerHTML = productData.price;
    productBuy.dataset.sku = sku;
    productBuy.addEventListener("click", addProductToCart);
}


// if we have a cart element then we populate the template
const cartElement = document.getElementById('shopping-cart');

// only run the code below if the cart element exists
if (cartElement !== null) {
    const cartContents = document.getElementById('shopping-cart-contents');

    window.cart.forEach((product) => {
        let productRow = document.createElement('tr');
        let titleCell = document.createElement('td');
        let productLink = document.createElement('a');
        productLink.innerHTML = product.name;
        productLink.href = `product.html?sku=${product.sku}`;
        // add the link to the table cell
        titleCell.appendChild(productLink);
        // add the title cell to the row
        productRow.appendChild(titleCell);

        let skuCell = document.createElement('td');
        skuCell.innerHTML = product.sku
        productRow.appendChild(skuCell);

        let qtyCell = document.createElement('td');
        qtyCell.innerHTML = product.quantity
        productRow.appendChild(qtyCell);

        let costCell = document.createElement('td');
        costCell.innerHTML = `£${product.quantity*product.price}`;
        productRow.appendChild(costCell);

        cartContents.appendChild(productRow);
    });
}