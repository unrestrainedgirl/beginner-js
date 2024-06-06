const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isWeekday = (date) => date.getDay() % 6 !== 0;