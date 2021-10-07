
function lekerdezes() {
    // Aszinkron, nem blokkol:
    let fetchEredmeny = fetch("adat.json").then((data) => {
        if (data.ok) {
            return data.json();
        } else {
            return Promise.reject(
                new Error("A szerver " + data.status + " hibát adott")
            );
        }
    }).then(adat => {
        let eredmeny = document.getElementById("eredmeny");
        adat.sort((a, b) => {
            // return a.id - b.id
            if (a.id > b.id) {
                return 1;
            } else if (a.id < b.id) {
                return -1;
            } else {
                return 0;
            }
        }).forEach(element => {
            if (element.active) {
                eredmeny.innerHTML += "<div>" + element.nev + "</div>";
            } else {
                eredmeny.innerHTML +=
                    "<div class='inactive'>" + element.nev + "</div>";
            }
        });
    }).catch(e => {
        console.log(e);
        document.getElementById("hiba").innerHTML = e.message;
        //setTimeout(lekerdezes, 5000);
    }).finally(() => {});

    // Szinkron:
    try {
        throw new Error("Hibaüzenet");
    } catch (e) {

    } finally {

    }
}

document.addEventListener("DOMContentLoaded", () => {
    lekerdezes();
});

