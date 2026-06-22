# Cep 12 Html Extension Cookbook (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

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

For point-to-point Vulcan messaging, use the `getEndPoints` and `getSelfEndPoint` APIs. Their definitions follow; see Vulcan.js for additional details.

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

Use this sequence for sending a point-to-point Vulcan message:

- Retrieve the full endpoint list.
- Choose the destination endpoint, then read its appId and appVersion.
- Build a Vulcan message with the destination `appId` and `appVersion`.
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

Two JavaScript runtimes are involved:

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

CEP extension code cannot directly see the Application DOM, and host-side script code cannot directly see the CEP DOM.

To reach the Application DOM from a CEP extension, use the CEP JavaScript library API `CSInterface.evalScript` to run ExtendScript against the host application's DOM. The following diagram shows that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/dom_comm.jpg)

The HTML extension JavaScript can look like this:

```
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```

### Access HTML DOM from extend script

Application ExtendScript cannot directly access an HTML extension's JavaScript DOM. When that bridge is needed, use CEP event-based communication instead.

CEP supplies a library that uses the ExtendScript External Object mechanism to send CSXS events. The external object exposes the ExtendScript class CSXSEvent, which creates and dispatches application-level CSXS events. On the HTML extension side, register listeners through the `addEventListener` API in `CSInterface.js`.

Photoshop, Illustrator, and Premiere Pro added PlugPlugExternalObject support in the CC 2014 release. Audition added the same capability in the CC 2015.1 release.

### Sample Code

Start in ExtendScript by creating the external object instance.

```
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, create the CSXSEvent instance.

```
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, dispatch that instance:

```
eventObj.dispatch();
```

A complete ExtendScript sample follows.

```
...
var cs = new CSInterface();

cs.addEventListener("documentCreated", function(event){
  alert('Cool!' + event.data);
});

var extendScript = 'var externalObjectName = "PlugPlugExternalObject"; var mylib = new ExternalObject( "lib:" + externalObjectName ); app.document.add(); var eventObj = new CSXSEvent(); eventObj.type="documentCreated"; eventObj.data="blahblah"; eventObj.dispatch();'
cs.evalScript(extendScript);
```

### Fly-out menu

Native-panel fly-out menus are supported for HTML extensions.

CSInterface adds two interfaces.

```
CSInterface.prototype.setPanelFlyoutMenu = function(menu){
  window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
};

CSInterface.prototype.updatePanelMenuItem = function(menuItemLabel, enabled, checked){
  var ret = false;
  if (this.getHostCapabilities().EXTENDED_PANEL_MENU){
	var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
	ret = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
  }

  return ret;
};
```

For `setPanelFlyoutMenu`, the "menu" parameter is an XML string. Example:

```

```

Register `com.adobe.csxs.events.flyoutMenuClicked` through `AddEventListener` to handle fly-out menu item clicks. After the user chooses an item, the callback runs. The event object's `data` attribute carries the `menuId` and `menuName` attributes.

For open and close notifications, register listeners for this pair of event types in order:

```
"com.adobe.csxs.events.flyoutMenuOpened"
"com.adobe.csxs.events.flyoutMenuClosed"
```

### Customize Context Menu

### Set and Update Context Menu

`CSInterface` exposes three APIs for setting and updating the customized context menu.

```
CSInterface.prototype.setContextMenu = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
};

CSInterface.prototype.setContextMenuByJSON = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
};

CSInterface.prototype.updateContextMenuItem = function(menuItemID, enabled, checked){
  var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
  ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
};
```

For "setContextMenu", the "menu" parameter is an XML string.

- Id - Menu item ID; use plain text.
- Icon - Menu item icon path; resolve it relative to the extension root path. For best rendering, supply a 16 x 16px PNG icon because larger images enlarge the menu item.
- Label - Menu item label; localized languages are supported.
- Enabled - Controls whether the item is enabled or disabled. The default is true.
- Checkable - Controls whether the item can be checked/unchecked. The default is false.
- Checked - Indicates whether the item starts checked or unchecked. The default is false.
- Icon-bearing items and checkable items cannot appear together on the same menu level. Icon items take precedence.

Example:

```

```

The "callback" parameter is the function invoked after a menu item click. Its single argument is the clicked menu item's ID.

