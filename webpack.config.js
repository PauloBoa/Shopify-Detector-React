const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    popup: path.resolve(__dirname, "src/popup.jsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <title>React MV3 Extension</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
        </html>
      `,
      filename: "popup.html",
      chunks: ["popup"]
    })
  ]
};