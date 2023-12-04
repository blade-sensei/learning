/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * istead of the keyword OF we can use also the word IN
 * but needs are different
 */
const fruits = ['apple', 'banana', 'orange'];

for (const fruit in fruits) {
  console.log('-', fruit);
}

// generaly we use IN for iterate on an object

const simpleObject = {
  firstName: 'John',
  lastName: 'Fou',
};
for (const property in simpleObject) {
  const value = simpleObject[property];
  console.log('- ', value);
}

const hello = 'hello';
for (const property in hello) {
  console.log('- ', hello[property]);
}
