# Library Initialization, Library Termination, Defining Entry Points For Indirect Access, Shared Library Function Api ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Library initialization; Library termination; Defining entry points for indirect access; Shared-library function API; Support structures; ExtendScript Tools and Features; Dollar ($); ExtendScript Reflection Interface; ReflectionObject.

## Library initialization

### Defining entry points for direct access — Library initialization

ExtendScript invokes ESInitialize() during library initialization.

This function receives an argument vector that contains the extra arguments supplied to the ExternalObject constructor.

The function may return an array of function name-signature strings. Those strings support the ExtendScript reflection interface and allow function arguments to be cast to particular types. A function does not need a defined signature to be callable from JavaScript.

### Function signatures

When you return function name-signature strings, each string ties a function name to that function's parameter types, when types are present. For example:

```
["functionName1_argtypes", "functionName2_argtypes", "functionName3"]
```

Each string starts with the function name. After that comes an underscore character and a list of argument data types, with one character for each argument. For functions without arguments, the final underscore can be left off unless the function name itself contains an underscore.

The characters that identify data types are:

| Characeter | Description |
| --- | --- |
| a | Any type. No conversion is performed. This is the default when no type is supplied or when an unrecognized type code is used. |
| b | Boolean |
| d | signed 32 bit integer |
| u | unsigned 32 bit integer |
| f | 64 bit floating point |
| s | String |

For example, suppose your library defines these two entry points:

```
One (Integer a, String b);
Two ();
```

These two functions therefore use the signature strings "One_ds", "Two".

Warning

Do not return multiple signatures for a single function to model function overloading.

Doing so produces undefined results.

## Library termination

### Defining entry points for direct access — Library termination

Use the entry point ESInitialize() to release memory allocated by your code when the library is unloaded.

Each time a JavaScript function calls a library function, the library reference count is incremented. When that count reaches 0, the library unloads automatically; the termination function runs, and the ExternalObject instance is deleted. Deleting the ExternalObject instance still will not unload the library while other references remain.

## Defining entry points for indirect access

Through the C-client object interface, external-library C or C++ code can define, create, use, and manage JavaScript objects.

## Shared-library function API

### Defining entry points for indirect access — Shared-library function API

Your shared-library C/C++ code presents its JavaScript interface through two groups of functions, gathered in the SoServerInterface and SoObjectInterface function-pointer structures.

Most functions return integer constants. The error code kESErrOK == 0 means success.

### SoServerInterface

SoServerInterface is a function-pointer structure that lets shared-library code call

JavaScript objects. The global ESClientInterface() function receives it for initialization when the library loads and later for cleanup when the library unloads. Between those calls, shared-library code must store the structure and use it to reach the communication functions.

C code can keep information for each object and class. The recommended approach is to create a data structure during initialize() and free it during finalize(). Later access goes through setClientData() and getClientData().

These function pointers make up the SoServerInterface structure:

