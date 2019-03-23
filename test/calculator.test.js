const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});


test('multiply 1 * 1 to equal 1', () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

test('find if 3 is odd to equal true', () => {
  expect(calculator.isOdd(3)).toBe(true);
});
test('find if 2 is odd to equal false', () => {
  expect(calculator.isOdd(2)).toBe(false);
});

test('find if 3 is even to equal false', () => {
  expect(calculator.isEven(3)).toBe(false);
});
test('find if 2 is even to equal true', () => {
  expect(calculator.isEven(2)).toBe(true);
});

test('divisiblyBy 10 / 2 to equal true', () => {
  expect(calculator.divisibleBy(10, 2)).toBe(true);
});

test ('Squared number', () => {
  expect (calculator.square(2)).toBe(4)
}
)

