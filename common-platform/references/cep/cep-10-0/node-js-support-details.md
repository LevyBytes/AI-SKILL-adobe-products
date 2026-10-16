# Node.js support details

A major feature in CEP 5.0 and later is the ability to use Node.js APIs in HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for the following:

- Cluster APIs: unsupported.
- Console APIs: unsupported on Windows.

Other details to note:

- CEP injects the following symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - node Buffer class
  - **process** - node process class
  - **require** - the magic function for reaching node APIs
  - **module** - compatibility symbol for node's special main-script module
- Conflicts with Web-Based Require Function
  - When an app uses libraries such as `RequireJS` that insert a require function into the DOM, consider renaming CEP's require function during migration.

```html
<script>
  window.nodeRequire = window.require;
  window.require = undefined;
</script>
<script src="your/require/js/file.js"></script>
```

Load this before the third-party loader. Replace its script path with the bundled library path. Call Node modules through window.nodeRequire afterward.

- Conflicts with Web-Based module Function
  - When an app uses `JQuery` and it tries to register itself as a `nodejs` plugin, add the script below inside a script tag so window.module becomes undefined.

```html
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security reasons, CEP provides an option to disable Node.js APIs in iframe. Add a `nodejs-disabled="true"` attribute to the iframe tag, as shown here:

```html
<iframe id="xxx" class="xxxxx" nodejs-disabled="true"></iframe>
```

- Forcing the environment implementation. With `RequireJS`, the text plugin tries to detect the environment available for loading text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a loaded library in the `Node` or `Rhino` environment may introduce an `XHR` implementation. Set the plugin's `"env"` module config to choose the implementation explicitly:

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
