# getDataObjectContents

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Opens up the contents of the file attachment tied to a DataObject.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which Data object to fetch, given by its name. |
| bAllowAuth | (optional) Its default is false. Set it to true and a dialog box gathers the user's authorization. Such authorization may be needed when encryptForRecipients encrypted the data object. The bAllowAuth flag being true is what lets authorization dialog boxes appear. |

Returns

ReadStream object

Whenever any one of the conditions below holds for an embedded file attachment, the method aborts and a NotAllowedError is raised on the attempt to read that attachment's content (every match on a file name extension ignores case):

An attachment with the extension .SWF is rejected. A legitimate SWF application or module in a Rich Media Annotation or PDF Portfolio navigator could otherwise load a malicious SWF through those attachment bytes.

Note

Should you lean on the Data.MIMEType property to test whether a Data object stands for a .SWF file, bear in mind that application/x-shockwave-flash is the MIME type carried by .SWF files.

A “.GIF”, “.JPG”, “.JPEG”, or “.PNG” extension is carried by the attachment, yet its leading three content bytes spell out a .SWF file's header signature (“FWS” or “CWS”). This safeguard exists because the very same ActionScriptflash.display.Loader class load() method that loads GIF, JPEG, and PNG images is equally capable of loading a SWF file. Rename a malicious SWF file's extension to one of those image types and the SWF could end up loaded.

Related objects, properties, and methods are dataObjects, getDataObject, openDataObject, createDataObject, importDataObject, setDataObjectContents, and removeDataObject, and the data object.

Example: This snippet belongs to a circulating memo. A PDF file makes the rounds among the people on an email list. Each recipient types in a budget figure, then passes the document along to whoever comes next on the list. Just before the document goes out, that budget number gets tacked onto an embedded tab-delimited document, budget.xls, which is attached to this document. Once the document reaches the final recipient, that person can open the budget.xls attachment in a spreadsheet application and review all the budget numbers.

```javascript
// Get the name and department of the current recipient
var firstName = this.getField("Name.First").value;
var lastName =  this.getField("Name.Last").value;
var deptName =  this.getField("Dept.Name").value;
// Get the budget number
var deptBudget =  this.getField("Dept.Budget").value;
if ( app.viewerVersion >= 7 ) {
    // Get the file stream object of the embedded file
    var oFile = this.getDataObjectContents("budget.xls");
    // Convert to a string
    var myBudget = util.stringFromStream(oFile, "utf-8");
    // Append current data to the end, using tabs to separate info
    var myBudget = myBudget + "\r\n" + firstName
        + "\t" + lastName + "\t" + deptName + "\t" + deptBudget;
    // Convert back to a file stream
    var oFile = util.streamFromString(myBudget, "utf-8");
    // Now "overwrite" budget.xls
    this.setDataObjectContents("budget.xls", oFile);
} else {
        app.alert("Acrobat 7.0 or later is required."

             + " Your budget data will not be included. "
            + "Will e-mail on to the next correspondent, sorry. "
            + "Send in your budget request using traditional methods.");
}
```

What follows in the code, though omitted here, stores the document and forwards it to the next name on the mailing list.

getDataObjectContents, setDataObjectContents, util. stringFromStream, and util. streamFromString are the calls this example draws on.
