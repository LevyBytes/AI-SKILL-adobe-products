# Methods, Bridgetalk Message, Bridgetalk Message Object Constructor, Bridgetalk Message Object Properties ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Methods; BridgeTalk message; BridgeTalk message object constructor; BridgeTalk message object properties; BridgeTalk message object callbacks.

## Methods

### BridgeTalk class — Methods

These static BridgeTalk class methods are available from the global namespace:

### BridgeTalk.bringToFront()

BridgeTalk.bringToFrontapp)

### Description

Moves every window for the specified application to the front of the screen.

On Mac OS, an application may be running even when it has no open windows. Whether this function opens a window depends on the application. With Adobe Bridge, the call creates a browser view.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| app | Application specifiers | A specifier for the target application |

### Returns

Nothing

### BridgeTalk.getAppPath()

BridgeTalk.getAppPathapp)

### Description

Returns the selected app's full executable-file path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| app | Application specifiers | A specifier for the target application |

### Returns

String

### BridgeTalk.getDisplayName()

BridgeTalk.getDisplayNameapp)

### Description

Returns the localized display name for an application. If that app is absent, the result is null.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| app | Application specifiers | A specifier for the target application |

### Returns

String

### Example

```
BridgeTalk.getDisplayName("photoshop-10.0");
=> Adobe Photoshop CS4
```

### BridgeTalk.getSpecifier()

BridgeTalk.getSpecifierappName[, version][, locale])

### Description

Gets a complete application specifier.

### Parameters

Parameter

Type

Description

appName

Application base name to locate.

version

Number

```

Optional. Search for this version number.

If 0 or omitted, the most recent version is returned.

If negative, the highest version no greater than the absolute value is returned.

When a major version is given, BridgeTalk selects the highest minor release matching that major value. For example, with Photoshop CS versions 9, 9.1, and 10 installed:

BridgeTalk.Specifier( "photoshop", "9" )
 => ["photoshop-9.1"]
```

locale

String

Optional. Locale to search for. When omitted and multiple language versions exist, the current locale's version is preferred.

| --- | --- | --- |

### Returns

Application specifier for a locally installed messaging-enabled application version; null is returned when the requested version is absent.

### Example

Assume this installed set: Photoshop CS4 11.0 en_us, Photoshop CS2 8.5 de_de, Photoshop CS2 9.0 de_de, and Photoshop CS2 9.5 de_de. Current locale: en_US

```
BridgeTalk.getSpecifier ("photoshop");
    => ["photoshop-11.0-en_us"]

BridgeTalk.getSpecifier ("photoshop", 0, "en_us");
    => ["photoshop-11.0-en_us"]

BridgeTalk.getSpecifier ("photoshop", 0, "de_de");
    => ["photoshop-9.5-de_de"]

BridgeTalk.getSpecifier ("photoshop", -9.2, "de_de");
    => ["photoshop-9.0-de_de"]

BridgeTalk.getSpecifier ("photoshop", 8);
    => ["photoshop-8.5-de_de"]
```

### BridgeTalk.getStatus()

BridgeTalk.getStatus(targetSpec)

### Description

Gets an application's processing status.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| targetSpec | Application specifiers | Optional. A specifier for the target application. If not supplied, returns the processing status of the current application. |

### Returns

String, one of:

- BUSY: The application is busy at the moment but is not processing messages. For example, this state applies while a modal dialog is displayed.
- IDLE: The application is idle and checks messages on a regular basis.
- PUMPING: Message processing is underway.
- ISNOTRUNNING: Installed, but not currently running.
- ISNOTINSTALLED: No installation is present.
- UNDEFINED: Running, but not answering ping requests. This can happen with a CS2 application that uses an older messaging-framework version.

### BridgeTalk.getTargets()

BridgeTalk.getTargets([version],[locale])

### Description

Lists the locally installed applications that support messaging.

### Parameters

Parameter

Type

Description

version

Number

```

Optional. Search for this version number, or pass null to select the best available version (matching, most recent, or running) and include version details.

A major-only value selects the highest available minor release for that major value.

Example with Photoshop CS versions 9, 9.5, and 10 installed

BridgeTalk.getTargets( "9" )
=> [photoshop-9.5]
```

```

With a negative value, the result includes every version no higher than that value's absolute value. Example:

BridgeTalk.getTargets( "-9.9" )
=> [photoshop-9.0, photoshop-9.5]
```

locale

String

Optional. Search for this locale, or pass null to include applications from all locales with locale details. If version is supplied and locale is omitted, the specifiers include version details only.

