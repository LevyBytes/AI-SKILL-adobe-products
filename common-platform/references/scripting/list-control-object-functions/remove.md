# remove()

containerObj.remove(index)

containerObj.remove(text)

containerObj.remove(child)

### Description

- For containers (Panel, Group): removes the selected child control from the children array owned by the container.
- For ListBox, DropDownList, or TreeView objects: deletes the selected item from this object's items array.

If the item is absent, no error is generated.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index, text, child | Number of String or Control object | Item or child being removed, supplied as a 0-based index, text value, or control object. |

### Returns

Nothing
