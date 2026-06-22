# Cep 9.0 Html Extension Cookbook (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

# CEP 9 HTML Extension Cookbook

## Overview

This cookbook explains how to create CEP 9.0 HTML/JavaScript Extensions for Creative Cloud applications.
CSXS was the earlier project name before CS6; CEP (Common Extensibility Platform) became the name beginning with CS6. In this material, CEP and CSXS refer to the same project.

### CEP Extensions

CEP (formerly CSXS) Extensions add functionality to the Adobe point products where they execute. The applications load extensions through the PlugPlug Library architecture.
Beginning with CEP 4.0, developers can build extensions with HTML/CSS and JavaScript (ECMAScript 5).

### Extension Types

CEP supports the following extension types. Specify the extension type in manifest.xml.

- **Panel**
  - Panel behaves like any other application panel: it can dock, take part in workspaces, provide fly-out menus, and reopen at startup when it was open at shutdown.
- **ModalDialog**
  - ModalDialog opens a new extension window and requires the user to work only with that extension window until control returns to the host application. The user can interact with the host application only after closing the extension window.
- **Modeless**
  - Modeless opens a new extension window but does not require the user to focus interaction on that extension window.
- **Custom (Since CEP 5.0)**
  - Custom is used for invisible extensions. An invisible extension stays hidden and never appears throughout its lifetime. See "Invisible HTML Extensions" for details.

### Applications Integrated with CEP

The applications below support CEP HTML extensions.

| Application | Host ID | CC Version | CC 2014 Version | CC 2015 Version | CC 2015 Dot Version | CC 2017 Version | CC 2018 Version | CC 2019 Version | CC 2020 Version |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Photoshop | PHSP/PHXS | 14 (CEP 4) | 15 (CEP 5) | 16 (CEP 6) | 17.0.2 (CEP 7) | 18 (CEP 7) | 19 (CEP 8) | 20 (CEP 9) | 21 (CEP 9) |
| InDesign | IDSN | 9 (CEP 4) | 10 (CEP 5) | 11 (CEP 6) | - | 12 (CEP 7) | 13 (CEP 8) | 14 (CEP 9) | 15 (CEP 9) |
| InCopy | AICY | 9 (CEP 4) | 10 (CEP 5) | 11 (CEP 6) | - | 12 (CEP 7) | 13 (CEP 8) | 14 (CEP 9) | 15 (CEP 9) |
| Illustrator | ILST | 17 (CEP 4) | 18 (CEP 5) | 19 (CEP 6) | 20 (CEP 7) | 21 (CEP 7) | 22 (CEP 8) | 23 (CEP 9) | 24 (CEP 9) |
| Premiere Pro | PPRO | 7 (CEP 4) | 8 | 9 | 10.3 (CEP 6) | 11 (CEP 6) | 12 (CEP 8) | 13 (CEP 9) | 14 (CEP 9) |
| Prelude | PRLD | 2 (CEP 4) | 3 | 4 | 5.0.1 (CEP 6) | 6 (CEP 7) | 7 (CEP 8) | 8 (CEP 9) | 9 (CEP 9) |
| After Effects | AEFT | 12 | 13 | 13.5 | 13.8.1 (CEP 6) | 14 (CEP 6) | 15 (CEP 8) | 16 (CEP 9) | 17 (CEP 9) |
| Animate (Flash Pro) | FLPR | 13 | 14 (CEP 5) | 15 (CEP 6) | 15.2 (CEP 6.1) | 16 (CEP 6.1) | 18 (CEP 8) | 19 (CEP 9) | 20 (CEP 9) |
| Audition | AUDT | 6 | 7 | 8 | 9.2.1 (CEP 6) | 10 (CEP 6) | 11 | 12 (CEP 9) | 13 (CEP 9) |
| Dreamweaver | DRWV | 13 (CEP 4) | 15 (CEP 5) | 16 (CEP 6) | - | 17 (CEP 6.1) | 18 (CEP 8) | 19 (CEP 9) | 20 (CEP 9) |
| Muse | MUSE | 7.4 | - | 2015 | - | 2017 | 2018 | - | - |
| Bridge | KBRG | 6 | - | 6.3.1 | - | - | 8 (CEP 8) | 9 (CEP 9) | 10 (CEP 9) |
| Rush | RUSH | - | - | - | - | - | - | 1 (CEP 9) | 1.2.1 (CEP 9) |

### Chromium Embedded Framework (CEF)

