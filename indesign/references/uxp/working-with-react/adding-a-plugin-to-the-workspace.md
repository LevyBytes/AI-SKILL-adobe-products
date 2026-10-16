# Adding a plugin to the workspace

In this scenario, the plugin effectively has _two_ `manifest.json` files. One belongs to the plugin's source code directory, and the other belongs to the plugin's distribution directory.

Either file can be loaded, but the differences matter.

- Adding the plugin with the distribution `manifest.json` loads it entirely from the distribution folder. If your build steps remove and recreate that distribution folder, or clear all files inside it, the plugin may not reload correctly in the developer tool.
- Adding the plugin with the source `manifest.json` is preferred, but it also requires editing the plugin's options. Open **••• > Options**, click **Advanced**, then enter the _relative_ path from the selected `manifest.json` file to the plugin's distribution folder. The plugin loads in the same manner as the previous point, while build steps that remove or recreate the distribution folder no longer interfere with reloading the plugin in the developer tool.

Also note that when you add a plugin that uses a bundler or framework, you must install its dependencies yourself with `npm install` or `yarn install`. The Developer Tool will not do that for you.
