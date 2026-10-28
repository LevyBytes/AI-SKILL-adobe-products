# 5. Write Your ExtendScript Code

ExtendScript differs from client-side JavaScript because it can work directly with host application functionality, including opening, editing, and exporting documents, along with almost anything else available in the host application.

This example defines a function that opens a single file in the host application. Replace the sample file name and path with a file that exists on your local system.

```javascript
function openDocument() {
  var fileRef = new File("~/Downloads/myFile.jpg");
  var docRef = app.open(fileRef);
}
```

When client-side JavaScript invokes `csInterface.evalScript("openDocument()")`, it calls this `openDocument()` helper function.
