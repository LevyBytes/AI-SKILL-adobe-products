# File.encoding

fileObj.encoding

### Description

Gets or assigns the encoding for later read/write operations. Choose one of the constants in File- and Folder-supported encoding names.

Unrecognized values fall back to the system default encoding.

"BINARY" is a special encoder for reading binary files. It stores each file byte as one Unicode character without applying another encoding. When writing, the lower byte of each Unicode character is written as one byte.

### Type

String
