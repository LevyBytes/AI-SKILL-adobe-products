# Communication between Native Point Product and CEP extensions

CEP event-based communication between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` to communicate with CEP extensions.

Use these steps:

Begin by declaring a callback function inside the CEP extension:

```javascript
function callback(event)
{
    // do something here
}
```

Next, pass the desired event type and callback function to CSInterface.addEventListener:

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback);
```