If you want to define the context menu with JSON instead, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID; use plain text.
- icon - Menu item icon path; resolve it relative to the extension root path. For best rendering, supply a 16 x 16px PNG icon because larger images enlarge the menu item.
- label - Menu item label; localized languages are supported.
- enabled - Controls whether the item is enabled or disabled. The default is true.
- checkable - Controls whether the item can be checked/unchecked. The default is false.
- checked - Indicates whether the item starts checked or unchecked. The default is false.
- Icon-bearing items and checkable items cannot appear together on the same menu level. Icon items take precedence.

JSON example:

```
{
       "menu": [
           {
		   	   "id": "menuItemId1",
			   "label": "testExample1",
			   "enabled": true,
			   "checkable": true,
			   "checked": false,
               "icon": "./img/small_16X16.png"
		   },
		   {
			   "id": "menuItemId2",
               "label": "testExample2",
               "menu": [
                   {
                       "id": "menuItemId2-1",
                       "label": "testExample2-1",
                       "menu": [
                           {
                               "id": "menuItemId2-1-1",
                               "label": "testExample2-1-1",
                               "enabled": false,
                               "checkable": true,
                               "checked": true
                           }
                       ]
                   },
                   {
                       "id": "menuItemId2-2",
                       "label": "testExample2-2",
                       "enabled": true,
                       "checkable": true,
                       "checked": true
                   }
               ]
           },
           {
               "label": "---"
           },
           {
               "id": "menuItemId3",
               "label": "testExample3",
               "enabled": false,
               "checkable": true,
               "checked": false
           }
       ]
   }
```

When developers leave the context menu unset, CEP displays its default items, such as Back, Forward, and View Source, preserving prior-release behavior. If a custom context menu includes no default id, CEP removes every default item and displays only the custom ones. When one of the following default ids appears, CEP displays the default menu item associated with that id.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not part of any id.
3.  Each id uses its built-in default callback, and that callback cannot be customised.

### Disable Context Menu

Pass null to `setContextMenu` to disable the context menu.

Another disabling option is to put `oncontextmenu="return false;"` on the HTML tag:

```
<body oncontextmenu="return false;">
```

### Get Display Status of HTML Extension Window

### Two ways to get HTML extension window

- Register the "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event.
- Call the isWindowVisible JavaScript API.

### Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe the `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; it applies only to PANEL extensions. If the user hides the panel window by clicking "X" or collapsing the window, the observer receives this event with "true" or "false" in the data attribute. The event is not sent when the extension closes.
  Currently, only persistent panel extensions running on Ai can receive this event: when the extension is hidden, the data is "false"; when it is shown, the data is "true".

### Call isWindowVisible API

- Call the `isWindowVisible` JS interface. Dialog and panel extensions can access this API, but modal and modeless dialog extensions always receive true, while invisible extensions always receive false.

### Getting and Changing Extension Content Size

### Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. From inside an IFrame, those properties belong to the IFrame window object rather than the HTML document. For the top-most window, use `parent.window.innerWidth` and `parent.window.innerWidth`.

### Changing Extension Content Size

Modal and modeless extension content resizing works in all Adobe applications that support CEP. Panel HTML extension resizing is not supported in Premiere Pro, Prelude, After Effects, or Audition.

```
CSInterface.prototype.resizeContent = function(width, height)
```

The width and height parameters must be unsigned integers. If other parameter types are passed, the function takes no action.

The min/max size constraints from the manifest file still apply and take precedence. A requested size outside the min/max range is clamped to the min or max bounds. When a panel is docked with other panels, it may still fail to resize as expected even if the requested dimensions satisfy those constraints. Host applications impose that restriction; CEP does not.

### Register invalid certificate error callback

(Since 6.1)
Register an invalid-certificate callback for an extension. The callback runs when the extension tries to load a main-frame web site with an invalid certificate. If the extension attempts that load without registering this function, CEP shows a default error page:

```
CSInterface.prototype.registerInvalidCertificateCallback = function(callback)
```

### Register an interest in specific key events

(Since 6.1)
Register interest in selected key events so they are not delivered to the host application:

```
CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)
```

This function works for modeless extensions and panel extensions. For both extension types, key events normally go to the host application unless the focused element is a text input or dropdown.

When certain key events should be handled inside the extension, call this function beforehand to keep them from being sent to the host application.

- keyEventsInterest: A JSON string describing the key events of interest.
  Passing a null object or an empty string removes the interest.

This JSON string must be an array whose objects use these keys:

