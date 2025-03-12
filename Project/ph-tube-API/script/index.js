function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");

    for (let i = 0; i < categories.length; i++) {
        let cat = categories[i];

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
            <button id="" class="btn btn-sm hover:bg-[#FF1F3D]  hover:text-white">
                ${cat.category}
            </button>
        `;
        categoryContainer.append(categoryDiv);
    }
}

loadCategories();