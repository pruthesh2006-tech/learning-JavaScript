// question 1 -> to print even numbers for 0 to 100

// for(let i=0; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }


// question 2 Guessing game number

let gameNum = 25;
let userNum = prompt("Guess the number for (0-100): ");

while (userNum != gameNum){
    userNum = prompt("you guess the wrong number, Guess again from (0-100): ");
}

console.log("congratulations, you guess the correct number");