# Node.js availability

Among CEP 5.0 and later capabilities, a major one is using Node.js APIs inside HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for these cases:

- Cluster APIs are not supported.
- Console APIs are not supported on Windows.

Additional notes:

- CEP adds these symbols to the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - the Buffer class from node
  - **process** - the process class from node
  - **require** - the special function used to access node API support
  - **module** - compatibility support for node's special main-script module
- Conflicts with Web-Based Require Function
  - Before migration, rename CEP's require function when an app uses libraries such as `RequireJS` that insert a require function into the DOM.

```html
<script>
  window.nodeRequire = window.require;
  window.require = undefined;
</script>
<script src="your/require/js/file.js"></script>
```

Load this before the third-party loader. Replace its script path with the bundled library path. Call Node modules through window.nodeRequire afterward.

- Conflicts with Web-Based module Function
  - When an app uses `JQuery` that tries to register itself as a `nodejs` plugin, use this snippet so `window.module` becomes undefined.

```html
<script type="text/javascript">window.module = undefined</script>
```

- Turn off Node.js APIs inside iframe
  - CEP can turn off Node.js APIs for an iframe as a security measure. Use this iframe-tag pattern with `nodejs-disabled="true"`:

```html
<iframe id="xxx" class="xxxxx" nodejs-disabled="true"></iframe>
```

- Forcing the environment implementation. With `RequireJS`, the text plugin attempts to detect the available environment for loading text resources, choosing among `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a loaded `Node` or `Rhino` library introduces an `XHR` implementation. You can force the plugin's environment by passing an `"env"` module config:

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
