const compact = require('../../lib/array/compact');
const { falsey } = require('../utils');

describe('compact', () => {
    it('should remove falsey values', () => {
        const array = ['0', '1', '2'];

        expect(compact(falsey.concat(array))).toEqual(array);
    });
});
