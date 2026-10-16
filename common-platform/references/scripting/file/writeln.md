# File.writeln()

fileObj.writeln (text[, text...]...)

### Description

Writes the supplied text at the current file position, then adds a Line Feed sequence using the style set by the linefeed property. With encoded files, one Unicode character can require multiple bytes.

Warning

Avoid writing to files that another application or object already has open, because existing data can be overwritten.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | One or more strings to write; the arguments are joined together before writing. |

### Returns

Boolean. true on success.
