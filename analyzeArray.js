const analyzeArray = function (arrayGiven) {
    let object = {
        average: arrayGiven.reduce((a,b) => a+b, 0)/arrayGiven.length,
        min: Math.min(...arrayGiven),
        max: Math.max(...arrayGiven),
        length: arrayGiven.length
    };

    return object;
}

module.exports = analyzeArray;