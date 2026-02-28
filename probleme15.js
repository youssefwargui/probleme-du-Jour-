
// J’ai un seau de paresseux. Chaque paresseux est spécial et possède un nom long.
// Ci-dessous se trouve un tableau appelé seauDeParesseux, contenant toutes les informations sur mes paresseux.
var seauDeParesseux = [
  { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 },
  { nom: { prenom: "Lent", nomDeFamille: "Citrouille" }, age: 3 },
  { nom: { prenom: "Balle", deuxiemePrenom: "Blindé", nomDeFamille: "Paresseux" }, age: 4 },
  { nom: { prenom: "Bisou", deuxiemePrenom: "Bisou", nomDeFamille: "Chignon" }, age: 5 },
  { nom: { prenom: "Jungle", nomDeFamille: "Duveteux" }, age: 2 },
];

// a- écrire une fonction fullName qui prend en entrée un index et un tableau
// et retourne le nom complet sous forme de chaîne de caractères
// nomComplet(seauDeParesseux,0) //==> "Poilu Dangereux Assassin"
function nomComplet(tableau, position) {
  
  return tableau[position].nom.prenom + tableau[position].nom.deuxiemePrenom + tableau[position].nom.nomDeFamille

}






// b- écrire une fonction qui prend un tableau d’objets (comme seauDeParesseux)
// et retourne le paresseux (doit retourner un objet)
// qui possède le nom le plus long (prénom, deuxième prénom & nom).
// Remarque : il peut être utile d’utiliser la fonction nomComplet,
// plusLongNom(seauDeParesseux);
// => { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 }
function plusLongNom(seauDeParesseux) {
  var max = seauDeParesseux[0]
  for (var i = 1 ; i < seauDeParesseux.length ; i++){
     if(seauDeParesseux[i] > max){
      seauDeParesseux[i]
     }
     return max
  }
}

// - créer un modèle de données pour représenter vos camarades de classe
// - réfléchir aux différents attributs de vos camarades : qu’ont-ils tous en commun ?
// - créer une fonction factory (fonction d'usine).
// - créer un tableau pour contenir les camarades que vous avez créés.
// - écrire une fonction appelée afficherAmi qui prend un camarade en argument
//   et retourne les informations importantes de manière lisible.
// - écrire une fonction appelée ajouterAmi qui prend un camarade en argument
//   et l’ajoute au tableau camarades.
// - calculer le nombre d’amis masculins que contient votre classe
//   en écrivant une fonction appelée nombredeMale.
// - écrire une fonction recherche qui, étant donné une requête (query)
//   et un tableau de camarades ,
//   cherche dans le tableau des camarades un camarade « correspondant ».

var classe = [
  {
  id : 1 , 
  nom : "youssef" ,
  age : 26 , 
  color : "rouge"
}
,
{
  id : 2 ,
  nom : "rayen" ,
  age : 25 ,
  color : "bleu"
}
]

function creerclasse(id,nom,age,color){
  return{
    id : id ,
    nom : nom ,
    age : age ,
    color : color
  }
}
var cam1 = creerclasse(1,"youssef",26,"rouge")
var cam2 = creerclasse(2,"rayen" , 25 , "bleu")
var cam3 = creerclasse(3,"imen",27,"rose")
function afficherAmi(classe) {
  return classe.id + " " + classe.nom + " " + classe.age + " " + classe.color
}

function ajouterAmi(classe){
 classe.push(cam3)
 return classe
}

function recherche(classe,recherche) {
  for(var i = 0 ; i < classe.length ; i++){
    if(classe.id.includes(recherche) ||
    classe.nom.includes(recherche)){
      return classe
  }
    }
}