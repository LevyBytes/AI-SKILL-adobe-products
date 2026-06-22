# Cep 10.0 Html Extension Cookbook (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

# CEP 10 HTML Extension Cookbook

## Overview

Use this cookbook when building CEP 10.0 HTML/JavaScript Extensions for Creative Cloud applications.
CSXS was the pre-CS6 name; from CS6 onward, CEP (Common Extensibility Platform) names the same underlying project. In this context, references to CEP and CSXS point to that shared extension platform.

### CEP Extensions

CEP (formerly CSXS) Extensions add capabilities inside the Adobe point products that host them. Applications load these extensions through the PlugPlug Library architecture.
Beginning with CEP 4.0, extension authors can write extensions with HTML/CSS and JavaScript (ECMAScript 5).

### Extension Types

CEP recognizes the following extension categories. Declare the chosen type for an extension in its manifest.xml.

- **Panel**
  - A Panel acts like a standard panel in the host application: it can dock, join workspaces, expose fly-out menus, and reopen at startup when it was open during shutdown.
- **ModalDialog**
  - A Modal Dialog opens a separate extension window and blocks work in the host application until the user finishes with that extension window. The host becomes interactive again only after the extension window closes.
- **Modeless**
  - A Modeless Dialog also opens a separate extension window, but it does not require the user to work in that window before returning to the host.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. Such an extension stays hidden for its entire lifecycle and is never shown onscreen. For details, read "Invisible HTML Extensions".

### Applications Integrated with CEP

The applications below support CEP HTML extensions. For earlier application versions, consult [this chart](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).

| Application | Host ID | CC 2019 Version | CC 2020 Version | FY2020/FY2021 |
| --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 20 (CEP 9) | 21 (CEP 9) | 22.0 (CEP 10) |
| InDesign | IDSN | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) |
| InCopy | AICY | 14 (CEP 9) | 15 (CEP 9) | 16.0 (CEP 10 ) |
| Illustrator | ILST | 23 (CEP 9) | 24 (CEP 9) | 25.0 (CEP 10) |
| Premiere Pro | PPRO | 13 (CEP 9) | 14 (CEP 9) | 14.4 (CEP 10) |
| Prelude | PRLD | 8 (CEP 9) | 9 (CEP 9) | TBD |
| After Effects | AEFT | 16 (CEP 9) | 17 (CEP 9) | 17.1.4 (CEP 10) |
| Animate | FLPR | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) |
| Audition | AUDT | 12 (CEP 9) | 13 (CEP 9) | 13.0.10 (CEP 10) |
| Dreamweaver | DRWV | 19 (CEP 9) | 20 (CEP 9) | 21.0 (CEP 10) |
| Bridge | KBRG | 9 (CEP 9) | 10 (CEP 9) | 11.0 (CEP 10) |
| Rush | RUSH | 1 (CEP 9) | 1.2.1 (CEP 9) | 1.5.29 (CEP 10) |

---

### Chromium Embedded Framework (CEF)

