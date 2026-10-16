# Opening documents with app.openDoc

Example 1: This example opens a second document, drops a prompt message into a text field, places the focus there, and then shuts the current document.

```javascript
var otherDoc = app.openDoc("/c/temp/myDoc.pdf");
otherDoc.getField("name").value="Enter your name here: "
otherDoc.getField("name").setFocus();
this.closeDoc();
```

The same example as above, only now written with a relative path.

```javascript
var otherDoc = app.openDoc("myDoc.pdf", this);
otherDoc.getField("name").value="Enter your name here: "
otherDoc.getField("name").setFocus();
this.closeDoc();
```

The Doc closeDoc method and the Field object setFocus method are both used by this example.

Example 2: Take an HTML document sitting on the user's hard drive and turn it into a PDF.

```javascript
try {
    app.openDoc("/c/myWeb/myHomePage.html");
} catch (e) {};
```

Example 3 (Acrobat 7.0)

Open a hidden PDF document, extract what you need from it, then shut it.

```javascript
oDoc = app.openDoc({
    cPath:"/C/myDocs/myInfo.pdf",
    bHidden: true
});
var v = oDoc.getField("myTextField").value;
this.getField("yourTextField").value = v;
oDoc.closeDoc();
```

Example 4 (Acrobat 7.0)

Open a non-PDF file by converting it into a PDF document. Running the script below from the console works fine.

```javascript
app.openDoc({
    cPath: "/c/temp/myPic.jpg",
    bUseConv: true
})
```

Example 5 (Acrobat 7.0)

Open a file off a WebDAV server. Whatever path you give the app.openDoc method must be escaped first.

```javascript
var myURL = encodeURI("http://www.example.com/My Folder/ComDoc.pdf");
app.openDoc({cPath: myURL, cFS: "CHTTP" });
```

See also app. browseForDoc.

Example 6 (Acrobat 8.0)

Open a document and jump to a named destination.

```javascript
app.openDoc({ cPath: "/c/temp/myDoc.pdf", cDest: "myDest" });
```

On versions before 8.0, the document has to be disclosed for that jump to work at all. See the example following gotoNamedDest.

Related: [app.openDoc](open-doc.md).
