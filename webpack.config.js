const { merge } = require('webpack-merge')

module.exports = function (env, args) {
    const commonConfig = require('./webpack.common.config.js');
    const devConfig = require('./webpack.dev.config.js');
    const prodConfig = require('./webpack.prod.config.js');

    switch (args.mode) {
        case "development":
            return merge(commonConfig, devConfig);
        case "production":
            return merge(commonConfig, prodConfig);
        default:
            throw new Error("No matching configurations found!");
    }
}