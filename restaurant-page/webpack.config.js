const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Resto",
            template: "./src/template.html"
        })
    ],
    mode: "development",
}