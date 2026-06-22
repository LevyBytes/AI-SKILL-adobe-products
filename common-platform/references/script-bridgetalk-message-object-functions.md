# Bridgetalk Message Object Functions, Messaging Error Codes, Application And Namespace Specifiers, Application Specifiers ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: BridgeTalk message object functions; Messaging error codes; Application and namespace specifiers; Application specifiers; Namespace specifiers; External Communication Tools; Socket; Chat server sample; Socket Object Reference; Integrating External Libraries; Loading and using shared libraries; Direct access to library calls through the ExternalObject instance; Indirect access to library calls through JavaScript classes; ExternalObject; ExternalObject constructor; ExternalObject Class Attributes; ExternalObject Class Methods; ExternalObject Object Methods.

## BridgeTalk message object functions

### BridgeTalk message object — BridgeTalk message object functions

### send()

bridgeTalkObj.send([timoutInSecs[, launchParameters]])

### Description

Transfers this message to the target application.

When the target application is not already running and the message includes a body, the messaging system starts that target application automatically and passes any launch parameters that were supplied. Under those conditions the message is queued instead of being delivered at once, and the method returns false. Processing occurs after the application has started.

A send call does not prove that the target received the message. To ask for a receipt acknowledgment, define an onReceived callback on this message object. That callback is separate from the BridgeTalk class static onReceive method, which is the entry point for messages that were not solicited.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timoutInSecs | Number | Optional. A maximum number of seconds to wait for a result before returning from this function. The message is sent synchronously, and the function does not return until the target has processed the message or this number of seconds have passed. If not supplied or 0, the message is sent asynchronously, and the function returns immediately without waiting for a result. |
| launchParameters | String | Optional. A string of parameters to append to the name of the target application when launching it, if the application is not already running. If the target application is already running, this value is ignored. |

### Returns

Boolean. true if immediate delivery was possible; false when the message could not be delivered immediately or was queued for later sending.

### sendResult()

bridgeTalkObj.sendResult(result)

### Description

During unsolicited-message processing, the static BridgeTalk onReceive method can call this method on the received message object to send an intermediate result back to the sender. It triggers the original message's onResult callback and passes a new message object whose body contains the requested result value.

Multiple responses can be returned for a single message through this mechanism.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| result | Any | You can send data of any type as the result value. The messaging framework creates a BridgeTalk message object, and flattens this value into a string which it stores in the body of that message. See Passing values between applications. |

### Returns

Boolean. true when the received message defines an onResult callback and the response message can be sent; otherwise false.

## Messaging error codes

These error codes are defined by the interapplication messaging protocol and align with ExtendScript error codes. Entries with negative values are fatal for ExtendScript and end the script in progress.

| Code | Description |
| --- | --- |
| 1 | General error |
| 8 | Syntax error |
| 20 | Bad argument list |
| 27 | Stack overrun |
| -28 | Out of memory |
| -29 | Uncaught exception |
| 31 | Bad URI |
| 32 | Cannot perform requested action |
| -33 | Internal error |
| -36 | Not yet implemented |
| 41 | Range error |
| 44 | Cannot convert |
| 47 | Type mismatch |
| 48 | File or folder does not exist |
| 49 | File of folder already exists |
| 50 | I/O device is not open |
| 51 | Read past EOF |
| 52 | I/O error |
| 53 | Permission denied |
| 54 | JavaScript execution |
| 56 | Cannot connect |
| 57 | Cannot resolve reference |
| 58 | I/O timeout |
| 59 | No response |

## Application and namespace specifiers

Interapplication communication identifies Adobe applications through Application specifiers in every supported form.

Within ExtendScript scripts, the #target directive can name the application that should execute the script by using a specifier. See Preprocessor directives.

For interapplication messages, the specifier becomes the value of the message object's target property, identifying the application intended to receive the message.

Adobe Bridge is integrated with many Adobe applications. In document.owner, it stores an application specifier for the application responsible for creating or opening an Adobe Bridge browser window. Consult the Adobe Bridge JavaScript Reference for details.

When one application's script calls cross-DOM or exported functions, Namespace specifiers identify the application that exports those functions.

