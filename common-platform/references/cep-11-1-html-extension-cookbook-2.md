# Cep 11.1 Html Extension Cookbook (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

CEP provides sample extensions for extension developers. Source code is available at:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x/Samples

### Extension Manifest

Every extension requires a manifest.xml file, which supplies the configuration information for the CEP extension. `ExtensionManifest` is the root element of manifest.xml. The `ExtensionManifest` root has three child elements: `Extensions`, `ExtensionList`, and `DispatchList`.

### Extension Manifest XSD

HTML extensions must use version 5.0 or later. The XSD is in this GitHub repo:
https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_7`.x (same elements as CEP 7)

Use this procedure to verify that the extension manifest matches the latest schema:

1.  Download the latest schema (ExtensionManifest\_`<version>`.xsd). Note that the schema did not change in CEP 8, so use https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_7`.x/ExtensionManifest_v_7_0.xsd for CEP 8 and 9 too.
2.  Open [here](http://tools.decisionsoft.com/schemaValidate/)
3.  Upload the schema along with the latest ExtensionManifest from a real build, so the versions can be validated.
4.  Select validate

### Important Manifest Change for CEP 5.0 Extensions

Use correct point product versions. Example:

```

```

This supports Photoshop version 15.0 through 15.9 inclusive. With the syntax below, releases up to 15.9 are supported, but 15.9 itself is excluded.

```

```

Use the correct CEP version as well.

```

```

### CEP 7.0 Manifest HostList Changes

CEP 7.0 manifest files can now use a `HostList` that is specific to an extension in the bundle. For example, this works as the default `HostList`:

```
...
  ...
...
```

A custom `HostList` can also be specified per extension, as shown here:

```
...
  ...
    ...
  ...
  ...
```

`HostLists` under extension tags override the default `HostList` under the execution environment tag. Adding `HostList` nodes without child nodes effectively disables that extension for every host application, and this behavior is intentional. Do not specify both `HostList` tags and `Host` attributes in `DispatchInfo` tags for each extension; use one approach. Combining both is likely to produce unexpected behavior. The `Host` attribute remains only for backward compatibility. New extensions should use `HostList` tags instead of the Host attribute.

### Extension Size

In the extension manifest, declare size, max size, and min size as needed. Size is required, while max size and min size are optional.

A modal or modeless dialog can be resized only when max size and min size differ. Otherwise, it is un-resizable. CEP changes the cursor at the dialog border to indicate whether resizing is available.

```

```

### Customize Extension Menu

This is supported only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in the manifest. In this example, the Adobe Add-ons extension appears under the Windows main menu rather than under the Windows extensions menu. Change the Placement attribute value in `<menu/>` to use a different location for the extension.

```
<?xml version="1.0" encoding="UTF-8"?>
    ...
             ...
                ...
...
```

### High DPI Panel Icons

Panel extensions may use high DPI icons when high DPI display mode is active. Configure those icons in the extension manifest.

```

```

Package the normal icon files, IconLight.png and IconDark.png, together with the high DPI icon files, IconLight@2X.png and IconDark@2X.png, in the extension.

Host applications use these assets:

- Normal display: IconLight.png and IconDark.png
- 200% high DPI display: IconLight@2X.png and IconDark@2X.png

@2X.ext is the industry standard. See https://developer.apple.com/library/ios/qa/qa1686/_index.html for more details.

Note: Photoshop supports \_x2.ext format.

### Dialog Size based on Screen Size

CEP dialog size can be expressed as a percentage of screen size. Example:

```
    ...
        ...
```

### Shortcut Keys for HTML Extensions

(Since 5.2)

Starting in CEP 5.2, HTML extensions can handle shortcut keys. When focus is inside the HTML extension, these shortcuts are processed by the extension.

| Windows Keys | macOS Keys | Function |
| --- | --- | --- |
| Ctrl + A | Command + A | Select All |
| Ctrl + C | Command + C | Copy |
| Ctrl + V | Command + V | Paste |
| Ctrl + X | Command + X | Cut |

Point products handle the remaining shortcuts; Ctrl + N, for example, creates a new document.

## CEP JavaScript APIs

### CEP JavaScript Libraries

CEP JavaScript Libraries are the JavaScript-side counterpart to the Flex CSXS Library, exposing APIs for application data and CEP data.

- CSInterface.js
- Vulcan.js

Download location: https://github.com/Adobe-CEP/CEP-Resources/tree/master/`CEP_10`.x

Include these JavaScript files in the HTML extension to use them.

### API version

CEP JavaScript APIs evolve with each CEP release, while maintaining backward compatibility. Newly added APIs receive a version tag such as "Since x.x.x" in their API comments to identify the CEP version where they became available.

Compare that version tag with the CEP version embedded in the Adobe Product you are using to confirm that the desired API is available. Use `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated by the Adobe Product. This API is available only since 4.2.0. An error that says `getCurrentApiVersion` is undefined means the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version integrated by the Adobe product.

### CEP Events

CEP can send and receive events within one extension, among extensions in the same application, and among extensions in different applications. Because all extensions share a common communication layer and event data format, CEP events allow extension-to-extension communication. They can also communicate with native code when point products call `PlugPlugAddEventListener/PlugPlugDispatchEvent` as needed.

JavaScript provides `dispatchEvent/addEventListener/removeEventListener` APIs for dispatching events and listening for them. The sections below cover the CEP event data format and structure, the dispatch and listener APIs, and JavaScript sample code.

### CSEvent

Here, CSEvent means CEP Event. The CSEvent (CEP Event) data structure is:

```
/**
 * Class CSEvent.
 * You can use it to dispatch a standard CEP event.
 *
 * @param type	          Event type.
 * @param scope 	  The scope of event, can be "GLOBAL" or "APPLICATION".
 * @param appId 	  The unique identifier of the application that generated the event. Optional.
 * @param extensionId The unique identifier of the extension that generated the event. Optional.
 *
 * @return CSEvent object
 */
function CSEvent(type, scope, appId, extensionId)
{
    this.type = type;
    this.scope = scope;
    this.appId = appId;
    this.extensionId = extensionId;
};
```

Create a `CSEvent` object, then dispatch it with `CSInterface.dispatchEvent`. Its properties are also available in a callback registered with `CSInterface.addEventListener`. See the `addEventListener/dispatchEvent` section below for details.

### Listen for and Dispatch CSEvent

JavaScript exposes `dispatchEvent/addEventListener/removeEventListener` APIs to dispatch and listen for CSEvent.

### addEventListener

Definition of addEventListener follows. See CSInterface.js for additional information:

```
 /**
 * Registers an interest in a CEP event of a particular type, and
 * assigns an event handler.
 * The event infrastructure notifies your extension when events of this type occur,
 * passing the event object to the registered handler function.
 *  * @param type     The name of the event type of interest.
 * @param listener The JavaScript handler function or method.
 * @param obj      Optional, the object containing the handler method, if any.
 *         Default is null.
 */
CSInterface.prototype.addEventListener = function(type, listener, obj)
```

CSInterface.addEventListener supports both named and anonymous callback functions.

- Example using a named callback function with `CSInterface.addEventListener`.

```
function callback(event)
{
    console.log(“type=” + event.type + “, data=” + event.data);
}

var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, callback); //invoke the function
```

- Example using an anonymous callback function with
  `CSInterface.addEventListener`.

```
var csInterface = new CSInterface();
csInterface.addEventListener(“com.adobe.cep.test”, function (event)
{
     console.log(“type=” + event.type + “, data=” + event.data);
}
); // Anonymous function is the second parameter
```

event.data can be an object; an object may be used as event.data.
