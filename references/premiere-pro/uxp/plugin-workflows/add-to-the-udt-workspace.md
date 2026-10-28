# Add to the UDT workspace

Bundler-based plugins commonly contain two `manifest.json` files: one in the plugin source directory and another in the plugin distribution directory.

[Figure: UDT - Manifest files](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-manifests.png)

Either manifest can be loaded, but the behavior differs.

- Adding a plugin through the **distribution** `manifest.json` makes UDT load the full project from the distribution folder. If build steps delete and recreate that folder, or wipe all of its contents, the plugin _may not_ reload correctly in UDT.
- Adding a plugin through the **source** `manifest.json` is preferred, with an additional options change afterward.

For the source-manifest setup, use the plugin's **••• > Options...** menu in UDT, choose **Advanced**, then enter the distribution-folder relative path from the selected source `manifest.json` file. This loads the plugin as the distribution-manifest setup does, while keeping build processes that remove or recreate the distribution folder from breaking UDT reload behavior.

[Figure: UDT - Advanced options: distribution folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-dist-folder.png)

When a bundler or framework is involved, run `npm install` or `yarn install` so its dependencies are present. UDT does not install dependencies automatically.
