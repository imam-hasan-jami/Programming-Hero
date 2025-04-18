//Ring Buttons
const ringButtons = document.querySelectorAll(".ring-button");
let productImageBase = "../images/";

for (let i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click", function (event) {

        const color = event.target.id.replace("-color", "");

        for (let j = 0; j < ringButtons.length; j++) {
            ringButtons[j].classList.remove("border-purple-600");
            ringButtons[j].classList.add("border-gray-300");
        }

        event.target.classList.add("border-purple-600");
        event.target.classList.remove("border-gray-300");

        const productImage = document.getElementById("product-image");
        productImage.src = `${productImageBase}${color}.png`;
    })
}

//Ring Buttons with onclick function
// function selectBandColor(color) {
//     const colors = ["purple", "teal", "cyan", "gray"];

//     for (let i = 0; i < colors.length; i++) {
//         const button = document.getElementById(colors[i] + "-color");

//         const element = colors[i];
//         if (color === element) {
//             button.classList.add("border-purple-600");
//             button.classList.remove("border-gray-300");
//         } else {
//             button.classList.remove("border-purple-600");
//             button.classList.add("border-gray-300");
//         }
//     }

//     const productImage = document.getElementById("product-image");
//     productImage.src = `../images/${color}.png`;
// }

//Size Buttons
const sizeButtons = document.querySelectorAll(".size-button");

for (let i = 0; i < sizeButtons.length; i++) {
    const sizeBtn = sizeButtons[i];
    sizeBtn.addEventListener("click", function (event) {

        for (let j = 0; j < sizeButtons.length; j++) {
            sizeButtons[j].classList.remove("border-purple-600");
        }

        event.target.classList.add("border-purple-600");
    })
}

//Size Buttons with onclick function
// function selectWristSize(size) {
//     const sizes = ["S", "M", "L", "XL"];

//     for (let i = 0; i < sizes.length; i++) {
//         const button = document.getElementById("size-" + sizes[i]);

//         const element = sizes[i];
//         if (size === element) {
//             button.classList.add("border-purple-600");
//         } else {
//             button.classList.remove("border-purple-600");
//         }
//     }
// }

//Quantity Buttons
const quantityElements = document.querySelectorAll(".quantity-button");
for (let i = 0; i < quantityElements.length; i++) {
    const button = quantityElements[i];

    button.addEventListener("click", function (event) {
        const amount = event.target.innerText === "+" ? 1 : -1;
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
        const newQuantity = Math.max(0, currentQuantity + amount);
        quantityElement.innerText = newQuantity;
    })
}

// Quantity adding to the cart
let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").innerText);

    if (quantity > 0) {
        document.getElementById("checkout-container").classList.remove("hidden");

        cartCount = cartCount + quantity;
        document.getElementById("cart-count").innerText = cartCount;

        const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
        const selectedColor = selectedColorButton.id.split("-")[0];

        const selectedSizeButton = document.querySelector("button.border-purple-600:not(.w-6)");
        const selectedSize = selectedSizeButton.id.split("-")[1];

        const selectedPrice = selectedSizeButton.innerText.split(" ")[1].split("$")[1];

        cartItems.push({
            image: selectedColor + ".png",
            title: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: quantity * parseInt(selectedPrice)
        });

    } else {
        alert("Invalid Quantity!");
    }
})

document.getElementById("checkout-btn").addEventListener("click", function () {
    const cartModal = document.getElementById("cart-modal");

    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        totalPrice += item.price;

        const row = document.createElement("tr");
        row.classList.add("border-b");
        row.innerHTML = `
        <td class="py-2 px-4">
            <div class="flex items-center space-x-2">
                <img class="h-10 w-10 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
                <span class="font-semibold">${item.title}</span>
            </div>
        </td>
        <td class="py-2 px-4">${item.color}</td>
        <td class="py-2 px-4">${item.size}</td>
        <td class="py-2 px-4">${item.quantity}</td>
        <td class="py-2 px-4">$${item.price}</td>
        `;

        cartContainer.appendChild(row);
    }

    document.getElementById("cart-total").innerText = `$${totalPrice}`;

    cartModal.classList.remove("hidden");
});

document.getElementById("continue-shopping").addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
})

document.getElementById("checkout").addEventListener("click", function () {
    alert("Your order is being processed...");
    window.location.reload();
})