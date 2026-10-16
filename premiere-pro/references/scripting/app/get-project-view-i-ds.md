# app.getProjectViewIDs()

app.getProjectViewIDs()

### Description

Lists view IDs for the open views tied to any project.

### Parameters

None.

### Returns

Array of view IDs; null is possible.

### Example

```javascript
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs){
    var firstOne = allViewIDs[0];
} else {
    // No views open.
}
```
