const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const buildOutputPath = path.join(repositoryRootPath, 'out');