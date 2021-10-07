/**
 * Bemeneti adatok
 */
const adathalmaz = [
    "Die Hard 4",
    "Star Wars 9   ",
    "Lord of the Rings 3",
    "Lord of the flies",
	"Lego Movie",
	"Spirited Away",
	"Batman Begins",
];

/**
 * Az adatok közül kiválogatja azokat, amelyek tartalmazzák a paraméterül
 * kapott szöveget (kis-nagybetűt nem veszi figyelembe).
 * Az eredménnyel kitölti a táblázatot, a táblázat aktuális sorait törli.
 * 
 * @param {string} szoveg Szűres ez a szöveg szerint
 */
function szures(szoveg) {
    // Keressük ki a táblázat minden nem fejléc sorát
    for (let elem of document.querySelectorAll("#tablazat > tbody > tr")) {
        // Töröljük a DOM-ból
        elem.remove();
    }

    adathalmaz
        // Azok az elemek, amelyek megfelelnek a szűrési feltételnek
        .filter(e => e.toLocaleLowerCase().includes(szoveg.toLocaleLowerCase()))
        // ABC sorrendben
        .sort((a, b) => a.localeCompare(b))
        // Az elemekre végezzük el az alábbiakat:
        .forEach(e => {
            // Új sor
            let tr = document.createElement("tr");
            // Új cella
            let td1 = document.createElement("td");
            if (e.toLocaleLowerCase().localeCompare(szoveg.toLocaleLowerCase()) === 0) {
                // Ha a keresési szöveg a teljes, akkor a cella legyen félkövér
                td1.innerHTML =  "<b>" + e + "</b>";
                // Alt. megoldás
                td1.classList.add("egyezo");
            } else {
                // Különben csak szöveg
                td1.innerHTML = e;
            }
            // Cella -> sor
            tr.appendChild(td1);

            // 2. cella
            let td2 = document.createElement("td");
            let button = document.createElement("button");
            button.innerHTML = "Törlés";
            button.addEventListener("click", clickEvent => {
                // A gombra kattintára töröljük az adott elemet:
                // Az adott elem az "e" változóban van, keressük ki az indexét
                let i = adathalmaz.indexOf(e);
                // Töröljük az adott indexű elemet
                adathalmaz.splice(i, 1);
                // Töltsük újra a táblázatot
                szures(szoveg);
            });
            // Gomb -> cella
            td2.appendChild(button);
            // Cella -> sor
            tr.append(td2);

            // Sor -> táblázat
            document.querySelector("#tablazat > tbody").appendChild(tr);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    // Input esemény
    document.getElementById("kereses").addEventListener("input", (e) => {
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
    });
});

