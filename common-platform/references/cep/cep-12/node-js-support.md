# Node.js Support

CEP 5.0 and later make Node.js APIs usable inside HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for:

- Cluster APIs are unsupported.
- Console APIs are unsupported on Windows.

Other things to note:

- CEP injects these symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - Buffer class from node
  - **process** - process class from node
  - **require** - function CEP exposes for loading node APIs
  - **module** - compatibility binding for node's special main-script module
- Conflicts with Web-Based Require Function
  - If the app uses libraries such as `RequireJS` that insert a require function into the DOM, consider renaming CEP's require function during migration.

```html
<script>
  window.nodeRequire = window.require;
  window.require = undefined;
</script>
<script src="your/require/js/file.js"></script>
```

Load this before the third-party loader. Replace its script path with the bundled library path. Call Node modules through window.nodeRequire afterward.

- Conflicts with Web-Based module Function
  - If the app uses `JQuery` and it tries to register itself as a `nodejs` plugin, add the script below inside a script tag so window.module is defined as undefined.

```html
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security, CEP offers an option to disable Node.js APIs in iframe content. Put `nodejs-disabled="true"` on the iframe tag. Example tag:

```html
<iframe id="xxx" class="xxxxx" nodejs-disabled="true"></iframe>
```

- Forcing the environment implementation. When using `RequireJS`, the text plugin tries to detect the environment available for loading text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a library loaded by the `Node` or `Rhino` environment introduces an `XHR` implementation. To force the environment implementation, provide the plugin with this `"env"` module config:

```javascript
requirejs.config({
   config: {
   text: {
      //Valid values are 'node', 'xhr', or 'rhino'
       env: 'rhino'
      }
   }
});
```

### Node.js Support

CEP 6.1 upgraded its HTML engine to CEF 2272, based on Chromium 41.0.2272.104, with IO.js version 1.2.0 integrated.

Other things to note:

- Node.js APIs are **disabled by default**
  - For security, node.js APIs start disabled by default at both the extension level and the iFrame level; before CEP 6.1, they were enabled by default.

To enable Node.js APIs:

- Use `ExtensionManifest` and `RequiredRuntime` versions 5.0 or higher.
- Add `--enable-nodejs` to the extension manifest; Customize CEF Command Line Parameters has the details.
- For `Node.js` API use inside IFrames, put `enable-nodejs` on that IFrame and every ancestor IFrame. Missing it from any ancestor prevents `Node.js` APIs from working.

```html
<iframe id="xxx" class="xxxxx" enable-nodejs></iframe>
```

- The old `nodejs-disabled` CEF command line parameter and iFrame property are no longer supported and are ignored by the new HTML engine.
- Node context and Browser context
  - Because `io.js` is integrated into CEF this way, JavaScript runs in two context types: browser context and `io.js` context. HTML-page globals belong to browser context, while `required` js files execute in `io.js` context. The two contexts do not read each other's data directly. Pass object references between them to share data:
    - Accessing objects in `io.js` context from browser context - In browser context, for example, `var backbone = require('backbone');` runs the backbone module, and the browser context receives that object.
    - Accessing objects in browser context from `io.js` context - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code access to browser-context objects. For example, an `io.js` module can reach a browser-context global named `localeStrings` with `window.localStrings`.
