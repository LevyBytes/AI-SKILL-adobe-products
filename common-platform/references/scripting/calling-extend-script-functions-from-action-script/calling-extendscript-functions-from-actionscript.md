# Communicating with the Flash application — Calling ExtendScript functions from ActionScript

The ActionScript ExternalInterface class can call an ExtendScript function that is defined on the FlashPlayer element in the Adobe application script, then run that call from the ActionScript environment. The FlashPlayer element must define a method with the same function name.

To let SWF code invoke myExtendScriptFunction in ExtendScript, add a method named myExtendScriptFunction to the FlashPlayer control object. Function names have no extra restrictions, but only supported data types may be used for inputs and return values.

No ActionScript-side registration is needed for the ExtendScript function. The ActionScript script can call the external function directly through ExternalInterface.call():

```javascript
var res = ExternalInterface.call( "myJavaScriptFunction" );
```

When Flash Player performs the ExternalInterface call, ScriptUI searches the FlashPlayer element for a method with the requested name and calls it with the supplied arguments. Inside that function, the JavaScript this object points to the FlashPlayer object.
