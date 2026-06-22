# Cross Dom Functions, Application Specific Exported Functions, Startup Folder Locations, Cross Dom Api Reference ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Cross-DOM functions; Cross-DOM Functions; Application-specific exported functions; Startup folder locations; Cross-DOM API reference; Communicating through messages; Sending messages; Receiving messages; Handling unsolicited messages; Handling responses from the message target.

## Cross-DOM functions

The cross-DOM is a compact application programming interface (API) containing functions common to message-enabled applications. The set includes functions for opening files, executing scripts, and printing files. For the function list, see Cross-DOM API reference.

Any script can call a cross-DOM function by placing the target application's namespace specifier before the function name. Namespace specifiers explains that prefixing syntax. Example: from a Photoshop CC script, indesign.open(file) opens a file in Adobe InDesign CC.

Each application's cross-DOM functions are implemented in JavaScript. To inspect an installed implementation, look in the Adobe startup folder for the relevant startup script. As an example, illustrator-14.jsx defines Adobe Illustrator CC's illustrator.open(); 14 is the installed application's version number. See Startup folder locations.

### Example

The Adobe ExtendScript SDK sample code includes these examples specifically for cross-DOM function use:

| Example | Description |
| --- | --- |
| OpenImageInPhotoshop.jsx | Demonstrates sending an image file for Photoshop to open. |

## Cross-DOM Functions

### Cross-DOM functions — Cross-DOM Functions

All message-enabled applications implement these cross-DOM functions:

### executeScript()

appspec.executeScript(script)

### Description

Evaluates the specified script as JavaScript in the target application. The script can access the target application's full document object model (DOM).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| script | String | Script content to evaluate. |

### Returns

Nothing

### open()

appspec.open(files)

### Description

Runs File > Open in the target application for the files passed in files.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| files | File object or array of File objects. | File object(s) that should be opened. For compound-document applications, provide a project file. |

### Returns

Nothing

### openAsNew()

appspec.openAsNew([options])

### Description

Calls File > New in the target application.

### Parameters

Parameter

Type

Description

options

Application-specific creation options: - Adobe Bridge: none - Photoshop: none - InDesign: creation options are: (Boolean:showingWindow, ObjectOrString:documentPresets). See the arguments for documents.add() in the Adobe InDesign CS5 Scripting Reference. - Illustrator: creation options are: ([DocumentColorSpace:colorspace][, Number:width, Number:height]). See the arguments for documents.add() in the Adobe Illustrator CS5 JavaScript Reference.

Optional. Options used when creating the new item.

| --- | --- | --- |

### Returns

Boolean. true on success.

### print()

appspec.print(files)

### Description

Runs File > Print in the target application for the files passed in files.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| files | File object or array of File objects. | File object(s) that should be printed. For compound-document applications, provide a project file. |

### Returns

Nothing

### quit()

appspec.quit()

### Description

Runs the target application's File > Exit or File > Close command.

Note

For Adobe Acrobat, this function is present but has no effect; scripts cannot quit the application.

### Returns

Nothing

### reveal()

appspec.reveal(file)

### Description

Switches operating-system focus to the target application and, when the specified file is already open there, brings it forward.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object or String | Target file information. |

### Returns

Nothing

## Application-specific exported functions

### Cross-DOM functions — Application-specific exported functions

Beyond the required base cross-DOM functions, each message-enabled application can expose application-specific features to all scripts through a simple syntax. Any script can call exported functions by placing the target application's namespace specifier before the function name (see Namespace specifiers). For example, because Photoshop CS5 exports photomerge, an Illustrator CS5 script can call photoshop.photomerge(files) directly.

Cross-DOM functions and application-specific exported functions differ only in scope: all applications expose the same cross-DOM function set, while each application exposes its own application-specific functions. Each application decides how much functionality it exports.

Exported-function support is extensive in some applications and narrower in others.

For details on additional functions exported by individual applications, refer to those applications' startup scripts. Application startup scripts use the name appname-n.jsx, where n is the installed application's version number. See Startup folder locations.

## Startup folder locations

### Cross-DOM functions — Startup folder locations

On each platform, JavaScript-capable Adobe Creative Suite 4 applications share one startup folder, and each application also has its own startup folder.

