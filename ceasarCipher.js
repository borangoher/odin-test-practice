const ceasarCipher = function (string) {
    let charArr = [...string];
    return charArr
    .map(_rotate3)
    .join("");
}


const _rotate3 = function (char) {
    let charCode = char.charCodeAt(0);
    if ((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122)) {
        charCode += 3;
        if ((90 < charCode && charCode < 94) || (122 < charCode && charCode < 126)) {
            charCode -= 26;
        }
        return String.fromCharCode(charCode);
    } else {
        return char;
    }
}

module.exports = ceasarCipher;