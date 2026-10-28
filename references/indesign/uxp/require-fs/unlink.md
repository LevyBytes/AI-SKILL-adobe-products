# unlink(path, callback)

Asynchronously removes the directory entry for the named file.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to delete |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```
