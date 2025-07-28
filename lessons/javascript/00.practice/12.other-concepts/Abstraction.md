
# 🧪 Exercices sur les Interfaces et Classes Abstraites en TypeScript

---

## 🧩 Partie 1 : Interfaces

### ✅ Exercice 1 : Créer une interface `Person`

1. Crée une interface `Person` avec :
   - `name: string`
   - `age: number`
   - une méthode `greet(): void`

2. Implémente cette interface dans une classe `Student` :
   - Ajoute une propriété `school: string`
   - L’implémentation de `greet()` affiche : `"Bonjour, je suis [name] et j'ai [age] ans."`

```ts
interface Person {
   name: string
   age: number
   greet(): void
}

class Student implements Person {
   name: string
   age: number
   school: string
   constructor(name: string, age: number, school: string) {
    this.name = name
    this.age = age
    this.school = school
  }

   greet() {
      console.log(`"Bonjour, je suis ${this.name} et j'ai ${this.age} ans."`)
   }
}
```
---

### ✅ Exercice 2 : Interface avec plusieurs implémentations

1. Crée une interface `Shape` avec une méthode `getArea(): number`
2. Crée deux classes qui implémentent `Shape` :
   - `Circle` avec un rayon
   - `Rectangle` avec largeur et hauteur
3. Affiche la surface de chaque forme

```ts
interface Shape {
   getArea(): number
}

class Circle implements Shape {
   rayon: number

   constructor(rayon: number) {
      this.rayon = rayon;
   }

   getArea(): number {
      const result =  Math.PI * this.rayon ** 2;
      console.log("Surface:", result);
      return result;
  }
}

class Rectangle implements Shape {
   width: number
   height: number

   constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
   }

   getArea(): number {
      const result = this.width * this.height;
      console.log("Surface:", result);
      return result;
  }
}

const circle = new Circle(2),
const rectangle = new Rectangle(3, 4)

```

---

### ✅ Exercice 3 : Interface + tableau

1. Crée une interface `Playable` avec une méthode `play(): void`
2. Implémente cette interface dans deux classes :
   - `Guitar`
   - `Piano`
3. Crée un tableau de `Playable[]` contenant plusieurs instruments
4. Fais une boucle qui appelle `play()` pour chaque instrument

```ts
interface Playable {
   play(): void
}

class Guitar implements Playable {
   play(): void {
      console.log("Guitare")
  }
}

class Piano implements Playable {
   play(): void {
      console.log("Piano");
  }
}

const instruments: Playable[] = [
   new Guitar(), 
   new Piano()
   ]

for (const i of instruments) {
  i.play();
}

```

---

## 📘 Partie 2 : Classes Abstraites

### ✅ Exercice 4 : Classe abstraite `Animal`

1. Crée une classe abstraite `Animal` avec :
   - une propriété `name: string`
   - une méthode concrète `move()`: affiche `"[name] se déplace"`
   - une méthode abstraite `makeSound(): void`

2. Crée deux classes `Dog` et `Cat` qui héritent de `Animal`
   - Implémente `makeSound()` dans chaque classe avec `"Wouf"` ou `"Miaou"`

3. Instancie les deux animaux et appelle `move()` + `makeSound()`

```ts

abstract class Animal {
   name: string
   constructor(name: string) {
      this.name = name;
   }

   move() {
      console.log(`"${this.name} se déplace"`)
   }
   abstract makeSound(): void
}

class Dog extends Animal {
   makeSound() {
      console.log('Wouf')
   }
}

class Cat extends Animal {
   makeSound() {
      console.log('Miaou')
   }
}

const chien = new Dog ('rintintin')
chien.move()
chien.makeSound()

const chat = new Cat ('minou')
chat.move()
chat.makeSound()
```

---

### ✅ Exercice 5 : Classe abstraite + logique commune

1. Crée une classe abstraite `Employee` avec :
   - propriété `name: string`
   - méthode abstraite `calculateSalary(): number`
   - méthode `describe()`: affiche `"Employé: [name], salaire: [calculateSalary()]"`

2. Crée deux classes :
   - `FullTimeEmployee` avec un salaire fixe
   - `PartTimeEmployee` avec un taux horaire et des heures

3. Teste les deux avec `describe()`

```ts

abstract class Employee {
   name: string
   constructor(name: string) {
      this.name = name;
   }

   abstract calculateSalary(): number

   describe() {
      console.log(`"Employé ${this.name} , salaire: ${this.calculateSalary()}"`)
   }
}

class FullTimeEmployee extends Employee {
   salary: number
   constructor(name: string, salary: number) {
      super(name);
      this.salary = salary
   }
   calculateSalary() {
      return this.salary
   }
}

class PartTimeEmployee extends Employee {
   hourlyRate: number
   hours: number
   constructor(name: string, hourlyRate: number, hours: number) {
      super(name);
      this.hourlyRate = number
      this.hours = number
   }
   calculateSalary() {
      const salary = hourlyRate * hours
      return salary
   }
}

const employee1 = new FullTimeEmployee("employee1", 1000);
employee1.describe();

const employee2 = new PartTimeEmployee("employee2", 50 , 35);
employee2.describe();
```
---

## 🧩 Bonus : Interface + Classe Abstraite combinées

1. Crée une interface `Loggable` avec une méthode `log(): void`
2. Crée une classe abstraite `Service` avec :
   - une propriété `id: number`
   - une méthode `start()`
   - une méthode abstraite `execute(): void`

3. Crée une classe `EmailService` qui hérite de `Service` et implémente `Loggable`
   - `execute()` affiche `"Envoi d'email..."`
   - `log()` affiche `"Service ID: [id]"`
