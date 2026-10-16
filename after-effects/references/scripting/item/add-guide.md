# Item.addGuide()

app.project.item(index).addGuide(orientationType, position)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Builds a fresh guide and drops it into the Item's guides object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| orientationType | Integer | 0 for a horizontal guide, 1 for a vertical guide. Any other value defaults to horizontal. |
| position | Integer | The X or Y coordinate position of the guide in pixels, depending on its orientationType. |

### Returns

Integer; the index of the newly-created guide.

### Example

Drops a vertical guide onto the X axis at 500 pixels for a project's activeItem.

```javascript
app.project.activeItem.addGuide(1, 500);
```
