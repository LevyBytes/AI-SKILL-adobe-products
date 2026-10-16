# readFileIntoStream

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 10.0 | No | No | All |

Pulls an external file into a JavaScript stream, optionally base64-encodes it, and hands back the data as a base64-encoded stream.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | (optional) A device-independent path pointing at any file on the user's hard drive. Either an absolute path or one relative to the current document is accepted. Leave it out and the File Open dialog appears so the user can pick the file. When you do supply cDIPath, the method runs only in privileged context — during a batch or console event, or while the document carries a certificate trusted to run "embedded high privileged JavaScript". |
| bEncodeBase64 | (optional) When true, the file content is base64-encoded. |

Returns

The File content delivered as a ReadStream object, optionally base 64-encoded.

Example: Suppose this document holds a text field named myField. The snippet pulls the contents of file c:/data/myData.txt into a ReadStream object, turns that into a string, and shows it inside the multiline text field.

```javascript
var rStream = util.readFileIntoStream("/c/data/myData.txt");
var cFile = util.stringFromStream(rStream);
this.getField("myTextField").value = cFile;
```
