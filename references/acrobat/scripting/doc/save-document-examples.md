# Saving and converting document examples

Example 1: the script outline below could run as a batch sequence. The premise: a PDF holding form fields is already open. Those fields have to be filled from a database, after which the document is saved.

The caller supplies the query statement and implemented form-population callback. Validate `customerID` for use as a filename and run in a context authorized for saving.

```javascript
function saveCustomerInvoice(doc, statement, populate) {
    var row = statement.getRow();
    populate(doc, row);
    doc.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");
}
```

Example 2: lean on newDoc and addField to build a form's layout on the fly, fill it from a database, and save.

Supply a validated customer record and a callback that lays out and populates the fields. This example saves the PDF; it does not print it.

```javascript
function createCustomerInvoice(row, populate) {
    var myDoc = app.newDoc();
    try {
        populate(myDoc, row);
        myDoc.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");
    } finally {
        myDoc.closeDoc(true);
    }
}
```

Example 3 (Acrobat 6.0)

Save the current document in rich text format:

```javascript
this.saveAs("/c/myDocs/myDoc.rtf", "com.adobe.acrobat.rtf");
```

For the roster of supported conversion ID strings, see fromPDFConverters.

Example 3 (Acrobat 7.0)

Write the document out to a WebDAV folder.

```javascript
this.saveAs({
    cPath: "http://www.example.com/WebDAV/myDoc.pdf",
    bPromptToOverwrite: true,
    cFS: "CHTTP"
});
```

Related: [Doc.saveAs](save-as.md).
