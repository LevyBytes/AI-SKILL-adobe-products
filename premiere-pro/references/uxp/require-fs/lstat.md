# lstat(path, callback)

Asynchronously retrieves information for the file or folder at `path`.

**Returns**: `Promise<Object>` - Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats) class
Note: Platform limitations may leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file or folder to inspect |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```
