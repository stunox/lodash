const { _ } = require('../utils');

describe('flattenDeep', () => {
    // 1 test is sufficient
    it('should flatten a nested array', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flattenDeep(arr);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
