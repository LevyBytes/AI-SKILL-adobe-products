# Important Considerations

- **App dependency**: A plugin is installed only when its matching host app (e.g., Premiere) is part of the package or is already present.
- **Error handling**: If plugin installation fails, the overall package installation continues.
- **Activation**: When a plugin needs the host app to restart, users must relaunch that app before the plugin is active.
- **Unique IDs**: To distribute the same plugin internally and through the Creative Cloud Marketplace, create a cloned plugin that uses a different ID, as covered in [the packaging ID guidance](../package-a-uxp-plugin/mind-your-plugin-s-id.md).
- **UPIA tool**: Administrators can use the command line [for plugin deployment](https://helpx.adobe.com/in/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html) whenever needed.
- **Offline use**: Per [the offline-use FAQ](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/faq#i-work-exclusively-offline-or-in-a-setting-where-access-to-the-internet-is-extremely-limited-can-i-use-scripts-plugins-extensions-or-c-plugins-how-can-i-install-all-of-the-above-without-the-creative-cloud-desktop-app-or-while-offline), teams with limited internet access or Adobe's Feature Restricted Licensing can still install and run UXP plugins from `.ccx` files with the UPIA tool.
