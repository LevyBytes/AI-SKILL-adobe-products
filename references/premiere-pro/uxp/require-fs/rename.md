# rename(oldPath, newPath, callback)

Renames the item at `oldPath` or moves it to `newPath` when needed.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | current path of the file name to change |
| newPath | `string` | path where the new file name should be placed |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```
