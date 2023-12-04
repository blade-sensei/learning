function ObjectsLesson() {
  /**
   * Definition and Creation of objects
   */
  // obejcts can contain a group of primitive values
  // the are composed by a -> "KEY": "VALUE"
  // simpleObject 👇  firstName is the KEY and "John" is the Value
  const simpleObject = {
    firstName: 'John',
    lastName: 'Fou',
  };

  // objects can also contain objects
  const objectThatContainsObjects = {
    uid: 'cc12',
    address: {
      street: 'Md street',
      city: '..',
      country: 'USA',
    },
    'weird key': 'ok',
  };

  // even function can be declared in the object
  // FRI: the function is "created" ready to be used, but this doesnt means that
  // the function is "called" and execute yet
  // the function must be called using the "()" -> xxx.canSayHello()
  const objectThatContainsFunction = {
    uid: 'test',
    canSayHello: () => {
      console.log('HELLO !');
    },
    dance() {
      console.log('Dance 🕺');
    },
  };

  console.log(objectThatContainsFunction.canSayHello());

  const status = {
    OPEN: 'open',
    CLOSE: 'close',
  };

  /**
   * Access to objects values
   */

  // using the dot
  const storeValue = simpleObject.firstName;

  // using the brackets
  // eslint-disable-next-line dot-notation
  const access = objectThatContainsObjects['address'];

  // this can be usefull when your key has spaces for example (this is not commun be can happen)
  // for example weird key can not be used with the dot
  const keyValue = objectThatContainsObjects['weird key'];

  // or it can be used when you don't know what is exactly the key name and you use a variable
  const statusVar = 'firstName';
  const statusValue = status[statusVar];
}
