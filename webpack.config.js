const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssStractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@containers": path.resolve(__dirname, "src/containers/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@logos": path.resolve(__dirname, "src/assets/logos/"),
			"@icons": path.resolve(__dirname, "src/assets/icons/"),
			"@styles": path.resolve(__dirname, "src/styles/")
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				type: "asset"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		new MiniCssStractPlugin({
			filename: "[name].css"
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 3005,
		historyApiFallback: true
	}
}