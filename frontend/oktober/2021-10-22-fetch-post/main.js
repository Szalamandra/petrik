
async function listaz() {
    let response = await fetch('listUsers.php');
    if (!response.ok) {
        throw new Error('Szerver hiba: ' + response.status);
    }
    let userek = await response.json();

    let ulElem = document.getElementById('userek');
    ulElem.innerHTML = '';
    for (let user of userek.users) {
        let liElem = document.createElement('li');
        liElem.innerHTML = user.name + ' (' + user.age + ')';
        ulElem.appendChild(liElem);
    }
}

async function ujUser(nev, eletkor) {
    let jsonObj = {
        name: nev,
        age: eletkor,
    };
    jsonObj.o = jsonObj;
    let response = await fetch('newUser.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObj),
    });
    if (!response.ok) {
        throw new Error('Szerver hiba: ' + response.status);
    }
    //await listaz();
    let ulElem = document.getElementById('userek');
    let liElem = document.createElement('li');
    liElem.innerHTML = nev + ' (' + eletkor + ')';
    ulElem.appendChild(liElem);
}

document.addEventListener('DOMContentLoaded', () => {
    listaz().catch(e => console.error(e));

    document.getElementById("ujusergomb").addEventListener("click", () => {
        let usernev = document.getElementById("usernev").value;
        let eletkor = document.getElementById("eletkor").value;
        ujUser(usernev, eletkor);
    });
});

