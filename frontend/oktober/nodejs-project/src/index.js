// index.js, ez az alkalmazás belépési pontja

// Egész modul imortálása
import _ from 'lodash';
// A default export importálása, ilyenből modulonként csak egy lehet
import SajatAllat from './Allat.js';
// A nem default exportok importálása
import { duplaz, triplaz } from './fuggvenyek.js';

document.addEventListener("DOMContentLoaded", () => {
    // .eslintrc-ben beállítottuk, hogy ez csak warning legyen, ne error
    // Sárgával kell aláhúznia
    let unused = 3;

    console.log("Hello World NodeJS!");

    let t = [ 1, 4, 5 ];
    for (let elem of t) {
        console.log(elem);
    }
    
    let allat = new SajatAllat("Bodri");
    
    console.log(allat.nev);
    console.log(_.join([1, 2, 3], ','));
    const obj = {
        a: 1,
        t: [2, 3, 4],
    };
    
    // lodash lib. használata
    const obj2 = _.clone(obj); // Shallow copy
    const obj3 = _.cloneDeep(obj); // Deep copy
    obj.a = "szoveg";
    obj.t[2] = 44;
    console.log(obj);
    console.log(obj2);
    console.log(obj3);
    console.log(duplaz(45));
    console.log(triplaz(45));
});

