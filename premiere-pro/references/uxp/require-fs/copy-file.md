# copyFile(srcPath, destPath, flags, callback)

Copies a file or folder from `srcPath` to `destPath`.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | source path for the file to copy |
| destPath | `string` |  | destination path for the copied file |
| flags | `number` | `0` | use the [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) flags |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```
