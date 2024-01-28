const { _ } = require('../utils');

describe('differenceBy', () => {
    it('should return the difference of two arrays', () => {
        expect(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
    });
});
