# read(fd, buffer, offset, length, position, callback)

Reads file data in chunks through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
- `Error` when a parameter has an invalid format or value.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | ArrayBuffer that receives the bytes read |
| offset | `number` | buffer offset at which read bytes are written |
| length | `number` | number of bytes to read |
| position | `number` | file position where reading begins. Use `-1` to read from the current file position; after bytes are read, that position advances by the read size. A value greater than or equal to `0` selects an explicit file position, and the current file position remains unchanged after reading. |
| callback | `function` | leave out this argument to get a Promise |

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
