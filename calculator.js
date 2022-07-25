function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

Calculator.prototype.add = function () {
    return this.num1 + this.num2;
}

Calculator.prototype.sub = function () {
    return this.num1 - this.num2;
}

Calculator.prototype.mult = function () {
    return this.num1 * this.num2;
}

Calculator.prototype.div = function () {
    return this.num1 / this.num2;
}


module.exports = Calculator;