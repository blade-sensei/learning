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

- `fruits.length > 10` : ....
- `for (const fruit of fruits) {}`
- `counter++`
- `fruit === "pomme"`
- `combienDePommes()`

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

- donnez la sortie de la ligne `'callback logging: ->`
- quel est la valeur de `  const role = user.role;` dans isAllowedForPrivateSection
- donnez la sortie console de la dernière ligne
- donnez la valeur de `current role`
- donnez la valeur de `verify function, role:`

- Il y a une erreur dans ce code, veuillez l'indiquer et expliquer 

## 3. Operators

```javascript
a = false || (false && true);
b = (true && true) || true && false;
b = 3 > 2 && 2 > 1;
c = 12 < 10 && 12 > 18 || true;
d = false && true || false && true;
```
- donnez les valeurs de chaque expression (a, b, c, d, etc)

```js
let number = 10;
let number2 = 40;
const z = number++;

const y = ++number2;
const w = --number;
```

- donnez les valeurs de z, y et w

## 4. Où est l'erreur ❌

- ce code va crash à un certain moment, trouvez le bout de code qui cause l'erreur, 
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

- Pourquoi commande égale à code A53, menu: kebab, prix: 10
