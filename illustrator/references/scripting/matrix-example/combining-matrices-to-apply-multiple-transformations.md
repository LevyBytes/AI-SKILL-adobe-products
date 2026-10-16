# Combining matrices to apply multiple transformations

When objects need several transformations, using the matrix suite is more efficient than applying each transformation separately. This script shows how multiple matrices can be combined.

```javascript
// Tranforms all art in a document using translation and rotation matrices,
// moves art half an inch to the right and 1.5 inches up on the page
if (app.documents.length > 0) {
    var moveMatrix = app.getTranslationMatrix(0.5, 1.5);

    // Add a rotation to the translation, 10 degrees counter clockwise
    var totalMatrix = concatenateRotationMatrix(moveMatrix, 10);

    // apply the transformation to all art in the document
    var doc = app.activeDocument;
    for (var i = 0; i < doc.pageItems.length; i++) {
        doc.pageItems[i].transform(totalMatrix);
    }
}
```
