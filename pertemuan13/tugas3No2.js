//2. Inheritance

/*
    Inheritance
*/

class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }

    makan(){
        console.log(`${this.nama} sedang makan`)
    }
}

//THe class that inherits
class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }

    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const user = new Pelajar("John", 17, "Unklab")

user.belajar(); //Displays the data of the student