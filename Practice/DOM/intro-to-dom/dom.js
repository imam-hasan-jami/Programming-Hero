// const sections = document.querySelectorAll("section");
// for (const section of sections) {
//     section.style.border = "2px solid orange";
//     section.style.marginBottom = "5px";
//     section.style.paddingLeft = "5px";
//     section.style.borderRadius = "8px";
//     section.style.backgroundColor = "pink";
// }

// const sportsContainer = document.getElementById("sports-container");
// sportsContainer.style.background = "lime";



//adding element by Js
//1. where to add
const sportsList = document.getElementById("sports-list");
//2. what to be added
const li = document.createElement("li");
li.innerText = "American Football";
//3. add the child
sportsList.appendChild(li);




//adding a new section
const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "morog polao";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);




//set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Gamcha</li>
</ul>
`;

mainContainer.appendChild(sectionDress);


//now, this styles will apply on all the changes
const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "2px solid orange";
    section.style.marginBottom = "5px";
    section.style.paddingLeft = "5px";
    section.style.borderRadius = "8px";
    section.style.backgroundColor = "pink";
}

const sportsContainer = document.getElementById("sports-container");
sportsContainer.style.background = "lime";