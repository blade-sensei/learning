
## Exercice 1 : Callback simple

Écrire une fonction `addition(a, b, callback)` qui prend deux nombres et une fonction de callback. La fonction callback doit être exécutée avec la somme des deux nombres. Exemple :

  
```javascript
function addition(a, b, callback) {

// Implémentez la fonction qui ajoute a et b, puis appelle le callback avec le résultat
}
```

  

## Exercice 2 : Callback asynchrone avec setTimeout

Créez une fonction `delayedMessage(message, delay, callback)` qui affiche un message après un délai donné, puis appelle une fonction de callback. Exemple :

  

```javascript

function delayedMessage(message, delay, callback) {

// Implémentez un `setTimeout` pour afficher le message après le délai
}

```

  

## Exercice 3 : Utilisation de plusieurs callbacks avec setTimeout

Écrire une fonction `greetUser(name, callback1, callback2)` qui :

1. Attend 2 secondes avant de saluer l'utilisateur.

2. Appelle un premier callback qui affiche "Hello, [name]!".

3. Puis attend encore 1 seconde et appelle un second callback avec "How are you, [name]?".

  

```javascript

function greetUser(name, callback1, callback2) {

// Implémentez deux délais pour appeler les callbacks
}

```

  

## Exercice 4 : Enchaînement de plusieurs callbacks

Créez une fonction `task1(callback)` qui renvoie un message après 1 seconde. Ensuite, créez une fonction `task2(callback)` qui renvoie un autre message après 1 seconde. Enchaînez ces deux fonctions à l'aide de callbacks pour qu'elles s'exécutent l'une après l'autre.

  

```javascript

function task1(callback) {

// Implémentez un délai pour afficher un message

}

  

function task2(callback) {

// Implémentez un délai pour afficher un autre message

}

```

  

## Exercice 5 : Gestion des erreurs avec Callback

Créez une fonction `divide(a, b, callback)` qui divise `a` par `b`. Si `b` est égal à 0, la fonction appelle le callback avec une erreur. Sinon, elle appelle le callback avec le résultat de la division.

  

```javascript

function divide(a, b, callback) {

// Si b est 0, appelle le callback avec une erreur

// Sinon, appelle le callback avec le résultat

}


divide(10, 2, (error, result) => {

	if (error) {

		console.error(error); // "Erreur: division par zéro"

	} else {

		console.log(result); // "5"

	}

});

  

divide(10, 0, (error, result) => {

	if (error) {
		console.error(error); // "Erreur: division par zéro"
	} else {
		console.log(result);
	}

});

```

  

## Exercice 6 : Callback avec plusieurs tâches

Écrire une fonction `asyncTasks(callback)` qui doit effectuer 3 tâches asynchrones :

1. Attendre 1 seconde et afficher "Task 1 done".

2. Attendre 2 secondes et afficher "Task 2 done".

3. Attendre 1 seconde et afficher "Task 3 done".

Après avoir effectué ces tâches, le callback doit être appelé pour indiquer que toutes les tâches sont terminées.

  

```javascript

function asyncTasks(callback) {

// Implémentez l'enchaînement des tâches asynchrones ici

}

asyncTasks(() => {

console.log("Toutes les tâches sont terminées");

});

```

  

## Exercice 7 : Promises et Callbacks

Créez une fonction `getDataFromServer()` qui simule la récupération de données d'un serveur après 2 secondes. Utilisez une Promise pour simuler cette opération asynchrone. Ensuite, utilisez un callback pour manipuler les données une fois la Promise résolue.

  

```javascript

function getDataFromServer() {}
```

  

## Exercice 8 : Simulation d'un setInterval avec Callback

Créez une fonction `startInterval(callback, delay)` qui appelle un callback toutes les `delay` millisecondes. Le callback doit afficher un message à chaque appel. La fonction doit s'arrêter après 5 appels (utilisez un compteur et un `clearInterval`).


```javascript

function startInterval(callback, delay) {

	// Implémentez un intervalle pour appeler le callback
}

  

startInterval(() => {
	console.log("Message toutes les secondes");
}, 1000);

```

  

## Exercice 9 : Utiliser setTimeout pour un enchaînement de tâches

Créez une fonction `task1(callback)` qui attend 1 seconde avant de retourner un message "Tâche 1". Ensuite, créez une fonction `task2(callback)` qui attend 2 secondes avant de retourner un message "Tâche 2". Enchaînez ces deux tâches en utilisant `setTimeout` et des callbacks.

  

```javascript

function task1(callback) {

// Tâche 1 après 1 seconde

}

  

function task2(callback) {

// Tâche 2 après 2 secondes

}

task1((message1) => {
    console.log(message1);
    task2((message2) => {
        console.log(message2);
    });
});

```


## Corrections

## Exercice 1 : Callback simple

```js
function addition(a, b, callback) {
    const result = a + b;
    callback(result);
}

addition(3, 4, (result) => {
    console.log(result); // Affiche 7
});

```

## Exercice 2 : Callback asynchrone avec `setTimeout`

