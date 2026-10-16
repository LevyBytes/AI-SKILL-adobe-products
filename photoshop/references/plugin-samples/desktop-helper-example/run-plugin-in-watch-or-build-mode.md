# 2. Run plugin in watch or build mode

```bash
cd uxp
yarn watch     # or npm run watch

# Or choose the alternative build command:

yarn build     # or npm run build
```

- `yarn watch` or `npm run watch`: creates a development build of the plugin, recompiling whenever the source files change. The output goes to `uxp/dist`.
- `yarn build` or `npm run build`: creates the production build and writes it to `uxp/dist`; source-file changes do not trigger automatic updates.

> Before using the plugin in Photoshop, run either `watch` or `build`.