The CEP HTML engine is built on Chromium Embedded Framework version 3 (CEF3). More CEF information is available [here](https://bitbucket.org/chromiumembedded/cef). CEP uses these component versions:

| Component | CEP 9.0 | CEP 10.0 |
| --- | --- | --- |
| CEF 3 | CEF 3 release branch 3163 | CEF 3 release branch 3729 |
| Chromium | 61.0.3163.91 | 74.0.3729.157 |
| Node.js | Node.js 8.6.0 | Node.js 12.3.1 |
| CEF/Node integration | Node-Webkit 0.25 | Node-Webkit 0.38 |
| v8 | 6.3.292.49 | 7.4.288 |

---

### Browser Features supported by CEP

### HTTP Cookie

CEP works with two cookie types:

- Session Cookies - temporary in-memory cookies that expire and vanish when the user closes the extension
- Persistent Cookies - cookies with no expiry date or validity interval; CEP stores them on disk

Persistent Cookies location:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

CEP stores each persistent cookie in its own file. The naming pattern is Host`ID_H`ostVersion_ExtensionName, for example `PHXS_15`.0.0_com.adobe.extension1.

## Development and Debugging

### Migration from CEP 9 to CEP 10

    Existing CEP 9 extensions do not need a migration step. In general, extensions that run on CEP 9 should also run on CEP 10 without changes.

With CEP 10, keep these points in mind:

1. Problems observed in NWJS version 0.38 also apply to CEP 10

Example: errors have been seen when the node module "winston" is used together with another node module that uses duplex.
Workaround: when your extension uses the node module "winston", include this script in the extension.

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

CEP 10 uses NodeJS 12.3.1 and Node-WebKit 0.38. Extensions built against older NodeJS versions may fail to load in CEP 10 when their node modules are incompatible. In those situations, rebuild or update the modules on NodeJS 12.3.1 or a newer release.

3.CSS property issues caused by Chromium deprecations also apply in CEP 10

When Chromium deprecations affect CSS, extension developers must adjust the extension stylesheet so CEP 10 renders the extension correctly. Example issue: https://bugs.chromium.org/p/chromium/issues/detail?id=927066

4. For details about the disable nodejs option, see [here](https://git.corp.adobe.com/cepos/CEP-Resources/blob/master/`CEP_10`.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#using-nodejs-apis-since-cep-100).

### Migration from CEP 8 to CEP 9

    CEP 8 extensions do not require migration. Extensions that work on CEP 8 should run on CEP 9 without additional changes.

Note:
Documentation marks the `<Size>` element in the manifest file as mandatory. Through CEP 8, extensions could still work by using the max or min size from the manifest, but CEP 9 fixed that bug. Define `<Size>` explicitly in your manifest.

### Migration from CEP 7 or lower to CEP 9

    Follow the [Guide for migrating from CEP 7 to CEP 8](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#guide-for-migrating-from-cep-7-to-cep-8)

### Guide for migrating from CEP 7 to CEP 8

### Changes for Extensions Developers\*\*

This migration moves Chromium from 41.0.2272.104 to 57.0.2987.74, and nodejs from iojs 1.2.0 to 7.7.4. The guidance reflects CEP team testing; if you discover additional issues, document them or share them with the CEP team.

### Chromium

Note: “+” indicates that the feature was added, while “-” marks a deprecated feature:

+Support for “SameSite”

CEF 74 (Chromium 74.0.3729.157) (From 61.0.3163.91)

- +OpenType variable fonts (CEF 62)
- +Dynamic module import (CEF 63)
- +Async iterators and generators (CEF 63)
- -Removed multiple shadow roots (CEF 64)
- +ResizeObserver (CEF 64)
- +CSS Paint API (CEF 65)
- +display:contents CSS support (CEF 65)
- -Deprecated CSS position values with three parts (CEF 66)
- -Removed several -webkit- prefixed CSS properties (CEF 67,71)
- +BigInt support (CEF 67)
- +CSS Scroll Snap (CEF 69)
- +Element#toggleAttribute (CEF 69)
- +Array#flat, Array#flatMap (CEF 69)
- -document.origin (CEF 71)
- +Intl#RelativeTimeFormat (CEF 71)
- +text-underline-position (CEF 71)
- -Rendering of FTP resources (CEF 72)
- -TLS 1.0 and 1.1 (CEF 72)
- +Public Class Fields (CEF 72)
- +Intl.format (CEF 72)
- +matchAll (CEF 73)
- +Private Class Fields (CEF 74)
- +transition% events (CEF 74)

### NodeJS

These notes apply only when CEFCommandline receives --enable-nodejs.

### New Symbols in the global context

With nodejs enabled, CEP 8 and later versions expose an additional global-context symbol: cep_node. That object carries this set of node symbols:

> cep_node members
> Buffer, global, process and require

### Accessing nodejs APIs in iframe

nodejs symbols are absent from an iframe's global context; inside an iframe, cep_node is the access path for nodejs APIs. With --mixed-context enabled, both global node symbols and cep_node are present in the iframe global context because browser and node execute in the same context. Also note the compatibility impact: code that previously checked for or used nodejs symbols in an iframe's global context worked through the prior release, but in the current release it fails when separate context mode is used.

### JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs layer adds "module" and "exports" symbols globally. Libraries such as JQuery often choose their boot path by testing whether "module" exists in the global scope. For ex, JQuery contains code like this during startup:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

With nodejs enabled in CEP's browser, that startup check can cause JQuery to load in module context instead of Browser context, which may break extension startup. Use the following code for those cases:

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

When the extension does not use "module" or "exports", the last 2 lines above can be omitted.
This approach follows the older import-time pattern for nodejs's require. If your extension already handles require, keep using that existing pattern.

### require path is absolute instead of relative

Nodejs 7.7.4 and later require an absolute path. If your code uses nodejs require for a js file, change the relative path to an absolute one. Example replacement:

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

At startup, CEP defines several contexts. These are the defaults:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. In addition to Browser objects, CEP file system APIs are available here.

2.  **Native Context**

This extended context comes through the "cep" object, with CSInterface.js providing file system access.

3.  **Node Context** (when --enable-nodejs turns on nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    evalscript API accesses this context.

---

**Separate Context Mode**

CEP creates this context when it starts with the following command line switch: --enable-nodejs, with --mixed-context **not** passed. In this context, CEP provides these symbols:

1.  cep_node: a global symbol available across frames for reaching node symbols. Changes to this symbol are visible in every frame context. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are accessible only in the main frame, which is the current document. Newly created frames in the current document do not receive these symbols in their own contexts. This differs from CEP 7 frame behavior, where node globals were available in all frames.

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

CEP creates this context when launched with --enable-nodejs and --mixed-context. In this context, these symbols exist:

1.  cep_node: a local symbol inside each frame that provides access to node symbols. Changing this symbol in one frame does not affect other frames. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available in all frames, separately for each frame.

The following representation shows the context visually:

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

You can develop CEP HTML Extensions on Windows or macOS. A development machine should include these applications to build CSXS extensions successfully:

- Adobe Creative Cloud applications that support CEP HTML extensions.
- HTML Extension Builder (useful, though not required).
- Adobe ExtendScript Tool Kit (available as an optional install).
- Chrome browser for the debug workflow.

### HTML Extension Builder

HTML Extension Builder is an Eclipse-based tool set for developing and debugging HTML extensions. Get Extension Builder 3 [here](http://labs.adobe.com/technologies/extensionbuilder3/).

### Signing extensions

- Before signing extensions, obtain a certificate file or create one. Configurator and Adobe Exchange Packer can generate certificates. After logging in, developers can find the full information [here](https://www.adobeexchange.com/resources/7).
- A HTML extension can be signed with any of three tools.
- [Extension Builder 3](http://labs.adobe.com/downloads/extensionbuilder3.html)
- CC Extensions Signing Toolkit (also on above labs web site)
  - Example of using CC Extension signing toolkit: ccextensionswin64.exe -sign "d:\Adobe Layer Namer\Adobe Layer Namer\"_(input extension path)_ d:\AdobeLayerNamer.zxp _(output zxp path)_ d:\sign.p12 _(certificate path)_ 1 _(certificate password)_ Adobe Exchange Packer (please sign in so that you can see it.)
- [Adobe Exchange Packer](http://www.adobeexchange.com/resources) (please sign in so that you can see it.)

### Debugging Unsigned Extensions

During development, if you are not using HTML Extension Builder for debug workflows and want to skip extension-signature enforcement, edit the CSXS preference properties file here:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.10, then create a PlayerDebugMode entry of type "string" and set its value to "1".
- macOS: In the terminal, run `defaults write com.adobe.CSXS.10 PlayerDebugMode 1` (The plist also resides at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.10.plist)

These settings allow debug extensions to appear in host applications. CSXS.10 is shown under the assumption that the extension targets CEP 10; for an earlier CEP version, replace 10 with the matching version number.

### Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added caching for plist files. Changes to plist files do not apply until the cache refreshes, and the timing of that refresh is not predictable. Use either of these methods to force the change to apply:

- Kill the **cfprefsd** process. It restarts automatically, after which the update
  takes effect.
- Restart macOS, or log out the current user and log back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)

### Remote Debugging

CEP supports remote debugging for HTML extensions from 5.0.

- Add a “.debug” file at the extension root directory, for example `Test_Extension\.debug`. The .debug file records remote debug ports. Create this file with valid ports because remote debugging and dev tools both read it.
- Because ".debug" is a special file name on Windows and macOS, create it from the command line.
  - On Windows, create an empty file with "copy con .debug" and "Ctrl+Z".
  - On macOS, create an empty file with "touch .debug".
- Port values must be at least 1024 and less than 65535; outside that range, remote debugging and dev tools will not work.
- A single extension bundle may include multiple extensions. The .debug file can assign a debug port to each extension. Example file:

```xml

<?xml version="1.0" encoding="UTF-8"?>
```

When an extension uses debug port 8088, open Chrome at http://localhost:8088/ to load the debugger.

### Where are the Log Files

### PlugPlug Logs

Each application that supports CEP extensions writes log files containing useful debugging information. Log files are stored in these platform-specific locations:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The files follow these naming conventions:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file csxs8-ILST.log.
- CEP 6.1 and later releases: CEP`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file CEP8-ILST.log.

You can set logging levels to the following values:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at this location. Restart the application before the new log level takes effect:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.10`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.10.plist`

For example of macOS, in the terminal do:

    defaults write com.adobe.CSXS.10 LogLevel 6

Higher log levels can slow extension loading.

### CEPHtmlEngine Logs

In CEP 6.1 and later releases, CEPHtmlEngine also writes logs. A CEPHtmlEngine instance normally produces two log files: one for the browser process and one for the renderer process.
The files follow these naming conventions:

- Browser process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
- Renderer process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs as well.

### CEF Log

In CEP 4.0 - 6.0, Chromium Embedded Framework (CEF) inside CEPHtmlEngine also creates this log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

From CEP 6.1 onward, that log is folded into the CEPHtmlEngine log.

### Extension Folders

CEP recognizes 3 types of extension folders.

- Product extension folder. The location below is a suggestion, but each point product can choose its own folder. Third-party extensions cannot be installed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - macOS: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP searches first in the product extension folder, then in the system extension folder, and last in the per-user extension folder.
- Extensions are filtered out when they do not declare a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the latest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP uses the first match it finds.

Extension Installation:

- Host application installers should place extensions in product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be placed in either the system extension folder or the per-user extension folder.

Note:

- Paths for extension folders cannot contain the character '#' on Windows
  or Mac OSX, because CEF treats '#' as a delimiter.

### CEP HTML Test Extensions

CEP offers sample extensions for extension developers. Source code is available at:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x/Samples

### Extension Manifest
