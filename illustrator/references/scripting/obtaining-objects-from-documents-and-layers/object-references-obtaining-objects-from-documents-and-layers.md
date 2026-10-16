# Object references — Obtaining objects from documents and layers

This script addresses an object through the document:

```applescript
-- Get reference for first page item of document 1
tell application "Adobe Illustrator"
    set pageItemRef to page item 1 of document 1
end tell
```

In the next script, pageItemRef may refer to a different object than the prior script returned, because this reference includes a layer:

```applescript
-- Get reference for first page item of layer 1 of document 1
tell application "Adobe Illustrator"
    set pageItemRef to page item 1 of layer 1 of document 1
end tell
```
