const { _ } = require('../utils');

describe('slice', () => {
    it('should return a slice of the array', () => {
        expect(_.slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.slice([])).toEqual([]);
    });

    it('should return an array with unchanged values if start = 0 and end is greater than array length', () => {
        expect(_.slice([1, 2, 3, 4], 0, 5)).toEqual([1, 2, 3, 4]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.slice([1, 2, 3, 4], 0, 0)).toEqual([]);
    });
});
