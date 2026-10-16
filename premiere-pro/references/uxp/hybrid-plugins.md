# Hybrid Plugins

Add C++ native library capability to UXP plugins.

### Overview

UXP plugins already support broad functionality with JavaScript, HTML, and CSS. Some needs still fall outside what the UXP runtime can handle well, such as performance-sensitive computation or reuse of existing native codebases. For those cases, UXP provides **Hybrid Plugins**.

A **UXP Hybrid plugin** is still a normal UXP plugin, with the additional ability to load dynamically-linked shared objects written in C++. Its model resembles Node.js [C++ addons](https://nodejs.org/api/addons.html): `require()` pulls compiled native libraries into the runtime, just as it does for JavaScript modules.

```js
const addon = require("sample.uxpaddon");
```

Once loaded, the addon exposes C++ functions and properties to JavaScript, allowing direct communication between the JavaScript side and the native side.
