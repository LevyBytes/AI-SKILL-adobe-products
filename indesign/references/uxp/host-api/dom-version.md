# DOM version

DOM versioning means selecting a particular version of the InDesign Document Object Model. Pinning a version helps scripts and plugins stay forward compatible, so they can continue running in newer InDesign releases even when later DOM changes exist.

Current DOM version choices are **3.0, 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 9.0, 10.0, 10.1, 10.2, 11.0, 11.2, 11.3, 11.4, 12.0, 12.1, 13.0, 13.1, 14.0, 15.0, 15.1, 16.0, 16.1, 16.2, 17.0, 18.0**

To inspect the DOM API version currently used by the app, run:

```js
const myInDesign = require("indesign");
const app = myInDesign.app;
console.log(app.scriptPreferences.version);
```

To move to a specific DOM API version, require that versioned module:

```js
const myInDesign = require("indesign-16.1");
```

From that point forward, the script uses v16.1 DOM APIs.

**NOTE** that after retrieving a specific DOM version, assume that version is 'A'; a later `require("indesign")` call resolves to that same DOM version 'A'. For example,

```js
const inDesignAppV17 = require("indesign-17.0").app;
const inDesignApp = require("indesign").app;

console.log(
  `Versions: ${inDesignAppV17.scriptPreferences.version} and ${inDesignApp.scriptPreferences.version} will be v17.0`,
);
```

Also, two different DOM versions cannot be used simultaneously. `require("indesign");` indicates that the DOM version will not change again. In this example, `inDesignV17` resolves to 'undefined'.

```js
const inDesign = require("indesign");
const inDesignV17 = require("indesign-17.0");
```

After selecting the needed DOM API version, use the [API reference](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/dom/api/index.md) to find the available objects, methods etc.
