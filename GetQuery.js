const apmRootPath = path.join(repositoryRootPath, 'apm');
const channel = getChannel(computedAppVersion);
var c = new Counter(); c.add(); c.add(); c.add();