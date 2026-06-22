# Cep 8.0 Html Extension Cookbook (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

```xml
<?xml version="1.0" encoding="UTF-8"?>
    ...
             ...
                ...
...
```

### High DPI Panel Icons

Panel extensions running in high DPI display mode can point to high DPI icon assets from the extension's manifest.

```xml

```

Package the standard icon files (IconLight.png and IconDark.png) together with the high DPI variants (IconLight@2X.png and IconDark@2X.png) inside the extension.

Host applications can resolve these files as follows:

- IconLight.png and IconDark.png for normal display
- IconLight@2X.png and IconDark@2X.png for 200% high DPI display

The common industry suffix is @2X.ext; more information is available at https://developer.apple.com/library/ios/qa/qa1686/_index.html.

Note: Photoshop also recognizes the \_x2.ext format.

### Dialog Size based on Screen Size

CEP dialog dimensions may be declared as percentages of the screen size. Example:

```xml
    ...
        ...
```

### Shortcut Keys for HTML Extensions

(Since 5.2)

Starting in CEP 5.2, HTML extensions can define shortcut keys. When focus is inside an HTML extension, that extension receives the shortcuts below.

| Windows Keys | Mac Keys | Function |
| --- | --- | --- |
| Ctrl + A | Command + A | Select All |
| Ctrl + C | Command + C | Copy |
| Ctrl + V | Command + V | Paste |
| Ctrl + X | Command + X | Cut |

Shortcut combinations outside this set remain with the point products; for example, Ctrl + N creates a new document.

## CEP JavaScript Programming

### CEP JavaScript Libraries

The CEP JavaScript Libraries correspond to the Flex CSXS Library and the CEP IMS Library. Through these libraries, JavaScript can query application data and CEP data.

- CSInterface.js
- IMSInterface.js
- Vulcan.js

Download them from: https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_8`.x

Include these JavaScript files in the HTML extension before using the APIs they expose.

### API version

The CEP JavaScript APIs evolve with each CEP release, with backward compatibility preserved. Newly introduced APIs include comments such as "Since x.x.x" to show the first CEP version where that API exists.

Compare that version tag with the CEP version embedded in the Adobe Product you are targeting before depending on an API. Call `CSInterface.getCurrentApiVersion()` to read the integrated CEP version for the Adobe Product. This method itself exists only from 4.2.0 onward. If `getCurrentApiVersion` is reported as undefined, the runtime is CEP 4.0 or 4.1; otherwise, the returned value identifies the CEP version inside the Adobe product.

### CEP Events

CEP can send and receive events inside one extension, between extensions in one application, and between extensions in different applications. Because extensions share the same communication layer and event data format, CEP events allow them to exchange messages with each other and, when point products invoke `PlugPlugAddEventListener/PlugPlugDispatchEvent`, with native-side code as well.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` for sending events and registering listeners. The next sections cover the CEP event data format and structure, the dispatch/listen APIs, and a related JavaScript sample.

### CSEvent

Here, CSEvent means a CEP Event. This code represents its structure:

```js
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
function CSEvent(type, scope, appId, extensionId) {
  this.type = type;
  this.scope = scope;
  this.appId = appId;
  this.extensionId = extensionId;
}
```

Create a `CSEvent` object, then send it with `CSInterface.dispatchEvent`. In a `CSInterface.addEventListener` callback, the event properties are available to your handler. See the `addEventListener/dispatchEvent` section below for details.

### Listen for and Dispatch CSEvent

In JavaScript, `dispatchEvent/addEventListener/removeEventListener` are the APIs used to send CSEvent instances and listen for them.

### addEventListener

The addEventListener definition appears below. See CSInterface.js for additional information:

