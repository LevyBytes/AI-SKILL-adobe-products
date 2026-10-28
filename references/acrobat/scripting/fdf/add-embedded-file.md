# addEmbeddedFile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Appends the named file onto the tail of the FDF file's array of embedded files. According to nSaveOption, whoever opens the FDF file is directed to save the embedded file or files. A PDF embedded file is opened and shown; an FDF embedded file is opened for processing.

Support for FDF files that carry embedded files dates back to Acrobat 4.05. Picture PDF files hosted on an HTTP server where you would rather the user click to download and keep the file than view it inside the browser — that is one use for embedding them. These embedded files bear no connection to whatever files accompany a forms-data set stored in an FDF file.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | (optional) A path that is absolute and device-independent, pointing at a file on the user's local disk. Leave it out and the user gets asked to find a file. |
| nSaveOption | (optional) Sets out, for whoever opens this FDF file, how the embedded file is offered to them, the location it is written to, and whether it is removed once saved. The values are:<br><br>0: the Acrobat document folder receives the file. Under Acrobat 8, a confirmation dialog pops up first, and the user has to accept it before anything is written to disk.<br><br>1: (the default) a filename is requested from the user, and the embedded file is stored there.<br><br>2: leave this one unused.<br><br>3: the file is written automatically as a temporary one, then cleared away during cleanup (the moment Acrobat shuts down).<br><br>For Acrobat releases 4.05 through 5.05, a value of 0 or 3 makes Acrobat ask where the save folder lives, unless that preference is already on record. No matter which nSaveOption applies, once a PDF or FDF file has been saved Acrobat goes ahead and opens it. |

Returns

Raises an exception when the operation cannot be carried out; otherwise it gives back the count of embedded files the FDF file now holds.

Example: Spin up a new FDF, embed a PDF doc, then save.

```javascript
var fdf = app.newFDF();
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocs.fdf");
```
