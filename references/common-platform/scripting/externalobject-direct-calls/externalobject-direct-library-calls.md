# Loading and using shared libraries - Direct access to library calls through the ExternalObject instance

For C-language libraries, use direct access. Each function from the C library has a matching method on the ExternalObject object. Data can be passed into those methods, and the return value can be received directly.

Example:

```javascript
mylib = new ExternalObject ("lib:" + samplelib); // load the library
alert(mylib.version) ;
// access functions directly from ExternalObject instance
var a = mylib.method_abc(1,2.0,true, "this is data") ;
alert(a) ;
mylib.unload() ;
```

For information on defining functions for direct ExternalObject access, see Defining entry points for direct access
