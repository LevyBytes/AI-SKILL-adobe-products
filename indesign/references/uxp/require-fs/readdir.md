# readdir(path, callback)

Reads a directory asynchronously and returns its contained file and directory names.

**Returns**: `Promise<Array<string>>` - string array listing the files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```
