/* eslint-disable  */
/*
 * @Author       : ADI
 * @Date         : 2021-04-03 13:23:28
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 14:38:50
 */
const { name } = require("../package.json");

export const genScssOptions = function (env) {
  const prependKey = env == "vite" ? "additionalData" : "prependData";
  return {
    [prependKey]: `$primary-color: #42b983;`,
  };
};

export const genHtmlOptions = function (env) {
  const options = {
    title: name,
    env: {},
  };
  if (env === "vite") {
    options.env.TOOL_NAME = "vite";
  }
  return options;
};
