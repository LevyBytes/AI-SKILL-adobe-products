# readdir(path, callback)

Asynchronously scans a directory and reports the files and subdirectories it contains.

**Returns**: `Promise<Array<string>>` - array of `string` entries for files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to read |
| callback | `function` | when omitted, the call returns a Promise object |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```
