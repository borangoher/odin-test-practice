const fibonacciRecurse = (num) => {
  if (num <= 0) {
    return 0;
  } else if (num <= 2) {
    return 1;
  } else {
    return fibonacciRecurse(num - 2) + fibonacciRecurse(num - 1);
  }
};

module.exports = fibonacciRecurse;
