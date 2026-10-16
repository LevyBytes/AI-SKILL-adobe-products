# openPath(path, developerText)

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
