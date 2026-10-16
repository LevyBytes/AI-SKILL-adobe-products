# copyFile(srcPath, destPath, flags, callback)

Copies a file or folder from one supplied location into another supplied location.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | location of the source file to copy |
| destPath | `string` |  | target location where the source file is copied |
| flags | `number` | `0` | see flags in [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | omitting callback makes the call return a `Promise` |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```
