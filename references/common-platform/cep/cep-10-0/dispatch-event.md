# dispatchEvent

The `CSInterface.dispatchEvent` definition is shown here. See `CSInterface.js` for more details.

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.dispatchEvent = function(event)`

Triggers a CEP event programmatically. You can use it to dispatch
an event of a predefined type, or of a type you have defined.

@param event A CSEvent object.

The next three samples demonstrate event dispatch from JavaScript.

- JavaScript event-dispatch example.

```javascript
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Another sample creates an event object, assigns its properties, and dispatches it.

```javascript
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Example that dispatches an event with object data.

```javascript
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
csInterface.dispatchEvent(event);
```
