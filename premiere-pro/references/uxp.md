# Entry Points, Host Information, Key Value Storage, Persistent File Storage ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EntryPointsError; Entry Points; UxpCommandInfo — id ⇒ `string`; UxpMenuItem — UxpMenuItem(); UxpPanelInfo — UxpPanelInfo(); UxpPluginInfo — id ⇒ `String`; require('uxp').host; uxp; require('uxp').storage.secureStorage; require('uxp').storage.domains — domains(); Plugin Manager; require('uxp').pluginManager; require('uxp').script;; require('uxp').shell; require('uxp').userInfo; require('uxp').versions; XMP; XMP Classes.

## EntryPointsError

An `EntryPointsError` is raised when `entrypoints.setup` either fails or is invoked more than once.

## Entry Points

- [EntryPoints](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/entry-points/entry-points.md)
- [EntryPointsError](uxp.md)
- [UxpCommandInfo](uxp.md)
- [UxpMenuItem](uxp.md)
- [UxpMenuItems](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/entry-points/uxp-menu-items.md)
- [UxpPanelInfo](uxp.md)
- [UxpPluginInfo](uxp.md)

## UxpCommandInfo — id ⇒ `string`

Retrieves the command id.

**Returns**: `string`

### UxpCommandInfo — label ⇒ `string`

Retrieves the command label as a localized string.

**Returns**: `string`

### UxpCommandInfo — description ⇒ `string`

Retrieves the command description as a localized string.

**Returns**: `string`

### UxpCommandInfo — shortcut ⇒ `Object`

Retrieves the command shortcut.

**Returns**: `Object` - object with these keys:
\{string} shortcutKey
\{boolean} commandKey
\{boolean} altKey
\{boolean} shiftKey
\{boolean} ctrlKey

### UxpCommandInfo — isManifestCommand ⇒ `bool`

Retrieves the `isManifestCommand` value.

**Returns**: `bool`

### UxpCommandInfo — commandOptions ⇒ `object`

Retrieves the command options parameter.

**Returns**: `object`

## UxpMenuItem — UxpMenuItem()

Represents one menu item belonging to a panel.

### UxpMenuItem — id : `string`

**Read only**
Retrieves the menu item id.

### UxpMenuItem — label ⇒ `string`

Retrieve the localized label text for the menu item.

**Returns**: `string`

### UxpMenuItem — enabled ⇒ `boolean`

Retrieve whether the menu item is enabled.

**Returns**: `boolean`

### UxpMenuItem — checked ⇒ `boolean`

Retrieve whether the menu item is checked.

**Returns**: `boolean`

### UxpMenuItem — submenu ⇒ `UxpMenuItems`

Retrieve the submenu attached to the menu.

**Returns**: `UxpMenuItems`

### UxpMenuItem — parent ⇒ `UxpMenuItems`

Retrieve the parent menu for this item.

**Returns**: `UxpMenuItems`

### UxpMenuItem — label

Assign a new label to the menu item. The label refresh happens right away on an asynchronous path.

| Param | Type | Description |
| --- | --- | --- |
| label | `string` | expected to be a localized string |

### UxpMenuItem — enabled

Assign the menu item's enabled state. The state refresh happens right away on an asynchronous path.

| Param | Type |
| --- | --- |
| enabled | `boolean` |

### UxpMenuItem — checked

Assign the menu item's checked state. The state refresh happens right away on an asynchronous path.

| Param | Type |
| --- | --- |
| checked | `boolean` |

### UxpMenuItem — remove()

Delete the menu item.

## UxpPanelInfo — UxpPanelInfo()

Class that represents one plugin panel.

### UxpPanelInfo — id : `string`

**Read only**
Retrieve the panel id.

### UxpPanelInfo — label : `string`

**Read only**
Retrieve the panel label as a localized string.

### UxpPanelInfo — description : `string`

**Read only**
Retrieve the panel description as a localized string.

### UxpPanelInfo — shortcut ⇒ `Object`

**Read only**
Retrieve the panel shortcut.

**Returns**: `Object` - the object includes these keys:
\{string} shortcutKey
\{boolean} commandKey
\{boolean} altKey
\{boolean} shiftKey
\{boolean} ctrlKey

