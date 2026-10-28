# Using Node.js APIs (since CEP 7.0)

CEP 7.0 adds a `mixed context` `Node.js` mode on top of CEP 6.1 `Node.js` support. In CEP 6.1 `separate context`, a `required` node module lives in a different JavaScript context; in `mixed context`, both that module and the JavaScript code that `requires` it execute in one context, removing the friction of the earlier `separate context` behavior.

By default, this mode is off. Add command line parameter `--mixed-context` to your extension manifest to turn it on.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Parameter>--mixed-context</Parameter>
```
