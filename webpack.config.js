const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "index_bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "css"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader'
      }
    ],
  },
};
