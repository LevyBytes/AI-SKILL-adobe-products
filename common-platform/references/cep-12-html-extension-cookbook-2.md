# Cep 12 Html Extension Cookbook (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

- CEP searches first in the product extension folder, next in the system extension folder, and last in the per-user extension folder.
- Extensions are filtered out when they do not declare a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the one with the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the newest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP loads whichever one it finds first.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be installed in the system extension folder or the per-user extension folder.

Note:

- Do not include character '#' in an extension folder path on Windows
  or Mac OSX, because CEF treats '#' as a delimiter.

### CEP HTML Test Extensions

CEP provides sample extensions for extension developers. Get the source code from:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x/Samples

### Extension Manifest

Every extension requires a manifest.xml file, which supplies the information needed to configure a CEP extension. In manifest.xml, `ExtensionManifest` is the root element, and `Extensions`, `ExtensionList`, and `DispatchList` are its three child elements.

### Extension Manifest XSD

Every HTML extension must use version 5.0 or later. Get the XSD here:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_7`.x (No elements change from CEP 7)

To check whether an extension manifest matches the latest schema, use these steps:

1.  Download the latest schema (ExtensionManifest\_`<version>`.xsd). The schema did not change in CEP 8, so for CEP 8 and 9 also use https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/ExtensionManifest_v_7_0.xsd.
2.  Open [this validator](http://tools.decisionsoft.com/schemaValidate/)
3.  Submit the schema plus the latest ExtensionManifest from a real build, so the versions are checked.
4.  Run validation.

### Important Manifest Change for CEP 5.0 Extensions

Use the correct point product versions. Example:

```

```

This supports Photoshop version 15.0 through 15.9, including 15.9. With the syntax below, releases up to but not including 15.9 are supported.

```

```

Use the correct CEP version.

```

```

### Important Manifest Change for CEP 7.0 Extensions

In CEP 7.0, a manifest can use a `HostList` specific to an extension within the bundle. For example, this qualifies as the "default" `HostList`:

```
...
  ...
...
```

You can also define a custom `HostList` per extension, as shown here:

```
...
  ...
    ...
  ...
  ...
```

`HostLists` placed under extension tags override the default `HostList` under the execution environment tag. Important: adding `HostList` nodes without child nodes effectively turns that extension off for every host application, and this is intentional. For each extension, choose either `HostList` tags or `Host` attributes in `DispatchInfo` tags, rather than using both. Combining the two can cause unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags instead of the Host attribute.

### Extension Size

The extension manifest can specify size, max size, and min size. Size is required; max size and min size are optional.

A modal or modeless dialog becomes resizable when max size and min size differ; otherwise it is not resizable. When the mouse pointer moves over the dialog border, CEP shows different cursors for resizable and non-resizable dialogs.

```

```

### Customize Extension Menu

This is supported only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in the manifest. Example: the Adobe Add-ons extension appears under the Windows main menu instead of the extensions menu under Windows. To place the extension elsewhere, change the Placement attribute value in the `<menu/>` item.

```
<?xml version="1.0" encoding="UTF-8"?>
    ...
             ...
                ...
...
```

### High DPI Panel Icons

Panel extensions may need high DPI icons when running in high DPI display mode. Configure these icons in the extension manifest.

```

```

Package both the normal icon files (IconLight.png and IconDark.png) and the high DPI icon files (IconLight@2X.png and IconDark@2X.png) with the extension.

Host applications then select:

- IconLight.png and IconDark.png on normal displays
- IconLight@2X.png and IconDark@2X.png on 200% high DPI displays

@2X.ext is the industry standard. More details are available at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.

### Dialog Size based on Screen Size

CEP dialog size can be set as a percentage of screen size. Example:

```
    ...
        ...
```

### Shortcut Keys for HTML Extensions

(Since 5.2)

CEP 5.2 adds shortcut-key support for HTML extensions. When focus is inside an HTML extension, the extension handles these shortcuts.

| Windows Keys | macOS Keys | Function |
| --- | --- | --- |
| Ctrl + A | Command + A | Select All |
| Ctrl + C | Command + C | Copy |
| Ctrl + V | Command + V | Paste |
| Ctrl + X | Command + X | Cut |

Point products handle the other shortcuts, such as Ctrl + N for creating a new document.

## CEP JavaScript Programming

### CEP JavaScript Libraries

CEP JavaScript Libraries correspond to the Flex CSXS Library. Through JavaScript, they let extensions query application data and CEP data.

- CSInterface.js
- Vulcan.js

Download location: https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_12`.x

Include these JavaScript files in the HTML extension when using them.

### API version