```js
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

`CSInterface.addEventListener` accepts both named callback functions and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```js
function callback(event)
{
    console.log(â€œtype=â€ + event.type + â€œ, data=â€ + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```js
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, function (event)
{
     console.log(â€œtype=â€ + event.type + â€œ, data=â€ + event.data);
}
); // Anonymous function is the second parameter
```

`event.data` may hold an object, so an object can be assigned directly to `event.data`.

Before CEP 6.1, every attribute inside the `event.data` object was treated as a normal string. Starting in CEP 6.1, each attribute keeps its original type. When a value is a valid JSON string, CEP parses it natively and converts it into an object.
The following example demonstrates that behavior.

```js
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, function (event)
{
     var obj = event.data;
     console.log(â€œtype=â€ + event.type + â€œ, data.property1=â€ + obj.property1 + â€œ, data.property2=â€ + obj.property2);
}
); // Anonymous function is the second parameter
```

### dispatchEvent

The definition for `CSInterface.dispatchEvent` is below. For more detail, refer to `CSInterface.js`.

```js
/**
 * Triggers a CEP event programmatically. Yoy can use it to dispatch
 * an event of a predefined type, or of a type you have defined.
 *
 * @param event A \c CSEvent object.
 */
CSInterface.prototype.dispatchEvent = function(event)
```

These three JavaScript snippets show different ways to dispatch an event.

- JavaScript event-dispatch example.

```js
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Example that creates the event object first, assigns properties, and then dispatches it.

```js
var csInterface = new CSInterface();
var event = new CSEvent();
event.type = "com.adobe.cep.test";
event.scope = "APPLICATION";
event.data = "This is a test!";
cSInterface.dispatchEvent(event);
```

- Example dispatching an event whose data payload is an object.

```js
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");
var obj = new Object();
obj.a = "a";
obj.b = "b";
event.data = obj;
cSInterface.dispatchEvent(event);
```

### Communication between Native Point Product and CEP extensions

Communication based on CEP events between a native point product and CEP extensions is straightforward. Use `PlugPlugAddEventListener/PlugPlugDispatchEvent` for CEP-extension communication.

Use the following sequence:

First, create a callback function in the CEP extension:

```js
function callback(event) {
  // do something here
}
```

Next, call CSInterface.addEventListener with the event type to observe and the callback function:

```js
var csInterface = new CSInterface();
csInterface.addEventListener(â€œcom.adobe.cep.testâ€, callback);
```

### Standard Events in Point Products

Point-product support for standard events is summarized here.

| Event Type | Event Scope | Description | Event Parameter | PS | ID | AI | AN | PR | PL | AU |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| documentAfterActivate | APPLICATION | Event fired when a document has been activated(after new/open document; after document has retrieved focus). | URL to the active document. If the doc was not save, the NAME will be set instead of the URL. | ![No][cross] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| documentAfterDeactivate | APPLICATION | Event fired when the active document has been de-activated.(after document loses focus) | URL to the active document. If the doc was not save, the name will be set instead of the URL. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |
| applicationBeforeQuit | APPLICATION | Event fired when the application got the signal to start to terminate. | none | ![No][cross] | ![Issue][issue] | ![Issue][issue] | ![No][cross] | ![No][cross] | ![No][cross] | ![No][cross] |
| applicationActivate | APPLICATION | Event fired when the Application got an "activation" event from the OS. | none | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![Yes][correct] on Mac; ![No][cross] on Windows | ![Yes][correct] on Mac; ![No][cross] on Windows | ![Yes][correct] |
| documentAfterSave | APPLICATION | Event fired after the document has been saved | URL to the saved document. | ![Yes][correct] | ![Yes][correct] | ![Yes][correct] | ![No][cross] | ![No][cross] | ![No][cross] | ![Yes][correct] |

(![Yes][correct] = supported, ![No][cross] = not supported)

[cross]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_8`.x/Documentation/images/cross.png "No"
[correct]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_8`.x/Documentation/images/correct.png "Yes"
[issue]: https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_8`.x/Documentation/images/Issue.png "Issue"

Note: In the ID and AI point products, CEP unloads immediately after `applicationBeforeQuit` is emitted. As a result, HTML extensions may not get an opportunity to process that event.

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

For instance, a CEP extension can return mouse focus to Photoshop by sending `com.adobe.PhotoshopLoseFocus`:

```js
var csInterface = new CSInterface();
var event = new CSEvent("com.adobe.PhotoshopLoseFocus", "APPLICATION");
event.extensionId = csInterface.getExtensionID();
csInterface.dispatchEvent(event);
```

`com.adobe.PhotoshopCallback` is removed in Photoshop 17.0 because registering a listener causes all CS Extensions to receive the event. Beginning with the Photoshop CC 2015 June release, developers can use the following alternative to avoid the broadcast problem:

```js
csInterface.addEventListener(
  "com.adobe.PhotoshopJSONCallback" + gExtensionID,
  PhotoshopCallbackUnique,
);
```

### Invoke point product's scripts from html extension

First, declare a callback function in the CEP extension:

```js
function evalScriptCallback(result) {
  // process the result string here.
}
```

Then pass the script to execute, plus the callback function, into `CSInterface.evalScript`:

```js
var script = "app.documents.add"; //Demo script
CSInterface.evalScript(script, evalScriptCallback);
```

Remember that the script passed to evalScript and the jsx file configured in `<ScriptPath>` in the extension manifest run inside the host application's ExtendScript engine, which uses the host application's main thread. CEP events are also dispatched from that same main thread. If a script must interact with CEP events, break the script into smaller calls so CEP events can be scheduled between them.

### Vulcan messages

From CEP 5.0 onward, global CEP Events with scope set to "GLOBAL" are not supported. Use the Vulcan.js APIs instead.

### Vulcan message

A Vulcan message uses this JavaScript structure:

```js
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
function VulcanMessage(type, appId, appVersion) {
  this.type = type;
  this.scope = VulcanMessage.SCOPE_SUITE;
  this.appId = requiredParamsValid(appId) ? appId : VulcanMessage.DEFAULT_APP_ID;
  this.appVersion = requiredParamsValid(appVersion)
    ? appVersion
    : VulcanMessage.DEFAULT_APP_VERSION;
  this.data = VulcanMessage.DEFAULT_DATA;
}

VulcanMessage.TYPE_PREFIX = "vulcan.SuiteMessage.";
VulcanMessage.SCOPE_SUITE = "GLOBAL";
VulcanMessage.DEFAULT_APP_ID = "UNKNOWN";
VulcanMessage.DEFAULT_APP_VERSION = "UNKNOWN";
VulcanMessage.DEFAULT_DATA = "<data><payload></payload></data>";
VulcanMessage.dataTemplate = "<data>{0}</data>";
VulcanMessage.payloadTemplate = "<payload>{0}</payload>";
```

### Listen for and Dispatch Vulcan message

To send and receive Vulcan messages, use `addMessageListener`, `removeMessageListener`, `dispatchMessage`, and `getPayload`. The definitions follow, with additional detail available in Vulcan.js.

```js
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

The following JavaScript example demonstrates how to use these APIs.

```js
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

`getEndPoints` and `getSelfEndPoint` support point-to-point Vulcan messages. The definitions appear below; see Vulcan.js for details.

```js
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

Use this sequence to send a point-to-point Vulcan message:

- Retrieve all available endpoints.
- Choose the destination endpoint, then read `appId` and `appVersion` from it.
- Create the Vulcan message with the destination `appId` and `appVersion`.
- Dispatch the Vulcan message.

```js
var endPointList = VulcanInterface.getEndPoints();
var destIndex = 0;
var appId = GetValueByKey(endPointList[destIndex], "appId");
var appVersion = GetValueByKey(endPointList[destIndex], "appVersion");
var message = new VulcanMessage(VulcanMessage.TYPE_PREFIX + "test", appId, appVersion);
message.setPayload("blablabla...");
VulcanInterface.dispatchMessage(message);
```

### Access Application DOM from Html Extension

Two distinct JavaScript engines are involved here.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The CEP extension engine cannot access Application DOM directly, and the host application's engine cannot reach CEP DOM directly.

To reach Application DOM from a CEP extension, the CEP JavaScript library supplies `CSInterface.evalScript`, which runs ExtendScript against the host application's DOM. The short diagram below shows that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_8`.x/Documentation/images/dom_comm.jpg)

Place this JavaScript snippet on the extension side.

```js
var csInterface = new CSInterface();
csInterface.evalScript("app.documents.add();", function (result) {
  alert(result);
});
```

### Access HTML DOM from extend script

Application ExtendScript cannot directly reach an HTML extension's JavaScript DOM. When that access pattern is needed, CEP event-based communication can act as the replacement.

CEP includes a library that uses the ExtendScript External Object mechanism to send CSXS events. The external object supplies the ExtendScript class CSXSEvent for creating and dispatching application-level CSXS events. On the HTML extension side, register listeners through the `addEventListener` API in `CSInterface.js` to receive those events.

The CC 2014 release brought this PlugPlugExternalObject support to some CC applications, including Photoshop, Illustrator, and Premiere Pro. Audition added the same capability in CC 2015.1.

### Sample Code

ExtendScript developers begin by creating an external object instance.

```js
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject("lib:" + externalObjectName);
```

Next, instantiate CSXSEvent.

```js
var eventObj = new CSXSEvent();
eventObj.type = "documentCreated";
eventObj.data = "blahblah";
```

Finally, dispatch the event with that instance:

```js
eventObj.dispatch();
```

The ExtendScript sample appears below.

```js
...
var cs = new CSInterface();

cs.addEventListener("documentCreated", function(event){
  alert('Cool!' + event.data);
});

var extendScript = 'var externalObjectName = "PlugPlugExternalObject"; var mylib = new ExternalObject( "lib:" + externalObjectName ); app.document.add(); var eventObj = new CSXSEvent(); eventObj.type="documentCreated"; eventObj.data="blahblah"; eventObj.dispatch();'
cs.evalScript(extendScript);
```

### Fly-out menu

HTML extensions can use a fly-out menu on the native panel.

CSInterface gains two interfaces for this feature.

```js
CSInterface.prototype.setPanelFlyoutMenu = function (menu) {
  window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
};

CSInterface.prototype.updatePanelMenuItem = function (menuItemLabel, enabled, checked) {
  var ret = false;
  if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
    var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
    ret = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
  }

  return ret;
};
```

The `menu` parameter for `setPanelFlyoutMenu` is an XML string. Example:

```js

```

To receive notification when a menu item is clicked, register for `com.adobe.csxs.events.flyoutMenuClicked` by calling `AddEventListener`. When a click occurs, the callback receives an event whose `data` attribute is an object containing `menuId` and `menuName`.

To be notified when the fly-out menu opens and closes, register event listeners for these event types:

```js
"com.adobe.csxs.events.flyoutMenuOpened";
"com.adobe.csxs.events.flyoutMenuClosed";
```

### Context Menu Customization

### Set and Update Context Menu

Developers can set and update a customized context menu through three APIs in `CSInterface`.
