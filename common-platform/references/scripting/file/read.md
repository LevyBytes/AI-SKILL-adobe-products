# File.read()

fileObj.read([chars])

### Description

Reads file contents beginning at the current position.

The result is a string with no more than the requested number of characters.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| chars | Number | Optional. Integer count of characters to read. Without this argument, reading continues from the current position through the end of the file. Encoded files may require multiple bytes for one Unicode character. |

### Returns

String
