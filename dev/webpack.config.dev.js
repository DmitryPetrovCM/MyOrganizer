const common = require('./webpack.config.common');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true
    }
});
