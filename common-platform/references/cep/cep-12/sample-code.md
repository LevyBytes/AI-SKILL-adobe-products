# Sample Code

Start in ExtendScript by creating the external object instance.

```javascript
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, create the CSXSEvent instance.

```javascript
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, dispatch that instance:

```javascript
eventObj.dispatch();
```

The complete panel-side JavaScript example below calls ExtendScript through `evalScript` and receives its event.

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
