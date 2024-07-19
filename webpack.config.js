import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve('dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(js)$/,
				use: "babel-loader"
			}
		],
	},
	plugins: [new HtmlWebpackPlugin()],
	mode: process.env.NODE_ENV === "production" ? "production" : "development"
};