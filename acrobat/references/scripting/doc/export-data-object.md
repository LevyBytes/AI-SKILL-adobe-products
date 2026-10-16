# exportDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Pulls the named data object out to a file outside the document.

Kindred objects, properties, and methods are dataObjects, openDataObject, createDataObject, removeDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, and the data object.

Note

From Acrobat 6.0 on, supplying a non-null cDIPath parameter triggers a NotAllowedError (refer to Error object) exception and the method fails.

Should cDIPath be left out of the call, a file selection dialog box appears so the user can choose where to save the embedded data object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which data object, by name, gets pulled out. |
| cDIPath | (optional) A device-independent path that the data object is extracted to. This path can be absolute or taken relative to the current document. Omit it and the user is asked to name a save location. - (Acrobat 6.0) Support for this parameter has ended and it should be avoided. Review the security notes above. |
| bAllowAuth | (optional, Acrobat 6.0) When true, a dialog box collects the user’s authorization. Authorization can be needed if the encryptForRecipients method had encrypted the data object. Setting bAllowAuth to true is what permits authorization dialog boxes. The default value is false. |
| nLaunch | (optional, Acrobat 6.0) nLaunch decides whether the file is launched, that is opened, once saved. A launch can mean firing up an external application when the file is not a PDF. The values of nLaunch run as follows: - A value of 0 keeps the file from launching after the save. - A value of 1 saves the file and then launches it. Launching raises a security alert warning for the user when the file is not a PDF. The user is asked for a save path. - A value of 2 saves the file and then launches it. Launching raises a security alert warning for the user when the file is not a PDF. Here a temporary path serves and the user is not asked for a save path. Acrobat deletes the temporary file it creates when the application shuts down. The default value is 0. |

Example 1: Ask the user where, and to which file, the extraction should go.

```javascript
this.exportDataObject("MyData");
```

Example 2 (Acrobat 6.0)

Pull out a PDF document and open it up in the viewer.

```javascript
this.exportDataObject({ cName: "MyPDF.pdf", nLaunch: 2 });
```

Example 3: For a file attachment brought in through the importDataObject method, the cName parameter of that method sets the value of the attachment’s Data.name property. Attaching a file through the UI, by contrast, names it automatically. Such attachments pick up the running names “Untitled Object”, “Untitled Object 2”, “Untitled Object 3”, and so on.

Exporting a file attached via the UI means first locating the attachment’s name. The code below exports whichever file the UI attached last, if there is one.

```javascript
var d = this.dataObjects;
if ( d == null ) console.println("No file attachments");
else {
    for ( var i = d.length - 1; i>=0; i--)
        if ( d[i].name.indexOf("Untitled Object") != -1 ) break;
    if ( i != -1 ) this.exportDataObject(d[i].name);
    else console.println("No attachment was embedded by UI");
}
```
