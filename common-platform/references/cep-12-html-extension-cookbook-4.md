# Cep 12 Html Extension Cookbook (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

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

A locale file uses multiple `<key>=<value>` lines. Add a newline after the final property key/value.

```
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

The JS interface `initResourceBundle` initializes localized resources. Call it while the extension loads. CEP fills the extension resource bundle with property values for the current application and UI locale. After initialization, users read localized strings from that resource-bundle object.

```
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```

### Sharing localization resources across multiple locales

CEP 6.0 introduced a way for several locales to share one set of localization resources (`messages.properties`).

For example, to make `es_MX` use the `messages.properties` from `es_ES`, place a file named `fallback.properties` in the `es_MX` folder as shown below.

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

Inside `fallback.properties`, specify the locale whose localized resources es_MX should use in this format:

```
fallback=es_ES
```

Side Notes:

- When `messages.properties` and `fallback.properties` both exist, `fallback.properties` takes precedence.
- If `fallback.properties` is malformed or names a fallback locale that does not exist, CEP uses the messages.properties file in that same directory.

### Localized menu

The manifest supports locale strings for menus. For example, ShareOnBehance's manifest uses `%UI_share_on_Behance`; the matching entry in `messages.properties` is `UI_share_on_Behance=xxx`.

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

`data-locale` is a custom HTML element attribute; attach it to each HTML element that should be localized.

In this example, the property file contains `key3.value=value3`. In the HTML file, the input widget has `data-locale` set to `key3`, so its value becomes `value3`.

In this example, the property file contains `key4.innerHTML=value4`. In the HTML file, the text area widget has `data-locale` set to `key4`, so its `innerHTML` becomes `value4`.

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

Use localized strings with parameters `($1, $2, ...)`.

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

MENA means "Middle East and North Africa". Arabic, Hebrew, and NA French languages need support.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

For an extension to load in host applications using MENA locales, add the MENA locales to the supported locale list in the extension manifest file. For example:

```
    ...
    ...
```

### Extension localization for MENA locales

Assume this directory layout for the extension:

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

When `CSInterface.initResourceBundle()` is called, CEP uses the app UI locale reported by PP, not the app locale, to load localized resources. If localized resources are missing for an app UI locale such as `fr_MA`, CEP falls back to `messages.properties` under the `locale` folder.

For app UI locale handling under the MENA feature, point products convert `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. Therefore, `en_AE` and `en_IL` point-product builds use `en_US` resources when available, and a `fr_MA` build uses `fr_FR` resources when available. Extension teams should provide `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.

### Video/Audio Playback

CEP 5.0 and later can play video and audio encoded in these formats.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files with H.264 video codec and AAC audio codec Ogg video/ogg Ogg files with Theora video codec and Vorbis audio codec |
| mp3 | audio/mpeg |  |

Example video playback in an extension:

```
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
    <source src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
</video>
```

Because HTML extensions are hosted inside the integrating application's windows, video cannot play in full-screen mode.

### WebRTC

[WebRTC](http://www.webrtc.org/) targets streaming audio and video capture scenarios, such as online video conferencing. It is disabled by default. To enable it, add the schema below to the manifest file; Customize CEF command parameters has more detail.

```

```

For WebRTC development, the CEP runtime follows the same usage model as Chrome. See the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.

### Scroll bar tips

On macOS, the OS hides panel scroll bars by design starting with Lion. You can make them always visible with these settings.

1.  Open the Apple menu at the top-left of the screen and choose System Preferences.

2.  Select the General preferences pane; it is the first one at the top.

3.  Under Show scroll bars, choose Always from Automatically based on input device, When scrolling, and Always.

### Invisible HTML Extensions

An HTML extension can stay invisible for its entire lifecycle. Its behavior is:

- Background execution continues.
- No UI is shown.

To configure invisibility for an HTML extension:

- Use extension manifest version "5.0" or higher.
- In the manifest file, set the window type to 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- To keep the extension out of the Window->Extensions menu, omit the `<Menu>` tag.
- To start the extension for particular event types, put those event names under the `<StartOn>` tag.

Example:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>



```

Not every host application supports Invisible HTML Extension; the table below gives details.

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes | Premiere Pro Yes |
| Prelude | Yes | Animate (Flash Pro) Yes |
| Audition | Yes | InDesign Yes However, as of 2019 you must include a width and height. |
| InCopy | Yes | However, as of 2019 you must include a width and height. |
| Illustrator | Yes |  |

