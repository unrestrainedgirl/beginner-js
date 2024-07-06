const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
var arr1 = "john".split('');