const commonConfig = require("./webpack.base.config");
const { smart: merge } = require("webpack-merge");

const devConfig = {
  mode: "production", // 生产环境
};

module.exports = merge(commonConfig, devConfig);
