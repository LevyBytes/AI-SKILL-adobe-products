# Socket.write()

socketObj.write(text[, text...]);

### Description

Joins every argument into one string and writes that string to the connection.

CRLF sequences are written as LFs except when BINARY encoding is active.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String. | Any number of string values. All arguments are concatenated to form the string to be written. |

### Returns

Boolean. true on success.
