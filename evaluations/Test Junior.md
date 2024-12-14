# Test Junior

## Consignes: 

- Donnez des réponses claires, comme si vous donniez une instruction à l'ordinateur et un enfant
- Dans les exercices où on vous demande d'écrire du code, veuillez donner toujours le code qui permet aussi de tester votre fonction/classe.
- Ne pas utiliser github, stackoverflow, chatgpt/autres IA ou tout autre support de cours de programmation, ce test évalue vos connaissances **actuelles** et non pas votre capacité à chercher.
## Objectifs du test :

Ce test sert à évaluer la connaissance et la mise en pratique de certains concepts, qui sont nécessaires pour être (potentiellement) autonome dans la conception d'une API, App Web/Mobile qui utilise les principes de POO, Clean Architecture et Dependance d'injection. Aussi certains exercices évaluent les capacités de lecture, interprétation du code et détection des failles/bugs.
# Partie 1 : Bases de Programmation

1. Exercice 1

- donnez le résultat des log 1, 2 et 3 expliquez avec une phrase le résultat de l'exécution

```javascript
const usersDebts = [
  { id: '1', value: 3 },
  { id: '2', value: 10 },
  { id: '3', value: 200 },
];

const steps = ['name', 'documents', 'transfer'];

const account = {
  accountNumber: '123XY',
  status: 'OPEN',
  debts: [...usersDebts],
  onboardingSteps: [...steps],
};

const anotherAccount = { ...account };
anotherAccount.debts[0].value = 30;
console.log('log 1:', usersDebts[0].value);
console.log('log 2:', anotherAccount.debts[0].value);
anotherAccount.onboardingSteps.push('adress');
console.log('log 3:', steps[3].toString());
```


2. Exercice 2

> Nous avons comme consigne de créer une lib avec une fonction `additionnerAvecDelai`, cette fonction simule un comportement **asynchrone** et nous devons donner la possibilité à l'utilisateur de notre fonction `additionnerAvecDelai` de **récupérer le résultat de l'addition** une fois que le calcul est terminé sans bloquer l'application entière.

**Créer une fonction asynchrone avec un callback :** Créez une fonction `additionnerAvecDelai(a: number, b: number, callback: (resultat: number) => void)` qui simule une opération asynchrone (par exemple, un délai de 2 secondes) pour additionner deux nombres, puis appelle le `callback` avec le résultat, la `callback`  fait en sorte d'afficher le résultat dans la console.

```js
//completer les trois petits points
additionnerAvecDelai(...) {
	//écrire le code ici...
}

additionnerAvecDelai(...);
console.log("done!")
```


3. Exercice 3 
Maintenant, on veut utiliser une syntaxe qui nous permet d'éviter de déclarer une callback dans les paramètres de la fonction.
veuillez écrire l'équivalent avec une Promise. La promise doit être résolue avec le résultat de l'addition après un délai de 2 secondes. On s'attend aux mêmes logs que l'exercice précédent.

```js
//écrire le code ici...

//additionnerAvecDelai(...)...
//console.log("done!")
```


Example de Résultat attendu dans la console:
``
```bash
start
resultat: 6
done!

```

4. Exercice 4
Si on veut alléger encore plus l'écriture de code ? que faut t'il utiliser comme syntaxe, veuillez écrire l'équivalent de la promise avec la syntaxe qu'il faut. incide: c'est l'évolution des promises

```js
completer ici...
```


5. **Créer une fonction qui divise deux nombres avec gestion des erreurs :**
   - Si le dénominateur est zéro, la fonction doit lancer une exception/erreur avec le message suivant: `Division by zero is not allowed`
   - Nom de la fonction : `divide`
   - Paramètres : deux nombres `a` et `b`
   - Retourne : le résultat de `a / b` ou une erreur si `b === 0`
   - En cas d'erreur de la fonction divide, c'est à dire APRES l'erreur est lancé, on voudrait afficher un message avec un console.error qui affiche le message 

   ```typescript

//completer ici...
//console.log(divide(10, 2))
//console.log(divide(10, 0));
//example resultat attendu [LOG]: 5  [ERR]: "Division by zero is not allowed"
 
   ```

---

## Partie 2 : Programmation orientée objet (POO)

1. Etape 1
   - Propriétés : `name` (chaîne de caractères) et `age` (nombre)
   - Constructeur : initialise les propriétés `name` et `age`
   - Méthode : `greet` qui retourne une chaîne de caractères du type : "Hello, my name is {name} and I am {age} years old."

   ```typescript
	//completer ici...
   console.log(person1.greet()); //"Hello, my name is John and I am 25 years old."
   ```

---

2. Etape 2
   - Créez une classe `Employee` qui hérite de `Person`.
   - Ajoutez une nouvelle propriété `jobTitle` (chaîne de caractères).
   - Modifiez la méthode `greet` pour inclure le titre de poste, avec un message du type : "Hello, my name is {name}, I am {age} years old and I work as a {jobTitle}."
   - Utiliser directement les champs d'un object peut être dangereux pour la maintenant et pour les bugs. on voudrait que la propriété "age" ne change plus jamais une fois qu'on a construit la personne, et aussi que sa lecture se fasse à travers une méthode "getAge"

   ```typescript
   //completer ici...
   console.log(employee1.greet());
   //"Hello, my name is Jane, I am 30 years old and I work as a Software Developer."
   ```

---

## Partie 3 : Programmation orientée objet (POO) 2

### Exercice : Gestion des véhicules

> Vous allez créer un système simple pour gérer différents types de véhicules. Tous les véhicules ont certaines propriétés communes, mais chaque type de véhicule peut aussi avoir des propriétés spécifiques. 

Consigne: On veut avoir des "Vehicule" des "Car" et des "Motorcycle", utilisez seulement des **"interfaces" et "classes"** 🟢

1. **Un  `Vehicle`**  :
   - Propriétés :
     - `make` (la marque du véhicule, chaîne de caractères)
     - `model` (le modèle du véhicule, chaîne de caractères)
     - `year` (l'année de fabrication, nombre)
   - Méthodes :
     - `start()` : une méthode qui retourne une chaîne de caractères indiquant que le véhicule démarre.

   ```typescript
	completer ici...
     ```

2. **Un `Car`** qui est un `Vehicle` :
   - Propriétés supplémentaires :
     - `numberOfDoors` (nombre de portes, nombre)
   - Implémenter la méthode `start()` pour qu'elle retourne : "The car {make} {model} is starting."

   ```typescript
   class Car {
	//completer ici...
   }
   //completer ici...
   console.log(car1.start()); // "The car Toyota Corolla is starting."
   ```

3.  Un `Motorcycle` qui est un ``Vehicule``
   - Propriétés supplémentaires :
     - `hasSidecar` (indique si la moto a un side-car, booléen)
   - Implémenter la méthode `start()` pour qu'elle retourne : "The motorcycle {make} {model} is starting."

   ```typescript
	//completer ici...
   console.log(moto1.start()); // "The motorcycle Harley-Davidson Sportster is starting."
   ```

4.  startVehicule
   - Créez une fonction `startVehicle` qui lui va démarrer les Cars, Motorcycle ou même un Truck si jamais dans un futur on ajoute la gestion des Camions et en utilisant une liste de mélange de [cars, motorcycle] veuillez faire une boucle et appeler la méthode startVehicle pour vérifier qu'elle fonctionne correctement.

   ```typescript
   function startVehicle(...): void {
       ...
   }

	for (... of ...) {
	}
   
   ```

