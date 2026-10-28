# JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs layer adds "module" and "exports" to the global context. Many libraries, including JQuery, choose their boot path based on whether "module" is present globally. For example, JQuery includes this boot-time code:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

Running this code in the CEP browser while nodejs is enabled causes JQuery to load in module context rather than Browser context. That can break extension startup. Use this code for those cases:

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

If the extension does not use "module" and "exports", the last 2 lines of the preceding code can be omitted.
This follows the same pattern used when imports already handle nodejs require. If require handling is already in place, keep that approach.
