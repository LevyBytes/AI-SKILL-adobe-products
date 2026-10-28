# Placed-item selection toggle

```javascript
// Toggles the selection state of all placed items.
if (app.documents.length > 0) {
    for (i = 0; i < app.activeDocument.placedItems.length; i++) {
        var placedArt = app.activeDocument.placedItems[i];
        placedArt.selected = !(placedArt.selected);
    }
}
```
