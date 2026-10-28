# Package with the UXP Developer Tool

Launch the UXP Developer Tool and verify that the plugin to be packaged appears in the workspace. It can remain unloaded in the host application.

Use the **•••** icon to open the flyout menu, then choose **Package**.

[Figure: Package with the UXP Developer Tool](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-package-menu.png)

The tool then displays a dialog for choosing the destination folder for the package.

[Figure: Destination folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-destination-folder.png)

When packaging succeeds, the created file uses the plugin ID as its name, for example `Test-xjluvc_premierepro.ccx`.

[Figure: Package created](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-success.png)

A green toast confirms a successful operation. If packaging fails, select Details on the red toast, open the Logs, and review the error message.

[Figure: Package error](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/distribution/package/img/package-error.png)

Run an installation test before distributing the package so you know the installer behaves correctly.
