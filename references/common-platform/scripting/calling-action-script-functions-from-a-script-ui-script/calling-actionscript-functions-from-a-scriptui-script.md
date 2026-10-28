# Communicating with the Flash application - Calling ActionScript functions from a ScriptUI script

From ExtendScript, call ActionScript methods defined in the Flash application by using the FlashPlayer invokePlayerFunction() method:

Call `flashElement.invokePlayerFunction("ActionScript_function_name", args)` with an array containing the actual arguments, in their required order. The return value is the invoked ActionScript function’s result.

The optional arguments let the script send supported-type data to the ActionScript method.

Before an Adobe application script can call an ActionScript function, the Flash application must register that function with ExternalInterface as a callback from the Flash container. Register it with ExternalInterface.addCallback():

```actionscript
public static addCallback(methodName:String, instance:Object, method:Function);
```

This example registers getActionScriptArray(), a function defined in the Adobe application script:

```javascript
ExternalInterface.addCallback( "getActionScriptArray", this, getActionScriptArray );
```
