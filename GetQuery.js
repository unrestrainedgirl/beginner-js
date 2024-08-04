var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const merge = (a, b) => [...a, ...b];