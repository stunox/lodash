function indexOf(array, value, fromIndex = 0) {
    let result = -1;

    if (!array || !value) return result;

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
            result = i;
            break;
        }
    }

    return result;
}

module.exports = indexOf;
