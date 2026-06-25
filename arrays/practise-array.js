// question 1 
// let studentmarks = [85,97,44,37,76,60];

// let sum = 0 ;
// for(let val of studentmarks){
//     sum += val;  
//     average = sum / studentmarks.length;
// }
// console.log(average);


// question 2 
let itemprice = [250,645,300,900,50];

let index = 0;
for (let val of itemprice){
    let offer = val / 10;
    itemprice[index] -= offer;
    console.log(`value after offer = ${itemprice[index]}`);
    index ++;
}
