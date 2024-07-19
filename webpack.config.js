import path from 'path';

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
		],
	},
};
