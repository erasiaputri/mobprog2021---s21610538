//Destructuring Lesson

//1. Array
const colors = ["merah","kuning","hijau"];

let satu = colors[0];
let dua = colors[1];
let tiga = colors[2];

let [satu, dua, tiga] = colors;
console.log(satu, dua, tiga);

let[satu, dua] = colors;
console.log(satu, dua);

let[satu, ,tiga] = colors;
console.log(satu, tiga);

let[satu, dua, tiga, empat = "biru"] = colors;
console.log(satu, dua, tiga, empat);

//2. Object
const user = {
    name = 'John',
    gender = 'male',
    age = 33,
};

let name = user.name;
let gender = user.gender;
let age = user.age;

let{name, gender, age} = user;

console.log(name, gender, age);

let{name, gender, age, born = "Manado"} = user;
console.log(name, gender, age, born);

let{name, age} = user;
console.log(name, age);

let{name: nama, age: umur} = user;
console.log(name, umur);

const display = ({name, age}) => {
  console.log(`Nama saya adalah ${name}, Umur saya adalah ${age}`);
}

display(user);
 

let buah = ["mangga", "pisang", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// declaring variables in an array
let namaArray = [element1, element2, element3];

// how to do destructuring in an array
let [variabel1, variabel2, variabel3] = namaArray;

let buah = ["mangga", "pisang", "anggur"];

//3. Array Object

const user = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Bob"},
];

let [user1, user2, user3] = users;
console.log(user1, user2, user3);

let[
  {id: idUser1, name: nameUser1},
  {id: idUser2, name: nameUser2},
  {id: idUser3, name: nameUser3},
] = users;

console.log(idUser1, nameUser1);

// other examples of destructuring array
let [buah1, buah2, buah3] = buah;

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

//use a commas and a space inbetween to skip an element
//just like the example below skips the 2nd and 4th elementmpat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter

let orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama = orang.nama;
  let umur = orang.umur;
  let sudahMenikah = orang.sudahMenikah;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  console.log(sudahMenikah); // Output: false

  let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
  };

//4. Kombinasi dengan Rest Operator

const colors = ["merah", "kuning","hijau","biru"];

let [satu, ...lainnya] = colors;
console.log(satu);
console.log(lainnya);
  