# JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs adds "module" and "exports" to the global context. Many libraries, including JQuery, decide how to boot based on whether a "module" symbol exists in global scope. For example, JQuery uses this code during startup:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When CEP's browser runs this code with nodejs enabled, JQuery loads into module context rather than Browser context. That can break extension startup. Use the code below for these cases:

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

If the extension does not use "module" and "exports", the last 2 lines of this code can be omitted.
This handling mirrors the earlier pattern for nodejs's require during imports. If require is already handled, keep using the same approach.
