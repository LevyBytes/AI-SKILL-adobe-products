# Cep 10.0 Html Extension Cookbook (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

Every extension needs a manifest.xml file, which supplies the configuration information for a CEP extension. `ExtensionManifest` is the root element of manifest.xml. Under the `ExtensionManifest` root, the three child elements are `Extensions`, `ExtensionList`, and `DispatchList`.

### Extension Manifest XSD

All HTML extensions must use version 5.0 or above. The XSD is available from the GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_7`.x (No elements change from CEP 7)

To check whether an extension manifest matches the latest schema, use this sequence:

1.  Download the latest schema (ExtensionManifest\_`<version>`.xsd). Note that the schema did not change in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Go [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Submit the schema and your latest ExtensionManifest from a real build, so the version values are checked.
4.  Run validation

### Important Manifest Change for CEP 5.0 Extensions

Use the correct point product versions. Example:

```

```

This supports Photoshop version 15.0 through 15.9, inclusive. With the syntax below, releases are supported up to 15.9 but do not include 15.9.

```

```

Use the correct CEP version.

```

```

### Important Manifest Change for CEP 7.0 Extensions

With CEP 7.0, manifest files can attach a `HostList` to an individual extension in the bundle. For example, this counts as the "default" `HostList`:

```
...
  ...
...
```

A custom `HostList` can also be declared for an individual extension, as shown here:

```
...
  ...
    ...
  ...
  ...
```

`HostLists` defined under extension tags override the default `HostList` under the execution environment tag. Adding `HostList` nodes without child nodes effectively disables that particular extension for every host application; this is intended behavior. For each extension, choose either `HostList` tags or `Host` attributes in `DispatchInfo` tags. Combining both is likely to produce unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags rather than the Host attribute.

### Extension Size

In the extension manifest, specify extension size, max size, and min size. Size is required, while max size and min size can be omitted.

A modal or modeless dialog is resizable when max size and min size differ; if they match, resizing is disabled. As the mouse pointer passes over the dialog border, CEP shows distinct cursors for resizable versus non-resizable dialogs.

```

```

### Customize Extension Menu

Only InDesign and InCopy support this.

Edit the `<menu/>` item in the manifest to customize the extension menu. In the example below, the Adobe Add-ons extension appears under the Windows main menu instead of the Windows extensions menu. To choose a different location, update the Placement attribute value in the `<menu/>` item.

```
<?xml version="1.0" encoding="UTF-8"?>
    ...
             ...
                ...
...
```

### High DPI Panel Icons

Panel extensions may need high DPI icons when running in high DPI display mode. Configure these icons in the extension's manifest.

```

```

Package IconLight.png and IconDark.png for normal scale, plus IconLight@2X.png and IconDark@2X.png for high DPI.

Host applications can locate these files and use them as follows:

- For normal display: IconLight.png and IconDark.png
- For 200% high DPI display: IconLight@2X.png and IconDark@2X.png

@2X.ext is the industry standard. For more details, see https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop supports \_x2.ext format.

### Dialog Size based on Screen Size

CEP dialog size can be expressed as a percentage of screen size. Example:

```
    ...
        ...
```

### Shortcut Keys for HTML Extensions

(Since 5.2)

CEP 5.2 adds shortcut-key support for HTML extensions. When focus is inside an HTML extension, that extension handles these shortcuts.

| Windows Keys | macOS Keys | Function |
| --- | --- | --- |
| Ctrl + A | Command + A | Select All |
| Ctrl + C | Command + C | Copy |
| Ctrl + V | Command + V | Paste |
| Ctrl + X | Command + X | Cut |

Other shortcut keys, such as Ctrl + N for creating a new document, are handled by point products.

## CEP JavaScript Programming

### CEP JavaScript Libraries

CEP JavaScript Libraries correspond to the Flex CSXS Library. They expose JavaScript APIs for reading application and CEP information.

- CSInterface.js
- Vulcan.js

Download the files from: https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x

Include these JavaScript files in the HTML extension before using the APIs.

### API version

CEP JavaScript APIs evolve with each new CEP release. Those changes remain backward compatible. Newly added APIs include a version tag such as "Since x.x.x" in their API comments to show the CEP version where the API first appeared.

Compare that version tag with the CEP version integrated by the Adobe Product you target, so you can confirm that the API you need is available. Call `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated into the Adobe Product. This API is itself available only since 4.2.0. If `getCurrentApiVersion` is undefined, the runtime is CEP 4.0 or 4.1. Otherwise, its return value reports the CEP version integrated into the Adobe product.

### CEP Events

