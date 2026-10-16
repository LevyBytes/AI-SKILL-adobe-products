# Accessing UXP APIs

How you reach a UXP API depends on which API is being used.

[**Global APIs**](../global-members.md) can be used immediately, with no import required. For example:

```javascript
// Crypto API is globally available
const hash = crypto.randomUUID();

// Document API is globally available
const button = document.createElement("sp-button");
```

[**Module-based APIs**](../modules.md) are loaded with `require()`. For example:

```javascript
// Parent UXP module
const uxp = require("uxp");

// File system access
const fs = require("fs");

// Operating system utilities
const os = require("os");
```

**Permission-based APIs** must also be allow-listed in the plugin's `manifest.json`. For example, using the [file system](../supporting-definitions/local-file-system.md) or making [network requests](../supporting-definitions/network.md) requires the matching permissions. The [Manifest guide](../manifest.md) explains those permissions in more detail.
