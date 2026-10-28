# Sample Code

First, ExtendScript code creates the external object instance.

```javascript
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, instantiate `CSXSEvent`.

```javascript
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, dispatch the event through that instance:

```javascript
eventObj.dispatch();
```

The ExtendScript sample is shown below.

```javascript
var cs = new CSInterface();
cs.addEventListener("documentCreated", function (event) {
    alert("Cool!" + event.data);
});
var extendScript = [
    'var mylib = new ExternalObject("lib:PlugPlugExternalObject");',
    'app.documents.add();',
    'var eventObj = new CSXSEvent();',
    'eventObj.type = "documentCreated";',
    'eventObj.data = "blahblah";',
    'eventObj.dispatch();'
].join("\n");
cs.evalScript(extendScript);
```

This example targets Photoshop or Illustrator with PlugPlugExternalObject support and CSInterface loaded. The event listener runs in CEP; the string runs in the host ExtendScript engine.
