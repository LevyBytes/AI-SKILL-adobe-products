# lstat(path, callback)

Fetches path metadata asynchronously for a file or folder.

**Returns**: `Promise<Object>` - refer to Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats)
Note: Platform limits can make some returned-object methods or properties unavailable.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information is requested |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```
