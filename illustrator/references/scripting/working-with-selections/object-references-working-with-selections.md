# Object references — Working with selections

After someone selects items in a document, those items are available through the document's selection property. Use this AppleScript to retrieve the selection:

```applescript
tell application "Adobe Illustrator"
    set myDoc to current document
    set selectedObjects to selection of myDoc
end tell
```

The selection property may hold an array containing any art-object type, depending on the current selection. Before reading or changing selected art-item properties, pull the separate array entries. Check an object's type through the class property.

The next AppleScript reads the first array entry and reports its class:

```applescript
tell application "Adobe Illustrator"
    set myDoc to current document
    set selectedObjects to selection of myDoc
    set topObject to item 1 of selectedObjects
    display dialog (class of topObject)
end tell
```

In a selection array, the first entry is the selected item most recently added to the page, rather than the item selected most recently.
