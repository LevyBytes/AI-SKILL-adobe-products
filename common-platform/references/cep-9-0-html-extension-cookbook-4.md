# Cep 9.0 Html Extension Cookbook (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

Keep in mind that Invisible HTML Extension support is not available in every host application. The table gives the product details:

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes | Premiere Pro Yes |
| Prelude | Yes | After Effects Yes |
| Animate (Flash Pro) | Yes | Audition Yes |
| InDesign | Yes | However, as of 2019 you must include a width and height. |
| InCopy | Yes | However, as of 2019 you must include a width and height. |
| Illustrator | Yes |  |

### Customize CEF Command Line Parameters

CEPHtmlEngine accepts Chromium/CEF command-line parameters such as `--enable-media-stream`. The Chromium switch list is available at [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP removes certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every remaining parameter is forwarded to the underlying CEF layer. CEF then determines whether each parameter is supported and how it behaves.

### How to use CEF command line parameters

- Add `<CEFCommandLine><Parameter>--param1<Parameter/> ...
- For a `key=value` parameter, add
  `<CEFCommandLine><Parameter>--param1=value1<Parameter/> ...

Example:

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
| --mixed-conext | Enable the "mixed context" mode. Supported since CEP 7.0. |

### HTML Extension Persistent

Persistence keeps an HTML extension from reloading when it is closed or hidden. Photoshop has supported persistence since version 14.2. This capability is product-specific and may be missing in some host applications.

InDesign and InCopy gained persistence support in version 13.1. Use these event names:
Indesign:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent
Incopy:
com.adobe.InCopyPersistent
com.adobe.InCopyUnPersistent

To make an HTML extension persistent in Photoshop:

- Upgrade Photoshop version to 14.2 or later
- From the HTML extension, dispatch `com.adobe.PhotoshopPersistent` to Photoshop to request persistence

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

An HTML extension can open a URL in the default browser by calling `window.cep.util.openURLInDefaultBrowser(â€˜http://example.com')`:

```
<li><button onclick="window.cep.util.openURLInDefaultBrowser('http://www.adobe.com')">Open browser</button></li>
```

### Interaction between extension and point product during extension unload

When unloading begins, the extension-to-point-product communication channel has already been torn down. For that reason, the point product has no simple way to retrieve extension-related details such as extension status.

Supporting this behavior requires cooperation between the extension and the point product.

On the extension side, the JavaScript function `registerExtensionUnloadCallback` registers the callback. Its definition is available at https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/`CEP_9`.x/CEPEngine_extensions.js. These limitations apply:

- Calling registerExtensionUnloadCallback more than once means the last callback that registers successfully is the one CEP uses.
- The callback function must be context-independent, because it runs in the mainframe context.

Example

```
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point-product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving that event, the point product can read the file written by the extension to obtain extension-related information.

The extension and point product run at the same time, so ordering has to be handled by the point product.

CEF 3's multi-process architecture prevents the method above from working.

### Node.js APIs in CEP 6.0 and earlier

### Node.js availability

Among CEP 5.0 and later capabilities, a major one is using Node.js APIs inside HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for these cases:

- Cluster APIs are not supported.
- Console APIs are not supported on Windows.

Additional notes:

- CEP adds these symbols to the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - the Buffer class from node
  - **process** - the process class from node
  - **require** - the special function used to access node API support
  - **module** - compatibility support for node's special main-script module
- Conflicts with Web-Based Require Function
  - Before migration, rename CEP's require function when an app uses libraries such as `RequireJS` that insert a require function into the DOM.

```
<script type="text/javascript">windows.nodeRequire=window.require && window.require=undefined</script>
<script type="text/javascript" src="your/require/js/file.js"></script>
```

- Conflicts with Web-Based module Function
  - When an app uses `JQuery` that tries to register itself as a `nodejs` plugin, use this snippet so `window.module` becomes undefined.

```
<script type="text/javascript">window.module = undefined</script>
```

- Turn off Node.js APIs inside iframe
  - CEP can turn off Node.js APIs for an iframe as a security measure. Use this iframe-tag pattern with `nodejs-disabled="true"`:

```
<iframe id="xxx" class="xxxxx" nodejs-disabled="true">
```

- Forcing the environment implementation. With `RequireJS`, the text plugin attempts to detect the available environment for loading text resources, choosing among `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a loaded `Node` or `Rhino` library introduces an `XHR` implementation. You can force the plugin's environment by passing an `"env"` module config:

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

Third-party node JavaScript modules are all supported. CEP searches for those modules from the directory containing the HTML file. For example, a require call in `file:///your_extension/index.html` makes CEP look under `file:///your_extension/node_modules`, matching upstream node's rule.

### Native Modules

CEP does not directly support Node.js native modules because its V8 version differs from the official node build.

### Samples

### Environment variable access

    process.env.`ENV_VARIABLE` // `ENV_VARIABLE` is the name of the variable you want to access.

### Use Node.js to download files

- http://www.hacksparrow.com/using-node-js-to-download-files.html

### Using Node.js APIs (CEP 6.1)

### Node.js Support

In CEP 6.1, the HTML engine moved to CEF 2272. That runtime is based on Chromium 41.0.2272.104 and integrates IO.js version 1.2.0.

Additional notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs are off by default at both the extension level and the iFrame level. In CEP versions before 6.1, they were enabled by default.

To enable Node.js APIs:

- Use version 5.0 or higher for both `ExtensionManifest` and `RequiredRuntime`.
- Add `--enable-nodejs` to the extension manifest. For details, see Customize CEF Command Line Parameters.
- For `Node.js` APIs inside IFrames, add the `enable-nodejs` property to the target IFrame and every ancestor IFrame. If one ancestor lacks the property, `Node.js` APIs will not work.

```
<iframe id="xxx" class="xxxxx" enable-nodejs>
```

- The new HTML engine ignores the old `nodejs-disabled` CEF command line parameter and iFrame property; they are no longer supported.
- Node context and Browser context
  - Integrating `io.js` into CEF created two JavaScript context types: one for the browser and one for `io.js`. Global objects created in HTML pages live in browser context, while required JS files execute in `io.js` context. The two contexts cannot directly access each other's data. To share information, pass object references between them:
    - Accessing objects in `io.js` context from browser context - In browser context, for example, `var backbone = require('backbone');` runs the backbone module code and passes the resulting object back into browser context.
    - Accessing objects in browser context from `io.js` context - CEP injects the browser context's `window` global object into `io.js` context, giving `io.js` code a route to browser-context objects. For example, an `io.js` module can access a browser-context global named `localeStrings` through `window.localStrings`.

### Using Node.js APIs (since CEP 7.0)

Alongside the existing `Node.js` support from CEP 6.1, CEP 7.0 added a `mixed context` `Node.js` mode. In CEP 6.1 `separate context` mode, a required node module runs in a separate JavaScript context. In the newer `mixed context` mode, the required node module and the JavaScript code that requires it share one context, removing the difficulties caused by the older `separate context` mode.

This mode starts disabled. Enable it by adding `--mixed-context` to the extension manifest command-line parameters.

```

```

### Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known limitation: it is designed to capture a single instance of `stdout/stderr` output.

For applications that have not integrated CEP 5, these two workarounds are suggested.

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

- Concatenate all stdout output into one value, as shown below:

```
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

Example for retrieving curl download progress through stderr:

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

CEP 5 integrates Node.js into the CEP runtime, so extensions can call standard `Node.js` APIs directly. For applications with CEP 5 integrated, guidance for the global `process` object in `Node.js` is at http://nodejs.org/api/process.html.

### Adobe Exchange

Adobe Exchange sample: https://github.com/Adobe-CEP/Samples/tree/master/ExchangeExample.

## Additional JavaScript Information

### Load Multiple JSX files

JSX files usually define functions and objects that are meant to run inside the host application's ExtendScript environment.

An HTML extension can trigger JSX files to load in the host application's ExtendScript through either of these approaches:

- In `manifest.xml`, define a `<ScriptPath>` node whose value is the JSX file's relative path. For example:

```
Extension Id="com.adobe.CEPHTMLTEST.Panel1">
		...........................
```

- The HTML extension calls the CEP JavaScript API `evalScript` with the script `$.evalFile(jsxFile)` to make the host application's ExtendScript load JSX files. Developers may need additional script code to determine the `jsxFile` path before calling `evalScript`. For example, they may use `$.fileName` to identify the path; `$.fileName` should hold the path of the currently executed `JSX` file. Example:

```
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

If `$.fileName` is referenced in the FIRST LOADED JSX file, however, its value is not correct. In other words, running the snippet above inside `example.jsx`, when that file is referenced from `manifest.xml`, causes an error. Avoid using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. The workaround is to reference it from the second and subsequent loaded JSX files. For example:

```
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
CSInterface.evalScript('$.evalFile(anotherJSXFile)', callback);

// Or in the first loaded jsx file, load another jsx file, and the value of "$.fileName" is correct in this file.
// Given the code is running this example.jsx which is referred in the manifest.xml.
// In the stage of "hardCodeJSXFile", the value of "$.fileName" is correct too.
$.evalFile(hardCodeJSXFile);
```

Note: The script in this section is intended for execution in the host application's ExtendScript environment, so `$` here is not the jQuery global variable `$`.

Use a "namespace" when developers define a new variable, function, or object in Global Space or on the `$` object. If multiple JSX files define the same name, whichever file loads last supplies the active definition and replaces earlier ones. For example, if a.jsx, b.jsx, and c.jsx all define `$.ext`, with a.jsx making it a function, b.jsx making it an object, and c.jsx making it a string, and the load order is a.jsx->b.jsx->c.jsx, then `$.ext` ends as a string, not as an object or function. The same rule crosses extension boundaries inside one point product. If a.jsx, b.jsx, and c.jsx belong separately to extensions a, b, and c, and the extension load order is extension a-> extension b-> extension c, `$.ext` still ends as a string rather than a function or object.

### Drag and Drop

### Drag and Drop usage

CEP 5.2 supports HTML 5 Drag and Drop in four forms.

1.  Drag and drop within one HTML extension.

2.  Drag and drop across two HTML extensions

3.  Drag and drop between an HTML extension and its host application.

4.  Drag and drop between an HTML extension and the operating system (e.g. Desktop or Browser).

For HTML 5 Drag and Drop background and JavaScript usage, see http://www.w3.org/TR/html5/editing.html#dnd.

Demo links:

- http://www.w3schools.com/html/html5_draganddrop.asp
- http://html5demos.com/

### Turning off Drag and Drop

Extension developers can turn off the default DnD behavior with JavaScript.

Method 1

```
<body ondragover="return false" ondrop="return false">
```

Method 2 (using jQuery)

```
$(document.body).on('dragover drop', function(e) {
  e.preventDefault();
});
```

For details, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter

### JavaScript library compatibility

The CEP HTML Engine does not block extension JavaScript libraries. If a library works in CEF Client or Chrome, it should also work in CEP HTML Engine.

These JavaScript libraries have been used successfully:

- JQuery - http://jquery.com/
  - See the Node.js section for symbol-conflict handling.
- RequireJS - http://requirejs.org/
  - See the Node.js section for symbol-conflict handling.
- spin.js - http://fgnass.github.com/spin.js/
- Modernizr - http://modernizr.com/
  - Modernizr detects HTML5 and CSS3 feature support in the user's browser.

### NPAPI plug-ins

Support for NPAPI plug-ins was removed starting in CEP 4.2. CEP 4.0 and 4.1 still support them, but because products are moving to CEP 4.2, developers are advised not to use NPAPI plug-ins.

Do not embed Java Applet in an extension, because Java Applet depends on NPAPI plug-in.

### Increase/Decrease font size in HTML Panel
