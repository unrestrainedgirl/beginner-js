const goToTop = () => window.scrollTo(0, 0);
const channelName = getChannelName(channel);
const isWeekday = (date) => date.getDay() % 6 !== 0;