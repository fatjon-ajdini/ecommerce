
let detailedProduct = JSON.parse(sessionStorage.getItem("product"));

let primaryProduct = document.getElementById("product-details")

let productContainer = document.createElement("div");
let productImageContainer = document.createElement("div");
let productImage = document.createElement("img");
let productDescription = document.createElement("div");
let productName = document.createElement("h3");
let productBrand = document.createElement("h3");
let productDesc = document.createElement("p");
let productPrice = document.createElement("h5");
let productDiscount = document.createElement("h5");
let productFinalPrice = document.createElement("h5");
let productStock = document.createElement("h3");
let productRating = document.createElement("h3");
let productCategory = document.createElement("h3");

productContainer.classList.add("product-container");
productDescription.classList.add("product-desc");

productImageContainer.classList.add("image-container");
productImage.setAttribute("src", detailedProduct.thumbnail);

productName.innerHTML = `Product: ${detailedProduct.title}`;
productBrand.innerHTML = `Brand: ${detailedProduct.brand}`;
productDesc.innerHTML = `<b>Description:</b> ${detailedProduct.description}`;
productPrice.innerHTML = `Price:  <del>$${detailedProduct.price}</del>`;
productDiscount.innerHTML = `Discount: ${detailedProduct.discountPercentage}%`;

let discount = detailedProduct.discountPercentage / 100;
let pricediscount = discount * detailedProduct.price;
let finalprice = (detailedProduct.price - pricediscount).toFixed(2);
productFinalPrice.innerHTML = `Final Price: ${(detailedProduct.price - pricediscount).toFixed(2)}`;

productStock.innerHTML = `Stock: ${detailedProduct.stock}`;
productRating.innerHTML = `Rating: ${detailedProduct.rating}`;
productCategory.innerHTML = `Category: ${detailedProduct.category}`;

productDescription.appendChild(productName);
productDescription.appendChild(productBrand);
productDescription.appendChild(productDesc);
productDescription.appendChild(productPrice);
productDescription.appendChild(productDiscount);
productDescription.appendChild(productFinalPrice);
productDescription.appendChild(productStock);
productDescription.appendChild(productRating);
productDescription.appendChild(productCategory);

productImageContainer.appendChild(productImage);

productContainer.appendChild(productImageContainer);
productContainer.appendChild(productDescription);

primaryProduct.prepend(productContainer);


function addToCartProduct() {
    let cart = {
        productId : detailedProduct.id,
        productName : detailedProduct.title,
        productPrice : detailedProduct.price,
        productImage : detailedProduct.thumbnail,
    };
    let cartJSON = JSON.stringify(cart);
    
    let cartArray = new Array();
    

    // If not empty
    if (sessionStorage.getItem("cart")) {
        cartArray = JSON.parse(sessionStorage.getItem("cart"));
    }
    cartArray.push(cart);
    
    
    let cartArrayJSON = JSON.stringify(cartArray);
    sessionStorage.setItem("cart", cartArrayJSON);
    console.log();
};



let addProductToCart = document.getElementsByClassName("button2");
addProductToCart[0].addEventListener("click", function() {
    addToCartProduct();
    alert("Product was added to cart");
});


