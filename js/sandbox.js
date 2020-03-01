function fakePromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) resolve('success promise'); 
      else reject('failed promise')
    }, 1000);
  });
}

//callback du setTimeOut est mis en Callback Queue
//Ressoue place Resolve et Reject en execution

//Resolve va mettre en Job Queue la callback du Then

function asynchroneHappySad(value) {
  fakePromise(value)
  .then((value) => {
    console.log(`set handler for resolve ${value}`)
  }, (error) => console.log('error'));
  console.log('never executed');
}

asynchroneHappySad(true);

//asynchroneHappySad(true);

function callback(resolver) {
  console.log('stuff 1 of callback')
  console.log('stuff 2');
  resolver(10);
}

//const happy = asynchroneHappySad(true);
//console.log(happy);
//const sad = asynchroneHappySad(false);

// callback((valueResolver) => {
//   console.log(`resolved returns ${valueResolver}`);
//   console.log('end of callback')
// })

function promise() {
  return new Promise((resolve, reject) => {
    console.log('stuff 1 of callback');
    console.log('stuff 2');
    resolve(20);
  })
}

// promise().then((valueResolver) => {
//   console.log(`resolver returns ${valueResolver}`);
//   console.log('end of callback')
// })

console.log('after callback');