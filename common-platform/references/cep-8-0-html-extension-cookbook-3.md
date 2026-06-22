# Cep 8.0 Html Extension Cookbook (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

```js
CSInterface.prototype.setContextMenu = function (menu, callback) {
  window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
};

CSInterface.prototype.setContextMenuByJSON = function (menu, callback) {
  window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
};

CSInterface.prototype.updateContextMenuItem = function (menuItemID, enabled, checked) {
  var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
  ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
};
```

For "setContextMenu", the "menu" parameter is an XML string.

- Id - Menu item ID; use plain text.
- Icon - Menu item icon path; supply a path relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger dimensions increase the menu item's size.
- Label - Menu item label; localized languages are supported.
- Enabled - Controls whether the item is enabled or disabled. The default value is true.
- Checkable - Controls whether the item can be checked/unchecked. The default value is false.
- Checked - Controls whether the item is checked or unchecked. The default value is false.
- Menu items with icons and checkable items cannot appear together on the same menu level. Items with icons take precedence over checkable items.

XML sample:

```xml

```

The "callback" parameter is the callback function invoked after the user clicks a menu item. Its only argument is the clicked menu item's ID.

To set the context menu with a JSON string instead, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID; use plain text.
- icon - Menu item icon path; supply a path relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger dimensions increase the menu item's size.
- label - Menu item label; localized languages are supported.
- enabled - Controls whether the item is enabled or disabled. The default value is true.
- checkable - Controls whether the item can be checked/unchecked. The default value is false.
- checked - Controls whether the item is checked or unchecked. The default value is false.
- Menu items with icons and checkable items cannot appear together on the same menu level. Items with icons take precedence over checkable items.

JSON example:

```json
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

When developers do not set a context menu, CEP displays the default items such as Back, Forward, and View Source. This preserves compatibility with earlier releases. If a custom context menu contains no default id, CEP removes all default items and displays only the custom items. When one of the default ids below is supplied, the matching default menu item is shown.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not part of an id.
3.  The default callback associated with each id is used and cannot be customised.

### Disable Context Menu

Pass null to `setContextMenu` to disable the context menu.

Another option is adding `oncontextmenu="return false;"` to the HTML tag. Example:

```xml
<body oncontextmenu="return false;">
```

### Alternate Context Menu Implementations

Reference [examples](http://www.javascripttoolbox.com/lib/contextmenu/).

### HTML Extension Window Display Status

### Ways to read HTML extension window state

- Observe the "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event
- Use the isWindowVisible JavaScript API.

### Resister "com.adobe.csxs.events.panelWindowStatusChanged" CSXS event

- Observe `com.adobe.csxs.events.panelWindowStatusChanged` CSXS event; this applies only to PANEL extensions. If the user hides the panel by clicking "X" or collapsing the window, observers receive this event with "true" or "false" in the data attribute. Closing the extension does not send the event.
  Currently, only panel extensions that are persistent and running on Ai can receive it. When the extension is hidden, the event carries "false"; when it is shown, the event carries "true".

### Call isWindowVisible API

- Call the `isWindowVisible` JS interface. Dialog and panel extensions can access this API, but modal and modeless dialog extensions always return true, while invisible extensions always return false.

### Getting and Changing Extension Content Size

### Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to read extension content size. From inside an IFrame, those properties refer to the IFrame window object rather than the HTML document window. To reach the top-most object, use `parent.window.innerWidth` and `parent.window.innerWidth`.

### Changing Extension Content Size

Modal and modeless extension content size can be changed in every Adobe application that supports CEP. Panel HTML extension resizing is not supported in Premiere Pro, Prelude, After Effects, or Audition.

```js
CSInterface.prototype.resizeContent = function(width, height)
```

Both parameters, width and height, must be unsigned integers. With any other parameter type, the function takes no action.

Manifest-defined extension min/max size constraints still apply and take precedence. If the requested size falls outside the min/max size range, CEP uses the min or max bound instead. A docked panel may fail to resize as expected even when the requested size satisfies those constraints, because that limitation comes from host applications rather than CEP.

### Register invalid certificate error callback

(Since 6.1)
An extension can register an invalid-certificate error callback. The callback runs when the extension tries to access a web site that has an invalid certificate on the main frame. Without this function, attempting to load a web site with an invalid certificate shows the default error page:

```js
CSInterface.prototype.registerInvalidCertificateCallback = function(callback)
```

### Register specific key events

(Since 6.1)
Declare selected key events so they are not forwarded to the host application:

```js
CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)
```

This function applies to modeless extensions and panel extensions. For those two extension types, key events are generally sent to the host application unless the currently focused element is a text input or dropdown.

Call this function ahead of time when certain key events should be intercepted and handled inside the extension instead of being sent to the host application.

- keyEventsInterest: A JSON string describing the key events of interest.
  Passing a null object or an empty string removes the interest.

The JSON string should be an array, with each object using these keys:

- keyCode: [Required] provides an OS system dependent virtual key code for the unmodified value of the pressed key.
- ctrlKey: [optional] a Boolean whose value is true when the control key was down for the event, and false otherwise.
- altKey: [optional] a Boolean whose value is true when the alt key was down for the event, and false otherwise.
- shiftKey: [optional] a Boolean whose value is true when the shift key was down for the event, and false otherwise.
- metaKey: [optional] (Mac Only) a Boolean whose value is true when the Meta key was down for the event, and false otherwise. On Mac keyboards, Meta maps to Command. For the Windows key on Windows, detect it through keyCode instead.

To find all key codes:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- Mac
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

An example JSON string:

```json
[
  {
    "keyCode": 48
  },
  {
    "keyCode": 123,
    "ctrlKey": true
  }
]
```

### Extension window title APIs

(Since 6.1)
CEP 6.1 adds two APIs for setting and reading extension-window titles. Modal and modeless extensions can use them in all Adobe products; for panel extensions, support covers Audition, Animate (Flash Pro), Illustrator, InCopy, InDesign, and Photoshop:

```js
CSInterface.prototype.setWindowTitle = function (title) {
  window.__adobe_cep__.invokeSync("setWindowTitle", title);
};

