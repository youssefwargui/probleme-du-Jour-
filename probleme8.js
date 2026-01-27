// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.

function bln(n) {
    if (n % 2 === 0 ) {
        return true
    }
    return false
}


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for

function inv(ch) {
    result = ""
    for (var i = 0; i <= ch.length-1  ; i++) {
        console.log(i)
       result += i
        
    }
    
}



// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer

function supp(tab) {
    return tab.pop()
}



// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer
function supp(tab) {
    return tab.shift()
}




// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while

function div(nombre) {
    var nombre = 1
    while (nombre <= 50) {
        if (nombre % 3 === 0 && nombre % 5 === 0) {
            return nombre +  " nombre divisible par 3 et 5"
        }
        nombre++
    }
}