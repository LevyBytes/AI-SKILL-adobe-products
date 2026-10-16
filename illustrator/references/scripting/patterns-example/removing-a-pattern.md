# Removing a pattern

```javascript
// Deletes the last pattern from the current document.
if (app.documents.length > 0) {
    var lastIndex = app.activeDocument.patterns.length - 1;

    var patternToRemove = app.activeDocument.patterns[lastIndex];
    var patternName = patternToRemove.name;
    patternToRemove.remove();

    // Note after removing Illustrator objects, set the variable that
    // referenced the removed object to null, since it is now invalid.
    patternToRemove = null;
}
```
