# Packaging Your Plugin

Packaging plugin code is now a straightforward process.

Photoshop UXP plugins ship as `.ccx` files. Internally, that file is a zip archive. In ordinary cases, let the tooling create the archive instead of building that zip file by hand.

**IMPORTANT**:
For distribution beyond your own computer, begin in the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) and obtain a valid ID. The id belongs in the `id` field of the plugin's `manifest.json` file; without it, Creative Cloud Marketplace distribution is not available.

In the [UXP Developer Tool](adobe-uxp-developer-tool.md), open the Actions menu, which is the ellipsis at the right side of the Developer Tool window on the plugin-name row, and choose `Package`:

[Figure: Package Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/udt-package-menu.png)

A "Select target directory" dialog appears. Pick the directory where the built plugin `.ccx` file should be placed.

When `.ccx` creation finishes successfully, the Developer Tool window shows this message at the bottom:

[Figure: Package Success](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/package-success.png)

If the package operation fails, the window instead shows this result:

[Figure: Package Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/package-failed.png)

Use `Details` to open the window that explains the packaging failure.

After the `.ccx` file is built, test it locally before taking any distribution step. To install a `.ccx` file into a Creative Cloud application, double-click it. Creative Cloud opens and warns that Adobe has not verified the plugin:

[Figure: Verify Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/verify-failed.png)

Because you created this plugin, local installation is probably acceptable. Select `Install locally`; a second warning appears:

[Figure: Install Warning](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/distribution/images/install-warning.png)

In this specific case, _you_ are the third-party developer, so clicking OK is expected. If the `.ccx` file came from someone else, treat this dialog as a trust check and confirm the sender before continuing.

With the packaged plugin installed, run through the plugin again to verify that this packaged build behaves correctly. After that, continue to [Options for Distribution](distribution-options/reference-index.md) and choose how to release it.
