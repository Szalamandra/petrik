
document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('main')[0].addEventListener('click', () => {
        console.log("main katt");
    });
    document.getElementsByTagName('article')[0].addEventListener('click', () => {
        console.log("article katt");
    });
    document.getElementsByTagName('h1')[0].addEventListener('click', (e) => {
        e.stopPropagation();
        console.log("h1 katt");
    });
    document.getElementsByTagName('a')[0].addEventListener('click', (e) => {
        // Tetszőleges feltétel, pl. validáció
        if (Math.random() < 0.5) {
            e.preventDefault();
        }
    });
    // "change" event: nincs garancia, hogy minden karakter leütésnél lefut
    // "input" event: minden karakter leütésnél
    document.getElementById("jelszo").addEventListener("input", (e) => {
        if (e.target.value ==="Titkos") {
            for (let elem of document.querySelectorAll("p")) {
                elem.remove();
            }
            const p = document.createElement("p");
            p.innerHTML = "Kitaláltad a jelszót!";
            document.querySelector("article").appendChild(p);
        }
    });
});
