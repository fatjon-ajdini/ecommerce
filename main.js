var imgs = document.querySelectorAll(".slider img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(" active", "")
    }
    
    currentImg = (currentImg + 1) % imgs.length; 

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += " active";

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n
    }
}

var timer = setInterval(changeSlide, interval);


fetch('https://dummyjson.com/products/')
.then(response => response.json())
.then(shop => renderProducts(shop.products));

const cardsContainer = document.querySelector("#cards-container");

function renderProducts(products) {
    products.forEach(product => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const price = document.createElement('h5');
        const brand = document.createElement('h5');

        div.classList = 'card';
        image.classList = 'card-img';
        name.classList = 'title';

        image.src = product.thumbnail;
        name.innerText = product.title;
        price.innerText = `Price: $${product.price}`;
        brand.innerText = `Brand: ${product.brand}`;

        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(brand);
        cardsContainer.appendChild(div);
    });
};
