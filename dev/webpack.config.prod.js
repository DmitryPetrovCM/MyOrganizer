const common = require('./webpack.config.common');
const path = require('path');
const merge = require('webpack-merge');

// Webpack v4+ will minify the code by default in production mode.
module.exports = merge(common, {
    mode: 'production'
});
