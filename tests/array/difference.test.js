const { _ } = require('../utils');

describe('difference', () => {
    it('should return the difference of two arrays', () => {
        expect(_.difference([2, 1], [2, 3])).toEqual([1]);
    });
});
