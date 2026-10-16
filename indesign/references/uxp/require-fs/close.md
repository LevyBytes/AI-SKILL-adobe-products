# close(fd, callback)

Asynchronously closes a file descriptor.

**Returns**: `number` - 0 on success; otherwise, an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file being closed |
| callback | `function` | when omitted, the function returns a Promise object |

**Example**

```js
await fs.close(fd);
```
