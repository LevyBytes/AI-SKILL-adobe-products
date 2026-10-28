# openPath(path, developerText)

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