### Customize CEF Command Line Parameters

Pass Chromium/CEF command-line parameters to CEPHtmlEngine, such as --enable-media-stream. Available Chromium command line [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP filters out some parameters for these reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every other parameter is passed to the underlying CEF. CEF decides whether each parameter is supported and how it behaves.

### Using CEF command line parameters

- For a bare parameter, add `<CEFCommandLine><Parameter>--param1<Parameter/> ...
- For a `key=value` parameter, use
  `<CEFCommandLine><Parameter>--param1=value1<Parameter/> ...

Here is an example:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                ...
```

### Commonly used CEF command parameters

| Parameters | Notes |
| --- | --- |
| --enable-media-stream | Enable media (WebRTC audio/video) streaming. |
| --enable-speech-input | Enable speech input (x-webkit-speech). |
| --persist-session-cookies | Persist session cookies. |
| --disable-image-loading | Disable loading of images from the network. A cached image will still be rendered if requested. |
| --disable-javascript-open-windows | Disable opening of windows via JavaScript. |
| --disable-javascript-close-windows | Disable closing of windows via JavaScript. |
| --disable-javascript-access-clipboard | Disable clipboard access via JavaScript. |
| --enable-caret-browsing | Enable caret browsing. |
| --proxy-auto-detect | This tells Chrome to try and automatically detect your proxy configuration. See more info at http://www.chromium.org/developers/design-documents/network-settings. |
| --user-agent | A string used to override the default user agent with a custom one. |
| --disable-application-cache | Disable the ApplicationCache. |
| --enable-nodejs | Enable Node.js APIs in extensions. Supported since CEP 6.1. |
| --disable-pinch | Disable compositor-accelerated touch-screen pinch gestures. |
| --mixed-context | Enable the "mixed context" mode. Supported since CEP 7.0. |

### HTML Extension Persistent

Persistence keeps an HTML extension from reloading when it is closed or hidden. Photoshop has supported persistence since version 14.2. This feature is product-specific and may be unavailable in some host applications.

InDesign and InCopy support the persistent feature beginning with version 13.1. Use these specific event names:
Indesign:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent
Incopy:
com.adobe.InCopyPersistent
com.adobe.InCopyUnPersistent

To make an HTML extension persistent in Photoshop:

- Upgrade Photoshop to version 14.2 or later.
- From the HTML extension, dispatch `com.adobe.PhotoshopPersistent` to Photoshop to request persistence.

Sample code:

```
var Persistent = function(inOn){
  if(inOn){
    var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");  //Photoshop
    //var event = new CSEvent("com.adobe.InDesignPersistent", "APPLICATION"); //Indesign
    //var event = new CSEvent("com.adobe.InCopyPersistent", "APPLICATION"); //Incopy
  } else {
    var event = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION"); //Photoshop
    //var event = new CSEvent("com.adobe.InDesignUnPersistent", "APPLICATION"); //Indesign
    //var event = new CSEvent("com.adobe.InCopyUnPersistent", "APPLICATION"); //Incopy
  }
  event.extensionId = <extension id as per manifest definition>;
  csInterface.dispatchEvent(event);
 }

Persistent(true); //persistent to prevent extension from unloading
â€¦
Persistent(false); //unpersistent
```

### Open URL link in default browser

From an HTML extension, open a URL in the default browser by calling `window.cep.util.openURLInDefaultBrowser(â€˜http://example.com')`:

```
<li><button onclick="window.cep.util.openURLInDefaultBrowser('http://www.adobe.com')">Open browser</button></li>
```

### Interaction between extension and point product during extension unload

When an extension is about to unload, the communication channel between the extension and the point product has already been torn down. As a result, the point product has no simple way to retrieve extension-related details such as extension status.

This behavior requires cooperation between the extension and the point product.

On the extension side, JavaScript provides `registerExtensionUnloadCallback` for registering a callback function. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/`CEP_9`.x/CEPEngine_extensions.js. Limitations include:

- If registerExtensionUnloadCallback is called more than once, CEP uses the most recent callback function that registered successfully.
- The callback function must be context-independent; CEP runs it from the mainframe context.

Example

```
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving that event, the point product can read the file written by the extension to get extension-related information.

Because execution in the extension and point product happens in parallel, the point product must handle ordering.

CEF 3's multi-process architecture prevents this method from working.

### Using Node.js APIs (CEP 6.0 and prior releases)

### Node.js Support

CEP 5.0 and later make Node.js APIs usable inside HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for:

- Cluster APIs are unsupported.
- Console APIs are unsupported on Windows.

Other things to note:

- CEP injects these symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - Buffer class from node
  - **process** - process class from node
  - **require** - function CEP exposes for loading node APIs
  - **module** - compatibility binding for node's special main-script module
- Conflicts with Web-Based Require Function
  - If the app uses libraries such as `RequireJS` that insert a require function into the DOM, consider renaming CEP's require function during migration.

```
<script type="text/javascript">windows.nodeRequire=window.require && window.require=undefined</script>
<script type="text/javascript" src="your/require/js/file.js"></script>
```

- Conflicts with Web-Based module Function
  - If the app uses `JQuery` and it tries to register itself as a `nodejs` plugin, add the script below inside a script tag so window.module is defined as undefined.

```
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security, CEP offers an option to disable Node.js APIs in iframe content. Put `nodejs-disabled="true"` on the iframe tag. Example tag:

```
<iframe id="xxx" class="xxxxx" nodejs-disabled="true">
```

- Forcing the environment implementation. When using `RequireJS`, the text plugin tries to detect the environment available for loading text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a library loaded by the `Node` or `Rhino` environment introduces an `XHR` implementation. To force the environment implementation, provide the plugin with this `"env"` module config:

```
requirejs.config({
   config: {
   text: {
      //Valid values are 'node', 'xhr', or 'rhino'
       env: 'rhino'
      }
   }
});
```

### Node.js Modules

### JavaScript Modules

All third-party node JavaScript modules are supported. Third-party modules use the directory containing the HTML file as their root search path. For example, a require call from `file:///your_extension/index.html` makes CEP look for modules under `file:///your_extension/node_modules`; this matches upstream node behavior.

### Native Modules

Node.js native modules are not directly supported because CEP uses a V8 version that differs from the official node version.

### Samples

### Use Environment Variables

    process.env.`ENV_VARIABLE` // `ENV_VARIABLE` is the name of the variable you want to access.

### Use Node.js to download files

- http://www.hacksparrow.com/using-node-js-to-download-files.html

### Using Node.js APIs (CEP 6.1)

### Node.js Support

CEP 6.1 upgraded its HTML engine to CEF 2272, based on Chromium 41.0.2272.104, with IO.js version 1.2.0 integrated.

Other things to note:

- Node.js APIs are **disabled by default**
  - For security, node.js APIs start disabled by default at both the extension level and the iFrame level; before CEP 6.1, they were enabled by default.

To enable Node.js APIs:

- Use `ExtensionManifest` and `RequiredRuntime` versions 5.0 or higher.
- Add `--enable-nodejs` to the extension manifest; Customize CEF Command Line Parameters has the details.
- For `Node.js` API use inside IFrames, put `enable-nodejs` on that IFrame and every ancestor IFrame. Missing it from any ancestor prevents `Node.js` APIs from working.

```
<iframe id="xxx" class="xxxxx" enable-nodejs>
```

- The old `nodejs-disabled` CEF command line parameter and iFrame property are no longer supported and are ignored by the new HTML engine.
- Node context and Browser context
  - Because `io.js` is integrated into CEF this way, JavaScript runs in two context types: browser context and `io.js` context. HTML-page globals belong to browser context, while `required` js files execute in `io.js` context. The two contexts do not read each other's data directly. Pass object references between them to share data:
    - Accessing objects in `io.js` context from browser context - In browser context, for example, `var backbone = require('backbone');` runs the backbone module, and the browser context receives that object.
    - Accessing objects in browser context from `io.js` context - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code access to browser-context objects. For example, an `io.js` module can reach a browser-context global named `localeStrings` with `window.localStrings`.

### Using Node.js APIs (since CEP 7.0)

Alongside the existing `Node.js` support in CEP 6.1, CEP 7.0 adds a new `mixed context` `Node.js` mode. In CEP 6.1 `separate context` mode, a `required` node module runs in a separate JavaScript context. In the newer `mixed context` mode, the `required` node module and the JavaScript code that `requires` it run in the same context, removing the inconveniences of the older `separate context` mode.

This mode starts disabled. Enable it by adding the command line parameter `--mixed-context` to the extension manifest.

```

```

### Using Node.js APIs (since CEP 10.0)

CEP 10 keeps the `Node.js` support already present in CEP 9 and adds the `disable-nodejs` attribute for iframe elements. Adding this attribute to an iframe turns off `Node.js` in both `separate context` and `mixed-context`.

```
    <iframe name="iframe-1">
    	\\ Node will be accesible here
    </iframe>
    <iframe name="iframe-2" disable-nodejs>
        \\ Node will not be accesible here
    </iframe>
```

### Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known restriction: it is designed to capture a single `stdout/stderr` output event.

For applications that do not include CEP 5 integration, use either of these two workarounds.

- Embed cep.process.stdout/stderr:

```
var getSTDOutput = function(){
  console.log("getSTDOutput");
  window.cep.process.stdout(pid, function(output){
  console.log(output);
  // your code is here
  });

  var result = window.cep.process.isRunning(pid);
  if (result.data === true){
    setTimeout(getSTDOutput, 1000);
  }
}
```

- Combine every stdout segment into one output string, as shown here.

```
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

The next sample reads curl download progress from stderr:

```
<script>
        var downloadPid = -1;
        function getStdErrOutput()
        {
            window.cep.process.stderr(downloadPid, function(progress) {
                                      var keys = progress.split(new RegExp('[# ]', 'g'));
                                      for(i=0; i<keys.length; i++){
                                        if (keys[i] != '') {
                                         console.log(keys[i]);
                                        }
                                      }
                                    });
            var result = window.cep.process.isRunning(downloadPid);
            if (result.data == true)
            {
                setTimeout(getStdErrOutput, 100);
            }
        }
        var doDownload = function() {
            var qURL = 'http://code.jquery.com/jquery-1.11.0.min.js';
            var dest = '/tmp/test.js';
            console.log("ext download (curl) " + qURL + " " + dest);
            var result = window.cep.process.createProcess('/usr/bin/curl', qURL, '-#', '-o', dest);
            downloadPid = result.data;
            console.log("download pid is " + downloadPid);
            getStdErrOutput();
        };

        doDownload();
</script>
```

Beginning with CEP 5, the CEP runtime includes Node.js, so extensions for applications with CEP 5 integration can call standard `Node.js` APIs directly. For the global process object in `Node.js`, see http://nodejs.org/api/process.html.

### Adobe Exchange

The sample extension is located at https://github.com/Adobe-CEP/Samples/tree/master/ExchangeExample.

## Other JavaScript Information

### Load Multiple JSX files

JSX files usually declare functions and objects meant to run inside the host application's ExtendScript environment.

An HTML extension can cause JSX files to load into the host application's ExtendScript environment in two ways.

- Add a `<ScriptPath>` node in `manifest.xml`; its value should be the
  relative path to the JSX file. For example:

```
Extension Id="com.adobe.CEPHTMLTEST.Panel1">
		...........................
```

- An HTML extension can call the CEP JavaScript API `evalScript` with `$.evalFile(jsxFile)` to load JSX files in the host application's ExtendScript environment. Before calling `evalScript`, developers may need additional script logic to calculate the path stored in `jsxFile`. One option is to read `$.fileName`; its value should point to the currently executing `JSX` file. Example:

```
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

If `$.fileName` is read from the FIRST LOADED JSX file, it returns an incorrect value. In other words, running the preceding snippet inside `example.jsx` when that file is referenced from `manifest.xml` triggers the error. PLEASE AVOID using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. A practical workaround is to use it only from the second loaded JSX file or later files. For example:

```
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
CSInterface.evalScript('$.evalFile(anotherJSXFile)', callback);

// Or in the first loaded jsx file, load another jsx file, and the value of "$.fileName" is correct in this file.
// Given the code is running this example.jsx which is referred in the manifest.xml.
// In the stage of "hardCodeJSXFile", the value of "$.fileName" is correct too.
$.evalFile(hardCodeJSXFile);
```

Note: the scripts in this section execute in the host application's ExtendScript context, so `$` here is not the jquery global variable `$`.
