# SoServerInterface

SoServerInterface is a function-pointer structure that lets shared-library code call

JavaScript objects. The global ESClientInterface() function receives it for initialization when the library loads and later for cleanup when the library unloads. Between those calls, shared-library code must store the structure and use it to reach the communication functions.

C code can keep information for each object and class. The recommended approach is to create a data structure during initialize() and free it during finalize(). Later access goes through setClientData() and getClientData().

These function pointers make up the SoServerInterface structure:

```cpp
SoServerInterface {
    SoServerDumpServer_f
    SoServerDumpObject_f

    dumpServer; //debugging, show server in console
    dumpObject; //debugging, show object in console

    SoServerAddClass_f

    addClass; //define a JS class

    SoServerAddMethod_f
    SoServerAddMethods_f
    SoServerAddProperty_f
    SoServerAddProperties_f

    addMethod; // define a method
    addMethods; // define a set of methods
    addProperty; // define a property
    addProperties; // define a set of properties

    SoServerGetClass_f
    SoServerGetServer_f

    getClass; // get class for an instance
    getServer; // get server for an instance

    SoServerSetClientData_f
    SoServerGetClientData_f

    setClientData; //set data in instance
    getClientData; //get data from instance

    SoServerEval_f
    eval; // call JavaScript interpreter
    SoServerTaggedDataInit_f taggedDataInit; // init tagged data
    SoServerTaggedDataFree_f taggedDataFree; // free tagged data
}
```

With these functions, C/C++ shared library code can create, modify, and access JavaScript classes and objects. The functions have to match the following type definitions.
