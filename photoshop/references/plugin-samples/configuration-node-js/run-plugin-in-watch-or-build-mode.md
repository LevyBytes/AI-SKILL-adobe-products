# 2. Run plugin in watch or build mode

```bash
yarn watch        # or npm run watch

# Or choose the alternative build command:

yarn build        # or npm run build
```

> Run `build` before trying to load this plugin in Photoshop.

- `yarn watch` or `npm run watch` builds a development copy of the plugin, recompiling whenever the source files change. The output goes into `dist`.
- `yarn build` or `npm run build` builds a production copy of the plugin and writes it to `dist`. It does not refresh after each source-file change.

**Note:** UXP cannot implicitly access `localhost` for a development server, so this plugin uses inline WebAssembly to operate correctly. You will therefore see this import in `js/index.js`:

```javascript
import encodedRust from '../wasm/uxp.wasm';
```

The build script generates this JS file with inline WebAssembly. To generate the file yourself, run:

```bash
yarn inlinewasm   # generate JS file containing the inline WebAssembly data
```
