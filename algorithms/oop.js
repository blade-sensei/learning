//POO Object

//reutilisation du code

//creation d objet plus facil

const pion = new Piece('pion');

const cavalier = new Piece('cavalier');

function Piece(name) {
  this.couleur = 'blanc';
  this.coord = 'A1';
  this.name = name;
  this.getName = function () {
    return this.name.toUpperCase();
  };
  this.changerCouleur = function (couleur) {
    this.couleur = couleur;
  };
  this.bouger = function () {
    return 0;
  };
}

function Cavalier() {
  this.name = 'cavalier';
  Piece.call(this, this.name);
  this.bouger = function () {
    return 3;
  };
}
Cavalier.prototype = Object.create(Piece.prototype);

function Pion() {
  this.name = 'pion';
  Piece.call(this, this.name);
  this.bouger = function () {
    return 1;
  };
}

Pion.prototype = Object.create(Piece.prototype);

pion.changerCouleur('noir');
console.log(pion.getName());
console.log(cavalier.getName());

const cavalier2 = new Cavalier();
const pion2 = new Pion();

//polymorphism
const pieces = [cavalier2, pion2];

for (const piece of pieces) {
  console.log('deplacement', piece.bouger());
}

//le fait de pouvoir utilise le même nom de méthode "bouger" dans la classe de base

//et qu'elle soit "reécrite" dans les autres clases filles, fait qu'on est dans un code polymorphique

//la méthode "bouger" se trnsforme selon les contexte où elle se trouve..
