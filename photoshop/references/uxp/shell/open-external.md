# openExternal(url, developerText)

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