- Windows installation startup folders: %CommonProgramFiles%\Adobe\Startup Scripts CS5\Adobe AppName\
- Mac OS installation startup folders: /Library/Application Support/Adobe/Startup Scripts CS5/Adobe AppName/

Note

Do not store your own startup scripts in this location; see Scripting for specific applications.

## Cross-DOM API reference

### Cross-DOM functions — Cross-DOM API reference

Every exported function, including cross-DOM API functions, is called through the exporting application's namespace specifier (see Namespace specifiers). The following call shows the form:

```
//execute an Illustrator script in version 12
illustrator12.executeScript(myAIScript);
```

When a specifier omits version information, it invokes the highest installed version of that application. Sample call:

```
//execute a Photoshop script in the highest available version
photoshop.executeScript (myPSScript)
```

## Communicating through messages

Adobe Bridge exposes an application programming interface (API) for communication between Adobe ExtendScript-aware applications and applications that support messaging. This is the broadest interapplication communication route. A messaging-enabled application can start another messaging-enabled application and can exchange scripts that perform particular work. For instance, a script running in Adobe Bridge can open Photoshop, then pass Photoshop a script that asks for a photomerge operation.

Exported functions give targeted entry points into selected application features, but an interapplication message carries a script that can use the target application's full document object model (DOM), along with all cross-DOM functions and exported application functions.

The messaging API includes the BridgeTalk class. Its globally available static functions and properties expose environment details needed for application-to-application messaging. By instantiating this class, you make a BridgeTalk message object that contains a message and can deliver it to another application. See Messaging framework API reference for object-level detail.

## Sending messages

### Communicating through messages — Sending messages

Sending a script or other payload to a different application starts with creating and configuring a BridgeTalk message object.

That object holds the outgoing data, typically a script for the target application to run, and it also defines how any reply should be handled.

The sample below follows a script sent from Adobe Bridge CS5 to Photoshop CS5 and shows how the response is received.

### Step 1: Check that the target application is installed

Before sending anything, confirm that the needed target application version exists. The getSpecifier() function, exposed globally through the BridgeTalk class, supplies that information.

For example, the following script is run by Photoshop CS5 and prepares to send a message to Adobe Bridge CS5; it first verifies that the required Adobe Bridge version is present:

```
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
if( targetApp ) {
    // construct and send message
}
```

At send time, the messaging framework starts the target application automatically when it is not already running.

### Step 2: Construct a message object

After that check, build the message that will be sent. Create a BridgeTalk message object and set its properties. At minimum, specify the target application and the message body, which is generally a script stored as a string.

Message scripts can be elaborate and can use the complete DOM exposed by the target application. The next example builds a script for Adobe Bridge that asks how many files or folders exist in a chosen folder:

```
// create a new BridgeTalk message object
var bt = new BridgeTalk;

// send this msg to the Adobe Bridge CS4 application
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
bt.target = targetApp;

// the script to evaluate is contained in a string in the "body" property
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
```

### Step 3: Specify how to handle a response

When the script result matters, or when the sender should process a reply, configure response handling before dispatching the message. Define the onResult() callback on the message object to do this.

Note

Message callbacks are optional, and some message-enabled applications do not implement them. By default, a response is the evaluation result of the script stored in the message object's body property. A target application can choose another response style; see Receiving messages.

After the target finishes working on the message, it checks the received message object for an onResult callback. When present, the target calls it automatically and passes the response. The response is placed in a string, then that string is stored in the body property of a new message object. Your onResult callback receives that new message object as its argument.

This handler passes the returned value into processResult, a function supplied by the script:

``javascript bt.onResult = function(returnBtObj) { processResult(returnBtObj.body); }

