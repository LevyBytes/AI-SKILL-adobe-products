# Socket.read()

socketObj.read([count=0]);

### Description

Reads no more than the requested character count from the connection, waiting when needed.

CR characters are skipped unless the encoding is BINARY.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| count | Number | Optional. The number of characters to read. If negative, the call is equivalent to readln(). Default is 0. |

### Returns

A String containing at most the requested character count, or whatever was read before closure or timeout occurred.