CSInterface.prototype.getWindowTitle = function () {
  return window.__adobe_cep__.invokeSync("getWindowTitle", "");
};
```

### HI-DPI display

The CEP JavaScript library includes APIs for detecting HI-DPI display availability on Mac.

- `CSInterface.getScaleFactor()` Call this to read the scale factor for the display where the calling extension window is located.
- `var scaleFactor = CSLibrary.getScaleFactor();`
- `CSInterface.setScaleFactorChangedHandler()` Call this to register an event handler that runs when the calling extension window moves from a HI-DPI display to a non-HI-DPI display, or back.

```js
window.scaleFactorHandler = function () {
  var scaleFactor = CSLibrary.getScaleFactor();
  if (scaleFactor === 2) {
    imgSrc = "../img/PS_AppIcon_r.png";
  } else {
    imgSrc = "../img/PS_AppIcon.png";
  }
  document.getElementById("image").src = imgSrc;
};

CSLibrary.setScaleFactorChangedHandler(window.scaleFactorHandler);
```

CEP 5.2 already supports HiDPI on Windows.

### Other JavaScript APIs

The CEP HTML engine extends its JavaScript engine with APIs such as:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and are used like other built-in JavaScript APIs. You do **NOT** need to include JavaScript files for them.

API reference:

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as create/delete folder, read/write file, create/quit process, and similar operations. HTML extensions can call these built-in APIs directly without referencing any JavaScript file.

For example, you can

- make one directory.

```js
var path = "/tmp/test";
var result = window.cep.fs.makedir(path);
if (0 == result.err){
  ...// success
} else {
  ...// fail
}
```

- write a file.

```js
var data = "This is a test.";
var path = "/tmp/test";
var result = window.cep.fs.writeFile(path, data);
if (0 == result.err){
  ...// success
} else {
  ...// fail
}
```

- Write a file using base64 encoding mode. Convert the input string into a base64-encoded string before calling `writeFile()`. Sample:

```js
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

