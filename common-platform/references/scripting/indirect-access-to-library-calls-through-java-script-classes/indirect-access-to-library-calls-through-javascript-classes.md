# Loading and using shared libraries — Indirect access to library calls through JavaScript classes

For classes implemented in a C++ library, use the indirect style. Each C++ class in the library automatically gets a corresponding JavaScript class, and its properties and methods are reached through an instance of that class.

Example:

```javascript
anotherlib= new ExternalObject ("lib:" + filespec); // load the library
alert(anotherlib.version) ;
// instantiate library-defined class
var myObject = new MyNewClass() ;
// access functions from instance
var a = myObject.method_abc(1,2.0,true,"this is data") ;
alert(a) ;
anotherlib.unload() ;
```

For information on defining functions for indirect ExternalObject access, see Defining entry points for indirect access.
