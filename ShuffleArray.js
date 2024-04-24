const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const reversedString = str => str.split('').reverse().join('');