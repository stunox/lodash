const { _ } = require('../utils');

describe('flatten', () => {
    it('should flatten a nested array', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr);

        expect(result).toEqual([1, 2, [3, [4]], 5]);
    });

    it('should flatten a nested array up to the specified depth', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr, 2);

        expect(result).toEqual([1, 2, 3, [4], 5]);
    });

    it('should flatten a nested array up to the specified depth', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr, 3);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should flatten a nested array up to the specified depth', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr, 4);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    // isDeep = true
    it('should flatten a nested array when isDeep is true', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr, true);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    //is deep = false
    it('should not flatten the array if isDeep is false', () => {
        const arr = [1, [2, [3, [4]], 5]];
        const result = _.flatten(arr, false);

        expect(result).toEqual([1, 2, [3, [4]], 5]);
    });
});
