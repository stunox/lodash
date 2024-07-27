const { _ } = require('../utils');

describe('drop', () => {
    it('should return an array with the first element removed', () => {
        expect(_.drop([1, 2, 3])).toEqual([2, 3]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.drop([])).toEqual([]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.drop([1, 2, 3], 2)).toEqual([3]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.drop([1, 2, 3], 5)).toEqual([]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });
});
