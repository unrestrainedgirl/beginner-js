const removeDuplicates = (arr) => [...new Set(arr)];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);