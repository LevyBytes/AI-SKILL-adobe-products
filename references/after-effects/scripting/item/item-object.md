# Item object

app.project.item(index)

app.project.items[index]

### Description

Anything capable of showing up in the Project panel is modeled by an Item object. Indexing begins at 1 for the first item.

Info

Item sits at the root of the hierarchy beneath AVItem object and FolderItem object, which themselves serve as bases for assorted other item types, so Item's attributes and methods carry over to every one of those item types.

### Example

Here the script pulls the project's second item and verifies it is a folder. From that folder it then deletes any top-level item that is not selected, and along the way it confirms that every item's parent points back at the correct folder.

```javascript
var myFolder = app.project.item(2);
if (!(myFolder instanceof FolderItem)) {
    alert("error: second item is not a folder");
} else {
    var numInFolder = myFolder.numItems;
    //Always run loops backwards when deleting things:
    for (var i = numInFolder; i >= 1; i--) {
        var curItem = myFolder.item(i);
        if (curItem.parentFolder !== myFolder) {
            alert("error within AE: the parentFolder is not set correctly");
        } else {
            if (!curItem.selected) {
                //found an unselected solid.
                curItem.remove();
            }
        }
    }
}
```
