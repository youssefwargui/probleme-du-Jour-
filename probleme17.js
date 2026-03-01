// Une liste de livres orientée objet !

// Créer une classe ListeDeLivres  
// Créer une autre classe appelée Livre  

// Les listes de livres doivent avoir les propriétés suivantes :
// - Nombre de livres marqués comme lus  
// - Nombre de livres marqués comme non lus  
// - Une référence vers le prochain livre à lire (objet Livre)  
// - Une référence vers le livre en cours de lecture (objet Livre)  
// - Une référence vers le dernier livre lu (objet Livre)  
// - Un tableau contenant tous les livres  

// Chaque Livre doit avoir plusieurs propriétés :
// - Titre  
// - Genre  
// - Auteur  
// - Lu (true ou false)  
// - Date de lecture : peut être vide, sinon doit être un objet JS Date()  

// Chaque ListeDeLivres doit avoir quelques méthodes :

// .ajouter(livre)  
// → doit ajouter un livre à la liste des livres.

// .terminerLivreCourant()  
// → doit marquer le livre en cours de lecture comme "lu"  
// → lui donner une date de lecture avec new Date(Date.now())  
// → changer le dernier livre lu pour être le livre qui vient d’être terminé  
// → changer le livre en cours pour être le prochain livre à lire  
// → changer la propriété "prochain livre à lire" pour être le premier livre non lu trouvé dans la liste des livres  


function ListeDeLivres() {
    var Livres = {}

       Livres.livresLus = 0
       Livres.livresNonLus = 0
       Livres.prochainLivreALire = {}
       Livres.enCoursDeLecture = {}
       Livres.dernierLivreLu = {}
       Livres.contenantLivre = []
       Livres.Livre = Livre
       Livres.ajouter = ajouter
       Livres.terminerLivreCourant = terminerLivreCourant

      return Livres
    }

    var  Livre = function(Titre,Genre,Auteur) {
        return {
            Titre : Titre,
            Genre : Genre , 
            Auteur : Auteur ,
            Lu : true,
            DateDeLecture : null
        }
}  

var ajouter = function (livre) {
     this.contenantLivre.push(livre)
            return livre
}

var terminerLivreCourant = function () {
    if (this.Lu === true){
    return  "lu"
    }

   this.Lu = new Date(Date.now()).toString()
   this.dernierLivreLu = this.enCoursDeLecture
   this.enCoursDeLecture = this.prochainLivreALire
}