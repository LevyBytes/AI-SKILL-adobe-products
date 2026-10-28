# addEventListener

Definition of addEventListener follows. See CSInterface.js for additional information:

```text
/**
 * Registers an interest in a CEP event of a particular type, and
 * assigns an event handler.
 * The event infrastructure notifies your extension when events of this type occur,
 * passing the event object to the registered handler function.
 *  * @param type     The name of the event type of interest.
 * @param listener The JavaScript handler function or method.
 * @param obj      Optional, the object containing the handler method, if any.
 *         Default is null.
 */
```

Signature: `CSInterface.prototype.addEventListener = function(type, listener, obj)`.

CSInterface.addEventListener supports both named and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```javascript
function callback(event)
{
    console.log("type=" + event.type + ", data=" + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     console.log("type=" + event.type + ", data=" + event.data);
}
); // Anonymous function is the second parameter
```

event.data can be an object; an object may be used as event.data.
