# save

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Writes the FDF object out to a file; a save is performed every time. Once saved, the file is closed and the FDF object stops holding a valid object reference.

The close method, covered elsewhere, will also close an FDF file.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | The device-independent path of the file to be saved. - cDIPath must be a safe path (see Safe path) and must have an extension of .fdf. |

Returns

Throws an exception if there is an error.

Example: Create a new FDF, embed a PDF doc, then save.

```javascript
var fdf = app.newFDF()
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocs.fdf");
```
