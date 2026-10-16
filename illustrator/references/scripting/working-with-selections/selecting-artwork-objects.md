# Selecting artwork objects

Set an art object's selected property when the script needs to select that object.

After a document selection is made, the chosen objects are kept in the document's selection property. This retrieves the selection:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
```

The selection property can contain an array of any art-object type, depending on the current selection. To read or change properties on selected art items, first retrieve the individual array entries. Use the typename property to determine the object's type.

This sample retrieves the first array entry and then shows the type value:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
Set topObject = selectedObjects(0)
MsgBox(topObject.Typename)
```

When a script runs from the Illustrator Scripts menu (File > Scripts), MsgBox does not show a dialog.

In a selection array, the first entry is the selected object most recently added to the page, not the object selected most recently.
