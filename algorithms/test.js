/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const pairs = {
        '[': ']',
        '{': '}',
        '(': ')',
    }

    const openedList = [];

    const parentheses = s.split('');

    for (symbol of parentheses) {
        if (isCloser(openedList[openedList.length - 1], symbol, pairs)) {
            openedList.pop();
        } else if (isOpener(symbol, pairs)) {
            openedList.push(symbol);
        } else {
            return false;
        }
    }

    return openedList.length === 0;
};


function isCloser(currentOpen, symbol, pairs) {
    const closer = pairs[currentOpen];
    return closer === symbol;
}

function isOpener(symbole, pairs) {
    const opener = pairs[symbole];
    return opener !== undefined;
}

isValid("([)]");

// open [ {  (

/**

characters from string to get [{]
parcourir chaque string des characters s'il c'est un open ajouter à la liste attente


[ [  {  []


definir la pair des ouvertures

[

Il faut que le prochain soit encore un open ou le fermant de dernier element ajouté en attente
Verifier si c'est d'abord un element fermant celui en cours
dans le cas contraire verifier si c'est un opener
Dans le cas contraire la chaine est fausse car c'est un element fermant incorrecte

Lors qu'on parcours verifier dans un find si l'element est un la fermeture de celui qui en cours
en comparant (symbol) a [symbole].value

Lorsqu'on ferme on pop dans la liste d'attente

Si non si une cle de l'object est [symbole] alors c'est un openener
dans ce cas l'ajouter dans la liste d'attente
On push dans la liste d'attente


Si on est arrive a la fin de la chaine mais qu'il reste encore des symboles a ferme
la chaine est fausses
[
 */