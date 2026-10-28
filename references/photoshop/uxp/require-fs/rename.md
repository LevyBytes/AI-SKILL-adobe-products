# rename(oldPath, newPath, callback)

Changes a file name, or moves the file when oldPath and newPath require it.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | location of the file whose current name will change |
| newPath | `string` | target path for the new file name |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```
