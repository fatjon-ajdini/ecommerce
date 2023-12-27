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
                <div class="card">
                    <img class="card-img" src="${product.thumbnail}" alt="" style="width:100%">
                    <div class="container">
                        <h3 class"title>${product.title}</h3>
                        <h5>Price: $${product.price}</h5>
                        <h5>Brand: ${product.brand}</h5>
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
        let currentDisplayedItems = document.querySelectorAll(".card").length;
    
        let out = "";
        let counter = 0;
    
        for(let product of products) {
            if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems) {
                out += `
                    <div class="card">
                        <img class="card-img" src="${product.thumbnail}" alt="" style="width:100%">
                        <div class="container">
                            <h3 class"title>${product.title}</h3>
                            <h5>Price: $${product.price}</h5>
                            <h5>Brand: ${product.brand}</h5>
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
    
        if(document.querySelectorAll(".card").length == products.length) {
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
