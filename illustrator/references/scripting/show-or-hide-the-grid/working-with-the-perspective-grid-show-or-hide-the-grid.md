# Working with the perspective grid - Show or hide the grid

The following AppleScript toggles Perspective Grid visibility through a script:

```applescript
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Display the perspective grid defined in the document
        show perspective grid
        --Hide the perspective grid defined in the document
        hide perspective grid
    end tell
end tell
```

Use this script to toggle the Perspective Grid from code:

```javascript
//Show the Perspective Grid defined in the document
app.activeDocument.showPerspectiveGrid();

//Hide the Perspective Grid defined in the document
mydoc.hidePerspectiveGrid();
```

Use this script to show or hide the Perspective Grid from VBScript:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document

Set docRef = appRef.Documents.Add()

Rem Show the Perspective Grid defined in the document
docRef.ShowPerspectiveGrid();

Rem Hide the Perspective Grid defined in the document
docRef.HidePerspectiveGrid();
```
