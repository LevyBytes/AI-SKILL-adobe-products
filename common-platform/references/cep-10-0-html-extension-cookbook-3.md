# Cep 10.0 Html Extension Cookbook (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The CEP extension engine cannot see the Application DOM, and the host application's engine cannot see the CEP DOM.

For CEP extensions that need Application DOM access, the CEP JavaScript library exposes `CSInterface.evalScript`, which runs extend script against the host application's DOM. This diagram summarizes that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/`CEP_9`.x/Documentation/images/dom_comm.jpg)

The HTML extension sample below shows the JavaScript side.

```
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```

### Access HTML DOM from extend script

Application ExtendScript cannot directly reach the JavaScript DOM for an HTML extension. When that bridge is needed, CEP event communication can stand in for direct DOM access.

CEP supplies a library that sends CSXS events through the ExtendScript External Object mechanism. That external object adds the ExtendScript class CSXSEvent for creating application-level CSXS events and dispatching them. In the HTML extension, listeners can be attached with the `addEventListener` API in `CSInterface.js`.

PlugPlugExternalObject support arrived in the CC 2014 release for several CC applications, including Photoshop, Illustrator, and Premiere Pro. Audition added support in the CC 2015.1 release.

### Sample Code

First, ExtendScript code creates the external object instance.

```
var externalObjectName = "PlugPlugExternalObject";
var mylib = new ExternalObject( "lib:" + externalObjectName );
```

Next, instantiate `CSXSEvent`.

```
var eventObj = new CSXSEvent();
eventObj.type="documentCreated";
eventObj.data="blahblah";
```

Finally, dispatch the event through that instance:

```
eventObj.dispatch();
```

The ExtendScript sample is shown below.

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

HTML extensions can use fly-out menus on their native panels.

CSInterface adds two interfaces for this feature.

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

For `setPanelFlyoutMenu`, the "menu" argument is an XML string. An example follows:

```

```

To receive clicks on a menu item, register the `com.adobe.csxs.events.flyoutMenuClicked` event by calling `AddEventListener`. When the click occurs, the callback receives an event whose `data` object contains `menuId` and `menuName`.

For notifications when the fly-out menu opens or closes, register listeners for these event types:

```
"com.adobe.csxs.events.flyoutMenuOpened"
"com.adobe.csxs.events.flyoutMenuClosed"
```

### Customize Context Menu

### Set and Update Context Menu

`CSInterface` provides three APIs for setting and updating a customized context menu.

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

- Id - identifies the menu item. Use plain text for the value.
- Icon - gives the menu item's icon path, relative to the extension root path. For best rendering, provide a 16 x 16px PNG icon; larger files increase the menu item's size.
- Label - provides the text shown for the menu item and can be localized.
- Enabled - controls whether the item is available. The default value is true.
- Checkable - controls whether the item can toggle between checked and unchecked. The default value is false.
- Checked - controls whether the item starts checked. The default value is false.
- At the same menu level, icon items and checkable items cannot appear together; icon items take precedence.

An example appears here.

```

```

The "callback" parameter is invoked when the user clicks a menu item. Its sole argument is the clicked menu item ID.

To configure a context menu from a JSON string, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - identifies the menu item. Use plain text for the value.
- icon - gives the menu item's icon path, relative to the extension root path. For best rendering, provide a 16 x 16px PNG icon; larger files increase the menu item's size.
- label - provides the text shown for the menu item and can be localized.
- enabled - controls whether the item is available. The default value is true.
- checkable - controls whether the item can toggle between checked and unchecked. The default value is false.
- checked - controls whether the item starts checked. The default value is false.
- At the same menu level, icon items and checkable items cannot appear together; icon items take precedence.

Here is a JSON example.

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

When no context menu is set, CEP displays the default items, such as Back, Forward, and View Source, preserving behavior from earlier releases. If the supplied context menu includes none of the default ids, CEP removes every default item and displays only the customized items. When any id below is present, CEP shows the matching default menu item.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not included in an id.
3.  Each id uses its associated default callback, and that callback cannot be customized.

### Disable Context Menu

Call `setContextMenu` with null to disable the context menu.

