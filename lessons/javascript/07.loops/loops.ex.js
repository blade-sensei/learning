// LEVEL 1 for the following exercices use only classic FOR statements like (for let i = 0; i<0...)

/**
 *
 * declare a variable carNames and assign an array using ONLY strings:
 * ["BMW 3 Series", "Audi A5", "Fiat Panda ", "Tesla Model X", "Nissan Leaf"];
 */

const carNames = ["BMW 3 Series", "Audi A5", "Fiat Panda ", "Tesla Model X", "Nissan Leaf"];

/**
 * create another array using the carNames to create a variable "Cars"
 * this array will contain objects, each object is will have the property name
 * (using the previous carsName array)
 *
 * output: [{name: "BMW 3 Series"}, {"name": "Tesla Model X"}, ......so on]
 */

const Cars = []
for (let i = 0; i < carNames.length; i++) {
    Cars.push({ name: carNames[i] });
}

/**
 * given the new array, you will add a car type
 * if the brand is "Tesla" or "Nissan" add a type: "electric"
 * otherwise add the type: "gas"
 * output: [{name: "BMW 3 Series", type: "gas"}, .... {name: "Tesla Model X", type: "electric"}, ......so on]
 */

for (let i = 0; i < carNames.length; i++) {
    if (Cars.name === 'Tesla' || 'Nissan') {
        Cars[i].type = "électrique";
} else {
    Cars[i].type = "essence";
}}

/**
 * given the new array, you will add a new car "Ford Focus Electric" which is an electric car
 */

/**
 * given the new array, create a new array which contains only electric cars
 */

/**
 * given the new array, create a function to print a message "the car: [name] is : [type]"
 * output terminal:
 * the car: Tesla Model X is: electric
 * the car: ....
 */
