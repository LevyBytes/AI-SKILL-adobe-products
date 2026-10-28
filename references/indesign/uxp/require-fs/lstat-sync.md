# lstatSync(path)

Fetches path metadata synchronously for a file or folder.

**Returns**: `Object` - refer to Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats)
Note: Platform limits can make some returned-object methods or properties unavailable.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information is requested |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```
