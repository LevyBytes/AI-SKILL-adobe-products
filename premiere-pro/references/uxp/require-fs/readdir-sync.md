# readdirSync(path)

Synchronously scans a directory and reports the files and subdirectories it contains.

**Returns**: `Array<string>` - array of `string` entries for files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```