### UxpPanelInfo — title : `string`

**Read only**
Retrieve the localized panel title.

### UxpPanelInfo — icons ⇒ `Array`

**Read only**
Retrieve the panel icons.

**Returns**: `Array` - every object includes these properties:
\{string} path
\{Array of Number} scale
\{Array of string} theme
\{Array of string} species

### UxpPanelInfo — minimumSize ⇒ `Object`

**Read only**
Retrieve the panel minimum size.

**Returns**: `Object` - every object includes these properties:
\{Number} width
\{Number} height

### UxpPanelInfo — maximumSize ⇒ `Object`

**Read only**
Retrieve the panel maximum size.

**Returns**: `Object` - every object includes these properties:
\{Number} width
\{Number} height

### UxpPanelInfo — preferredDockedSize ⇒ `Object`

**Read only**
Retrieve the panel preferred docked size.

**Returns**: `Object` - every object includes these properties:
\{Number} width
\{Number} height

### UxpPanelInfo — preferredFloatingSize ⇒ `Object`

**Read only**
Retrieve the panel preferred floating size.

**Returns**: `Object` - every object includes these properties:
\{Number} width
\{Number} height

### UxpPanelInfo — menuItems : `UxpMenuItems`

**Read only**
Fetches the panel menu item collection.

## UxpPluginInfo — id ⇒ `String`

Reads the plugin id.

**Returns**: `String`

### UxpPluginInfo — version ⇒ `String`

Reads the plugin version.

**Returns**: `String`

### UxpPluginInfo — name ⇒ `String`

Reads the plugin name.

**Returns**: `String`

### UxpPluginInfo — manifest ⇒ `JSON`

Reads the plugin manifest.

**Returns**: `JSON`

### UxpPluginInfo — isFirstParty()

Tests whether the plugin is a First Party Plugin.

**Returns**: `Boolean`

## require('uxp').host

Provides host-environment details available to the plugin while it runs.
`require("uxp").host`

### name ⇒ `string`

**Returns**: `string` - host application name. For ex, returns "photoshop" for Photoshop

### version ⇒ `string`

**Returns**: `string` - host application version. For ex, "20.0.0"

### uiLocale ⇒ `string`

**Returns**: `string` - host application UI locale in 5-letter form. For ex, "en_US"

## uxp

- [Entry Points](uxp.md)
- [Host Information](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/host-information/index.md)
- [Key-Value Storage](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/key-value-storage/index.md)
- [Persistent File Storage](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/index.md)
- [Plugin Manager](uxp.md)
- [User Information](uxp.md)
- [Versions](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/versions/index.md)
- [XMP](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/getting-started/xmp.md)
- [shell](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)

## require('uxp').storage.secureStorage

SecureStorage is protected storage for per-plugin sensitive data. It accepts a key-value pair, encrypts the value, and then stores the key beside that encrypted value. A later request with the matching key returns the value after decryption. The key itself is left unencrypted, so the cryptographic protection does not cover it.

SecureStorage caveats:

1. Do not treat SecureStorage as a safe place for secrets that must stay hidden from the current user. Its protection is tied to the current user's account credentials, so encrypted data may still be exposed to decryption under that user's privileges.
2. SecureStorage data can disappear for several reasons. For example, the user might uninstall the host application and remove the secure storage. The cryptographic information used by secure storage can also be accidentally damaged by the user, causing data loss even when the secure storage itself has not been removed. Treat SecureStorage as a cache instead of durable persistence. Plugins need to be able to regenerate SecureStorage data after it is lost.

### length : `number`

**Read only**
Count of entries currently held in secure storage.

### setItem(key, value)

Stores a key/value pair in secure storage after encrypting the value.

**Returns**: `Promise<void>` Promise resolves once storage succeeds, and rejects when the value is empty or cannot be stored.  
**Throws**:

- `TypeError` If either key or value is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value is being set |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Data assigned to the key. |

### getItem(key)

Gets the value for a supplied key after decrypting it from secure storage.

**Returns**: `Promise<Uint8Array>` Promise resolves with a Uint8Array  
**Throws**:

- `TypeError` If a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key used to retrieve the value |

### removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` Promise resolves after the key's value is removed, and rejects when the value cannot be removed or is not found.  
**Throws**:

- `TypeError` If a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be removed |

### key(index)

Returns the key stored at the specified index.

**Returns**: `number` - Key stored at the specified index.

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer that identifies the key position |

### clear()

Clears every value from secure storage.

**Returns**: `Promise<void>` Promise resolves after all items are cleared. It rejects when there is no item to clear or the clear operation fails.

## require('uxp').storage.domains — domains()

Reusable domain constants for file-picker starting locations.

### require('uxp').storage.domains — userDesktop : `Symbol`

The user's desktop folder

### require('uxp').storage.domains — userDocuments : `Symbol`

Folder containing the user's documents

### require('uxp').storage.domains — userPictures : `Symbol`

Folder or library that stores the user's pictures

### require('uxp').storage.domains — userVideos : `Symbol`

Folder or library for the user's videos / movies

### require('uxp').storage.domains — userMusic : `Symbol`

Folder or library that holds the user's music

### require('uxp').storage.domains — appLocalData : `Symbol`

Application data kept locally

### require('uxp').storage.domains — appLocalLibrary : `Symbol`

Application library kept locally

### require('uxp').storage.domains — appLocalCache : `Symbol`

Application cache directory stored locally (persistence not guaranteed)

### require('uxp').storage.domains — appLocalShared : `Symbol`

Shared data folder kept locally for the application

### require('uxp').storage.domains — appLocalTemporary : `Symbol`

Local directory for temporary files

### require('uxp').storage.domains — appRoamingData : `Symbol`

Application data that roams

### require('uxp').storage.domains — appRoamingLibrary : `Symbol`

Application library data that roams

## Plugin Manager

- [Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/plugin-manager/plugin.md)
- [PluginManager](uxp.md)
- [Script](uxp.md)

## require('uxp').pluginManager

Use this module to retrieve the plugin list from the host for IPC(Inter Plugin Communication).
Instance access: `require("uxp").pluginManager`

### plugins ⇒ `Set`

Provides the current plugin list maintained by Plugin Manager.

**Returns**: `Set` - set containing Plugin objects

## require('uxp').script;

The Script module exposes the key properties and methods used when authoring scripts.

### args : `Array`

**Read only**
Retrieves any arguments supplied by the host app when the script is invoked.

### executionContext : `ExecutionContext`

**Read only**
ExecutionContext supplied by the host app when it invokes the script.

### setResult(result)

Sends an execution result back to the host when the script needs to return one.

| Param | Type | Description |
| --- | --- | --- |
| result | `HostDefinition` | The host specifies which values scripts may return and the required format. |

## require('uxp').shell

Instance access: `require("uxp").shell`

These APIs need UXP Manifest v5 configuration. See [Launch Process](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process)

### openPath(path, developerText)

Uses the system default application to open the specified file or folder path.

NOTE: For UWP, file access stays within its app sandbox. Reference: [File access permissions in UWP](https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions)

**Returns**: `Promise<string>` - Promise that resolves to "" on success, or to a String with the error message on failure.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | Path string identifying what to open |
| developerText | `string` | Plugin-developer text shown in the user consent dialog. Localize the message for the host's active UI locale. |

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

Use `shell.openExternal` to hand a URL to the operating system application registered for that scheme.

NOTE: `openExternal` does not accept the file scheme; use `openPath` for those cases.

**Returns**: `Promise<string>` - Resolves to "" on success, or to a String containing the error message on failure.

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | String representing the URL to open |
| developerText | `string` | Information from the plugin developer to be displayed on the user consent dialog. Message should be localized in current host UI locale. |

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

This module exposes data about the current user.

To call this API, add the permission below to the plugin's `manifest.json` file.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0

### userId()

**Read only**
Returns the user's plugin GUID.

**Since**: v7.3.0
**Example**

```js
let userId = require("uxp").userInfo.userId(); // Get the GUID of plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## require('uxp').userInfo

This module exposes data about the current user.

Include the permission shown below in the plugin's `manifest.json` file before using this API.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0

### userId()

**Read only**
Returns the user's plugin GUID.

**Since**: v7.3.0
**Example**

```js
let userId = require("uxp").userInfo.userId(); // Get the GUID of the plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## require('uxp').versions

