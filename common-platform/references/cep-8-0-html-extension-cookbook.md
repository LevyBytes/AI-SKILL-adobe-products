# Cep 8.0 Html Extension Cookbook (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

# CEP 8 HTML Extension Cookbook

## Overview

This cookbook explains how to build CEP 8.0 HTML/JavaScript Extensions for Creative Cloud applications.
CSXS was the name used before CS6; beginning with CS6, the newer name is CEP (Common Extensibility Platform). In this cookbook, CEP and CSXS refer to the same project.

### CEP Extensions

CEP (formerly CSXS) Extensions add functionality to the Adobe point products that host them. Applications load extensions through the PlugPlug Library architecture.
Starting with CEP 4.0, extensions can be developed with HTML/CSS and JavaScript (ECMAScript 5).

### Extension Types

CEP supports the following extension types. Declare the extension's type in manifest.xml.

- **Panel**
  - A Panel behaves like a normal application panel: it can dock, participate in workspaces, provide fly-out menus, and reopen at startup when it was open at shutdown.
- **ModalDialog**
  - A Modal Dialog opens a new extension window and requires the user to work only in the extension window until it closes. The host application becomes interactive again after the extension window closes.
- **Modeless**
  - A Modeless Dialog opens a new extension window without requiring the user to focus interaction on that window.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. An invisible extension stays hidden and does not become visible at any point in its life cycle. See "Invisible HTML Extensions" for more detail.

### Applications Integrated with CEP

These applications support CEP HTML extensions.

| Application | Host ID | CC Version | CC 2014 Version | CC 2015 Version | CC 2015 Dot Version | CC 2017 Version | CC 2018 Version |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 14 (CEP 4) | 15 (CEP 5) | 16 (CEP 6) | 17.0.2 (CEP 7) | 18 (CEP 7) | 19 (CEP 8) |
| InDesign | IDSN | 9 (CEP 4) | 10 (CEP 5) | 11 (CEP 6) | - | 12 (CEP 7) | 13 (CEP 8) |
| InCopy | AICY | 9 (CEP 4) | 10 (CEP 5) | 11 (CEP 6) | - | 12 (CEP 7) | 13 (CEP 8) |
| Illustrator | ILST | 17 (CEP 4) | 18 (CEP 5) | 19 (CEP 6) | 20 (CEP 7) | 21 (CEP 7) | 22 (CEP 8) |
| Premiere Pro | PPRO | 7 (CEP 4) | 8 | 9 | 10.3 (CEP 6) | 11 (CEP 6) | 12 (CEP 8) |
| Prelude | PRLD | 2 (CEP 4) | 3 | 4 | 5.0.1 (CEP 6) | 6 (CEP 7) | 7 (CEP 8) |
| After Effects | AEFT | 12 | 13 | 13.5 | 13.8.1 (CEP 6) | 14 (CEP 6) | 15 (CEP 8) |
| Animate (Flash Pro) | FLPR | 13 | 14 (CEP 5) | 15 (CEP 6) | 15.2 (CEP 6.1) | 16 (CEP 6.1) | 18 (CEP 8) |
| Audition | AUDT | 6 | 7 | 8 | 9.2.1 (CEP 6) | 10 (CEP 6) | 11 |
| Dreamweaver | DRWV | 13 (CEP 4) | 15 (CEP 5) | 16 (CEP 6) | - | 17 (CEP 6.1) | 18 (CEP 8) |
| Muse | MUSE | 7.4 | - | 2015 | - | 2017 | 2018 |
| Bridge | KBRG | 6 | - | 6.3.1 | - | - | 8 (CEP 8) |

### Chromium Embedded Framework (CEF)

