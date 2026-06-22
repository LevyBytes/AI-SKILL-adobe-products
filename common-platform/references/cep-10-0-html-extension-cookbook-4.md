# Cep 10.0 Html Extension Cookbook (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

[WebRTC](http://www.webrtc.org/) targets streaming audio, video capture, and uses such as online video conferencing. It is disabled by default; enabling it requires adding the schema below to the manifest file. For details, see Customize CEF command parameters.

```

```

For WebRTC development, the CEP runtime follows the same usage model as Chrome. See the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.

### Scroll bar tips

On macOS, the OS hides panel scroll bars by design beginning with Lion. To keep them visible, change the settings as follows.

1.  Open the Apple menu at the top-left of the screen, then choose System Preferences.

2.  Select the General preferences pane, which appears first at the top.

3.  In the "Show scroll bars" section, choose from "Automatically based on input device," "When scrolling," and "Always." Choose "Always."

### Invisible HTML Extensions

An HTML extension can stay invisible from startup through shutdown. In that mode:

- It runs continuously in the background
- It never appears onscreen

For an invisible HTML extension:

- Use extension manifest version "5.0" or higher.
- In the manifest file, specify the window type as 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- To keep the extension out of the Window->Extensions menu, omit the `<Menu>` tag.
- To start the extension on particular event types, list those events with `<StartOn>`.

Example manifest fragment:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>



```

Not every host application supports Invisible HTML Extension; the table below gives the details.

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes | Premiere Pro Yes |
| Prelude | Yes | Animate (Flash Pro) Yes |
| Audition | Yes | InDesign Yes However, as of 2019 you must include a width and height. |
| InCopy | Yes | However, as of 2019 you must include a width and height. |
| Illustrator | Yes |  |

### Customize CEF Command Line Parameters

Pass Chromium/CEF command line parameters, such as --enable-media-stream, to CEPHtmlEngine. The Chromium command-line switch list is available at [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP filters out certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every other parameter is passed to the underlying CEF layer. CEF determines whether a parameter is supported and how it behaves.

### How to use CEF command line parameters

- Add a parameter in the form `<CEFCommandLine><Parameter>--param1<Parameter/> ...
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

Persistence prevents an HTML extension from reloading when it is closed or hidden. Photoshop has supported persistence since version 14.2. This feature is product-specific and may be absent in some host applications.

InDesign and InCopy support the perisitent feature starting with version 13.1. Use these event names:
Indesign:
com.adobe.InDesignPersistent
com.adobe.InDesignUnPersistent
Incopy:
com.adobe.InCopyPersistent
com.adobe.InCopyUnPersistent

To make an HTML extension persistent in Photoshop:

- Use Photoshop version 14.2 or later
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

From an HTML extension, open a URL in the default browser by calling `window.cep.util.openURLInDefaultBrowser(â€˜http://example.com')`:

```
<li><button onclick="window.cep.util.openURLInDefaultBrowser('http://www.adobe.com')">Open browser</button></li>
```

### Interaction between extension and point product during extension unload

As an extension unloads, the communication channel between it and the point product has already been torn down, so the point product has no straightforward way to read extension-related details such as status.

This scenario requires cooperation between the extension and the point product.

On the extension side, use the JavaScript function `registerExtensionUnloadCallback` to register a callback function. Definition reference: https://github.com/Adobe-CEP/CEP-Resources/blob/CEP8/`CEP_9`.x/CEPEngine_extensions.js. These limits apply:

- If registerExtensionUnloadCallback is called more than once, CEP uses the last callback function that registers successfully.
- The callback must be context-independent and execute in the mainframe context.

Sample

```
window.cep.util.registerExtensionUnloadCallback(function(){
window.cep.fs.writeFile("D:\\1.txt", "Hello");
});
```

On the point product side, `csxs::event::EVENT_TYPE_CSXS_EXTENSION_UNLOADED ("com.adobe.csxs.events.ExtensionUnloaded")` is dispatched. After receiving the event, the point product can read the file written by the extension to obtain extension-related information.

Because the extension and point product execute in parallel, the point product must manage ordering.

Because CEF 3 uses a multi-process architecture, the method above does not work.

### Using Node.js APIs for CEP 6.0 and prior releases

### Node.js support details

A major feature in CEP 5.0 and later is the ability to use Node.js APIs in HTML extensions. Most built-in APIs from Node.js version 0.8.22 are available to HTML extensions, except for the following:

- Cluster APIs: unsupported.
- Console APIs: unsupported on Windows.

Other details to note:

- CEP injects the following symbols into the root HTML DOM:
  - **global, GLOBAL, root** - aliases for the window object
  - **Buffer** - node Buffer class
  - **process** - node process class
  - **require** - the magic function for reaching node APIs
  - **module** - compatibility symbol for node's special main-script module
- Conflicts with Web-Based Require Function
  - When an app uses libraries such as `RequireJS` that insert a require function into the DOM, consider renaming CEP's require function during migration.

```
<script type="text/javascript">windows.nodeRequire=window.require && window.require=undefined</script>
<script type="text/javascript" src="your/require/js/file.js"></script>
```

- Conflicts with Web-Based module Function
  - When an app uses `JQuery` and it tries to register itself as a `nodejs` plugin, add the script below inside a script tag so window.module becomes undefined.

```
<script type="text/javascript">window.module = undefined</script>
```

- Disable Node.js APIs in iframe
  - For security reasons, CEP provides an option to disable Node.js APIs in iframe. Add a `nodejs-disabled="true"` attribute to the iframe tag, as shown here:

```
<iframe id="xxx" class="xxxxx" nodejs-disabled="true">
```

- Forcing the environment implementation. With `RequireJS`, the text plugin tries to detect the environment available for loading text resources: `Node`, `XMLHttpRequest (XHR)`, or `Rhino`. Sometimes a loaded library in the `Node` or `Rhino` environment may introduce an `XHR` implementation. Set the plugin's `"env"` module config to choose the implementation explicitly:

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

CEP supports all third-party node JavaScript modules. The folder containing your HTML file is the top-level lookup location for third-party modules. For instance, if `require` runs from `file:///your_extension/index.html`, CEP resolves modules below `file:///your_extension/node_modules`; this follows upstream node behavior.

### Native Modules

CEP uses a V8 build that differs from official node, so Node.js native modules are not available directly.

### Samples

### Use Environment Variables

    process.env.`ENV_VARIABLE` // `ENV_VARIABLE` is the name of the variable you want to access.

### Use Node.js to download files

- http://www.hacksparrow.com/using-node-js-to-download-files.html

### Using Node.js APIs (CEP 6.1)

### Node.js Support

The HTML engine in CEP 6.1 moved to CEF 2272, based on Chromium 41.0.2272.104, and includes IO.js version 1.2.0.

Other notes:

- Node.js APIs are **disabled by default**
  - For security reasons, node.js APIs start disabled by default at both the extension and iFrame levels. Before CEP 6.1, they were enabled by default.

To enable Node.js APIs:

- Use `ExtensionManifest` and set `RequiredRuntime` to version 5.0 or later.
- Add `--enable-nodejs` to the extension manifest. Details are in Customize CEF Command Line Parameters.
- For `Node.js` APIs inside IFrames, place the `enable-nodejs` property on the target IFrame and on every ancestor iFrame. If any ancestor omits it, `Node.js` APIs are unavailable there.

```
<iframe id="xxx" class="xxxxx" enable-nodejs>
```

- The former `nodejs-disabled` CEF command line parameter and iFrame property no longer have any effect in the new HTML engine.
- Node context and Browser context
  - Integrating `io.js` into CEF creates two JavaScript contexts: one browser context and one `io.js` context. HTML page globals live in browser context, while `required` js files execute in `io.js` context. The two contexts cannot directly read each other's data. To share values, pass object references between them:
    - Browser context reading `io.js` objects - In browser context, `var backbone = require('backbone');` runs the backbone module code and then passes the result object back to browser context.
    - `io.js` context reading browser objects - The browser context's `window` global object is injected into `io.js` context, giving `io.js` code a route to browser-context objects. For example, to read a global object named `localeStrings` that was defined in browser context from an `io.js` module, use `window.localStrings` inside that `io.js` module.

### Using Node.js APIs (since CEP 7.0)

CEP 7.0 adds a `mixed context` `Node.js` mode on top of CEP 6.1 `Node.js` support. In CEP 6.1 `separate context`, a `required` node module lives in a different JavaScript context; in `mixed context`, both that module and the JavaScript code that `requires` it execute in one context, removing the friction of the earlier `separate context` behavior.

By default, this mode is off. Add command line parameter `--mixed-context` to your extension manifest to turn it on.

```

```

### Using Node.js APIs (since CEP 10.0)

CEP 10 extends existing `Node.js` support in CEP 9 with `disable-nodejs` for iframe. Applying this attribute to an iframe turns off `Node.js` in both `separate context` and `mixed-context`.

```
    <iframe name="iframe-1">
    	\\ Node will be accesible here
    </iframe>
    <iframe name="iframe-2" disable-nodejs>
        \\ Node will not be accesible here
    </iframe>
```

### Limitation of cep.process.stdout/stderr

`cep.process.stdout/stderr` has a known limitation: it is intended to capture a single `stdout/stderr` output event.

For applications that have not integrated CEP 5, two workarounds are suggested.

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

- Join all stdout output as one, like below

```
var str1 = 'abcdef';
var str2 = '12345';
var str3 = 'gghhtt';
console.log(str1 + str2 + str3);
```

To report curl download progress through stderr, use an example like this:

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

From CEP 5 onward, Node.js is included in the CEP runtime, so extensions in applications that have adopted CEP 5 can call standard `Node.js` APIs directly. Guidance for the global process object is at http://nodejs.org/api/process.html.

### Adobe Exchange

The sample extension is available at https://github.com/Adobe-CEP/Samples/tree/master/ExchangeExample.

## Other JavaScript Information

### Load Multiple JSX files

JSX files normally define functions and objects meant to run inside the host application's ExtendScript environment.

An HTML extension has two ways to cause JSX files to load into the host application's ExtendScript environment.

- Put a `<ScriptPath>` node in `manifest.xml`; its value is the JSX file's relative path. For example:

```
Extension Id="com.adobe.CEPHTMLTEST.Panel1">
		...........................
```

- Call CEP JavaScript API `evalScript` from the HTML extension with `$.evalFile(jsxFile)` as the script. Extra script code may be needed to determine `jsxFile` before `evalScript`; one option is `$.fileName`, which provides the path of the currently executing `JSX` file. Example:

```
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

When `$.fileName` is used in the FIRST LOADED JSX file, however, the returned value is wrong. If the snippet above runs in `example.jsx` referenced from `manifest.xml`, it produces an error. Avoid `$.fileName` in the FIRST LOADED JSX file; this appears to be an ExtendScript limitation. Use it instead from the second loaded JSX file or any later one. For example:

```
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
CSInterface.evalScript('$.evalFile(anotherJSXFile)', callback);

// Or in the first loaded jsx file, load another jsx file, and the value of "$.fileName" is correct in this file.
// Given the code is running this example.jsx which is referred in the manifest.xml.
// In the stage of "hardCodeJSXFile", the value of "$.fileName" is correct too.
$.evalFile(hardCodeJSXFile);
```

Note: Because this section's script is intended for the host application's ExtendScript environment, `$` here is not the same as jquery global variable `$`.

Use a "namespace" when defining a new variable/function/object in Global Space or on the `$` object. If multiple JSX files define the same name, the last loaded definition wins and earlier ones are replaced. One example uses `$.ext` across a.jsx, b.jsx and c.jsx: a.jsx sets it as a function, b.jsx changes it to an object, c.jsx changes it to a string, and the load order is a.jsx->b.jsx->c.jsx. After loading finishes, `$.ext` resolves to a string, not an object or a function. The same behavior can cross extension boundaries inside one point product. In a separate scenario, extension a, extension b, and extension c each provide a.jsx, b.jsx, and c.jsx respectively; with load order extension a-> extension b-> extension c, the final `$.ext` value remains the string.

### Drag and Drop

### Use Drag and Drop

CEP 5.2 supports HTML 5 Drag and Drop in four situations.

1.  Drag and drop inside an HTML extension.

2.  Drag and drop between two HTML extensions
