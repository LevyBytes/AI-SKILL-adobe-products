# Adding a plugin to the workspace

In this scenario, the project effectively has _two_ `manifest.json` files: one in the plugin source code directory and another in the plugin distribution directory.

Either file can be loaded, but the difference matters.

- When the distribution `manifest.json` is used to add the plugin, the plugin loads entirely from the distribution folder. If the build process deletes and recreates that folder, or cleans all files inside it, reloads in the developer tool may fail.
- Using the source `manifest.json` to add the plugin is preferred, but the plugin options also need editing. Open **••• > Options**, click **Advanced**, and enter the _relative_ path from the selected `manifest.json` file to the plugin distribution folder. This loads the plugin in the same way as the distribution-file approach, while build steps that remove or recreate the distribution folder will not disrupt reloading in the developer tool.

Also remember that a plugin using a bundler or framework needs its dependencies installed. For example, when downloading the Photoshop sample plugins, React-based samples require `npm install` or `yarn install`. The Developer Tool does not install those dependencies for you.
