# Form submission examples

Example 1: Submit the form to the server.

```javascript
this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF");
```

Example 2: Submit selected form fields to a server-side script as FDF.

```javascript
var aSubmitFields = new Array( "name", "id", "score" );
this.submitForm({
    cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
    aFields: aSubmitFields,
    cSubmitAs: "FDF" // the default, not needed here
});
```

Example 3: Here is a quick way to submit an entire subtree at once. Handing "name" to the field parameter sends along "name.title ", "name.first ", "name.middle " and "name.last ".

```javascript
this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF",
    true, false, "name");
```

Example 4: Submit form as XFDF to a server-side script.

```javascript
this.submitForm({
    cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
    cSubmitAs: "XFDF"
});
```

Example 5 (Acrobat 7.0)

When a PDF holds multiple XFA forms as attachments, the script below pulls the XML data out of every attachment and joins it together. That merged data then gets submitted.

```javascript
var oParent = event.target;
var oDataObjects = oParent.dataObjects;
if (oDataObjects == null)
    app.alert("This form has no attachments!");
else {
    var nChildren = oDataObjects.length;
    var oFirstChild = oParent.openDataObject(oDataObjects[0].name);
    var oSubmitData = oFirstChild.xfa.data.nodes.item(0).clone(true);

     for (var iChild = 1; iChild < nChildren; iChild++) {
        var oNextChild = oParent.openDataObject(
            oDataObjects[iChild].name);

         oSubmitData.nodes.append(oNextChild.xfa.data.nodes.item(0));

         oNextChild.closeDoc();
    }
    oParent.submitForm({
    cURL: "http://www.example.com/cgi-bin/myCGI.pl#FDF",

     cSubmitAs: "XML",

     oXML: oSubmitData
    });
    oFirstChild.closeDoc();
}
```

Here, dataObjects and openDataObject are exercised alongside properties and methods belonging to the XFA object.

Example 6 (Acrobat 7.0)

Sends the active document out as a PDF. cPermID, cInstID and cUsageRights all come into play in this script.

```javascript
this.submitForm({
    cUrl: myURL,
    cSubmitAs: "PDF",
    cPermID: someDoc.docID[0],
    cInstID: someDoc.docID[1],
    cUsageRights: submitFormUsageRights.RMA });
```

Related: [Doc.submitForm](submit-form.md).