## Application specifiers

### Application and namespace specifiers — Application specifiers

Application specifiers are strings that combine the application name with a version number and a language code. Their syntax is: appname[\_instance[[-version[-locale]]]

Specifier

Description

appname

An Adobe application name. Creative Suite 4 applications that support the ExtendScript Toolkit use these identifying strings: - aftereffects - bridge - estoolkit - illustrator - incopy - indesign - indesignserver - photoshop

instance

Optional. This appended underscore string separates instances for applications, such as InDesign Server, that can launch and run more than one instance. A server started with SOAP port 12345 would use the specifier indesignserver_configuration_12345.

version

Optional. This number gives at least the major version. Include a minor version after a dot when needed; for example, 1.5. If no version is supplied, the framework uses the sending application's suite version when possible, or otherwise chooses the highest available version. Creative Suite 4 interapplication messaging recognizes these identifying names and version numbers: - acrobat-9.0 - aftereffects-9.0 - soundbooth-2.0 - bridge-3.0 - contribute-5.0 - devicecentral-2.0 - dreamweaver-10.0 - encore-4.0 - estoolkit-3.0 - fireworks-10.0 - flash-10.0 - illustrator-14.0 - indesign-6.0 - indesignserver-6.0 - incopy-6.0 - photoshop-11.0 - premierepro-4.0 - audition-4.0 - ame-1.0 - exman-2.0

locale

Optional. This Adobe locale code combines a 2-letter ISO-639 language code with, optionally, a 2-letter ISO 3166 country code after an underscore. Case matters. Examples include en_us, en_uk, ja_jp, de_de, and fr_fr. Without this value, ExtendScript uses the current platform locale. For multilingual applications such as Bridge, where one installation includes all locale versions, do not specify a locale.

| --- | --- |

These examples are valid specifiers:

- photoshop
- bridge-3.0
- indesign_1-6.0
- illustrator-14.0
- illustrator-14.0-de_de

When version and locale details are omitted from a specifier, the framework searches for the best matching installation. Matching is attempted in this sequence:

1. Applications from the same suite
2. Installed applications with the greatest available version number
3. Applications already running
4. Applications whose locale matches the current locale
5. Applications in any locale

## Namespace specifiers

### Application and namespace specifiers — Namespace specifiers

For cross-DOM and exported function calls into other applications, a namespace specifier qualifies the call and routes it to the correct application.

A namespace specifier uses the application name from an application specifier and can include a major version number. Place it before the exported function name with JavaScript dot notation. appname[majorVersion].functionName(args)

For example:

- For the cross-DOM quit function, use photoshop.quit() in Photoshop and illustrator.quit() in Adobe Illustrator.
- For the exported place function in Illustrator CS5 version 15, call illustrator15.place(myFiles).

For details on cross-DOM and exported functions, see Remote function calls.

## External Communication Tools

ExtendScript includes tools for using standard protocols to communicate with other computers or with the Internet.

The Socket object provides low-level TCP connection support. Supported applications include:

- Adobe Bridge CS5
- Adobe InDesign CS5
- Adobe InCopy CS5
- Adobe After Effects CS5
- Adobe Photoshop CS5

## Socket

### Socket Object

TCP connections form the Internet's basic transport layer. When a Web browser contacts a server for a page, it opens a TCP connection for the request and the server's response. With the JavaScript Socket object, scripts can connect to Internet servers and exchange data with them.

The Socket object offers basic operations for reaching a remote computer over TCP/IP or the Internet. Calls such as open() and close() establish and terminate the connection, while read() and write() move data. The listen() method creates a simple Internet server, and that server calls poll() to test for incoming connections.

Many simple protocols rely on ASCII data exchange, while others, including the FTP protocol, are more complex and use binary data. HTTP is among the simplest protocols.

This TCP/IP client sample connects to a WWW server listening on port 80. It sends a minimal HTTP GET request for the WWW server home page. The reply contains the page content plus the HTTP header returned by the server:

```
var reply = "";
var conn = new Socket;

// access Adobe's home page
if (conn.open ("www.adobe.com:80")) {

    // send a HTTP GET request
    conn.write ("GET /index.html HTTP/1.0\n\n");

    // and read the server's reply
    reply = conn.read(999999);

    conn.close();
}
```

After this code runs, reply holds the Adobe home page content plus an HTTP response header.

Creating an Internet server requires a little more setup. A typical server waits for incoming connections and then processes them. Because an application usually should not sit in an endless loop waiting for connection requests, a Socket object can be queried for an incoming connection with poll().

That call only checks for incoming connections and returns immediately. If a request is waiting, poll() returns another Socket object containing the newly opened connection. Use that connection object to communicate with the client; after the exchange is finished, close the connection and discard the object.

Before a Socket object can check for incoming connections, it must be instructed to listen on a specific port, such as port 80 for HTTP requests. Call listen() rather than open() for this setup.

The next example is a minimal Web server. It listens on port 80 until an incoming request is found. The HTTP header is ignored, and a dummy HTML page is sent to the requester:

```
conn = new Socket;
// listen on port 80
if (conn.listen (80)) {
    // wait forever for a connection
    var incoming;
    do incoming = conn.poll();
    while (incoming == null);

    // discard the request
    conn.read();

    // Reply with a HTTP header
    incoming.writeln ("HTTP/1.0 200 OK");
    incoming.writeln ("Content-Type: text/html");
    incoming.writeln();

    // Transmit a dummy homepage
    incoming.writeln ("<html><body><h1>Homepage</h1></body></html>");

    // done!
    incoming.close();
    delete incoming;
}
```

The remote endpoint often ends the connection after it sends data. For that reason, the connected property remains true only while the connection still exists. When connected returns false, the connection closes automatically.

If errors occur, the Socket object's error property contains a short message that identifies the error type.

With the Socket object, software can be written to communicate over the Internet. As one example, two Adobe applications can exchange documents and data by running JavaScript programs.

## Chat server sample

### Socket Object — Chat server sample

This sample code builds a minimal chat server. A chat client can connect to the server listening on port number 1234. The server sends a welcome message and waits for one input line from the client. The client enters text and sends it to the server, the server displays that text, and the person at the server computer can type a line that the client computer displays in return. Typing "bye" on either side ends the session:

```
// A simple Chat server on port 1234
function chatServer() {
    var tcp = new Socket;

    // listen on port 1234
    writeln ("Chat server listening on port 1234");
    if (tcp.listen (1234)) {
        for (;;) {
            // poll for a new connection
            var connection = tcp.poll();
            if (connection != null) {
                writeln ("Connection from " + connection.host);

                // we have a new connection, so welcome and chat
                // until client terminates the session
                connection.writeln ("Welcome to a little chat!");
                chat (connection);
                connection.writeln ( "*** Goodbye ***");
                connection.close();
                delete connection;
                writeln ("Connection closed");
            }
        }
    }
}

function chatClient() {
    var connection = new Socket;

    // connect to sample server
    if (connection.open ("remote-pc.corp.adobe.com:1234")) {
        // then chat with server
        chat (connection);
        connection.close();
        delete connection;
    }
}

function chat (c) {
    // select a long timeout
    c.timeout=1000;

    while (true) {
        // get one line and echo it
        writeln (c.read());

        // stop if the connection is broken
        if (!c.connected)
            break;

        // read a line of text
        write ("chat: ");
        var text = readln();

        if (text == "bye")
            // stop conversation if the user entered "bye"
            break;
        else
            // otherwise transmit to server
            c.writeln (text);
    }
}
```

## Socket Object Reference

Below are the Socket object's property and method details.

Socket object constructor:

```
[new] Socket();
```

Creates a new Socket object and returns it.

## Integrating External Libraries

An application's JavaScript DOM can be extended with a C or C++ shared library that is compiled for the current platform and loaded into JavaScript as an ExternalObject object. The shared library appears as a DLL on Windows, a bundle or framework on Mac OS, or a SharedObject on UNIX.

Library functions can be reached directly through the ExternalObject instance. You can also define an interface that lets C/C++ code create and access JavaScript classes and objects.

Every Adobe Creative Suite 4 application supports this capability.

## Loading and using shared libraries

Create a new ExternalObject object to load an external shared library into JavaScript. The resulting instance manages and contains the JavaScript interface for the library. It also offers logging that writes status information to the JavaScript Console in the ExtendScript Toolkit, which helps with debugging external-library use.

After the library is loaded, JavaScript can use its exported symbols. JavaScript code can call functions defined in the library either directly on the ExternalObject instance or indirectly through object types defined by the library.

## Direct access to library calls through the ExternalObject instance

### Loading and using shared libraries — Direct access to library calls through the ExternalObject instance

For C-language libraries, use direct access. Each function from the C library has a matching method on the ExternalObject object. Data can be passed into those methods, and the return value can be received directly.

Example:

```
mylib = new ExternalObject ("lib:" + samplelib); // load the library
alert(mylib.version) ;
// access functions directly from ExternalObject instance
var a = mylib.method_abc(1,2.0,true, "this is data") ;
alert(a) ;
mylib.unload() ;
```

For information on defining functions for direct ExternalObject access, see Defining entry points for direct access

## Indirect access to library calls through JavaScript classes

### Loading and using shared libraries — Indirect access to library calls through JavaScript classes

For classes implemented in a C++ library, use the indirect style. Each C++ class in the library automatically gets a corresponding JavaScript class, and its properties and methods are reached through an instance of that class.

Example:

```
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

## ExternalObject

### ExternalObject object

The library name is supplied to the constructor. The constructor looks for that library by using paths listed in the static property ExternalObject.searchFolders.

If loading a library as an ExternalObject is failing, set ExternalObject.log to true and then call ExternalObject.search('lib:myLibrary'). The search is performed by that function, and the log shows the checked paths in the ExtendScript Toolkit Console.

Before the library is loaded, the current folder is temporarily changed to the location of the executable file that was found.

- In Mac OS, the current directory becomes the library's bundle or framework folder.
- In Windows and UNIX, the current directory becomes the folder containing the library.

## ExternalObject constructor

### ExternalObject object — ExternalObject constructor

obj = new ExternalObject ("lib:" + filespec, arg1, ...argn);

Parameter

Description

filespec

The case-sensitive "lib:" specifier marks the target as a dynamic library. Attach it to the shared library base name, with or without an extension. When needed, ExtendScript supplies an operating-system extension: - .dll in Windows - .bundle or .framework in Mac OS (only Mach-O bundles are supported) - .so in UNIX (except for HP/UX, where the extension is .sl) - The name of the library is case sensitive in UNIX.

arg1...argn

Optional. Arguments supplied to the library's initialization routine; any count is allowed.

| --- | --- |

For example:

```
var mylib = new ExternalObject( "lib:myLibrary" );
```

## ExternalObject Class Attributes

### ExternalObject object — ExternalObject Class Attributes

Static properties on ExternalObject are listed below:

### ExternalObject.log

ExternalObject.log

### Description

Set to true to write status details to standard output, which is the JavaScript Console in the ExtendScript Toolkit.

Set to false to disable logging. Default is false.

### Type

Boolean

### ExternalObject.searchFolders

ExternalObject.searchFolders

### Description

Alternate locations for shared library lookup are stored in one string, with each path specification separated by semicolons (;).

Each path may be absolute or relative to Folder.startup.

Default value is:

- In Windows, "Plugins;Plug-Ins;."
- In Mac OS, "Plugins;Plug-Ins;Frameworks;.;../../../Plugins;../../../Plug-ins;../../../Frameworks;../../..;"
- In UNIX, "Plugins;Plug-Ins;plugins;."

### Type

String

### ExternalObject.version

ExternalObject.version

### Description

The version of the library, as returned by ESGetVersion().

### Type

Number

## ExternalObject Class Methods

### ExternalObject object — ExternalObject Class Methods

The ExternalObject class includes this static helper for diagnosing library-loading issues without actually loading the external object:

### ExternalObject.search()

ExternalObject.search(spec)

### Description

Checks whether a compiled C/C++ library is locatable and leaves it unloaded. When logging is enabled, the ExtendScript Toolkit JavaScript Console receives the list of paths examined.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| spec | String | File specification for the compiled library; path information may be included or omitted. |

### Returns

Boolean. true when the library is found, false otherwise.

## ExternalObject Object Methods

### ExternalObject object — ExternalObject Object Methods

### ExternalObject.terminate()

externalObj.terminate()

### Description

Shuts down explicitly the ExternalObject dynamic library represented by this instance.

Forcing the external library to close can help when the host application's shutdown sequence would otherwise terminate external libraries in the wrong order.

### Returns

Nothing

## Defining entry points for direct access

To access a library directly through an ExternalObject instance, the library must expose these entry points.

Note

Export these as C functions; C++ functions are not acceptable here.

## Entry Points

### Defining entry points for direct access — Entry Points

Use of an ExternalObject instance requires the entry points below:

### ESInitialize()

char* ESInitialize (TaggedData* argv, long argc);

### Description

Invoked when the library is brought into memory.

### Parameters

| Parameter | Description |
| --- | --- |
| argv, argc | Pointer plus count for constructor arguments, represented as TaggedData. |

### Returns

A string containing function signatures; see Library initialization.

### ESGetVersion()

long ESGetVersion (void );

### Description

Receives no arguments and returns the library's version number as a long integer.

JavaScript exposes the result as ExternalObject.version.

### Returns

Long integer

### ESFreeMem()

void ESFreeMem (void\* p);

### Description

Releases memory allocated for a null-terminated string passed into or returned from library functions.

| Parameter | Description |
| --- | --- |
| p | Pointer to the string. |

### Returns

Nothing

### ESTerminate()

void ESTerminate (void );

### Description

Invoked while the library is being unloaded. See Library termination.

### Returns

Nothing

### Defining entry points for indirect access — Entry Points

These entry points are mandatory when the object interface is used:

### ESClientInterface()

int ESClientInterface (SoCClient_e kReason, SoServerInterface\* pServer, SoHServer hServer)

### Description

To use the object interface to JavaScript, the library must define this global function. In each session, the function is called once immediately after the library loads and again as it unloads.

### Parameters

Parameter

Description

kReason

Reason code for this call, one of these constants: - kSoCClient_init: the call is for initialization during load. - kSoCClient_term.: the call is for termination during unload.

pServer

Pointer to an SoServerInterface containing function pointers for entry points that let shared-library code call into JavaScript, create JavaScript classes, and access JavaScript objects. The shared-library code must store this structure between initialization and termination and retrieve it when those functions are needed.

hServer

A Support structures reference tied to this shared library. This server acts as the object factory, creating and managing Support structures objects. Shared-library code must retain this structure from initialization through termination. Pass it to taggedDataInit() and taggedDataFree().

| --- | --- |

### Returns

The value is an error code. kESErrOK is the OK result.

### ESMallocMem()

void \* ESMallocMem (size_t nbytes)

### Description

Supplies a memory-allocation routine for JavaScript to use when managing memory associated with the library's objects.

### Parameters

| Parameter | Description |
| --- | --- |
| nbytes | Number of bytes to allocate. |

### Returns

A pointer to the allocated memory block.

## Additional functions

### Defining entry points for direct access — Additional functions

The shared library may include any number of additional functions. Each one maps to a JavaScript method on the ExternalObject instance. When a function is missing, ExtendScript raises a run-time error.

Every such function must take these inputs:

- TaggedData array.
- Count of arguments.
- Variant data structure used to receive the return value.

JavaScript objects are not supported by the variant data. The permitted data types are:

- undefined
- Boolean
- double
- String - Must use UTF-8 encoding. The library needs an ESFreeMem() entry point so ExtendScript can free string pointers returned by the library. If ESFreeMem() is absent, returned string data is left for the library to manage.
- Script - A string for ExtendScript to evaluate. Use this for returning compact JavaScript snippets that define arbitrarily complex data.

If a function receives an undefined parameter value, ExtendScript marks that data type as undefined and skips conversion to the requested type.

Note

A return value's data type cannot be fixed in advance; JavaScript functions may return data of any type.

The called function may return any of the data types listed above.
