# Interaction between extension and point product during extension unload

As an extension unloads, the communication channel between it and the point product has already been torn down, so the point product has no straightforward way to read extension-related details such as status.

This scenario requires cooperation between the extension and the point product.

On the extension side, use the JavaScript function `registerExtensionUnloadCallback` to register a callback function. Definition reference: https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/CEP_9.x/CEPEngine_extensions.js. These limits apply:

- If registerExtensionUnloadCallback is called more than once, CEP uses the last callback function that registers successfully.
- The callback must be context-independent and execute in the mainframe context.

Sample

```javascript
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving the event, the point product can read the file written by the extension to obtain extension-related information.

Because the extension and point product execute in parallel, the point product must manage ordering.

Because CEF 3 uses a multi-process architecture, the method above does not work.
