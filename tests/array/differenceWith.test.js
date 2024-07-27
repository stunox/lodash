const differenceWith = require('../../lib/array/differenceWith');

describe('differenceWith', () => {
    it('should return the difference of two arrays with one object to exclude', () => {
        expect(
            differenceWith(
                [
                    {
                        x: 1,
                        y: 2,
                    },
                    {
                        x: 2,
                        y: 1,
                    },
                ],
                [
                    {
                        x: 1,
                        y: 2,
                    },
                ],
                function (a, b) {
                    return JSON.stringify(a) === JSON.stringify(b);
                },
            ),
        ).toEqual([
            {
                x: 2,
                y: 1,
            },
        ]);
    });

    it('should return the difference of two arrays with multiple objects to exlude', () => {
        expect(
            differenceWith(
                [
                    {
                        x: 1,
                        y: 2,
                    },
                    {
                        x: 2,
                        y: 1,
                    },
                    {
                        x: 3,
                        y: 3,
                    },
                ],
                [
                    {
                        x: 1,
                        y: 2,
                    },
                    {
                        x: 2,
                        y: 1,
                    },
                ],
                function (a, b) {
                    return JSON.stringify(a) === JSON.stringify(b);
                },
            ),
        ).toEqual([
            {
                x: 3,
                y: 3,
            },
        ]);
    });
});
