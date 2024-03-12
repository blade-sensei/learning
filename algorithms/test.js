function salleClass(nom, etage, nomBatiment) {
  //attributs 
   this.nom = nom; 
   this.etage = etage;
   this.nomBatiment = nomBatiment;

   this.reserverSalle = function () {
    this.reserve = true;
   }
 }
 const salle = new salleClass('Molière', 3, 'A'); //new est un operator pour instancier 

salle.reserverSalle();

console.log(salle);