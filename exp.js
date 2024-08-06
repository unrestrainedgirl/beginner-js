const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const resultingPromises = urls.map((url) => makHttpRequest(url));