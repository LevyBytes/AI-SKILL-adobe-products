# SoObjectInterface

After SoServerInterface.addClass() adds a JavaScript class, this interface must be supplied. JavaScript uses its callbacks to work with objects from the new class.

The SoObjectInterface array contains function pointers in this form:

```cpp
SoObjectInterface {
    SoObjectInitialize_f initialize;
    SoObjectPut_f        put;
    SoObjectGet_f        get;
    SoObjectCall_f       call;
    SoObjectValueOf_f    valueOf;
    SoObjectToString_f   toString;
    SoObjectFinalize_f   finalize;
}
```

Every SoObjectInterface member must either point to a valid function or be NULL. initialize() and finalize() are required implementations. The callbacks use these type definitions.
