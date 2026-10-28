# Load plugin

Adding plugins to the developer workspace does not automatically place them in a supported host application. Launch the host application first, then choose **••• > Load** for the plugin so it starts in the host. This workflow lets you keep using the marketplace build when active development is paused, while switching to the development build whenever you need to create a new version.

A successful load shows a small green notification at the bottom of the screen confirming that the plugin loaded.

[Figure: Load Successful](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-load-successful.png)

When a plugin _fails_ to load, a small red notification appears with a **Details** link.

[Figure: Load Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-load-failed.png)

Selecting the `Details` link in this message opens an error log that explains why the plugin did not load:

[Figure: Failure Log](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/tutorials/udt-deep-dive/images/udt-failure-log.png)

After the plugin is loaded, **Reload** is usually the action to use when checking behavior changes. If you edit the plugin's `manifest.json` file, use **Unload** and then **Load** so the plugin starts again from scratch.
