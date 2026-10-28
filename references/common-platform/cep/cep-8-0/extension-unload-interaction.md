# Interaction between extension and point product during extension unload

When an extension begins unloading, the connection between the extension and the point product is already gone. Because of that, the point product has no straightforward channel for reading extension information such as current status.

Supporting this workflow requires cooperation from both the extension and the point product.

On the extension side, JavaScript provides `registerExtensionUnloadCallback` for registering the callback. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/CEP_8.x/CEPEngine_extensions.js. These limits apply:

- Calling registerExtensionUnloadCallback repeatedly means the most recent successfully registered callback is the one used.
- The callback must not depend on context, and it runs in the mainframe context.

Example

```js
window.cep.util.registerExtensionUnloadCallback(function () {
  window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving the event, the point product can inspect the file written by the extension to obtain extension-related information.

Because extension execution and point-product execution proceed in parallel, the point product must manage ordering.

This approach fails under the CEF 3 multi-process architecture.
