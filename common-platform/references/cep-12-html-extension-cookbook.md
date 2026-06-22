# Cep 12 Html Extension Cookbook (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

# CEP 12 HTML Extension Cookbook

## Overview

This cookbook explains how to create CEP 12 HTML/JavaScript Extensions for Creative Cloud applications.
CSXS was the pre-CS6 name, while CEP (Common Extensibility Platform) is the CS6-and-later name. References to CEP and CSXS point to the same project.

### CEP Extensions

CEP (formerly CSXS) Extensions add functionality to the Adobe point products where they run. Applications load extensions through the PlugPlug Library architecture.
Since CEP 4.0, extension development can use HTML/CSS and JavaScript (ECMAScript 5).

### Extension Types

CEP supports the extension types below. Specify the extension's type in manifest.xml.

- **Panel**
  - The Panel type acts like other application panels. It can be docked, appears in workspaces, supports fly-out menus, and opens again at startup if it was open at shutdown.
- **ModalDialog**
  - A Modal Dialog type opens an extension window and requires the user to work only with that extension window until it is closed. The host application becomes interactive again after the extension window closes.
- **Modeless**
  - A Modeless Dialog type opens an extension window without requiring the user to interact only with that window.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. An invisible extension remains hidden for its full life cycle and never becomes visible. See "Invisible HTML Extensions" for details.

### Applications Integrated with CEP

The applications below support CEP HTML extensions. Older application mappings: https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep.

| Application | Host ID(Product SAPCode) | CC 2019 Version | CC 2020 Version | FY 2020 | FY2021 | FY2024 |
| --- | --- | --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 20 (CEP 9) | 21 (CEP 9) | 22.0 (CEP 10) | 23.0 (CEP 11) | 25.12 (CEP 12) |
| InDesign | IDSN | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) | 16.3(CEP 11) | 20.4 |
| InCopy | AICY | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) | 16.3(CEP 11) | TBD |
| Illustrator | ILST | 23 (CEP 9) | 24 (CEP 9) | 25.0 (CEP 10) | 25.3(CEP 11) | 29.5.1 (CEP 12) |
| Premiere Pro | PPRO | 13 (CEP 9) | 14 (CEP 9) | 14.4 (CEP 10) | 15.4(CEP 11) | 25.0 (CEP 12) |
| Prelude | PRLD | 8 (CEP 9) | 9 (CEP 9) | 10.0(CEP 10) | 10.1(CEP 11) | TBD |
| After Effects | AEFT | 16 (CEP 9) | 17 (CEP 9) | 17.1.4 (CEP 10) | 18.4(CEP 11) | 25.0 (CEP 12) |
| Animate | FLPR | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) | 22.0(CEP 11) | TBD |
| Audition | AUDT | 12 (CEP 9) | 13 (CEP 9) | 13.0.10 (CEP 10) | 14.4(CEP 11) | 25.0 (CEP 12) |
| Dreamweaver | DRWV | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) | 21.2.0(CEP 11) | TBD |
| Bridge | KBRG | 9 (CEP 9) | 10 (CEP 9) | 11.0 (CEP 10) | 12.0(CEP 11) | TBD |
| Rush | RUSH | 1 (CEP 9) | 1.2.1 (CEP 9) | 1.5.29 (CEP 10) | 2.1(CEP 11) | TBD |

---

### Chromium Embedded Framework (CEF)

