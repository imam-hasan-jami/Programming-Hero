const country = "I love my country Bangladesh";
let reverse = "";

/* 
    //method-1

    for(const letter of country) {
    reverse = letter + reverse;
}
console.log(reverse);

*/

/*
    //method-2

    for(let i=0; i<country.length; i++) {
        reverse = country[i] + reverse;
    }
console.log(reverse);

*/

/*

    //method-3

    let reversed = country.split("").reverse().join("");
    console.log(reversed);

*/