```
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

### dumpServer()

ESerror_t dumpServer (SoHServer hServer);

### Description

Writes this server's contents to the ExtendScript Toolkit JavaScript Console for debugging.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |

### Returns

The value is an error code. kESErrOK is the OK result.

### dumpObject()

ESerror_t dumpObject (SoHObject hObject);

### Description

Writes this object's contents to the ExtendScript Toolkit JavaScript Console for debugging.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |

### Returns

The value is an error code. kESErrOK is the OK result.

### addClass()

ESerror_t addClass (SoHServer hServer, char\* name, SoObjectInterface_p pObjectInterface);

### Description

Creates a JavaScript class.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| name | String. Unique name for the new class. It has to begin with an uppercase alphabetic character. |
| pObjectInterface | Pointer to an SoObjectInterface, the structure holding object-interface method pointers for instances of this class. |

### Returns

The value is an error code. kESErrOK is the OK result.

### addMethod()

ESerror_t addMethod (SoHObject hObject, const char* name, int id, char* desc);

### Description

Registers a new method on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Unique name for the new method. |
| id | Number. Unique identifier for the new method. |
| desc | String. Description for the new method. |

### Returns

The value is an error code. kESErrOK is the OK result.

### addMethods()

ESerror_t addMethods (SoHObject hObject, SoCClientName_p pNames);

### Description

Registers a set of new methods on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pNames[] | SoCClientName. Structure containing the names and identifiers for methods to add. |

### Returns

The value is an error code. kESErrOK is the OK result.

### addProperty()

ESerror_t addProperty (SoHObject hObject, const char* name, int id, char* desc);

### Description

Registers a new property on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Unique name for the new property. |
| id | Number. Unique identifier for the new property. |
| desc | String. Optional. Description for the new property, or null. |

### Returns

The value is an error code. kESErrOK is the OK result.

### addProperties()

ESerror_t addProperties (SoHObject hObject, SoCClientName_p pNames);

### Description

Registers a set of new properties on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pNames[] | SoCClientName. Structure containing the names and identifiers for properties to add. |

### Returns

The value is an error code. kESErrOK is the OK result.

### getClass()

ESerror_t getClass (SoHObject hObject, char\* name, int name_l);

### Description

Gets the parent class name for this object.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Buffer that receives the class's unique name. |
| name_1 | Number. Size of the name buffer. |

### Returns

The value is an error code. kESErrOK is the OK result.

### getServer()

ESerror_t getServer (SoHObject hObject, SoHServer* phServer, SoServerInterface_p* ppServerInterface);

### Description

Gets the interface methods for this object together with the server object that manages it.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| phServer | Buffer that receives the Support structures reference for this object. |
| ppServerInterface | Buffer that receives the SoObjectInterface reference for this object. |

### Returns

The value is an error code. kESErrOK is the OK result.

### setClientData()

ESerror_t setClientData (SoHObject hObject, void\* pData);

### Description

Stores your own data with an object.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pData | Pointer to data defined by the library. |

### Returns

The value is an error code. kESErrOK is the OK result.

### getClientData()

ESerror_t setClientData (SoHObject hObject, void\*\* pData);

### Description

Gets data that was previously stored with setClientData().

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pData | Buffer that receives a pointer to data defined by the library. |

### Returns

The value is an error code. kESErrOK is the OK result.

### eval()

ESerror_t eval (SohServer hServer, char* string, TaggedData* pTaggedData);

### Description

Invokes the JavaScript interpreter to evaluate a JavaScript expression.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| String | String containing the JavaScript expression to evaluate. |
| pTaggedData | Pointer to a TaggedData object that receives the evaluation result. |

### Returns

The value is an error code. kESErrOK is the OK result.

### taggedDataInit()

ESerror_t taggedDataInit (SoHSever hServer, TaggedData\* pTaggedData);

### Description

Initializes a TaggedData structure.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| pTaggedData | Pointer to a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.

### taggedDataFree()

ESerror_t setClientData (SoHServer hServer, TaggedData\* pTaggedData);

### Description

Releases memory used by a TaggedData structure.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| pTaggedData | Pointer to a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.

### SoObjectInterface

After SoServerInterface.addClass() adds a JavaScript class, this interface must be supplied. JavaScript uses its callbacks to work with objects from the new class.

The SoObjectInterface array contains function pointers in this form:

```
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

### initialize()

ESerror_t initialize (SoHObject hObject, int argc, TaggedData\* argv);

### Description

Required. Invoked when JavaScript code creates this class with the new operator:

```
var xx = New MyClass(arg1, ...)
```

During initialization, the function normally attaches properties and methods to the object. Instances within one class may expose different properties and methods; add them through addMethod() and addProperty() on the stored SoServerInterface.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| argc, argv | Count and pointer for constructor arguments, represented as TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.

### put()

ESerror_t put (SoHObject hObject, SoCClientName* name, TaggedData* pValue);

### Description

Invoked when JavaScript code sets a property of this class:

```
xx.myproperty = "abc" ;
```

