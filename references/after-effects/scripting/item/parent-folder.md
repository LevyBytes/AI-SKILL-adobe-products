# Item.parentFolder

app.project.item(index).parentFolder

### Description

The FolderItem object representing the folder this item lives in. When the item sits at the project's top level, that folder is the project's root folder (app.project.rootFolder). Create a fresh folder with ItemCollection.addFolder() and assign it here to relocate items into the new folder.

### Type

FolderItem object; read/write.

### Example

The script below makes a fresh FolderItem in the Project panel and shifts compositions into it.

```javascript
//create a new FolderItem in project, with name "comps"
var compFolder = app.project.items.addFolder("comps");

//move all compositions into new folder by setting
//compItem's parentFolder to "comps" folder
for (var i = 1; i <= app.project.numItems; i++){
    if (app.project.item(i) instanceof CompItem) {
        app.project.item(i).parentFolder = compFolder;
    }
}
```
