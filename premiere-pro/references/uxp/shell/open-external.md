# openExternal(url, developerText)

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
