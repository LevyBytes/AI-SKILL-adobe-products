# addEventListener

The addEventListener definition appears below. See CSInterface.js for additional information:

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.addEventListener = function(type, listener, obj)`

Registers an interest in a CEP event of a particular type, and
assigns an event handler.
The event infrastructure notifies your extension when events of this type occur,
passing the event object to the registered handler function.
 * @param type     The name of the event type of interest.
@param listener The JavaScript handler function or method.
@param obj      Optional, the object containing the handler method, if any.
        Default is null.

`CSInterface.addEventListener` accepts both named callback functions and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```js
function callback(event)
{
    console.log("type=" + event.type + ", data=" + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```js
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     console.log("type=" + event.type + ", data=" + event.data);
}
); // Anonymous function is the second parameter
```

`event.data` may hold an object, so an object can be assigned directly to `event.data`.

Before CEP 6.1, every attribute inside the `event.data` object was treated as a normal string. Starting in CEP 6.1, each attribute keeps its original type. When a value is a valid JSON string, CEP parses it natively and converts it into an object.
The following example demonstrates that behavior.

```js
var csInterface = new CSInterface();
csInterface.addEventListener("com.adobe.cep.test", function (event)
{
     var obj = event.data;
     console.log("type=" + event.type + ", data.property1=" + obj.property1 + ", data.property2=" + obj.property2);
}
); // Anonymous function is the second parameter
```
