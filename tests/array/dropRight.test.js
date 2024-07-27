const { _ } = require('../utils');

describe('dropRight', () => {
    it('should return an array with the last element removed', () => {
        expect(_.dropRight([1, 2, 3])).toEqual([1, 2]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.dropRight([])).toEqual([]);
    });

    it('should return an array with the last two elements removed', () => {
        expect(_.dropRight([1, 2, 3], 2)).toEqual([1]);
    });

    it('should return an empty array if the number of elements to drop is greater than the length of the array', () => {
        expect(_.dropRight([1, 2, 3], 5)).toEqual([]);
    });

    it('should return the same array if the number is equal to 0', () => {
        expect(_.dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });
});
