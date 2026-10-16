# Sample Code

ExtendScript developers first create an external object instance.

```javascript
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, construct the CSXSEvent instance.

```javascript
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, use the instance to dispatch the event:

```javascript
eventObj.dispatch();
```

The next block is sample ExtendScript code.
