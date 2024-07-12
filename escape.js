const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const copyToClipboard = (text) => navigator.clipboard.writeText(text);