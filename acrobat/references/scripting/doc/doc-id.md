# docID

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array | R |

An array of two hex-encoded binary strings. The first is a permanent identifier fixed from the file's contents when it was first created, and it survives incremental updates unchanged. The second is a shifting identifier drawn from the file's contents as of its most recent update. The optional ID entry in a PDF file's trailer dictionary defines both. (See the PDF Reference.)

For a usage example, see Example 6 (Acrobat 7.0).
