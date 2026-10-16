# write(fd, buffer, offset, length, position, callback)

Writes chunked data through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` when the file descriptor is not valid
- `Error` when an argument uses an invalid format or value

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer that supplies the bytes to be written |
| offset | `number` | buffer offset where writing starts |
| length | `number` | number of bytes to write |
| position | `number` | target file position for the write. if -1, writing begins at the current file position. after bytes are written, the current file position advances by the written byte count. a value greater than or equal to 0 chooses that file position for the write. after that write completes, the current file position is unchanged |
| callback | `function` | leaving this argument out makes the call use a Promise result |

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
