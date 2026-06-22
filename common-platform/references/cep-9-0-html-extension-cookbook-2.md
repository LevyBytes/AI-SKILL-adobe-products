# Cep 9.0 Html Extension Cookbook (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

`HostLists` declared under extension tags override the default `HostList` from the execution environment tag. A `HostList` node with no child nodes intentionally disables that extension for every host application. For each extension, choose either `HostList` tags or `Host` attributes in `DispatchInfo` tags; mixing both is likely to cause unexpected results. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags instead of the Host attribute.

### Extension Size

The extension manifest can define extension size, max size, and min size. Size is required; max size and min size are optional.

A modal or modeless dialog becomes resizable when max and min sizes differ; otherwise it cannot be resized. As the mouse pointer moves over a dialog border, CEP changes the cursor to reflect resizable or non-resizable behavior.

```

```

### Customize Extension Menu

This feature works only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in the manifest. In the example, the Adobe Add-ons extension appears under the Windows main menu instead of the extensions menu under Windows. To place the extension elsewhere, change the Placement attribute value in the `<menu/>` item.

```
<?xml version="1.0" encoding="UTF-8"?>
    ...
             ...
                ...
...
```

### High DPI Panel Icons

For high DPI display mode, panel extensions can provide high DPI icons through the extension manifest.

```

```

Package the normal icon files, IconLight.png and IconDark.png, together with the high DPI files, IconLight@2X.png and IconDark@2X.png, inside the extension.

Host applications can locate and use:

- IconLight.png and IconDark.png for normal display
- IconLight@2X.png and IconDark@2X.png for 200% high DPI display

@2X.ext is the industry standard. More information is at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.

### Dialog Size based on Screen Size

A CEP dialog can size itself from screen-size percentages. Example:

```
    ...
        ...
```

### Shortcut Keys for HTML Extensions

(Since 5.2)

CEP 5.2 adds shortcut-key support for HTML extensions. When an HTML extension has focus, that extension handles these keys.

| Windows Keys | macOS Keys | Function |
| --- | --- | --- |
| Ctrl + A | Command + A | Select All |
| Ctrl + C | Command + C | Copy |
| Ctrl + V | Command + V | Paste |
| Ctrl + X | Command + X | Cut |

Point products handle other shortcuts, such as Ctrl + N for creating a new document.

## CEP JavaScript Programming

### CEP JavaScript Libraries

CEP JavaScript Libraries correspond to the Flex CSXS Library and the CEP IMS Library, exposing JavaScript access to host-app and CEP details.

- CSInterface.js
- IMSInterface.js
- Vulcan.js

Get them from: https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_9`.x

Include these JavaScript files in the HTML extension before using them.

### API version

Across CEP releases, the CEP JavaScript APIs continue to evolve, with changes guaranteed to remain backward compatible. Newly added APIs include a comment tag such as "Since x.x.x" that identifies the CEP version where the API first appears.

Compare that version tag with the CEP version integrated by the Adobe Product you are targeting, so you know whether the wanted API is available. Use `CSInterface.getCurrentApiVersion()` to read the CEP version integrated by the Adobe Product. This API itself exists only since 4.2.0. If `getCurrentApiVersion` is reported as undefined, the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version embedded in the Adobe product.

### CEP Events

CEP can send and receive events inside one extension, across extensions in the same application, and across extensions in different applications. Because extensions share a common communication layer and event data format, they can exchange CEP events with each other; they can also communicate with native code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for sending and listening to events. The sections below cover CEP event data format and structure, the dispatch/listen APIs, and matching JavaScript sample code.

### CSEvent

Here, CSEvent means a CEP Event. The CSEvent (CEP Event) data structure is shown below.

```
/**
 * Class CSEvent.
 * You can use it to dispatch a standard CEP event.
 *
 * @param type	          Event type.
 * @param scope 	  The scope of event, can be "GLOBAL" or "APPLICATION".
 * @param appId 	  The unique identifier of the application that generated the event. Optional.
 * @param extensionId The unique identifier of the extension that generated the event. Optional.
 *
 * @return CSEvent object
 */
