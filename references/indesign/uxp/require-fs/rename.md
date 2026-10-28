# rename(oldPath, newPath, callback)

Moves or renames the item from oldPath to newPath as needed.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | location containing the existing name to change |
| newPath | `string` | destination path for the new file name |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```