The CEP HTML engine is built on Chromium Embedded Framework version 3 (CEF3). More information about CEF is available [here](http://code.google.com/p/chromiumembedded/). CEP uses these versions:

| Component | CEP 9.0 | CEP 10.0 | CEP 11.1 | CEP 12.0 |
| --- | --- | --- | --- | --- |
| CEF 3 | CEF 3 release branch 3163 | CEF 3 release branch 3729 | CEF 3 release branch - (88) | CEF 3 release branch - (99) |
| Chromium | 61.0.3163.91 | 74.0.3729.157 | 88 | 99 |
| Node.js | Node.js 8.6.0 | Node.js 12.3.1 | Node.js 15.9.0 | Node.js 17.7.1 |
| CEF/Node integration | Node-Webkit 0.25 | Node-Webkit 0.38 | Node-Webkit 0.50.1 | Node-Webkit 0.62.1 |
| v8 | 6.3.292.49 | 7.4.288 | 8.7 | 9.9.115 |

---

### Browser Features supported by CEP

### HTTP Cookie

CEP supports these two cookie types:

- Session Cookies - temporary in-memory cookies; they expire and disappear when the user closes the extension
- Persistent Cookies - cookies stored in the user's file system without an expiry date or validity interval

Persistent Cookies location:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file named with Host`ID_H`ostVersion_ExtensionName, such as `PHXS_15`.0.0_com.adobe.extension1.

## Development and Debugging

### Migration from CEP 11 to CEP 12

Update the Node Modules: CEP 12 uses NodeJS 17.7.1 together with Node-WebKit v0.62.1. Extensions built against earlier NodeJS releases can fail to load under CEP 12 when their node modules are incompatible. Rebuild or refresh those node modules with NodeJS version 17.7.1 or later.

Also see [Known issues](cep-documentation-3.md) for CEP 12.

### Migration from CEP 10 to CEP 11

1. Update the Node Modules: CEP 11 runs with NodeJS 15.9.0 and Node-WebKit 0.50.1. Extensions originally built with an older NodeJS release may not load in CEP 11 if their node modules no longer match the runtime. Update those modules by using NodeJS version 15.9.0 or newer.

2. Content-Security-Policy Changes: CEP 11.1 includes CEF #88, where content-security-policy validation is applied more rigorously. Extensions embedding third-party sites can stop working when the embedded site declares a content-security-policy directive that disallows framing by other sites. See [Known issues](cep-documentation-3.md) for several affected cases and temporary mitigation options.

3. Cookies: In #CEF v88, a cookie without an explicit SameSite attribute is treated as SameSite=Lax. That default blocks the cookie in cross-site contexts. When the application requires cross-site cookies, set SameSite=None. If the component omits the `SameSite` attribute, the cookie falls back to `SameSite=Lax`, preventing it from being set cross-site.

   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

   Note: CEF's legacy SameSite policy setting is documented at https://www.chromium.org/administrators/policy-list-3/cookie-legacy-samesite-policies. Include this manifest option: `--disable-features=SameSiteByDefaultCookies`. Example:

   ```
   + <Parameter>--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure,NetworkService</Parameter>
   + <Parameter>--disable-site-isolation-trials</Parameter>

   ```

   Note: include `NetworkService` when backward compatibility with CEP 10 is required.

4. CORS checks: CEP 11 security updates result in many more requests being stopped by CORS validation. An extension can run into this when it reaches an endpoint missing the Access-Control-Allow-Origin header. Confirm that every endpoint being accessed returns Access-Control-Allow-Origin headers with the correct values.

Also see [Known issues](cep-documentation-3.md) for CEP 11.

### Migration from CEP 9 to CEP 10

    Extensions that already work in CEP 9 do not need migration work; CEP 10 should run them directly.

Keep these CEP 10 points in mind:

1. Problems found in NWJS version 0.38 also apply to CEP 10.

Example: errors have been observed when the node module "winston" is combined with another node module that uses duplex.
Workaround: when the extension uses the node module "winston", place this script in the extension package.

```
var {Duplex} = require('stream')
var {Writable} = require('stream')
{
  // Allow the keys array to be GC'ed.
  const keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++)
  {
	const method = keys[v];
	if (!Duplex.prototype[method])
	Duplex.prototype[method] = Writable.prototype[method];
  }
}
```

2. Update your node modules

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions compiled or assembled with an older NodeJS version can fail to load in CEP 10 because their node modules are incompatible. Refresh those modules with NodeJS version 12.3.1 or later.

3. CSS-property issues caused by Chromium deprecations also apply in CEP 10.

When this occurs, extension developers must revise the extension CSS so the extension renders properly in CEP 10. For example: https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. Also see the [disable nodejs option details](https://git.corp.adobe.com/cepos/CEP-Resources/blob/master/`CEP_10`.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100).

### Migration from CEP 8 to CEP 9

Extensions that function in CEP 8 do not require migration; CEP 9 should run them without additional changes.
Note:
The manifest documentation already requires the `<Size>` element, but through CEP 8 the runtime could still use the supplied max or min size. CEP 9 fixes that bug, so define the `<Size>` element in the manifest.

### NodeJS

The following changes apply when --enable-nodejs is supplied as a CEFCommandline parameter.

### New Symbols in the global context

With nodejs enabled, CEP 8 and later add the cep_node symbol to the global context. cep_node exposes:

> cep_node members
> Buffer, global, process and require

### Accessing nodejs APIs in iframe

In an iframe global context, nodejs symbols are not exposed directly; access nodejs APIs there through cep_node. With --mixed-context enabled, both the global node symbols and cep_node appear in the iframe global context because browser and node execution share a single context. Existing iframe code that checks for or uses nodejs symbols in the global context may therefore have worked in the previous release, but it breaks in the current release when separate context mode is used.

### JS Lib Break due to node symbols (possible for many other libraries)

The newer nodejs integration puts "module" and "exports" into the global context. Libraries such as JQuery often choose their startup path by testing whether a "module" symbol exists globally. For example, JQuery contains this boot-time pattern:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When CEP's browser runs that code with nodejs enabled, JQuery loads into module context instead of Browser context. That can break extension startup. Use this pattern for those cases:

> **global symbols handling**

```html
<script>
  if (typeof module === "object") {
    window.module = module;
    module = undefined;
  }
</script>
<script>
  if (typeof exports === "object") {
    window.exports = exports;
    exports = undefined;
  }
</script>

<script src="scripts/jquery.min.js"></script>
<script src="scripts/csinterface.js"></script>

<script>
  if (window.module) module = window.module;
</script>
<script>
  if (window.exports) exports = window.exports;
</script>
```

If the extension does not use "module" and "exports", the final 2 lines above may be omitted.
This mirrors the approach commonly used for nodejs's require during imports. If require is already handled, keep handling it in the same manner.

### require path is absolute instead of relative

Nodejs 7.7.4 and later require the js file path to be absolute. Therefore, when calling nodejs require for a js file, change a relative path to an absolute one. For example, replace:

```js
require("./js/lib/jquery.js");
```

with

> **Win require absolute path for nodejs**

```js
var loc = window.location.pathname;
var dir = decodeURI(loc.substring(1, loc.lastIndexOf("/")));
require(dir + "/js/lib/jquery.js");
```

On macOS (there is a change in index passed on to substring)

> **macOS require absolute path for nodejs**

```js
var loc = window.location.pathname;
var dir = decodeURI(loc.substring(0, loc.lastIndexOf("/")));
require(dir + "/js/lib/jquery.js");

or;

require(__dirname + "/js/lib/jquery.js");
```

### Contexts in CEP

CEP defines multiple contexts at startup. These are the default contexts:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. Alongside Browser objects, this context provides access to CEP file system APIs.

2.  **Native Context**

    Through the "cep" object, this extended context exposes file-system operations through CSInterface.js.

3.  **Node Context** (when --enable-nodejs enables nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    The evalscript API reaches this context.

---

**Separate Context Mode**

This context is created by the following command line switch: --enable-nodejs (with --mixed-context **not** passed). Starting CEP this way exposes these symbols:

1.  cep_node: Treated as a global symbol shared across frames, this provides access to node symbols. Changes made to this symbol appear in every frame context. CEP 8 introduced this symbol.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be reached only from the main frame, meaning the current document. When the current document creates a new frame, those symbols are absent from that frame's context. This differs from CEP 7 frame behavior, where node globals were accessible in all frames.

The following representation gives visual context:

> **Separate Context**

```html
<html>
  <head> </head>
  <body>
    <iframe name="iframe_1"> </iframe>
    <iframe name="iframe_2"> cep_node.process.myVar = "Hello"; </iframe>
    <iframe name="iframe_3"> </iframe>
  </body>
</html>
```

**Mixed Context Mode**

Create this context by starting CEP with the command line switches --enable-nodejs and --mixed-context. Under that startup mode, these symbols are present:

1.  cep_node: Treated as a local symbol inside each frame, this provides access to node symbols. A modification in one frame is not reflected into other frames. CEP 8 introduced this symbol.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be accessed in all frames, with a unique instance per frame.

The following representation gives visual context:

> **Mixed Context**

```html
<html>
  <head> </head>
  <body>
    <iframe name="iframe_1"> </iframe>
    <iframe name="iframe_2"> cep_node.process.myVar = "Hello"; </iframe>
    <iframe name="iframe_3"> </iframe>
  </body>
</html>
```

### Development Machine Setup

CEP HTML Extensions can be developed on Windows and macOS. To build CSXS extensions successfully, set up the development machine with these applications:

- Adobe Creative Cloud applications that support CEP HTML extensions.
- Adobe ExtendScript Tool Kit (available as an optional install; macOS High Sierra 10.13.4 and later do not support this 32-bit app).
- Chrome browser for debugging.
- Visual Studio Code, optionally paired with the [ExtendScript Debugger plugin](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug); this is useful in many workflows, especially on macOS 10.14 or later.

### Signing extensions

- Before signing extensions, obtain or create the certificate file. Use this [signing guide](https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Package%20Distribute%20Install).
- The ZXPSignCMD tool is also required: [ZXPSignCMD](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD).

### Debugging Unsigned Extensions

During development, you can skip the extension-signature requirement by editing the CSXS preference properties file at this location:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.12; create PlayerDebugMode as type "string" and set it to "1".
- macOS: In the terminal, type: `defaults write com.adobe.CSXS.12 PlayerDebugMode 1` (The plist is also located at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.12.plist)

These entries make debug extensions visible in host applications. CSXS.12 is used here on the assumption that the extension targets CEP 12. For an earlier CEP target, replace 12 with the matching version number.

### Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added plist-file caching. Changes to plist files do not take effect until that cache refreshes, and the refresh time is not predictable. Use either of these approaches to force the change to apply.

- Kill **cfprefsd** process. It restarts automatically, after which the update takes effect.
- Restart macOS, or log out the current user and log back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)

### Remote Debugging

CEP supports remote debugging for HTML extensions beginning with 5.0.

- Create a ".debug" file in the extension root directory, for example `Test_Extension\.debug`. The .debug file stores remote debug ports. Because remote debugging and dev tools both depend on it, developers must create the file and use valid debug ports.
- Because the ".debug" file name is special on both Windows and macOS, create it from the command line.
  - Windows: create an empty file with "copy con .debug" followed by "Ctrl+Z".
  - macOS: create an empty file with "touch .debug".
- Port must be greater than or equal to 1024 and less than 65535; outside that range, remote debugging and dev tools will fail.
- One extension bundle can contain multiple extensions. Use the .debug file to assign debug ports to each extension. Example file:

```xml

<?xml version="1.0" encoding="UTF-8"?>
```

After loading an extension with debug port 8088, open http://localhost:8088/ in Chrome to load the debugger.

### Where are the Log Files

### PlugPlug Logs

Each application that supports CEP extensions writes useful debugging logs. Platform-specific log locations are:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The generated files follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. Example: PlugPlug in Illustrator writes csxs8-ILST.log.
- CEP 6.1 and later releases: CEP`<versionNumber>`-`<HostID>`.log. Example: PlugPlug in Illustrator writes CEP8-ILST.log.

Logging levels can be set as follows:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at this location (restart the application before the new log level takes effect):

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.12`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.12.plist`

For example, on macOS run this in the terminal:

    defaults write com.adobe.CSXS.12 LogLevel 6

Note that higher log levels slow extension loading.

### CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. Each CEPHtmlEngine instance usually creates two log files: one for the browser process and another for the renderer process.
The generated files follow these patterns:

- Browser process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
- Renderer process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level also controls these files.

### CEF Log

In CEP 4.0 - 6.0, CEPHtmlEngine's Chromium Embedded Framework (CEF) also writes a log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

From CEP 6.1 onward, that log is combined into the CEPHtmlEngine log.

### Extension Folders

CEP supports 3 extension-folder types.

- Product extension folder. This is only a suggestion because each point product can choose its own location. Third-party extensions cannot be installed there.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - macOS: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?
