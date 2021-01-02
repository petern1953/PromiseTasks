// 1. Írj egy olyan függvényt, mely paraméterként kap egy tömböt.
// A függvény visszatérési értéke egy Promise.

// A Promise resolved lesz, amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakítható.
// Ebben az esetben a Promise resolved lesz, és visszaad egy új tömböt, 
// amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
// Ellenkező esetben a Promise rejected lesz, és a visszatérési érték:
//      Error: Not all items in the array are strings!

'use strict';

const arr2Capital = arr => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const capitalizedArr = arr.map(string => string.toUpperCase());
                resolve(capitalizedArr);
            }
            catch (err) {
                reject('Error: Not all items in the array are strings!');
            }
        }, 0);
    })
};

arr2Capital(['a', 'b', 'c2', 'true'])
    .then(
        (arr) => console.log(arr),
        (err) => console.error(err)
    );