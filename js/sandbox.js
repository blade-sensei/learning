const fs = require('fs');

function fakePromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) resolve('success promise'); 
      else reject('failed promise')
    }, 1000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    reject('error');
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    resolve('promise 3')
  })
}

async function all() {
  const test = await Promise.all([fakePromise, promise2, promise3])
  console.log(test);
}

all();

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

//asynchroneHappySad(true);

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

/**
 * --- Files ---
 */


 function readFileHello(callback) {
   fs.readFile( __dirname + '/hello.txt', { encoding: 'utf8' }, (error, data) => {
     console.log('i finished the first readfile');
     callback(data);
     console.log('i wait for the callback');

   })
 }

 function responseToHello(data, callback) {
   console.log(`i will write ${data}`);
   fs.writeFile(__dirname + '/response.txt',  data, () => {
     console.log('i responded');
     callback(data);
   })
 }

//readFileHello(responseToHello);
//readFileHelloPromise()

function readFileHelloPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/hello.txt', { encoding: 'utf8' }, (error, data) => {
      resolve(data);
    })
  })
}

function changeHelloFile(textHello) {
  const addData = textHello + ' i added some text';
  fs.writeFile(__dirname + '/hello.txt', addData, (error) => {
    console.log('i added data');
  })
}

function responseToHelloPromise(data) {
  console.log(`i will write ${data}`);
  fs.writeFile(__dirname + '/response.txt',  data, () => {
    console.log('i responded');
  });
}

async function under() {
  await fakePromise(true)
  console.log('coucou');
  return 'hello'
}

async function over() {
  const underData = await under();
  const changed = underData + ' changed';
  console.log(changed);
  return changed;
}

function hello(data) {
  console.log(`data is here: ${data}`);
}

(async function() {
  const helloChange = await over();
  hello(helloChange);   
})()

// readFileHello(function (data) {
//   console.log(`i will write ${data}`);
//   responseToHello(data, changeHelloFile)
// });

//  readFileHelloPromise()
//  .then(textHello => {
//    responseToHelloPromise(textHello);
//  })
//  .then(textHello => {
//    changeHelloFile(textHello);
//  })
//  .catch((error) => console.log(error));

console.log('after callback');

