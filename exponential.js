const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');