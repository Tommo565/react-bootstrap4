var webpack = require('webpack')
var path = require('path')

module.exports = {

	plugins: [
		new webpack.ProvidePlugin({
			  // d3: 'd3',
			  // $: 'jquery',
			  // jQuery: 'jquery',
			  // "window.jQuery": "jquery",
		}),

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			warnings: false,
			mangle: true
		})
	],

	entry: [
		"babel-polyfill",
		"webpack-icons-installer/font-awesome", // https://www.npmjs.com/package/webpack-icons-installer
		"./scripts/app.js",
	],
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath:'dist/',
		filename: "bundle.js"
	},
	devtool: '#source-map',
	module: {
		rules: [{
    		test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
    		loader: "url-loader",
			query: {
	        	limit:'10000',
	        	name:'[name].[ext]',
	        	outputPath:'fonts/'
	        }
		},{
			test: /\.css$/,
			loaders: ["style-loader","css-loader"]
	    },{
			test: /\.(js|jsx)$/,
	      	exclude: /node_modules/,
	      	loader: 'babel-loader'
		}]
	}
}