/*
 * @Author       : ADI
 * @Date         : 2021-04-03 13:03:49
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 14:43:08
 */
import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import { injectHtml } from "vite-plugin-html";
import path from "path";

import { genHtmlOptions } from "./config";
const resolvePath = (...arg) => path.resolve(__dirname, ...arg);

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolvePath("src"),
      },
    ],
  },
  plugins: [
    createVuePlugin(),
    injectHtml({
      injectData: genHtmlOptions("vite"),
    }),
  ],
});
