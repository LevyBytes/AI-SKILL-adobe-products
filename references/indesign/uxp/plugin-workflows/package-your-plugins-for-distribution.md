# Package your plugins for distribution

After a plugin is polished, debugged, and ready to share, distribution requires packaging it as a "ccx" file.

- Before packaging for distribution, get a plugin ID through the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) website.
- Generate the ccx file by choosing the `Package` option in the Actions menu.
- Choose the folder where the ccx file should be stored. The plugin package is always named after the plugin's ID.

For distribution details, read [Sharing Your Plugin](../share-your-work-with-others.md).

The **Advanced** section lets you set the plugin's build folder, measured from its `manifest.json` file. This is especially useful when [working with React](../working-with-react/reference-index.md) or other bundlers.
