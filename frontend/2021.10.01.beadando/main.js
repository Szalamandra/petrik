


let data = [];
let msg = "Minden jól ment, hurrey!";
let fetchOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data)  ha felküldök adatot (POST)
};
function createCellaTablazatba(tablaSelector, elementTipus, element2, tartalom ) {
    let tabla = adatTabla.querySelector(tablaSelector);
    let sorNev = document.createElement(elementTipus);
    let cellaNev = document.createElement(element2);
    cellaNev.innerHTML = tartalom;
    sorNev.appendChild(cellaNev);
    tabla.appendChild(sorNev);
    sorNev.className = "filmCim";
    return sorNev;

}
function ujCella(tablaSor, szoveg, classNev) {
    let ujElem=document.createElement("td");
    ujElem.innerHTML = szoveg;
    tablaSor.appendChild(ujElem);
    ujElem.className = classNev;
    return ujElem;
}
function eloHoz(selector) {
    let nev = document.querySelector(selector);
    nev.toggleClass("rejtett");

}
function anchorCsomagol(mit, hova) {
     let anchor = document.createElement("a");
    anchor.setAttribute("href", "bogyo");
    anchor.setAttribute("onclick", "return false");
                anchor.appendChild(mit);
                hova.appendChild(anchor);
}
function tablaTorles() {
    for (let elem of document.querySelectorAll("#adatTabla > tbody > tr")) {
        // Töröljük a DOM-ból
        elem.remove();
    }
}
function tablaSzures(szurtTomb) {
    //szurtTomb = this.szurtTomb;
    let szurt = szurtTomb;
    szurt = data.filter(e => e.cast.length > 0);
    
    console.log(szurt.forEach(e => console.log(e.cast)));
    tablaTorles();
    szurt.forEach(element => {
            
        let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
        let ujTd = ujCella(ujSor, element.year, "ev");
        //data.push(element);
        let mufajTd = ujCella(ujSor, element.genres, "mufaj mutasd");
        let szereploTd = ujCella(ujSor, element.cast, "szereplo mutasd");
    });
    return szurt;
}
function gombCsinal(hovaSelector, felirat) {
    let hova = document.querySelector(hovaSelector);
    let gomb=document.createElement("button");
    gomb.innerHTML = felirat;
    gomb.setAttribute("class", "resetGomb");
    hova.appendChild(gomb);
    return gomb;
}

