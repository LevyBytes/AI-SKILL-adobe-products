# Cep 8.0 Html Extension Cookbook (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

### Commonly used CEF command parameters

| Parameters | Notes |
| --- | --- |
| --enable-media-stream | Turns on media streaming for WebRTC audio/video. |
| --enable-speech-input | Turns on speech input through x-webkit-speech. |
| --persist-session-cookies | Keeps session cookies after they are created. |
| --disable-image-loading | Stops network image loading. Requested images can still render when already cached. |
| --disable-javascript-open-windows | Prevents JavaScript from opening windows. |
| --disable-javascript-close-windows | Prevents JavaScript from closing windows. |
| --disable-javascript-access-clipboard | Blocks JavaScript clipboard access. |
| --enable-caret-browsing | Turns on caret browsing. |
| --proxy-auto-detect | Asks Chrome to detect proxy configuration automatically. See more info at http://www.chromium.org/developers/design-documents/network-settings. |
| --user-agent | Provides a custom string that replaces the default user agent. |
| --disable-application-cache | Turns off the ApplicationCache. |
| --enable-nodejs | Makes Node.js APIs available inside extensions. Supported since CEP 6.1. |
| --disable-pinch | Turns off compositor-accelerated pinch gestures on touch screens. |
| --mixed-conext | Turns on "mixed context" mode. Supported since CEP 7.0. |

### HTML Extension Persistent

Persistent mode keeps an HTML extension from being reloaded after it is closed or hidden. Photoshop has offered persistence since version 14.2. This capability is product-specific, so some host applications may not provide it.

InDesign and InCopy provide persistence starting with version 13.1. Use these event names:
Indesign and Incopy:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent

Photoshop persistence setup:

- Use Photoshop version 14.2 or later
- From the HTML extension, dispatch `com.adobe.PhotoshopPersistent` to Photoshop to request persistence

Sample code:

```js
var Persistent = function(inOn){
  if(inOn){
    var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION"); //Photoshop
    //var event = new CSEvent("com.adobe.InDesignPersistent", "APPLICATION"); //Indesign or Incopy
  } else {
    var event = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION"); //Photoshop
    //var event = new CSEvent("com.adobe.InDesignUnPersistent", "APPLICATION"); //Indesign or Incopy
  }
  event.extensionId = <extension id as per manifest definition>;
  csInterface.dispatchEvent(event);
 }

Persistent(true); //persistent to prevent extension from unloading
â€¦
Persistent(false); //unpersistent
```

### Open URL link in default browser

Inside an HTML extension, call `window.cep.util.openURLInDefaultBrowser(â€˜http://example.com')` to open a URL with the system default browser:

```js
<li>
  <button onclick="window.cep.util.openURLInDefaultBrowser('http://www.adobe.com')">
    Open browser
  </button>
</li>
```

### Interaction between extension and point product during extension unload

When an extension begins unloading, the connection between the extension and the point product is already gone. Because of that, the point product has no straightforward channel for reading extension information such as current status.

Supporting this workflow requires cooperation from both the extension and the point product.

On the extension side, JavaScript provides `registerExtensionUnloadCallback` for registering the callback. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/`CEP_8`.x/CEPEngine_extensions.js. These limits apply:

- Calling registerExtensionUnloadCallback repeatedly means the most recent successfully registered callback is the one used.
- The callback must not depend on context, and it runs in the mainframe context.

Example

```js
window.cep.util.registerExtensionUnloadCallback(function () {
  window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving the event, the point product can inspect the file written by the extension to obtain extension-related information.

Because extension execution and point-product execution proceed in parallel, the point product must manage ordering.

This approach fails under the CEF 3 multi-process architecture.

### Node.js API usage (CEP 6.0 and prior releases)

### Node.js Support

A major CEP 5.0 addition is the ability for HTML extensions to use Node.js APIs. Most built-in APIs from Node.js version 0.8.22 are exposed to HTML extensions, except for these items:

- Cluster APIs are not supported.
- Console APIs are not supported on Windows.

Additional notes:

- CEP injects these symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - the Buffer class from node
  - **process** - the process class from node
  - **require** - the magic function used to access node APIs
  - **module** - compatibility support for node's special main-script module
- Conflicts with Web-Based Require Function
  - When an app uses a library such as `RequireJS` that adds a require function to the DOM, consider renaming CEP's require function before migration.

```js
<script type="text/javascript">windows.nodeRequire=window.require && window.require=undefined</script>
<script type="text/javascript" src="your/require/js/file.js"></script>
```

- Conflicts with Web-Based module Function
  - If your app uses `JQuery` and it attempts to register as a `nodejs` plugin, put the script below inside a script tag so window.module resolves to undefined.

```js
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security reasons, CEP includes an option for disabling Node.js APIs inside an iframe. Add the `nodejs-disabled="true"` attribute to the iframe tag, as shown here:

