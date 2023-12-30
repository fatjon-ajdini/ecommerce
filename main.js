const api = 'https://dummyjson.com/products/';

fetch(api)
    .then(response => response.json())
    .then(shop => loadIntialProducts(shop));

const cardsContainer = document.getElementById("products-container");
const loadMoreButton = document.getElementById("btn-load-more");

const initialItems = 15;
const loadItems = 6;


function loadIntialProducts(shop) {
    let out = "";
    let counter = 0;
    let products = shop.products;

    for(let product of products) {
        if(counter < initialItems) {
            out += `
                <div class="product">
                    <div class="inner-card">
                        <img class="card-image" src="${product.thumbnail}">
                        <div class="container">
                            <h3 class"title>${product.title}</h3>
                            <h5>Price: $${product.price}</h5>
                            <h5>Brand: ${product.brand}</h5>
                        </div>
                    </div>
                    <div class="card-button">
                        <button class="button-card button-1">Buy</button>
                        <button class="button-card button-2">Add to cart</button>
                    </div>
                </div>
            `;
        }
        counter++;
    }
    let div = document.createElement("div");
    div.classList = 'card-products';
    cardsContainer.insertBefore(div, loadMoreButton);
    div.innerHTML = out;

    // Loading more products (button - eventListener)
    loadMoreButton.addEventListener("click", function loadData() {
        let currentDisplayedItems = document.querySelectorAll(".product").length;
    
        let out = "";
        let counter = 0;
    
        for(let product of products) {
            if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems) {
                out += `
                    <div class="product">
                        <div class="inner-card">
                            <img class="card-image" src="${product.thumbnail}">
                            <div class="container">
                                <h3 class"title>${product.title}</h3>
                                <h5>Price: $${product.price}</h5>
                                <h5>Brand: ${product.brand}</h5>
                            </div>
                        </div>
                        <div class="card-button">
                            <button class="button-card button-1">Buy</button>
                            <button class="button-card button-2">Add to cart</button>
                        </div>
                    </div>
                `;
            };
            counter++;
        };
        let div = document.createElement("div");
        div.classList = 'card-products';
        cardsContainer.insertBefore(div, loadMoreButton);
        div.innerHTML = out;
        div.style.opacity = 0;
    
        if(document.querySelectorAll(".product").length == products.length) {
            loadMoreButton.style.display = "none";
        };
        fadeIn(div);
    });
};

// Disabling loadMoreButton after there are no more products to show 
function fadeIn(div) {
    let opacity = 0;
    let interval  = setInterval(function() {
        if(opacity <= 1) {
            opacity = opacity + 0.1;
            div.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 30); 
};
