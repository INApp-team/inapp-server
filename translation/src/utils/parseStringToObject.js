const parseStringToObject = (str) => str
    .split(',')
    .map(x => x.split(':').map(y => y.trim()))
    .reduce((a, x) => {
        a[x[0]] = x[1];
        return a;
    }, {});

module.exports = parseStringToObject