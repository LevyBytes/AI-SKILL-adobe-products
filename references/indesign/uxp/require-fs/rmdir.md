# rmdir(path, callback)

Asynchronously removes a directory.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to remove |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```
