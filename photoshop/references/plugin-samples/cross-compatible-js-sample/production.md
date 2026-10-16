# Production

For production builds, `package.json` defines another set of scripts. Unlike development, production allows only one application in the `manifest.json` file. Each script handles that limitation by naming a target application for Webpack to use during the build. Before the build finishes, the `host` key in the manifest file under `dist` is updated to the selected target application.

The two scripts are:

- `yarn build-ps` or `npm run build-ps` builds a production version of the plugin for Adobe Photoshop and writes it to `dist`.
- `yarn build-xd` or `npm run build-xd` builds a production version of the plugin for Adobe XD and writes it to `dist`.

> Run either `watch` or `build` before attempting to use the plugin in Photoshop or XD!
