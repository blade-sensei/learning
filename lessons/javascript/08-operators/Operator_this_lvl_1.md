## C'est quoi

- Opérateur qui a comme valeur un object
- Il représente le concept de `moi même` ou `ma propre personne` 
- Un petit example plus parlant: 
	- Si on a plusieurs objets qui veulent représenter une personne, chacune de ces personnes est en quelque sorte unique, et si on demande à une personne de nous donner son "PROPRE NOM" alors elle devra récupérer son nom depuis `moi même`  ce qui donnera `this.name` 
- en Javascript le mot "this" peut avoir plusieurs façon d'être crée, selon **"comment"** on appel la fonction qui utilise le mot "this".. mais ça on le verra plus tard dans les notions plus avancées, pour l'instant restons juste sur la définition de `moi même` 
## A quoi il sert

- C'est un mot qui va nous aider à construire et manipuler plusieurs "object" qui représentent un même concept mais où chaque object est tout de même "unique"
- il sert à appeler des propriétés ou des méthodes qui viennent d'un SEUL et MEME contexte
- en programmation "object" où on va construire des "instances", c'est à dire des petits object à partir d'une "base/model", et chaque object DEVRA avoir son propre "contexte" pour faire la différence entre chaque petit object, une fois qu'on aura réussi à créer un "propre contexte",  le mot `this` -> va représenter ce "propre contexte", ainsi on pourra "accéder à une donnée" ou "modifier une donnée d'un SEUL "context" (ou petit objet)

## Cas d'utilisations

- Avec des objets et le fonctions, dans cette example, le mot this, fais référence à une personne, car le problème c'est que lors qu'on crée plusieurs "personnes" la fonction `printName` doit afficher le nom mais de "la personne" en question, donc son nom `d'elle même  
- d'ailleurs dans d'autres langage le `this`  s'appelle `self`  qui veut aussi dire "moi même"
```js
const person = {
  name: null,
  creerUnePersonne(nameParam) {
    this.name = nameParam;
  },
  afficherNom: function() {
    console.log('my name is: ', this.name)
  }
}

const first = Object.create(person);
first.creerUnePersonne("John");
first.afficherNom();

const second = Object.create(person);
second.creerUnePersonne("Ade");
second.afficherNom();

console.log(first, second)
```

## Référence

https://www.codeheroes.fr/2018/01/10/javascript-le-mot-cle-this/
