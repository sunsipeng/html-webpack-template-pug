var HtmlWebpackPlugin = require('html-webpack-plugin');	//eslint-disable-line import/no-unresolved

module.exports = {
	entry: {
		app: './app'
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		stats: 'errors-only'
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: require('../../'),
			appMountId: 'app',
			mobile: true,
			title: 'App',
			injectExtras: {
				variable:{
					times_tamp:Date.now()
				}
			}
		})
	]
};
