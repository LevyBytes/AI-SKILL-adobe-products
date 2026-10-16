# close(fd, callback)

Closes a file descriptor asynchronously.

**Returns**: `number` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file to close |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.close(fd);
```
