const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const merge = [...new Set([...a, ...b])];