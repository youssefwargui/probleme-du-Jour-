/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
;

/** 
 * entrée tableau
 * sortie returne nombre ou null s'il n'y a aucun élément avec un nombre pair d'occurrences
 * 
 * etape 1 : declarer un tableau
 * etape 2 : utiliser le boucle for pour le tableau commencer a tester 
 * etape 3 : utiliser si pour condition est ce qu'il returne nombre ou null
 * etape 4 : returne le tableau  
 * */ 

var evenOccurrence = function(arr) {
  var tab  = []
  for (i = 0 ; i < arr.length ; i++){
  
  if (tab[arr[i]] % 2 === 0 ) {
    return arr[i]
  }
}
return null
}