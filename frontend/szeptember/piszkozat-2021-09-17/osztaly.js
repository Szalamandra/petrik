class Allat {}

class Kutya extends Allat {
    constructor(nev) {
        super();
        this.nev = nev;
        this._eletkor = 4;
    }

    ugat() {
        console.log("Vau " + this.nev);
    }

    get eletkor() {
        return this._eletkor;
    }

    set eletkor(ujEletkor) {
        if (ujEletkor >= 0) {
            this._eletkor = ujEletkor;
        } else {
            throw new Error("Eletkor nem lehet negativ");
        }
    }
}

/*function Kutya2(nev) {
    this.nev = nev;
    this.eletkor = 4;
}*/

let bloki = new Kutya("Blöki");
bloki.ugat();
console.log(bloki.eletkor);
bloki.eletkor += 2;
console.log(bloki.eletkor);
console.log(bloki['eletkor']);


const date = new Date("2021-09-17 18:00:00");
console.log(date);

//const elem1 = document.getElementById("bekezdes");

const obj3 = {
    nev: "Blöki",
    eletkor: 4,
};
for (let index in bloki) {
    console.log(index, bloki[index]);
}
