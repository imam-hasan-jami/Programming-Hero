const person = ["sadi", "akash", "nakib", "rahat", "kamrul"];
console.log(person.sort());

const numbers = [5, 1, 4, 9, 3, 7];
console.log(numbers.sort());

const numbers2 = [5, 1, 14, 29, 3, 7];
//console.log(numbers2.sort());     //will not sort properly, output will be [ 1, 14, 29, 3, 5, 7 ]
console.log(numbers2.sort(function (a, b) { return (a - b) }));     //ascending
console.log(numbers2.sort(function (a, b) { return (b - a) }));     //descending
