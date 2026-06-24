// special type of lopp which helps to work on string and arrays, this we don't use for objects

let str = "JavaScript"
let length = 0;
for (let i of str){  // iterator
    console.log("i = ", i);
    length++;
}

console.log("length is =", length);