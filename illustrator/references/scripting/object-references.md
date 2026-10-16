# Object references

AppleScript receives Illustrator object references either by index position or by name. The next reference targets layer 2's first path

```applescript
path item 1 of layer 2 of document 1
```

Creating or deleting other objects may change an object's index position. For example, when a new path item is added on layer 2, it becomes path item 1 of layer 2 of document 1.

That new object moves the original path item to index position 2. As a result, later references to path item 1 of layer 2 of document 1 address the new object. This indexing behavior gives the lowest index number to the object most recently worked on.

Review this sample script:

```applescript
-- Make 2 new objects and try to select both
tell application "Adobe Illustrator"
    set newDocument to make new document
    set rectPath to make new rectangle in newDocument
    set starPath to make new star in newDocument
    set selection of newDocument to {rectPath, starPath}
end tell
```

This script is meant to select both the rectangle and the star, but it selects only the star. Run it with the Event Log window open to inspect the references Illustrator returns after each make command. Open Event Log from the bottom of the Script Editor window. Illustrator reports path item 1 of layer 1 of document 1 for both commands, so the final line evaluates as

```applescript
set selection of document 1 to {path item 1 of layer 1 of document 1,
    path item 1 of layer 1 of document 1}
```

Name-based references avoid the problem:

```applescript
tell application "Adobe Illustrator"
    set newDocument to make new document
    make new rectangle in newDocument with properties {name:"rectangle"}
    make new star in newDocument with properties {name:"star"}
    set selection of newDocument to
    {path item "rectangle" of newDocument,
    path item "star" of newDocument}
end tell
```

This example shows why AppleScript scripts need unique object identification. For objects you will access later, assign names or variables; index-based access does not guarantee that the object you retrieve is the one you expected.
