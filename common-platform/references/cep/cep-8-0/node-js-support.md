# Node.js Support

A major CEP 5.0 addition is the ability for HTML extensions to use Node.js APIs. Most built-in APIs from Node.js version 0.8.22 are exposed to HTML extensions, except for these items:

- Cluster APIs are not supported.
- Console APIs are not supported on Windows.

Additional notes:

- CEP injects these symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - the Buffer class from node
  - **process** - the process class from node
  - **require** - the magic function used to access node APIs
  - **module** - compatibility support for node's special main-script module
- Conflicts with Web-Based Require Function
  - When an app uses a library such as `RequireJS` that adds a require function to the DOM, consider renaming CEP's require function before migration.

```html
<script>
  window.nodeRequire = window.require;
  window.require = undefined;
</script>
<script src="your/require/js/file.js"></script>
```

Load this before the third-party loader. Replace its script path with the bundled library path. Call Node modules through window.nodeRequire afterward.

- Conflicts with Web-Based module Function
  - If your app uses `JQuery` and it attempts to register as a `nodejs` plugin, put the script below inside a script tag so window.module resolves to undefined.

```html
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security reasons, CEP includes an option for disabling Node.js APIs inside an iframe. Add the `nodejs-disabled="true"` attribute to the iframe tag, as shown here:

```html
<iframe id="xxx" class="xxxxx" nodejs-disabled="true"></iframe>
```

- Forcing the environment implementation. With `RequireJS`, the text plugin may inspect which environment can load text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes the `Node` or `Rhino` environment has already loaded a library that supplies an `XHR` implementation. To choose the implementation explicitly, pass an `"env"` module config to the plugin:

```js
requirejs.config({
  config: {
    text: {
      //Valid values are 'node', 'xhr', or 'rhino'
      env: "rhino",
    },
  },
});
```

### Node.js Support

CEP 6.1 updates the HTML engine to CEF 2272, based on Chromium 41.0.2272.104, and integrates IO.js version 1.2.0.

Additional notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs are off by default at both the extension level and the iFrame level. In CEP versions before 6.1, they were enabled by default.

To enable Node.js APIs:

- Use version 5.0 or higher for both `ExtensionManifest` and `RequiredRuntime`.
- Put `--enable-nodejs` in the extension manifest. See Customize CEF Command Line Parameters for details.
- For `Node.js` APIs inside IFrames, add `enable-nodejs` on that IFrame and each ancestor iFrame. If one ancestor omits the property, `Node.js` APIs will not operate.

```xml
<iframe id="xxx" class="xxxxx" enable-nodejs>
```

- The previous `nodejs-disabled` CEF command line parameter and iFrame property are ignored by the newer HTML engine and are no longer supported.
- Node context and Browser context
  - Integrating `io.js` into CEF created two JavaScript context types: browser and `io.js`. Global objects made in HTML pages belong to the browser context, while `required` js files run in the `io.js` context. The contexts cannot directly read each other's data. Share data by passing object references between them: - From browser context into `io.js` context - For example,
    in browser context, `var backbone = require('backbone');` runs the backbone module code and passes the resulting object back into browser context. - From `io.js` context into browser context - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code a route to browser-context objects. For example, to read a browser-context global object named `localeStrings` from an `io.js` module, use `window.localStrings` in that `io.js` module.
