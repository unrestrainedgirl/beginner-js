const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log(+"1" +  "1" + "2");