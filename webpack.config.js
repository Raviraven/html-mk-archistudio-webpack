const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        // exclude: /(.yarn)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", {targets: "defaults"}]],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,

        type: "asset/resource",
        generator: {
          filename: "[name].[ext]",
        }
      },
    ],
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    })
  ],
};
