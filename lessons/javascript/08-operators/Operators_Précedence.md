
- La **précédence des opérateurs** détermine l'ordre dans lequel les opérateurs sont regroupés. Les opérateurs avec la plus haute précédence sont évalués en premier.

- Un peu comme en mathématiques,  l'opérateur de multiplication (« `*` ») (ayant une précédence plus haute que l'opérateur d'addition (« `+` »)) est évalué en premier et l'expression `6 * 4 + 2` renverra 26 (et pas 36).
	- ici c'est le calcul (évaluation) de `4 * 5` qui sera faite en premier

```javascript
console.log(3 + 4 * 5); // 3 + 20
```

- Pour "forcer" une condition à se faire AVANT une autre, on peut utiliser les paranthèses (comme en math), par example si on veut que `3+4` se fasse AVANT `4 * 5` il suffira de mettre `(3+4)` ainsi on aura

```javascript
console.log((3 + 4) * 5); // 7 * 5
```


## Exercices

### Quel est le résultat de:

```
let a = 2 + 6 / 2;
a =  true && true || true && false;
```
- donner dans l'ordre les conditions / calculs qui vont s'executer et au même temps donner le résultat de chaque condition 
- modifier l'expression  `let a = 2 + 6 / 2;` pour avoir comme résultat 4

```bash
exercice 2

3 > 2 && 2 > 1
donner dans l'ordre les conditions / calculs qui vont s'executer et au même temps donner le résultat de chaque condition 

```
### Resultat ? 

```
1. Remplacer par TRUE ou FALSE chaque partie de condition et donner le résultat final

res = couleur === age < 10 || age > 18 && isStudent;
res = !hasDebts || balance > 0 && (isGoodClient && isNeverInNegativeBalance)```
## Références
```

```
2. Donner le résultat de c et d
const a = 40;
const b = 22;
const c = (23 - a) + b;
const d = 40 + ((23 - a) + (c + 5));
```


## Référence:

ordre par operator:  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence