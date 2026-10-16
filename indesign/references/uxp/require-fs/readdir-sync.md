# readdirSync(path)

Reads a directory synchronously and returns its contained file and directory names.

**Returns**: `Array<string>` - string array listing the files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```
