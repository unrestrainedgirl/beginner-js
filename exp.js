const scriptRootPath = path.join(repositoryRootPath, 'script');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log("0 || 1 = "+(0 || 1));