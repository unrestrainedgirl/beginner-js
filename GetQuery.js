const isEven = (num) => num % 2 === 0;
const flattenedArray = arr => [].concat(...arr);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;