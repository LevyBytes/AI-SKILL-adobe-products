# Using Node.js APIs (CEP 7.0)

Beyond the `Node.js` support that exists in CEP 6.1, CEP 7.0 adds a new `mixed context` `Node.js` mode. In CEP 6.1 `separate context` mode, a `required` node module runs in a separate JavaScript context. In CEP 7.0 `mixed context` mode, the `required` node module and the JavaScript code that `requires` it share one context, removing the problems caused by the older `separate context` model.

The mode is off by default. Add `--mixed-context` to the extension manifest command line parameters to enable it.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<Parameter>--mixed-context</Parameter>
```
