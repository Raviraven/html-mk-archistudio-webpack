const {merge} = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
    host: '127.0.0.1',
    open: true,
    liveReload: true,
    hot: false
  },
});
