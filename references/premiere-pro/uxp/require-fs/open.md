# open(path, [flag], [mode], callback)

Asynchronously opens a file, creating it when the supplied flag permits creation.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | file path to open |
| [flag] | `number` \| `string` | `r` | Node.js [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) reference |
| [mode] | `number` \| `string` | `0o666` | Node.js [File modes](https://nodejs.org/api/fs.html#file-modes) reference |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```
