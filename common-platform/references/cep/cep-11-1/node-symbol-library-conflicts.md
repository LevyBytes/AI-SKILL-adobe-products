# JS Lib Break due to node symbols (possible for many other libraries)

The newer nodejs integration places "module" and "exports" in the global context. Libraries such as JQuery often decide how to boot by testing whether "module" exists in the global scope. For ex, JQuery includes this kind of boot-time code:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When that code runs in CEP's browser with nodejs enabled, JQuery loads into module context instead of Browser context. That can interfere with extension startup. Use this pattern for such cases:

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

When the extension does not use "module" or "exports", the final 2 lines in the preceding code can be omitted.
This approach matches the existing pattern many users applied for nodejs's require during imports. If require is already handled, continue using that handling pattern.
