# Plugin Developers

As a plugin developer, replace symlinks in your folders with file paths. Because some node modules use symlinks too, inspect any `node_modules` folders and replace their symlinks as well.

**Other Steps:**

- For now, sign ZXPs on the platform where they will run. Create macOS-bound ZXPs on a macOS machine, and create Windows-bound ZXPs on Windows devices.
- Remove all `.DS_Store` and `__MACOSX` folders/files from your extension directory and its subdirectories. (This connection to the issue has not been confirmed, but distribution through [Adobe's Marketplace](https://exchange.adobe.com/apps/browse/cc) requires this cleanup. [Distribution guidance](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/) describes that process.)
