const {merge} = require("webpack-merge");
const common = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].css"
    }),
  ]
});
