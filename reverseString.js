const reverseString = function (string) {
    let charArr = [...string];
    return charArr.reverse().join("");
}

module.exports = reverseString;