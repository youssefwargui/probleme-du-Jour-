

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.

function factorielleN(n) {
    var result = 1
    while (n > 0) {
        result = result * n
        n--
    }
    return result
}


// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.

function afficheMultiplesDe3(n) {
    var result = 1
    while (n > 0 ) {

        result = result * 3
        n++
    }
    return result
}


// 3- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.
