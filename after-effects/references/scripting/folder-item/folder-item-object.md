# FolderItem object

app.project.FolderItem

### Description

In your Project panel, a folder is represented by the FolderItem object. Such a folder may hold a mix of item types — footage, compositions, solids — and nested folders too.

### Example

Suppose the project's second item is a FolderItem; the code below raises one alert per top-level item inside that folder, displaying each item's name.

```javascript
var secondItem = app.project.item(2);
if (!(secondItem instanceof FolderItem)) {
    alert("problem: second item is not a folder");
} else {
    for (var i = 1; i <= secondItem.numItems; i++) {
        alert("item number " + i + " within the folder is named " + secondItem.item(i).name);
    }
}
```
