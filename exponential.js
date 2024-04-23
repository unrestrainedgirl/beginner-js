const merge = [...new Set(a.concat(b))];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const results = await Promise.all(resultingPromises);
const goToTop = () => window.scrollTo(0, 0);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;