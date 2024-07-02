const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);