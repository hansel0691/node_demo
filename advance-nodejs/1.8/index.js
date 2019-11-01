const printStars = require('./print-stars');

// printStars(5, 'Hi!');

require('./ascii-art');
console.log(require.cache);

// ! require.cache caches every module required. 
// ! Subsequent requires will load module from the Array 
// Nothing is displayed since the required module was loaded before
require('./ascii-art');
