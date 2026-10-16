# Localization and Platforms — OS Identification

When plugin code must branch between macOS and Windows, query the OS platform from the host environment this way:

```js
const hostOS = require("os").platform();
// note that this is a method, not a property.
```

The `hostOS` value is `"darwin"` on macOS and `"windows"` on Windows.