function adatLeker(url, msg = "", data = [], fetchOptions) {
    let response = fetch(url, fetchOptions);
    msg = this.msg;
    data = data;
    response.then((data) => {
        
        
        if (data.statusText = "OK") {
            console.log(data.status);
            console.log(data.statusText);
            console.log(data.type);
            console.log(data.url);
            return data.json();
        } else {
            return Promise.reject(
                new Error("A szerver " + data.status + " hibát adott")
            );
        }
        //ha megjött a json
    }).then(data => {

        //data = JSON.stringify(data);
        this.data = data;
        let tablaFej = document.querySelector("thead>tr");
        let szereplok = document.querySelector("#szereplok");
        let mufajok = document.querySelector("#mufajok");

        data.sort((a, b) => {
            a.year - b.year;
        }).forEach(element => {
            
            let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
            let ujTd = ujCella(ujSor, element.year, "ev");
            //data.push(element);
            let mufajTd = ujCella(ujSor, element.genres, "mufaj rejtett");
            let szereploTd = ujCella(ujSor, element.cast, "szereplo rejtett");
            ujSor.addEventListener("click", (target) => {
                          
                //linkekbe csomagolni a tabla masodik felét
                anchorCsomagol(mufajok, tablaFej);
                anchorCsomagol(szereplok, tablaFej);
                
                /*ezek nem működtek:
                szereplok.addEventListener("click", (e) => {
                    e.preventDefault();
                    itt mert adok neki clicket amit aztan elveszek, nem az anchortagre...?

                });
                szereplok.onclick = function (e) {
                    e.preventDefault;
                            };*/
                
                

                //megjelenítések
                if (szereplok.classList.contains("rejtett")) {
                    szereplok.classList.remove("rejtett");
                    mufajok.classList.remove("rejtett");
                }
                ujSor.children[2].classList.toggle("mutasd");
                ujSor.children[3].classList.toggle("mutasd");
            });

        })  //!forEach
        let szurtTomb = [];
        szereplok.addEventListener("click", () => {
            //tablaSzures();
            //szurtTomb = tablaSzures(szurtTomb);
            szurtTomb = data.filter(e => e.cast.length > 0);
    
            console.log(szurtTomb.forEach(e => console.log(e.cast)));
            tablaTorles();
            szurtTomb.forEach(element => {
            
                let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
                let ujTd = ujCella(ujSor, element.year, "ev");
               
                let mufajTd = ujCella(ujSor, element.genres, "mufaj mutasd");
                let szereploTd = ujCella(ujSor, element.cast, "szereplo mutasd");
            });
            let gombReset = gombCsinal("main", "reset");
            gombReset.addEventListener("click", () => {
                tablaTorles();
                gombReset.remove();
                data.forEach(element => {
            
                let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
                let ujTd = ujCella(ujSor, element.year, "ev");
                //data.push(element);
                let mufajTd = ujCella(ujSor, element.genres, "mufaj mutasd");
                let szereploTd = ujCella(ujSor, element.cast, "szereplo mutasd");
            });
                
            });
            
        });        //!szereplőss szürés
           //mufajos szures
        let szurtTomb2 = [];
        mufajok.addEventListener("click", () => {
            //tablaSzures();
            //szurtTomb = tablaSzures(szurtTomb);
            szurtTomb2 = data.filter(e => e.genres.length > 0);
    
            tablaTorles();
            
            szurtTomb2.forEach(element => {
            
                let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
                let ujTd = ujCella(ujSor, element.year, "ev");
                //data.push(element);
                let mufajTd = ujCella(ujSor, element.genres, "mufaj mutasd");
                let szereploTd = ujCella(ujSor, element.cast, "szereplo mutasd");
            });
            let gombReset = gombCsinal("main", "reset");
            gombReset.addEventListener("click", () => {
                tablaTorles();
                gombReset.remove();
                data.forEach(element => {
            
                    let ujSor = createCellaTablazatba("tBody", "tr", "td", element.title);
                    let ujTd = ujCella(ujSor, element.year, "ev");
                 
                    let mufajTd = ujCella(ujSor, element.genres, "mufaj mutasd");
                    let szereploTd = ujCella(ujSor, element.cast, "szereplo mutasd");
                });
            });
        });  //!mufajosszűrés
    
   
    
       
    console.log(data);
    return data;
}
     
    )  //masodik then vége
        /*.then(data => {
            console.log(data);
        return data;
        })*/
        .catch(e => {
        
        document.getElementById("hibaUzi").innerHTML = e.message;
        
    }).finally((msg) => {
        console.log(msg);
        console.log(data);
       
        
    });

    
}//!function adatleker

function rendezes(data){      
    data.sort((a, b) => {
        a.year - b.year;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    
    msg = "Allways look on the bright side of life!";
    let adatTabla = document.getElementById("adatTabla");
    let betoltGomb = document.getElementById("betolt");
    betoltGomb.addEventListener("click", () => {
     adatLeker("movies.json2", msg, data, fetchOptions);
        //nem értem, hogy a 65. sorban, ha return-om az adatokat, miért nem amaradnak meg? ez már nem a 65. sor:) de azt hiszem a válasz, hogy az arrow function a window-ból veszi a paramétereket, adatokat, illetve a console.log is átformál...
        let adatok = adatLeker("movies.json", msg, data, fetchOptions);
        console.log(adatok);
    });
    
    
    

});  //!domcontentload


