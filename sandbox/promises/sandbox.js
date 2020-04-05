const promise = (flag) => {
  return new Promise((resolve, reject) => {
    console.log('contruct promise');
    flag ? resolve({ result: 'test' }) : reject('error promise');
  });
};

const instancePromise = promise(true);

instancePromise
  .then((resolvedValue) => {
    console.log('was resolved');
  }, (rejectedValue) => {
    console.log('was rejected');
  });

setTimeout(() => {
  console.log(instancePromise);
  const test = instancePromise.then({ changed: true });
}, 1000);
