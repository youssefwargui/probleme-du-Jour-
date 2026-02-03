// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.
function removeByIndex(tab , i) {
   
tab.splice(i , 1)
return tab
    
}



// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.

function pick(obj) {
    
    var ob = {}
    for(var key in obj) {
        ob= obj[key]
    }
    return ob
}




//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.
