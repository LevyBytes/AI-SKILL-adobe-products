# Rotate a text art item

```javascript
// Duplicates and rotates the selected text art item 5 times
if ( app.documents.length > 0 ) {
    selectedItems = app.activeDocument.selection;

    // make sure something is selected.
    if ( selectedItems.length > 0 ) {

        // The selection must be a text art item
        if ( selectedItems[0].typename == "TextFrame" ) {

            // Get the parent of the text art so new text art items
            // can be inserted in the same group or layer
            dupSrc = selectedItems[0];
            textContainer = dupSrc.parent;

            // Create 5 new versions of the text art each rotated a bit
            for ( i = 1; i <= 5; i++ ) {
                dupText = dupSrc.duplicate( textContainer, ElementPlacement.PLACEATEND );
                dupText.rotate(180 * i/6);
            }
        }
    }
}
```
