# Cep 9.0 Html Extension Cookbook (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

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

HTML extension native panels support fly-out menus.

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

To receive notification when a menu item is clicked, register the `com.adobe.csxs.events.flyoutMenuClicked` event with `AddEventListener`. When the click occurs, CEP calls the event callback; the event object's `data` attribute contains `menuId` and `menuName`.

To be notified when the fly-out menu opens or closes, register listeners for these event types:

```
"com.adobe.csxs.events.flyoutMenuOpened"
"com.adobe.csxs.events.flyoutMenuClosed"
```

### Customize Context Menu

### Set and Update Custom Context Menu

Developers use three `CSInterface` APIs when setting or updating a custom context menu.

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

- Id - Menu item ID. Use plain text.
- Icon - Menu item icon path. This path is relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger images increase the menu item size.
- Label - Menu item label. Localized languages are supported.
- Enabled - Controls whether the item starts enabled or disabled. Default value is true.
- Checkable - Controls whether the item can be checked/unchecked. Default value is false.
- Checked - Sets whether the item starts checked or unchecked. Default value is false.
- Menu items with icons and checkable menu items cannot be on the same menu level. Icon items take precedence.

Here is an example.

```

```

The "callback" parameter is the function called when a user clicks a menu item. Its only parameter is the ID of the clicked menu item.

If a JSON string is preferred for setting the context menu, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID. Use plain text.
- icon - Menu item icon path. This path is relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger images increase the menu item size.
- label - Menu item label. Localized languages are supported.
- enabled - Controls whether the item starts enabled or disabled. Default value is true.
- checkable - Controls whether the item can be checked/unchecked. Default value is false.
- checked - Sets whether the item starts checked or unchecked. Default value is false.
- Menu items with icons and checkable menu items cannot be on the same menu level. Icon items take precedence.

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

When developers do not define a context menu, CEP displays default entries such as Back, Forward, and View Source. That behavior matches earlier releases. If a developer supplies a context menu without any default id, CEP removes all default entries and displays only the custom entries. When one of these default ids is included, the default menu item for that id is displayed.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  The ids are case-insensitive.
2.  The quotation marks are not part of an id.
3.  Each id uses its associated default callback, and that callback cannot be customised.

### Disable Context Menu

Disable the context menu by calling `setContextMenu` with null.

You can also place `oncontextmenu="return false;"` on the HTML tag:

```
<body oncontextmenu="return false;">
```

### Other Implementation of Context Menu

