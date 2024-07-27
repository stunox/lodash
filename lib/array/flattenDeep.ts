function flattenDeep(array) {
    return module.require('./flatten')(array, true);
}

module.exports = flattenDeep;
