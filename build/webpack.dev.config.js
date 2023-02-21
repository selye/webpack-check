const commonConfig = require("./webpack.base.config");
const { smart: merge } = require("webpack-merge");

const devConfig = {
  mode: "development", // 开发环境
};

module.exports = merge(commonConfig, devConfig);
