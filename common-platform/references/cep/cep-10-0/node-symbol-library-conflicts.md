# JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs layer adds "module" and "exports" symbols globally. Libraries such as JQuery often choose their boot path by testing whether "module" exists in the global scope. For ex, JQuery contains code like this during startup:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

With nodejs enabled in CEP's browser, that startup check can cause JQuery to load in module context instead of Browser context, which may break extension startup. Use the following code for those cases:

> **global symbols handling**

```html
<script>
  if (typeof module === "object") {
    window.module = module;
    module = undefined;
  }
</script>
<script>
  if (typeof exports === "object") {
    window.exports = exports;
    exports = undefined;
  }
</script>

<script src="scripts/jquery.min.js"></script>
<script src="scripts/csinterface.js"></script>

<script>
  if (window.module) module = window.module;
</script>
<script>
  if (window.exports) exports = window.exports;
</script>
```

When the extension does not use "module" or "exports", the last 2 lines above can be omitted.
This approach follows the older import-time pattern for nodejs's require. If your extension already handles require, keep using that existing pattern.
