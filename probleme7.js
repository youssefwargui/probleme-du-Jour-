
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.

function puissanceQuiAffiche(base , puissance) {
    var  result = 1 
    for (var i = 1; i <= puissance ; i++) {
        result *= base 
        console.log(result)
    }
}



// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.

function afficheDiviseurs(n) {
    
    for (var i = 1; i <= n ; i++) {
        if (n % i === 0) {
            console.log(i)
           }
    }
}



// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.

function afficheNombresImpaire(n) {
    
    for (var i = 0; i < n; i++) {
           if (i % 2 !== 0) {
            console.log(i)
           }
        }
    }




// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.

function afficheMotInverse(chaîne) {
    var result = ""
    for (var i = chaîne.length-1; i >= 0 ; i--) {
        result += i
        console.log(chaîne[i])
        
    }
}
