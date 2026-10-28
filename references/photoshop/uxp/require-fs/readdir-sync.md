# readdirSync(path)

Synchronously reads a directory and returns the names of contained files and folders.

**Returns**: `Array<string>` - string entries for files and directories found in the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```
