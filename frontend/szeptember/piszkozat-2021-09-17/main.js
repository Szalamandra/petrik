
document.addEventListener("DOMContentLoaded", () => {
    let elem = document.getElementById("bekezdes");
    elem.addEventListener("click", (e) => {
        console.log(e);
    });
    document.getElementById("szovegmezo")
        .addEventListener("input", (e) => {
            console.log(e.target.value);
        });



    let i = 5;
    const c = "Hello";
    const char = "c";
    const logikai = true; // false

    const t = [ 1, 3423, 234 ];
    const vegyes = [ 1, "asdf", true ];
    t[1] = 0;
    t.push(-5);
    console.log(t);
    // Ez hibás:
    // t = [ 1 ];

    console.log(5 / 2);

    const obj = {
        nev: "Bela",
        eletkor: 3,
        fajta: "kutya",
    };
    obj.eletkor++;
    console.log(obj.fajta);

    var valtozo2 = 2;
    console.log(valtozo2);

    if (i > 4) {
        let valtozo = 5;
        var valtozo2 = 45;
    } else if (i > 0) {
        // ...
    } else {
        // ...
    }
    //console.log("valtozo:", valtozo);
    console.log("valtozo2:", valtozo2);

    for (let j = 0; j < 10; j++) {}

    for (let elem of t) {
        console.log("T:", elem);
    }
    for (let index in t) {
        console.log(index, t[index]);
    }

    const objSokadik = {
        nev: "nev",
        ido: new Date(),
    };
    /*for (let elem of objSokadik) {
        console.log("T:", elem);
    }*/
    for (let index in objSokadik) {
        console.log(index, objSokadik[index]);
    }

    while (i < 15) {
        i += 2;
    }

    try {

    } catch(ex) {

    } finally {

    }
});

