// 2. Írj egy másik függvényt, amely paraméterként szintén egy tömböt kap.
// A függvény visszatérési értéke egy Promise.
// A Promise resolved lesz, amennyiben a tömb minden eleme string, és visszatér az ABC szerint rendezett tömbbel.
// Ha nem minden elem string, akkor a Promise rejected lesz, és kiírja a konzolra: 
//      Error: Not all items in the array are strings!
// Ha a sorba rendezés során hiba történik, akkor is rejected lesz a Promise, és a visszatérési érték:
//      Error: Something went wrong with sorting words.

'use strict';

const sortArray = arr => {
    let sortedArr;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const arr2 = arr.filter(item => typeof item === 'string');
                if (arr2.length < arr.length) throw new Error('Error: Not all items in the array are strings!')
            }
            catch (err) {
                reject(err);
            }
            try {
                const huCollator = new Intl.Collator('hu-HU');
                sortedArr = arr.sort(huCollator.compare);
            }
            catch (err) {
                reject('Error: Something went wrong with sorting words.');
            }
            resolve(sortedArr);
        }, 0);
    })
};

sortArray(['é', 'Ü', 'Ő', 'este', 'a', 'á', 'eső', 'öl', 'treff', 'baba', 'tréfa', 'b', '2', 'true', 'AlmA', 'tréning'])
    .then(
        (arr) => console.log(arr),
        (err) => console.error(err)
    );
