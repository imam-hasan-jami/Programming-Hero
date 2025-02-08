//js-array-tasks1
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log(fruits[3]);     // the third index will be shown in the console
fruits[2] = "Jambura";      // the second index will be replaced by Jambura
console.log(fruits);        // the whole array will be shown in the console

//js-array-tasks2
let destinations = ["Coxs Bazar", "Sajek", "Rangamati"];
destinations.push("Khagrachaari");      // Khagrachaari will be added to the last index
destinations.push("Nilfamari");         // Nilfamari will be added to the last index
destinations.push("Shundarban");        // Shundarban will be added to the last index
destinations.pop();                     // Shundarban will be removed from the last index
console.log(destinations);

//js-array-task3
let books = ["StoryBook", "AdventureBook", "FictionBook", "BoringBook"];
let check = books.includes("StoryBook");
if (check) {
    console.log("The book is present");
} else {
    console.log("The book is not present");
}

//js-array-task4
let price = 150;
let name = "Jami";
let players = ["Rahim", "Karim", "Jami"];
let check2 = Array.isArray(price);
if (check2) {
    console.log("This is an array");
}
else {
    console.log("This is not an array");
}

//js-array-task5
let depts = ["CSE", "EEE", "BBA"];
let uni = ["DU", "CU", "RU"];
let merge = depts.concat(uni);
console.log(depts);
console.log(uni);
console.log(merge);