The CEP JavaScript APIs change with each new CEP release, while retaining backward compatibility. Newly added APIs include a version tag such as "Since x.x.x" in their API comments to indicate the CEP version where the API first became available.

Compare that version tag with the CEP version integrated into the Adobe Product being used, so you can confirm the target API is available. Use `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated by the Adobe Product. This API exists only starting in 4.2.0. If `getCurrentApiVersion` is undefined, the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version integrated into the Adobe product.

### CEP Events

CEP can send and receive events inside one extension, across extensions in one application, and across extensions in different applications. Because every extension uses the same communication layer and event data format, extensions can communicate through CEP events; they can also communicate with the native side when point products invoke `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching and listening to events. The next sections cover the CEP event data format and structure, the APIs for dispatching and listening, and related JavaScript sample code.

### CSEvent

Here, CSEvent means a CEP Event. Its data structure is shown below.

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

Create a `CSEvent` object and dispatch it with `CSInterface.dispatchEvent`. In a `CSInterface.addEventListener` callback, you can also read its properties. See `addEventListener/dispatchEvent` below for details.

### Listen for and Dispatch CSEvent

In JavaScript, `dispatchEvent/addEventListener/removeEventListener` APIs dispatch and listen for CSEvent.

### addEventListener

The addEventListener definition appears below. See CSInterface.js for more information:

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

CSInterface.addEventListener supports both named and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```
function callback(event)
{
    console.log(“type=” + event.type + “, data=” + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, function (event)
{
     console.log(“type=” + event.type + “, data=” + event.data);
}
); // Anonymous function is the second parameter
```

event.data can be an object; an object may be used as event.data.

Before CEP 6.1, every attribute in the event.data object was treated as a plain string. Starting with CEP 6.1, the behavior changed so each event.data attribute keeps its original type. When the value is valid JSON text, CEP parses it natively and converts it to an object.
Example usage:

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, function (event)
{
     var obj = event.data;
     console.log(“type=” + event.type + “, data.property1=” + obj.property1 + “, data.property2=” + obj.property2);
}
); // Anonymous function is the second parameter
```

### dispatchEvent

The definition for `CSInterface.dispatchEvent` is below. See `CSInterface.js` for more details.

```javascript
/**
 * Triggers a CEP event programmatically. Yoy can use it to dispatch
 * an event of a predefined type, or of a type you have defined.
 *
 * @param event A \c CSEvent object.
 */
CSInterface.prototype.dispatchEvent = function(event)
```

These three samples show how to dispatch an event in JavaScript.

- Example dispatching an event in JavaScript.

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Another example creates an event object, sets a property, then dispatches it.

```
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
csInterface.dispatchEvent(event);
```

- Example dispatching an event whose data is an object.

```
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
csInterface.dispatchEvent(event);
```

### Communication between Native Point Product and CEP extensions

CEP event-based communication between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` to communicate with CEP extensions.

Use these steps:

Begin by declaring a callback function inside the CEP extension:

```
function callback(event)
{
    // do something here
}
```

Next, pass the desired event type and callback function to CSInterface.addEventListener:

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, callback);
```

### Standard Events in Point Products

Point products support the standard events in this table.

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

Note: After point products ID and AI emit `applicationBeforeQuit`, they unload CEP immediately, so HTML extensions may not get an opportunity to handle that event.

### Specific Events in Products

### Photoshop

Photoshop defines these specific events:

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

For example, send the `com.adobe.PhotoshopLoseFocus` event when a CEP extension needs to return mouse focus to Photoshop:

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

Photoshop 17.0 removes `com.adobe.PhotoshopCallback`; adding a listener makes every CS Extension receive the event. Beginning with the Photoshop CC 2015 June release, developers can avoid that broadcast problem with this alternative:

```
csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
```

### Invoke point product's scripts from html extension

Begin by defining a callback function in the CEP extension:

```
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Next, pass both the target script and the callback function to `CSInterface.evalScript`:

```
var script = "app.documents.add";  //Demo script
CSInterface.evalScript(script, evalScriptCallback);
```

The script supplied to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest both run in the host application's ExtendScript engine, on the host application's main thread. CEP events are dispatched from that same main thread. If the script must interact with CEP events, split the script into smaller pieces and call them separately so CEP events can be scheduled.

### Vulcan messages

Starting with CEP 5.0, CEP Events with scope set to "GLOBAL" are no longer supported. Use the APIs in Vulcan.js instead.

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

JavaScript exposes `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload` APIs for listening to and dispatching Vulcan messages. Their definitions appear below. See Vulcan.js for more information.

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

The following example demonstrates using the APIs in JavaScript.
