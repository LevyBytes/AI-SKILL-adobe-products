# open(path, [flag], [mode], callback)

Asynchronously opens a file or creates one when the selected flags allow it.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location of the file to open |
| [flag] | `number` \| `string` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | when omitted, this function returns a Promise object |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```
