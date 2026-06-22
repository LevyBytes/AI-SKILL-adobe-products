# Entry Points, Host Information, Key Value Storage, Persistent File Storage ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EntryPointsError; Entry Points; UxpCommandInfo — id ⇒ `string`; UxpMenuItem — UxpMenuItem(); UxpPanelInfo — UxpPanelInfo(); UxpPluginInfo — id ⇒ `String`; require('uxp').host; uxp; require('uxp').storage.secureStorage; require('uxp').storage.domains — domains(); Plugin Manager; require('uxp').pluginManager; require('uxp').script;; require('uxp').shell; require('uxp').userInfo; require('uxp').versions.

## EntryPointsError

Raised when `entrypoints.setup` either fails during invocation or is invoked a second time.

## Entry Points

- [EntryPoints](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/entry-points/entry-points.md)
- [EntryPointsError](uxp.md)
- [UxpCommandInfo](uxp.md)
- [UxpMenuItem](uxp.md)
- [UxpMenuItems](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/entry-points/uxp-menu-items.md)
- [UxpPanelInfo](uxp.md)
- [UxpPluginInfo](uxp.md)

## UxpCommandInfo — id ⇒ `string`

Provides the command id

**Returns**: `string`

### UxpCommandInfo — label ⇒ `string`

Provides the command label as a localized string

**Returns**: `string`

### UxpCommandInfo — description ⇒ `string`

Provides the command description as a localized string

**Returns**: `string`

### UxpCommandInfo — shortcut ⇒ `Object`

Provides the command shortcut

**Returns**: `Object` - which consists of following keys:
\{string} shortcutKey
\{boolean} commandKey
\{boolean} altKey
\{boolean} shiftKey
\{boolean} ctrlKey

### UxpCommandInfo — isManifestCommand ⇒ `bool`

Provides the isManifestCommand value

**Returns**: `bool`

### UxpCommandInfo — commandOptions ⇒ `object`

Provides the command options parameter

**Returns**: `object`

## UxpMenuItem — UxpMenuItem()

Represents one menu item within a panel

### UxpMenuItem — id : `string`

**Read only**
Provides the menu item id

### UxpMenuItem — label ⇒ `string`

Provides the menu item label as a localized string

**Returns**: `string`

### UxpMenuItem — enabled ⇒ `boolean`

Provides the enabled state for the menu item

**Returns**: `boolean`

### UxpMenuItem — checked ⇒ `boolean`

Provides the checked state for the menu item

**Returns**: `boolean`

### UxpMenuItem — submenu ⇒ `UxpMenuItems`

Provides the submenu for the menu

**Returns**: `UxpMenuItems`

### UxpMenuItem — parent ⇒ `UxpMenuItems`

Provides the parent menu

**Returns**: `UxpMenuItems`

### UxpMenuItem — label

Sets the menu item's label. The update is applied right away and happens asynchronously.

| Param | Type | Description |
| --- | --- | --- |
| label | `string` | should be a localized string |

### UxpMenuItem — enabled

Sets the enabled state for the menu item. The update is applied right away and happens asynchronously.

| Param | Type |
| --- | --- |
| enabled | `boolean` |

### UxpMenuItem — checked

Sets the checked state for the menu item. The update is applied right away and happens asynchronously.

| Param | Type |
| --- | --- |
| checked | `boolean` |

### UxpMenuItem — remove()

Removes the menu item

## UxpPanelInfo — UxpPanelInfo()

Defines a plugin panel

### UxpPanelInfo — id : `string`

**Read only**
Retrieve the panel id.

### UxpPanelInfo — label : `string`

**Read only**
Retrieve the localized string used as the panel label.

### UxpPanelInfo — description : `string`

**Read only**
Retrieve the localized string used for the panel description.

### UxpPanelInfo — shortcut ⇒ `Object`

**Read only**
Retrieve shortcut information for the panel.

**Returns**: `Object` - with these keys:
\{string} shortcutKey
\{boolean} commandKey
\{boolean} altKey
\{boolean} shiftKey
\{boolean} ctrlKey

### UxpPanelInfo — title : `string`