```js
<iframe id="xxx" class="xxxxx" nodejs-disabled="true">
```

- Forcing the environment implementation. With `RequireJS`, the text plugin may inspect which environment can load text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes the `Node` or `Rhino` environment has already loaded a library that supplies an `XHR` implementation. To choose the implementation explicitly, pass an `"env"` module config to the plugin:

```js
requirejs.config({
  config: {
    text: {
      //Valid values are 'node', 'xhr', or 'rhino'
      env: "rhino",
    },
  },
});
```

### Node.js Modules

### JavaScript Modules

CEP supports third-party node JavaScript modules. The directory containing the HTML file becomes the root lookup path for third-party modules. For example, a require call from `file:///your_extension/index.html` causes CEP to search under `file:///your_extension/node_modules`, matching the upstream node rule.

### Native Modules

CEP cannot directly load Node.js native modules because its V8 version differs from the standard node runtime.

### Samples

### Use Environment Variables

    process.env.`ENV_VARIABLE` // `ENV_VARIABLE` is the name of the variable you want to access.

### Use Node.js to download files

- http://www.hacksparrow.com/using-node-js-to-download-files.html

### Using Node.js APIs (CEP 6.1)

### Node.js Support

CEP 6.1 updates the HTML engine to CEF 2272, based on Chromium 41.0.2272.104, and integrates IO.js version 1.2.0.

Additional notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs are off by default at both the extension level and the iFrame level. In CEP versions before 6.1, they were enabled by default.

To enable Node.js APIs:

- Use version 5.0 or higher for both `ExtensionManifest` and `RequiredRuntime`.
- Put `--enable-nodejs` in the extension manifest. See Customize CEF Command Line Parameters for details.
- For `Node.js` APIs inside IFrames, add `enable-nodejs` on that IFrame and each ancestor iFrame. If one ancestor omits the property, `Node.js` APIs will not operate.

```xml
<iframe id="xxx" class="xxxxx" enable-nodejs>
```

- The previous `nodejs-disabled` CEF command line parameter and iFrame property are ignored by the newer HTML engine and are no longer supported.
- Node context and Browser context
  - Integrating `io.js` into CEF created two JavaScript context types: browser and `io.js`. Global objects made in HTML pages belong to the browser context, while `required` js files run in the `io.js` context. The contexts cannot directly read each other's data. Share data by passing object references between them: - From browser context into `io.js` context - For example,
    in browser context, `var backbone = require('backbone');` runs the backbone module code and passes the resulting object back into browser context. - From `io.js` context into browser context - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code a route to browser-context objects. For example, to read a browser-context global object named `localeStrings` from an `io.js` module, use `window.localStrings` in that `io.js` module.

### Using Node.js APIs (CEP 7.0)

Beyond the `Node.js` support that exists in CEP 6.1, CEP 7.0 adds a new `mixed context` `Node.js` mode. In CEP 6.1 `separate context` mode, a `required` node module runs in a separate JavaScript context. In CEP 7.0 `mixed context` mode, the `required` node module and the JavaScript code that `requires` it share one context, removing the problems caused by the older `separate context` model.

The mode is off by default. Add `--mixed-context` to the extension manifest command line parameters to enable it.

```xml

```

### Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known restriction: it is designed to capture a single occurrence of `stdout/stderr` output.

For applications without CEP 5 integration, the following two workarounds are suggested.

- Embed cep.process.stdout/stderr:

```js
var getSTDOutput = function () {
  console.log("getSTDOutput");
  window.cep.process.stdout(pid, function (output) {
    console.log(output);
    // your code is here
  });

  var result = window.cep.process.isRunning(pid);
  if (result.data === true) {
    setTimeout(getSTDOutput, 1000);
  }
};
```

- Combine all stdout output into one value, as shown below

```js
var str1 = "abcdef";
var str2 = "12345";
var str3 = "gghhtt";
console.log(str1 + str2 + str3);
```

This example retrieves curl download progress from stderr:

```xml
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

Starting with CEP 5, Node.js is part of the CEP runtime, so users can call standard `Node.js` APIs directly from the extension. For applications that include CEP 5 integration, see http://nodejs.org/api/process.html for use of the global process object in `Node.js`.

### Adobe Exchange

The sample extension is located at https://github.com/Adobe-CEP/Samples/tree/master/ExchangeExample.

## Other JavaScript Information

### Load Multiple JSX files

JSX files usually define functions and objects that are meant to execute inside the host application's ExtendScript environment.

An HTML extension can cause JSX files to load into the host application's ExtendScript environment in two ways.

- Define a `<ScriptPath>` node in `manifest.xml`; set that node's value to the relative path of the JSX file. Example:

```xml
Extension Id="com.adobe.CEPHTMLTEST.Panel1">
		...........................
