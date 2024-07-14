const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = (a, b) => [...a, ...b];