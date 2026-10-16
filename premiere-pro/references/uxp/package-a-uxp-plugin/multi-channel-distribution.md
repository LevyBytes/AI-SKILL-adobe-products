# Multi-channel distribution

When any distribution plan combines other marketplaces or direct delivery with the Creative Cloud Marketplace, assign **two different IDs**: reserve one ID for the Creative Cloud Marketplace and use another for all non-Marketplace channels.

Paid plugins are especially affected. If someone installs a third-party purchase, Creative Cloud Desktop checks the plugin's ID against that person's Adobe ID. An ID that belongs only to the Marketplace listing causes the install to fail because Adobe cannot confirm the third-party purchase entitlement.

- ❌ **Reusing one ID across all channels** (including the Creative Cloud Marketplace):

  1. A user buys a UXP plugin from a third-party marketplace.
  2. Creative Cloud Desktop (CCD) manages installation and looks for the plugin in the Creative Cloud Marketplace.
  3. When Adobe's Marketplace includes the plugin, CCD checks whether the current user, identified by Adobe ID, bought it there.
  4. Because the transaction did not occur in Adobe's Marketplace, the user has no Marketplace entitlement and CCD refuses the install.

- ✅ **Separate ID reserved for the Creative Cloud Marketplace**:
  1.  A user buys a UXP plugin from a third-party marketplace.
  2.  Creative Cloud Desktop (CCD) manages installation and checks Marketplace availability for that plugin.
  3.  Because the plugin is not listed in the Creative Cloud Marketplace under that ID, no user entitlement check runs and installation can complete.
