# readFileIntoStream

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 10.0 | No | No | All |

Reads an external file into a ReadStream. The content is base64-encoded only when bEncodeBase64 is true.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | (optional) A device-independent path pointing at any file on the user's hard drive. Either an absolute path or one relative to the current document is accepted. Leave it out and the File Open dialog appears so the user can pick the file. When you do supply cDIPath, the method runs only in privileged context, during a batch or console event, or while the document carries a certificate trusted to run "embedded high privileged JavaScript". |
| bEncodeBase64 | (optional) When true, the file content is base64-encoded. |

Returns

The File content delivered as a ReadStream object, optionally base 64-encoded.

Example: Create a multiline text field named myTextField in the current document. The snippet reads c:/data/myData.txt into a ReadStream, converts it to a string and displays it in that field.

```javascript
var rStream = util.readFileIntoStream("/c/data/myData.txt");
var cFile = util.stringFromStream(rStream);
this.getField("myTextField").value = cFile;
```