| --- | --- | --- |

### Returns

Return value is an array of Application specifiers.

- With version supplied, specifiers contain the base name and version details.
- With locale supplied, specifiers contain the full name, including both version and locale details.
- With neither version nor locale supplied, BridgeTalk returns base specifiers without version or locale details while still trying to select the best matching pair. Application specifiers describes the selection rules.

### Example

Example setup: Photoshop CS3 10.0 en_US, Photoshop CS4 11.0 en_us, and Illustrator CS4 14.0 de_de are installed

```
BridgeTalk.getTargets();
    => [photoshop,illustrator]

BridgeTalk.getTargets( "10.0" );
    => [photoshop-10.0]

BridgeTalk.getTargets( null );
    => [photoshop-11.0, illustrator-14.0]

BridgeTalk.getTargets( null, "en_US" );
    => [photoshop-10.0-en_US, photoshop-11.0-en_US]

BridgeTalk.getTargets( null, null );
    => [photoshop-10.0-en_US, photoshop-11.0-en_us, illustrator-14.0-de_de]
```

### BridgeTalk.isRunning()

BridgeTalk.isRunning(specifier)

### Description

Reports whether the specified application is active and running locally.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| specifier | Application specifiers | A specifier for the target application |

### Returns

Boolean

### BridgeTalk.launch()

BridgeTalk.launch(specifier[, where])

### Description

Starts the specified application on the local computer. You do not have to launch an application explicitly before sending it a message; a message sent to an application that is not running starts it automatically.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| specifier | Application specifiers | A specifier for the target application |
| where | Unknown. | Optional. If the value "background" is specified, the application's main window is not brought to the front of the screen. |

### Returns

Boolean. true if the application had already launched, false if this call launched it.

### BridgeTalk.loadAppScript()

BridgeTalk.loadAppScript(specifier)

### Description

Loads an application's startup script from the common StartupScripts folders. Use it when startup scripts need to be loaded late.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| specifier | Application specifiers | A specifier for the target application |

### Returns

Boolean. true if the script loaded successfully.

### BridgeTalk.ping()

BridgeTalk.ping(specifier, pingRequest)

### Description

Checks contactability by sending a message to another application.

### Parameters

Parameter

Type

Description

specifier

Application specifiers

A specifier for the target application

pingRequest

Identifying key string, one of: - STATUS: Returns the processing status; see getStatus(). - DIAGNOSTICS: Returns a diagnostic report that includes a list of valid ping keys. - `ECHO_REQUEST`: Returns `ECHO_RESPONSE` for a simple ping request.

Specific type of return value.

| --- | --- | --- |

### Returns

String

### BridgeTalk.pump()

BridgeTalk.pump()

### Description

Checks every active messaging interface for incoming and outgoing messages, then processes any that are present.

Note

Most applications already run a message-processing loop that keeps checking the message queues, so this method is seldom necessary.

### Returns

Boolean. true if any messages have been processed, false otherwise.

### Socket Object Reference — Methods

### Socket.close()

socketObj.close();

### Description

Closes the open connection. Deleting the object also closes it, but only after JavaScript garbage collection reaches the object.

Without an explicit close call, the connection can remain open longer than intended.

### Returns

Boolean. true if the connection was closed, false on I/O errors.

### Socket.listen()

socketObj.listen(port[, encoding="ASCII"]);

### Description

Tells the object to begin listening for an incoming connection.

open() and listen() are alternatives for a socket setup. Choose one of them for a given object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| port | Number. | The TCP/IP port number to listen on. Valid port numbers are [1..65535]. Typical values are 80 for a Web server, 23 for a Telnet server and so on. |
| encoding | String | Optional. The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII" |

### Returns

Boolean. true on success.

### Socket.open()

socketObj.open(host[, encoding="ASCII"]);

### Description

Prepares the connection for later read/write operations.

open() and listen() are alternatives for a socket setup. Choose one of them for a given object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| host | String | The name or IP address of the remote computer, followed by a colon and the port number to connect to. The port number is required. Valid computer names are, for example, "www.adobe.com:80" or "192.150.14.12:80". |
| encoding | String | Optional. The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII" |

### Returns

Boolean. true on success.

### Socket.poll()

socketObj.poll();

### Description

Checks a listening object for a new incoming connection. If a request is found, the method returns a new Socket object that represents the new connection. Communicate with the remote computer through that connection object.

When communication is finished, close the connection and delete the JavaScript object. When nothing is waiting, no connection object is returned.

