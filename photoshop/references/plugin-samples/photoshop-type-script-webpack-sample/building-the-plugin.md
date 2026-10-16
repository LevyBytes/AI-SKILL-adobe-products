# Building the plugin

From the plugin folder, the one that includes `package.json`, install dependencies with:

```shell
npm install
```

or

```shell
yarn install
```

Next, generate the plugin's `dist/index.js`, which is loaded by `index.html`, with:

```shell
npm run build
```

or

```shell
yarn build
```

Behind that command, `webpack` compiles `src/index.ts` into `dist/index.js`.

Once the build is complete, load the plugin into Photoshop through the UXP Developer Tool:
