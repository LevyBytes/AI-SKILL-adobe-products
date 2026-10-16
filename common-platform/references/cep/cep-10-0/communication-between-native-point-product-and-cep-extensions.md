# Communication between Native Point Product and CEP extensions

Communication between a native point product and CEP extensions can be handled through CEP events. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` for this exchange.

Use this sequence:

Begin by defining a callback function in the CEP extension:

```javascript
function callback(event)
{
    // do something here
}
```

Then call CSInterface.addEventListener with the target event type and the callback function:

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback);
```
