# rmdir(path, callback)

Asynchronously removes a directory.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to remove |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```
