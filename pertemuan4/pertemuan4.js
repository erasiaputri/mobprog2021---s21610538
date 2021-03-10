//Object  - something with properties and values
//1. Object Literals

const mahasiswa = ["John","Doe", 31, true]; // in an array form
console.log(mahasiswa);
//or you can access in directly from the console in the browser

//Object Using {}
//how to write in object form
const mhs1 = {
    firstName: "John",
    lastName: "Doe",
    age: 31,
    graduated: true,
};
console.log(mhs1); //or directly type in the console to access the value

//Object Using keyword new
const mhs2 = new Object(); //If we use const here, we can't change the variable,
  //                         But we can change the properties within the object disregarding the const
  //                       We can use 'let' too
mhs2.firstName = "Jane";
mhs2.lastName = "Keith";

//How to access the Properties in an Object : 2 ways
//1. Dot Notation
console.log(mhs1.age);

//2. Bracket Notation
console.log(mhs1[age]);
console.log(mhs1[lastName]);

//We can save functions in an Object


const mhs1 = {
    firstName: "Putri",
    lastName: "Kloah",
    age: 21,
    graduated: false,
    address:{                 // We can put an object in an object
        road: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
};

console.log(mhs1.address.road);
console.log(mhs1.IPSemester[2]);

const mhs1 = {
    firstName: "Putri",
    lastName: "Kloah",
    age: 21,
    graduated: false,
    address:{                 // We can put an object in an object
        road: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
        },
    IPSemester: [3.05, 3.25, 3.0, 3.4], 
    hitungIPK:  function(){
        console.log(this.IPSemester);
        },
    };

    // //#changed again#
    // hitungIPK: function() {
    //     let total = 0;
    //     this.IPSemester.forEach(function (el){
    //         total = total + el;

    //     });
    //     return total/4;     
    //     },
        
    // };
    // console.log(mhs1.hitungIPK());

// //#changed again#
// hitungIPK: function(){
//     let total = 0;
//     this.IPSemester.forEach(function (el){
//         total = total + el;
//     });
//     this.IPKumulatif = total/4;
//     },
// };
// //to console it, we call the function first
// mhs1.hitungIPK();
// console.log(mhs1);

// delete mhs1.lastName; // to delete the property
// console.log(mhs1); // the lastName would be deleted

//Array Object
const mahasiswa = [
    {
        nim: "001",
        lastName: "Kloah",
        firstName: "Duta",
    },
    {
        nim: "002",
        lastName: "Kloah",
        firstName: "Putri",
    },
    {
        nim: "003",
        lastName: "Kloah",
        firstName: "Putra",
    },
    {
        nim: "004",
        lastName: "Kloah",
        firstName: "Gadis",
    },
];

mahasiswa.forEach(function (){
    console.log(el);
});