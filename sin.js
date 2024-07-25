const isEmptyArray = arr => !arr.length;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);