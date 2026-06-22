# Cep 11.1 Html Extension Cookbook (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

# CEP 11 HTML Extension Cookbook

## Overview

This cookbook explains how to build CEP 11.1 HTML/JavaScript Extensions for Creative Cloud applications.
Before CS6, CSXS was the former name; from CS6 onward, the platform is called CEP (Common Extensibility Platform). In this context, CEP and CSXS name the same project.

### CEP Extensions

CEP (formerly CSXS) Extensions add capabilities to the Adobe point products that host them. Applications load extensions through the PlugPlug Library architecture.
Beginning with CEP 4.0, extension development can use HTML/CSS and JavaScript (ECMAScript 5).

### Extension Types

CEP supports the extension types below. The extension type must be declared in manifest.xml.

- **Panel**
  - A Panel works like a standard application panel: it can dock, join workspaces, provide fly-out menus, and reopen at startup if it was open when the host closed.
- **ModalDialog**
  - A Modal Dialog opens an extension window and requires the user to finish with that window before control returns to the host application. The host application can be used again only after the extension window closes.
- **Modeless**
  - A Modeless Dialog opens a separate extension window without requiring interaction with that window first.
- **Embedded**
  - An Embedded Panel matches **Panel** behavior except that it cannot be undocked.
- **Custom (Since CEP 5.0)**
  - This type is intended for invisible extensions. An invisible extension stays hidden and is never shown during its lifecycle. For details, read "Invisible HTML Extensions".

### Applications Integrated with CEP

The table lists applications with CEP HTML extension support. (For legacy application data, use [this CEP chart](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).)

| Application | Host ID(Product SAPCode) | CC 2019 Version | CC 2020 Version | FY 2020 | FY2021 |
| --- | --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 20 (CEP 9) | 21 (CEP 9) | 22.0 (CEP 10) | 23.0 (CEP 11) |
| InDesign | IDSN | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) | 16.3(CEP 11) |
| InCopy | AICY | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) | 16.3(CEP 11) |
| Illustrator | ILST | 23 (CEP 9) | 24 (CEP 9) | 25.0 (CEP 10) | 25.3(CEP 11) |
| Premiere Pro | PPRO | 13 (CEP 9) | 14 (CEP 9) | 14.4 (CEP 10) | 15.4(CEP 11) |
| Prelude | PRLD | 8 (CEP 9) | 9 (CEP 9) | 10.0(CEP 10) | 10.1(CEP 11) |
| After Effects | AEFT | 16 (CEP 9) | 17 (CEP 9) | 17.1.4 (CEP 10) | 18.4(CEP 11) |
| Animate | FLPR | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) | 22.0(CEP 11) |
| Audition | AUDT | 12 (CEP 9) | 13 (CEP 9) | 13.0.10 (CEP 10) | 14.4(CEP 11) |
| Dreamweaver | DRWV | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) | 22.0(CEP 11) |
| Bridge | KBRG | 9 (CEP 9) | 10 (CEP 9) | 11.0 (CEP 10) | 12.0(CEP 11) |
| Rush | RUSH | 1 (CEP 9) | 1.2.1 (CEP 9) | 1.5.29 (CEP 10) | 2.1(CEP 11) |

---

### Chromium Embedded Framework (CEF)

