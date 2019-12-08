const assert = require('assert');
const dojos = require('../dojos');

describe('coding test', () => {
    
    it('test', () => {
        assert.equal(dojos.skiJump(['*']), '1.35 metres: He\'s crap!');
        assert.equal(dojos.skiJump(['*', '**', '***']), '12.15 metres: He\'s ok!');
        assert.equal(dojos.skiJump(['*', '**', '***', '****', '*****', '******']), '48.60 metres: He\'s flying!');
        assert.equal(dojos.skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']), '86.40 metres: Gold!!');
    })
});