Supplying NULL for this function makes the JavaScript object read-only.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| pValue | New value, as a pointer to a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.

### get()

ESerror_t get (SoHObject hObject, SoCClientName* name, TaggedData* pValue);

### Description

Invoked when JavaScript code reads a property of this class:

```
alert(xx.myproperty);
```

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| pValue | Buffer that receives the property value, as a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.

### call()

ESerror_t call (SoHObject hObject, SoCClientName* name, int argc, TaggedData* argv, TaggedData\* pResult);

### Description

Invoked when JavaScript code calls a method of this class:

```
xx.mymethod()
```

JavaScript method calls for this class require this function.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| argc, argv | Count and pointer for arguments passed to the call, represented as TaggedData |
| pResult | Buffer that receives the call result, represented as TaggedData |

### Returns

The value is an error code. kESErrOK is the OK result.

### valueOf()

ESerror_t valueOf (SoHObject hObject, TaggedData\* pResult);

### Description

Builds and returns the object's value without type conversion.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pResult | Buffer that receives the value result, represented as TaggedData |

### Returns

The value is an error code. kESErrOK is the OK result.

### toString()

ESerror_t toString (SoHObject hObject, TaggedData\* pResult);

### Description

Builds and returns a string form of this object's value.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pResult | Buffer that receives the string result, represented as TaggedData |

### Returns

The value is an error code. kESErrOK is the OK result.

### finalize()

ESerror_t finalize (SoHObject hObject);

### Description

Required. Invoked when JavaScript deletes an instance of this class.

Use this function to release memory allocated by your code.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |

### Returns

The value is an error code. kESErrOK is the OK result.

## Support structures

### Defining entry points for indirect access — Support structures

Functions that you define for the JavaScript interface receive these support structures:

### Parameters

| Parameter | Description |
| --- | --- |
| SoHObject | Opaque pointer (long \*) for a JavaScript object's C/C++ representation. |
| SoHServer | Opaque pointer (long \*) to the server object, which serves as the shared library's object factory. |
| SoCClientName | Structure that uniquely identifies methods and properties. |
| TaggedData | Structure that wraps data values together with type information for transfer between C/C++ and JavaScript. |

### SoCClientName

For JavaScript objects created by shared-library C/C++ code, SoCClientName stores identity data for methods and properties. Definition:

```
SoCClientName {
    char* name_sig ;
    uint32_t id ;
    char* desc ;
}
```

### Parameters

| Parameter | Description |
| --- | --- |
| name_sig | Name of the property or method, unique within the class. It may include a signature after an underscore to identify argument types for methods; see Function signatures. When names are passed back to SoObjectInterface functions, the signature portion is omitted. |
| id | Unique identifying number for the property or method, or 0 to request a generated UID. If your code supplies the UID, it can avoid string comparisons while identifying JavaScript properties and methods. Either assign every UID explicitly or allow all of them to be generated. |
| desc | Descriptive string or NULL. |

### TaggedData

TaggedData carries data values between JavaScript and shared-library C/C++ code. Types convert automatically when suitable:

```
typedef struct {
    union {
        long intval;
        double fltval;
        char* string;
        SoHObject* hObject;
    } data;
    long type;
    long filler;
} TaggedData;
```

### Parameters

Parameter

Description

intval

Integer and boolean data values. Type is kTypeInteger, kTypeUInteger, or kTypeBool.

fltval

Floating-point numeric data values. Type is kTypeDouble.

String

String data values. All strings are UTF-8 encoded and null-terminated. Type is kTypeString or kTypeScript. - The library needs an ESFreeMem() entry point so ExtendScript can release string pointers returned from the library. Without that entry point, returned string data is not released by ExtendScript. - For a returned string whose type is kTypeScript, ExtendScript evaluates the script and makes the evaluation output the function-call result.

hObject

JavaScript object data value represented in C/C++ form. Type is kTypeLiveObject or kTypeLiveObjectRelease. - When a returned object uses kTypeLiveObject, ExtendScript leaves the object unreleased. - When a returned object uses kTypeLiveObjectRelease, ExtendScript releases it.

