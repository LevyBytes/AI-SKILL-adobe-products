# Using tags

```javascript
// Finds the tags associated with the selected art item,
// show names and values in a separate document

if ( app.documents.length > 0 ) {
    doc = app.activeDocument;

    if ( doc.selection.length > 0 ) {
        for ( i = 0; i < selection.length; i++ ) {
            selectedArt = selection[0];
            tagList = selectedArt.tags;

            if (tagList.length == 0) {
                var tempTag = tagList.add();
                tempTag.name = "OneWord";
                tempTag.value = "anything you want";
            }

            // Create a document and add a line of text per tag
            reportDocument = app.documents.add();
            top_offset = 400;

            for ( i = 0; i < tagList.length; i++ ) {
                tagText = tagList[i].value;
                newItem = reportDocument.textFrames.add();
                newItem.contents = "Tag: (" + tagList[i].name + " , " + tagText + ")";
                newItem.position = Array(100, top_offset);
                newItem.textRange.size = 24;
                top_offset = top_offset - 20;
            }
        }
    }
}
```
