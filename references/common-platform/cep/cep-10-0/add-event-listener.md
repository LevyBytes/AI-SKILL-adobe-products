# addEventListener

The definition for addEventListener is below. See CSInterface.js for more information:

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

Note that CSInterface.addEventListener supports both named and anonymous callback functions.

- Example that passes a named callback function to `CSInterface.addEventListener`.

```javascript
function callback(event)
{
    console.log("type=" + event.type + ", data=" + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback); //invoke the function
```

- Example that passes an anonymous callback function to
  `CSInterface.addEventListener`.

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     console.log("type=" + event.type + ", data=" + event.data);
}
); // Anonymous function is the second parameter
```

event.data may be an object; in other words, an object can be used as event.data.

Before CEP 6.1, each attribute in the event.data object was treated as an ordinary string. Starting with CEP 6.1, CEP preserves the original type of each event.data attribute. When the value is a valid JSON string, CEP parses it natively and converts it into an object.
The example below demonstrates this behavior.

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     var obj = event.data;
     console.log("type=" + event.type + ", data.property1=" + obj.property1 + ", data.property2=" + obj.property2);
}
); // Anonymous function is the second parameter
```