type

The data type tag. One of: - kTypeUndefined: null value equivalent to JavaScript undefined. A function return value defaults to this setting. - kTypeBool: boolean value, 0 for false, 1 for true. - kTypeDouble: 64-bit floating-point number. - kTypeString: character string. - kTypeLiveObject: pointer to an internal object representation (SoHObject). - kTypeLiveObjectRelease: pointer to an internal object representation (SoHObject). - kTypeInteger: 32-bit signed integer value. - kTypeUInteger: 32-bit unsigned integer value. - kTypeScript: string containing an executable JavaScript script.

filler

4-byte filler used to keep 8-byte alignment.

| --- | --- |

## ExtendScript Tools and Features

Alongside specific functional modules and development tools, ExtendScript includes these tools and features:

- Global objects for debugging and object inspection, including the Dollar ($) object and the ExtendScript reflection interface.
- A localization utility for supplying user-interface string values in multiple languages. See Localizing ExtendScript strings.
- Global functions for brief dialog-box notifications. See User notification dialogs.
- An object type for expressing measurement values together with their units. See Specifying measurement values.
- Preprocessor directives for including scripts within other scripts and selecting a target application for execution.
- Support for extending or overriding math and logical operator behavior separately for each class. See Operator overloading.

ExtendScript also supplies a shared scripting environment for all Adobe applications that enable JavaScript, and it supports script-based communication between applications.

For details about these features, see Interapplication Communication with Scripts.

## Dollar ($)

### Dollar ($) object

This global ExtendScript object exposes debugging utilities and information methods. Through $ properties, scripts can inspect process-wide state, including the latest run-time error, and adjust flags for debugging or localization. Methods on $ can send console output while a script runs, change execution or other ExtendScript behavior programmatically, and collect object-usage statistics.

## ExtendScript Reflection Interface

ExtendScript includes a reflection interface for inspecting an object comprehensively, including its name, description, expected data type for properties, method arguments and return value, and default values or input limitations.

## ReflectionObject

### ExtendScript Reflection Interface — ReflectionObject

On any object, the reflect property yields a Reflection Object that describes what the object contains. For instance, this code prints every property name together with its current value:

```
var f = new File ("myfile");
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    $.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}
```

### ReflectionObject Attributes

Info

The attributes cannot be written.

### description

reflect.description

### Description

Brief text for the reflected object; undefined is returned when no description exists.

### Type

String

### help

reflect.help

### Description

More complete descriptive text for the reflected object; undefined is returned when no description exists.

### Type

String

### methods

reflect.methods

### Description

Array of ReflectionInfo objects for the reflected object's methods, whether they are supplied by the class or by the individual instance.

### Type

Array of ReflectionInfo objects

### name

reflect.name

### Description

Class name associated with the reflected object.

### Type

String

### properties

reflect.properties

### Description

Array of ReflectionInfo objects for the reflected object's properties, whether those properties belong to the class or the individual instance. When properties are added dynamically at runtime, the list includes only dynamic entries the script has already accessed.

For an object that wraps an HTML tag, for example, the HTML attribute names are worked out during runtime.

### Type

Array of ReflectionInfo objects

### ReflectionObject Methods

### find()

reflectionObj.find(name)

### Description

Provides the ReflectionInfo object for the reflected object's named property. If the property is absent, the result is null.

Call this method when you need details about dynamic properties that are known to exist but have not yet been accessed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The property for which to retrieve information. |

### Examples

The following code obtains an object's class name:

```
obj = new String ("hi");
obj.reflect.name; // => String
```

The following code obtains the method list:

```
obj = new String ("hi");
obj.reflect.methods; //=> indexOf,slice,...
obj.reflect.find ("indexOf"); // => the method info
```

The following code obtains the property list:

```
Math.reflect.properties; //=> PI,LOG10,...
```

The following code obtains a property's data type:

```
Math.reflect.find ("PI").type; // => number
```