The CEP HTML engine is built on Chromium Embedded Framework version 3 (CEF3). More CEF information is available [here](https://bitbucket.org/chromiumembedded/cef/). CEP uses these versions:

| Component | CEP 6.1 and CEP 7.0 | CEP 8.0 |
| --- | --- | --- |
| CEF 3 | CEF 3 release branch 2272 Commit e8e1f98ee026a62778eb2269c8e883426db645ea | CEF 3 release branch 2987 |
| Chromium | 41.0.2272.104 | 57.0.2987.74 |
| Node.js | IO.js 1.2.0 | Node.js 7.7.4 |
| CEF/Node integration | Node-WebKit 0.12.1 (nw.js) | Node-Webkit 0.21.5 |

### Browser Features supported by CEP

### HTTP Cookie

CEP supports two cookie categories:

- Session Cookies - Temporary in-memory cookies that expire and disappear when the user closes the extension.
- Persistent Cookies - Cookies stored on the user's file system without an expiry date or validity interval.

Persistent Cookies location:

- CEP 4.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cookies\`
  - Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cookies/`
- CEP 5.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cache/`
- CEP 6.x and later releases
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - Mac: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file. The file name uses Host`ID_H`ostVersion_ExtensionName, such as `PHXS_15`.0.0_com.adobe.extension1.

## Development and Debugging

### Guide for migrating from CEP 7 to CEP 8

### Changes for Extensions Developers

Be aware that chromium is moving from 41.0.2272.104 to 57.0.2987.74. nodejs also changes from iojs 1.2.0 to 7.7.4. This migration guide reflects CEP team testing; if additional issues are found, document them or share them with the CEP team.

### Chromium

These Chromium APIs have been removed:

- MediaStream.label, MediaStream.ended and MediaStream.stop()
- getUserMedia() from Insecure Contexts was removed
- SVG hasExtension() methods
- SVGSVGElement.pixelUnitToMillimeterX and friends
- Fetch API: Request.context was deprecated and removed
- Document.charset setter
- NPAPI plug-in support Range.compareNode() and Range.expand()
- WebAudio: setting AudioBufferSourceNode.buffer more than once is disallowed
- SVGViewElement.viewTarget attribute was deprecated and removed
- SVGSVGElement.viewport attribute was deprecated
- FileError interface was removed
- WebKit legacy window.postMessage() overload was deprecated and removed
- 'results' attribute for <input type=search> was deprecated and removed

### NodeJS

The changes below apply when --enable-nodejs is passed as the CEFCommandline parameter.

### New Symbols in the global context

When nodejs is enabled, CEP 8 adds the extra global symbol cep_node. cep_node contains these node-specific symbols:

> cep_node members
> Buffer, global, process and require

### Accessing nodejs APIs in iframe

nodejs symbols are not available directly in an iframe's global context; use cep_node to access nodejs APIs from that context. When --mixed-context is enabled, both global node symbols and cep_node exist in the iframe's global context because browser and node execute in one context. Code that checked or used nodejs symbols in iframe's global context may have worked in the previous release, but in the current release it breaks under separate context mode.

### JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs layer adds "module" and "exports" to the global context. Many libraries, including JQuery, choose their boot path based on whether "module" is present globally. For example, JQuery includes this boot-time code:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

Running this code in the CEP browser while nodejs is enabled causes JQuery to load in module context rather than Browser context. That can break extension startup. Use this code for those cases:

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

If the extension does not use "module" and "exports", the last 2 lines of the preceding code can be omitted.
This follows the same pattern used when imports already handle nodejs require. If require handling is already in place, keep that approach.

### require path is absolute instead of relative

Nodejs 7.7.4 requires absolute paths. If a js file is loaded through nodejs require, replace a relative path with an absolute one. For eg. replace:

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

On Mac, the substring index changes:

> **Mac require absolute path for nodejs**

```js
var loc = window.location.pathname;
var dir = decodeURI(loc.substring(0, loc.lastIndexOf("/")));
require(dir + "/js/lib/jquery.js");

or;

require(__dirname + "/js/lib/jquery.js");
```

### Contexts in CEP

CEP defines several contexts at startup. These are the defaults:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. Besides Browser objects, CEP file system APIs are available here.

2.  **Native Context**

    This extended context uses the "cep" object to expose file system access through CSInterface.js.

3.  **Node Context** (When nodejs is enabled through --enable-nodejs command line switch)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

This context is reached through the evalscript API.

---

**Separate Context Mode**

This context is created when the command line switch --enable-nodejs is used and --mixed-context is **not** passed. When CEP starts in this mode, these symbols are present:

1.  cep_node: This global symbol is shared across frames and provides access to node symbols. Changes made to it are reflected in every frame context. This symbol was added in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used only in the main frame, meaning the current document. New frames created inside the current document do not receive these symbols in their own context. This differs from CEP 7 frame behavior, where node globals could be accessed from all frames.

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

This context is created with the command line switches --enable-nodejs and --mixed-context. When CEP starts with this context, it exposes these symbols:

1.  cep_node: This local symbol exists inside each frame and provides access to node symbols. Changing it in one frame does not affect other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) are available in every frame, with a unique copy for each frame.

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

CEP HTML Extensions can be built on Windows and Mac. To develop CSXS extensions successfully, install these applications on the development machine:

- Adobe Creative Cloud applications that support CEP HTML extensions.
- HTML Extension Builder (useful, but optional).
- Adobe ExtendScript Tool Kit (available as an optional install).
- Chrome browser for debugging workflows.

### HTML Extension Builder

HTML Extension Builder is an Eclipse-based tool set for creating and debugging HTML extensions. Extension Builder 3 is available [here](http://labs.adobe.com/technologies/extensionbuilder3/).

### Signing extensions

- Before extensions are signed, a certificate file must be obtained or created. Configurator and Adobe Exchange Packer can generate certificates. After signing in, developers can find the details [here](https://www.adobeexchange.com/resources/7).
- A HTML extension can be signed with three tools.
- [Extension Builder 3](http://labs.adobe.com/downloads/extensionbuilder3.html)
- CC Extensions Signing Toolkit (also on above labs web site)
  - Example using CC Extension signing toolkit: ccextensionswin64.exe -sign "d:\Adobe Layer Namer\Adobe Layer Namer\"_(input extension path)_ d:\AdobeLayerNamer.zxp _(output zxp path)_ d:\sign.p12 _(certificate path)_ 1 _(certificate password)_ Adobe Exchange Packer (please sign in so that you can see it.)
- [Adobe Exchange Packer](http://www.adobeexchange.com/resources) (please sign in so that you can see it.)

### Debugging Unsigned Extensions

During development without HTML Extension Builder debug workflows, signature checks can be bypassed by editing the CSXS preference properties file. Use these locations:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type "string" with the value of "1".
- Mac: In the terminal, type: `defaults write com.adobe.CSXS.8 PlayerDebugMode 1` (The plist is also located at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.8.plist)

With these entries, host applications display debug extensions. CSXS.8 is used here because the example assumes development for CEP 8. For an extension targeting an earlier CEP version, change 8 to the matching version number.

### Special notes for Mac 10.9 and higher

Starting with Mac 10.9, Apple caches plist files. Changes made to plist files do not take effect until that cache refreshes, and the refresh timing is periodic and not predictable. Use one of these methods to make the changes active:

- Kill the **cfprefsd** process. It restarts automatically and picks up
  the plist update.
- Restart your Mac, or log the current user out and back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)

### Remote Debugging

CEP supports remote debugging for HTML extensions starting with 5.0.

- Create a ".debug" file in the extension root directory, for example `Test_Extension\.debug`. The .debug file stores remote debug ports. Developers must create it and choose valid debug ports because both remote debugging and dev tools depend on it.
- The ".debug" file name is special on both Windows and Mac, so create it from the command line.
  - On Windows, create an empty file with "copy con .debug" and "Ctrl+Z".
  - On Mac, create an empty file with "touch .debug".
- Port values must be greater than or equal to 1024 and less than 65535; otherwise remote debugging and dev tools fail.
- A single extension bundle can contain multiple extensions, and the .debug file can assign debug ports per extension. Example file:

```xml

<?xml version="1.0" encoding="UTF-8"?>
```

When an extension uses debug port 8088, open http://localhost:8088/ in Chrome to load the debugger.

### Where are the Log Files

### PlugPlug Logs

Applications that support CEP extensions generate log files containing useful debugging information. Locations are platform-specific:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS`

PlugPlug log names follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator creates csxs8-ILST.log.
- CEP 6.1 and later releases: CEP`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator creates CEP8-ILST.log.

Logging levels can be set to these values:

- 0 - Off (logging disabled)
- 1 - Error (default level)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at the relevant location below. Restart the application so the new log level is applied:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8`
- Mac: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.8.plist`

For Mac, run this in the terminal:

    defaults write com.adobe.CSXS.8 LogLevel 6

### CEPHtmlEngine Logs

CEPHtmlEngine creates logs in CEP 6.1 and later. Each CEPHtmlEngine instance usually writes two log files: one for the browser process and one for the renderer process.
CEPHtmlEngine log names use these patterns:

- Browser process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
- Renderer process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs too.

### CEF Log

For CEP 4.0 - 6.0, the Chromium Embedded Framework (CEF) inside CEPHtmlEngine writes an additional log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

In CEP 6.1 and later, that log is folded into the CEPHtmlEngine log.

### Extension Folders

CEP supports 3 extension folder types.

- Product extension folder. The path below is a suggestion; each point product can choose its own folder. Third party extensions cannot be installed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x86): `C:\Program Files\Common Files\Adobe\CEP\extensions`
  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - Mac: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - Mac: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP searches the product extension folder first, then the system extension folder, and finally the per-user extension folder.
- Extensions are filtered out when they lack a suitable host application ID and version.
- When two extensions share the same extension bundle ID, CEP loads the one with the higher version.
- When two extensions share the same extension bundle ID and version, CEP loads the one whose manifest file has the newest modification date.
- When two extensions share the same extension bundle ID, version, and manifest modification date, CEP loads the first one it finds.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should install to either the system extension folder or the per-user extension folder.

Note:

- Character '#' cannot appear in extension folder paths on Windows
  or Mac OSX, because CEF interprets '#' as a delimiter.

### CEP HTML Test Extensions

CEP provides sample extensions for extension developers. Source code is available at:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_8`.x/Samples

### Extension Manifest

Every extension requires a manifest.xml file, which supplies the configuration details for a CEP extension. `ExtensionManifest` is the root element of manifest.xml. The `ExtensionManifest` root element has three children: `Extensions`, `ExtensionList`, and `DispatchList`.

### Extension Manifest XSD

HTML extensions must target version 5.0 or later. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_8`.x

To verify that an extension manifest matches the latest schema, use these steps:

1.  Download the latest schema (ExtensionManifest\_`<version>`.xsd). The schema did not change in CEP 8, so also use https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/ExtensionManifest_v_7_0.xsd for CEP 8.
2.  Open [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload the schema together with the latest ExtensionManifest from a real build, so version validity is checked.
4.  Select validate

### Important Manifest Change for CEP 5.0 Extensions

Use correct point product versions. Here is an example.

```xml

```

This supports Photoshop version 15.0 through 15.9, inclusive. With the following syntax, releases up to 15.9 are supported, but 15.9 itself is excluded.

```xml

```

Use the correct CEP version.

```xml

```

### Important Manifest Change for CEP 7.0 Extensions

For CEP 7.0 manifest files, a `HostList` may be scoped to one extension in the bundle. The following counts as the "default" `HostList`:

```xml
...
  ...
...
```

A custom `HostList` can also be set per extension, as shown here:

```xml
...
  ...
    ...
  ...
  ...
```

`HostLists` under extension tags take precedence over the default `HostList` under the execution environment tag. Adding `HostList` nodes without child nodes effectively disables that extension for all host applications, and that behavior is intentional. Do not specify both `HostList` tags and `Host` attributes in `DispatchInfo` tags for an extension; choose only one form. Using both is likely to produce unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags rather than the Host attribute.

### Extension Size

The extension manifest can define size, max size, and min size. The size value is required, while max size and min size can be omitted.

Modal and modeless dialogs become resizable when max size differs from min size; otherwise they are not resizable. CEP changes the cursor over the dialog border to indicate whether resizing is available.

```xml

```

### Customize Extension Menu

This is supported only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in manifest. In this example, the Adobe Add-ons extension appears under the Windows main menu instead of under the Windows extensions menu. To place the extension elsewhere, change the value of the Placement attribute in `<menu/>`.