CEP can send and receive events within one extension, across extensions in one application, and across extensions in different applications. Because extensions use the same common communication layer and event data format, they can communicate through CEP events. They can also communicate with native-side code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching and listening to events. The following sections cover the CEP event data format and structure, the dispatch/listen APIs, and related JavaScript sample code.

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

Create a `CSEvent` object and dispatch it with `CSInterface.dispatchEvent`. In a `CSInterface.addEventListener` callback, you can also read its properties. See the `addEventListener/dispatchEvent` section for details.

### Listen for and Dispatch CSEvent

In JavaScript, use `dispatchEvent/addEventListener/removeEventListener` APIs to dispatch and listen for CSEvent.

### addEventListener

The definition for addEventListener is below. See CSInterface.js for more information:

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

Note that CSInterface.addEventListener supports both named and anonymous callback functions.

- Example that passes a named callback function to `CSInterface.addEventListener`.

```
function callback(event)
{
    console.log(“type=” + event.type + “, data=” + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, callback); //invoke the function
```

- Example that passes an anonymous callback function to
  `CSInterface.addEventListener`.

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, function (event)
{
     console.log(“type=” + event.type + “, data=” + event.data);
}
); // Anonymous function is the second parameter
```

event.data may be an object; in other words, an object can be used as event.data.

Before CEP 6.1, each attribute in the event.data object was treated as an ordinary string. Starting with CEP 6.1, CEP preserves the original type of each event.data attribute. When the value is a valid JSON string, CEP parses it natively and converts it into an object.
The example below demonstrates this behavior.

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

The `CSInterface.dispatchEvent` definition is shown here. See `CSInterface.js` for more details.

```javascript
/**
 * Triggers a CEP event programmatically. Yoy can use it to dispatch
 * an event of a predefined type, or of a type you have defined.
 *
 * @param event A \c CSEvent object.
 */
CSInterface.prototype.dispatchEvent = function(event)
```

The next three samples demonstrate event dispatch from JavaScript.

- JavaScript event-dispatch example.

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Another sample creates an event object, assigns its properties, and dispatches it.

```
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Example that dispatches an event with object data.

```
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
cSInterface.dispatchEvent(event);
```

### Communication between Native Point Product and CEP extensions

Communication between a native point product and CEP extensions can be handled through CEP events. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` for this exchange.

Use this sequence:

Begin by defining a callback function in the CEP extension:

```
function callback(event)
{
    // do something here
}
```

Then call CSInterface.addEventListener with the target event type and the callback function:

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, callback);
```

### Standard Events in Point Products

Point products support the standard events listed in the table below.

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

Note: CEP unloads from point products ID and AI immediately after point products emit `applicationBeforeQuit`, so HTML extensions may not get a chance to handle that event.

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

For example, sending the `com.adobe.PhotoshopLoseFocus` event lets a CEP extension return mouse focus to Photoshop:

```
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

`com.adobe.PhotoshopCallback` will be removed in Photoshop 17.0 because adding a listener causes every CS Extension to receive the event. As of Photoshop CC 2015 June release, developers can use this replacement to avoid the broadcast problem:

```
csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
```

### Invoke point product's scripts from html extension

First, define a callback function in CEP extension:

```
function evalScriptCallback(result)
{
   // process the result string here.
}
```

Then call `CSInterface.evalScript` with the script you want to call and the callback function:

```
var script = "app.documents.add";  //Demo script
CSInterface.evalScript(script, evalScriptCallback);
```

Keep in mind that both the script passed to `evalScript` and the jsx file named by `<ScriptPath>` in the extension manifest run inside the host application's ExtendScript engine, and that engine runs on the host application's main thread. CEP events are delivered from that same main thread as well. When a script must coordinate with CEP events, break the work into smaller calls and invoke them separately so event scheduling has room to occur.

### Vulcan messages

As of CEP 5.0, global CEP Events with a scope attribute value of "GLOBAL" are not supported anymore. Use Vulcan.js APIs for that communication path.

### Vulcan message

In JavaScript, a Vulcan message uses this structure.

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

Use `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload` to listen for Vulcan messages and send them. The definitions below show the API surface; Vulcan.js has the fuller reference.

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

This JavaScript sample demonstrates those APIs.

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

For point-to-point Vulcan messaging, use the `getEndPoints` and `getSelfEndPoint` APIs. Their definitions follow, with more detail available in Vulcan.js.

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

To send a point-to-point Vulcan message, follow this sequence:

- Retrieve every available endpoint.
- Choose the target endpoint, then read appId and appVersion from it.
- Build a Vulcan message with that destination `appId` and `appVersion`.
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

Two separate JavaScript engines are involved here.
