# numEmbeddedFiles

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All but Reader | Integer | R |

How many files sit embedded inside the FDF file. Provided the FDF object points at a valid FDF file, nothing will be thrown.

The addEmbeddedFile method is how a file gets embedded within an FDF file. Example: Spin up a fresh FDF object, embed a PDF doc, save the FDF, reopen it, then tally the embedded files.

```javascript
var fdf = app.newFDF();
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocWrapper.fdf");
fdf = app.openFDF("/c/temp/myDocWrapper.fdf");
console.println("The number of embedded files = "
    + fdf.numEmbeddedFiles);
fdf.close();
```
