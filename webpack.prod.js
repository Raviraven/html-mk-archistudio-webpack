const {merge} = require("webpack-merge");
const common = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
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
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetPlugin()]
  }
});
