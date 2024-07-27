const merge = [...new Set(a.concat(b))];
const isEven = (num) => num % 2 === 0;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;