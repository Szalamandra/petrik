


let data = [];
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


function adatLeker(url, msg = "", data = [], fetchOptions) {
    let response = fetch(url, fetchOptions);
   
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
        
        data.sort((a, b) => {
         a.year - b.year;
        }).forEach(element => {
            
            let ujSor=createCellaTablazatba("tBody", "tr", "td", element.title);
            let ujTd = document.createElement("td");
            ujTd.innerHTML = element.year;
            ujSor.appendChild(ujTd);
            //createCellaTablazatba("tbody", "tr", "td", element.year);
            
            
            /*let tBody = adatTabla.querySelector("tbody");
            let tr1 = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2= document.createElement("td");
            td1.className = "filmCim";
            td1.innerHTML = element.title;
            td2.className = "filmCim";
            td2.innerHTML = element.title;
            tr1.appendChild(td1);
            tBody.appendChild(tr1);*/
            /*if (element.active) {
                adatTabla.querySelector("tbody").innerHTML += "<td class='filmCim'>" + element.title + "</td>"+"<td>(" + element.year + ")</td>";
            else {
                adatTabla.querySelector("tbody") +=
                    "<div class='inactive'>" + element.title + "</div>";
            }*/
        });
    })  //masodik then vége
    .catch(e => {
        
        document.getElementById("hibaUzi").innerHTML = e.message;
        
    }).finally((msg) => {
        //console.log(msg);
    });

    
}//!function adatleker

function rendezes(data){      
    data.sort((a, b) => {
        a.year - b.year;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    let msg = "Minden jól ment, hurrey!";
    
    let adatTabla = document.getElementById("adatTabla");
    let adatok = adatLeker("movies.json",msg,data, fetchOptions);
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



/*.catch(
        (error) => {
            console.log("sajna baj van, nincsen adat!"+{$error});
        })*/