# File.seek()

fileObj.seek(pos[, mode=0])

### Description

Moves to the requested file position. The resulting position must stay within 0 and the current file size.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pos | Number | Byte offset for the new current position, measured from the start, current position, or end according to mode. |
| mode | Number | Optional. Seek mode. Use 0 for an absolute position, where pos=0 refers to the first byte; this is the default. Use 1 to seek relative to the current position. Use 2 to seek backward from the end of the file. |

### Returns

Boolean. true when the position changed.
