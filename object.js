const Student = {
    fullName : "pruthesh",
    age : 20,
    cgpa : 8.8,
    isPass : true,
};

// console.log(Student);

// console.log(Student.age); or

// console.log(Student["age"]); // you need to use quotes when using square brackets

Student["age"] = Student["age"] +1;
console.log(Student["age"]);

console.log(typeof Student);