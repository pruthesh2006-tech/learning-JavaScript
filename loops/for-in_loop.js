// special type of loop which helps to work on objects and arrays

let student = {
    name: "Alex",
    age: 18,
    cgpa: 19.5,
    isPass: true 
};

for(let i in student){
    console.log("i = ", i, "value =", student[i]);
}