- keyCode: [Required] OS-system-dependent virtual key code for the unmodified value of the pressed key.
- ctrlKey: [optional] a Boolean; `true` means Control participated in the event, and `false` means it did not.
- altKey: [optional] a Boolean; `true` means Alt participated in the event, and `false` means it did not.
- shiftKey: [optional] a Boolean; `true` means Shift participated in the event, and `false` means it did not.
- metaKey: [optional] (macOS Only) a Boolean; `true` means Meta participated in the event, and `false` means it did not. On Macintosh keyboards, Meta is the command key. On Windows, detect the Windows key with keyCode instead.

Key-code references:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

An example JSON string:

```
 [{
    "keyCode": 48
 },
 {
    "keyCode": 123,
    "ctrlKey": true
 }]
```

### Set and Get the title of the extension windows

(Since 6.1)
CEP 6.1 adds two APIs for setting and reading extension window titles. They cover modal and modeless extensions across Adobe products; panel usage is available in Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition:

```
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```

### HI-DPI display

The CEP JavaScript library includes APIs for detecting whether a HI-DPI display is available on macOS.

- `CSInterface.getScaleFactor()` Use this function to read the display scale factor for the screen that contains the calling extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Use this function to register an event handler for moves from a HI-DPI display to a non-HI-DPI display, or the reverse.

```
window.scaleFactorHandler = function(){
var scaleFactor = CSLibrary.getScaleFactor();
if (scaleFactor === 2){
imgSrc = "../img/PS_AppIcon_r.png"
} else {
imgSrc = "../img/PS_AppIcon.png"
}
document.getElementById("image").src = imgSrc;
}

CSLibrary.setScaleFactorChangedHandler(window.scaleFactorHandler);
```

CEP 5.2 already supports HiDPI on Windows.

### Other JavaScript APIs

The CEP HTML engine extends JavaScript with several API groups, including:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and can be called directly. No extra JavaScript file reference is required.

API reference follows.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as creating/deleting folders, reading/writing files, creating/quitting processes, and similar operations. Invoke these built-in APIs directly from the HTML extension without referencing a JavaScript file.

For example, you can

- create a folder.

```
var path = "/tmp/test";
var result = window.cep.fs.makedir(path);
if (0 == result.err){
  ...// success
} else {
  ...// fail
}
```

- write a file.

```
var data = "This is a test.";
var path = "/tmp/test";
var result = window.cep.fs.writeFile(path, data);
if (0 == result.err){
  ...// success
} else {
  ...// fail
}
```

- Write a file in base64 encoding mode. Before calling `writeFile()`, convert the input string into a base64-encoded string. Example:

```
var data = "This is a test.";
var path = "/tmp/test";
data = cep.encoding.convertion.utf8_to_b64(data);

var result = window.cep.fs.writeFile(fileName, data, cep.encoding.Base64);
if (0 == result.err) {
  ...// success
} else {
  ...// fail
}
```

- read a file.

```
var path = "/tmp/test";
var result = window.cep.fs.readFile(path);
if(result.err === 0){
  //success
  alert(result.data); //result.data is file content
} else {
  ...// fail
}
```

- Read a file in base64 encoding mode. After `readFile` returns, the data is a base64-encoded string; decode it into the format you need. Example:

```
var path = "/tmp/test";
result = window.cep.fs.readFile(path, cep.encoding.Base64);
if(result.err === 0){
  //success
  var base64Data = result.data;
  var data = cep.encoding.convertion.b64_to_utf8(base64Data);
} else {
  ...// fail
}
```

- Create a process and check if it's running.

```
var result = window.cep.process.createProcess("usr/X11/bin/xterm");

if(result.err === 0){
  var pid = result.data;
  result = window.cep.process.isRunning(pid);
  if(result.data === true){
    // running
  }
}
```

Additional calls cover folder deletion, folder rename, permission changes, file deletion, open-file dialogs, process quit, and more.

These samples demonstrate some of those APIs:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x/Samples

### Localization

Localization requires locale information from both the extension and the host application. Two locale categories are used.

- The **License Locale** - the AMT library returns this as applicationLocale
- The **Effective/Language/UI** Locale - the user controls this through
  OS settings.

The extension declares supported locales for both the License Locale and the Language Locale through `HostEnvironment`. This matters especially when extension features target a specific locale. The `PlugPlug` library expects locale information from the host application inside the environmental data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.

### License Locale and locales supported by extension

CEP compares the host application's **License Locale** with the supported locales declared in the extension locale list to decide whether the extension can load for that host application.

### Locale folder structure

Store each property file under the folder for its locale. For en_US, use `<YourExtension>/locale/en_US/messages.properties`. Users can also define the default property file (`<YourExtension>/locale/messages.properties`), which CEP uses when no locale-specific file exists.
