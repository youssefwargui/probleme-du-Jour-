
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18

function date(heure) {
    if (heure < 12) {
        return "matin"
    } else if ( heure >= 18) {
        return "après-midi"
    }
     return "soir"
}
date()



// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon

function x(score) {
    if (score >= 90 ) {
        return "excellent"
    }
    else if (score >= 70){
        return "bon"
    }
    else if (score >= 50){
return "moyen"
    }
    return "faible"
        
}
x()



// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

// **sans utiliser Math.min**

function nombres(nombre1 , nombre2 , nombre3) {
    if (nombre1 < nombre2 && nombre1 < nombre3) {
       return nombre1
    }
    else if (nombre2 < nombre1 && nombre2 < nombre3) {
       return nombre2
    }
    return nombre3
}
nombres()
