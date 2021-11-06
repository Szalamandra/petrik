# NodeJS mintaprojekt

NodeJS-hez (és általánosságban is) a legfrissebb LTS verziót használjuk, ha nincs egyéb kifejezett indokunk.

## Projekt tipikus felépítése

Egy új projektet tipikusan az alábbi fájlokkal, mappákkal szoktuk indítani.

**package.json** - a NodeJS projekt projektfájlja.

A `"type": "module"` tulajdonság feltétlen szükséges, hogy az import utasítások helyesen működjenek. Itt specifikáljuk még a projekt függőségeit is.

**package-lock.json** - a ténylegesen használt függőségek listája. A package.json-ban meg lehet adni, hogy bármely "2.0"-ás függőség megfelel, a lock fájl tartalmazza, hogy ténylegesen a "2.11.2"-t használjuk, ezzel teszteltük.

**src/** - a forrásfájlokat (JS, SCSS) fájlokat tartalmazó mappa.

**dist/** - a kimenetet tartalmazó mappa. Nem tesszük verziókezelés alá.

**node_modules/** - a projekthez telepített függőségek. Nem tesszük verziókezelés alá.

**.editorconfig** - fejlesztői környezet szövegszerkesztőjének a beállítasai (tab/space, újsor karakter stb.). Figyeljünk rá, hogy a megfelelő plugin-ek is telepítve legyenek! [Dokumentáció itt.](https://editorconfig.org/) Nem csak NodeJS-ben, bármilyen projektben használható!

**.eslintrc** - Az ESLint JavaScript hibaellenőrző szabályai: itt lehet megadni, mely hibák számítsanak tényleges hibának, melyek csak figyelmeztetésnek, és melyek miatt ne szóljon egyáltalán. [Dokumentáció itt.](https://eslint.org/docs/rules/)

## Konzolos JS alkalmazás futtatása

JS script közvetlen futtatása:

`node scriptname.js`

node_modules mappába telepített alkalmazás futtatása:

`npx module`

npx = Node Package eXecute

Pl.:

* `npx webpack`
* `npx sass --style=compressed src/main.scss dist/main.css`

npx segítségével nem telepített csomagokat is lehet futtatni! Futatás előtt letölti, de nem fogja elmenteni a node_modules-ba ill. a packe.json-ba.

## Projekt függőségek

Erre az eszközünk az npm: Node Package Manager

`npm install`

Telepíti az összes függőséget. Ha létezik `package-lock.json`, akkor az alapján. Ha nem, akkor a `package.json`-t veszi alapul, és utána létrehozza a `package-lock.json`-t a ténylegesen telepített csomagok alapján.

`npm install lodash`

Telepíti a "lodash" csomagot, és felvezeti a package.json fájlba.

`npm install sass webpack webpack-cli eslint --save-dev`

Telepíti a jelölt három csomagot, azonban fejlesztői függőségként menti el. Ezek általában a build-elést, tesztelést stb. elősegítő modulok. Amikor `npm install`-lal telepítünk egy modult, akkor annak a hagyományos függőségei is települnek, azonban a "dev" függőségei nem! A package.json-ban is külön szekcióba kerülnek.

* [Az összes npm utasítás](https://docs.npmjs.com/cli/commands/npm)
* [Az npm csomagokat tartalmazó központi repó](https://www.npmjs.com/)

## A projekt hibaellenőrzése

Ha minden plugin telepítve van, akkor már gépeléskor is jelzi a fejlesztői környezetünk a hibákat.

Az `npx eslint src/` utasítással azonban kézzel is lefuttathatjuk az egész projektre.

## Kód fordítása

### JavaScript

Alapbeállításokkal fordítás:

`npx webpack`

A fordítandó fájl az scr/index.js (ill. az importált függőségei). A kimenet a dist/ mappába kerül.

`npx webpack --watch`

A kezdeti fordítás után nem áll le, hanem figyeli fájlok módosításait, és újrafordít. Fejlesztés közben érdemes használni!

### SASS

`npx sass --style=compressed src/main.scss dist/main.css`
 (npx sass --style=compressed src/scss/style.scss dist/main.css)
SCSS fájl lefordítása CSS fájllá.

`npx sass --watch src/main.scss dist/main.css`
(`npx sass --watch scss/style.scss dist/main.css`
)

Figyeli a fájlok módosításait, újrafordít ha kell.

A fenti scripteket érdemes batch/shell script-ekké összefogni. A későbbiekben ezeket majd package.json-ből részletesebben konfigurálni fogjuk, illetve mindet webpack segítségével fogjuk megoldani.

A "--watch" szervereket szokásosan CTRL+C -vel lehet leállítani.
