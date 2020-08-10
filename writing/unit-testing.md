Unit test
==

> In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use. *(Wikipédia)*


## Benefit of Unit testing (UT)

- **Verify** if a change (code) has **created a bug** or **change** the **behaviour** somewhere in the application
- Find the root of the bug easily
- **Improve software quality**
- Your teammates will thank you


# A simple good test:
==

Has this specifications:

## Clean code

Test code **remains "code"** so we should also try to respect good practices (ex: DRY, KISS, Single Responsibility... ), linters, recent methods of your langage ... 
In order to keep the  **freliability, understanding et maintainability.** for your team.

## Independence
**"Unit"**. A single should **not depend on other test**, **avoid** as much as possible the **dependance** of other systems of your software/app like instantiations. You can use mock [data or stubs](https://martinfowler.com/articles/mocksArentStubs.html).  

For example tests **should be able to be run in any order.**

## Test the necessary

I don't know if everyone will be aggree with this BUT.

You don't need to test all functions/routes/libs(...), or at least not right now... Prioritize the code that you change most often.  To me this is important because sometime we see HUGE work to do in order to cover all our app... We can start step by step and cover just 1 small part of our app. (let me know your opinion :) )

The same of the scenarios of a unit test, we can over 1,2 or only 3 scenarios.

## Undertanding

Naming. We should undertand the test when see the test name.

This is good patter that works for me.

The name should be composed by the description, then the pattern 'should' (result we expect) et optionally, 'when' that describes the scenary or context.

> Tips : If the test become bigger, divide into small pieces.

Structure/Phases
==

Must know is AAA (arrange, act, assert).

- Arrange: prepare -> mocks, before method (), parameters(context) for our function

- Act: basically call the function/unit work that we want to test

- Assert: Define the result you expect


> Tips : Avoid many 'expect' for only one test, to keep Single Responsibility.

### Exemple sur modelLoopbackTester

Les fonctions 'before', 'setVar' et 'extend' sont des exemples d'une phase arrange.
```javascript=
test.before = async function setupLoggedUser(userId) { };
test.extend("user", {});
test.setVar("user", accessToken);
```

### Exemple sur modelLoopbackTester

```javascript=
test.load(ModelTestJson);
```

ModelTestJson.json
```json=
 {
    "model": "zindics",
    "url": "getGraphData/${keyGraph}/date/${dateGraph}"
  }
```

Dans le json on précise quel unité/route on veut tester.


### Exemple sur modelLoopbackTester

```json=
"expect": {
    "statusCode": 401
}
```

**expect** correspodant à la définition des résultats attendus

