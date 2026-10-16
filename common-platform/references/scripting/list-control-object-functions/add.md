# add()

listObj.add(type, text[, index=listObj.numItems])

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

Inserts an item into the items array at the specified index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | String | Item kind to add. One of: - item: A simple selectable entry labeled with text. - separator: A separator. For DropDownList objects only. In this situation, the text value is ignored, and the method returns null. |
| text | String | Localizable label text for the item. |
| index | Number | Optional. Index in the current item list after which the new item is inserted. If omitted, or if the value is greater than the existing list length, insertion happens at the end. |

### Returns

Returns an Item object when type = "item"; returns null when type = "separator".