Version data is available from `require("uxp").versions`.

### uxp ⇒ `string`

Reports the UXP version, for example `uxp-6.0.0`.

**Returns**: `string`

### plugin ⇒ `string`

Reports the plugin version, matching the value declared in the plugin's manifest.

**Returns**: `string`

## XMP

- [XMP Classes](uxp.md)
- [getting-started](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/getting-started/index.md)

## XMP Classes

- [XMPConst](uxp.md)
- [XMPDateTime](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-date-time.md)
- [XMPFile](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file.md)
- [XMPFileInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-file-info.md)
- [XMPIterator](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-iterator.md)
- [XMPMeta](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md)
- [XMPPacketInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-packet-info.md)
- [XMPProperty](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-property.md)
- [XMPUtils](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-utils.md)

## require('uxp').xmp.XMPConst

`xmp.XMPConst` supplies read-only constants for the JavaScript XMP API. Some constants appear beside the APIs that use them; the longer groups are collected here.

### Schema namespace string constants

Use these constants as namespace URI strings when XMPMeta reads or writes properties.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `NS_DC` | string | Read-only | The XML namespace for the Dublin Core schema, [http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1) |
| `NS_IPTC_CORE` | string | Read-only | The XML namespace for the IPTC Core schema. |
| `NS_RDF` | string | Read-only | The XML namespace for RDF. |
| `NS_XML` | string | Read-only | The XML namespace for XML. |
| `NS_XMP` | string | Read-only | The XML namespace for the XMP basic schema. |
| `NS_XMP_RIGHTS` | string | Read-only | The XML namespace for the XMP copyright schema. |
| `NS_XMP_MM` | string | Read-only | The XML namespace for the XMP digital asset management schema. |
| `NS_XMP_BJ` | string | Read-only | The XML namespace for the job management schema. |
| `NS_XMP_NOTE` | string | Read-only | The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties. |
| `NS_PDF` | string | Read-only | The XML namespace for the PDF schema. |
| `NS_PDFX` | string | Read-only | The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties. |
| `NS_PHOTOSHOP` | string | Read-only | The XML namespace for the Adobe Photoshop custom schema. |
| `NS_PS_ALBUM` | string | Read-only | The XML namespace for the Adobe Photoshop Album custom schema. |
| `NS_EXIF` | string | Read-only | The XML namespace for Adobeâ€™s EXIF schema. |
| `NS_EXIF_AUX` | string | Read-only | The XML namespace for Adobeâ€™s EXIF auxiliary schema. |
| `NS_TIFF` | string | Read-only | The XML namespace for Adobeâ€™s TIFF schema. |
| `NS_PNG` | string | Read-only | The XML namespace for the PNG schema. |
| `NS_JPEG` | string | Read-only | The XML namespace for the JPEG schema. |
| `NS_SWF` | string | Read-only | The XML namespace for the Flash small web format schema. |
| `NS_JPK` | string | Read-only | The XML namespace for the JPK schema. |
| `NS_CAMERA_RAW` | string | Read-only | The XML namespace for the Camera Raw schema. |
| `NS_DM` | string | Read-only | The XML namespace for the DM schema. |
| `NS_ADOBE_STOCK_PHOTO` | string | Read-only | The XML namespace for the Adobe Stock Photo schema. |
| `NS_ASF` | string | Read-only | The XML namespace for the Microsoft advanced streaming format schema. |

### Type namespace string constants

