// var imgs = document.querySelectorAll(".slider img");
// var dots = document.querySelectorAll(".dot");
// var currentImg = 0;
// const interval = 3000;

// function changeSlide(n) {
//     for (var i = 0; i < imgs.length; i++) {
//         imgs[i].style.opacity = 0;
//         dots[i].className = dots[i].className.replace(" active", "")
//     }
    
//     currentImg = (currentImg + 1) % imgs.length; 

//     imgs[currentImg].style.opacity = 1;
//     dots[currentImg].className += " active";

//     if (n != undefined) {
//         clearInterval(timer);
//         timer = setInterval(changeSlide, interval);
//         currentImg = n
//     }
// }

// var timer = setInterval(changeSlide, interval);


fetch('https://dummyjson.com/products/')
.then(response => response.json())
// .then(shop => renderProducts(shop.products));
.then(shop => loadIntialProducts(shop));

const cardsContainer = document.getElementById("products-container");
const loadMoreButton = document.getElementsByClassName("btn-load-more");

const initialItems = 21;
const loadItems = 3;


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
    cardsContainer.prepend(div);
    div.innerHTML = out;
};


// function renderProducts(products) {
//     products.forEach(product => {
//         const div = document.createElement('div');
//         const image = document.createElement('img');
//         const name = document.createElement('h3');
//         const price = document.createElement('h5');
//         const brand = document.createElement('h5');

//         div.classList = 'card';
//         image.classList = 'card-img';
//         name.classList = 'title';

//         image.src = product.thumbnail;
//         name.innerText = product.title;
//         price.innerText = `Price: $${product.price}`;
//         brand.innerText = `Brand: ${product.brand}`;

//         div.appendChild(image);
//         div.appendChild(name);
//         div.appendChild(price);
//         div.appendChild(brand);
//         cardsContainer.appendChild(div);
//     });
// };
