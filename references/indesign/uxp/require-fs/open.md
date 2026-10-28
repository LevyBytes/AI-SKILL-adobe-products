# open(path, [flag], [mode], callback)

Asynchronously opens or creates a file.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path used to open a file |
| [flag] | `number` \| `string` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | when omitted, the function returns a Promise object |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```