The CEP HTML engine is built on Chromium Embedded Framework version 3 (CEF3). More information about CEF is available [here](https://bitbucket.org/chromiumembedded/cef/). CEP uses these versions:

| Component | CEP 6.1 and CEP 7.0 | CEP 8.0 | CEP 9.0 |
| --- | --- | --- | --- |
| CEF 3 | CEF 3 release branch 2272 Commit e8e1f98ee026a62778eb2269c8e883426db645ea | CEF 3 release branch 2987 | CEF 3 release branch 3163 |
| Chromium | 41.0.2272.104 | 57.0.2987.74 | 61.0.3163.91 |
| Node.js | IO.js 1.2.0 | Node.js 7.7.4 | Node.js 8.6.0 |
| CEF/Node integration | Node-WebKit 0.12.1 (nw.js) | Node-Webkit 0.21.5 | Node-Webkit 0.25 |
| v8 | - | - | 6.3.292.49 |

### Browser Features supported by CEP

### HTTP Cookie

CEP handles two cookie types:

- Session Cookies - temporary in-memory cookies that expire and disappear when the user closes the extension
- Persistent Cookies - cookies stored in the user's file system without an expiry date or validity interval

Persistent Cookies location:

- CEP 4.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cookies\`
  - macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cookies/`
- CEP 5.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cache/`
- CEP 6.x and later releases
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file. The file name format is Host`ID_H`ostVersion_ExtensionName, for example `PHXS_15`.0.0_com.adobe.extension1.

## Development and Debugging

### Migration from CEP 8 to CEP 9

    Extensions that already work in CEP 8 do not require migration. CEP 8 extensions should run in CEP 9 without changes.

Note:
Documentation makes the `<Size>` element mandatory in the manifest file, but through CEP 8 the engine still worked by using the maximum or minimum size supplied in the manifest. CEP 9 fixes that bug. Make sure the manifest defines the `<Size>` element.

### Migration from `CEP` 7 or lower to CEP 9

    Follow [Guide for migrating from CEP 7 to CEP 8](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#guide-for-migrating-from-cep-7-to-cep-8)

### Guide for migrating from CEP 7 to CEP 8

### Changes for Extensions Developers\*\*

Be aware that Chromium changes from version 41.0.2272.104 to 57.0.2987.74. Nodejs likewise changes from iojs 1.2.0 to 7.7.4. This migration guide reflects testing by the CEP team; if you find other issues, document them or share them with the CEP team.

### Chromium

These Chromium APIs have been removed:

- MediaStream.label, MediaStream.ended and MediaStream.stop()
- Remove getUserMedia() from Insecure Contexts
- SVG hasExtension() methods
- SVGSVGElement.pixelUnitToMillimeterX and friends
- Fetch API: Deprecate and remove Request.context
- Document.charset setter
- NPAPI plug-in support Range.compareNode() and Range.expand()
- WebAudio: Disallow setting AudioBufferSourceNode.buffer more than once
- Deprecate and remove SVGViewElement.viewTarget attribute
- Deprecate SVGSVGElement.viewport attribute
- Remove FileError interface
- Deprecate and remove: WebKit legacy window.postMessage() overload
- Deprecate and remove: 'results' attribute for <input type=search>

### NodeJS

The changes listed below apply when --enable-nodejs is passed as the CEFCommandline parameter.

### New Symbols in the global context

When nodejs is enabled, CEP 8 and later versions add the `cep_node` symbol to the global context. `cep_node` contains these node-specific symbols:

> cep_node members
> Buffer, global, process and require

### Accessing nodejs APIs in iframe

Nodejs symbols are absent from an iframe's global context; within an iframe context, the only access path to nodejs APIs is through cep_node. With --mixed-context enabled, both global node symbols and cep_node exist in the iframe global context because browser and node run in the same context. Existing code that checks for or uses nodejs symbols in an iframe global context may have worked in the previous release, but in the current release it breaks under separate context mode.

### JS Lib Break due to node symbols (possible for many other libraries)

The newly integrated nodejs adds "module" and "exports" to the global context. Many libraries, including JQuery, decide how to boot based on whether a "module" symbol exists in global scope. For example, JQuery uses this code during startup:

> **JQuery startup code**

```js
if (typeof module === "object" && typeof module.exports === "object") {
  // set jQuery in `module`
} else {
  // set jQuery in `window`
}
```

When CEP's browser runs this code with nodejs enabled, JQuery loads into module context rather than Browser context. That can break extension startup. Use the code below for these cases:

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

If the extension does not use "module" and "exports", the last 2 lines of this code can be omitted.
This handling mirrors the earlier pattern for nodejs's require during imports. If require is already handled, keep using the same approach.

### require path is absolute instead of relative

Nodejs 7.7.4 and higher require paths to use absolute paths. If nodejs require loads a js file, replace the relative path with an absolute one. For eg. replace:

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

On macOS, the index passed to substring changes.

> **macOS require absolute path for nodejs**

```js
var loc = window.location.pathname;
var dir = decodeURI(loc.substring(0, loc.lastIndexOf("/")));
require(dir + "/js/lib/jquery.js");

or;

require(__dirname + "/js/lib/jquery.js");
```

### Contexts in CEP

At startup, CEP defines several default contexts:

1.  **Browser Context**

    This default JS context belongs to CEP's browser engine. In addition to Browser objects, CEP file system APIs are available here.

2.  **Native Context**

    This extended context uses the "cep" object to provide file system access through CSInterface.js.

3.  **Node Context** (when the --enable-nodejs command line switch enables nodejs)

        1. Separate Context
        2. Mixed Context

4.  **Host app context**

    The evalscript API accesses this context.

---

**Separate Context Mode**

CEP creates this context when started with --enable-nodejs and without --mixed-context. In that configuration, the following symbols are present:

1.  cep_node: A global symbol shared across frames that provides access to node symbols. Changes made to this symbol are visible in every frame context. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used only from the main frame, which is the current document. New frames created by that document do not receive those symbols in their context. This differs from CEP 7 behavior, where node globals could be accessed in all frames.

The following representation shows the context layout:

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

CEP creates this context when started with both --enable-nodejs and --mixed-context. In that configuration, these symbols are present:

1.  cep_node: A local symbol available within each frame that provides access to node symbols. Changes made to this symbol are not visible in other frames. This symbol was introduced in CEP 8.

2.  node globals: [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html) can be used from every frame, and each frame receives its own instance.

The following representation shows the context layout:

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

CEP HTML Extensions can be developed on Windows and macOS. For successful CSXS extension development, set up the development machine with:

- Adobe Creative Cloud applications with CEP HTML extension support.
- HTML Extension Builder (useful but not mandatory).
- Adobe ExtendScript Tool Kit (available as an optional install).
- Chrome browser for debugging workflows.

### HTML Extension Builder

HTML Extension Builder is an Eclipse-based toolset for building and debugging HTML extensions. Extension Builder 3 is available at http://labs.adobe.com/technologies/extensionbuilder3/.

### Signing extensions

- Before extension signing, acquire or create the certificate file. Configurator and Adobe Exchange Packer can generate certificates. After signing in, developers can find the full details [here](https://www.adobeexchange.com/resources/7).
- A HTML extension can be signed with three available tools.
- [Extension Builder 3](http://labs.adobe.com/downloads/extensionbuilder3.html)
- CC Extensions Signing Toolkit (also on above labs web site)
  - Example of using CC Extension signing toolkit: ccextensionswin64.exe -sign "d:\Adobe Layer Namer\Adobe Layer Namer\"_(input extension path)_ d:\AdobeLayerNamer.zxp _(output zxp path)_ d:\sign.p12 _(certificate path)_ 1 _(certificate password)_ Adobe Exchange Packer (please sign in so that you can see it.)
- [Adobe Exchange Packer](http://www.adobeexchange.com/resources) (please sign in so that you can see it.)

### Debugging Unsigned Extensions

During active development, if HTML Extension Builder is not driving the debug workflow and signing should be skipped, disable signature checking by changing the CSXS preference properties file at this location:

- Win: In regedit, open `HKEY_CURRENT_USER`/Software/Adobe/CSXS.9 and create PlayerDebugMode as a "string" entry set to "1".
- Mac: Run `defaults write com.adobe.CSXS.9 PlayerDebugMode 1` in Terminal. The plist also resides at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.9.plist.

With those entries set, host applications show debug extensions. The `CSXS.9` value assumes the target extension uses CEP 9; when targeting an earlier CEP release, change `9` to the matching version number.

### Special notes for macOS 10.9 and higher

Beginning in macOS 10.9, Apple caches plist files. Edits to plist files are ignored until that cache refreshes, and the timing of that refresh is not predictable. Use either of these methods to force the change to apply:

- Terminate the **cfprefsd** process; it restarts automatically, and the update
  is then picked up.
- Restart macOS, or sign out of the current user and sign back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)

### Remote Debugging

Remote debugging for HTML extensions is supported by CEP beginning with version 5.0.

- Add a `.debug` file in the extension root directory, for example `Test_Extension\.debug`. The `.debug` file lists remote debug ports. Developers must supply this file and choose valid debug ports because remote debugging and dev tools both depend on it.
- The ".debug" file name has special handling on Windows and macOS, so create it from the command line.
  - On Windows, create an empty file with "copy con .debug", then press "Ctrl+Z".
  - On macOS, create the empty file with "touch .debug".
- Port must be greater than or equal to 1024 and less than 65535; outside that range, remote debugging and dev tools fail.
- A single extension bundle can include more than one extension. Use the `.debug` file to assign a debug port to each extension. Example file:

```xml

<?xml version="1.0" encoding="UTF-8"?>
```

When an extension is loaded with debug port 8088, Chrome can open the debugger at http://localhost:8088/.

### Where are the Log Files

### PlugPlug Logs

Each application that supports CEP extensions creates log files that help with debugging. The log files are stored in these platform-specific locations:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS`

The filenames follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. An Illustrator PlugPlug example is csxs8-ILST.log.
- CEP 6.1 and later releases: CEP`<versionNumber>`-`<HostID>`.log. An Illustrator PlugPlug example is CEP8-ILST.log.

Logging can be set to these levels:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at one of these paths, then restart the application so the new logging level applies:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.9`
- Mac: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.9.plist`

For example, on macOS, run this in Terminal:

defaults write com.adobe.CSXS.9 LogLevel 6

Higher log levels can slow extension loading.

### CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. A typical CEPHtmlEngine instance writes two files: one for the browser process and one for the renderer process.
The naming scheme is:

- Browser process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
- Renderer process: CEPHtmlEngine`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls those files too.

### CEF Log

For CEP 4.0 - 6.0, CEPHtmlEngine also produces a Chromium Embedded Framework (CEF) log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

Starting with CEP 6.1, that log is folded into the CEPHtmlEngine log.

### Extension Folders

CEP recognizes 3 extension-folder types.

- Product extension folder. This path is suggested, although each point product may choose its own location. Third-party extensions cannot be placed here.

  - ${PP}/CEP/extensions (PPs may use different folder.)

- System extension folder

  - Win(x86): `C:\Program Files\Common Files\Adobe\CEP\extensions`
  - Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
  - Mac: `/Library/Application Support/Adobe/CEP/extensions`

- Per-user extension folder
  - Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
  - Mac: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP choose the extension to load?

- Search order is product extension folder first, then system extension folder, then per-user extension folder.
- Any extension missing a compatible host application ID and version is rejected.
- When two extensions share an extension bundle ID, CEP loads the higher version.
- When extension bundle ID and version both match, CEP uses the one whose manifest file has the newest modification date.
- If bundle ID, version, and manifest modification date are all identical, CEP loads the first matching extension it finds.

Extension Installation:

- Host application installers should place extensions in the product extension folder.
- Extensions installed through https://creative.adobe.com/addons should be installed in the system extension folder or the per-user extension folder.

Note:

- Do not use character '#' in an extension folder path on Windows or macOS,
  because CEF treats '#' as a delimiter.

### CEP HTML Test Extensions

CEP includes sample extensions for extension developers. The source code is available at:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_9`.x/Samples

### Extension Manifest

Every extension needs a manifest.xml file, which supplies the configuration information for a CEP extension. `ExtensionManifest` is the root element in manifest.xml, and `Extensions`, `ExtensionList`, and `DispatchList` are the three child elements under that root.

### Extension Manifest XSD

HTML extensions must target version 5.0 or newer. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_7`.x (No elements change from CEP 7)

Use these steps to verify that an extension manifest matches the latest schema:

1.  Download the latest schema (ExtensionManifest\_`<version>`.xsd). The schema is unchanged in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Navigate [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload both the schema and the current ExtensionManifest from an actual build so the versions are validated.
4.  Hit validate

### Important Manifest Change for CEP 5.0 Extensions

Use the correct point product versions. Here is an example.

```

```

This supports Photoshop version 15.0 through 15.9, including 15.9. With the syntax below, releases through but excluding 15.9 are supported:

```

```

Use the correct CEP version.

```

```

### CEP 7.0 Extension Manifest Change

In CEP 7.0 manifest files, a particular extension in the bundle can now have its own `HostList`. For example, the following is treated as the "default" `HostList`:

```
...
  ...
...
```

A per-extension custom `HostList` can also be declared, as shown here:

```
...
  ...
    ...
  ...
  ...
```
