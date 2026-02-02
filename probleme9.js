// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.

function pairs(t) {
    var counter = 0
    var i = 0
    while (i < t.length) {
        if (t[i] % 2 === 0) {
            counter++
        }
        i++
    }
    return counter
}


// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.

function inverse(t) {
    var nt = []

    for (var i = t.length - 1; i >= 0; i--) {
        nt.push(t[i])
    }
    return nt
}



// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.

function impairs(t) {
   var nt = [] 
   var i = 0 
    while ( i < t.length) {
       if ( t[i] %2 !== 0 ) {
           nt.push(t[i])
       }
    i++
   }
   return nt
}



// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.

function pos(n) {
    var i = 0
    while (n > i) {
        n[i] > 0
        i++
    }
    return i

}


// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.


