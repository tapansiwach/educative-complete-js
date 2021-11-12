const calculate = (num1, operator, num2) => {
  if (operator === '+') console.log(num1 + num2);
  if (operator === '-') console.log(num1 - num2);
  if (operator === '*') console.log(num1 * num2);
  if (operator === '/') console.log(num1 / num2);
}

// checks
calculate(4, "+", 6)
calculate(4, "-", 6)
calculate(2, "*", 0)
calculate(12, "/", 0)
calculate(0, "/", 0)