Use these constants as field-type namespace URI strings for XMPMeta structured-property work.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `TYPE_IDENTIFIER_QUAL` | string | Read-only | The XML namespace for qualifiers of the xmp:Identifier property. |
| `TYPE_DIMENSIONS` | string | Read-only | The XML namespace for fields of the Dimensions type. |
| `TYPE_TEXT` | string | Read-only | The XML namespace for the XMP text document schema. |
| `TYPE_PAGEDFILE` | string | Read-only | The XML namespace for the XMP paged document schema. |
| `TYPE_GRAPHICS` | string | Read-only | The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document. |
| `TYPE_IMAGE` | string | Read-only | The XML namespace for fields of a graphical image. Used for the Thumbnail type. |
| `TYPE_FONT` | string | Read-only | The XML namespace for a structure containing the characteristics of a font used in a document. |
| `TYPE_RESOURCE_EVENT` | string | Read-only | The XML namespace for fields of the ResourceEvent type. |
| `TYPE_RESOURCE_REF` | string | Read-only | The XML namespace for fields of the ResourceRef type. |
| `TYPE_ST_VERSION` | string | Read-only | The XML namespace for fields of the Version type. |
| `TYPE_ST_JOB` | string | Read-only | The XML namespace for fields of the JobRef type. |
| `TYPE_MANIFEST_ITEM` | string | Read-only | The XML namespace for fields of the ManifestItem type. |
| `TYPE_PDFA_SCHEMA` | string | Read-only | The XML namespace for fields of the PDFA schema. |
| `TYPE_PDFA_PROPERTY` | string | Read-only | The XML namespace for fields of the PDFA property. |
| `TYPE_PDFA_TYPE` | string | Read-only | The XML namespace for fields of the PDFA type. |
| `TYPE_PDFA_FIELD` | string | Read-only | The XML namespace for fields of the PDFA field. |
| `TYPE_PDFA_ID` | string | Read-only | The XML namespace for fields of the PDFA ID. |
| `TYPE_PDFA_EXTENSION` | string | Read-only | The XML namespace for PDF subtypes. |

### File format numeric constants

XMPFile uses these constants to identify supported file types during I/O.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| `FILE_UNKNOWN` | number | Read-only | Unknown file-format. |
| `FILE_PDF` | number | Read-only | PDF |
| `FILE_POSTSCRIPT` | number | Read-only | PS, general PostScript following DSC conventions |
| `FILE_EPS` | number | Read-only | EPS, encapsulated PostScript |
| `FILE_JPEG` | number | Read-only | JPEG |
| `FILE_JPEG2K` | number | Read-only | JPX, JPEG 2000 file |
| `FILE_TIFF` | number | Read-only | TIFF |
| `FILE_GIF` | number | Read-only | GIF |
| `FILE_PNG` | number | Read-only | PNG |
| `FILE_SWF` | number | Read-only | SWF, Flash file |
| `FILE_FLA` | number | Read-only | FLA, Flash authoring file |
| `FILE_FLV` | number | Read-only | FLV, Flash video file |
| `FILE_MOV` | number | Read-only | MOV, Quicktime |
| `FILE_AVI` | number | Read-only | AVI |
| `FILE_CIN` | number | Read-only | CIN, Cineon |
| `FILE_WAV` | number | Read-only | WAV |
| `FILE_MP3` | number | Read-only | MP3 |
| `FILE_SES` | number | Read-only | SES, Audition session |
| `FILE_CEL` | number | Read-only | CEL, Audition loop |
| `FILE_MPEG` | number | Read-only | MPEG |
| `FILE_MPEG2` | number | Read-only | MPEG2 |
| `FILE_MPEG4` | number | Read-only | MPEG4 |
| `FILE_WMAV` | number | Read-only | WMAV, Windows Media Audio and Video |
| `FILE_AIFF` | number | Read-only | AIFF |
| `FILE_HTML` | number | Read-only | HTML |
| `FILE_XML` | number | Read-only | XML |
| `FILE_TEXT` | number | Read-only | TEXT |
| `FILE_PHOTOSHOP` | number | Read-only | PSD, Photoshop |
| `FILE_ILUSTRATOR` | number | Read-only | AI, Illustrator |
| `FILE_INDESIGN` | number | Read-only | INDD, InDesign |
| `FILE_AE_PROJECT` | number | Read-only | AEP, After Effects project |
| `FILE_AE_PROJECT_TEMPLATE` | number | Read-only | AET, After Effects project template |
| `FILE_AE_FILTER_PRESET` | number | Read-only | FFX, After Effects filter preset file |
| `FILE_ENCORE_PROJECT` | number | Read-only | NCOR, Encore project file |
| `FILE_PREMIERE_PROJECT` | number | Read-only | PPJ, Premiere project file |
| `FILE_PREMIERE_TITLE` | number | Read-only | PRPROJ, Premiere title file |
