# Interaction between extension and point product during extension unload

When an extension is about to unload, the communication channel between the extension and the point product has already been torn down. As a result, the point product has no simple way to retrieve extension-related details such as extension status.

This behavior requires cooperation between the extension and the point product.

On the extension side, JavaScript provides `registerExtensionUnloadCallback` for registering a callback function. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/CEP_9.x/CEPEngine_extensions.js. Limitations include:

- If registerExtensionUnloadCallback is called more than once, CEP uses the most recent callback function that registered successfully.
- The callback function must be context-independent; CEP runs it from the mainframe context.

Example

```javascript
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving that event, the point product can read the file written by the extension to get extension-related information.

Because execution in the extension and point product happens in parallel, the point product must handle ordering.

CEF 3's multi-process architecture prevents this method from working.
