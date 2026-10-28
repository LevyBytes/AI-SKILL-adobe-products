# Packaging a plugin

Packaging plugin code is now a straightforward step.

In the [UXP Developer Tool](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/devtool/index.md), select `Package` from the Actions menu, represented by the ellipsis on the far right of the row containing the plugin name:

[Figure: Package Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/udt-package-menu.png)

A "Select target directory" dialog appears. Pick the directory where the built plugin `.ccx` file should be placed.

When creation of the `.ccx` file succeeds, UDT displays this message along the bottom of its window:

[Figure: Package Success](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/package-success.png)

If the tool shows this instead:

[Figure: Package Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/package-failed.png)

Select `Details` to open a window explaining the packaging failure.

After the `.ccx` file is built, test it locally before taking any next step. A .ccx file is installed in a Creative Cloud application by double-clicking it. Creative Cloud opens and displays a warning that Adobe has not verified the plugin:

[Figure: Verify Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/verify-failed.png)

Because you created this plugin, installing it is probably safe. Select `Install`, then another warning appears:

[Figure: Install Warning](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/install-warning.png)

In this situation, _you_ are the third-party developer, so clicking OK is safe. If someone else sends you a `.ccx` file and this dialog appears, verify that you trust the sender first.

With the plugin installed, test it again so the packaged version is confirmed to work. Then continue to [Options for Distribution](../distribution-options.md) and share the plugin more broadly.
