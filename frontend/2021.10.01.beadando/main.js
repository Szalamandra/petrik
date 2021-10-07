
let adatTabla = document.getElementById("adatTabla");

let data = {};
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

function adatLeker(url, msg = "", data = {}, fetchOptions) {
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
    })
    .catch(e => {
        console.log(e);
        document.getElementById("hibaUzi").innerHTML = e.message;
        
    }).finally((msg) => {
        console.log(msg);
    });

    
}//!function adatleker

document.addEventListener("DOMContentLoaded", () => {
    let msg = "Minden jól ment, hurrey!";
    let adatok = {};
    
    adatok = adatLeker('./movies.json',msg,data, fetchOptions);
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