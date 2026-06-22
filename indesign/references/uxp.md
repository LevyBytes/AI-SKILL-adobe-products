# Entry Points, Host Information, Key Value Storage, Persistent File Storage ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EntryPointsError; require('uxp').host; uxp; require('uxp').storage.secureStorage; require('uxp').storage.domains — domains(); Plugin Manager; require('uxp').shell; require('uxp').userInfo; require('uxp').versions; require('uxp').xmp; XMP; XMP Classes.

## EntryPointsError

Thrown when `entrypoints.setup` fails or when it is called more than once.

## require('uxp').host

Provides useful details about the operating environment where the plugin is running.
`require("uxp").host`

### name ⇒ `string`

**Returns**: `string` - host application's name; for example, Photoshop reports "photoshop".

### version ⇒ `string`

**Returns**: `string` - host application version, such as "20.0.0".

### uiLocale ⇒ `string`

**Returns**: `string` - five-character UI locale for the host application, such as "en_US".

## uxp

- [Entry Points](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/entry-points/index.md)
- [Host Information](uxp.md)
- [Key-Value Storage](uxp.md)
- [Persistent File Storage](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/index.md)
- [Plugin Manager](uxp.md)
- [User Information](uxp.md)
- [Versions](uxp.md)
- [XMP](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/getting-started/xmp.md)
- [shell](uxp.md)

## require('uxp').storage.secureStorage

SecureStorage gives each plugin protected storage for sensitive data. A plugin supplies a key-value pair; SecureStorage encrypts the value, then records the key beside the encrypted value. When code asks for the value by using its associated key, SecureStorage decrypts it before returning it. The key itself is not encrypted, so the cryptographic operation does not protect that key.

Important SecureStorage caveats:

1. SecureStorage is the wrong place for data that must stay hidden from the current user. Protection is tied to the current user's account credentials, so encrypted data may still be decrypted under that user's privileges.
2. Various events can remove or make SecureStorage data unusable. For example, uninstalling the host application may delete the secure store. A user might also damage the cryptographic information used by secure storage by accident, which can make data unrecoverable even when the secure storage itself remains. Treat SecureStorage as cache rather than durable storage. Plugins should be able to recreate any SecureStorage data after loss.

### length : `number`

**Read only**
Total item count currently held in secure storage.

### setItem(key, value)

After encrypting the value, secure storage records it together with the key.

**Returns**: `Promise<void>` Promise resolving after the value has been saved; it rejects when the value is empty or storage does not complete.  
**Throws**:

- `TypeError` Thrown when either `key` or `value` is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key used to store the value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Value associated with the key. |

### getItem(key)

After decrypting data from secure storage, retrieves the value for the supplied key.

**Returns**: `Promise<Uint8Array>` Promise resolving to a `Uint8Array`  
**Throws**:

- `TypeError` Thrown when `key` is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be retrieved |

### removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` Promise resolving after the value associated with the key is removed; it rejects if that value cannot be removed or is not found.  
**Throws**:

- `TypeError` Thrown when `key` is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be removed |

### key(index)

Gets the key saved at the supplied index.

**Returns**: `number` - Key saved at the supplied index.

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer index for the key to read |

### clear()

Clears every value from secure storage.

**Returns**: `Promise<void>` Promise resolving after all items are cleared; it rejects if no item exists to clear or the clear operation fails.

## require('uxp').storage.domains — domains()

Locations available for file-picker display.

### require('uxp').storage.domains — userDesktop : `Symbol`

Desktop folder for the user.

### require('uxp').storage.domains — userDocuments : `Symbol`

Documents folder for the user.

### require('uxp').storage.domains — userPictures : `Symbol`

Pictures folder or library for the user.

### require('uxp').storage.domains — userVideos : `Symbol`

Videos / movies folder or library for the user.

### require('uxp').storage.domains — userMusic : `Symbol`

Music folder or library for the user.

### require('uxp').storage.domains — appLocalData : `Symbol`

Application-local data area.

### require('uxp').storage.domains — appLocalLibrary : `Symbol`

Application-local library area.

### require('uxp').storage.domains — appLocalCache : `Symbol`

Application-local cache directory (not guaranteed to persist).

### require('uxp').storage.domains — appLocalShared : `Symbol`

Application-local shared data location

### require('uxp').storage.domains — appLocalTemporary : `Symbol`