### Parameters

### Returns

Socket object or null.

### Socket.read()

socketObj.read([count=0]);

### Description

Reads no more than the requested character count from the connection, waiting when needed.

CR characters are skipped unless the encoding is BINARY.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| count | Number | Optional. The number of characters to read. If negative, the call is equivalent to readln(). Default is 0. |

### Returns

A String containing at most the requested character count, or whatever was read before closure or timeout occurred.

### Socket.readln()

socketObj.readln();

### Description

### Parameters

Reads one text line ending at the next line feed. Both LF and CRLF pairs count as line feeds.

CR characters are skipped.

### Returns

String

### Socket.write()

socketObj.write(text[, text...]);

### Description

Joins every argument into one string and writes that string to the connection.

CRLF sequences are written as LFs except when BINARY encoding is active.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String. | Any number of string values. All arguments are concatenated to form the string to be written. |

### Returns

Boolean. true on success.

### Socket.writeln()

socketObj.writeln(text[, text...]);

### Description

Combines all arguments into one string, adds a Line Feed character, and writes the result to the connection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String. | Any number of string values. All arguments are concatenated to form the string to be written. |

### Returns

Boolean. true on success.

### Dollar ($) object — Methods

### $.about()

$.about()

### Description

Shows the About box for the ExtendScript component and returns that About box text as a string.

### Returns

String

### $.bp()

$.bp([condition])

### Description

Runs a breakpoint at the current position.

When no condition is required, prefer the JavaScript debugger; statement in the script instead of this method.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| condition | String | Optional. JavaScript statement used as a condition. If it evaluates to true or nonzero at this point, execution stops. |

### Returns

Nothing

### $.colorPicker()

$.colorPicker(name)

### Description

Opens the operating system's color-picker dialog.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | Hexadecimal RGB value (0xRRGGBB) | Initial dialog color; pass -1 to use the OS default. |

### Returns

Hexadecimal RGB value; for example, 0xRRGGBB.

### $.evalFile()

$.evalFile(path[, timeout=10000])

### Description

Reads a script file on disk, evaluates it as JavaScript, and returns the evaluation result.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Name and location of the file. |
| timeout | Number | Optional. Milliseconds to wait before returning undefined if evaluation fails. Defaults to 10000. |

### Returns

Any type

### $.gc()

$.gc()

### Description

Requests garbage collection from the JavaScript engine.

### Returns

Nothing

### $.getenv()

$.getenv(envname)

### Description

Retrieves the named environment variable's value, or null when it does not exist.

Note

On MacOS, accessible environment variables are limited to:

- System default environment variable
- Custom environment variables created by the $.setenv() method
- Custom environment variables created with launchctl setenv `CUSTOM_VAR` "custom_value"

Environment variables set in .bash_profile, .bashrc, .profile, .zshenv, or .zshrc are ignored.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| envname | String | Name of the environment variable. |

### Returns

String

### $.setenv()

$.setenv(envname, value)

### Description

Defines a value for the named environment variable when it is not already present.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| envname | String | Name of the environment variable. |
| value | String | New value, as a string. |

### Returns

Nothing

### $.sleep()

$.sleep(milliseconds)

### Description

Pauses the calling thread for the requested millisecond count.

While sleeping, the function checks every 100 milliseconds whether the sleep should end. This may occur because of a break request or an expired script timeout.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| milliseconds | Number | Number of milliseconds to wait. |

### Returns

Nothing

### $.write()

$.write(text[, text...]...)

### Description

Outputs text in the JavaScript Console.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Strings to output; they are concatenated into a single string first. |

### Returns

Nothing

### $.writeln()

$.writeln (text[, text...]...)

### Description

Outputs text in the JavaScript Console, then appends a linefeed sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Strings to output; they are concatenated into a single string first. |

### Returns

Nothing

### Specifying measurement values — Methods

### UnitValue.as()

unitValueObj.as(unit)

### Description

Returns this object's numeric value expressed in the requested unit. If the unit is unknown or cannot be calculated, a run-time error is generated.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| unit | String | The unit type in abbreviated form; for example, "cm" or "in". |

### Returns

Number

### UnitValue.convert()

unitValueObj.convert(unit)

### Description

Changes this object to the requested unit and updates its type and value to match.

The method returns true when conversion succeeds. If the unit is unknown or the object cannot be converted, a run-time error is generated and false is returned.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| unit | String | The unit type in abbreviated form; for example, "cm" or "in". |

### Returns

Boolean

## BridgeTalk message

