const assert = require('assert');
const dojos = require('../dojos');

describe('coding test', () => {
    
    it('test', () => {
        assert.equal(dojos.high('man i need a taxi up to ubud'), 'taxi');
        assert.equal(dojos.high('what time are we climbing up the volcano'), 'volcano'); 
        assert.equal(dojos.high('take me to semynak'), 'semynak');  
    })
});