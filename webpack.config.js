const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => {
	const isProd = argv.mode === "production";

	return {
		mode: isProd ? "production" : "development",
		entry: path.resolve(__dirname, "src/app/index.tsx"),
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: isProd ? "js/[name].[contenthash].js" : "js/[name].js",
			clean: true,
			publicPath: "/",
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
			alias: {
				"@app": path.resolve(__dirname, "src/app"),
				"@pages": path.resolve(__dirname, "src/pages"),
				"@widgets": path.resolve(__dirname, "src/widgets"),
				"@features": path.resolve(__dirname, "src/features"),
				"@entities": path.resolve(__dirname, "src/entities"),
				"@shared": path.resolve(__dirname, "src/shared"),
			},
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "public/index.html"),
			}),
		],
		devServer: {
			port: 3000,
			open: true,
			hot: true,
			historyApiFallback: true,
		},
		devtool: isProd ? "source-map" : "eval-source-map",
	};
};
