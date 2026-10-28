# newFDF

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Builds a new FDF object holding no data.

Note

Availability of this method is limited to batch, console, and application initialization. Not available in Adobe Reader. See Privileged context.

Returns

A new FDF object.

Example: Build an FDF that has a PDF file embedded in it.

```javascript
var fdf = app.newFDF();
fdf.addEmbeddedFile( "/c/myPDFs/myFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" );
```

This example carries on after the description of app. openFDF.
