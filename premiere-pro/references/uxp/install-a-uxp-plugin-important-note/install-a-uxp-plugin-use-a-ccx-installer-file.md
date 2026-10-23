# Install a UXP plugin - Use a `.ccx` installer file

If you built a UXP plugin yourself or received one from a third party, install it by **double-clicking on the `.ccx` file**. When the Creative Cloud Desktop application is closed, it opens first. Because the plugin did not come from the Creative Cloud Marketplace, an additional warning dialog appears; choose **Install** to proceed.

[Figure: Installation dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-installation-dialog.png)

Some plugins require access such as Network or Local FileSystem permissions; the needed level is defined in [this section](../supporting-definitions/permissions-definition.md) of the Manifest reference, and administrative approval may be needed.

[Figure: Installation dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-warning-dialog.png)

After installation finishes, the plugin appears in the Plugins section of the Creative Cloud Desktop application and in the host application. In Premiere, it is available from the **Window** > **UXP Plugins** menu.

[Figure: Installed plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/img/install-ccx-installed-plugin.png)

When installation fails, use the Details link on the red toast to open the Logs and inspect the error message. The [Troubleshooting](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/install/index.md#troubleshooting) section has more information.
