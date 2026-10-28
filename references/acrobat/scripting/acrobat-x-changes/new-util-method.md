# New util method

Acrobat X added `util.readFileIntoStream` to read an external file as a `ReadStream`. Base64 encoding is optional through `bEncodeBase64`.

Open the [readFileIntoStream contract](../util/read-file-into-stream.md) before use. Omitting `cDIPath` opens a file picker; supplying it requires privileged execution through a batch or console event, or a document certificate trusted for embedded high privileged JavaScript.
