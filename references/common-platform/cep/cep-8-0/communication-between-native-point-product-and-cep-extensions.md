# Communication between Native Point Product and CEP extensions

Communication based on CEP events between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` for CEP-extension communication.

Use the following sequence:

First, create a callback function in the CEP extension:

```js
function callback(event) {
  // do something here
}
```

Next, call CSInterface.addEventListener with the event type to observe and the callback function:

```js
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback);
```
