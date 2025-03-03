// Accessing DOM Elements
document.getElementById("btn-change-text").addEventListener("click", function () {
    let paragraphText = document.getElementById("paragraph-text");
    paragraphText.textContent = "Text Has Been Changed!";
})

//Traversing the DOM
document.getElementById("btn-highlight").addEventListener("click", function () {
    let cityList = document.getElementById("city-list");
    cityList.firstElementChild.classList.add("highlight");
})

// Manipulating DOM Elements
document.getElementById("btn-change-order").addEventListener("click", function () {
    document.getElementById("order").textContent = "Espresso";
})

// Creating and Inserting Elements
document.getElementById("btn-add-item").addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.textContent = "Eggs";
    document.getElementById("shopping-items").appendChild(newLi);
})

// Removing DOM Elements
document.getElementById("btn-remove-task").addEventListener("click", function () {
    document.getElementById("task-list").lastElementChild.remove();
})