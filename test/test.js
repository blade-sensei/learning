const assert = require('assert');
const dojos = require('../dojos');

describe('coding test', () => {
    
    it('test', () => {
        const test = dojos.DNAStrand;
        assert.equal(test("ATTGC"),"TAACG");
    })
});