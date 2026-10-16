# openFDF

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Builds a new FDF object by opening the file named. That FDF object carries methods and properties for working on the data the file holds.

Note

Availability of this method is limited to batch, console, and application initialization events. See also Privileged context.

Parameters

cDIPath

The device-independent path to the file to be opened.


Returns

What comes back is the FDF object tied to the FDF file just opened.

Example: Build an FDF file that carries an embedded PDF inside it.

```javascript
var fdf = app.newFDF();
fdf.addEmbeddedFile( "/c/myPDFs/myFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" ); // save and close this FDF

// Now open the FDF file and embed another PDF doc.
var fdf = app.openFDF( "/c/myFDFs/myFile.fdf" );
fdf.addEmbeddedFile( "/c/myPDFs/myOtherFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" ); // save and close this FDF
```

For a further usage sample, consult the signatureSign method on the FDF object.