See [examples](http://www.javascripttoolbox.com/lib/contextmenu/).

### Get Display Status of HTML Extension Window

### Two ways to get HTML extension window

- Register "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event
- Call isWindowVisible JavaScript API.

### Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; this applies only to PANEL extensions. When the user hides the panel window by clicking "X" or collapsing the window, observers receive this event with "true" or "false" in the data attribute. The event is not sent when the extension is closed.
  Currently, only persistent panel extensions running on Ai can receive this event: when the extension is hidden, the event carries "false"; when it is shown, the event carries "true".

### Call isWindowVisible API

- Call the `isWindowVisible` JS interface. Dialog and panel extensions can both access this API, but modal and modeless dialog extensions always return true, while invisible extensions always return false.

### Getting and Changing Extension Content Size

### Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. Inside an IFrame, those properties refer to the IFrame window object rather than the HTML document's window. For the top-level window, use `parent.window.innerWidth` and `parent.window.innerWidth`.

### Changing Extension Content Dimensions

All Adobe applications with CEP support can change modal and modeless extension content size. For panel HTML extensions, Premiere Pro, Prelude, After Effects, and Audition do not support resizing.

```
CSInterface.prototype.resizeContent = function(width, height)
```

The width and height parameters must be unsigned integers. If other parameter types are supplied, the function takes no action.

Extension min/max size constraints from the manifest file still apply and have priority. If the requested size falls outside that min/max range, CEP uses the min or max bound instead. A docked panel can sometimes fail to resize as expected even when the requested size satisfies min and max constraints. That restriction comes from host applications, not from CEP.

### Register invalid certificate error callback

(Since 6.1)
For an extension, register a callback for invalid certificate errors. The callback fires when the extension reaches a web site whose main frame has an invalid certificate. Without this registration, visiting that kind of web site shows CEP's default error page:

```
CSInterface.prototype.registerInvalidCertificateCallback = function(callback)
```

### Register Specific Key Event Interest

(Since 6.1)
Register interest in selected key events so CEP keeps them inside the extension:

```
CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)
```

Modeless extensions and panel extensions support this function. For those two extension types, key events normally go to the host application unless the current focus is in a text input or dropdown.

If certain key events should be intercepted and handled by the extension, call this function first to stop those events from being sent to the host application.

- keyEventsInterest: a JSON string listing the key events the extension wants to receive. Passing a null object or an empty string clears the registered interest.

The JSON string is expected to be an array, with these keys on each object:

- keyCode: [Required] an OS-dependent virtual key code for the key's unmodified pressed value.
- ctrlKey: [optional] a Boolean showing whether the control key was down (`true`) or not down (`false`) for the event.
- altKey: [optional] a Boolean showing whether the alt key was down (`true`) or not down (`false`) for the event.
- shiftKey: [optional] a Boolean showing whether the shift key was down (`true`) or not down (`false`) for the event.
- metaKey: [optional] (macOS Only) a Boolean showing whether the Meta key was down (`true`) or not down (`false`) for the event. On Macintosh keyboards, this is the command key. On Windows, detect the Windows key through `keyCode` instead.

Use these references when you need the complete key-code lists:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

JSON sample:

```
 [{
    "keyCode": 48
 },
 {
    "keyCode": 123,
    "ctrlKey": true
 }]
```

### Extension-window title APIs

(Since 6.1)
CEP 6.1 added APIs for reading and changing extension-window titles. Modal and modeless extensions can use them in all Adobe products; Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition also support them for panel extensions:

```
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```

### HI-DPI display

On Mac, the CEP JavaScript library exposes APIs that let an extension detect whether HI-DPI display support is available.

- `CSInterface.getScaleFactor()` Call this to obtain the display scale factor for the screen that currently contains the extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Register a handler with this API so it runs after the extension window crosses from a HI-DPI display to a non-HI-DPI display, or the reverse.

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

CEP 5.2 already included HiDPI support on Windows.

### Other JavaScript APIs

CEP HTML engine extends its JavaScript engine with additional APIs, including:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and are called like normal built-in JavaScript APIs. No additional JavaScript file needs to be included.

The API reference follows.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that enlarges the CEPHtmlEngine DOM with capabilities such as creating or deleting folders, reading or writing files, creating or quitting processes, and similar tasks. HTML extensions can call these built-in APIs directly, with no JavaScript file reference.

Folder creation sample:

```
var path = "/tmp/test";
var result = window.cep.fs.makedir(path);
if (0 == result.err){
  ...// success
} else {
  ...// fail
}
```

File-write sample:

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

For base64 write mode, convert the input string into base64 before invoking `writeFile()`. Sample:

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

File-read sample:

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

With base64 read mode, data returned after `readFile` runs is converted to a base-encoded string. Decode that string into whichever format you need. Sample:

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

- Create a process and confirm its running state.

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

Other available APIs cover tasks such as deleting folders, renaming folders, setting file permissions, deleting files, showing the file-open dialog, quitting processes, and related operations.

These samples show some of those APIs in use:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_9`.x/Samples

### Localization

Localization depends on locale data from both the extension and the host application. CEP distinguishes two locale categories.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (the user controls this through OS
  settings).

Through `HostEnvironment`, the extension supplies its supported locales for both the License Locale and the Language Locale. This matters especially when extension functionality is locale-specific. The `PlugPlug` library expects the host application to include locale data in the environment information.

The JavaScript API `HostEnvironment` includes the `appLocale` property.

### License Locale and locales supported by extension

CEP uses the host application's **License Locale** and compares it with the extension's declared supported-locales list to decide whether that extension can load for the host.

### Locale folder structure

Put every property file into the matching locale directory. For instance, the en_US property file belongs at `<YourExtension>/locale/en_US/messages.properties`. A default property file can be defined at `<YourExtension>/locale/messages.properties`; CEP uses it when a matching locale file is absent.

```
YourExtension/
     |-csxs/
     |-locale/                      <-- Directory for localized resources
         |-- messages.properties    <-- The one to fallback to if no localized resources is provided for a locale
         |-- en_US/
         |        |- messages.properties
         |-- zh_CN/
                  |- messages.properties
```

A locale file is made of `<key>=<value>` lines. Add a newline after the final property key/value.

```
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

CEP supplies the JS interface `initResourceBundle` for initializing locale resources. Call it as the extension loads. CEP fills the extension's resource bundle with property values for the current application and UI locale; afterward, code can read localized strings from the returned object.

```
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```

### Sharing localization resources across multiple locales

Starting with CEP 6.0, multiple locales can reuse the same `messages.properties` localization resources.

For example, if `es_MX` should use the `messages.properties` file from `es_ES`, place a file named `fallback.properties` in the `es_MX` folder as shown here.

```
YourExtension/
     |-csxs/
     |-locale/
         |-- messages.properties
         |-- es_ES/
         |        |- messages.properties
         |-- es_MX/
                  |- fallback.properties
```

Inside `fallback.properties`, identify the locale whose localized resources es_MX should reuse with this format:

```
fallback=es_ES
```

Side Notes:

- When both `messages.properties` and `fallback.properties` are present together, `fallback.properties` wins.
- If `fallback.properties` is malformed, or if it names a fallback locale that does not exist, CEP uses the `messages.properties` file from that same directory.

### Localized menu

Manifests can use locale strings for menu values. In the ShareOnBehance manifest, for example, `%UI_share_on_Behance` is used, and `messages.properties` defines `UI_share_on_Behance` as `UI_share_on_Behance=xxx`.

```
    ...
```

### Examples

### Example 1

```
var cs = new CSInterface();
// Get properties according to current locale of host application.
var resourceBundle = cs.initResourceBundle();
// Use the localized strings.
<script type="text/javascript">document.write(resourceBundle.key1);</script>
```

### Example 2

`data-locale` is the custom HTML element attribute that can be added to any HTML element you want localized.

In the property file for this example, `key3.value=value3` appears. In the HTML, the input widget carries the `data-locale` attribute with `key3`, causing its value to become `value3`.

The same property file also contains `key4.innerHTML=value4`. The HTML text area uses `data-locale` with `key4`, so its `innerHTML` becomes `value4`.

```
<script type="text/javascript">
  var cs = new CSInterface();

  // Get properties according to current locale of host application.
  var resourceBundle = cs.initResourceBundle();

  // Use the localized strings.
  document.write(resourceBundle.key1);
  document.write(resourceBundle.key2);
</script>

<input type="submit" value="" data-locale="key3"/>
<textarea rows="10" cols="80" data-locale="key4"></textarea>
```

### Example 3

Use parameters `($1, $2, ...)` inside localized strings.

```
var localize = function(key){
  var cs = new CSInterface();
  var resourceBundle = cs.initResourceBundle();
  var localizedStr = resourceBundle[key];
  if (localizedStr){
    var index = 1;
    while (localizedStr.indexOf("$" + index) !== -1){
      localizedStr = localizedStr.replace("$" + index, arguments[index]);
      index++;
    }
    return localizedStr;
  } else {
    return '';
  }
};
```

### Supporting MENA locales

MENA means "Middle East and North Africa". The required language coverage includes Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

Extensions that must load in host applications using MENA locales need those MENA locales listed among the supported locales in the extension manifest file. For example:

```
    ...
    ...
```

### Extension localization for MENA locales

Assume the extension is arranged like this:

```
Extension/
         |-csxs/
         |-locale/                                <-- Directory for localized resources
                 |-- messages.properties          <-- The one to fallback to if no localized resources is provided for a locale
                 |-- fr_FR/
                 |        |- messages.properties
                 |-- en_GB/
                          |- messages.properties
```

When `CSInterface.initResourceBundle()` runs, CEP reads the app UI locale reported by PP, rather than the app locale, to find localized resources. If resources for an app UI locale such as `fr_MA` are missing, CEP falls back to the `messages.properties` file under the `locale` folder.

For app UI locale handling, point products using the MENA feature map `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. As a result, an `en_AE` or `en_IL` point-product build uses `en_US` resources when they are present, and a `fr_MA` build uses `fr_FR` resources when they are available. Extension teams should supply `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.

### Video/Audio Playback

CEP 5.0 and later can play video and audio encoded in the formats below.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files with H.264 video codec and AAC audio codec Ogg video/ogg Ogg files with Theora video codec and Vorbis audio codec |
| mp3 | audio/mpeg |  |

Example video playback inside an extension:

```
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
    <source src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
</video>
```

Because HTML extensions run inside integrating-application windows, video playback cannot enter full-screen mode.

### WebRTC

[WebRTC](http://www.webrtc.org/) is intended for streaming audio and video capture, such as online video conferencing. It is off by default. To turn it on, add the schema below to the manifest file. For details, see Customize CEF command parameters.

```

```

For WebRTC development, CEP runtime keeps the same usage experience as Chrome. See [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.

### Scroll bar tips

On macOS, panel scroll bars are hidden by the OS (by design since Lion). Settings can force them to remain visible:

1.  Open the Apple menu in the upper-left corner of the screen, then choose System Preferences.

2.  Select the General preferences pane; it is the first item at the top.

3.  Under "Show scroll bars", the choices are "Automatically based on input device," "When scrolling," and "Always." Choose "Always."

### Invisible HTML Extensions

An HTML extension may stay invisible for its entire life cycle. In that mode:

- It always runs in the background
- It is never visible

To create an invisible HTML extension:

- Use extension manifest version "5.0" or higher.
- In the manifest file, set the window type to 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- Omit the `<Menu>` tag when the extension should stay out of the Window->Extensions menu.
- Declare events with the `<StartOn>` tag when those event types should launch the extension.

Example:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>



```
