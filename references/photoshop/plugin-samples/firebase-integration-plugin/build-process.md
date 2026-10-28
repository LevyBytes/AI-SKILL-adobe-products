# Build Process

Photoshop can use the plugin after either of these build paths:

- `yarn watch` or `npm run watch`: creates a development build and recompiles whenever source files change. The resulting files are placed in `dist`.
- `yarn build` or `npm run build`: creates a production build and writes it to `dist`. It does not refresh automatically after source files change.

> Before attempting to use the plugin in Photoshop, run either `watch` or `build`.
