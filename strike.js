const uniqueArr = (arr) => [...new Set(arr)];
const intermediateAppPath = path.join(buildOutputPath, 'app');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);