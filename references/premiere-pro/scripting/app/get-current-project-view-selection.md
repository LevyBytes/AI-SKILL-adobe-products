# app.getCurrentProjectViewSelection()

app.getCurrentProjectViewSelection()

### Description

Provides the ProjectItems selected in the currently active project view as an array.

### Parameters

None.

### Returns

ProjectItems array; null can be returned.

### Example

```javascript
var selectedItems = app.getCurrentProjectViewSelection();
if (selectedItems){
    var firstOne = selectedItems[0];
} else {
    // No projectItems selected.
}
```
