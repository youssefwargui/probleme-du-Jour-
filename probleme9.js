// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.

function pairs(n) {

    var i = 0
    while (i < n) {
        if (n[i] % 2 === 0) {
            return n[i] + " est pair"
        }
        i++
    }
    return n
}


// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.

function OI(n) {
    var result = n
    while (n > 0) {
        result += n.length-1
    }
return result
}


// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.

function impairs(nombre) {
  var  i = 0
  var t = nombre
while (i < nombre) {
    t[i] % 2 !== 0
    i++
}
return t
}



// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.

function pos(n) {
    var i = 0 
    while (n > i ) {
        n[i] > 0 
        i++
    }
    return i

}


// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.


