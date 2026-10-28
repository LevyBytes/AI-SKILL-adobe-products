# write(fd, buffer, offset, length, position, callback)

Uses the supplied file descriptor to write file data a chunk at a time.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed
  if invalid parameter format or value is passed

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer containing the data to write |
| offset | `number` | buffer offset where bytes to write begin |
| length | `number` | number of bytes to write |
| position | `number` | file position used for writing. `-1` starts at the current file position; after bytes are written, that position advances by the written byte count. A value greater than or equal to `0` selects an explicit file position, and writing there does not change the current file position |
| callback | `function` | omitting callback makes the call return a `Promise` |

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
