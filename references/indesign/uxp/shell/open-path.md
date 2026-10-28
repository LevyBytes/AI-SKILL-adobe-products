# openPath(path, developerText)

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
