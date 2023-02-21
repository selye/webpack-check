const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log("process.env.NODE_ENV=", process.env.NODE_ENV);
const config = {
  entry: "./src/index.js", // 打包入口地址
  // devServer: {
  //   static: path.resolve(__dirname, "public"),
  //   compress: true,
  //   port: 8080,
  // },
  output: {
    filename: "[name].js", // 输出文件名
    path: path.join(__dirname, "dist"), // 输出文件目录
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    //   new CleanWebpackPlugin(),
  ],
};

module.exports = (env, arg) => {
  return config;
};
