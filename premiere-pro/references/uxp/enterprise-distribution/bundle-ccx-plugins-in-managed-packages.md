# 2. Bundle `.ccx` plugins in managed packages

For plugins that do not appear in the Marketplace, such as builds distributed only inside an organization:

- During package creation, **enable the "create a folder for extensions" option** and [include the UPIA tool](https://helpx.adobe.com/enterprise/using/manage-extensions.html#others).
- Package creation adds a folder inside the package layout; put the plugin's `.ccx` files there.
- At deployment time, those bundled plugins are installed automatically alongside the Creative Cloud apps.

For more background, use [Admin Console packaging guidance](https://helpx.adobe.com/enterprise/using/manage-extensions.html#others) and the [UPIA tool documentation](https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/manage-plugins/install-plugins-using-upia-tool.html).
