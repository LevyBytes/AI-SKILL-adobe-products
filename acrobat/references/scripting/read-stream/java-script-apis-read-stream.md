# JavaScript APIs - ReadStream

A ReadStream is an object literal standing in for a stream of data. One method on it lets you read that data stream.

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| read | nBytes | String | You hand the read method a byte count, and it hands back a hex-encoded string carrying the stream's data. Reading consumes the stream, and once the end is reached read yields a zero-length string to signal it. |
