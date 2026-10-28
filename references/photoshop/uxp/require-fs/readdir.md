# readdir(path, callback)

Asynchronously reads a directory and returns the names of contained files and folders.

**Returns**: `Promise<Array<string>>` - string entries for files and directories found in the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```
