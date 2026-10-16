# invokePlayerFunction()

flashPlayerObj.invokePlayerFunction(fnName, [arg1[,...argN]] )

### Description

Calls an ActionScript function that exists in the Flash application.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fnName | String | Name of a Flash ActionScript function that the currently loaded SWF file registered with the ExternalInterface object; see Calling ActionScript functions from a ScriptUI script. |
| args | Any | Optional. Pass one or more arguments through to the function, using any of these types: - Array - Boolean - null - Number - Object - String - undefined |

### Returns

Returns the invoked function's result, which must use one of the allowed types. Return values cannot be ActionScript class objects or date objects.
