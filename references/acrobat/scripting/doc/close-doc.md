# closeDoc

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | Requires save rights |

Shuts the document.

With Adobe Reader 5.1 and beyond, the method is permitted at all times:

Where the document was modified and no Document Save Rights exist, it shuts with no warning and the changes vanish.

Where Document Save Rights exist, the user can choose to save the modified file.

Note

Browsers do not support this command.

Use this method with care, since it abruptly alters the document state and can disturb any JavaScript still running after the close. Firing it off a Page event or Document event might make the application act oddly.

Before Acrobat 7.0, a document that shuts itself by running this.closeDoc halts whatever script comes after it. Under Acrobat 7.0, the script is permitted to keep going and finish on its own. Even so, referencing the Doc of the now-closed document raises an exception.

Parameters

| Parameter | Description |
| --- | --- |
| bNoSave | (optional) A Boolean saying whether to shut the document without saving: - When false (the default), the user is asked to save the document if it was modified. - When true, the document shuts with no prompt and no save, even after modification. Use this feature warily, because it can lose data without the user's go-ahead. |

Example 1: Working from the console, shut every open document.

```javascript
var d = app.activeDocs;
for( var i in d ) d[i].closeDoc();
```

You can run the code below as a mouse-up action out of an open document. It shuts all disclosed open documents. So that the code's own execution isn't cut short abruptly, it deliberately leaves the active document for last.

```javascript
var d = app.activeDocs;
for( var i in d )
    if( d[i] != this ) d[i].closeDoc();
if ( this.disclosed ) this.closeDoc();
```

Example 2: Spin up three test files in a row and save them into a directory. Because saveAs carries a security restriction, this code has to run in the console.

```javascript
var myDoc = app.newDoc();
for (var i=0; i < 3; i++) {
    myDoc.info.Title = "Test File " + i;
    myDoc.saveAs("/c/temp/test"+i+".pdf");
}
myDoc.closeDoc(true);
```

For yet another closeDoc illustration, refer to saveAs.
