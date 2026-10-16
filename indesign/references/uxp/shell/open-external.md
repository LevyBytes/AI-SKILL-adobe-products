# openExternal(url, developerText)

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
