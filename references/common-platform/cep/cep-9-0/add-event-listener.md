# addEventListener

The addEventListener definition is below. See CSInterface.js for additional information:

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

One important behavior: CSInterface.addEventListener accepts both named callback functions and anonymous callback functions.

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

`event.data` may hold an object, so an object can be assigned as the event data.

Before CEP 6.1, every attribute in an `event.data` object was treated as a plain string. From CEP 6.1 onward, CEP preserves each attribute's original type in `event.data`; when a value is valid JSON, CEP parses it natively and converts it to an object.
The following example shows how to use that behavior.

```javascript
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     var obj = event.data;
     console.log("type=" + event.type + ", data.property1=" + obj.property1 + ", data.property2=" + obj.property2);
}
); // Anonymous function is the second parameter
```
