

// const api = 'https://dummyjson.com/products/';
// fetch(api)
//     .then(response => response.json())
//     .then(shop => loadIntialProducts(shop));

const cardsContainer = document.getElementById("products-container");
const loadMoreButton = document.getElementById("btn-load-more");

const initialItems = 15;
const loadItems = 6;

const addToCartBtn = document.getElementsByClassName(".button-2");

// function loadIntialProducts(shop) {
//     let out = "";
//     let counter = 0;
//     let products = shop.products;

//     for(let product of products) {
//         if(counter < initialItems) {
//             out += `
//                 <div class="product">
//                     <div class="inner-card">
//                         <img class="card-image" src="${product.thumbnail}">
//                         <div class="container">
//                             <h3 class"title>${product.title}</h3>
//                             <h5>Price: $${product.price}</h5>
//                             <h5>Brand: ${product.brand}</h5>
//                         </div>
//                     </div>
//                     <div class="card-button">
//                         <a href=""><button class="button-card button-1" onclick="addToCart(this)">Details</button></a>
//                     </div>
//                 </div>
//             `;

//         }
//         counter++;
//     }
//     let div = document.createElement("div");
//     div.classList = 'card-products';
//     cardsContainer.prepend(div);
//     div.innerHTML = out;
    

//     // Loading more products (button - eventListener)
//     loadMoreButton.addEventListener("click", function loadData() {
//         let currentDisplayedItems = document.querySelectorAll(".product").length;
    
//         let out = "";
//         let counter = 0;
    
//         for(let product of products) {
//             if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems) {
//                 out += `
//                     <div class="product">
//                         <div class="inner-card">
//                             <img class="card-image" src="${product.thumbnail}">
//                             <div class="container">
//                                 <h3 class="title>${product.title}</h3>
//                                 <h5 class="price">Price: $${product.price}</h5>
//                                 <h5>Brand: ${product.brand}</h5>
//                             </div>
//                         </div>
//                         <div class="card-button">
//                             <button class="button-card button-1">Buy</button>
//                             <button id="button-2" type="submit" class="button-card button-2">Add to cart</button>
//                         </div>
//                     </div>
//                 `;
//             };
//             counter++;
//         };
//         let div = document.createElement("div");
//         div.classList = 'card-products';
//         cardsContainer.insertBefore(div, loadMoreButton);
//         div.innerHTML = out;
//         div.style.opacity = 0;
    
//         if(document.querySelectorAll(".product").length == products.length) {
//             loadMoreButton.style.display = "none";
//         };
//         fadeIn(div);
//     });
// };

// // Disabling loadMoreButton after there are no more products to show 
// function fadeIn(div) {
//     let opacity = 0;
//     let interval  = setInterval(function() {
//         if(opacity <= 1) {
//             opacity = opacity + 0.1;
//             div.style.opacity = opacity;
//         } else {
//             clearInterval(interval);
//         }
//     }, 30); 
// };


// function addToCart(element) {
//     // var productParent = document.getElementsByClassName('product');
//     // var price = document.getElementsByClassName(".price");
//     // var productName = document.getElementsByClassName(".title");
    
//     var productParent = $(element).closest("div.product");
//     var price = $(productParent).find(".price").text();
//     var productName = $(productParent).find(".title").text();

//     var cartItem = {
//         productName: productName,
//         price: price,
//     }

//     var cartItemJson = JSON.stringify(cartItem);

//     var cartArray = new Array();
//     // If javascript shopping cart session is not empty
//     if (sessionStorage.getItem('.product')) {
//         cartArray = JSON.parse(sessionStorage.getItem('.product'));
//     }
//     cartArray.push(cartItemJson);

//     var cartJSON = JSON.stringify(cartArray);
//     sessionStorage.setItem('product', cartJSON);
//     showCartTable();
// };

// function emptyCart() {
// 	if (sessionStorage.getItem('shopping-cart')) {
// 		// Clear JavaScript sessionStorage by index
// 		sessionStorage.removeItem('shopping-cart');
// 		showCartTable();
// 	}
// };

// function showCartTable() {
// 	var cartRowHTML = "";
// 	var itemCount = 0;
// 	var grandTotal = 0;

// 	var price = 0;
// 	var quantity = 0;
// 	var subTotal = 0;

// 	if (sessionStorage.getItem('shopping-cart')) {
// 		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
// 		itemCount = shoppingCart.length;

// 		//Iterate javascript shopping cart array
// 		shoppingCart.forEach(function(item) {
// 			var cartItem = JSON.parse(item);
// 			price = parseFloat(cartItem.price);
// 			quantity = parseInt(cartItem.quantity);
// 			subTotal = price * quantity

// 			cartRowHTML += "<tr>" +
// 				"<td>" + cartItem.productName + "</td>" +
// 				"<td class='text-right'>$" + price.toFixed(2) + "</td>" +
// 				"<td class='text-right'>" + quantity + "</td>" +
// 				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
// 				"</tr>";

// 			grandTotal += subTotal;
// 		});
// 	}

// 	$('#cartTableBody').html(cartRowHTML);
// 	$('#itemCount').text(itemCount);
// 	$('#totalAmount').text("$" + grandTotal.toFixed(2));
// };


import { products } from "./products.js";

let productsContainer = document.getElementById("#products-container");
let cardProducts = document.createElement("div");
cardProducts.classList.add("card-products");


for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div");

    let innerDiv = document.createElement("div");
    let image = document.createElement("img");
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let price = document.createElement("h5");
    let brand = document.createElement("h5");

    let cardButton = document.createElement("div");
    let details = document.createElement("button");


    product.classList.add("product");

    innerDiv.classList.add("inner-card");
    image.classList.add("card-image");
    image.setAttribute("src", products[i].thumbnail);
    container.classList.add("container");

    title.classList.add("title");
    price.classList.add("price");
    brand.classList.add("brand");

    cardButton.classList.add("card-button");
    details.classList.add("button-1", "button-card");

    
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(brand);
    innerDiv.prepend(image, container);
    cardButton.appendChild(details);
    product.prepend(innerDiv, cardButton);

    
    title.innerHTML = products[i].title;
    price.innerHTML = `$ ${products[i].price}`;
    brand.innerHTML = products[i].brand;
    details.innerHTML = 'Details';

    cardProducts.appendChild(product);
    cardsContainer.prepend(cardProducts);

    console.log(products[i].thumbnail);

}
