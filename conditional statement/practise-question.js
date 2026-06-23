// question 1 
// let num = prompt("enter a number");

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

// question 2
let marks = prompt("enter your marks from (0-100)") ; 
let grade ; 

if(marks >= 80 && marks<=100){
    grade = "A";
} else if(marks >= 70 && marks<=89){
    grade = "B";
} else if(marks >= 60 && marks<=69){
    grade = "C";
} else if(marks >=50 && marks <=59){
    grade = "D";
} else {
    grade = "F";
}

console.log("according to score, grade is =", grade);