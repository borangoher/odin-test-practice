const capitalize = function (string) {
    let charArr = [...string];
    charArr[0] = charArr[0].toUpperCase();
    return charArr.join("");
}

module.exports = capitalize;