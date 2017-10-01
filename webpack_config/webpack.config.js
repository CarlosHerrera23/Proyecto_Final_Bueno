const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: __dirname + '/public',
		stats: 'errors-only',
		hot: true,
		historyApiFallback: true
	}
}

module.exports = config