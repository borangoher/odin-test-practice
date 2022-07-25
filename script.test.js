const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const Calculator = require("./calculator");
const ceasarCipher = require("./ceasarCipher");
const analyzeArray = require("./analyzeArray");


test("Base case", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("non a-z char", () => {
    expect(capitalize("?knew")).toBe("?knew");
});

test("Base case", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("irregular chars", () => {
    expect(reverseString("Hell0?")).toBe("?0lleH");
});

test("add two numbers", () => {
    expect(new Calculator(1,2).add()).toBe(3);
});

test("add negative number", () => {
    expect(new Calculator(1,-2).add()).toBe(-1);
});

test("subtract two numbers", () => {
    expect(new Calculator(1,2).sub()).toBe(-1);
});

test("multiply two numbers", () => {
    expect(new Calculator(1,-2).mult()).toBe(-2);
});

test("divide two numbers", () => {
    expect(new Calculator(4, 2).div()).toBe(2);
});

test("divide two numbers (non-int res)", () => {
    expect(new Calculator(5, 2).div()).toBe(2.5);
});


test("base case", () => {
    expect(ceasarCipher("hello")).toBe("khoor");
});

test("capitalization", () => {
    expect(ceasarCipher("HeLlo")).toBe("KhOor");
});

test("non letter", () => {
    expect(ceasarCipher("he?ll*o")).toBe("kh?oo*r");
});

test("base case", () => {
    expect(analyzeArray([1,2,3,4]).average).toBe(2.5);
    expect(analyzeArray([1,2,3,4]).min).toBe(1);
    expect(analyzeArray([1,2,3,4]).max).toBe(4);
    expect(analyzeArray([1,2,3,4]).length).toBe(4);
});

test("same num", () => {
    expect(analyzeArray([1,1,1]).average).toBe(1);
    expect(analyzeArray([1,1,1]).min).toBe(1);
    expect(analyzeArray([1,1,1]).max).toBe(1);
    expect(analyzeArray([1,1,1]).length).toBe(3);
})

