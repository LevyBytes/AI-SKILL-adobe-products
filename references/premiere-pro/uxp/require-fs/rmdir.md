# rmdir(path, callback)

Removes a directory asynchronously.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to remove |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```
