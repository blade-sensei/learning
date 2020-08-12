Unit test
==

> In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use. *(Wikipédia)*


## Benefit of Unit testing (UT)

- ✅ **Verify** if a change (code) has **created a bug** or **changed** the **behavior** somewhere in the application
- 🐛 Find the root of the bug easily
- 📈 **Improve software quality**
- 🙌 Your teammates will thank you


# A simple good test:

Has this specifications:

### Clean code

Test code **remains "code"** so we should also try to respect good practices (ex: DRY, KISS, Single Responsibility... ), linters, recent langage...


👉 In order to keep the  **reliability, understanding et maintainability.** for your team.

### Independence
**"Unit"**. Should **not depend on the other tests**. For example:  tests should be able to be run in any order.

 **Avoid** as much as possible the **dependance** of other systems/code of your software/app like instantiations for example, you can use mock [data or stubs](https://martinfowler.com/articles/mocksArentStubs.html) to avoid this.


### Test the necessary  

> I don't know if everyone will be agree with this, but ...

We don't need to test all functions/routes/libs(...) or at least not right now... 😌

- **Prioritize** the code that you change most often.

We can be discouraged by the **HUGE work** to cover all our app... We can **start step by step** and cover just 1 small part of our app. (let me know your opinion 🙏 )


### Understanding  📖

**Naming**. We should understand the test when see the test name.

This is good pattern that works for me:

```
[unit name] ... [should] ... [when] ... context
```

The name should be composed by the description, then the pattern 'should' (result we expect) et optionally, 'when' that describes the scenario or context.

> Tips : If the test becomes bigger, divide it into small pieces.

## Phases/Structure


Must know is AAA (arrange, act, assert).

- Arrange: prepare -> mocks, before method (), parameters(context) for our function

- Act: basically call the function/unit work that we want to test

- Assert: define the result that you expect

> Tips : Avoid many 'expect' for only one test, to keep Single Responsibility.

# Examples

> I will use AVA library for tests
> https://github.com/avajs/ava


[Simple unit test of my getToken function]


```javascript

test('hasRequiredParameters should be true when body request has the required parameters', (t) => {
  // ARRANGE
  const requiredParameters = ['username', 'password'];
  const bodyRequest = {
    username: 'usernameTest',
    password: 'passwordTest',
  };

  // ACT + ASSERT

  t.is(
    requestHelper.hasRequiredParameters(requiredParameters, bodyRequest),
    true,
    'hasRequiredParameters should be true'
  );
});

test('hasRequiredParameters should be false when body request has not the required parameters', (t) => {
  const requiredParameters = ['username', 'password'];
  const bodyRequest = {
    test: 'usernameTest',
    password: 'passwordTest',
  };

  t.is(
    requestHelper.hasRequiredParameters(requiredParameters, bodyRequest),
    false,
    'hasRequiredParameters should be false'
  );
});

```

[Test preFlight request]

```javascript

test('isPreFlightRequest should be true when request method is OPTIONS', (t) => {
  // ARRANGE
  const mockRequest = {
    method: 'OPTIONS',
  };

  // ARRANGE
  const ispreFlightRequest = cors.isPreFlightRequest(mockRequest);

  //ASSERT
  t.is(ispreFlightRequest, true, 'ispreFlightRequest should return true');
});


test('isPreFlightRequest should be throw when request has not method property', (t) => {
  const mockRequest = {};
  const error = t.throws(() => {
    cors.isPreFlightRequest(mockRequest);
  }, Error);

  t.is(typeof error, typeof new Error(), 'ispreFlightRequest should throw error');
});
```
### Run
![](https://i.imgur.com/JGRO8LK.png)


## Bonus

You can also read this 
- https://martinfowler.com/articles/mocksArentStubs.html
- https://martinfowler.com/articles/mocksArentStubs.html

# Thank for reading 🙇‍♂️