let oneProduct = JSON.parse(sessionStorage.getItem("cart"));



let container = document.getElementById("container")
let products = document.createElement("div");
products.classList.add("products");



for(let i = 0; i < oneProduct.length; i++) {
    let oneproduct = document.createElement("div");
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h1");
    let price = document.createElement("h3");
    let quantity = document.createElement("h3");
    let total = document.createElement("h3");

    let totalall = document.createElement("div");
    let quantityall = document.createElement("h3");
    let subtotal = document.createElement("h3");
    
    let buy = document.createElement("div")
    let buybutton = document.createElement("button");

    // products.classList.add("products");
    oneproduct.classList.add("oneproduct");
    name.classList.add("name");
    price.classList.add("price");
    quantity.classList.add("quantity");
    total.classList.add("total");
    imgdiv.classList.add("image");

    totalall.classList.add("totalall");
    quantityall.classList.add("quantityall");
    subtotal.classList.add("subtotal");

    buy.classList.add("buy");
    buybutton.classList.add("buybutton");

    name.innerHTML = oneProduct[i].productName;
    price.innerHTML = oneProduct[i].productPrice;
    img.src = oneProduct[i].productImage;

    imgdiv.appendChild(img)
    oneproduct.appendChild(imgdiv);
    oneproduct.appendChild(name);
    oneproduct.appendChild(price);
    products.appendChild(oneproduct);
    container.appendChild(products);
}


let total = 0;
for(let j = 0; j < oneProduct.length; j++) {
    total += oneProduct[j].productPrice;
}

let billcontent = document.createElement("div");
let bill = document.createElement("div");

let cost = document.createElement("h3");

billcontent.classList.add("billcontent");
bill.classList.add("bill");
cost.classList.add("cost");

cost.innerHTML = "Total: " + total + " $";

bill.appendChild(cost);
billcontent.appendChild(bill);
container.appendChild(billcontent);

let buttondiv = document.createElement("div");
buttondiv.classList.add("buttondiv");

let button = document.createElement("button");
button.classList.add("button-buy")
button.innerHTML = "<h3>Buy</h3>";

buttondiv.appendChild(button);
container.appendChild(buttondiv);

button.addEventListener("click", function() {
    alert("Thank you for buying");
    sessionStorage.removeItem("cart");
    location.reload();
})