function CSEvent(type, scope, appId, extensionId)
{
    this.type = type;
    this.scope = scope;
    this.appId = appId;
    this.extensionId = extensionId;
};
```

Create a `CSEvent` object, then send it with `CSInterface.dispatchEvent`. Its properties are also available inside the callback registered with `CSInterface.addEventListener`. See `addEventListener/dispatchEvent` below for more detail.

### Listen for and Dispatch CSEvent

In JavaScript, `dispatchEvent/addEventListener/removeEventListener` APIs handle dispatching and listening for CSEvent.

### addEventListener

The addEventListener definition is below. See CSInterface.js for additional information:

```
 /**
 * Registers an interest in a CEP event of a particular type, and
 * assigns an event handler.
 * The event infrastructure notifies your extension when events of this type occur,
 * passing the event object to the registered handler function.
 *  * @param type     The name of the event type of interest.
 * @param listener The JavaScript handler function or method.
 * @param obj      Optional, the object containing the handler method, if any.
 *         Default is null.
 */
CSInterface.prototype.addEventListener = function(type, listener, obj)
```

One important behavior: CSInterface.addEventListener accepts both named callback functions and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```
function callback(event)
{
    console.log(â€œtype=â€ + event.type + â€œ, data=â€ + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, function (event)
{
     console.log(â€œtype=â€ + event.type + â€œ, data=â€ + event.data);
}
); // Anonymous function is the second parameter
```

`event.data` may hold an object, so an object can be assigned as the event data.

Before CEP 6.1, every attribute in an `event.data` object was treated as a plain string. From CEP 6.1 onward, CEP preserves each attribute's original type in `event.data`; when a value is valid JSON, CEP parses it natively and converts it to an object.
The following example shows how to use that behavior.

```
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, function (event)
{
     var obj = event.data;
     console.log(â€œtype=â€ + event.type + â€œ, data.property1=â€ + obj.property1 + â€œ, data.property2=â€ + obj.property2);
}
); // Anonymous function is the second parameter
```

### dispatchEvent

The `CSInterface.dispatchEvent` definition appears below. Refer to `CSInterface.js` for details.

```javascript
/**
 * Triggers a CEP event programmatically. Yoy can use it to dispatch
 * an event of a predefined type, or of a type you have defined.
 *
 * @param event A \c CSEvent object.
 */
CSInterface.prototype.dispatchEvent = function(event)
```

These three JavaScript samples show event dispatch.

- JavaScript dispatch example.

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Sample that builds an event object, assigns properties, and dispatches it.

```
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Sample with object data assigned to the event.

```
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
cSInterface.dispatchEvent(event);
```

### Communication between Native Point Product and CEP extensions

