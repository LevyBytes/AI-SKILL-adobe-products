# Build Process

Build the plugin for Adobe Photoshop with either of these workflows:

- `yarn watch` or `npm run watch` creates a development build, watches source-file edits, and recompiles after each change. The output goes into `dist`.
- `yarn build` or `npm run build` creates the production build and writes it to `dist`. It does not refresh automatically when source files change.

> Run either `watch` or `build` before trying to use the plugin in Photoshop.