````
To handle script-processing errors, define an [onError()](bridgetalk-message-object.md#onerror) callback on the message object. You can also set a [timeout](bridgetalk-message-object.md#timeout) value and provide an [onTimeout()](bridgetalk-message-object.md#ontimeout) callback for cases where the target cannot finish within the allotted time. Additional detail is in the response-target section: [details](#handling-responses-from-the-message-target).

!!! note
    When callbacks are used for a response, keep the message in a variable that remains alive until the reply arrives. If not, JavaScript might garbage-collect the message object, causing the response to disappear.

### Step 4: Send the message

Call the message object's `send` method to dispatch it. No destination argument is needed because the message already contains its target application:

```javascript
bt.send();
````

A timeout value can be supplied as an option. Doing so makes the call synchronous: the method returns only after the target application responds or the timeout period ends. Without a timeout, as shown here, sending is asynchronous and send() returns right away.

Another optional argument can carry launch parameters for cases where the target application is not running and the messaging framework must start it.

The full script is:

```
// script to be executed in Photoshop CS4
#target "photoshop-11.0"

// check that the target app is installed
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");

if( targetApp ) {
    // construct a message object
    var bt = new BridgeTalk;

    // the message is intended for Adobe Bridge CS4
    bt.target = targetApp;

    // the script to evaluate is contained in a string in the "body" property
    bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"

    // define result handler callback
    bt.onResult = function(returnBtObj) {
    processResult(returnBtObj.body); } //fn defined elsewhere

    // send the message asynchronously
    bt.send();
}
```

## Receiving messages

### Communicating through messages — Receiving messages

An application may act as a message target, meaning it can receive an unsolicited message from some other application. The target application's static BridgeTalk.onReceive callback function handles that unsolicited message. See Handling unsolicited messages.

A sender can also receive response messages, which are generated because the sender requested a response when it sent the message. These response messages can include:

- An error produced while the message was being processed
- A timeout produced during the processing attempt
- A notice confirming that the message was received
- Intermediate responses
- The final processing result.

The target application sends all such response messages automatically. The callbacks defined on the sending message object process them. For details, see Handling responses from the message target.

## Handling unsolicited messages

### Communicating through messages — Handling unsolicited messages

Set the static onReceive property of the BridgeTalk class to a callback handler function when you need to control how the application treats unsolicited incoming messages. The handler receives one argument: a BridgeTalk message object.

By default, onReceive evaluates the incoming message body as JavaScript and returns that evaluation result. (For a script evaluation, the result is the value produced by the final script line.) To send the result back, the handler builds a new message object, stores the result as a string in that object's body property, and gives the object to the onResult() callback from the original message.

When evaluation fails, the default onReceive handler uses the same pattern for error data. It creates a new message object, stores the error details as a string in that object's body property, and passes the object to the original message's onError() callback.

To replace the default behavior, assign BridgeTalk.onReceive a function definition with this form:

```
BridgeTalk.onReceive = function( bridgeTalkObject ) {
    // callback definition here
};
```

The received message object's body property holds the incoming data.

The function may return any type.

Your function is not required to construct and return a BridgeTalk message object explicitly.

The messaging framework then builds a new BridgeTal`k message object and stores the `onReceive handler return value as a string in that object's body property.

Return values are converted to a string with Unicode Transformation Format-8 (UTF-8) encoding. If the function returns nothing, the produced string is empty.

The result object is sent back to the sender when the sender implemented an onResult callback on the original message.

### Message-handling examples

The first example illustrates the default way unsolicited messages from other applications are handled. This short handler runs the message data as a script and returns the execution result:

```
BridgeTalk.onReceive = function (message) {
    return eval( message.body );
}
```

The next example illustrates extending the receive handler for an additional message type:

```
BridgeTalk.onReceive = function (message) {
    switch (message.type) {
        case "Data":
            return processData( message );
            break;
        default: //"ExtendScript"
            return eval( mesage.body );
    }
}
```

## Handling responses from the message target

### Communicating through messages — Handling responses from the message target

Handle replies to a message you sent by defining callback handler functions directly on that message object. The target application can return a response only when the received message object includes the relevant callback.

Note

Message callbacks are optional, and some message-enabled applications do not provide them.

Once the target receives your message, the target application's static BridgeTalk object's onReceive method processes it and may call one of the message object's callbacks to send a response. For each response, the messaging framework wraps the data in a new message object targeted back to the sender. Your callback functions are called with that response message object.

A response message can be:

- When processing the message body fails, such as because of a JavaScript syntax error, the target application calls onError() and passes a response message containing the error code and message. Without an onError() callback, the error is hidden from the sender. The message can appear unprocessed because no result ever reaches onResult().

- Sending a message is asynchronous. A true result from send does not prove that the target application actually received the message. To learn that receipt occurred, define onReceived() on the message object. The target returns the original message object to that callback after first replacing the body value with an empty string.

- A message object's timeout property can hold a number of seconds. If the message stays in the input queue until that interval expires, it is discarded. When the sender supplied an onTimeout() callback, the target returns a time-out message.

- The sent script can return intermediate responses by calling the original message object's sendResult() method. The script may send any data type, but the data is wrapped as a body string in a new message object and passed to your callback. See Passing values between applications.

- After finishing the message, the target application can return a result of any type. If the message contained a script and the target is using the default BridgeTalk onReceive callback, the return value is the final result from evaluating that script. Whatever the case, the value is stored as a body string in a new message object and passed to your callback. See Passing values between applications.

The examples below cover a single response, multiple responses, and response processing that also handles errors.

### Example: Simple response reception

Here, an application script requests from Adobe Bridge the count of files and folders in a particular folder; script evaluation produces that count. (The default BridgeTalk.onReceive method handles this correctly.)

The onResult method stores the number in fileCountResult, a script-defined message property, so it can be used afterward:

```
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
bt.onResult = function( retObj ) {
    processFileCount(retObj.body);
}

bt.send();
```

### Example: Handling any error

Here, the onError handler throws the error message again inside the sender:

```
var bt = new BridgeTalk;
bt.onError = function (btObj) {
    var errorCode = parseInt (btObj.headers ["Error-Code"]);
    throw new Error (errorCode, btObj.body);
}
```

### Example: Handling expected errors and responses

This example builds a message that asks Adobe Bridge for XMP metadata from a named file. The onResult method passes the data to a script-defined processFileSize function. onError handles failures. For instance, when the requested file does not exist, the resulting error is delivered to onError:

```
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "var tn = new Thumbnail('C/MyPhotos/temp.gif'); tn.core.immediate.size;"
bt.onResult = function( resultMsg ) {
    processFileSize(resultMsg.body);
}

bt.onError = function( errorMsg ) {
    var errCode = parseInt (errorMsg.headers ["Error-Code"]);
    throw new Error (errCode, errorMsg.body);
}

bt.send();
```

### Example: Setting up a target to send multiple responses

This example combines message-body evaluation with multiple responses. It prepares a handler for a message like the one shown in the following example.

In the target application, Adobe Bridge, a static onReceive method enables a new message type named iterator. For an iterator message, message.body is expected to reference the iteration variable i inside the script, producing a distinct result on each while-loop pass. sendResult() sends every result back to the sending application. After message.body completes its work, it sets a flag that stops iteration:

```
// Code for processing the message and sending intermediate responses
// in the target application (Adobe Bridge)
BridgeTalk.onReceive = function (message){
    switch (message.type) {
        case "iterator":
            done = false;
            i = 0;
            while (!done) {
                // the message.body uses "i" to produce different results
                // for each execution of the message.
                // when done, the message.body sets "done" to `true`
                // so this onReceive method breaks out of the loop.
                message.sendResult(eval(message.body));
                i++;
            }
            break;
        default: //"ExtendScript"
            return eval( message.body );
    }
}
```

### Example: Setting up a sender to receive multiple responses

This example sends a message whose type is iterator. The previous example's onReceive handler processes it, while the sender processes each response returned by that target.

The sender creates a message with a script in its body string. That script uses the iterator variable i while walking every file in a specific folder, represented by an Adobe Bridge Thumbnail object.

For files, the script returns file size data. For contained folders, it returns -1. The script's final executed line supplies the message's final result value.

The message object's onResult method receives each intermediate result, stores it in an array named resArr, and immediately processes it with a script-defined processInterResult function:

```
// Code for send message and handling response
// in the sending application (any message-enabled application)
var idx = 0;
var resArr = new Array;
bt = new BridgeTalk;
bt.target = "bridge";
bt.type = "iterator";
bt.body = "
var fld = new Thumbnail(Folder('C/Junk'));
if (i == (fld.children.length - 1))
done = true; //no more files, end loop
tn = fld.children[i];
if (tn.spec.constructor.name == 'File')
md = tn.core.immediate.size;
else md = -1;
";

// store intermediate results
bt.onResult = function(rObj) {
    resArr[idx] = rObj.body;
    processInterResult(resArr[idx]);
    idx++;
};

bt.onError = function(eObj) {
    bt.error = eObj.body
};

bt.send();
```