CEP event-based communication between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` to exchange messages with CEP extensions.

Follow these steps:

Start by declaring this callback inside the CEP extension:

```
function callback(event)
{
    // do something here
}
```

Next, pass the event type and callback into CSInterface.addEventListener:

```
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, callback);
```

### Standard Events in Point Products

The table below lists standard events supported by point products.

| Event Type | Event Scope | Description | Event Parameter | PS | ID | AI | AN | PR | PL | AU |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| documentAfterActivate | APPLICATION | Event fired when a document has been activated(after new/open document; after document has retrieved focus). | URL to the active document. If the doc was not save, the NAME will be set instead of the URL. | ![No][cross] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| documentAfterDeactivate | APPLICATION | Event fired when the active document has been de-activated.(after document loses focus) | URL to the active document. If the doc was not save, the name will be set instead of the URL. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| applicationBeforeQuit | APPLICATION | Event fired when the application got the signal to start to terminate. | none | ![No][cross] | ![Issue][issue] | ![Issue][issue] | ![No][cross] | ![No][cross] | ![No][cross] | ![No][cross] |
| applicationActivate | APPLICATION | Event fired when the Application got an "activation" event from the OS. | none | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![Yes][correct] on macOS; ![No][cross] on Windows | ![Yes][correct] on macOS; ![No][cross] on Windows | ![Yes][correct] |
| documentAfterSave | APPLICATION | Event fired after the document has been saved | URL to the saved document. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |

(![Yes][correct] = supported, ![No][cross] = not supported)

[cross]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/cross.png "No"
[correct]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/correct.png "Yes"
[issue]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/Issue.png "Issue"

Note: After point products ID and AI emit `applicationBeforeQuit`, CEP is unloaded immediately, so HTML extensions may not get an opportunity to handle that event.

### Specific Events in Products

### Photoshop

Photoshop defines these product-specific events:

- com.adobe.PhotoshopPersistent
- com.adobe.PhotoshopUnPersistent
- com.adobe.PhotoshopWorkspaceSet
- com.adobe.PhotoshopWorkspaceGet
- com.adobe.PhotoshopWorkspaceAware
- com.adobe.PhotoshopWorkspaceData
- com.adobe.PhotoshopWorkspaceRequest
- com.adobe.PhotoshopRegisterEvent
- com.adobe.PhotoshopUnRegisterEvent
- com.adobe.PhotoshopLoseFocus
- com.adobe.PhotoshopQueryDockingState

For example, dispatching `com.adobe.PhotoshopLoseFocus` lets a CEP extension give mouse focus back to Photoshop:

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

`com.adobe.PhotoshopCallback` is removed in Photoshop 17.0 because adding a listener causes every CS Extension to receive the event. Beginning with the Photoshop CC 2015 June release, developers can use this replacement to avoid that broadcast behavior:

```
csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
```

### Invoke point product's scripts from html extension

Start by declaring a callback inside the CEP extension:

```
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Then invoke `CSInterface.evalScript` with the target script and that callback:

```
var script = "app.documents.add";  //Demo script
CSInterface.evalScript(script, evalScriptCallback);
```

Remember that the script passed to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest both execute in the host application's ExtendScript engine, which runs on the host application's main thread. CEP events are dispatched from that same main thread. If a script must interact with CEP events, break the script into smaller pieces and call them separately so the CEP event can be scheduled.

### Vulcan messages

As of CEP 5.0, global CEP Events with scope set to "GLOBAL" are not supported. Use the APIs in Vulcan.js instead.

### Vulcan message

The JavaScript data structure for a Vulcan message is shown below.

```
/**
 * @class VulcanMessage
 * Message type for sending messages between host applications.
 * A message of this type can be sent to the designated destination
 * when appId and appVersion are provided and valid. Otherwise,
 * the message is broadcast to all running Vulcan-enabled applications.
 *
 * To send a message between extensions running within one
 * application, use the <code>CSEvent</code> type in CSInterface.js.
 *
 * @param type            The message type.
 * @param appId           The peer appId.
 * @param appVersion      The peer appVersion.
 *
 */
function VulcanMessage(type, appId, appVersion)
{
    this.type = type;
    this.scope = VulcanMessage.SCOPE_SUITE;
    this.appId = requiredParamsValid(appId) ? appId : VulcanMessage.DEFAULT_APP_ID;
	this.appVersion = requiredParamsValid(appVersion) ? appVersion : VulcanMessage.DEFAULT_APP_VERSION;
    this.data = VulcanMessage.DEFAULT_DATA;
}

VulcanMessage.TYPE_PREFIX    = "vulcan.SuiteMessage.";
VulcanMessage.SCOPE_SUITE    = "GLOBAL";
VulcanMessage.DEFAULT_APP_ID = "UNKNOWN";
VulcanMessage.DEFAULT_APP_VERSION = "UNKNOWN";
VulcanMessage.DEFAULT_DATA = "<data><payload></payload></data>";
VulcanMessage.dataTemplate = "<data>{0}</data>";
VulcanMessage.payloadTemplate = "<payload>{0}</payload>";
```

### Listen for and Dispatch Vulcan message

The APIs `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload` send and listen for Vulcan messages. Their definitions appear below; consult Vulcan.js for implementation details.

