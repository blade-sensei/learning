## 1. Vocabulaire

1. En utilisant les mots

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

- `fruits.length > 10`  -> expression
- `for (const fruit of fruits) {}`  -> statement
- `counter++`  -> expression-statement (ça modifie le counter ET ça retourne une valeur donc expression)
- `fruit === "pomme"` -> expression
- `combienDePommes()` -> expression- statement

2. Dans la programmation object
- C'est quoi une class ? à quoi elle sert ? -> c'est un modèle qui va représenter un concept , la classe possède des attributs et des méthodes
- une instance ? -> c'est un objet crée à partir du modèle (la class)
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

- donnez la sortie de la ligne `'callback logging: ->` superadmin
- quel est la valeur de `  const role = user.role;` dans isAllowedForPrivateSection -> superadmin
- donnez la sortie console de la dernière ligne -> undefined
- donnez la valeur de `current role` -> client
- donnez la valeur de `verify function, role:` -> superadmin

- Je m'attend à avoir `callback logging: -> client` c'est normal ? Tu peux expliquer ta réponse ? -> va leur de role vient du paramètre de la callback, cette valeur est injecté par la ligne callback(role) qui utilise user.role
- Il y a une erreur dans ce code, veuillez l'indiquer et expliquer  -> Erreur dans la derrnière ligne, role n'existe pas dans ce scope

## 3. Operators

```javascript
a = false || (false && true); -> FALSE
b = (true && true) || true && false; -> TRUE
b = 3 > 2 && 2 > 1; -> TRUE
c = 12 < 10 && 12 > 18 || true; -> TRUE
d = false && true || false && true; -> FALSE
```
- donnez les valeurs de chaque expression (a, b, c, d, etc)

```js
let number = 10;
let number2 = 40;
const z = number++; 

//correction
z = 10
number = 11;

const y = ++number2; 
//correction
y =41
number2 = 41;
const w = --number;

//correction
w = 10 //car number précédent = 11;
number = 10

```

- donnez les valeurs de z, y et w
	- 10
	- 41
	- 10

## 4. Où est l'erreur ❌

```javascript
const originalDebts = [
"string", "AZB",
  { id: '1', value: 3 },
  { id: '2', value: 10 },
  { id: '3', value: 200 },
];

const steps = ['name', 'documents', 'transfer'];

const account = {
  accountNumber: '123XY',
  status: 'OPEN',
  debts: [...originalDebts],
  onboardingSteps: [...steps],
};

const copy = { ...account };

copy.debts[0] = "wsh";
copy.debts[2].value = 30;
console.log('original 1:', originalDebts[0].value);
console.log('copy 1:', copy.debts[0].value);
account.onboardingSteps.push('adress');
console.log('adress step:', steps[3].toString());
```

- description d'erreur? -> step[3] donnera un undefined donc toString() fera crash l'app
- veuillez décrire ce qu'il se passe dans le code qui fait qu'on arrive à ce résultat


```

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
```

- quelle est la valeur de commande dans le scope global ? Pourquoi cette valeur ? -> la commande aura un nouvelle prop qui sera le status