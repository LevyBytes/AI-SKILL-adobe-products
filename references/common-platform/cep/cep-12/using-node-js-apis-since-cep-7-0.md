# Using Node.js APIs (since CEP 7.0)

Alongside the existing `Node.js` support in CEP 6.1, CEP 7.0 adds a new `mixed context` `Node.js` mode. In CEP 6.1 `separate context` mode, a `required` node module runs in a separate JavaScript context. In the newer `mixed context` mode, the `required` node module and the JavaScript code that `requires` it run in the same context, removing the inconveniences of the older `separate context` mode.

This mode starts disabled. Enable it by adding the command line parameter `--mixed-context` to the extension manifest.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Parameter>--mixed-context</Parameter>
```
