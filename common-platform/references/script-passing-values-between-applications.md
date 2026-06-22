# Passing Values Between Applications, Messaging Framework Api Reference, Bridgetalk Class, Attributes

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Passing values between applications; Messaging framework API reference; BridgeTalk class; Attributes.

## Passing values between applications

### Communicating through messages — Passing values between applications

The static BridgeTalk.onReceive callback function may return any value type. The messaging framework still wraps the response as a response message and puts returned values in the message body after encoding the result as a UTF-8 string.

### Passing simple types

When a message object's onResult callback receives a response, it has to interpret the string in the response message body to recover a result of the proper type. Results can be identified and handled by type as follows:

| Type | Description |
| --- | --- |
| Number | JavaScript allows you to access a string that contains a number directly as a number, without doing any type conversion. However, be careful when using the plus operator (+), which works with either strings or numbers. If one of the operands is a string, both operands are converted to strings and concatenated. |
| String | No conversion is required. |
| Boolean | The result string is either "true" or "false." You can convert it to a true boolean by evaluating it with the eval method. |
| Date | The result string contains the date in the form: "dow mmm dd yyyy hh:mm:ss GMT-nnnn". For example "Wed Jun 23 2004 00:00:00 GMT-0700". |
| Array | The result string contains a comma delimited list of the elements of the array. For example, If the result array is [12, "test", 432], the messaging framework flattens this into the string "12,test,432". As an alternative to simply returning the array, the message target can use the toSource method to return the code used to create the array. In this case, the sender must reconstitute the array by using the eval method on the result string in the response body. See discussion below. |

### Passing complex types

For complex return values, including arrays and objects, the script you send must build a result string by serializing the array or object with toSource. The sender then uses eval on the response body's result string to rebuild the array or object.

### Passing an array with toSource and eval

The following example sends a script that returns an array using that technique. The receiving onResult callback uses eval to rebuild it:

```
// Code for send message and handling response
// in the sending application (any message-enabled application)
var idx = 0;
var resArr = new Array;
var bt = new BridgeTalk;
bt.target = "bridge-3.0";

// the script passed to the target application
// needs to return the array using "toSource"
bt.body = "var arr = [10, this string, 324]; arr.toSource()";

bt.onResult = function(resObj) {
    // use eval to reconstruct the array
    arr = eval(resObj.body);

    // now you can access the returned array
    for (i=0; i< arr.length(); i++)
        doSomething(arr[i]);
}

// send the message
bt.send();
```

### Passing an object with toSource and eval

Objects can be transferred between applications only through this approach. This example sends a script that returns an object containing selected metadata for a specific file, then defines an onResult callback that receives it:

```
var bt = new BridgeTalk;
bt.target = "bridge-3.0";

//the script passed to the target application
// returns the object using "toSource"
bt.body = "var tn = new Thumbnail(File('C:\\Myphotos\\photo1.jpg'));
var md = {fname:tn.core.immediate.name,
fsize:tn.core.immediate.size};
md.toSource();"

//For the result, use eval to reconstruct the object
bt.onResult = function(resObj) {
    md = bt.result = eval(resObj.body);
    // now you can access fname and fsize properties
    doSomething (md.fname, md.fsize);
}

// send the message
bt.send();
```

### Passing a DOM object

A script can return a DOM object, but the object that comes back includes only properties the script accessed. In this example, the script requests the Adobe Bridge DOM Thumbnail object. Since the script touches only path and uri, only those two properties are returned:

```
var bt = new BridgeTalk;
bt.target = "bridge";

//set up the script passed to the target application
// to return the array using "toSource"
bt.body = "var tn = new Thumbnail(File('C:\\Myphotos\\photo1.jpg'));
var p = tn.path; var u = tn.uri;
tn.toSource();"

//For the result, use eval to reconstruct the object
bt.onResult = function(resObj) {
    // use eval to reconstruct the object
    tn = eval(resObj.body);
    // now the script can access tn.path and tn.uri,
    // but no other properties of the Adobe Bridge DOM Thumbnail object
    doSomething (tn.path, tn.uri);
}

// send the message
bt.send();
```

## Messaging framework API reference

This application programming interface (API) specifies the communication protocol used by message-enabled applications. Once any supported application is loaded, all ExtendScript scripts can use these objects.

The messaging protocol can be extended. Scripts are its primary payload, but other data types can be sent as well.

