# Distribute

To list a hybrid plugin in the Creative Cloud Marketplace, use [Developer Distribution](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/getting_started/) and follow the [general packaging guidelines](packaging-your-plugin.md).

Also keep these requirements in mind:

1. Use the SDK's README instructions for plugin structure.
2. On macOS, use a valid Apple developer account certificate to sign and notarize executables; self-signed/test certificates are not allowed.
3. Keep the certificate valid for at least one year.
4. Test the plugin on all three architectures - Mac M1, Mac Intel, and Windows Intel. This [guide](distribution-options/reference-index.md) includes tips.

**Important note:** Because hybrid plugins include native capabilities, installation and update require users to enter OS admin credentials, as shown below.

[Figure: Pluign install dialog in macOS](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/distribute/plugin-install-dialog-mac.png) [Figure: Plugin install dialog in Windows](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/hybrid-plugins/distribute/plugin-install-dialog-win.png)
