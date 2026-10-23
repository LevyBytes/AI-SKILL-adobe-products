# Accessing and referencing objects - Working with selections

After a document selection is made, the chosen objects live in the document's selection property. This retrieves every selected object from the active document:

```javascript
var selectedObjects = app.activeDocument.selection;
```

The selection property may contain an array made up of whatever art-object types are currently selected. Before reading or changing properties on the selected artwork, pull out the separate array entries. Check an object's type through the typename property.

This example reads the first array entry and then reports its object type:

```javascript
var topObject = app.activeDocument.selection[0];
alert(topObject.typename)
```

In a selection array, the first entry is the selected object most recently placed on the page, rather than the object selected last.