```

- The HTML extension can call the CEP JavaScript API `evalScript` with `$.evalFile(jsxFile)` to make JSX files load into the host application's ExtendScript environment. Developers may need extra script code before the `evalScript` call to determine the `jsxFile` path. For example, `$.fileName` can be used to locate the path, and `$.fileName` should contain the currently executing `JSX` file path. Example:

```js
var extensionPath = $.fileName.split("/").slice(0, -1).join("/") + "/"; // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + "example1.jsx");
$.evalFile(extensionPath + "example2.jsx");
$.evalFile(extensionPath + "example3.jsx");
```

When `$.fileName` is referenced from the FIRST LOADED JSX file, however, the value is wrong. In other words, running the snippet above inside `example.jsx` when that file is referenced by `manifest.xml` produces an error. For that reason, AVOID using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. The workaround is to reference it in the second and later loaded JSX files. Example:

```js
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
CSInterface.evalScript("$.evalFile(anotherJSXFile)", callback);

// Or in the first loaded jsx file, load another jsx file, and the value of "$.fileName" is correct in this file.
// Given the code is running this example.jsx which is referred in the manifest.xml.
// In the stage of "hardCodeJSXFile", the value of "$.fileName" is correct too.
$.evalFile(hardCodeJSXFile);
```

Note: In this section, the script is intended for the host application's ExtendScript environment, so `$` here is not the same as the jquery global variable `$`.

Use "namespace" when adding a new variable, function, or object in Global Space or on the `$` object. If multiple JSX files reuse the same name, the last loaded file supplies the active definition and replaces earlier ones. For example, suppose `$.ext` appears in a.jsx, b.jsx and c.jsx; a.jsx makes `$.ext` a function, b.jsx makes `$.ext` an object, and c.jsx makes `$.ext` a string. With load order a.jsx->b.jsx->c.jsx, the final `$.ext` value is the string from c.jsx, not the object or function from the earlier files. The behavior also spans multiple extensions in one point product. If a.jsx, b.jsx and c.jsx belong separately to extension a,b,c and the load order is extension a-> extension b-> extension c, `$.ext` still ends as the string value instead of the earlier function or object.

### Drag and Drop

### Use Drag and Drop

CEP 5.2 supports HTML 5 Drag and Drop in four forms.

1.  Drag and drop within a single HTML extension.

2.  Drag and drop from one HTML extension to another

3.  Drag and drop between an HTML extension and the host application.

4.  Drag and drop between an HTML extension and the operating system (e.g. Desktop or Browser).

For HTML 5 Drag and Drop concepts and JavaScript usage, see http://www.w3.org/TR/html5/editing.html#dnd.

Demos:

- http://www.w3schools.com/html/html5_draganddrop.asp
- http://html5demos.com/

### Disable Drag and Drop

Extension developers can use JavaScript to turn off the default DnD behavior.

Method 1

```xml
<body ondragover="return false" ondrop="return false">
```

Method 2 (using jQuery)

```jquery
$(document.body).on('dragover drop', function(e) {
  e.preventDefault();
});
```

For more information, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter

### External JavaScript Libraries

CEP HTML Engine does not add special limits for extension JavaScript libraries. A library that works in CEF Client or Chrome browser should work in CEP HTML Engine too.

JavaScript libraries used successfully include:

- JQuery - http://jquery.com/
  - See the Node.js section for symbol-conflict handling.
- RequireJS - http://requirejs.org/
  - See the Node.js section for symbol-conflict handling.
- spin.js - http://fgnass.github.com/spin.js/
- Modernizr - http://modernizr.com/
  - Modernizr checks whether the user's browser supports particular HTML5 and CSS3 capabilities.

### NPAPI plug-ins

NPAPI plug-in support was removed starting with CEP 4.2. It still exists in CEP 4.0 and 4.1, but because products are moving to CEP 4.2, developers should avoid relying on it.

Do not embed Java Applet in an extension, because Java Applet depends on NPAPI plug-in.

### Increase/Decrease font size in HTML Panel

Several JavaScript approaches can increase or decrease font size in an HTML panel, either with plain JavaScript or with JQuery. The two snippets below show both approaches. One uses plain JavaScript; the other uses JQuery.

- Plain JavaScript - Change page font size with `document.body.style.fontSize`.

```xml
<script type="text/javascript" language="javascript">
    window.onload = function() {
        var fontchange = document.createElement("div");
        var fontchangelink = function(fontsize, desc) {
            var a = document.createElement('a');
            a.href="#";
            a.style.margin = "5px";
            a.onclick = function() {
                document.body.style.fontSize = fontsize + 'pt';
            };
            a.innerHTML = desc;
            return a;
        };

        fontchange.appendChild(document.createTextNode("Change font size:"));
        fontchange.appendChild(fontchangelink(9, "1"));
        fontchange.appendChild(fontchangelink(11, "2"));
        fontchange.appendChild(fontchangelink(13, "3"));

       document.body.insertBefore(fontchange, document.body.childNodes[0]);
    };