**Read only**
Retrieve the localized string used as the panel title.

### UxpPanelInfo — icons ⇒ `Array`

**Read only**
Retrieve the icon definitions for the panel.

**Returns**: `Array` - with these properties on each object:
\{string} path
\{Array of Number} scale
\{Array of string} theme
\{Array of string} species

### UxpPanelInfo — minimumSize ⇒ `Object`

**Read only**
Retrieve the panel minimum size.

**Returns**: `Object` - with these properties on each object:
\{Number} width
\{Number} height

### UxpPanelInfo — maximumSize ⇒ `Object`

**Read only**
Retrieve the panel maximum size.

**Returns**: `Object` - with these properties on each object:
\{Number} width
\{Number} height

### UxpPanelInfo — preferredDockedSize ⇒ `Object`

**Read only**
Retrieve the panel preferred docked size.

**Returns**: `Object` - with these properties on each object:
\{Number} width
\{Number} height

### UxpPanelInfo — preferredFloatingSize ⇒ `Object`

**Read only**
Retrieve the panel preferred floating size.

**Returns**: `Object` - with these properties on each object:
\{Number} width
\{Number} height

### UxpPanelInfo — menuItems : `UxpMenuItems`

**Read only**
Retrieve the menu items for the panel.

## UxpPluginInfo — id ⇒ `String`

Retrieve the plugin id.

**Returns**: `String`

### UxpPluginInfo — version ⇒ `String`

Retrieve the plugin version.

**Returns**: `String`

### UxpPluginInfo — name ⇒ `String`

Retrieve the plugin name.

**Returns**: `String`

### UxpPluginInfo — manifest ⇒ `JSON`

Retrieve the plugin manifest.

**Returns**: `JSON`

### UxpPluginInfo — isFirstParty()

Determine whether the plugin is a First Party Plugin.

**Returns**: `Boolean`

## require('uxp').host

Provides useful details about the operating environment in which the plugin runs.
`require("uxp").host`

### name ⇒ `string`

**Returns**: `string` - host application name. For ex, Photoshop yields "photoshop".

### version ⇒ `string`

**Returns**: `string` - host application version. For ex, "20.0.0".

### uiLocale ⇒ `string`

**Returns**: `string` - 5 letter UI locale for the host application. For ex, "en_US".

## uxp

- [Entry Points](uxp.md)
- [Host Information](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/host-information/index.md)
- [Key-Value Storage](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/key-value-storage/index.md)
- [Persistent File Storage](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/index.md)
- [Plugin Manager](uxp.md)
- [User Information](uxp.md)
- [Versions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/versions/index.md)
- [XMP](uxp-xmp.md)
- [shell](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)

## require('uxp').storage.secureStorage

For each plugin, `SecureStorage` offers protected key-value storage intended for sensitive data. When `SecureStorage` receives a key-value pair, it encrypts the value first. The storage then records the key together with the encrypted value. A request made with the matching key returns the value after decryption. Keep in mind that the key itself remains unencrypted, so cryptographic protection applies to the value rather than the key.

SecureStorage caveats:

1. `SecureStorage` should not be used for sensitive data that must be hidden from the current user. Protection is tied to the current user's account credential, so encrypted data may still be exposed to decryption under that user's privileges.
2. `SecureStorage` contents can disappear for several reasons. For example, a user might uninstall the host application and remove the secure storage. The cryptographic information used by the secure storage might also be accidentally damaged by the user, causing data loss even when the secure storage itself remains present. Treat `SecureStorage` as a cache instead of persistent storage. Plugins should be able to recreate `SecureStorage` data after loss.

### length : `number`

**Read only**
Stored item count in the secure storage.

### setItem(key, value)

Encrypts `value`, then saves it with `key` in secure storage.

**Returns**: `Promise<void>` resolves after the value has been stored; rejects if the value is empty or cannot be stored.  
**Throws**:

- `TypeError` when either key or value is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to set value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Value for a key. |

### getItem(key)

Looks up the supplied key and returns the associated value after decrypting it from secure storage.

**Returns**: `Promise<Uint8Array>` resolves with a `Uint8Array`  
**Throws**:

- `TypeError` when a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to get value |

### removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` resolves once the value associated with the key has been removed; rejects when no matching value is found or removal does not happen.  
**Throws**:

- `TypeError` when a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to remove value |

### key(index)

Provides the key stored at the supplied index.

**Returns**: `number` - key stored at the supplied index.

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer representing the number of the key |

### clear()

Removes every value from secure storage.

**Returns**: `Promise<void>` resolves after all items are cleared; rejects when there is no item to clear or when clearing fails.

## require('uxp').storage.domains — domains()

Locations commonly offered as starting points when a file picker is shown.

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

Application data stored locally.

### require('uxp').storage.domains — appLocalLibrary : `Symbol`

Application library stored locally.

### require('uxp').storage.domains — appLocalCache : `Symbol`

Locally stored application cache directory (persistence not guaranteed)

### require('uxp').storage.domains — appLocalShared : `Symbol`

Shared application data folder stored locally.

### require('uxp').storage.domains — appLocalTemporary : `Symbol`

Temporary directory stored locally.

### require('uxp').storage.domains — appRoamingData : `Symbol`

Application data that roams.

### require('uxp').storage.domains — appRoamingLibrary : `Symbol`

Application library data stored for roaming use

## Plugin Manager

- [Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/plugin-manager/plugin.md)
- [PluginManager](uxp.md)
- [Script](uxp.md)

## require('uxp').pluginManager

Use this module when IPC(Inter Plugin Communication) needs the plugins currently present in the host.
Instance access: `require("uxp").pluginManager`

### plugins ⇒ `Set`

Use this property to read the Plugin Manager's current plugin collection.

**Returns**: `Set` - collection containing Plugin objects

## require('uxp').script;

The Script module supplies the core properties and methods needed when authoring scripts.

### args : `Array`

**Read only**
Reads any arguments supplied by the host app when it invokes the script.

### executionContext : `ExecutionContext`

**Read only**
Provides the ExecutionContext supplied by the host app during script invocation.

### setResult(result)

Use this method when a script needs to return an execution result to the host.

| Param | Type | Description |
| --- | --- | --- |
| result | `HostDefinition` | Host defines the contract for values scripts may return and the required format. |

## require('uxp').shell

Instance access: `require("uxp").shell`

These APIs depend on UXP Manifest v5 settings; reference [Launch Process](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process).

### openPath(path, developerText)

Opens a supplied file or folder path with the system's default application.

NOTE: On UWP, access is restricted to files inside the sandbox for that app. See [File access permissions in UWP](https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions)

**Returns**: `Promise<string>` - Promise resolves with "" on success, or with a String containing the failure message.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | String value for the path that should be opened |
| developerText | `string` | Plugin-supplied consent text displayed to the user. Translate it for the host's current UI language. |

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

Opens the url through the system application assigned to that scheme.

NOTE: openExternal does not allow the file scheme; use openPath for those cases.

**Returns**: `Promise<string>` - Promise resolves with "" on success, or with a String containing the failure message.

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | String value for the URL that should be opened |
| developerText | `string` | Plugin-supplied consent text displayed to the user. Translate it for the host's current UI language. |

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

Provides details about the user.

To enable this API, add the following permission to your plugin's `manifest.json` file.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0

### userId()

**Read only**
Reads the plugin user's GUID.

**Since**: v7.3.0  
**Example**

```js
let userId = require("uxp").userInfo.userId(); // Get the GUID of plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## require('uxp').userInfo

Provides details about the user.

To enable this API, add the following permission to your plugin's `manifest.json` file.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0

### userId()

**Read only**
Reads the plugin user's GUID.

**Since**: v7.3.0  
**Example**

```js
let userId = require("uxp").userInfo.userId(); // Get the GUID of the plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## require('uxp').versions

Version data. Instance access: require("uxp").versions

### uxp ⇒ `string`

Reports the UXP version, for example, uxp-6.0.0

**Returns**: `string`

### plugin ⇒ `string`

Reports the plugin version; it matches the version defined in your plugin's manifest.

**Returns**: `string`
