# lstat(path, callback)

Asynchronously retrieves information about the file or folder at the specified location.

**Returns**: `Promise<Object>` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Platform limits can leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information should be retrieved |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```
