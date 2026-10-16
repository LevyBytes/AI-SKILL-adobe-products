# JS Lib Break due to node symbols (possible for many other libraries)

The newer nodejs integration puts "module" and "exports" into the global context. Libraries such as JQuery often choose their startup path by testing whether a "module" symbol exists globally. For example, JQuery contains this boot-time pattern:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When CEP's browser runs that code with nodejs enabled, JQuery loads into module context instead of Browser context. That can break extension startup. Use this pattern for those cases:

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

If the extension does not use "module" and "exports", the final 2 lines above may be omitted.
This mirrors the approach commonly used for nodejs's require during imports. If require is already handled, keep handling it in the same manner.
