const falsey = [false, null, 0, '', undefined, NaN];
const rootPath = __dirname.replace('tests', '');
const _ = require(rootPath);

module.exports = { falsey, _ };
