const pierre = {
  tel: "012434523",
  addresse: {
    rue: "Parmentier",
    numero: 12
  },
  prenom: "Pierre",
 }
 
 pierre.addresse.ville = "Saint Denis";
 const copineDePierre = pierre;
 copineDePierre.prenom = "Margot";
 copineDePierre.tel = "062341254";
 copineDePierre.addresse.ville = "Paris"
 
 console.log(pierre.addresse.ville);
 console.log(copineDePierre.addresse.ville);
 console.log(pierre.tel);
 console.log(copineDePierre.tel);

function rupture(pierre) {
  pierre.addresse = {
    rue: "Ailleurs",
    numero: 0,
    ville: "Loin"
  }
  return pierre;
}

const newPierre = rupture(pierre);
console.log('ancien pierre', pierre.addresse);
console.log('new pierre seul two', newPierre.addresse);
console.log('ex copine', copineDePierre.addresse);