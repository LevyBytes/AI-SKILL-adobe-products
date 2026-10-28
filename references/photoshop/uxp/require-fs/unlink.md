# unlink(path, callback)

Asynchronously removes the named file entry and the file it references.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file that should be deleted |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```
