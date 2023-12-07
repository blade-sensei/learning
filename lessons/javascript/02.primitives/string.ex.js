/**
Given a name as string, we want to
create function that can say Hello [name]

For example given: "Vicky"
The function "greet" should return "Hello Vicky ! Have a good day"

 */

function greet(name) {
    if (name === '')
    {
        return ''
    }
    return "Bonjour " + name + " ! Passe une bonne journée"
}

/**
Improve the function greet:
If the passed "name" parameter is an empty string ""
The function should return an empty string ""
otherwise if runs the normal behaviour
 */

/**
Now we want to improve the function.
given the hour between 0 and 23
given a user name

The function should return "Good morning ! [name]" OR
"Good afternoon ! [name]"

if the hour is between 1 and 12 (included) -> good morning
if the hour is between 13 and 18 (inclued) -> good afternoon

Complete de parameters definition
 */

function greetPlus(name, hour) {
    if (1<= hour <=12)
    {
        return "Good morning  ! " + name 
    } else if (13<= hour <=18)
   { 
     return "Good afternoon ! " + name 
    } else 
    return "Bonjour " + name 
}

/**
We want a function that checks if a string starts
with the letter "p"
*/

function isStartWithS(string) {
    return string.startsWith("p");
}

/**
* We want a function that checks a given sentence (string)
* if it contains the word "shit"
* the function should return true otherwise return false
*
*/

function ban(string) {
    if (string.includes("shit"))
    {
        return false
    }
    return true
}

/**
 * Given an array composed by the 5 first letter of alphabet ["a", "b", "c", "d", "e"]
 * return a new array that returns the letters in a capitalized form
 * the function should return ["A", "B" ....].
 */

// YOUR CODE

let array = ["a", "b", "c", "d", "e"]

function majuscule(array) {
    return array.map(element => element.toUpperCase());
}