Within the messaging API, BridgeTalk is the central class. Its static methods and properties expose environment information needed for interapplication communication. Instantiate BridgeTalk to create a BridgeTalk message object that contains the message itself. Related usage material appears in Communicating through messages and in the Adobe ExtendScript SDK example code.

## BridgeTalk class

This class's static properties and methods let a script query basic messaging-system information before any particular message object is created. Static methods can test whether an application is installed, test whether it is already running, and launch it. A callback on the class controls how incoming messages are processed by the application.

Static properties and methods are available through the BridgeTalk class in the global namespace. For example:

```
var thisApp = BridgeTalk.appName;
```

Note

Create a BridgeTalk message object by instantiating the BridgeTalk class; that object is what sends message packets between applications. Dynamic properties and methods exist only on instances.

## Attributes

### BridgeTalk class — Attributes

These static BridgeTalk class properties are available from the global namespace:

### BridgeTalk.appInstance

BridgeTalk.appInstance

### Description

Application instance identifier launched by the messaging framework; this is the instance part of an application specifier. See Application specifiers.

Applies only to applications, such as InDesign, that can launch and run more than one instance.

### Type

String. Read only.

### BridgeTalk.appLocale

BridgeTalk.appLocale

### Description

Application locale; this is the locale part of an application specifier. See Application specifiers. For a sent message, this value is the sending application's locale.

### Type

String. Read only.

### BridgeTalk.appName

BridgeTalk.appName

### Description

Application name; this is the appname part of an application specifier. See Application specifiers. For a sent message, this value is the sending application's name.

### Type

String. Read only.

### BridgeTalk.appSpecifier

BridgeTalk.appSpecifier

### Description

Lower-case string holding this application's full specifier; see Application specifiers.

### Type

String.

### BridgeTalk.appStatus

BridgeTalk.appStatus

### Description

Current processing status of this application. One of:

- busy: The application is busy at the moment but is not processing messages. For example, this state applies while a modal dialog is displayed.
- idle: The application is idle and checks messages on a regular basis.
- not installed: No installation is present.

### Type

String. Read only.

### BridgeTalk.appVersion

BridgeTalk.appVersion

### Description

Application version number; this is the version part of an application specifier. See Application specifiers. For a sent message, this value is the sending application's version.

### Type

String. Read only.

### BridgeTalk.onReceive

BridgeTalk.onReceive

### Description

### Returns

callback function this application uses for unsolicited incoming messages. The default function evaluates the received message body and returns the evaluation result. To replace that default, assign a function definition in this form:

```
BridgeTalk.onReceive = function( bridgeTalkObject ) {
    // act on received message
};
```

The received message object's body property stores the incoming data. The function may return any type. See Handling unsolicited messages.

Note

This function is not used for a message received as a response to a message sent by this application. Response messages are handled by the onResult, onReceived, or onError callbacks attached to the sent message.

### Type

Function

### Socket Object Reference — Attributes

### Socket.connected

socketObj.connected

### Description

true means the connection is currently active.

### Type

Boolean. Read only.

### Socket.encoding

socketObj.encoding

### Description

Sets or returns the encoding name used when data is transmitted.

Common settings include "ASCII", "BINARY", or "UTF-8".

### Type

String

### Socket.eof

socketObj.eof

### Description

true means no data remains in the receive buffer.

### Type

Boolean. Read only.

### Socket.error

socketObj.error

### Description

Text for the latest error. Assigning a value clears any existing error message.

### Type

String

### Socket.host

socketObj.host

### Description

The remote computer name after a connection has been established.

If no connection exists, or if it has been shut down, the property's value is the empty string.

### Type

String. Read only.

### Socket.timeout

socketObj.timeout

### Description

Read and write operations use this timeout value, expressed in seconds. Default is 10.

### Type

Number

### Dollar ($) object — Attributes

### $.appEncoding

$.appEncoding

### Description

Default character encoding for the application, expressed as an Internet name; examples include "CP1252" and "X-SHIFT-JIS". The implementation and OS determine which values are valid.

Assign a value to change the application's default encoding. The value returned may differ from the value assigned. On Windows, for example, setting "x-latin1" can return the synonymous value "ISO-8859-1".

### Type

String

### $.build

$.build

### Description

### Type

String

Current ExtendScript build version details.

Read only.

### $.buildDate

$.buildDate

### Description

### Type