</script>
```

- JQuery - Use `$('html').css('font-size', size)` to change font size in page.

```xml
<script type="text/javascript" language="javascript">
        $(document).ready(function(){
              // Reset Font Size
              var originalFontSize = $('html').css('font-size');
              $(".resetFont").click(function(){
                $('html').css('font-size', originalFontSize);
              });

              // Increase Font Size
              $(".increaseFont").click(function(){
                 var currentFontSize = $('html').css('font-size');
                 var currentFontSizeNum = parseFloat(currentFontSize, 10);
                 var newFontSize = currentFontSizeNum*1.2;
                 $('html').css('font-size', newFontSize);
                 return false;
              });

              // Decrease Font Size
              $(".decreaseFont").click(function(){
                 var currentFontSize = $('html').css('font-size');
                 var currentFontSizeNum = parseFloat(currentFontSize, 10);
                 var newFontSize = currentFontSizeNum*0.8;
                 $('html').css('font-size', newFontSize);
                 return false;
              });
         });
</script>
```

These are common JavaScript solutions for increasing or decreasing fonts.

### JavaScript Tips

### Check Internet Connection

```js
if (navigator.onLine === true) {
  //system is online
} else {
  //system is offline
}
```

### Set Mouse Cursor

See http://jsfiddle.net/BfLAh/1390/

```js
$(document).mousemove(function (e) {
  $("#image").css({ left: e.pageX, top: e.pageY });
});
```

### iframe

Many HTTPS sites cannot be hosted in an iframe when the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header blocks framing. A practical alternative for HTTPS content is navigation through `window.location.href`, for example:

**iFrame alternative for HTTPS content**

```html
// html
<body onLoad="onLoaded()"></body>

// javascript function onLoaded() { window.location.href = "https://www.trello.com"; }
```

### Tooltip

CEP 5.2 can use the HTML title attribute to show tooltips on Windows. Mac does not support that path because of off-screen rendering. Use JavaScript as the alternative; http://www.a2zwebhelp.com/bootstrap-tooltips has examples.

## CEPHtmlEngine

### Multi-process Architecture

CEP and the underlying Chromium both use a multi-process architecture. A CEP extension runs in a separate CEP HTML Engine that may be split into a main/browser process, a renderer process, and a GPU process. On Max OSX, `CEPHtmlEngine` names the main process, while the other two processes are named `CEPHtmlEngine Helper`. On Windows, all three processes use the name `CEPHtmlEngine.exe`. Well-implemented extensions should not suffer performance problems simply because multiple processes exist.

To identify which extension owns a CEP HTML Engine process, inspect that process's command line parameters. On Mac OSX, check the command line from a terminal with `ps -ef | grep CEPHtmlEngine`. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection. The browser process omits `--type`; renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.

### Ports opened in CEPHtmlEngine

Monitoring a `CEPHtmlEngine` process with [TCPView](https://technet.microsoft.com/en-us/sysinternals/tcpview.aspx) may show open localhost ports. Most of these ports are opened internally by Chromium code for `websocket`, started by the HTML extension rather than by `CEPHtmlEngine` itself. To inspect details, capture traffic to a \*.pcap file with [RawCap](http://www.netresec.com/?page=RawCap), then open it in [Wireshark](https://www.wireshark.org/).

### CEF/Chromium Issues

- [HTML `<datalist>` tag is not supported](https://bitbucket.org/chromiumembedded/cef/issues/906)
- [HTML5 input type color is not supported](https://bitbucket.org/chromiumembedded/cef/issues/899)

## Miscellaneous

Developers can ask questions and file bugs or feature requests through these forums and github repositories:

- https://forums.adobe.com/community/creativesuites/extensionbuilder
- https://github.com/Adobe-CEP/CEP-Resources/issues
- https://github.com/Adobe-CEP/Samples/issues
- https://www.adobeprerelease.com

### Contribution

To contribute to extension development, raise your PR at https://github.com/Adobe-CEP
