# Communication between Native Point Product and CEP extensions

CEP event-based communication between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` to exchange messages with CEP extensions.

Follow these steps:

Start by declaring this callback inside the CEP extension:

```javascript
function callback(event)
{
    // do something here
}
```

Next, pass the event type and callback into CSInterface.addEventListener:

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback);
```
