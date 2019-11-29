const assert = require('assert');
const dojos = require('../dojos');

describe('coding test', () => {
    
    it('test', () => {
        const map = [[0, 1, 0 ], [1, -1, 0 ],[1, 1, 1]];
        const max = dojos.collectMax(map);
        assert.equal(max, 5);
    })
});