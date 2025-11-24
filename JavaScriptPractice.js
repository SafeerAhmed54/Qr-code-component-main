let name = "Safeer Ahmad Rana";
let age = 22;
let year = 2025;

console.log(name);
console.log(age);
console.log(year);

// const object
const person = { 
    name: "Safeer Ahmad Rana",
    age: 22
};

person.name = "Zain Munir"; // allowed

// new object using let
let person2 = {
    name: "Danish Rana"
};

// number comparison
let a = 5;
let b = 6;

if(a > b){
    console.log("a is bigger");
}
else if(a < b){
    console.log("b is bigger");
}
else {
    console.log("They are equal");
}

// marks grading
let marks = 86;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

for(let i = 0; i <= 50 ; i++){
    console.log(i);
}

for(let i = 0; i <= 100 ; i++){
    if(i % 2 == 0)
        console.log(i);

}

let hello = "Hello World";

for(let i = 0; i <= hello.lenght ; i++){
    console.log(hello[i]);
}

let myArr = ['apple', 'mango', 'banana'];

for(let x in myArr){
    console.log(x);
}

let obj = {name:'Safeer', age:22}

for(let x in obj){
    console.log(person[x]);
}

let text = " Hello JavaScript ";

text.trim();
text.toUpperCase();
text.slice(6,10);
text.split("");