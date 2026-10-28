# How to determine the host and OS a plugin is using

For localization or similar checks, a plugin may need to inspect its host environment. Use this pattern:

```js
const host = require("uxp").host;
const locale = host.uiLocale;
const hostName = host.name;
const hostVersion = host.version;
const hostOS = require("os").platform(); // note that this is a method, not a property
console.log(`locale: ${locale}  host ${hostName} version ${hostVersion} running on ${hostOS}`);
```
