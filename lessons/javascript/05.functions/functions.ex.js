/* eslint-disable prefer-template */

/**
 * scopes
 */
let bank = 'oney';

function openAccount(bank) {
  return 'we are opening the bank account: ' + bank;
}

bank = 'revolut';

function changeBank() {
  bank = 'N26';
  return bank;
}

/**
 * composing
 */

function info(message) {
  console.log('this is a log message:', message);
}

/**
 * create a variable log that contains the function info
 * now create a new function multiply(track, 3, 2)
 * multiply should take as parameter a "track" function
 * 3 and 2 will be multiply and get the result 6
 * multiply output:
 * print: "this is a log message: 6"
 */

const log = info;

function multiply(track, a, b) {
  const result = a * b;
  track(result);
}

multiply(log, 3, 2)

function changeObject(object) {
  const copy = object;

  copy.editor = 'vscode';
}

const object = { code: 'js', editor: 'sublime' };
changeObject(object);
// guess the oupout
// object has changed ? oui, object = { code: 'js', editor: 'vscode' }