```js
function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

delayedMessage("Hello after 2 seconds!", 2000, () => {
    console.log("Message affiché après 2 secondes");
});

```

## Exercice 3 : Utilisation de plusieurs callbacks avec `setTimeout`


```js
function greetUser(name, callback1, callback2) {
    setTimeout(() => {
        callback1(`Hello, ${name}!`);
        setTimeout(() => {
            callback2(`How are you, ${name}?`);
        }, 1000);
    }, 2000);
}

greetUser("John", (greeting) => {
    console.log(greeting);
}, (question) => {
    console.log(question);
});
```


## Exercice 4 : Enchaînement de plusieurs callbacks

```js
function task1(callback) {
    setTimeout(() => {
        console.log("Tâche 1 terminée");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tâche 2 terminée");
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        console.log("Toutes les tâches sont terminées");
    });
});
```

## Exercice 5 : Gestion des erreurs avec Callback


```js
function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Erreur: division par zéro"), null);
    } else {
        callback(null, a / b);
    }
}

divide(10, 2, (error, result) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(result); // 5
    }
});

divide(10, 0, (error, result) => {
    if (error) {
        console.error(error.message); // "Erreur: division par zéro"
    } else {
        console.log(result);
    }
});

```

## Exercice 6 : Callback avec plusieurs tâches

```js
function asyncTasks(callback) {
    setTimeout(() => {
        console.log("Task 1 done");
        setTimeout(() => {
            console.log("Task 2 done");
            setTimeout(() => {
                console.log("Task 3 done");
                callback();
            }, 1000);
        }, 2000);
    }, 1000);
}

asyncTasks(() => {
    console.log("Toutes les tâches sont terminées");
});

```

## Exercice 7 : Promises et Callbacks


```js
function getDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Données récupérées");
        }, 2000);
    });
}

getDataFromServer()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Erreur:", error);
    });

```

## Exercice 8 : Simulation d'un `setInterval` avec Callback


```js
function startInterval(callback, delay) {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        callback();
        if (count >= 5) {
            clearInterval(intervalId);
        }
    }, delay);
}

startInterval(() => {
    console.log("Message toutes les secondes");
}, 1000);

```

## Exercice 9 : Utiliser `setTimeout` pour un enchaînement de tâches


```js
function task1(callback) {
    setTimeout(() => {
        callback("Tâche 1");
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        callback("Tâche 2");
    }, 2000);
}

task1((message1) => {
    console.log(message1);
    task2((message2) => {
        console.log(message2);
    });
});

```

---

# Autres exercices

## 1. Chaining Callbacks

Crée une fonction `getUserData` qui prend un nom d'utilisateur et simule la récupération de ses données avec un callback. Ensuite, utilise un deuxième callback pour afficher ses statistiques.

  

### Exemple attendu :

```js

function getUserData(username, callback) {

setTimeout(() => {

console.log(`Récupération des données de ${username}...`);

callback({ username, stats: { posts: 10, likes: 100 } });

}, 1000);

}

  

function showUserStats(userData) {

setTimeout(() => {

console.log(`${userData.username} a ${userData.stats.posts} posts et ${userData.stats.likes} likes.`);

}, 500);

}

  

getUserData("Alice", showUserStats);

```

  

---

  

## 2. Timeout Nesting

Utilise `setTimeout` de manière imbriquée pour exécuter trois tâches asynchrones en cascade.

  

### Exemple attendu :

```js

setTimeout(() => {

console.log("Première tâche...");

setTimeout(() => {

console.log("Deuxième tâche...");

setTimeout(() => {

console.log("Troisième tâche...");

}, 1000);

}, 1000);

}, 1000);

```

  

---

  

## 3. Promise Conversion

Transforme une fonction basée sur un callback en une fonction retournant une `Promise`.

  

### Exemple initial :

```js

function fetchData(callback) {

setTimeout(() => {

callback("Données récupérées !");

}, 1000);

}

  

fetchData(console.log);

```

  

### Version avec Promise :

```js

function fetchDataPromise() {

return new Promise((resolve) => {

setTimeout(() => {

resolve("Données récupérées !");

}, 1000);

});

}

  

fetchDataPromise().then(console.log);

```

  

---

  

## 4. Multiple API Calls

Simule plusieurs requêtes asynchrones avec `setTimeout` et affiche les résultats dans l’ordre d’exécution.

  

### Exemple attendu :

```js

function fetchData(name, delay) {

setTimeout(() => {

console.log(`Données de ${name} récupérées après ${delay}ms`);

}, delay);

}

  

fetchData("User1", 1500);

fetchData("User2", 1000);

fetchData("User3", 2000);

```

  

---

  

## 5. Race Condition

Simule deux requêtes qui peuvent se terminer à des moments différents et affiche le premier résultat reçu.

  

### Exemple attendu :

```js

function asyncTask(name, delay, callback) {

setTimeout(() => {

callback(`${name} terminé en ${delay}ms`);

}, delay);

}

  

function raceCondition() {

asyncTask("Requête A", Math.random() * 2000, console.log);

asyncTask("Requête B", Math.random() * 2000, console.log);

}

  

raceCondition();

```

  