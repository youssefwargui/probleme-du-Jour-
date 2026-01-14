// 1- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function  x(nombre) {
    if (nombre > 0) {
        return "positif"
    } else if (nombre < 0) { 
        return "négatif"
    }
    return "zéro"
}
x()



// 2- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.

function div(nombre) {
    if (nombre % 3 === 0) {
      return   "divisible par 3"
    } else if (nombre % 5 === 0 ) { 
        return "divisible par 5"
    }
    return "autre"
}
div()





// 3- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function grand(max1, max2) {
    if (max1>max2) {
        return max1
    }
    return max2
}
grand()


// 4- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".

function moyen(note) {
    if (note >= 10 ) {
        return "réussi"
    }
         return "échoué"
}
moyen()