Application-local temporary directory

### require('uxp').storage.domains — appRoamingData : `Symbol`

Roaming data storage for the application

### require('uxp').storage.domains — appRoamingLibrary : `Symbol`

Roaming library storage for the application

## Plugin Manager

- [Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/plugin-manager/plugin.md)
- [PluginManager](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/plugin-manager/plugin-manager.md)
- [Script](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/plugin-manager/script.md)

## require('uxp').shell

Access this module with `require("uxp").shell`

UXP Manifest v5 settings must be configured for these APIs. Reference: [Launch Process](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process)

### openPath(path, developerText)

Uses the operating system's default app to open the supplied file or folder path.

NOTE: For UWP, accessible files are limited to the UWP App sandbox. Reference: [File access permissions in UWP](https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions)

**Returns**: `Promise<string>` - resolves to "" on success, or to a String carrying the failure message.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | Path string to open |
| developerText | `string` | Plugin-developer information shown in the user consent dialog. Use the active host UI locale for this message. |

**Example**

```js
// for MacOS
shell.openPath("/Users/[username]/Downloads");
shell.openPath("/Users/[username]/sample.txt");

// for Windows
shell.openPath("C:Users[username]Downloads");
shell.openPath("C:Users[username]AppDataLocal...sample.txt");
```

### openExternal(url, developerText)

Hands the URL to the system application registered for that URL scheme.

NOTE: the file scheme is not allowed with `openExternal`; use `openPath` for those cases.

**Returns**: `Promise<string>` - resolves to "" on success, or to a String carrying the failure message.

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL string to open |
| developerText | `string` | Plugin-developer information shown in the user consent dialog. Use the active host UI locale for this message. |

**Example**

```js
shell.openExternal("https://www.adobe.com/");
shell.openExternal("https://www.adobe.com/", "develop message for the user consent dialog");
```

**Example**

```js
shell.openExternal("maps://?address=345+Park+Ave+San+Jose"); // for MacOS
shell.openExternal("bingmaps:?q=345+Park+Ave+San+Jose, +95110"); // for Windows
```

## require('uxp').userInfo

Provides user-related information.

Enable this API by adding the following permission to your plugin's `manifest.json` file.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0

### userId()

**Read only**
Retrieves the plugin user's GUID

**Since**: v7.3.0  
**Example**

```js
let userId = require("uxp").userInfo.userId(); // Get the GUID of plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## require('uxp').versions

Version metadata. Access it through require("uxp").versions

### uxp ⇒ `string`

Reports the UXP version string, for example, uxp-6.0.0

**Returns**: `string`

### plugin ⇒ `string`

Reports the plugin version; this value mirrors the version recorded in the plugin's manifest.

**Returns**: `string`

## require('uxp').xmp

**Since**: v7.2.0

Adobe XMP (Extensible Metadata Platform) defines a metadata standard from Adobe. It lets digital files carry descriptive, rights, and other metadata.
Because it is extensible, XMP can represent many information categories and custom schemas. Adobe software and third-party applications can work against the same model, which supports interoperability.
The model uses open standards, XML syntax, and RDF. This helps files become easier to search, organize, and govern for rights workflows. In short, XMP supports consistent metadata handling for digital assets.
For additional XMP metadata details, reference [XMP Specification at Adobe Developer Center](https://www.adobe.com/devnet/xmp.html).

Within UXP, the XMP module exposes JavaScript bindings for the Adobe XMP Core and XMP Files libraries.
Import the XMP module before working with XMP objects.

```js
const xmp = require("uxp").xmp;
```

Once the module is imported, the top-level objects of the XMP scripting API are available.
| Class | Description |
| --- | --- |
| [XMPMeta](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md) | Interface for reading, writing, and changing XMP metadata obtained from host DOM APIs. |
| [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md) | Interface for direct file-based XMP metadata access instead of relying on a host to supply the packet contents. |
| [XMPUtils](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md) | Utility functions that help with array handling. |
| [XMPDateTime](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-date-time.md) | Date-time value representation. |
| [XMPConst](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-const.md) | Numeric and string constants used by the JavaScript API. |

Additional support classes are reachable from the top-level objects: property wrappers, file descriptors, XMP packet descriptors, and iteration support for properties.
| Class | Description |
| --- | --- |
| [XMPIterator](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-iterator.md) | Iterates through properties in an XMPMeta object. |
| [XMPProperty](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-property.md) | Metadata-property descriptor. |
| [XMPFileInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file-info.md) | File descriptor. |
| [XMPPacketInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-packet-info.md) | Raw XMP-packet descriptor for a file. |

Consult the object references for each class's properties and methods.

### Using the XMP scripting API

Use XMPMeta as the main entry point for namespaces and properties in an XMP metadata packet. It can create or remove namespaces and properties, inspect values, and update values.
Several routes can produce an XMPMeta object:

An XMPFile object can pull current metadata straight from a file. XMPFile.getXMP() constructs an XMPMeta object for reading or editing property values, and XMPFile.putXMP() writes the changed metadata to the file.

Another route is the XMPMeta constructor, seeded with an XMP packet that was created or obtained elsewhere.

You can also call the constructor with no packet, then use the new XMPMeta object's methods to build namespaces and properties from scratch. XMPFile.putXMP() can then insert that metadata into a file.

### Creating new metadata

The example starts with an empty XMPMeta object, sets one metadata property, and serializes the packet as a string that could be handed to an authoring tool or persisted elsewhere.

```js
const { XMPMeta, XMPConst } = require("uxp").xmp;
let xmp = new XMPMeta();
xmp.setProperty(XMPConst.NS_XMP, "CreatorTool", "My Script");
let xmpStr = xmp.serialize(); // Serialize the XMP packet to XML

