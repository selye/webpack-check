module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  globals: {},
  plugins: ["react-hooks"],
  rules: {
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    // 检查 Hooks 的使用规则
    "react-hooks/rules-of-hooks": "error",
    // 检查依赖项的声明
    "react-hooks/exhaustive-deps": "warn"
  },
};
