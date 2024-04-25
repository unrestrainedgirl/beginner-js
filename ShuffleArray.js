const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
var arr2 = arr1.reverse();
const isEmptyArray = arr => !arr.length;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;