### BridgeTalk message object

A message object is the basic communication packet exchanged between applications. Its properties identify the receiving application, or target; the data delivered to that target, called the body; and the data type being sent. Because the messaging protocol is extensible, you can add new data types for the type property and exchange extra arbitrary information through the headers property.

## BridgeTalk message object constructor

### BridgeTalk message object — BridgeTalk message object constructor

Use this simple constructor to create a new message object:

```
var bt = new BridgeTalk;
```

Before sending a message to another application, set target to the receiving application and body to the data message, typically a script, that you want delivered.

## BridgeTalk message object properties

### BridgeTalk message object — BridgeTalk message object properties

### body

bridgeTalkObj.body

### Description

Message data payload.

- For an unsolicited message sent to another application, this usually holds a script stored as a string. The script can access the full document object model (DOM) of the target application.
- For a result message returned by a target application's static BridgeTalk onReceive method to this object's onResult callback, this contains that method's return value flattened into a string. See Passing values between applications.
- For an error notification sent to the onError callback, this contains the error message.

### Type

String

### headers

bridgeTalkObj.headers

### Description

JavaScript object that stores script-defined headers.

Use this property for custom header data when supplementary information must travel between applications. You may add any number of headers. Headers are name/value pairs and can be read with JavaScript dot notation (msgObj.headers.propName) or bracket notation (msgObj.headers[propName]). Use dot notation when the header name follows JavaScript symbol syntax; otherwise, use bracket notation.

The predefined ["Error-Code"] header carries error details back. Messaging error codes covers those values.

### Type

Object

### Example

Header assignment examples:

```
bt.headers.info = "Additional Information";
bt.headers ["Error-Code"] = 8;
```

Examples of getting header values:

```
var info = bt.headers.info;
var error = bt.headers ["Error-Code"];
```

### sender

bridgeTalkObj.sender

### Description

Specifier for the application that sent the message (see Application specifiers).

### Type

String

### target

bridgeTalkObj.target

### Description

Specifier for the target application that receives the message (see Application specifiers).

### Type

String

### timeout

bridgeTalkObj.timeout

### Description

Seconds before the message times out.

If the message is still waiting in the input queue when this interval expires, it is discarded. When the sender defined onTimeout() for the message, the target application returns a time-out response.

### Type

Number

### type

bridgeTalkObj.type

### Description

Message type, identifying what kind of data the body contains.

Default is ExtendScript.

You may define a type for script-defined data. If you do, the target application needs a static BridgeTalk onReceive\_ method that detects and processes that type.

### Type

String

## BridgeTalk message object callbacks

### BridgeTalk message object — BridgeTalk message object callbacks

Note

Message callback support is optional, so some message-enabled applications do not implement every callback.

### onError()

bridgeTalkObj.onError()

### Description

The target application calls this callback when it needs to report an error back to the sender. The returned information may cover JavaScript run-time errors, JavaScript exceptions, or C++ exceptions.

Define the error-response handler by assigning a function in this form:

```
bridgeTalkObj.onError = function( errorMsgObject ) {
    // error handler defined here
};
```

In the received message object, the body property carries the error message. The headers property carries the error code through its Error-Code property. See Messaging error codes.

### onReceived()

### Description

bridgeTalkObj.onReceived()

This callback is called by the target application to acknowledge message receipt. This is separate from the BridgeTalk class static onReceive\_ method, which processes unsolicited messages.

Define receipt-notification handling by assigning a function in this form:

```
bridgeTalkObj.onReceived = function( origMsgObject ) {
    // handler defined here
};
```

The target returns the original message object, setting its body property to the empty string.

### onResult()

### Description

bridgeTalkObj.onResult()

The target application uses this callback to send a response back to the sender. That response may represent either an interim value or the final outcome from processing the message.

Handle the response by assigning a function in this form:

```
bridgeTalkObj.onResult = function( responseMsgObject ) {
    // handler defined here
};
```

The target supplies a new message object, with the body property containing the result string.

See Passing values between applications. The target application's static BridgeTalk onReceive method supplies this value, and BridgeTalk packages it as a UTF-8-encoded string.

### onTimeout()

### Description

bridgeTalkObj.onTimeout()

If a time-out happens before the target finishes work on another message already sent by this application, the target application invokes this callback with a time-out message.

The message must set the timeout property to a value before this callback can run.

Define timeout-event handling by assigning a function in this form:

```
bridgeTalkObj.onTimeout = function( timeoutMsgObject ) {
    // handler defined here
};
```