Another option is adding `oncontextmenu="return false;"` to the HTML tag. For instance:

```
<body oncontextmenu="return false;">
```

### Get Display Status of HTML Extension Window

### Two ways to get HTML extension window

- Register "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event
- Call isWindowVisible JavaScript API.

### Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Watch the `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; it applies only to PANEL extensions. When the user hides the panel by clicking "X" or by collapsing the window, observers receive an event whose data attribute is "true" or "false". Closing the extension sends no such event.
  Currently, this limits delivery to persistent panel extensions running on Ai. Hidden extensions send "false"; shown extensions send "true".

### Call isWindowVisible API

- Use the `isWindowVisible` JS interface. Dialog and panel extensions can call this API; modal and modeless dialog extensions always report true, while invisible extensions always report false.

### Getting and Changing Extension Content Size

### Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. When these properties are read from inside an IFrame, however, the values come from the IFrame window object rather than the HTML document window. For the top-level value, use `parent.window.innerWidth` and `parent.window.innerWidth`.

### Changing Extension Content Size

Modal and modeless extension content size can be changed in every Adobe application that supports CEP. Panel HTML extension size changes are not supported in Premiere Pro, Prelude, After Effects, or Audition.

```
CSInterface.prototype.resizeContent = function(width, height)
```

The width and height arguments should be unsigned integers. Passing other types leaves the function with no effect.

Manifest-defined extension min/max size constraints still apply and have priority. If the requested size falls outside that range, CEP uses the matching minimum or maximum bound instead. A panel docked with other panels may still fail to resize as expected even when the requested size is inside those limits; that restriction comes from host applications rather than CEP.

### Register invalid certificate error callback

(Since 6.1)
An extension can register a callback for invalid certificate errors. The callback is fired when the extension tries to access, in the main frame, a web site with an invalid certificate. If the extension has not called this function and then accesses such a site, CEP shows the default error page:

```
CSInterface.prototype.registerInvalidCertificateCallback = function(callback)
```

### Register an interest in specific key events

(Since 6.1)
Register key events that should be kept from reaching the host application:

```
CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)
```

This function applies to modeless extensions and panel extensions. In general, key events for these extension types are sent to the host application unless the current focus is on a text input or dropdown.

To intercept selected key events and handle them inside the extension, call this function ahead of time so those events are not forwarded to the host application.

- keyEventsInterest: a JSON string that describes the key events of interest. Passing a null object or an empty string removes the interest.

The JSON string should contain an array. Each object uses these keys:

- keyCode: [Required] identifies the pressed key's unmodified value with an OS-dependent virtual key code.
- ctrlKey: [optional] a Boolean indicating whether the control key was pressed (true) or not pressed (false) when the event occurred.
- altKey: [optional] a Boolean indicating whether the alt key was pressed (true) or not pressed (false) when the event occurred.
- shiftKey: [optional] a Boolean indicating whether the shift key was pressed (true) or not pressed (false) when the event occurred.
- metaKey: [optional] (macOS Only) a Boolean indicating whether the Meta key was pressed (true) or not pressed (false) at event time. On Macintosh keyboards this key is Command. On Windows, detect the Windows key by checking keyCode.

Key-code references:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

Example JSON string:

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
CEP 6.1 adds two APIs for reading and setting extension window titles. Modal and modeless extensions can use them in all Adobe products; panel extension support covers Photoshop, InDesign, InCopy, Illustrator, Animate (Flash Pro), and Audition:

```
CSInterface.prototype.setWindowTitle = function(title){
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function(){
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```

### HI-DPI display

The CEP JavaScript library includes macOS APIs for detecting whether a HI-DPI display is available.

