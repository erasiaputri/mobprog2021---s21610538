// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
// };

// //Hallo, nama saya John Doe. Umur saya 33 tahun.
// let kalimat =
//   "Hallo, nama saya " +
//   person.firstName +
//   " " +
//   person.lastName +
//   ". Umur saya " +
//   person.age +
//   " tahun";

// let kalimat6 = `Hallo, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`;

// console.log(kalimat);
// console.log(kalimat6);

//Arrow Function

// function sayHello1() {}

// const sayHello2 = function () {};

// const sayHello3 = (param1, param2 = "Adam") => `Hello ${param1} ${param2}`;

// console.log(sayHello3("Stenly", "Doe"));

//Rest Parameter & Spread Operator
// const display = (param1, param2, ...rest) => {
//   console.log(param1, param2, rest);
// };

// display(1, 2, 3, 4, 5, 6);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [8, 9];

// const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr = [...arr1, ...arr2, 7, ...arr3];
const combineArr2 = [...combineArr];

console.log(combineArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};

person = {
  ...person,
  address: "Manado",
  job: "Teacher",
};

console.log(person);


// Var, Let, Const

// var nama = "Putri";
// var nama = "Kloah";

// console.log(nama);
// //All with  {} is equals to a block

// let nama = "Putri";
// let nama = "Kloah";

// console.log(nama);

//Scope dalam Javascript
// 1. Function scope (var)
// 2. Block Scope (let, const)

for(var i = 0;i < 10; i++){         //bersifat local
    console.log(i);
}
console.log(i);

//if another case like this
function tes (){
    for(var i=0;i<10;i++){
        console.log(i);
    }
}
//call the function
tes(); 
//you cant console.log(i);
//it turns out Error


//IIFE
(function tes(){                    //scope let itu adalah block
    for (var i = 0; i < 10; i++){   //this examples turns out to UNCAUGHT REFERENCEERROR
        console.log(i);             //Where the i is not defined
    }                               //How to fix this?
}) ();                              //We use 'let' karena var tidak bisa
console.log(i);

//so the we change it to:
//Use 'let'
(function tes(){                    //Scope lebih luas = global
    for (let i = 0; i < 10; i++){  
        console.log(i);            
    }                              
}) ();                             
console.log(i);

let i;
for (i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);

//Template Literal
const person = {
    firstName: "Putri",
    lastName: "Kloah",
    age: 21,
};

//How we normally join using the "" and  + 
console.log("Hello, I am " + person.firstName + " " + person.lastName + ". I'm " + person.age + "years old.");

//How we apply ES6:
//We use the Backtick `` and ${`for the object`}
console.log(`Hello, I am ${person.firstName} ${person.lastName}. I'm ${person.age} years old.`);

