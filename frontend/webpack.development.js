const Dotenv = require('dotenv-webpack')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [new Dotenv()],
	devServer: {
		client: {
			logging: 'info',
			overlay: true
		},
		compress: true,
		open: true,
		static: './build'
	},
	stats: {
		errorDetails: true
	}
})
