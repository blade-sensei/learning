function Objects2() {
  /**
   * Definition and Creation
   */
  // an array is a list of element
  // usually the element are of the same type but its allowed  to have different element types
  // this is used to store data in order to be iterated
  const simple = [0, 1, 2];

  // objects can also contain objects
  const arrayContainsDifferentTypes = [0, 'statusOpen', 1, 'statusClosed'];
  // game table for example
  const arrayContainsArray = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]];

  const power4Game = [[0, 1, 3, 4], [0, 1, 2, 4]];

  // even function can be declared in the array
  // FRI: the function is "created" ready to be used, but this doesnt means that
  const objectThatContainsFunction = {
    uid: 'test',
    canSayHello: () => {
      console.log('HELLO !');
    },
    dance() {
      console.log('Dance 🕺');
    },
  };

  const processList = [objectThatContainsFunction.canSayHello, objectThatContainsFunction.dance];

  /**
   * Access to array elements
   */

  // To find an element we use the "INDEX" and index like saying: "The Rang/Position of the element in the array"
  // note that the position number starts by 0
  // if we use the INDEX = 0, it means the FIRST element of the array
  // INDEX = 3 means the FOURTH element

  const first = simple[0];
  const game = arrayContainsArray[2];

  console.log('first:', first, game);

  const getElementOneOftheSecondElement = power4Game[1][0];
  // to split this, it can also be written like this:
  // const secondElement = power4Game[1];
  // const getElementOneOftheSecondElement = secondElement[0]
  console.log('element 2, then gets element 1', getElementOneOftheSecondElement);

  // this is the simple way to the ONE element but we will see further that we can
  // get each element of the array using a "loop FOR"
}
