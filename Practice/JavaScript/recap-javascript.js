// for loop
// for(let i=0; i<5; i++) {
//     console.log("the number is " + i);
// }

// while loop
// let i=0;
// while(i<5) {
//     console.log(`the number is ${i}`);
//     i++;
// }

// do while loop
// let i=0;
// do {
//     console.log(`the number is ${i}`);
//     i++;
// } while(i<5);

// // break in loop
// for(let i=0; i<5; i++) {
//     if(i==3) {
//         break;
//     }
//     console.log(`the number is ${i}`);
// }

// // break in switch
// // new Date().getDay() : you get the today's day. Sunday starts from 0
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);

// // labeled break
// loop1: for(let i=1; i<5; i++) {
//     loop2: for(let j=1; j<5; j++) {
//         if(j==3) {
//             break loop1;
//         }
//         console.log(`the number is ${j}`);
//     }
// }

// continue statement: skips the current iteration in a loop
for(let i=0; i<7; i++) {
    if(i==5) {
        continue;
    }
    console.log(`the number is ${i}`);
}

loop1: for(let i=0; i<5; i++) {
    loop2: for(let j=0; j<5; j++) {
        if(j==3) {
            continue loop1;
        }
        console.log(`the number is ${j}`);
    }
}