- `CSInterface.getScaleFactor()` returns the scale factor for the display that contains the calling extension window.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` registers an event handler that runs when the calling extension window moves from a HI-DPI display to a non-HI-DPI display, or back again.

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

The JavaScript engine in the CEP HTML engine is extended with APIs such as:

- local file access
- native process
- others

These APIs live in the JavaScript DOM. Use them like built-in JavaScript DOM APIs; no additional JavaScript files are required.

The API reference follows below.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as creating or deleting folders, reading or writing files, and creating or quitting processes. HTML extensions can call these built-in APIs directly without referencing an additional JavaScript file.

The examples below cover these tasks:

- make a folder.

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

- Write a file in base64 encoding mode. Before calling `writeFile()`, convert the input string to a base64-encoded string. The example below shows that flow.

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

- Read a file in base64 encoding mode. After `readFile` returns, the read data is converted to a base-encoded string, which you then decode to whatever format you need. The example below shows that pattern.

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

Other available APIs cover operations such as deleting folders, renaming folders, setting file permissions, deleting files, showing a file open dialog, and quitting processes.

These samples demonstrate several of those APIs:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x/Samples

### Localization

For localization to work, both the extension and the host application need to supply locale information. CEP distinguishes two locale categories.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (user-controlled through OS settings).

Through `HostEnvironment`, the extension provides supported-locale lists for both the License Locale and the Language Locale. This matters especially when extension features are locale-specific. The `PlugPlug` library expects the host application to include locale information in its environment data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.

### License Locale and locales supported by extension

To decide whether the host application can load an extension, CEP compares the host application's **License Locale** with the supported locales declared in the extension locale list.

### Locale folder structure

Place each property file in the folder for its locale. Put the en_US property file at `<YourExtension>/locale/en_US/messages.properties`, for instance. You can also define a default property file at `<YourExtension>/locale/messages.properties`; CEP uses that file when the matching locale file is absent.

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

CEP exposes the JS interface `initResourceBundle` for initializing locale resources. Call it while the extension loads. CEP initializes the extension's resource bundle with property values for the current application and UI locale, after which users can read localized strings from the resource bundle object.

```
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```

### Sharing localization resources across multiple locales

CEP 6.0 added a mechanism that lets multiple locales share the same localization resources (`messages.properties`).

For a case where `es_MX` should reuse the `messages.properties` file for `es_ES`, place a file named `fallback.properties` under the `es_MX` folder as shown below.

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

Inside `fallback.properties`, name the locale whose localized resources es_MX should use, using this format:

```
fallback=es_ES
```

Side Notes:

- When both `messages.properties` and `fallback.properties` are present together, `fallback.properties` takes precedence.
- If `fallback.properties` is malformed or points at a fallback locale that does not exist, CEP uses the messages.properties file in the same directory.

### Localized menu

The manifest can use a locale string for a menu. For example, the ShareOnBehance manifest uses `%UI_share_on_Behance`. In `messages.properties`, `UI_share_on_Behance` is defined as `UI_share_on_Behance=xxx`.

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

`data-locale` is a custom HTML element attribute that can be added to each HTML element you want localized.

In this example, the property file contains `key3.value=value3`. In the HTML file, the input widget carries the `data-locale` attribute with `key3`, so its value becomes `value3`.

In this example, the property file contains `key4.innerHTML=value4`. In the HTML file, the text area widget carries the `data-locale` attribute with `key4`, so its `innerHTML` becomes `value4`.

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

Use parameters `($1, $2, ...)` in localized strings.

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

The acronym MENA expands to "Middle East and North Africa". Extensions should cover Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

When an extension must load in host applications using MENA locales, add the MENA locales to the extension manifest file's supported locale list. For example:

```
    ...
    ...
```

### Extension localization for MENA locales

Sample directory tree:

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

When `CSInterface.initResourceBundle()` runs, CEP loads localized resources using the app UI locale reported by PP, not the app locale. If an app UI locale such as `fr_MA` has no localized resources, CEP falls back to `messages.properties` under the `locale` folder.

For app UI locale handling under the MENA feature, point products route `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. As a result, available `en_US` resources serve `en_AE` and `en_IL` builds, while available `fr_FR` resources serve a `fr_MA` build. Extension teams should supply `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.

### Video/Audio Playback

CEP 5.0 and later support playback of video and audio encoded in the formats below.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files with H.264 video codec and AAC audio codec Ogg video/ogg Ogg files with Theora video codec and Vorbis audio codec |
| mp3 | audio/mpeg |  |

Example video playback markup for an extension:

```
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
    <source src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
</video>
```

Because HTML extensions are hosted inside the integrating application's windows, video cannot enter full-screen playback mode.

### WebRTC
