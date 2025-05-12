const path = require("path");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
module.exports = {
    entry: "./src/index.mjs",
    output: {
        filename: "node_modules.js",
        path: path.resolve(__dirname, "dist"),

    },
    plugins: [
        new webpack.BannerPlugin({ banner: "const GLOBAL_MODULE_EXPORTS = {};", raw: true }),
        new webpack.BannerPlugin({ banner: `export default GLOBAL_MODULE_EXPORTS;`, raw: true, footer: true })
    ],
    mode: "production",
    resolve: {
        fallback: {
            // crypto: require.resolve("crypto-browserify"), // must install crypto-browserify before using
            buffer: false,
        }
    },
    optimization: {
        minimize: true,
    }
};
