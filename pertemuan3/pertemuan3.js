
/*
    1. Variable dan tipe data
*/
const firstName = "John"; //unchangeable tipe data used
let age = 20; //changeable tipe data used
age = 21;
const isMarried = true; // Boolean true/false


//Using the typeof will show the data type in the console. - or you can say to know the data type

console.log(typeof firstName); // string is white klo muncuk di console
console.log(typeof age); // integer & Boolean is blue klo muncul di console
console.log(typeof isMarried); //muncul tipe datanya
console.log(age + " " + isMarried);

//Not using the typeof will show the result/output in the console.
console.log(firstName);
console.log(age);
console.log(isMarried);

//We can put this like below to make the console easier to console.log
const info = "My name is" + firstName + ", I'm " + age + "years old." + isMarried;
console.log(typeof info); // this one shows the data type of info
console.log(info); // this one shows the result/output in the console.

/* 
    2. Operator
*/
let bilangan = 10;
console.log(bilangan == "10"); //loose equality
// Doesnt really have to be exactly the same because it can change too.

console.log(bilangan === "10"); //strict equality
// Has to be exactly the same; it is very strict with the conditions using triple equals.

/*
    3. Function
*/

/*
    It is a sub-program or sub-routine that we call into another part of the program
    It's the basic structure of the JavaScript
    Also known as a procedure -> something used to do 1 certain task or count the results of a value.
    To use the function, we gotta create a function before calling it.
*/

// let a = 8;
// let b = 3;

// let LuasA = a*a;
// let LuasB = b*b;

// let total = LuasA + LuasB;
// console.log(total);

// const hasil = penjumlahanDuaBujurSangkar(8,3));
// console.log(hasil);

//or
//const hasil = penjumlahanDuaBujurSangkar(8,3);
//console.log(hasil);

//function declaration
function penjumlahanDuaBujurSangkar (a,b){
    return a*a + b*b;
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));

//new example for addition and multiplication
function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a*b;
}
console.log(tambah(kali(5,2),kali(10,2)));


//function expression
const penjumlahanDuaBujurSangkar = function (a,b){
    return a*a + b*b;
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));



 