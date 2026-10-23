# Your first Illustrator script - Adding features to "Hello World"

Next, create another script that edits the Illustrator document produced by the first script. The second script demonstrates these tasks:

- Access the active document.
- Read the active document's width.
- Set the text frame width to the document width.

If the Illustrator document has already been closed, run the first script again to create a new document.

Use this sequence:

1. In Script Editor, choose File > New so a new script is created.

```applescript
tell application "Adobe Illustrator"

-- current document is always the active document
set docRef to the current document
set docWidth to the width of docRef

-- resize the text frame to match the page width
set width of text frame 1 of docRef to docWidth

-- alternatively, one can reference the item directly, as follows:
set width of text frame 1 of current document to docWidth

end tell
```

3. Run the script.

The next script modifies the Illustrator document produced by your first script. It demonstrates how to:

- Access the active document.
- Read the active document width.
- Set the text frame width to the document's width.

If the Illustrator document was closed, run the first script again to create a new one.

Follow these steps:

1. In Script Editor, start a new script with File > New.

```javascript
var docRef = app.activeDocument;
var docWidth = docRef.width
var frameRef = docRef.textFrames[0]
frameRef.width = docWidth
```

3. Run the script.

The next script modifies the Illustrator document produced by the first script. This second script demonstrates these operations:

- Access the active document.
- Read the active document's width.
- Set the text frame width to the document width.

Run the first script again if the Illustrator document from that earlier step has already been closed.

Run this code:

```vbscript
Set appRef = CreateObject("Illustrator.Application")
'Get the active document
Set documentRef = appRef.ActiveDocument
Set sampleText = documentRef.TextFrames(1)
' Resize the TextFrame item to match the document width
sampleText.Width = documentRef.Width
sampleText.Left = 0
```

2. Execute the script.
