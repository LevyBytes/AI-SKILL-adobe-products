# write(fd, buffer, offset, length, position, callback)

Writes file data in chunks through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
- `Error` when a parameter has an invalid format or value.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | ArrayBuffer containing data to write |
| offset | `number` | buffer offset where written bytes begin |
| length | `number` | number of bytes to write |
| position | `number` | file position where writing begins. Use `-1` to write at the current file position; after bytes are written, that position advances by the written size. A value greater than or equal to `0` selects an explicit file position, and writing there does not change the current file position. |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
const data = "It was a dark and stormy night.\n";
const srcBuffer = new Uint8Array(data.length);
for (let i = 0; i < data.length; i++) {
  srcBuffer[i] = data.charCodeAt(i);
}
const { bytesWritten } = await fs.write(fd, srcBuffer.buffer, 0, srcBuffer.length, 0);
await fs.close(fd);
```
