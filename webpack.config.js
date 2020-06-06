const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    app: ["./index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          /*
          {
            loader: "eslint-loader",
            options: {
              babelPath: require.resolve("eslint"),
              configFile: path.resolve(__dirname, "./.eslintrc"),
            },
          },
          */
        ],
      },
      /*
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              eslintPath: path.join(__dirname, "./.eslintrc"),
            },
          },
        ],
      },
      */
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // outputPath: 'images/',
              // publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new Dotenv(),
  ],
};