```
/**
 * Registers a message listener callback function for a Vulcan message.
 *
 * @param type            The message type.
 * @param callback        The callback function that handles the message.
 *                        Takes one argument, the message object.
 * @param obj             Optional, the object containing the callback method, if any.
 *                        Default is null.
 */
Vulcan.prototype.addMessageListener = function(type, callback, obj)

/**
 * Removes a registered message listener callback function for a Vulcan message.
 *
 * @param type            The message type.
 * @param callback        The callback function that was registered.
 *                        Takes one argument, the message object.
 * @param obj             Optional, the object containing the callback method, if any.
 *                        Default is null.
 */
Vulcan.prototype.removeMessageListener = function(type, callback, obj)

/**
 * Dispatches a Vulcan message.
 *
 * @param vulcanMessage   The message object.
 */
Vulcan.prototype.dispatchMessage = function(vulcanMessage)

/**
 * Retrieves the message payload of a Vulcan message for the registered message listener callback function.
 *
 * @param vulcanMessage   The message object.
 * @return                A string containing the message payload.
 */
Vulcan.prototype.getPayload = function(vulcanMessage)
```

This example demonstrates how the JavaScript APIs are used.

```
var testVulcanMessage = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test");
testVulcanMessage.setPayload("To be or not to be that is a question!");

var callback = function (message) {
	alert(VulcanInterface.getPayload(message));
};

VulcanInterface.addMessageListener(testVulcanMessage.type, callback);
VulcanInterface.dispatchMessage(testVulcanMessage);
...
VulcanInterface.removeMessageListener(testVulcanMessage.type, callback);
```

For point-to-point Vulcan messages, use `getEndPoints` and `getSelfEndPoint`. The API definitions are listed below; see Vulcan.js for details.

```
/**
 * Gets all available endpoints of the running Vulcan-enabled applications.
 *
 * Since 7.0.0
 *
 * @return                The array of all available endpoints.
 * An example endpoint string:
 * <endPoint>
 *   <appId>PHXS</appId>
 *   <appVersion>16.1.0</appVersion>
 * </endPoint>
 */
Vulcan.prototype.getEndPoints = function()

/**
 * Gets the endpoint for itself.
 *
 * Since 7.0.0
 *
 * @return                The endpoint string for itself.
 */
Vulcan.prototype.getSelfEndPoint = function()
```

To send a point-to-point Vulcan message:

- Retrieve all available endpoints.
- Choose the destination endpoint and read appId and appVersion from it.
- Create a Vulcan message using the destination `appId` and `appVersion`.
- Dispatch the Vulcan message.

```
var endPointList = VulcanInterface.getEndPoints();
var destIndex = 0;
var appId = GetValueByKey(endPointList[destIndex], "appId");
var appVersion = GetValueByKey(endPointList[destIndex], "appVersion");
var message = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test", appId, appVersion);
message.setPayload("blablabla...");
VulcanInterface.dispatchMessage(message);
```

### Access Application DOM from Html Extension

Two JavaScript engines are involved here.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The Application DOM is unavailable inside the CEP extension engine, and the CEP DOM is unavailable inside the host application's engine.

To reach the Application DOM from CEP extensions, use the CEP JavaScript library API `CSInterface.evalScript`, which runs extend script against the host application's DOM. The diagram below summarizes DOM access through this API.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/dom_comm.jpg)

Sample JavaScript code in an HTML extension:

```
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```

### Access HTML DOM from extend script

Application ExtendScript cannot directly access an HTML extension's JavaScript DOM. When access is needed, CEP event-based communication can stand in for direct DOM access.

CEP supplies a library that uses the ExtendScript External Object mechanism to send CSXS events. That external object exposes an ExtendScript class named CSXSEvent for creating and dispatching application-level CSXS events. On the HTML extension side, listeners can be registered with the `addEventListener` API in `CSInterface.js`.

Some CC applications, including Photoshop, Illustrator, and Premiere Pro, integrated the PlugPlugExternalObject library and began supporting this feature in the CC 2014 release. Audition supports it starting with CC 2015.1.

### Sample Code

ExtendScript developers first create an external object instance.

```
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, construct the CSXSEvent instance.

```
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, use the instance to dispatch the event:

```
eventObj.dispatch();
```

The next block is sample ExtendScript code.
