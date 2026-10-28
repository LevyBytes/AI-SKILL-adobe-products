# initialize()

ESerror_t initialize (SoHObject hObject, int argc, TaggedData\* argv);

### Description

Required. Invoked when JavaScript code creates this class with the new operator:

Construct the library-defined class with `new MyClass(...)`, supplying the arguments required by that class. JavaScript’s `new` keyword is lowercase.

During initialization, the function normally attaches properties and methods to the object. Instances within one class may expose different properties and methods; add them through addMethod() and addProperty() on the stored SoServerInterface.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| argc, argv | Count and pointer for constructor arguments, represented as TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.
