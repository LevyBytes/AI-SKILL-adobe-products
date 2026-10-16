# lstatSync(path)

Synchronously retrieves information for the file or folder at `path`.

**Returns**: `Object` - Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats) class
Note: Platform limitations may leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file or folder to inspect |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```
