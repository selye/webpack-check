const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  mode: "development", // 模式
  devtool: "inline-source-map",
  entry: "./src/index.tsx", // 打包入口地址
  devServer: {
    static: path.resolve(__dirname, "public"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    // filename: "[name].bundle.js", // 输出文件名
    // path: path.join(__dirname, "dist"), // 输出文件目录
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "我是title",
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
  ],
};