Date

Build date for the current JavaScript engine.

Read only.

### $.decimalPoint

$.decimalPoint

### Description

### Type

String

Decimal-point character used in formatted numeric output for the current locale.

Read only.

### $.engineName

$.engineName

### Description

### Type

String

Name of the current JavaScript engine, when one is set.

Read only.

### $.error

$.error

### Description

### Type

Error

String

Most recent run-time error information, stored in a JavaScript Error object.

Assigning error text to this property raises a run-time error; throwing an Error object is the preferred way to generate one.

### $.fileName

$.fileName

### Description

### Type

String

File name for the current script.

Read only.

### $.flags

$.flags

### Description

### Type

Number

Reads or changes low-level flags for debug output. Combine these bit flag values with logical AND:

- 0x0002 (2): Shows each executed line together with its line number.
- 0x0040 (64): Turns on very aggressive garbage collection. Normally, collection begins after object count growth reaches a threshold since the prior collection. This flag makes ExtendScript collect after nearly every statement. Performance is severely reduced, but the setting helps diagnose objects that appear to be released too early.
- 0x0080 (128): Shows every call with its arguments and return value.
- 0x0100 (256): Turns on extended error handling (see strict).
- 0x0200 (512): Turns on localization behavior in the toString method. Equivalent to the localize property.

Note

Non-public bit values should not be used.

### $.global

$.global

### Description

Gives access to the Global object, which holds the JavaScript global namespace.

### Type

Global

### $.hiresTimer

$.hiresTimer

### Description

High-resolution timer that reports microseconds since the property was last read. Its value is initialized as early as possible, so the first read returns ExtendScript startup time. The property is thread-local; the first read on a thread reports the duration of that thread's creation and initialization.

### Type

Number. Read only.

### $.includePath

$.includePath

### Description

Path for include files used by the current script.

### Type

String. Read only.

### $.level

$.level

### Description

Current debugging level, controlling whether the JavaScript debugger is enabled.

### Type

Number. Read only. Possible values:

- 0: Debugging off
- 1: Break when runtime errors occur
- 2: Full debugger mode

### $.line

$.line

### Description

Current line in the script being executed; numbering starts at 1.

### Type

Number. Read only.

### $.locale

$.locale

### Description

Reads or changes the current locale. Format: `LL_RR`. LL names the language using ISO 639; RR names the region using ISO 3166.

Initially, this value comes from the application or platform for the current user. Set it temporarily when testing another locale. To restore the application or platform setting, assign Nothing, null, or an empty string.

### Type

String

### $.localize

$.localize

### Description

Enables or disables the built-in toString() method's extended localization features.

See Localizing ExtendScript strings.

### Type

Boolean

### $.memCache

$.memCache

### Description

Reads or changes the ExtendScript memory cache size in bytes.

### Type

Number

### $.os

$.os

### Description

Current operating system version information.

### Type

String. Read only.

### $.screens

$.screens

### Description

Array of objects describing the display screens attached to the computer.

### Type

Array of objects

### Properties

| Property | Type | Description |
| --- | --- | --- |
| left | Coordinate | Left corner of the drawable area |
| top | Coordinate | Top corner of the drawable area |
| right | Coordinate | Right corner of the drawable area |
| bottom | Coordinate | Bottom corner of the drawable area |
| primary | Boolean | true when the object describes the primary display |

### $.stack

$.stack

### Description

Current stack trace.

### Type

String

### $.strict

$.strict

### Description

When true, writing to any read-only property raises a runtime error.

Some objects also block creation of new properties while this value is true.

### Type

Boolean

### $.version

$.version

### Description

JavaScript engine version number as a three-part number with description; for example: "3.92.95 (debug)"

### Type

String. Read only.

### Specifying measurement values — Attributes

### UnitValue.baseUnit

unitValueObj.baseUnit

### Description

A UnitValue object defining either one pixel's size or the total size used as the reference for percentage values.

This value supplies the conversion base for pixels and percentages; see Converting pixel and percentage values.

The default is 0.013889 inches (1/72 in), the pixel conversion base at 72 dpi. Set it to null to reinstate the default.

### Type

UnitValue

### UnitValue.type

unitValueObj.type

### Description

Abbreviated unit type, such as "cm" or "in".

### Type

String

### UnitValue.value

unitValueObj.value

### Description

Numeric value of the measurement.

### Type

Number
