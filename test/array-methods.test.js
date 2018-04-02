const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');

describe('array methods', () => {
    it('map returns array of elements modified by callback', () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x + 1);
        assert.deepEqual(result, [2, 3, 4]);
    });

    it('filter returns array of elements that return true from callback', () => {
        const arr = [1, 2, 3];
        const result = filter(arr, x => x > 2);
        assert.deepEqual(result, [3]);
    });
});