// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 *
 */

/*
entree : deux chaînes de caractères
sortie : une chaîne contenant les caractères présents dans les deux chaînes 

pseudo code : 
etape 1 : declarer un var de valeur vide pour retourner la chaîne 
etape 2 : creer boucle for pour que l'itteration de demarche de function 
etape 3 : condition pour faire comparaision entre deux chaines 

*/ 


var commonCharacters = function(string1, string2) {
  var result = ""
  for (i = 0 ; i < string1.length ; i++){
    if (string1[i].length === string2[i].length) {
      result += string1[i]
    } 
    return result
  }
};
