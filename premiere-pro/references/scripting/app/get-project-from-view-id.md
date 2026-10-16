# app.getProjectFromViewID()

app.getProjectFromViewID()

### Description

Gets the Project connected to the supplied View ID.

### Parameters

View ID previously obtained with getProjectViewIDs.

### Returns

Project object for the project linked to that View ID. Null can be returned.

### Example

```javascript
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs && allViewIDs.length){
    var firstOne = allViewIDs[0];
    if (firstOne !== undefined && firstOne !== null){
        var thisProject = app.getProjectFromViewID(firstOne);
        if (thisProject){
            var name = thisProject.name;
        } else {
            // no project associated with that view ID.
        }
    }
} else {
    // No views open.
}
```
