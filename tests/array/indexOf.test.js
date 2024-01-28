const { _ } = require('../utils');

describe('indexOf', () => {
    it('should return the index of the first matched value', () => {
        expect(_.indexOf([1, 2, 1, 2], 2)).toEqual(1);
    });
    it('should return the index of the first matched value from the given index', () => {
        expect(_.indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
    });
    it('should return -1 if the value is not found', () => {
        expect(_.indexOf([1, 2, 1, 2], 3)).toEqual(-1);
    });
});
