//github repo link: https://github.com/ProgrammingHero1/array-looping-tasks

//task-1: Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
for (let i = 0; i < colors.length; i++) {
    rev_colors.unshift(colors[i]);
}
console.log(rev_colors);

//task-2: Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const even_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        even_numbers.push(numbers[i]);
    }
}
console.log(even_numbers);

//task-3: Use a for...of loop to concatenate all the elements of an array into a single string.
var persons = ['Tom', 'Tim', 'Tin', 'Tik']
var concate = "";
for (const person of persons) {
    concate += person;
}
console.log(concate);

//task-4: Reverse the words of a sentence. Only the position of the word will be reversed.
const statement = "I am a hard working person";
const new_statement = statement.split(" ");
const rev_statement = [];
for (let i = 0; i < new_statement.length; i++) {
    rev_statement.unshift(new_statement[i]);
}
const result = rev_statement.join(" ");
console.log(result);