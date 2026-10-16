# Accessing and referencing objects — Obtaining objects from collections

In most cases, a script gets a reference to a particular object by moving through the containment hierarchy. This example stores a reference to the first PathItem in the active document's second layer in the myPath variable:

```vbscript
Set myPath = appRef.ActiveDocument.Layers(2).PathItems(1)
```

These scripts show object references made through a document:

```vbscript
Set documentRef = appRef.ActiveDocument

Set pageItemRef = documentRef.PageItems(1)
```

Because the next script refers to a layer, pageItemRef is not guaranteed to point at the same object as in the preceding script:

```vbscript
Set documentRef = appRef.ActiveDocument
Set pageItemRef = documentRef.Layers(1).PageItems(1)
```

For object collections, VBScript indexing begins at 1. VBScript can still let you choose whether arrays begin at index 1 or index 0. To learn how to set the array index origin, see a VBScript textbook or tutorial.
