
var pug = require('pug');

module.exports = function(content, file, opts) {
    return pug.render(content, opts || {});
};
