const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		// You could use a separate env file here for production.
		new DefinePlugin({
			'process.env': JSON.stringify(process.env)
		})
	],
});