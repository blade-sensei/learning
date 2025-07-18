
# ✅ Corrections des Exercices sur Interfaces et Classes Abstraites

---

## Exercice 1
```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  name: string;
  age: number;
  school: string;

  constructor(name: string, age: number, school: string) {
    this.name = name;
    this.age = age;
    this.school = school;
  }

  greet() {
    console.log(`Bonjour, je suis ${this.name} et j'ai ${this.age} ans.`);
  }
}
```

---

## Exercice 2
```ts
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [
  new Circle(3),
  new Rectangle(4, 5)
];

shapes.forEach(shape => console.log(shape.getArea()));
```

---

## Exercice 3
```ts
interface Playable {
  play(): void;
}

class Guitar implements Playable {
  play() {
    console.log("Gratte la guitare 🎸");
  }
}

class Piano implements Playable {
  play() {
    console.log("Joue du piano 🎹");
  }
}

const instruments: Playable[] = [new Guitar(), new Piano()];

for (const i of instruments) {
  i.play();
}
```

---

## Exercice 4
```ts
abstract class Animal {
  constructor(public name: string) {}

  move() {
    console.log(`${this.name} se déplace`);
  }

  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Wouf !");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Miaou !");
  }
}

const rex = new Dog("Rex");
rex.move();
rex.makeSound();

const mia = new Cat("Mia");
mia.move();
mia.makeSound();
```

---

## Exercice 5
```ts
abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;

  describe() {
    console.log(`Employé: ${this.name}, salaire: ${this.calculateSalary()}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, private salary: number) {
    super(name);
  }

  calculateSalary(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string, private hourlyRate: number, private hours: number) {
    super(name);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hours;
  }
}

const john = new FullTimeEmployee("John", 3000);
john.describe();

const alice = new PartTimeEmployee("Alice", 20, 80);
alice.describe();
```

---

## Bonus
```ts
interface Loggable {
  log(): void;
}

abstract class Service {
  constructor(public id: number) {}

  start() {
    console.log("Service démarré");
  }

  abstract execute(): void;
}

class EmailService extends Service implements Loggable {
  execute(): void {
    console.log("Envoi d'email...");
  }

  log(): void {
    console.log(`Service ID: ${this.id}`);
  }
}

const emailService = new EmailService(42);
emailService.start();
emailService.execute();
emailService.log();
```
