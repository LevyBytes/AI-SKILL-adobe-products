# openDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Hands back the Doc of a PDF that sits as an embedded data object — an attachment — inside the document this method runs against.

Rather than returning a Doc, the method can throw an exception whenever any of these hold true:

The document this method runs against lacks the embedded data object asked for.

What the data object holds is not a PDF document.

Permissions bar opening attachments by way of JavaScript.

Once you no longer need the document, close it with closeDoc.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the data object. |

A data object's name is a property carried by the Data object. The object picks up its name at embed time — the Acrobat UI assigns it automatically, or the JavaScript methods createDataObject and importDataObject assign it programmatically.

Returns

Doc or an exception is thrown.

Kindred objects, properties, and methods include dataObjects, getDataObjectContents, setDataObjectContents, createDataObject, and importDataObject, plus the data object.

Example: Crack open a PDF attachment, then lift its form data out.

```javascript
var oDoc = this.openDataObject("myAttachment");
try {
    var myField = this.getField("myTextField");
    // Get the value of "yourTextField" in PDF attachment
    var yourField = oDoc.getField("yourTextField");
    // View this value in "myTextField"
    myField.value = yourField.value;
    oDoc.closeDoc();
} catch(e) { app.alert("Operation failed");}
```

See also Example 5 (Acrobat 7.0) following the submitForm method.
