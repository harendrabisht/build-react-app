const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SRC_PATH = './src/'
module.exports = {
	resolve: {
		modules: [
			path.resolve(__dirname, SRC_PATH),
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.scss', '.spec.js'],
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.(css|scss)$/,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{ loader: 'css-loader' },
				{ loader: 'sass-loader' }
			]
		}]
	},
	plugins:[
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
	]	
}