```js
var path = "/tmp/test";
var result = window.cep.fs.readFile(path);
if(result.err === 0){
  //success
  alert(result.data); //result.data is file content
} else {
  ...// fail
}
```

- Read a file with base64 encoding mode. After `readFile` is called, the read data is returned as a base-encoded string, which you then decode to the needed format. Sample:

```js
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

```js
var result = window.cep.process.createProcess("usr/X11/bin/xterm");

if (result.err === 0) {
  var pid = result.data;
  result = window.cep.process.isRunning(pid);
  if (result.data === true) {
    // running
  }
}
```

Additional operations cover folder deletion, folder renaming, file permission changes, file deletion, file-open dialogs, process quitting, and related tasks.

These samples demonstrate some of those APIs:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_8`.x/Samples

### Localization

Localization requires locale information from both the extension and the host application. Two separate locale information types are involved.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (the user's OS settings control this)

Through `HostEnvironment`, the extension must list supported locales for both the License Locale and the Language Locale. This matters especially when an extension has locale-specific features. The `PlugPlug` library expects locale information from the host application as part of its environment data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.

### License Locale and locales supported by extension

CEP uses the host application's **License Locale** and the supported locales declared in an extension's locale list to decide whether that extension can load for the host application.

### Locale folder structure

Place each property file in the matching locale folder. For example, the en_US property file belongs at `<YourExtension>/locale/en_US/messages.properties`. Developers may also define the default property file `<YourExtension>/locale/messages.properties`, which is used when the corresponding locale-specific file is absent.

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

Write locale files as one `<key>=<value>` entry per line. Finish the file with a newline after the last entry.

```
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

CEP exposes a JS interface called `initResourceBundle` for initializing locale resources. Call it while the extension is loading. CEP initializes the extension resource bundle with property values for the current application and UI locale. After initialization, developers can read localized strings from the resource bundle object.

```js
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```

### Reusing localization resources across locales

CEP 6.0 added a mechanism that lets multiple locales share the same localization resources (`messages.properties`).

For example, to make `es_MX` use the `messages.properties` file for `es_ES`, place a file named `fallback.properties` in the `es_MX` folder as shown below.

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

Inside `fallback.properties`, identify the locale whose resources es_MX should use with this format:

```
fallback=es_ES
```

Side Notes:

- When both `messages.properties` and `fallback.properties` are present,
  `fallback.properties` takes precedence.
- If `fallback.properties` is malformed or points to a fallback locale
  that does not exist, CEP uses the messages.properties file in the same
  directory.

### Localized menu

The manifest can use a locale string as a menu value. For example, ShareOnBehance's manifest uses `%UI_share_on_Behance`. `UI_share_on_Behance` is defined in `messages.properties` as `UI_share_on_Behance=xxx`.

```xml
    ...
```

### Samples

### Sample 1

```js
var cs = new CSInterface();
// Get properties according to current locale of host application.
var resourceBundle = cs.initResourceBundle();
// Use the localized strings.
<script type="text/javascript">document.write(resourceBundle.key1);</script>;
```

### Sample 2

`data-locale` is a custom HTML element attribute that can be added to any HTML element you want localized.

In this example, the property file contains `key3.value=value3`. In the HTML file, the input widget has the `data-locale` attribute set to `key3`, so its value becomes `value3`.

For the text area, the property file entry is `key4.innerHTML=value4`; the HTML sets `data-locale` to `key4`, and CEP writes `value4` into `innerHTML`.

```html
<script type="text/javascript">
  var cs = new CSInterface();

  // Get properties according to current locale of host application.
  var resourceBundle = cs.initResourceBundle();

  // Use the localized strings.
  document.write(resourceBundle.key1);
  document.write(resourceBundle.key2);
</script>

<input type="submit" value="" data-locale="key3" />
<textarea rows="10" cols="80" data-locale="key4"></textarea>
```

### Sample 3

Use `($1, $2, ...)` parameters inside localized strings.

```js
var localize = function (key) {
  var cs = new CSInterface();
  var resourceBundle = cs.initResourceBundle();
  var localizedStr = resourceBundle[key];
  if (localizedStr) {
    var index = 1;
    while (localizedStr.indexOf("$" + index) !== -1) {
      localizedStr = localizedStr.replace("$" + index, arguments[index]);
      index++;
    }
    return localizedStr;
  } else {
    return "";
  }
};
```

### Supporting MENA locales

MENA means "Middle East and North Africa". The related language support covers Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

When an extension must load in host applications using MENA locales, add the MENA locales to the extension manifest's supported locale list. Example:

```xml
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

After `CSInterface.initResourceBundle()` runs, CEP selects localized assets by using the app UI locale reported by PP, not the app locale. When that UI locale has no matching localized resource, such as `fr_MA`, CEP falls back to `messages.properties` under the `locale` folder.

For the MENA feature, point products translate app UI locales from `en_AE/en_IL` to `en_US` and from `fr_MA` to `fr_FR`. As a result, `en_AE` and `en_IL` point-product builds use `en_US` resources when those resources exist, while `fr_MA` builds use `fr_FR` resources when available. Extension teams therefore need to ship an `en_US` resource set for `en_AE/en_IL`, plus a `fr_FR` resource set for `fr_MA`.

### Video/Audio Playback

CEP 5.0 can play video and audio that use these encodings.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files using H.264 video codec with AAC audio codec Ogg video/ogg Ogg files using Theora video codec with Vorbis audio codec |
| mp3 | audio/mpeg |  |

This sample shows video playback from an extension:

```html
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
  <source
    src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  />
</video>
```

Because HTML extensions live inside the host application's windowing environment, video playback cannot switch into full-screen mode.

### WebRTC

[WebRTC](http://www.webrtc.org/) is intended for streamed audio, captured video, and uses such as online video conferencing. It is off unless explicitly enabled. Add the schema below to the manifest file to turn it on. For more information, see Customize CEF command parameters.

```xml

```

For WebRTC work, the CEP runtime follows Chrome-style behavior. Use the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) as implementation references.

### Scroll bar tips

On Mac, the OS hides panel scroll bars by default beginning with Lion. These settings can force them to stay visible.

1.  Open the Apple menu at the upper-left of the screen, then choose System Preferences.

2.  Open the General preferences pane, which is the first pane at the top.

3.  In the "Show scroll bars" section, choose from "Automatically based on input device," "When scrolling," and "Always." Select "Always."

### Invisible HTML Extensions

An HTML extension may remain invisible for its entire lifetime. In that mode:

- It runs in the background continuously
- It never becomes visible

To configure an HTML extension as invisible:

- Use extension manifest version "5.0" or higher.
- In the manifest file, set the window type to 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- To keep the extension out of the Window->Extensions menu, omit the `<Menu>` tag.
- To start the extension from particular event types, list those events with the `<StartOn>` tag.

Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>



```

Support for Invisible HTML Extension is not universal across host applications. The table shows the details.

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes | Premiere Pro Yes |
| Prelude | Yes | Animate (Flash Pro) Yes |
| Audition | Yes | InDesign No Fails completely because InDesign does not support the 'Custom' window type. |
| InCopy | No | Fails completely because InCopy does not support the 'Custom' window type. |
| Illustrator | Yes |  |

### Customize CEF Command Line Parameters

CEPHtmlEngine accepts Chromium/CEF command line switches such as --enable-media-stream. For the complete external Chromium switch list, see [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP blocks certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This might replace the value from the .debug file, so CEP removes it to prevent conflicts. |
| --ignore-certificate-errors | This disables SSL certificate validation. Ignoring invalid server certificates is risky because extensions could load files from hostile sites. |

Every other parameter is forwarded to the underlying CEF layer. CEF itself determines whether a parameter is supported and how it behaves.

### Using CEF command line parameters

- Add `<CEFCommandLine><Parameter>--param1<Parameter/> ...
- When the parameter uses `key=value`, add
  `<CEFCommandLine><Parameter>--param1=value1<Parameter/> ...

Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                ...
```
