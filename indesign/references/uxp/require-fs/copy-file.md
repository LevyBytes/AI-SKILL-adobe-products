# copyFile(srcPath, destPath, flags, callback)

Copies an item from its source path into the destination path.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | location of the source file for copying |
| destPath | `string` |  | location where the copied source file is placed |
| flags | `number` | `0` | use the flags documented by [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | leaving this argument out makes the call use a Promise result |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```
