# Plugins

UXP plugins are delivered as `.ccx` files. Internally, a `.ccx` is a zip file.

**IMPORTANT notes**:

- Unless special requirements apply, do not create this zip file manually.
- Before packaging a plugin for use outside your computer, obtain a plugin ID that is valid by using the [plugin ID portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/)
  . If the plugin's `manifest.json` file does not include an id in the `id` field, distribution through the Creative Cloud Marketplace is not available.
