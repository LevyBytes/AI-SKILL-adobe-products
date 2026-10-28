# Interaction between extension and point product during extension unload

When unloading begins, the extension-to-point-product communication channel has already been torn down. For that reason, the point product has no simple way to retrieve extension-related details such as extension status.

Supporting this behavior requires cooperation between the extension and the point product.

On the extension side, the JavaScript function `registerExtensionUnloadCallback` registers the callback. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/CEP_9.x/CEPEngine_extensions.js. These limitations apply:

- Calling registerExtensionUnloadCallback more than once means the last callback that registers successfully is the one CEP uses.
- The callback function must be context-independent, because it runs in the mainframe context.

Example

```javascript
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving that event, the point product can read the file written by the extension to obtain extension-related information.

The extension and point product run at the same time, so ordering has to be handled by the point product.

CEF 3's multi-process architecture prevents the method above from working.