The CEP HTML engine uses Chromium Embedded Framework version 3 (CEF3). More CEF information is available [here](http://code.google.com/p/chromiumembedded/). CEP uses these versions:

| Component | CEP 9.0 | CEP 10.0 | CEP 11.1 |
| --- | --- | --- | --- |
| CEF 3 | CEF 3 release branch 3163 | CEF 3 release branch 3729 | CEF 3 release branch - (88) |
| Chromium | 61.0.3163.91 | 74.0.3729.157 | 88 |
| Node.js | Node.js 8.6.0 | Node.js 12.3.1 | Node.js 15.9.0 |
| CEF/Node integration | Node-Webkit 0.25 | Node-Webkit 0.38 | Node-Webkit 0.50.1 |
| v8 | 6.3.292.49 | 7.4.288 | 8.7 |

---

### Browser Features supported by CEP

### HTTP Cookie

CEP handles two cookie types:

- Session Cookies - temporary in-memory cookies that expire and disappear when the user closes the extension
- Persistent Cookies - cookies without an expiry date or validity interval; they are saved on disk under the user's file area

Persistent Cookies are stored here:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

A persistent cookie is written as a file. Its name follows Host`ID_H`ostVersion_ExtensionName, for example `PHXS_15`.0.0_com.adobe.extension1.

## Development/debugging notes

### CEP 10 to CEP 11 migration

1. Update the Node Modules: CEP 11 uses NodeJS 15.9.0 and Node-WebKit 0.50.1. Extensions built with older NodeJS versions may fail to load in CEP 11 because their node modules are incompatible. In those cases, update the node modules with NodeJS version 15.9.0 or higher.

2. Content-Security-Policy Changes: CEP 11.1 includes CEF #88, and content-security-policy validation is now applied more strictly. Extensions that frame third-party sites can stop working when the embedded site sets a content-security-policy directive that forbids other sites from framing it. See [Known issues](cep-documentation-2.md) for affected cases and possible short-term workarounds.

3. Cookies: In #CEF v88, a cookie with no SameSite attribute is treated as SameSite=Lax. That default blocks the cookie in cross-site contexts. If the application must use cookies cross-site, set SameSite=None. If a component omits the `SameSite` attribute, the cookie falls back to `SameSite=Lax`, which prevents setting it in a cross-site context.

   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

   Note: CEF workaround notes are at https://www.chromium.org/administrators/policy-list-3/cookie-legacy-samesite-policies; add the following option in the manifest, `--disable-features=SameSiteByDefaultCookies`. Example:

   ```
   + <Parameter>--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure,NetworkService</Parameter>
   + <Parameter>--disable-site-isolation-trials</Parameter>

   ```

   Note: include `NetworkService` when backward compatibility with CEP 10 is required.

4. CORS checks: Security changes in CEP 11 mean CORS blocks more requests than before. An extension can hit this issue when it reaches an endpoint that does not send the Access-Control-Allow-Origin header. Configure the accessed endpoints with suitable Access-Control-Allow-Origin headers.

CEP 11 issue notes: [Known issues](cep-documentation-2.md).

### Migration from CEP 9 to CEP 10

    CEP 9 extensions do not require migration work. Extensions that already run under CEP 9 should start in CEP 10 without additional changes.

Keep the following CEP 10 details in mind.

1. NWJS version 0.38 issues also apply to CEP 10.

Example: errors have been observed when the node module "winston" is used together with another node module that uses duplex.
Workaround: when the extension uses the node module "winston", insert the script below.

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

2. Update your node modules.

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions built against older NodeJS releases may fail to load in CEP 10 when their node modules are incompatible. In that situation, update the node modules with NodeJS version 12.3.1 or later.

3. Chromium CSS property deprecations can surface in CEP 10.

When this occurs, extension developers must revise the extension CSS so rendering works as expected in CEP 10. Related Chromium issue:
https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. Disable nodejs option details: https://git.corp.adobe.com/cepos/CEP-Resources/blob/master/`CEP_10`.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100.

### Migration from CEP 8 to CEP 9

    CEP 8 extensions do not require migration work. Extensions that run in CEP 8 should launch in CEP 9 without further changes.

Note:
The manifest must include a `<Size>` element. Earlier releases through CEP 8 could run by taking the manifest's max or min size, even though the documentation marked `<Size>` as required. CEP 9 fixes that bug, so define `<Size>` in the manifest.

### NodeJS

The following changes apply when --enable-nodejs is supplied as a CEFCommandline parameter.

### New Symbols in the global context

When nodejs is enabled, CEP 8 and later add cep_node to the global context. cep_node exposes these node-specific symbols:

> cep_node members
> Buffer, global, process and require

### Accessing nodejs APIs in iframe

nodejs symbols are absent from an iframe's global context; access nodejs APIs inside the iframe through cep_node. With --mixed-context enabled, global node symbols and cep_node appear in the iframe's global context because browser and node run in one shared context. Also note that existing iframe code that checks or uses nodejs symbols in the iframe global context worked in the previous release, but breaks in the current release when separate context mode is used.

### JS Lib Break due to node symbols (possible for many other libraries)

The newer nodejs integration places "module" and "exports" in the global context. Libraries such as JQuery often decide how to boot by testing whether "module" exists in the global scope. For ex, JQuery includes this kind of boot-time code:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When that code runs in CEP's browser with nodejs enabled, JQuery loads into module context instead of Browser context. That can interfere with extension startup. Use this pattern for such cases:

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

When the extension does not use "module" or "exports", the final 2 lines in the preceding code can be omitted.
This approach matches the existing pattern many users applied for nodejs's require during imports. If require is already handled, continue using that handling pattern.

### Absolute require paths

Nodejs 7.7.4 and later require the included path to be absolute. Therefore, for a nodejs require of a js file, change the path from relative to absolute. For eg. replace:

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

CEP initializes with several contexts. The default contexts are listed below:

1.  **Browser Context**

    CEP's browser engine uses this as its default JS context. Browser objects are present here, and CEP file system APIs are reached from this context.

2.  **Native Context**

    The "cep" object extends this context to provide file system access through CSInterface.js.

3.  **Node Context** (When nodejs is enabled through --enable-nodejs command line switch)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    Code reaches this context through the evalscript API.

---

**Separate Context Mode**

This context is created when CEP starts with --enable-nodejs and without --mixed-context. In that mode, CEP exposes these symbols:

1.  cep_node: CEP treats this as a global symbol shared across frames for node-symbol access. Changes to this symbol are visible in every frame context. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available only in the main frame, which is the current document. Newly created frames in the current document do not receive those symbols. This differs from CEP 7 behavior for frames, where node globals could be accessed from all frames.

The following representation shows the context visually:

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

This context is created when CEP starts with both --enable-nodejs and --mixed-context. In this mode, CEP exposes these symbols:

1.  cep_node: CEP treats this as a local symbol inside each frame, used to reach node symbols. Changes to the symbol stay within that frame and are not mirrored into other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are accessible in all frames, with a separate copy for each frame.

The following representation shows the context visually.

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

CEP HTML Extensions can be built on Windows or macOS. A development machine needs these applications to develop CSXS extensions successfully:

- Adobe Creative Cloud applications that support CEP HTML extensions.
- VS Code plus extensions used to build CEP HTML extensions for Adobe Creative Cloud.
- Adobe ExtendScript Tool Kit (available as an optional install; this 32-bit app is unsupported on macOS High Sierra 10.13.4 and newer macOS releases).
- Chrome browser for debugging.

### VS Code

VS Code supports development and debugging for CEP HTML extensions, including ExtendScript debugging. More information about the ExtendScript tools is available [here](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug).

### Signing extensions

- Before signing extensions, obtain or create the certificate file. Signing guide: https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Package%20Distribute%20Install.
- The ZXPSignCMD tool is required; download it from https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD.

### Debugging Unsigned Extensions

During development, you can bypass extension-signature checks by editing the CSXS preference properties file at these locations:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.11, then create PlayerDebugMode as a "string" entry with value "1".
- macOS: Run `defaults write com.adobe.CSXS.11 PlayerDebugMode 1` in Terminal (the plist is also at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.11.plist).

Those entries allow debug extensions to appear inside host applications. CSXS.11 assumes the target extension is being developed for CEP 11. For an extension targeting an earlier CEP release, replace 11 with the matching version number.

### Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added plist-file caching. Changes to plist files do not apply until the cache refreshes on its periodic schedule, and the exact refresh time is not visible. Use either of these methods to force changes to apply:

- Kill the **cfprefsd** process. It restarts automatically, and then the update
  is applied.
- Restart macOS, or sign out the current user and sign back in.
- [Additional details](http://hints.macworld.com/article.php?story=20130908042828630)

### Remote Debugging

CEP has supported remote debugging for HTML extensions since 5.0.

- Create a “.debug” file in the extension root directory, for example `Test_Extension\.debug`. The .debug file stores remote debug ports. Create this file with valid debug ports because remote debugging and dev tools both depend on it.
- Because ".debug" is a special filename on Windows and macOS, create it from a command line.
  - On Windows, use "copy con .debug" followed by "Ctrl+Z" for an empty file.
  - On macOS, use "touch .debug" for an empty file.
- Port must be greater than or equal to 1024 and less than 65535; outside that range, remote debugging and dev tools fail.
- A single extension bundle can contain multiple extensions. Use the .debug file to assign a debug port to each extension. Example file:

```xml

<?xml version="1.0" encoding="UTF-8"?>
```

For an extension loaded with debug port 8088, open http://localhost:8088/ in Chrome to load the debugger.

### Where are the Log Files

### PlugPlug Logs

Applications that support CEP extensions create log files containing useful debugging data. The log file locations vary by platform:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The files use these naming conventions:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file csxs8-ILST.log.
- CEP 6.1 and later releases: CEP`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file CEP8-ILST.log.

Logging can be set to these levels:

- 0 - Off (no log output)
- 1 - Error (default setting)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at the following location (restart the application for LogLevel changes to apply):

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.11`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.11.plist`

For example of macOS, in the terminal do:

    defaults write com.adobe.CSXS.11 LogLevel 6

Higher log levels can slow extension loading.

### CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. A CEPHtmlEngine instance usually creates two log files: one for the browser process and another for the renderer process.
The naming conventions are:

- Browser process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
- Renderer process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs as well.

### CEF Log

In CEP 4.0 - 6.0, Chromium Embedded Framework (CEF) in CEPHtmlEngine also writes this log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

For CEP 6.1 and later, that CEF output is folded into the CEPHtmlEngine log.

### Extension Folders

CEP recognizes 3 categories of extension folders.

- Product extension folder. This is a recommendation, while each point product may choose the exact folder. Third-party extensions cannot be installed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - macOS: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP searches first in the product extension folder, then in the system extension folder, and last in the per-user extension folder.
- Extensions are filtered out when they lack a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the one with the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the newest modification date.
- When extension bundle ID, version, and manifest modification date all match, CEP loads the first one it finds.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be placed in the system extension folder or the per-user extension folder.

Note:

- Do not include character '#' in an extension folder path on Windows
  or Mac OSX, because CEF interprets '#' as a delimiter.

### CEP HTML Test Extensions
