const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const removeDuplicates = (arr) => [...new Set(arr)];
const shuffledArray = array.sort(() => Math.random() - 0.5); 