# index.js

```js
const { host, versions } = require("uxp");
const os = require("os");

// Log host environment information ðŸ’»
function logHostInfo() {
  console.log("=== Host Environment ===");
  console.log(`OS: ${os.platform()} ${os.release()}`);
  console.log(`Application: ${host.name} v${host.version}`);
  console.log(`UXP Runtime: v${versions.uxp}`);
  console.log(`Plugin Version: v${versions.plugin}`);
  console.log(`UI Locale: ${host.uiLocale}`);
}
logHostInfo();
```
