function initial(array) {
    if (!array) return;

    const newLength = array.length - 1;

    if (newLength <= 0) return [];

    const result = new Array(newLength);

    for (let i = 0; i < result.length; i++) {
        result[i] = array[i];
    }

    return result;
}

module.exports = initial;
