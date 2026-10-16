# Development

For development builds, `package.json` defines two usable scripts. Both rely on the `host` key in the plugin's `manifest.json` file. In that location, an array lists the required versions for Photoshop and XD. When the plugin is loaded, the UXP Developer Tool can create one plugin entry per specified application automatically. With that setup, the same manifest and `dist` folder support testing in both applications.

The two scripts are:

- `yarn watch` or `npm run watch` builds a development version of the plugin, recompiling whenever source files change. Output goes to `dist`.
- `yarn build` or `npm run build` builds a development version of the plugin and writes it to `dist`. It does not rebuild after each source-file change.
