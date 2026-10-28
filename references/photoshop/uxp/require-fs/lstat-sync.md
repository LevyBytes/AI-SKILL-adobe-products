# lstatSync(path)

Synchronously retrieves information about the file or folder at the specified location.

**Returns**: `Object` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Platform limits can leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information should be retrieved |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```
