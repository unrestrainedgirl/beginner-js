const scriptRootPath = path.join(repositoryRootPath, 'script');
const fullName = name || 'buddy';
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const merge = Object.assign({}, obj1, obj2);