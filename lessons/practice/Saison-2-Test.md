## 1. Vocabulaire

En utilisant les mots

- expression
- statement
- "expression-statement"

Veuillez indiquer pour chaque tiret le type d'instruction dont il s'agit

```javascript
function combienDePommes(fruits) {
  const counter = 0;
  if (fruits.length > 10) {
    for (const fruit of fruits) {
      if (fruit === 'pomme') {
        counter++;
      }
      console.log(`J'aime ce fruit: ${fruit}`);
    }
  }
  return response;
}

combienDePommes();
```

- `fruits.length > 10` : expression
- `for (const fruit of fruits) {}` : statement
- `counter++` : expression
- `fruit === "pomme"` : expression
- `combienDePommes()` : statement

## 2. Scopes

1.  Partie 1

```js
const user = {
  role: 'superadmin',
};

function main() {
  const roles = ['admin', 'superadmin'];

  const role = 'client';

  isAllowed = isAllowedForPrivateSection(user, roles, (role) => {
    console.log('callback logging: -> ', role);
  });

  console.log('current role: ', role);
}

function isAllowedForPrivateSection(user, roles, callback) {
  const role = user.role;
  console.log('verify function, role:', role);
  callback(role);
  return roles.includes(role);
}

main();

console.log('final', role);
```

- donnez la sortie de la ligne `'callback logging: ->` : client
- quel est la valeur de `  const role = user.role;` dans isAllowedForPrivateSection : superadmin
- donnez la sortie console de la dernière ligne : superadmin
- donnez la valeur de `current role` : client
- donnez la valeur de `verify function, role:` : superadmin
- Je m'attend à avoir `callback logging: -> client` c'est normal ? Tu peux expliquer ta réponse ?
- Il y a une erreur dans ce code, veuillez l'indiquer et expliquer : il faut mettre isAllowed dans une const pour que la valoir ne soit pas changeable

## 3. Operators

```javascript
a = false || (false && true);
a = false || false
a = true

b = (false && true) || (true && false);
b = false || false
b = false

b = 3 > 2 && 2 > 1;
b = true && true
b = true

c = (12 < 10 && 12 > 18) || true;
c = (false && false ) || true
c = false || true
c = true

d = false && (true || false) > 18 && true;
d = false && true > 18 && true
d = false && false && true
d = false && true
d = false 
```

- normalement je m'attendais à ce que c = false, veuillez m'expliquer pourquoi je n'arrive pas à avoir ce résultat : il faut d'abord résoudre le () avant le ||

```js
let number = 10;
let number2 = 40;
const z = number++; 
const y = ++number2; 
const w = --number;
```

- donnez les valeurs de z, y et w
z : 10
y : 41
w : 9

## 4. Où est l'erreur ❌

- ce code va crash à un certain moment, trouvez le bout de code qui cause l'erreur, : l.143, copyStep contient que 3 éléments
- veuillez décrire ce qu'il se passe dans le code qui fait qu'on arrive à ce résultat

```javascript
const originalDebts = [
  { id: '1', value: 3 },
  { id: '2', value: 10 },
  { id: '3', value: 200 },
];

const copySteps = ['name', 'documents', 'transfer'];

const account = {
  accountNumber: '123XY',
  status: 'OPEN',
  debts: [...originalDebts],
  onboardingSteps: [...copySteps],
};

const copy = { ...account };
copy.debts[0].value = 30;
console.log('original 1:', originalDebts[0].value);
console.log('copy 1:', copy.debts[0].value);
account.onboardingSteps.push('adress');
console.log('adress step:', copySteps[3].toString());
```

2.  Classes

```js
function salleClass(nom, etage, nomBatiment) {
 //attributs 
  const college = 'Jean Phillippe Rameau'
  this.nom = nom; 
  this.etage = etage;
  this.nomBatiment = nomBatiment;
  this.renommer = function (nom) {
   const changerNom = this.nom;
   nom = changerNom
  }
}

const salle = new salleClass('Molière', 3, 'A'); 
salle.renommer("SalleB");

- on n'utilise pas changerNom, peut etre qu'il fait enlever la foction renommer

```
## 5. Why ?

```js
const commande = {
  code: 'A53',
  menu: 'kebab',
  prix: 10,
};

function livrer(commande) {
  commande.status = 'LIVRAISON_EN°COURS';
  console.log(`status de livraison: ${commande.code}: ${commande.status}`);
}

livrer(commande);
console.log('commande final', commande);
```

- Pourquoi console "commande final" affiche commande égale à = { code A53, menu: kebab, prix: 10 }
Le console.log final affiche : commande final
(4) {code: "A53", menu: "kebab", prix: 10, status: "LIVRAISON_EN°COURS"} car on n'a pas fait de copie de commande, donc lorsqu'on rajoute le statut, il modifie l'objet initial

