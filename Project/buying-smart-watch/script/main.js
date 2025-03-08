//Ring Buttons
const ringButtons = document.querySelectorAll(".ring-button");

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
        productImage.src = `../images/${color}.png`;
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

