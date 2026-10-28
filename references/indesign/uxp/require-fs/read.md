# read(fd, buffer, offset, length, position, callback)

Reads chunked data from the file associated with the file descriptor.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
  when the parameter format or value is invalid.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer that receives the bytes read from the file |
| offset | `number` | position in the buffer where writing the read bytes begins |
| length | `number` | amount of data to read |
| position | `number` | file position to read from. A value of -1 uses the current file position; after bytes are read, the current file position advances by the number of bytes read. A value greater than or equal to 0 selects a file position for the read, and after the read, the current file position remains unchanged |
| callback | `function` | when omitted, the function returns a Promise object |

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
