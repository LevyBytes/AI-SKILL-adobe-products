# dispatchEvent

The definition for `CSInterface.dispatchEvent` is below. For more detail, refer to `CSInterface.js`.

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.dispatchEvent = function(event)`

Triggers a CEP event programmatically. You can use it to dispatch
an event of a predefined type, or of a type you have defined.

@param event A CSEvent object.

These three JavaScript snippets show different ways to dispatch an event.

- JavaScript event-dispatch example.

```js
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Example that creates the event object first, assigns properties, and then dispatches it.

```js
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Example dispatching an event whose data payload is an object.

```js
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
cSInterface.dispatchEvent(event);
```