// Retrieve property
let prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
console.log(
  `namespace: ${prop.namespace}, property path + name: ${prop.path}, value: ${prop.value}`,
);
```

### Modifying existing metadata

Here an existing XMP packet is loaded from a string variable. The code updates the `ModifyDate` property to the current date and time, then serializes the changed XMP packet back to the string with compact formatting.

```js
const { XMPMeta, XMPConst, XMPDateTime } = require("uxp").xmp;
let xmp = new XMPMeta(xmpStr); // Object initialized with xmp packet as string
let dateTime = new XMPDateTime(new Date()); // Now
let oldModificationDate = mp.getProperty(XMPConst.NS_XMP, "ModifyDate", "xmpdate");
console.log("Old modification date: " + oldModificationDate);
xmp.setProperty(XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate");

// Serialize to XML, in compact style
let xmpStr = xmp.serialize(XMPConst.SERIALIZE_USE_COMPACT_FORMAT);
```

### Using XMPFile for batch processing

This example walks through image files in a folder and updates their metadata. For each picture, the script does the following:

Reads and parses metadata. When a file has no XMP metadata, legacy metadata is converted to XMP automatically.

Removes the existing creators list, then appends a new creator entry.

Saves the changed metadata back.

```js
console.log( "XMPFiles batch processing example" );
// Load the XMPScript library
const {XMPMeta, XMPConst, XMPFile} = require("uxp").xmp;

// Iterate through the photos in the folder
const uxpfs = require("uxp").storage;
const ufs = uxpfs.localFileSystem;
let folder = await ufs.getFolder({initialDomain: uxpfs.domains.userDocuments});
let files = await folder.getEntries();
files.forEach((file) => {
     console.log( "Process file: " + file.name );

     // Applies only to files, not to folders
     if ( file instanceof Entry ) {
         let xmpFile = new XMPFile( file.nativePath, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
         let xmp = xmpFile.getXMP();

         // Delete existing authors and add a new one
         // Existing metadata stays untouched
         xmp.deleteProperty( XMPConst.NS_DC, "creator" );
         xmp.appendArrayItem( XMPConst.NS_DC, "creator", "Judy", 0, XMPConst.ARRAY_IS_ORDERED );

         // Write updated metadata into the file
         if ( xmpFile.canPutXMP( xmp ) ) {
             xmpFile.putXMP( xmp );
         }
         xmpFile.closeFile( XMPConst.CLOSE_UPDATE_SAFELY );
     }
}
```

## XMP

- [XMP Classes](uxp.md)
- [getting-started](uxp.md)

## XMP Classes

- [XMPConst](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-const.md)
- [XMPDateTime](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-date-time.md)
- [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md)
- [XMPFileInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file-info.md)
- [XMPIterator](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-iterator.md)
- [XMPMeta](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md)
- [XMPPacketInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-packet-info.md)
- [XMPProperty](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-property.md)
- [XMPUtils](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md)
