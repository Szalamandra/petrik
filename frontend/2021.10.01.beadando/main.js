


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
                anchor.appendChild(mit);
                hova.appendChild(anchor);
}


function adatLeker(url, msg ="", data = [], fetchOptions) {
    let response = fetch(url, fetchOptions);
    msg = this.msg;
    data = data;
    response.then((data) => {
        //...
        
        if (data.statusText="OK") {
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
        data.sort((a, b) => {
         a.year - b.year;
        }).forEach(element => {
            
            let ujSor=createCellaTablazatba("tBody", "tr", "td", element.title);
            let ujTd = ujCella(ujSor, element.year, "ev");
            //data.push(element);
            let mufajTd = ujCella(ujSor, element.genres, "mufaj rejtett");
            let szereploTd=ujCella(ujSor, element.cast, "szereplo rejtett");
            ujSor.addEventListener("click", (target) => {
                
                let tablaFej = document.querySelector("thead>tr");
                let szereplok = document.querySelector("#szereplok");
                let mufajok = document.querySelector("#mufajok");
                
                //linkekbe csomagolni a tabla masodik felét
                anchorCsomagol(mufajok, tablaFej);
                anchorCsomagol(szereplok, tablaFej);
                

                if (szereplok.classList.contains("rejtett")) {
                    szereplok.classList.remove("rejtett");
                    
                      mufajok.classList.remove("rejtett");
                }
                ujSor.children[2].classList.toggle("mutasd");
                ujSor.children[3].classList.toggle("mutasd");
            });

        })
       
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
    
    
    let adatTabla = document.getElementById("adatTabla");
    let adatok = adatLeker("movies.json",msg,data, fetchOptions);
    //nem értem, hogy a 65. sorban, ha return-om az adatokat, miért nem amaradnak meg?
    console.log(adatok);

    
    
    
    
        /*document.getElementById("kereses").addEventListener("input", (e) => {
            // e.target: a HTML elem, amelyen az esemény keletkezett
            // .value: az input element értéke
            const szoveg = e.target.value;
            if (szoveg.length >= 3) {
                // Min 3 szöveg esetén keressünk
                szures(szoveg);
            } else if (szoveg === "") {
                // Üres szöveg esetén jelenítsük meg a teljes táblázatot
                // (ami megegyezik azzal, hogy az üres stringre szűrűnk)
                szures("");
            }
        });  //input, getelementbyid*/
      
    
});  //!domcontentload


