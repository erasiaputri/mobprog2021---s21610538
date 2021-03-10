//1. Class


//a. Buatlah sebuah class bernama Orang
 class Orang {

//b. Buatlah constructor yang memiliki parameter berupa properti yaitu nama dan umur. 
    //Di dalam constructor, assign parameter nama ke dalam variabel nama dengan keyword this di depan variabelnya. 
    //Lalu assign parameter umur ke dalam variabel umur dengan keyword this di depan variabelnya.
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

//c. Buatlah method bernama bekerja di luar blok kode constructor 
//yang mengembalikan data string `${this.nama} sedang bekerja seperti biasa`

    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
}


//d. Di luar blok kode class, buatlah sebuah objek bernama user1 sebagai instance dari class Orang. 
//Isi argumen parameter nama dan umur,sesuai dengan nama dan umur anda.
const user1 = new Orang("Putri", 21);

//e. Lakukan console.log() pada method bekerja() melalui objek user1 yang telah dibuat sebelumnya. 
//Cek pada tab Console untuk melihat data.
user1.bekerja();
