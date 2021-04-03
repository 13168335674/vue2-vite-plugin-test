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

## CHANGE LOG

1. 引入 Vite `yarn add vite vite-plugin-vue2`
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
- 复制 /public/index.html => /index.html
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
