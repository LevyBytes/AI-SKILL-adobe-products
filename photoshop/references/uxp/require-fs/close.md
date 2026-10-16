# close(fd, callback)

Performs an asynchronous close operation for the supplied descriptor.

**Returns**: `number` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file being closed |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.close(fd);
```
