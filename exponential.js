const results = await Promise.all(resultingPromises);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const repositoryRootPath = path.resolve(__dirname, '..');
const executableName = getExecutableName(channel, appName);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));