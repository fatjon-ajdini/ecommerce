export function addToCart(element) {
    // var productParent = document.getElementsByClassName('product');
    // var price = document.getElementsByClassName(".price");
    // var productName = document.getElementsByClassName(".title");
    $(document).ready(function() {
    var productParent = $(element).closest("div.product-grid");
    var price = $(productParent).find(".price").text();
    var productName = $(productParent).find(".title").text();});

    var cartItem = {
        productName: productName,
        price: price,
    }

    var cartItemJson = JSON.stringify(cartItem);

    var cartArray = new Array();
    // If javascript shopping cart session is not empty
    if (sessionStorage.getItem('.product')) {
        cartArray = JSON.parse(sessionStorage.getItem('.product'));
    }
    cartArray.push(cartItemJson);

    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('shopping-cart', cartJSON);
    showCartTable();
};