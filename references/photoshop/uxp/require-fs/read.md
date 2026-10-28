# read(fd, buffer, offset, length, position, callback)

Uses the supplied file descriptor to read file data a chunk at a time.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` if invalid file descriptor is passed.
  if invalid parameter format or value is passed.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | target buffer that receives the bytes read from the file |
| offset | `number` | buffer offset where copied bytes begin |
| length | `number` | number of bytes requested |
| position | `number` | file offset to read from. `-1` uses the current file position; after bytes are read, that position advances by the number of bytes read. A value greater than or equal to `0` selects an explicit file position, and after the read the current file position remains unchanged |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
const fileSize = 1024;
const buffer = new ArrayBuffer(fileSize);
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
let bytesReadInTotal = 0;
while (bytesReadInTotal < fileSize) {
  const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
  if (!bytesRead) {
    break;
  }
  bytesReadInTotal += bytesRead;
}
await fs.close(fd);
```
