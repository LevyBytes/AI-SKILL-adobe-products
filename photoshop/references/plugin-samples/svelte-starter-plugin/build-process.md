# Build Process

Photoshop-ready builds can be produced in two modes:

- `yarn watch` or `npm run watch` creates a development build, writes it to `dist`, and recompiles whenever source files change.
- `yarn build` or `npm run build` creates a production build in `dist`; it does not rebuild automatically after source changes.

> Before attempting to use the plugin in Photoshop, run either `watch` or `build`.
