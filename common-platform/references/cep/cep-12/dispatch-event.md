# dispatchEvent

The definition for `CSInterface.dispatchEvent` is below. See `CSInterface.js` for more details.

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.dispatchEvent = function(event)`

Triggers a CEP event programmatically. You can use it to dispatch
an event of a predefined type, or of a type you have defined.

@param event A CSEvent object.

These three samples show how to dispatch an event in JavaScript.

- Example dispatching an event in JavaScript.

```javascript
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Another example creates an event object, sets a property, then dispatches it.

```javascript
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Example dispatching an event whose data is an object.

```javascript
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
csInterface.dispatchEvent(event);
```
