# unlink(path, callback)

Deletes a name and the file it references asynchronously.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to delete |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```
