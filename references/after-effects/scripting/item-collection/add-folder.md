# ItemCollection.addFolder()

app.project.items.addFolder(name)

### Description

Builds a fresh FolderItem object, adds it to this collection, and returns it.

When the ItemCollection is the project's or the root folder's, the new folder's parentFolder becomes the root folder.

When the ItemCollection belongs to some other folder, the new folder's parentFolder is set to that FolderItem. Assign the Item.parentFolder attribute to move items into the folder.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the folder. |

### Returns

FolderItem object.

### Example

The script below makes a fresh FolderItem in the Project panel and shifts compositions into it.

```javascript
//create a new FolderItem in project, with name "comps"
var compFolder = app.project.items.addFolder("comps");
//move all compositions into new folder by setting
//comp Item's parentFolder to "comps" folder
for (var i = 1; i <= app.project.numItems; i++) {
    if (app.project.item(i) instanceof CompItem) {
        app.project.item(i).parentFolder = compFolder;
    }
}
```
