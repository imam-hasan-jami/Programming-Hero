/*
localStorage.setItem("name", "ronaldo");
localStorage.setItem("age", "40");
localStorage.setItem("club", "real madrid");

localStorage.getItem("name");

// localStorage.clear();
localStorage.removeItem("club");
*/

/*
const handleAddToStorage = () => {
    const name = "cr7";
    localStorage.setItem("name", name);
}
*/

/*
const handleAddToStorage = () => {
    const person = {
        name: "rudiger",
        age: 32,
        friends: ["asencio", "ramos"]
    }

    // localStorage.setItem("person", person);
    // localStorage.setItem("person", JSON.stringify(person));
    const convertedToString = JSON.stringify(person);
    localStorage.setItem("person", convertedToString);
    console.log(convertedToString);

    const backToObject = JSON.parse(convertedToString);
    console.log(backToObject);
}
*/

const handleAddToCart = () => {
    const productName = document.getElementById("product-name").value;
    const productQuantity = document.getElementById("product-quantity").value;

    // console.log(productName, productQuantity);
    displayProduct(productName, productQuantity);
    setValueToLocalStorage(productName, productQuantity);

    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
}

const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${productName} : ${productQuantity}`;
    productContainer.append(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");

    if (getProduct) {
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const setValueToLocalStorage = (productName, productQuantity) => {
    const cart = getProductFromLocalStorage();

    cart[productName] = productQuantity;

    const cartString = JSON.stringify(cart);

    localStorage.setItem("cart", cartString);
}

const displayProductFromLocalStorage = () => {
    const products = getProductFromLocalStorage();

    for (let product in products) {
        // console.log(product);
        // console.log(products[product]);
        displayProduct(product, products[product]);
    }
}

displayProductFromLocalStorage();