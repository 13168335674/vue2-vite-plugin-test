# vue2-vite-plugin

## Project setup

- install

```
yarn install  or  npm install
```

- dev

  - vite

    ```
    yarn run serve-vite  or  npm run serve-vite
    ```

  - vue/cli

    ```
    yarn run serve  or  npm run serve
    ```

- build

  - vite

    ```
    yarn run serve-build  or  npm run serve-build
    ```

  - vue/cli

    ```
    yarn run build  or  npm run build
    ```

# 接入步骤

0. 先通过@vue/cli 创建一个 vue2+ts 的初始项目
1. 引入 vite
   `yarn add vite vite-plugin-vue2`
2. 修改 package.json

   ```json
   "scripts": {
     "serve-vite": "vite",
   }
   ```

3. 添加 vite html template

- 引入 vite-plugin-html

  `yarn add vite-plugin-html`

- 配置 `vite.config.js`
- 复制 `/public/index.html` 到 `/index.html`
- 注入 script

  ```html
  <div id="app"></div>
  <!-- built files will be auto injected -->
  <% if (env.TOOL_NAME === 'vite') { %>
  <script type="module" src="/src/main.ts"></script>
  <% } %>
  ```

4. 配置 alias

- 配置 vite.config.js

  ```javascript
  export default defineConfig({
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolvePath("src"),
        },
      ],
    },
  });
  ```

- use

  `import Home from "@/views/Home.vue";`

5. 配置 scss 变量注入

- 配置 vite.config.js

  ```
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`,
      },
    },
  },
  ```

# 开发/打包速度对比

- 开发环境

  ![vue/cli-dev](https://upload-images.jianshu.io/upload_images/4985324-c3298579a3c6be10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
  ![vite/dev](https://upload-images.jianshu.io/upload_images/4985324-07e729b4d1d487f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
- 打包环境

  ![vue/cli-build](https://upload-images.jianshu.io/upload_images/4985324-5efc338fbbfbc0cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
  ![vite/build](https://upload-images.jianshu.io/upload_images/4985324-98901c6db13a3b0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
