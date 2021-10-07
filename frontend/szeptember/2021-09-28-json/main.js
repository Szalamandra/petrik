let adathalmaz = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('api.php').then((result) => {
        console.log('Sikerült a lekérdezés');
        return result.json();
    }).then((data) => {
        console.log(data);
        console.log(data.items[3]);
        adathalmaz = data.items;
    });
});

